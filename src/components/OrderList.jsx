import { useState } from "react";

export default function OrderList({ orders }) {
  const [filterType, setFilterType] = useState("ALL");
  const [maxDistance, setMaxDistance] = useState("");

  // 🔹 Filter logic yahin
  const filteredOrders = orders.filter((o) => {
    if (filterType === "PAID") return o.isPaid;
    if (filterType === "UNPAID") return !o.isPaid;
    if (filterType === "DISTANCE") {
      if (!maxDistance) return true;
      return o.deliveryDistance <= Number(maxDistance);
    }
    return true; // ALL
  });

  return (
    <>
      {/* HEADER ROW */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <h3 style={{ margin: 0 }}>All Orders</h3>

        <select
          value={filterType}
          onChange={(e) => {
            setFilterType(e.target.value);
            setMaxDistance("");
          }}
        >
          <option value="ALL">All</option>
          <option value="PAID">Paid</option>
          <option value="UNPAID">Unpaid</option>
          <option value="DISTANCE">By Distance</option>
        </select>
      </div>

      {/* DISTANCE INPUT */}
      {filterType === "DISTANCE" && (
        <input
          type="number"
          placeholder="Max Distance (km)"
          value={maxDistance}
          onChange={(e) => setMaxDistance(e.target.value)}
          style={{ marginBottom: "12px" }}
        />
      )}

      {/* TABLE / EMPTY STATE */}
      {filteredOrders.length === 0 ? (
        <p>No orders available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Restaurant</th>
              <th>Items</th>
              <th>Status</th>
              <th>Distance (km)</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((o) => (
              <tr key={o.orderId}>
                <td>{o.orderId}</td>
                <td>{o.restaurantName}</td>
                <td>{o.itemCount}</td>
                <td
                  className={o.isPaid ? "badge-paid" : "badge-unpaid"}
                >
                  {o.isPaid ? "Paid" : "Unpaid"}
                </td>
                <td>{o.deliveryDistance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
