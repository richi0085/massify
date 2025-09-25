import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Características", href: "#features" },
      { label: "Precios", href: "#pricing" },
      { label: "Integraciones", href: "#integrations" },
      { label: "Demo", href: "#demo" }
    ],
    solutions: [
      { label: "Para Importadores", href: "/solutions/importers" },
      { label: "Para Mayoristas", href: "/solutions/wholesalers" },
      { label: "Para Distribuidores", href: "/solutions/distributors" },
      { label: "Para CFOs", href: "/solutions/cfos" }
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Casos de Éxito", href: "/case-studies" },
      { label: "Centro de Ayuda", href: "/help" },
      { label: "API Docs", href: "/docs" }
    ],
    company: [
      { label: "Sobre Nosotros", href: "/about" },
      { label: "Carreras", href: "/careers" },
      { label: "Contacto", href: "/contact" },
      { label: "Prensa", href: "/press" }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Massify</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                La plataforma que convierte tu negocio B2B en la experiencia Amazon 
                que tus clientes esperan. Vende 24/7 sin fricción.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary-foreground/60" />
                <span>Madrid, España • CDMX, México</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary-foreground/60" />
                <span>+34 900 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary-foreground/60" />
                <span>hola@massify.app</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Producto</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Soluciones</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para Transformar tus Ventas B2B?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Únete a 50+ empresas que ya venden 24/7 con Massify
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-3"
              >
                <Phone className="w-5 h-5 mr-2" />
                Agendar Demo Gratuita
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <div>
              © {currentYear} Massify. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacidad
              </a>
              <a href="/terms" className="hover:text-primary-foreground transition-colors">
                Términos
              </a>
              <a href="/cookies" className="hover:text-primary-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;