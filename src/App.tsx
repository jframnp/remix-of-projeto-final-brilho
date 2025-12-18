import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Institucional from "./pages/Institucional";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import BrilhoNails from "./pages/BrilhoNails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
          <Route path="/contato" element={<Contato />} />
          <Route path="/brilho-nails" element={<BrilhoNails />} />
          
          {/* English routes */}
          <Route path="/en" element={<Index />} />
          <Route path="/en/institucional" element={<Institucional />} />
          <Route path="/en/produtos" element={<Produtos />} />
          <Route path="/en/contato" element={<Contato />} />
          <Route path="/en/brilho-nails" element={<BrilhoNails />} />
          
          {/* Chinese routes */}
          <Route path="/zh" element={<Index />} />
          <Route path="/zh/institucional" element={<Institucional />} />
          <Route path="/zh/produtos" element={<Produtos />} />
          <Route path="/zh/contato" element={<Contato />} />
          <Route path="/zh/brilho-nails" element={<BrilhoNails />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;