export default defineNuxtRouteMiddleware((to, from) => {
    console.log('auth', to, from)
    console.log(to.query)
    if(from.name == 'changeLayout' && to.query.name == 'test') {
        return abortNavigation({
            statusCode: 403,
            statusMessage: 'Forbidden',
        })
    }
})