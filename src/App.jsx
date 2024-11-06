import About from "./components/About";
import Banner from "./components/Banner";
import BookTable from "./components/BookTable";
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
    </>
  );
}

export default App;
