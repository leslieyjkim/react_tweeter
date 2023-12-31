import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetList from './components/TweetList'; 
import TweetForm from './components/TweetForm';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Profile/>
      <TweetForm/>
      <TweetList/>      
      <Button/>
    </div>
  );
}

export default App;
