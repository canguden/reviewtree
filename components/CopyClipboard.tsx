import { useState, useEffect } from "react";

interface CopyClipboardProps {
  content: string;
}

export const CopyClipboard: React.FC<CopyClipboardProps> = ({ content }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCopied) {
      timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000); // change 3000 to the number of milliseconds you want the success message to remain visible
    }
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <div>
      <button onClick={handleCopy} className="focus:outline-none">
        {isCopied ? (
          <span className="text-green-700 duration-300">Copied!</span>
        ) : (
          <span className="active:translate-y-1 hover:cursor-pointer duration-300">
            Copy
          </span>
        )}
      </button>
    </div>
  );
};
