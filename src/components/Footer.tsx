'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBehance } from "react-icons/fa";
import { Linkedin, Mail, ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gayatri-chatterjee-13803421a/', label: 'LinkedIn' },
    { icon: FaBehance, href: 'https://www.behance.net/gayatrichatter2', label: 'Behance' },
    { icon: Mail, href: 'mailto:gayatrichatterjee2604@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-accent/5 via-transparent to-light-accent/5 dark:from-dark-accent/5 dark:via-transparent dark:to-dark-accent/5" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative border-t border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12"
          >
            {/* Brand Section - Takes more space */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-3xl font-bold gradient-text mb-3">
                  Gayatri Chatterjee
                </h3>
                <p className="text-light-textSecondary dark:text-dark-textSecondary text-base leading-relaxed max-w-md">
                  UI/UX Designer passionate about creating intuitive, beautiful, and 
                  accessible digital experiences that make a difference.
                </p>
              </div>
              
              {/* CTA Button */}
              <motion.div whileHover={{ x: 5 }} className="inline-block">
                <Link
                  href="/about#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full
                           bg-gradient-to-r from-light-accent to-purple-500 
                           dark:from-dark-accent dark:to-purple-400
                           text-white font-medium text-sm
                           hover:shadow-lg hover:shadow-light-accent/25 dark:hover:shadow-dark-accent/25
                           transition-all duration-300"
                >
                  Let's Work Together
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-5">
              <h4 className="text-sm font-semibold text-light-text dark:text-dark-text uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="group inline-flex items-center gap-2 text-light-textSecondary dark:text-dark-textSecondary 
                               hover:text-light-accent dark:hover:text-dark-accent
                               transition-colors duration-300"
                    >
                      <span className="w-0 h-px bg-light-accent dark:bg-dark-accent group-hover:w-6 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-5">
              <h4 className="text-sm font-semibold text-light-text dark:text-dark-text uppercase tracking-wider">
                Connect With Me
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-12 h-12 rounded-xl flex items-center justify-center
                             bg-gradient-to-br from-light-accent/10 to-purple-500/10
                             dark:from-dark-accent/10 dark:to-purple-400/10
                             hover:from-light-accent hover:to-purple-500
                             dark:hover:from-dark-accent dark:hover:to-purple-400
                             text-light-accent dark:text-dark-accent
                             hover:text-white dark:hover:text-white
                             transition-all duration-300
                             border border-light-accent/20 dark:border-dark-accent/20
                             hover:border-transparent hover:shadow-lg hover:shadow-light-accent/25"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                    
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 
                                   bg-light-text dark:bg-dark-text text-white dark:text-dark-bg 
                                   text-xs font-medium rounded-lg whitespace-nowrap
                                   opacity-0 group-hover:opacity-100 pointer-events-none
                                   transition-opacity duration-300">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
              
              {/* Email display */}
              <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-800/50">
                <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary mb-2">
                  Email me at
                </p>
                <a 
                  href="mailto:gayatrichatterjee2604@gmail.com"
                  className="text-sm text-light-accent dark:text-dark-accent hover:underline font-medium"
                >
                  gayatrichatterjee2604@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="pt-8 border-t border-gray-200/50 dark:border-gray-800/50"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary text-center md:text-left">
                © {currentYear} Gayatri Chatterjee. All rights reserved.
              </p>
              
              <p className="flex items-center gap-2 text-sm text-light-textSecondary dark:text-dark-textSecondary">
                Designed & Built with
                <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                in Kolkata
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;