import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, ShoppingCart, Users, BarChart3, Package, CreditCard, MessageCircle, Clock } from "lucide-react";

const AppsShowcase = () => {
  const customerAppFeatures = [
    { icon: ShoppingCart, title: "Catálogo 24/7", desc: "Precios personalizados, stock en tiempo real" },
    { icon: Package, title: "Seguimiento Pedidos", desc: "Estado en vivo desde pedido hasta entrega" },
    { icon: CreditCard, title: "Pagos Múltiples", desc: "Tarjeta, transferencia, efectivo" },
    { icon: MessageCircle, title: "Chat Integrado", desc: "Comunicación directa con vendedores" }
  ];

  const salesAppFeatures = [
    { icon: Users, title: "Gestión Clientes", desc: "Historial, crédito, preferencias en un lugar" },
    { icon: BarChart3, title: "Dashboard Ventas", desc: "Métricas, objetivos, comisiones en tiempo real" },
    { icon: Package, title: "Inventario Móvil", desc: "Stock, reservas, disponibilidad instantánea" },
    { icon: Clock, title: "Pedidos Rápidos", desc: "Reordenar, recomendaciones, bulk upload" }
  ];

  return (
    <section id="features" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Smartphone className="w-4 h-4 mr-2" />
            Dos Apps, Una Experiencia
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            El Ecosistema Completo de Ventas B2B
          </h2>
          <p className="text-lg text-muted-foreground">
            Apps sincronizadas que transforman la experiencia de compra y venta para todos
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Customer App */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span className="font-semibold">App Cliente</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Tu Amazon B2B Personalizado
              </h3>
              <p className="text-muted-foreground mb-6">
                Tus clientes compran cuando quieren, como quieren. Sin llamadas, sin esperas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {customerAppFeatures.map((feature, index) => (
                <Card key={index} className="hover-lift border-accent/20">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Customer App Mockup */}
            <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-sm opacity-90 mb-2">Vista Cliente</div>
                <div className="text-lg font-semibold mb-4">"Como Amazon, pero para mi negocio"</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>✓ Precios especiales</div>
                  <div>✓ Stock en vivo</div>
                  <div>✓ Pedidos 24/7</div>
                  <div>✓ Pago integrado</div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 right-8 w-8 h-8 bg-white/20 rounded-full"></div>
            </div>
          </div>

          {/* Sales Rep App */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-success/10 text-success px-4 py-2 rounded-full mb-4">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">App Vendedor</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Tu CRM + Catálogo en el Bolsillo
              </h3>
              <p className="text-muted-foreground mb-6">
                Vendedores superpoderosos con toda la info al alcance de la mano.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {salesAppFeatures.map((feature, index) => (
                <Card key={index} className="hover-lift border-success/20">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-success" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sales App Mockup */}
            <div className="bg-gradient-success rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-sm opacity-90 mb-2">Vista Vendedor</div>
                <div className="text-lg font-semibold mb-4">"Todo lo que necesito en una app"</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>✓ Clientes completos</div>
                  <div>✓ Métricas en vivo</div>
                  <div>✓ Pedidos offline</div>
                  <div>✓ Rutas optimizadas</div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 right-8 w-8 h-8 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Sync Animation */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-medium">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium text-muted-foreground">
              Sincronización en tiempo real
            </span>
            <div className="w-3 h-3 bg-success rounded-full animate-pulse ml-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppsShowcase;