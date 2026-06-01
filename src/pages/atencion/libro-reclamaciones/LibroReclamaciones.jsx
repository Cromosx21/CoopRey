import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Info, Phone, Mail } from "lucide-react";

// Components
import RegistroTab from "./RegistroTab.jsx";
import NormativaTab from "./NormativaTab.jsx";

// Data
import { reclamacionesInfo } from "../../../data/reclamaciones";

export default function LibroReclamaciones() {
	const [activeTab, setActiveTab] = useState("registro");
	const [formData, setFormData] = useState({
		tipoPersona: "natural",
		tipoReclamo: "",
		nombre: "",
		apellidos: "",
		email: "",
		emailAlternativo: "",
		telefono: "",
		telefonoAlternativo: "",
		documento: "",
		tipoDocumento: "dni",
		fechaNacimiento: "",
		numeroCliente: "",
		direccion: "",
		referenciaDireccion: "",
		departamento: "",
		provincia: "",
		distrito: "",
		canalRespuesta: "email",
		horarioContacto: "",
		representaATercero: false,
		nombreRepresentado: "",
		documentoRepresentado: "",
		relacionRepresentado: "",
		fechaHecho: "",
		horaHecho: "",
		canalAtencion: "",
		oficinaAgencia: "",
		productoServicio: "",
		numeroOperacion: "",
		moneda: "PEN",
		descripcion: "",
		pretension: "",
		medioEntrega: "",
		detalleEvidencias: "",
		monto: "",
		adjuntos: [],
		autorizaDatos: false,
		declaraVeracidad: false,
	});

	const [submitted, setSubmitted] = useState(false);
	const [generatedCode, setGeneratedCode] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState(null);

	const LEGAL_EMAIL = "area.legal.nr@coopacninorey.com";

	const LEGAL_MAILER_URL =
		"https://script.google.com/macros/s/AKfycbymSwaUkINwvNBzlXzmjgRaMTLnt4JCl9RAr5DnUYepKV50qhJ_KviC9CawpKqZmOQ/exec";

	const [expandedFormSections, setExpandedFormSections] = useState([
		"identificacion",
		"domicilio",
		"incidente",
		"pretension",
		"evidencias",
		"declaraciones",
	]);

	// Generar código único para reclamación
	const generateClaimCode = () => {
		const date = new Date();
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		const random = Math.random().toString(36).substring(2, 8).toUpperCase();
		return `REC-${year}${month}${day}-${random}`;
	};

	const handleFormChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleFilesChange = (e) => {
		const files = Array.from(e.target.files || []);
		const filesMetadata = files.map((file) => ({
			name: file.name,
			size: file.size,
			type: file.type,
			lastModified: file.lastModified,
		}));

		setFormData((prev) => ({
			...prev,
			adjuntos: filesMetadata,
		}));
	};

	const toggleFormSection = (id) => {
		setExpandedFormSections((prev) =>
			prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
		);
	};

	const buildLegalEmailText = (claim) => {
		const lines = [
			"NUEVO RECLAMO (WEB) - COOPAC NIÑO REY",
			"",
			"DATOS DE CONTROL",
			`Código: ${claim.id}`,
			`Fecha/Hora registro: ${claim.fechaRegistro} ${claim.horaRegistro}`,
			`Estado: ${claim.estado}`,
			"",
			"IDENTIFICACIÓN",
			`Tipo persona: ${claim.tipoPersona}`,
			`Nombres/Razón social: ${claim.nombre}`,
			`Apellidos: ${claim.apellidos}`,
			`Documento: ${claim.tipoDocumento.toUpperCase()} ${claim.documento}`,
			`Email: ${claim.email}`,
			`Email alternativo: ${claim.emailAlternativo || "-"}`,
			`Teléfono: ${claim.telefono}`,
			`Teléfono alternativo: ${claim.telefonoAlternativo || "-"}`,
			`Fecha nacimiento: ${claim.fechaNacimiento || "-"}`,
			`N° socio/cliente: ${claim.numeroCliente || "-"}`,
			"",
			"DOMICILIO",
			`Dirección: ${claim.direccion}`,
			`Referencia: ${claim.referenciaDireccion || "-"}`,
			`Departamento/Provincia/Distrito: ${claim.departamento} / ${claim.provincia} / ${claim.distrito}`,
			`Canal de respuesta: ${claim.canalRespuesta}`,
			`Horario contacto: ${claim.horarioContacto || "-"}`,
			"",
			"REPRESENTACIÓN",
			`Representa a tercero: ${claim.representaATercero}`,
			`Nombre representado: ${claim.nombreRepresentado || "-"}`,
			`Documento representado: ${claim.documentoRepresentado || "-"}`,
			`Relación: ${claim.relacionRepresentado || "-"}`,
			"",
			"DETALLE DEL RECLAMO",
			`Tipo reclamo: ${claim.tipoReclamo}`,
			`Fecha hecho: ${claim.fechaHecho || "-"}`,
			`Hora hecho: ${claim.horaHecho || "-"}`,
			`Canal de atención: ${claim.canalAtencion || "-"}`,
			`Oficina/Agencia: ${claim.oficinaAgencia || "-"}`,
			`Producto/Servicio: ${claim.productoServicio || "-"}`,
			`N° operación: ${claim.numeroOperacion || "-"}`,
			`Moneda: ${claim.moneda || "-"}`,
			`Monto: ${claim.monto || "-"}`,
			"",
			"DESCRIPCIÓN",
			claim.descripcion || "-",
			"",
			"PRETENSIÓN",
			claim.pretension || "-",
			"",
			"EVIDENCIAS",
			`Medio de entrega: ${claim.medioEntrega || "-"}`,
			`Detalle evidencias: ${claim.detalleEvidencias || "-"}`,
			`Adjuntos (nombres): ${claim.adjuntos || "-"}`,
			"",
			"DECLARACIONES",
			`Autoriza datos: ${claim.autorizaDatos}`,
			`Declara veracidad: ${claim.declaraVeracidad}`,
		];

		return lines.join("\n");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.autorizaDatos || !formData.declaraVeracidad) return;

		setIsSubmitting(true);
		setError(null);

		const claimId = generateClaimCode();
		const now = new Date();
		const newClaim = {
			// BLOQUE 1: DATOS DE CONTROL
			id: claimId,
			fechaRegistro: now.toLocaleDateString("es-PE"),
			horaRegistro: now.toLocaleTimeString("es-PE"),
			estado: "registrado",
			fechaRespuesta: "",
			respuesta: "",

			// BLOQUE 2: IDENTIFICACIÓN
			tipoPersona: formData.tipoPersona,
			nombre: formData.nombre,
			apellidos: formData.apellidos,
			tipoDocumento: formData.tipoDocumento,
			documento: formData.documento,
			email: formData.email,
			emailAlternativo: formData.emailAlternativo || "",
			telefono: formData.telefono,
			telefonoAlternativo: formData.telefonoAlternativo || "",
			fechaNacimiento: formData.fechaNacimiento || "",
			numeroCliente: formData.numeroCliente || "",

			// BLOQUE 3: DOMICILIO
			direccion: formData.direccion,
			referenciaDireccion: formData.referenciaDireccion || "",
			departamento: formData.departamento,
			provincia: formData.provincia,
			distrito: formData.distrito,
			canalRespuesta: formData.canalRespuesta,
			horarioContacto: formData.horarioContacto || "",

			// BLOQUE 4: REPRESENTACIÓN
			representaATercero: formData.representaATercero ? "SI" : "NO",
			nombreRepresentado: formData.nombreRepresentado || "",
			documentoRepresentado: formData.documentoRepresentado || "",
			relacionRepresentado: formData.relacionRepresentado || "",

			// BLOQUE 5: DETALLE
			tipoReclamo: formData.tipoReclamo,
			fechaHecho: formData.fechaHecho || "",
			horaHecho: formData.horaHecho || "",
			canalAtencion: formData.canalAtencion || "",
			oficinaAgencia: formData.oficinaAgencia || "",
			productoServicio: formData.productoServicio || "",
			numeroOperacion: formData.numeroOperacion || "",
			moneda: formData.moneda || "PEN",
			monto: formData.monto || "0",
			descripcion: formData.descripcion,

			// BLOQUE 6: PRETENSION Y EVIDENCIAS
			pretension: formData.pretension || "",
			medioEntrega: formData.medioEntrega || "",
			detalleEvidencias: formData.detalleEvidencias || "",
			adjuntos: formData.adjuntos.map((a) => a.name).join(", "),

			// BLOQUE 7: DECLARACIONES
			autorizaDatos: formData.autorizaDatos ? "SI" : "NO",
			declaraVeracidad: formData.declaraVeracidad ? "SI" : "NO",

			historial: [],
		};

		try {
			const emailText = buildLegalEmailText(newClaim);

			await fetch(LEGAL_MAILER_URL, {
				method: "POST",
				mode: "no-cors",
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				},
				body: JSON.stringify({
					type: "legal-claim",
					to: LEGAL_EMAIL,
					subject: `Nuevo reclamo web - ${newClaim.id}`,
					text: emailText,
					claim: newClaim,
				}),
			});

			setGeneratedCode(claimId);
			setSubmitted(true);

			// Reset form
			setFormData({
				tipoPersona: "natural",
				tipoReclamo: "",
				nombre: "",
				apellidos: "",
				email: "",
				emailAlternativo: "",
				telefono: "",
				telefonoAlternativo: "",
				documento: "",
				tipoDocumento: "dni",
				fechaNacimiento: "",
				numeroCliente: "",
				direccion: "",
				referenciaDireccion: "",
				departamento: "",
				provincia: "",
				distrito: "",
				canalRespuesta: "email",
				horarioContacto: "",
				representaATercero: false,
				nombreRepresentado: "",
				documentoRepresentado: "",
				relacionRepresentado: "",
				fechaHecho: "",
				horaHecho: "",
				canalAtencion: "",
				oficinaAgencia: "",
				productoServicio: "",
				numeroOperacion: "",
				moneda: "PEN",
				descripcion: "",
				pretension: "",
				medioEntrega: "",
				detalleEvidencias: "",
				monto: "",
				adjuntos: [],
				autorizaDatos: false,
				declaraVeracidad: false,
			});

			window.scrollTo({ top: 0, behavior: "smooth" });
		} catch (err) {
			console.error("Error al enviar reclamo:", err);
			setError(
				"No se pudo enviar el reclamo al área legal. Verifica tu conexión a internet e intenta nuevamente.",
			);
			window.scrollTo({ top: 0, behavior: "smooth" });
		} finally {
			setIsSubmitting(false);
		}
	};

	const tabs = [
		{ id: "registro", label: "Registrar Reclamo", icon: FileText },
		{ id: "normativa", label: "Normativa SBS", icon: Info },
	];

	return (
		<div className="min-h-screen bg-linear-to-b from-gray-50 to-white pt-32 pb-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-12"
				>
					<div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-6">
						<FileText className="w-8 h-8 text-emerald-600" />
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						{reclamacionesInfo.title}
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						{reclamacionesInfo.description}
					</p>
				</motion.div>

				{/* Info Cards */}
				<div className="grid md:grid-cols-3 gap-6 mb-12">
					<div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
						<div className="flex items-center space-x-3 mb-3">
							<Phone className="w-5 h-5 text-emerald-600" />
							<h3 className="font-semibold text-gray-900">
								Teléfono
							</h3>
						</div>
						<p className="text-gray-600">
							{reclamacionesInfo.telefonoReclamos}
						</p>
					</div>
					<div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
						<div className="flex items-center space-x-3 mb-3">
							<Mail className="w-5 h-5 text-emerald-600" />
							<h3 className="font-semibold text-gray-900">
								Email Atención
							</h3>
						</div>
						<p className="text-gray-600">
							{reclamacionesInfo.emailReclamos}
						</p>
					</div>
					<div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
						<div className="flex items-center space-x-3 mb-3">
							<Mail className="w-5 h-5 text-emerald-600" />
							<h3 className="font-semibold text-gray-900">
								Email Legal
							</h3>
						</div>
						<p className="text-gray-600">{LEGAL_EMAIL}</p>
					</div>
				</div>

				{/* Tabs Navigation */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-md ${
								activeTab === tab.id
									? "bg-emerald-600 text-white shadow-emerald-200 scale-105"
									: "bg-white text-gray-600 hover:bg-gray-50"
							}`}
						>
							<tab.icon className="w-5 h-5" />
							<span>{tab.label}</span>
						</button>
					))}
				</div>

				<AnimatePresence mode="wait">
					{activeTab === "registro" && (
						<RegistroTab
							formData={formData}
							handleFormChange={handleFormChange}
							handleFilesChange={handleFilesChange}
							handleSubmit={handleSubmit}
							submitted={submitted}
							isSubmitting={isSubmitting}
							error={error}
							generatedCode={generatedCode}
							expandedSections={expandedFormSections}
							toggleSection={toggleFormSection}
						/>
					)}

					{activeTab === "normativa" && <NormativaTab />}
				</AnimatePresence>
			</div>
		</div>
	);
}
