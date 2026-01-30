import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

const equipo = [
  {
    name: 'Roberto Mendoza',
    role: 'Gerente General',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    description: 'Más de 20 años de experiencia en el sector financiero cooperativo.',
  },
  {
    name: 'María Fernández',
    role: 'Gerente de Operaciones',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    description: 'Especialista en eficiencia operativa y transformación digital.',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Gerente de Créditos',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    description: 'Experto en evaluación de riesgos y gestión de cartera.',
  },
  {
    name: 'Ana Torres',
    role: 'Gerente de Marketing',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    description: 'Líder en estrategias de comunicación y experiencia del cliente.',
  },
  {
    name: 'Luis Vargas',
    role: 'Gerente de Tecnología',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    description: 'Impulsor de la innovación tecnológica en la cooperativa.',
  },
  {
    name: 'Patricia Silva',
    role: 'Gerente de RRHH',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    description: 'Comprometida con el desarrollo y bienestar del equipo humano.',
  },
];

export function Equipo() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-emerald-50/30">
      {/* Organic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-yellow-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
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
            Nuestro Equipo
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Liderados por
            <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
              profesionales apasionados
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Un equipo comprometido con la excelencia y el servicio a nuestros socios.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipo.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-emerald-100 to-yellow-100">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
                      <motion.a
                        href="#"
                        className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="#"
                        className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Quieres formar parte del equipo?</h3>
            <p className="text-gray-600 mb-6">
              Siempre estamos buscando talento apasionado que comparta nuestros valores y visión.
            </p>
            <motion.a
              href="#contacto"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Oportunidades Laborales
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
