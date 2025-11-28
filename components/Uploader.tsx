import React, { useCallback, useState } from 'react';
import { UploadCloud, Image as ImageIcon, X } from 'lucide-react';

interface UploaderProps {
  onFileSelect: (file: File) => void;
}

export const Uploader: React.FC<UploaderProps> = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert("Please upload an image file.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    onFileSelect(file);
  };

  const clearFile = () => {
    setPreview(null);
  };

  if (preview) {
    return (
      <div className="w-full h-96 bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden relative group shadow-inner">
        <img src={preview} alt="Preview" className="w-full h-full object-contain" />
        <div className="absolute top-4 right-4">
          <button 
            onClick={clearFile}
            className="bg-white dark:bg-slate-700 p-2 rounded-full shadow-lg hover:bg-red-50 dark:hover:bg-red-900/30 text-slate-600 dark:text-slate-200 hover:text-red-500 transition-all"
          >
            <X size={20} />
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-sm font-medium text-slate-600 dark:text-slate-300">
          Ready for analysis
        </div>
      </div>
    );
  }

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`
        w-full h-96 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-all duration-300 cursor-pointer
        ${isDragging 
          ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20 scale-[1.01]' 
          : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-teal-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'}
      `}
    >
      <input
        type="file"
        id="file-upload"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
      />
      <label htmlFor="file-upload" className="flex flex-col items-center cursor-pointer w-full h-full justify-center">
        <div className={`p-4 rounded-full mb-4 transition-colors ${isDragging ? 'bg-teal-100 text-teal-600' : 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-300'}`}>
          <UploadCloud size={48} />
        </div>
        <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2">
          {isDragging ? 'Drop X-Ray here' : 'Drag & Drop X-Ray'}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 text-center max-w-xs">
          Supports JPG, PNG, DICOM (converted). Optimized for bitewing and periapical views.
        </p>
        <span className="px-5 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-200 font-medium shadow-sm hover:shadow hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all">
          Browse Files
        </span>
      </label>
    </div>
  );
};