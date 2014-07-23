Feature: Member

Scenario:Ready to sign up
Given member is on www.yelp.com
When member clicks on Sign Up
Then member should be on the page of Sign Up

Scenario:Ready to log in
Given member is on www.yelp.com
When member clicks on Log In
Then member should be on the page of Log In

Scenario:Log in
Given member is on Log In page
When member inputs Log In Information
Then member should log in

Scenario:Search reviews for Penn Station
Given member has logged in
When member searches writing a review for Penn Station
Then the page should show the reviews of Penn Station

Scenario:Write a review for Penn Station
Given the review page has showed the reviews of Penn Station
When member click on write a review
Then member should on the review page