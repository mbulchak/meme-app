import {Outlet, useNavigate} from 'react-router';
import './App.css';
import {Navigation} from './components/Navigation';
import {useEffect} from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/table');
  }, []);

  return (
    <>
      <Navigation />

      <Outlet />
    </>
  );
}

export default App;
