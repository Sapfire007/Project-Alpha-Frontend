
import { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Dynamically load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
    script.async = true;
    script.onload = () => setSplineLoaded(true);
    document.body.appendChild(script);
    
    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      // Check for demo credentials
      if (email === 'admin@admin.com' && password === 'Admin@123') {
        // Set logged in state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        navigate('/');
      } else {
        setLoading(false);
        alert('Invalid login. Try using admin@admin.com / Admin@123');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-quantum-bg relative overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0 z-0">
        {splineLoaded && (
          <spline-viewer 
            url="https://prod.spline.design/mJuxrEfmfoK8FIDg/scene.splinecode"
          ></spline-viewer>
        )}
      </div>
      
      <div className="max-w-sm w-full mx-4 glassmorphism rounded-xl p-8 z-10 quantum-border-glow animate-fade-in bg-black/30 backdrop-blur-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-8 w-8 rounded-full bg-quantum animate-pulse"></div>
            <span className="font-orbitron text-xl font-bold text-white">
              Blood<span className="text-quantum">Line.AI</span>
            </span>
          </div>
          <h1 className="text-2xl font-orbitron font-bold">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Log in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@admin.com"
              className="bg-white/10 border-quantum/30 text-white placeholder:text-gray-500 focus:border-quantum focus:ring-quantum"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-300">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin@123"
                className="bg-white/10 border-quantum/30 text-white placeholder:text-gray-500 focus:border-quantum focus:ring-quantum pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-quantum hover:text-quantum-glow transition-colors">
              Forgot password?
            </a>
          </div>
          
          <Button 
            type="submit" 
            className="quantum-button w-full flex items-center justify-center gap-2" 
            disabled={loading}
          >
            {loading ? (
              <div className="h-5 w-5 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
            ) : (
              <>
                <Lock size={18} />
                <span>Log in</span>
              </>
            )}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="text-quantum hover:text-quantum-glow transition-colors">
              Sign up
            </a>
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
