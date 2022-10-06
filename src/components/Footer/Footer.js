import { Container } from "react-bootstrap";

import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
			<Container fluid>
				<div className="footer-content">
					<div className="copyright">
						<p>@copy 2022 - BCU Tv</p>
					</div>
					<div className="contact">
						<a href="#" className="contact_us">
							Contact Us
						</a>
						<a href="#" className="facebook">
							<FaFacebookF />
						</a>
						<a href="#" className="twitter">
							<FaTwitter />
						</a>
						<a href="#" className="youtube">
							<FaYoutube />
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
