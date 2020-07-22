const utils = require('./utils');
var expect = require('expect');

// behaivoural development process "it should ..."

// nodemon --exec "npm test" =====> devamlı test modda çalışması için gerekli komut

// npm run test-watch (eğer nodemon --exec "npm test" ifadesi script olarak package.json a girilirse bu komut çalıştırılacak... )

// npm install .... --save-dev komutu ile yüklenen paket devDependency kısmına ekleniyor.
// böylece sadece local de çalışırken paketi yükliyoruz. Deployment ta yer almıyor.

it("should add two numbers", () => {
    const result = utils.add(5,9);

    if(result !== 14){
        throw new Error(`expected 14 but found ${result}`);
    }
} )

it("should square a number", () => {
    const result = utils.square(9);
    
    expect(result).toBe(81);

    // toBeA fonksiyon değildir diyor...??????????? paket yüklenirken @1.20.2 maksimum
    // versiyonu ile yüklenmeli. daha yüksek versiyonlar sorun çıkartıyor...
    expect(result).toBeA('number');

    // if(result !== 81){
    //     throw new Error(`expected 81 but found ${result}`);
    // }
});

it("should check objects and arrays", () => {
    //expect([1,2,4,5]).toInclude(3);
    expect([1,2,4,5]).toExclude(3);
    
    // nesneler için bu komut işe yaramaz...
    // yerine toEqual kullanılmalıdır...
    //expect({name:'oguzhan'}).toBe({name:'oguzhan'});

    expect({name:'oguzhan'}).toEqual({name:'oguzhan'});
})

it("should verify the names", ()=>{
    var user = {location : "philadelphia", age : 25};

    var result = utils.setName(user, "Andrew Mead");

    expect(result).toInclude({firstName:'Andrew', lastName:'Mead' });
    
})


// Bu test içinde async fonksiyona tanınan geri dönüş süresi içinde bir değer dönmediğinden 
// test bunu otomatik olarak olumlu bir dönüş olarak algılıyor. Dolayısıyla burada testin 
// bekleme yapması için testin icra edildiği fonksiyona done fonksiyonu argüman olarak girilmelidir.
it("shoul add two numbers asyncronously", (done) => {
    utils.asyncAdd(4,3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    })
})

it("should square a number asyncronously", (done) => {
    utils.asyncSquare(9, (square) => {
        expect(square).toBe(81).toBeA('number');
        done();
    })
})