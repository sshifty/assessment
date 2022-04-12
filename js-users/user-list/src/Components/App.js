import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayUsers from "./Users/DisplayUsers";
import UserCreateForm from "./Forms/UserCreateForm";
import Nav from "./MockComponents/Nav";
import Sidemenu from "./MockComponents/SideMenu";
import MockComponent from "./MockComponents/MockComponent";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Nav />
        <Sidemenu />
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
