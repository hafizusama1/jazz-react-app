import React from "react";
import { useNavigate } from "react-router-dom";

function CardContainer({
  value: { card_name, card_price, card_duration, card_features, src },
}) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/cart");
  };

  return (
    <div className="card">
      <h1 class="subheading">{card_duration}</h1>
      <h1 className="heading">{card_name}</h1>
      {card_features.map((feature) => {
        return <h1 className="des">{feature}</h1>;
      })}
      <h1 className="price">
        {card_price}
        <span style={{ color: "#000", fontSize: "20px", color: "#6b6a6b" }}>
          (Incl. Tax)
        </span>
      </h1>

      <button className="btn" onClick={onClick}>
        Add to cart
      </button>

      <img src={src} alt="image" />
    </div>
  );
}
export default CardContainer;
