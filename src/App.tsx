import './App.css';
import { Routes, Route } from 'react-router-dom';

// компоненты
import Header from '@/components/header/header';

// страницы
import MainPage from '@/pages/mainPage';
import TaskPage from '@/pages/taskPage';


function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route Component={MainPage} path='/'/>
          <Route Component={TaskPage} path='/TaskPage/:task_id'/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
