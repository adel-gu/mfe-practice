import('./bootstrap.js').then(({ mount }) => {
  const devRoot = document.getElementById('root');
  if (devRoot) {
    mount({ el: devRoot, routingStrategy: 'browser' });
  }
});
