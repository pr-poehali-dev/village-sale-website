import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;