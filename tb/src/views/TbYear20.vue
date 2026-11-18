<template>
  <YearRecap :year="2020" :photos="photos" :videos="videos">
    <template #intro>
      The first year we burned the tree on a raft in a pond! It was a big hit. Watch the video below.
    </template>
  </YearRecap>
</template>

<script>
import YearRecap from '../components/YearRecap.vue'

export default {
  name: 'TbYear20',
  components: { YearRecap },
  data: () => ({
    photos: [
      { src: require('@/assets/2020/flame.jpeg'), alt: 'Peak flame on New Year\'s Eve' }
    ],
    videos: [
      { src: 'https://www.youtube-nocookie.com/embed/mtiy5TLfI2s?start=13', title: 'TannenBomb 2020', tall: true }
    ]
  })
}
</script>
