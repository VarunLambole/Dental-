export interface Detection {
  id: string;
  label: string;
  confidence: number;
  box: {
    x: number; // normalized 0-1
    y: number; // normalized 0-1
    w: number; // normalized 0-1
    h: number; // normalized 0-1
  };
  severity: 'Low' | 'Medium' | 'High';
}

export interface AnalysisResult {
  id: string;
  imageUrl: string;
  timestamp: string;
  patientId: string;
  detections: Detection[];
  summary: string;
  modelUsed: string;
}

export interface ModelInfo {
  id: string;
  name: string;
  version: string;
  accuracy: string;
  description: string;
  type: 'YOLOv8' | 'YOLOv5' | 'FasterRCNN';
  releaseDate: string;
}

export interface HistoryItem {
  id: string;
  date: string;
  imageThumbnail: string;
  issuesFound: number;
  status: 'Reviewed' | 'Pending';
}
