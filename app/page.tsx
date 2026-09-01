"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Terminal, Globe, User, Code2, Cpu, Database, Layout, Smartphone } from "lucide-react";
import React from "react";
import { SplineSceneBasic } from "../components/ui/demo";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  // Lista de habilidades organizada por categorias
  const skills = [
    {
      category: "Front-End",
      icon: <Layout size={20} className="text-blue-500" />,
      items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      description: "Criação de interfaces responsivas, fluidas e focadas na experiência do usuário."
    },
    {
      category: "Back-End",
      icon: <Database size={20} className="text-purple-500" />,
      items: ["Node.js", "Express", "PostgreSQL", "Prisma ORM"],
      description: "Desenvolvimento de APIs robustas, arquitetura de servidores e modelagem de dados."
    },
    {
      category: "Mobile & Ferramentas",
      icon: <Smartphone size={20} className="text-emerald-500" />,
      items: ["React Native", "Git / GitHub", "Docker", "Figma"],
      description: "Construção de aplicativos móveis nativos e gerenciamento eficiente de código."
    }
  ];

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center bg-black overflow-x-hidden">
      
      {/* SEÇÃO HERO (A PRIMEIRA DOBRA COM O BONECO 3D) */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 md:px-8">
        {/* O BONECO 3D ORIGINAL */}
        <div className="absolute top-0 left-0 w-screen h-screen z-0">
          <SplineSceneBasic />
        </div>

        {/* Grid de linhas finas decorativas ao fundo */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-4xl text-center relative z-10 p-6 pointer-events-none mt-12">
          {/* Badge superior animado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-xs font-medium text-neutral-400 backdrop-blur-md mb-6 pointer-events-auto"
          >
            <Terminal size={12} className="text-blue-500 animate-pulse" />
            <span>Disponível para novos projetos</span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 leading-none pb-4"
          >
            Construindo o futuro da web.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            Olá, eu sou o <span className="text-white font-semibold">Michel</span>. Desenvolvedor Full-Stack focado em criar aplicações web de alta performance, interfaces fluidas e experiências digitais memoráveis.
          </motion.p>

          {/* Botões de Ação */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
          >
            <a
              href="#tecnologias"
              className="group inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 font-medium text-black transition-all hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Conhecer minhas habilidades
              <ArrowUpRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            
            <a
              href="mailto:seu-email@exemplo.com"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950/50 px-6 font-medium text-white transition-all hover:bg-neutral-900 backdrop-blur-sm"
            >
              Vamos conversar
            </a>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex items-center justify-center gap-6 text-neutral-400 pointer-events-auto"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors p-2 text-sm font-medium">
              <Globe size={18} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors p-2 text-sm font-medium">
              <User size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:seu-email@exemplo.com" className="flex items-center gap-1.5 hover:text-white transition-colors p-2 text-sm font-medium">
              <Mail size={18} />
              <span>E-mail</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DE TECNOLOGIAS E HABILIDADES (MOLDADA ABAIXO DO BONECO) */}
      <section id="tecnologias" className="relative w-full max-w-5xl px-4 py-24 z-10 border-t border-neutral-900 bg-black">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-blue-500 mb-3 flex items-center justify-center gap-2">
            <Cpu size={14} /> Stack Tecnológica
          </h2>
          <p className="text-3xl font-bold text-white sm:text-4xl tracking-tight">
            Ferramentas que utilizo para dar vida a ideias.
          </p>
        </div>

        {/* Grid de Habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-cursor="project" // Ativa a bolha azul no mouse ao passar por cima
              className="group relative border border-neutral-800 bg-neutral-950/40 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-950/80 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider">0{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{skill.category}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{skill.description}</p>
              </div>

              {/* Tags das Tecnologias */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
