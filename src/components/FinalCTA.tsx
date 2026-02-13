import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-6 leading-tight">
            {t("cta.title1")}{" "}
            <span className="text-accent">{t("cta.title2")}</span>
          </h2>
          <p className="text-white/70 font-sans text-lg mb-10 leading-relaxed">{t("cta.sub")}</p>
          <Button variant="hero" size="lg" className="text-base px-10 py-6">
            {t("cta.button")}
            <ArrowRight className="ml-1" size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
