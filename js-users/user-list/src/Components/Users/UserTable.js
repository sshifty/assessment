import { Link } from "react-router-dom";
import moment from "moment";

import styles from "./UserTable.module.css";
const UserTable = (props) => {
  const { currentUsers, fetchUsers } = props;

  const changeStatus = async (user) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: user.status === "active" ? "locked" : "active",
      }),
    };
    try {
      const data = await fetch(
        "https://assessment-users-backend.herokuapp.com/users/" + user.id,
        requestOptions
      );

      fetchUsers();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styles.userTableContainer}>
      <div className={styles.userTableHeader}>
        <Link to="new">
          <button className={`${styles.btn} ${styles.btnMain}`}>
            Add Member
          </button>
        </Link>
      </div>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Created At</th>
            <th>Operation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => {
            return (
              <tr>
                <td className={user.status === "locked" ? styles.locked : null}>
                  {user.first_name}
                </td>
                <td className={user.status === "locked" ? styles.locked : null}>
                  {user.last_name}
                </td>
                <td className={user.status === "locked" ? styles.locked : null}>
                  {moment(user.created_at).format("YYYY/MM/DD, HH:mm ")}
                </td>
                <td>
                  <Link to={`${user.id}/edit`}>
                    <button className={`${styles.btn} ${styles.btnMain}`}>
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => changeStatus(user)}
                    className={`${styles.btn} ${
                      user.status === "locked"
                        ? styles.btnActive
                        : styles.btnLock
                    }`}
                  >
                    {user.status === "locked" ? "Activate" : "Lock"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
