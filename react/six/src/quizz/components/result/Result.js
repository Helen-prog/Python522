import './Result.css';

function Result({correct, questions}){
    return(
        <div>
            <p className="text">Вы отгадали <b>{correct}</b> ответ{correct === 1 ? "" : correct>=2 && correct<=4 ? "а" : "ов"} из <b>{questions.length}</b></p>
            <a href="/" className='but'>Попробовать снова</a>
        </div>
    )
}

export default Result;