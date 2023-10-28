import Footer from "../components/Footer";
import FormTambahData from "../components/FormTambahData";
import NavigasiBarAdmin from "../components/NavigasiBarAdmin";
import { Container, Row, Col} from "react-bootstrap";

const Tambah = () => {
  return(
    <div className="mybg-home">
      <NavigasiBarAdmin />
      <div className="judul">
        <Container className="text-black d-flex justify-content-center align-item-center">
          <Row>
            <Col>
              <div className="title">TAMBAH DATA</div>
            </Col>
          </Row>
        </Container>
      </div>
      <FormTambahData />
      <br></br>
      <br></br>
      <Footer />
    </div>
  )
};

export default Tambah;
