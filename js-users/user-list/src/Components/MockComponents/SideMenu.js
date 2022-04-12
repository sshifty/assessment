import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import { Link, useLocation } from "react-router-dom";
import styles from "./Mock.module.css";

const Sidemenu = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const menuNames = [
    { name: "profile", icon: <PersonOutlineIcon /> },
    { name: "", icon: <GroupIcon /> },
    { name: "control", icon: <DashboardIcon /> },
    { name: "chat", icon: <ChatIcon /> },
  ];
  return (
    <div className={styles.sideMenuContainer}>
      <div className={styles.sideMenu}>
        {menuNames.map((menu) => {
          return (
            <Link
              to={`/${menu.name}`}
              className={`${styles.sideMenuItem} ${
                pathname === "/" + menu.name ? styles.active : null
              }`}
            >
              {menu.icon}
              <h3>{menu.name === "" ? "users" : menu.name}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidemenu;
