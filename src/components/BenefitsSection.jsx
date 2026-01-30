import React from 'react';
import { motion } from 'motion/react';
import { Shield, Clock, Users, Sparkles, Award, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description: 'Tus ahorros están protegidos con las más altas medidas de seguridad y regulación.',
  },
  {
    icon: Clock,
    title: 'Disponibilidad 24/7',
    description: 'Accede a tus servicios en cualquier momento y desde cualquier lugar.',
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Un equipo dedicado que entiende tus necesidades y te acompaña en cada paso.',
  },
  {
    icon: Sparkles,
    title: 'Tasas Competitivas',
    description: 'Benefíciate de las mejores tasas del mercado en ahorros y créditos.',
  },
  {
    icon: Award,
    title: 'Beneficios Exclusivos',
    description: 'Accede a promociones, sorteos y ventajas reservadas para nuestros socios.',
  },
  {
    icon: HeartHandshake,
    title: 'Compromiso Social',
    description: 'Formamos parte de una cooperativa que reinvierte en la comunidad.',
  },
];

export function BenefitsSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-emerald-50/30" id="beneficios">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-emerald-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-yellow-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Organic shape background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-yellow-400/20 rounded-[40%_60%_60%_40%/60%_40%_40%_60%] blur-2xl"
                animate={{
                  borderRadius: [
                    "40% 60% 60% 40% / 60% 40% 40% 60%",
                    "60% 40% 40% 60% / 40% 60% 60% 40%",
                    "40% 60% 60% 40% / 60% 40% 40% 60%"
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative rounded-[40%_60%_60%_40%/60%_40%_40%_60%] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1692459444402-c52d510ef57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGxhdGluYSUyMHByb2Zlc3Npb25hbCUyMGNvbmZpZGVudHxlbnwxfHx8fDE3Njk3MzM5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Profesional joven confiada"
                  className="w-full h-[600px] object-cover"
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                className="absolute bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl max-w-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Calificación</p>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Excelente servicio</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="space-y-12 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.span
                className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                ¿Por qué elegirnos?
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Beneficios que hacen
                <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
                  la diferencia
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                En Cooperativa Niño Rey, no solo ofrecemos servicios financieros, te brindamos un ecosistema completo de beneficios diseñados para impulsar tu crecimiento.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-yellow-100 rounded-2xl flex items-center justify-center group-hover:from-emerald-500 group-hover:to-yellow-500 transition-all duration-300"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="#hazte-socio"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-semibold">Únete ahora</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
