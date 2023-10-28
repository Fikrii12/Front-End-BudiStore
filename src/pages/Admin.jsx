import ContentAdmin from "../components/ContentAdmin";
import Footer from "../components/Footer";
import NavigasiBarAdmin from "../components/NavigasiBarAdmin";

const Admin = () =>{
     return(
          <div className="mybg-home">
               <NavigasiBarAdmin />
               <ContentAdmin />
               <br></br>
               <Footer />
          </div>

     )
}

export default Admin;