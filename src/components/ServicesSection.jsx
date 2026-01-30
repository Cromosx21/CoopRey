import React from 'react';
import { motion } from 'motion/react';
import { Wallet, PiggyBank, CreditCard, TrendingUp, Home, Users } from 'lucide-react';

const services = [
  {
    icon: PiggyBank,
    title: 'Cuentas de Ahorro',
    description: 'Haz crecer tu dinero con tasas de interés competitivas y retiros flexibles.',
    gradient: 'from-emerald-500 to-emerald-600',
    color: 'emerald',
  },
  {
    icon: CreditCard,
    title: 'Créditos',
    description: 'Financiamiento accesible para tus proyectos personales y empresariales.',
    gradient: 'from-yellow-500 to-yellow-600',
    color: 'yellow',
  },
  {
    icon: Home,
    title: 'Crédito Hipotecario',
    description: 'Convierte el sueño de tu casa propia en realidad con nuestros planes flexibles.',
    gradient: 'from-emerald-600 to-teal-600',
    color: 'teal',
  },
  {
    icon: TrendingUp,
    title: 'Inversiones',
    description: 'Multiplica tu capital con opciones de inversión seguras y rentables.',
    gradient: 'from-yellow-600 to-orange-500',
    color: 'orange',
  },
  {
    icon: Wallet,
    title: 'Aportaciones',
    description: 'Participa activamente en la cooperativa y disfruta de beneficios exclusivos.',
    gradient: 'from-teal-500 to-emerald-600',
    color: 'teal',
  },
  {
    icon: Users,
    title: 'Crédito Grupal',
    description: 'Soluciones de financiamiento colectivo para grupos solidarios.',
    gradient: 'from-orange-500 to-yellow-500',
    color: 'orange',
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden" id="servicios">
      {/* Organic Wave Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="url(#gradient1)"
            fillOpacity="0.4"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Nuestros Servicios
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluciones financieras
            <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
              diseñadas para ti
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Descubre cómo podemos ayudarte a alcanzar tus objetivos financieros con productos innovadores y accesibles.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Organic background shape */}
                <motion.div
                  className={`absolute -inset-2 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transition-opacity duration-300 blur-xl`}
                  whileHover={{
                    borderRadius: [
                      "30% 70% 70% 30% / 30% 30% 70% 70%",
                      "70% 30% 30% 70% / 70% 70% 30% 30%",
                      "30% 70% 70% 30% / 30% 30% 70% 70%"
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <motion.a
                    href="#contacto"
                    className="inline-flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Más información
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
