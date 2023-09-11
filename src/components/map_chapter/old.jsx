import './question.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import media from '../../assets/media';
import { memo, useEffect } from 'react';


function QuestionLayout() {
    const spotQuestion = [
        { order: 1, class: "question spot1" },
        { order: 2, class: "question spot2" },
        { order: 3, class: "question spot3" },
        { order: 4, class: "question spot4" },
        { order: 5, class: "question spot5" },
    ]

    const questionContainer = [
        { order: 1, class: "content_question active", imgsrc: '' },
        { order: 2, class: "content_question", imgsrc: '' },
        { order: 3, class: "content_question", imgsrc: '' },
        { order: 4, class: "content_question", imgsrc: '' },
        { order: 5, class: "content_question", imgsrc: '' },
    ]

    const button_answers = [
        { order: 1, class: 'answer-button', name: 'a' },
        { order: 2, class: 'answer-button', name: 'b' },
        { order: 3, class: 'answer-button', name: 'c' },
        { order: 4, class: 'answer-button', name: 'd' },
    ]

    return (
        <>
            {spotQuestion.map(spot => {
                return (
                    <div className={spot.class}>
                        <button className="esc_question bg-transparent border-0 text-white">
                            <i className="fa-solid fa-xl fa-xmark"></i>
                        </button>
                        {questionContainer.map(container => {
                            return (
                                <div className={container.class}>
                                    <h4 className="text-white name_question"></h4>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img width="20%" className="image_question" src={container.imgsrc} alt={container.imgsrc} />
                                    </div>
                                    <div className="choice">
                                        {button_answers.map(btn => {
                                            return (
                                                <button className={btn.class} onClick={() => chooseAnswer(btn.order, spot.order, this)}>
                                                    <i className={`fa-solid fa-${btn.name}`}></i>
                                                    <p className="content_answer"></p>
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                        <div className={`result_question result_spot${spot.order}`}>Vượt thành công 1 ! </div>
                    </div>
                )
            })}
        </>
    )
}

function Question() {
    return (
        <>
            <QuestionLayout />
        </>
    )
}

export default memo(Question)