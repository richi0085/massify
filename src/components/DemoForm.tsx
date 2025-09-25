import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DemoFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const DemoForm = ({ 
  title = "Agenda tu Demo Gratuita", 
  subtitle = "15 minutos para ver cómo Massify puede transformar tus ventas B2B",
  className = ""
}: DemoFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    salesReps: "",
    industry: "",
    preferredTime: ""
  });
  const { toast } = useToast();

  const industries = [
    "Importador/Mayorista",
    "Distribuidor Alimentos",
    "Distribuidor Ferretería",
    "Distribuidor Tecnología",
    "Distribuidor Farmacéutico",
    "Otros"
  ];

  const roles = [
    "CEO/Gerente General",
    "CFO/Finanzas",
    "Director Comercial/Ventas",
    "Director TI/Sistemas",
    "Otros"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Demo Agendada!",
      description: "Te contactaremos en las próximas 2 horas para confirmar la reunión.",
    });
    console.log("Demo form submitted:", formData);
  };

  const isStepValid = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.company;
      case 2:
        return formData.phone && formData.role && formData.industry;
      case 3:
        return formData.salesReps && formData.preferredTime;
      default:
        return false;
    }
  };

  return (
    <Card className={`max-w-md mx-auto shadow-medium ${className}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        
        {/* Progress Bar */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                  num === step
                    ? "bg-accent text-white"
                    : num < step
                    ? "bg-success text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {num < step ? <CheckCircle className="w-4 h-4" /> : num}
              </div>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div className="text-center mb-4">
                <Badge variant="outline" className="text-xs">
                  Paso 1 de 3: Información Básica
                </Badge>
              </div>
              
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Juan Pérez"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email corporativo *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="juan@empresa.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="company">Empresa *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Distribuidora ABC"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Business Info */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div className="text-center mb-4">
                <Badge variant="outline" className="text-xs">
                  Paso 2 de 3: Información del Negocio
                </Badge>
              </div>
              
              <div>
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+34 600 000 000"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="role">Tu cargo *</Label>
                <Select onValueChange={(value) => handleInputChange("role", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="industry">Industria/Sector *</Label>
                <Select onValueChange={(value) => handleInputChange("industry", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu industria" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 3: Demo Preferences */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <div className="text-center mb-4">
                <Badge variant="outline" className="text-xs">
                  Paso 3 de 3: Preferencias de Demo
                </Badge>
              </div>
              
              <div>
                <Label htmlFor="salesReps">¿Cuántos vendedores tienes? *</Label>
                <Select onValueChange={(value) => handleInputChange("salesReps", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona cantidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10">5-10 vendedores</SelectItem>
                    <SelectItem value="11-25">11-25 vendedores</SelectItem>
                    <SelectItem value="26-50">26-50 vendedores</SelectItem>
                    <SelectItem value="50+">Más de 50 vendedores</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="preferredTime">Horario preferido *</Label>
                <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Mejor horario para ti" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Mañana (9:00-12:00)</SelectItem>
                    <SelectItem value="afternoon">Tarde (14:00-17:00)</SelectItem>
                    <SelectItem value="evening">Noche (18:00-20:00)</SelectItem>
                    <SelectItem value="flexible">Horario flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Summary */}
              <div className="bg-muted/50 p-4 rounded-lg text-sm">
                <div className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 mr-2 text-accent" />
                  <span className="font-semibold">Demo personalizada</span>
                </div>
                <div className="flex items-center mb-1">
                  <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span>15 minutos</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span>Enfocada en {formData.industry.toLowerCase()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrev}
                size="sm"
              >
                Anterior
              </Button>
            )}
            
            <div className="ml-auto">
              {step < 3 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepValid(step)}
                  size="sm"
                  className="btn-hero"
                >
                  Siguiente
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!isStepValid(step)}
                  className="btn-hero"
                >
                  Agendar Demo
                </Button>
              )}
            </div>
          </div>
        </form>

        {/* Trust Signals */}
        <div className="text-center mt-6 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            ⚡ Respuesta promedio: <strong>2 horas</strong>
            <br />
            🔒 Tus datos están seguros con nosotros
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemoForm;