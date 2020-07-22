


self.addEventListener("push",  (e)=>{
    console.log(e)
    const data = e.data.json()

    console.log(self.registration)

    e.waitUntil(self.registration.showNotification(data,{
            "body":"This is coming from a notifier",
            "icon":"http://bilgifile.isimtescil.net/bb0956-url-nedir-hangi-amacla-kullanlr.jpg"
        })
    )

    
    console.log("showNotification çalıştı...")
})