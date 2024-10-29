import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Homepage from "./pages/Homepage";
import Detail from "./pages/Detail";
import EventPage from "./pages/events/EventPage";

import axios from "axios";

const products = [
  {
    id: 0,
    title: "도수 낮춘 후레쉬",
    description:
      "원래 16.5%였던거 같은데 16도로 바뀐거 같다. 언제부터 그랬는지 눈치채지 못해 당황..",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s",
  },
  {
    id: 1,
    title: "중간을 모르는 날씨",
    description:
      "2주 전만해도 죽고싶은 여름이였는데, 지금은 겨울 미리보기이다. 심지어 일교차도 미친거 같다.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s",
  },
  {
    id: 2,
    title: "스터디 3주차",
    description: "벌써 반 이상 왔다. 심지어 다음주면 마지막주이다.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s",
  },
  {
    id: 3,
    title: "얼마 남지 않은 시험",
    description:
      "시험이 얼마 남지 않았다. 지금부터 열심히 하면 되지만 확통은 아닌거 같다.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s",
  },
];

function App() {
  // axios로 값 받은 후 페이지에 렌더하기
  // 리엑트 쿼리까지 공부하기
  // localStorage까지 완료

  axios
    .get("https://codingapple1.github.io/shop/data2.json")
    .then((response) => {
      console.log(response.data);
    });

  return (
    <div className="App">
      <NavigationBar></NavigationBar>

      <Routes>
        <Route path="/" element={<Homepage products={products} />} />
        <Route path="/detail/:id" element={<Detail products={products} />} />
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>원</p>} />
          <Route path="two" element={<p>투</p>} />
        </Route>
        <Route path="/about" element={<div>어바웃페이지임</div>} />
        <Route path="*" element={<div>없는 페이지입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;
