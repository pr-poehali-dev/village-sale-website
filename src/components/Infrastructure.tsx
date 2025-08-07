import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Infrastructure = () => {
  return (
    <section id="infrastructure" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Инфраструктура поселка</h2>
          <p className="text-muted-foreground">Всё необходимое для комфортной жизни</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "GraduationCap", title: "Детский сад", desc: "На территории поселка" },
            { icon: "ShoppingCart", title: "Магазины", desc: "Продукты и товары первой необходимости" },
            { icon: "Car", title: "Парковка", desc: "Гостевые места у каждого дома" },
            { icon: "Trees", title: "Парк", desc: "Зона отдыха и детские площадки" },
            { icon: "Wifi", title: "Интернет", desc: "Высокскоростной интернет" },
            { icon: "Zap", title: "Электричество", desc: "Стабильное энергоснабжение" },
            { icon: "Droplets", title: "Водопровод", desc: "Центральное водоснабжение" },
            { icon: "Shield", title: "Охрана", desc: "Видеонаблюдение 24/7" }
          ].map((item, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;