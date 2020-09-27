import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profiles from './components/Profiles';

const Nav = ()=>{
  return <div style={{background: 'red', display: 'flex', justifyContent: 'center'}}>
    <div style={{padding: '20px', color: '#ffff', textDecoration: 'underline'}}>Tennnis</div>
    <div style={{padding: '20px', color: '#ffff'}}>Football</div>
    <div style={{padding: '20px', color: '#ffff'}}>Ufc</div>
  </div>
}

function App() {
  return (
    <>
      <Nav></Nav>
    <div className="App">
      <Profiles />
    </div>
    </>
  );
}

export default App;
