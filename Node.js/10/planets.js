// Per il nostro "database" fittizio.

/**
 * @typedef {Object} Planet
 * @property {number} id
 * @property {string} name
 */

/** @type {Planet[]} */
let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

module.exports = { planets };

// Apro il browser su http://localhost:3000/planets
