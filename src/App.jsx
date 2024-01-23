// import Navbar from "./components/navbar/Navbar";
import Experience from "./components/experience/Experience";
import Items from "./components/items/Items";
import Advantage from "./components/advantage/Advantage";
import Shopify from "./components/shopify/Shopify";
import Faq from "./components/faq/Faq";
import Offers from "./components/offers/Offers";
import Find from "./components/find/find";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Experience />
        <Items />
        <Advantage />
        <Shopify />
        <Faq />
        <Offers />
        <Find />
        <Footer />
      </div>
    </>
  );
}

export default App;
