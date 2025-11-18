import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const CamisasTime = () => {
  const products = [
    {
      id: 1,
      name: "Camisa Real Madrid Home 23/24",
      price: 299.90,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500",
    },
    {
      id: 2,
      name: "Camisa Barcelona Home 23/24",
      price: 289.90,
      image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=500",
    },
    {
      id: 3,
      name: "Camisa PSG Home 23/24",
      price: 279.90,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500",
    },
    {
      id: 4,
      name: "Camisa Bayern München Home 23/24",
      price: 289.90,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
    },
    {
      id: 5,
      name: "Camisa Manchester United Home 23/24",
      price: 299.90,
      image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=500",
    },
    {
      id: 6,
      name: "Camisa Juventus Home 23/24",
      price: 279.90,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-12">
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Camisas de Time
          </h1>
          <p className="text-lg text-muted-foreground">
            Camisas oficiais dos melhores times do mundo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} category="Camisas de Time" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CamisasTime;
