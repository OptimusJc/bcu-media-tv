// core imports
import { Outlet } from "react-router-dom";

// style and component imports
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<Container fluid>
			<Header />
			<Outlet />
			<Footer />
		</Container>
	);
};

export default App;
