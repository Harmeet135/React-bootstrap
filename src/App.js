import './App.css';
import Login from './components/login/Login';
import Loginb from './components/login/Loginb';
import Signup from './components/login/phone/Signup';
import Navbar from './components/navbar/Navbar';
import Postheader from './components/post-section/Postheader';
import Mainpost from './components/posts/Mainpost';

import Title from './components/title/Title';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Postheader />
      <Mainpost />
      <Login />
      <Loginb />
      <Signup />
    </div>
  );
}

export default App;
