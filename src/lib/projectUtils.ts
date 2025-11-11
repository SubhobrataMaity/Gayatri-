import fs from 'fs';
import path from 'path';

export interface ProjectAsset {
  type: 'image' | 'video' | 'youtube' | 'vimeo' | 'external';
  src: string;
  filename?: string;
  caption?: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  description?: string;
  thumbnail: string;
  assets: ProjectAsset[];
}

/**
 * Get all project folder names from /public/projects/
 * Returns an array of folder names (slugs)
 */
export function getProjectSlugs(): string[] {
  const projectsDirectory = path.join(process.cwd(), 'public', 'projects');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(projectsDirectory)) {
    fs.mkdirSync(projectsDirectory, { recursive: true });
    return [];
  }

  const entries = fs.readdirSync(projectsDirectory, { withFileTypes: true });
  
  // Filter only directories
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort();
}

/**
 * Natural sort comparison function for proper numeric ordering
 * Handles cases like: 1.png, 2.png, 10.png, 20.png correctly
 */
function naturalSort(a: string, b: string): number {
  const regex = /(\d+)|(\D+)/g;
  const aParts = a.match(regex) || [];
  const bParts = b.match(regex) || [];
  
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const aPart = aParts[i] || '';
    const bPart = bParts[i] || '';
    
    const aNum = parseInt(aPart, 10);
    const bNum = parseInt(bPart, 10);
    
    if (!isNaN(aNum) && !isNaN(bNum)) {
      if (aNum !== bNum) return aNum - bNum;
    } else {
      if (aPart !== bPart) return aPart.localeCompare(bPart);
    }
  }
  
  return 0;
}

/**
 * Helper function to extract YouTube video ID and create embed URL
 */
function getYouTubeEmbedUrl(url: string): string | null {
  // Match various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }
  
  return null;
}

/**
 * Helper function to extract Vimeo video ID and create embed URL
 */
function getVimeoEmbedUrl(url: string): string | null {
  // Match Vimeo URL formats
  const patterns = [
    /vimeo\.com\/(\d+)/,
    /vimeo\.com\/embed\/(\d+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return `https://player.vimeo.com/video/${match[1]}`;
    }
  }
  
  return null;
}

/**
 * Type for assets with temporary position property
 */
type AssetWithPosition = ProjectAsset & { _position?: number };

/**
 * Read video configuration from videos.json file in project folder
 * Format: { "videos": [{ "url": "...", "position": 5, "caption": "..." }] }
 */
function getVideoConfigs(projectSlug: string): AssetWithPosition[] {
  const configPath = path.join(process.cwd(), 'public', 'projects', projectSlug, 'videos.json');
  
  if (!fs.existsSync(configPath)) {
    return [];
  }
  
  try {
    const configContent = fs.readFileSync(configPath, 'utf-8');
    const config = JSON.parse(configContent);
    
    if (!config.videos || !Array.isArray(config.videos)) {
      return [];
    }
    
    return config.videos.map((video: any) => {
      const url = video.url || '';
      let type: ProjectAsset['type'] = 'external';
      let embedUrl = url;
      
      // Check if it's a YouTube URL
      const youtubeEmbed = getYouTubeEmbedUrl(url);
      if (youtubeEmbed) {
        type = 'youtube';
        embedUrl = youtubeEmbed;
      } else {
        // Check if it's a Vimeo URL
        const vimeoEmbed = getVimeoEmbedUrl(url);
        if (vimeoEmbed) {
          type = 'vimeo';
          embedUrl = vimeoEmbed;
        }
      }
      
      return {
        type,
        src: embedUrl,
        caption: video.caption,
        // Store position for sorting
        _position: video.position !== undefined ? video.position : 999,
      };
    });
  } catch (error) {
    console.error(`Error reading video config for ${projectSlug}:`, error);
    return [];
  }
}

