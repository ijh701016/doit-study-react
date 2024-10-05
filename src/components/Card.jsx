function Card(props) {
  return (
    <div className="col-md-4">
      <strong>{props.i}번째</strong>
      <img src={props.post.img} width="80%" />
      <h4>{props.post.title}</h4>
      <p>{props.post.description}</p>
    </div>
  );
}

export default Card;
