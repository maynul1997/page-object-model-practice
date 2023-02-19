import { Selector } from 'testcafe'

fixture`Getting Started`
.page`https://www.demoblaze.com/`

test('Valid signup test', async t=>{
    await t.click("#signin2");
    await t.typeText("#sign-username", "mynul121");
    await t.typeText("#sign-password", "mynul123");
    await t
        .setNativeDialogHandler(() => true)
        .click(Selector("button").withText("Sign up"));
        await t.debug();

})

test('Valid Login test', async t => {
    await t.click("#login2");
    await t.typeText("#loginusername", "faisalk007");
    await t.typeText("#loginpassword", "faisalk007");
    await t
        .setNativeDialogHandler(() => true)
        .click(Selector("button").withText("Log in"));
    await t.debug();
});
test.only('category test', async t=> {
    await t.click(Selector("a").withText("Monitors"));
})