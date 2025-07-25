import { useState } from 'react';
import './App.css'
import axios from 'axios';
import Chat from './Chat/Chat';
import Header from './Components/header';
import Footer from './Components/footer';

function App() {
  
  return (
    <>
      <Header/>
      <Chat/>
      <Footer/>
    </>
  )
}

export default App
