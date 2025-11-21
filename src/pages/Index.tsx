import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ProductCarousel from "@/components/ProductCarousel";
import { ShopifyProduct, storefrontApiRequest, STOREFRONT_QUERY } from "@/lib/shopify";

const Index = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_QUERY, { first: 50 });
        setProducts(data.data.products.edges);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container px-4 py-24 text-center">
          <p className="text-muted-foreground">Carregando produtos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center">
        <div className="container px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Promise Official
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa coleção exclusiva de camisas e tecnologia
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container px-4 py-12 space-y-12">
        {products.length === 0 ? (
          <div className="text-center py-24">
            <h2 className="text-2xl font-bold text-foreground mb-4">Nenhum produto encontrado</h2>
            <p className="text-muted-foreground">
              Comece criando produtos através do chat. Exemplo: "Crie uma camisa do Real Madrid por R$ 89,90"
            </p>
          </div>
        ) : (
          <>
            <ProductCarousel title="🔥 Lançamentos" products={products.slice(0, 10)} />
            <ProductCarousel title="📦 Todos os Produtos" products={products} />
          </>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Promise Official</h3>
              <p className="text-sm text-muted-foreground">
                Sua loja de camisas e tecnologia premium
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Camisas</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Camisas de Time</li>
                <li>Primeira Linha</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Tecnologia</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Celulares</li>
                <li>Acessórios</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Sobre Nós</li>
                <li>Suporte</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Promise Official. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
