import React, { useState, useEffect } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";
import "../style/landingPage.css";
import axios from "axios";

const HapusData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("get/product")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleDelete = (id_produk) => {
    axios
      .delete(`delete/product/${id_produk}`)
      .then((response) => {
        console.log("Produk berhasil dihapus!");
        // Ambil ulang data setelah penghapusan
        axios
          .get("get/product")
          .then((response) => {
            setData(response.data.data);
          })
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    // ...
    <div className="row justify-content-center align-item-center daftar-barang">
      {data.map((product) => (
        <Card
          style={{
            width: "18rem",
            margin: "15px",
            backgroundColor: "rgba(14, 48, 110, 0.6)",
          }}
          key={product[0]}
        >
          <Card.Img variant="top" src={product[2]} />
          <Card.Body>
            <Card.Title className="text-white">{product[1]}</Card.Title>
            <Card.Text className="text-white">Harga: {product[3]}</Card.Text>
            <Button variant="primary" onClick={() => handleDelete(product[0])}>
              DELETE
            </Button>
          </Card.Body>
        </Card>
      ))}
      <br></br>
    </div>
    // ...
  );
};

export default HapusData;
