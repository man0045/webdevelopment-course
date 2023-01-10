import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode=='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }

  }

  return (
    <>
      <Navbar title="textutils" fuck="about textutils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter The text to analyze"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
