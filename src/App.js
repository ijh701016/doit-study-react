import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

// 과제: bootstrap이나 css등 아무거나 사용하여 홈페이지나 블로그 홈을 만들어보기

function App() {
  return (
    <div className="App">
      <h1 class="h1-name">임정훈</h1>
      <h2>임정훈</h2>
      <h3>임정훈</h3>
      <h4>임정훈</h4>
      <h5>임정훈</h5>

      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">
          Left
        </button>
        <button type="button" class="btn btn-primary">
          Middle
        </button>
        <button type="button" class="btn btn-primary">
          Right
        </button>
      </div>
    </div>
  );
}

export default App;
