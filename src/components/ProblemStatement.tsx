interface ProblemStatementProps {
  title: string;
  description: string;
}

const ProblemStatement = ({ title, description }: ProblemStatementProps) => {
  return (
    <div className="h-full bg-problem-bg border-r border-panel-border">
      <div className="p-6 border-b border-panel-border">
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      </div>
      <div className="p-6 overflow-auto h-[calc(100%-73px)]">
        <div className="prose prose-invert max-w-none">
          <div className="text-foreground text-sm leading-relaxed whitespace-pre-wrap">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;