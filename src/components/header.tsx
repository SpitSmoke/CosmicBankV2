import { useState } from "react"
import { Hamburger, Logo, NavItem, NavList, NavM } from "../styles/HeaderStyles"
import "../styles/HeaderStyles"

const Header = () => {

	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	return (
	<NavM>
		<Logo>CosmicBank</Logo>
		<Hamburger onClick={toggleMenu} className={menuOpen ? 'menu-open' : ''} >
			<div className="hamburger"></div>
			<div className="hamburger"></div>
			<div className="hamburger"></div>
		</Hamburger>
		<NavList>
			<NavItem><a href="#home">Home</a></NavItem>
			<NavItem><a href="#about">About</a></NavItem>
			<NavItem><a href="#services">Services</a></NavItem>
			<NavItem><a href="#contacts">Contacts</a></NavItem>
			<NavItem><a href="#login">Login</a></NavItem>
		</NavList>
	</NavM>
	)
}

export default Header