import { Container, Row, Col } from "react-bootstrap";
import backgroundImage from "../../assets/home_background.png";
import ReactPlayer from "react-player/lazy";
import NetflixSlider from "../../components/NetflixSlider";

import useFirestore from "../../hooks/useFirestore";

const Home = () => {
	// const VIDEO_URL = "https://www.youtube.com/watch?v=p49ifHvi25A&t=137s";
	const homeVideo = useFirestore("videos/landingPage/landingPage_videos");

	return (
		<section className="home">
			<img src={backgroundImage} alt="Home background" />
			<Container fluid>
				<Row>
					<Col>
						<div className="hero_container">
							<div className="hero_title">
								<span></span>
								<h1>BCU Media Network Tv</h1>
								<button type="button" className="btn btn-warning">
									Watch
								</button>
							</div>
							<div className="hero_video">
								{homeVideo.map((video) => {
									return (
										<ReactPlayer
											key={video.id}
											url={video.url}
											controls
											playsinline
											width="100%"
											height="200px"
										/>
									);
								})}
							</div>
						</div>
					</Col>
				</Row>
				<Row>{/* <NetflixSlider /> */}</Row>
				<Row style={{ height: "500px" }}></Row>
			</Container>
		</section>
	);
};

export default Home;
