import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Root = () => {
  return (
    <>
    {/* Navbar */}
    <Navbar/>
    <main><Outlet/></main>
    {/* Footer */}
    <Footer/>
    </>
  )
}

export default Root