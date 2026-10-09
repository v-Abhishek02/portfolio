import { SiPython, SiCplusplus, SiNumpy, SiPandas, SiPytorch, SiTensorflow, SiScikitlearn, SiOpencv, SiKeras, SiDocker, SiFastapi, SiMlflow, SiApachespark, SiGithubactions, SiPostgresql, SiMysql, SiMongodb, SiSupabase, SiHuggingface, SiReact, SiFlask, SiStreamlit } from 'react-icons/si'
import { FaAws, FaDatabase, FaChartLine, FaCogs, FaSearch, FaCheckCircle, FaBrain, FaProjectDiagram, FaNetworkWired, FaEye, FaCommentDots } from 'react-icons/fa'

export const me = {
  name: 'Abhishek Vishwakarma',
  role: 'Aspiring ML and AI Engineer',
  phone: '+91-8928471210',
  email: 'vishwkarmaa018@gmail.com',
  github: 'https://github.com/v-Abhishek02',
  linkedin: 'https://linkedin.com/in/v-abhishek01',
  resume: '/Abhishek_Vishwakarma_Resume.pdf',
  profile: "I am pursuing an MSc in Data Science and Artificial Intelligence (2025 to 2027) after completing a BSc in Information Technology. My focus areas are machine learning, deep learning, neural networks, MLOps, and GenAI. I learn by building complete projects: models, APIs, and simple web apps. My goal is to become an ML Engineer, AI Engineer, or Data Scientist.",
}

export const ring = [SiPython, SiPytorch, SiTensorflow, SiDocker, SiFastapi, SiReact, SiPostgresql, SiOpencv]

export const skills = [
  { group: 'Languages and core', items: [['Python', SiPython], ['SQL', FaDatabase], ['C++', SiCplusplus], ['NumPy', SiNumpy], ['Pandas', SiPandas]] },
  { group: 'ML and analytics', items: [['Supervised and unsupervised learning', FaChartLine], ['Feature engineering', FaCogs], ['EDA', FaSearch], ['Model evaluation', FaCheckCircle]] },
  { group: 'Deep learning and AI', items: [['Transformers', SiHuggingface], ['LLMs', FaBrain], ['RAG', FaProjectDiagram], ['CNNs', FaNetworkWired], ['Computer vision', FaEye], ['NLP', FaCommentDots]] },
  { group: 'Frameworks and libraries', items: [['PyTorch', SiPytorch], ['TensorFlow', SiTensorflow], ['Scikit-Learn', SiScikitlearn], ['OpenCV', SiOpencv], ['Keras', SiKeras]] },
  { group: 'MLOps, cloud, and big data', items: [['Docker', SiDocker], ['AWS', FaAws], ['FastAPI', SiFastapi], ['CI/CD', SiGithubactions], ['PySpark', SiApachespark], ['MLflow', SiMlflow], ['Flask', SiFlask], ['Streamlit', SiStreamlit]] },
  { group: 'Databases', items: [['PostgreSQL', SiPostgresql], ['MySQL', SiMysql], ['MongoDB', SiMongodb], ['Supabase', SiSupabase]] },
] as const

export const projects = [
  { title: 'OrbitGuard', sub: 'AI framework for real-time space debris monitoring and collision avoidance',
    points: ['AI-driven platform for LEO object tracking, conjunction detection, collision-risk prediction, and autonomous maneuver decision support.', 'Integrates SGP4 orbital propagation, CNN-BiLSTM, PINN, GNN, PPO reinforcement learning, XAI, WebSocket telemetry, FastAPI, React, and PostgreSQL/Supabase.'],
    tags: ['SGP4', 'CNN-BiLSTM', 'PINN', 'GNN', 'PPO', 'FastAPI', 'React'] },
  { title: 'AutoStream Agent', sub: 'AI-powered conversational sales agent',
    points: ['Sales automation platform using LangGraph, Groq LLaMA 3.1, and RAG for intent analysis, grounded responses, and qualified lead capture.'],
    tags: ['LangGraph', 'LLaMA 3.1', 'RAG'] },
  { title: 'Breast cancer detection', sub: 'Custom Multi-Layer Perceptron',
    points: ['Built and validated an MLP with 5-fold cross-validation, evaluated using Precision, Recall, and AUC-ROC.'],
    tags: ['MLP', 'Cross-validation', 'AUC-ROC'] },
  { title: 'Movie recommendation system', sub: 'Content-based recommender',
    points: ['Engineered high-dimensional vector spaces with cosine similarity, live TMDB metadata, and personalized rankings.'],
    tags: ['Cosine similarity', 'TMDB API', 'Vectors'] },
]

export const education = [
  { school: 'Mithibai College', degree: 'MSc Data Science and Artificial Intelligence', years: '2025 to 2027' },
  { school: 'Elphinstone College', degree: 'BSc Information Technology', years: '2022 to 2025' },
]

export const awards = [
  ['Bharatiya Antariksh Hackathon, ISRO / Hack2skill (Participant)', '2026'],
  ['Innovex Storm Hackathon (Participant)', '2026'],
  ['Deloitte Australia, Data Analytics Job Simulation (Forage)', '2025'],
  ['Data Science and Analytics, HP LIFE', '2026'],
  ['Python Fundamentals, Great Learning', '2022'],
  ["Python Bootcamp, Let's Upgrade", '2022'],
]
