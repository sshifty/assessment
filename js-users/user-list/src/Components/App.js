import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import DisplayUsers from "./Users/DisplayUsers";
import UserCreateForm from "./Forms/UserCreateForm";
import Nav from "./MockComponents/Nav";
import Sidemenu from "./MockComponents/SideMenu";
import MockComponent from "./MockComponents/MockComponent";
import styles from "./App.module.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 750;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Nav />
        {width>breakpoint?<Sidemenu />:null}
        <Routes>
          <Route path="/" element={<DisplayUsers itemsPerPage={10} />} />
          <Route path="/new" element={<UserCreateForm />} />
          <Route path="/:userId/edit" element={<UserCreateForm />} />
          <Route path="*" element={<MockComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
