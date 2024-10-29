import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(props) {
  let { id } = useParams();
  const [num, setNum] = useState(0);
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    console.log(num);
  }, [num]);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.products[id].title}</h4>
          <h4 className="pt-5">{props.products[id].description}</h4>

          <button
            onClick={() => {
              setNum(num + 1);
            }}
          >
            버튼
          </button>
          {alert ? <div>지금 주문하세요</div> : null}
        </div>
      </div>
    </div>
  );
}
