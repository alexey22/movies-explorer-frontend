import { useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

import Login from '../Login/Login';
import Register from '../Register/Register';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import './App.css';

import MainApi from '../../utils/MainApi';
import * as auth from '../../auth';

import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '' });

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  const handleLogin = ({ name, email }) => {
    setUserData({ name, email });
    setLoggedIn(true);
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      auth
        .getContent(jwt)
        .then((data) => {
          handleLogin({ name: data?.name, email: data?.email });
          navigate('/movies');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onLogin = (e, email, password) => {
    e.preventDefault();

    auth.authorize({ email, password }).then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        handleLogin({ name: data.name, email: data.email });
        navigate('/movies', { replace: true });
      }
    });
    // .catch((err) => {
    //   console.log(err);
    //   setInfoTooltipState({ open: true, success: false });
    // });
  };

  const onRegister = (e, name, email, password) => {
    e.preventDefault();

    auth.register({ name, email, password }).then(() => {
      navigate('/signin');
    });
    // .then(() => {
    //   setInfoTooltipState({ open: true, success: true });
    // })
    // .catch((err) => {
    //   console.log(err);
    //   setInfoTooltipState({ open: true, success: false });
    // });
  };

  const handleUpdateUser = (e, { name, email }) => {
    e.preventDefault();

    MainApi.setUserInfo({ name, email })
      .then((user) => {
        setCurrentUser(user);
        setUserData({ name, email });
      })
      .catch((errMessage) => alert(errMessage));

    //auth.register({ name, email, password });
    // .then(() => {
    //   setInfoTooltipState({ open: true, success: true });
    // })
    // .catch((err) => {
    //   console.log(err);
    //   setInfoTooltipState({ open: true, success: false });
    // });
  };

  function handleSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    setUserData({ name: '', email: '' });
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path='/' element={<Main loggedIn={loggedIn} />} />
        <Route
          path='/movies'
          element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              movies={movies}
              setMovies={setMovies}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />
          }
        />
        <Route
          path='/saved-movies'
          element={
            <ProtectedRoute
              element={SavedMovies}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              onUpdateUser={handleUpdateUser}
              onSignOut={handleSignOut}
              userData={userData}
            />
          }
        />
        <Route
          path='/signin'
          element={<Login onLogin={onLogin} tokenCheck={tokenCheck} />}
        />
        <Route path='/signup' element={<Register onRegister={onRegister} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
