export default {
    fonts: {
      body:
        'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      heading: 'Inter, Helvetica, Arial, Sans-Serif',
      monospace: "Menlo, monospace",
    },
    colors: {
      primary: "rgba(34, 74, 125,1)",
      background: "rgba(55,114,190,0.2)",
      text: "#fff"
    },
    breakpoints: [32, 72, 78, 96, 128].map(w => `${w}em`),
  };