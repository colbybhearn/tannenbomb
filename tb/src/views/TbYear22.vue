<template>
  <YearRecap :year="2022" :photos="photos" :videos="videos">
    <template #intro>~150 friends and family joined us for a great show!</template>
  </YearRecap>
</template>

<script>
import YearRecap from '../components/YearRecap.vue'

export default {
  name: 'TbYear22',
  components: { YearRecap },
  data: () => ({
    photos: [
      { src: require('@/assets/2022/little_tree.jpg'), alt: 'The little tree, decorated' },
      { src: require('@/assets/2022/big_tree.jpg'), alt: 'The big tree, decorated' }
    ],
    videos: [
      { src: 'https://www.youtube-nocookie.com/embed/E05VjZJaavc', title: 'TannenBomb 2022, part 1' },
      { src: 'https://www.youtube-nocookie.com/embed/3Tb6yQL22Mk', title: 'TannenBomb 2022, part 2' }
    ]
  })
}
</script>
