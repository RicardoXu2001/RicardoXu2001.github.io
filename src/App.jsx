import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchGithubRepos } from './utils/github';
import ParticleBackground from './components/ParticleBackground';
import MainMenu from './components/MainMenu';
import ProjectCard from './components/ProjectCard';
import { Database, Cpu, Terminal } from 'lucide-react';
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
        <section className="profile-grid" style={{ marginBottom: '6rem', display: 'grid', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1rem' }}>{'>'} SYSTEM_PROFILE_AUTHORIZED</h2>
            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: '1.1', overflowWrap: 'anywhere' }} className="gold-glow">
              AI APPLICATION <br />
              ENGINEER <br />
              <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.75em' }}>& FULLSTACK DEV</span>
            </h1>
            <p style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1rem' }}>RICARDO XU / 许灏 · SHENZHEN</p>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '500px', marginBottom: '2rem' }}>
              Early-career AI application engineer with a Master of Information Technology Management background at HKBU.
              Independently delivered RAG-based assistance for power-sector safety workflows and AI analysis for oncology records.
              Building applications from requirements to deployment with Claude Code and Codex, with traceable AI suggestions and human review.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Database size={24} /></div>
                <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>RAG_SYSTEMS</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#FFD700', marginBottom: '0.5rem' }}><Cpu size={24} /></div>
                <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>LLM_APPLICATIONS</div>
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
          <div className="experience-grid" style={{ display: 'grid', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1rem' }}>{'>'} CORE_ATTRIBUTES</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { label: 'LLM API Integration', detail: 'OpenAI / Gemini / DashScope Qwen, including vision models' },
                  { label: 'RAG & Prompt Engineering', detail: 'Document parsing, chunking, source tracing, structured outputs and fail-closed governance' },
                  { label: 'Coding Agents', detail: 'Claude Code / Codex / Cursor; Rules, MCP and Skills' },
                  { label: 'Backend & Data', detail: 'Python (FastAPI / Flask), Node.js, MySQL / PostgreSQL / Redis' },
                  { label: 'Web & Mobile', detail: 'TypeScript, Vue / React / Next.js, React Native (Expo)' },
                  { label: 'Delivery & Quality', detail: 'Docker, GitLab CI/CD, pytest, mypy / ruff, OpenAPI contracts' }
                ].map((skill, i) => (
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
              <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1rem' }}>{'>'} MISSION_HISTORY</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  {
                    company: '珠海中科先进技术研究院', role: 'Research Intern · Frontier Scientific Computing Center', date: '2026.06 - Present',
                    highlights: [
                      'Power-sector work and operation permit system: read-only RAG retrieval and rule pre-checks, traceable risk suggestions and human final approval. Built a governed knowledge-update workflow that blocks publication without approval.',
                      'Separated approval, issuance and execution responsibilities; validated a 22-step operation workflow on real hardware. Added 93 negative security cases, cleared mypy type errors and passed 650+ regression cases.',
                      'COIOS oncology community app: independently built the tumor-record and AI-analysis module with Qwen PDF/vision extraction, date-normalized biomarkers, structured analysis and reports in three languages.',
                      'Delivered asynchronous jobs, timeout fallback, idempotent writes and a doctor-review workflow, plus 10+ Expo mobile screens for uploads, analysis status, trends, reports and medical timelines.'
                    ]
                  },
                  { company: 'Shenzhen iFly Control Technology', role: 'Software Development Intern', date: '2025.06 - 2025.08', highlights: ['Led requirements analysis and core C++/Qt development for ground testing software. Systematic testing improved product stability by approximately 20%.'] },
                  { company: 'Fengniao Aviation (SF Group)', role: 'R&D Intern', date: '2023.03 - 2023.05', highlights: ['Developed C++/Qt UAV ground-station software and simulation communication protocols, improving simulation accuracy by 15%. The product passed acceptance and was delivered to the relevant national authorities.'] },
                  { company: 'Daikin (China) · Shenzhen R&D', role: 'Data Analysis Intern', date: '2022.07 - 2022.09', highlights: ['Led wind-speed analysis using Fourier, wavelet and Hilbert-Huang transforms, with Python modeling and visualization.'] }
                ].map((job, i) => (
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
          <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '1.5rem' }}>{'>'} ACADEMIC_CREDENTIALS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem' }}>
            {[
              { school: 'Hong Kong Baptist University', degree: 'Master of Information Technology Management', date: '2025.09 - 2026.10', details: 'Research focus: Knowledge and Information Management.' },
              { school: 'Zhuhai College of Jilin University', degree: 'B.S. in Data Science and Big Data Technology', date: '2019.09 - 2023.07', details: 'Outstanding graduation thesis on natural wind characteristics using the Hilbert-Huang Transform. 2022 Mathematical Contest in Modeling: Successful Participant Award.' }
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

        {/* Resume Projects */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '0.5rem' }}>{'>'} SELECTED_BUILDS</h2>
          <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>FEATURED_PROJECTS</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {[
              { name: 'AI Image Generation SaaS', role: 'Independent development', description: 'Built the complete flow from prompts and asynchronous image generation to image assets and credits billing, across user app, admin, API and worker. Integrated OpenAI Images API, BullMQ/Redis jobs with refunds on failure, PostgreSQL/Prisma and Stripe payments.', stack: 'OpenAI Images API · BullMQ · Redis · PostgreSQL · Prisma · Stripe' },
              { name: 'GameFlow AI', role: 'Product concept & interactive prototype', description: 'Designed a conversational agent for PC game platforms with multi-turn dialogue and tool calls. Aligns answers with player version, progress and inventory, and cites sources and applicable versions. Delivered the product definition, feature design, interactive demo and experience-validation plan.', stack: 'Conversational agents · Tool calling · Context-aware guidance' },
              { name: 'Primeval Heresy / 原初异端', role: 'Card game demo · AI-assisted development', description: 'Built a frontend card-game state machine with Gemini 3 Pro dynamic dialogue and decisions. Used prompt engineering to address context loss in long conversations.', stack: 'Frontend state machine · Gemini 3 Pro · Prompt engineering' }
            ].map((project) => (
              <article key={project.name} style={{ background: 'rgba(255,215,0,0.03)', border: '1px solid rgba(255,215,0,0.15)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h4 style={{ color: '#FFD700', fontSize: '1.1rem' }}>{project.name}</h4>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{project.role}</p>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', flexGrow: 1 }}>{project.description}</p>
                <p style={{ fontSize: '0.7rem', lineHeight: '1.6', color: '#FFD700' }}>{project.stack}</p>
              </article>
            ))}
          </div>
        </section>

        {/* GitHub Repositories */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '0.5rem' }}>{'>'} INVENTORY_MODULES</h2>
              <h3 style={{ fontSize: '2rem' }}>PROJECT_ARCHIVE</h3>
            </div>
            <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>RECENT_REPOS: {repos.length}</div>
          </div>

          {!loading && repos.length === 0 && (
            <p style={{ marginBottom: '2rem', fontSize: '0.85rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.6)' }}>
              GitHub repositories could not be loaded. <a href="https://github.com/RicardoXu2001?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD700' }}>View repositories on GitHub</a>.
            </p>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
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
