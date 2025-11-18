import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const Celulares = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 8999.00,
      image: "https://images.unsplash.com/photo-1592286927505-2c58c1e4e1c8?w=500",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra 512GB",
      price: 7499.00,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 3,
      name: "iPhone 15 128GB",
      price: 6499.00,
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500",
    },
    {
      id: 4,
      name: "Samsung Galaxy Z Fold 5",
      price: 9999.00,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
    },
    {
      id: 5,
      name: "Google Pixel 8 Pro",
      price: 5999.00,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 6,
      name: "Xiaomi 14 Pro",
      price: 4999.00,
      image: "https://images.unsplash.com/photo-1592286927505-2c58c1e4e1c8?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-12">
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Celulares
          </h1>
          <p className="text-lg text-muted-foreground">
            Os smartphones mais modernos e potentes do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} category="Celulares" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Celulares;
