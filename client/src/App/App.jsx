import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from '../widgets/NavBar/NavBar';
import MainPage from '../pages/MainPage/MainPage';
import HomePage from '../pages/HomePage/HomePage';
import CategoryPage from '../pages/CategoryPage/CategoryPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import SignInPage from '../pages/SignInPage/SignInPage'
import AccountPage from '../pages/AccountPage/AccountPage'

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage user={user} />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/account/:id" element={<AccountPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/signIn" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
