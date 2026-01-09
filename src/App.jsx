import { useEffect, useState } from "react";
import AddOrder from "./components/AddOrder";
import OrderList from "./components/OrderList";
import AssignDelivery from "./components/AssignDelivery";
import "./index.css";

export default function App() {
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });
  const [orderCounter, setOrderCounter] = useState(() => {
    return Number(localStorage.getItem("orderCounter")) || 1;
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);
   useEffect(() => {
    localStorage.setItem("orderCounter", orderCounter);
  }, [orderCounter]);

  const addOrder = (order) => {
    const newOrder = {
      ...order,
      orderId: `ORD-${orderCounter}`,
    };

    setOrders([...orders, newOrder]);
    setOrderCounter(orderCounter + 1);
  };

  return (
    <div className="container">
      <h2>Online Food Delivery Order Manager</h2>

      <div className="card">
        <AddOrder addOrder={addOrder} />
      </div>

      <div className="card">
        <OrderList orders={orders} />
      </div>

      <div className="card">
        <AssignDelivery orders={orders} setOrders={setOrders} />
      </div>
    </div>
  );
}
