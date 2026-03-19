import "./css/MenuPage.css";
import MenuItem from "./MenuItem";
import menuItems from "./menuData";
import { useState } from "react";

export default function MenuPage({ onAddItem, order, onIncrease, onDecrease }) {
  const [category, setCategory] = useState("Main");
  const [search, setSearch] = useState("");
  const [showFeatured, setShowFeatured] = useState(true);
  const [open, setOpen] = useState(false);
  

  // -------------------------
  // TOTALPRIS (tar hänsyn till finalPrice + qty)
  // -------------------------
  const total = order.reduce((sum, item) => {
    const price = item.finalPrice ?? item.price;
    return sum + price * item.qty;
  }, 0);

  return (
    <div className="menu-page">
      <img src="/header.png" className="menu-header"/>

      <div className="category-bar">
      <button 
        className={showFeatured ? "active" : ""}
        onClick={() => {
        setShowFeatured(true);
        }}
        >
        Home
      </button>

    
    
     <button
       className={category === "Main" ? "active" : ""} 
      onClick={() => {
         setCategory("Main");
        setShowFeatured(false);
      }}
     >
      Main
    </button>

   <button
     className={category === "Starter" ? "active" : ""} 
     onClick={() => {
         setCategory("Starter");
        setShowFeatured(false);
      }}
   >
     Starter
    </button>

   <button
     className={category === "Dessert" ? "active" : ""} 
     onClick={() => {
         setCategory("Dessert");
        setShowFeatured(false);
      }}
   >
     Dessert
   </button>

    <button
     className={category === "Drinks" ? "active" : ""} 
     onClick={() => {
         setCategory("Drinks");
        setShowFeatured(false);
      }}
   >
      Drinks
   </button>

   <button
      className={category === "Side" ? "active" : ""} 
      onClick={() => {
         setCategory("Side");
        setShowFeatured(false);
      }}
   >
      Side order
    </button>
      
       <input
    type="text"
    className="search-box"
    placeholder="Search..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

    
  


      {/* MENYLIST */}
      <div className="menu-list">
        {menuItems
        .filter(item => {
          if (showFeatured) {
            return item.featured === true;
          }
          return item.category === category;
        })
        .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        .map(item => (
          <MenuItem 
            key={item.id} 
            item={item} 
            onAdd={onAddItem} 
          />
        ))}
     </div>

      {/* ORDER-LIST */}
      <div className={`order-box ${open ? "open": ""}`} onClick={() => setOpen(!open)}>
       <div className="order-tab">Your Order</div>
    

        {order.length === 0 && <p>No items yet.</p>}

        {order.map((item, index) => {
          const price = item.finalPrice ?? item.price;

          return (
            <div key={index} className="order-item">
              <div className="order-left">
                <strong>{item.name}</strong>

                {/* Mod */}
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
