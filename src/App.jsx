import "./App.css";

import {
  About,
  Banner,
  EmployeeDetails,
  Header,
  Featured,
  Footer,
} from "./Components/index";

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
