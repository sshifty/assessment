import moment from "moment";

import styles from "./SingleUser.module.css";
const SingleUser = (props) => {
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
      // const lol = await data.json();
      fetchUsers();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styles.singleUser}>
      <table>
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
                  <button className={`${styles.btn} ${styles.btnEdit}`}>
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => changeStatus(user)}
                    className={`${styles.btn} ${styles.btnStatus}`}
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

export default SingleUser;
