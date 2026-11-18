# TannenBomb

Site for [tannenbomb.info](https://tannenbomb.info): an annual New Year's Eve fireworks show and Christmas tree burning benefiting AXIA Pregnancy Center.

## Yearly updates

Edit `tb/src/event.js` (year, date/time, schedule, food vendor, contact, giving links). Add a recap page by copying `tb/src/views/TbYear23.vue`, adding a route in `tb/src/router/index.js`, and adding the year to `years` in `tb/src/components/YearRecap.vue`.

## Develop

```bash
cd tb && npm install && npm run serve
```

## Deploy (Netlify)

`netlify.toml` sets base `tb`, command `npm run build`, publish `dist`, and an SPA redirect.

## RSVP form (Netlify Forms)

The RSVP form posts to Netlify Forms as form name `rsvp`. A hidden copy in `tb/public/index.html` lets Netlify detect it at deploy time; keep its fields in sync with `tb/src/components/RsvpForm.vue`.

Fields: `name`, `email`, `phone`, `adults`, `kids`, `kid_ages`, `total_guests`, `chairs`, `heater`, `notes`.

Enable form detection in Netlify (Site configuration → Forms), then view submissions or export CSV to total adults and kids.
