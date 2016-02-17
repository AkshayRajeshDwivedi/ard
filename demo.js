
//var protractor = require('/usr/local/lib/node_modules/protractor/lib/protractor.js');
describe('demo class',function(){
beforeEach(function(){
	browser.get('http://sumit jolly:Quest990@dev-sandbox56.ads.mckinsey.com/#/search');
	


});
it('Fill in the search items',function(){
	 var ptor = browser;
	//var curr= ptor.getTitle();
	//expect(curr).toEqual('Login');
     element(by.model('search.category')).click();
     browser.driver.sleep(2000);
     element(by.linkText('FLITE')).click();
     browser.driver.sleep(2000);
     element(by.id('name')).sendKeys('name');
     browser.driver.sleep(2000);
     element(by.model('search.fromLast')).click();
     element(by.linkText('3 months')).click();
      element(by.css('[class="btn btn-primary"]')).click();
      browser.driver.sleep(20000);


     //expect(browser.getCurrentUrl()).toEqual('https://app.vwo.com/#/login');
 
	//ptor.findElement(protractor.By.css('//div[@class="ui action input fluid"]/button')).click();

},10000);


});
