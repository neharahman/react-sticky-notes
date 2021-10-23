import React from 'react'
import Header from './Note/Header';
import CreateNote from './Note/CreateNote';
import Note1 from './Note/Note1';
import Try from './Note/Try';
import Create from './Note/Create';
function App() {
  return (
    <>
    <Header/>
    <div className="container" style={{backgroundColor:'#fff'}}>
      <div className="row">
      <Create/>
      </div>
      <div className="row">
      </div>
    </div>
    </>
  )
};
export default App;