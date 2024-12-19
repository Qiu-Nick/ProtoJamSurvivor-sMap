import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
	  navigator.serviceWorker
		.register('/service-worker.js') // Assure-toi que ton service worker est à la racine de ton dossier public
		.then((registration) => {
		  console.log('Service Worker enregistré avec succès:', registration);
		})
		.catch((error) => {
		  console.log('L\'enregistrement du Service Worker a échoué:', error);
		});
	});
  }
  