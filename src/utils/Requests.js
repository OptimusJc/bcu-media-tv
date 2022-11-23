const API_KEY = "6767787c13565b7aaf79338b03e53116";

const Requests = {
	fetchPopular: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
	fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	fetchLatest: `movie/latest?api_key=${API_KEY}&language=en-US`,
	fetchNowPlaying: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
};

export default Requests;
