import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Clock, TrendingUp, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const proofPoints = [
    { icon: Users, label: "24/7", desc: "Ventas automáticas" },
    { icon: TrendingUp, label: "-90%", desc: "Tareas manuales" },
    { icon: Clock, label: "+12%", desc: "Incremento ventas" },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Guarantee Badge */}
          <div className="mb-8">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm font-semibold">
              <Shield className="w-4 h-4 mr-2" />
              Integración ≤ 3 semanas o GRATIS
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Convierte tu negocio B2B en la{" "}
            <span className="text-yellow-300">experiencia Amazon</span>{" "}
            que tus clientes esperan
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Vende 24/7 con apps sincronizadas para clientes y vendedores. 
            Funciona con ERP, Excel o WhatsApp. Integración garantizada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="btn-hero text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
              Agendar Demo Gratuita
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Demo 2 min
            </Button>
          </div>

          {/* Proof Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {proofPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {point.label}
                </div>
                <div className="text-sm text-white/70">
                  {point.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp CTA - Desktop */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        <Button className="bg-success hover:bg-success/90 text-white rounded-full p-4 shadow-strong">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </Button>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-border">
        <Button className="w-full btn-hero">
          Agendar Demo Gratuita
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;