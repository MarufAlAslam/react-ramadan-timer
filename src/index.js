import ReactDOM from "react-dom/client";
import "./assets/css/config.css";
import "./assets/css/globals.css";
import Timer from "./pages/timer";

const root = ReactDOM.createRoot(document.getElementById("timer-page"));
root.render(<Timer />);
