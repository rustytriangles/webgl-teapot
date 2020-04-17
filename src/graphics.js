// webglteapot © 2020 RustyTriangles LLC

const { mat4, quat } = require('gl-matrix');
const teapot = require('./teapot');

var shaderProgram = undefined;
var programInfo = undefined;
var geomBuffers = undefined;
var geomInfo = undefined;

function checkErrors(gl, str) {

    const e = gl.getError();
    switch (e) {
    case gl.NO_ERROR:
	break;
    case gl.INVALID_ENUM:
	alert(str + ' - getError INVALID_ENUM');
	break;
    case gl.INVALID_VALUE:
	alert(str + ' - getError INVALID_VALUE');
	break;
    case gl.INVALID_OPERATION:
	alert(str + ' - getError INVALID_OPERATION');
	break;
    case gl.INVALID_FRAMEBUFFER_OPERATION:
	alert(str + ' - getError INVALID_FRAMEBUFFER_OPERATION');
	break;
    case gl.OUT_OF_MEMORY:
	alert(str + ' - getError OUT_OF_MEMORY');
	break;
    case gl.CONTEXT_LOST_WEBGL:
	alert(str + ' - getError CONTEXT_LOST_WEBGL');
	break;
    default:
	alert(str + ' - getError returned ' + e);
	break;
    }
}

function initShaders(gl) {
    const vsSource =
	  'attribute vec4 aVertexPosition;' +
	  'attribute vec3 aVertexNormal;' +
	  'varying highp vec3 vLightColor;' +
          'uniform mat4 uProjectionMatrix;' +
          'uniform mat4 uModelViewMatrix;' +
          'void main() {' +
	  '    float ka = 0.1;' +
	  '    float kd = 0.8;' +
          '    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;' +
	  '    vec3 lightVec = vec3(0,0,1);' +
	  '    vec3 matColor = vec3(0.5, 0.25, 1);' +
	  '    float d = dot(aVertexNormal, lightVec);' +
	  '    vLightColor = min(vec3(ka) + vec3(kd)*max(vec3(d),vec3(0)), vec3(1)) * matColor;' +
          '}';

    const fsSource =
	  'varying highp vec3 vLightColor;' +
	  'void main() {' +
          '    gl_FragColor = vec4(vLightColor.x, vLightColor.y, vLightColor.z, 1.0);' +
          '}';
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' +
	      gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

function initBuffers(gl) {

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,
                  geomInfo.vertices,
                  gl.STATIC_DRAW);

    const normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,
                  geomInfo.normals,
		  gl.STATIC_DRAW);

    const indicesBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
                  geomInfo.indices,
                  gl.STATIC_DRAW);

    return {
        positionBuff: positionBuffer,
	positionNumComponents: geomInfo.numComponents,
	positionType: gl.FLOAT,
        normalBuff: normalBuffer,
	normalNumComponents: geomInfo.numComponents,
	normalType: gl.FLOAT,
	indicesBuff: indicesBuffer,
	indicesType: gl.UNSIGNED_SHORT
    };
}

function loadShader(gl, type, source) {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);

    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' +
	      gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

function draw(gl) {

    if (!shaderProgram) {
        shaderProgram = initShaders(gl);
    }

    if (!programInfo) {
        programInfo = {
            program: shaderProgram,
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
                vertexNormal: gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
            },
            uniformLocations: {
                projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
                modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
            },
        };

        if (programInfo.attribLocations.vertexPosition < 0) {
	    alert('Could not find vertexPosition location');
	    checkErrors(gl);
	}
        if (programInfo.attribLocations.vertexNormal < 0) {
	    alert('Could not find vertexNormal location');
	    checkErrors(gl);
	}
	if (programInfo.uniformLocations.projectionMatrix < 0) {
	    alert('Could not find projectionMatrix location');
	    checkErrors(gl);
	}
	if (programInfo.uniformLocations.projectionMatrix < 0) {
	    alert('Could not find modelViewMatrix location');
	    checkErrors(gl);
	}
    }

    if (!geomInfo) {
	geomInfo = teapot.getGeometry(gl);
    }

    if (!geomBuffers) {
        geomBuffers = initBuffers(gl);
    }

    gl.clearColor(0,0,0,1);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const fieldOfView = 35 * Math.PI / 180;
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix,
                     fieldOfView,
                     aspect,
                     zNear,
                     zFar);

    const modelViewMatrix = mat4.create();
    mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, -1.0, -9.0]);
    mat4.rotate(modelViewMatrix, modelViewMatrix, 4*Math.PI/3, [0.0, 1.0, 0.0]);
    mat4.rotate(modelViewMatrix, modelViewMatrix, -2*Math.PI/3, [1.0, 0.0, 0.0]);

    const normalize = false;
    const stride = 0;
    const offset = 0;

    gl.bindBuffer(gl.ARRAY_BUFFER, geomBuffers.positionBuff);
    gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition,
                           geomBuffers.positionNumComponents,
                           geomBuffers.positionType,
                           normalize,
                           stride,
                           offset);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

    gl.bindBuffer(gl.ARRAY_BUFFER, geomBuffers.normalBuff);
    gl.vertexAttribPointer(programInfo.attribLocations.vertexNormal,
                           geomBuffers.normalNumComponents,
                           geomBuffers.normalType,
                           normalize,
                           stride,
                           offset);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexNormal);

    gl.useProgram(programInfo.program);

    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix,
                        false,
                        projectionMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix,
                        false,
                        modelViewMatrix);

    const numTriangles = geomInfo.numTriangles;
    gl.drawElements(gl.TRIANGLES, 3*numTriangles, geomBuffers.indicesType, 0);

    checkErrors(gl, 'after drawElements');
}

module.exports = { draw };
