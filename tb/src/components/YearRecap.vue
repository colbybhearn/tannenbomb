<template>
  <div class="recap">
    <section class="section recap-head">
      <div class="container">
        <span class="eyebrow">Memories</span>
        <nav class="year-tabs" aria-label="Past years">
          <router-link v-for="y in years" :key="y" :to="'/yr' + String(y).slice(2)">{{ y }}</router-link>
        </nav>
        <h1 class="recap-title">TannenBomb <span class="fire-text">{{ year }}</span></h1>
        <p class="lead"><slot name="intro" /></p>
        <div v-if="$slots.stat" class="stat card"><slot name="stat" /></div>
      </div>
    </section>

    <section v-if="photos.length" class="container gallery">
      <figure v-for="p in photos" :key="p.src" :class="{ wide: p.wide }">
        <img :src="p.src" :alt="p.alt" loading="lazy">
        <figcaption>{{ p.alt }}</figcaption>
      </figure>
    </section>

    <section v-if="videos.length" class="section"><div class="container">
      <h2>Watch it burn 🔥</h2>
      <p v-if="$slots.videoNote" class="muted"><slot name="videoNote" /></p>
      <div class="videos" :class="{ single: videos.length === 1 }">
        <div v-for="v in videos" :key="v.src" class="video" :class="{ tall: v.tall }">
          <iframe
            :src="v.src"
            :title="v.title"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div></section>

    <section class="container extra">
      <slot />
    </section>

    <section class="section cta"><div class="container">
      <div class="card cta-card">
        <h2>Be there this year</h2>
        <p class="muted">New Year's Eve at 5PM in Lost Creek.</p>
        <router-link to="/#rsvp" class="btn btn-fire">RSVP now</router-link>
      </div>
    </div></section>
  </div>
</template>

<script>
export default {
  name: 'YearRecap',
  props: {
    year: { type: Number, required: true },
    photos: { type: Array, default: () => [] },
    videos: { type: Array, default: () => [] }
  },
  data: () => ({ years: [2023, 2022, 2020] })
}
</script>

<style scoped>
.recap-head { padding-bottom: 32px; }
.recap-title { font-size: clamp(2.6rem, 10vw, 4.5rem); font-weight: 800; }
.year-tabs { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; }
.year-tabs a {
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid var(--line);
  color: var(--muted);
  text-decoration: none;
  font-weight: 600;
}
.year-tabs a:hover { color: var(--text); }
.year-tabs a.router-link-exact-active {
  color: #1b0d03;
  border-color: transparent;
  background: linear-gradient(135deg, var(--gold), var(--ember));
}
.stat { display: inline-block; margin-top: 8px; font-size: 1.1rem; box-shadow: none; }

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
}
.gallery figure {
  margin: 0;
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--line);
  aspect-ratio: 3 / 4;
  background: var(--card);
}
.gallery img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.gallery figure:hover img { transform: scale(1.04); }
.gallery figcaption {
  position: absolute;
  inset: auto 0 0;
  padding: 28px 14px 12px;
  font-size: 0.9rem;
  font-weight: 500;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
}
@media (max-width: 520px) {
  .gallery { grid-template-columns: 1fr 1fr; gap: 8px; }
  .gallery figcaption { font-size: 0.78rem; padding: 20px 10px 8px; }
}

.videos { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
.videos.single { max-width: 760px; }
.video { border-radius: var(--radius); overflow: hidden; border: 1px solid var(--line); aspect-ratio: 1 / 1; background: #000; }
.video.tall { aspect-ratio: 9 / 16; max-width: 360px; }
.video iframe { width: 100%; height: 100%; border: 0; display: block; }
.muted { color: var(--muted); }

.extra:empty { display: none; }
.cta-card { text-align: center; }
</style>
