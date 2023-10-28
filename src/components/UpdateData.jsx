import React, { useState, useEffect } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import "../style/landingPage.css";

const UpdateData = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({
    id_produk: "",
    nama: "",
    gambar: "",
    harga: "",
  });

  useEffect(() => {
    axios
      .get("/get/product")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleEdit = (product) => {
    setEditData({
      id_produk: product[0],
      nama: product[1],
      gambar: product[2],
      harga: product[3],
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`/update/product/${editData.id_produk}`, editData)
      .then((response) => {
        console.log("Produk berhasil diperbarui!");
        // Setelah update, Anda dapat memuat ulang data jika diperlukan
        axios
          .get("/get/product")
          .then((response) => {
            setData(response.data.data);
          })
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
     
      <div className="row justify-content-center align-item-center daftar-barang">
        {data.map((product) => (
          <Card
            style={{ width: "18rem", margin: "15px", backgroundColor: "rgba(14, 48, 110, 0.6)" }}
            key={product[0]}
          >
            <Card.Img variant="top" src={product[2]} />
            <Card.Body>
              <Card.Title className="text-white">{product[1]}</Card.Title>
              <Card.Text className="text-white">Harga: {product[3]}</Card.Text>
              <Button variant="primary" onClick={() => handleEdit(product)}>
                EDIT
              </Button>
            </Card.Body>
          </Card>
        ))}
        <br />
      </div>

      {editData.id_produk && (
        <div className="row justify-content-center align-item-center daftar-barang">
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formNama">
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama produk"
                name="nama"
                value={editData.nama}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formGambar">
              <Form.Label>URL Gambar</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan URL gambar"
                name="gambar"
                value={editData.gambar}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formHarga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan harga"
                name="harga"
                value={editData.harga}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Perbarui Produk
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default UpdateData;
