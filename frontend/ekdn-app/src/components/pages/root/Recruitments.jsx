import React from 'react';
import { Outlet } from 'react-router';

const Recruitments=()=>{
  return (
  <>
  <header>募集をみる</header>
  <Outlet />
  </>)
}

export default Recruitments