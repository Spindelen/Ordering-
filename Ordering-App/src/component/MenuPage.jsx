import "./css/MenuPage.css";
import MenuItem from "./MenuItem";

export default function MenuPage({ onAddItem, order, onIncrease, onDecrease }) {
  const menuItems = [
    {
      id: 1,
      name: "Burger",
      description: "A delicious burger with all the fixings.",
      price: 59,
      image: "/burger.jpg",
      nutrition: "500 kcal, 25g protein",
      allergies: "Gluten, Milk"
    },
    {
      id: 2,
      name: "Pizza",
      description: "Classic pizza with your favorite toppings.",
      price: 89,
      image: "/pizza.jpg",
      nutrition: "700 kcal, 30g protein",
      allergies: "Gluten, Cheese"
    },
    {
      id: 3,
      name: "Fries",
      description: "Crispy golden fries served hot and fresh.",
      price: 29,
      image: "/fries.jpg",
      nutrition: "300 kcal, 4g protein",
      allergies: "None"
    }
  ];

  // -------------------------
  // TOTALPRIS (tar hänsyn till finalPrice + qty)
  // -------------------------
  const total = order.reduce((sum, item) => {
    const price = item.finalPrice ?? item.price;
    return sum + price * item.qty;
  }, 0);

  return (
    <div className="menu-page">
      <h1>Fast Food Menu</h1>

      {/* MENYLISTA */}
      <div className="menu-list">
        {menuItems.map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            onAdd={onAddItem} 
          />
        ))}
      </div>

      {/* ORDER-LISTAN */}
      <div className="order-box">
        <h2>Your order</h2>

        {order.length === 0 && <p>No items yet.</p>}

        {order.map((item, index) => {
          const price = item.finalPrice ?? item.price;

          return (
            <div key={index} className="order-item">
              <div className="order-left">
                <strong>{item.name}</strong>

                {/* Modifieringar */}
                {item.cheese > 0 && (
                  <div className="order-mod">+ Cheese x {item.cheese}</div>
                )}

                {item.veggie && (
                  <div className="order-mod">Veggie option</div>
                )}
              </div>

              <div className="order-right">
                <div className="order-price">{price * item.qty} kr</div>

                <div className="qty-controls">
                  <button onClick={() => onDecrease(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => onIncrease(item.id)}>+</button>
                </div>
              </div>
            </div>
          );
        })}

        {/* TOTAL */}
        <h3>Total: {total} kr</h3>
      </div>
    </div>
  );
}
