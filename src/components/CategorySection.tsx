import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

interface CategorySectionProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const CategorySection = ({ title, description, image, href }: CategorySectionProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-300">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Link to={href}>
          <Button variant="outline" className="group/btn">
            Ver Produtos
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
