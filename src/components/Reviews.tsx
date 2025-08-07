import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  return (
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
  );
};

export default Reviews;