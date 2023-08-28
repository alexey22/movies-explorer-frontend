import { useState, useEffect } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

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

  const [loggedIn, setLoggedIn] = useState(localStorage.token ? true : false);
  const [userData, setUserData] = useState({ name: '', email: '' });

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState(null);

  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [profileError, setProfileError] = useState('');

  const navigate = useNavigate();

  const handleLogin = ({ name, email }) => {
    setUserData({ name, email });
    setLoggedIn(true);
  };

  const tokenCheck = ({ isBack }) => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      auth
        .getContent(jwt)
        .then((data) => {
          handleLogin({ name: data?.name, email: data?.email });
          if (isBack) navigate(-1, { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    tokenCheck({ isBack: false });
  }, []);

  const onLogin = (email, password) => {
    auth
      .authorize({ email, password })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('name', data.name);
          localStorage.setItem('email', data.email);
          handleLogin({ name: data.name, email: data.email });
          MainApi.setAuthHeaderToken(data.token);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        switch (err) {
          case 400:
            setLoginError('Вы ввели неправильный логин или пароль.');
            break;
          case 500:
            setLoginError('500 На сервере произошла ошибка.');
            break;
          default:
            setLoginError('Вы ввели неправильный логин или пароль.');
            break;
        }
      });
  };

  const onRegister = (e, name, email, password) => {
    e.preventDefault();

    auth
      .register({ name, email, password })
      .then(() => {
        onLogin(email, password);
      })
      .catch((err) => {
        switch (err) {
          case 409:
            setRegisterError('Пользователь с таким email уже существует.');
            break;
          case 500:
            setRegisterError('500 На сервере произошла ошибка.');
            break;
          default:
            setRegisterError('При регистрации пользователя произошла ошибка.');
            break;
        }
      });
  };

  const handleUpdateUser = (e, { name, email }) => {
    e.preventDefault();

    MainApi.setUserInfo({ name, email })
      .then((user) => {
        setCurrentUser(user);
        setUserData({ name: user.name, email: user.email });
        localStorage.name = user.name;
        localStorage.email = user.email;
        setProfileError('Данные пользователя успешно сохранены');
      })
      .catch((err) => {
        switch (err) {
          case 409:
            setProfileError('Пользователь с таким email уже существует.');
            break;
          case 500:
            setProfileError('500 На сервере произошла ошибка.');
            break;
          default:
            setProfileError('При обновлении профиля произошла ошибка.');
            break;
        }
      });
  };

  function handleSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('movies');

    localStorage.removeItem('findedMovies');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('isShort');

    setMovies([]);
    setSavedMovies(null);
    setUserData({ name: '', email: '' });
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route exact path='/' element={<Main loggedIn={loggedIn} />} />
        <Route
          exact
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
          exact
          path='/saved-movies'
          element={
            <ProtectedRoute
              element={SavedMovies}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              loggedIn={loggedIn}
              movies={movies}
            />
          }
        />
        <Route
          exact
          path='/profile'
          element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              onUpdateUser={handleUpdateUser}
              onSignOut={handleSignOut}
              userData={userData}
              profileError={profileError}
              setProfileError={setProfileError}
            />
          }
        />
        <Route
          exact
          path='/signin'
          element={
            <Login
              onLogin={onLogin}
              tokenCheck={tokenCheck}
              loginError={loginError}
              setLoginError={setLoginError}
            />
          }
        />
        <Route
          exact
          path='/signup'
          element={
            <Register
              onRegister={onRegister}
              registerError={registerError}
              setRegisterError={setRegisterError}
            />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