/**
 * Get all assets (images/videos) from a specific project folder
 * Automatically detects file types and sorts them in natural order
 * Also includes external videos from videos.json config
 */
export function getProjectAssets(projectSlug: string): ProjectAsset[] {
  const projectDirectory = path.join(process.cwd(), 'public', 'projects', projectSlug);
  
  if (!fs.existsSync(projectDirectory)) {
    return [];
  }

  const files = fs.readdirSync(projectDirectory);
  
  // Supported file extensions
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'];
  const videoExtensions = ['.mp4', '.webm', '.mov'];
  
  const fileAssets: AssetWithPosition[] = files
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return [...imageExtensions, ...videoExtensions].includes(ext);
    })
    .sort(naturalSort) // Sort with natural ordering (1, 2, 10 instead of 1, 10, 2)
    .map((file, index) => {
      const ext = path.extname(file).toLowerCase();
      // Only MP4, WEBM, MOV are true videos; GIFs are treated as images
      const isVideo = videoExtensions.includes(ext);
      
      return {
        type: isVideo ? 'video' : 'image',
        src: `/projects/${projectSlug}/${file}`,
        filename: file,
        _position: index, // Use file index as position
      };
    });

  // Get external videos from config
  const videoConfigs = getVideoConfigs(projectSlug);
  
  // Combine and sort by position
  const allAssets: AssetWithPosition[] = [...fileAssets, ...videoConfigs];
  
  // Sort by position (if specified) or maintain file order
  allAssets.sort((a, b) => {
    const posA = a._position ?? 999;
    const posB = b._position ?? 999;
    return posA - posB;
  });
  
  // Remove temporary position property and return clean assets
  return allAssets.map((asset) => {
    const { _position, ...cleanAsset } = asset;
    return cleanAsset;
  });
}

/**
 * Get thumbnail for a project (first image or cover.png/1.png)
 */
export function getProjectThumbnail(projectSlug: string): string {
  const assets = getProjectAssets(projectSlug);
  
  // Try to find cover.png or 1.png first
  const coverAsset = assets.find(asset => 
    asset.filename && (
      asset.filename.toLowerCase() === 'cover.png' || 
      asset.filename.toLowerCase() === '1.png' ||
      asset.filename.toLowerCase() === 'thumbnail.png'
    )
  );
  
  if (coverAsset) {
    return coverAsset.src;
  }
  
  // Otherwise return first image asset
  const firstImage = assets.find(asset => asset.type === 'image');
  return firstImage?.src || '/placeholder.png';
}

/**
 * Format project slug into a readable title
 * Examples:
 * "SoFI" -> "SoFI"
 * "AirbnbRedesign" -> "Airbnb Redesign"
 * "FoodAppUI" -> "Food App UI"
 */
export function formatProjectTitle(slug: string): string {
  // If slug has no spaces and is mixed case, add spaces before capitals
  if (slug.includes('-') || slug.includes('_')) {
    return slug
      .replace(/[-_]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // Add space before capital letters (for camelCase or PascalCase)
  return slug
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .split(' ')
    .map((word, index) => {
      // Keep acronyms uppercase (2 or fewer chars)
      if (word.length <= 2 && word === word.toUpperCase()) {
        return word;
      }
      // Capitalize first letter of each word
      return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

/**
 * Get complete project data including metadata
 */
export function getProjectData(projectSlug: string): ProjectData | null {
  const assets = getProjectAssets(projectSlug);
  
  if (assets.length === 0) {
    return null;
  }
  
  return {
    slug: projectSlug,
    title: formatProjectTitle(projectSlug),
    thumbnail: getProjectThumbnail(projectSlug),
    assets,
  };
}

/**
 * Get all projects with their data
 */
export function getAllProjects(): ProjectData[] {
  const slugs = getProjectSlugs();
  
  return slugs
    .map(slug => getProjectData(slug))
    .filter((project): project is ProjectData => project !== null);
}
