import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import MovieGallery from "./Components/MovieGallery";
import MyFooter from "./Components/MyFooter";
import TvShows from "./Components/TvShows";
function App() {
  return (
     <BrowserRouter>
      <Header />
      <Route exact path="/TvShows" component={TvShows} />
      <MovieGallery title="Harry Potter" />
      <MovieGallery title="Lord of the Rings" />
      <MovieGallery title="Guardians of the Galaxy" />
      <MyFooter />
      </BrowserRouter>
  );
}

export default App;
