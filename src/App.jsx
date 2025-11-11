import { Suspense, lazy } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header/Header';
const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
      <HomePage />
      <ToastContainer position="top-center" autoClose={3000} />
      </Suspense>
    </div>
    
  );
}

export default App;
