// Pingo UI Kit — Core Components
// Load with: <script type="text/babel" src="Components.jsx"></script>
// Requires React 18 + Babel standalone

const { useState, useRef } = React;

// ─── TOKENS ─────────────────────────────────────────────────
const T = {
  coral:       '#ff7a59',
  coralDark:   '#e55e3d',
  purple:      '#8a4fff',
  purpleDark:  '#6a2fe0',
  purpleLight: '#b98cff',
  purpleTint:  '#f5f3ff',
  yellow:      '#ffc857',
  blue:        '#4a90e2',
  white:       '#ffffff',
  bg:          '#f5f3ff',
  fg1:         '#1a1a2e',
  fg2:         '#5a5a7a',
  fg3:         '#9999b8',
  border:      'rgba(138,79,255,0.15)',
  success:     '#4ecb71',
  error:       '#ff5c5c',
  warning:     '#ffc857',
};

// ─── BUTTON ─────────────────────────────────────────────────
function Button({ children, variant='primary', size='md', onClick, disabled, icon }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    borderRadius: 9999, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: "'Poppins', sans-serif", fontWeight: 600, letterSpacing: '0.01em',
    transition: 'all 220ms cubic-bezier(0.22,1,0.36,1)',
    outline: 'none', whiteSpace: 'nowrap',
  };
  const sizes = {
    sm:  { padding: '6px 16px',  fontSize: 12 },
    md:  { padding: '10px 22px', fontSize: 14 },
    lg:  { padding: '13px 30px', fontSize: 16 },
  };
  const variants = {
    primary:  { background: T.coral,  color: '#fff', boxShadow: '0 4px 16px rgba(255,122,89,0.30)' },
    purple:   { background: T.purple, color: '#fff', boxShadow: '0 4px 16px rgba(138,79,255,0.30)' },
    ghost:    { background: 'transparent', color: T.purple, border: `2px solid ${T.purple}` },
    soft:     { background: 'rgba(138,79,255,0.10)', color: T.purple },
    yellow:   { background: T.yellow, color: T.fg1, boxShadow: '0 4px 16px rgba(255,200,87,0.35)' },
    disabled: { background: '#e0dde8', color: T.fg3 },
  };
  const v = disabled ? variants.disabled : (variants[variant] || variants.primary);
  const [hov, setHov] = useState(false);
  const [press, setPress] = useState(false);
  return (
    <button
      style={{ ...base, ...sizes[size], ...v,
        transform: press ? 'scale(0.97)' : hov && !disabled ? 'scale(1.03)' : 'scale(1)',
        opacity: disabled ? 0.7 : 1,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {icon && <span style={{ display:'flex', alignItems:'center' }}>{icon}</span>}
      {children}
    </button>
  );
}

// ─── INPUT ──────────────────────────────────────────────────
function Input({ label, placeholder, value, onChange, type='text', error, hint, icon }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
      {label && <label style={{ fontSize:11, fontWeight:700, color:T.fg2, letterSpacing:'0.04em', fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{label}</label>}
      <div style={{ position:'relative' }}>
        {icon && <span style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color:T.fg3, display:'flex' }}>{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width:'100%', padding: icon ? '10px 14px 10px 36px' : '10px 14px',
            border: `1.5px solid ${error ? T.error : focused ? T.purple : T.border}`,
            borderRadius: 12, fontFamily:"'Plus Jakarta Sans',sans-serif",
            fontSize:14, color:T.fg1, background:'#fff', outline:'none',
            boxShadow: focused ? `0 0 0 3px ${error ? 'rgba(255,92,92,0.12)' : 'rgba(138,79,255,0.12)'}` : 'none',
            transition:'border-color 200ms, box-shadow 200ms',
            boxSizing:'border-box',
          }}
        />
      </div>
      {(error || hint) && <div style={{ fontSize:11, color: error ? T.error : T.fg3, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{error || hint}</div>}
    </div>
  );
}

// ─── BADGE ──────────────────────────────────────────────────
function Badge({ children, color='purple', dot=false }) {
  const colors = {
    purple: { bg:'rgba(138,79,255,0.12)', fg:T.purpleDark, dot:T.purple },
    green:  { bg:'rgba(78,203,113,0.14)', fg:'#1a7a3a',    dot:T.success },
    red:    { bg:'rgba(255,92,92,0.12)',  fg:'#c0392b',     dot:T.error },
    yellow: { bg:'rgba(255,200,87,0.20)', fg:'#8a5c00',     dot:T.yellow },
    blue:   { bg:'rgba(74,144,226,0.14)', fg:'#1a5ba0',     dot:T.blue },
    grey:   { bg:'rgba(90,90,122,0.10)',  fg:T.fg2,         dot:T.fg3 },
    coral:  { bg:T.coral, fg:'#fff',                        dot:'#fff' },
  };
  const c = colors[color] || colors.purple;
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:4,
      padding:'3px 10px', borderRadius:9999,
      background:c.bg, color:c.fg,
      fontSize:11, fontWeight:700,
      fontFamily:"'Plus Jakarta Sans',sans-serif",
    }}>
      {dot && <span style={{ width:6, height:6, borderRadius:'50%', background:c.dot, flexShrink:0 }}></span>}
      {children}
    </span>
  );
}

