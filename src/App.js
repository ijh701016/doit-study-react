import "./App.css";

import NavigationBar from "./components/NavigationBar";
import Slide from "./components/Slide";
import Post from "./components/Post";

import Counter from "./components/Counter";
import Profile from "./components/Profile";
import Card from "./components/Card";

function Posts() {
  return (
    <div className="d-flex justify-content-around">
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
}

function App() {
  const posts = [
    {
      title: "도수 낮춘 후레쉬",
      description:
        "원래 16.5%였던거 같은데 16도로 바뀐거 같다. 언제부터 그랬는지 눈치채지 못해 당황..",
    },
    {
      title: "중간을 모르는 날씨",
      description:
        "2주 전만해도 죽고싶은 여름이였는데, 지금은 겨울 미리보기이다. 심지어 일교차도 미친거 같다.",
    },
    {
      title: "스터디 3주차",
      description: "벌써 반 이상 왔다. 심지어 다음주면 마지막주이다.",
    },
    {
      title: "얼마 남지 않은 시험",
      description:
        "시험이 얼마 남지 않았다. 지금부터 열심히 하면 되지만 확통은 아닌거 같다.",
    },
  ];

  const listItems = posts.map((post) => post);
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Slide></Slide>
      <Posts></Posts>

      <Counter></Counter>
      <Profile></Profile>
      <div>
        {posts.map((post, index) => (
          <Card post={post} i={index + 1}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
