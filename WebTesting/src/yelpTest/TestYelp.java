package yelpTest;

import org.junit.Before;
import org.junit.After;
import org.openqa.jetty.util.Password;

import com.thoughtworks.selenium.DefaultSelenium;
import com.thoughtworks.selenium.Selenium;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import com.thoughtworks.selenium.*;

import static org.junit.Assert.*;

import java.util.regex.Pattern;



public class TestYelp {

	private Selenium selenium;
	private String reviewShop;
	
	@Before
	public void setUp() throws Exception{
		
	}
	
	@Given("visitor is on the www.yelp.com")
	public void onWebsite(){
		selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://www.yelp.com/");
		selenium.start();
		//About the following line, it confuses me too. When I input www.yelp.com, the website just automatically go to www.yelp.com/pittsburgh. 
		//And www.yelp.com/pittsburgh page is different with http://www.yelp.com/search?find_desc=&find_loc=pittsburgh&ns=1#, the later one shows the business of Pittsburgh
		//If you don't put the following line, there would be a bug, which makes visitor cannot go to yelp.com
		selenium.open("/pittsburgh");
	}
	
	@Given("visitor is on yelp of Pittsburgh")
	public void onWebsitePittsburgh(){
		selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://www.yelp.com/search?find_desc=&find_loc=pittsburgh&ns=1#");
		selenium.start();
		selenium.open("/search?find_desc=&find_loc=pittsburgh&ns=1#");
	}
	
	@Given("visitor is on ([A-z]*) page")
	public void onPage(String str){
		selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://www.yelp.com/");
		selenium.start();
		selenium.open("/search?find_desc=&find_loc=pittsburgh&ns=1#cflt="+str);
	}
	
	@Given("member is on www.yelp.com")
	public void memberOnWebsite(){
		selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://www.yelp.com/");
		selenium.start();
		selenium.open("/pittsburgh");
	}
	
	@Given("member is on (.+) page")
	public void memberOnPage(String str){
		selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://www.yelp.com/");
		selenium.start();
		if(str.equals("Log In")){
			selenium.open("/login?return_url=%2Fpittsburgh");
		}
		else fail();
	}
	
	@Given("member has logged in")
	public void memberLoggedIn() throws InterruptedException{
		selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://www.yelp.com/");
		selenium.start();
		selenium.open("/pittsburgh");
		selenium.click("Link=Log In");
		selenium.waitForPageToLoad("30000");
		Thread.sleep(3000);
		selenium.type("name=email", "weichuan0903@hotmail.com");
		selenium.type("name=password", "737068");
		selenium.click("name=action_submit");
		selenium.waitForPageToLoad("30000");
		Thread.sleep(3000);
		selenium.click("link=About Me");
		selenium.waitForPageToLoad("30000");
		Thread.sleep(3000);
	}
	
	@Given("the review page has showed the reviews of (.+)")
	public void reviewList(String str) throws InterruptedException{
		selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://www.yelp.com/");
		selenium.start();
		selenium.open("/writeareview");
		selenium.type("id=war_desc", str);
		selenium.click("xpath=(//button[@value='submit'])[2]");
		selenium.waitForPageToLoad("30000");
		Thread.sleep(3000);
	}
	
	@When("visitor searches for ([A-z]*)")
	public void searchPlace(String place){
		selenium.type("id=dropperText_Mast", place);
		selenium.click("id=header-search-submit");
		selenium.waitForPageToLoad("30000");
	}
	
	@When("visitor searches range (.+)")
	public void searchRange(String range) throws InterruptedException{
		if(range.equals("one dollar signal")) selenium.click("name=price");
		else if(range.equals("two dollar signal")) selenium.click("xpath=(//input[@name='price'])[2]");
		else if(range.equals("three dollar signal")) selenium.click("xpath=(//input[@name='price'])[3]");
		else selenium.click("xpath=(//input[@name='price'])[4]");
		Thread.sleep(3000);
//		The follow cannot work out, I think it's because at the moment the page changes, the previous page is still there. When we assert it, the assertion is not true.
//		selenium.waitForPageToLoad("30000");
	}
	
	@When("visitor searches area (.+)")
	public void searchArea(String area) throws InterruptedException{
		if(area.equals("Downtown")) selenium.click("name=place");
		else if(area.equals("Oakland")) selenium.click("xpath=(//input[@name='place'])[2]");
		else if(area.equals("North Side")) selenium.click("xpath=(//input[@name='place'])[3]");
		else fail();
		Thread.sleep(3000);
	}
	
