import './Quizzes.css';
import ProgressBar from '../progress/ProgressBar';

function Quizzes({question, onClickVariant, questions, step}){
    const percent = Math.round(step / questions.length * 100);
    // console.log(percent);
    

    return (
        <div className="content">
            <ProgressBar percent={percent} />
            <h3>{question.title}</h3>
            <ul>
                {
                    question.variants.map((text, index) => <li key={index} onClick={() => onClickVariant(index)}>{text}</li>)
                }
            </ul>
        </div>
    )
}

export default Quizzes;