import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./peges/home/Home"
import UserList from "./peges/users/UserList"
import NewUser from "./peges/newUser/NewUser"
import Products from "./peges/products/Products"
import Product from "./peges/productt/Product"

export default function Routess() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/newusers" element={<NewUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productID" element={<Product />} />
        </Routes>
    )
}
