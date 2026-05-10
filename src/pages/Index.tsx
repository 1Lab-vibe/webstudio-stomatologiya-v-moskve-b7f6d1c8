import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Phone, MapPin, Clock, Star, Shield, CheckCircle2, Calendar,
  Sparkles, Stethoscope, Smile, HeartPulse, Baby, Crown
} from "lucide-react";
import clinicHero from "@/assets/clinic-hero.jpg";

const services = [
  { icon: Stethoscope, title: "Лечение кариеса", price: "от 3 500 ₽", desc: "Безболезненное лечение под микроскопом" },
  { icon: Sparkles, title: "Профессиональная гигиена", price: "от 4 900 ₽", desc: "Чистка Air Flow и ультразвук" },
  { icon: Smile, title: "Отбеливание зубов", price: "от 18 000 ₽", desc: "ZOOM 4 — до 8 тонов за визит" },
  { icon: Crown, title: "Протезирование", price: "от 25 000 ₽", desc: "Коронки E.max, циркониевые виниры" },
  { icon: HeartPulse, title: "Имплантация", price: "от 45 000 ₽", desc: "Импланты Straumann, Nobel, Osstem" },
  { icon: Baby, title: "Детская стоматология", price: "от 2 500 ₽", desc: "Бережный подход, без страха" },
];

const reviews = [
  { name: "Анна К.", text: "Отличная клиника! Врач всё подробно объяснил, лечение прошло без боли. Спасибо команде.", rating: 5 },
  { name: "Дмитрий С.", text: "Делал имплантацию — результат превзошёл ожидания. Цена адекватная, всё по плану.", rating: 5 },
  { name: "Марина В.", text: "Привожу сюда всю семью уже 2 года. Детский врач — настоящий профессионал.", rating: 5 },
];

