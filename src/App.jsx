import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchGithubRepos } from './utils/github';
import ParticleBackground from './components/ParticleBackground';
import MainMenu from './components/MainMenu';
import ProjectCard from './components/ProjectCard';
import { Database, Cpu, Terminal } from 'lucide-react';
import pixelAvatar from './assets/ricardo-pixel-avatar.png';
import { content } from './content';

function App() {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-language');
      if (saved === 'en' || saved === 'zh') return saved;
    } catch { /* Language switching remains available when storage is blocked. */ }
    return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  });
  const t = content[language];
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = t.pageTitle;
    document.querySelector('meta[name="description"]').content = t.pageDescription;
    try {
      localStorage.setItem('portfolio-language', language);
    } catch { /* Persisting a preference is optional. */ }
  }, [language, t]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchGithubRepos();
      setRepos(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="scanlines" style={{ minHeight: '100vh', position: 'relative' }}>
      <ParticleBackground />
      <MainMenu t={t} language={language} onLanguageChange={setLanguage} />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* Profile Section */}
        <section className="profile-grid" style={{ marginBottom: '6rem', display: 'grid', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1rem' }}>{'>'} {t.profile}</h2>
            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: '1.1', overflowWrap: 'anywhere' }} className="gold-glow">
              {t.headline[0]} <br />
              {t.headline[1]} <br />
              <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.75em' }}>{t.headlineSecondary}</span>
            </h1>
            <p style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1rem' }}>{t.identity}</p>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '500px', marginBottom: '2rem' }}>
              {t.intro}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Database size={24} /></div>
                <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>{t.badges[0]}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Cpu size={24} /></div>
                <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>{t.badges[1]}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Terminal size={24} /></div>
                <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>{t.badges[2]}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '1',
              border: '2px solid #FFD700',
              padding: '15px',
              position: 'relative',
              boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)',
              margin: '0 auto'
            }}>
              <img 
                src={pixelAvatar}
                alt={t.avatarAlt}
                style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated', display: 'block' }}
              />
              {/* Decorative Frame Elements */}
              <div style={{ position: 'absolute', top: -10, left: -10, width: '30px', height: '30px', borderTop: '4px solid #FFD700', borderLeft: '4px solid #FFD700' }} />
              <div style={{ position: 'absolute', bottom: -10, right: -10, width: '30px', height: '30px', borderBottom: '4px solid #FFD700', borderRight: '4px solid #FFD700' }} />
              <div style={{ position: 'absolute', top: '50%', right: -20, transform: 'translateY(-50%)', writingMode: 'vertical-rl', fontSize: '0.6rem', color: '#FFD700', letterSpacing: '4px' }}>{t.verified}</div>
            </div>
          </motion.div>
        </section>

        {/* Stats & Skills Section */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="experience-grid" style={{ display: 'grid', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1rem' }}>{'>'} {t.skillsHeading}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {t.skills.map((skill, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '0.8rem', marginBottom: '0.4rem', color: '#FFD700' }}>
                      <span>{skill.label}</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.6)' }}>{skill.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1rem' }}>{'>'} {t.historyHeading}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {t.jobs.map((job, i) => (
                  <div key={i} style={{ borderLeft: '1px solid rgba(255,215,0,0.3)', paddingLeft: '1.5rem', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-5px', top: '0', width: '9px', height: '9px', background: '#FFD700', transform: 'rotate(45deg)' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#FFD700', fontSize: '0.9rem', fontWeight: 'bold' }}>{job.company}</span>
                      <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>{job.date}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.3rem' }}>{job.role}</div>
                    <ul style={{ paddingLeft: '1rem', fontSize: '0.8rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.6)' }}>
                      {job.highlights.map((highlight) => <li key={highlight} style={{ marginTop: '0.5rem' }}>{highlight}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1.5rem' }}>{'>'} {t.educationHeading}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem' }}>
            {t.education.map((edu, i) => (
              <div key={i} style={{ 
                background: 'rgba(255,215,0,0.03)', 
                border: '1px solid rgba(255,215,0,0.1)', 
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ color: '#FFD700', fontSize: '1rem', fontWeight: 'bold' }}>{edu.school}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: '600' }}>{edu.degree}</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>{edu.date}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>{edu.details}</div>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Repositories */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '0.5rem' }}>{'>'} {t.inventoryHeading}</h2>
              <h3 style={{ fontSize: '2rem' }}>{t.projectsHeading}</h3>
            </div>
            <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>{t.recentRepos}: {repos.length}</div>
          </div>

          {!loading && repos.length === 0 && (
            <p style={{ marginBottom: '2rem', fontSize: '0.85rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.6)' }}>
              {t.reposUnavailable} <a href="https://github.com/RicardoXu2001?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD700' }}>{t.viewRepos}</a>
            </p>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            <AnimatePresence>
              {loading ? (
                Array(6).fill(0).map((_, i) => (
                  <div key={i} role="status" aria-label={t.loadingRepos} style={{ height: '200px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', animation: 'pulse 2s infinite' }} />
                ))
              ) : (
                repos.map((repo) => (
                  <ProjectCard key={repo.id} repo={repo} t={t} />
                ))
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <footer style={{ padding: '4rem 2rem', textAlign: 'center', opacity: 0.3, fontSize: '0.7rem', letterSpacing: '2px' }}>
        © 2026 RICARDO_XU // {t.footer}
      </footer>
    </div>
  );
}

export default App;
