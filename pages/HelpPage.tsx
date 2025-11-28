import React from 'react';
import { HelpCircle, FileText, MessageCircle } from 'lucide-react';

export const HelpPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Help Center</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-12">Guides, references, and support for DentAI.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-teal-300 dark:hover:border-teal-500/50 transition-colors">
            <FileText className="h-8 w-8 text-teal-600 dark:text-teal-400 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">User Guide</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">Learn how to upload images, interpret bounding boxes, and export PDF reports.</p>
            <a href="#" className="text-teal-600 dark:text-teal-400 font-medium hover:underline">Read Guide &rarr;</a>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-teal-300 dark:hover:border-teal-500/50 transition-colors">
            <MessageCircle className="h-8 w-8 text-teal-600 dark:text-teal-400 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Support Chat</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">Talk to our technical team about integration issues or model false positives.</p>
             <a href="#" className="text-teal-600 dark:text-teal-400 font-medium hover:underline">Start Chat &rarr;</a>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
            <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-1">What image formats are supported?</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">We currently support JPG, PNG, and TIFF. DICOM support is available in the Enterprise plan via our dedicated converter.</p>
            </div>
             <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-1">Is patient data saved?</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">No. Images processed in the Demo version are stored in temporary browser memory and cleared on refresh. The secure version uses end-to-end encryption.</p>
            </div>
             <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-1">How accurate is the YOLOv8 model?</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Our internal validation on bitewing datasets shows a 94.5% sensitivity for interproximal caries.</p>
            </div>
        </div>
      </div>
    </div>
  );
};