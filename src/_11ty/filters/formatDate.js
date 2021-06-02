const site = require('../../_data/site');
const { defaultLocale } = site;

module.exports = (date, locale = defaultLocale) => {
  // May need to consider `timezone` option (defaults to UTC)
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric'
    // hour12: false,
    // timeZone: 'UTC',
    // timeZoneName: 'short'
  }).format(new Date(date));
};
