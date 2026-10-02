import type { Project, Experience, Education, SkillCategory, Certification, CodeSnippet } from '../types';

export const PERSONAL_INFO = {
  name: 'Kamireddy Nithin Kumar Reddy',
  displayName: 'Nithin Kumar',
  role: 'AI Engineer • Full-Stack Developer • Software Engineer',
  tagline: 'Building intelligent software, AI-powered applications, and scalable digital products.',
  bio: 'Computer Science Engineer focused on building AI-powered applications, full-stack products, intelligent automation, and practical software solutions. Specializing in Python, PyTorch, Enterprise RAG, FastAPI, Next.js, and Java Spring Boot.',
  availability: 'Available for Software Engineering & AI Opportunities',
  email: 'nithinreddy5181@gmail.com',
  phone: '+91 6303695181',
  location: 'Hyderabad, India',
  githubUrl: 'https://github.com/Nithinreddy44',
  linkedinUrl: 'https://www.linkedin.com/in/kamireddy-nithin-kumar-reddy-7180b6259/',
  resumeUrl: '/resume.pdf',
  resumeDriveUrl: 'https://drive.google.com/drive/folders/1tDy-tY9c_k19J9IMi0K8XHMahBT67Peh?usp=share_link',
  profileImage: '/images/profile.jpg',
  stats: [
    { label: 'GitHub Repositories', value: '25+' },
    { label: 'Verified Internships & Sim.', value: '6+' },
    { label: 'Telemetry Rows Analyzed', value: '5,000+' },
    { label: 'Industrial Models Trained', value: '3+' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance & Process Intelligence',
    tagline: 'Industrial telemetry classification & machine failure forecasting engine for manufacturing workflows.',
    category: 'ai-ml',
    featured: true,
    stars: 12,
    badge: 'Infosys Internship Project',
    problem: 'Industrial machinery experiences unexpected component downtime and sensor anomalies, causing production bottlenecks without prior telemetry warnings.',
    solution: 'Engineered an end-to-end predictive maintenance ML pipeline processing 5,000 sensor telemetry records across 25 machines. Evaluated Logistic Regression, Random Forest, and XGBoost classifiers with automated feature engineering, correlation matrices, and real-time failure trend dashboards.',
    architecture: 'Sensor Telemetry Stream -> Data Cleaning & Imputation (Pandas/NumPy) -> Feature Extraction & Scaling -> Multi-Model Classifier (XGBoost / Random Forest) -> Real-time Failure Risk Scoring Dashboard.',
    architectureSteps: [
      { step: '01', title: 'Data Ingestion', desc: 'Preprocesses 5,000 multi-sensor telemetry rows handling 5,699 missing values across 25 machines.' },
      { step: '02', title: 'Feature Engineering', desc: 'Generates rolling variance, thermal ratios, and correlation matrix matrices to identify root causes.' },
      { step: '03', title: 'Model Training', desc: 'Trains XGBoost & Random Forest ensembles with cross-validation and hyperparameter tuning.' },
      { step: '04', title: 'Telemetry Dashboard', desc: 'Visualizes ROC-AUC curves, confusion matrices, and predictive failure alarms in real time.' }
    ],
    technologies: ['Python', 'XGBoost', 'Random Forest', 'Scikit-Learn', 'Pandas', 'NumPy', 'Chart.js', 'HTML5/CSS3'],
    keyFeatures: [
      'Comprehensive telemetry data cleaning pipeline resolving 5,699 missing sensor readings',
      'Multi-model benchmark: XGBoost achieved 96.24% recall and 0.7916 F1-score on failure detection',
      'Interactive visual dashboard showing confusion matrices and failure risk heatmaps',
      'Extracted critical sensor features predicting breakdown before physical machine failure'
    ],
    engineeringChallenges: [
      'Addressing heavy class imbalance in machine failure telemetry without overfitting',
      'Optimizing multi-variable correlation matrix to eliminate colinear sensor noise',
      'Structuring reproducible Python analysis pipelines with PDF/Markdown executive reports'
    ],
    results: [
      'Achieved 96.24% Recall with XGBoost, detecting 96+ out of 100 actual machine failures',
      'Successfully benchmarked across 25 independent manufacturing units',
      'Delivered fully automated data preprocessing script and executive reporting suite'
    ],
    metrics: [
      { label: 'XGBoost Recall', value: '96.24%', description: 'Critical failure detection rate' },
      { label: 'F1-Score', value: '0.7916', description: 'Harmonic mean of precision and recall' },
      { label: 'Telemetry Rows', value: '5,000', description: 'Sensor records cleaned & evaluated' },
      { label: 'Machines Monitored', value: '25', description: 'Distinct physical manufacturing nodes' }
    ],
    githubUrl: 'https://github.com/Nithinreddy44/Predictive-Maintenance-and-Process-Intelligence-by-Infosys',
    codeSnippet: {
      filename: 'predictive_maintenance_analysis.py',
      language: 'python',
      code: `import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier
from sklearn.metrics import classification_report, f1_score, recall_score

# Load telemetry dataset
df = pd.read_csv('machine_failure_dataset.csv')

# Feature preprocessing & handling missing sensor values
X = df.drop(columns=['failure_target', 'machine_id'])
y = df['failure_target']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)

# Train XGBoost with hyperparameter tuning
model = XGBClassifier(
    n_estimators=150,
    learning_rate=0.05,
    max_depth=5,
    eval_metric='logloss'
)
model.fit(X_train, y_train)

# Evaluate model metrics
y_pred = model.predict(X_test)
print(f"XGBoost Recall Score: {recall_score(y_test, y_pred):.4f}")
print(f"XGBoost F1-Score: {f1_score(y_test, y_pred):.4f}")`
    }
  },
  {
    id: 'codescope',
    title: 'CodeScope — Architecture & Security Engine',
    tagline: 'Automated codebase auditing platform analyzing project domain, tech stack, and security vulnerabilities.',
    category: 'full-stack',
    featured: true,
    stars: 8,
    badge: 'Full-Stack Engine',
    problem: 'Engineering teams and technical reviewers lack instant visibility into the architectural topology, third-party risk posture, and framework composition of large codebases.',
    solution: 'Constructed CodeScope, an intelligent codebase analyzer combining Python FastAPI backend micro-engine with AST parsing, regex token detectors, and a modern React TypeScript dashboard to deliver instant structural diagnostics.',
    architecture: 'Zip/Folder Upload -> FastAPI Async Engine -> Specialized Detectors (Domain, Tech, Architecture, Security) -> SQLite Result Cache -> React/Vite UI with visual report rendering.',
    architectureSteps: [
      { step: '01', title: 'AST & Token Scanning', desc: 'Parses directory trees and file tokens across JavaScript, TypeScript, Python, and Java.' },
      { step: '02', title: 'Architectural Classification', desc: 'Identifies MVC, Clean Architecture, Microservices, and Event-Driven topologies.' },
      { step: '03', title: 'Security Audit', desc: 'Scans for hardcoded credentials, unsafe eval/exec invocations, and vulnerable patterns.' },
      { step: '04', title: 'Executive Report', desc: 'Compiles risk matrix, framework breakdown, and architectural score into exportable views.' }
    ],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'SQLite', 'Pydantic'],
    keyFeatures: [
      'Multi-detector engine: domain classifier, tech detector, architecture detector, and security auditor',
      'Fast asynchronous background project analysis with real-time step progress notifications',
      'Interactive React TypeScript dashboard with breakdown charts and severity filtering',
      'Modular SQLite database persistence for historical codebase analysis tracking'
    ],
    engineeringChallenges: [
      'Parsing heterogeneous project structures and nested monorepos without memory exhaustion',
      'Implementing high-throughput asynchronous execution in FastAPI using asyncio workers',
      'Designing strict Pydantic schemas ensuring end-to-end type safety between backend and frontend'
    ],
    results: [
      'Engine scans medium repositories in under 1.8 seconds',
      'Zero external cloud dependencies required for local security-sensitive code audits',
      'Complete full-stack implementation with clean architectural separation'
    ],
    metrics: [
      { label: 'Scan Latency', value: '< 2.0s', description: 'Average analysis turnaround time' },
      { label: 'Detector Modules', value: '5', description: 'Specialized diagnostic engines' },
      { label: 'Languages Supported', value: '6+', description: 'Multi-language token parsing' }
    ],
    githubUrl: 'https://github.com/Nithinreddy44/CodeScope',
    codeSnippet: {
      filename: 'engine.py',
      language: 'python',
      code: `import asyncio
from tech_detector import analyze_project_technologies
from domain_detector import analyze_project_domain
from architecture_detector import analyze_project_architecture
from security_auditor import audit_project_security
from report_generator import generate_project_executive_report

async def run_full_codebase_audit(project_path: str, progress_cb=None):
    await _notify_progress(progress_cb, 1, "Detecting Tech Stack...")
    tech_info = await analyze_project_technologies(project_path)
    
    await _notify_progress(progress_cb, 2, "Classifying Domain...")
    domain_info = await analyze_project_domain(project_path)
    
    await _notify_progress(progress_cb, 3, "Auditing Security Risks...")
    security_info = await audit_project_security(project_path)
    
    await _notify_progress(progress_cb, 4, "Detecting Architecture...")
    arch_info = await analyze_project_architecture(project_path)
    
    return generate_project_executive_report(
        tech_info, domain_info, security_info, arch_info
    )`
    }
  },
  {
    id: 'ai-agent-for-call',
    title: 'AI Voice & Telephony Agent',
    tagline: 'Intelligent conversational voice agent with low-latency LLM audio response orchestration.',
    category: 'ai-ml',
    featured: true,
    stars: 6,
    badge: 'Generative AI',
    problem: 'Traditional interactive voice response (IVR) systems are rigid, robotic, and cannot handle dynamic conversational context or real-time intent classification.',
    solution: 'Engineered an AI-powered voice agent in Next.js and TypeScript utilizing OpenAI LLM endpoints, structured prompt workflows, dynamic conversational state tracking, and audio stream processing.',
    architecture: 'Audio Input -> Speech-to-Text Transcriber -> Contextual Intent Engine -> LLM Generation Pipeline -> Text-to-Speech Synthesizer -> Low-latency Audio Stream.',
    architectureSteps: [
      { step: '01', title: 'Speech Capture', desc: 'Captures and buffers real-time audio streams with noise suppression filters.' },
      { step: '02', title: 'Context Retrieval', desc: 'Maintains stateful user session memory and conversation history.' },
      { step: '03', title: 'LLM Reasoning', desc: 'Executes structured reasoning with intent classification and tool invocations.' },
      { step: '04', title: 'Audio Streaming', desc: 'Streams low-latency synthesized voice responses back to the caller.' }
    ],
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'WebRTC', 'Tailwind CSS', 'Node.js'],
    keyFeatures: [
      'Interactive voice conversation handling with real-time dynamic turn taking',
      'Context-aware intent classification and business logic routing',
      'Modular client UI with animated waveform visualizers and call diagnostic metrics',
      'Configurable personality, system prompts, and latency tuning'
    ],
    engineeringChallenges: [
      'Minimizing time-to-first-byte audio turnaround for natural conversation flow',
      'Gracefully handling audio stream drops and reconnection fallback',
      'Preventing hallucination in critical automated telephony workflows'
    ],
    results: [
      'Achieved responsive conversational turn-taking interface in Next.js',
      'Fully modular agent architecture ready for VoIP / WebRTC telephony integration'
    ],
    githubUrl: 'https://github.com/Nithinreddy44/Ai-agent-for-call'
  },
  {
    id: 'hrm-portel',
    title: 'Enterprise HRM & Operations Portal',
    tagline: 'Modern Human Resource Management system with RBAC, attendance tracking, and payroll workflow.',
    category: 'full-stack',
    featured: false,
    stars: 5,
    badge: 'Enterprise Product',
    problem: 'Organizations struggle with fragmented employee records, manual leave approval delays, and disparate department payroll spreadsheets.',
    solution: 'Developed a comprehensive enterprise HRM web application with Next.js, TypeScript, and Tailwind CSS featuring role-based access control, employee directory, leave management, and automated departmental payroll calculations.',
    architecture: 'Next.js App Router -> TypeScript Middleware (RBAC) -> REST API Endpoints -> Relational Data Models -> Responsive Tailwind UI Components.',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'PostCSS', 'REST APIs'],
    keyFeatures: [
      'Role-Based Access Control (RBAC) for Admin, HR Managers, and Employees',
      'Automated attendance tracking and leave request approval lifecycle',
      'Department payroll calculator with tax deduction summaries',
      'Responsive enterprise dashboard with searchable employee directory'
    ],
    engineeringChallenges: [
      'Implementing strict client and server authorization guards',
      'Managing complex form states for multi-tier employee records'
    ],
    results: [
      'Built a production-grade enterprise dashboard interface with zero layout shift',
      'Modular architecture enabling rapid extension with PostgreSQL/Prisma backends'
    ],
    githubUrl: 'https://github.com/Nithinreddy44/HRM-Portel'
  },
  {
    id: 'speakinggym',
    title: 'SpeakingGym — AI Speech Coach Platform',
    tagline: 'Interactive speech training platform providing pacing analysis and personalized vocal feedback.',
    category: 'full-stack',
    featured: false,
    stars: 4,
    badge: 'AI Coaching Web App',
    problem: 'Public speakers and job candidates lack affordable, data-driven tools to practice communication, track pacing, and eliminate filler words.',
    solution: 'Built SpeakingGym, a full-stack coaching application in Next.js, TypeScript, and Prisma providing interactive speech practice sessions, metric visualization, and structured speech improvement curriculum.',
    architecture: 'Next.js Frontend -> Prisma ORM -> Database -> Audio Processing Pipeline -> Speech Metrics Engine.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'React', 'Tailwind CSS', 'Speech Analytics'],
    keyFeatures: [
      'Interactive speech practice recording and playback environment',
      'Analytics dashboard tracking words per minute (WPM) and clarity scores',
      'Structured curriculum progression with Prisma database persistence',
      'Sleek modern UI with dark mode support and micro-interactions'
    ],
    engineeringChallenges: [
      'Designing database schemas with Prisma for tracking progressive user practice metrics',
      'Optimizing UI rendering during continuous audio recording sessions'
    ],
    results: [
      'Engineered clean full-stack web application with type-safe database queries',
      'Created intuitive user experience for communication skill development'
    ],
    githubUrl: 'https://github.com/Nithinreddy44/SpeakingGym'
  },
  {
    id: 'vilker-page',
    title: 'Vilker — 3D Motion Landing Experience',
    tagline: 'High-performance interactive mobile & web showcase utilizing Three.js and fluid gestures.',
    category: 'systems',
    featured: false,
    stars: 3,
    badge: 'Motion & 3D Engineering',
    problem: 'Standard marketing pages suffer from high bounce rates due to static layouts and lack of engaging technical product demonstrations.',
    solution: 'Created Vilker landing experience utilizing React Native / Expo, Three.js, React Native Skia, and Reanimated 3 to deliver 60fps hardware-accelerated animations and interactive 3D assets.',
    architecture: 'Three.js / Canvas WebGL Renderer -> Skia 2D Graphics Engine -> Reanimated 3 Gesture Hooks -> Responsive Web/Mobile Shell.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Three.js', 'React Native Skia', 'Reanimated 3'],
    keyFeatures: [
      'Hardware-accelerated 3D object rendering with cursor/touch interaction',
      'Skia-powered vector graphics and fluid layout transitions',
      'Cross-platform codebase running seamlessly on Web, iOS, and Android'
    ],
    engineeringChallenges: [
      'Optimizing WebGL shaders and memory allocations for low-power mobile devices',
      'Maintaining consistent 60fps frame rates during continuous gesture drags'
    ],
    results: [
      'Delivered ultra-smooth interactive showcase with zero frame drops',
      'Demonstrated advanced mastery of motion design and 3D web technologies'
    ],
    githubUrl: 'https://github.com/Nithinreddy44/vilker-page'
  },
  {
    id: 'industrial-sensor-anomaly',
    title: 'Industrial Sensor PyTorch Anomaly Detector',
    tagline: 'Deep learning autoencoder neural network for real-time manufacturing sensor defect detection.',
    category: 'ai-ml',
    featured: false,
    stars: 5,
    badge: 'Daikibo Factory AI',
    problem: 'Manufacturing lines generate continuous multi-sensor streams where subtle equipment degradation is obscured by background noise.',
    solution: 'Developed an unsupervised PyTorch Autoencoder network that learns normal sensor telemetry distributions and flags anomalies based on Mean Squared Error (MSE) reconstruction threshold violations.',
    architecture: 'Sensor Telemetry -> MinMax Scaler -> PyTorch Encoder (Linear -> ReLU) -> Latent Space (16 dims) -> Decoder -> MSE Loss Reconstruction Thresholding.',
    technologies: ['PyTorch', 'Python', 'Scikit-Learn', 'NumPy', 'Docker', 'Matplotlib'],
    keyFeatures: [
      'Multi-layer Autoencoder architecture with dimensional compression (64 -> 32 -> 16 -> 32 -> 64)',
      'Automated noise thresholding with Dynamic MSE anomaly scoring',
      'Dockerized model packaging for edge gateway deployment'
    ],
    engineeringChallenges: [
      'Determining optimal reconstruction loss threshold to avoid false positive alarms',
      'Handling multi-sensor synchronization across temperature, vibration, and pressure signals'
    ],
    results: [
      'Successfully identified anomalous sensor drift before simulated component failure',
      'Engineered clean PyTorch training pipeline with cross-validation and checkpoints'
    ],
    githubUrl: 'https://github.com/Nithinreddy44'
  },
  {
    id: 'expense-tracker',
    title: 'Expense & Cashflow Analytics Suite',
    tagline: 'Full-stack financial tracking application with interactive spending breakdown and budgeting.',
    category: 'data',
    featured: false,
    stars: 3,
    badge: 'Financial Analytics',
    problem: 'Individuals lack clear visual analytics to track dynamic income streams, category expenditures, and monthly budget thresholds.',
    solution: 'Built a responsive financial analytics web application featuring categorized transaction management, automated monthly summary calculations, and interactive spending charts.',
    architecture: 'Client UI -> Transaction Manager Engine -> Category Aggregator -> LocalStorage/API Persistence -> Chart.js Visualizer.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'LocalStorage API'],
    keyFeatures: [
      'Categorized transaction ledger with real-time balance calculations',
      'Visual expenditure breakdown charts by category and timeframe',
      'Persistent client-side data storage and export capabilities'
    ],
    engineeringChallenges: [
      'Ensuring instant zero-latency UI updates during high-frequency transaction entries'
    ],
    results: [
      'Delivered clean, highly functional financial tool with zero external framework overhead'
    ],
    githubUrl: 'https://github.com/Nithinreddy44/Expense-tracker'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'lexonit',
    role: 'AI Full-Stack Engineer Intern',
    company: 'LexonIT',
    companyType: 'AI & Enterprise Solutions',
    period: '2024 — Present',
    badge: 'Active Internship',
    badgeType: 'active',
    description: 'Engineering end-to-end AI applications, integrating Large Language Model (LLM) RAG pipelines, vector embedding stores, Python backends, and full-stack web interfaces.',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'LangChain', 'Pinecone', 'React', 'TypeScript', 'Docker'],
    contributions: [
      'Engineered RAG document ingestion workflows connecting vector embeddings (Pinecone/ChromaDB) to LLM endpoints.',
      'Constructed RESTful API endpoints in FastAPI with asynchronous request queues and structured JSON schemas.',
      'Developed responsive full-stack frontend interfaces in React and TypeScript for internal AI toolkits.',
      'Participated in model evaluation, prompt optimization, and cloud deployment pipelines.'
    ],
    verifiedOutcome: 'Delivered production AI integration components and vector query services.'
  },
  {
    id: 'sennova',
    role: 'Software & AI Engineer Intern',
    company: 'SenNova Innovation Pvt Ltd',
    companyType: 'Technology Innovation & Software',
    period: '2024',
    badge: 'Software Engineering',
    badgeType: 'internship',
    description: 'Worked on intelligent software development, data processing systems, and full-stack web modules.',
    technologies: ['Python', 'JavaScript', 'SQL', 'REST APIs', 'React', 'Git'],
    contributions: [
      'Collaborated on core software features, database schema structuring, and API integration.',
      'Assisted in data pipeline automation and testing routines to ensure software reliability.',
      'Built modular user interface components adhering to clean architecture standards.'
    ],
    verifiedOutcome: 'Implemented scalable API modules and automated testing workflows.'
  },
  {
    id: 'vectra',
    role: 'Software Engineer Intern',
    company: 'Vectra Technosoft',
    companyType: 'Software Development & IT Services',
    period: '2023 — 2024',
    badge: 'Backend & APIs',
    badgeType: 'internship',
    description: 'Contributed to software engineering workflows, backend API integration, and database query optimization.',
    technologies: ['Java', 'SQL', 'JavaScript', 'HTML/CSS', 'Git', 'Linux'],
    contributions: [
      'Assisted in designing relational database schemas and writing optimized SQL queries for high-volume transactions.',
      'Developed and tested backend REST API endpoints for web application services.',
      'Participated in code reviews, bug fixes, and version control management using Git.'
    ],
    verifiedOutcome: 'Optimized query execution times and contributed to robust backend services.'
  },
  {
    id: 'cavin',
    role: 'Web Development & Software Engineering Intern',
    company: 'Cavin Infotech',
    companyType: 'Web & Digital Engineering',
    period: '2023',
    badge: 'Web Systems',
    badgeType: 'internship',
    description: 'Engineered responsive web client architectures, component libraries, and frontend interactivity.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'UI/UX Design'],
    contributions: [
      'Developed cross-browser responsive web pages ensuring mobile-first compatibility.',
      'Implemented dynamic client-side scripting and form validation routines.',
      'Optimized asset loading times and UI component performance.'
    ],
    verifiedOutcome: 'Shipped clean, responsive web layouts with zero visual regressions.'
  },
  {
    id: 'infosys',
    role: 'Spring Boot & Java Developer Intern',
    company: 'Infosys',
    companyType: 'Enterprise IT & Global Tech',
    period: 'Certified Internship Program',
    badge: 'Certified Track',
    badgeType: 'certified',
    description: 'Architected enterprise Java Spring Boot microservices, REST APIs, database schemas, and AI application integration during the certified Infosys program.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Python', 'Predictive Analytics'],
    contributions: [
      'Built enterprise Spring Boot microservices with Spring Data JPA and MySQL integration.',
      'Engineered the "Predictive Maintenance & Process Intelligence" telemetry project with 5,000 sensor records.',
      'Implemented robust exception handling, logging filters, and secure API contracts.'
    ],
    verifiedOutcome: 'Completed certified Java Spring Boot development track with distinction.'
  },
  {
    id: 'tata-simulation',
    role: 'GenAI Powered Analytics Simulation',
    company: 'TATA / Forage',
    companyType: 'AI Simulation',
    period: 'Completed Simulation',
    badge: 'GenAI Simulation',
    badgeType: 'simulation',
    description: 'Designed Generative AI workflows, prompt optimization strategies, automated insight generation, and executive AI summaries.',
    technologies: ['Generative AI', 'Prompt Engineering', 'Python', 'Pandas', 'Data Synthesis'],
    contributions: [
      'Synthesized complex enterprise business datasets into automated natural language executive briefings.',
      'Engineered multi-turn prompt chains ensuring deterministic analysis outputs without hallucinations.',
      'Evaluated predictive trends and presented AI-driven strategic recommendations.'
    ],
    verifiedOutcome: 'Awarded TATA GenAI Analytics credentials for data synthesis.'
  },
  {
    id: 'deloitte-simulation',
    role: 'AI & Data Analytics Simulation',
    company: 'Deloitte / Forage',
    companyType: 'Data Science Simulation',
    period: 'Completed Simulation',
    badge: 'Data Simulation',
    badgeType: 'simulation',
    description: 'Analyzed enterprise big data, built data pre-processing pipelines, evaluated statistical models, and generated strategic AI recommendations.',
    technologies: ['Data Analytics', 'Machine Learning', 'Statistical Modeling', 'Tableau', 'SQL'],
    contributions: [
      'Cleaned and transformed heterogeneous enterprise datasets for machine learning modeling.',
      'Performed exploratory data analysis (EDA) identifying critical business conversion drivers.',
      'Formulated actionable data-driven strategies for executive stakeholder presentations.'
    ],
    verifiedOutcome: 'Completed Deloitte Data & AI Analytics program.'
  }
];

