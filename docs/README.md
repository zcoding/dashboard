# Introduction

Dashboard is a ui framework for developing dashboard sites(administration projects) on the web.

## Installation

which version ?

Dashboard has 3 types of versions: jQuery version, React version and Vue.js version.Choose the best version for your project.

### jQuery version
To install the jQuery version dashboard, you need to download the dist files in the release page, or just download the master branch from github and build your own dist files.

Then you can use it just like other frameworks like Bootstrap.

```html
<head>
  <link rel="stylesheet" href="/path/to/dashboard.min.css">
</head>
<body>
  <script src="/path/to/lib/jquery.js"></script>
  <script src="/path/to/dashboard.min.js"></script>
</body>
```

Notice:

1. You must have jQuery included in your project if you are using the jQuery version.
2. This project use font-awesome that the release dist files will not include, so if you need to include font-awesome if you want it.
3. The code syntax highlight plugin is not included neigther.

### React version

[React version](https://github.com/zcoding/dashboard-react)

`npm install dashboard-react`

You can use dashboard as components in your React projects.

### Vue.js version

[Vue.js version](https://github.com/zcoding/dashboard-vue)

`npm install dashboard-vue`

You can use dashboard as components in your Vue.js projects.
