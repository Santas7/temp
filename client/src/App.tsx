import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import Home from "@/pages/home";
import Portfolio from "@/pages/portfolio";
import Vacancies from "@/pages/vacancies";
import NotFound from "@/pages/not-found";

import { Router as WouterRouter } from "wouter";

function Router() {
  return (
    <WouterRouter base="/">
    <div className="min-h-screen">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/vacancies" component={Vacancies} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <ScrollToTop />
    </div></WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
