import express from "express";
import auth from "../middleware/auth.js";
import { createOrder, getAllOrders, getOrder, getOrdersLocation, getUserOrders, updateOrderStatus } from "../controllers/orderController.js";
import admin from "../middleware/admin.js";


const orderRouter = express.Router();

orderRouter.post('/', auth, createOrder);
orderRouter.get('/', auth, getUserOrders);
orderRouter.get('/all', auth, admin, getAllOrders);
orderRouter.get('/:id', auth, getOrder);
orderRouter.put('/:id/status', auth, admin, updateOrderStatus);
orderRouter.put('/:id/location', auth, getOrdersLocation);

export default orderRouter

