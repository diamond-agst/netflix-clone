const API_KEY = "9eee09490302070b56999d0504b969a9";

const requests = {
    fetchMostPopular: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchDramaMovie: `discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchComedyMovie: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchActionMovie: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovie: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
}

export default requests