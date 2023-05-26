import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textutil from "./components/Textutil";
import About from "./components/about";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
const[mode,setmode] = useState('light');

const[btntext,setbtntext] = useState('enable dark mode');

const[alert,setalert] = useState(null);

  const showalert = (message,type)=>{
    setalert({
      msg : message,
      type:type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }


  const modetoggle = ()=>{
    if(mode === 'light'){
      setmode('dark');
      setbtntext('enable light mode');
      document.body.style.backgroundColor = "#212529";
      showalert("enable dark mode","success");
      // setInterval(()=>{
      //   document.body.style.backgroundColor = "grey"
      // },1500)

      // setInterval(()=>{
      //   document.body.style.backgroundColor = "#212529"
      // },2000)
    }
    else{
      setmode('light');
      setbtntext('enable dark mode');
      document.body.style.backgroundColor = "white";
      showalert("enable light mode","success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title="textutils" pmode={mode} function1={modetoggle} text={btntext}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={<Textutil heading="Enter text to analyz" pmode={mode} showalert={showalert}/>}/>
       
        <Route exact path="/about" element={<About pmode={mode}/>}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
