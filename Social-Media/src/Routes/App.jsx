import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Your Posts");
  return (
    <PostListProvider>
      <div className="flex flex-col">
        <Header />
        <div className="flex gap-2 h-full">
          <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <Outlet />
        </div>
        <Footer />
      </div>
    </PostListProvider>
  );
}

export default App;
