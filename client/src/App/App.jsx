import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { axiosInstance, setAccessToken } from '../shared/lib/axiosInstance';
import NavBar from '../widgets/NavBar/NavBar';
import MainPage from '../pages/MainPage/MainPage';
import HomePage from '../pages/HomePage/HomePage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignOutPage from '../pages/SignOutPage/SignOutPage';
import AccountPage from '../pages/AccountPage/AccountPage';
import Footer from '../widgets/Footer/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [wordCards, setWordCards] = useState([]);

  const handleLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    axiosInstance
      .get('/auth/refreshTokens')
      .then((response) => {
        setUser(response.data.data.user);
        setAccessToken(response.data.data.accessToken);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateLike = (wordId, change) => {
    setWordCards((prev) =>
      prev.map((wordCard) =>
        wordCard.id === wordId ? { ...wordCard, like: wordCard.like + change } : wordCard,
      ),
    );
  };

  return (
    <>
      <BrowserRouter>
        <NavBar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/main"
            element={
              <MainPage
                user={user}
                wordCards={wordCards}
                updateLike={updateLike}
                setWordCards={setWordCards}
              />
            }
          />
          <Route
            path="/category/:category"
            element={<CategoryPage user={user} updateLike={updateLike} />}
          />
          <Route path="/account/:id" element={<AccountPage user={user} />} />
          <Route path="/signUp" element={<SignUpPage setUser={setUser} />} />
          <Route path="/signIn" element={<SignInPage setUser={setUser} />} />
          <Route path="/signOut" element={<SignOutPage setUser={setUser} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
