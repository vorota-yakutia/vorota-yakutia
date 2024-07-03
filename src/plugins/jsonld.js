export default ({ app }, inject) => {
  inject('jsonld', (data) => {
    return {
      script: [{
        hid: 'jsonld',
        type: 'application/ld+json',
        json: data
      }]
    }
  })
}
