import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-lg font-sans font-bold text-foreground">Massify</div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t("footer.terms")}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t("footer.contact")}</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Massify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
