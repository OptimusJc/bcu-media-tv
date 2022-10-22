import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Slider = () => {
	return (
		// logic for geting the code from database and
		// mapping them here
		<Container>
			<button className="handle left-handle">
				<div className="text">&#8249;</div>
			</button>
			<div className="slide">
				<Link to="">
					<Card className="bg-dark text-white">
						<Card.Img
							src="https://via.placeholder.com/100x160"
							alt="Card image"
						/>
						<Card.ImgOverlay>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
							<Card.Text>Last updated 3 mins ago</Card.Text>
						</Card.ImgOverlay>
					</Card>
				</Link>

				<Link to="">
					<Card className="bg-dark text-white">
						<Card.Img
							src="https://via.placeholder.com/100x160"
							alt="Card image"
						/>
						<Card.ImgOverlay>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
							<Card.Text>Last updated 3 mins ago</Card.Text>
						</Card.ImgOverlay>
					</Card>
				</Link>

				<Link to="">
					<Card className="bg-dark text-white">
						<Card.Img
							src="https://via.placeholder.com/100x160"
							alt="Card image"
						/>
						<Card.ImgOverlay>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
							<Card.Text>Last updated 3 mins ago</Card.Text>
						</Card.ImgOverlay>
					</Card>
				</Link>

				<Link to="">
					<Card className="bg-dark text-white">
						<Card.Img
							src="https://via.placeholder.com/100x160"
							alt="Card image"
						/>
						<Card.ImgOverlay>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
							<Card.Text>Last updated 3 mins ago</Card.Text>
						</Card.ImgOverlay>
					</Card>
				</Link>

				<Link to="">
					<Card className="bg-dark text-white">
						<Card.Img
							src="https://via.placeholder.com/100x160"
							alt="Card image"
						/>
						<Card.ImgOverlay>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
							<Card.Text>Last updated 3 mins ago</Card.Text>
						</Card.ImgOverlay>
					</Card>
				</Link>

				<Link to="">
					<Card className="bg-dark text-white">
						<Card.Img
							src="https://via.placeholder.com/100x160"
							alt="Card image"
						/>
						<Card.ImgOverlay>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
							<Card.Text>Last updated 3 mins ago</Card.Text>
						</Card.ImgOverlay>
					</Card>
				</Link>
			</div>
			<button className="handle right-handle">
				<div className="text">&#8250;</div>
			</button>
		</Container>
	);
};

export default Slider;
