import React, { useState, useEffect } from 'react';
import { Menu, X, Lock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '#' },
    { label: 'La Cooperativa', href: '#/nosotros' },
    {
      label: 'Productos y Servicios',
      subItems: [
        { label: 'Ahorros', href: '#ahorros' },
        { label: 'Créditos', href: '#creditos' },
        { label: 'Beneficios al Socio', href: '#beneficios' },
        { label: 'Requisitos', href: '#requisitos' },
      ],
    },
    {
      label: 'Transparencia',
      subItems: [
        { label: 'Estatutos', href: '#estatutos' },
        { label: 'Estados Financieros', href: '#estados-financieros' },
        { label: 'Documentos Institucionales', href: '#documentos' },
      ],
    },
    { label: 'Noticias', href: '#noticias' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const toggleMobileMenu = (label) => {
    setMobileExpandedMenu(mobileExpandedMenu === label ? null : label);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
            }}
            className="flex items-center space-x-3 flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-yellow-400 rounded-2xl flex items-center justify-center transform rotate-6">
                <span className="text-white font-bold text-2xl transform -rotate-6">NR</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 leading-tight">Niño Rey</span>
              <span className="text-xs text-emerald-600 leading-tight">Cooperativa de Ahorro</span>
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
                    <button className="flex items-center space-x-1 px-3 xl:px-4 py-2 text-[15px] text-gray-700 hover:text-emerald-600 transition-colors duration-200 group whitespace-nowrap">
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </button>

                    {/* Dropdown Menu */}
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
                                className="block px-6 py-3.5 text-[15px] text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-200"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ x: 5 }}
                              >
                                {subItem.label}
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
                    className="block px-3 xl:px-4 py-2 text-[15px] text-gray-700 hover:text-emerald-600 transition-colors duration-200 relative group whitespace-nowrap font-medium"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-3 xl:left-4 right-3 xl:right-4 h-0.5 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <motion.a
              href="#hazte-socio"
              className="flex items-center px-7 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-[15px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hazte Socio
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            animate={{ height: 'auto', opacity: 1 }}
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
                            mobileExpandedMenu === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileExpandedMenu === item.label && (
                          <motion.div
                            className="ml-4 mt-2 space-y-1"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
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

              {/* CTA Buttons - Mobile */}
              <div className="pt-6 space-y-3 border-t border-gray-100 mt-6">
                
                <a
                  href="#hazte-socio"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-center hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg font-medium"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setMobileExpandedMenu(null);
                  }}
                >
                  Hazte Socio
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
