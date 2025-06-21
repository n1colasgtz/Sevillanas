import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Facebook, Youtube, Share2, Home, ArrowRight, Sparkles, Download, ChevronDown, X } from 'lucide-react';
import * as htmlToImage from 'html-to-image';

// Define export format options
type ExportFormat = 'svg' | 'png' | 'jpg' | 'webp' | 'gif' | 'tiff' | 'heif';

interface FormatOption {
  id: ExportFormat;
  label: string;
  method: (node: HTMLElement, options?: any) => Promise<string>;
  extension: string;
  estimatedSizeFactor: number; // Relative size factor compared to PNG
}

const AnnouncementPage: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showFormatOptions, setShowFormatOptions] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('svg');
  const [estimatedSize, setEstimatedSize] = useState<string>('~0.5 MB');
  const announcementRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Format options with their corresponding export methods
  const formatOptions: FormatOption[] = [
    { id: 'svg', label: 'SVG', method: htmlToImage.toSvg, extension: 'svg', estimatedSizeFactor: 0.7 },
    { id: 'png', label: 'PNG', method: htmlToImage.toPng, extension: 'png', estimatedSizeFactor: 1.0 },
    { id: 'jpg', label: 'JPG', method: htmlToImage.toJpeg, extension: 'jpg', estimatedSizeFactor: 0.5 },
    { id: 'webp', label: 'WebP', method: htmlToImage.toPixelData as any, extension: 'webp', estimatedSizeFactor: 0.3 },
    { id: 'gif', label: 'GIF', method: htmlToImage.toPng as any, extension: 'gif', estimatedSizeFactor: 1.2 },
    { id: 'tiff', label: 'TIFF', method: htmlToImage.toPng as any, extension: 'tiff', estimatedSizeFactor: 1.5 },
    { id: 'heif', label: 'HEIF', method: htmlToImage.toPng as any, extension: 'heif', estimatedSizeFactor: 0.4 }
  ];

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    // Calculate estimated file size when format changes
    calculateEstimatedSize();

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowFormatOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedFormat]);

  // Calculate estimated file size based on content dimensions and format
  const calculateEstimatedSize = () => {
    if (!announcementRef.current) return;
    
    const { width, height } = announcementRef.current.getBoundingClientRect();
    const pixelCount = width * height;
    const selectedOption = formatOptions.find(option => option.id === selectedFormat);
    
    if (!selectedOption) return;
    
    // Base size calculation (very approximate)
    // PNG is roughly 4 bytes per pixel (RGBA)
    const baseSizeInBytes = pixelCount * 4;
    const estimatedSizeInBytes = baseSizeInBytes * selectedOption.estimatedSizeFactor;
    
    // Convert to MB with 1 decimal place
    const sizeInMB = (estimatedSizeInBytes / (1024 * 1024)).toFixed(1);
    setEstimatedSize(`~${sizeInMB} MB`);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
        title: 'Somos Discretos Sevillanas - ¡Hemos actualizado nuestra web!',
        text: 'Ahora todos nuestros vídeos se ven en máxima resolución. ¡Ven a aprender sevillanas sin vergüenza!',
        url: window.location.href,
      }).catch(err => {
        console.error('Error al compartir:', err);
      });
    } else {
      alert('Compartir no está disponible en tu navegador');
    }
  };

  const handleExport = async () => {
    if (!announcementRef.current) return;
    
    try {
      setIsExporting(true);
      
      const selectedOption = formatOptions.find(option => option.id === selectedFormat);
      if (!selectedOption) {
        throw new Error('Formato no válido');
      }
      
      // Get export method based on selected format
      const exportMethod = selectedOption.method;
      
      // Common options for all formats
      const options = {
        quality: 0.95,
        backgroundColor: 'white',
        style: {
          transform: 'none',
          opacity: '1'
        }
      };
      
      // Special handling for JPEG
      const formatSpecificOptions = selectedFormat === 'jpg' ? { ...options, quality: 0.9 } : options;
      
      // Export the image
      const dataUrl = await exportMethod(announcementRef.current, formatSpecificOptions);
      
      // Create a link to download the image
      const link = document.createElement('a');
      link.download = `somos-discretos-anuncio.${selectedOption.extension}`;
      link.href = dataUrl;
      link.click();
      
    } catch (error) {
      console.error(`Error al exportar como ${selectedFormat.toUpperCase()}:`, error);
      alert(`Hubo un error al exportar el anuncio como ${selectedFormat.toUpperCase()}. Por favor, inténtalo de nuevo.`);
    } finally {
      setIsExporting(false);
    }
  };

  const handleFormatSelect = (format: ExportFormat) => {
    setSelectedFormat(format);
    setShowFormatOptions(false);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Export options dropdown */}
      <div ref={dropdownRef} className="absolute top-4 left-4 z-50">
        <div className="flex items-center">
          <div className="relative">
            <button 
              onClick={() => setShowFormatOptions(!showFormatOptions)}
              disabled={isExporting}
              className="bg-white hover:bg-red-50 text-red-700 font-bold py-2 px-4 rounded-l-lg shadow-lg transition-all duration-300 flex items-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed border-r border-red-200"
            >
              <Download className="h-5 w-5 mr-2" />
              <span>{isExporting ? 'Exportando...' : `Exportar ${selectedFormat.toUpperCase()}`}</span>
              <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${showFormatOptions ? 'rotate-180' : ''}`} />
            </button>
            
            {showFormatOptions && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-red-100 w-full z-10">
                <div className="py-1">
                  {formatOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleFormatSelect(option.id)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-red-50 flex items-center justify-between ${
                        selectedFormat === option.id ? 'bg-red-50 text-red-700 font-medium' : 'text-gray-700'
                      }`}
                    >
                      <span>{option.label}</span>
                      {selectedFormat === option.id && (
                        <span className="text-red-500">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <button 
            onClick={handleExport}
            disabled={isExporting}
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-r-lg shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isExporting ? 'Procesando...' : 'Descargar'}
          </button>
          
          <div className="ml-3 bg-white/90 text-red-800 text-sm py-1 px-3 rounded-full shadow-sm">
            {estimatedSize}
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-pattern-flamenco"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-pattern-flamenco"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-red-500 opacity-10 blur-3xl"></div>
      </div>
      
      {/* Decorative border elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-20 h-20 border-t-2 border-l-2 border-yellow-400 opacity-30 rounded-tl-xl"></div>
        <div className="absolute top-[10%] right-[10%] w-20 h-20 border-t-2 border-r-2 border-yellow-400 opacity-30 rounded-tr-xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-20 h-20 border-b-2 border-l-2 border-yellow-400 opacity-30 rounded-bl-xl"></div>
        <div className="absolute bottom-[10%] right-[10%] w-20 h-20 border-b-2 border-r-2 border-yellow-400 opacity-30 rounded-br-xl"></div>
      </div>
      
      <div 
        ref={announcementRef}
        className={`max-w-4xl w-full h-[90vh] bg-white shadow-2xl overflow-hidden transition-all duration-700 flex flex-col ${
          isAnimated ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header with logo */}
        <div className="bg-gradient-to-r from-red-900 to-red-800 p-4 flex items-center justify-center relative overflow-hidden">
          {/* Patrón de fondo que cubre todo el encabezado sin dejar espacios en las esquinas */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-red-900" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='6' viewBox='0 0 60 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h6c3 0 3 3 0 3h-6zM12 0h6c3 0 3 3 0 3h-6zM24 0h6c3 0 3 3 0 3h-6zM36 0h6c3 0 3 3 0 3h-6zM48 0h6c3 0 3 3 0 3h-6z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 6px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center'
            }}></div>
          </div>
          
          <div className="flex items-center relative">
            <div className={`text-4xl mr-3 transition-all duration-1000 delay-300 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}>💃</div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className={`font-display text-3xl text-white tracking-wide leading-none mb-1 transition-all duration-700 delay-100 ${isAnimated ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
                  SOMOS DISCRETOS
                </span>
                <span className="ml-2 text-[10px] bg-white text-red-700 px-1.5 py-0.5 rounded font-medium tracking-wide shadow-sm">v2</span>
              </div>
              <div className="flex">
                <span className={`text-xs font-heading font-semibold tracking-widest uppercase text-yellow-400 transition-all duration-700 delay-200 ${isAnimated ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}>
                  SEVILLANAS <span className="underline-passion">CON PASIÓN</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>
        
        {/* Announcement content - with flex-grow to take available space */}
        <div className="p-6 md:p-8 relative flex-grow overflow-hidden">
          <div className="h-full flex flex-col">
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#9b2c2c">
                <path d="M0,0 L100,0 L100,100 Q70,70 0,100 Z"></path>
              </svg>
            </div>
            
            <div className={`bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-700 p-4 mb-6 rounded-r-lg shadow-sm transition-all duration-700 delay-300 ${isAnimated ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-2xl font-bold text-red-800 mb-2">
                ¡Hemos actualizado nuestra web!
              </h2>
              <p className="text-red-700 font-medium text-lg">
                Ahora todos nuestros vídeos se ven en máxima resolución
              </p>
            </div>
            
            <div className="flex-grow overflow-hidden flex flex-col">
              <div className={`flex-grow flex flex-col gap-6 transition-all duration-700 delay-400 ${isAnimated ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
                {/* Contenedor principal a ancho completo */}
                <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-md space-y-4 w-full">
                  <h3 className="font-bold text-xl text-gray-800 border-b border-gray-200 pb-2">
                    Querida comunidad de bailarines discretos:
                  </h3>
                  
                  <p className="text-gray-700 text-base">
                    Nos complace anunciar que hemos realizado importantes mejoras en nuestra plataforma. Ahora todos nuestros vídeos educativos se reproducen en <span className="font-semibold text-red-800">máxima resolución</span>, para que puedas apreciar cada detalle de los movimientos y técnicas de las sevillanas.
                  </p>
                  
                  <p className="text-gray-700 text-base">
                    Queremos expresar nuestro más sincero agradecimiento por el increíble apoyo que hemos recibido en este emprendimiento. Gracias a ustedes, cada día más personas pueden aprender a bailar sevillanas sin miedo al qué dirán.
                  </p>
                  
                  <div className="bg-gradient-to-r from-red-50 to-red-100 p-3 rounded-lg border-l-2 border-red-700 mt-2">
                    <p className="text-red-800 font-medium text-sm">
                      Seguimos comprometidos con nuestra misión de hacer accesible el arte de las sevillanas para todos, sin barreras económicas ni psicológicas.
                    </p>
                  </div>
                </div>
                
                {/* Contenedor Próximamente debajo del principal */}
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-lg border-l-4 border-yellow-400 shadow-md relative overflow-hidden w-full">
                  <div className="absolute -right-6 -bottom-6 opacity-10">
                    <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z" fill="#f59e0b"></path>
                    </svg>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Sparkles className="h-6 w-6 text-yellow-600 mr-2" />
                    <h3 className="font-bold text-lg text-yellow-800">¡Próximamente!</h3>
                  </div>
                  <p className="text-yellow-800 text-base">
                    Estamos ampliando nuestro material educativo y pronto subiremos más contenido para todos los niveles.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Footer with decorative elements */}
        <div className={`bg-gradient-to-r from-red-50 to-red-100 p-4 border-t border-red-100 relative overflow-hidden transition-all duration-700 delay-600 ${isAnimated ? 'opacity-100 transform-none' : 'opacity-0'}`}>
          <div className="relative z-10 flex justify-between items-center">
            <p className="text-red-700 text-sm font-medium">© 2025 SOMOS DISCRETOS SEVILLANAS. Proyecto Open Source. Todos los derechos reservados.</p>
            
          </div>
          
          {/* Decorative pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-yellow-400 to-red-700 opacity-70"></div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-red-200 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-yellow-200 rounded-full opacity-50 blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;