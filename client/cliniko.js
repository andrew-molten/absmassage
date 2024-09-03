// Google conversion  event listener
window.addEventListener('message', receiveMessage)

function receiveMessage(e) {
  /**
   * Handles message events from the cliniko iframe to trigger a
   * 'clinikoBookingCompleted' event on the dataLayer when a booking is confirmed
   * @param {MessageEvent} e - The message event
   */

  if (typeof e.data !== 'string') return

  if (e.data.search('cliniko-bookings-page:confirmed') > -1) {
    var dataLayer = window.dataLayer || (window.dataLayer = [])

    dataLayer.push({
      event: 'clinikoBookingCompleted',
    })
    console.log(dataLayer)
  }
}
