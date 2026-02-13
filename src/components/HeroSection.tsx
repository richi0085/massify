import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t("hero.stat1.value"), label: t("hero.stat1.label") },
    { value: t("hero.stat2.value"), label: t("hero.stat2.label") },
    { value: t("hero.stat3.value"), label: t("hero.stat3.label") },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero pt-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
            <span className="inline-block text-xs font-sans font-semibold tracking-[0.2em] uppercase text-accent border border-accent/30 rounded-full px-4 py-1.5">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white leading-[1.1] mb-6">
            {t("hero.title1")}{" "}
            <span className="text-accent">{t("hero.title2")}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg text-white/70 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            {t("hero.sub")}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              {t("hero.cta1")}
              <ArrowRight className="ml-1" size={18} />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
              <Play size={16} className="mr-1" />
              {t("hero.cta2")}
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-20 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-sans font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-white/50 mt-1 font-sans">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
