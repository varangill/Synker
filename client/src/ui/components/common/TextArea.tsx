interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default";
  setCurrentInputText: (text: string) => void;
}

const TextArea = ({
  variant = "default",
  setCurrentInputText,
  rows = 1,
  ...props
}: TextAreaProps) => {
  const variantStyles: Record<string, string> = {
    default:
      "w-full text-white text-base p-2 bg-primary-200 overflow-hidden text-ellipsis break-words rounded-xl border-2 border-primary-100 outline-none",
  };

  const handleTextAreaBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setCurrentInputText(e.target.value);
  };

  return (
    <>
      <textarea
        className={` ${variantStyles[variant]}`}
        style={{ height: "auto", overflowY: "hidden" }}
        onBlur={handleTextAreaBlur}
        rows={rows}
        maxLength={150}
        autoFocus={true}
        autoCorrect="on"
        {...props}
      />
    </>
  );
};
export default TextArea;
