import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Institucional from "./pages/Institucional";
import Produtos from "./pages/Produtos";
import ProductCategory from "./pages/ProductCategory";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const productCategories = [
  "brocas-diamantadas",
  "linha-gold",
  "fresas-tungstenio",
  "fresas-ceramica",
  "lixas-sandpaper",
  "lixas-boomerang",
  "lixa-tubular-adesiva",
  "polidoras",
  "escovas-limpeza",
  "fibras-enucleadora-mandril",
  "apoio-lixas-afiacao",
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Portuguese routes (default) */}
          <Route path="/" element={<Index />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/produtos" element={<Produtos />} />
          {productCategories.map((cat) => (
            <Route key={cat} path={`/produtos/${cat}`} element={<ProductCategory />} />
          ))}
          <Route path="/contato" element={<Contato />} />
          
          {/* English routes */}
          <Route path="/en" element={<Index />} />
          <Route path="/en/institucional" element={<Institucional />} />
          <Route path="/en/produtos" element={<Produtos />} />
          {productCategories.map((cat) => (
            <Route key={`en-${cat}`} path={`/en/produtos/${cat}`} element={<ProductCategory />} />
          ))}
          <Route path="/en/contato" element={<Contato />} />
          
          {/* Spanish routes */}
          <Route path="/es" element={<Index />} />
          <Route path="/es/institucional" element={<Institucional />} />
          <Route path="/es/produtos" element={<Produtos />} />
          {productCategories.map((cat) => (
            <Route key={`es-${cat}`} path={`/es/produtos/${cat}`} element={<ProductCategory />} />
          ))}
          <Route path="/es/contato" element={<Contato />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;