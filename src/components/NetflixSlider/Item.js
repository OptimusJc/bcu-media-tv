import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import "./Item.scss";
import { Card } from "react-bootstrap";

const Item = ({ movie }) => (
	<SliderContext.Consumer>
		{({ onSelectSlide, currentSlide, elementRef }) => {
			const isActive = currentSlide && currentSlide.id === movie.id;
			{
				/* const title = movie.title.split(".M")[0]; */
			}
			const title = movie.title;
			return (
				<Card
					className={cx("item", { "item--open": isActive })}
					ref={elementRef}
				>
					<Card.Img
						src="https://via.placeholder.com/200x100"
						alt="Card image"
					/>
					<Card.ImgOverlay>
						<Card.Title>{title}</Card.Title>
					</Card.ImgOverlay>

					<ShowDetailsButton onClick={() => onSelectSlide(movie)} />
					{isActive && <Mark />}
				</Card>
			);
		}}
	</SliderContext.Consumer>
);

export default Item;
