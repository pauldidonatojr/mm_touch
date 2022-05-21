import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { HomePage, ErrorPage } from './pages'
function App() {
 return (
   <Router>
     <Navbar/>
   <Routes>
    <Route exact path="/" element={<HomePage />} />

    <Route exact path="/*" element={<ErrorPage />}/>

   </Routes>
   <Footer />
  </Router>
 )
}

export default App
