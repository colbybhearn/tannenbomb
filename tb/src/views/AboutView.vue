<template>
  <div class="faq section">
    <div class="container narrow">
      <span class="eyebrow">FAQ</span>
      <h1 class="faq-title">Questions, <span class="fire-text">answered</span></h1>

      <div class="items">
        <details v-for="(q, i) in faqs" :key="q.q" class="card item" :open="i === 0">
          <summary>{{ q.q }}</summary>
          <div class="answer">
            <p v-if="q.a">{{ q.a }}</p>
            <ul v-if="q.list" class="recipe">
              <li v-for="li in q.list" :key="li">{{ li }}</li>
            </ul>
          </div>
        </details>
      </div>

      <div class="card more">
        <p>Still have a question?</p>
        <router-link to="/#rsvp" class="btn btn-fire">RSVP now</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import event from '../event'

export default {
  name: 'AboutView',
  data: () => ({
    contact: event.contact,
    faqs: [
      { q: 'What is TannenBomb?', a: 'Christmas tree burning is a Hearn family tradition. Every New Year\'s Eve we put a very dry tree on a raft in a pond, add fireworks, and send it off in style, while raising money for AXIA Pregnancy Center.' },
      { q: 'Do you dislike Christmas?', a: 'No, actually we love Christmas and Jesus, a lot.' },
      { q: "What's the TannenBomb recipe?", list: ['🎄 1 very dry Christmas tree', '🎆 $100 of fireworks', '🔥 8 ounces lighter fluid', '📡 Remote detonators (optional)'] },
      { q: 'Where does the money go?', a: '100% of donations go to AXIA Pregnancy Center, which provides free and confidential care and treats every patient with value, worth, and dignity.' },
      { q: 'Is it kid friendly?', a: 'Absolutely! Kids love it. Fireworks are loud, so bring ear protection for little ones and sensitive ears.' },
      { q: 'Why should I RSVP?', a: 'Your headcount helps us plan food, seating, parking, restrooms, and giveaways for the kids.' },
      { q: 'Where should I park?', a: 'Follow the signs and please do not park in front yards. Carpooling helps a lot!' }
    ]
  })
}
</script>

<style scoped>
.narrow { max-width: 760px; }
.faq-title { font-size: clamp(2.4rem, 9vw, 4rem); font-weight: 800; }
.items { display: grid; gap: 12px; margin: 28px 0; }
.item { padding: 0; box-shadow: none; }
.item summary {
  list-style: none;
  cursor: pointer;
  padding: 20px 56px 20px 22px;
  font-family: var(--display);
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;
}
.item summary::-webkit-details-marker { display: none; }
.item summary::after {
  content: '+';
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--body);
  font-size: 1.6rem;
  color: var(--gold);
  transition: transform 0.2s;
}
.item[open] summary::after { transform: translateY(-50%) rotate(45deg); }
.answer { padding: 0 22px 20px; color: var(--muted); }
.answer p { margin: 0; }
.recipe { list-style: none; padding: 0; margin: 0; display: grid; gap: 6px; }
.more { text-align: center; box-shadow: none; }
.more p { margin-top: 0; }
</style>
