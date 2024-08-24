import axios from "axios";

const config = {
  endpoint: {
    TopAlbum: "https://qtify-backend-labs.crio.do/albums/top",
    NewAlbum: "https://qtify-backend-labs.crio.do/albums/new",
    Songs: "https://qtify-backend-labs.crio.do/songs",
    genres: "https://qtify-backend-labs.crio.do/genres",
  },
};

const fetchTopAlbum = async () => {
  const res = await axios.get(config.endpoint.TopAlbum);
  return res.data;
};

const fetchNewAlbum = async () => {
  const res = await axios.get(config.endpoint.NewAlbum);
  return res.data;
};

const fetchSongs = async () => {
  const res = await axios.get(config.endpoint.Songs);
  return res.data;
};

const fetchGenres = async () => {
  const res = await axios.get(config.endpoint.genres);
  return res.data;
};

export { fetchTopAlbum, fetchNewAlbum, fetchSongs, fetchGenres };
