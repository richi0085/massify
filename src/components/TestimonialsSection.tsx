import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Building, TrendingUp, Users, Award } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "CEO",
      company: "Distribuidora Central",
      industry: "Mayorista Alimentos",
      country: "México",
      quote: "Massify nos permitió reducir 90% el trabajo manual y crecer 12% en solo 6 meses. Nuestros clientes ahora ordenan cuando quieren, no cuando pueden llamarnos.",
      metrics: { growth: "+12%", efficiency: "-90%", satisfaction: "95%" },
      rating: 5
    },
    {
      name: "María Rodríguez",
      role: "Directora Comercial",
      company: "ImportTech Solutions",
      industry: "Importador Tecnología",
      country: "Colombia",
      quote: "La app para clientes cambió todo. Antes recibíamos 200 llamadas diarias por precios y stock. Ahora nuestros vendedores se enfocan en crecer cuentas, no en tomar pedidos.",
      metrics: { calls: "-85%", sales: "+18%", reps: "25" },
      rating: 5
    },
    {
      name: "Juan Pablo Silva",
      role: "CFO",
      company: "Ferretería Moderna",
      industry: "Distribuidor Ferretería",
      country: "Chile",
      quote: "ROI del 300% en el primer año. La integración con nuestro ERP fue perfecta y en tiempo récord. Massify no prometió de más, cumplió todo.",
      metrics: { roi: "300%", integration: "2 sem", sales: "+25%" },
      rating: 5
    }
  ];

  const companyLogos = [
    "Distribuidora Central", "ImportTech", "Ferretería Moderna", 
    "MegaSupply", "TechDistrib", "AlimentosPro"
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Casos de Éxito Reales
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Empresas que Ya Transformaron sus Ventas
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados medibles de empresas como la tuya en toda LatAm
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift shadow-medium">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <div className="flex items-center mt-1 text-xs text-muted-foreground">
                      <Building className="w-3 h-3 mr-1" />
                      {testimonial.industry} • {testimonial.country}
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-muted/20 absolute -top-2 -left-2" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 border-t border-border pt-4">
                  {Object.entries(testimonial.metrics).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-success">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Companies Logos */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-8">
            Empresas que confían en Massify:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companyLogos.map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-soft text-center hover-lift">
                <div className="w-8 h-8 bg-muted rounded mx-auto mb-2"></div>
                <div className="text-xs text-muted-foreground font-medium">{company}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Empresas B2B</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">-87%</div>
            <div className="text-sm text-muted-foreground">Tareas manuales promedio</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">+15%</div>
            <div className="text-sm text-muted-foreground">Crecimiento ventas promedio</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2.3 sem</div>
            <div className="text-sm text-muted-foreground">Tiempo integración promedio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;