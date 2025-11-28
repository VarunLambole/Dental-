import React from 'react';
import { TECH_STACK, TEAM_MEMBERS } from '../constants';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero */}
      <div className="bg-slate-900 dark:bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                We are bridging the gap between artificial intelligence and dental healthcare. 
                Our goal is to make high-quality diagnostics accessible, fast, and reliable for every clinic.
            </p>
        </div>
      </div>

      {/* Tech Stack */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Under the Hood</h2>
                <p className="text-slate-500 dark:text-slate-400">Built with industry-leading open source technologies.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {TECH_STACK.map((tech) => (
                    <div key={tech.name} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all">
                        <div className="text-4xl mb-3">{tech.icon}</div>
                        <h3 className="font-bold text-slate-800 dark:text-white">{tech.name}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{tech.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Model Architecture</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Our core detection engine utilizes a custom-trained <strong>YOLOv8 (You Only Look Once)</strong> architecture. 
                    Unlike traditional two-stage detectors, YOLO processes the entire image in a single pass, making it incredibly fast 
                    while maintaining high accuracy for small objects like early-stage caries.
                </p>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden flex">
                    <div className="h-full bg-teal-500 w-1/4" title="Input Processing"></div>
                    <div className="h-full bg-blue-500 w-2/4" title="Backbone & Neck"></div>
                    <div className="h-full bg-indigo-500 w-1/4" title="Head & Output"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
                    <span>Input Layer (640x640)</span>
                    <span>CSPDarknet Backbone</span>
                    <span>Detection Head</span>
                </div>
            </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Meet the Team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TEAM_MEMBERS.map((member) => (
                    <div key={member.name} className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-slate-100 dark:border-slate-800 shadow-lg">
                            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{member.name}</h3>
                        <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">{member.role}</p>
                        <div className="flex gap-4">
                            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"><Twitter size={20} /></button>
                            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"><Linkedin size={20} /></button>
                            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"><Github size={20} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};