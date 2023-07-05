# realid-challenge
## React challenge

It’s based on Vite so the commands to spool up the dev environment are:
```
npm run dev
npm run build
```
I recreated both the credit-checks and eviction-reports pages. When you first load the project it loads the homepage so you’ll need to navigate to those pages. I did use Formik + Yup to implement some really basic validation on the credit check form. When submitted the form will validate and if successful alert an object with the field data.

The main page section templates are in /src/components, and then the smaller re-useable sub-components are in /src/components/pageComponents. 

In so far as placing component images and css files inside the component directories it’s a pattern that makes it easy to work on components, but I’m not married to it in the event you prefer other design patterns (i.e. placing these in the assets dir)

Lastly, I’ve used a global “AppContext” (useContext) component to track the price items' states when adding items to the cart. Other components use some prop-drilling. I’m aware some devs don’t like prop-drilling and will use Redux, useContext, or other solutions. If it’s not too deep, 2-3 layers, then I personally don’t mind it. Again if you have a strong preference about it then I would just use one of the aforementioned solutions and re-factor the code.
