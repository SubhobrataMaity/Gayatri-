'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AuroraBackgroundLight } from '@/components/ui/aurora-background-light';

interface ProjectData {
  slug: string;
  title: string;
  thumbnail: string;
  assets: { type: string; src: string }[];
}

const HomePage = () => {
  const [featuredProjects, setFeaturedProjects] = React.useState<ProjectData[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Featured project slugs to display
  const featuredSlugs = ['So-FI', 'PLUGD', 'Rootprint'];

  React.useEffect(() => {
    // Fetch all projects from API
    fetch('/api/projects')
      .then(res => res.json())
      .then((allProjects: ProjectData[]) => {
        // Filter to get only featured projects
        const featured = allProjects.filter(project => 
          featuredSlugs.includes(project.slug)
        );
        setFeaturedProjects(featured);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading featured projects:', err);
        setLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <AuroraBackgroundLight className="min-h-screen px-4 sm:px-6 lg:px-8">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated background elements - for dark mode */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none dark:block hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-20 right-20 w-72 h-72 bg-dark-accent/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-dark-accentSecondary/10 rounded-full blur-3xl"
            />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 max-w-5xl mx-auto text-center"
          >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                           bg-light-accent/10 dark:bg-dark-accent/10 
                           text-light-accent dark:text-dark-accent text-sm font-medium">
              <Sparkles size={16} />
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="dark:text-white">Hi, I'm{' '}</span>
            <span className="gradient-text">Gayatri Chatterjee</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 
                     text-light-textSecondary dark:text-dark-textSecondary"
          >
            Visual Designer & Problem Solver
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-light-textSecondary dark:text-dark-textSecondary 
                     max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Designer, observer, storyteller. I craft thoughtful brand  
            identities and intuitive interfaces that balance emotion and clarity.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 text-lg shadow-lg"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link href="/about#contact" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full font-medium text-lg
                         border-2 border-light-accent dark:border-dark-accent
                         text-light-accent dark:text-dark-accent
                         hover:bg-light-accent/10 dark:hover:bg-dark-accent/10
                         transition-all duration-300"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-light-accent dark:border-dark-accent rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-light-accent dark:bg-dark-accent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
        </section>
      </AuroraBackgroundLight>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-dark-bg transition-theme">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
              A selection of my recent work showcasing design thinking and problem-solving
            </p>
          </motion.div>

          {loading ? (
            // Loading Skeleton
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="neumorphic-card dark:dark-card overflow-hidden h-full animate-pulse"
                >
                  <div className="relative h-64 bg-gray-200 dark:bg-gray-700" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mt-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/projects/${project.slug}`}>
                    <div className="neumorphic-card dark:dark-card overflow-hidden h-full transition-all duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full text-xs font-medium
                                         bg-white/90 dark:bg-dark-bg/90 text-light-text dark:text-dark-text">
                            {project.assets.length} assets
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-light-text dark:text-dark-text">
                          {project.title}
                        </h3>
                        <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">
                          {project.slug === 'So-FI' 
                            ? 'A modern, confident identity designed with precision and purpose.'
                            : project.slug === 'PLUGD'
                            ? 'A bold wordmark identity that blends sharp angles with soft, crafted curves, inspired by the balance and structure of modern architecture.'
                            : project.slug === 'Rootprint'
                            ? 'A clean, intuitive platform that explains carbon impact and guides users to offset it.'
                            : 'A showcase of thoughtful design and creative problem-solving.'}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-light-accent dark:text-dark-accent">
                          <span>View Project</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 mx-auto shadow-lg"
              >
                View All Projects
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
