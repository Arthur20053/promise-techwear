import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = () => {
    const firstVariant = product.node.variants.edges[0]?.node;
    if (!firstVariant) return;

    addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions
    });

    toast.success("Produto adicionado", {
      description: `${product.node.title} foi adicionado ao carrinho`,
    });
  };

  const imageUrl = product.node.images.edges[0]?.node.url;
  const price = parseFloat(product.node.priceRange.minVariantPrice.amount);
  const currency = product.node.priceRange.minVariantPrice.currencyCode;

  return (
    <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-muted">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={product.node.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-muted">
            <span className="text-muted-foreground">Sem imagem</span>
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-medium text-foreground line-clamp-2">{product.node.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {currency} {price.toFixed(2)}
          </span>
          <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={handleAddToCart}>
            Adicionar
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
