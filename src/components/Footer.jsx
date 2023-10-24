import NavigasiBar from "../components/NavigasiBar";
import Intro from "../components/Intro";
import "../style/landingPage.css";
import Content from "../components/Content";
import { BiTwitter } from "react-icons/bi";

const Footer = () =>{
     return(
          <div>
          <footer className="">
            <div className="container text-white">
              <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                  <h1>BudiStore</h1>
                  <p>
                    Selamat datang di BudiStore, tempat terbaik untuk menemukan
                    berbagai macam produk berkualitas tinggi. Kami menyediakan
                    pilihan terbaik dari pakaian, sepatu, aksesoris, dan masih
                    banyak lagi untuk memenuhi kebutuhan gaya Anda.
                  </p>
                  <div className="social-links d-flex mt-4">
                    <p>sasas</p>
                    <a
                      href="https://twitter.com/kominfoblampung"
                      className="twitter"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-6 footer-links"></div>
                <div className="col-lg-2 col-6 footer-links"></div>
  
                <div className="col-lg-3 col-md-12 footer-contact text-right text-md-start alamat">
                  <h4>Kontak Kami</h4>
                  <p>
                    Desa Kebaguasan, Kec. Gedong Tataan <br /> Kabupaten Pesawaran <br />INDONESIA <br />
                    <br />
                    <strong>Phone:</strong> 0896-0330-5317
                    <br />
                    <strong>Email:</strong> nurulfikri756@gmail.com
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
     )
}

export default Footer;