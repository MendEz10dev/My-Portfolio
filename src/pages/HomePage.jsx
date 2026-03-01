import { Skills } from '../components/Skills'
import { Proyectos } from '../components/Proyectos';
import { BarNav } from '../components/BarNav';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDownload, FaFigma, FaInstagram } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiPostgresql, SiGmail } from 'react-icons/si';
import { FaEnvelope, FaUser, FaComment, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { image } from 'framer-motion/client';

const habilidades = [
    {name: "HTML", icon: <FaHtml5 size={40} />, bgColor: "bg-red-600"},
    {name: "CSS", icon: <FaCss3Alt size={40} />, bgColor: "bg-sky-500"},
    {name: "JavaScript", icon: <SiJavascript size={40} />, bgColor: "bg-yellow-300"},
    {name: "TypeScript", icon: <SiTypescript size={40} />, bgColor: "bg-blue-600"},
    {name: "React", icon: <FaReact size={40} />, bgColor: "bg-cyan-500"},
    {name: "Tailwind", icon: <SiTailwindcss size={40} />, bgColor: "bg-sky-400"},
    {name: "Git", icon: <FaGitAlt size={40} />, bgColor: "bg-red-800"},
    {name: "Figma", icon: <FaFigma size={40} />, bgColor: "bg-gradient-to-r from-red-500 via-blue-500 to-green-500"},
    {name: "PostgreSQL", icon: <SiPostgresql size={40} />, bgColor: "bg-blue-900"},
  ]

const proyectosData = [
    {
      nombre: "Mi Portafolio Personal",
      descripcion: "Página para mostrar quien soy y mis habilidades en el desarrollo web.",
      tecnologias: ["React", "JavaScript", "Tailwind"],
      githubUrl: "https://github.com/MendEz10dev/My-Portfolio.git",
      sitioUrl: "https://ecommerce-demo.com",
      imagen: "src/assets/Portafolio de Alian.png"
    },
    {
      nombre: "MedHistory",
      descripcion: "Sistema Evaluativo para realización de consultas médicas.",
      tecnologias: ["React", "TypeScript", "JavaScript", "Tailwind"],
      githubUrl: "https://github.com/RudyDanielPro/MedHistory.git",
      sitioUrl: "https://tasks-demo.com"
    },
    {
      nombre: "Weather App",
      descripcion: "App del clima con pronóstico por horas y mapa interactivo.",
      tecnologias: ["React", "OpenWeather API", "Tailwind"],
      githubUrl: "https://github.com/tuusuario/weather",
      sitioUrl: "https://weather-demo.com"
    }
  ];


export function HomePage() {

   // Función para descargar CV
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = 'src/assets/CV Alián Torres Méndez.pdf'; // Ruta a tu archivo CV
        link.download = 'CV-Alián-Torres-Méndez-DesarrolladorFrontend.pdf';
        link.click();
    };


    return (
      <>
        <BarNav/>

        {/*Seccion Inicio - Foto chill como fondo */}
        <section 
            id="inicio" 
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat pt-16 md:pt-20"
            style={{ backgroundImage: "url('src/assets/fondo lo-fi.png')" }}
        >
            {/* Overlay para mejorar legibilidad - colores derivados de la foto */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-purple-900/60 to-indigo-900/70 mix-blend-multiply"></div>
            
            {/* Overlay adicional para suavizar */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-slate-900/90"></div>

            
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 mt-4">
                
                {/* Texto */} <div className="flex-1 text-center lg:text-left"> 
                    <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg" 
                        initial={{ opacity: 0, y: -30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.2 }} > 
                    Hola, soy <span className="text-amber-200">Alián</span> 
                    </motion.h1> 

                    <motion.h2 className="text-2xl md:text-3xl text-cyan-100 mb-6 font-light italic" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.4 }} > 
                    Desarrollador FrontEnd 
                    </motion.h2>
                    
                    <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl leading-relaxed backdrop-blur-sm bg-white/5 rounded-lg p-4">
                        Creo experiencias digitales que transmiten paz y armonía. 
                        Mi desarrollo web se centra en la simplicidad, elegancia y usabilidad.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a 
                            href="#proyectos" 
                            onClick={(e) => { e.preventDefault(); document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" }); }}
                            className="bg-amber-500/90 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2"
                        >
                            Explorar Proyectos
                        </a>
                        
                        <button 
                            onClick={handleDownloadCV}
                            className="border-2 border-orange-400/70 hover:bg-amber-600 text-cyan-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2 hover: cursor-pointer"
                        >
                            <FaDownload />
                            Descargar CV
                        </button>
                    </div>
                </div>
                
                {/* Contenedor de la foto */}
                <div className="flex-1 flex justify-center">
                    <motion.div 
                        className="relative w-64 h-64 md:w-80 md:h-80"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Efecto de fondo animado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
                        
                        {/* Borde exterior animado */}
                        <div className="absolute inset-4 border-2 border-amber-200/30 rounded-full animate-pulse"></div>
                        
                        {/* Borde interior sutil */}
                        <div className="absolute inset-8 border border-cyan-300/20 rounded-full"></div>
                        
                        {/* Contenedor de la foto con efectos */}
                        <div className="absolute inset-4 flex items-center justify-center overflow-hidden rounded-full">
                            <motion.img
                                src="src/assets/IMG-20260126-WA0026.jpg" 
                                alt="Alián Torres - Desarrollador Frontend"
                                className="w-full h-full object-cover rounded-full border-4 border-yellow-300/20 shadow-2xl z-10 hover:scale-105 transition-transform"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            
                            {/* Overlay sutil para mejorar contraste */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-cyan-300/10 rounded-full mix-blend-overlay"></div>
                        </div>
                        

                        
                        {/* Elemento decorativo flotante */}
                        <motion.div
                            className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full blur-sm"
                            animate={{ 
                                y: [0, -10, 0],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        
                        <motion.div
                            className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-400 rounded-full blur-sm"
                            animate={{ 
                                y: [0, 10, 0],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.5
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Flecha indicadora de scroll */}
            <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-amber-200 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-amber-200 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>




        {/* Sección Acerca de mí */}
        <section 
            id="acerca-de-mi" 
            className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-16 bg-gradient-to-br from-yellow-600 to-orange-700"
        >
            {/* Foto en círculo */}
            <div className="flex-1 flex justify-center">
                <motion.div 
                className="relative w-48 h-48 md:w-64 md:h-64"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
    >
            {/* Fondo animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute inset-4 border-2 border-amber-200/30 rounded-full animate-pulse"></div>
            <div className="absolute inset-8 border border-cyan-300/20 rounded-full"></div>

            {/* Imagen principal */}
            <div className="z-20 absolute inset-4 flex items-center justify-center overflow-hidden rounded-full">
                <motion.img
                src="src/assets/foto-alian.jpg" 
                alt="Alián Torres - Desarrollador Frontend"
                className="w-full h-full object-cover rounded-full border-4 border-yellow-600/90 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                />
            </div>

            {/* Círculos de habilidades */}
            {/* Círculo de Creatividad */}
            <motion.div
                className="group z-10 absolute -top-10 -right-10 w-20 h-20 rounded-full 
                            bg-white/10 backdrop-blur-md border border-white/30 shadow-lg 
                            flex items-center justify-center text-slate-100 text-sm font-semibold
                            cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.9, rotate: -10, backgroundColor: "rgba(255,255,255,0.3)" }}
                >
                Creatividad
                {/* Tooltip */} 
                <div className="absolute bottom-full mb-2 px-3 py-1 rounded-lg bg-black/70 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" > 
                    Capacidad de generar ideas originales e innovadoras. 
                </div>
            </motion.div>

            {/* Círculo de Resolución */}
            <motion.div
                className="group z-10 absolute -bottom-10 left-55 w-20 h-20 rounded-full 
                            bg-white/10 backdrop-blur-md border border-white/30 shadow-lg 
                            flex items-center justify-center text-slate-100 text-sm font-semibold
                            cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 15, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.9, rotate: 10, backgroundColor: "rgba(255,255,255,0.3)" }}
                >
                Resolución
                {/* Tooltip */} 
                <div className="absolute bottom-full mb-2 px-3 py-1 rounded-lg bg-black/70 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" > 
                    Habilidad para superar obstáculos con eficacia. 
                </div>
            </motion.div>

            {/* Círculo de Disciplina */}
            <motion.div
                className="group z-10 absolute -top-10 right-55 w-20 h-20 rounded-full 
                            bg-white/10 backdrop-blur-md border border-white/30 shadow-lg 
                            flex items-center justify-center text-slate-100 text-sm font-semibold
                            cursor-pointer"
                whileHover={{ scale: 1.2, rotate: -10, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.9, rotate: -15, backgroundColor: "rgba(255,255,255,0.3)" }}
                >
                Disciplina
                {/* Tooltip */} 
                <div className="absolute bottom-full mb-2 px-3 py-1 rounded-lg bg-black/70 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" > 
                    Constancia y compromiso para alcanzar metas. 
                </div>
            </motion.div>

            {/* Círculo de Respeto */}
            <motion.div
                className="group z-10 absolute -bottom-10 -left-10 w-20 h-20 rounded-full 
                            bg-white/10 backdrop-blur-md border border-white/30 shadow-lg 
                            flex items-center justify-center text-slate-100 text-sm font-semibold
                            cursor-pointer"
                whileHover={{ scale: 1.2, rotate: -15, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.9, rotate: 15, backgroundColor: "rgba(255,255,255,0.3)" }}
                >
                Respeto
                {/* Tooltip */} 
                <div className="absolute bottom-full mb-2 px-3 py-1 rounded-lg bg-black/70 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" > 
                    Valorar y reconocer a los demás con empatía. 
                </div>
            </motion.div>

            {/* Línea hacia Creatividad */}
                <div className="absolute w-0.5 h-24 bg-white/40 
                    -top-5 right-19  
                    transform rotate-45 origin-bottom"></div>

                {/* Línea hacia Resolución */}
                <div className="absolute w-0.5 h-28 bg-white/40 
                    -bottom-5 left-43 
                    transform -rotate-45 origin-top"></div>

                {/* Línea hacia Disciplina */}
                <div className="absolute w-0.5 h-28 bg-white/40 
                    -top-5 right-43 
                    transform -rotate-45 origin-bottom"></div>

                {/* Línea hacia Respeto */}
                <div className="absolute w-0.5 h-24 bg-white/40 
                    -bottom-5 left-19 
                    transform rotate-45 origin-top"></div>

            </motion.div>

            </div>

            {/* Texto de presentación */}
            <div className="flex-1 flex justify-center">
                <div className="text-center max-w-2xl">
                    <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6" 
                        initial={{ opacity: 0, y: -30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }} 
                        viewport={{ once: true }} >
                            Acerca de mí
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-slate-100 leading-relaxed bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }} >

                        Soy <span className="text-amber-300 font-semibold">Alián Torres</span>, 
                        desarrollador frontend apasionado por crear interfaces modernas y funcionales. 
                        Me encanta trabajar con <span className="text-cyan-300">React</span>, 
                        <span className="text-cyan-300"> JavaScript</span> y 
                        <span className="text-cyan-300"> Tailwind CSS</span>, 
                        construyendo proyectos que combinan simplicidad y elegancia.
                        <br/><br/>
                        Mi motivación es transformar ideas en experiencias digitales que despierten emoción y sencillez al navegar,
                        siempre buscando aprender y mejorar en cada línea de código.
                        <br/><br/>
                        He trabajado en un sistema evaluativo de consultas médicas, donde los doctores pueden evaluar las consultas que hacen los estudiantes
                        a los pacientes. He trabajado en un DICOM de OHIF, haciendo que los visores de imágenes funcionen correctamente.
                    </motion.p>
                </div>
            </div>

        </section>




        {/*Seccion de Habilidades*/}

        {/* Sección Skills */}
        <section 
        id="habilidades" 
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                {/* Encabezado de la sección */}
                <motion.div 
                    initial={{ opacity: 0, y: -30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }} 
                    viewport={{ once: true }} 
                    className="text-center mb-16" >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Habilidades & Herramientas
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-600/80 via-orange-500/70 to-rose-600/80 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Tecnologías y herramientas que utilizo para crear experiencias digitales excepcionales.
                    </p>
                </motion.div>


                {/* Grid de habilidades */}
                <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                    variants={{ hidden: {}, visible: { 
                        transition: { 
                            staggerChildren: 0.15, // efecto cascada 
                        }, 
                    }, 
                    }}
                >
                {habilidades.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        variants={{ hidden: { opacity: 0, scale: 0.8, y: 20 }, 
                            visible: { opacity: 1, scale: 1, y: 0 },   
                        }} 
                        transition={{ duration: 0.6 }} 
                        whileHover={{ scale: 1.1, rotate: 3 }} 
                        className="w-full flex justify-center" >
                            <Skills 
                            icon={skill.icon} 
                            name={skill.name} 
                            bgColor={skill.bgColor} />
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </section>

        


        {/*Seccion de Proyectos */}
        <section 
        id="proyectos" 
        className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
            {/* Encabezado de la sección */}
            <motion.div 
                    initial={{ opacity: 0, y: -30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }} 
                    viewport={{ once: true }} 
                    className="text-center mb-16" >
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Mis <span className="bg-amber-300 bg-clip-text text-transparent">Proyectos</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-600/80 via-orange-500/70 to-rose-600/80 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Estos son algunos de los proyectos en los que he trabajado. Cada uno representa 
                    un desafío único y una oportunidad para aprender y crecer como desarrollador.
                    </p> <br /> <br />
            </motion.div>

            {/* Grid de proyectos */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={{ hidden: {}, 
                    visible: { transition: { staggerChildren: 0.2 }, // efecto cascada 
                    }, }} >
                    {proyectosData.map((proyecto, index) => (
                        <motion.div 
                        key={index} 
                        variants={{ 
                            hidden: { opacity: 0, scale: 0.9, y: 20 }, 
                            visible: { opacity: 1, scale: 1, y: 0 }, 
                                }} 
                                transition={{ duration: 0.6 }} 
                                whileHover={{ scale: 1}} 
                                className="w-full" >
                                    
                            <Proyectos 
                            nombre={proyecto.nombre} 
                            descripcion={proyecto.descripcion} 
                            tecnologias={proyecto.tecnologias} 
                            githubUrl={proyecto.githubUrl} 
                            sitioUrl={proyecto.sitioUrl}
                            imagen={proyecto.imagen} />
                        </motion.div>
                    ))}
            </motion.div>
        </section>     




        {/*Seccion de Contacto */}
        {/* Sección Contacto */}
        <section 
            id="contacto" 
            className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 dark:bg-gray-900"
        >
            <div className="max-w-6xl w-full">
                {/* Encabezado de la sección */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Contacto
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-600/80 via-orange-500/70 to-rose-600/80 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente o quieres colaborar? 
                        ¡Estoy a un mensaje de distancia!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Información de contacto - Lado izquierdo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Tarjeta de disponibilidad */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-amber-300 transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                                <span className="text-3xl">💬</span>
                                Hablemos de tu proyecto
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                Actualmente estoy disponible para trabajar en proyectos freelance 
                                o unirme a equipos de desarrollo. Respondo en menos de 24 horas.
                            </p>
                            
                            {/* Badge de disponibilidad */}
                            <div className="flex items-center gap-3 bg-emerald-500/20 text-emerald-400 px-4 py-3 rounded-lg w-fit">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>
                                <span className="font-medium">Disponible para trabajar</span>
                            </div>
                        </div>

                        {/* Redes sociales y contacto directo */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <SiGmail size={40} color='#D14836'/>, label: "Gmail", value: "mendez10dev@gmail.com", href: "mailto:mendez10dev@gmail.com", color: "from-[#D14836]/20 to-[#D14836]/40" }, //mailto: abre el programa de correo predeterminado del usuario (Outlook, Gmail web, Apple Mail, etc.).
                                { icon: <FaLinkedin size={40} color='#0A66C2'/>, label: "LinkedIn", value: "Alián Torres Méndez", href: "https://www.linkedin.com/in/alián-torres-méndez-554924356", color: "from-[#0A66C2]/20 to-[#0A66C2]/40" },
                                { icon: <FaGithub size={40} color='gray'/>, label: "GitHub", value: "@MendEz10dev", href: "https://github.com/MendEz10dev", color: "from-slate-500/20 to-slate-600/20" },
                                { icon: <FaInstagram size={40} color='#E4405F'/>, label: "Instagram", value: "@10_atm_10", href: "https://www.instagram.com/10_atm_10", color: "from-[#405DE6]/20 via-[#E4405F]/30 to-[#FCAF45]/40" }
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    target="_blank" rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`bg-gradient-to-br ${item.color} backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:border-amber-300 transition-all duration-300 group`}
                                >
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <div className="font-medium text-white mb-1">{item.label}</div>
                                    <div className="text-sm text-slate-300 group-hover:text-white transition-colors truncate">
                                        {item.value}
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Mapa o ubicación (opcional) */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">📍</span>
                                <span className="text-white font-medium">Basado en</span>
                            </div>
                            <p className="text-slate-300">La Habana, Cuba · Disponible para remoto</p>
                        </div>
                    </motion.div>

                    {/* Formulario de contacto - Lado derecho */}
                    <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-amber-300 transition-all duration-300"
                    >
                        <form className="space-y-6">
                            {/* Campo Nombre */}
                            <div className="space-y-2">
                                <label htmlFor="nombre" className="text-sm font-medium text-slate-300 block">
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Ej. Juan Pérez"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-300 transition-all duration-300"
                                />
                            </div>

                            {/* Campo Correo */}
                            <div className="space-y-2">
                                <label htmlFor="correo" className="text-sm font-medium text-slate-300 block">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="correo"
                                    name="correo"
                                    placeholder="ejemplo@correo.com"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-300 transition-all duration-300"
                                />
                            </div>

                            {/* Campo Descripción */}
                            <div className="space-y-2">
                                <label htmlFor="descripcion" className="text-sm font-medium text-slate-300 block">
                                    ¿En qué puedo ayudarte?
                                </label>
                                <textarea
                                    id="descripcion"
                                    name="descripcion"
                                    rows="5"
                                    placeholder="Cuéntame sobre tu proyecto, idea o colaboración..."
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-300 transition-all duration-300 resize-none"
                                ></textarea>
                            </div>

                            {/* Botón de envío */}
                            <motion.button
                                type="submit"
                                className="w-full group relative px-6 py-4 bg-amber-500/90 hover:bg-amber-600 text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition-all duration-300 cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Enviar mensaje
                                    <svg 
                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 transition-opacity duration-300"
                                    initial={false}
                                />
                            </motion.button>

                            {/* Mensaje de privacidad */}
                            <p className="text-xs text-center text-slate-400 mt-4">
                                <FaLock className="mr-2 inline-block" />
                                Tu información está segura. No comparto tus datos con terceros.
                            </p>
                        </form>
                    </motion.div>

                    {/* Aviso de derechos reservados en la columna derecha */} 
                    <div className="lg:col-start-2 text-center mt-14"> 
                        <p className="text-sm text-slate-500"> © {new Date().getFullYear()} Alián Torres. Todos los derechos reservados. 
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </section>




        {/* Footer */}


      </>
    )
}
