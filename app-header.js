var appHeader = new Vue({
  el: '#app-header',
  data: {
    links: [
      'Nouveautés',
      'Homme',
      'Femme',
    ]
  },
  methods: {
    trackLinkClick(link) {
      console.log('[trackLinkClick]', link);
      const et = new TrackingEvent('trackLinkClick', { link });
      et.dispatch();
    }
  }
})