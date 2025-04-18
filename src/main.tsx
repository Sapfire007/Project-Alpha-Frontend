
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// The fonts are already imported in index.css via @import urls, no need for separate imports

createRoot(document.getElementById("root")!).render(<App />);
