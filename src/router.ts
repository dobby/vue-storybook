import {createRouter, createWebHistory, RouteLocationNormalized} from "vue-router";

const router = createRouter(
{
        routes: [],
        history: createWebHistory(process.env.APP_BASE_PATH),
    }
);

router.onError((error: Error, to: RouteLocationNormalized) => {
    if (error.message.includes('Failed to fetch dynamically imported module')) {
        window.location.href = to.fullPath;
    }
});

export default router;