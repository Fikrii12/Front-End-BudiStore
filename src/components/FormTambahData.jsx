import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

const FormTambahData = () => {
  const [formData, setFormData] = useState({
    nama: "",
    gambar: null, // Menggunakan null sebagai awalannya
    harga: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      gambar: e.target.files[0], // Mengambil file dari event
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataForUpload = new FormData();
    formDataForUpload.append("nama", formData.nama);
    formDataForUpload.append("harga", formData.harga);
    formDataForUpload.append("gambar", formData.gambar);

    axios
      .post("/post/product", formDataForUpload)
      .then((response) => {
        console.log("Produk berhasil ditambahkan!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNama">
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama produk"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formGambar">
              <Form.Label>URL Gambar</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan URL gambar"
                name="gambar"
                value={formData.gambar}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formHarga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan harga"
                name="harga"
                value={formData.harga}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Tambah Produk
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormTambahData;