export const EDUCATION: Education = {
  degree: 'Bachelor of Engineering (B.E.) in Computer Science & Engineering',
  institution: 'Saveetha School of Engineering (SIMATS)',
  location: 'Chennai, Tamil Nadu, India',
  period: '2022 — 2026',
  focus: 'Artificial Intelligence, Machine Learning, Deep Neural Networks, Software Engineering & MLOps',
  highlights: [
    'Specialized coursework: Machine Learning, Artificial Intelligence, Database Management Systems, Cloud Computing, Operating Systems, Computer Networks.',
    'Active open-source contributor and technical project builder on GitHub (25+ repositories).',
    'Hands-on internship experience across AI engineering, Spring Boot microservices, and full-stack development.'
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Core Programming',
    icon: 'Terminal',
    description: 'Foundation programming languages used for systems, backend services, and machine learning.',
    skills: [
      { name: 'Python', category: 'Language', proficiency: 'Production', context: 'FastAPI, PyTorch, Scikit-Learn, Pandas, NumPy, Async IO', tags: ['Backend', 'AI/ML', 'Scripting'] },
      { name: 'Java', category: 'Language', proficiency: 'Advanced', context: 'Spring Boot, OOP, Microservices, JDBC, JPA', tags: ['Enterprise', 'Backend'] },
      { name: 'JavaScript / TypeScript', category: 'Language', proficiency: 'Production', context: 'ES6+, TypeScript types, Next.js, Node.js, React', tags: ['Full-Stack', 'Frontend'] },
      { name: 'SQL', category: 'Language', proficiency: 'Advanced', context: 'MySQL 8.0, PostgreSQL, Window Functions, Complex Joins, CTEs', tags: ['Databases', 'Analytics'] },
      { name: 'C / C++', category: 'Language', proficiency: 'Proficient', context: 'Data structures, Algorithms, Memory basics', tags: ['Systems'] }
    ]
  },
  {
    id: 'ai-ml',
    name: 'AI, ML & Deep Learning',
    icon: 'Brain',
    description: 'Machine learning algorithms, deep neural network architectures, LLMs, and RAG systems.',
    skills: [
      { name: 'PyTorch', category: 'AI/ML', proficiency: 'Advanced', context: 'Autoencoders, CNNs, Custom Loss Functions, Tensor operations', tags: ['Deep Learning', 'Neural Nets'] },
      { name: 'Scikit-Learn', category: 'AI/ML', proficiency: 'Production', context: 'XGBoost, Random Forest, Logistic Regression, Pipeline, Feature Scaling', tags: ['Classification', 'Regression'] },
      { name: 'RAG & Vector Embeddings', category: 'GenAI', proficiency: 'Advanced', context: 'Pinecone, ChromaDB, Document Chunking, Semantic Search', tags: ['LLMs', 'Information Retrieval'] },
      { name: 'LangChain & OpenAI API', category: 'GenAI', proficiency: 'Advanced', context: 'Prompt engineering, Agent orchestration, RetrievalQA chains', tags: ['Generative AI', 'Agents'] },
      { name: 'TensorFlow / Keras', category: 'AI/ML', proficiency: 'Proficient', context: 'Neural network training, Image classification baseline models', tags: ['Computer Vision'] }
    ]
  },
  {
    id: 'fullstack-web',
    name: 'Frontend & Full-Stack',
    icon: 'Layers',
    description: 'Modern web application frameworks, component architectures, and responsive UI engineering.',
    skills: [
      { name: 'React.js', category: 'Frontend', proficiency: 'Production', context: 'Hooks, Context API, Custom Hooks, State Management, Vite', tags: ['SPA', 'Components'] },
      { name: 'Next.js', category: 'Full-Stack', proficiency: 'Production', context: 'App Router, Server Actions, SSR, API Routes, TypeScript', tags: ['SSR', 'Modern Web'] },
      { name: 'Tailwind CSS', category: 'Styling', proficiency: 'Production', context: 'Responsive design, Custom themes, Glassmorphism, Modern CSS', tags: ['UI/UX', 'CSS3'] },
      { name: 'Three.js / WebGL', category: 'Graphics', proficiency: 'Proficient', context: 'Particle constellations, 3D geometric visualizers, Shaders', tags: ['3D Web', 'Motion'] },
      { name: 'HTML5 & Semantic Web', category: 'Frontend', proficiency: 'Production', context: 'Accessible DOM hierarchy, SEO optimization, ARIA standards', tags: ['Accessibility', 'SEO'] }
    ]
  },
  {
    id: 'backend-apis',
    name: 'Backend & Cloud APIs',
    icon: 'Server',
    description: 'Server frameworks, RESTful API engineering, authentication, and microservice architectures.',
    skills: [
      { name: 'FastAPI', category: 'Backend', proficiency: 'Production', context: 'Async endpoints, Pydantic validation, OpenAPI docs, ML model serving', tags: ['Python', 'High Performance'] },
      { name: 'Spring Boot', category: 'Backend', proficiency: 'Advanced', context: 'Java microservices, REST controllers, Dependency injection, JPA', tags: ['Enterprise Java'] },
      { name: 'Node.js', category: 'Backend', proficiency: 'Advanced', context: 'Express, REST API routing, File streaming, Middleware', tags: ['JavaScript'] },
      { name: 'REST API Design', category: 'Architecture', proficiency: 'Production', context: 'Status codes, JSON schema design, Rate limiting, Error formats', tags: ['API Design'] }
    ]
  },
  {
    id: 'data-engineering',
    name: 'Data & Analytics',
    icon: 'Database',
    description: 'Data manipulation, statistical analysis, data cleaning, and business intelligence dashboards.',
    skills: [
      { name: 'Pandas & NumPy', category: 'Data', proficiency: 'Production', context: 'Dataset cleaning, Missing value imputation, Array computations', tags: ['Data Science'] },
      { name: 'MySQL & PostgreSQL', category: 'Databases', proficiency: 'Advanced', context: 'Schema design, Indexing, Relational integrity, Transactions', tags: ['SQL'] },
      { name: 'Pinecone & ChromaDB', category: 'Vector DBs', proficiency: 'Advanced', context: 'Vector similarity search, Cosine metric indexing, Embeddings', tags: ['RAG'] },
      { name: 'Power BI & Tableau', category: 'BI', proficiency: 'Proficient', context: 'DAX measures, Interactive KPIs, AI visual summaries', tags: ['Dashboards'] }
    ]
  },
  {
    id: 'tools-devops',
    name: 'DevOps & Workflow Tools',
    icon: 'Cpu',
    description: 'Developer utilities, containerization, version control, and Unix operating environments.',
    skills: [
      { name: 'Git & GitHub', category: 'VCS', proficiency: 'Production', context: 'Branching, PRs, Versioning, CI workflows, Open source', tags: ['Collaboration'] },
      { name: 'Docker', category: 'Containers', proficiency: 'Proficient', context: 'Containerizing Python & Node apps, Dockerfile optimization', tags: ['Deployment'] },
      { name: 'Linux / Unix CLI', category: 'OS', proficiency: 'Advanced', context: 'Bash/Zsh scripting, Process management, Server administration', tags: ['Terminal'] },
      { name: 'VS Code & IDE Tooling', category: 'Tools', proficiency: 'Production', context: 'Debugging, Linting, Typecheck workflows, Extensions', tags: ['Productivity'] }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'deloitte-ai-cert',
    title: 'Deloitte Data & AI Analytics Simulation',
    issuer: 'Deloitte (via Forage)',
    issueDate: '2024',
    category: 'Engineering Simulation',
    badge: 'Deloitte AI',
    description: 'Completed enterprise AI simulation covering machine learning data preparation, telemetry anomaly diagnosis, and strategic model synthesis.',
    skills: ['Data Analytics', 'Machine Learning', 'Data Preprocessing', 'Statistical Modeling', 'Tableau'],
    driveUrl: 'https://drive.google.com/file/d/168c0cjdxsLC2ZREW4CA_coDYVKbDJb5C/view?usp=sharing',
    featured: true
  },
  {
    id: 'professional-cert',
    title: 'Professional Engineering & Technical Certification',
    issuer: 'Professional Certification Authority',
    issueDate: '2024',
    category: 'Professional Track',
    badge: 'Professional Credential',
    description: 'Verified professional engineering credential validating technical domain proficiency, core software engineering principles, and applied solutions.',
    skills: ['Software Engineering', 'System Architecture', 'Technical Computing', 'Problem Solving'],
    driveUrl: 'https://drive.google.com/file/d/1vQyY40sU9nHFOmbqNZ9YxE-FikxuHuAs/view?usp=sharing',
    featured: true
  },
  {
    id: 'tata-genai-cert',
    title: 'TATA Generative AI Powered Data Analytics',
    issuer: 'TATA / Forage',
    issueDate: '2024',
    category: 'AI & Data Track',
    badge: 'Generative AI',
    description: 'Completed hands-on program focusing on prompt engineering, predictive modeling, automated business insights, and generative AI reporting.',
    skills: ['Generative AI', 'Prompt Engineering', 'Python', 'Data Analytics', 'Pandas'],
    driveUrl: 'https://drive.google.com/drive/folders/1tDy-tY9c_k19J9IMi0K8XHMahBT67Peh?usp=share_link',
    featured: true
  },
  {
    id: 'oracle-sql-cert',
    title: 'Oracle Database SQL Certified Specialist',
    issuer: 'Oracle',
    issueDate: '2024',
    category: 'Database & Systems',
    badge: 'SQL Specialist',
    description: 'Specialist certification verifying proficiency in advanced SQL query design, relational modeling, performance indexing, and complex data retrieval.',
    skills: ['Oracle SQL', 'Database Design', 'Query Optimization', 'Relational DB'],
    driveUrl: 'https://drive.google.com/drive/folders/1tDy-tY9c_k19J9IMi0K8XHMahBT67Peh?usp=share_link',
    featured: true
  },
  {
    id: 'infosys-ai-cert',
    title: 'Infosys Artificial Intelligence & Deep Learning',
    issuer: 'Infosys Springboard',
    issueDate: '2024',
    category: 'AI & Data Track',
    badge: 'AI & Deep Learning',
    description: 'Certified tracks covering Artificial Intelligence fundamentals, Deep Learning architectures, and Natural Language Processing (NLP).',
    skills: ['Artificial Intelligence', 'Deep Learning', 'NLP', 'Machine Learning'],
    driveUrl: 'https://drive.google.com/drive/folders/1tDy-tY9c_k19J9IMi0K8XHMahBT67Peh?usp=share_link',
    featured: true
  },
  {
    id: 'ibm-python-cert',
    title: 'IBM Python 101 for Data Science',
    issuer: 'IBM',
    issueDate: '2024',
    category: 'Data Science Track',
    badge: 'Data Science',
    description: 'Comprehensive data science certification covering Python programming, Pandas data manipulation, NumPy scientific arrays, and exploratory analysis.',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Science'],
    driveUrl: 'https://drive.google.com/drive/folders/1tDy-tY9c_k19J9IMi0K8XHMahBT67Peh?usp=share_link',
    featured: true
  },
  {
    id: 'aws-genai-cert',
    title: 'AWS Generative AI: Planning & Art of the Possible',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: '2024',
    category: 'Cloud & AI Track',
    badge: 'AWS Cloud AI',
    description: 'Certified AWS curriculum covering Generative AI planning, foundation models, DevOps on AWS, and enterprise cloud AI architecture.',
    skills: ['AWS Cloud', 'Generative AI', 'DevOps', 'Cloud Architecture'],
    driveUrl: 'https://drive.google.com/drive/folders/1tDy-tY9c_k19J9IMi0K8XHMahBT67Peh?usp=share_link',
    featured: true
  },
  {
    id: 'wipro-java-cert',
    title: 'Java Certification — Wipro Training Academy',
    issuer: 'Wipro Training Academy',
    issueDate: '2024',
    category: 'Software & Backend',
    badge: 'Enterprise Java',
    description: 'Professional training certification in Java OOP principles, data structures, backend service patterns, and robust software engineering.',
    skills: ['Java', 'OOP', 'Data Structures', 'Backend Engineering'],
    driveUrl: 'https://drive.google.com/drive/folders/1tDy-tY9c_k19J9IMi0K8XHMahBT67Peh?usp=share_link',
    featured: true
  },
  {
    id: 'hackerrank-sql-python',
    title: 'HackerRank SQL (Intermediate) & Python (Basic)',
    issuer: 'HackerRank',
    issueDate: '2024',
    category: 'Technical Assessments',
    badge: 'Verified Assessment',
    description: 'Verified assessment credentials for intermediate relational SQL schema querying and fundamental Python problem solving.',
    skills: ['SQL', 'Python', 'Problem Solving', 'Data Manipulation'],
    driveUrl: 'https://drive.google.com/drive/folders/1tDy-tY9c_k19J9IMi0K8XHMahBT67Peh?usp=share_link',
    featured: true
  }
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'rag-engine',
    tabTitle: 'Enterprise_RAG.py',
    filename: 'ai_rag_pipeline.py',
    language: 'python',
    runtime: 'Python 3.11 • LangChain • Pinecone • FastAPI',
    summary: 'Production-ready document question-answering service using Pinecone vector embeddings and FastAPI async endpoint.',
    code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
from langchain.chains import RetrievalQA
from langchain.chat_models import ChatOpenAI

app = FastAPI(title="Enterprise RAG Inference Engine", version="1.0.0")

# Initialize Vector Store & Embeddings
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vector_store = Pinecone.from_existing_index(
    index_name="enterprise-docs", 
    embedding=embeddings
)

# Build retrieval chain with top-4 semantic chunks
qa_chain = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(model_name="gpt-4o", temperature=0.2),
    chain_type="stuff",
    retriever=vector_store.as_retriever(search_kwargs={"k": 4})
)

class QueryRequest(BaseModel):
    query: str
    user_id: str

@app.post("/api/v1/query")
async def execute_rag_query(request: QueryRequest):
    try:
        response = await qa_chain.arun(request.query)
        return {
            "status": "success",
            "answer": response,
            "engine": "gpt-4o-rag"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`
  },
  {
    id: 'pytorch-autoencoder',
    tabTitle: 'Anomaly_Net.py',
    filename: 'sensor_anomaly_net.py',
    language: 'python',
    runtime: 'PyTorch 2.2 • CUDA 12.1 • Scikit-Learn',
    summary: 'Unsupervised Autoencoder neural network detecting sensor failure drift through reconstruction loss thresholding.',
    code: `import torch
import torch.nn as nn

class SensorAnomalyAutoencoder(nn.Module):
    """Deep autoencoder for industrial sensor noise & breakdown detection"""
    def __init__(self, input_dim: int = 64):
        super().__init__()
        # Encoder: compress sensor telemetry to latent space
        self.encoder = nn.Sequential(
            nn.Linear(input_dim, 32),
            nn.BatchNorm1d(32),
            nn.ReLU(inplace=True),
            nn.Linear(32, 16),
            nn.ReLU(inplace=True)
        )
        # Decoder: reconstruct expected normal sensor values
        self.decoder = nn.Sequential(
            nn.Linear(16, 32),
            nn.BatchNorm1d(32),
            nn.ReLU(inplace=True),
            nn.Linear(32, input_dim)
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        latent = self.encoder(x)
        reconstruction = self.decoder(latent)
        return reconstruction

def compute_anomaly_score(model: nn.Module, telemetry_batch: torch.Tensor, threshold: float = 0.045):
    model.eval()
    with torch.no_grad():
        reconstructed = model(telemetry_batch)
        mse_loss = torch.mean((telemetry_batch - reconstructed) ** 2, dim=1)
        is_anomaly = mse_loss > threshold
        return is_anomaly, mse_loss.numpy()`
  },
  {
    id: 'analytics-sql',
    tabTitle: 'Telemetry_Analytics.sql',
    filename: 'process_intelligence.sql',
    language: 'sql',
    runtime: 'MySQL 8.0 • Window Functions • CTE Aggregations',
    summary: 'High-throughput enterprise analytical query computing machine failure percentiles and rolling thermal variance.',
    code: `-- Enterprise Process Intelligence & Sensor Breakdown Analysis
WITH MachineStats AS (
    SELECT 
        machine_id,
        sensor_type,
        temperature_celsius,
        vibration_hz,
        recorded_at,
        AVG(temperature_celsius) OVER(
            PARTITION BY machine_id, sensor_type 
            ORDER BY recorded_at 
            ROWS BETWEEN 60 PRECEDING AND CURRENT ROW
        ) AS rolling_avg_temp,
        DENSE_RANK() OVER(
            PARTITION BY sensor_type 
            ORDER BY vibration_hz DESC
        ) AS vibration_severity_rank
    FROM industrial_sensor_telemetry
    WHERE recording_status = 'ACTIVE'
)
SELECT 
    machine_id,
    sensor_type,
    ROUND(AVG(rolling_avg_temp), 2) AS mean_critical_temp,
    COUNT(CASE WHEN vibration_severity_rank <= 5 THEN 1 END) AS high_vibration_events,
    CASE 
        WHEN AVG(temperature_celsius) > 85.0 THEN 'CRITICAL_RISK'
        WHEN AVG(temperature_celsius) > 70.0 THEN 'ELEVATED_MONITOR'
        ELSE 'NORMAL_OPERATION'
    END AS maintenance_status
FROM MachineStats
GROUP BY machine_id, sensor_type
HAVING COUNT(*) > 100
ORDER BY high_vibration_events DESC;`
  }
];
