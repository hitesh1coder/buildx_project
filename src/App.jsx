import "./App.css";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import EmployeeDetails from "./Components/Employee/EmployeeDetails";
import Featured from "./Components/Featured/Featured";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className=" w-full flex flex-col justify-center align-middle gap-7">
      <Header />
      <Banner />
      <About />
      <Featured />
      <EmployeeDetails />
      <Footer />
    </div>
  );
}

export default App;
