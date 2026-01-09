import { useState } from "react";

export default function AddOrder({ addOrder }) {
  const [form, setForm] = useState({
    orderId: "",
    restaurantName: "",
    itemCount: "",
    isPaid: false,
    deliveryDistance: "",
  });

  const submit = () => {
    if ( !form.restaurantName || !form.itemCount || !form.deliveryDistance) {
      alert("Please fill all fields");
      return;
    }

    addOrder({
      ...form,
      itemCount: Number(form.itemCount),
      deliveryDistance: Number(form.deliveryDistance),
    });

    setForm({
      restaurantName: "",
      itemCount: "",
      isPaid: false,
      deliveryDistance: "",
    });
  };

  return (
    <>
      <h3>Add Order</h3>

      <input placeholder="Restaurant Name"
        value={form.restaurantName}
        onChange={(e) => setForm({ ...form, restaurantName: e.target.value })} />

      <input type="number" placeholder="Item Count"
        value={form.itemCount}
        onChange={(e) => setForm({ ...form, itemCount: e.target.value })} />

      <input type="number" placeholder="Delivery Distance (km)"
        value={form.deliveryDistance}
        onChange={(e) => setForm({ ...form, deliveryDistance: e.target.value })} />

      <label>
        <input type="checkbox"
          checked={form.isPaid}
          style={{width:10}}
          onChange={(e) => setForm({ ...form, isPaid: e.target.checked })} />
        Paid
      </label>

      <br /><br />
      <button onClick={submit}>Add Order</button>
    </>
  );
}
