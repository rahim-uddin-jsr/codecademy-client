import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './components/routes/routes';

function App() {
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
  }
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
