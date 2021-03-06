import {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Gallery from './components/Gallery';

const App: FC = () => {
  return (
    <div>
      <Title />
      <Gallery />
    </div>
  );
};

export default App;
