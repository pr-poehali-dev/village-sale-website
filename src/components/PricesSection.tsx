import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const PricesSection = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <section id="prices" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Цены на недвижимость</h2>
          <p className="text-muted-foreground">Выберите подходящий тип жилья</p>
        </div>

        <Tabs defaultValue="cottages" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="cottages">Коттеджи</TabsTrigger>
            <TabsTrigger value="townhouses">Таунхаусы</TabsTrigger>
            <TabsTrigger value="plots">Участки</TabsTrigger>
          </TabsList>

          <TabsContent value="cottages">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Стандарт", area: 120, price: 8500000, features: ["3 спальни", "2 санузла", "Гараж", "Терраса"] },
                { name: "Комфорт", area: 150, price: 12500000, features: ["4 спальни", "3 санузла", "Гараж на 2 авто", "Панорамные окна"] },
                { name: "Премиум", area: 200, price: 18000000, features: ["5 спален", "4 санузла", "Подвал", "Камин", "Сауна"] }
              ].map((house, index) => (
                <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                  {index === 1 && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      Популярный
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{house.name}</span>
                      <span className="text-sm text-muted-foreground">{house.area} м²</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-primary">
                        {formatPrice(house.price)} ₽
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formatPrice(Math.round(house.price / house.area))} ₽/м²
                      </div>
                      <ul className="space-y-2">
                        {house.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <Icon name="Check" size={16} className="text-accent mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="townhouses">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Двухэтажный", area: 85, price: 6200000, features: ["2 спальни", "2 санузла", "Терраса", "Парковка"] },
                { name: "Трёхэтажный", area: 110, price: 8800000, features: ["3 спальни", "2.5 санузла", "Балкон", "Гардеробная"] }
              ].map((house, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{house.name}</span>
                      <span className="text-sm text-muted-foreground">{house.area} м²</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-primary">
                        {formatPrice(house.price)} ₽
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formatPrice(Math.round(house.price / house.area))} ₽/м²
                      </div>
                      <ul className="space-y-2">
                        {house.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <Icon name="Check" size={16} className="text-accent mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant="outline">
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="plots">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Эконом", area: 6, price: 1800000, features: ["Газ", "Электричество", "Дорога"] },
                { name: "Стандарт", area: 10, price: 2800000, features: ["Газ", "Электричество", "Водопровод", "Асфальт"] },
                { name: "Премиум", area: 15, price: 4200000, features: ["Все коммуникации", "Ландшафт", "У леса"] }
              ].map((plot, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{plot.name}</span>
                      <span className="text-sm text-muted-foreground">{plot.area} соток</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-primary">
                        {formatPrice(plot.price)} ₽
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formatPrice(Math.round(plot.price / plot.area))} ₽/сотка
                      </div>
                      <ul className="space-y-2">
                        {plot.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <Icon name="Check" size={16} className="text-accent mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant="outline">
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricesSection;