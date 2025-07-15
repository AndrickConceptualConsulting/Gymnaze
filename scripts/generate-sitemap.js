#!/usr/bin/env node

/**
 * Sitemap Generator for GYMNAZE
 * Generates sitemap.xml automatically based on routes
 */

import { writeFileSync } from 'fs';
import { join } from 'path';

const DOMAIN = 'https://www.gymnaze.com';
const OUTPUT_PATH = './public/sitemap.xml';

// Define your routes with their properties
const routes = [
  {
    path: '/',
    lastmod: '2025-01-15',
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    path: '/test',
    lastmod: '2025-01-15',
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    path: '/results',
    lastmod: '2025-01-15',
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    path: '/about',
    lastmod: '2025-01-15',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    path: '/contact',
    lastmod: '2025-01-15',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    path: '/privacy',
    lastmod: '2025-01-15',
    changefreq: 'yearly',
    priority: 0.3
  }
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  routes.forEach(route => {
    sitemap += `  
  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${route.lastmod || currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
  
</urlset>`;

  try {
    writeFileSync(OUTPUT_PATH, sitemap);
    console.log('✅ Sitemap generated successfully at', OUTPUT_PATH);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
generateSitemap();