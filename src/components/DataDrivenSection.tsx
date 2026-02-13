import { motion } from "framer-motion";
import { Database, LineChart, Box, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [LineChart, Target, Box, Database];

const DataDrivenSection = () => {
  const { t } = useLanguage();

  const capabilities = [1, 2, 3, 4].map((i) => ({
    icon: icons[i - 1],
    title: t(`data.${i}.title`),
    desc: t(`data.${i}.desc`)
  }));

  const stats = [
  { label: t("data.stat1"), value: "97%", bar: 97 },
  { label: t("data.stat2"), value: "84%", bar: 84 },
  { label: t("data.stat3"), value: "90%", bar: 90 },
  { label: t("data.stat4"), value: "100%", bar: 100 }];


  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">
              {t("data.title1")} <span className="text-primary">{t("data.title2")}</span>
            </h2>
            <p className="text-muted-foreground font-sans mb-8 leading-relaxed">{t("data.sub")}</p>

            <div className="space-y-5">
              {capabilities.map((item, i) =>
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-4">
                  <div className="shrink-0 mt-1 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground text-sm mb-0.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="glass-card p-8 space-y-6 text-primary bg-primary">
            <div className="text-xs font-sans font-semibold tracking-[0.15em] uppercase text-accent mb-2">
              {t("data.badge")}
            </div>
            {stats.map((stat) =>
            <div key={stat.label} className="">
                <div className="flex justify-between text-sm font-sans mb-1.5">
                  <span className="text-primary-foreground">{stat.label}</span>
                  <span className="font-semibold text-primary-foreground">{stat.value}</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.bar}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full rounded-full bg-accent" />

                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

};

export default DataDrivenSection;