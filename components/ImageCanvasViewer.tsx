import React, { useRef, useEffect, useState } from 'react';
import { Detection } from '../types';
import { motion } from 'framer-motion';

interface ImageCanvasViewerProps {
  imageUrl: string;
  detections: Detection[];
}

export const ImageCanvasViewer: React.FC<ImageCanvasViewerProps> = ({ imageUrl, detections }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  const onImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageLoaded(true);
    setDimensions({
      width: e.currentTarget.width,
      height: e.currentTarget.height
    });
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
        if(containerRef.current) {
             const img = containerRef.current.querySelector('img');
             if(img) {
                 setDimensions({ width: img.width, height: img.height });
             }
        }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div ref={containerRef} className="relative inline-block w-full h-full bg-black rounded-xl overflow-hidden shadow-lg group">
      <img
        src={imageUrl}
        alt="Analyzed X-Ray"
        className="w-full h-full object-contain block mx-auto"
        onLoad={onImgLoad}
      />
      
      {imageLoaded && detections.map((det) => (
        <motion.div
          key={det.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="absolute border-2 border-red-500 bg-red-500/10 hover:bg-red-500/20 cursor-pointer transition-colors z-10"
          style={{
            left: `${det.box.x * 100}%`,
            top: `${det.box.y * 100}%`,
            width: `${det.box.w * 100}%`,
            height: `${det.box.h * 100}%`,
          }}
        >
          {/* Label Tag */}
          <div className="absolute -top-7 left-0 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm whitespace-nowrap z-20">
            {det.label} {Math.round(det.confidence * 100)}%
          </div>
        </motion.div>
      ))}

      {/* Grid overlay for 'medical' feel */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
    </div>
  );
};
