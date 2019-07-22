var appTrackingLogs = new Vue({
  el: '#app-tracking',
  data: {
    trackingEvents: []
  },
  created: function () {
    document.addEventListener('trackingEvent', (event) => {
      this.trackingEvents.push(event.detail);
    });
  }
})