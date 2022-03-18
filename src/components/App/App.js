import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
// import Tooltip from '../Tooltip/Tooltip';

function App() {
  return (
    <Routes>
      <Route path="/" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        }
      />
      <Route path="/movies" element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        }
      />
      <Route path="/saved-movies" element={
          <>
            <Header />
            <SavedMovies />
            <Footer />
          </>
        }
      />
      <Route path="/profile" element={
          <>
            <Header />
            <Profile />
          </>
        }
      />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
