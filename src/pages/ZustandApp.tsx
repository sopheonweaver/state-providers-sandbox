import './App.css';
import Board from '../components/zustand/Board';
import Footer from '../components/Footer';
import Header from '../components/zustand/Header';

function ZustandApp() {
  return (
    <div>
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default ZustandApp;
