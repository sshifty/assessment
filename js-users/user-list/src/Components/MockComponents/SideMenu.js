import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import styles from './Mock.module.css';

const Sidemenu = () => {
    return (
        <div className={styles.sideMenuContainer}>
            <div className={styles.sideMenu}>
                <div className={styles.sideMenuItem}>
                    <PersonOutlineIcon />
                    <h3>Profile</h3>
                </div>
                <div className={`${styles.sideMenuItem} ${styles.sideActive}`}>
                    <GroupIcon />
                    <h3>Users</h3>
                </div>
                <div className={styles.sideMenuItem}>
                    <DashboardIcon />
                    <h3>Control Panel</h3>
                </div>
                <div className={styles.sideMenuItem}>
                    <ChatIcon />
                    <h3>Group Chat</h3>
                </div>
            </div>
        </div>
    );
}

export default Sidemenu;
