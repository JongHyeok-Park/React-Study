import './App.css';
import {useState} from "react";

function App() {
    const [title, setTitle] = useState(['남자 코트 추천', '파이썬 독학', '리액트 공부']);
    const [like, setLike] = useState(0);
    return (
        <div className="App">
            <div className="nav-black">
                <h4>마이 리틀 블로그</h4>
                <button onClick={() => {
                    let sortedCody = [...title];
                    sortedCody.sort();
                    setTitle(sortedCody);
                }}>오름차순 정렬</button>
                <button onClick={() => {
                    let codyTitle = [...title];
                    codyTitle[0] = '여자 코트 추천';
                    setTitle(codyTitle);
                }}>바꾸기</button>
            </div>
            <div className="list">
                <h4>{title[0]} <span onClick={() => { setLike(like + 1) }}>👍 {like}</span></h4>
                <p>2월 17일 작성</p>
            </div>
            <div className="list">
                <h4>{title[1]}</h4>
                <p>2월 17일 작성</p>
            </div>
            <div className="list">
                <h4>{title[2]}</h4>
                <p>2월 17일 작성</p>
            </div>
        </div>
    );
}

export default App;
