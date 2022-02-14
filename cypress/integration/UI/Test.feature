@suite("UI")
Feature: Testing login page
    @test
    Scenario: Valid log in 
        Given User navigates to Conduit
        Then Clicks on login button
        Then user enters email
        Then user enters password
        Then Logs out of Conduit
        Then Clicks on login button
        Then user enters Second test email
        Then user enters password 
        Then Logs out of Conduit
        Then Clicks on login button
        Then user enters Third test email
        Then user enters password 
        Then Logs out of Conduit

    Scenario: Click on New Post to Create New Article & Publish
        Given User navigates to Conduit
        Then Clicks on login button
        Then user enters email
        Then user enters password
        Then I click on new Post
        Then I enter Article Title 'lorem ipsum'
        Then I enter Whats this Article about 'lorem ipsum dolor sit amet'
        Then I enter article text 'lorem ipsumlorem ipsum dolor sit amet doloaris'
        Then I click publish

    Scenario: Logout and update user settings
        Given User navigates to Conduit
        Then Clicks on login button
        Then user enters email
        Then user enters password
        Then updates user settings and logs out
       