export default defineNuxtPlugin((nuxtApp) => {
    const title = useTitle()
    return {
        provide: {
            testPluginB: 'testPluginB from pluginB ',
            title: title.value,
        },
    }
})