import { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
import ReactPaginate from "react-paginate";
import styles from "./DisplayUsers.module.css";
import "./Paginate.css";

const DisplayUsers = ({ itemsPerPage }) => {
  const [users, setUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
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
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentUsers(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, users]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };
  return (
    <div className={styles.displayUsers}>
      <SingleUser currentUsers={currentUsers} />
      <ReactPaginate
        className={"react-paginate"}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default DisplayUsers;
