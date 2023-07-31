import './App.css';
import Board from '../components/context/Board';
import Footer from '../components/Footer';
import Header from '../components/context/Header';
import SquareProvider from '../components/context/SquareProvider';

function ContextApp() {
  return (
    <SquareProvider>
      <div>
        <Header />
        <Board />
        <Footer />
      </div>
    </SquareProvider>
  );
}

export default ContextApp;
