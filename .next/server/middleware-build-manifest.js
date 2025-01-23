self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/math": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/math.js"
    ],
    "/mathbooks": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/mathbooks.js"
    ],
    "/mathmodelpapers": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/mathmodelpapers.js"
    ],
    "/mathpractice": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/mathpractice.js"
    ],
    "/science": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/science.js"
    ],
    "/sciencepractice": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/sciencepractice.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];