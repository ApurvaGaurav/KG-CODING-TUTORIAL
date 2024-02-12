import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex gap-10 items-center ">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "Home" ? <Posts /> : <Form />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
