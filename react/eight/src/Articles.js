import { useState } from "react";
import Article from "./Article";
import { Link } from "react-router-dom";

function Articles(){
    let [articles, setArticles] = useState([
        {name: "Components", title: "Компоненты аналогичны функциям JavaScript. Они хранят состояние с помощью свойств и возвращают элементы React, которые затем появляются на веб-странице."},
        {name: "Props", title: "Props представляет коллекцию значений, которые ассоциированы с компонентом. Эти значения позволяют создавать динамические компоненты, которые не зависят от жестко закодированных статических данных."},
        {name: "State", title: "Объект state описывает внутреннее состояние компонента, он похож на props за тем исключением, что состояние определяется внутри компонента и доступно только из компонента. Также в отличие от props значения в state можно изменять."}
    ]);

    return (
        <div className="content" style={{textAlign: "center"}}>
            <h2>Articles</h2>
            {
                articles.map((item, index) => {
                    return (
                        <Article 
                            key={index}
                            name={item.name}
                            title={item.title}
                        />
                    )
                })
            }
            <Link to="/">На главную</Link>
        </div>
    )
}

export default Articles;