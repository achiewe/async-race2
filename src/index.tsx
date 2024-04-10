import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import "./style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
