
import "../style/landingPage.css";
import axios from "axios";
import HapusData from "../components/HapusData";
import NavigasiBarAdmin from "../components/NavigasiBarAdmin";
import Footer from "../components/Footer";

const Hapus = () => {
  return(
    <div className="mybg-home">
      <NavigasiBarAdmin />
      <HapusData />
      <br></br>
      <Footer />
    </div>
  )
};

export default Hapus;
