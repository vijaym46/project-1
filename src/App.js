import React from 'react'
import RoutesConfig from './routes/RoutesConfig'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Header/>
        <RoutesConfig/>
        <Footer/>
    </div>
  )
}

export default App