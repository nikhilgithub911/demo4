import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Config from '../Config/Config';
import { useEffect } from 'react';

export default function BasicTable() {
  const [rows, setRows] = React.useState();
  console.log(rows, 'this is the api');

  useEffect(() => {
    const fetchData = async () => {
      const url = Config.baseUrl + Config.apiEndPoints.users;
      console.log(url, 'this is the url');

      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          setRows(response.data); // Corrected this line
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id </TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">username</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.website}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// const Config = Object.freeze({
//   baseUrl: 'https://jsonplaceholder.typicode.com/',

//   apiEndPoints: {
//     users: 'users',
//   },
// });

// export default Config;
