import { createRoot } from "react-dom/client";
import App from "./App.tsx";
/* Self-host Caveat (SketchCursorHint, About, etc.) — avoids Google Fonts blocked by extensions / flaky CDN */
import "@fontsource/caveat/500.css";
import "@fontsource/caveat/600.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
