import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Infinitelist from "./Components/InfiniteList";
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return ( 
    <Provider store={store}>
      <Header />
      <Infinitelist />
    </Provider>
  );
}

export default App;
