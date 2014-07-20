Feature: Visitor

Scenario:Search in Pittsburgh
Given visitor is on the www.yelp.com
When visitor search Pittsburgh
Then the website should show the business in Pittsburgh

Scenario:Search by range
Given visitor is on yelp of Pittsburgh
When visitor searches range one dollar signal
Then list in the page should show the shops of one dollar signal

Scenario:Search by area
Given visitor is on yelp of Pittsburgh
When visitor searches area Downtown
Then list in the page should show the shops in Downtown


Scenario:Search for food
Given visitor is on yelp of Pittsburgh
When visitor selects Food
Then the website should on the page of Food

Scenario:Search for Dessert
Given visitor is on food page
When visitor selects Desserts
Then the website should on the page of Desserts


