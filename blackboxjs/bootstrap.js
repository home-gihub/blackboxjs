export function Bootstrap(Body) {
    console.log('BlacBoxjs');
    const fix = document.createElement('div');
    document.body.appendChild(fix);
    document.body.innerHTML = '<div id="App"></div>';
    document.getElementById("App").innerHTML = Body.HTML;
    if (Body.OnLoad !== undefined) {Body.OnLoad}
}