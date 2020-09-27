import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profiles from './components/Profiles';
let MyContext;
if(process.env.NODE_ENV === "development") {
   MyContext = {
    url: 'http://localhost:3000'
  }
}else {
  MyContext = {
    url: 'https://tenniswebsite.herokuapp.com'
  }
}


export const urlContext = React.createContext(MyContext.url);


const Nav = ()=>{
  return <div style={{background: 'red', display: 'flex', justifyContent: 'center'}}>
    <div style={{padding: '20px', color: '#ffff', textDecoration: 'underline'}}>Tennnis</div>
    <div style={{padding: '20px', color: '#ffff'}}>Football</div>
    <div style={{padding: '20px', color: '#ffff'}}>Ufc</div>
  </div>
}

function App() {
  return (
    <urlContext.Provider value={MyContext.url}>
      <Nav></Nav>
    <div className="App">
      <Profiles />
    </div>
    </urlContext.Provider>
  );
}

export default App;
