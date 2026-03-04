import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Linkedin, Github, Phone, Clock, ExternalLink } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "nathan.cattin31@gmail.com",
    link: "mailto:nathan.cattin31@gmail.com",
    cta: "Envoyer un email",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Nathan Cattin",
    link: "https://fr.linkedin.com/in/nathan-cattin-4829632a1",
    cta: "Voir le profil",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "ncattin",
    link: "https://github.com/ncattin",
    cta: "Voir GitHub",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "06 78 43 16 46",
    link: "tel:+33678431646",
    cta: "Appeler",
  },
];

const disponibilites = ["Stages en entreprise", "Alternance", "Projets étudiants", "Collaborations"];

const ContactPage = () => {
  return (
    <Layout>
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Me Contacter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary-foreground/80 max-w-lg mx-auto"
          >
            N'hésitez pas à me contacter pour toute opportunité professionnelle ou question
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {contacts.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <motion.a
                  href={c.link}
                  target={c.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-card rounded-2xl p-8 block group"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <c.icon className="text-primary-foreground" size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{c.value}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
                    {c.cta} <ExternalLink size={14} />
                  </span>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>

          {/* Disponibilité */}
          <AnimatedSection className="mt-16" delay={0.3}>
            <div className="glass-card rounded-2xl p-8 text-center" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-5">
                <Clock className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Disponibilité</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Actuellement en BTS SIO, je suis disponible pour :
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {disponibilites.map((d) => (
                  <span
                    key={d}
                    className="px-5 py-2.5 rounded-full text-sm font-medium bg-accent text-accent-foreground border border-border/50"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
