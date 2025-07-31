import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
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
  return (
    <div className="h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1">
        <PanelGroup direction="horizontal" className="md:flex hidden">
          <Panel defaultSize={50} minSize={30}>
            <ProblemStatement 
              title={problem.title}
              description={problem.description}
            />
          </Panel>
          
          <PanelResizeHandle className="w-1 bg-panel-border hover:bg-primary transition-colors cursor-col-resize" />
          
          <Panel defaultSize={50} minSize={30}>
            <CodeEditor 
              code={solution.code}
              language={solution.language}
            />
          </Panel>
        </PanelGroup>
        
        <PanelGroup direction="vertical" className="flex md:hidden">
          <Panel defaultSize={40} minSize={25}>
            <ProblemStatement 
              title={problem.title}
              description={problem.description}
            />
          </Panel>
          
          <PanelResizeHandle className="h-1 bg-panel-border hover:bg-primary transition-colors cursor-row-resize" />
          
          <Panel defaultSize={60} minSize={35}>
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