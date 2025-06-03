import React from 'react';
import './App.css';
import HomeComponent from './home/HomeComponent';
const App = () => {
 
  return (
    <div className='main'>
     <div className='mainContainer'>
    <span>Expense Tracker</span>
    <HomeComponent/>
   </div>
    </div>
  
  )
}

export default App