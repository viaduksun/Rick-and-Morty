import Header from './components/Header/Header';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import Characters from './containers/Characters/Characters';
import Footer from './components/Footer/Footer';
import Episodes from './containers/Episodes/Episodes';
import Locations from './containers/Locations/Locations';
import WatchList from './containers/WatchList/WatchList';
import TransitionsModal from './components/Modal/TransitionsModal';
import { useSelector } from 'react-redux';

const App = () => {
  const isModalOpen = useSelector(state => state.characters.isModalOpen)
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <Characters />
          </Route>
          <Route exact path="/episodes">
            <Episodes />
          </Route>
          <Route exact path="/locations">
            <Locations />
          </Route>
          <Route exact path="/watch-list">
            <WatchList />
          </Route>
        </Switch>
        <Footer />
        {isModalOpen && <TransitionsModal isOpen={isModalOpen} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
