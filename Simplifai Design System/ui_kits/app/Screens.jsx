// Pingo UI Kit — Screens
// Requires Components.jsx to be loaded first

const { useState } = React;

// ─── DASHBOARD SCREEN ───────────────────────────────────────
function DashboardScreen({ onNav }) {
  const posts = [
    { title: "5 reasons to visit us this weekend", preview: "The smell of fresh croissants alone is worth the trip — but we've got even more reasons to stop by Sunrise Bakery this Saturday.", platform:"Instagram", status:"published", date:"May 1" },
    { title: "New: Sourdough subscription box", preview: "Get a hand-picked selection of our freshest sourdough loaves delivered to your door every Thursday morning.", platform:"Email", status:"scheduled", date:"May 5" },
    { title: "Mother's Day special — pre-order now", preview: "Treat Mum to something special this year. Our limited-edition floral cake boxes are selling fast.", platform:"Facebook", status:"draft", date:"—" },
  ];

  return (
    <div style={{ flex:1, background:T.bg, overflowY:'auto', display:'flex', flexDirection:'column' }}>
      <TopBar
        title="Good morning, Sam ✨"
        subtitle="Here's what's happening with your marketing today"
        actions={<Button variant="primary" size="sm">+ New post</Button>}
      />
      <div style={{ padding:'24px 28px', display:'flex', flexDirection:'column', gap:24 }}>
        {/* Stats */}
        <div style={{ display:'flex', gap:16 }}>
          <StatCard label="Posts this month" value="12" delta="4" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>} />
          <StatCard label="Avg. reach" value="1,240" delta="18%" color={T.coral} icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>} />
          <StatCard label="Engagement" value="8.4%" delta="2.1%" color={T.yellow} icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>} />
        </div>

        {/* Quick actions */}
        <div style={{ background:'#fff', borderRadius:20, padding:'20px 24px', boxShadow:'0 4px 24px rgba(138,79,255,0.08)' }}>
          <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:14, fontWeight:600, color:T.fg1, marginBottom:14 }}>Quick actions</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            <Button variant="primary" size="sm" onClick={() => onNav('composer')}>Write a post</Button>
            <Button variant="soft" size="sm">Schedule content</Button>
            <Button variant="ghost" size="sm">View analytics</Button>
          </div>
        </div>

        {/* Recent posts */}
        <div>
          <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:14, fontWeight:600, color:T.fg1, marginBottom:12 }}>Recent posts</div>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {posts.map((p, i) => <PostCard key={i} {...p} onClick={() => onNav('campaigns')} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── COMPOSER SCREEN ────────────────────────────────────────
function ComposerScreen({ onNav }) {
  const [prompt, setPrompt] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [tone, setTone] = useState('friendly');
  const [generated, setGenerated] = useState(null);
  const [loading, setLoading] = useState(false);

  const platforms = ['Instagram', 'Facebook', 'LinkedIn', 'Email'];
  const tones = ['friendly', 'professional', 'playful', 'urgent'];

  const generate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setGenerated(null);
    try {
      const result = await window.claude.complete({
        messages: [{ role: 'user', content: `Write a short ${platform} marketing post for a small business. Tone: ${tone}. Brief: ${prompt}. Keep it under 150 words, no hashtags. Just the post copy.` }]
      });
      setGenerated(result);
    } catch (e) {
      setGenerated("Here's a great post for your business: share your story, connect with your community, and let your authentic voice shine through. Your customers love hearing from you directly!");
    }
    setLoading(false);
  };

  return (
    <div style={{ flex:1, background:T.bg, overflowY:'auto', display:'flex', flexDirection:'column' }}>
      <TopBar title="Composer" subtitle="Let AI write your next post" />
      <div style={{ padding:'24px 28px', display:'flex', gap:20, flex:1 }}>
        {/* Left panel — inputs */}
        <div style={{ flex:1, display:'flex', flexDirection:'column', gap:16 }}>
          <div style={{ background:'#fff', borderRadius:20, padding:'20px 22px', boxShadow:'0 4px 24px rgba(138,79,255,0.08)', display:'flex', flexDirection:'column', gap:16 }}>
            <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:14, fontWeight:600, color:T.fg1 }}>What do you want to say?</div>
            <Input
              label="Your brief"
              placeholder="e.g. Announce our new sourdough subscription box launching next week"
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
            />
            {/* Platform selector */}
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:T.fg2, letterSpacing:'0.04em', fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:6 }}>Platform</div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                {platforms.map(p => (
                  <div key={p} onClick={() => setPlatform(p)} style={{
                    padding:'6px 14px', borderRadius:9999, cursor:'pointer',
                    border:`1.5px solid ${platform===p ? T.purple : T.border}`,
                    background: platform===p ? T.purpleTint : '#fff',
                    color: platform===p ? T.purple : T.fg2,
                    fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, fontWeight:600,
                    transition:'all 180ms',
                  }}>{p}</div>
                ))}
              </div>
            </div>
            {/* Tone selector */}
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:T.fg2, letterSpacing:'0.04em', fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:6 }}>Tone</div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                {tones.map(t => (
                  <div key={t} onClick={() => setTone(t)} style={{
                    padding:'6px 14px', borderRadius:9999, cursor:'pointer',
                    border:`1.5px solid ${tone===t ? T.coral : T.border}`,
                    background: tone===t ? 'rgba(255,122,89,0.08)' : '#fff',
                    color: tone===t ? T.coral : T.fg2,
                    fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, fontWeight:600,
                    transition:'all 180ms',
                    textTransform:'capitalize',
                  }}>{t}</div>
                ))}
              </div>
            </div>
            <Button variant="primary" onClick={generate} disabled={loading || !prompt.trim()}>
              {loading ? 'Writing…' : 'Generate post'}
            </Button>
          </div>
        </div>

        {/* Right panel — output */}
        <div style={{ flex:1, display:'flex', flexDirection:'column', gap:12 }}>
          <div style={{ background:'#fff', borderRadius:20, padding:'20px 22px', boxShadow:'0 4px 24px rgba(138,79,255,0.08)', flex:1 }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
              <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:14, fontWeight:600, color:T.fg1 }}>Your post</div>
              {generated && <Badge color="green" dot>Ready</Badge>}
            </div>
            {loading ? (
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {[80,60,90,40].map((w,i) => (
                  <div key={i} style={{ height:14, background:'linear-gradient(90deg,#f5f3ff 25%,#ede9ff 50%,#f5f3ff 75%)', backgroundSize:'200% 100%', borderRadius:7, width:`${w}%`, animation:'shimmer 1.2s infinite' }}></div>
                ))}
                <style>{`@keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }`}</style>
              </div>
            ) : generated ? (
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:14, color:T.fg1, lineHeight:1.7, whiteSpace:'pre-wrap' }}>{generated}</div>
            ) : (
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:T.fg3, textAlign:'center', paddingTop:40 }}>
                Fill in your brief and hit "Generate post" to get started.
              </div>
            )}
          </div>
          {generated && (
            <div style={{ display:'flex', gap:8 }}>
              <Button variant="purple" size="sm">Schedule post</Button>
              <Button variant="soft" size="sm" onClick={generate}>Regenerate</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── CAMPAIGNS SCREEN ────────────────────────────────────────
function CampaignsScreen({ onNav }) {
  const [filter, setFilter] = useState('all');
  const campaigns = [
    { name:'May Launch — Sourdough Box', posts:8, status:'active', reach:'4,200', engagement:'9.1%' },
    { name:'Mother\'s Day Promotion', posts:5, status:'scheduled', reach:'—', engagement:'—' },
    { name:'Spring Menu Reveal', posts:12, status:'completed', reach:'6,800', engagement:'11.4%' },
    { name:'Weekend Specials', posts:3, status:'draft', reach:'—', engagement:'—' },
  ];
  const filters = ['all','active','scheduled','completed','draft'];
  const filtered = filter === 'all' ? campaigns : campaigns.filter(c => c.status === filter);
  const statusColor = { active:'green', scheduled:'blue', completed:'grey', draft:'grey' };

  return (
    <div style={{ flex:1, background:T.bg, overflowY:'auto', display:'flex', flexDirection:'column' }}>
      <TopBar title="Campaigns" subtitle={`${campaigns.length} total campaigns`} actions={<Button variant="primary" size="sm">+ New campaign</Button>} />
      <div style={{ padding:'24px 28px', display:'flex', flexDirection:'column', gap:16 }}>
        {/* Filter chips */}
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {filters.map(f => (
            <div key={f} onClick={() => setFilter(f)} style={{
              padding:'6px 16px', borderRadius:9999, cursor:'pointer',
              background: filter===f ? T.purple : '#fff',
              color: filter===f ? '#fff' : T.fg2,
              border:`1.5px solid ${filter===f ? T.purple : T.border}`,
              fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:12, fontWeight:600,
              textTransform:'capitalize', transition:'all 180ms',
            }}>{f}</div>
          ))}
        </div>
        {/* Campaign list */}
        <div style={{ background:'#fff', borderRadius:20, overflow:'hidden', boxShadow:'0 4px 24px rgba(138,79,255,0.08)' }}>
          {filtered.map((c, i) => (
            <div key={i} onClick={() => onNav('detail')} style={{
              display:'flex', alignItems:'center', justifyContent:'space-between',
              padding:'16px 20px', cursor:'pointer',
              borderBottom: i < filtered.length-1 ? `1px solid ${T.border}` : 'none',
              transition:'background 150ms',
            }}
            onMouseEnter={e => e.currentTarget.style.background=T.purpleTint}
            onMouseLeave={e => e.currentTarget.style.background='transparent'}
            >
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:13, fontWeight:600, color:T.fg1, marginBottom:4 }}>{c.name}</div>
                <div style={{ fontSize:11, color:T.fg3, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{c.posts} posts</div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:20 }}>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontSize:13, fontWeight:700, color:T.fg1, fontFamily:"'Poppins',sans-serif" }}>{c.reach}</div>
                  <div style={{ fontSize:10, color:T.fg3, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Reach</div>
                </div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontSize:13, fontWeight:700, color:T.fg1, fontFamily:"'Poppins',sans-serif" }}>{c.engagement}</div>
                  <div style={{ fontSize:10, color:T.fg3, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Engagement</div>
                </div>
                <Badge color={statusColor[c.status]} dot>{c.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SETTINGS SCREEN ────────────────────────────────────────
function SettingsScreen() {
  const [emailDigest, setEmailDigest] = useState(true);
  const [aiSuggestions, setAiSuggestions] = useState(true);
  const [autoSchedule, setAutoSchedule] = useState(false);

  return (
    <div style={{ flex:1, background:T.bg, overflowY:'auto', display:'flex', flexDirection:'column' }}>
      <TopBar title="Settings" subtitle="Manage your account and preferences" />
      <div style={{ padding:'24px 28px', display:'flex', flexDirection:'column', gap:16, maxWidth:560 }}>
        {/* Profile */}
        <div style={{ background:'#fff', borderRadius:20, padding:'20px 22px', boxShadow:'0 4px 24px rgba(138,79,255,0.08)', display:'flex', flexDirection:'column', gap:14 }}>
          <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:14, fontWeight:600, color:T.fg1 }}>Profile</div>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <Avatar name="Sam Chen" size={48} color={T.coral} />
            <div style={{ flex:1, display:'flex', flexDirection:'column', gap:10 }}>
              <Input label="Full name" value="Sam Chen" onChange={() => {}} />
              <Input label="Business name" value="Sunrise Bakery" onChange={() => {}} />
            </div>
          </div>
          <Input label="Email" value="sam@sunrisebakery.com" type="email" onChange={() => {}} />
          <div><Button variant="primary" size="sm">Save changes</Button></div>
        </div>
        {/* Preferences */}
        <div style={{ background:'#fff', borderRadius:20, padding:'20px 22px', boxShadow:'0 4px 24px rgba(138,79,255,0.08)', display:'flex', flexDirection:'column', gap:14 }}>
          <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:14, fontWeight:600, color:T.fg1 }}>Preferences</div>
          <Toggle on={emailDigest} onChange={setEmailDigest} label="Weekly email digest" />
          <Toggle on={aiSuggestions} onChange={setAiSuggestions} label="AI content suggestions" />
          <Toggle on={autoSchedule} onChange={setAutoSchedule} label="Auto-schedule posts" />
        </div>
        {/* Connected accounts */}
        <div style={{ background:'#fff', borderRadius:20, padding:'20px 22px', boxShadow:'0 4px 24px rgba(138,79,255,0.08)', display:'flex', flexDirection:'column', gap:12 }}>
          <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:14, fontWeight:600, color:T.fg1 }}>Connected accounts</div>
          {[
            { name:'Instagram', connected:true, color:'#e1306c' },
            { name:'Facebook', connected:true, color:'#1877f2' },
            { name:'LinkedIn', connected:false, color:'#0a66c2' },
          ].map(acct => (
            <div key={acct.name} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 0', borderBottom:`1px solid ${T.border}` }}>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, fontWeight:600, color:acct.color }}>{acct.name}</div>
              {acct.connected
                ? <Badge color="green" dot>Connected</Badge>
                : <Button variant="ghost" size="sm">Connect</Button>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Export screens
Object.assign(window, { DashboardScreen, ComposerScreen, CampaignsScreen, SettingsScreen });
