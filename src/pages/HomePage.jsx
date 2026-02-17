import { Skills } from '../components/Skills'
import { BarNav } from '../components/BarNav';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDownload } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const habilidades = [
    {name: "HTML", icon: <FaHtml5 size={40} />, bgColor: "bg-red-700"},
    {name: "CSS", icon: <FaCss3Alt size={40} />, bgColor: "bg-sky-500"},
    {name: "JavaScript", icon: <SiJavascript size={40} />, bgColor: "bg-yellow-300"},
    {name: "TypeScript", icon: <SiTypescript size={40} />, bgColor: "bg-blue-600"},
    {name: "React", icon: <FaReact size={40} />, bgColor: "bg-cyan-500"},
    {name: "Tailwind", icon: <SiTailwindcss size={40} />, bgColor: "bg-sky-300"},
    {name: "Git", icon: <FaGitAlt size={40} />, bgColor: "bg-red-800"}
  ]

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
                
                {/* Texto */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                        Hola, soy <span className="text-amber-200">Alián</span>
                    </h1>
                    
                    <h2 className="text-2xl md:text-3xl text-cyan-100 mb-6 font-light italic">
                        Desarrollador FrontEnd
                    </h2>
                    
                    <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-2xl leading-relaxed backdrop-blur-sm bg-white/5 rounded-lg p-4">
                        Creo experiencias digitales que transmiten paz y armonía. 
                        Mi desarrollo web se centra en la simplicidad, elegancia y usabilidad.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a 
                            href="#proyectos" 
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
                                src="src/assets/foto-alian.jpg" 
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
            className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-16 bg-gradient-to-r from-amber-600/80 via-orange-500/70 to-rose-600/80"
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
                className="z-10 absolute -top-10 -right-10 w-20 h-20 rounded-full 
                            bg-white/10 backdrop-blur-md border border-white/30 shadow-lg 
                            flex items-center justify-center text-slate-100 text-sm font-semibold
                            cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.9, rotate: -10, backgroundColor: "rgba(255,255,255,0.3)" }}
                >
                Creatividad
            </motion.div>

            {/* Círculo de Resolución */}
            <motion.div
                className="z-10 absolute -bottom-10 left-55 w-20 h-20 rounded-full 
                            bg-white/10 backdrop-blur-md border border-white/30 shadow-lg 
                            flex items-center justify-center text-slate-100 text-sm font-semibold
                            cursor-pointer"
                whileHover={{ scale: 1.2, rotate: -10, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.9, rotate: 10, backgroundColor: "rgba(255,255,255,0.3)" }}
                >
                Resolución
            </motion.div>

            {/* Círculo de Disciplina */}
            <motion.div
                className="z-10 absolute -top-10 right-55 w-20 h-20 rounded-full 
                            bg-white/10 backdrop-blur-md border border-white/30 shadow-lg 
                            flex items-center justify-center text-slate-100 text-sm font-semibold
                            cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 15, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.9, rotate: -15, backgroundColor: "rgba(255,255,255,0.3)" }}
                >
                Disciplina
            </motion.div>

            {/* Círculo de Respeto */}
            <motion.div
                className="z-10 absolute -bottom-10 -left-10 w-20 h-20 rounded-full 
                            bg-white/10 backdrop-blur-md border border-white/30 shadow-lg 
                            flex items-center justify-center text-slate-100 text-sm font-semibold
                            cursor-pointer"
                whileHover={{ scale: 1.2, rotate: -15, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.9, rotate: 15, backgroundColor: "rgba(255,255,255,0.3)" }}
                >
                Respeto
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
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6">
                    Acerca de mí
                    </h2>
                    <p className="text-lg md:text-xl text-slate-100 leading-relaxed bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500">
                    Soy <span className="text-amber-300 font-semibold">Alián Torres</span>, 
                    desarrollador frontend apasionado por crear interfaces modernas y funcionales. 
                    Me encanta trabajar con <span className="text-cyan-300">React</span>, 
                    <span className="text-cyan-300"> TypeScript</span> y 
                    <span className="text-cyan-300"> Tailwind CSS</span>, 
                    construyendo proyectos que combinan simplicidad y elegancia.
                    <br/><br/>
                    Mi motivación es transformar ideas en experiencias digitales que transmitan 
                    armonía y usabilidad, siempre buscando aprender y mejorar en cada línea de código.
                    </p>
                </div>
            </div>

        </section>



        {/*Seccion de Habilidades*/}

        <div className="pt-18 flex flex-wrap justify-center gap-4 p-2 bg-gradient-to-br from-teal-200 via-cyan-400 to-blue-400 w-full">
          {habilidades.map((habilidad, index) => (
          <Skills 
            key={index}
            name={habilidad.name}
            icon={habilidad.icon}
            bgColor={habilidad.bgColor}/>
          ))}
        </div>
        


        {/*Seccion de Proyectos */}


        {/*Seccion de Contacto */}

      </>
    )
}
