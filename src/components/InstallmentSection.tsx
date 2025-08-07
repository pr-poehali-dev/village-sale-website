import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const InstallmentSection = () => {
  return (
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
  );
};

export default InstallmentSection;