import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, FileSpreadsheet, MessageCircle, Database, Clock } from "lucide-react";

const IntegrationsSection = () => {
  const erpLogos = [
    { name: "SAP", logo: "SAP" },
    { name: "QuickBooks", logo: "QB" },
    { name: "Oracle", logo: "ORC" },
    { name: "Sage", logo: "SGE" },
    { name: "Dynamics", logo: "DYN" },
    { name: "NetSuite", logo: "NET" }
  ];

  const alternativeOptions = [
    {
      icon: FileSpreadsheet,
      title: "Excel / CSV",
      description: "Importa y sincroniza desde hojas de cálculo",
      time: "< 1 semana"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      description: "Continúa usando WhatsApp con Massify integrado",
      time: "Inmediato"
    },
    {
      icon: Database,
      title: "Base de Datos Propia",
      description: "Conectamos con tu sistema actual",
      time: "1-2 semanas"
    }
  ];

  return (
    <section id="integrations" className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Integración Sin Dolor
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Funciona con Lo Que Ya Tienes
          </h2>
          <p className="text-lg text-muted-foreground">
            No necesitas cambiar tu ERP. Massify se adapta a tu operación actual.
          </p>
        </div>

        {/* Guarantee Badge */}
        <div className="flex justify-center mb-12">
          <div className="bg-success-light border-2 border-success/30 rounded-2xl px-8 py-4 text-center shadow-medium">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-6 h-6 text-success mr-2" />
              <span className="font-bold text-success text-xl">GARANTÍA</span>
            </div>
            <div className="text-primary font-semibold text-lg">
              Integración ≤ 3 semanas o es GRATIS
            </div>
            <div className="text-sm text-muted-foreground">
              Solo aplica para integraciones con ERP
            </div>
          </div>
        </div>

        {/* ERP Integrations */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Principales ERPs Soportados
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {erpLogos.map((erp, index) => (
              <Card key={index} className="hover-lift bg-white shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-sm">{erp.logo}</span>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {erp.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              + Más de 50 sistemas compatibles. ¿No ves el tuyo? 
              <a href="#contact" className="text-accent hover:text-accent-hover font-medium ml-1">
                Pregúntanos
              </a>
            </p>
          </div>
        </div>

        {/* Alternative Options */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            ¿Sin ERP? No Hay Problema
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alternativeOptions.map((option, index) => (
              <Card key={index} className="hover-lift border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{option.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {option.description}
                  </p>
                  <div className="inline-flex items-center bg-success-light text-success px-3 py-1 rounded-full text-xs font-medium">
                    <Clock className="w-3 h-3 mr-1" />
                    {option.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">
            Proceso de Integración
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold mb-2">Análisis de Datos</h4>
              <p className="text-sm text-muted-foreground">
                Revisamos tu estructura actual y definimos la estrategia
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold mb-2">Configuración</h4>
              <p className="text-sm text-muted-foreground">
                Instalamos, configuramos y sincronizamos todo el sistema
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold mb-2">Go Live</h4>
              <p className="text-sm text-muted-foreground">
                Tu equipo empieza a vender 24/7 desde el primer día
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;