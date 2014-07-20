$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027yelpTest\\Member.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Member",
  "description": "",
  "id": "member",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Ready to sign up",
  "description": "",
  "id": "member;ready-to-sign-up",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "member is on the www.yelp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "member clicks on Sign Up",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "member should on the page of Sign Up",
  "keyword": "Then "
});
formatter.match({
  "location": "TestYelp.MemberonWebsite()"
});
formatter.result({
  "duration": 29396549641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign Up",
      "offset": 17
    }
  ],
  "location": "TestYelp.clickOnSth(String)"
});
formatter.result({
  "duration": 5016822144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign Up",
      "offset": 29
    }
  ],
  "location": "TestYelp.MemberIsOnPage(String)"
});
formatter.result({
  "duration": 11930848,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Ready to log in",
  "description": "",
  "id": "member;ready-to-log-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "member is on the www.yelp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "member clicks on Log In",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "member should on the page of Log In",
  "keyword": "Then "
});
formatter.match({
  "location": "TestYelp.MemberonWebsite()"
});
formatter.result({
  "duration": 26743778583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 17
    }
  ],
  "location": "TestYelp.clickOnSth(String)"
});
formatter.result({
  "duration": 4586255944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 29
    }
  ],
  "location": "TestYelp.MemberIsOnPage(String)"
});
formatter.result({
  "duration": 8094783,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Log in",
  "description": "",
  "id": "member;log-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "member is on Log In page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "member inputs Log In Information",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "member should log in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Log In",
      "offset": 13
    }
  ],
  "location": "TestYelp.MemberonPage(String)"
});
formatter.result({
  "duration": 26858388424,
  "status": "passed"
});
formatter.match({
  "location": "TestYelp.inputLogInInfo()"
});
formatter.result({
  "duration": 7871698258,
  "status": "passed"
});
formatter.match({
  "location": "TestYelp.MemberLogIn()"
});
formatter.result({
  "duration": 5618408352,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Write a review for Penn Station 1",
  "description": "",
  "id": "member;write-a-review-for-penn-station-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "member has logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "member searches writing a review for Penn Station",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the page should show the list of Penn Station",
  "keyword": "Then "
});
formatter.match({
  "location": "TestYelp.MemberLoggedIn()"
});
formatter.result({
  "duration": 46573368762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Penn Station",
      "offset": 37
    }
  ],
  "location": "TestYelp.searchReview(String)"
});
formatter.result({
  "duration": 10099197473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Penn Station",
      "offset": 33
    }
  ],
  "location": "TestYelp.pageOnList(String)"
});
formatter.result({
  "duration": 20988028,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Write a review for Penn Station 2",
  "description": "",
  "id": "member;write-a-review-for-penn-station-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "the review page has showed the list of Penn Station",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "member click on write a review",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "member should on the review page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Penn Station",
      "offset": 39
    }
  ],
  "location": "TestYelp.reviewList(String)"
});
formatter.result({
  "duration": 29191635298,
  "status": "passed"
});
formatter.match({
  "location": "TestYelp.clickOnReview()"
});
formatter.result({
  "duration": 12110680010,
  "status": "passed"
});
formatter.match({
  "location": "TestYelp.pageReview()"
});
formatter.result({
  "duration": 12567159,
  "status": "passed"
});
formatter.uri("\u0027yelpTest\\Visitor.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Visitor",
  "description": "",
  "id": "visitor",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Search in Pittsburgh",
  "description": "",
  "id": "visitor;search-in-pittsburgh",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "visitor is on the www.yelp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "visitor search Pittsburgh",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the website should show the business in Pittsburgh",
  "keyword": "Then "
});
formatter.match({
  "location": "TestYelp.onWebsite()"
});
formatter.result({
  "duration": 29428825207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pittsburgh",
      "offset": 15
    }
  ],
  "location": "TestYelp.searchPlace(String)"
});
formatter.result({
  "duration": 2558907129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pittsburgh",
      "offset": 40
    }
  ],
  "location": "TestYelp.showBsiness(String)"
});
formatter.result({
  "duration": 10597112,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Search by range",
  "description": "",
  "id": "visitor;search-by-range",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "visitor is on yelp of Pittsburgh",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "visitor searches range one dollar signal",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "list in the page should show the shops of one dollar signal",
  "keyword": "Then "
});
formatter.match({
  "location": "TestYelp.onWebsitePittsburgh()"
});
formatter.result({
  "duration": 33090046525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one dollar signal",
      "offset": 23
    }
  ],
  "location": "TestYelp.searchRange(String)"
});
formatter.result({
  "duration": 3060760318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one dollar signal",
      "offset": 42
    }
  ],
  "location": "TestYelp.showRangeList(String)"
});
formatter.result({
  "duration": 11003903,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search by area",
  "description": "",
  "id": "visitor;search-by-area",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "visitor is on yelp of Pittsburgh",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "visitor searches area Downtown",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "list in the page should show the shops in Downtown",
  "keyword": "Then "
});
formatter.match({
  "location": "TestYelp.onWebsitePittsburgh()"
});
formatter.result({
  "duration": 29387477066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Downtown",
      "offset": 22
    }
  ],
  "location": "TestYelp.searchArea(String)"
});
formatter.result({
  "duration": 3078362925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Downtown",
      "offset": 42
    }
  ],
  "location": "TestYelp.showAreaList(String)"
});
formatter.result({
  "duration": 9073975,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search for food",
  "description": "",
  "id": "visitor;search-for-food",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "visitor is on yelp of Pittsburgh",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "visitor selects Food",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the website should on the page of Food",
  "keyword": "Then "
});
formatter.match({
  "location": "TestYelp.onWebsitePittsburgh()"
});
formatter.result({
  "duration": 34459088740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Food",
      "offset": 16
    }
  ],
  "location": "TestYelp.selectDetail(String)"
});
formatter.result({
  "duration": 4051307075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Food",
      "offset": 34
    }
  ],
  "location": "TestYelp.showPage(String)"
});
formatter.result({
  "duration": 34891722,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search for Dessert",
  "description": "",
  "id": "visitor;search-for-dessert",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "visitor is on food page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "visitor selects Desserts",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the website should on the page of Desserts",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "food",
      "offset": 14
    }
  ],
  "location": "TestYelp.onPage(String)"
});
formatter.result({
  "duration": 30680950717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desserts",
      "offset": 16
    }
  ],
  "location": "TestYelp.selectDetail(String)"
});
formatter.result({
  "duration": 4067336162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desserts",
      "offset": 34
    }
  ],
  "location": "TestYelp.showPage(String)"
});
formatter.result({
  "duration": 8533297,
  "status": "passed"
});
});