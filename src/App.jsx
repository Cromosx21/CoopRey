import React, { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/inicio/Home.jsx";
import Nosotros from "./pages/cooperativa/Nosotros.jsx";
import MisionVisionValores from "./pages/cooperativa/MisionVisionValores.jsx";
import CompromisoSocial from "./pages/cooperativa/CompromisoSocial.jsx";
import OrganoGobernanza from "./pages/cooperativa/OrganoGobernanza.jsx";
import NuestroEquipo from "./pages/cooperativa/NuestroEquipo.jsx";
import AhorroProducto from "./pages/productos/ahorros/AhorroProducto.jsx";
import CreditoProducto from "./pages/productos/creditos/CreditoProducto.jsx";
import Socios from "./pages/socios/Socios.jsx";
import BeneficiosSocio from "./pages/socios/BeneficiosSocio.jsx";
import RequisitosSocio from "./pages/socios/RequisitosSocio.jsx";
import AportesSocio from "./pages/socios/AportesSocio.jsx";
import DeberesDerechosSocio from "./pages/socios/DeberesDerechosSocio.jsx";
import PrevisionSocialSocio from "./pages/socios/PrevisionSocialSocio.jsx";
import LibroReclamaciones from "./pages/atencion/libro-reclamaciones/LibroReclamaciones.jsx";
import EstadosFinancieros from "./pages/transparencia/EstadosFinancieros.jsx";
import DocumentosInstitucionales from "./pages/transparencia/DocumentosInstitucionales.jsx";
import Tarifarios from "./pages/transparencia/Tarifarios.jsx";
import PreguntasFrecuentes from "./pages/transparencia/PreguntasFrecuentes.jsx";
import EducacionFinanciera from "./pages/transparencia/EducacionFinanciera.jsx";
import Sanciones from "./pages/transparencia/Sanciones.jsx";
import Noticias from "./pages/noticias/Noticias.jsx";
import Oficinas from "./pages/atencion/Contacto.jsx";
import Login from "./pages/auth/Login.jsx";
import TerminosDeUso from "./pages/legal/TerminosDeUso.jsx";
import PoliticasDePrivacidad from "./pages/legal/PoliticasDePrivacidad.jsx";

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
			case "/socios":
				return <Socios />;
			case "/socios/beneficios":
				return <BeneficiosSocio />;
			case "/socios/requisitos":
				return <RequisitosSocio />;
			case "/socios/aportes":
				return <AportesSocio />;
			case "/socios/deberes-derechos":
				return <DeberesDerechosSocio />;
			case "/socios/prevision-social":
				return <PrevisionSocialSocio />;
			case "/beneficios":
				return <BeneficiosSocio />;
			case "/requisitos":
				return <RequisitosSocio />;
			case "/tarifarios":
				return <Tarifarios />;
			case "/libro-reclamaciones":
				return <LibroReclamaciones />;
			case "/estados-financieros":
				return <EstadosFinancieros />;
			case "/documentos-institucionales":
				return <DocumentosInstitucionales />;
			case "/educacion-financiera":
				return <EducacionFinanciera />;
			case "/sanciones":
				return <Sanciones />;
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
			case "/terminos-de-uso":
				return <TerminosDeUso />;
			case "/politicas-de-privacidad":
				return <PoliticasDePrivacidad />;
			default:
				return <Home />;
		}
	};

	return <MainLayout>{renderPage()}</MainLayout>;
}
