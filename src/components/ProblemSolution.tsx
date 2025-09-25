import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageSquare, FileSpreadsheet, Clock, TrendingUp, Smartphone, Zap } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: MessageSquare,
      title: "Caos Manual",
      description: "Pedidos por WhatsApp, hojas de cálculo desordenadas, precios inconsistentes"
    },
    {
      icon: FileSpreadsheet,
      title: "Procesos Lentos",
      description: "Vendedores pierden tiempo en admin, back office sobrecargado"
    },
    {
      icon: Clock,
      title: "Clientes Frustrados",
      description: "Sin visibilidad de stock/precios, necesitan llamar, sin autoservicio"
    }
  ];

  const solutions = [
    {
      icon: Smartphone,
      title: "Apps Sincronizadas",
      description: "Clientes compran 24/7, vendedores gestionan desde móvil"
    },
    {
      icon: Zap,
      title: "Automatización Total",
      description: "Stock en tiempo real, precios automáticos, menos errores"
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Escalable",
      description: "Más ventas, menos trabajo manual, clientes satisfechos"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            De la Frustración a la Transformación
          </h2>
          <p className="text-lg text-muted-foreground">
            Convierte las ineficiencias de hoy en las ventajas competitivas de mañana
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Problems Column */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center text-destructive mb-8">
                ❌ Problemas Actuales
              </h3>
              {problems.map((problem, index) => (
                <Card key={index} className="border-destructive/20 bg-destructive/5 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                          <problem.icon className="w-5 h-5 text-destructive" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-destructive mb-2">
                          {problem.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Arrow Column */}
            <div className="flex justify-center">
              <div className="bg-gradient-hero rounded-full p-4 shadow-medium">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Solutions Column */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center text-success mb-8">
                ✅ Solución Massify
              </h3>
              {solutions.map((solution, index) => (
                <Card key={index} className="border-success/20 bg-success-light hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                          <solution.icon className="w-5 h-5 text-success" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-success mb-2">
                          {solution.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-success mb-2">-90%</div>
            <div className="text-muted-foreground">Reducción tareas manuales</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Canal de ventas activo</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">+12%</div>
            <div className="text-muted-foreground">Incremento en ventas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;