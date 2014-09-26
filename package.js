Package.describe({
  summary: "[DON'T USE] A lightweight 3D physics engine written in JavaScript.",
  version: "0.0.0_2",
  git: "https://github.com/foxdog-studios/meteor-cannon.js"
});

Package.onUse(function (api) {
  api.use('fds:threejs@67.0.0_1', 'client');
  api.addFiles('build/cannon.js', 'client');
  api.export('CANNON', 'client');
});

