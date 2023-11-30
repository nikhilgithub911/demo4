import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";
import Config from "../Config/Config";
import axios from "axios";

const Form3 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    website: "",
    fullname: "",
  });

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userUrl = Config.baseUrl + Config.apiEndPoints.users;
      try {
        const response = await axios.get(userUrl);
        if (response.status === 200) {
          setPeople(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      website: "",
      fullname: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <TextField
          label="name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <TextField
          label="email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <TextField
          label="password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Website</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="website"
            name="website"
            onChange={handleChange}
          >
            {people.map((item) => (
              <MenuItem key={item.id} value={item.website}>
                {item.website}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          sx={{ width: 300 }}
          options={people}
          name="fullname"
          getOptionLabel={(option) => option.name}
          value={
            people.find((person) => person.name === formData.fullname) || null
          }
          onChange={(event, newValue) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              fullname: newValue ? newValue.name : "",
            }));
          }}
          renderInput={(params) => <TextField {...params} label="name" />}
        />
      </Box>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form3;
