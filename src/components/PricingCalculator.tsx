import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Calculator, Users, DollarSign } from "lucide-react";

const PricingCalculator = () => {
  const [reps, setReps] = useState([5]);
  const minPrice = 20;
  const maxPrice = 50;
  const minReps = 5;

  const monthlyMin = reps[0] * minPrice;
  const monthlyMax = reps[0] * maxPrice;
  const annualSavings = (monthlyMax * 12 * 0.15); // 15% discount annually

  return (
    <section id="pricing" className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Precio Simple y Transparente
          </h2>
          <p className="text-lg text-muted-foreground">
            Un solo plan que crece contigo. Sin sorpresas ni costos ocultos.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-medium hover-lift">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Calculator className="w-6 h-6 text-accent" />
                Calculadora ROI
              </CardTitle>
              <p className="text-muted-foreground">
                Ajusta el número de vendedores y ve tu inversión
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="reps-slider" className="text-base font-medium">
                    Número de vendedores
                  </Label>
                  <Badge variant="outline" className="text-lg px-3 py-1">
                    <Users className="w-4 h-4 mr-1" />
                    {reps[0]}
                  </Badge>
                </div>
                <Slider
                  id="reps-slider"
                  min={minReps}
                  max={50}
                  step={1}
                  value={reps}
                  onValueChange={setReps}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>5 vendedores (mínimo)</span>
                  <span>50+ vendedores</span>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-accent/5 rounded-lg border border-accent/20">
                  <DollarSign className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-3xl font-bold text-accent mb-1">
                    ${monthlyMin} - ${monthlyMax}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    USD por mes
                  </div>
                </div>

                <div className="text-center p-6 bg-success-light rounded-lg border border-success/20">
                  <div className="text-2xl font-bold text-success mb-1">
                    ${Math.round(annualSavings)}
                  </div>
                  <div className="text-sm text-success">
                    Ahorro anual (15% off)
                  </div>
                </div>
              </div>

              {/* Features Included */}
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold mb-4 text-center">Todo incluido:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                    Apps para clientes y vendedores
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                    Integración con ERP/Excel
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                    Gestión de inventario en tiempo real
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                    Promociones y políticas comerciales
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                    Cobranzas y pagos
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                    Soporte en español
                  </div>
                </div>
              </div>

              {/* Integration Fee Note */}
              <div className="text-center text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                <strong>Nota:</strong> Tarifa de integración solo aplica con ERP (SAP, QuickBooks, etc.). 
                <br />
                <span className="text-success font-medium">
                  Garantía: ≤ 3 semanas o es GRATIS
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;