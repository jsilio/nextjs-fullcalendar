// Documentation: https://nextjs.org/docs/api-reference/next.config.js/introduction

// For transpiling all ESM @fullcalendar/* packages
// Also, for piping fullcalendar through babel — See babel.config.js
const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/react",
  "@fullcalendar/daygrid",
  "@fullcalendar/timegrid",
  "@fullcalendar/interaction",
]);

module.exports = withTM({
  //  Strongly suggested to enable Strict Mode to better prepare the app for the future of React.
  reactStrictMode: true,
});
