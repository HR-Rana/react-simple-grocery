
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Footer from './assets/Components/Footer/Footer'
import Routing from './RoutingPage/Routing'
function App() {


  return (
    <>
     <BrowserRouter>
        <Navbar />
          <Routing />
        <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
