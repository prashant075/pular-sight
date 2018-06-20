var {expect} = require( 'chai');
var jsdom = require('jsdom');
var fs = require('fs');


describe('Our first test',()=>{
    it('should be',()=>{
        expect(true).to.equal(true);
    });
});

// describe('index.html',()=>{
//     it('should say',(done)=>{
//         const index = fs.readFileSync('./src/index.html', "utf-8");
//         jsdom.env(index, function(err, window){
//             const h1 = window.document.getElementByTagName('h1')[0];
//             expect(h1.innerHTML).to.equal("Hello");
//             done();
//             window.close();
//         });
//     });
// });