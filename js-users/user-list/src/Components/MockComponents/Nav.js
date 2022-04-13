import { useState ,useEffect} from "react";
import BusinessIcon from "@mui/icons-material/Business";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import SideMenu from "./SideMenu";
import styles from "./Mock.module.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navLeft}>
        <div className={styles.businessContainer}>
          <BusinessIcon id={styles.logo} />

          <h1>Business name</h1>
        </div>
        <div className={styles.searchContainer}>
          <SearchIcon />
          <input type="text" maxLength={10} placeholder="Search..." />
        </div>
      </div>
      <div className={styles.navRight}>
        <NotificationsIcon id={styles.notificationIcon} />
        <div className={styles.userContainer}>
          <PersonOutlineIcon id={styles.userIcon} />
          <h4>Username</h4>
          <ArrowDropDownIcon />
        </div>
        <div className={styles.mobileMenu}>
          <PersonOutlineIcon id={styles.userIcon} />
          <MenuIcon onClick={toggleMenu} id={styles.menuIcon} />
          <SideMenu toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
