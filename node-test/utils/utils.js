module.exports.add = (a,b) => a+b;

module.exports.square = (x) => x * x ;

module.exports.setName = (user, name) => {
    var name = name.split(' ');
    user.firstName = name[0];
    user.lastName = name[1];
    
    return user;
}

// a ile b yi toplayım 1 saniye gecikmeli olarak geri döndüren bir fonksiyon
// callback burada bize sadece verinin geri dönüşünü sağlıyor. Callback 'in mantığı
// zaten bu şekilde. fonksiyonun tanımlandığı yerde callback fonksiyonunun argümanı,  
// fonksiyonun çağrıldığı yere otomatik olarak geri döndürülüyor...
module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(()=>{
        callback(a+b)
    }, 1000)
}

module.exports.asyncSquare = (x, callback) => {

    setTimeout(()=>{
        callback(x * x);
    },1000)
}