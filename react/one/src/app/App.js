import './App.css';
import Article from '../article/Article';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function App() {  // JSX
  return (
    <div className="App">
      <Header />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
