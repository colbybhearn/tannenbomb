// ------------------------------------------------------------------
//  TannenBomb event details — update this file each year.
// ------------------------------------------------------------------
export default {
  year: 2026,
  tagline: "Ringing in '27 with a bang!",

  // ISO time with Central offset. Drives the countdown.
  startsAt: '2026-12-31T17:00:00-06:00',
  dateLabel: "New Year's Eve · Thursday, Dec 31",
  timeLabel: '5:00 PM',

  // Live RSVP count: your Google Apps Script web app URL (ends in /exec).
  // Do NOT include ?token=. Leave empty to hide the count.
  rsvpStatsUrl: 'https://script.google.com/macros/s/AKfycbzhax1BXVysJjESMqTViQvtsgZ0OJd1HSeGs3sFjV2_I0QmZDMK8szUX5dgKQEMESm3/exec',

  hosts: 'Colby & Chelsey Hearn and the Lost Creek neighborhood',

  schedule: [
    { time: '5:00', title: 'Gates open', detail: 'Food truck tacos, the hot cocoa bar, and Christmas music.' },
    { time: '6:55', title: 'Pre-tree mortar shells', detail: 'Find your spot and cover delicate ears.' },
    { time: '7:00', title: 'Fireworks & tree burning', detail: 'The main event: a tree on fire, on a raft, in a pond, plus a fireworks show!' },
  ],

  food: {
    name: 'Sauce Belly',
    url: 'https://www.facebook.com/p/Sauce-Belly-100086469321950/',
  },

  location: {
    name: 'Lost Creek',
    city: 'Whitehouse, TX 75791',
    mapsUrl: 'https://goo.gl/maps/Ykaqbq7YL2WawzFV9',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.598971019766!2d-95.23423388485423!3d32.2150351197336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8648329ca6b89893%3A0x7411cacb7ca4f0b0!2sLost%20Creek%2C%20Whitehouse%2C%20TX%2075791!5e0!3m2!1sen!2sus!4v1671746369929!5m2!1sen!2sus',
  },

  contact: {
    name: 'Chelsey',
  },

  axia: {
    site: 'https://axiacenter.org/',
    giving: 'https://livingalternatives.org/donate-2-2/',
    cashApp: 'https://cash.app/$livingalternatives/20',
    venmo: 'https://venmo.com/u/Living-Alternatives',
    paypal: 'https://www.paypal.com/paypalme/livingalternatives/20',
  },

  bring: [
    { icon: '🪑', title: 'Camp chairs', detail: 'Seating is limited. Bring your own if you can.' },
    { icon: '🧣', title: 'Layers', detail: 'Check the forecast. It gets chilly by the pond after dark.' },
    { icon: '🎧', title: 'Ear protection', detail: 'Especially for little ones and sensitive ears.' },
    { icon: '💵', title: 'Cash for AXIA', detail: 'Or give online with the links above.' },
    { icon: '🚗', title: 'Park courteously', detail: 'Please do not park in front yards.' },
  ],
}
