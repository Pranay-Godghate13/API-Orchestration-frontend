import { Suspense, lazy } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HomePage />
      <ToastContainer position="top-center" autoClose={3000} />
    </Suspense>
  );
}

export default App;
