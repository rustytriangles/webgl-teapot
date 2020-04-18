// webglteapot © 2020 RustyTriangles LLC

const { mat4, vec3, vec4, quat } = require('gl-matrix');

function getControlPoints() {
    return [ // 0
        [
            [
                [1.4, 0.0, 2.4],
                [1.4, -0.784, 2.4],
                [0.784, -1.4, 2.4],
                [0.0, -1.4, 2.4]
            ],
            [
                [1.3375, 0.0, 2.53125],
                [1.3375, -0.749, 2.53125],
                [0.749, -1.3375, 2.53125],
                [0.0, -1.3375, 2.53125]
            ],
            [
                [1.4375, 0.0, 2.53125],
                [1.4375, -0.805, 2.53125],
                [0.805, -1.4375, 2.53125],
                [0.0, -1.4375, 2.53125]
            ],
            [
                [1.5, 0.0, 2.4],
                [1.5, -0.84, 2.4],
                [0.84, -1.5, 2.4],
                [0.0, -1.5, 2.4]
            ]
        ],
	[    // 1
            [
                [0.0, -1.4, 2.4],
                [-0.784, -1.4, 2.4],
                [-1.4, -0.784, 2.4],
                [-1.4, 0.0, 2.4]
            ],
            [
                [0.0, -1.3375, 2.53125],
                [-0.749, -1.3375, 2.53125],
                [-1.3375, -0.749, 2.53125],
                [-1.3375, 0.0, 2.53125]
            ],
            [
                [0.0, -1.4375, 2.53125],
                [-0.805, -1.4375, 2.53125],
                [-1.4375, -0.805, 2.53125],
                [-1.4375, 0.0, 2.53125]
            ],
            [
                [0.0, -1.5, 2.4],
                [-0.84, -1.5, 2.4],
                [-1.5, -0.84, 2.4],
                [-1.5, 0.0, 2.4]
            ]
        ],
	[    // 2
            [
                [-1.4, 0.0, 2.4],
                [-1.4, 0.784, 2.4],
                [-0.784, 1.4, 2.4],
                [0.0, 1.4, 2.4]
            ],
            [
                [-1.3375, 0.0, 2.53125],
                [-1.3375, 0.749, 2.53125],
                [-0.749, 1.3375, 2.53125],
                [0.0, 1.3375, 2.53125]
            ],
            [
                [-1.4375, 0.0, 2.53125],
                [-1.4375, 0.805, 2.53125],
                [-0.805, 1.4375, 2.53125],
                [0.0, 1.4375, 2.53125]
            ],
            [
                [-1.5, 0.0, 2.4],
                [-1.5, 0.84, 2.4],
                [-0.84, 1.5, 2.4],
                [0.0, 1.5, 2.4]
            ]
        ],
	[    // 3
            [
                [0.0, 1.4, 2.4],
                [0.784, 1.4, 2.4],
                [1.4, 0.784, 2.4],
                [1.4, 0.0, 2.4]
            ],
            [
                [0.0, 1.3375, 2.53125],
                [0.749, 1.3375, 2.53125],
                [1.3375, 0.749, 2.53125],
                [1.3375, 0.0, 2.53125]
            ],
            [
                [0.0, 1.4375, 2.53125],
                [0.805, 1.4375, 2.53125],
                [1.4375, 0.805, 2.53125],
                [1.4375, 0.0, 2.53125]
            ],
            [
                [0.0, 1.5, 2.4],
                [0.84, 1.5, 2.4],
                [1.5, 0.84, 2.4],
                [1.5, 0.0, 2.4]
            ]
        ],
	[    // 4
            [
                [1.5, 0.0, 2.4],
                [1.5, -0.84, 2.4],
                [0.84, -1.5, 2.4],
                [0.0, -1.5, 2.4]
            ],
            [
                [1.75, 0.0, 1.875],
                [1.75, -0.98, 1.875],
                [0.98, -1.75, 1.875],
                [0.0, -1.75, 1.875]
            ],
            [
                [2.0, 0.0, 1.35],
                [2.0, -1.12, 1.35],
                [1.12, -2.0, 1.35],
                [0.0, -2.0, 1.35]
            ],
            [
                [2.0, 0.0, 0.9],
                [2.0, -1.12, 0.9],
                [1.12, -2.0, 0.9],
                [0.0, -2.0, 0.9]
            ]
        ],
	[    // 5
            [
                [0.0, -1.5, 2.4],
                [-0.84, -1.5, 2.4],
                [-1.5, -0.84, 2.4],
                [-1.5, 0.0, 2.4]
            ],
            [
                [0.0, -1.75, 1.875],
                [-0.98, -1.75, 1.875],
                [-1.75, -0.98, 1.875],
                [-1.75, 0.0, 1.875]
            ],
            [
                [0.0, -2.0, 1.35],
                [-1.12, -2.0, 1.35],
                [-2.0, -1.12, 1.35],
                [-2.0, 0.0, 1.35]
            ],
            [
                [0.0, -2.0, 0.9],
                [-1.12, -2.0, 0.9],
                [-2.0, -1.12, 0.9],
                [-2.0, 0.0, 0.9]
            ]
        ],
	[    // 6
            [
                [-1.5, 0.0, 2.4],
                [-1.5, 0.84, 2.4],
                [-0.84, 1.5, 2.4],
                [0.0, 1.5, 2.4]
            ],
            [
                [-1.75, 0.0, 1.875],
                [-1.75, 0.98, 1.875],
                [-0.98, 1.75, 1.875],
                [0.0, 1.75, 1.875]
            ],
            [
                [-2.0, 0.0, 1.35],
                [-2.0, 1.12, 1.35],
                [-1.12, 2.0, 1.35],
                [0.0, 2.0, 1.35]
            ],
            [
                [-2.0, 0.0, 0.9],
                [-2.0, 1.12, 0.9],
                [-1.12, 2.0, 0.9],
                [0.0, 2.0, 0.9]
            ]
        ],
	[    // 7
            [
                [0.0, 1.5, 2.4],
                [0.84, 1.5, 2.4],
                [1.5, 0.84, 2.4],
                [1.5, 0.0, 2.4]
            ],
            [
                [0.0, 1.75, 1.875],
                [0.98, 1.75, 1.875],
                [1.75, 0.98, 1.875],
                [1.75, 0.0, 1.875]
            ],
            [
                [0.0, 2.0, 1.35],
                [1.12, 2.0, 1.35],
                [2.0, 1.12, 1.35],
                [2.0, 0.0, 1.35]
            ],
            [
                [0.0, 2.0, 0.9],
                [1.12, 2.0, 0.9],
                [2.0, 1.12, 0.9],
                [2.0, 0.0, 0.9]
            ]
        ],
	[    // 8
            [
                [2.0, 0.0, 0.9],
                [2.0, -1.12, 0.9],
                [1.12, -2.0, 0.9],
                [0.0, -2.0, 0.9]
            ],
            [
                [2.0, 0.0, 0.45],
                [2.0, -1.12, 0.45],
                [1.12, -2.0, 0.45],
                [0.0, -2.0, 0.45]
            ],
            [
                [1.5, 0.0, 0.225],
                [1.5, -0.84, 0.225],
                [0.84, -1.5, 0.225],
                [0.0, -1.5, 0.225]
            ],
            [
                [1.5, 0.0, 0.15],
                [1.5, -0.84, 0.15],
                [0.84, -1.5, 0.15],
                [0.0, -1.5, 0.15]
            ]
        ],
	[    // 9
            [
                [0.0, -2.0, 0.9],
                [-1.12, -2.0, 0.9],
                [-2.0, -1.12, 0.9],
                [-2.0, 0.0, 0.9]
            ],
            [
                [0.0, -2.0, 0.45],
                [-1.12, -2.0, 0.45],
                [-2.0, -1.12, 0.45],
                [-2.0, 0.0, 0.45]
            ],
            [
                [0.0, -1.5, 0.225],
                [-0.84, -1.5, 0.225],
                [-1.5, -0.84, 0.225],
                [-1.5, 0.0, 0.225]
            ],
            [
                [0.0, -1.5, 0.15],
                [-0.84, -1.5, 0.15],
                [-1.5, -0.84, 0.15],
                [-1.5, 0.0, 0.15]
            ]
        ],
	[    // 10
            [
                [-2.0, 0.0, 0.9],
                [-2.0, 1.12, 0.9],
                [-1.12, 2.0, 0.9],
                [0.0, 2.0, 0.9]
            ],
            [
                [-2.0, 0.0, 0.45],
                [-2.0, 1.12, 0.45],
                [-1.12, 2.0, 0.45],
                [0.0, 2.0, 0.45]
            ],
            [
                [-1.5, 0.0, 0.225],
                [-1.5, 0.84, 0.225],
                [-0.84, 1.5, 0.225],
                [0.0, 1.5, 0.225]
            ],
            [
                [-1.5, 0.0, 0.15],
                [-1.5, 0.84, 0.15],
                [-0.84, 1.5, 0.15],
                [0.0, 1.5, 0.15]
            ]
        ],
	[    // 11
            [
                [0.0, 2.0, 0.9],
                [1.12, 2.0, 0.9],
                [2.0, 1.12, 0.9],
                [2.0, 0.0, 0.9]
            ],
            [
                [0.0, 2.0, 0.45],
                [1.12, 2.0, 0.45],
                [2.0, 1.12, 0.45],
                [2.0, 0.0, 0.45]
            ],
            [
                [0.0, 1.5, 0.225],
                [0.84, 1.5, 0.225],
                [1.5, 0.84, 0.225],
                [1.5, 0.0, 0.225]
            ],
            [
                [0.0, 1.5, 0.15],
                [0.84, 1.5, 0.15],
                [1.5, 0.84, 0.15],
                [1.5, 0.0, 0.15]
            ]
        ],
	[    // 12
            [
                [-1.6, 0.0, 2.025],
                [-1.6, -0.3, 2.025],
                [-1.5, -0.3, 2.25],
                [-1.5, 0.0, 2.25]
            ],
            [
                [-2.3, 0.0, 2.025],
                [-2.3, -0.3, 2.025],
                [-2.5, -0.3, 2.25],
                [-2.5, 0.0, 2.25]
            ],
            [
                [-2.7, 0.0, 2.025],
                [-2.7, -0.3, 2.025],
                [-3.0, -0.3, 2.25],
                [-3.0, 0.0, 2.25]
            ],
            [
                [-2.7, 0.0, 1.8],
                [-2.7, -0.3, 1.8],
                [-3.0, -0.3, 1.8],
                [-3.0, 0.0, 1.8]
            ]
        ],
	[    // 13
            [
                [-1.5, 0.0, 2.25],
                [-1.5, 0.3, 2.25],
                [-1.6, 0.3, 2.025],
                [-1.6, 0.0, 2.025]
            ],
            [
                [-2.5, 0.0, 2.25],
                [-2.5, 0.3, 2.25],
                [-2.3, 0.3, 2.025],
                [-2.3, 0.0, 2.025]
            ],
            [
                [-3.0, 0.0, 2.25],
                [-3.0, 0.3, 2.25],
                [-2.7, 0.3, 2.025],
                [-2.7, 0.0, 2.025]
            ],
            [
                [-3.0, 0.0, 1.8],
                [-3.0, 0.3, 1.8],
                [-2.7, 0.3, 1.8],
                [-2.7, 0.0, 1.8]
            ]
        ],
	[    // 14
            [
                [-2.7, 0.0, 1.8],
                [-2.7, -0.3, 1.8],
                [-3.0, -0.3, 1.8],
                [-3.0, 0.0, 1.8]
            ],
            [
                [-2.7, 0.0, 1.575],
                [-2.7, -0.3, 1.575],
                [-3.0, -0.3, 1.35],
                [-3.0, 0.0, 1.35]
            ],
            [
                [-2.5, 0.0, 1.125],
                [-2.5, -0.3, 1.125],
                [-2.65, -0.3, 0.9375],
                [-2.65, 0.0, 0.9375]
            ],
            [
                [-2.0, 0.0, 0.9],
                [-2.0, -0.3, 0.9],
                [-1.9, -0.3, 0.6],
                [-1.9, 0.0, 0.6]
            ]
        ],
	[    // 15
            [
                [-3.0, 0.0, 1.8],
                [-3.0, 0.3, 1.8],
                [-2.7, 0.3, 1.8],
                [-2.7, 0.0, 1.8]
            ],
            [
                [-3.0, 0.0, 1.35],
                [-3.0, 0.3, 1.35],
                [-2.7, 0.3, 1.575],
                [-2.7, 0.0, 1.575]
            ],
            [
                [-2.65, 0.0, 0.9375],
                [-2.65, 0.3, 0.9375],
                [-2.5, 0.3, 1.125],
                [-2.5, 0.0, 1.125]
            ],
            [
                [-1.9, 0.0, 0.6],
                [-1.9, 0.3, 0.6],
                [-2.0, 0.3, 0.9],
                [-2.0, 0.0, 0.9]
            ]
        ],
	[    // 16
            [
                [1.7, 0.0, 1.425],
                [1.7, -0.66, 1.425],
                [1.7, -0.66, 0.6],
                [1.7, 0.0, 0.6]
            ],
            [
                [2.6, 0.0, 1.425],
                [2.6, -0.66, 1.425],
                [3.1, -0.66, 0.825],
                [3.1, 0.0, 0.825]
            ],
            [
                [2.3, 0.0, 2.1],
                [2.3, -0.25, 2.1],
                [2.4, -0.25, 2.025],
                [2.4, 0.0, 2.025]
            ],
            [
                [2.7, 0.0, 2.4],
                [2.7, -0.25, 2.4],
                [3.3, -0.25, 2.4],
                [3.3, 0.0, 2.4]
            ]
        ],
	[    // 17
            [
                [1.7, 0.0, 0.6],
                [1.7, 0.66, 0.6],
                [1.7, 0.66, 1.425],
                [1.7, 0.0, 1.425]
            ],
            [
                [3.1, 0.0, 0.825],
                [3.1, 0.66, 0.825],
                [2.6, 0.66, 1.425],
                [2.6, 0.0, 1.425]
            ],
            [
                [2.4, 0.0, 2.025],
                [2.4, 0.25, 2.025],
                [2.3, 0.25, 2.1],
                [2.3, 0.0, 2.1]
            ],
            [
                [3.3, 0.0, 2.4],
                [3.3, 0.25, 2.4],
                [2.7, 0.25, 2.4],
                [2.7, 0.0, 2.4]
            ]
        ],
	[    // 18
            [
                [2.7, 0.0, 2.4],
                [2.7, -0.25, 2.4],
                [3.3, -0.25, 2.4],
                [3.3, 0.0, 2.4]
            ],
            [
                [2.8, 0.0, 2.475],
                [2.8, -0.25, 2.475],
                [3.525, -0.25, 2.49375],
                [3.525, 0.0, 2.49375]
            ],
            [
                [2.9, 0.0, 2.475],
                [2.9, -0.15, 2.475],
                [3.45, -0.15, 2.5125],
                [3.45, 0.0, 2.5125]
            ],
            [
                [2.8, 0.0, 2.4],
                [2.8, -0.15, 2.4],
                [3.2, -0.15, 2.4],
                [3.2, 0.0, 2.4]
            ]
        ],
	[    // 19
            [
                [3.3, 0.0, 2.4],
                [3.3, 0.25, 2.4],
                [2.7, 0.25, 2.4],
                [2.7, 0.0, 2.4]
            ],
            [
                [3.525, 0.0, 2.49375],
                [3.525, 0.25, 2.49375],
                [2.8, 0.25, 2.475],
                [2.8, 0.0, 2.475]
            ],
            [
                [3.45, 0.0, 2.5125],
                [3.45, 0.15, 2.5125],
                [2.9, 0.15, 2.475],
                [2.9, 0.0, 2.475]
            ],
            [
                [3.2, 0.0, 2.4],
                [3.2, 0.15, 2.4],
                [2.8, 0.15, 2.4],
                [2.8, 0.0, 2.4]
            ]
        ],
	[    // 20
            [
                [0.0, 0.0, 3.15],
                [0.0, 0.0, 3.15],
                [0.0, 0.0, 3.15],
                [0.0, 0.0, 3.15]
            ],
            [
                [0.8, 0.0, 3.15],
                [0.8, -0.45, 3.15],
                [0.45, -0.8, 3.15],
                [0.0, -0.8, 3.15]
            ],
            [
                [0.0, 0.0, 2.85],
                [0.0, 0.0, 2.85],
                [0.0, 0.0, 2.85],
                [0.0, 0.0, 2.85]
            ],
            [
                [0.2, 0.0, 2.7],
                [0.2, -0.112, 2.7],
                [0.112, -0.2, 2.7],
                [0.0, -0.2, 2.7]
            ]
        ],
	[    // 21
            [
                [0.0, 0.0, 3.15],
                [0.0, 0.0, 3.15],
                [0.0, 0.0, 3.15],
                [0.0, 0.0, 3.15]
            ],
            [
                [0.0, -0.8, 3.15],
                [-0.45, -0.8, 3.15],
                [-0.8, -0.45, 3.15],
                [-0.8, 0.0, 3.15]
            ],
            [
                [0.0, 0.0, 2.85],
                [0.0, 0.0, 2.85],
                [0.0, 0.0, 2.85],
                [0.0, 0.0, 2.85]
            ],
            [
                [0.0, -0.2, 2.7],
                [-0.112, -0.2, 2.7],
                [-0.2, -0.112, 2.7],
                [-0.2, 0.0, 2.7]
            ]
        ],
	[    // 22
            [
                [0.0, 0.0, 3.15],
                [0.0, 0.0, 3.15],
                [0.0, 0.0, 3.15],
                [0.0, 0.0, 3.15]
            ],
            [
                [-0.8, 0.0, 3.15],
                [-0.8, 0.45, 3.15],
                [-0.45, 0.8, 3.15],
                [0.0, 0.8, 3.15]
            ],
            [
                [0.0, 0.0, 2.85],
                [0.0, 0.0, 2.85],
                [0.0, 0.0, 2.85],
                [0.0, 0.0, 2.85]
            ],
            [
                [-0.2, 0.0, 2.7],
                [-0.2, 0.112, 2.7],
                [-0.112, 0.2, 2.7],
                [0.0, 0.2, 2.7]
            ]
        ],
	[    // 23
            [
                [0.0, 0.0, 3.15],
                [0.0, 0.0, 3.15],
                [0.0, 0.0, 3.15],
                [0.0, 0.0, 3.15]
            ],
            [
                [0.0, 0.8, 3.15],
                [0.45, 0.8, 3.15],
                [0.8, 0.45, 3.15],
                [0.8, 0.0, 3.15]
            ],
            [
                [0.0, 0.0, 2.85],
                [0.0, 0.0, 2.85],
                [0.0, 0.0, 2.85],
                [0.0, 0.0, 2.85]
            ],
            [
                [0.0, 0.2, 2.7],
                [0.112, 0.2, 2.7],
                [0.2, 0.112, 2.7],
                [0.2, 0.0, 2.7]
            ]
        ],
	[    // 24
            [
                [0.2, 0.0, 2.7],
                [0.2, -0.112, 2.7],
                [0.112, -0.2, 2.7],
                [0.0, -0.2, 2.7]
            ],
            [
                [0.4, 0.0, 2.55],
                [0.4, -0.224, 2.55],
                [0.224, -0.4, 2.55],
                [0.0, -0.4, 2.55]
            ],
            [
                [1.3, 0.0, 2.55],
                [1.3, -0.728, 2.55],
                [0.728, -1.3, 2.55],
                [0.0, -1.3, 2.55]
            ],
            [
                [1.3, 0.0, 2.4],
                [1.3, -0.728, 2.4],
                [0.728, -1.3, 2.4],
                [0.0, -1.3, 2.4]
            ]
        ],
	[    // 25
            [
                [0.0, -0.2, 2.7],
                [-0.112, -0.2, 2.7],
                [-0.2, -0.112, 2.7],
                [-0.2, 0.0, 2.7]
            ],
            [
                [0.0, -0.4, 2.55],
                [-0.224, -0.4, 2.55],
                [-0.4, -0.224, 2.55],
                [-0.4, 0.0, 2.55]
            ],
            [
                [0.0, -1.3, 2.55],
                [-0.728, -1.3, 2.55],
                [-1.3, -0.728, 2.55],
                [-1.3, 0.0, 2.55]
            ],
            [
                [0.0, -1.3, 2.4],
                [-0.728, -1.3, 2.4],
                [-1.3, -0.728, 2.4],
                [-1.3, 0.0, 2.4]
            ]
        ],
	[    // 26
            [
                [-0.2, 0.0, 2.7],
                [-0.2, 0.112, 2.7],
                [-0.112, 0.2, 2.7],
                [0.0, 0.2, 2.7]
            ],
            [
                [-0.4, 0.0, 2.55],
                [-0.4, 0.224, 2.55],
                [-0.224, 0.4, 2.55],
                [0.0, 0.4, 2.55]
            ],
            [
                [-1.3, 0.0, 2.55],
                [-1.3, 0.728, 2.55],
                [-0.728, 1.3, 2.55],
                [0.0, 1.3, 2.55]
            ],
            [
                [-1.3, 0.0, 2.4],
                [-1.3, 0.728, 2.4],
                [-0.728, 1.3, 2.4],
                [0.0, 1.3, 2.4]
            ]
        ],
	[    // 27
            [
                [0.0, 0.2, 2.7],
                [0.112, 0.2, 2.7],
                [0.2, 0.112, 2.7],
                [0.2, 0.0, 2.7]
            ],
            [
                [0.0, 0.4, 2.55],
                [0.224, 0.4, 2.55],
                [0.4, 0.224, 2.55],
                [0.4, 0.0, 2.55]
            ],
            [
                [0.0, 1.3, 2.55],
                [0.728, 1.3, 2.55],
                [1.3, 0.728, 2.55],
                [1.3, 0.0, 2.55]
            ],
            [
                [0.0, 1.3, 2.4],
                [0.728, 1.3, 2.4],
                [1.3, 0.728, 2.4],
                [1.3, 0.0, 2.4]
            ]
        ],
	[    // 28
            [
                [0.0, 0.0, 0.0],
                [0.0, 0.0, 0.0],
                [0.0, 0.0, 0.0],
                [0.0, 0.0, 0.0]
            ],
            [
                [1.425, 0.0, 0.0],
                [1.425, 0.798, 0.0],
                [0.798, 1.425, 0.0],
                [0.0, 1.425, 0.0]
            ],
            [
                [1.5, 0.0, 0.075],
                [1.5, 0.84, 0.075],
                [0.84, 1.5, 0.075],
                [0.0, 1.5, 0.075]
            ],
            [
                [1.5, 0.0, 0.15],
                [1.5, 0.84, 0.15],
                [0.84, 1.5, 0.15],
                [0.0, 1.5, 0.15]
            ]
        ],
	[    // 29
            [
                [0.0, 0.0, 0.0],
                [0.0, 0.0, 0.0],
                [0.0, 0.0, 0.0],
                [0.0, 0.0, 0.0]
            ],
            [
                [0.0, 1.425, 0.0],
                [-0.798, 1.425, 0.0],
                [-1.425, 0.798, 0.0],
                [-1.425, 0.0, 0.0]
            ],
            [
                [0.0, 1.5, 0.075],
                [-0.84, 1.5, 0.075],
                [-1.5, 0.84, 0.075],
                [-1.5, 0.0, 0.075]
            ],
            [
                [0.0, 1.5, 0.15],
                [-0.84, 1.5, 0.15],
                [-1.5, 0.84, 0.15],
                [-1.5, 0.0, 0.15]
            ]
        ],
	[    // 30
            [
                [0.0, 0.0, 0.0],
                [0.0, 0.0, 0.0],
                [0.0, 0.0, 0.0],
                [0.0, 0.0, 0.0]
            ],
            [
                [-1.425, 0.0, 0.0],
                [-1.425, -0.798, 0.0],
                [-0.798, -1.425, 0.0],
                [0.0, -1.425, 0.0]
            ],
            [
                [-1.5, 0.0, 0.075],
                [-1.5, -0.84, 0.075],
                [-0.84, -1.5, 0.075],
                [0.0, -1.5, 0.075]
            ],
            [
                [-1.5, 0.0, 0.15],
                [-1.5, -0.84, 0.15],
                [-0.84, -1.5, 0.15],
                [0.0, -1.5, 0.15]
            ]
        ],
	[    // 31
            [
                [0.0, 0.0, 0.0],
                [0.0, 0.0, 0.0],
                [0.0, 0.0, 0.0],
                [0.0, 0.0, 0.0]
            ],
            [
                [0.0, -1.425, 0.0],
                [0.798, -1.425, 0.0],
                [1.425, -0.798, 0.0],
                [1.425, 0.0, 0.0]
            ],
            [
                [0.0, -1.5, 0.075],
                [0.84, -1.5, 0.075],
                [1.5, -0.84, 0.075],
                [1.5, 0.0, 0.075]
            ],
            [
                [0.0, -1.5, 0.15],
                [0.84, -1.5, 0.15],
                [1.5, -0.84, 0.15],
                [1.5, 0.0, 0.15]
            ]
        ]
    ];
}

