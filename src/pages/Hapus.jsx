
import "../style/landingPage.css";
import axios from "axios";
import HapusData from "../components/HapusData";
import NavigasiBarAdmin from "../components/NavigasiBarAdmin";
import Footer from "../components/Footer";

const Hapus = () => {
  return(
    <div>
      <NavigasiBarAdmin />
      <HapusData />
      <Footer />
    </div>
  )
};

export default Hapus;
