import { motion } from "framer-motion";
import { ShieldCheck, Clock, BarChart3, Users, Zap, TrendingDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [TrendingDown, Clock, Zap, BarChart3, Users, ShieldCheck];

const UpsideSection = () => {
  const { t } = useLanguage();

  const outcomes = [1, 2, 3, 4, 5, 6].map((i) => ({
    icon: icons[i - 1],
    title: t(`upside.${i}.title`),
    desc: t(`upside.${i}.desc`)
  }));

  return (
    <section id="outcomes" className="py-24 bg-gradient-section-alt">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">
            {t("upside.title1")} <span className="text-primary">{t("upside.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">{t("upside.sub")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {outcomes.map((item, i) =>
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex gap-4 p-5 rounded-xl hover:bg-secondary/50 transition-colors duration-300">
              <div className="shrink-0 mt-0.5">
                <item.icon className="text-accent" size={22} />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default UpsideSection;