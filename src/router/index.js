import { createBrowserRouter } from "react-router-dom";
import Timer from "../pages/timer";
import TimerAdmin from "../pages/timer-admin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Timer/>
    },
    {
        path: "/timer-admin",
        element: <TimerAdmin/>
    }
])