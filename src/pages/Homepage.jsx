import Slide from "../components/Slide";
import Counter from "../components/Counter";
import Profile from "../components/Profile";
import Card from "../components/Card";

export default function Homepage(props) {
  return (
    <div>
      <Slide></Slide>

      <Counter></Counter>
      <Profile></Profile>
      <div>
        {props.products.map((product, index) => (
          <Card product={product} /*key={post.id}*/></Card>
        ))}
      </div>
    </div>
  );
}
