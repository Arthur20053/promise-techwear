import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const Carregadores = () => {
  const products = [
    {
      id: 1,
      name: "Carregador Rápido USB-C 65W",
      price: 149.90,
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
    },
    {
      id: 2,
      name: "Carregador Sem Fio 15W",
      price: 199.90,
      image: "https://images.unsplash.com/photo-1591290619762-c588e3ad443e?w=500",
    },
    {
      id: 3,
      name: "Carregador Portátil 20000mAh",
      price: 249.90,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
    },
    {
      id: 4,
      name: "Carregador Veicular 2 Portas",
      price: 89.90,
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-12">
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Carregadores
          </h1>
          <p className="text-lg text-muted-foreground">
            Carregadores rápidos e confiáveis para seus dispositivos
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

export default Carregadores;
