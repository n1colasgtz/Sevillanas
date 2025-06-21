/**
 * Service for logging client information
 * Following Single Responsibility Principle
 */
export class LoggingService {
  /**
   * Logs client information to the console
   * Captures IP, user agent, and other relevant data
   */
  static logClientInfo(): void {
    try {
      // Get user agent information
      const userAgent = navigator.userAgent;
      const browserInfo = this.getBrowserInfo(userAgent);
      const osInfo = this.getOSInfo(userAgent);
      
      // Get language preferences
      const languages = navigator.languages ? navigator.languages.join(', ') : navigator.language;
      
      // Get screen information
      const screenInfo = {
        width: window.screen.width,
        height: window.screen.height,
        colorDepth: window.screen.colorDepth,
        pixelRatio: window.devicePixelRatio
      };
      
      // Get connection information if available
      const connectionInfo = this.getConnectionInfo();
      
      // Get timezone information
      const timezoneOffset = new Date().getTimezoneOffset();
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      // Get referrer if available
      const referrer = document.referrer || 'Direct';
      
      // Compile client information
      const clientInfo = {
        timestamp: new Date().toISOString(),
        userAgent,
        browser: browserInfo,
        os: osInfo,
        languages,
        screen: screenInfo,
        connection: connectionInfo,
        timezone: {
          name: timezone,
          offset: timezoneOffset
        },
        referrer,
        url: window.location.href,
        sessionId: this.generateSessionId()
      };
      
      // Log the information
      console.log('Client Information:', clientInfo);
      
      // In a real application, you would send this to your server
      // this.sendToServer(clientInfo);
    } catch (error) {
      console.error('Error logging client information:', error);
    }
  }
  
  /**
   * Extracts browser information from user agent
   */
  private static getBrowserInfo(userAgent: string): { name: string; version: string } {
    let name = 'Unknown';
    let version = 'Unknown';
    
    // Extract browser name and version from user agent
    if (userAgent.indexOf('Firefox') > -1) {
      name = 'Firefox';
      version = userAgent.match(/Firefox\/([0-9.]+)/)?.[1] || 'Unknown';
    } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
      name = 'Opera';
      version = userAgent.match(/(?:Opera|OPR)\/([0-9.]+)/)?.[1] || 'Unknown';
    } else if (userAgent.indexOf('Edg') > -1) {
      name = 'Edge';
      version = userAgent.match(/Edg\/([0-9.]+)/)?.[1] || 'Unknown';
    } else if (userAgent.indexOf('Chrome') > -1) {
      name = 'Chrome';
      version = userAgent.match(/Chrome\/([0-9.]+)/)?.[1] || 'Unknown';
    } else if (userAgent.indexOf('Safari') > -1) {
      name = 'Safari';
      version = userAgent.match(/Version\/([0-9.]+)/)?.[1] || 'Unknown';
    } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident/') > -1) {
      name = 'Internet Explorer';
      version = userAgent.match(/(?:MSIE |rv:)([0-9.]+)/)?.[1] || 'Unknown';
    }
    
    return { name, version };
  }
  
  /**
   * Extracts OS information from user agent
   */
  private static getOSInfo(userAgent: string): { name: string; version: string } {
    let name = 'Unknown';
    let version = 'Unknown';
    
    // Extract OS name and version from user agent
    if (userAgent.indexOf('Windows') > -1) {
      name = 'Windows';
      if (userAgent.indexOf('Windows NT 10.0') > -1) version = '10';
      else if (userAgent.indexOf('Windows NT 6.3') > -1) version = '8.1';
      else if (userAgent.indexOf('Windows NT 6.2') > -1) version = '8';
      else if (userAgent.indexOf('Windows NT 6.1') > -1) version = '7';
      else if (userAgent.indexOf('Windows NT 6.0') > -1) version = 'Vista';
      else if (userAgent.indexOf('Windows NT 5.1') > -1) version = 'XP';
      else if (userAgent.indexOf('Windows NT 5.0') > -1) version = '2000';
    } else if (userAgent.indexOf('Mac') > -1) {
      name = 'macOS';
      version = userAgent.match(/Mac OS X ([0-9_]+)/)?.[1]?.replace(/_/g, '.') || 'Unknown';
    } else if (userAgent.indexOf('Android') > -1) {
      name = 'Android';
      version = userAgent.match(/Android ([0-9.]+)/)?.[1] || 'Unknown';
    } else if (userAgent.indexOf('iOS') > -1 || (userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1)) {
      name = 'iOS';
      version = userAgent.match(/OS ([0-9_]+)/)?.[1]?.replace(/_/g, '.') || 'Unknown';
    } else if (userAgent.indexOf('Linux') > -1) {
      name = 'Linux';
      version = 'Unknown';
    }
    
    return { name, version };
  }
  
  /**
   * Gets connection information if available
   */
  private static getConnectionInfo(): { type?: string; effectiveType?: string; downlink?: number; rtt?: number } {
    const connection: any = (navigator as any).connection || 
                           (navigator as any).mozConnection || 
                           (navigator as any).webkitConnection;
    
    if (connection) {
      return {
        type: connection.type,
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
      };
    }
    
    return {};
  }
  
  /**
   * Generates a unique session ID
   */
  private static generateSessionId(): string {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  /**
   * In a real application, this would send the data to your server
   * For now, we're just logging to console
   */
  private static sendToServer(data: any): void {
    // This would be an API call in a real application
    // fetch('/api/log', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
  }
}