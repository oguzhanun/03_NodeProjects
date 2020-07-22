const supertest = require('supertest');
const expect = require('expect');

const app = require('./server').app;


// çıktıyı gruplamak için kullanılyor...
describe( 'Get(/)', () => {

    it('should test if the user exist', (done) => {
        supertest(app).
            get('/').
                expect(200).
                    expect((res) => {
                        expect(res.body).toInclude( { name: 'oguzhan' });
                    }).end(done);
    });

    describe('Get(/users)', () => {

        it('should test if the user exist', (done) => {
            supertest(app).
                get('/users').
                    expect(200).
                        expect((res) => {
                            expect(res.body).toInclude( { firstName: 'oguzhan', lastName: 'un' });
                        }).end(done);
        });

    })
} )


