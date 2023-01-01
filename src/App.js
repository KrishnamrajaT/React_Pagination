import { useState } from "react";
import "./styles.css";
import Data from "./users.json";
export default function App() {
  const [users, setUsers] = useState(Data);
  const [pageSize, setpageSize] = useState(5);
  const [currentPage, setcurrentPage] = useState(0);
  const [pageCount, setpageCount] = useState(
    Math.ceil(users.length / pageSize)
  );
  const [currentUsers, setcurrentUsers] = useState(users.slice(0, pageSize));
  const onPageChange = (page) => {
    setcurrentPage(page);
    let currentItems = users.slice(
      currentPage * pageSize,
      pageSize * (currentPage + 1)
    );
    setcurrentUsers(currentItems);
  };
  return (
    <div>
      {users.length > 1 &&
        currentUsers.map((itme) => (
          <>
            <hr />
            <p>{itme.name}</p>
            <p>{itme.role}</p>
          </>
        ))}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage == 0}
      >
        Prev
      </button>
      {Array(pageCount)
        .fill(null)
        .map((page, ind) => (
          <button
            className={` ${currentPage == ind ? "active" : ""}`}
            onClick={() => onPageChange(ind)}
          >
            {ind + 1}
          </button>
        ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage == pageCount - 1}
      >
        Next
      </button>
      <center>
        <button onClick={() => onPageChange(0)}>First</button>
        <button onClick={() => onPageChange(pageCount - 1)}>Last</button>
      </center>
    </div>
  );
}
