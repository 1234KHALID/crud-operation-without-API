import React from 'react';
import ListItem from './components/ListItem';
import Create from './components/Create';
import { Routes, Route } from 'react-router-dom';
import Edit from './components/Edit';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ListItem />} ></Route>
        <Route path='/create' element={<Create />} ></Route>
        <Route path='/edit' element={<Edit />} ></Route>
      </Routes>
    </div>
  )
}
export default App