import About from "./components/About";
import Banner from "./components/Banner";
import BookTable from "./components/BookTable";
import CustomersSay from "./components/CustomersSay";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PopularFoods from "./components/PopularFoods";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <PopularFoods />
      <BookTable />
      <CustomersSay />
      <Footer />
    </>
  );
}

export default App;
