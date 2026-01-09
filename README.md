# Online Food Delivery Order Manager

A React-based web application to manage food delivery orders.  
The system allows users to add orders, view and filter them, and automatically assign delivery to the nearest unpaid order.  
This project is developed and deployed as part of **Round-2 Assignment**.

---

## 🔗 Live Demo



👉 GitHub Repository:  
https://github.com/vibhorSharma1/FoodDeliveryProject

---

## 🎯 Objective

To develop and deploy a working application that:
- Manages food delivery orders
- Supports filtering by payment status and distance
- Automatically assigns delivery to the nearest unpaid order
- Is accessible via a public live URL

---

## 🛠 Technology Stack

- **Frontend:** React (Vite)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Persistence:** Browser `localStorage`
- **Styling:** Custom CSS (Dark Theme)
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

---

## 📦 Data Model

Each order contains the following fields:

| Field | Description |
|------|------------|
| orderId | Auto-generated unique ID (e.g. ORD-1) |
| restaurantName | Name of the restaurant |
| itemCount | Number of items |
| isPaid | Payment status (true / false) |
| deliveryDistance | Distance in kilometers |

---

## 🚀 Features

### 1. Add Order
- User can add a new food order using a form
- Order ID is auto-generated
- Input validation included

### 2. View All Orders
- All orders are displayed in a tabular format
- Payment status is clearly indicated

### 3. Filter Orders
Users can filter orders by:
- **All / Paid / Unpaid**
- **Maximum delivery distance (≤ X km)**

### 4. Assign Delivery
- Only unpaid orders are considered
- Nearest order within the given distance is selected
- Once assigned, the order is marked as paid
- If no order is available, a message is displayed

---

## 🧠 Delivery Assignment Logic

1. Filter unpaid orders
2. Filter orders within the given maximum distance
3. Sort orders by delivery distance (ascending)
4. Assign the nearest order
5. Update order status to prevent reassignment

---

## 🎨 UI Highlights

- Dark theme for better visual consistency
- Card-based layout for clear separation of features
- Responsive and user-friendly interface
- Clean and readable table layout

---

## ⚠️ Error Handling

- Empty input validation
- Invalid distance handling
- Graceful handling when no eligible orders are found





---

## 📂 Project Setup (Local)

```bash
npm install
npm run dev
