import { useEffect, useState } from 'react'

import AddOrder from './components/AddOrder'
import OrderList from './components/OrderList'
import AssignDelivery from './components/AssignDelivery'

export default function App(){

  // State to hold orders, initialized from localStorage
  const [orders,setOrders] = useState(()=>{
    return JSON.parse(localStorage.getItem('orders')) || []
  })

  // Effect to update localStorage whenever orders change
  useEffect(()=>{
    localStorage.setItem('orders',JSON.stringify(orders))
  },[orders])


  // Function to add a new order
  const addOrder=(o)=>{
    setOrders([...orders,o])
  }

  return(
    <div>
      <h1>Online Food Delivery Order Management</h1> 
      <AddOrder addOrder={addOrder} />
      <hr />
      <OrderList orders={orders}  />
      <hr />
      <AssignDelivery orders={orders}  />
    </div>
  )

}