import React, { useState, useEffect, useRef } from 'react';
import { Upload, CheckCircle2, Image as ImageIcon } from 'lucide-react';

export const LogoManager: React.FC = () => {
  const [hasLogo, setHasLogo] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showNotification, setShowNotification] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 1. Check if logo is in localStorage
    const saved = localStorage.getItem('tsi_custom_logo');
    if (saved) {
      setHasLogo(true);
    } else {
      // 2. Check if /logo-tsi.png exists on server
      fetch('/api/logo-status')
        .then((res) => res.json())
        .then((data) => {
          if (data.exists) {
            setHasLogo(true);
          }
        })
        .catch(() => {});
    }

    // Global drag & drop
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer && e.dataTransfer.types.includes('Files')) {
        setIsDragging(true);
      }
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
          uploadFile(file);
        }
      }
    };

    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleDrop);

    return () => {
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleDrop);
    };
  }, []);

  const uploadFile = (file: File) => {
    setIsProcessing(true);
    const reader = new FileReader();

    reader.onload = async (e) => {
      const base64Data = e.target?.result as string;
      if (!base64Data) {
        setIsProcessing(false);
        return;
      }

      // Store in browser storage
      localStorage.setItem('tsi_custom_logo', base64Data);
      window.dispatchEvent(new CustomEvent('tsi_logo_updated', { detail: base64Data }));
      setHasLogo(true);

      // Save to server disk (public/logo-tsi.png and dist/logo-tsi.png)
      try {
        await fetch('/api/upload-logo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ base64Data, filename: 'logo-tsi.png' }),
        });
      } catch (err) {
        console.warn('Could not persist to server:', err);
      }

      setIsProcessing(false);
      setShowNotification(`Arquivo "${file.name}" aplicado com sucesso em toda a plataforma!`);
      setTimeout(() => setShowNotification(null), 6000);
    };

    reader.onerror = () => {
      setIsProcessing(false);
      alert('Erro ao ler o arquivo de imagem.');
    };

    reader.readAsDataURL(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadFile(e.target.files[0]);
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleInputChange}
        accept="image/png,image/jpeg,image/svg+xml,image/webp"
        className="hidden"
        aria-label="Upload logo-tsi.png"
      />

      {/* Drag & Drop Full-screen Overlay */}
      {isDragging && (
        <div className="fixed inset-0 z-50 bg-[#081726]/90 border-4 border-dashed border-sky-400 flex flex-col items-center justify-center p-6 text-white backdrop-blur-sm animate-in fade-in duration-200">
          <Upload className="w-16 h-16 text-sky-400 animate-bounce mb-4" />
          <h2 className="text-2xl font-bold mb-2">Solte o arquivo logo-tsi.png aqui</h2>
          <p className="text-slate-300 text-center max-w-md text-sm">
            O arquivo original será aplicado exatamente como você enviou em todo o site.
          </p>
        </div>
      )}

      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-24 right-6 z-50 max-w-md bg-emerald-950/95 border border-emerald-500/50 text-emerald-100 p-4 rounded-xl shadow-2xl backdrop-blur-md flex items-start space-x-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="font-bold text-white mb-1">Logo Oficial Aplicada!</p>
            <p className="text-emerald-200 leading-relaxed">{showNotification}</p>
          </div>
        </div>
      )}

      {/* Quick Action Button for Uploading the Exact File */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isProcessing}
          className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg shadow-lg border text-xs font-semibold transition-all hover:scale-105 active:scale-95 ${
            hasLogo
              ? 'bg-white/95 hover:bg-white text-slate-700 border-slate-200'
              : 'bg-sky-600 hover:bg-sky-500 text-white border-sky-400 animate-pulse'
          }`}
          title="Clique para selecionar o arquivo logo-tsi.png no seu computador"
        >
          {hasLogo ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Logo Oficial Ativa</span>
            </>
          ) : (
            <>
              <Upload className="w-4 h-4 text-white" />
              <span>Subir arquivo logo-tsi.png</span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
