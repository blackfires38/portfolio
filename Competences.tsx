import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, Lightbulb, MessageSquare, UserCheck, Eye, Shuffle, Globe, Monitor, Network, Wrench } from "lucide-react";

const techCategories = [
  {
    title: "Développement Web",
    icon: Globe,
    skills: ["HTML5 / CSS3", "JavaScript", "PHP / MySQL", "Python"],
  },
  {
    title: "Systèmes d'Exploitation",
    icon: Monitor,
    skills: ["Windows 10/11", "Windows Server", "Linux (Ubuntu/Debian)", "Active Directory"],
  },
  {
    title: "Réseaux & Infrastructure",
    icon: Network,
    skills: ["TCP/IP", "Routeurs/Switchs", "VLAN", "VPN"],
  },
  {
    title: "Outils & Méthodologies",
    icon: Wrench,
    skills: ["Git / GitHub", "Virtualisation", "Packet Tracer", "Documentation Technique"],
  },
];

const softSkills = [
  { icon: Users, title: "Travail d'équipe", desc: "Collaboration efficace sur des projets en groupe" },
  { icon: Lightbulb, title: "Résolution de problèmes", desc: "Analyse et diagnostic de problèmes techniques" },
  { icon: MessageSquare, title: "Communication", desc: "Capacité à expliquer des concepts techniques" },
  { icon: UserCheck, title: "Autonomie", desc: "Gestion efficace des tâches en autonomie" },
  { icon: Eye, title: "Veille technologique", desc: "Suivi des évolutions du secteur IT" },
  { icon: Shuffle, title: "Adaptabilité", desc: "Capacité à apprendre de nouvelles technologies" },
];

const CompetencesPage = () => {
  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Mes Compétences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/80 max-w-xl mx-auto"
          >
            Un aperçu détaillé de mes compétences techniques et professionnelles acquises durant ma formation BTS SIO
          </motion.p>
        </div>
      </section>

      {/* Technical skills */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            {techCategories.map((cat, ci) => (
              <AnimatedSection key={cat.title} delay={ci * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl p-8 h-full"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
                      <cat.icon className="text-primary-foreground" size={20} />
                    </div>
                    <h3 className="font-display font-bold text-lg">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: si * 0.08, duration: 0.3 }}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-accent text-accent-foreground border border-border/50"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Soft skills */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-display font-bold mb-3">
              Compétences <span className="text-gradient">Transversales</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, i) => (
              <AnimatedSection key={skill.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-xl p-6 text-center h-full"
                >
                  <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="text-primary-foreground" size={22} />
                  </div>
                  <h4 className="font-display font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompetencesPage;
