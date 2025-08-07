import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section id="hero" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent/20 text-accent-foreground border-accent/30">
                🏡 Экологически чистый район
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Дом вашей мечты в 
                <span className="text-primary"> ЭкоПоселке</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Современные коттеджи и таунхаусы в живописном месте с развитой инфраструктурой. 
                Ипотека от 8.5%, рассрочка до 5 лет.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Icon name="MapPin" size={20} className="mr-2" />
                Посмотреть участки
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать ипотеку
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Семей</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25</div>
                <div className="text-sm text-muted-foreground">Га площадь</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Мин до города</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/img/2aca04fa-9680-4294-b18b-01ca1f48ea1f.jpg" 
              alt="ЭкоПоселок"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">🏗️ Активное строительство</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;