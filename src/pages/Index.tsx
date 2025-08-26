import { useState } from "react";
import Header from "@/components/Header";
import InputPanel from "@/components/InputPanel";
import ResponsePanel from "@/components/ResponsePanel";

interface Source {
  id: string;
  title: string;
  snippet: string;
  url: string;
  type: "document" | "web";
}

const Index = () => {
  const [response, setResponse] = useState<string>();
  const [sources, setSources] = useState<Source[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (query: string, isVoice: boolean) => {
    setIsLoading(true);
    setResponse("");
    setSources([]);

    // Simulate API call
    setTimeout(() => {
      // Mock response
      setResponse(
        `Based on your question about ${query.toLowerCase()}, here's what I found:\n\nThis is a comprehensive analysis drawing from our agricultural knowledge base and recent research. The information combines both historical data from our FAISS vector store and current web insights from Tavily search.\n\nKey recommendations:\n• Consider soil composition and pH levels\n• Monitor weather patterns for optimal timing\n• Implement sustainable farming practices\n• Regular monitoring and adjustment protocols\n\nWould you like me to elaborate on any specific aspect of this response?`
      );

      // Mock sources
      setSources([
        {
          id: "1",
          title: "Agricultural Best Practices for Sustainable Farming",
          snippet: "Comprehensive guide covering soil management, crop rotation, and sustainable farming techniques for modern agriculture.",
          url: "https://example.com/agricultural-practices",
          type: "document"
        },
        {
          id: "2",
          title: "Recent Research on Climate-Smart Agriculture",
          snippet: "Latest findings on how climate change affects agricultural practices and recommendations for adaptation strategies.",
          url: "https://example.com/climate-agriculture",
          type: "web"
        },
        {
          id: "3",
          title: "Soil Health and Crop Productivity Guidelines",
          snippet: "Detailed analysis of soil health indicators and their direct impact on crop yield and quality metrics.",
          url: "https://example.com/soil-health",
          type: "document"
        }
      ]);

      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Panel */}
          <div className="space-y-6">
            <InputPanel onSubmit={handleSubmit} isLoading={isLoading} />
          </div>

          {/* Response Panel */}
          <div className="space-y-6">
            <ResponsePanel
              response={response}
              sources={sources}
              isLoading={isLoading}
              hasAudio={!!response}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Agri AI Assistant. Powered by LLaMA + FAISS + Tavily
            </p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;