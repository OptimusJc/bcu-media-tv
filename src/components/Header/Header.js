import { Container, Navbar, Nav } from "react-bootstrap";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import bcu_logo from "../../assets/bcu_logo_compressed.png";

const Header = () => {
	return (
		<Navbar expand="md">
			<Container fluid>
				<Navbar.Brand href="#home">
					<img src={bcu_logo} alt="Navbar brand" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<HiOutlineMenuAlt4 />
				</Navbar.Toggle>

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
