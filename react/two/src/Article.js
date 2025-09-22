import mars from './icons/mars.png';
import female from './icons/female.png';

function Article(props) {
    let { db, icon } = props;

    return (
        <div className="app">
            {
                Object.keys(db).map((elem, index) => {
                    if(db[elem].pol === "female"){
                        icon = female;
                    } else {
                        icon = mars;
                    }
                    return (
                        <div className="card" key={index}>
                            <img src={db[elem].photo} alt= {db[elem].name} />
                            <div className="name">
                                {db[elem].name} {db[elem].surname}
                            </div>
                            <div className="pol">
                                <img src={icon} alt={db[elem].surname} />
                            </div>
                            <div className="age">
                                {db[elem].age}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Article;