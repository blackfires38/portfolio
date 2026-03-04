import { motion } from "framer-motion";
import { ArrowRight, Server, Globe, Code, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

const missions = [
  {
    icon: Server,
    title: "Maintenance & Support",
    description: "Diagnostic et résolution de problèmes matériels et logiciels, assistance technique aux utilisateurs.",
  },
  {
    icon: Globe,
    title: "Infrastructure Réseau",
    description: "Configuration et administration des équipements réseau, gestion des accès et de la sécurité.",
  },
  {
    icon: Code,
    title: "Développement",
    description: "Création d'applications web et scripts d'automatisation pour optimiser les processus.",
  },
];

const skillGroups = [
  { title: "Développement Web", skills: ["HTML/CSS", "JavaScript", "PHP"] },
  { title: "Systèmes & Réseaux", skills: ["Windows Server", "Linux", "TCP/IP"] },
  { title: "Outils & Méthodes", skills: ["Git", "Virtualisation", "Documentation"] },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 hero-gradient opacity-40" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-4"
            >
              Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-4"
            >
              Cattin Nathan
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-2xl md:text-3xl font-display font-light text-primary-foreground/90 mb-6"
            >
              Étudiant BTS SIO
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-primary-foreground/70 max-w-xl mx-auto mb-10 text-lg"
            >
              Spécialité Solutions d'Infrastructure, Systèmes et Réseaux (SISR)
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/cv"
                className="hero-gradient px-8 py-3 rounded-lg font-medium text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Voir mon CV <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg font-medium border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Me contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-primary-foreground/50" size={28} />
          </motion.div>
        </motion.div>
      </section>

      {/* Missions */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Mes Missions en <span className="text-gradient">Entreprise</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Découvrez les domaines dans lesquels j'interviens au quotidien
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission, i) => (
              <AnimatedSection key={mission.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-card rounded-2xl p-8 h-full group cursor-default"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <mission.icon className="text-primary-foreground" size={26} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{mission.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills preview */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Compétences <span className="text-gradient">Principales</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group, i) => (
              <AnimatedSection key={group.title} delay={i * 0.15}>
                <div className="glass-card rounded-2xl p-8">
                  <h3 className="font-display font-semibold text-lg mb-5">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-accent text-accent-foreground border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <Link
              to="/competences"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              Voir toutes les compétences <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
