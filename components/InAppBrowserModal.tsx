import React from 'react';

interface InAppBrowserModalProps {
  url: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const InAppBrowserModal: React.FC<InAppBrowserModalProps> = ({
  url,
  title,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-space-black/90 backdrop-blur-md p-4 md:p-8 animate-fade-in">
      <div className="bg-space-black border-2 border-light-blue rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl relative">
        {/* Browser Top Bar */}
        <div className="bg-deep-purple/90 border-b border-light-blue/30 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <button 
                onClick={onClose} 
                className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity"
                title="Close"
              />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="font-orbitron font-bold text-xs text-star-white ml-3 truncate max-w-md">
              {title}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center bg-space-black/80 px-3 py-1 rounded-lg border border-light-blue/20 text-[10px] font-mono text-star-white/70 max-w-sm truncate">
              🔒 {url}
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-orbitron bg-light-blue/20 hover:bg-light-blue text-light-blue hover:text-space-black px-3 py-1 rounded transition-colors border border-light-blue/40"
            >
              Open in New Tab ↗
            </a>
            <button
              onClick={onClose}
              className="text-star-white/70 hover:text-star-white font-bold px-2 py-1 text-sm font-mono"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Iframe View */}
        <div className="flex-1 relative bg-space-black">
          <iframe
            src={url}
            title={title}
            className="w-full h-full border-0 bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
          <div className="absolute bottom-4 right-4 bg-space-black/90 backdrop-blur-md border border-light-blue/30 px-4 py-2 rounded-xl text-[10px] font-mono text-star-white/80 pointer-events-none shadow-lg">
            ⚡ Running securely in in-app iframe
          </div>
        </div>
      </div>
    </div>
  );
};
