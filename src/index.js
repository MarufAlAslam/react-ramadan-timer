import ReactDOM from "react-dom/client";
import "./assets/css/config.css";
import "./assets/css/globals.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const root = ReactDOM.createRoot(document.getElementById("timer-page"));
root.render(<RouterProvider router={router} />);
