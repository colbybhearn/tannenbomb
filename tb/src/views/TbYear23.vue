<template>
  <YearRecap :year="2023" :photos="photos" :videos="videos">
    <template #intro>
      ~150 friends and family joined us for good food, fun music, great fellowship, and a fantastic flame!
      Thank you to everyone who helped and donated time and money.
    </template>
    <template #stat>💝 <strong>$1,132.93</strong> raised for AXIA!</template>
    <template #videoNote>Videography courtesy of Joe Burleson.</template>

    <div class="card thanks">
      <a href="https://www.facebook.com/p/Sauce-Belly-100086469321950/" target="_blank" rel="noopener">
        <img src="@/assets/2023/sb.jpg" alt="Sauce Belly logo" width="96" height="96">
      </a>
      <p>
        <strong>Special thanks</strong> to
        <a href="https://www.facebook.com/p/Sauce-Belly-100086469321950/" target="_blank" rel="noopener">Sauce Belly</a>
        for serving up delicious tacos again!
      </p>
    </div>
  </YearRecap>
</template>

<script>
import YearRecap from '../components/YearRecap.vue'

export default {
  name: 'TbYear23',
  components: { YearRecap },
  data: () => ({
    photos: [
      { src: require('@/assets/2023/raft-trees.jpg'), alt: 'Trees mounted on the raft' },
      { src: require('@/assets/2023/raft-back.jpg'), alt: 'Fireworks loaded and ready' },
      { src: require('@/assets/2023/colors.jpg'), alt: 'A sky full of color' },
      { src: require('@/assets/2023/bright.jpg'), alt: 'Lighting up the pond' },
      { src: require('@/assets/2023/finale.jpg'), alt: 'The grand finale' },
      { src: require('@/assets/2023/flames.jpg'), alt: 'Giant flames' }
    ],
    videos: [
      { src: 'https://www.youtube-nocookie.com/embed/VPryN5EzcHQ', title: 'TannenBomb 2023 fireworks and tree burning' }
    ]
  })
}
</script>

<style scoped>
.thanks { display: flex; align-items: center; gap: 20px; box-shadow: none; }
.thanks img { width: 96px; height: 96px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.thanks p { margin: 0; }
@media (max-width: 480px) { .thanks { flex-direction: column; text-align: center; } }
</style>
