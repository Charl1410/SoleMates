import Nav from "./Nav"
import Footer from "./Footer"


const Layout = ({ children }) => {

  return (
    <div className="wrapper">
      <Nav />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout