import './index.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Feed from './components/Feed';
import Popup from './components/Popup';

const App = () => {

  return (
    <div className="app">
      <Nav />
      <Header />
      <Feed />
      {/* <Popup /> */}
    </div>
  )
}

export default App
