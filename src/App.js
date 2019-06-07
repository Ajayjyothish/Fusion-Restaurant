import React , { Component} from 'react'
import './App.css';
import Main from './components/MainComponent'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import { BrowserRouter} from 'react-router-dom'


class App extends Component {

 
  

  render() {

    

    return (
      <BrowserRouter>
        <div>
          <Header />
            <Main />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
