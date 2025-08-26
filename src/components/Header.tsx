import { Search, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">
                Agri AI Assistant
              </h1>
              <p className="text-xs text-muted-foreground">
                Powered by LLaMA + FAISS + Tavily
              </p>
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Dashboard
          </a>
          <a 
            href="#" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            History
          </a>
          <a 
            href="#" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sources
          </a>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;