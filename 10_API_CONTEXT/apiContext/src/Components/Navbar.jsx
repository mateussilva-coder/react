import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{display:"flex", gap: "10px", justifyContent: "end", padding: "20px"}}>
      {/*
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      */}
      <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>Contacts</NavLink>
    </div>
  )
}

export default Navbar