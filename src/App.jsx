import React, { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Ahorros from "./pages/Ahorros.jsx";
import Creditos from "./pages/Creditos.jsx";
import Beneficios from "./pages/Beneficios.jsx";
import Requisitos from "./pages/Requisitos.jsx";
import LibroReclamaciones from "./pages/LibroReclamaciones.jsx";
import EstadosFinancieros from "./pages/EstadosFinancieros.jsx";
import DocumentosInstitucionales from "./pages/DocumentosInstitucionales.jsx";
import Noticias from "./pages/Noticias.jsx";
import Contacto from "./pages/Contacto.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
	const [currentPage, setCurrentPage] = useState("/");

	useEffect(() => {
		// Parse URL pathname
		const path = window.location.pathname;
		setCurrentPage(path);

		// Listen to popstate for back/forward buttons
		const handlePopState = () => {
			setCurrentPage(window.location.pathname);
		};

		window.addEventListener("popstate", handlePopState);
		return () => window.removeEventListener("popstate", handlePopState);
	}, []);

	// Navigate function
	const navigate = (path) => {
		window.history.pushState({}, "", path);
		setCurrentPage(path);
		window.scrollTo(0, 0);
	};

	// Route matching
	const renderPage = () => {
		switch (currentPage) {
			case "/":
				return <Home />;
			case "/nosotros":
				return <Nosotros />;
			case "/ahorros":
				return <Ahorros />;
			case "/creditos":
				return <Creditos />;
			case "/beneficios":
				return <Beneficios />;
			case "/requisitos":
				return <Requisitos />;
			case "/libro-reclamaciones":
				return <LibroReclamaciones />;
			case "/estados-financieros":
				return <EstadosFinancieros />;
			case "/documentos-institucionales":
				return <DocumentosInstitucionales />;
			case "/noticias":
				return <Noticias />;
			case "/contacto":
				return <Contacto />;
			case "/login":
				return <Login />;
			default:
				return <Home />;
		}
	};

	return <MainLayout>{renderPage()}</MainLayout>;
}
