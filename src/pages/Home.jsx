import NavigasiBar from "../components/NavigasiBar";
import Intro from "../components/Intro";
import "../style/landingPage.css";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="mybg-home">
      <NavigasiBar />
      <Intro />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
