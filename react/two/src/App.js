import './App.css';
import Nav from './Nav';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

function App(props) {
  // let title = "My sity";
  // let slogan = "I am learning React";
  let {title, slogan, navigation, db, icon, copy} = props;

  return (
    <div className="App">
      <Header title={title} slogan={slogan} />
      <Nav navigation={navigation} />
      <Article db={db} icon={icon} />
      <Footer text={copy} />
    </div>    
  );
}

export default App;
