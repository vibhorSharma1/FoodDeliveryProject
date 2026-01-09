import { useState } from "react";

export default function AssignDelivery({ orders, setOrders }) {
  const [maxDistance, setMaxDistance] = useState("");
  const [result, setResult] = useState(null);

  const assign = () => {
    if (!maxDistance) {
      alert("Enter max distance");
      return;
    }

    const eligible = orders
      .filter(o => !o.isPaid && o.deliveryDistance <= Number(maxDistance))
      .sort((a, b) => a.deliveryDistance - b.deliveryDistance);

    if (eligible.length === 0) {
      setResult("No order available");
    } else {

        const updatedOrders = orders.map(o => {
          if (o.orderId === eligible[0].orderId) {
            return { ...o, isPaid: true };
          }
          return o;
        });
        setOrders(updatedOrders);


      setResult(eligible[0]);
    }
  };

  return (
    <>
      <h3>Assign Delivery</h3>

      <input
        type="number"
        placeholder="Max Distance (km)"
        onChange={(e) => setMaxDistance(e.target.value)}
      />

      <br /><br />
      <button onClick={assign}>Assign Nearest Order</button>

      {result && (
        <div className="result">
          {typeof result === "string"
            ? result
            : `Assigned Order: ${result.orderId} (${result.deliveryDistance} km)`
          }
        </div>
      )}
    </>
  );
}
