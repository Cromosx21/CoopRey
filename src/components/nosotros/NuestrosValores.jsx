import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Shield, Lightbulb, Handshake, Star } from 'lucide-react';

const valores = [
  {
    icon: Heart,
    title: 'Solidaridad',
    description: 'Trabajamos unidos por el bienestar de todos nuestros socios y la comunidad.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Confianza',
    description: 'La transparencia y honestidad son la base de nuestra relación contigo.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Users,
    title: 'Compromiso Social',
    description: 'Contribuimos activamente al desarrollo de las comunidades donde operamos.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Nos adaptamos constantemente para ofrecerte los mejores servicios.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Handshake,
    title: 'Respeto',
    description: 'Valoramos a cada persona y tratamos a todos con dignidad y equidad.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Star,
    title: 'Excelencia',
    description: 'Buscamos la calidad en cada servicio y atención que brindamos.',
    color: 'from-amber-500 to-yellow-500',
  },
];

export function NuestrosValores() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-emerald-50/30">
      {/* Organic Background */}
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
            className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Nuestros Valores
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Los principios que
            <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
              nos guían cada día
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Estos valores son el corazón de nuestra cooperativa y la base de cada decisión que tomamos.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <motion.div
                key={valor.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Organic background shape */}
                <motion.div
                  className={`absolute -inset-2 bg-gradient-to-br ${valor.color} opacity-0 group-hover:opacity-10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transition-opacity duration-300 blur-xl`}
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
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${valor.color} rounded-2xl mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{valor.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{valor.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Statement */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-yellow-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Compromiso</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              En la Cooperativa Niño Rey, cada valor se traduce en acciones concretas. Nos comprometemos a ser transparentes en nuestras operaciones, accesibles en nuestros servicios, y siempre orientados a generar un impacto positivo en la vida de nuestros socios y sus familias.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
