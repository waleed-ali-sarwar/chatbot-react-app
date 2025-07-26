// App Component - Main entry point of application
import './App.css'
import Chat from './Chat/Chat';
import Header from './Components/header';
import Footer from './Components/footer';

function App() {
  
  return (
    <>
      {/* // Header  */}
      <Header/>
      {/* // Chat  */}
      <Chat/>
      {/* // Footer  */}
      <Footer/>
    </>
  )
}

export default App
