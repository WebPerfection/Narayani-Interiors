import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import ReactPaginate from 'react-paginate';

import "./Allproduct.css"
import {
  Select,
  useDisclosure,
  ModalOverlay,
  Button,
  Modal,
  ModalFooter,
  Input,
  FormLabel,
  FormControl,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ChakraBaseProvider,
  ChakraProvider,
} from "@chakra-ui/react";
import Loading from "../Loading/Loading";
import Content from "../Content/Slider/Content";
import TopImage from "../TopImage/TopImage";

export default function AllProduct() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [_length, setLength] = useState("");
  const [_width, setWidth] = useState("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showsort, setShowsort] = useState("")
  const [main,setMain]=useState("")
  const [loading, setLoading] = useState(true);
  window.scrollTo(0, 0);
  useEffect(() => {
    fetchData();
  }, [filter, currentPage]);

  const fetchData = () => {
    const apiUrl = filter
      ? `https://dull-lime-wombat-veil.cyclic.app/data?category=${filter}&page=${currentPage}`
      : `https://dull-lime-wombat-veil.cyclic.app/data?page=${currentPage}`;
    axios
      .get(apiUrl)
      .then((res) => {
        setProducts(res.data.uploads)
        setTotalPages(res.data.totalPages)
        setLoading(false)
      })
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    axios.get("https://dull-lime-wombat-veil.cyclic.app/main")
    .then((res)=>setMain(res.data))
    .catch(err=>console.log(err))
  },[])
  const sortFunction = () => {
    const apiUrl = filter
      ? `https://dull-lime-wombat-veil.cyclic.app/data?category=${filter}&length=${_length}&width=${_width}&page=${currentPage}`
      : `https://dull-lime-wombat-veil.cyclic.app/data?length=${_length}&width=${_width}&page=${currentPage}`;
    axios
      .get(apiUrl)
      .then((res) => {
        setProducts(res.data.uploads)
        setLoading(false)
      })
      .catch((err) => console.log(err));
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  useEffect(() => {
    if (_length && _width) {
      setShowsort(`size: ${_length} X ${_width}`)
    }
  }, [_length, _width])
  return (
    <>
      <Navbar />
      <TopImage/>
      <ChakraProvider>
      <div className="pro-main">
        <div className="Flex">
          <div
            className="Flex"
            style={{ width: "80%", justifyContent: "space-between", gap: '10px',padding:'20px 0px' }}
          >
            <div>
              <Select
                id="size-btn"
                style={{
                  backgroundColor: "var(--text-gold)",
                  outline: "none",
                  boxShadow: "none",
                   // Hides the focus outline
                }}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setCurrentPage(1);
                  setLoading(true);
                }}
                optionStyles={{
                  color: "gold",
                  backgroundColor:'var(--text-gold)'// Change this color value to your desired option color
                }}
              >
                 <option value="" disabled selected>Select a category</option>
                {main && main.map((el)=><option key={el._id} value={el.smname}>{el.smname}</option>)}
                
                
              </Select>

            </div>
            <div className="sort-bt">
              <Button id="size-btn" bg='var(--text-gold)' onClick={onOpen}>{showsort ? showsort : "Sort by size"}</Button>
            </div>
          </div>
        </div>
        {loading ? <Loading /> : products.length > 0 ? (
          <div className="product-body"><ProductList products={products} /></div>
        ) : (
          <h1>Data Not Found</h1>
        )}


        <div className="Flex" style={{ padding: '30px 0px' }}>
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
      </div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sort By Size</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Length Size </FormLabel>
              <Input
                ref={initialRef}
                placeholder="Length Size"
                onChange={(e) => setLength(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Width Size</FormLabel>
              <Input
                placeholder="Width Size"
                onChange={(e) => setWidth(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                sortFunction();
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </ChakraProvider>
      <Footer />
    </>
  );
}
