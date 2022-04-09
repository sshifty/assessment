import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayUsers from "./Users/DisplayUsers";
import UserCreateForm from "./Forms/UserCreateForm";
import UserEditForm from "./Forms/UserEditForm";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<DisplayUsers itemsPerPage={10} />} />
          <Route path="/new" element={<UserCreateForm />} />
          <Route path="/:id/edit" element={<UserEditForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
