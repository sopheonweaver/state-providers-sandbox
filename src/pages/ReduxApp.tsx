import './App.css';
import Board from '../components/redux/Board';
import Footer from '../components/Footer';
import Header from '../components/redux/Header';
import { Provider } from 'react-redux';
import { store } from '../components/redux/store';

function ReduxApp() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Board />
        <Footer />
      </div>
    </Provider>
  );
}

export default ReduxApp;
