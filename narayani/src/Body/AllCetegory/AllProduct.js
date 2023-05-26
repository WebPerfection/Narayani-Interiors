import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import { Select } from "@chakra-ui/react";
export default function AllProduct() {
  const [products, setProducts] = useState("");
  const [filter,setFilter]=useState("")
  useEffect(() => {
   if(filter){
    axios
    .get(`https://azure-hen-cap.cyclic.app//getdata?category=${filter}`)
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err));
   }
   else{
    axios
    .get("https://azure-hen-cap.cyclic.app//getdata")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err));
   }
  },[filter]);
  return (
    <>
      <Navbar />
      <div>Hello world</div>
      <div className="pro-main">
        <Select placeholder="Select Category" w="200px" m="auto" onChange={e=>setFilter(e.target.value)}>
          <option value="Room">Room</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Shop">Shop</option>
        </Select>
        {products && <ProductList products={products} />}
      </div>
      <Footer />
    </>
  );
}
