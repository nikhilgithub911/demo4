import React, { useEffect, useState } from "react";
import axios from "axios";
import Config from "../Config/Config";
import "./Table.css";

const Table = () => {
  const [people, setPeople] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");
// filter people based on search term

const filteredPeople = people.filter((person)=>(
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
))
//   console.log("people", people);

  useEffect(() => {
    const fetchUser = async () => {
      const userUrl = Config.baseUrl + Config.apiEndPoints.user;
      console.log(userUrl);
      try {
        const response = await axios.get(userUrl);
        if (response.status === 200) {
          setPeople(response.data);
          console.log("response.data", response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="tablehigh">
      <input type="text" value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
       />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
