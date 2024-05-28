import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./Payment";
import Completion from "./Completion";
import Home from "./Home";
import Signup from "./SignUp";
import Error from './Error'
import Login from "./Login";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/err" element={<Error />}></Route>
          <Route path="/payment/:productId" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;