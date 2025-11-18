import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const Fones = () => {
  const products = [
    {
      id: 1,
      name: "AirPods Pro 2ª Geração",
      price: 2199.00,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
    },
    {
      id: 2,
      name: "Samsung Galaxy Buds 2 Pro",
      price: 1299.00,
      image: "https://images.unsplash.com/photo-1590658165737-15a047b7a09e?w=500",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      price: 2499.00,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    },
    {
      id: 4,
      name: "JBL Tune 760NC",
      price: 799.00,
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-12">
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Fones de Ouvido
          </h1>
          <p className="text-lg text-muted-foreground">
            Áudio de alta qualidade para sua experiência musical
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} category="Acessórios" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fones;
