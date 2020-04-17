// webglteapot © 2020 RustyTriangles LLC

var gmod = require('./graphics');

window.addEventListener('DOMContentLoaded', () => {

    var canvas = document.getElementById('canvas');
    var savedWidth = -1;
    var savedHeight = -1;
    function renderLoop() {
        if (canvas.clientWidth !== savedWidth || canvas.clientHeight != savedHeight) {
            savedWidth = canvas.clientWidth;
            savedHeight = canvas.clientHeight;
            canvas.width = savedWidth;
            canvas.height = savedHeight;
        }

        const rect = canvas.getBoundingClientRect();
        const gl = canvas.getContext('webgl2');
	if (!gl) {
	    console.log('Could not create context');
	    return;
	}

	gmod.draw(gl);

        window.requestAnimationFrame(renderLoop);
    }

    window.requestAnimationFrame(renderLoop);
})
