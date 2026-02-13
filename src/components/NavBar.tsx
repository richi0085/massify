import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-xl font-sans font-bold text-foreground tracking-tight">
          Massify
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#pain" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.problem")}</a>
          <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.solution")}</a>
          <a href="#outcomes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.outcomes")}</a>
          <a href="#integration" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.integration")}</a>
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="text-xs font-sans font-semibold tracking-wider uppercase border border-border rounded-full px-3 py-1 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <Button variant="hero" size="sm">{t("nav.demo")}</Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="text-xs font-sans font-semibold tracking-wider uppercase border border-border rounded-full px-3 py-1 text-muted-foreground"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          <a href="#pain" className="text-sm text-muted-foreground py-2" onClick={() => setIsOpen(false)}>{t("nav.problem")}</a>
          <a href="#solution" className="text-sm text-muted-foreground py-2" onClick={() => setIsOpen(false)}>{t("nav.solution")}</a>
          <a href="#outcomes" className="text-sm text-muted-foreground py-2" onClick={() => setIsOpen(false)}>{t("nav.outcomes")}</a>
          <a href="#integration" className="text-sm text-muted-foreground py-2" onClick={() => setIsOpen(false)}>{t("nav.integration")}</a>
          <Button variant="hero" size="sm" className="w-full">{t("nav.demo")}</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
