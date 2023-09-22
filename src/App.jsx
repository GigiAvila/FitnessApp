import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Main from './components/Main/Main';
import HomePage from './pages/HomePage';
import Routines from './pages/Routines';
import Routine from './pages/Routine';
import History from './pages/History';
import ProfilePage from './pages/ProfilePage';
import { themeLight, themeDark } from './Styles/theme';
import GlobalStyles from './Styles/GlobalStyles';
import { UserContextProvider } from './context/UserContext';
import { RoutinesContextProvider } from './context/RoutinesContext';

function App() {
  const [themeProvide, setThemeProvide] = useState(themeDark);

  return (
    <ThemeProvider theme={themeProvide}>
      <UserContextProvider>
        <RoutinesContextProvider>
          <GlobalStyles />
          <BrowserRouter basename='/'>
            <Routes>
              <Route index element={<WelcomePage themeProvide={themeProvide} />} />

              <Route path="/" element={<Main themeProvide={themeProvide} setThemeProvide={setThemeProvide} />}>
                <Route path="home" element={<HomePage />} />
                <Route path="routines" element={<Routines />} />
                <Route path="routine/:id" element={<Routine />} />
                <Route path="history" element={<History />} />
                <Route path="profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </RoutinesContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
