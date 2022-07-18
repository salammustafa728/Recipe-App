import React from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/pages/Home';


const App = () => {

  return (
    <div className='App'>
      <Header/>
      <Home/>

      {/* <div id="edamam-badge" data-color="white"></div> */}
      <Footer/>
    </div>
  )
}

export default App
