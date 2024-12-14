import React from 'react';
import { Routes, Route,useLocation } from 'react-router-dom'; // Correct import for v6+
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './components/Themes';
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import {AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    
    <>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}> {/* Routes is the correct wrapper in React Router v6 */}
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/skills" element={<MySkillsPage />} />
        </Routes>
        </AnimatePresence>

      </ThemeProvider>
    </>
  );
}

export default App;
