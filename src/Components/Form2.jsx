import React, { useEffect, useState } from "react";
import Config from "../Config/Config";
import axios from "axios";

const Form2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    title:""
  });

  const [title, setTitle] = useState([]);
//   console.log(title);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,

      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("This is formData", formData);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      title:""
    });
  };

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const apiUrl = Config.baseUrl + Config.apiEndPoints.album;
        const response = await axios.get(apiUrl);
        if (response.data && response.status === 200) {
          setTitle(response.data);
        //   console.log(response.data);
        }
        console.log("apiUrl", apiUrl);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAlbums();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <select name="title"value={formData.title}
        onChange={handleChange}>
          <option value="">Select a option</option>
          {title.map((item)=>(
            <option key={item.id} value={item.title}>{item.title}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form2;
