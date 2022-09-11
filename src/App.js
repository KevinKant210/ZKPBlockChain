import ApartmentPage from "./Pages/ApartmentPage";
import Home from "./Pages/HomePage";
import Test from "./Pages/Test";
import "./App.scss";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/ApartmentPage" element={<ApartmentPage/>} /> 
      <Route path="/" element={<Home/>} /> 
      <Route path="/Test" element={<Test/>} />
      
      
    </Routes>
   </Router>
  );
}

export default App;
