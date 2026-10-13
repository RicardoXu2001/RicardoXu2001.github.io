import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchGithubRepos } from './utils/github';
import ParticleBackground from './components/ParticleBackground';
import MainMenu from './components/MainMenu';
import ProjectCard from './components/ProjectCard';
import { Database, Cpu, Globe, Terminal } from 'lucide-react';
import pixelAvatar from './assets/ricardo-pixel-avatar.png';

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <MainMenu />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* Profile Section */}
        <section style={{ marginBottom: '6rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1rem' }}>{'>'} SYSTEM_PROFILE_AUTHORIZED</h2>
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }} className="gold-glow">
              DATA ARCHITECT <br />
              <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>& AI EXPLORER</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '500px', marginBottom: '2rem' }}>
              Master of IT Management candidate at HKBU. Expert in Data Science, AI-driven development, and full-stack architecture. 
              Bridging the gap between complex data insights and immersive user experiences.
            </p>
            
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Database size={24} /></div>
                <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>DATA_SCIENCE</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Cpu size={24} /></div>
                <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>AI_CO-PILOTING</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Terminal size={24} /></div>
                <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>FULLSTACK_DEV</div>
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
                alt="Ricardo Xu 的游戏像素风头像"
                style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated', display: 'block' }}
              />
              {/* Decorative Frame Elements */}
              <div style={{ position: 'absolute', top: -10, left: -10, width: '30px', height: '30px', borderTop: '4px solid #FFD700', borderLeft: '4px solid #FFD700' }} />
              <div style={{ position: 'absolute', bottom: -10, right: -10, width: '30px', height: '30px', borderBottom: '4px solid #FFD700', borderRight: '4px solid #FFD700' }} />
              <div style={{ position: 'absolute', top: '50%', right: -20, transform: 'translateY(-50%)', writingMode: 'vertical-rl', fontSize: '0.6rem', color: '#FFD700', letterSpacing: '4px' }}>VERIFIED_USER</div>
            </div>
          </motion.div>
        </section>

        {/* Stats & Skills Section */}
        <section style={{ marginBottom: '6rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1rem' }}>{'>'} CORE_ATTRIBUTES</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { label: 'Python / Data', value: 95 },
                  { label: 'C++ / Qt', value: 88 },
                  { label: 'Fullstack JS', value: 90 },
                  { label: 'AI Prompting', value: 92 },
                  { label: 'SQL / DB', value: 85 }
                ].map((skill, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '0.4rem', color: 'rgba(255,255,255,0.6)' }}>
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div style={{ height: '4px', background: 'rgba(255,215,0,0.1)', position: 'relative' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        className="skill-bar-active"
                        style={{ height: '100%', background: '#FFD700', boxShadow: '0 0 10px #FFD700' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1rem' }}>{'>'} MISSION_HISTORY</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { company: 'iFly Control Technology', role: 'Software Dev Intern', date: '2025.06 - 2025.08', desc: 'Led C++/Qt ground control software dev, improved stability by 20%.' },
                  { company: 'Fengniao Aviation', role: 'R&D Intern', date: '2023.03 - 2023.04', desc: 'UAV simulation & communication protocols optimization.' },
                  { company: 'Daikin (China)', role: 'Data Analysis Intern', date: '2022.07 - 2022.09', desc: 'Wind speed feature extraction using Hilbert-Huang Transform.' }
                ].map((job, i) => (
                  <div key={i} style={{ borderLeft: '1px solid rgba(255,215,0,0.3)', paddingLeft: '1.5rem', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-5px', top: '0', width: '9px', height: '9px', background: '#FFD700', transform: 'rotate(45deg)' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#FFD700', fontSize: '0.9rem', fontWeight: 'bold' }}>{job.company}</span>
                      <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>{job.date}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.3rem' }}>{job.role}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{job.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1.5rem' }}>{'>'} ACADEMIC_CREDENTIALS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {[
              { school: 'Hong Kong Baptist University', degree: 'Master of IT Management', date: '2025.09 - 2026.06', details: 'Focus: AI for Digital Transformation, Business Data Analytics.' },
              { school: 'Zhuhai College of Jilin University', degree: 'B.S. in Data Science', date: '2019.09 - 2023.07', details: 'GPA: 3.3/4.0. Excellence in Data Mining & Big Data Tech.' }
            ].map((edu, i) => (
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

        {/* Footer */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '0.5rem' }}>{'>'} INVENTORY_MODULES</h2>
              <h3 style={{ fontSize: '2rem' }}>PROJECT_ARCHIVE</h3>
            </div>
            <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>TOTAL_ITEMS: {repos.length}</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            <AnimatePresence>
              {loading ? (
                Array(6).fill(0).map((_, i) => (
                  <div key={i} style={{ height: '200px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', animation: 'pulse 2s infinite' }} />
                ))
              ) : (
                repos.map((repo) => (
                  <ProjectCard key={repo.id} repo={repo} />
                ))
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <footer style={{ padding: '4rem 2rem', textAlign: 'center', opacity: 0.3, fontSize: '0.7rem', letterSpacing: '2px' }}>
        © 2026 RICARDO_XU // ALL RIGHTS RESERVED // ENCRYPTED_CONNECTION_SECURED
      </footer>
    </div>
  );
}

export default App;
