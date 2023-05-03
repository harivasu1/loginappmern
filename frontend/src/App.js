import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />        
        <Route path="/register" element={<Register/>} />        
        <Route path="/dashboard" element={<Navbar/>} />        
        <Route path="/dashboard" element={<Dashboard/>} />   
        {/* <Route path="/dashboard">
          <Navbar />
          <Dashboard />
        </Route> */}
        {/* <Route path="/navbar" element={<Navbar/>} >
        <Route path="/navbar/dashboard" element={<Dashboard/>} />  
        </Route>     */}    
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;