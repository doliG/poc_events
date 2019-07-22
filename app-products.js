var appProducts = new Vue({
  el: '#app-products',
  data: {
    products: [
      'LV - Sac de voyage en toile',
      'Chanel - Bague baroque en or jaune',
      'Chanel - Maillot une pièce',
      'Hermès - Sac à main Birkin 30 en cuir'
    ]
  },
  methods: {
    trackProductClick(product) {
      console.log('[trackProductClick]', product);
      const te = new TrackingEvent('trackProductClick', { product });
      te.dispatch();
    }
  }
})