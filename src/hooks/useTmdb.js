import { useEffect, useState } from "react";
import axios from "../utils/Axios";

const useTmdb = (url) => {
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setMovieList(res.data.results);
			})
			.catch((err) => console.log(err.message));
	}, [url]);

	return movieList;
};

export default useTmdb;
