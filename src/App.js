import logo from './logo.svg';
import './App.css';
import Hearder from './Component/Hearder/Hearder';
import Button from '@material-ui/core/Button';
import Banner from './Component/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Hearder></Hearder>
      <Banner></Banner>
    </div>
  );
}

export default App;
