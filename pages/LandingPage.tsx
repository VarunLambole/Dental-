import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Shield, Cpu, Play } from 'lucide-react';

const HeroSection: React.FC = () => (
  <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            v2.0 Model Live
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            Dental Diagnostics <br/>
            <span className="text-teal-600 dark:text-teal-400">Reimagined by AI</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
            Enhance your practice with instant, accurate cavity detection powered by advanced computer vision. 
            Reduce missed diagnoses and improve patient trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/upload" className="inline-flex justify-center items-center px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 hover:-translate-y-1">
              Start Analysis <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/about" className="inline-flex justify-center items-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              How it works
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
           {/* Abstract Decorative Elements */}
           <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-300/20 dark:bg-teal-500/10 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
           
           <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Dental X-Ray Analysis" className="w-full h-auto" />
              <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-red-500 rounded-md animate-pulse"></div>
              <div className="absolute top-1/2 left-1/3 -mt-8 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">Caries 94%</div>
           </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: 'Real-time Inference',
      desc: 'Get analysis results in under 2 seconds. Optimized YOLOv8 backend ensures rapid processing for chair-side use.'
    },
    {
      icon: <Cpu className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: 'High Precision',
      desc: 'Trained on 50,000+ labeled periapical and bitewing radiographs with 95% verified sensitivity.'
    },
    {
      icon: <Shield className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: 'Private & Secure',
      desc: 'Local processing capabilities and encrypted data transmission. Patient data privacy is our top priority.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Choose DentAI?</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Built by engineers and dentists to solve the problem of diagnostic fatigue.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-teal-100 dark:hover:border-teal-900/50 hover:bg-teal-50/50 dark:hover:bg-slate-700/50 transition-colors group">
              <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    { title: 'Upload X-Ray', desc: 'Drag & drop bitewing or periapical images.', icon: '1' },
    { title: 'AI Scanning', desc: 'Our computer vision model analyzes pixel density.', icon: '2' },
    { title: 'Review Results', desc: 'Bounding boxes highlight potential carious lesions.', icon: '3' },
    { title: 'Report', desc: 'Export annotated images for patient records.', icon: '4' },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Workflow</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center p-6">
               <div className="w-10 h-10 rounded-full bg-slate-900 dark:bg-teal-600 text-white flex items-center justify-center font-bold mb-4 z-10 relative">
                 {step.icon}
               </div>
               {idx !== steps.length - 1 && (
                 <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-slate-200 dark:bg-slate-700 -z-0"></div>
               )}
               <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">{step.title}</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => (
    <section className="py-20 bg-teal-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
            <h2 className="text-4xl font-bold mb-6">Ready to upgrade your diagnostics?</h2>
            <p className="text-teal-100 text-lg mb-8">Join hundreds of dental professionals using AI to ensure no cavity goes unnoticed.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/upload" className="px-8 py-4 bg-white text-teal-900 rounded-xl font-bold hover:bg-teal-50 transition-colors">
                    Try Demo Now
                </Link>
            </div>
        </div>
    </section>
);

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
    </div>
  );
};