// ─── TOGGLE ─────────────────────────────────────────────────
function Toggle({ on, onChange, label }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:10, cursor:'pointer' }} onClick={() => onChange(!on)}>
      <div style={{
        width:40, height:22, borderRadius:9999,
        background: on ? T.purple : '#e0dde8',
        position:'relative', transition:'background 200ms', flexShrink:0,
      }}>
        <div style={{
          position:'absolute', width:16, height:16, background:'#fff',
          borderRadius:'50%', top:3, left:3,
          transform: on ? 'translateX(18px)' : 'translateX(0)',
          transition:'transform 220ms cubic-bezier(0.34,1.56,0.64,1)',
          boxShadow:'0 1px 4px rgba(0,0,0,0.15)',
        }}></div>
      </div>
      {label && <span style={{ fontSize:13, fontWeight:500, color:T.fg1, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{label}</span>}
    </div>
  );
}

// ─── AVATAR ─────────────────────────────────────────────────
function Avatar({ name='?', size=36, color=T.purple }) {
  const initials = name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
  return (
    <div style={{
      width:size, height:size, borderRadius:'50%',
      background: color, color:'#fff',
      display:'flex', alignItems:'center', justifyContent:'center',
      fontFamily:"'Poppins',sans-serif", fontWeight:600,
      fontSize: size * 0.35, flexShrink:0,
    }}>{initials}</div>
  );
}

