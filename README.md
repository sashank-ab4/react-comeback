# ReduxToolKit

-- In a web page, when we click "add" button it disptaches an action which calls a reducer function that which will /modify/update the slice of the redux store.

Header component is subscribed to store using a selector.

#1 configureStore from RTK in newly created appStore file
#2 importing {Provider} from react-redux in root file -- App.js
#3 wrap the whole App (header and outlet) and outlet in <Provider> with store as props with appStore as a value
rm -rf node_modules
rm -f package-lock.json
npm install === reset your project using this code

onclick={handleClick}
onclick={()=>handleClick(item)}
onclink{handleClick(item)}

# onclick={handleClick}

You are passing the reference of the function handleClick — it will be called only when the button is clicked --->"React, please call handleClick when the button is clicked."

# onclick={()=>handleClick(item)}

You are creating an anonymous arrow function that will call handleClick with the item as an argument — but only when the button is clicked--->"React, when the button is clicked, run this function that calls handleClick(item)."

# onclink{handleClick(item)}

This will immediately execute handleClick(item) while rendering, instead of waiting for the click.

# Setting up Testiing in our app

- what i did:

* Installed react testing library:
  -- npm install --save-dev @testing-library/react @testing-library/dom
* Installed Jest
  --npm install jest
* Installed Babel Dependencies:
  npm install --save-dev babel-jest @babel/core @babel/preset-env
* Configured Babel using babel.config.js
* Configured Parcel config file to disable the babel transpilation to avoid conflict

- Jest Configuration: npm jest --init
- Installed jsdom library: npm install --save-dev jest-environment-jsdom
- Install @babel/preset-react to make JSX work in test cases
- Configure in babel.config.js
