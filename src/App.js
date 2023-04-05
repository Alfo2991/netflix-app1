import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Header from "./Components/Header";
import MovieGallery from "./Components/MovieGallery";
import MyFooter from "./Components/MyFooter";
import MovieDetails from "./Components/MovieDetails";
import TVShows from "./Components/TvShows";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MovieGallery} />
        <Route exact path="/TvShows" component={TVShows} />
        <Route exact path="/movie-details/:movieId" component={MovieDetails} />
      </Switch>
      <MyFooter />
    </Router>
  );
}

export default App;