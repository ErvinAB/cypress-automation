module.exports=class TestLocator
{
    // getTextBoxLink="//*[contains(text(),'Text Box')]"
    // getFullNameText="//input[@id='userName']"
    // getEmail="//input[@id='userEmail']"
    // getCurrentAddress="//*[@id='currentAddress']"
    // getPermanentAddress="//*[@id='permanentAddress']"
    // getSubmitButton="//button[@id='submit']"

//Validator 

getValidatorForLogIn="//div[contains(text(), 'No articles are here... yet.')]"


    getSignInButton="//*[@id='main']/div/nav/div/ul/li[2]/a"
    getUserEmail="//input[@type='email']"
    getUserPassword="//input[@type='password']"
    getSignInButtonClick="//button[contains(text(), 'Sign in')]"
    getSettingsButton="//*[@id='main']/div/nav/div/ul/li[3]/a"
    getSignOutButton="//button[contains(text(), 'Or click here to logout.')]"
    getNewPostButton="//*[@id='main']/div/nav/div/ul/li[2]/a"
    getArticleTitle="//input[@placeholder='Article Title']"
    getWhatIsThisAboutinput="//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[2]/input"
    getWriteYourArticle="//textarea[@placeholder='Write your article (in markdown)']"
    getPublishButton="//button[contains(text(), 'Publish Article')]"
    getUpdateUserSettingsField="//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[3]"
}