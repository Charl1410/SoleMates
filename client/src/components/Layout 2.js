import Nav from "./Nav"
import Footer from "./Footer"
import Hero from "./Hero"

const Layout = ({ children }) => {

  return (
    <div className="wrapper">
      <Nav />
      <Hero />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout