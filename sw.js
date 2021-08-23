const version= "0.1"

self.addEventListener("install", () => {
    console.log("Install Service worker version" + version)
    return self.skipWaiting()
})

self.addEventListener("activation", () => {
    console.log("Activated Service worker version" + version)
})

self.addEventListener('fetch', () => {
    // ecoute les requests
})