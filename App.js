
export function App() {
    function counter() {
        var count = 0
        return {
            HTML: `<button id="counter">count is ${count}</button>`,
            OnLoad: function() {
                document.getElementById('counter').addEventListener("click", function(){
                        count++
                        document.getElementById(`counter`).innerHTML = `count is ${count}`
                    }
                )
            }
        }
    }

    return {
        HTML: `<p>my js thing</p> <p>here a counter component</p>`,
        OnLoad: function() {
            Mount(counter(), document.getElementById('App'))
        }
    }
}