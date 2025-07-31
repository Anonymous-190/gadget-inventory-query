import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useState, useEffect } from "react";
import ProblemStatement from "./ProblemStatement";
import CodeEditor from "./CodeEditor";
import Navbar from "./Navbar";

interface CodingInterfaceProps {
  problem: {
    title: string;
    description: string;
  };
  solution: {
    code: string;
    language: string;
  };
}

const CodingInterface = ({ problem, solution }: CodingInterfaceProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1">
        <PanelGroup direction={isMobile ? "vertical" : "horizontal"}>
          <Panel defaultSize={isMobile ? 40 : 50} minSize={isMobile ? 25 : 30}>
            <ProblemStatement 
              title={problem.title}
              description={problem.description}
            />
          </Panel>
          
          <PanelResizeHandle 
            className={`${
              isMobile 
                ? "h-1 bg-panel-border hover:bg-primary transition-colors cursor-row-resize" 
                : "w-1 bg-panel-border hover:bg-primary transition-colors cursor-col-resize"
            }`} 
          />
          
          <Panel defaultSize={isMobile ? 60 : 50} minSize={isMobile ? 35 : 30}>
            <CodeEditor 
              code={solution.code}
              language={solution.language}
            />
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default CodingInterface;