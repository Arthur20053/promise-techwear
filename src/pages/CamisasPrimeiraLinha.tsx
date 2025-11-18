import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const CamisasPrimeiraLinha = () => {
  const products = [
    {
      id: 1,
      name: "Camisa Premium Collection Blue",
      price: 349.90,
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500",
    },
    {
      id: 2,
      name: "Camisa Premium Collection Black",
      price: 349.90,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
    {
      id: 3,
      name: "Camisa Premium Collection White",
      price: 329.90,
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
    },
    {
      id: 4,
      name: "Camisa Premium Collection Gray",
      price: 339.90,
      image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-12">
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Camisas Primeira Linha
          </h1>
          <p className="text-lg text-muted-foreground">
            Camisas premium de alta qualidade para o seu dia a dia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} category="Primeira Linha" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CamisasPrimeiraLinha;
