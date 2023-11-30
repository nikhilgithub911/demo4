import './App.css';
import Table from './Components/Table';
import { Routes,Route } from 'react-router-dom';
import Form2 from './Components/Form2';
import Table2 from './Components/Table2';
import TableMui from './Components/TableMui';
import Form3 from './Components/Form3';
import Notifications from './Components/Notifications';

function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path='/table' element={<Table/>}/>
      <Route path='/tablemui' element={<TableMui/>}/>
      <Route path='/table2' element={<Table2/>}/>
      <Route path='/form2' element={<Form2/>}/>
      <Route path ='/form3' element={<Form3/>}/>
      <Route path='/noti' element={<Notifications/>}/>
    </Routes>
   </div>
  );
}

export default App;
