import React, { useState } from "react";
import "../style/landingPage.css";
import NavigasiBar from "../components/NavigasiBar";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Footer from "../components/Footer";


const Kontak = () => {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [jumlahPesan, setJumlahPesan] = useState(0);

  const kirimPesan = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Nama:", nama);
    console.log("Pesan yang dikirim:", pesan);
    setJumlahPesan(jumlahPesan + 1);
  };

  return (
    <div className="mybg">
      <NavigasiBar />
      <div className="judul">
        <Container className="text-black d-flex justify-content-center align-item-center">
          <Row>
            <Col>
              <div className="title">KONTAK</div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="d-flex justify-content-center align-item-center">
        <div className="kotak-pesan">
          <Form onSubmit={kirimPesan}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="text-white">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="text-white">Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="text-white">Pesan</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Masukkan pesan Anda di sini"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex">
              <Button variant="primary" type="submit" className="tombol-pesan">
                Submit
              </Button>
              <div className="text-white text-sm">
                <p>Jumlah Pesan yang Telah Dikirim: {jumlahPesan}</p>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default Kontak;
