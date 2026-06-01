import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
	CheckCircle,
	Mail,
	Send,
	CalendarDays,
	Paperclip,
	AlertCircle,
} from "lucide-react";
import { FormSection, FormField, Input, Select } from "./ClaimFormSections.jsx";
import { tiposReclamo } from "../../../data/reclamaciones";

export default function RegistroTab({
	formData,
	handleFormChange,
	handleFilesChange,
	handleSubmit,
	submitted,
	isSubmitting,
	error,
	generatedCode,
	expandedSections,
	toggleSection,
}) {
	return (
		<motion.div
			key="registro"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.3 }}
		>
			{error && (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-8 flex items-center gap-3"
				>
					<AlertCircle className="w-5 h-5 shrink-0" />
					<p className="text-sm font-medium">{error}</p>
				</motion.div>
			)}

			{submitted && (
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					className="bg-linear-to-r from-emerald-50 to-green-50 rounded-2xl p-8 mb-12 border border-emerald-200 shadow-xl"
				>
					<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
						<div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-200">
							<CheckCircle className="w-8 h-8 text-white" />
						</div>
						<div className="flex-1 text-center md:text-left">
							<h3 className="text-2xl font-bold text-emerald-900 mb-2">
								¡Reclamo Registrado Exitosamente!
							</h3>
							<p className="text-emerald-800 mb-6 text-lg">
								Tu solicitud ha sido ingresada correctamente al
								sistema de la cooperativa.
							</p>

							<div className="grid md:grid-cols-2 gap-6">
								<div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm">
									<p className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-bold">
										Tu código de reclamo:
									</p>
									<p className="text-3xl font-black text-emerald-600 font-mono">
										{generatedCode}
									</p>
									<div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-sm text-emerald-700 font-medium">
										<Mail className="w-4 h-4" />
										<span>Notificación enviada al área legal</span>
									</div>
								</div>

								<div className="bg-white rounded-xl p-6 border border-emerald-100 shadow-sm">
									<p className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-bold">
										Próximos pasos:
									</p>
									<ul className="text-sm text-gray-600 space-y-2">
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
											<span>
												El área legal ha sido notificada
											</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
											<span>
												Plazo de respuesta: 2-15 días
											</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
											<span>
												Guarda tu código para cualquier
												consulta
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			)}

			<form
				onSubmit={handleSubmit}
				className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100"
			>
				<h2 className="text-2xl font-bold text-gray-900 mb-6">
					Formulario de Reclamo
				</h2>

				<div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-8">
					<p className="text-sm text-emerald-900 font-medium">
						Completa el formulario con el mayor detalle posible. Los
						campos con{" "}
						<span className="text-red-600 font-bold">*</span> son
						obligatorios.
					</p>
				</div>

				<FormField label="Tipo de Reclamo" required>
					<Select
						name="tipoReclamo"
						value={formData.tipoReclamo}
						onChange={handleFormChange}
						required
						options={[
							{ value: "", label: "Selecciona una opción" },
							...tiposReclamo.map((t) => ({
								value: t.id,
								label: t.label,
							})),
						]}
					/>
				</FormField>

				{/* Sección Identificación */}
				<FormSection
					id="identificacion"
					title="Identificación del Reclamante"
					description="Tus datos personales para contactarte."
					expandedSections={expandedSections}
					toggleSection={toggleSection}
				>
					<div className="grid md:grid-cols-2 gap-4">
						<FormField label="Tipo de Persona" required>
							<Select
								name="tipoPersona"
								value={formData.tipoPersona}
								onChange={handleFormChange}
								options={[
									{
										value: "natural",
										label: "Persona Natural",
									},
									{
										value: "juridica",
										label: "Persona Jurídica",
									},
								]}
							/>
						</FormField>
						<FormField label="Tipo Documento" required>
							<Select
								name="tipoDocumento"
								value={formData.tipoDocumento}
								onChange={handleFormChange}
								options={[
									{ value: "dni", label: "DNI" },
									{ value: "ce", label: "C.E." },
									{ value: "ruc", label: "RUC" },
									{ value: "pasaporte", label: "Pasaporte" },
								]}
							/>
						</FormField>
					</div>

					<FormField label="N° de Documento" required>
						<Input
							name="documento"
							value={formData.documento}
							onChange={handleFormChange}
							required
							placeholder="Ingresa tu número"
						/>
					</FormField>

					<div className="grid md:grid-cols-2 gap-4">
						<FormField label="Nombre / Razón Social" required>
							<Input
								name="nombre"
								value={formData.nombre}
								onChange={handleFormChange}
								required
								placeholder="Nombres"
							/>
						</FormField>
						<FormField
							label="Apellidos"
							required={formData.tipoPersona === "natural"}
						>
							<Input
								name="apellidos"
								value={formData.apellidos}
								onChange={handleFormChange}
								required={formData.tipoPersona === "natural"}
								placeholder="Apellidos"
							/>
						</FormField>
					</div>

					<div className="grid md:grid-cols-2 gap-4">
						<FormField label="Correo Electrónico" required>
							<Input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleFormChange}
								required
								placeholder="ejemplo@correo.com"
							/>
						</FormField>
						<FormField label="Correo Alternativo">
							<Input
								type="email"
								name="emailAlternativo"
								value={formData.emailAlternativo}
								onChange={handleFormChange}
								placeholder="opcional@correo.com"
							/>
						</FormField>
					</div>

					<div className="grid md:grid-cols-2 gap-4">
						<FormField label="Teléfono / Celular" required>
							<Input
								type="tel"
								name="telefono"
								value={formData.telefono}
								onChange={handleFormChange}
								required
								placeholder="999 999 999"
							/>
						</FormField>
						<FormField label="Teléfono Alternativo">
							<Input
								type="tel"
								name="telefonoAlternativo"
								value={formData.telefonoAlternativo}
								onChange={handleFormChange}
								placeholder="999 999 999"
							/>
						</FormField>
					</div>

					<div className="grid md:grid-cols-2 gap-4">
						<FormField label="Fecha de Nacimiento">
							<Input
								type="date"
								name="fechaNacimiento"
								value={formData.fechaNacimiento}
								onChange={handleFormChange}
							/>
						</FormField>
						<FormField label="Número de Socio/Cliente">
							<Input
								name="numeroCliente"
								value={formData.numeroCliente}
								onChange={handleFormChange}
								placeholder="Si aplica"
							/>
						</FormField>
					</div>
				</FormSection>

				{/* Sección Domicilio */}
				<FormSection
					id="domicilio"
					title="Domicilio y Contacto"
					description="Ubicación y preferencias de respuesta."
					expandedSections={expandedSections}
					toggleSection={toggleSection}
				>
					<FormField label="Dirección" required>
						<Input
							name="direccion"
							value={formData.direccion}
							onChange={handleFormChange}
							required
							placeholder="Av. / Jr. / Calle / N° / Dpto"
						/>
					</FormField>
					<FormField label="Referencia de Dirección">
						<Input
							name="referenciaDireccion"
							value={formData.referenciaDireccion}
							onChange={handleFormChange}
							placeholder="Cerca a..., frente a..."
						/>
					</FormField>
					<div className="grid md:grid-cols-3 gap-4">
						<FormField label="Departamento" required>
							<Input
								name="departamento"
								value={formData.departamento}
								onChange={handleFormChange}
								required
								placeholder="Dpto"
							/>
						</FormField>
						<FormField label="Provincia" required>
							<Input
								name="provincia"
								value={formData.provincia}
								onChange={handleFormChange}
								required
								placeholder="Provincia"
							/>
						</FormField>
						<FormField label="Distrito" required>
							<Input
								name="distrito"
								value={formData.distrito}
								onChange={handleFormChange}
								required
								placeholder="Distrito"
							/>
						</FormField>
					</div>
					<div className="grid md:grid-cols-2 gap-4">
						<FormField label="Canal de respuesta preferido">
							<Select
								name="canalRespuesta"
								value={formData.canalRespuesta}
								onChange={handleFormChange}
								options={[
									{
										value: "email",
										label: "Correo Electrónico",
									},
									{
										value: "telefono",
										label: "Llamada Telefónica",
									},
									{
										value: "carta",
										label: "Carta a Domicilio",
									},
								]}
							/>
						</FormField>
						<FormField label="Horario preferido de contacto">
							<Input
								name="horarioContacto"
								value={formData.horarioContacto}
								onChange={handleFormChange}
								placeholder="Ej: 9am - 1pm"
							/>
						</FormField>
					</div>
				</FormSection>

				{/* Sección Representación */}
				<div className="mb-6">
					<label className="flex items-center gap-3 cursor-pointer p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
						<input
							type="checkbox"
							name="representaATercero"
							checked={formData.representaATercero}
							onChange={handleFormChange}
							className="w-5 h-5 accent-emerald-600"
						/>
						<span className="font-bold text-gray-900">
							¿Representas a un tercero o eres menor de edad?
						</span>
					</label>
				</div>

				<AnimatePresence>
					{formData.representaATercero && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							className="overflow-hidden mb-6"
						>
							<div className="p-6 bg-blue-50 border border-blue-100 rounded-xl space-y-4">
								<h3 className="font-bold text-blue-900">
									Datos del Representado
								</h3>
								<FormField label="Nombre completo" required>
									<Input
										name="nombreRepresentado"
										value={formData.nombreRepresentado}
										onChange={handleFormChange}
										required
										placeholder="Nombre del menor o titular"
									/>
								</FormField>
								<div className="grid md:grid-cols-2 gap-4">
									<FormField label="N° Documento" required>
										<Input
											name="documentoRepresentado"
											value={
												formData.documentoRepresentado
											}
											onChange={handleFormChange}
											required
											placeholder="DNI / CE"
										/>
									</FormField>
									<FormField
										label="Relación / Parentesco"
										required
									>
										<Input
											name="relacionRepresentado"
											value={
												formData.relacionRepresentado
											}
											onChange={handleFormChange}
											required
											placeholder="Ej: Padre, Madre, Tutor"
										/>
									</FormField>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Sección Incidente */}
				<FormSection
					id="incidente"
					title="Detalle del hecho"
					description="Información específica de lo ocurrido."
					expandedSections={expandedSections}
					toggleSection={toggleSection}
				>
					<div className="grid md:grid-cols-3 gap-4">
						<FormField label="Fecha del hecho">
							<Input
								type="date"
								name="fechaHecho"
								value={formData.fechaHecho}
								onChange={handleFormChange}
							/>
						</FormField>
						<FormField label="Hora (aprox.)">
							<Input
								type="time"
								name="horaHecho"
								value={formData.horaHecho}
								onChange={handleFormChange}
							/>
						</FormField>
						<FormField label="Canal de Atención">
							<Select
								name="canalAtencion"
								value={formData.canalAtencion}
								onChange={handleFormChange}
								options={[
									{ value: "", label: "Selecciona el canal" },
									{
										value: "ventanilla",
										label: "Ventanilla / Agencia",
									},
									{ value: "app", label: "App Móvil" },
									{ value: "web", label: "Página Web" },
									{
										value: "agente",
										label: "Agente Corresponsal",
									},
									{ value: "otro", label: "Otro" },
								]}
							/>
						</FormField>
					</div>
					<div className="grid md:grid-cols-2 gap-4">
						<FormField label="Oficina / Agencia">
							<Input
								name="oficinaAgencia"
								value={formData.oficinaAgencia}
								onChange={handleFormChange}
								placeholder="Ej: Agencia Ayacucho"
							/>
						</FormField>
						<FormField label="N° de Operación">
							<Input
								name="numeroOperacion"
								value={formData.numeroOperacion}
								onChange={handleFormChange}
								placeholder="Si la tuviera"
							/>
						</FormField>
					</div>
					<FormField label="Producto / Servicio">
						<Input
							name="productoServicio"
							value={formData.productoServicio}
							onChange={handleFormChange}
							placeholder="Ej: Ahorro Libre, Crédito Personal..."
						/>
					</FormField>
					<div className="grid md:grid-cols-2 gap-4">
						<FormField label="Moneda">
							<Select
								name="moneda"
								value={formData.moneda}
								onChange={handleFormChange}
								options={[
									{ value: "PEN", label: "Soles (S/)" },
									{ value: "USD", label: "Dólares ($)" },
								]}
							/>
						</FormField>
						<FormField label="Monto afectado (opcional)">
							<Input
								type="number"
								name="monto"
								value={formData.monto}
								onChange={handleFormChange}
								placeholder="0.00"
							/>
						</FormField>
					</div>
				</FormSection>

				<FormSection
					id="pretension"
					title="Solicitud / Pretensión"
					description="Qué solución esperas de la cooperativa."
					expandedSections={expandedSections}
					toggleSection={toggleSection}
				>
					<FormField label="Describe lo que solicitas" required>
						<textarea
							name="pretension"
							value={formData.pretension}
							onChange={handleFormChange}
							required
							rows="3"
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all"
							placeholder="Ej: Devolución de comisión, anulación de operación, etc."
						/>
					</FormField>
					<FormField label="Medio de entrega de respuesta preferido">
						<Select
							name="medioEntrega"
							value={formData.medioEntrega}
							onChange={handleFormChange}
							options={[
								{ value: "", label: "Selecciona una opción" },
								{
									value: "digital",
									label: "Digital (Correo Electrónico)",
								},
								{
									value: "fisico",
									label: "Físico (Carta a domicilio)",
								},
								{
									value: "agencia",
									label: "Recojo en Agencia",
								},
							]}
						/>
					</FormField>
				</FormSection>

				<FormSection
					id="evidencias"
					title="Evidencias y Adjuntos"
					description="Sube archivos que sustenten tu reclamo."
					expandedSections={expandedSections}
					toggleSection={toggleSection}
				>
					<FormField label="Detalle de evidencias (opcional)">
						<textarea
							name="detalleEvidencias"
							value={formData.detalleEvidencias}
							onChange={handleFormChange}
							rows="2"
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all"
							placeholder="Ej: Voucher N° 123, Contrato firmado..."
						/>
					</FormField>
					<FormField label="Adjuntar archivos (PDF, JPG, PNG)">
						<div className="relative group">
							<input
								type="file"
								multiple
								onChange={handleFilesChange}
								accept=".pdf,.jpg,.jpeg,.png"
								className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-emerald-50 hover:border-emerald-300 transition-all cursor-pointer"
							/>
						</div>
						{formData.adjuntos.length > 0 && (
							<div className="mt-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
								<div className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
									<Paperclip className="w-4 h-4 text-emerald-600" />
									<span>Archivos seleccionados:</span>
								</div>
								<ul className="space-y-1">
									{formData.adjuntos.map((a, i) => (
										<li
											key={i}
											className="text-xs text-gray-600 truncate"
										>
											{a.name}
										</li>
									))}
								</ul>
							</div>
						)}
					</FormField>
				</FormSection>

				<div className="mb-8">
					<FormField label="Descripción del Reclamo" required>
						<textarea
							name="descripcion"
							value={formData.descripcion}
							onChange={handleFormChange}
							required
							rows="5"
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all"
							placeholder="Describe detalladamente lo ocurrido..."
						/>
					</FormField>
				</div>

				{/* Declaraciones Finales */}
				<div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
					<h3 className="font-bold text-gray-900 mb-4">
						Declaraciones Finales
					</h3>
					<div className="space-y-4">
						<label className="flex items-start gap-3 cursor-pointer group">
							<input
								type="checkbox"
								name="autorizaDatos"
								checked={formData.autorizaDatos}
								onChange={handleFormChange}
								required
								className="mt-1.5 w-4 h-4 accent-emerald-600"
							/>
							<span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
								Autorizo el tratamiento de mis datos personales
								conforme a la Ley N° 29733.{" "}
								<span className="text-red-500 font-bold">
									*
								</span>
							</span>
						</label>
						<label className="flex items-start gap-3 cursor-pointer group">
							<input
								type="checkbox"
								name="declaraVeracidad"
								checked={formData.declaraVeracidad}
								onChange={handleFormChange}
								required
								className="mt-1.5 w-4 h-4 accent-emerald-600"
							/>
							<span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
								Declaro bajo juramento que la información
								proporcionada es veraz.{" "}
								<span className="text-red-500 font-bold">
									*
								</span>
							</span>
						</label>
					</div>
				</div>

				<motion.button
					type="submit"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					disabled={
						!formData.autorizaDatos ||
						!formData.declaraVeracidad ||
						isSubmitting
					}
					className="w-full bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg shadow-emerald-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? (
						<div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
					) : (
						<Send className="w-5 h-5" />
					)}
					<span>
						{isSubmitting
							? "Enviando..."
							: "Enviar Reclamo / Queja"}
					</span>
				</motion.button>
			</form>
		</motion.div>
	);
}