function evaluatePatch(cpts, nr, nc) {
    let vertices = new Float32Array(nr*nc*3);
    let normals = new Float32Array(nr*nc*3);

    let pt = vec3.create();
    let t1 = vec3.create();
    let t2 = vec3.create();

    const ptmp = vec3.create();
    const t1tmp = vec3.create();
    const t2tmp = vec3.create();

    for (let r = 0; r < nr; r++) {
        const v = r / (nr-1);
        const v2 = v * v;
        const v3 = v * v2;
        const mv = 1 - v;
        const mv2 = mv * mv;
        const mv3 = mv * mv2;

        const vp = [ mv3, 3*mv2*v, 3*mv*v2, v3];
	const dv = [-3 + 6*v - 3*v2,
		    3 * (1 - 4*v + 3*v2),
		    3 * (2*v - 3*v2),
		    3 * v2];

        for (let c = 0; c < nc; c++) {
            const u = c / (nc-1);
            const u2 = u * u;
            const u3 = u * u2;
            const mu = 1 - u;
            const mu2 = mu * mu;
            const mu3 = mu * mu2;

            const up = [ mu3, 3*mu2*u, 3*mu*u2, u3];
            const du = [-3 + 6*u - 3*u2,
			3 * (1 - 4*u + 3*u2),
			3 * (2*u - 3*u2),
			3 * u2];

            const w = [ [ up[0]*vp[0], up[1]*vp[0], up[2]*vp[0], up[3]*vp[0] ],
                        [ up[0]*vp[1], up[1]*vp[1], up[2]*vp[1], up[3]*vp[1] ],
                        [ up[0]*vp[2], up[1]*vp[2], up[2]*vp[2], up[3]*vp[2] ],
                        [ up[0]*vp[3], up[1]*vp[3], up[2]*vp[3], up[3]*vp[3] ] ];

            const dwdv = [ [ du[0]*vp[0], du[1]*vp[0], du[2]*vp[0], du[3]*vp[0] ],
                           [ du[0]*vp[1], du[1]*vp[1], du[2]*vp[1], du[3]*vp[1] ],
                           [ du[0]*vp[2], du[1]*vp[2], du[2]*vp[2], du[3]*vp[2] ],
                           [ du[0]*vp[3], du[1]*vp[3], du[2]*vp[3], du[3]*vp[3] ] ];

            const dwdu = [ [ up[0]*dv[0], up[1]*dv[0], up[2]*dv[0], up[3]*dv[0] ],
                           [ up[0]*dv[1], up[1]*dv[1], up[2]*dv[1], up[3]*dv[1] ],
                           [ up[0]*dv[2], up[1]*dv[2], up[2]*dv[2], up[3]*dv[2] ],
                           [ up[0]*dv[3], up[1]*dv[3], up[2]*dv[3], up[3]*dv[3] ] ];

	    vec3.zero(pt);
	    vec3.zero(t1);
	    vec3.zero(t2);
            for (let a = 0; a < 4; a++) {
                for (let b = 0; b < 4; b++) {
		    vec3.scale(ptmp, cpts[a][b], w[a][b]);
		    vec3.add(pt, pt, ptmp);

		    vec3.scale(t1tmp, cpts[a][b], dwdv[a][b]);
		    vec3.add(t1, t1, t1tmp);

		    vec3.scale(t2tmp, cpts[a][b], dwdu[a][b]);
		    vec3.add(t2, t2, t2tmp);
                }
            }
	    vertices.set(pt, (r*nc + c) * 3);

	    vec3.normalize(t1, t1);
	    vec3.normalize(t2, t2);

	    let n = vec3.create();
	    vec3.cross(n, t2, t1);
	    vec3.normalize(n, n);
	    normals.set(n, (r*nc+c) * 3);
        }
    }

    let indices = new Int16Array(2 * 3 * (nr - 1) * (nc - 1));
    for (let r = 0; r < nr-1; r++) {
	for (let c = 0; c < nc-1; c++) {
	    indices[6*(r*(nc-1) + c) + 0] = r*nc + c;
	    indices[6*(r*(nc-1) + c) + 1] = r*nc + c + 1;
	    indices[6*(r*(nc-1) + c) + 2] = (r+1)*nc + c + 1;

	    indices[6*(r*(nc-1) + c) + 3] = r*nc + c;
	    indices[6*(r*(nc-1) + c) + 4] = (r+1)*nc + c + 1;
	    indices[6*(r*(nc-1) + c) + 5] = (r+1)*nc + c;
	}
    }

    return { vertices: vertices,
	     normals: normals,
	     indices: indices };
}

function generateTeapot(nr, nc) {
    const numPatches = 32;
    let retval = {
	vertices: new Float32Array(numPatches*nr*nc*3),
	normals: new Float32Array(numPatches*nr*nc*3),
	indices: new Int16Array(numPatches*(nr-1)*(nc-1)*6)
    };

    const cpts = getControlPoints();
    for (let i = 0; i < 32; i++) {
        const pts = evaluatePatch(cpts[i], nr, nc);
	retval.vertices.set(pts.vertices, i*nr*nc*3);
	retval.normals.set(pts.normals, i*nr*nc*3);

	const src_offset = i*nr*nc;
	const dst_offset = i*(nr-1)*(nc-1)*6;
	for (let j = 0; j < pts.indices.length; j++) {
	    retval.indices[dst_offset+j] = pts.indices[j] + src_offset;
	}
    }
    return retval;
}

function getGeometry(gl) {

    const x = generateTeapot(10, 13);

    return {
        vertices: x.vertices,
    	numComponents: 3,
        numVertices: x.vertices.length/3,
    	normals: x.normals,
    	indices: x.indices,
    	numTriangles: x.indices.length/3
    };
}

module.exports = { getGeometry, getControlPoints, generateTeapot, evaluatePatch };
