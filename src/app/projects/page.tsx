'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Folder } from 'lucide-react';

/**
 * Dynamic Projects Gallery Page
 * 
 * Automatically detects all folders in /public/projects/ and generates
 * a gallery card for each project.
 * 
 * HOW TO ADD NEW PROJECTS:
 * 1. Create a new folder in /public/projects/ (e.g., /public/projects/MyNewProject/)
 * 2. Add your PNG/GIF files to that folder (they will be sorted alphabetically)
 * 3. The first image (or cover.png/1.png) will be used as the thumbnail
 * 4. The project will automatically appear on this page with its own detail page
 * 
 * No code changes needed! Just drop in folders with images.
 */

// Import project data - this will be fetched from API route
interface ProjectData {
  slug: string;
  title: string;
  description?: string;
  thumbnail: string;
  assets: { type: string; src: string }[];
}

export default function ProjectsPage() {
  // For now, use empty array - will be populated via API or static props
  const [projects, setProjects] = React.useState<ProjectData[]>([]);

  React.useEffect(() => {
    // Fetch projects from API route
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error loading projects:', err));
  }, []);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
            A collection of design projects showcasing my approach to solving complex problems
            through thoughtful, user-centered design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="neumorphic-card dark:dark-card overflow-hidden h-full transition-all duration-300
                                hover:shadow-glass-light-hover dark:hover:shadow-glow-cyan
                                border-2 border-transparent hover:border-light-accent dark:hover:border-dark-accent">
                    {/* Thumbnail */}
                    <div className="relative h-64 overflow-hidden bg-light-bg dark:bg-dark-bg">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                    flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="px-6 py-3 rounded-full 
                                   bg-white dark:bg-dark-accent text-light-text dark:text-dark-bg
                                   font-medium text-sm shadow-lg"
                        >
                          View Project
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-light-text dark:text-dark-text
                                   group-hover:text-light-accent dark:group-hover:text-dark-accent
                                   transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="text-light-textSecondary dark:text-dark-textSecondary line-clamp-2">
                          {project.description}
                        </p>
                      )}
                      <div className="mt-4 flex items-center gap-2 text-sm text-light-accent dark:text-dark-accent">
                        <Folder size={16} />
                        <span>{project.assets.length} assets</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Empty State - No Projects Found */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="neumorphic-card dark:dark-card p-12 max-w-2xl mx-auto">
              <Folder size={64} className="mx-auto mb-6 text-light-textSecondary dark:text-dark-textSecondary" />
              <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
                No Projects Yet
              </h2>
              <p className="text-light-textSecondary dark:text-dark-textSecondary mb-6">
                Add your first project by creating a folder in <code className="px-2 py-1 rounded bg-light-accent/10 dark:bg-dark-accent/10">/public/projects/</code>
              </p>
              <div className="text-left max-w-md mx-auto space-y-2 text-sm text-light-textSecondary dark:text-dark-textSecondary">
                <p><strong>Example:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Create folder: <code className="px-1 rounded bg-light-accent/10 dark:bg-dark-accent/10">/public/projects/MyProject/</code></li>
                  <li>Add images: <code className="px-1 rounded bg-light-accent/10 dark:bg-dark-accent/10">1.png, 2.png, 3.gif</code></li>
                  <li>Refresh this page - your project will appear automatically!</li>
                </ol>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        {projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="neumorphic-card dark:dark-card p-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Interested in working together?
              </h2>
              <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary mb-8">
                I'm always open to discussing new projects and creative ideas.
              </p>
              <motion.a
                href="/about#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 rounded-full font-medium text-lg
                           border-2 border-light-accent dark:border-dark-accent
                           text-light-accent dark:text-dark-accent
                           hover:bg-light-accent/10 dark:hover:bg-dark-accent/10
                           transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
