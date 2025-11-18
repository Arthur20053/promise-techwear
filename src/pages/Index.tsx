import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Camisa Real Madrid Home 23/24",
      price: 299.90,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500",
      category: "Camisas de Time",
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max 256GB",
      price: 8999.00,
      image: "https://images.unsplash.com/photo-1592286927505-2c58c1e4e1c8?w=500",
      category: "Celulares",
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
      name: "Camisa Barcelona Home 23/24",
      price: 289.90,
      image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=500",
      category: "Camisas de Time",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920"
            alt="Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        </div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Promise Official
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Camisas premium e tecnologia de qualidade em um só lugar
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Ver Produtos
              </Button>
              <Button size="lg" variant="outline">
                Categorias
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container px-4 py-16">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nossas Categorias
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore nossa seleção de produtos premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategorySection
            title="Camisas de Time"
            description="Camisas oficiais dos melhores times do mundo"
            image="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800"
            href="/camisas-time"
          />
          <CategorySection
            title="Primeira Linha"
            description="Camisas premium de alta qualidade"
            image="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800"
            href="/camisas-primeira-linha"
          />
          <CategorySection
            title="Celulares"
            description="Os smartphones mais modernos do mercado"
            image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
            href="/celulares"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 py-16 bg-muted/30">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Produtos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira os produtos mais vendidos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

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
