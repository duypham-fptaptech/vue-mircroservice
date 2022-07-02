import { createWebHistory, createRouter } from "vue-router";
const routes =  [
    {
        path: "/",
        alias: "/orders/products",
        name: "products",
        component: () => import("./components/Home")
    },
    {
        path: "/orders",
        alias: "/orders",
        name: "orders",
        component: () => import("./components/Orders")
    },
    {
        path: "/shop",
        name: "shop",
        component: () => import("./components/Shop")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("./components/About")
    },
    {
        path: "/login",
        alias: "/login",
        name: "admin-login",
        component: () => import("./components/Login")
    },
    // {
    //     path: "/register",
    //     alias: "/register",
    //     name: "register",
    //     component: () => import("./components/Register")
    // },
    // {
    //     path: "/login",
    //     alias: "/login",
    //     name: "login",
    //     component: () => import("./components/Login")
    // }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
