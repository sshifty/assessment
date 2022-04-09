import styles from "./SingleUser.module.css";
const SingleUser = (props) => {
  const { currentUsers } = props;

  return (
    <div className={styles.singleUser}>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
             {currentUsers.map(user=>{
                 return <tr>
                     <td>{user.first_name}</td>
                     <td>{user.last_name}</td>
                     <td>{user.created_at}</td>
                 </tr>
             })}
        </tbody>
      </table>
    </div>
  );
};

export default SingleUser;
