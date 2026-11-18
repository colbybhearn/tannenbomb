<template>
  <div id="app">
    <SnowFall />

    <header class="topbar" :class="{ scrolled }">
      <div class="topbar-inner">
        <router-link to="/" class="brand" @click.native="menuOpen = false">
          <span class="brand-tree" aria-hidden="true">🎄</span>
          <span>Tannen<span class="brand-bomb">Bomb</span></span>
        </router-link>

        <button
          class="menu-btn"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-controls="site-nav"
          aria-label="Menu"
          @click="menuOpen = !menuOpen"
        >
          <span /><span /><span />
        </button>

        <nav id="site-nav" :class="{ open: menuOpen }" @click="menuOpen = false">
          <router-link to="/#details">Details</router-link>
          <router-link to="/#give">Give</router-link>
          <router-link to="/yr2023" :class="{ 'is-active': isMemories }">Memories</router-link>
          <router-link to="/faq">FAQ</router-link>
          <router-link to="/#rsvp" class="btn btn-sm btn-fire">RSVP</router-link>
        </nav>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="site-footer">
      <p class="footer-love">
        100% of donations benefit
        <a href="https://axiacenter.org/" target="_blank" rel="noopener">AXIA Pregnancy Center</a> ❤️
      </p>
      <p class="footer-small">
        © {{ new Date().getFullYear() }} TannenBomb · Built by
        <a href="https://thecodesmiths.io" target="_blank" rel="noopener">The Codesmiths</a>
      </p>
    </footer>
  </div>
</template>

<script>
import SnowFall from './components/SnowFall.vue'

export default {
  name: 'App',
  components: { SnowFall },
  data: () => ({ menuOpen: false, scrolled: false }),
  computed: {
    isMemories () { return /^\/yr/.test(this.$route.path) }
  },
  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () { this.scrolled = window.scrollY > 12 }
  }
}
</script>

<style lang="scss">
:root {
  --bg: #0a1020;
  --bg-2: #0f1a30;
  --card: rgba(255, 255, 255, 0.045);
  --card-hi: rgba(255, 255, 255, 0.08);
  --line: rgba(255, 255, 255, 0.1);
  --text: #f7f1e6;
  --muted: #aeb8cc;
  --ember: #ff6a1a;
  --flame: #ffb03a;
  --gold: #f7c955;
  --red: #e5383b;
  --pine: #34c47c;
  --pine-deep: #146b45;
  --axia: #ff9f9a;
  --radius: 20px;
  --radius-sm: 12px;
  --shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.7);
  --display: 'Fraunces', Georgia, serif;
  --body: 'Outfit', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --gutter: clamp(16px, 4vw, 32px);
  color-scheme: dark;
}

*, *::before, *::after { box-sizing: border-box; }

html {
  background: var(--bg);
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: var(--body);
  font-size: 17px;
  line-height: 1.6;
  color: var(--text);
  background:
    radial-gradient(1200px 600px at 80% -10%, rgba(255, 106, 26, 0.16), transparent 60%),
    radial-gradient(900px 600px at -10% 20%, rgba(52, 196, 124, 0.12), transparent 60%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 60%, var(--bg) 100%);
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

img { max-width: 100%; display: block; }

a { color: var(--flame); text-underline-offset: 3px; }
a:hover { color: var(--gold); }

h1, h2, h3 {
  font-family: var(--display);
  line-height: 1.1;
  margin: 0 0 0.5em;
  letter-spacing: -0.01em;
}
h2 { font-size: clamp(1.9rem, 5vw, 2.8rem); }
h3 { font-size: 1.25rem; }

#app { position: relative; }
main { position: relative; z-index: 1; }

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--gutter);
}

.section { padding: clamp(56px, 9vw, 96px) 0; }

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.75rem;
}

.lead { font-size: 1.12rem; color: var(--muted); max-width: 60ch; }

.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: clamp(20px, 4vw, 32px);
  box-shadow: var(--shadow);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.fire-text {
  background: linear-gradient(100deg, var(--gold), var(--ember) 35%, var(--red) 55%, var(--flame) 80%, var(--gold));
  background-size: 250% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: flicker-bg 6s ease-in-out infinite alternate;
}
@keyframes flicker-bg {
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  min-height: 48px;
  padding: 0.7em 1.4em;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--card-hi);
  color: var(--text);
  font: 600 1rem/1 var(--body);
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
  -webkit-tap-highlight-color: transparent;
}
.btn:hover { color: var(--text); transform: translateY(-2px); background: rgba(255, 255, 255, 0.12); }
.btn:active { transform: translateY(0); }
.btn:focus-visible, a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
  outline: 3px solid var(--gold);
  outline-offset: 3px;
}
.btn-fire {
  border: 0;
  color: #1b0d03;
  background: linear-gradient(135deg, var(--gold), var(--ember));
  box-shadow: 0 10px 30px -10px rgba(255, 106, 26, 0.8);
}
.btn-fire:hover { color: #1b0d03; background: linear-gradient(135deg, #ffe08a, #ff7d33); box-shadow: 0 14px 34px -10px rgba(255, 106, 26, 0.95); }
.btn-sm { min-height: 40px; padding: 0.55em 1.2em; font-size: 0.95rem; }

/* Header */
.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  padding-top: env(safe-area-inset-top);
  transition: background 0.25s ease, border-color 0.25s ease;
  border-bottom: 1px solid transparent;
}
.topbar.scrolled {
  background: rgba(10, 16, 32, 0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-color: var(--line);
}
.topbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 12px var(--gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--display);
  font-weight: 800;
  font-size: 1.35rem;
  color: var(--text);
  text-decoration: none;
}
.brand:hover { color: var(--text); }
.brand-bomb { color: var(--ember); }
.brand-tree { font-size: 1.4rem; filter: drop-shadow(0 0 8px rgba(255, 140, 40, 0.6)); }

#site-nav { display: flex; align-items: center; gap: 4px; }
#site-nav a:not(.btn) {
  color: var(--muted);
  text-decoration: none;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 999px;
  transition: color 0.2s, background 0.2s;
}
#site-nav a:not(.btn):hover { color: var(--text); background: var(--card); }
#site-nav a.is-active,
#site-nav a.router-link-exact-active[href="/faq"] { color: var(--text); background: var(--card-hi); }
#site-nav .btn { margin-left: 8px; }

.menu-btn {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--card);
  cursor: pointer;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.menu-btn span {
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background: var(--text);
  transition: transform 0.25s, opacity 0.25s;
}
.menu-btn[aria-expanded='true'] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-btn[aria-expanded='true'] span:nth-child(2) { opacity: 0; }
.menu-btn[aria-expanded='true'] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 760px) {
  .menu-btn { display: inline-flex; }
  #site-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 12px var(--gutter) 20px;
    background: rgba(10, 16, 32, 0.97);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  #site-nav.open { opacity: 1; transform: none; pointer-events: auto; }
  #site-nav a:not(.btn) { padding: 14px 16px; font-size: 1.05rem; }
  #site-nav .btn { margin: 8px 0 0; min-height: 50px; }
}

/* Footer */
.site-footer {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 48px var(--gutter) calc(48px + env(safe-area-inset-bottom));
  border-top: 1px solid var(--line);
  color: var(--muted);
}
.site-footer p { margin: 0.3em 0; }
.footer-love { color: var(--text); font-weight: 500; }
.footer-love a { color: var(--axia); }
.footer-small { font-size: 0.85rem; }
.footer-small a { color: var(--muted); }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}
</style>
