import React from 'react';
import { MOCK_MODELS } from '../constants';
import { Box, Check, Cpu } from 'lucide-react';

export const ModelsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Model Zoo</h1>
        <p className="text-slate-500">Select and manage the underlying AI architectures used for inference.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_MODELS.map((model) => (
          <div key={model.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                    <Cpu size={24} />
                </div>
                <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded font-mono">{model.version}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{model.name}</h3>
            <p className="text-sm text-slate-400 mb-4 font-mono">{model.type}</p>
            
            <p className="text-slate-600 text-sm mb-6 flex-grow">{model.description}</p>
            
            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div>
                     <span className="block text-xs text-slate-400">Accuracy</span>
                     <span className="font-bold text-slate-800">{model.accuracy}</span>
                </div>
                <button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800">
                    Select
                </button>
            </div>
          </div>
        ))}
        
        {/* 'Coming Soon' placeholder */}
        <div className="bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-6 flex flex-col items-center justify-center text-center opacity-75">
            <Box size={32} className="text-slate-400 mb-2" />
            <h3 className="font-semibold text-slate-600">Transformer-Vit</h3>
            <p className="text-xs text-slate-400">Coming Q1 2025</p>
        </div>
      </div>
    </div>
  );
};
