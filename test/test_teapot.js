var chai = require('chai');
var assert = chai.assert;
var teapot = require('../src/teapot');

describe('getControlPoints', function () {

    it('check shape', function() {
	const p = teapot.getControlPoints();
	assert.equal(p.length, 32);
	for (let i = 0; i < 32; i++) {
	    assert.equal(p[i].length, 4);
	    for (let j = 0; j < 4; j++) {
		assert.equal(p[i][j].length, 4);
		for (let k = 0; k < 4; k++) {
		    assert.equal(p[i][j][k].length, 3);
		}
	    }
	}
    });

    it('check bounds', function() {
	const p = teapot.getControlPoints();
	let minBounds = [10,10,10];
	let maxBounds = [-10,-10,-10];
	for (let i = 0; i < 32; i++) {
	    assert.equal(p[i].length, 4);
	    for (let j = 0; j < 4; j++) {
		assert.equal(p[i][j].length, 4);
		for (let k = 0; k < 4; k++) {
		    minBounds[0] = Math.min(minBounds[0], p[i][j][k][0]);
		    minBounds[1] = Math.min(minBounds[1], p[i][j][k][1]);
		    minBounds[2] = Math.min(minBounds[2], p[i][j][k][2]);
		    maxBounds[0] = Math.max(minBounds[0], p[i][j][k][0]);
		    maxBounds[1] = Math.max(minBounds[1], p[i][j][k][1]);
		    maxBounds[2] = Math.max(minBounds[2], p[i][j][k][2]);
		}
	    }
	}

	const tol = 1e-6;

	assert.closeTo(minBounds[0], -3, tol);
	assert.closeTo(minBounds[1], -2, tol);
	assert.closeTo(minBounds[2], 0, tol);

	assert.closeTo(maxBounds[0], 1.5, tol);
	assert.closeTo(maxBounds[1], 0, tol);
	assert.closeTo(maxBounds[2], 0.15, tol);

    });
});

describe('generateTeapot', function () {

    it('check shape', function() {
	const p = teapot.generateTeapot(7,13);
	assert.equal(p.vertices.length, 7*13*32*3);
	assert.equal(p.normals.length, 7*13*32*3);
	assert.equal(p.indices.length, 6*12*32*6);
    });

    it('check bounds', function() {
	const p = teapot.generateTeapot(7,13);

	const verts = p.vertices;
	{
	    let minBounds = [10,10,10];
	    let maxBounds = [-10,-10,-10];
	    for (let i = 0; i < verts.length; i+=3) {
		minBounds[0] = Math.min(minBounds[0], verts[i+0]);
		minBounds[1] = Math.min(minBounds[1], verts[i+1]);
		minBounds[2] = Math.min(minBounds[2], verts[i+2]);
		maxBounds[0] = Math.max(minBounds[0], verts[i+0]);
		maxBounds[1] = Math.max(minBounds[1], verts[i+1]);
		maxBounds[2] = Math.max(minBounds[2], verts[i+2]);
	    }

	    const tol = 1e-6;

	    assert.closeTo(minBounds[0], -3, tol);
	    assert.closeTo(minBounds[1], -2, tol);
	    assert.closeTo(minBounds[2], 0, tol);

	    assert.closeTo(maxBounds[0], 1.5, tol);
	    assert.closeTo(maxBounds[1], 0, tol);
	    assert.closeTo(maxBounds[2], 0.15, tol);
	}

	const norms = p.normals;
	{
	    let minBounds = [10,10,10];
	    let maxBounds = [-10,-10,-10];
	    for (let i = 0; i < norms.length; i+=3) {
		minBounds[0] = Math.min(minBounds[0], norms[i+0]);
		minBounds[1] = Math.min(minBounds[1], norms[i+1]);
		minBounds[2] = Math.min(minBounds[2], norms[i+2]);
		maxBounds[0] = Math.max(maxBounds[0], norms[i+0]);
		maxBounds[1] = Math.max(maxBounds[1], norms[i+1]);
		maxBounds[2] = Math.max(maxBounds[2], norms[i+2]);
	    }

	    const tol = 1e-6;

	    assert.closeTo(minBounds[0], -1, tol);
	    assert.closeTo(minBounds[1], -1, tol);
	    assert.closeTo(minBounds[2], -1, tol);

	    assert.closeTo(maxBounds[0], 1, tol);
	    assert.closeTo(maxBounds[1], 1, tol);
	    assert.closeTo(maxBounds[2], 1, tol);
	}

	const indices = p.indices;
	{
	    let minBounds = 10;
	    let maxBounds = -10;
	    for (let i = 0; i < indices.length; i++) {
		minBounds = Math.min(minBounds, indices[i]);
		maxBounds = Math.max(maxBounds, indices[i]);
	    }

	    assert.equal(minBounds, 0);
	    assert.equal(maxBounds, (p.vertices.length/3)-1);
	}

    });
});

describe('getGeometry', function () {

    it('check shape', function() {
	const p = teapot.getGeometry();

	const expectedNumVertices = 10 * 13 * 32;
	const expectedNumTriangles = (10-1) * (13-1) * 2 * 32;

	assert.equal(p.numVertices, expectedNumVertices);
	assert.equal(p.numTriangles, expectedNumTriangles);

	assert.equal(p.vertices.length, 3*expectedNumVertices);
	assert.equal(p.numComponents, 3);
	assert.equal(p.normals.length, 3*expectedNumVertices);
	assert.equal(p.indices.length, 3*expectedNumTriangles);
    });
});
