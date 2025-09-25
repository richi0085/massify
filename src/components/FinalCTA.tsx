import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Shield, Clock, Users } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-hero text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="mb-6">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Solo 6 pilotos disponibles este mes
            </Badge>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para Vender 24/7 como Amazon?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a 50+ empresas B2B que ya transformaron sus ventas. 
            Demo personalizada en 15 minutos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 font-semibold shadow-strong hover:-translate-y-1 transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Agendar Demo Gratuita
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hablar por WhatsApp
            </Button>
          </div>

          {/* Trust Signals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Garantía Total</h3>
              <p className="text-white/80 text-sm">
                Integración ≤ 3 semanas o es gratis. Sin riesgos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Setup Rápido</h3>
              <p className="text-white/80 text-sm">
                Promedio 2.3 semanas para go-live completo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Soporte Premium</h3>
              <p className="text-white/80 text-sm">
                Equipo dedicado en español durante toda la implementación.
              </p>
            </div>
          </div>

          {/* Final Proof Points */}
          <div className="border-t border-white/20 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-300 mb-1">-90%</div>
                <div className="text-xs text-white/70">Tareas manuales</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300 mb-1">24/7</div>
                <div className="text-xs text-white/70">Ventas activas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300 mb-1">+15%</div>
                <div className="text-xs text-white/70">Incremento promedio</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300 mb-1">50+</div>
                <div className="text-xs text-white/70">Empresas confían</div>
              </div>
            </div>
          </div>

          {/* Urgency Text */}
          <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-sm text-white/90">
              <strong>⚡ Respuesta garantizada en 2 horas</strong>
              <br />
              Cada minuto perdido en procesos manuales es una venta que gana tu competencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;