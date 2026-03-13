import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
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
    { label: "La Cooperativa", href: "/nosotros" },
    {
      label: "Productos y Servicios",
      subItems: [
        { label: "Ahorros", href: "/ahorros" },
        { label: "Créditos", href: "/creditos" },
        { label: "Beneficios al Socio", href: "/beneficios" },
        { label: "Requisitos", href: "/requisitos" },
      ],
    },
    {
      label: "Transparencia",
      subItems: [
        { label: "Estados Financieros", href: "/estados-financieros" },
        { label: "Documentos Institucionales", href: "/documentos-institucionales" },
      ],
    },
    { label: "Noticias", href: "/noticias" },
    { label: "Contacto", href: "/contacto" },
  ];

  const toggleMobileMenu = (label) =>
    setMobileExpandedMenu(mobileExpandedMenu === label ? null : label);

  const isActive = (href) =>
    new URL(currentPage, window.location.origin).pathname ===
    new URL(href, window.location.origin).pathname;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-3 shrink-0 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-80 h-20 flex items-center justify-center">
              <img src="/images/LOGOTIPO_NIÑO_REY_VARIACIÓN_1.png" alt="Logo" />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-1 justify-center mx-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.subItems ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 px-3 xl:px-4 py-2 text-[15px] transition-colors duration-200 group whitespace-nowrap font-medium ${
                        item.subItems.some((sub) => isActive(sub.href))
                          ? "text-emerald-600"
                          : "text-gray-700 hover:text-emerald-600"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="py-3">
                            {item.subItems.map((subItem, index) => (
                              <motion.a
                                key={subItem.label}
                                href={subItem.href}
                                className={`px-6 py-3.5 text-[15px] transition-all duration-200 flex items-center justify-between ${
                                  isActive(subItem.href)
                                    ? "text-emerald-600 bg-emerald-50/50 font-medium"
                                    : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50"
                                }`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ x: 5 }}
                              >
                                <span>{subItem.label}</span>
                                {isActive(subItem.href) && (
                                  <motion.div
                                    layoutId="submenu-indicator"
                                    className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                                  />
                                )}
                              </motion.a>
                            ))}
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
                        ? "text-emerald-600"
                        : "text-gray-700 hover:text-emerald-600"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-3 xl:left-4 right-3 xl:right-4 h-0.5 bg-emerald-600 transition-transform duration-300 ${
                        isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
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
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-5rem)] overflow-y-auto"
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
                        onClick={() => toggleMobileMenu(item.label)}
                        className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl transition-all duration-200"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileExpandedMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileExpandedMenu === item.label && (
                          <motion.div
                            className="ml-4 mt-2 space-y-1"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.subItems.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                className="block px-4 py-2.5 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-lg transition-all duration-200"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setMobileExpandedMenu(null);
                                }}
                              >
                                {subItem.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl transition-all duration-200 font-medium"
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