import { Container, Row, Col } from "react-bootstrap";
import backgroundImage from "../../assets/home_background.png";
import ReactPlayer from "react-player/lazy";
import Slider from "../../components/NetflixSlider";
import ErrorBoundary from "../../components/error/ErrorBoundary";

import useFirestore from "../../hooks/useFirestore";
import useTmdb from "../../hooks/useTmdb";
import Requests from "../../utils/Requests";

const Home = () => {
	const holySpirit = useFirestore("videos/holySpirit/holySpirit_videos");
	const homeVideo = useFirestore("videos/landingPage/landingPage_videos");

	// const movies = [
	// 	{
	// 		id: 1,
	// 		image: "/images/slide1.jpg",
	// 		imageBg: "/images/slide1b.webp",
	// 		title: "1983",
	// 	},
	// 	{
	// 		id: 2,
	// 		image: "/images/slide2.jpg",
	// 		imageBg: "/images/slide2b.webp",
	// 		title: "Marriage",
	// 	},
	// 	{
	// 		id: 3,
	// 		image: "/images/slide3.jpg",
	// 		imageBg: "/images/slide3b.webp",
	// 		title: "The rain",
	// 	},
	// 	{
	// 		id: 4,
	// 		image: "/images/slide4.jpg",
	// 		imageBg: "/images/slide4b.webp",
	// 		title: "Holy Spirit",
	// 	},
	// 	{
	// 		id: 5,
	// 		image: "/images/slide5.jpg",
	// 		imageBg: "/images/slide5b.webp",
	// 		title: "Elite",
	// 	},
	// 	{
	// 		id: 6,
	// 		image: "/images/slide6.jpg",
	// 		imageBg: "/images/slide6b.webp",
	// 		title: "Black mirror",
	// 	},
	// ];

	const moviesList = useTmdb(Requests.fetchPopular);

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
				<Row>
					<ErrorBoundary>
						<Slider>
							{/* TODO: use firebase cloud functions to create video thumbnails and then use the data to display the links here  */}
							{moviesList?.map((movie) => {
								console.log(movie);
								return <Slider.Item key={movie?.id} movie={movie} />;
							})}
						</Slider>
					</ErrorBoundary>
				</Row>
				<Row style={{ height: "500px" }}></Row>
			</Container>
		</section>
	);
};

export default Home;
