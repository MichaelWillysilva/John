"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Terminal, User, Code2, Globe, Database, Layout } from "lucide-react";
import React from "react";
import { SplineSceneBasic } from "../components/ui/demo";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  // Lista de Experiências Profissionais
  const experiences = [
    {
      role: "Ouvidoria & Relacionamento",
      company: "Banco Mercantil",
      period: "Atual",
      icon: <User size={20} className="text-blue-500" />,
      description: "Atuação no tratamento de demandas complexas, mediação de conflitos e foco na qualidade do atendimento e experiência do cliente.",
      tags: ["Ouvidoria", "Atendimento", "SLA", "Resolução de Problemas"]
    },
    {
      role: "Análise de Processos & Sinistros",
      company: "Seguros e Operações",
      period: "Anterior",
      icon: <Code2 size={20} className="text-purple-500" />,
      description: "Análise crítica de rotinas administrativas, controle de sinistros e suporte operacional a clientes e equipes internas.",
      tags: ["Seguros", "Sinistros", "Análise de Dados", "Rotinas Adm"]
    },
    {
      role: "Suporte & Atendimento ao Cliente",
      company: "Gestão Operacional",
      period: "Mais de 10 anos",
      icon: <Globe size={20} className="text-emerald-500" />,
      description: "Mais de uma década de experiência sólida em suporte ao cliente, otimização de fluxos de trabalho e governança de atendimento.",
      tags: ["Suporte", "Gestão de Demandas", "Satisfação do Cliente"]
    }
  ];

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center bg-black overflow-x-hidden">
      
      {/* SEÇÃO HERO */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 md:px-8">
        <div className="absolute top-0 left-0 w-screen h-screen z-0">
          <SplineSceneBasic />
        </div>

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-4xl text-center relative z-10 p-6 pointer-events-none mt-12">
          <motion.div>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            Olá, me chamo <span className="text-white font-semibold">Johnatan Felipe Silva</span>.
            <span className="inline-block mt-2">
    Especialista em Atendimento, Ouvidoria e Operações com mais de 10 anos de experiência na resolução de demandas complexas e otimização de processos no setor financeiro. Focado em excelência na experiência do cliente, governança de SLAs e mediação de conflitos.
  </span>
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
          >
            <a
              href="#experiencia"
              className="group inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 font-medium text-black transition-all hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Experiência Profissional
              <ArrowUpRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="mailto:johnatanfelipe.s@gmail.com"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950/50 px-6 font-medium text-white transition-all hover:bg-neutral-900 backdrop-blur-sm"
            >
              Vamos conversar
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex items-center justify-center gap-6 text-neutral-400 pointer-events-auto"
          >
            <a href="https://linkedin.com/in/johnatanfelipesilva" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors p-2 text-sm font-medium">
              <User size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:johnatanfelipe.s@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors p-2 text-sm font-medium">
              <Mail size={18} />
              <span>E-mail</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DE EXPERIÊNCIA PROFISSIONAL */}
      <section id="experiencia" className="relative w-full max-w-5xl px-4 py-24 z-10 border-t border-neutral-900 bg-black">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-blue-500 mb-3 flex items-center justify-center gap-2">
            Graduação em Administração | IMES (Previsão de conclusão: 12/2027 – 5º período)
          </h2>
          <p className="text-3xl font-bold text-white sm:text-4xl tracking-tight">
            Experiência Profissional
          </p>
        </div>

        {/* Grid de Experiências */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-cursor="project"
              className="group relative border border-neutral-800 bg-neutral-950/40 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-950/80 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="p-2 bg-neutral-900 rounded-lg border border-neutral-800">
                    {exp.icon}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider">0{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-xs font-mono text-neutral-500 mb-3">{exp.company} • {exp.period}</p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{exp.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
{/* ---------- ADICIONE ESTE BLOCO AQUI ---------- */}
      {/* RODAPÉ (FOOTER) TECNOLÓGICO */}
      <footer className="relative w-full max-w-5xl px-4 py-10 mt-16 z-10 border-t border-neutral-900 bg-black">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                   
          {/* Lado Direito: Créditos com efeito tecnológico */}
          <div className="flex items-center gap-2 group">
            {/* Ícone sutil de código/terminal */}
            <Terminal size={14} className="text-neutral-700 transition-colors group-hover:text-blue-500"/>
            
            <p className="text-sm font-mono text-neutral-400 tracking-tight transition-colors group-hover:text-white">
          @ 2026 Desenvolvido por{" "}
              <span className="font-semibold text-neutral-200 transition-colors group-hover:text-blue-400">
                Michael Willy Silva
              </span>
            </p>
            
            {/* Um cursor piscando sutilmente no final (opcional, mas tech) */}
            <span className="w-1.5 h-3.5 bg-blue-500 animate-pulse rounded-sm opacity-0 group-hover:opacity-100 transition-opacity ml-1"></span>
          </div>
        </div>

          {/* Grid de fundo opcional, apenas no footer, para mais textura */}
        <div className="absolute inset-0 -z-10 bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)] opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)' }}/>
      </footer>
      {/* ----------------------------------------------- */}
    </main>
  );
}