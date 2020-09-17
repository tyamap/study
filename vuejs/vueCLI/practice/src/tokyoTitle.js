export const tokyoTitle = {
  data(){
    return{
      title: 'Welcome to Tokyo',
      subTitle: 'Tokyo is beautiful city'
    }
  },
  filters: {
    lowerCase(value){
      return value.toLowerCase();
    }
  },
}