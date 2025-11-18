import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const Capinhas = () => {
  const products = [
    {
      id: 1,
      name: "Capinha Premium iPhone 15 Pro",
      price: 129.90,
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500",
    },
    {
      id: 2,
      name: "Capinha MagSafe iPhone 15",
      price: 179.90,
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500",
    },
    {
      id: 3,
      name: "Capinha Samsung S24 Ultra",
      price: 119.90,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500",
    },
    {
      id: 4,
      name: "Capinha Transparente Universal",
      price: 59.90,
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-12">
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Capinhas de Celular
          </h1>
          <p className="text-lg text-muted-foreground">
            Proteção com estilo para seu smartphone
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

export default Capinhas;
