import React, { useState, useEffect } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";
import "../style/landingPage.css";
import axios from "axios";
import KeranjangBelanja from "./Keranjang";

const ContentAdmin = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [productCounts, setProductCounts] = useState({});

  const addToCart = (product) => {
    setCart([...cart, product]);

    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [product.id]: (prevCounts[product.id] || 0) + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));

    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) - 1,
    }));
  };

  const buyAllProducts = () => {
    alert("Produk berhasil dibeli!");
    setCart([]);
    setProductCounts({});
  };

  useEffect(() => {
    axios
      .get("get/product")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center align-item-center cari-barang">
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Cari</Button>
            </Col>
          </Row>
        </Form>
      </div>

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
              <Button variant="primary" onClick={() => addToCart({ id: product[0], name: product[1], price: product[3] })}>
                Buy
              </Button>
            </Card.Body>
          </Card>
        ))}
        <br></br>
      </div>

      <KeranjangBelanja
        cart={cart}
        removeFromCart={removeFromCart}
        buyAllProducts={buyAllProducts}
        productCounts={productCounts}
      />
    </div>
  );
};

export default ContentAdmin;
