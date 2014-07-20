Feature: Member

Scenario:Ready to sign up
Given member is on the www.yelp.com
When member clicks on Sign Up
Then member should on the page of Sign Up

Scenario:Ready to log in
Given member is on the www.yelp.com
When member clicks on Log In
Then member should on the page of Log In

Scenario:Log in
Given member is on Log In page
When member inputs Log In Information
Then member should log in

Scenario:Write a review for Penn Station 1
Given member has logged in
When member searches writing a review for Penn Station
Then the page should show the list of Penn Station

Scenario:Write a review for Penn Station 2
Given the review page has showed the list of Penn Station
When member click on write a review
Then member should on the review page