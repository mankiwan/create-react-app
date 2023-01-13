import React from 'react';
import Campaign from '../../pages/Campaign';
import Menu from '../../pages/Menu';
import { Route, Routes } from 'react-router-dom';

const index = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/campaign' element={<Campaign />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  )
}

export default index
