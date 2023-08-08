# AllInHerejs
a very simple way to not have to touch index.html and just code in js
## index.html
the index.html sould just be a blank page with nothing in the `<body>` in the `<body>` add the `AllInHere.js` script
## Your Scripts
in your website folder make a new file the contents of it should be
```
function App() {
    
    
    return {
        Body: ''
    }
}
```
the `App()` function stores all of your code, and the function returns a `Body` variable, that will be the content of your website, it will be contained in a `<div>` with an id of `App`, if you want to have variables define them out of the `App()` function
## including your scripts
before you added the `AllInHere.js` script add your scripts
