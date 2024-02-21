import { codeStyle } from "@/lib/blog-utils";
import React from "react";
import { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const CodeRenderer: Components["code"] = (props) => {
  // @ts-ignore
  const { node, inline, className, children, ...other } = props;

  const language = /language-(\w+)/.exec(className || "");

  return (
    <>
      {!inline && language ? (
        <div>
          <SyntaxHighlighter
            language={language[1]}
            CodeTag={"span" as any}
            // @ts-ignore
            style={codeStyle}
            showLineNumbers
            {...other}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code
          className={className}
          {...other}
        >
          {children}
        </code>
      )}
    </>
  );
};
