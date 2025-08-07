import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [initialPayment, setInitialPayment] = useState(1000000);
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount - initialPayment;
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;
    
    if (monthlyRate === 0) return principal / totalPayments;
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    return monthlyPayment;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const monthlyPayment = calculateMonthlyPayment();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Icon name="Home" size={24} className="text-primary" />
            <span className="text-xl font-bold text-foreground">ЭкоПоселок</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#prices" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#infrastructure" className="text-sm font-medium hover:text-primary transition-colors">Инфраструктура</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#installment" className="text-sm font-medium hover:text-primary transition-colors">Рассрочка</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Mortgage Calculator */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Калькулятор ипотеки</h2>
            <p className="text-muted-foreground">Рассчитайте ежемесячный платёж для покупки дома</p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Стоимость недвижимости</label>
                    <Input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="text-lg"
                    />
                    <div className="text-sm text-muted-foreground mt-1">
                      {formatPrice(loanAmount)} ₽
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Первоначальный взнос</label>
                    <Input
                      type="number"
                      value={initialPayment}
                      onChange={(e) => setInitialPayment(Number(e.target.value))}
                      className="text-lg"
                    />
                    <div className="text-sm text-muted-foreground mt-1">
                      {formatPrice(initialPayment)} ₽ ({Math.round(initialPayment / loanAmount * 100)}%)
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Срок кредита (лет)</label>
                    <Input
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Процентная ставка (%)</label>
                    <Input
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 space-y-6">
                  <h3 className="text-xl font-semibold">Результат расчёта</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Сумма кредита:</span>
                      <span className="font-medium">{formatPrice(loanAmount - initialPayment)} ₽</span>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Ежемесячный платёж:</span>
                      <span className="text-2xl font-bold text-primary">{formatPrice(Math.round(monthlyPayment))} ₽</span>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Переплата:</span>
                      <span className="font-medium">{formatPrice(Math.round(monthlyPayment * loanTerm * 12 - (loanAmount - initialPayment)))} ₽</span>
                    </div>
                    
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Общая сумма:</span>
                      <span className="font-medium">{formatPrice(Math.round(monthlyPayment * loanTerm * 12 + initialPayment))} ₽</span>
                    </div>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                    <Icon name="FileText" size={20} className="mr-2" />
                    Оформить заявку
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Prices Section */}
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

      {/* Infrastructure */}
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

      {/* Reviews */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Отзывы жителей</h2>
            <p className="text-muted-foreground">Что говорят наши соседи</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Анна Смирнова", rating: 5, text: "Прекрасное место для жизни! Чистый воздух, хорошие соседи, развитая инфраструктура. Не жалеем о переезде.", family: "Семья с двумя детьми" },
              { name: "Дмитрий Козлов", rating: 5, text: "Качественное строительство, все коммуникации работают исправно. Менеджеры помогли с оформлением ипотеки.", family: "Молодая пара" },
              { name: "Елена Петрова", rating: 5, text: "Дети в восторге от детских площадок! А мы наслаждаемся тишиной и природой. Очень удобно до города добираться.", family: "Многодетная семья" }
            ].map((review, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg font-semibold text-primary">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.family}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installment */}
      <section id="installment" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Рассрочка и кредитные программы</h2>
            <p className="text-muted-foreground">Различные варианты оплаты для вашего удобства</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="installment" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Icon name="Calendar" size={20} className="text-primary mr-3" />
                    <span className="font-semibold">Рассрочка до 5 лет</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Беспроцентная рассрочка от застройщика на срок до 5 лет. Первоначальный взнос от 20%.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Преимущества:</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center"><Icon name="Check" size={14} className="text-accent mr-2" />Без переплат</li>
                          <li className="flex items-center"><Icon name="Check" size={14} className="text-accent mr-2" />Гибкий график</li>
                          <li className="flex items-center"><Icon name="Check" size={14} className="text-accent mr-2" />Минимум документов</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Условия:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>Первый взнос: от 20%</li>
                          <li>Срок: до 60 месяцев</li>
                          <li>Ставка: 0%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mortgage" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Icon name="CreditCard" size={20} className="text-primary mr-3" />
                    <span className="font-semibold">Ипотека от 8.5%</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Работаем с ведущими банками России. Помогаем оформить ипотеку на лучших условиях.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { bank: "Сбербанк", rate: "8.5%", payment: "15%" },
                        { bank: "ВТБ", rate: "8.7%", payment: "10%" },
                        { bank: "Альфа-Банк", rate: "9.1%", payment: "20%" }
                      ].map((program, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">{program.bank}</h4>
                          <div className="space-y-1 text-sm">
                            <div>Ставка: <span className="font-medium text-primary">{program.rate}</span></div>
                            <div>Взнос: <span className="font-medium">{program.payment}</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="programs" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <Icon name="Users" size={20} className="text-primary mr-3" />
                    <span className="font-semibold">Специальные программы</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Семейная ипотека</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center"><Icon name="Check" size={14} className="text-accent mr-2" />Ставка от 6%</li>
                          <li className="flex items-center"><Icon name="Check" size={14} className="text-accent mr-2" />Для семей с детьми</li>
                          <li className="flex items-center"><Icon name="Check" size={14} className="text-accent mr-2" />Сумма до 12 млн ₽</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">IT-ипотека</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center"><Icon name="Check" size={14} className="text-accent mr-2" />Ставка от 5%</li>
                          <li className="flex items-center"><Icon name="Check" size={14} className="text-accent mr-2" />Для IT-специалистов</li>
                          <li className="flex items-center"><Icon name="Check" size={14} className="text-accent mr-2" />Сумма до 18 млн ₽</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Как с нами связаться</h3>
                  <div className="space-y-4">
                    {[
                      { icon: "Phone", title: "Телефон", value: "+7 (495) 123-45-67", desc: "Звонки принимаем с 9:00 до 21:00" },
                      { icon: "Mail", title: "Email", value: "info@ekocity.ru", desc: "Ответим в течение часа" },
                      { icon: "MapPin", title: "Офис продаж", value: "г. Москва, ул. Примерная, д. 1", desc: "Ежедневно с 10:00 до 20:00" },
                      { icon: "Clock", title: "Показ объектов", value: "По предварительной записи", desc: "Бесплатный трансфер из города" }
                    ].map((contact, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Icon name={contact.icon} size={18} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{contact.title}</h4>
                          <p className="text-primary font-medium">{contact.value}</p>
                          <p className="text-sm text-muted-foreground">{contact.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Запишитесь на показ</h3>
                  <p className="text-muted-foreground mb-4">
                    Оставьте заявку, и мы организуем для вас персональную экскурсию по поселку
                  </p>
                  <Button className="bg-secondary hover:bg-secondary/90" size="lg">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на показ
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="/img/59892620-02be-4c14-981c-66769084b235.jpg" 
                  alt="Счастливая семья"
                  className="rounded-2xl w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Станьте частью нашего сообщества</h4>
                  <p className="text-white/90">Более 150 семей уже выбрали ЭкоПоселок</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Home" size={24} className="text-secondary" />
                <span className="text-xl font-bold">ЭкоПоселок</span>
              </div>
              <p className="text-slate-300 text-sm">
                Современные дома в экологически чистом районе для комфортной жизни вашей семьи.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#prices" className="text-slate-300 hover:text-white transition-colors">Цены</a></li>
                <li><a href="#infrastructure" className="text-slate-300 hover:text-white transition-colors">Инфраструктура</a></li>
                <li><a href="#reviews" className="text-slate-300 hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#installment" className="text-slate-300 hover:text-white transition-colors">Рассрочка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-slate-300">Помощь с ипотекой</span></li>
                <li><span className="text-slate-300">Юридическое сопровождение</span></li>
                <li><span className="text-slate-300">Показ объектов</span></li>
                <li><span className="text-slate-300">Консультации</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-300">+7 (495) 123-45-67</li>
                <li className="text-slate-300">info@ekocity.ru</li>
                <li className="text-slate-300">г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 ЭкоПоселок. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;