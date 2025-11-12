'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export interface ProjectAsset {
  type: 'image' | 'video' | 'youtube' | 'vimeo' | 'external';
  src: string;
  caption?: string;
}

export interface ProjectTemplateProps {
  title: string;
  description?: string;
  assets: ProjectAsset[];
}

/**
 * ProjectTemplate Component
 * 
 * A reusable Behance-style layout for displaying project details.
 * Automatically renders images and videos with elegant animations.
 * 
 * Usage:
 * <ProjectTemplate 
 *   title="Project Name"
 *   description="Optional project description"
 *   assets={[{ type: 'image', src: '/path/to/image.png' }]}
 * />
 */
const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ title, description, assets }) => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-light-textSecondary dark:text-dark-textSecondary
                     hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300
                     group"
          >
            <ArrowLeft 
              size={20} 
              className="transition-transform duration-300 group-hover:-translate-x-1" 
            />
            <span className="font-medium">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-light-text dark:text-dark-text">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        {/* Project Assets */}
        <div className="space-y-0">
          {assets.map((asset, index) => {
            // Check if it's a GIF file
            const isGif = asset.src.toLowerCase().endsWith('.gif');
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px', amount: 0.2 }}
                transition={{ 
                  duration: 0.5, 
                  delay: Math.min(index * 0.03, 0.2),
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="w-full"
              >
                {asset.type === 'image' ? (
                  <div className="relative w-full overflow-hidden
                                bg-light-card dark:bg-dark-card">
                    {isGif ? (
                      // Use regular img tag for GIFs to preserve animation
                      <img
                        src={asset.src}
                        alt={asset.caption || `Project asset ${index + 1}`}
                        className="w-full h-auto object-contain"
                        loading={index < 2 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    ) : (
                      // Use Next.js Image for static images with optimized loading
                      <div className="relative w-full" style={{ aspectRatio: 'auto' }}>
                        <Image
                          src={asset.src}
                          alt={asset.caption || `Project asset ${index + 1}`}
                          width={1920}
                          height={1080}
                          className="w-full h-auto object-contain"
                          priority={index < 2}
                          loading={index < 2 ? 'eager' : 'lazy'}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                        />
                      </div>
                    )}
                  </div>
                ) : asset.type === 'youtube' ? (
                  <div className="relative w-full overflow-hidden rounded-lg
                                bg-light-card dark:bg-dark-card
                                shadow-lg border border-gray-200 dark:border-gray-800">
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                      <iframe
                        src={`${asset.src}?rel=0&modestbranding=1`}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={asset.caption || 'YouTube video player'}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : asset.type === 'vimeo' ? (
                  <div className="relative w-full overflow-hidden rounded-lg
                                bg-light-card dark:bg-dark-card
                                shadow-lg border border-gray-200 dark:border-gray-800">
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                      <iframe
                        src={asset.src}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={asset.caption || 'Vimeo video player'}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full overflow-hidden rounded-lg
                                bg-light-card dark:bg-dark-card
                                shadow-lg border border-gray-200 dark:border-gray-800">
                    <video
                      src={asset.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-auto max-h-[90vh] object-contain"
                      style={{ maxWidth: '100%' }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                
                {/* Caption */}
                {asset.caption && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-4 text-center text-sm md:text-base text-light-textSecondary dark:text-dark-textSecondary italic"
                  >
                    {asset.caption}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-12 border-t border-light-accent/20 dark:border-dark-accent/20"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                     bg-light-accent/10 dark:bg-dark-accent/10
                     text-light-accent dark:text-dark-accent
                     hover:bg-light-accent/20 dark:hover:bg-dark-accent/20
                     border-2 border-light-accent dark:border-dark-accent
                     transition-all duration-300
                     font-medium group"
          >
            <ArrowLeft 
              size={20} 
              className="transition-transform duration-300 group-hover:-translate-x-1" 
            />
            Back to Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
