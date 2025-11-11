'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProjectTemplate from '@/components/ProjectTemplate';
import { motion } from 'framer-motion';

/**
 * Dynamic Project Detail Page
 * 
 * Automatically generates a Behance-style page for each project folder.
 * The [project] parameter matches the folder name in /public/projects/
 * 
 * Features:
 * - Reads all images/videos from the project folder
 * - Displays them in order (sorted alphabetically by filename)
 * - Uses <Image> for .png/.jpg, <video> for .gif/.mp4
 * - Smooth Framer Motion animations
 * - Fully responsive with theme support
 * 
 * HOW IT WORKS:
 * When you visit /projects/SoFI, this page:
 * 1. Fetches data from /api/projects/SoFI
 * 2. Displays assets sorted alphabetically (1.png, 2.png, 3.gif, etc.)
 * 3. Renders them in a beautiful scrollable layout
 */

interface ProjectData {
  slug: string;
  title: string;
  description?: string;
  thumbnail: string;
  assets: { type: 'image' | 'video'; src: string; caption?: string }[];
}

export default function ProjectPage() {
  const params = useParams();
  const project = params?.project as string;
  
  const [projectData, setProjectData] = React.useState<ProjectData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    if (!project) return;
    
    fetch(`/api/projects/${project}`)
      .then(res => {
        if (!res.ok) throw new Error('Project not found');
        return res.json();
      })
      .then(data => {
        setProjectData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading project:', err);
        setError(true);
        setLoading(false);
      });
  }, [project]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-light-accent dark:border-dark-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-light-textSecondary dark:text-dark-textSecondary">Loading project...</p>
        </motion.div>
      </div>
    );
  }
  
  if (error || !projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <h1 className="text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Project Not Found</h1>
          <p className="text-light-textSecondary dark:text-dark-textSecondary mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <a
            href="/projects"
            className="inline-block px-6 py-3 rounded-full bg-light-accent dark:bg-dark-accent text-white dark:text-dark-bg font-medium hover:opacity-90 transition-opacity"
          >
            Back to Projects
          </a>
        </motion.div>
      </div>
    );
  }
  
  return (
    <ProjectTemplate
      title={projectData.title}
      description={projectData.description}
      assets={projectData.assets}
    />
  );
}
