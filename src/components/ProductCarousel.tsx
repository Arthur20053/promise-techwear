import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

const ProductCarousel = ({ title, products }: ProductCarouselProps) => {
  return (
    <section className="py-12">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          {title}
        </h2>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-4 pb-4">
            {products.map((product) => (
              <div key={product.id} className="w-[280px] flex-shrink-0">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default ProductCarousel;
