import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <main className="mx-auto my-4 container">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;
