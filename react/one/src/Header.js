import './Header.css';
import logo from './logo.svg';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
        </header>
    )
}

export default Header;