import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";

const projets = [
  {
    title: "Infrastructure Réseau d'Entreprise",
    description: "Nettoyage et organisation de baies de brassage, dépose de switches inutilisés, installation de prises RJ45 dans différentes salles avec plastrons muraux.",
    tags: ["Cisco", "Ubiquiti", "RJ45"],
    color: "from-primary to-primary/70",
  },
  {
    title: "Gestion Antivirus Kaspersky",
    description: "Nettoyage complet de la solution : suppression des utilisateurs obsolètes, correction des éléments défectueux, et resynchronisation avec l'Active Directory.",
    tags: ["Kaspersky", "Active Directory", "Cybersécurité"],
    color: "from-primary/80 to-primary/50",
  },
  {
    title: "Administration Active Directory",
    description: "Administration d'un domaine Active Directory avec gestion des utilisateurs, groupes et stratégies.",
    tags: ["Active Directory", "GPO", "PowerShell"],
    color: "from-primary to-primary/60",
  },
  {
    title: "Scripts d'Automatisation",
    description: "Création de scripts Python pour automatiser des tâches répétitives d'administration système.",
    tags: ["Python", "Automatisation", "Linux"],
    color: "from-primary/80 to-primary/40",
  },
  {
    title: "Support Technique",
    description: "Traitement de nombreux tickets d'assistance pour enseignants, surveillants et membres de l'administration.",
    tags: ["Help Desk", "Support", "Ticketing"],
    color: "from-primary to-primary/70",
  },
  {
    title: "Gestion iPads - Microsoft Intune",
    description: "Préparation d'iPads avec MacBook et intégration à Microsoft Intune pour une administration centralisée.",
    tags: ["Microsoft Intune", "iPad", "MDM"],
    color: "from-primary/80 to-primary/50",
  },
];

const ProjetsPage = () => {
  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Mes Projets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/80 max-w-xl mx-auto"
          >
            Découvrez les projets réalisés durant ma formation et mes expériences professionnelles
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {projets.map((projet, i) => (
              <AnimatedSection key={projet.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-card rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  {/* Colored header strip */}
                  <div className={`h-2 bg-gradient-to-r ${projet.color}`} />
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-display font-semibold mb-3">{projet.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                      {projet.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projet.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjetsPage;
