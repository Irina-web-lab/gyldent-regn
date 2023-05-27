import './App.css';
import AllCategories from './Components/Filter/AllCategories';
import Footer from './Components/Footer';
import Header from './Components/Header/Header';
import Items from './Components/ItemsComponents/Items';
import ScrollButton from './Components/ScrollButton/ScrollButton';
import Promo from './Components/promo/Promo';

function App() {
  return (
    <div className="App">
            <div>
              <Promo />
            </div>
            <div>
              <Header />
            </div>
            <div className='block'>
              <AllCategories />
      </div> 
      <div className='block'> 
              <Items /> 
              <Footer />
              <ScrollButton />
    </div>
    </div>
  );
}

export default App;
