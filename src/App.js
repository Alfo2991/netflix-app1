import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
import MovieGallery from "./Components/MovieGallery";
import MyFooter from "./Components/MyFooter";
import MovieDetails from "./Components/MovieDetails";
import TVShows from "./Components/TvShows";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieGallery />} />
        <Route path="/TvShows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
