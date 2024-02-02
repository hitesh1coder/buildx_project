import "./App.css";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className=" w-full flex flex-col justify-center align-middle gap-7">
      <Header />
      <Banner />
      <About />
    </div>
  );
}

export default App;
