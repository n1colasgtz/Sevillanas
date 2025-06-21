import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { VideoData, VideoCarouselProps } from '../types';
import { YouTubeService } from '../services/YouTubeService';

const VideoThumbnail: React.FC<{ video: VideoData, onClick: () => void }> = ({ video, onClick }) => {
  const videoId = YouTubeService.extractVideoId(video.url);
  const [thumbnailUrl, setThumbnailUrl] = useState(YouTubeService.getThumbnailUrl(videoId, 'high'));
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    if (!imageError) {
      setThumbnailUrl(YouTubeService.getThumbnailUrl(videoId, 'medium'));
      setImageError(true);
    } else {
      setThumbnailUrl(YouTubeService.getThumbnailUrl(videoId, 'default'));
    }
  };

  return (
    <div 
      className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group transition-transform hover:scale-105"
      onClick={onClick}
    >
      <img 
        src={thumbnailUrl} 
        alt={video.title}
        className="w-full h-36 sm:h-40 md:h-48 object-cover"
        onError={handleImageError}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-red-700 rounded-full p-2 md:p-3">
          <Play className="h-6 w-6 md:h-8 md:w-8 text-white" fill="white" />
        </div>
      </div>
    </div>
  );
};

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button 
    className="absolute right-0 z-10 bg-red-700 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-red-800 transition-colors flex items-center justify-center"
    onClick={onClick}
    aria-label="Next slide"
    style={{ top: '30%', transform: 'translateY(-30%)' }}
  >
    <ChevronRight size={24} />
  </button>
);

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button 
    className="absolute left-0 z-10 bg-red-700 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-red-800 transition-colors flex items-center justify-center"
    onClick={onClick}
    aria-label="Previous slide"
    style={{ top: '30%', transform: 'translateY(-30%)' }}
  >
    <ChevronLeft size={24} />
  </button>
);

const VideoModal: React.FC<{ 
  video: VideoData | null, 
  onClose: () => void,
  videoInfo: Record<string, { title: string; channelName: string }>
}> = ({ video, onClose, videoInfo }) => {
  if (!video) return null;
  
  const videoId = YouTubeService.extractVideoId(video.url);
  const info = videoInfo[video.id] || { title: video.title, channelName: '' };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 md:p-4" onClick={onClose}>
      <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="p-3 md:p-4 bg-red-700 text-white flex justify-between items-center">
          <div className="flex-1 mr-4">
            <h3 className="font-bold truncate text-sm md:text-base">{info.title}</h3>
            {info.channelName && (
              <p className="text-xs md:text-sm text-white/80 truncate">{info.channelName}</p>
            )}
          </div>
          <button onClick={onClose} className="text-white hover:text-red-200 flex-shrink-0" aria-label="Close video">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="relative pt-[56.25%]">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src={YouTubeService.getEmbedUrl(videoId)}
            title={info.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const VideoCarousel: React.FC<VideoCarouselProps> = ({ title, description, videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [videoInfo, setVideoInfo] = useState<Record<string, { title: string; channelName: string }>>({});
  
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const info = await YouTubeService.batchFetchVideoInfo(videos);
        setVideoInfo(prev => ({...prev, ...info}));
      } catch (error) {
        console.error('Error fetching video info:', error);
      }
    };
    
    fetchInfo();
  }, [videos]);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  const openVideo = (video: VideoData) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="py-8 md:py-12 px-4 md:px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{title}</h2>
          <div className="w-16 md:w-24 h-1 bg-red-700 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg max-w-3xl mx-auto">{description}</p>
        </div>
        
        <div className="relative px-12 md:px-14">
          <Slider {...settings}>
            {videos.map((video) => (
              <div key={video.id} className="px-2">
                <VideoThumbnail 
                  video={{
                    ...video,
                    title: videoInfo[video.id]?.title || video.title
                  }} 
                  onClick={() => openVideo(video)} 
                />
                <h3 className="mt-2 mb-2 text-center font-semibold text-gray-800 line-clamp-2 text-sm md:text-base">
                  {videoInfo[video.id]?.title || video.title}
                </h3>
                {videoInfo[video.id]?.channelName && (
                  <p className="text-center text-gray-600 text-sm truncate">
                    {videoInfo[video.id].channelName}
                  </p>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <VideoModal 
        video={selectedVideo} 
        onClose={closeVideo} 
        videoInfo={videoInfo}
      />
    </div>
  );
};

export default VideoCarousel;