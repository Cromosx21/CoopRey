import React, { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import MisionVisionValores from "./pages/MisionVisionValores.jsx";
import CompromisoSocial from "./pages/CompromisoSocial.jsx";
import OrganoGobernanza from "./pages/OrganoGobernanza.jsx";
import NuestroEquipo from "./pages/NuestroEquipo.jsx";
import AhorroProducto from "./pages/AhorroProducto.jsx";
import CreditoProducto from "./pages/CreditoProducto.jsx";
import Beneficios from "./pages/Beneficios.jsx";
import Requisitos from "./pages/Requisitos.jsx";
import LibroReclamaciones from "./pages/LibroReclamaciones.jsx";
import EstadosFinancieros from "./pages/EstadosFinancieros.jsx";
import DocumentosInstitucionales from "./pages/DocumentosInstitucionales.jsx";
import Tarifarios from "./pages/Tarifarios.jsx";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes.jsx";
import Noticias from "./pages/Noticias.jsx";
import Oficinas from "./pages/Contacto.jsx";
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
			case "/mision-vision-valores":
				return <MisionVisionValores />;
			case "/compromiso-social":
				return <CompromisoSocial />;
			case "/organo-gobernanza":
				return <OrganoGobernanza />;
			case "/nuestro-equipo":
				return <NuestroEquipo />;
			case "/ahorros":
				return <AhorroProducto tipo="libre" />;
			case "/ahorros-infantil":
				return <AhorroProducto tipo="infantil" />;
			case "/ahorros-libre":
				return <AhorroProducto tipo="libre" />;
			case "/ahorros-plazo-fijo":
				return <AhorroProducto tipo="plazo-fijo" />;
			case "/ahorros-programado":
				return <AhorroProducto tipo="programado" />;
			case "/ahorros-deposito-garantia":
				return <AhorroProducto tipo="deposito-garantia" />;
			case "/ahorros-canasta":
				return <AhorroProducto tipo="canasta" />;
			case "/creditos":
				return <CreditoProducto tipo="index" />;
			case "/creditos-personales":
				return <CreditoProducto tipo="personales" />;
			case "/creditos-hipotecarios":
				return <CreditoProducto tipo="hipotecarios" />;
			case "/creditos-empresariales":
				return <CreditoProducto tipo="empresariales" />;
			case "/creditos-educativos":
				return <CreditoProducto tipo="educativos" />;
			case "/beneficios":
				return <Beneficios />;
			case "/requisitos":
				return <Requisitos />;
			case "/tarifarios":
				return <Tarifarios />;
			case "/libro-reclamaciones":
				return <LibroReclamaciones />;
			case "/estados-financieros":
				return <EstadosFinancieros />;
			case "/documentos-institucionales":
				return <DocumentosInstitucionales />;
			case "/preguntas-frecuentes":
				return <PreguntasFrecuentes />;
			case "/noticias":
				return <Noticias />;
			case "/oficinas":
				return <Oficinas />;
			case "/contacto":
				return <Oficinas />;
			case "/login":
				return <Login />;
			default:
				return <Home />;
		}
	};

	return <MainLayout>{renderPage()}</MainLayout>;
}
