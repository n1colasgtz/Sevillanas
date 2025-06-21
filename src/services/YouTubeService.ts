/**
 * Service for handling YouTube-related operations
 * Following Single Responsibility Principle
 */
export class YouTubeService {
  // Cache for storing video titles and channel names
  private static titleCache: Record<string, string> = {};
  private static channelCache: Record<string, string> = {};
  
  /**
   * Extracts the YouTube video ID from a URL
   */
  static extractVideoId(url: string): string {
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  }

  /**
   * Gets the thumbnail URL for a YouTube video
   */
  static getThumbnailUrl(videoId: string, quality: 'max' | 'high' | 'medium' | 'default' = 'high'): string {
    const qualityMap = {
      max: 'maxresdefault',
      high: 'hqdefault',
      medium: 'mqdefault',
      default: 'default'
    };
    
    return `https://i.ytimg.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
  }

  /**
   * Gets the embed URL for a YouTube video
   */
  static getEmbedUrl(videoId: string): string {
    return `https://www.youtube.com/embed/${videoId}`;
  }

  /**
   * Fetches video info from YouTube oEmbed API with caching
   */
  static async fetchVideoInfo(url: string): Promise<{ title: string; channelName: string }> {
    const videoId = this.extractVideoId(url);
    
    // Return from cache if available
    if (this.titleCache[videoId] && this.channelCache[videoId]) {
      return {
        title: this.titleCache[videoId],
        channelName: this.channelCache[videoId]
      };
    }
    
    try {
      const response = await fetch(`https://www.youtube.com/oembed?url=${url}&format=json`);
      const data = await response.json();
      const title = data.title || '';
      const channelName = data.author_name || '';
      
      // Store in cache
      if (title) this.titleCache[videoId] = title;
      if (channelName) this.channelCache[videoId] = channelName;
      
      return { title, channelName };
    } catch (error) {
      console.error("Error fetching video info:", error);
      return { title: '', channelName: '' };
    }
  }
  
  /**
   * Batch fetch multiple video info at once
   */
  static async batchFetchVideoInfo(videos: { id: string, url: string }[]): Promise<Record<string, { title: string; channelName: string }>> {
    const info: Record<string, { title: string; channelName: string }> = {};
    const videosToFetch = videos.filter(video => {
      const videoId = this.extractVideoId(video.url);
      if (this.titleCache[videoId] && this.channelCache[videoId]) {
        info[video.id] = {
          title: this.titleCache[videoId],
          channelName: this.channelCache[videoId]
        };
        return false;
      }
      return true;
    });
    
    if (videosToFetch.length > 0) {
      const fetchPromises = videosToFetch.map(async (video) => {
        try {
          const videoId = this.extractVideoId(video.url);
          const response = await fetch(`https://www.youtube.com/oembed?url=${video.url}&format=json`);
          const data = await response.json();
          const title = data.title || '';
          const channelName = data.author_name || '';
          
          if (title) this.titleCache[videoId] = title;
          if (channelName) this.channelCache[videoId] = channelName;
          
          info[video.id] = { title, channelName };
        } catch (error) {
          console.error(`Error fetching info for video ${video.id}:`, error);
        }
      });
      
      await Promise.all(fetchPromises);
    }
    
    return info;
  }
}