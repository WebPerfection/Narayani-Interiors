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
} from "@chakra-ui/react";
import Loading from "../Loading/Loading";

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
  const [showsort,setShowsort]=useState("")
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    fetchData();
  }, [filter, currentPage]);

  const fetchData = () => {
    const apiUrl = filter
      ? `https://azure-hen-cap.cyclic.app/data?category=${filter}&page=${currentPage}`
      : `https://azure-hen-cap.cyclic.app/data?page=${currentPage}`;
    axios
      .get(apiUrl)
      .then((res) => {
        setProducts(res.data.uploads)
        setTotalPages(res.data.totalPages)
        setLoading(false)
      })
      .catch((err) => console.log(err));
  };

  const sortFunction = () => {
    const apiUrl = filter
      ? `https://azure-hen-cap.cyclic.app/data?category=${filter}&length=${_length}&width=${_width}&page=${currentPage}`
      : `https://azure-hen-cap.cyclic.app/data?length=${_length}&width=${_width}&page=${currentPage}`;
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
useEffect(()=>{
  if(_length && _width){
  setShowsort(`size: ${_length} X ${_width}`)
}
},[_length,_width])
  return (
    <>
      <Navbar />
      <div>Hello world</div>
      <div className="pro-main">
        <div className="Flex">
          <div
            className="Flex"
            style={{ width: "80%", justifyContent: "space-between" }}
          >
            <div>
              <Select
                placeholder="Filter by Category"
                onChange={(e) => {
                  setFilter(e.target.value)
                  setCurrentPage(1)
                  setLoading(true)
                }}
              >
                <option value="Room">Room</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Shop">Shop</option>
              </Select>
            </div>
            <div className="sort-bt">
              <Button onClick={onOpen}>{showsort?showsort:"Sort by size"}</Button>
            </div>
          </div>
        </div>
        { loading ? <Loading/>: products.length > 0 ? (
          <ProductList products={products} />
        ) : (
         <h1>Data Not Found</h1> 
        )}

       
       <div className="Flex">
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

      <Footer />
    </>
  );
}
