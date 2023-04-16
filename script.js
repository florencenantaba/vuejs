let appProperties = {
    data() {
      return {
        isOn: false,
        bulbImage:'./images/image1.jpg',
        
      }
    },
    methods: {
      changeImage(){
        this.bulbImage="./images/image2.jpg"
      },

      changeImage2(){
      this.bulbImage="./images/image1.jpg"
    }
    
  }
}
  Vue.createApp(appProperties).mount("#demo");