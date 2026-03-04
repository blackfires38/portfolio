import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, Languages, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const formations = [
  { title: "BTS SIO - Option SISR", period: "2024 - 2026", lieu: "Lycée Saint-Marc Nivolas Vermelle", detail: "Solutions d'Infrastructure, Systèmes et Réseaux" },
  { title: "Bac Technologique STI2D", period: "2022 - 2024", lieu: "Lycée Saint Marc Nivolas Vermelle", detail: "" },
  { title: "Brevet des Collèges", period: "2021", lieu: "Collège Saint Joseph Bourgoin-Jallieu", detail: "" },
];

const techSkills = [
  { cat: "Développement", items: ["HTML5 / CSS", "JavaScript", "PHP / MySQL", "Python"] },
  { cat: "Systèmes", items: ["Windows 10/11", "Linux (Ubuntu, Debian)", "Active Directory"] },
  { cat: "Réseaux", items: ["TCP/IP", "Routeurs/Switchs", "VLAN", "VPN"] },
  { cat: "Outils", items: ["Git / GitHub", "VirtualBox / VMware", "Packet Tracer", "Suite Office"] },
];

const langues = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "Niveau intermédiaire (B1)" },
  { name: "Chinois", level: "Niveau intermédiaire (B1)" },
];

const CVPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Curriculum Vitae
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/80 max-w-lg mx-auto mb-6"
          >
            Étudiant en BTS SIO option SISR, passionné par l'informatique
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            href="https://ncattin.github.io/my-portfolio/Cv%20Cattin%20Nathan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-sm border border-primary-foreground/20 transition-all font-medium"
          >
            <Download size={18} /> Télécharger le CV (PDF)
          </motion.a>
        </div>
      </section>

      {/* Profil */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8" style={{ boxShadow: "var(--card-shadow)" }}>
              <h2 className="text-2xl font-display font-bold mb-4 text-gradient">Profil</h2>
              <p className="text-muted-foreground leading-relaxed">
                Étudiant en BTS SIO option SISR, passionné par l'informatique et motivé pour développer mes compétences en infrastructure réseau et développement. À la recherche de nouvelles opportunités pour continuer mes études dans ce domaine passionnant qu'est l'informatique.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Formation */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
              <GraduationCap className="text-primary-foreground" size={20} />
            </div>
            <h2 className="text-2xl font-display font-bold">Formation</h2>
          </AnimatedSection>

          <div className="space-y-6">
            {formations.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="glass-card rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-32 shrink-0">
                    <span className="text-sm font-medium text-primary">{f.period}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                    <p className="text-muted-foreground text-sm">{f.lieu}</p>
                    {f.detail && <p className="text-muted-foreground text-sm mt-1">{f.detail}</p>}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expérience */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
              <Briefcase className="text-primary-foreground" size={20} />
            </div>
            <h2 className="text-2xl font-display font-bold">Expérience Professionnelle</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass-card rounded-xl p-6" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-32 shrink-0">
                  <span className="text-sm font-medium text-primary">2025-2026</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Alternance - Technicien Informatique</h3>
                  <ul className="mt-3 space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      Maintenance du parc informatique
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      Support technique aux utilisateurs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      Configuration d'équipements réseau
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      Documentation des interventions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compétences techniques */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="mb-10">
            <h2 className="text-2xl font-display font-bold">Compétences Techniques</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {techSkills.map((group, i) => (
              <AnimatedSection key={group.cat} delay={i * 0.1}>
                <div className="glass-card rounded-xl p-6">
                  <h3 className="font-display font-semibold mb-4 text-primary">{group.cat}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 rounded-full text-sm bg-accent text-accent-foreground border border-border/50">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Langues & Centres d'intérêt */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="glass-card rounded-xl p-6" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="flex items-center gap-2 mb-6">
                  <Languages className="text-primary" size={20} />
                  <h3 className="font-display font-semibold text-lg">Langues</h3>
                </div>
                <div className="space-y-4">
                  {langues.map((l) => (
                    <div key={l.name} className="flex justify-between items-center">
                      <span className="font-medium">{l.name}</span>
                      <span className="text-sm text-muted-foreground">{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="glass-card rounded-xl p-6" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="text-primary" size={20} />
                  <h3 className="font-display font-semibold text-lg">Centres d'Intérêt</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Cybersécurité", "Nouvelles technologies", "Gaming"].map((c) => (
                    <span key={c} className="px-4 py-2 rounded-full text-sm bg-accent text-accent-foreground border border-border/50">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CVPage;
