
export default function AddOrder({ addOrder }) {
    const [form, setForm] = useState({
        orderId: '',
        restaurantName: '',
        itemCount: '',
        isPaid: false,
        deliveryDistance: '',
    })

    const submit = () => {
        if (
            !form.orderId ||
            !form.restaurantName ||
            !form.itemCount ||
            !form.deliveryDistance
        ) {
            alert('Please fill all fields')
            return
        }

        addOrder({
            ...form,
            itemCount: Number(form.itemCount),
            deliveryDistance: Number(form.deliveryDistance),
        });

        setForm({
            orderId: "",
            restaurantName: "",
            itemCount: "",
            isPaid: false,
            deliveryDistance: "",
        });
    };

    return (
        <div>
            <h3>Add Order</h3>

            <input placeholder="Order ID" value={form.orderId}
                onChange={(e) => setForm({ ...form, orderId: e.target.value })} />

            <input placeholder="Restaurant Name" value={form.restaurantName}
                onChange={(e) => setForm({ ...form, restaurantName: e.target.value })} />

            <input type="number" placeholder="Item Count" value={form.itemCount}
                onChange={(e) => setForm({ ...form, itemCount: e.target.value })} />

            <input type="number" placeholder="Distance (km)" value={form.deliveryDistance}
                onChange={(e) => setForm({ ...form, deliveryDistance: e.target.value })} />

            <label>
                Paid
                <input type="checkbox"
                    checked={form.isPaid}
                    onChange={(e) => setForm({ ...form, isPaid: e.target.checked })} />
            </label>

            <br />
            <button onClick={submit}>Add Order</button>
        </div>
    );
}
