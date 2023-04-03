export default {
  install: (app, options) => {
    // Plugin code goes here
    app.config.globalProperties.$reverse = (item) => {
      return item.split("").reverse().join("")
    }
  }
}