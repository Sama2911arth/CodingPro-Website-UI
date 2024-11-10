import React from 'react';
import './App.css';
import FirstPage from './Components/FirstPage';
import Features from './Components/Features';
import Courses from './Components/Courses';
import Awards from './Components/Awards';
import LearningJourney from './Components/LearningJourney';
import StudentReviews from './Components/StudentReviews';
import Teachers from './Components/Teachers';
import News from './Components/News';
import AppPromo from './Components/AppPromo';
import Social from './Components/Social';
import Enquiry from './Components/Enquiry';

function App() {
  return (
    <>
      <FirstPage />
      <Features />
      <Courses />
      <Awards />
      <LearningJourney />
      <StudentReviews />
      <Teachers />
      <News />
      <AppPromo />
      <Enquiry />
      <Social />
    </>
  )
}

export default App