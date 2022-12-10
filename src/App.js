import React from "react";
import "./App.css";
import Appbar from "./component/appbar.js";
import Banner from "./component/banner.js";
import Footer from "./component/footer.js";
import Album from "./component/album.js";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Banner />
      <Album />
     <Footer />
    </div>
  );
}

export default App;