const steps = [
  { n: "01", title: "Запись", desc: "Оставьте заявку или позвоните — подберём удобное время" },
  { n: "02", title: "Консультация", desc: "Осмотр, диагностика и план лечения с фиксированной сметой" },
  { n: "03", title: "Лечение", desc: "Современные материалы, гарантия на работы до 3 лет" },
  { n: "04", title: "Контроль", desc: "Бесплатный осмотр через 2 недели после лечения" },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Заполните имя и телефон");
      return;
    }
    toast.success("Заявка отправлена! Перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground">
              <Smile className="h-5 w-5" />
            </span>
            <span>Стоматология</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Услуги</a>
            <a href="#reviews" className="hover:text-foreground transition">Отзывы</a>
            <a href="#process" className="hover:text-foreground transition">Как лечим</a>
            <a href="#contacts" className="hover:text-foreground transition">Контакты</a>
          </nav>
          <a href="tel:+74951234567" className="hidden sm:flex items-center gap-2 text-sm font-semibold">
            <Phone className="h-4 w-4 text-primary" />
            +7 (495) 123-45-67
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-soft)]" />
        <div className="container relative grid lg:grid-cols-2 gap-12 py-16 lg:py-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground mb-6">
              <Star className="h-3.5 w-3.5 fill-current text-accent" />
              Рейтинг 5.0 на Яндекс.Картах · 5 лет на рынке
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6">
              Стоматология в Москве — <span className="text-primary">без боли, без переплат</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Современное оборудование, врачи с опытом от 5 лет и понятная цена ещё до начала лечения. Запишитесь онлайн — перезвоним в течение 15 минут.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button size="lg" className="bg-[image:var(--gradient-hero)] hover:opacity-95 shadow-[var(--shadow-soft)] h-12 px-7 text-base" asChild>
                <a href="#request"><Calendar className="mr-2 h-5 w-5" />Записаться онлайн</a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-7 text-base" asChild>
                <a href="tel:+74951234567"><Phone className="mr-2 h-5 w-5" />Позвонить</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-accent" />Гарантия до 3 лет</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" />Лицензия Минздрава</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" />Без очередей</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[image:var(--gradient-hero)] opacity-20 blur-3xl rounded-full" />
            <img
              src={clinicHero}
              alt="Современный кабинет стоматологии в Москве"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-[var(--shadow-soft)] w-full h-auto object-cover aspect-[4/3]"
            />
            <Card className="absolute -bottom-6 -left-2 sm:left-6 p-4 shadow-[var(--shadow-card)] flex items-center gap-3 max-w-xs">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold">5.0 на Яндекс.Картах</div>
                <div className="text-muted-foreground text-xs">более 120 отзывов</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: "5 лет", l: "опыт работы" },
            { v: "5.0", l: "рейтинг Яндекс" },
            { v: "120+", l: "довольных пациентов" },
            { v: "24/7", l: "запись онлайн" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl md:text-4xl font-extrabold text-primary">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-20">
        <div className="max-w-2xl mb-12">
          <div className="text-sm font-semibold text-primary mb-3">УСЛУГИ И ЦЕНЫ</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Полный спектр стоматологических услуг</h2>
          <p className="text-muted-foreground">Прозрачные цены — итоговая стоимость фиксируется в плане лечения и не меняется.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card key={s.title} className="p-6 hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 border-border/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-semibold text-primary">{s.price}</span>
                <a href="#request" className="text-sm font-medium hover:text-primary transition">Записаться →</a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-secondary/40 py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold text-primary mb-3">ОТЗЫВЫ</div>
              <h2 className="text-3xl md:text-4xl font-bold">Что говорят пациенты</h2>
            </div>
            <div className="flex items-center gap-3 bg-card rounded-2xl px-5 py-3 shadow-[var(--shadow-card)]">
              <div className="text-3xl font-extrabold text-primary">5.0</div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <div className="text-xs text-muted-foreground">Яндекс.Карты</div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <Card key={r.name} className="p-6">
                <div className="flex mb-3">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <p className="text-foreground/90 mb-5 leading-relaxed">«{r.text}»</p>
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">пациент клиники</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="container py-20">
        <div className="max-w-2xl mb-12">
          <div className="text-sm font-semibold text-primary mb-3">КАК ЛЕЧИМ</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Понятный путь от заявки до результата</h2>
          <p className="text-muted-foreground">Без скрытых платежей и навязанных услуг. Вы знаете точную цену и срок.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="relative p-6 rounded-2xl bg-card border border-border/60">
              <div className="text-4xl font-extrabold text-primary/20 mb-3">{s.n}</div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="container pb-20">
        <Card className="overflow-hidden border-0 shadow-[var(--shadow-soft)]">
          <div className="grid lg:grid-cols-2">
            <div className="bg-[image:var(--gradient-hero)] p-8 lg:p-12 text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Запишитесь на консультацию</h2>
              <p className="text-primary-foreground/85 mb-8 text-lg">
                Перезвоним в течение 15 минут, подберём удобное время и ответим на вопросы.
              </p>
              <ul className="space-y-3 text-primary-foreground/90">
                {[
                  "Бесплатная консультация и осмотр",
                  "Точный план лечения с ценой",
                  "Без давления и навязанных услуг",
                  "Удобное время — даже в выходные",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="p-8 lg:p-12 space-y-5 bg-card">
              <div>
                <Label htmlFor="name">Ваше имя</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Иван" className="mt-1.5 h-11" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="mt-1.5 h-11" />
              </div>
              <div>
                <Label htmlFor="message">Что беспокоит? (необязательно)</Label>
                <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Опишите кратко..." className="mt-1.5 min-h-[100px]" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-[image:var(--gradient-hero)] hover:opacity-95 h-12 text-base">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </Card>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-secondary/40 py-20">
        <div className="container grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <MapPin className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-bold mb-1">Адрес</h3>
            <p className="text-muted-foreground text-sm">г. Москва, ул. Тверская, 15<br />м. Тверская / Пушкинская</p>
          </Card>
          <Card className="p-6">
            <Phone className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-bold mb-1">Телефон</h3>
            <a href="tel:+74951234567" className="text-muted-foreground text-sm hover:text-primary">+7 (495) 123-45-67</a>
            <p className="text-muted-foreground text-sm mt-1">WhatsApp · Telegram</p>
          </Card>
          <Card className="p-6">
            <Clock className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-bold mb-1">Часы работы</h3>
            <p className="text-muted-foreground text-sm">Пн–Пт: 9:00 — 21:00<br />Сб–Вс: 10:00 — 20:00</p>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Стоматология в Москве. Лицензия № ЛО-77-01-000000
        </div>
      </footer>
    </div>
  );
};

export default Index;
