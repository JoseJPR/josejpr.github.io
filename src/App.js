/** Import main dependencies */
import React, { useState, useEffect } from 'react';

/** Import components */
import Header from './components/header/Header';
import Connection from './components/connection/Connection';
import Profile from './components/profile/Profile';
import Skills from './components/skills/Skills';
import Github from './components/github/Github';
import Npm from './components/npm/Npm';
import PWAExperts from './components/pwaexperts/PWAExperts';
import Phonegapspain from './components/phonegapspain/Phonegapspain';
import Collaborations from './components/collaborations/Collaborations';
import Contact from './components/contact/Contact';
import Twitter from './components/twitter/Twitter';
import Youtube from './components/youtube/Youtube';
import Footer from './components/footer/Footer';

/** Import services */
import Social from './services/social';

/** Import ui-kit design */
import './ui-kit/main.scss';

// Define App function like wrapper of all components.
function App() {
  const [socialContent, setSocialContent] = useState([]);

  useEffect(() => {
    // Async function for get all social content.
    const fetchData = async () => {
      // Instance service for load all content.
      const result = await Social.get();
      // Set into state.
      setSocialContent(result);
    };
    fetchData();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Header />
      <main>
        <Connection />
        <Profile />
        <Skills />
        {socialContent.github && <Github content={socialContent.github} />}
        {socialContent.npm && <Npm content={socialContent.npm} />}
        {socialContent.pwaexperts && <PWAExperts content={socialContent.pwaexperts} />}
        {socialContent.phonegapspain && <Phonegapspain content={socialContent.phonegapspain} />}
        {socialContent.collaborations && <Collaborations content={socialContent.collaborations} />}
        <Contact />
        {socialContent.twitter && <Twitter content={socialContent.twitter} />}
        {socialContent.youtube && <Youtube content={socialContent.youtube} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
