import axios from "axios";
import { useEffect, useState } from "react";

const PAGE_NUMBER = 1;
function New() {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");

  //fetching api here
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=12`
      );
      const data = result;
      console.log("data",data)
      setState([...state, ...data.data.data]);
    };
    getData();
  }, [page]);

  //handling scroll
  function handleScroll(e) {
    setPage(page + 1);
  }

  const handleSelect = () => {
    setClick(true);
  };
  //returning data from api here
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
  //returning a data
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        style={{ width: "350px", display: "block" }}
        value={search}
        onClick={handleSelect}
      />

      {click ? (
        <select
          size={10}
          className="selection"
          style={{ width: "350px", textAlign: "center" }}
          onScroll={(e) => handleScroll(e)}
        >
          {state.map((data) => {
            return (
              <>
                <option key={data.id} onClick={() => handleClick(data)}>
                  {data.name}
                </option>
              </>
            );
          })}
        </select>
      ) : (
        ""
      )}
      {name}
    </div>
  );
}

export default New;
