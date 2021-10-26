import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [click, setClick] = useState(false);
  const [details, setDetails] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [choice, setChoice] = useState([]);
  const [length, setLength] = useState(5);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "https://api.instantwebtools.net/v1/passenger?page=0&size=10"
      );
      const data = await result;
      setDetails(data.data.data);
    };
    getData();
  }, []);
  //printing a user data function
  const handleClick = (data) => {
    setClick(!click);
    setSearch(data.name);
    setName(
      <table style={{ width: "350px" }}>
        <th>ID</th>
        <th>NAME</th>

        <th>Trips</th>
        <th>Country</th>

        <tr>
          <td>{data._id}</td>
          <td>{data.name}</td>
          <td>{data.trips}</td>
          <td>{data.airline[0].country}</td>
        </tr>
      </table>
    );
  };

  function handleSelect() {
    setClick(true);
    loadData();
  }
  async function loadData() {
    if (details.length < length) {
      return;
    }
    setChoice(details.slice(0, length));
    setLength(length + 3);
  }
  //handling scroll
  const handlesScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      loadData();
    }
  };
  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Search..."
          style={{ width: "370px", display: "block" }}
          value={search}
          onClick={handleSelect}
        />

        {click ? (
          <select
            size={5}
            className="selection"
            style={{ width: "375px", textAlign: "center" }}
            onScroll={handlesScroll}
          >
            {choice.map((data) => {
              return (
                <option onClick={() => handleClick(data)}>{data.name}</option>
              );
            })}
          </select>
        ) : (
          ""
        )}
      </div>

      <br />
      <div>{name}</div>
    </div>
  );
}
