import styled from "styled-components"

export const NavM = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;	
	left:0;
	height: 60px;
	width: 100%;
	background-color: #000000;
	color: #ffffff;
	padding: 10px 20px;
	margin-top: 20px;

	border-radius: 30px;
	box-shadow: 0px 0px 10px rgba(0,0,0,0.9)
	z-index: 1000;

	@media (max-width: 768px) {
		width: 100%;
		margin-right: 0;
		margin-left: 0;
		flex-direction: column;
}
`
export const Logo = styled.div`
	color: #E0E0E0;
	font-size: 24px;
	font-weight: bold;
`
export const NavList = styled.ul`
	list-style: none;
	display: flex;
	gap: 20px;

`

export const NavItem = styled.li`
	a {
	color: #E0E0E0;
	text-decoration: none;
	font-size: 18px;

	&:hover {
	color: #E0E0E0;
	}
}
`
export const Hamburger = styled.div`
	display: none;
	cursor: pointer;
	z-index: 1001;
`


