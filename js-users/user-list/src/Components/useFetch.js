//useFetch.js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [users, setUsers] = useState([]);  
  const fetchUsers = async () => {
    try {
      const data = await fetch(url);
      const fetchedData = await data.json();      
      setUsers(fetchedData.sort((a, b) => a.id - b.id));
    } catch (e) {
      //do something when there is a network error
      alert("Network Error, try to reload the page!")
    }
  };
  useEffect(() => {
    setUsers([]);    
    fetchUsers();
  },[]); 
  return { users, fetchUsers };
}
export default useFetch;
