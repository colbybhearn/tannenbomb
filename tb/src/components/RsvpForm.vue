<template>
  <div class="rsvp card">
    <transition name="fade" mode="out-in">
      <div v-if="status === 'sent'" key="sent" class="rsvp-done">
        <div class="done-icon" aria-hidden="true">🎆</div>
        <h3>You're on the list, {{ firstName }}!</h3>
        <p>
          We've saved spots for <strong>{{ adults }} {{ adults === 1 ? 'adult' : 'adults' }}</strong>
          <template v-if="kids"> and <strong>{{ kids }} {{ kids === 1 ? 'kid' : 'kids' }}</strong></template>.
          See you on New Year's Eve!
        </p>
        <p class="change-note">
          Need to change your RSVP? Just
          <button type="button" class="link-btn" @click="status = 'idle'">submit again</button>
          with the same email.
        </p>
      </div>

      <form
        v-else
        key="form"
        name="rsvp"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        novalidate
        @submit.prevent="submit"
      >
        <input type="hidden" name="form-name" value="rsvp">
        <p class="hp">
          <label>Leave this empty <input v-model="botField" name="bot-field" tabindex="-1" autocomplete="off"></label>
        </p>

        <div class="field">
          <label for="rsvp-name">Your name <span class="req">*</span></label>
          <input
            id="rsvp-name"
            v-model.trim="name"
            name="name"
            type="text"
            autocomplete="name"
            placeholder="The Smith Family"
            :aria-invalid="errors.name ? 'true' : 'false'"
            required
          >
          <small v-if="errors.name" class="err">{{ errors.name }}</small>
        </div>

        <div class="grid-2">
          <div class="field">
            <label for="rsvp-email">Email</label>
            <input id="rsvp-email" v-model.trim="email" name="email" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com">
          </div>
          <div class="field">
            <label for="rsvp-phone">Mobile</label>
            <input id="rsvp-phone" v-model.trim="phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="903-555-0123">
          </div>
        </div>
        <small v-if="errors.contact" class="err block">{{ errors.contact }}</small>

        <fieldset class="counts">
          <legend>Who's coming?</legend>
          <div v-for="c in counters" :key="c.key" class="counter">
            <div class="counter-label">
              <span class="counter-icon" aria-hidden="true">{{ c.icon }}</span>
              <span>
                <strong :id="'lbl-' + c.key">{{ c.label }}</strong>
                <small>{{ c.hint }}</small>
              </span>
            </div>
            <div class="stepper" role="group" :aria-labelledby="'lbl-' + c.key">
              <button type="button" :aria-label="'Fewer ' + c.label" :disabled="$data[c.key] <= c.min" @click="step(c, -1)">−</button>
              <input
                v-model.number="$data[c.key]"
                :name="c.key"
                type="number"
                inputmode="numeric"
                :min="c.min"
                :max="c.max"
                :aria-labelledby="'lbl-' + c.key"
                @blur="clamp(c)"
              >
              <button type="button" :aria-label="'More ' + c.label" :disabled="$data[c.key] >= c.max" @click="step(c, 1)">+</button>
            </div>
          </div>
          <small v-if="errors.adults" class="err block">{{ errors.adults }}</small>
        </fieldset>

        <div v-if="kids > 0" class="field">
          <label for="rsvp-ages">Kids' ages <span class="opt">helps us plan giveaways</span></label>
          <input id="rsvp-ages" v-model.trim="kidAges" name="kid_ages" type="text" placeholder="e.g. 3, 7, 12">
        </div>

        <div class="field">
          <span class="label">Will you bring your own chairs?</span>
          <div class="chips">
            <label v-for="o in chairOptions" :key="o" class="chip">
              <input v-model="chairs" type="radio" name="chairs" :value="o">
              <span>{{ o }}</span>
            </label>
          </div>
        </div>

        <div class="field">
          <label for="rsvp-notes">Anything else? <span class="opt">optional</span></label>
          <textarea id="rsvp-notes" v-model.trim="notes" name="notes" rows="3" placeholder="Accessibility needs, questions, how you can help…" />
        </div>

        <input type="hidden" name="total_guests" :value="total">

        <div class="submit-row">
          <div class="total" aria-live="polite">
            <span class="total-num">{{ total }}</span>
            <span>{{ total === 1 ? 'guest' : 'guests' }} total</span>
          </div>
          <button type="submit" class="btn btn-fire submit" :disabled="status === 'sending'">
            {{ status === 'sending' ? 'Sending…' : "Count us in! 🎉" }}
          </button>
        </div>

        <p v-if="status === 'error'" class="err block" role="alert">
          Something went wrong sending your RSVP. Please try again, or
          <router-link to="/faq">send us a message</router-link>.
        </p>
      </form>
    </transition>
  </div>
</template>

<script>

const initial = () => ({
  name: '',
  email: '',
  phone: '',
  adults: 2,
  kids: 0,
  kidAges: '',
  chairs: 'Yes',
  notes: '',
  botField: '',
  status: 'idle',
  errors: {}
})

