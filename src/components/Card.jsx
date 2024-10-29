import { useNavigate } from "react-router-dom";

function Card(props) {
  let navigate = useNavigate();

  return (
    <div
      className="col-md-4"
      onClick={() => navigate(`/detail/${props.product.id}`)}
    >
      <strong>{props.product.id}번째</strong>
      {/* <img src={props.product.img} width="80%" /> */}
      <h4>{props.product.title}</h4>
      <p>{props.product.description}</p>
    </div>
  );
}

export default Card;
