import ResponsiveAppBar from "./homepage";
import Banner from "./banner";
import ProductsHomepage from "./productshome";
import Footer from "./footer";

function Main() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Banner />
      <ProductsHomepage />
      <Footer />
    </div>
  );
}

export default Main;
