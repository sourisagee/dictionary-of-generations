import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from '../widgets/NavBar/NavBar';
import MainPage from '../pages/MainPage/MainPage';
import HomePage from '../pages/HomePage/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Layout />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/users/:id" element={<CurrentUserPage />} />
          <Route path="/signUp" element={<SignUpPage setUser={setUser} />} />
          <Route path="/signIn" element={<SignInPage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
