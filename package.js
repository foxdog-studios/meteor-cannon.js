Package.describe({
  summary: 'A lightweight 3D physics engine written in JavaScript.'
});

Package.on_use(function (api) {
  api.add_files(['build/cannon.js'],['client']);
  api.export(['CANNON'], ['client']);
});

