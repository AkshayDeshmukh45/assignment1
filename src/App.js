import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const details = [
    {
      id: 1,
      first_name: "Vincents",
      last_name: "Berntssen",
      email: "Vincentsberntssen@gmail.com",
      gender: "Agender",
      ip_address: "220.178.252.172"
    },
    {
      id: 2,
      first_name: "Forrester",
      last_name: "Sissons",
      email: "Sissonsforr@gmail.com",
      gender: "Male",
      ip_address: "245.116.153.147"
    },
    {
      id: 3,
      first_name: "Romona",
      last_name: "Saxon",
      email: "romanasaxon@gmail.com",
      gender: "Agender",
      ip_address: "170.168.22.111"
    },
    {
      id: 4,
      first_name: "Lonee",
      last_name: "Kalinowsky",
      email: "loneekali@gmail.com",
      gender: "Male",
      ip_address: "193.99.193.69"
    },
    {
      id: 5,
      first_name: "Lenard",
      last_name: "Laddle",
      email: "lenardladdle@gmail.com",
      gender: "Agender",
      ip_address: "130.245.134.90"
    },
    {
      id: 6,
      first_name: "Althea",
      last_name: "Vennard",
      email: "altheavennard@gmail.com",
      gender: "Female",
      ip_address: "250.242.75.86"
    },
    {
      id: 7,
      first_name: "Van",
      last_name: "MacFaul",
      email: "macfaulvan@gmail.com",
      gender: "Genderqueer",
      ip_address: "51.98.248.240"
    },
    {
      id: 8,
      first_name: "Marketa",
      last_name: "Rattery",
      email: "marketarattery@gmail.com",
      gender: "Female",
      ip_address: "242.150.11.205"
    },
    {
      id: 9,
      first_name: "Minnaminnie",
      last_name: "Sinnock",
      email: "sinnockmin@gmail.com",
      gender: "Genderqueer",
      ip_address: "190.114.207.93"
    },
    {
      id: 10,
      first_name: "Shayla",
      last_name: "Schankelborg",
      email: "shaylaschan@gmail.com",
      gender: "Male",
      ip_address: "3.206.44.166"
    },
    {
      id: 11,
      first_name: "Marwin",
      last_name: "Clara",
      email: "claramarwin@gmail.com",
      gender: "Bigender",
      ip_address: "205.210.105.230"
    },
    {
      id: 12,
      first_name: "Mercy",
      last_name: "Van Cassel",
      email: "mercyvancassel@gmail.com",
      gender: "Genderfluid",
      ip_address: "61.27.67.21"
    },
    {
      id: 13,
      first_name: "Nisse",
      last_name: "Grand",
      email: "nissegrand@gmail.com",
      gender: "Genderqueer",
      ip_address: "203.58.240.10"
    },
    {
      id: 14,
      first_name: "Druci",
      last_name: "McKinstry",
      email: "drucimckinstry@gmail.com",
      gender: "Genderfluid",
      ip_address: "64.191.102.149"
    },
    {
      id: 15,
      first_name: "Toddie",
      last_name: "Allday",
      email: "toddiesall@gmail.com",
      gender: "Non-binary",
      ip_address: "206.84.197.125"
    },
    {
      id: 16,
      first_name: "Sherwin",
      last_name: "Kubek",
      email: "sherwinkubek@gmail.com",
      gender: "Bigender",
      ip_address: "243.152.78.236"
    },
    {
      id: 17,
      first_name: "Krishnah",
      last_name: "Brideaux",
      email: "fredramac@gmail.com",
      gender: "Female",
      ip_address: "229.27.79.203"
    },
    {
      id: 18,
      first_name: "Dedie",
      last_name: "Knaggs",
      email: "pmogrotikzumshvelf@pp7rvv.com",
      gender: "Male",
      ip_address: "88.92.3.83"
    },
    {
      id: 19,
      first_name: "Daisie",
      last_name: "Aasaf",
      email: "pulltmp+asgnl@gmail.com",
      gender: "Female",
      ip_address: "247.237.89.254"
    },
    {
      id: 20,
      first_name: "Fredra",
      last_name: "Mac Giany",
      email: "fredramac@gmail.com",
      gender: "Bigender",
      ip_address: "239.100.173.105"
    }
  ];

  const [click, setClick] = useState(false);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [choice, setChoice] = useState([]);
  const [length, setLength] = useState(5);

  //printing a user data function
  const handleClick = (id) => {
    setClick(!click);
    setSearch(
      `${details[id - 1].first_name + " " + details[id - 1].last_name}`
    );
    setName(
      <table style={{ width: "350px" }}>
        <th>ID</th>
        <th>NAME</th>

        <th>GENDER</th>
        <th>EMAIL ADDRESS</th>

        <tr>
          <td>{details[id - 1].id}</td>
          <td>
            {details[id - 1].first_name + " " + details[id - 1].last_name}
          </td>

          <td>{details[id - 1].gender}</td>
          <td>{details[id - 1].email}</td>
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
    setLength(length + 5);
  }
  //handling scroll
  const handlesScroll = (e) => {
    const bottom =
      e.target.scrollHeight - (e.target.scrollTop) ===
      e.target.clientHeight;
    if (bottom) {
      loadData();
    }
  };
  return (
    <div>
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
            size={4}
            className="selection"
            style={{ width: "350px", textAlign: "center" }}
            onScroll={handlesScroll}
          >
            {choice.map((data) => {
              return (
                <option onClick={() => handleClick(data.id)}>
                  {`Username${data.id}`}
                </option>
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
