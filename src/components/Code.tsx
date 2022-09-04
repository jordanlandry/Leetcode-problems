import React from "react";
import nextId from "react-id-generator";

type Props = { text: string };

export default function Code({ text }: Props) {
  const keywords = ["function", "const", "let"];

  const operators = [
    "-",
    "+",
    "===",
    "==",
    "=",
    "*",
    "/",
    "of",
    "||",
    "|",
    ">",
    "<",
    "<=",
    ">=",
  ];
  const features = [
    "?",
    ":",
    "for",
    "while",
    "if",
    "continue",
    "return",
    "return;",
    "continue;",
    "else",
  ];

  const content = [];
  let currentLine = "";

  let prevWord = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "\n") {
      // Check for keywords

      let words = currentLine.split(" ");
      let className = "";

      let prevWord = "";
      // Check for keywords
      for (const word of words) {
        className = keywords.includes(word)
          ? "code--keyword"
          : operators.includes(word)
          ? "code--operators"
          : features.includes(word)
          ? "code--features"
          : prevWord === "const" ||
            prevWord === "let" ||
            prevWord === "var" ||
            prevWord === "function" ||
            prevWord === "class" ||
            prevWord === "(const" ||
            prevWord === "(let" ||
            prevWord === "(var" ||
            prevWord === "of"
          ? "code--variables"
          : word[0] === "/" && word[1] === "/"
          ? "code--comments"
          : "";

        content.push(
          <span key={nextId()} className={`code--line ${className}`}>
            {word}
          </span>
        );
        prevWord = word;
      }
      content.push(<br key={nextId()} />);
      currentLine = "";
    }

    currentLine += text[i];
  }

  return <div className="code--wrapper">{content}</div>;
}
