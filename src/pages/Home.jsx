import NavigasiBar from "../components/NavigasiBar";
import Intro from "../components/Intro";
import "../style/landingPage.css";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="mybg">
      <NavigasiBar />
      <Intro />
      <Content />
      <br></br>
      <Footer />
    </div>
  );
};

export default Home;
