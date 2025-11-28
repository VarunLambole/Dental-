import React from 'react';
import { MOCK_HISTORY } from '../constants';
import { Calendar, Search, Filter, Eye, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HistoryPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
           <h1 className="text-3xl font-bold text-slate-900">Analysis History</h1>
           <p className="text-slate-500">View and manage past X-Ray scans.</p>
        </div>
        <div className="flex gap-3">
             <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                 <input 
                    type="text" 
                    placeholder="Search ID..." 
                    className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-sm w-full md:w-64"
                 />
             </div>
             <button className="px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-slate-600">
                <Filter size={18} />
             </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Thumbnail</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Findings</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
                {MOCK_HISTORY.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">#{item.id.toUpperCase()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <img src={item.imageThumbnail} alt="Thumb" className="h-10 w-10 rounded object-cover border border-slate-200" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} /> {item.date}
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full font-bold ${
                            item.issuesFound > 0 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                        }`}>
                            {item.issuesFound} Detected
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                             item.status === 'Reviewed' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                            {item.status}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link to={`/results/${item.id}`} className="text-teal-600 hover:text-teal-900 inline-flex items-center gap-1">
                            <Eye size={16} /> View
                        </Link>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};
