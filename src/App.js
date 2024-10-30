import './App.scss';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        test hello world
        <div>
          <button>
            <Link to="/users">go to user test</Link>
          </button>
          <button>
            <Link to="/admins">go to admin test</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
