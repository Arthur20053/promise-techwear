import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import ProductCard from "./ProductCard";
import { ShopifyProduct } from "@/lib/shopify";

interface ProductCarouselProps {
  title: string;
  products: ShopifyProduct[];
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
              <div key={product.node.id} className="w-[280px] flex-shrink-0">
                <ProductCard product={product} />
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
