import { FC } from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';

const App: FC = () => {
  return (
    <div>
      <Header />
      <Gallery />
    </div>
  );
};

export default App;
