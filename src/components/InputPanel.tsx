import { useState } from "react";
import { Mic, Send, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface InputPanelProps {
  onSubmit: (query: string, isVoice: boolean) => void;
  isLoading: boolean;
}

const InputPanel = ({ onSubmit, isLoading }: InputPanelProps) => {
  const [query, setQuery] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSubmit(query.trim(), false);
      setQuery("");
    }
  };

  const handleVoiceInput = () => {
    if (isRecording) {
      setIsRecording(false);
      // Stop recording logic would go here
    } else {
      setIsRecording(true);
      // Start recording logic would go here
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <Card className="card-elevated p-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Ask Your Question
          </h2>
          <p className="text-sm text-muted-foreground">
            Type your agricultural question or use voice input for assistance.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about crops, soil management, pests, weather patterns..."
              className="input-primary min-h-[120px] resize-none pr-12"
              disabled={isLoading}
            />
            <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
              {query.length}/500
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={handleVoiceInput}
              disabled={isLoading}
              className={`
                flex items-center space-x-2 transition-all duration-200
                ${isRecording 
                  ? "bg-destructive text-destructive-foreground border-destructive hover:bg-destructive/90" 
                  : "hover:bg-accent"
                }
              `}
            >
              {isRecording ? (
                <>
                  <Square className="w-4 h-4" />
                  <span>Stop Recording</span>
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4" />
                  <span>Voice Input</span>
                </>
              )}
            </Button>
            
            <Button
              type="submit"
              disabled={!query.trim() || isLoading}
              className="btn-primary flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>{isLoading ? "Processing..." : "Send"}</span>
            </Button>
          </div>
        </form>
        
        {isRecording && (
          <div className="flex items-center space-x-2 text-sm text-destructive animate-pulse">
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
            <span>Recording... Speak clearly into your microphone</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default InputPanel;