	@When("visitor selects (.+)")
	public void selectDetail(String detail) throws InterruptedException{
		Thread.sleep(1000);
		selenium.click("link="+detail);
		Thread.sleep(3000);
	}
	
	@When("member clicks on (.+)")
	public void clickOnSth(String str) throws InterruptedException{
		if (str.equals("Sign Up")) {
			selenium.click("id=header-sign-up");
		}
		else if(str.equals("Log In")){
			selenium.click("Link=Log In");
		}
		else fail();
		selenium.waitForPageToLoad("30000");
		Thread.sleep(3000);
	}
	
	@When("member inputs Log In Information")
	public void inputLogInInfo(){
		selenium.type("name=email", "weichuan0903@hotmail.com");
		selenium.type("name=password", "737068");
		selenium.click("name=action_submit");
		selenium.waitForPageToLoad("30000");
	}
	
	@When("member searches writing a review for (.+)")
	public void searchReview(String str) throws InterruptedException{
		selenium.click("css=a.ybtn.ybtn-primary");
		selenium.waitForPageToLoad("30000");
		Thread.sleep(3000);
		selenium.type("id=war_desc", str);
		selenium.click("xpath=(//button[@value='submit'])[2]");
		selenium.waitForPageToLoad("30000");
		Thread.sleep(3000);
	}
	
	@When("member click on write a review")
	public void clickOnReview() throws InterruptedException{
		selenium.click("id=bizTitleLink0");
		selenium.waitForPageToLoad("30000");
		Thread.sleep(3000);
		reviewShop = selenium.getText("//div[@id='wrap']/div[3]/div/div/div[2]/div/h1");
		selenium.click("//div[@id='wrap']/div[3]/div/div/div[2]/div[2]/div/a");
		selenium.waitForPageToLoad("30000");
		Thread.sleep(3000);
	}
	
	@Then("the website should show the businesses in ([A-z]*)")
	public void showBsiness(String place){		
		Pattern p = null;
		assertTrue(p.matches(".*"+place+".*", selenium.getText("css=h1")));
	}
	
	@Then("list in the page should show the shops of (.+)")
	public void showRangeList(String range){
		if(range.equals("one dollar signal")) assertEquals("$", selenium.getText("css=span.business-attribute.price-range"));
		else if(range.equals("two dollar signal")) assertEquals("$$", selenium.getText("css=span.business-attribute.price-range"));
		else if(range.equals("three dollar signal")) assertEquals("$$$", selenium.getText("css=span.business-attribute.price-range"));
		else assertEquals("$$$$", selenium.getText("css=span.business-attribute.price-range"));
		
	}
	
	@Then("list in the page should show the shops in (.+)")
	public void showAreaList(String area){
		Pattern p = null;
		assertTrue(p.matches(".*"+area+".*", selenium.getText("css=span.neighborhood-str-list")));
	}
	
	@Then("the website should be on the page of ([A-z]*)")
	public void showPage(String str){
		Pattern p= null;
		assertTrue(p.matches(str+".*", selenium.getText("css=h1")));
	}
	
	@Then("member should be on the page of (.+)")
	public void MemberIsOnPage(String str){
		if (str.equals("Sign Up")) {
			assertEquals("https://www.yelp.com/signup", selenium.getLocation());
		}
		else if(str.equals("Log In")){
			assertEquals("https://www.yelp.com/login?return_url=%2Fpittsburgh", selenium.getLocation());
		}
		else fail();
	}
	
	@Then("member should log in")
	public void MemberLogIn() throws InterruptedException{
		selenium.click("link=About Me");
		selenium.waitForPageToLoad("30000");
		Thread.sleep(3000);
		assertEquals("Weichuan H.'s Reviews | Pittsburgh | Yelp", selenium.getTitle());
	}
	
	@Then("the page should show the reviews of (.+)")
	public void pageOnReview(String str){
		Pattern p = null;
		assertTrue(p.matches(".*"+str+".*", selenium.getText("id=bizTitleLink0")));
	}
	
	@Then("member should on the review page")
	public void pageReview(){
		assertEquals("Reviews for "+reviewShop, selenium.getText("css=h3"));
	}
	
	@After
	public void tearDown() throws Exception {
		selenium.stop();
	}

}

	
