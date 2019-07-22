console.log('[Tracking] script loaded');

class TrackingEvent {
  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
  }

  dispatch() {
    const { type, payload } = this;
    const dispatchedAt = new Date();
    const detail = { type, payload, dispatchedAt };
    const event = new CustomEvent('trackingEvent', { detail });
    document.dispatchEvent(event);
  }
}

/**
 * This is where the link to dataLayer and tagCommande could be established.
 * It will catch events, no matter who has dispatched them.
 */
document.addEventListener('trackingEvent', function (event) {
  console.log(
    '[Tracking] Catched event of type ',
    event.detail.type,
    ' with payload ',
    event.detail.payload
  );
});