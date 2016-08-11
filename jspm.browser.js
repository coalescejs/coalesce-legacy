SystemJS.config({
  baseURL: "/",
  production: false,
  paths: {
    "coalesce-legacy-tests/": "tests/",
    "coalesce-legacy/": "src/",
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  }
});
