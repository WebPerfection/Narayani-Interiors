import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
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

export default function AllProduct() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [_length, setLength] = useState("");
  const [_width, setWidth] = useState("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchData();
  }, [filter, currentPage]);

  const fetchData = () => {
    const apiUrl = filter
      ? `https://azure-hen-cap.cyclic.app/data?category=${filter}`
      : "https://azure-hen-cap.cyclic.app/data";
    axios
      .get(apiUrl)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  const sortFunction = () => {
    const apiUrl = filter
      ? `https://azure-hen-cap.cyclic.app/data?category=${filter}&length=${_length}&width=${_width}`
      : `https://azure-hen-cap.cyclic.app/data?length=${_length}&width=${_width}`;
    axios
      .get(apiUrl)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

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
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="Room">Room</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Shop">Shop</option>
              </Select>
            </div>
            <div className="sort-bt">
              <Button onClick={onOpen}>Sort by size</Button>
            </div>
          </div>
        </div>
        {currentProducts.length > 0 ? (
          <ProductList products={currentProducts} />
        ) : (
          <div>No products found.</div>
        )}

       
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
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
