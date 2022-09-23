import { Card } from "react-bootstrap";

const Card = ({ Title, text, button, img }) => {
  return (
    <div class="card" style="width: 18rem;">
      <img src={img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">{Title}</h5>
        <p class="card-text">{text}</p>
        <a href="#" class="btn btn-primary">
          {button}
        </a>
      </div>
    </div>
  );
};

export default Card;
