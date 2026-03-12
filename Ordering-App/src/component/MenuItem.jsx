import { useState } from "react";
import "./css/MenuItem.css";

export default function MenuItem({ item, onAdd }) {
  const [showEdit, setShowEdit] = useState(false);

  // EDIT STATES
  const [cheese, setCheese] = useState(0);
  const [veggie, setVeggie] = useState(false);

  // PRICE LOGIC
  const basePrice = item.price;
  const extraCheesePrice = 5;
  const veggieDiscount = 10;

  const calculatedPrice =
    basePrice + cheese * extraCheesePrice - (veggie ? veggieDiscount : 0);

  return (
    <div className="menu-item">

      {/* IMAGE + PRICE + OVERLAY BUTTONS */}
      <div className="image-wrapper">
        <img src={item.image} alt={item.name} className="menu-item-image" />

        {/* PRICE CIRCLE */}
        <div className="price-circle">{calculatedPrice} kr</div>

        {/* OVERLAY BUTTONS */}
        <div className="overlay-buttons">
          <div className="info-btn">i</div>
          <div className="info-popup">Näringsinfo: {item.nutrition}</div>

          <div className="allergy-btn">⚠</div>
          <div className="allergy-popup">Allergier: {item.allergies}</div>
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="menu-item-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="item-actions">
          <button className="edit-btn" onClick={() => setShowEdit(true)}>
            Edit
          </button>
          <button className="add-btn" onClick={() => onAdd(item)}>
            Add
          </button>
        </div>
      </div>

      {/* EDIT MODAL */}
      {showEdit && (
        <div className="edit-modal">
          <div className="edit-box">

            <h2>Edit your {item.name}</h2>

            {/* CHEESE */}
            <div className="edit-row">
              <span>Cheese</span>
              <div className="edit-controls">
                <button onClick={() => setCheese(Math.max(0, cheese - 1))}>
                  -
                </button>
                <span>{cheese}</span>
                <button onClick={() => setCheese(cheese + 1)}>+</button>
              </div>
            </div>

            {/* VEGGIE */}
            <div className="edit-row">
              <span>Veggie</span>
              <button
                className={veggie ? "toggle on" : "toggle"}
                onClick={() => setVeggie(!veggie)}
              >
                {veggie ? "Yes" : "No"}
              </button>
            </div>

            {/* RESET */}
            <button
              className="reset-btn"
              onClick={() => {
                setCheese(0);
                setVeggie(false);
              }}
            >
              Reset
            </button>

            {/* SAVE */}
            <button
              className="save-btn"
              onClick={() => {
                onAdd({
                  ...item,
                  cheese,
                  veggie,
                  finalPrice: calculatedPrice
                });
                setShowEdit(false);
              }}
            >
              Save
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
