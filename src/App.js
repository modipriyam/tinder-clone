import './App.css';
import Header from './header';
import Mainbody from './tinderCards';
import SwipeButton from './swipebuttons';

function App() {
  return (
    <div className="App">
      <Header/>
      <Mainbody/>
      <SwipeButton />
    </div>
  );
}

export default App;
