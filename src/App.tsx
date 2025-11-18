import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CamisasTime from "./pages/CamisasTime";
import CamisasPrimeiraLinha from "./pages/CamisasPrimeiraLinha";
import Celulares from "./pages/Celulares";
import Carregadores from "./pages/Carregadores";
import Capinhas from "./pages/Capinhas";
import Cabos from "./pages/Cabos";
import Fones from "./pages/Fones";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/camisas-time" element={<CamisasTime />} />
          <Route path="/camisas-primeira-linha" element={<CamisasPrimeiraLinha />} />
          <Route path="/celulares" element={<Celulares />} />
          <Route path="/acessorios/carregadores" element={<Carregadores />} />
          <Route path="/acessorios/capinhas" element={<Capinhas />} />
          <Route path="/acessorios/cabos" element={<Cabos />} />
          <Route path="/acessorios/fones" element={<Fones />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
