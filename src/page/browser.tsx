import type React from "react";
import { useState } from "react";
import Maps from "../component/map/maps";
import "leaflet/dist/leaflet.css";
import NavBar from "../component/NavBar";
import ProgressBar from "../component/progressBar/ProgressBar";

const Browser: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState<string | null>(null);
	const [activeSiteId, setActiveSiteId] = useState<string | null>(null);

	return (
		<div>
			<NavBar setActiveFilter={setActiveFilter} />
			<Maps
				activeFilter={activeFilter}
				setActiveSiteId={setActiveSiteId}
				activeSiteId={activeSiteId ?? ""}
			/>
			<ProgressBar activeSiteId={activeSiteId} />
		</div>
	);
};

export default Browser;
