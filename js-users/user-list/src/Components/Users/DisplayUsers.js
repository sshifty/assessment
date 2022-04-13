import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import UserTable from "./UserTable";
import ReactPaginate from "react-paginate";
import { USERS_GET_URL } from "../constants";
import styles from "./DisplayUsers.module.css";
import "./Paginate.css";

const DisplayUsers = ({ itemsPerPage }) => {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const { users, fetchUsers } = useFetch(USERS_GET_URL);

  const setUsersOnPageChange = () => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentUsers(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  };
  useEffect(() => {
    setUsersOnPageChange();
  }, [itemOffset, itemsPerPage, users]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };
  return (
    <div className={styles.displayUsers}>
      <UserTable currentUsers={currentUsers} fetchUsers={fetchUsers} />
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
