import { motion } from "framer-motion";
import { Users, Building2, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Users, Building2, Package];

const StructuralWeaknessSection = () => {
  const { t } = useLanguage();

  const weaknesses = [1, 2, 3].map((i) => ({
    icon: icons[i - 1],
    title: t(`structural.${i}.title`),
    subtitle: t(`structural.${i}.subtitle`),
    desc: t(`structural.${i}.desc`)
  }));

  return (
    <section className="py-24 bg-gradient-section-alt">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">
            {t("structural.title1")} <span className="text-primary">{t("structural.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">{t("structural.sub")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {weaknesses.map((item, i) =>
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="glass-card p-8 text-center group hover:border-glow transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-5">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-sans text-xl font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-accent text-sm font-sans font-medium mb-3">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default StructuralWeaknessSection;