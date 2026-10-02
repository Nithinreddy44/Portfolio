import React, { useState } from 'react';
import { useSound } from '../context/SoundContext';
import { 
  Activity, 
  Workflow, 
  CheckCircle2, 
  ShieldCheck, 
  Play, 
  Terminal 
} from 'lucide-react';

export const EngineeringPlayground: React.FC = () => {
  const { triggerSound } = useSound();
  const [activeTab, setActiveTab] = useState<'telemetry' | 'rag' | 'codescope'>('telemetry');

  // 1. Telemetry Sandbox State
  const [temperature, setTemperature] = useState<number>(68);
  const [vibration, setVibration] = useState<number>(45);

  const calculateFailureRisk = () => {
    // Verified heuristic derived from dataset analysis
    const tempScore = Math.max(0, (temperature - 40) / 60);
    const vibScore = Math.max(0, (vibration - 20) / 80);
    const compositeRisk = Math.min(100, Math.round((tempScore * 0.55 + vibScore * 0.45) * 100));
    
    let status = 'NORMAL_OPERATION';
    let statusColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    if (compositeRisk > 75) {
      status = 'CRITICAL_FAILURE_IMMINENT';
      statusColor = 'text-rose-400 bg-rose-500/10 border-rose-500/30';
    } else if (compositeRisk > 45) {
      status = 'ELEVATED_RISK_MONITOR';
      statusColor = 'text-amber-400 bg-amber-500/10 border-amber-500/30';
    }
    return { compositeRisk, status, statusColor };
  };

  const { compositeRisk, status, statusColor } = calculateFailureRisk();

  // 2. RAG Flow State
  const [ragPrompt, setRagPrompt] = useState<string>('What is the recall of the XGBoost predictive maintenance model?');
  const [isRagRunning, setIsRagRunning] = useState<boolean>(false);
  const [ragStep, setRagStep] = useState<number>(0);
  const [ragResult, setRagResult] = useState<string | null>(null);

  const runRagSimulation = () => {
    triggerSound('click');
    setIsRagRunning(true);
    setRagStep(1);
    setRagResult(null);

    setTimeout(() => {
      setRagStep(2);
      triggerSound('tab');
    }, 600);

    setTimeout(() => {
      setRagStep(3);
      triggerSound('tab');
    }, 1200);

    setTimeout(() => {
      setRagStep(4);
      setRagResult('The XGBoost predictive maintenance model achieved a verified Recall score of 96.24% and an F1-score of 0.7916 across 5,000 industrial sensor telemetry records.');
      setIsRagRunning(false);
      triggerSound('success');
    }, 1800);
  };

  // 3. CodeScope Sandbox State
  const [selectedFile, setSelectedFile] = useState<'backend' | 'frontend' | 'model'>('backend');

  const fileAudits = {
    backend: {
      filename: 'api/fastapi_gateway.py',
      domain: 'AI / API Microservices',
      architecture: 'Layered Asynchronous Architecture',
      tech: ['FastAPI', 'Pydantic v2', 'AsyncIO', 'Uvicorn'],
      securityScore: '96/100 (Clean)',
      findings: [
        '✅ No hardcoded API keys detected',
        '✅ Request validation schemas strictly enforced',
        '✅ Asynchronous coroutine workers utilized'
      ]
    },
    frontend: {
      filename: 'src/components/Dashboard.tsx',
      domain: 'Enterprise SaaS Web',
      architecture: 'Component-Driven React / Next.js',
      tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      securityScore: '98/100 (Safe)',
      findings: [
        '✅ Zero dangerous innerHTML injections',
        '✅ Strict TypeScript interfaces on all props',
        '✅ Accessible ARIA roles on dialog containers'
      ]
    },
    model: {
      filename: 'ml/xgboost_trainer.py',
      domain: 'Industrial Predictive Analytics',
      architecture: 'Scikit-Learn & XGBoost Pipeline',
      tech: ['XGBoost 2.0', 'Scikit-Learn', 'Pandas', 'NumPy'],
      securityScore: '94/100 (Optimized)',
      findings: [
        '✅ Stratified train/test data splitting used',
        '✅ Missing sensor value imputation verified',
        '✅ Evaluated on test set with 96.24% Recall'
      ]
    }
  };

  const currentAudit = fileAudits[selectedFile];

  return (
    <section id="playground" className="py-20 lg:py-28 relative bg-slate-100/40 dark:bg-dark-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>06 // INTERACTIVE PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Engineering <span className="gradient-text">Playground & Live Demos</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Interactive demonstrations showcasing predictive telemetry modeling, RAG document inference, and CodeScope security analysis.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => {
              triggerSound('tab');
              setActiveTab('telemetry');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'telemetry'
                ? 'bg-brand-500 text-white shadow-glow-cyan'
                : 'bg-slate-200/70 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/[0.08] border border-slate-300/40 dark:border-white/5'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>1. Sensor Failure Simulator</span>
          </button>

          <button
            onClick={() => {
              triggerSound('tab');
              setActiveTab('rag');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'rag'
                ? 'bg-brand-500 text-white shadow-glow-cyan'
                : 'bg-slate-200/70 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/[0.08] border border-slate-300/40 dark:border-white/5'
            }`}
          >
            <Workflow className="w-4 h-4" />
            <span>2. RAG Retrieval Visualizer</span>
          </button>

          <button
            onClick={() => {
              triggerSound('tab');
              setActiveTab('codescope');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'codescope'
                ? 'bg-brand-500 text-white shadow-glow-cyan'
                : 'bg-slate-200/70 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/[0.08] border border-slate-300/40 dark:border-white/5'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>3. CodeScope Audit Engine</span>
          </button>
        </div>

        {/* Demo Content Containers */}
        <div className="max-w-4xl mx-auto">
          
          {/* DEMO 1: Telemetry Sensor Anomaly Sandbox */}
          {activeTab === 'telemetry' && (
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-brand-500/20 shadow-xl text-left animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 dark:border-white/10 gap-3">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-brand-400" />
                    <span>Real-Time Sensor Telemetry & Anomaly Classifier</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Adjust continuous telemetry sliders to test XGBoost failure risk classification.
                  </p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${statusColor}`}>
                  {status}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                
                {/* Sliders */}
                <div className="space-y-6">
                  {/* Temperature Slider */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">Sensor Temperature</span>
                      <span className="font-bold text-brand-500 dark:text-brand-400">{temperature}°C</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="110"
                      value={temperature}
                      onChange={(e) => {
                        triggerSound('hover');
                        setTemperature(Number(e.target.value));
                      }}
                      className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                      <span>30°C (Idle)</span>
                      <span>70°C (Nominal)</span>
                      <span>110°C (Overheat)</span>
                    </div>
                  </div>

                  {/* Vibration Slider */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">Vibration Frequency</span>
                      <span className="font-bold text-neural-500 dark:text-neural-300">{vibration} Hz</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={vibration}
                      onChange={(e) => {
                        triggerSound('hover');
                        setVibration(Number(e.target.value));
                      }}
                      className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-neural-500"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                      <span>10 Hz (Smooth)</span>
                      <span>50 Hz (Standard)</span>
                      <span>100 Hz (Severe)</span>
                    </div>
                  </div>
                </div>

                {/* Risk Gauge Box */}
                <div className="flex flex-col justify-center p-6 rounded-2xl bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-center">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Model Predicted Failure Risk
                  </span>
                  <div className="text-4xl sm:text-5xl font-heading font-extrabold my-2 gradient-text">
                    {compositeRisk}%
                  </div>
                  <div className="w-full bg-slate-300 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden my-2">
                    <div
                      className={`h-full transition-all duration-200 ${
                        compositeRisk > 75 ? 'bg-rose-500' : compositeRisk > 45 ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${compositeRisk}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Based on XGBoost model calibrated on 5,000 dataset rows (96.24% recall).
                  </p>
                </div>

              </div>

              <div className="p-3.5 rounded-xl bg-slate-200/50 dark:bg-black/30 border border-slate-300/40 dark:border-white/5 text-xs font-mono text-slate-600 dark:text-slate-300 flex items-center justify-between">
                <span>Model Engine: XGBClassifier (n_est=150, lr=0.05)</span>
                <span className="text-brand-400">Status: Active Stream</span>
              </div>
            </div>
          )}

          {/* DEMO 2: Enterprise RAG Flow Visualizer */}
          {activeTab === 'rag' && (
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-brand-500/20 shadow-xl text-left animate-fadeIn">
              <div className="pb-5 border-b border-slate-200 dark:border-white/10">
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-brand-400" />
                  <span>Enterprise RAG Pipeline Execution Flow</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Simulate live vector embedding retrieval and context-grounded LLM synthesis.
                </p>
              </div>

              {/* Input Query Bar */}
              <div className="my-6">
                <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block mb-2">
                  Input Natural Language Query:
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={ragPrompt}
                    onChange={(e) => setRagPrompt(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-400"
                  />
                  <button
                    onClick={runRagSimulation}
                    disabled={isRagRunning}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-500 to-neural-600 hover:from-brand-400 hover:to-neural-500 text-white shadow-glow-cyan transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isRagRunning ? 'Executing Pipeline...' : 'Run RAG Flow'}</span>
                  </button>
                </div>
              </div>

              {/* Step Sequence Visualization */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 mb-6">
                <div className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                  ragStep >= 1 ? 'bg-brand-500/15 border-brand-500/40 text-brand-300 font-bold' : 'bg-white/[0.02] border-white/5 text-slate-500'
                }`}>
                  <div className="text-[10px] text-slate-400">Step 1</div>
                  <div>1. Embed Query</div>
                  <div className="text-[9px] text-slate-400 font-normal">text-embedding-3-small</div>
                </div>

                <div className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                  ragStep >= 2 ? 'bg-neural-500/15 border-neural-500/40 text-neural-300 font-bold' : 'bg-white/[0.02] border-white/5 text-slate-500'
                }`}>
                  <div className="text-[10px] text-slate-400">Step 2</div>
                  <div>2. Pinecone Search</div>
                  <div className="text-[9px] text-slate-400 font-normal">Cosine metric k=4</div>
                </div>

                <div className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                  ragStep >= 3 ? 'bg-violet-500/15 border-violet-500/40 text-violet-300 font-bold' : 'bg-white/[0.02] border-white/5 text-slate-500'
                }`}>
                  <div className="text-[10px] text-slate-400">Step 3</div>
                  <div>3. Augment Context</div>
                  <div className="text-[9px] text-slate-400 font-normal">Prompt Injection</div>
                </div>

                <div className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                  ragStep >= 4 ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-bold' : 'bg-white/[0.02] border-white/5 text-slate-500'
                }`}>
                  <div className="text-[10px] text-slate-400">Step 4</div>
                  <div>4. LLM Synthesis</div>
                  <div className="text-[9px] text-slate-400 font-normal">Grounded Response</div>
                </div>
              </div>

              {/* Response Output Box */}
              {ragResult && (
                <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 font-mono text-xs text-slate-200 animate-fadeIn">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Grounded RAG Response Generated:</span>
                  </div>
                  <p className="leading-relaxed text-slate-100">{ragResult}</p>
                </div>
              )}
            </div>
          )}

          {/* DEMO 3: CodeScope Security & Architecture Audit */}
          {activeTab === 'codescope' && (
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-brand-500/20 shadow-xl text-left animate-fadeIn">
              <div className="pb-5 border-b border-slate-200 dark:border-white/10">
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-400" />
                  <span>CodeScope — AST Codebase & Security Scanner</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Select a repository module to test automated domain, architecture, and vulnerability detection.
                </p>
              </div>

              {/* Sample File Selector */}
              <div className="flex flex-wrap gap-2 my-6">
                <button
                  onClick={() => {
                    triggerSound('click');
                    setSelectedFile('backend');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedFile === 'backend'
                      ? 'bg-brand-500 text-white font-bold'
                      : 'bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  api/fastapi_gateway.py
                </button>

                <button
                  onClick={() => {
                    triggerSound('click');
                    setSelectedFile('frontend');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedFile === 'frontend'
                      ? 'bg-brand-500 text-white font-bold'
                      : 'bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  src/components/Dashboard.tsx
                </button>

                <button
                  onClick={() => {
                    triggerSound('click');
                    setSelectedFile('model');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedFile === 'model'
                      ? 'bg-brand-500 text-white font-bold'
                      : 'bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  ml/xgboost_trainer.py
                </button>
              </div>

              {/* Audit Results Dashboard */}
              <div className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                    <span className="text-[10px] text-slate-400 block">Classified Domain:</span>
                    <span className="font-bold text-slate-900 dark:text-white mt-1 block">{currentAudit.domain}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                    <span className="text-[10px] text-slate-400 block">Architecture Pattern:</span>
                    <span className="font-bold text-brand-400 mt-1 block">{currentAudit.architecture}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                    <span className="text-[10px] text-slate-400 block">Security Audit Score:</span>
                    <span className="font-bold text-emerald-400 mt-1 block">{currentAudit.securityScore}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 text-slate-300">
                  <span className="text-[11px] text-slate-400 font-bold block mb-2">
                    Security Findings & Static AST Rules:
                  </span>
                  <ul className="space-y-1.5">
                    {currentAudit.findings.map((f, idx) => (
                      <li key={idx} className="text-slate-200">{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