export default {
  name: 'RsvpForm',
  data: initial,
  computed: {
    total () { return (this.adults || 0) + (this.kids || 0) },
    firstName () { return this.name.split(' ')[0] || 'friend' },
    counters: () => [
      { key: 'adults', label: 'Adults', hint: 'Ages 13+', icon: '🧑', min: 0, max: 30 },
      { key: 'kids', label: 'Kids', hint: 'Ages 12 & under', icon: '🧒', min: 0, max: 30 }
    ],
    chairOptions: () => ['Yes', 'Some of us']
  },
  methods: {
    step (c, d) {
      this[c.key] = Math.min(c.max, Math.max(c.min, (this[c.key] || 0) + d))
    },
    clamp (c) {
      const v = parseInt(this[c.key], 10)
      this[c.key] = isNaN(v) ? c.min : Math.min(c.max, Math.max(c.min, v))
    },
    validate () {
      const e = {}
      if (!this.name) e.name = 'Please tell us who you are.'
      if (!this.email && !this.phone) e.contact = 'Add an email or mobile number so we can send updates.'
      if (this.adults < 1) e.adults = 'At least one adult, please.'
      this.errors = e
      return !Object.keys(e).length
    },
    async submit () {
      if (!this.validate()) return
      this.status = 'sending'
      const body = new URLSearchParams({
        'form-name': 'rsvp',
        'bot-field': this.botField,
        name: this.name,
        email: this.email,
        phone: this.phone,
        adults: this.adults,
        kids: this.kids,
        kid_ages: this.kids ? this.kidAges : '',
        total_guests: this.total,
        chairs: this.chairs,
        notes: this.notes
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
    }
  }
}
</script>

<style scoped>
.rsvp { position: relative; }

form { display: grid; gap: 20px; }

.hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }

.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 560px) { .grid-2 { grid-template-columns: 1fr; } }

.field { display: grid; gap: 8px; }
.field label, .field .label { font-weight: 600; font-size: 0.95rem; }
.req { color: var(--ember); }
.opt { font-weight: 400; color: var(--muted); font-size: 0.85rem; margin-left: 4px; }

input[type='text'], input[type='email'], input[type='tel'], textarea {
  width: 100%;
  font: 400 16px/1.4 var(--body);
  color: var(--text);
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  transition: border-color 0.2s, background 0.2s;
}
input::placeholder, textarea::placeholder { color: rgba(174, 184, 204, 0.55); }
input:focus, textarea:focus { outline: none; border-color: var(--flame); background: rgba(0, 0, 0, 0.35); }
input[aria-invalid='true'] { border-color: var(--red); }
textarea { resize: vertical; min-height: 96px; }

.err { color: #ff8a8a; font-size: 0.88rem; }
.err.block { display: block; margin-top: -8px; }
.err a { color: #ffb3b3; }

.counts {
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 8px 16px 12px;
  margin: 0;
  background: rgba(0, 0, 0, 0.15);
}
.counts legend {
  font-family: var(--display);
  font-size: 1.15rem;
  font-weight: 600;
  padding: 0 8px;
  margin-left: -8px;
}
.counter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0;
}
.counter + .counter { border-top: 1px dashed var(--line); }
.counter-label { display: flex; align-items: center; gap: 12px; }
.counter-label small { display: block; color: var(--muted); font-size: 0.82rem; line-height: 1.2; }
.counter-icon { font-size: 1.6rem; width: 36px; text-align: center; }

.stepper {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  flex-shrink: 0;
}
.stepper button {
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--text);
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.stepper button:hover:not(:disabled) { background: var(--card-hi); color: var(--gold); }
.stepper button:disabled { opacity: 0.3; cursor: default; }
.stepper input {
  width: 44px;
  text-align: center;
  font: 700 1.15rem var(--body);
  color: var(--text);
  background: transparent;
  border: 0;
  -moz-appearance: textfield;
  appearance: textfield;
}
.stepper input::-webkit-outer-spin-button,
.stepper input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.stepper input:focus { outline: none; color: var(--gold); }

.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { position: relative; cursor: pointer; }
.chip input { position: absolute; opacity: 0; inset: 0; margin: 0; cursor: pointer; }
.chip span {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: var(--muted);
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.15s;
}
.chip:hover span { color: var(--text); border-color: rgba(255, 255, 255, 0.25); }
.chip input:checked + span {
  color: #1b0d03;
  background: linear-gradient(135deg, var(--gold), var(--flame));
  border-color: transparent;
}
.chip input:focus-visible + span { outline: 3px solid var(--gold); outline-offset: 2px; }

.submit-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 4px;
}
.total { display: flex; align-items: baseline; gap: 8px; color: var(--muted); }
.total-num { font-family: var(--display); font-size: 2.2rem; font-weight: 800; color: var(--gold); line-height: 1; }
.submit { min-height: 54px; padding: 0 28px; font-size: 1.05rem; }
.submit:disabled { opacity: 0.7; cursor: wait; }
@media (max-width: 480px) {
  .submit { width: 100%; }
}

.rsvp-done { text-align: center; padding: 24px 0; }
.rsvp-done p { color: var(--muted); max-width: 40ch; margin: 0 auto 24px; }
.rsvp-done .change-note { font-size: 0.95rem; margin-bottom: 0; }
.link-btn {
  padding: 0;
  border: 0;
  background: none;
  color: var(--flame);
  font: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}
.link-btn:hover { color: var(--gold); }
.done-icon { font-size: 4rem; animation: pop 0.6s cubic-bezier(0.2, 1.6, 0.4, 1) both; }
@keyframes pop { from { transform: scale(0.3); opacity: 0; } }

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s, transform 0.25s; }
.fade-enter, .fade-leave-to { opacity: 0; transform: translateY(8px); }
</style>
