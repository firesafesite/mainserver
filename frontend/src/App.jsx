import logo from "./assets/logo.png";
import Dropzone from "./components/Dropzone";
import "./App.css";
import Card from "./components/Card";

function App() {
  const data = {
    "S/bm.html": {
      location: "Big Black Mountain",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/bm-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/bm-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/bm-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/bm-w-mobo-c-175.jpg",
      ],
    },
    "S/bi.html": {
      location: "Birch Hill",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/bi-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/bi-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/bi-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/bi-w-mobo-c-175.jpg",
      ],
    },
    "S/bl2.html": {
      location: "Black Mountain",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/bl-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/bl-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/bl-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/bl-w-mobo-c-175.jpg",
      ],
    },
    "S/bh.html": {
      location: "Boucher Hill",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/bh-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/bh-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/bh-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/bh-w-mobo-c-175.jpg",
      ],
    },
    "S/buff.html": {
      location: "Buffalo Bump",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/buff-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/buff-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/buff-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/buff-w-mobo-c-175.jpg",
      ],
    },
    "S/chino.html": {
      location: "Chino Hills",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/chino-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/chino-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/chino-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/chino-w-mobo-c-175.jpg",
      ],
    },
    "S/ch.html": {
      location: "Coronado Hills",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/ch-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/ch-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/ch-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/ch-w-mobo-c-175.jpg",
      ],
    },
    "S/cp.html": {
      location: "Cuyamaca Peak",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/cp-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/cp-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/cp-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/cp-w-mobo-c-175.jpg",
      ],
    },
    "S/dwpgm.html": {
      location: "Green Peak",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/dwpgm-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/dwpgm-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/dwpgm-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/dwpgm-w-mobo-c-175.jpg",
      ],
    },
    "S/hp.html": {
      location: "High Point",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/hp-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/hp-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/hp-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/hp-w-mobo-c-175.jpg",
      ],
    },
    "S/69bravo.html": {
      location: "L.A.Co.F.D Helibase 69 Bravo",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/69bravo-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/69bravo-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/69bravo-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/69bravo-w-mobo-c-175.jpg",
      ],
    },
    "S/wlfd.html": {
      location: "Lake Wohlford Airport",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/wlfd-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/wlfd-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/wlfd-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/wlfd-w-mobo-c-175.jpg",
      ],
    },
    "S/pi.html": {
      location: "Los Pinos",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/pi-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/pi-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/pi-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/pi-w-mobo-c-175.jpg",
      ],
    },
    "S/lp.html": {
      location: "Lyons Peak",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/lp-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/lp-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/lp-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/lp-w-mobo-c-175.jpg",
      ],
    },
    "S/mg.html": {
      location: "Mesa Grande",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/mg-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/mg-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/mg-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/mg-w-mobo-c-175.jpg",
      ],
    },
    "S/ml.html": {
      location: "Monument Peak",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/ml-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/ml-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/ml-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/ml-w-mobo-c-175.jpg",
      ],
    },
    "S/wc.html": {
      location: "Mount Woodson CalFire",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/wc-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/wc-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/wc-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/wc-w-mobo-c-175.jpg",
      ],
    },
    "S/mlo.html": {
      location: "Mt. Laguna Observatory access site",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/mlo-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/mlo-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/mlo-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/mlo-w-mobo-c-175.jpg",
      ],
    },
    "S/wilson.html": {
      location: "Mt. Wilson Observatory",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/wilson-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/wilson-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/wilson-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/wilson-w-mobo-c-175.jpg",
      ],
    },
    "S/om.html": {
      location: "Otay Mountain",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/om-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/om-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/om-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/om-w-mobo-c-175.jpg",
      ],
    },
    "S/rm.html": {
      location: "Red Mountain (near Fallbrook)",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/rm-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/rm-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/rm-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/rm-w-mobo-c-175.jpg",
      ],
    },
    "S/rdd.html": {
      location: "Rincon Del Diablo",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/rdd-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/rdd-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/rdd-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/rdd-w-mobo-c-175.jpg",
      ],
    },
    "S/smernsp.html": {
      location: "SMER North Station Point",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/smernsp-sw-u180-175.jpg"],
    },
    "S/smertcs9.html": {
      location: "SMER TCS9",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/smer-tcs9-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/smer-tcs9-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/smer-tcs9-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/smer-tcs9-w-mobo-c-175.jpg",
      ],
    },
    "S/sclm.html": {
      location: "San Clemente",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/sclm-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/sclm-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/sclm-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/sclm-w-mobo-c-175.jpg",
      ],
    },
    "S/sjh.html": {
      location: "San Juan Hills",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/sjh-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/sjh-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/sjh-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/sjh-w-mobo-c-175.jpg",
      ],
    },
    "S/sm.html": {
      location: "San Miguel",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/sm-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/sm-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/sm-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/sm-w-mobo-c-175.jpg",
      ],
    },
    "S/syp.html": {
      location: "Santa Ynez Peak",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/syp-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/syp-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/syp-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/syp-w-mobo-c-175.jpg",
      ],
    },
    "S/stgo.html": {
      location: "Santiago Peak",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/stgo-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/stgo-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/stgo-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/stgo-w-mobo-c-175.jpg",
      ],
    },
    "S/srne.html": {
      location: "Sierra Rojo NE",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/sr-ne-u180-175.jpg"],
    },
    "S/srsw.html": {
      location: "Sierra Rojo SW",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/sr-sw-u180-175.jpg"],
    },
    "S/signal.html": {
      location: "Signal Peak",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/signal-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/signal-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/signal-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/signal-w-mobo-c-175.jpg",
      ],
    },
    "S/sojr.html": {
      location: "Sky Oaks",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/sojr-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/sojr-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/sojr-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/sojr-w-mobo-c-175.jpg",
      ],
    },
    "S/tp.html": {
      location: "Toro Peak",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/tp-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/tp-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/tp-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/tp-w-mobo-c-175.jpg",
      ],
    },
    "S/starr.html": {
      location: "Upper Bell ",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/starr-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/starr-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/starr-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/starr-w-mobo-c-175.jpg",
      ],
    },
    "S/marconi.html": {
      location: "Upper Talega",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/marconi-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/marconi-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/marconi-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/marconi-w-mobo-c-175.jpg",
      ],
    },
    "S/vo.html": {
      location: "Volcan Mountain",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/vo-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/vo-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/vo-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/vo-w-mobo-c-175.jpg",
      ],
    },
    "S/ws.html": {
      location: "White Star",
      imgs: [
        "https://hpwren.ucsd.edu/cameras/L/ws-n-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/ws-e-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/ws-s-mobo-c-175.jpg",
        "https://hpwren.ucsd.edu/cameras/L/ws-w-mobo-c-175.jpg",
      ],
    },
    "S/bcc1.html": {
      location: "Boulder Creek Camera 1",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/bc-mobo-c-175.jpg"],
    },
    "S/bcc2.html": {
      location: "Boulder Creek Camera 2",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/bc-2-mobo-c-175.jpg"],
    },
    "S/bcc3.html": {
      location: "Boulder Creek Camera 3",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/bc-3-mobo-c-175.jpg"],
    },
    "S/bcc4.html": {
      location: "Boulder Creek Camera 4",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/bc-4-mobo-c-175.jpg"],
    },
    "S/bcc5.html": {
      location: "Boulder Creek Camera 5",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/bc-5-mobo-c-175.jpg"],
    },
    "S/lcccr.html": {
      location: "La Cima relay",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/hpwren-iqeye8-175.jpg"],
    },
    "S/ms.html": {
      location: "Mt. Soledad 2 (tower)",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/ms-n-mobo-c-175.jpg"],
    },
    "S/sgbf.html": {
      location: "Near Anza",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/sgbf-mobo-c-175.jpg"],
    },
    "S/smertcs10.html": {
      location: "SMER TCS10",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/smer-tcs10-1-mobo-c-175.jpg"],
    },
    "S/smertcs3.html": {
      location: "SMER TCS3",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/smer-tcs3-mobo-c-175.jpg"],
    },
    "S/smertcs8.html": {
      location: "SMER TCS8",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/smer-tcs8-mobo-c-175.jpg"],
    },
    "S/tje.html": {
      location: "Tijuana Estuary",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/tje-1-mobo-c-175.jpg"],
    },
    "S/sdsc.html": {
      location: "UCSD/SDSC East",
      imgs: ["https://hpwren.ucsd.edu/cameras/L/sdsc-e-mobo-c-175.jpg"],
    },
  };

  const cards = [];

  for (var key in data) {
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
            href="https://cdn.discordapp.com/attachments/748421654492741642/1119772279795101786/images_12.zip"
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
