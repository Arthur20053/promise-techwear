import Header from "@/components/Header";
import ProductCarousel from "@/components/ProductCarousel";
import { Button } from "@/components/ui/button";

const Index = () => {
  const newArrivals = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 8999.00,
      image: "https://images.unsplash.com/photo-1592286927505-2c58c1e4e1c8?w=500",
      category: "Celulares",
    },
    {
      id: 2,
      name: "Camisa Real Madrid Home 24/25",
      price: 299.90,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500",
      category: "Camisas de Time",
    },
    {
      id: 3,
      name: "AirPods Pro 2ª Geração",
      price: 2199.00,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
      category: "Acessórios",
    },
    {
      id: 4,
      name: "Samsung Galaxy S24 Ultra",
      price: 7499.00,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      category: "Celulares",
    },
    {
      id: 5,
      name: "Camisa Barcelona Home 24/25",
      price: 289.90,
      image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=500",
      category: "Camisas de Time",
    },
  ];

  const teamShirts = [
    {
      id: 6,
      name: "Camisa Real Madrid Home 24/25",
      price: 299.90,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500",
      category: "Camisas de Time",
    },
    {
      id: 7,
      name: "Camisa Barcelona Away 24/25",
      price: 289.90,
      image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=500",
      category: "Camisas de Time",
    },
    {
      id: 8,
      name: "Camisa PSG Home 24/25",
      price: 279.90,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500",
      category: "Camisas de Time",
    },
    {
      id: 9,
      name: "Camisa Liverpool Home 24/25",
      price: 269.90,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500",
      category: "Camisas de Time",
    },
    {
      id: 10,
      name: "Camisa Manchester City 24/25",
      price: 259.90,
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500",
      category: "Camisas de Time",
    },
  ];

  const premiumShirts = [
    {
      id: 11,
      name: "Camisa Premium Brasil",
      price: 349.90,
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500",
      category: "Primeira Linha",
    },
    {
      id: 12,
      name: "Camisa Premium Argentina",
      price: 339.90,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500",
      category: "Primeira Linha",
    },
    {
      id: 13,
      name: "Camisa Premium França",
      price: 359.90,
      image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=500",
      category: "Primeira Linha",
    },
    {
      id: 14,
      name: "Camisa Premium Alemanha",
      price: 329.90,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500",
      category: "Primeira Linha",
    },
  ];

  const phones = [
    {
      id: 15,
      name: "iPhone 15 Pro Max 512GB",
      price: 9999.00,
      image: "https://images.unsplash.com/photo-1592286927505-2c58c1e4e1c8?w=500",
      category: "Celulares",
    },
    {
      id: 16,
      name: "Samsung Galaxy S24 Ultra",
      price: 7499.00,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      category: "Celulares",
    },
    {
      id: 17,
      name: "iPhone 14 Pro 256GB",
      price: 6999.00,
      image: "https://images.unsplash.com/photo-1592286927505-2c58c1e4e1c8?w=500",
      category: "Celulares",
    },
    {
      id: 18,
      name: "Samsung Galaxy Z Fold 5",
      price: 8999.00,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      category: "Celulares",
    },
  ];

  const accessories = [
    {
      id: 19,
      name: "AirPods Pro 2ª Geração",
      price: 2199.00,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
      category: "Acessórios",
    },
    {
      id: 20,
      name: "Carregador Rápido 65W",
      price: 149.90,
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
      category: "Acessórios",
    },
    {
      id: 21,
      name: "Capinha iPhone Pro Max",
      price: 89.90,
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500",
      category: "Acessórios",
    },
    {
      id: 22,
      name: "Cabo USB-C Premium 2m",
      price: 79.90,
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500",
      category: "Acessórios",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920"
            alt="Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Promise Official
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Camisas premium e tecnologia de qualidade em um só lugar
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Ver Produtos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousels */}
      <ProductCarousel title="🔥 Lançamentos" products={newArrivals} />
      <div className="bg-muted/30">
        <ProductCarousel title="⚽ Camisas de Time" products={teamShirts} />
      </div>
      <ProductCarousel title="👕 Primeira Linha" products={premiumShirts} />
      <div className="bg-muted/30">
        <ProductCarousel title="📱 Celulares" products={phones} />
      </div>
      <ProductCarousel title="🎧 Acessórios" products={accessories} />

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Promise Official</h3>
              <p className="text-sm text-muted-foreground">
                Sua loja de camisas e tecnologia premium
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Camisas</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Camisas de Time</li>
                <li>Primeira Linha</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Tecnologia</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Celulares</li>
                <li>Acessórios</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Sobre Nós</li>
                <li>Suporte</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Promise Official. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
