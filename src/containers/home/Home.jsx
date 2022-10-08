import { Container, Row, Col } from "react-bootstrap";
import backgroundImage from "../../assets/home_background.png";

import ReactPlayer from "react-player/lazy";

const Home = () => {
	const VIDEO_URL = "https://www.youtube.com/watch?v=p49ifHvi25A&t=137s";

	return (
		<section className="home">
			<img src={backgroundImage} alt="Home background" />
			<Container fluid>
				<Row>
					<Col>
						<div className="hero_container">
							<div className="hero_title">
								<span></span>
								<h1>Body of Christ United Global Internation Ministries Tv</h1>
								<button type="button" className="btn btn-warning">
									Watch
								</button>
							</div>
							<div className="hero_video">
								<ReactPlayer
									url={VIDEO_URL}
									controls
									playsinline
									width="100%"
									height="200px"
								/>
							</div>
						</div>
					</Col>
				</Row>
				<Row style={{ height: "500px" }}></Row>
			</Container>
		</section>
	);
};

export default Home;
