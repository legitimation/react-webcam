import './App.css';
import Webcam from "react-webcam";
import {useRef} from "react";

function App() {
  const webRef = useRef(null);
  let img = "httpsL;';'";
  const showImage = () => {
    console.log(webRef.current.getScreenshot());
  }
  return (
    <div className="App">
      React Webcam
      <Webcam ref = {webRef} />
      <button onClick = {() => { 
      showImage();
    }}> Console </button>

    <br /> 
    <img src = {img} alt="image"/>
    </div>
  );
}


export default App;
