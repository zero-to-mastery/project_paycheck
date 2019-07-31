// PM2 configuration file.

// To start cluster mode run "pm2 start ecosystem.config.js" command, then run the server.
// To stop cluster mode run "pm2 delete all"
// Other commands you can find in cheatsheet here: http://pm2.keymetrics.io/docs/usage/quick-start/

module.exports = {
  apps: [
    {
      script: "app.js",
      instances: -1, //This spreads the app across all CPU's cores minus 1. Each CPU core corresponds to one worker instance (server).
      exec_mode: "cluster" //This property sets load balance between instances.
    }
  ]
};
