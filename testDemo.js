import { Selector } from 'testcafe'
import Element_selector from './element/element_selector';

const element_selector = new Element_selector();
fixture`Getting Started`
    .page`https://www.demoblaze.com/`


test('Sign up test', async t => {
    await element_selector.signUPmethod();
}
)
test('Log in test', async t => {
    await element_selector.LoginMethod();
})
test('category test', async t=> {
    await t.click(Selector("a").withText("Monitors"));
})