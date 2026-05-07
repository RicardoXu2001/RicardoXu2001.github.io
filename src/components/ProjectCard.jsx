import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Code } from 'lucide-react';

const ProjectCard = ({ repo }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      style={{
        background: 'rgba(20, 20, 20, 0.6)',
        borderLeft: '4px solid #FFD700',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)',
        border: '1px solid rgba(255, 215, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      {/* Decorative Corner */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40px',
        height: '40px',
        background: 'linear-gradient(45deg, transparent 50%, #FFD700 50%)',
        opacity: 0.2
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#FFD700', margin: 0 }}>{repo.name}</h3>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'rgba(255, 215, 0, 0.6)' }}>
          <Star size={14} />
          <span style={{ fontSize: '0.8rem' }}>{repo.stargazers_count}</span>
        </div>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.4', flexGrow: 1 }}>
        {repo.description || 'No description provided for this module.'}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FFD700' }}>
          <Code size={14} />
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{repo.language || 'DATA'}</span>
        </div>
        
        <motion.a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          style={{ color: '#FFD700', display: 'flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none', fontSize: '0.8rem' }}
        >
          EXECUTE <ExternalLink size={14} />
        </motion.a>
      </div>

      {/* Holographic Line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, #FFD700, transparent)',
        opacity: 0.3
      }} />
    </motion.div>
  );
};

export default ProjectCard;
