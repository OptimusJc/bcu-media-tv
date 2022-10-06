import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import bcu_logo from "../../assets/bcu_tv_logo.png";

const Header = () => {
	return (
		<Navbar expand="lg">
			<Container fluid>
				<Navbar.Brand href="#home">
					<img src={bcu_logo} alt="Navbar brand" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav>
						<Nav.Link href="#browse">Browse</Nav.Link>
						<Nav.Link href="#search">Search</Nav.Link>
						<Nav.Link href="#need-jesus">Need Jesus?</Nav.Link>
						<Nav.Link href="#creators">Creators</Nav.Link>
						<Nav.Link href="#give">Give</Nav.Link>
						<Nav.Link href="#watch">Start Watching</Nav.Link>
						<Nav.Link href="#sign-in">Sign In</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
