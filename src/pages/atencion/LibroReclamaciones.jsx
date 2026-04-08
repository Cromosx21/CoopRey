import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
	FileText,
	Search,
	Send,
	AlertCircle,
	CheckCircle,
	Clock,
	Eye,
	Download,
	Phone,
	Mail,
	MapPin,
	Info,
	ChevronDown,
	CalendarDays,
	Paperclip,
} from "lucide-react";
import {
	reclamacionesInfo,
	tiposReclamo,
	estadosReclamo,
	reglamentoPeru,
} from "../../data/reclamaciones";

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

	const [registeredClaims, setRegisteredClaims] = useState([]);
	const [searchCode, setSearchCode] = useState("");
	const [searchResult, setSearchResult] = useState(null);
	const [submitted, setSubmitted] = useState(false);
	const [generatedCode, setGeneratedCode] = useState("");
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

	// Cargar reclamaciones del localStorage
	useEffect(() => {
		const saved = localStorage.getItem("reclamaciones");
		if (saved) {
			setRegisteredClaims(JSON.parse(saved));
		}
	}, []);

	// Guardar reclamaciones en localStorage
	useEffect(() => {
		localStorage.setItem("reclamaciones", JSON.stringify(registeredClaims));
	}, [registeredClaims]);

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

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!formData.autorizaDatos || !formData.declaraVeracidad) return;

		const newClaim = {
			id: generateClaimCode(),
			...formData,
			fechaRegistro: new Date().toLocaleDateString("es-PE"),
			horaRegistro: new Date().toLocaleTimeString("es-PE"),
			estado: "registrado",
			respuesta: null,
		};

		setRegisteredClaims((prev) => [newClaim, ...prev]);
		setGeneratedCode(newClaim.id);
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

		// Mostrar confirmación por 5 segundos
		setTimeout(() => {
			setSubmitted(false);
		}, 5000);
	};

	const handleSearch = () => {
		const result = registeredClaims.find(
			(claim) => claim.id === searchCode.toUpperCase(),
		);
		setSearchResult(result || null);
	};

	const getStatusColor = (status) => {
		const colors = {
			registrado: "bg-blue-100 text-blue-800 border-blue-300",
			enRevision: "bg-yellow-100 text-yellow-800 border-yellow-300",
			investigacion: "bg-purple-100 text-purple-800 border-purple-300",
			respondido: "bg-green-100 text-green-800 border-green-300",
			resuelto: "bg-emerald-100 text-emerald-800 border-emerald-300",
			rechazado: "bg-red-100 text-red-800 border-red-300",
		};
		return colors[status] || colors.registrado;
	};

	const getStatusIcon = (status) => {
		switch (status) {
			case "resuelto":
				return <CheckCircle className="w-5 h-5" />;
			case "respondido":
				return <Eye className="w-5 h-5" />;
			case "enRevision":
			case "investigacion":
				return <Clock className="w-5 h-5" />;
			default:
				return <AlertCircle className="w-5 h-5" />;
		}
	};

	return (
		<div className="min-h-screen bg-linear-to-b from-gray-50 to-white pt-32 pb-16">
			{/* Hero Section */}
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
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
					>
						<div className="flex items-center space-x-3 mb-3">
							<Phone className="w-5 h-5 text-emerald-600" />
							<h3 className="font-semibold text-gray-900">
								Teléfono
							</h3>
						</div>
						<p className="text-gray-600">
							{reclamacionesInfo.telefonoReclamos}
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
					>
						<div className="flex items-center space-x-3 mb-3">
							<Mail className="w-5 h-5 text-emerald-600" />
							<h3 className="font-semibold text-gray-900">
								Email
							</h3>
						</div>
						<p className="text-gray-600">
							{reclamacionesInfo.emailReclamos}
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
					>
						<div className="flex items-center space-x-3 mb-3">
							<Clock className="w-5 h-5 text-emerald-600" />
							<h3 className="font-semibold text-gray-900">
								Resolución
							</h3>
						</div>
						<p className="text-gray-600">
							{reclamacionesInfo.diasHabiles}
						</p>
					</motion.div>
				</div>
			</div>

			{/* Main Tabs */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex gap-4 mb-8 border-b border-gray-200">
					<button
						onClick={() => {
							setActiveTab("registro");
							setSubmitted(false);
						}}
						className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
							activeTab === "registro"
								? "text-emerald-600 border-emerald-600"
								: "text-gray-600 border-transparent hover:text-gray-900"
						}`}
					>
						<Send className="w-5 h-5 inline mr-2" />
						Registrar Reclamo
					</button>
					<button
						onClick={() => setActiveTab("buscar")}
						className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
							activeTab === "buscar"
								? "text-emerald-600 border-emerald-600"
								: "text-gray-600 border-transparent hover:text-gray-900"
						}`}
					>
						<Search className="w-5 h-5 inline mr-2" />
						Buscar Reclamo
					</button>
					<button
						onClick={() => setActiveTab("normativa")}
						className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
							activeTab === "normativa"
								? "text-emerald-600 border-emerald-600"
								: "text-gray-600 border-transparent hover:text-gray-900"
						}`}
					>
						<Info className="w-5 h-5 inline mr-2" />
						Normativa
					</button>
				</div>

				{/* Tab Content */}
				<AnimatePresence mode="wait">
					{/* Registro Tab */}
					{activeTab === "registro" && (
						<motion.div
							key="registro"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
						>
							{submitted && (
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									className="bg-linear-to-r from-emerald-50 to-green-50 rounded-xl p-8 mb-8 border border-emerald-200"
								>
									<div className="flex items-start space-x-4">
										<div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shrink-0">
											<CheckCircle className="w-6 h-6 text-white" />
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-bold text-emerald-900 mb-2">
												¡Reclamo Registrado
												Exitosamente!
											</h3>
											<p className="text-emerald-800 mb-3">
												Tu reclamo ha sido registrado en
												nuestro sistema.
											</p>
											<div className="bg-white rounded-lg p-4 border border-emerald-200">
												<p className="text-sm text-gray-600 mb-2">
													Tu código de reclamo:
												</p>
												<p className="text-2xl font-bold text-emerald-600 font-mono">
													{generatedCode}
												</p>
												<p className="text-sm text-gray-600 mt-2">
													Guarda este código para
													hacer seguimiento a tu
													reclamo
												</p>
											</div>
										</div>
									</div>
								</motion.div>
							)}

							<form
								onSubmit={handleSubmit}
								className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto"
							>
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									Formulario de Reclamo
								</h2>

								<div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-8">
									<p className="text-sm text-emerald-900">
										Completa el formulario con el mayor
										detalle posible. Los campos con{" "}
										<span className="text-red-600 font-semibold">
											*
										</span>{" "}
										son obligatorios.
									</p>
								</div>

								{/* Tipo de Reclamo */}
								<div className="mb-6">
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Tipo de Reclamo{" "}
										<span className="text-red-500">*</span>
									</label>
									<select
										name="tipoReclamo"
										value={formData.tipoReclamo}
										onChange={handleFormChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
									>
										<option value="">
											Selecciona un tipo de reclamo
										</option>
										{tiposReclamo.map((tipo) => (
											<option
												key={tipo.id}
												value={tipo.id}
											>
												{tipo.label}
											</option>
										))}
									</select>
								</div>

								{/* Datos Personales */}
								<div className="grid md:grid-cols-2 gap-6 mb-6">
									<div>
										<label className="block text-sm font-semibold text-gray-900 mb-2">
											Nombre Completo{" "}
											<span className="text-red-500">
												*
											</span>
										</label>
										<input
											type="text"
											name="nombre"
											value={formData.nombre}
											onChange={handleFormChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
											placeholder="Tu nombre"
										/>
									</div>
									<div>
										<label className="block text-sm font-semibold text-gray-900 mb-2">
											Número de Documento{" "}
											<span className="text-red-500">
												*
											</span>
										</label>
										<input
											type="text"
											name="documento"
											value={formData.documento}
											onChange={handleFormChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
											placeholder="DNI, RUC o Pasaporte"
										/>
									</div>
								</div>

								{/* Contacto */}
								<div className="grid md:grid-cols-2 gap-6 mb-6">
									<div>
										<label className="block text-sm font-semibold text-gray-900 mb-2">
											Email{" "}
											<span className="text-red-500">
												*
											</span>
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleFormChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
											placeholder="tu@email.com"
										/>
									</div>
									<div>
										<label className="block text-sm font-semibold text-gray-900 mb-2">
											Teléfono{" "}
											<span className="text-red-500">
												*
											</span>
										</label>
										<input
											type="tel"
											name="telefono"
											value={formData.telefono}
											onChange={handleFormChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
											placeholder="+51 9 xxx-xxx-xxx"
										/>
									</div>
								</div>

								{/* Datos de Cliente */}
								<div className="mb-6">
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Número de Cliente (si aplica)
									</label>
									<input
										type="text"
										name="numeroCliente"
										value={formData.numeroCliente}
										onChange={handleFormChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
										placeholder="Número de cliente"
									/>
								</div>

								<div className="mb-6">
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Tipo de Persona
									</label>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
										<label className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-emerald-200">
											<input
												type="radio"
												name="tipoPersona"
												value="natural"
												checked={
													formData.tipoPersona ===
													"natural"
												}
												onChange={handleFormChange}
												className="accent-emerald-600"
											/>
											<span className="text-sm font-medium text-gray-900">
												Persona natural
											</span>
										</label>
										<label className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-emerald-200">
											<input
												type="radio"
												name="tipoPersona"
												value="juridica"
												checked={
													formData.tipoPersona ===
													"juridica"
												}
												onChange={handleFormChange}
												className="accent-emerald-600"
											/>
											<span className="text-sm font-medium text-gray-900">
												Persona jurídica
											</span>
										</label>
									</div>
								</div>

								<div className="mb-6">
									<button
										type="button"
										onClick={() =>
											toggleFormSection("identificacion")
										}
										className="w-full flex items-start justify-between gap-4 px-5 py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
									>
										<div className="text-left">
											<div className="font-bold text-gray-900">
												Identificación y contacto
												(detalle)
											</div>
											<div className="text-sm text-gray-600 mt-1">
												Información adicional para
												validar y responder.
											</div>
										</div>
										<ChevronDown
											className={`w-5 h-5 text-gray-600 mt-1 transition-transform ${
												expandedFormSections.includes(
													"identificacion",
												)
													? "rotate-180"
													: ""
											}`}
										/>
									</button>
									<AnimatePresence>
										{expandedFormSections.includes(
											"identificacion",
										) && (
											<motion.div
												initial={{
													height: 0,
													opacity: 0,
												}}
												animate={{
													height: "auto",
													opacity: 1,
												}}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.25 }}
												className="overflow-hidden"
											>
												<div className="pt-6">
													<div className="grid md:grid-cols-2 gap-6 mb-6">
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Apellidos
																(opcional)
															</label>
															<input
																type="text"
																name="apellidos"
																value={
																	formData.apellidos
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
																placeholder="Tus apellidos"
															/>
														</div>
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Tipo de
																documento
																(opcional)
															</label>
															<select
																name="tipoDocumento"
																value={
																	formData.tipoDocumento
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															>
																<option value="dni">
																	DNI
																</option>
																<option value="ruc">
																	RUC
																</option>
																<option value="pasaporte">
																	Pasaporte
																</option>
																<option value="ce">
																	Carné de
																	extranjería
																</option>
															</select>
														</div>
													</div>

													<div className="grid md:grid-cols-2 gap-6 mb-6">
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Email
																alternativo
																(opcional)
															</label>
															<input
																type="email"
																name="emailAlternativo"
																value={
																	formData.emailAlternativo
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
																placeholder="otro@email.com"
															/>
														</div>
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Teléfono
																alternativo
																(opcional)
															</label>
															<input
																type="tel"
																name="telefonoAlternativo"
																value={
																	formData.telefonoAlternativo
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
																placeholder="+51 9 xxx-xxx-xxx"
															/>
														</div>
													</div>

													<div className="grid md:grid-cols-2 gap-6 mb-6">
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Fecha de
																nacimiento
																(opcional)
															</label>
															<input
																type="date"
																name="fechaNacimiento"
																value={
																	formData.fechaNacimiento
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															/>
														</div>
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Canal de
																respuesta
																preferido
																(opcional)
															</label>
															<select
																name="canalRespuesta"
																value={
																	formData.canalRespuesta
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															>
																<option value="email">
																	Email
																</option>
																<option value="telefono">
																	Teléfono
																</option>
																<option value="oficina">
																	Presencial
																</option>
															</select>
														</div>
													</div>

													<div className="mb-6">
														<label className="block text-sm font-semibold text-gray-900 mb-2">
															Horario de contacto
															(opcional)
														</label>
														<input
															type="text"
															name="horarioContacto"
															value={
																formData.horarioContacto
															}
															onChange={
																handleFormChange
															}
															className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															placeholder="Ej: L-V 9:00 a 13:00"
														/>
													</div>

													<label className="flex items-start gap-3 cursor-pointer">
														<input
															type="checkbox"
															name="representaATercero"
															checked={
																formData.representaATercero
															}
															onChange={
																handleFormChange
															}
															className="mt-1 accent-emerald-600"
														/>
														<span className="text-sm text-gray-900 font-medium">
															Registro el reclamo
															en representación de
															otra persona
														</span>
													</label>

													<AnimatePresence>
														{formData.representaATercero && (
															<motion.div
																initial={{
																	opacity: 0,
																	height: 0,
																}}
																animate={{
																	opacity: 1,
																	height: "auto",
																}}
																exit={{
																	opacity: 0,
																	height: 0,
																}}
																transition={{
																	duration: 0.25,
																}}
																className="overflow-hidden"
															>
																<div className="mt-4 grid md:grid-cols-2 gap-6">
																	<div>
																		<label className="block text-sm font-semibold text-gray-900 mb-2">
																			Nombre
																			del
																			representado
																		</label>
																		<input
																			type="text"
																			name="nombreRepresentado"
																			value={
																				formData.nombreRepresentado
																			}
																			onChange={
																				handleFormChange
																			}
																			className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
																		/>
																	</div>
																	<div>
																		<label className="block text-sm font-semibold text-gray-900 mb-2">
																			Documento
																			del
																			representado
																		</label>
																		<input
																			type="text"
																			name="documentoRepresentado"
																			value={
																				formData.documentoRepresentado
																			}
																			onChange={
																				handleFormChange
																			}
																			className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
																		/>
																	</div>
																	<div className="md:col-span-2">
																		<label className="block text-sm font-semibold text-gray-900 mb-2">
																			Relación
																			(opcional)
																		</label>
																		<input
																			type="text"
																			name="relacionRepresentado"
																			value={
																				formData.relacionRepresentado
																			}
																			onChange={
																				handleFormChange
																			}
																			className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
																			placeholder="Ej: apoderado, familiar, titular de cuenta conjunta"
																		/>
																	</div>
																</div>
															</motion.div>
														)}
													</AnimatePresence>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>

								<div className="mb-6">
									<button
										type="button"
										onClick={() =>
											toggleFormSection("domicilio")
										}
										className="w-full flex items-start justify-between gap-4 px-5 py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
									>
										<div className="text-left">
											<div className="font-bold text-gray-900">
												Domicilio y ubicación (opcional)
											</div>
											<div className="text-sm text-gray-600 mt-1">
												Dirección referencial para
												contacto o verificación.
											</div>
										</div>
										<ChevronDown
											className={`w-5 h-5 text-gray-600 mt-1 transition-transform ${
												expandedFormSections.includes(
													"domicilio",
												)
													? "rotate-180"
													: ""
											}`}
										/>
									</button>
									<AnimatePresence>
										{expandedFormSections.includes(
											"domicilio",
										) && (
											<motion.div
												initial={{
													height: 0,
													opacity: 0,
												}}
												animate={{
													height: "auto",
													opacity: 1,
												}}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.25 }}
												className="overflow-hidden"
											>
												<div className="pt-6">
													<div className="mb-6">
														<label className="block text-sm font-semibold text-gray-900 mb-2">
															Dirección
														</label>
														<input
															type="text"
															name="direccion"
															value={
																formData.direccion
															}
															onChange={
																handleFormChange
															}
															className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															placeholder="Av./Jr., N°, interior, urbanización"
														/>
													</div>
													<div className="mb-6">
														<label className="block text-sm font-semibold text-gray-900 mb-2">
															Referencia
															(opcional)
														</label>
														<input
															type="text"
															name="referenciaDireccion"
															value={
																formData.referenciaDireccion
															}
															onChange={
																handleFormChange
															}
															className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															placeholder="Ej: frente a la plaza, al costado del mercado"
														/>
													</div>
													<div className="grid md:grid-cols-3 gap-6">
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Departamento
															</label>
															<input
																type="text"
																name="departamento"
																value={
																	formData.departamento
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															/>
														</div>
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Provincia
															</label>
															<input
																type="text"
																name="provincia"
																value={
																	formData.provincia
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															/>
														</div>
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Distrito
															</label>
															<input
																type="text"
																name="distrito"
																value={
																	formData.distrito
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															/>
														</div>
													</div>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>

								<div className="mb-6">
									<button
										type="button"
										onClick={() =>
											toggleFormSection("incidente")
										}
										className="w-full flex items-start justify-between gap-4 px-5 py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
									>
										<div className="text-left">
											<div className="font-bold text-gray-900">
												Detalle del hecho (minucioso)
											</div>
											<div className="text-sm text-gray-600 mt-1">
												Fecha, canal, agencia, producto
												y operación.
											</div>
										</div>
										<ChevronDown
											className={`w-5 h-5 text-gray-600 mt-1 transition-transform ${
												expandedFormSections.includes(
													"incidente",
												)
													? "rotate-180"
													: ""
											}`}
										/>
									</button>
									<AnimatePresence>
										{expandedFormSections.includes(
											"incidente",
										) && (
											<motion.div
												initial={{
													height: 0,
													opacity: 0,
												}}
												animate={{
													height: "auto",
													opacity: 1,
												}}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.25 }}
												className="overflow-hidden"
											>
												<div className="pt-6">
													<div className="grid md:grid-cols-2 gap-6 mb-6">
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Fecha del hecho
																(opcional)
															</label>
															<input
																type="date"
																name="fechaHecho"
																value={
																	formData.fechaHecho
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															/>
														</div>
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Hora (opcional)
															</label>
															<input
																type="time"
																name="horaHecho"
																value={
																	formData.horaHecho
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															/>
														</div>
													</div>

													<div className="grid md:grid-cols-2 gap-6 mb-6">
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Canal de
																atención
																(opcional)
															</label>
															<select
																name="canalAtencion"
																value={
																	formData.canalAtencion
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															>
																<option value="">
																	Selecciona
																</option>
																<option value="oficina">
																	Oficina /
																	agencia
																</option>
																<option value="telefono">
																	Teléfono
																</option>
																<option value="whatsapp">
																	WhatsApp
																</option>
																<option value="web">
																	Web
																</option>
																<option value="app">
																	App
																</option>
																<option value="otro">
																	Otro
																</option>
															</select>
														</div>
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Oficina /
																agencia
																(opcional)
															</label>
															<input
																type="text"
																name="oficinaAgencia"
																value={
																	formData.oficinaAgencia
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															/>
														</div>
													</div>

													<div className="grid md:grid-cols-2 gap-6 mb-6">
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Producto o
																servicio
																(opcional)
															</label>
															<select
																name="productoServicio"
																value={
																	formData.productoServicio
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															>
																<option value="">
																	Selecciona
																</option>
																<option value="ahorro">
																	Ahorro
																</option>
																<option value="credito">
																	Crédito
																</option>
																<option value="caja">
																	Caja
																</option>
																<option value="transferencia">
																	Transferencia
																</option>
																<option value="otro">
																	Otro
																</option>
															</select>
														</div>
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																N° de operación
																(opcional)
															</label>
															<input
																type="text"
																name="numeroOperacion"
																value={
																	formData.numeroOperacion
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
																placeholder="Código, ticket o referencia"
															/>
														</div>
													</div>

													<div className="grid md:grid-cols-2 gap-6">
														<div>
															<label className="block text-sm font-semibold text-gray-900 mb-2">
																Moneda
																(opcional)
															</label>
															<select
																name="moneda"
																value={
																	formData.moneda
																}
																onChange={
																	handleFormChange
																}
																className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															>
																<option value="PEN">
																	S/ (PEN)
																</option>
																<option value="USD">
																	$ (USD)
																</option>
															</select>
														</div>
														<div className="text-sm text-gray-600 flex items-center gap-2 pt-2">
															<CalendarDays className="w-4 h-4" />
															<span>
																Estos datos
																ayudan a ubicar
																tu caso con
																mayor precisión.
															</span>
														</div>
													</div>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>

								<div className="mb-6">
									<button
										type="button"
										onClick={() =>
											toggleFormSection("pretension")
										}
										className="w-full flex items-start justify-between gap-4 px-5 py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
									>
										<div className="text-left">
											<div className="font-bold text-gray-900">
												Solicitud / pretensión
												(opcional)
											</div>
											<div className="text-sm text-gray-600 mt-1">
												Qué solución esperas y cómo
												deseas recibirla.
											</div>
										</div>
										<ChevronDown
											className={`w-5 h-5 text-gray-600 mt-1 transition-transform ${
												expandedFormSections.includes(
													"pretension",
												)
													? "rotate-180"
													: ""
											}`}
										/>
									</button>
									<AnimatePresence>
										{expandedFormSections.includes(
											"pretension",
										) && (
											<motion.div
												initial={{
													height: 0,
													opacity: 0,
												}}
												animate={{
													height: "auto",
													opacity: 1,
												}}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.25 }}
												className="overflow-hidden"
											>
												<div className="pt-6">
													<div className="mb-6">
														<label className="block text-sm font-semibold text-gray-900 mb-2">
															Describe la solución
															que solicitas
														</label>
														<textarea
															name="pretension"
															value={
																formData.pretension
															}
															onChange={
																handleFormChange
															}
															rows="4"
															className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
															placeholder="Ej: devolución del monto, corrección de información, anulación de comisión, etc."
														/>
													</div>
													<div className="mb-2">
														<label className="block text-sm font-semibold text-gray-900 mb-2">
															Medio de entrega de
															respuesta (opcional)
														</label>
														<input
															type="text"
															name="medioEntrega"
															value={
																formData.medioEntrega
															}
															onChange={
																handleFormChange
															}
															className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
															placeholder="Ej: por email, llamada, carta, presencial"
														/>
													</div>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>

								<div className="mb-6">
									<button
										type="button"
										onClick={() =>
											toggleFormSection("evidencias")
										}
										className="w-full flex items-start justify-between gap-4 px-5 py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
									>
										<div className="text-left">
											<div className="font-bold text-gray-900">
												Evidencias y adjuntos (opcional)
											</div>
											<div className="text-sm text-gray-600 mt-1">
												Archivos y descripción de
												evidencias.
											</div>
										</div>
										<ChevronDown
											className={`w-5 h-5 text-gray-600 mt-1 transition-transform ${
												expandedFormSections.includes(
													"evidencias",
												)
													? "rotate-180"
													: ""
											}`}
										/>
									</button>
									<AnimatePresence>
										{expandedFormSections.includes(
											"evidencias",
										) && (
											<motion.div
												initial={{
													height: 0,
													opacity: 0,
												}}
												animate={{
													height: "auto",
													opacity: 1,
												}}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.25 }}
												className="overflow-hidden"
											>
												<div className="pt-6">
													<div className="mb-6">
														<label className="block text-sm font-semibold text-gray-900 mb-2">
															Adjuntar archivos
															(opcional)
														</label>
														<input
															type="file"
															multiple
															onChange={
																handleFilesChange
															}
															accept=".pdf,.jpg,.jpeg,.png"
															className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
														/>
														{formData.adjuntos
															.length > 0 && (
															<div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
																<div className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
																	<Paperclip className="w-4 h-4" />
																	<span>
																		Archivos
																		seleccionados
																	</span>
																</div>
																<ul className="space-y-1 text-sm text-gray-700">
																	{formData.adjuntos.map(
																		(a) => (
																			<li
																				key={`${a.name}-${a.lastModified}`}
																			>
																				{
																					a.name
																				}
																			</li>
																		),
																	)}
																</ul>
															</div>
														)}
													</div>
													<div className="mb-2">
														<label className="block text-sm font-semibold text-gray-900 mb-2">
															Detalle de
															evidencias
															(opcional)
														</label>
														<textarea
															name="detalleEvidencias"
															value={
																formData.detalleEvidencias
															}
															onChange={
																handleFormChange
															}
															rows="3"
															className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
															placeholder="Ej: adjunto voucher, captura, correo, constancia, etc."
														/>
													</div>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>

								{/* Descripción */}
								<div className="mb-6">
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Descripción del Reclamo{" "}
										<span className="text-red-500">*</span>
									</label>
									<textarea
										name="descripcion"
										value={formData.descripcion}
										onChange={handleFormChange}
										required
										rows="5"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
										placeholder="Detalla el hecho, fechas, canal de atención, operación y cualquier dato verificable."
									/>
								</div>

								{/* Monto (si aplica) */}
								<div className="mb-6">
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Monto afectado (si aplica)
									</label>
									<input
										type="number"
										name="monto"
										value={formData.monto}
										onChange={handleFormChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
										placeholder="0.00"
										step="0.01"
									/>
								</div>

								{/* Notice */}
								<div className="mb-6">
									<button
										type="button"
										onClick={() =>
											toggleFormSection("declaraciones")
										}
										className="w-full flex items-start justify-between gap-4 px-5 py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
									>
										<div className="text-left">
											<div className="font-bold text-gray-900">
												Declaraciones
											</div>
											<div className="text-sm text-gray-600 mt-1">
												Confirmación para procesar el
												reclamo.
											</div>
										</div>
										<ChevronDown
											className={`w-5 h-5 text-gray-600 mt-1 transition-transform ${
												expandedFormSections.includes(
													"declaraciones",
												)
													? "rotate-180"
													: ""
											}`}
										/>
									</button>
									<AnimatePresence>
										{expandedFormSections.includes(
											"declaraciones",
										) && (
											<motion.div
												initial={{
													height: 0,
													opacity: 0,
												}}
												animate={{
													height: "auto",
													opacity: 1,
												}}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.25 }}
												className="overflow-hidden"
											>
												<div className="pt-6">
													<div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
														<p className="text-sm text-blue-800">
															Al registrar tu
															reclamo, tus datos
															serán utilizados
															conforme a la Ley de
															Protección de Datos
															Personales.
														</p>
													</div>
													<label className="flex items-start gap-3 cursor-pointer mb-4">
														<input
															type="checkbox"
															name="autorizaDatos"
															checked={
																formData.autorizaDatos
															}
															onChange={
																handleFormChange
															}
															required
															className="mt-1 accent-emerald-600"
														/>
														<span className="text-sm text-gray-900">
															Autorizo el
															tratamiento de mis
															datos personales
															para gestionar este
															reclamo{" "}
															<span className="text-red-500 font-semibold">
																*
															</span>
														</span>
													</label>
													<label className="flex items-start gap-3 cursor-pointer">
														<input
															type="checkbox"
															name="declaraVeracidad"
															checked={
																formData.declaraVeracidad
															}
															onChange={
																handleFormChange
															}
															required
															className="mt-1 accent-emerald-600"
														/>
														<span className="text-sm text-gray-900">
															Declaro que la
															información brindada
															es veraz y completa{" "}
															<span className="text-red-500 font-semibold">
																*
															</span>
														</span>
													</label>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>

								{/* Submit Button */}
								<motion.button
									type="submit"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									disabled={
										!formData.autorizaDatos ||
										!formData.declaraVeracidad
									}
									className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
								>
									<Send className="w-5 h-5" />
									<span>Registrar Reclamo</span>
								</motion.button>
							</form>
						</motion.div>
					)}

					{/* Buscar Tab */}
					{activeTab === "buscar" && (
						<motion.div
							key="buscar"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
						>
							<div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto mb-8">
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									Buscar tu Reclamo
								</h2>

								<div className="flex gap-3 mb-6">
									<input
										type="text"
										value={searchCode}
										onChange={(e) =>
											setSearchCode(
												e.target.value.toUpperCase(),
											)
										}
										onKeyPress={(e) =>
											e.key === "Enter" && handleSearch()
										}
										placeholder="Ingresa tu código de reclamo (ej: REC-20250201-ABC123)"
										className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-mono"
									/>
									<motion.button
										onClick={handleSearch}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
									>
										<Search className="w-5 h-5" />
									</motion.button>
								</div>

								{searchResult && (
									<motion.div
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										className="border border-gray-200 rounded-lg p-6 bg-linear-to-br from-gray-50 to-white"
									>
										<div className="flex items-start justify-between mb-6">
											<div>
												<p className="text-sm text-gray-600">
													Código de Reclamo
												</p>
												<p className="text-2xl font-bold text-emerald-600 font-mono">
													{searchResult.id}
												</p>
											</div>
											<div
												className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${getStatusColor(
													searchResult.estado,
												)}`}
											>
												{getStatusIcon(
													searchResult.estado,
												)}
												<span className="font-semibold">
													{estadosReclamo[
														searchResult.estado
													] || searchResult.estado}
												</span>
											</div>
										</div>

										<div className="grid md:grid-cols-2 gap-6 mb-6">
											<div>
												<p className="text-sm text-gray-600">
													Fecha de Registro
												</p>
												<p className="font-semibold text-gray-900">
													{searchResult.fechaRegistro}
												</p>
											</div>
											<div>
												<p className="text-sm text-gray-600">
													Hora de Registro
												</p>
												<p className="font-semibold text-gray-900">
													{searchResult.horaRegistro}
												</p>
											</div>
											<div>
												<p className="text-sm text-gray-600">
													Nombre
												</p>
												<p className="font-semibold text-gray-900">
													{searchResult.nombre}
												</p>
											</div>
											<div>
												<p className="text-sm text-gray-600">
													Email
												</p>
												<p className="font-semibold text-gray-900">
													{searchResult.email}
												</p>
											</div>
										</div>

										<div className="mb-6">
											<p className="text-sm text-gray-600">
												Tipo de Reclamo
											</p>
											<p className="font-semibold text-gray-900">
												{tiposReclamo.find(
													(t) =>
														t.id ===
														searchResult.tipoReclamo,
												)?.label ||
													searchResult.tipoReclamo}
											</p>
										</div>

										<div className="mb-6">
											<p className="text-sm text-gray-600">
												Descripción
											</p>
											<p className="text-gray-900 bg-white p-4 rounded-lg border border-gray-200">
												{searchResult.descripcion}
											</p>
										</div>

										{searchResult.monto && (
											<div className="mb-6">
												<p className="text-sm text-gray-600">
													Monto Afectado
												</p>
												<p className="text-xl font-bold text-emerald-600">
													S/{" "}
													{parseFloat(
														searchResult.monto,
													).toFixed(2)}
												</p>
											</div>
										)}

										{searchResult.respuesta && (
											<div className="bg-green-50 border border-green-200 rounded-lg p-4">
												<p className="text-sm font-semibold text-green-900 mb-2">
													Respuesta:
												</p>
												<p className="text-green-800">
													{searchResult.respuesta}
												</p>
											</div>
										)}
									</motion.div>
								)}

								{searchCode && !searchResult && (
									<div className="text-center py-8">
										<AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
										<p className="text-gray-600">
											No se encontró un reclamo con ese
											código.
										</p>
									</div>
								)}
							</div>

							{/* Recent Claims */}
							{registeredClaims.length > 0 && (
								<div className="max-w-4xl mx-auto">
									<h3 className="text-xl font-bold text-gray-900 mb-6">
										Mis Reclamos Recientes
									</h3>
									<div className="space-y-4">
										{registeredClaims
											.slice(0, 5)
											.map((claim) => (
												<motion.div
													key={claim.id}
													initial={{
														opacity: 0,
														x: -20,
													}}
													animate={{
														opacity: 1,
														x: 0,
													}}
													className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
												>
													<div className="flex items-center justify-between mb-3">
														<p className="font-mono font-bold text-emerald-600">
															{claim.id}
														</p>
														<div
															className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-sm ${getStatusColor(
																claim.estado,
															)}`}
														>
															{getStatusIcon(
																claim.estado,
															)}
															<span>
																{estadosReclamo[
																	claim.estado
																] ||
																	claim.estado}
															</span>
														</div>
													</div>
													<p className="text-gray-700 font-semibold mb-2">
														{claim.descripcion.substring(
															0,
															100,
														)}
														...
													</p>
													<p className="text-sm text-gray-500">
														{claim.fechaRegistro} -{" "}
														{claim.nombre}
													</p>
												</motion.div>
											))}
									</div>
								</div>
							)}
						</motion.div>
					)}

					{/* Normativa Tab */}
					{activeTab === "normativa" && (
						<motion.div
							key="normativa"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
						>
							<div className="max-w-3xl mx-auto">
								<h2 className="text-3xl font-bold text-gray-900 mb-8">
									{reglamentoPeru.title}
								</h2>

								<div className="space-y-4">
									{reglamentoPeru.items.map((item, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.1 }}
											className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
										>
											<div className="flex items-start space-x-4">
												<div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-1">
													<span className="text-emerald-600 font-bold">
														{index + 1}
													</span>
												</div>
												<div className="flex-1">
													<h3 className="text-lg font-bold text-gray-900 mb-2">
														{item.titulo}
													</h3>
													<p className="text-gray-600 leading-relaxed">
														{item.descripcion}
													</p>
												</div>
											</div>
										</motion.div>
									))}
								</div>

								{/* Additional Info */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									className="bg-linear-to-r from-emerald-50 to-green-50 rounded-xl p-8 mt-12 border border-emerald-200"
								>
									<h3 className="text-xl font-bold text-emerald-900 mb-4">
										Información de la Cooperativa
									</h3>
									<div className="space-y-3 text-emerald-800">
										<p>
											<strong>Razón Social:</strong>{" "}
											{reclamacionesInfo.nombreEmpresa}
										</p>
										<p>
											<strong>RUC:</strong>{" "}
											{reclamacionesInfo.numeroRUC}
										</p>
										<p>
											<strong>Dirección:</strong>{" "}
											{reclamacionesInfo.direccion}
										</p>
										<p>
											<strong>
												Horario de Atención:
											</strong>{" "}
											{reclamacionesInfo.horarioAtencion}
										</p>
									</div>
								</motion.div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
