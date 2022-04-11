import BusinessIcon from "@mui/icons-material/Business";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./Mock.module.css";

const Nav = () => {
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
        <NotificationsIcon id={styles.notificationIcon}/>
        <div className={styles.userContainer}>
          <PersonOutlineIcon id={styles.userIcon} />
          <h4>Username</h4>
          <ArrowDropDownIcon />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
