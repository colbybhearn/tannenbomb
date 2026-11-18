<template>
  <div class="snow" aria-hidden="true">
    <i v-for="f in flakes" :key="f.id" :style="f.style" />
  </div>
</template>

<script>
export default {
  name: 'SnowFall',
  data () {
    const count = window.innerWidth < 600 ? 32 : 60
    const flakes = []
    for (let i = 0; i < count; i++) {
      const size = 2 + Math.random() * 4
      flakes.push({
        id: i,
        style: {
          left: Math.random() * 100 + '%',
          width: size + 'px',
          height: size + 'px',
          opacity: (0.25 + Math.random() * 0.6).toFixed(2),
          animationDuration: (9 + Math.random() * 14).toFixed(1) + 's, ' + (3 + Math.random() * 4).toFixed(1) + 's',
          animationDelay: (-Math.random() * 20).toFixed(1) + 's, ' + (-Math.random() * 4).toFixed(1) + 's'
        }
      })
    }
    return { flakes }
  }
}
</script>

<style scoped>
.snow {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}
.snow i {
  position: absolute;
  top: -10px;
  border-radius: 50%;
  background: #fff;
  filter: blur(0.5px);
  animation-name: fall, sway;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-direction: normal, alternate;
}
@keyframes fall {
  to { transform: translateY(110vh); }
}
@keyframes sway {
  from { margin-left: -12px; }
  to { margin-left: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  .snow { display: none; }
}
</style>
