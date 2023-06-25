import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import OrderHistory from './OrderHistory';
import {GlobalStyle} from './GlobalStyle';
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";

const App=()=>{

  const theme = {
    colors: {
      
      white: "#fff",
      black: "#212529",
      helper: "rgb(138 28 157)",
      bg: "#e8bef0",
      btn: "rgb(138 28 157)",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return(
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/orderhistory" element={<OrderHistory/>}></Route>
      </Routes>
    </Router>
    </ThemeProvider>
  )
};

export default App;
