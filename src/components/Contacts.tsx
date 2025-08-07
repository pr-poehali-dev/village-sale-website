import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
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
  );
};

export default Contacts;