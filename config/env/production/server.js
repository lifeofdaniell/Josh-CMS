module.exports = ({ env }) => ({
  url: env("PUBLIC_URL", "https://josh-cms-production.up.railway.app"),
    app: {
    keys: env.array('APP_KEYS'),
    
  },
});