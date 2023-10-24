import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigasiBar from "../components/NavigasiBar";
import "../style/landingPage.css";

const Tentang = () => {
  return (
    <div className="mybg">
      <NavigasiBar />
      <div className="judul">
        <Container className="text-white d-flex justify-content-center align-item-center">
          <Row>
            <Col>
              <div className="title">ABOUT</div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="d-flex justify-content-center align-item-center">
        <div className=" mt-4 text-white deks-tentang">
          <p>
            Selamat datang di BudiStore, tempat terbaik untuk menemukan berbagai
            macam produk berkualitas tinggi. Kami menyediakan pilihan terbaik
            dari pakaian, sepatu, aksesoris, dan masih banyak lagi untuk
            memenuhi kebutuhan gaya Anda.
          </p>
          <p>
            Visi kami adalah memberikan pengalaman berbelanja yang menyenangkan
            dan aman bagi pelanggan kami. Dengan fokus pada kualitas dan
            kepuasan pelanggan, kami berkomitmen untuk memberikan produk-produk
            terbaik dengan harga yang terjangkau.
          </p>
          <p>
            Produk kami berasal dari berbagai merek terkemuka, sehingga Anda
            dapat yakin akan mendapatkan produk berkualitas tinggi setiap kali
            berbelanja di BudiStore. Kami juga senantiasa memperbarui koleksi
            kami untuk memastikan bahwa Anda selalu mendapatkan tren terbaru dan
            gaya terkini.
          </p>
          <p>
            Terima kasih atas dukungan Anda dan selamat berbelanja di BudiStore!
          </p>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Tentang;
