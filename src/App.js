import React , { Component} from 'react'
import './App.css';
import Main from './components/MainComponent'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import { BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";


class App extends Component {

 
  

  render() {
    const store  = ConfigureStore()
    

    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
            <Main />
          <Footer />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
