import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const Cabos = () => {
  const products = [
    {
      id: 1,
      name: "Cabo USB-C para Lightning 2m",
      price: 89.90,
      image: "https://images.unsplash.com/photo-1591290619762-c588e3ad443e?w=500",
    },
    {
      id: 2,
      name: "Cabo USB-C para USB-C 1.5m",
      price: 79.90,
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500",
    },
    {
      id: 3,
      name: "Cabo Micro USB 1m",
      price: 39.90,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    },
    {
      id: 4,
      name: "Cabo Magnético 3 em 1",
      price: 119.90,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-12">
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Cabos
          </h1>
          <p className="text-lg text-muted-foreground">
            Cabos de alta qualidade e durabilidade
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

export default Cabos;
