import About from "./components/About";
import Banner from "./components/Banner";
import BookTable from "./components/BookTable";
import CustomersSay from "./components/CustomersSay";
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
    </>
  );
}

export default App;
