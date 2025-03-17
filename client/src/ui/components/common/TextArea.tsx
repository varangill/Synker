import { useEffect, useRef } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "fill" | "messageBox";
  maxHeight?: number;
  className?: string;
  currentInputText: string;
  setCurrentInputText: (text: string) => void;
  onSubmit?: () => void;
}

const TextArea = ({
  variant = "default",
  className = "",
  rows = 1,
  maxHeight = 1,
  currentInputText,
  setCurrentInputText,
  onSubmit,
  ...props
}: TextAreaProps) => {
  const LINE_HEIGHT = 24;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentInputText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (onSubmit) {
        onSubmit();
        setCurrentInputText("");
      }
    }
  };

  useEffect(() => {
    if (!textAreaRef.current) return;
    textAreaRef.current.style.height = "auto";
    const scrollHeight = textAreaRef.current.scrollHeight;

    if (scrollHeight <= maxHeight * LINE_HEIGHT) {
      textAreaRef.current.style.height = `${scrollHeight}px`;
      textAreaRef.current.style.overflowY = "hidden";
    } else {
      textAreaRef.current.style.height = `${maxHeight * LINE_HEIGHT}px`;
      textAreaRef.current.style.overflowY = "auto";
    }
  }, [currentInputText, maxHeight]);

  return (
    <textarea
      ref={textAreaRef}
      value={currentInputText}
      className={`resize-none overflow-y-auto ${variantStyles[variant]} ${className}`}
      rows={rows}
      onChange={handleInput}
      onKeyDown={handleKeyDown}
      autoFocus={true}
      autoCorrect="on"
      {...props}
    />
  );
};

const variantStyles: Record<string, string> = {
  default:
    "w-full text-white text-base p-2 bg-primary-200 overflow-hidden text-ellipsis break-words rounded-xl border-2 border-primary-100 outline-none",
  fill: "w-full text-white text-base p-2 bg-primary-100 overflow-hidden text-ellipsis break-words rounded-xl border-2 border-primary-100 outline-none",
  messageBox:
    "w-full text-white text-base p-2 bg-primary-200 overflow-hidden text-ellipsis break-words rounded-xl border-2 border-primary-100 outline-none",
};

export default TextArea;
