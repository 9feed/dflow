---
title: dflow
---
# dflow

> is a minimal [Dataflow programming][dataflow-wikipedia] engine

[Installation](#installation) |
[Examples] |
[CLI] |
[Editor][editor] |
[API] |
[Specification][specification] |
[Support and license](#support-and-license)

**Quick start**: start editing your first graph! With [npx](https://www.npmjs.com/package/npx) launch

```bash
npx dflow -o
```

[![NPM version](https://badge.fury.io/js/dflow.svg)](http://badge.fury.io/js/dflow)
[![Build Status](https://travis-ci.org/fibo/dflow.svg?branch=master)](https://travis-ci.org/fibo/dflow?branch=master)
[![Dependency Status](https://david-dm.org/fibo/dflow.svg)](https://david-dm.org/fibo/dflow)
[![Coverage Status](https://coveralls.io/repos/fibo/dflow/badge.svg?branch=master)](https://coveralls.io/r/fibo/dflow?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![CDNJS version](https://img.shields.io/cdnjs/v/dflow.svg)](https://cdnjs.com/libraries/dflow)

[![Whatchers](http://g14n.info/svg/github/watchers/dflow.svg)](https://github.com/fibo/dflow/watchers) [![Stargazers](http://g14n.info/svg/github/stars/dflow.svg)](https://github.com/fibo/dflow/stargazers) [![Forks](http://g14n.info/svg/github/forks/dflow.svg)](https://github.com/fibo/dflow/network/members)

[![Join the chat at https://gitter.im/fibo/dflow](https://badges.gitter.im/fibo/dflow.svg)](https://gitter.im/fibo/dflow?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Hello world

The following simple graph is executed client side by *dflow* engine.

[![Hello World](http://g14n.info/dflow/svg/hello-world.svg)][hello-world]

## Installation

### Client side

> Client distribution contains just the engine.

[![Badge size](https://badge-size.herokuapp.com/fibo/dflow/master/dist/dflow.min.js)](https://github.com/fibo/dflow/blob/master/dist/dflow.min.js)

You can use RawGit CDN, add this to your HTML page

```html
<script src="https://cdn.rawgit.com/fibo/dflow/master/dist/dflow.min.js"></script>
```

If you want to get a specific dflow engine version, you can get it also on [CDNJS]!
Awesome thanks to [LboAnn](https://github.com/extend1994) and [Peter Dave Hello](https://github.com/PeterDaveHello). 多謝

### Server side

If you are new to *dflow*, you probably want to try the [editor], so you need to install globally to get *dflow* cli in your path.
With [npm](https://npmjs.org/) do

```bash
npm install dflow -g
```

However, if you need to require the *dflow* engine in your package, or you need to browserify it, or even you want to use the *dflow* cli in your npm scripts, or whatever, you can install *dflow* locally with

```bash
npm install dflow
```

## Support and License

*dflow* is [MIT](http://g14n.info/mit-license) licensed, yes you can use it to build a product on top of it!

I wrote few times a [Dataflow engine][dataflow-wikipedia], the first one was PNI (Perl Node Interface) and the design evolved until I could say confidently that **dflow is here to stay**.

Use cases I can think about *dflow* right now are many, but, the possibilities are I.M.H.O. outstanding: from client to server, from JavaScript to cross language, from mono-thread to graphs distributed on a network using AWS Lambda and, above all, from skilled programmer who implement functions … to artists, genetic engineers, data scientists, etc. that use those functions to create *dflow* graphs and get results nobody could even imagine.

If this is also your vision or you just want to use *dflow*, [contact me](http://g14n.info).

My goal is to say to a *dflow* user:

> Mamma mia! Did you achieve that with dflow?

[API]: http://g14n.info/dflow/api "dflow API"
[CDNJS]: https://cdnjs.com/libraries/dflow "dflow on CDNJS"
[dataflow-wikipedia]: http://en.wikipedia.org/wiki/Dataflow_programming "Dataflow programming"
[CLI]: http://g14n.info/dflow/cli "dflow CLI"
[editor]: http://g14n.info/dflow/cli#edit "dflow editor"
[Examples]: http://g14n.info/dflow/examples "dflow examples"
[specification]: http://g14n.info/dflow/specification "dflow specification"
[hello-world]: http://g14n.info/dflow/examples/hello-world.html "Hello World"

