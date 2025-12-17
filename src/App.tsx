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
import OdontoDentaria from "./pages/OdontoDentaria";
import Podologia from "./pages/Podologia";
import EsmalteriaNails from "./pages/EsmalteriaNails";
import Diversos from "./pages/Diversos";
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
          <Route path="/odonto-dentaria" element={<OdontoDentaria />} />
          <Route path="/podologia" element={<Podologia />} />
          <Route path="/esmalteria-nails" element={<EsmalteriaNails />} />
          <Route path="/diversos" element={<Diversos />} />
          
          {/* English routes */}
          <Route path="/en" element={<Index />} />
          <Route path="/en/institucional" element={<Institucional />} />
          <Route path="/en/produtos" element={<Produtos />} />
          <Route path="/en/contato" element={<Contato />} />
          <Route path="/en/brilho-nails" element={<BrilhoNails />} />
          <Route path="/en/odonto-dentaria" element={<OdontoDentaria />} />
          <Route path="/en/podologia" element={<Podologia />} />
          <Route path="/en/esmalteria-nails" element={<EsmalteriaNails />} />
          <Route path="/en/diversos" element={<Diversos />} />
          
          {/* Chinese routes */}
          <Route path="/zh" element={<Index />} />
          <Route path="/zh/institucional" element={<Institucional />} />
          <Route path="/zh/produtos" element={<Produtos />} />
          <Route path="/zh/contato" element={<Contato />} />
          <Route path="/zh/brilho-nails" element={<BrilhoNails />} />
          <Route path="/zh/odonto-dentaria" element={<OdontoDentaria />} />
          <Route path="/zh/podologia" element={<Podologia />} />
          <Route path="/zh/esmalteria-nails" element={<EsmalteriaNails />} />
          <Route path="/zh/diversos" element={<Diversos />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;