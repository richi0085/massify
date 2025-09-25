import DemoForm from "@/components/DemoForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Shield } from "lucide-react";

const Demo = () => {
  const benefits = [
    "Demo personalizada para tu industria",
    "Ver el ROI específico para tu empresa",
    "Conocer el proceso de integración completo",
    "Preguntas y respuestas en vivo",
    "Acceso a caso de éxito similar al tuyo"
  ];

  const testimonialQuotes = [
    {
      quote: "La demo me convenció en 10 minutos. Veía exactamente cómo solucionaba nuestros problemas.",
      name: "Carlos M., CEO Distribuidora Central"
    },
    {
      quote: "Muy profesional. Me mostraron exactamente lo que necesitaba ver para mi negocio.",
      name: "María R., Directora Comercial ImportTech"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Demo Personalizada • 15 Minutos
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ve Cómo Massify Transforma tu Negocio B2B
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Demo en vivo adaptada a tu industria y necesidades específicas. 
              Sin compromisos, solo valor puro en 15 minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Form */}
            <div>
              <DemoForm 
                title="Agenda tu Demo Gratuita"
                subtitle="15 minutos para ver tu futuro sin procesos manuales"
              />
            </div>

            {/* Benefits & Social Proof */}
            <div className="space-y-8">
              {/* What You'll See */}
              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Lo que verás en la demo:
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Process */}
              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Cómo funciona:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        1
                      </div>
                      <div>
                        <div className="font-medium">Análisis Previo</div>
                        <div className="text-sm text-muted-foreground">Revisamos tu negocio antes de la llamada</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        2
                      </div>
                      <div>
                        <div className="font-medium">Demo Personalizada</div>
                        <div className="text-sm text-muted-foreground">Te mostramos Massify configurado para tu industria</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-success text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        3
                      </div>
                      <div>
                        <div className="font-medium">Plan de Implementación</div>
                        <div className="text-sm text-muted-foreground">Definimos el roadmap específico para tu empresa</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonials */}
              <div className="space-y-4">
                {testimonialQuotes.map((testimonial, index) => (
                  <Card key={index} className="bg-muted/30 border-accent/20">
                    <CardContent className="p-4">
                      <p className="text-sm italic text-muted-foreground mb-2">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-xs text-accent font-medium">
                        — {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-success" />
                  </div>
                  <div className="text-sm font-medium">2 horas</div>
                  <div className="text-xs text-muted-foreground">Respuesta promedio</div>
                </div>
                <div>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-sm font-medium">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfacción demos</div>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium">Sin compromiso</div>
                  <div className="text-xs text-muted-foreground">Cero presión</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-medium max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                ¿Prefieres hablar directamente?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo está disponible por WhatsApp para responder cualquier pregunta.
              </p>
              <a
                href="https://wa.me/message/XXXXXX"
                className="inline-flex items-center bg-success hover:bg-success/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;