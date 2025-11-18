import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        {category && (
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            {category}
          </span>
        )}
        <h3 className="font-medium text-foreground line-clamp-2">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            R$ {price.toFixed(2)}
          </span>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Adicionar
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
