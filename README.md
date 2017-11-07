# Browserify / Tangram boilerplate

This is a minimal boilerplate for using [Tangram](https://github.com/tangrams/tangram) in a bundled JavaScript application with [Browserify](http://browserify.org/).

To try this out, clone this repository to your local environment, then run:

```sh
cd browserify-tangram-boilerplate
npm install
npm run build
```

This will create a Browserify bundle in `./public/scripts/app.js`.

Then run:

```sh
npm start
```

This will create a local web server so that you can observe the app in action. You can open it in your browser at `http://localhost:8080`.

The JavaScript tooling and build chain ecosystem can be very complex. This demonstration is designed to show the most minimum possible end-to-end flow from raw code to working website, using only Browserify as a dependency. Your own preferred workflow may include other tools, preprocessors, etc.
