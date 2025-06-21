import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate
} from 'react-router-dom';
import App from './App.tsx';
import AnnouncementPage from './components/AnnouncementPage.tsx';
import './index.css';
import { LoggingService } from './services/LoggingService.ts';

// Log client information when the application loads
LoggingService.logClientInfo();

// Create router with future flags enabled
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/anuncio/:id" element={<AnnouncementPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

// Create root and render app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);