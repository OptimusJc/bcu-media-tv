import { useEffect, useState } from "react";

const useTmdb = (url) => {
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((movies) => setMovieList(movies))
			.catch((err) => console.log(`Error on the useTMDB hook: ${err.message}`));
	}, [url]);

	return movieList;
};

export default useTmdb;
