import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import data from './db.json';

let nav = { "Главная": "/index", "Новости": "/news", "О компании": "/about", "Магазин": "/shop", "Контакты": "/contacts" };
let text = "My sity";
let slogan = "I am learning React";
let db = data.people;
let icon = data.people.pol;
let copy = "Copyright - 2025";

// console.log(db);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title={text} slogan={slogan} navigation={nav} db={db} icon={icon} copy={copy} />
  </React.StrictMode>
);


