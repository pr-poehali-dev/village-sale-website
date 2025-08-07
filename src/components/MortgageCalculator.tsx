import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const MortgageCalculator = () => {
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
  );
};

export default MortgageCalculator;