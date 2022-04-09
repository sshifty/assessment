import { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const DisplayUsers = () => {
  const [users, setUsers] = useState(null);
  const [currentUsers, setCurrentUsers] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await fetch(
          "https://assessment-users-backend.herokuapp.com/users"
        );
        const fetchedData = await data.json();
        setUsers(fetchedData);
      } catch (e) {
        //do something when there is a network error
        console.log(e);
      }
    };
    fetchUsers();
  }, []);

  return <div></div>;
};

export default DisplayUsers;
