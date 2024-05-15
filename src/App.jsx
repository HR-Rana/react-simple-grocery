
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Footer from './assets/Components/Footer/Footer'
function App() {


  return (
    <>
     <BrowserRouter>
        <Navbar />

        <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
