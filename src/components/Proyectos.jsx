import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export function Proyectos ({ 
  nombre, 
  descripcion, 
  tecnologias, 
  githubUrl, 
  sitioUrl,
  bgColor = "bg-white dark:bg-gray-800",
  imagen = null 
}) {

  return (
    <div className={`${bgColor} rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] border border-gray-200 dark:border-gray-700`}>
      
      {/* Imagen del proyecto (opcional) */}
      <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-600 relative">
        {imagen ? (
          <img src={imagen} alt={nombre} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
            {nombre.charAt(0)}
          </div>
        )}
      </div>
      
      <div className="p-6">
        {/* Nombre del proyecto */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {nombre}
        </h3>
        
        {/* Descripción */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {descripcion}
        </p>
        
        {/* Tecnologías usadas */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tecnologias.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-amber-400 text-gray-900 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Botones */}
        <div className="flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            <FaGithub />
            GitHub
          </a>
          
          <a
            href={sitioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-amber-500/90 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            <FaExternalLinkAlt />
            Ver sitio
          </a>
        </div>
      </div>
    </div>
  );
};