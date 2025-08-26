import { ExternalLink, FileText, Globe } from "lucide-react";

interface Source {
  id: string;
  title: string;
  snippet: string;
  url: string;
  type: "document" | "web";
}

interface SourceCardProps {
  source: Source;
}

const SourceCard = ({ source }: SourceCardProps) => {
  const handleSourceClick = () => {
    window.open(source.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleSourceClick}
      className="card-interactive p-4 group"
    >
      <div className="flex items-start space-x-3">
        <div className={`
          w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
          ${source.type === "document" 
            ? "bg-primary-light text-primary" 
            : "bg-accent text-accent-foreground"
          }
        `}>
          {source.type === "document" ? (
            <FileText className="w-4 h-4" />
          ) : (
            <Globe className="w-4 h-4" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <h4 className="font-medium text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
              {source.title}
            </h4>
            <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {source.snippet}
          </p>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground truncate">
              {new URL(source.url).hostname}
            </span>
            <span className={`
              text-xs px-2 py-0.5 rounded-full
              ${source.type === "document" 
                ? "bg-primary-light text-primary" 
                : "bg-accent text-accent-foreground"
              }
            `}>
              {source.type === "document" ? "FAISS" : "Tavily"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceCard;