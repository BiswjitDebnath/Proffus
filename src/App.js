import Category from "./component/Category/Category";
import Glance from "./component/Glance/Glance";
import How from "./component/How_it_works/How";
import Navbar from "./component/Navbar/Navbar";
import Faqs from "./component/FAQs/Faqs";
import HaveaRead from "./component/HaveaRead/haveaRead";
import Topics from "./component/Topics/Topics";
import Footer from "./Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <How/>
      <Category/>
      <Glance/>
      <Faqs/>
      <HaveaRead/>
      <Topics/>
      <Footer/>
    </div>
  );
}

export default App;
