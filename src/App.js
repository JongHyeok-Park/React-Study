import './App.css';
import {useState} from "react";

function App() {
    const [titles, setTitles] = useState(['남자 코트 추천', '파이썬 독학', '리액트 공부']);
    const [likes, setLikes] = useState([0, 0, 0]);
    const [modal, setModal] = useState([false, 0]);

    return (
        <div className="App">
            <div className="nav-black">
                <h4>마이 리틀 블로그</h4>
                <button onClick={() => {
                    let sortedCody = [...titles];
                    sortedCody.sort();
                    setTitles(sortedCody);
                }}>오름차순 정렬</button>
                <button onClick={() => {
                    let codyTitle = [...titles];
                    codyTitle[0] = '여자 코트 추천';
                    setTitles(codyTitle);
                }}>바꾸기</button>
            </div>

            {/*<div className="list">*/}
            {/*    <h4>{title[0]} <span onClick={() => { setLike(like + 1) }}>👍 {like}</span></h4>*/}
            {/*    <p>2월 17일 작성</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4>{title[1]}</h4>*/}
            {/*    <p>2월 17일 작성</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4 onClick={() => {*/}
            {/*        if (modal)*/}
            {/*            setModal(false);*/}
            {/*        else*/}
            {/*            setModal(true);*/}
            {/*    }}>{title[2]}</h4>*/}
            {/*    <p>2월 17일 작성</p>*/}
            {/*</div>*/}

            {
                titles.map((title, i) => {
                    return (
                        <div className="list" key={ i }>
                            <h4 onClick={() => {
                                let copyModal = [!modal[0], i]
                                setModal(copyModal);
                                }}>{ title } 
                                <span onClick={() => {
                                    let copyLikes = [...likes];
                                    copyLikes[i]++;
                                    setLikes(copyLikes);
                                }}>👍 {likes[i]}</span>
                            </h4>
                            <p>2월 17일 작성</p>
                        </div>
                    )
                })
            }

            {
                modal[0] ? <Modal titles = {titles} setTitles = {setTitles} index = {modal[1]}/> : null
            }

        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.titles[props.index]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => {
                let codyTitle = [...props.titles];
                codyTitle[0] = '여자 코트 추천';
                props.setTitles(codyTitle);
            }}>글수정</button>
        </div>
    )
}

export default App;
