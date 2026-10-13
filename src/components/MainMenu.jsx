import { motion } from 'framer-motion';

const MainMenu = () => {
  // Level & EXP Calculation Logic
  const birthDate = new Date(2001, 0, 31); // 2001-01-31
  const today = new Date();
  
  // Calculate Level (Age)
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  // Calculate EXP (Percentage to next birthday)
  const lastBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (today < lastBirthday) {
    lastBirthday.setFullYear(today.getFullYear() - 1);
  }
  const nextBirthday = new Date(lastBirthday.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate());
  
  const totalTime = nextBirthday.getTime() - lastBirthday.getTime();
  const elapsedTime = today.getTime() - lastBirthday.getTime();
  const expPercentage = Math.floor((elapsedTime / totalTime) * 100);

  return (
    <header style={{
      padding: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
      position: 'relative',
      zIndex: 10,
      background: 'rgba(5, 5, 5, 0.8)',
      backdropFilter: 'blur(5px)'
    }}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="gold-glow"
        style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Orbitron' }}
      >
        RICARDO_XU <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>[LEVEL {age}]</span>
      </motion.div>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <div style={{ textAlign: 'right', marginRight: '1rem' }}>
          <div style={{ fontSize: '0.6rem', color: 'rgba(255,215,0,0.5)', letterSpacing: '2px' }}>SYSTEM_STATUS</div>
          <div style={{ fontSize: '0.7rem', color: '#00ff00', fontWeight: 'bold' }}>ONLINE</div>
        </div>
        
        <div style={{
          width: '150px',
          height: '6px',
          background: 'rgba(255, 215, 0, 0.1)',
          position: 'relative',
          border: '1px solid rgba(255, 215, 0, 0.2)'
        }}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${expPercentage}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              background: 'linear-gradient(90deg, #C5A021, #FFD700)',
              boxShadow: '0 0 10px #FFD700'
            }}
          />
        </div>
        <span style={{ fontSize: '0.7rem', color: '#FFD700', fontFamily: 'Orbitron' }}>EXP {expPercentage}%</span>
      </div>
    </header>
  );
};

export default MainMenu;
