import React from 'react';


function DataList() {

  return (
    <div>
      <img src="/produk/baju.jpeg" alt="Gambar Baju" />
    </div>
  );
}

export default DataList;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function DataList() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('/api/data')
//       .then(response => {
//         setData(response.data.data);
//       })
//       .catch(error => console.error('Error:', error));
//   }, []); 

//   return (
//     <div>
//       <h1>Data dari API</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item[0]}> {/* Gunakan ID atau indeks unik */}
//             {item[0]} - {item[1]} - {item[2]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DataList;




// import React, { useState, useEffect } from "react";
// import {
//   Col,
//   Row,
//   Button,
//   Form,
//   Card,
// } from "react-bootstrap";
// import "../style/landingPage.css";
// import axios from "axios";

// const Content = () => {
//   // const url = "https://fakestoreapi.com/products";
//   // const [product, setProduct] = useState([]);
//   // const [searchTerm, setSearchTerm] = useState("");

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('get/product')
//       .then(response => {
//         setData(response.data.data);
//       })
//       .catch(error => console.error('Error:', error));
//   }, []); 

//   // useEffect(() => {
//   //   getDataProduct();
//   // }, []);

//   // const handleSearch = (e) => {
//   //   e.preventDefault();
//   //   const filteredProducts = product.filter((item) => {
//   //     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   //   });
//   //   setProduct(filteredProducts);
//   // };

//   return (
//     <div>
//       <div className="d-flex justify-content-center align-item-center cari-barang">
//         <Form inline onSubmit={handleSearch}>
//           <Row>
//             <Col xs="auto">
//               <Form.Control
//                 type="text"
//                 placeholder="Search"
//                 className="mr-sm-2"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </Col>
//             <Col xs="auto">
//               <Button type="submit">Cari</Button>
//             </Col>
//           </Row>
//         </Form>
//       </div>

//       <div className="row justify-content-center align-item-center daftar-barang">
//         {product.map((product) => (
//           <Card style={{ width: "18rem", margin: "15px", backgroundColor: "rgba(14, 48, 110, 0.6)" }} key={product.id}>
//             <Card.Img  variant="top" src={product.image} />
//             <Card.Body>
//               <Card.Title className="text-white">{product.title}</Card.Title>
//               <Card.Text className="text-white">{product.harga}</Card.Text>
//               <Button variant="primary">BUY</Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Content;
