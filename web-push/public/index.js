const publicVapidKey = "BOjz-Yst7KIWeQxJk9u2rBmGgFHIfnIRZ488NLbMNXIeBNQVeEwiCSFrJWWZMgvf8YUHBCE5GWo4ekYEYh3kSVg"

if("serviceWorker" in navigator){
    send().catch(err=>{console.log(err)})
}

async function send(){
    const register = await navigator.serviceWorker.register("/worker.js",{
        scope:"/"
    })
    const convertedVapidKey = urlBase64ToUint8Array(publicVapidKey);

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey: convertedVapidKey
    })

    await fetch("/subscribe",{
        method:"post",
        body:JSON.stringify(subscription),
        headers:{
            "content-type":"application/json"
        }
    }).catch(e=>{console.log(e)})
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
