import { useState, useRef, useEffect } from 'react';
import { Upload, FileText, ArrowRight, Check, AlertCircle, Microscope, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { processTextFile } from "@/utils/fileProcessor";

interface DemoStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'waiting' | 'active' | 'completed' | 'error';
}

const Demo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [showConsole, setShowConsole] = useState(false);
  const [mockCode, setMockCode] = useState('');
  const [actionComplete, setActionComplete] = useState(false);
  
  // Add a ref for the console container
  const consoleRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect when mockCode changes
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [mockCode]);

  const steps: DemoStep[] = [
    {
      title: "Upload Report",
      description: "Upload your blood test report to begin analysis",
      icon: <Upload size={22} />,
      status: activeStep === 0 ? 'active' : activeStep > 0 ? 'completed' : 'waiting'
    },
    {
      title: "Analyzing Report",
      description: "Our quantum AI is scanning your report",
      icon: <Microscope size={22} />,
      status: activeStep === 1 ? 'active' : activeStep > 1 ? 'completed' : 'waiting'
    },
    {
      title: "Anomalies Detected",
      description: "3 potential health markers identified",
      icon: <AlertCircle size={22} />,
      status: activeStep === 2 ? 'active' : activeStep > 2 ? 'completed' : 'waiting'
    },
    {
      title: "Drug Recommendations",
      description: "Personalized treatment options",
      icon: <FileText size={22} />,
      status: activeStep === 3 ? 'active' : 'waiting'
    }
  ];

  const mockCommands = [
    "[    0.000000] Initializing quantum fabric subsys...",
    "[    0.000874] Engaging core entanglement lattice...",
    "[    0.001204] Quantum Loop v9.42-alpha (Compiled @ Q-Forge // Apr 2025)",
    "[    0.002017] Decoherence protection module: ACTIVE",
    "[    0.003601] Allocating qRAM space: 131072 qubits",
    "[    0.004902] TensorLink: Connecting neural channels [OK]",
    "[    0.006303] Boot Parameter: qbit-mode=entangled root=/dev/qcore1",
    "[    0.007770] ⚛  Quantum Processing Unit detected: QPU-X 128-core / 5THz / Gen-5",
    "[    0.008111] Initializing dimensional weights...",
    "[    0.008422] Core calibration complete — Entropy levels nominal",
    "[    0.009314] Loading Quantum ML Stack v7.9...",
    "[    0.010127] >> Quantum Transformer Engine... Initialized",
    "[    0.011987] >> Probabilistic Layer Sync... [OK]",
    "[    0.012997] >> Multiverse Backpropagation Matrix... [OK]",
    "[    0.014001] Activating Hyper-Context Embeddings...",
    "[    0.014842] Latent Space Navigator loaded :: Flux ready",
    "[    0.015999] Loading predictive awareness model: IG-R.I.S. (v2.0)",
    "[    0.017711] Neural shard links established with Synaptic Cortex Grid",
    "[    0.018901] Bootstrapping decision fields... [SUCCESS]",
    "[    0.019888] ⌬ Temporal drift: ±0.000003s :: within acceptable bounds",
    "[    0.021001] >>> Conscious Probability Engine: ONLINE",
    "[    0.022900] >>> Deep Insight Kernel initiated",
    "[    0.023877] >>> Entropic Noise Filters engaged",
    "[    0.025015] All subsystems nominal. Executing final pulse sequence...",
    "[    0.026666] ┌──────────────────────────────────────────────────────┐",
    "[    0.026999] │     Quantum Loop Kernel Process Successful ⚡       │",
    "[    0.027111] └──────────────────────────────────────────────────────┘"
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setUploadedFile(file);
      setShowConsole(false);
      setActionComplete(false);
      setMockCode('');
    }
  };

  const initializeQuantumCircuit = async () => {
    if (!uploadedFile) return;
    
    setIsProcessing(true);
    setProcessingProgress(0);
    setShowConsole(true);
    setActionComplete(false);
    
    let currentCommand = 0;
    const commandInterval = setInterval(() => {
      if (currentCommand < mockCommands.length) {
        setMockCode(prev => prev + '\n' + mockCommands[currentCommand]);
        currentCommand++;
      } else {
        clearInterval(commandInterval);
      }
    }, 200);
    
    const progressInterval = setInterval(() => {
      setProcessingProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, 100);
    
    try {
      await processTextFile(uploadedFile);
      simulateAnalysisProcess();
      
      setTimeout(() => {
        setShowConsole(false);
        setActionComplete(true);
      }, 6000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const simulateAnalysisProcess = () => {
    setActiveStep(1);
    setTimeout(() => {
      setActiveStep(2);
      setTimeout(() => {
        setActiveStep(3);
      }, 2000);
    }, 2000);
  };

  const getStepClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'border-quantum-glow bg-quantum/10 text-quantum-glow animate-pulse';
      case 'completed':
        return 'border-green-500 bg-green-500/10 text-green-500';
      case 'error':
        return 'border-red-500 bg-red-500/10 text-red-500';
      default:
        return 'border-gray-600 bg-gray-800/50 text-gray-400';
    }
  };

  return (
    <section id="demo" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,225,0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            See It In <span className="text-quantum quantum-text-glow">Action</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience how BloodLine.AI processes your blood reports in real-time
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto glassmorphism rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-orbitron mb-6">Quantum Playground</h3>
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center ${getStepClass(step.status)}`}>
                      {step.status === 'completed' ? <Check size={18} /> : step.icon}
                    </div>
                    
                    <div>
                      <h4 className={`font-medium ${step.status === 'active' ? 'text-quantum-glow' : step.status === 'completed' ? 'text-green-500' : 'text-gray-300'}`}>
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {activeStep === 0 && (
                <div className="mt-8">
                  <label className="relative block p-6 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-quantum transition-colors duration-300">
                    <input 
                      type="file" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                      onChange={handleFileUpload}
                      accept=".txt"
                    />
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-400">
                        Drag and drop your blood report or click to browse
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Accepts .txt files
                      </p>
                    </div>
                  </label>
                  
                  {uploadedFile && (
                    <div className="mt-4">
                      <Button
                        onClick={initializeQuantumCircuit}
                        className="quantum-button w-full flex items-center justify-center gap-2 py-3"
                        disabled={isProcessing}
                      >
                        <Zap className="w-5 h-5" />
                        Initialize Quantum Circuit
                      </Button>
                    </div>
                  )}
                </div>
              )}
              
              {isProcessing && (
                <div className="mt-6 p-6 rounded-lg bg-[linear-gradient(45deg,rgba(155,135,245,0.1),rgba(0,255,225,0.1))] border border-quantum/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-quantum-glow">Processing Blood Report</span>
                    <span className="text-quantum">{processingProgress}%</span>
                  </div>
                  <Progress value={processingProgress} className="h-2" />
                  <p className="text-xs text-gray-400 mt-2">Initializing quantum analysis circuit...</p>
                </div>
              )}
            </div>
            
            <div className="relative rounded-xl overflow-hidden">
              <div className={`aspect-[9/16] rounded-xl p-5 backdrop-blur-sm border border-quantum/30 ${isProcessing ? 'quantum-processing-bg' : 'bg-quantum-bg/80'}`}>
                {isProcessing && (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <video 
                      className="w-full h-full object-cover"
                      src="https://img.pikbest.com/09/42/51/539pIkbEsTcVq.mp4"
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                )}
                <div className="h-full flex flex-col bg-black/50 rounded-lg p-4 relative z-10">
                  {showConsole ? (
                    <div 
                      ref={consoleRef}
                      className="flex-1 font-mono text-sm text-green-400 overflow-auto whitespace-pre-wrap"
                    >
                      {mockCode}
                    </div>
                  ) : actionComplete ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <Check className="w-16 h-16 mx-auto mb-4 text-green-500" />
                        <p className="text-green-500 font-semibold">Action Initiated</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <p>Upload a blood report to begin analysis</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
