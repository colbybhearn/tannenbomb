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
        <transition name="fade" mode="out-in">
          <div v-if="status === 'sent'" key="sent" class="q-done">
            <div aria-hidden="true" class="q-done-icon">🎆</div>
            <h3>Got it, {{ firstName }}!</h3>
            <p>Thanks for asking. We'll get back to you soon.</p>
            <button type="button" class="btn" @click="reset">Ask another question</button>
          </div>

          <form
            v-else
            key="form"
            name="question"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            novalidate
            @submit.prevent="submit"
          >
            <h2 class="q-title">Still have a question?</h2>
            <input type="hidden" name="form-name" value="question">
            <p class="hp">
              <label>Leave this empty <input v-model="botField" name="bot-field" tabindex="-1" autocomplete="off"></label>
            </p>

            <div class="field">
              <label for="q-name">Your name <span class="req">*</span></label>
              <input id="q-name" v-model.trim="name" name="name" type="text" autocomplete="name" :aria-invalid="errors.name ? 'true' : 'false'" required>
              <small v-if="errors.name" class="err">{{ errors.name }}</small>
            </div>

            <div class="field">
              <label for="q-email">Email <span class="req">*</span></label>
              <input id="q-email" v-model.trim="email" name="email" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com" :aria-invalid="errors.email ? 'true' : 'false'" required>
              <small v-if="errors.email" class="err">{{ errors.email }}</small>
            </div>

            <div class="field">
              <label for="q-message">Your question <span class="req">*</span></label>
              <textarea id="q-message" v-model.trim="message" name="message" rows="4" :aria-invalid="errors.message ? 'true' : 'false'" required />
              <small v-if="errors.message" class="err">{{ errors.message }}</small>
            </div>

            <button type="submit" class="btn btn-fire" :disabled="status === 'sending'">
              {{ status === 'sending' ? 'Sending…' : 'Fire away!' }}
            </button>

            <p v-if="status === 'error'" class="err" role="alert">
              Something went wrong sending your question. Please try again.
            </p>
          </form>
        </transition>
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
    name: '',
    email: '',
    message: '',
    botField: '',
    status: 'idle',
    errors: {},
    faqs: [
      { q: 'What is TannenBomb?', a: 'Christmas tree burning is a Hearn family tradition. Every New Year\'s Eve we put a very dry tree on a raft in a pond, add fireworks, and send it off in style, while raising money for AXIA Pregnancy Center.' },
      { q: 'Do you dislike Christmas?', a: 'No, actually we love Christmas and Jesus, a lot.' },
      { q: "What's the TannenBomb recipe?", list: ['🎄 1 very dry Christmas tree', '🎆 $100 of fireworks', '🔥 8 ounces lighter fluid', '📡 Remote detonators (optional)'] },
      { q: 'Where does the money go?', a: '100% of donations go to AXIA Pregnancy Center, which provides free and confidential care and treats every patient with value, worth, and dignity.' },
      { q: 'Is it kid friendly?', a: 'Absolutely! Kids love it. Fireworks are loud, so bring ear protection for little ones and sensitive ears.' },
      { q: 'Why should I RSVP?', a: 'Your headcount helps us plan food, seating, parking, restrooms, and giveaways for the kids.' },
      { q: 'Where should I park?', a: 'Follow the signs and please do not park in front yards. Carpooling helps a lot!' }
    ]
  }),
  computed: {
    firstName () { return this.name.split(' ')[0] || 'friend' }
  },
  methods: {
    validate () {
      const e = {}
      if (!this.name) e.name = 'Please tell us who you are.'
      if (!this.email) e.email = 'Add an email so we can reply.'
      else if (!/^\S+@\S+\.\S+$/.test(this.email)) e.email = 'That email doesn\'t look right.'
      if (!this.message) e.message = 'What would you like to know?'
      this.errors = e
      return !Object.keys(e).length
    },
    async submit () {
      if (!this.validate()) return
      this.status = 'sending'
      const body = new URLSearchParams({
        'form-name': 'question',
        'bot-field': this.botField,
        name: this.name,
        email: this.email,
        message: this.message
      })
      try {
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString()
        })
        if (!res.ok) throw new Error(res.status)
        this.status = 'sent'
      } catch (err) {
        this.status = 'error'
      }
    },
    reset () {
      this.name = ''
      this.email = ''
      this.message = ''
      this.botField = ''
      this.errors = {}
      this.status = 'idle'
    }
  }
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
.more { box-shadow: none; }
.more form { display: grid; gap: 18px; }
.q-title { margin: 0; font-size: 1.5rem; text-align: center; }
.hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }
.field { display: grid; gap: 8px; }
.field label { font-weight: 600; font-size: 0.95rem; }
.req { color: var(--ember); }
.err { color: var(--red); }
.more input[type='text'], .more input[type='email'], .more textarea {
  width: 100%;
  font: 400 16px/1.4 var(--body);
  color: var(--text);
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  transition: border-color 0.2s, background 0.2s;
}
.more input::placeholder, .more textarea::placeholder { color: rgba(174, 184, 204, 0.55); }
.more input:focus, .more textarea:focus { outline: none; border-color: var(--flame); background: rgba(0, 0, 0, 0.35); }
.more [aria-invalid='true'] { border-color: var(--red); }
.q-done { text-align: center; }
.q-done-icon { font-size: 2.5rem; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
