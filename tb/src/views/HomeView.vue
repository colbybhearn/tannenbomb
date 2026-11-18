<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="bursts" aria-hidden="true">
        <span class="burst b1" /><span class="burst b2" /><span class="burst b3" /><span class="burst b4" />
      </div>

      <div class="container hero-inner">
        <span class="eyebrow hero-when"><span>{{ event.dateLabel }}</span> <span><span class="sep">· </span>{{ event.timeLabel }}</span></span>
        <h1 class="hero-title">
          <span class="fire-text">TannenBomb</span>
          <span class="hero-year">{{ event.year }}</span>
        </h1>

        <div class="scene" aria-hidden="true">
          <div class="flames"><i /><i /><i /></div>
          <div class="tree">🎄</div>
          <div class="raft" />
          <div class="pond" />
        </div>

        <p class="hero-tag">{{ event.tagline }}</p>
        <p class="hero-sub">
          A New Year's Eve fireworks show and Christmas tree burning,
          benefiting <a :href="event.axia.site" target="_blank" rel="noopener">AXIA Pregnancy Center</a>.
        </p>

        <div v-if="!countdown.done" class="countdown" role="timer" aria-label="Countdown to TannenBomb">
          <div v-for="u in countdown.units" :key="u.label" class="cd-unit">
            <span class="cd-num">{{ u.value }}</span>
            <span class="cd-label">{{ u.label }}</span>
          </div>
        </div>
        <p v-else class="live-now">🔥 It's TannenBomb time! 🔥</p>

        <div class="hero-ctas">
          <router-link to="/#rsvp" class="btn btn-fire">RSVP now</router-link>
          <router-link to="/#give" class="btn">❤️ Give to AXIA</router-link>
        </div>
      </div>
    </section>

    <!-- DETAILS / SCHEDULE -->
    <section id="details" class="section">
      <div class="container">
        <span class="eyebrow">The plan</span>
        <h2>One night. One tree. <span class="fire-text">All the sparks.</span></h2>
        <p class="lead">
          Hosted by {{ event.hosts }}. Grab tacos from
          <a :href="event.food.url" target="_blank" rel="noopener">{{ event.food.name }}</a>,
          warm up at the cocoa bar, and watch a Christmas tree go out in a blaze of glory.
        </p>

        <ol class="timeline">
          <li v-for="(s, i) in event.schedule" :key="s.time" :class="{ finale: i === event.schedule.length - 1 }">
            <div class="tl-time">{{ s.time }}<small>PM</small></div>
            <div class="tl-body">
              <h3>{{ s.title }}</h3>
              <p>{{ s.detail }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- RSVP -->
    <section id="rsvp" class="section section-alt">
      <div class="container rsvp-grid">
        <div class="rsvp-intro">
          <span class="eyebrow">RSVP</span>
          <h2>Save your spot <span aria-hidden="true">🎟️</span></h2>
          <p class="lead">
            No tickets needed, just a quick headcount. It helps us plan food, seating, parking,
            restrooms, and giveaways for the kids.
          </p>
          <ul class="why">
            <li><span aria-hidden="true">🌮</span> Enough tacos and cocoa for everyone</li>
            <li><span aria-hidden="true">🪑</span> Seating and restrooms sized right</li>
            <li><span aria-hidden="true">🚗</span> Parking that keeps neighbors happy</li>
            <li><span aria-hidden="true">🎁</span> A giveaway for every kid</li>
          </ul>
          <p class="small-note">
            Prefer to text? Reach {{ event.contact.name }} at
            <a :href="'sms:' + event.contact.sms">{{ event.contact.display }}</a>.
          </p>
        </div>
        <RsvpForm />
      </div>
    </section>

    <!-- GIVE -->
    <section id="give" class="section">
      <div class="container">
        <div class="give card">
          <div class="give-copy">
            <span class="eyebrow axia-eyebrow">Benefiting AXIA</span>
            <h2>Light a tree. <span class="axia-text">Change a life.</span></h2>
            <p>
              <strong>100% of donations go to
                <a :href="event.axia.site" target="_blank" rel="noopener">AXIA Pregnancy Center</a></strong>,
              which provides free, confidential care and treats every patient with value, worth, and dignity.
            </p>
            <p class="raised">Last time we raised <strong>$1,132.93</strong>. Let's beat it!</p>
          </div>

          <div class="give-actions">
            <p class="give-label">Bring cash, or give online:</p>
            <div class="pay-grid">
              <a :href="event.axia.cashApp" target="_blank" rel="noopener" class="pay">
                <img src="@/assets/payment/cashApp.png" alt="" width="40" height="40">
                <span>Cash App</span>
              </a>
              <a :href="event.axia.venmo" target="_blank" rel="noopener" class="pay">
                <img src="@/assets/payment/VenmoIcon.webp" alt="" width="40" height="40" class="venmo">
                <span>Venmo</span>
              </a>
              <a :href="event.axia.paypal" target="_blank" rel="noopener" class="pay">
                <img src="@/assets/payment/PayPal-Monogram-FullColor-RGB.png" alt="" width="40" height="40">
                <span>PayPal</span>
              </a>
            </div>
            <a :href="event.axia.giving" target="_blank" rel="noopener" class="more-giving">
              More options & monthly giving on AXIA's site →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- BRING -->
    <section class="section section-alt">
      <div class="container">
        <span class="eyebrow">Come prepared</span>
        <h2>What to bring</h2>
        <div class="bring-grid">
          <div v-for="b in event.bring" :key="b.title" class="bring card">
            <span class="bring-icon" aria-hidden="true">{{ b.icon }}</span>
            <h3>{{ b.title }}</h3>
            <p>{{ b.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- LOCATION -->
    <section id="location" class="section">
      <div class="container loc-grid">
        <div>
          <span class="eyebrow">Where</span>
          <h2>{{ event.location.name }}</h2>
          <p class="lead">{{ event.location.city }}</p>
          <p class="muted">Look for the pond, the crowd, and the very nervous Christmas tree.</p>
          <a :href="event.location.mapsUrl" target="_blank" rel="noopener" class="btn btn-fire">📍 Get directions</a>
        </div>
        <div class="map">
          <iframe
            :src="event.location.embedUrl"
            title="Map to Lost Creek, Whitehouse TX"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import event from '../event'
import RsvpForm from '../components/RsvpForm.vue'

const pad = n => String(n).padStart(2, '0')

export default {
  name: 'HomeView',
  components: { RsvpForm },
  data: () => ({ event, now: Date.now(), timer: null }),
  computed: {
    countdown () {
      const diff = new Date(event.startsAt).getTime() - this.now
      // Stay in "live" mode for the night after start.
      if (diff <= 0) return { done: true, units: [] }
      const s = Math.floor(diff / 1000)
      return {
        done: false,
        units: [
          { label: 'days', value: Math.floor(s / 86400) },
          { label: 'hours', value: pad(Math.floor((s % 86400) / 3600)) },
          { label: 'mins', value: pad(Math.floor((s % 3600) / 60)) },
          { label: 'secs', value: pad(s % 60) }
        ]
      }
    }
  },
  mounted () {
    this.timer = setInterval(() => { this.now = Date.now() }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
/* HERO */
.hero {
  position: relative;
  text-align: center;
  padding: clamp(24px, 6vw, 64px) 0 clamp(56px, 8vw, 96px);
  overflow: hidden;
}
.hero-inner { position: relative; z-index: 1; }
.hero-title {
  font-size: clamp(3.2rem, 15vw, 7.5rem);
  font-weight: 800;
  line-height: 0.95;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-year {
  font-size: 0.42em;
  font-style: italic;
  font-weight: 600;
  color: var(--text);
  letter-spacing: 0.08em;
  margin-top: 0.1em;
}
.hero-tag {
  font-family: var(--display);
  font-style: italic;
  font-size: clamp(1.3rem, 4vw, 1.7rem);
  color: var(--gold);
  margin: 0 0 0.4em;
}
.hero-sub { color: var(--muted); max-width: 46ch; margin: 0 auto 28px; font-size: 1.08rem; }
.hero-sub a { color: var(--axia); }

/* Tree-on-a-raft scene */
.scene {
  position: relative;
  width: 200px;
  height: 190px;
  margin: 18px auto 16px;
}
.tree {
  position: absolute;
  bottom: 38px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 92px;
  line-height: 1;
  filter: drop-shadow(0 0 24px rgba(255, 140, 40, 0.55));
  animation: shiver 0.18s infinite alternate;
}
@keyframes shiver {
  from { transform: translateX(-50%) rotate(-1.2deg); }
  to { transform: translateX(-50%) rotate(1.2deg); }
}
.raft {
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 120px;
  height: 12px;
  margin-left: -60px;
  border-radius: 4px;
  background: repeating-linear-gradient(90deg, #8a5a32 0 18px, #6b4325 18px 20px);
  box-shadow: 0 4px 0 #4a2d18;
  animation: bob 3s ease-in-out infinite;
}
@keyframes bob { 50% { transform: translateY(3px); } }
.pond {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 200px;
  height: 36px;
  margin-left: -100px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(255, 140, 40, 0.35), rgba(30, 80, 140, 0.35) 45%, transparent 70%);
}
.flames {
  position: absolute;
  bottom: 110px;
  left: 50%;
  width: 90px;
  height: 80px;
  margin-left: -45px;
  pointer-events: none;
}
.flames i {
  position: absolute;
  bottom: 0;
  width: 26px;
  height: 46px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  background: radial-gradient(circle at 50% 80%, #fff6c2, var(--flame) 40%, var(--ember) 65%, transparent 72%);
  filter: blur(1px);
  mix-blend-mode: screen;
  animation: flame 0.9s ease-in-out infinite alternate;
  opacity: 0.9;
}
.flames i:nth-child(1) { left: 12px; animation-delay: -0.3s; }
.flames i:nth-child(2) { left: 32px; height: 60px; animation-delay: -0.6s; }
.flames i:nth-child(3) { left: 52px; animation-delay: -0.1s; }
@keyframes flame {
  from { transform: scaleY(0.85) translateY(4px) skewX(-4deg); opacity: 0.7; }
  to { transform: scaleY(1.15) translateY(-4px) skewX(4deg); opacity: 1; }
}

/* Firework bursts */
.bursts { position: absolute; inset: 0; pointer-events: none; }
.burst {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  color: var(--gold);
  box-shadow:
    0 -60px 0 0 currentColor, 0 60px 0 0 currentColor, -60px 0 0 0 currentColor, 60px 0 0 0 currentColor,
    42px 42px 0 0 currentColor, -42px -42px 0 0 currentColor, 42px -42px 0 0 currentColor, -42px 42px 0 0 currentColor,
    0 -32px 0 -1px currentColor, 0 32px 0 -1px currentColor, -32px 0 0 -1px currentColor, 32px 0 0 -1px currentColor;
  animation: burst 3.6s ease-out infinite;
  opacity: 0;
}
.b1 { top: 14%; left: 10%; color: var(--gold); }
.b2 { top: 10%; right: 12%; color: var(--red); animation-delay: 1.1s; }
.b3 { top: 46%; left: 6%; color: var(--pine); animation-delay: 2s; }
.b4 { top: 40%; right: 7%; color: var(--flame); animation-delay: 2.7s; }
@keyframes burst {
  0% { transform: scale(0.1); opacity: 0; }
  10% { opacity: 1; }
  45% { transform: scale(1); opacity: 0.9; }
  70%, 100% { transform: scale(1.15) translateY(14px); opacity: 0; }
}
.hero-when > span { white-space: nowrap; }
@media (max-width: 600px) {
  .hero-when > span { display: block; }
  .hero-when .sep { display: none; }
}
@media (max-width: 600px) {
  .burst { scale: 0.6; }
  .b1 { top: 30%; left: 4%; }
  .b2 { top: 34%; right: 4%; }
  .b3, .b4 { top: 62%; }
}

/* Countdown */
.countdown {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  max-width: 440px;
  margin: 0 auto 28px;
}
.cd-unit {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 12px 4px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cd-num {
  font-family: var(--display);
  font-weight: 800;
  font-size: clamp(1.6rem, 7vw, 2.3rem);
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.cd-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.14em; color: var(--muted); margin-top: 6px; }
.live-now { font-family: var(--display); font-size: 1.6rem; color: var(--gold); }

.hero-ctas { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
@media (max-width: 420px) { .hero-ctas .btn { flex: 1 1 100%; } }

/* Sections */
.section-alt {
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.025) 15%, rgba(255, 255, 255, 0.025) 85%, transparent);
}
.muted { color: var(--muted); }

/* Timeline */
.timeline {
  list-style: none;
  margin: 36px 0 0;
  padding: 0;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
}
.timeline li {
  position: relative;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 24px;
  display: grid;
  gap: 10px;
}
.timeline li.finale {
  border-color: rgba(255, 140, 40, 0.5);
  background: linear-gradient(160deg, rgba(255, 106, 26, 0.18), rgba(229, 56, 59, 0.08));
  box-shadow: 0 0 40px -10px rgba(255, 106, 26, 0.5);
}
.tl-time { font-family: var(--display); font-weight: 800; font-size: 2.2rem; line-height: 1; color: var(--gold); }
.tl-time small { font-size: 0.4em; margin-left: 4px; color: var(--muted); letter-spacing: 0.1em; }
.tl-body h3 { margin: 0 0 4px; }
.tl-body p { margin: 0; color: var(--muted); }
@media (max-width: 760px) {
  .timeline { grid-template-columns: 1fr; gap: 0; }
  .timeline li {
    grid-template-columns: 84px 1fr;
    align-items: start;
    border-radius: 0;
    border-width: 0 0 0 2px;
    border-color: var(--line);
    background: none;
    padding: 4px 0 28px 20px;
    box-shadow: none;
  }
  .timeline li::before {
    content: '';
    position: absolute;
    left: -7px;
    top: 10px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 0 4px var(--bg);
  }
  .timeline li.finale { background: none; border-color: var(--ember); }
  .timeline li.finale::before { background: var(--ember); box-shadow: 0 0 0 4px var(--bg), 0 0 16px var(--ember); }
  .tl-time { font-size: 1.7rem; }
}

/* RSVP */
.rsvp-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: clamp(28px, 5vw, 56px); align-items: start; }
.rsvp-intro { position: sticky; top: 96px; }
.why { list-style: none; padding: 0; margin: 20px 0; display: grid; gap: 10px; }
.why li { display: flex; gap: 12px; align-items: center; }
.why span { font-size: 1.3rem; width: 28px; text-align: center; }
.small-note { color: var(--muted); font-size: 0.95rem; }
@media (max-width: 860px) {
  .rsvp-grid { grid-template-columns: 1fr; }
  .rsvp-intro { position: static; }
}

/* Give */
.give {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: center;
  border-color: rgba(255, 159, 154, 0.3);
  background: linear-gradient(150deg, rgba(255, 159, 154, 0.12), rgba(255, 255, 255, 0.03) 60%);
}
.axia-eyebrow { color: var(--axia); }
.axia-text { color: var(--axia); font-style: italic; }
.give-copy p { color: var(--muted); }
.give-copy strong { color: var(--text); }
.give-copy a { color: var(--axia); }
.raised { font-size: 1.05rem; }
.raised strong { color: var(--gold); }
.give-label { margin: 0 0 12px; font-weight: 600; }
.pay-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.pay {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.92);
  color: #1a1a1a;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.2s;
}
.pay:hover { color: #000; transform: translateY(-3px); box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.6); }
.pay img { width: 40px; height: 40px; object-fit: contain; }
.pay img.venmo { background: #008cff; border-radius: 10px; padding: 6px; }
.more-giving { display: inline-block; margin-top: 16px; color: var(--axia); font-weight: 500; }
@media (max-width: 760px) { .give { grid-template-columns: 1fr; } }

/* Bring */
.bring-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 14px;
  margin-top: 28px;
}
.bring { padding: 22px; box-shadow: none; transition: transform 0.2s, border-color 0.2s; }
.bring:hover { transform: translateY(-4px); border-color: rgba(247, 201, 85, 0.4); }
.bring-icon { font-size: 2rem; display: block; margin-bottom: 10px; }
.bring h3 { margin-bottom: 4px; font-size: 1.1rem; }
.bring p { margin: 0; color: var(--muted); font-size: 0.95rem; }
@media (max-width: 480px) {
  .bring-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
  .bring { padding: 16px; }
}

/* Location */
.loc-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: clamp(24px, 4vw, 48px); align-items: center; }
.map {
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  aspect-ratio: 4 / 3;
}
.map iframe { width: 100%; height: 100%; border: 0; display: block; filter: saturate(0.9) contrast(1.05); }
@media (max-width: 760px) { .loc-grid { grid-template-columns: 1fr; } }
</style>
