import logo from "./assets/logo.png";
import Dropzone from "./components/Dropzone";
import "./App.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  const getData = async () => {
    const response = await fetch("http://localhost:5000/api/set-images.json");
    setData(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  const cards = [];

  for (const key in data) {
    cards.push(
      <Card
        title={data[key].location}
        images={data[key].imgs}
        smokey={false}
        status="No smoke detected"
      ></Card>
    );
  }

  return (
    <>
      <div className="navbar">
        <div className="left">
          <img src={logo} alt="" />
          <h1 id="head">Fire AI - Automatic AI Wildfire Detection</h1>
        </div>
        <div className="right">
          <p>Made by Harjyot Sahni and Kaz Sugihara</p>
          <a
            href="/sample-smoke-images.zip"
            style={{
              color: "black",
            }}
          >
            Sample Data
          </a>
        </div>
      </div>
      <div className="cards">
        <div className="upload" id="u">
          <Dropzone></Dropzone>
        </div>
        {cards}
      </div>
    </>
  );
}

export default App;
