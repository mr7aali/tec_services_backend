import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { authRoutes } from '../modules/auth/auth.router';
import { ServiceRoute } from '../modules/service/service.route';
import { BookingRoute } from '../modules/booking/booking.route';


const router = express.Router();
const moduleRoutes = [
    {
        path: '/user',
        route:UserRoutes
    },
    {
        path: '/auth',
        route:authRoutes
    },
    {
        path: '/service',
        route:ServiceRoute
    },
    {
        path: '/booking',
        route:BookingRoute
    },
];




moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;