import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;