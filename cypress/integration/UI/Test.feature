@suite("UI")
Feature: Testing login page
    @test
    Scenario: Valid log in 
        Given User navigates to Conduit
        Then Clicks on login button
        Then user enters email
        Then user enters password
        Then Clicks on login button in Sign in form
        Then I validate user is loged in his profile
        Then Logs out of Conduit
        Then Clicks on login button 
        Then user enters Second test email
        Then user enters password 
        Then Clicks on login button in Sign in form
        Then I validate user is loged in his profile
        Then Logs out of Conduit
        Then Clicks on login button
        Then user enters Third test email
        Then user enters password 
        Then Clicks on login button in Sign in form
        Then I validate user is loged in his profile
        Then Logs out of Conduit

    @test
    Scenario: Click on New Post to Create New Article & Publish
        Given User navigates to Conduit
        Then Clicks on login button
        Then user enters email
        Then user enters password
        Then Clicks on login button in Sign in form
        Then I validate user is loged in his profile
        Then I click on new Post
        Then I enter Article Title
        Then I enter Whats this Article about 
        Then I enter article text 
        Then I click publish

    @test
    Scenario: Logout and update user settings
        Given User navigates to Conduit
        Then Clicks on login button
        Then user enters email
        Then user enters password
          Then Clicks on login button in Sign in form
        Then I validate user is loged in his profile
        Then updates user settings and logs out
       