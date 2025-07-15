import { useEffect } from 'react';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = "/og-image.jpg",
  twitterCard = "summary_large_image"
}) => {
  const defaultTitle = "GYMNAZE - Athlete Intelligence Assessment Platform";
  const fullTitle = title ? `${title} | GYMNAZE` : defaultTitle;
  
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Function to update or create meta tag
    const updateMetaTag = (name, content, property = false) => {
      if (!content) return;
      
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Function to update or create link tag
    const updateLinkTag = (rel, href) => {
      if (!href) return;
      
      let link = document.querySelector(`link[rel="${rel}"]`);
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      
      link.setAttribute('href', href);
    };
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'GYMNAZE');
    
    // Open Graph tags
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:title', ogTitle || title || defaultTitle, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'GYMNAZE', true);
    
    // Twitter tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', ogTitle || title || defaultTitle);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', ogImage);
    
    // Canonical URL
    updateLinkTag('canonical', canonicalUrl);
    
  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage, twitterCard, fullTitle]);
  
  return null; // This component doesn't render anything
};

export default SEOHead;
