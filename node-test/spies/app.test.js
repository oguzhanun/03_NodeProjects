const rewire = require ('rewire');
const expect = require ('expect');
const app = rewire ('./app.js');

describe('App.js TEST', () => {

    var db = {
        saveUser : expect.createSpy()
    };

    app.__set__('db', db);

    it('should test the bogus database', () => {
        var email = 'oguzhan@example.com';
        var password = '123abc';

        app.handleSignUp(email, password);

        expect(db.saveUser).toHaveBeenCalledWith( {email, password} );
    })

    it('should call spy correctly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);

        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    })
    
})
