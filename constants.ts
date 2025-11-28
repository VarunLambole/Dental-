import { ModelInfo, HistoryItem } from './types';

export const APP_NAME = "DentAI";

export const MOCK_MODELS: ModelInfo[] = [
  {
    id: 'm1',
    name: 'CavityNet-YOLOv8',
    version: 'v8.2.1',
    accuracy: '94.5%',
    description: 'Optimized for bitewing X-rays, high sensitivity for interproximal caries.',
    type: 'YOLOv8',
    releaseDate: '2023-11-15',
  },
  {
    id: 'm2',
    name: 'RootCanal-Pro',
    version: 'v5.0.4',
    accuracy: '92.1%',
    description: 'Specialized in detecting periapical lesions and root fractures.',
    type: 'YOLOv5',
    releaseDate: '2023-08-22',
  },
  {
    id: 'm3',
    name: 'DenseDental-RCNN',
    version: 'v1.2',
    accuracy: '96.2%',
    description: 'High precision model for panoramic X-rays, slower inference but higher detail.',
    type: 'FasterRCNN',
    releaseDate: '2024-01-10',
  },
];

export const MOCK_HISTORY: HistoryItem[] = [
  { id: 'h1', date: '2023-10-24', imageThumbnail: 'https://picsum.photos/100/100?random=1', issuesFound: 3, status: 'Reviewed' },
  { id: 'h2', date: '2023-10-25', imageThumbnail: 'https://picsum.photos/100/100?random=2', issuesFound: 1, status: 'Pending' },
  { id: 'h3', date: '2023-10-26', imageThumbnail: 'https://picsum.photos/100/100?random=3', issuesFound: 0, status: 'Reviewed' },
  { id: 'h4', date: '2023-10-28', imageThumbnail: 'https://picsum.photos/100/100?random=4', issuesFound: 5, status: 'Pending' },
];

export const TECH_STACK = [
  { name: 'Python', icon: '🐍', desc: 'Core Logic' },
  { name: 'PyTorch', icon: '🔥', desc: 'Deep Learning' },
  { name: 'YOLOv8', icon: '👁️', desc: 'Object Detection' },
  { name: 'OpenCV', icon: '📷', desc: 'Image Processing' },
  { name: 'FastAPI', icon: '⚡', desc: 'Backend API' },
  { name: 'React', icon: '⚛️', desc: 'Frontend UI' },
];

export const TEAM_MEMBERS = [
  { name: 'Dr. Sarah Lin', role: 'Lead Radiologist', img: 'https://picsum.photos/200/200?random=10' },
  { name: 'James Chen', role: 'Senior ML Engineer', img: 'https://picsum.photos/200/200?random=11' },
  { name: 'Emily Davis', role: 'Frontend Developer', img: 'https://picsum.photos/200/200?random=12' },
];
