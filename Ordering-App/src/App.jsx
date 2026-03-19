import { useState } from 'react'
import './App.css'
import StartPage from './component/StartPage'
import MenuPage from './component/MenuPage'
import Navbar from './component/Navbar'

function App() {
  const [started, setStarted] = useState(false);
  const [theme, setTheme] = useState("light");
  const [order, setOrder] = useState([]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  // -------------------------
  // ADD ITEM
  // -------------------------
  function addItem(item) {
    const existing = order.find(i => i.id === item.id);

    if (existing) {
      const updated = order.map(i =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      );
      setOrder(updated);
    } else {
      setOrder([...order, { ...item, qty: 1 }]);
    }
  }

  // -------------------------
  // INCREASE QTY
  // -------------------------
  function increaseQty(id) {
    const updated = order.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setOrder(updated);
  }

  // -------------------------
  // DECREASE QTY
  // -------------------------
  function decreaseQty(id) {
    const updated = order
      .map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter(item => item.qty > 0);

    setOrder(updated);
  }
         // className={`app ${theme}`} did not work
  return (
        <div className="app" data-theme={theme}>
         
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {started ? (
        <MenuPage
          onAddItem={addItem}
          order={order}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
        />
      ) : (
        <StartPage onStart={() => setStarted(true)} />
      )}
    </div>
  );
}

export default App;
