
import Header from './component/header/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './component/footer/Footer.jsx'

function Layout() {
  
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout;
