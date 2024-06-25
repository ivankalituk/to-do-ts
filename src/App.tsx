import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from '@/components/header/header';

import MainPage from '@/pages/mainPage';

function App() {
  return (
    <div className="App">

      <Header />

      <main>
        <MainPage />
      </main>
    </div>
  );
}

export default App;
