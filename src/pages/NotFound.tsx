import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-4">
          <div className="w-20 h-20 mx-auto gradient-primary rounded-full flex items-center justify-center">
            <Search className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>
            <h2 className="text-xl font-semibold text-foreground mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>
        
        <Button 
          onClick={() => window.location.href = "/"} 
          className="btn-primary flex items-center space-x-2"
        >
          <Home className="w-4 h-4" />
          <span>Return to Home</span>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
