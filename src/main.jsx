import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppContext from "./appContext";
import "./custom.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <App />
  </AppContext>
);
