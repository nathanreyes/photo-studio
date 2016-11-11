module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : "photo-studio",
      script    : "server.js",
      env_production : {
        NODE_ENV: "production"
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "nreyes",
      host : "45.55.190.221",
      ref  : "origin/master",
      repo : "https://github.com/nathanreyes/photo-studio.git",
      path : "~/photo-studio",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env production"
    },
  }
}