// ─── STAT CARD ──────────────────────────────────────────────
function StatCard({ label, value, delta, color=T.purple, icon }) {
  const positive = delta && !delta.startsWith('-');
  return (
    <div style={{
      background:'#fff', borderRadius:20, padding:'18px 20px',
      boxShadow:'0 4px 24px rgba(138,79,255,0.10)',
      display:'flex', flexDirection:'column', gap:8, flex:1,
    }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <span style={{ fontSize:11, fontWeight:700, color:T.fg3, textTransform:'uppercase', letterSpacing:'0.07em', fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{label}</span>
        {icon && <span style={{ color, opacity:0.7 }}>{icon}</span>}
      </div>
      <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:28, fontWeight:700, color:T.fg1, lineHeight:1 }}>{value}</div>
      {delta && (
        <div style={{ fontSize:11, fontWeight:600, color: positive ? T.success : T.error, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
          {positive ? '↑' : '↓'} {delta} vs last month
        </div>
      )}
    </div>
  );
}

// ─── POST CARD ──────────────────────────────────────────────
function PostCard({ title, preview, platform, status='draft', date, onClick }) {
  const [hov, setHov] = useState(false);
  const statusColors = { draft:'grey', published:'green', scheduled:'blue', failed:'red' };
  const platformColors = { Instagram:'#e1306c', Twitter:'#1da1f2', LinkedIn:'#0a66c2', Facebook:'#1877f2' };
  return (
    <div
      style={{
        background:'#fff', borderRadius:16, padding:'14px 16px',
        boxShadow: hov ? '0 8px 32px rgba(138,79,255,0.14)' : '0 2px 8px rgba(138,79,255,0.07)',
        cursor:'pointer', transition:'all 220ms cubic-bezier(0.22,1,0.36,1)',
        transform: hov ? 'translateY(-2px)' : 'translateY(0)',
        display:'flex', flexDirection:'column', gap:8,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
    >
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:8 }}>
        <span style={{ fontFamily:"'Poppins',sans-serif", fontSize:13, fontWeight:600, color:T.fg1, flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{title}</span>
        <Badge color={statusColors[status] || 'grey'} dot>{status}</Badge>
      </div>
      <div style={{ fontSize:12, color:T.fg2, lineHeight:1.5, fontFamily:"'Plus Jakarta Sans',sans-serif", display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{preview}</div>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        {platform && <span style={{ fontSize:11, fontWeight:700, color: platformColors[platform] || T.fg3, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{platform}</span>}
        {date && <span style={{ fontSize:11, color:T.fg3, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{date}</span>}
      </div>
    </div>
  );
}

// ─── SIDEBAR ────────────────────────────────────────────────
function Sidebar({ active='dashboard', onNav }) {
  const items = [
    { id:'dashboard', label:'Dashboard', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> },
    { id:'composer', label:'Composer', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
    { id:'campaigns', label:'Campaigns', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
    { id:'analytics', label:'Analytics', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
    { id:'settings', label:'Settings', icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> },
  ];
  return (
    <div style={{
      width:220, background:'#fff', height:'100%',
      display:'flex', flexDirection:'column',
      borderRight:`1px solid ${T.border}`,
      flexShrink:0,
    }}>
      {/* Logo */}
      <div style={{ padding:'20px 20px 12px', borderBottom:`1px solid ${T.border}` }}>
        <img src="../../assets/pingo-logo-yellow.jpg" alt="Pingo" style={{ width:80, borderRadius:10 }} />
      </div>
      {/* Nav */}
      <nav style={{ flex:1, padding:'12px 12px', display:'flex', flexDirection:'column', gap:2 }}>
        {items.map(item => {
          const isActive = active === item.id;
          return (
            <div
              key={item.id}
              onClick={() => onNav && onNav(item.id)}
              style={{
                display:'flex', alignItems:'center', gap:10,
                padding:'9px 12px', borderRadius:12, cursor:'pointer',
                background: isActive ? T.purpleTint : 'transparent',
                color: isActive ? T.purple : T.fg2,
                fontFamily:"'Plus Jakarta Sans',sans-serif",
                fontSize:13, fontWeight: isActive ? 700 : 500,
                transition:'all 180ms',
              }}
            >
              <span style={{ color: isActive ? T.purple : T.fg3, display:'flex' }}>{item.icon}</span>
              {item.label}
            </div>
          );
        })}
      </nav>
      {/* User */}
      <div style={{ padding:'16px 16px', borderTop:`1px solid ${T.border}`, display:'flex', alignItems:'center', gap:10 }}>
        <Avatar name="Sam Chen" size={32} color={T.coral} />
        <div>
          <div style={{ fontSize:12, fontWeight:700, color:T.fg1, fontFamily:"'Poppins',sans-serif" }}>Sam Chen</div>
          <div style={{ fontSize:10, color:T.fg3, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Sunrise Bakery</div>
        </div>
      </div>
    </div>
  );
}

// ─── TOP BAR ────────────────────────────────────────────────
function TopBar({ title, subtitle, actions }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'18px 28px', background:'#fff',
      borderBottom:`1px solid ${T.border}`,
      flexShrink:0,
    }}>
      <div>
        <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:20, fontWeight:700, color:T.fg1, lineHeight:1.2 }}>{title}</div>
        {subtitle && <div style={{ fontSize:12, color:T.fg3, fontFamily:"'Plus Jakarta Sans',sans-serif", marginTop:2 }}>{subtitle}</div>}
      </div>
      {actions && <div style={{ display:'flex', gap:8, alignItems:'center' }}>{actions}</div>}
    </div>
  );
}

// Export all components to window scope
Object.assign(window, {
  T, Button, Input, Badge, Toggle, Avatar,
  StatCard, PostCard, Sidebar, TopBar,
});
