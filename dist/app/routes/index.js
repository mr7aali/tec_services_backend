"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const auth_router_1 = require("../modules/auth/auth.router");
const service_route_1 = require("../modules/service/service.route");
const booking_route_1 = require("../modules/booking/booking.route");
const review_route_1 = require("../modules/review/review.route");
const review_route_2 = require("../modules/feedback/review.route");
const content_route_1 = require("../modules/content/content.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/user',
        route: user_route_1.UserRoutes
    },
    {
        path: '/auth',
        route: auth_router_1.authRoutes
    },
    {
        path: '/service',
        route: service_route_1.ServiceRoute
    },
    {
        path: '/booking',
        route: booking_route_1.BookingRoute
    },
    {
        path: '/review',
        route: review_route_1.ReviewRoute
    },
    {
        path: '/feedback',
        route: review_route_2.FeedbackRoute
    },
    {
        path: '/content',
        route: content_route_1.ContentRoute
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
