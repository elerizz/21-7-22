import './App.css';
import { useState } from 'react';
import Gallery from './components/Gallery';
import Button from './components/Button';
import Hero from './components/Hero';

function App() {
  const [isGalleryVisibile, setGalleryVisibility] = useState(true);

  return (
    <div className="App">
      <Hero />

      <nav className='navbar__button'> 
      <Button btnTextCont="show / hide" onHandleClick={() => setGalleryVisibility(!isGalleryVisibile)}/>
      </nav>
      <Gallery visibility={isGalleryVisibile}/>
      <hr />

    </div>
  );
}

export default App;
