import React, { useState, useEffect } from "react";
import {
	Menu,
	X,
	ChevronDown,
	Facebook,
	Instagram,
	Linkedin,
	Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [activeSubDropdown, setActiveSubDropdown] = useState(null);
	const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
	const [mobileExpandedSubMenu, setMobileExpandedSubMenu] = useState(null);
	const [currentPage, setCurrentPage] = useState(window.location.pathname);

	// Manejo de cambios de URL
	useEffect(() => {
		const handlePopState = () => setCurrentPage(window.location.pathname);
		window.addEventListener("popstate", handlePopState);
		return () => window.removeEventListener("popstate", handlePopState);
	}, []);

	// Manejo de scroll para cambiar el fondo del header
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const menuItems = [
		{ label: "Inicio", href: "/" },
		{
			label: "La Cooperativa",
			subItems: [
				{ label: "Nosotros", href: "/nosotros" },
				{
					label: "Misión, visión y valores",
					href: "/mision-vision-valores",
				},
				{ label: "Compromiso social", href: "/compromiso-social" },
				{ label: "Órgano de gobernanza", href: "/organo-gobernanza" },
				{ label: "Nuestro equipo", href: "/nuestro-equipo" },
			],
		},
		{
			label: "Productos y Servicios",
			subItems: [
				{
					label: "Ahorros",
					subItems: [
						{ label: "Ahorro infantil", href: "/ahorros-infantil" },
						{ label: "Ahorro libre", href: "/ahorros-libre" },
						{ label: "Plazo fijo", href: "/ahorros-plazo-fijo" },
						{
							label: "Ahorro programado",
							href: "/ahorros-programado",
						},
						{
							label: "Depósito de garantía",
							href: "/ahorros-deposito-garantia",
						},
						{ label: "Ahorro canasta", href: "/ahorros-canasta" },
					],
				},
				{
					label: "Créditos",
					subItems: [
						{
							label: "Créditos personales",
							href: "/creditos-personales",
						},
						{
							label: "Créditos hipotecarios",
							href: "/creditos-hipotecarios",
						},
						{
							label: "Créditos empresariales",
							href: "/creditos-empresariales",
						},
						{
							label: "Créditos educativos",
							href: "/creditos-educativos",
						},
					],
				},
				{ label: "Beneficios al Socio", href: "/beneficios" },
				{ label: "Requisitos", href: "/requisitos" },
			],
		},
		{
			label: "Transparencia",
			subItems: [
				{ label: "Estados Financieros", href: "/estados-financieros" },
				{ label: "Tarifarios", href: "/tarifarios" },
				{
					label: "Documentos Institucionales",
					href: "/documentos-institucionales",
				},
				{
					label: "Preguntas Frecuentes",
					href: "/preguntas-frecuentes",
				},
			],
		},
		{ label: "Noticias", href: "/noticias" },
		{ label: "Oficinas", href: "/oficinas" },
	];

	const toggleMobileMenu = (menuItem) => {
		const label = menuItem.label;
		const next = mobileExpandedMenu === label ? null : label;
		setMobileExpandedMenu(next);
		setMobileExpandedSubMenu(next ? getAutoExpandedSubKey(menuItem) : null);
	};

	const toggleMobileSubMenu = (key) =>
		setMobileExpandedSubMenu(mobileExpandedSubMenu === key ? null : key);

	const isActive = (href) => {
		if (!href) return false;
		return (
			new URL(currentPage, window.location.origin).pathname ===
			new URL(href, window.location.origin).pathname
		);
	};

	const isMenuItemActive = (menuItem) => {
		if (!menuItem) return false;
		if (menuItem.href && isActive(menuItem.href)) return true;
		if (menuItem.subItems) return menuItem.subItems.some(isMenuItemActive);
		return false;
	};

	const getAutoExpandedSubKey = (menuItem) => {
		if (!menuItem?.subItems) return null;

		for (const subItem of menuItem.subItems) {
			if (!subItem?.subItems) continue;
			if (
				subItem.subItems.some((nestedItem) => isActive(nestedItem.href))
			) {
				return `${menuItem.label}::${subItem.label}`;
			}
		}

		return null;
	};

	useEffect(() => {
		if (!isMobileMenuOpen) return;

		const activeTop = menuItems.find(
			(item) => item.subItems && isMenuItemActive(item),
		);

		if (!activeTop) {
			setMobileExpandedMenu(null);
			setMobileExpandedSubMenu(null);
			return;
		}

		setMobileExpandedMenu(activeTop.label);
		setMobileExpandedSubMenu(getAutoExpandedSubKey(activeTop));
	}, [isMobileMenuOpen, currentPage]);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white/95 backdrop-blur-md shadow-lg"
					: "bg-white/90 backdrop-blur-sm"
			}`}
		>
			<div className="bg-primary text-white">
				<div className="max-w-[1400px] mx-auto px-6 lg:px-8">
					<div className="flex items-center justify-between h-8 text-xs">
						<a
							href="tel:+51066284760"
							className="flex items-center gap-2 hover:text-white/90 transition-colors"
						>
							<Phone className="w-4 h-4" />
							<span className="hidden sm:inline">
								066 284760 / 979 585 886
							</span>
							<span className="sm:hidden">Contáctanos</span>
						</a>

						<div className="flex items-center gap-3">
							<a
								href="#"
								aria-label="Facebook"
								className="hover:text-white/90 transition-colors"
							>
								<Facebook className="w-4 h-4" />
							</a>
							<a
								href="#"
								aria-label="Instagram"
								className="hover:text-white/90 transition-colors"
							>
								<Instagram className="w-4 h-4" />
							</a>
							<a
								href="#"
								aria-label="LinkedIn"
								className="hover:text-white/90 transition-colors"
							>
								<Linkedin className="w-4 h-4" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-[1400px] mx-auto px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<motion.a
						href="/"
						className="flex h-full items-center space-x-3 shrink-0 cursor-pointer"
						whileHover={{ scale: 1.02 }}
					>
						<div className="h-full w-fit flex items-center justify-center">
							<img
								src="/images/LOGOTIPO_NIÑO_REY_VARIACIÓN_1.png"
								alt="Logo"
								className="h-full"
							/>
						</div>
					</motion.a>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-1 justify-center mx-8">
						{menuItems.map((item) => (
							<div
								key={item.label}
								className="relative"
								onMouseEnter={() => {
									if (!item.subItems) return;
									setActiveDropdown(item.label);
									setActiveSubDropdown(
										getAutoExpandedSubKey(item),
									);
								}}
								onMouseLeave={() => {
									setActiveDropdown(null);
									setActiveSubDropdown(null);
								}}
							>
								{item.subItems ? (
									<>
										<button
											onClick={() => {
												setActiveDropdown(item.label);
												setActiveSubDropdown(
													getAutoExpandedSubKey(item),
												);
											}}
											className={`flex items-center space-x-1 px-3 xl:px-4 py-2 text-[15px] transition-colors duration-200 group whitespace-nowrap font-medium ${
												isMenuItemActive(item)
													? "text-primary"
													: "text-gray-700 hover:text-primary"
											}`}
										>
											<span>{item.label}</span>
											<ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
										</button>

										<AnimatePresence>
											{activeDropdown === item.label && (
												<motion.div
													className="absolute top-full left-0 w-72 pt-2 overflow-visible z-40"
													initial={{
														opacity: 0,
														y: -10,
													}}
													animate={{
														opacity: 1,
														y: 0,
													}}
													exit={{
														opacity: 0,
														y: -10,
													}}
													transition={{
														duration: 0.2,
													}}
												>
													<div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-visible">
														<div className="py-3">
															{item.subItems.map(
																(
																	subItem,
																	index,
																) => {
																	const subKey = `${item.label}::${subItem.label}`;

																	if (
																		!subItem.subItems
																	) {
																		return (
																			<motion.a
																				key={
																					subItem.label
																				}
																				href={
																					subItem.href
																				}
																				className={`px-6 py-3.5 text-[15px] transition-all duration-200 flex items-center justify-between ${
																					isActive(
																						subItem.href,
																					)
																						? "text-primary bg-primary/5 font-medium"
																						: "text-gray-700 hover:text-primary hover:bg-primary/5"
																				}`}
																				initial={{
																					opacity: 0,
																					x: -10,
																				}}
																				animate={{
																					opacity: 1,
																					x: 0,
																				}}
																				transition={{
																					delay:
																						index *
																						0.05,
																				}}
																				whileHover={{
																					x: 5,
																				}}
																			>
																				<span>
																					{
																						subItem.label
																					}
																				</span>
																				{isActive(
																					subItem.href,
																				) && (
																					<motion.div
																						layoutId="submenu-indicator"
																						className="w-1.5 h-1.5 rounded-full bg-primary"
																					/>
																				)}
																			</motion.a>
																		);
																	}

																	return (
																		<div
																			key={
																				subItem.label
																			}
																			className="px-2"
																		>
																			<motion.button
																				type="button"
																				aria-expanded={
																					activeSubDropdown ===
																					subKey
																				}
																				onClick={() =>
																					setActiveSubDropdown(
																						activeSubDropdown ===
																							subKey
																							? null
																							: subKey,
																					)
																				}
																				className={`w-full px-4 py-3 text-[15px] transition-all duration-200 flex items-center justify-between rounded-xl ${
																					isMenuItemActive(
																						subItem,
																					)
																						? "text-primary bg-primary/5 font-medium"
																						: "text-gray-700 hover:text-primary hover:bg-primary/5"
																				}`}
																				initial={{
																					opacity: 0,
																					x: -10,
																				}}
																				animate={{
																					opacity: 1,
																					x: 0,
																				}}
																				transition={{
																					delay:
																						index *
																						0.05,
																				}}
																				whileHover={{
																					x: 5,
																				}}
																			>
																				<span>
																					{
																						subItem.label
																					}
																				</span>
																				<ChevronDown
																					className={`w-4 h-4 transition-transform duration-200 ${
																						activeSubDropdown ===
																						subKey
																							? "rotate-180"
																							: ""
																					}`}
																				/>
																			</motion.button>

																			<AnimatePresence>
																				{activeSubDropdown ===
																					subKey && (
																					<motion.div
																						className="mt-2 mb-2 ml-4 space-y-1"
																						initial={{
																							height: 0,
																							opacity: 0,
																						}}
																						animate={{
																							height: "auto",
																							opacity: 1,
																						}}
																						exit={{
																							height: 0,
																							opacity: 0,
																						}}
																						transition={{
																							duration: 0.2,
																						}}
																					>
																						{subItem.subItems.map(
																							(
																								nestedItem,
																								nestedIndex,
																							) => (
																								<motion.a
																									key={
																										nestedItem.label
																									}
																									href={
																										nestedItem.href
																									}
																									className={`block px-4 py-2.5 text-[14px] rounded-xl transition-all duration-200 ${
																										isActive(
																											nestedItem.href,
																										)
																											? "text-primary bg-primary/5 font-medium"
																											: "text-gray-600 hover:text-primary hover:bg-primary/5"
																									}`}
																									initial={{
																										opacity: 0,
																										x: -10,
																									}}
																									animate={{
																										opacity: 1,
																										x: 0,
																									}}
																									transition={{
																										delay:
																											nestedIndex *
																											0.03,
																									}}
																								>
																									{
																										nestedItem.label
																									}
																								</motion.a>
																							),
																						)}
																					</motion.div>
																				)}
																			</AnimatePresence>
																		</div>
																	);
																},
															)}
														</div>
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</>
								) : (
									<a
										href={item.href}
										className={`block px-3 xl:px-4 py-2 text-[15px] transition-colors duration-200 relative group whitespace-nowrap font-medium ${
											isActive(item.href)
												? "text-primary"
												: "text-gray-700 hover:text-primary"
										}`}
									>
										{item.label}
										<span
											className={`absolute -bottom-1 left-3 xl:left-4 right-3 xl:right-4 h-0.5 bg-primary transition-transform duration-300 ${
												isActive(item.href)
													? "scale-x-100"
													: "scale-x-0 group-hover:scale-x-100"
											}`}
										></span>
									</a>
								)}
							</div>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<button
						className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle Mobile Menu"
					>
						{isMobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-6rem)] overflow-y-auto"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<nav className="px-4 py-6 space-y-2">
							{menuItems.map((item) => (
								<div key={item.label}>
									{item.subItems ? (
										<>
											<button
												onClick={() =>
													toggleMobileMenu(item)
												}
												className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
													isMenuItemActive(item)
														? "text-primary bg-primary/5"
														: "text-gray-700 hover:text-primary hover:bg-primary/5"
												}`}
											>
												<span className="font-medium">
													{item.label}
												</span>
												<ChevronDown
													className={`w-5 h-5 transition-transform duration-200 ${
														mobileExpandedMenu ===
														item.label
															? "rotate-180"
															: ""
													}`}
												/>
											</button>

											<AnimatePresence>
												{mobileExpandedMenu ===
													item.label && (
													<motion.div
														className="ml-4 mt-2 space-y-1"
														initial={{
															height: 0,
															opacity: 0,
														}}
														animate={{
															height: "auto",
															opacity: 1,
														}}
														exit={{
															height: 0,
															opacity: 0,
														}}
														transition={{
															duration: 0.2,
														}}
													>
														{item.subItems.map(
															(subItem) => {
																const subKey = `${item.label}::${subItem.label}`;

																if (
																	!subItem.subItems
																) {
																	return (
																		<a
																			key={
																				subItem.label
																			}
																			href={
																				subItem.href
																			}
																			className={`block px-4 py-2.5 rounded-lg transition-all duration-200 ${
																				isActive(
																					subItem.href,
																				)
																					? "text-primary bg-primary/5 font-medium"
																					: "text-gray-600 hover:text-primary hover:bg-primary/5"
																			}`}
																			onClick={() => {
																				setIsMobileMenuOpen(
																					false,
																				);
																				setMobileExpandedMenu(
																					null,
																				);
																				setMobileExpandedSubMenu(
																					null,
																				);
																			}}
																		>
																			{
																				subItem.label
																			}
																		</a>
																	);
																}

																return (
																	<div
																		key={
																			subItem.label
																		}
																	>
																		<button
																			onClick={() =>
																				toggleMobileSubMenu(
																					subKey,
																				)
																			}
																			className={`flex items-center justify-between w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 ${
																				isMenuItemActive(
																					subItem,
																				)
																					? "text-primary bg-primary/5"
																					: "text-gray-700 hover:text-primary hover:bg-primary/5"
																			}`}
																		>
																			<span className="font-medium">
																				{
																					subItem.label
																				}
																			</span>
																			<ChevronDown
																				className={`w-5 h-5 transition-transform duration-200 ${
																					mobileExpandedSubMenu ===
																					subKey
																						? "rotate-180"
																						: ""
																				}`}
																			/>
																		</button>

																		<AnimatePresence>
																			{mobileExpandedSubMenu ===
																				subKey && (
																				<motion.div
																					className="ml-4 mt-2 space-y-1"
																					initial={{
																						height: 0,
																						opacity: 0,
																					}}
																					animate={{
																						height: "auto",
																						opacity: 1,
																					}}
																					exit={{
																						height: 0,
																						opacity: 0,
																					}}
																					transition={{
																						duration: 0.2,
																					}}
																				>
																					{subItem.subItems.map(
																						(
																							nestedItem,
																						) => (
																							<a
																								key={
																									nestedItem.label
																								}
																								href={
																									nestedItem.href
																								}
																								className={`block px-4 py-2.5 rounded-lg transition-all duration-200 ${
																									isActive(
																										nestedItem.href,
																									)
																										? "text-primary bg-primary/5 font-medium"
																										: "text-gray-600 hover:text-primary hover:bg-primary/5"
																								}`}
																								onClick={() => {
																									setIsMobileMenuOpen(
																										false,
																									);
																									setMobileExpandedMenu(
																										null,
																									);
																									setMobileExpandedSubMenu(
																										null,
																									);
																								}}
																							>
																								{
																									nestedItem.label
																								}
																							</a>
																						),
																					)}
																				</motion.div>
																			)}
																		</AnimatePresence>
																	</div>
																);
															},
														)}
													</motion.div>
												)}
											</AnimatePresence>
										</>
									) : (
										<a
											href={item.href}
											className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200 font-medium"
											onClick={() => {
												setIsMobileMenuOpen(false);
												setMobileExpandedMenu(null);
											}}
										>
											{item.label}
										</a>
									)}
								</div>
							))}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
