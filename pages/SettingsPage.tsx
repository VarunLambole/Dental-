import React from 'react';
import { Save } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Settings</h1>
      
      <div className="space-y-6">
        {/* General */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">General</h2>
            <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <label className="text-slate-700">Dark Mode</label>
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                 </div>
                 <div className="flex items-center justify-between">
                    <label className="text-slate-700">Auto-Save Reports</label>
                     <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" defaultChecked />
                 </div>
            </div>
        </div>

        {/* Inference */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <h2 className="text-lg font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">Inference Engine</h2>
             <div className="grid grid-cols-1 gap-4">
                 <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Confidence Threshold</label>
                     <input type="range" className="w-full accent-teal-600" />
                     <div className="text-right text-xs text-slate-500">0.75</div>
                 </div>
                 <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Max Detections per Image</label>
                     <input type="number" className="w-full border border-slate-300 rounded-lg p-2" defaultValue={10} />
                 </div>
             </div>
        </div>

        <button className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-colors">
            <Save size={18} /> Save Changes
        </button>
      </div>
    </div>
  );
};
