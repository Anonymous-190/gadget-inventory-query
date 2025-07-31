interface CodeEditorProps {
  code: string;
  language: string;
}

const CodeEditor = ({ code, language }: CodeEditorProps) => {
  return (
    <div className="h-full bg-code-bg">
      <div className="p-4 border-b border-code-border bg-secondary">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">{language}</span>
          <div className="flex items-center space-x-2">
            <div className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded">
              Solution
            </div>
          </div>
        </div>
      </div>
      <div className="h-[calc(100%-57px)] overflow-auto">
        <pre className="p-3 md:p-4 text-xs md:text-sm text-foreground font-mono leading-relaxed">
          <code className="language-java break-words">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;