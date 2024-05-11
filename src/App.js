import './App.css';
import React from 'react';

import MenuBar from './components/MenuBar';
import Content from './components/Content';
import Check from './components/Check';


const App = () => {
  return (
    <div className=" bg-gray-100 flex">
      <MenuBar />
      <div className=" w-[700px] bg-gray-100 mt-2 flex justify-center">
        <Content />
        <Check />
      </div>
    </div>


  );
};

export default App;
