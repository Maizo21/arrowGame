/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
 */

const emojis = {
  "-": " ",
  O: "🌌",
  X: "🌑",
  I: "🐄",
  PLAYER: "🛸",
  BOMB_COLLISION: "🔥",
  GAME_OVER: "👎",
  WIN: "🏆",
  HEART: "❤",
};

const maps = [];
maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);
maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);
maps.push(`
    O--XXXXXXX
    XX-XX----X
    XX----XX-X
    XXXXXXXX-X
    XXX----X-X
    XXX-XX-X-X
    XXX-XX---X
    XXX-XXXXXX
    XXX----IXX
    XXXXXXXXXX
  `);

maps.push(`
    XXXXXXXXOX
    XX-XX----X
    XX----XX-X
    XXX-XXXXXX
    XXX------X
    XXXXXXXX-X
    XXXXXXXX-X
    XXX------X
    XX--XXXXXX
    I--XXXXXXX
  `);
