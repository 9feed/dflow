---
title: Examples
---

# Examples

List of example graphs:

[![helloWorld_SVG]][helloWorld]
[![apply_SVG]][apply]
[![indexOf_SVG]][indexOf]
[![loadScriptJS_SVG]][loadScriptJS]
[![sum_SVG]][sum]

<!--
* [createParagraph](http://g14n.info/dflow/examples/createParagraph.html)
* [dateParse](http://g14n.info/dflow/examples/dateParse.html)
* [dotOperator](http://g14n.info/dflow/examples/dotOperator.html)
* [new](http://g14n.info/dflow/examples/new.html)
* [or](http://g14n.info/dflow/examples/or.html)
* [welcome](http://g14n.info/dflow/examples/welcome.html)
-->

## D3 hello world

An example of dflow using d3, just to write an hello world is in the [examples/d3](https://github.com/fibo/dflow/tree/master/src/examples/d3) folder.

**TODO** extract the graph from the index.html source and make it visible and editable.

## RequireBin

An example of *dflow* in a browser context, testing DOM manipulation.

[![view on requirebin](http://requirebin.com/badge.png)](http://requirebin.com/?gist=45520011e093d6dfec9f)

## Stream playground

[Node.js Stream Playground](http://ejohn.org/blog/node-js-stream-playground/) first example is

```js
var fs = require("fs");

// Read File
fs.createReadStream("input/people.json")
    // Write File
    .pipe(fs.createWriteStream("output/people.json"));
```

It is ported to script [stream.js](https://github.com/fibo/dflow/blob/master/src/examples/stream-playground/stream.js) which evaluates [graph stream.json](https://github.com/fibo/dflow/blob/master/src/examples/stream-playground/stream.json) using [few custom functions](https://github.com/fibo/dflow/blob/master/src/examples/stream-playground/funcs.js).

## Packaged graph

The main advantage of *dflow* design is that you do not need to write components or plugins to extend it. You can use one of the most powerful JavaScript features: functions. Write your functions or import them from other packages like *JQuery* or *underscore* and you are able to use them as *tasks* and connect them with *pipes*.

Also every *dflow* graph is a function itself, so why not packaging it and put it on [npm](https://npm.im)!?

It is really easy: create your *dflow* graph and save it to a JSON file, *index.json* for instance; then launch `npm init` as usual and when prompted for the *entry point* write *index.json*.

Simple as that, see [npm-package-minimal](https://github.com/fibo/dflow/tree/master/src/examples/packages/npm-package-minimal) as an example.

For a more complete example, see [npm-package-template](https://github.com/fibo/dflow/tree/master/src/examples/packages/npm-package-template).

[helloWorld]: http://g14n.info/dflow/examples/hello-world.html "Hello World"
[apply]: http://g14n.info/dflow/examples/apply.html "apply"
[indexOf]: http://g14n.info/dflow/examples/index-of.html "indexOf"
[loadScriptJS]: http://g14n.info/dflow/examples/load-script-js.html "loadScriptJS"
[sum]: http://g14n.info/dflow/examples/sum.html "sum"

[helloWorld_SVG]: http://g14n.info/dflow/svg/hello-world.svg
[apply_SVG]: http://g14n.info/dflow/svg/apply.svg
[indexOf_SVG]: http://g14n.info/dflow/svg/indexOf.svg
[loadScriptJS_SVG]: http://g14n.info/dflow/svg/loadScriptJS.svg
[sum_SVG]: http://g14n.info/dflow/svg/sum.svg
