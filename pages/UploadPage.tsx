import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Uploader } from '../components/Uploader';
import { Loader2 } from 'lucide-react';
import { MOCK_MODELS } from '../constants';

export const UploadPage: React.FC = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedModel, setSelectedModel] = useState(MOCK_MODELS[0].id);

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    
    // Simulate network request / AI processing
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // In a real app, upload file, get ID back. Here we mock it.
    // We pass the file as a blob URL to the results page via state
    const objectUrl = URL.createObjectURL(file);
    
    setIsAnalyzing(false);
    navigate(`/results/demo-123`, { state: { imageUrl: objectUrl } });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Upload Radiograph</h1>
        <p className="text-slate-500 dark:text-slate-400">Upload a Bitewing or Periapical X-Ray for instant cavity analysis.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
            <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Inference Settings</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Select Model</label>
              <select 
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white border p-2.5 text-slate-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              >
                {MOCK_MODELS.map(m => (
                  <option key={m.id} value={m.id}>{m.name} ({m.accuracy})</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Sensitivity Threshold</label>
              <input type="range" className="w-full accent-teal-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer" />
              <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
                <span>Low</span>
                <span>Balanced</span>
                <span>High</span>
              </div>
            </div>

            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-lg border border-blue-100 dark:border-blue-800">
              <strong>Note:</strong> Higher sensitivity may result in more false positives.
            </div>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!file || isAnalyzing}
            className={`
              w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg
              ${!file || isAnalyzing 
                ? 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed' 
                : 'bg-teal-600 text-white hover:bg-teal-700 hover:-translate-y-1 shadow-teal-600/20'}
            `}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="animate-spin" /> Analyzing...
              </>
            ) : (
              'Run Analysis'
            )}
          </button>
        </div>

        {/* Right Column: Uploader */}
        <div className="lg:col-span-2">
            <Uploader onFileSelect={setFile} />
        </div>
      </div>
    </div>
  );
};