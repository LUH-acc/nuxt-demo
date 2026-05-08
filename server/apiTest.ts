export default defineEventHandler((event) => {
    console.log('apiTest',event);
    
    return {
      hello: 'world from server'
    }
  })
  