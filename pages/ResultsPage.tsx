import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ImageCanvasViewer } from '../components/ImageCanvasViewer';
import { Detection } from '../types';
import { AlertCircle, CheckCircle, Download, Share2 } from 'lucide-react';

const MOCK_DETECTIONS: Detection[] = [
  { id: 'd1', label: 'Caries', confidence: 0.94, box: { x: 0.35, y: 0.4, w: 0.1, h: 0.15 }, severity: 'High' },
  { id: 'd2', label: 'Early Caries', confidence: 0.76, box: { x: 0.6, y: 0.3, w: 0.08, h: 0.1 }, severity: 'Medium' },
];

export const ResultsPage: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { imageUrl?: string };
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (state?.imageUrl) {
      setImageUrl(state.imageUrl);
    } else {
      // Fallback if accessed directly without state (simulate history view)
      setImageUrl('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');
    }
  }, [state]);

  if (!imageUrl) return <div>Loading...</div>;

  return (
    <div className="h-[calc(100vh-64px)] overflow-hidden flex flex-col md:flex-row bg-slate-50 dark:bg-slate-950">
      
      {/* Left: Canvas Area */}
      <div className="flex-grow bg-slate-900 dark:bg-black p-4 md:p-8 flex items-center justify-center relative">
        <div className="w-full h-full max-w-4xl max-h-full">
            <ImageCanvasViewer imageUrl={imageUrl} detections={MOCK_DETECTIONS} />
        </div>
        
        {/* Floating Toolbar on Canvas */}
        <div className="absolute top-6 left-6 flex space-x-2">
           <div className="bg-black/50 backdrop-blur text-white px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10">
              ID: {id}
           </div>
           <div className="bg-black/50 backdrop-blur text-teal-400 px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10">
              Model: YOLOv8
           </div>
        </div>
      </div>

      {/* Right: Sidebar Panel */}
      <div className="w-full md:w-96 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-xl z-10 transition-colors duration-300">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
             <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">Analysis Results</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">October 24, 2024</p>
             </div>
             <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-3 py-1 rounded-full text-xs font-bold border border-red-100 dark:border-red-900/30">
                2 Issues
             </div>
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">
               <Download size={16} /> Export
            </button>
             <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">
               <Share2 size={16} /> Share
            </button>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Detections</h3>
          {MOCK_DETECTIONS.map((det) => (
            <div key={det.id} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-teal-200 dark:hover:border-teal-800 transition-colors group cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-800 dark:text-white">{det.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    det.severity === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}>
                    {det.severity}
                </span>
              </div>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 gap-2">
                  <div className="flex-grow bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                      <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: `${det.confidence * 100}%`}}></div>
                  </div>
                  <span className="text-xs font-mono">{Math.round(det.confidence * 100)}%</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">Location: Sector {Math.round(det.box.x * 10)}-{Math.round(det.box.y * 10)}</p>
            </div>
          ))}
          
          {MOCK_DETECTIONS.length === 0 && (
              <div className="text-center py-10 text-slate-400">
                  <CheckCircle className="h-10 w-10 mx-auto mb-2 text-green-500" />
                  <p>No issues detected.</p>
              </div>
          )}
        </div>
        
        <div className="p-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-lg text-sm border border-blue-100 dark:border-blue-900/30">
                <AlertCircle className="flex-shrink-0 h-5 w-5" />
                <p>AI results are assistive. Please verify all findings with clinical examination.</p>
            </div>
        </div>
      </div>
    </div>
  );
};