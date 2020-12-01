import react from 'react';
import HomePage from './components/pages/HomePage';
import './Main.css';

  
  const Main = () => {
    
    return (
        <div className="App">
          <header className="App-header">
              <HomePage/>
          </header>
        </div>
      );
  }
  
  export default Main;