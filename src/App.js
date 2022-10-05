// core imports
import { Outlet } from "react-router-dom";

// style and component imports
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
