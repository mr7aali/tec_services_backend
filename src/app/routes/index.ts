import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { authRoutes } from '../modules/auth/auth.router';
import { ServiceRoute } from '../modules/service/service.route';
import { BookingRoute } from '../modules/booking/booking.route';
import { ReviewRoute } from '../modules/review/review.route';
import { FeedbackRoute } from '../modules/feedback/review.route';
import { ContentRoute } from '../modules/content/content.route';


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
    {
        path: '/review',
        route:ReviewRoute
    },
    {
        path: '/feedback',
        route:FeedbackRoute
    },
    {
        path: '/content',
        route:ContentRoute
    },
];




moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;