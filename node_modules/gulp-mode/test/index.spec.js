'use strict';

describe("gulp-mode test suite with default options", function () {
  it("default options, no NODE_ENV, no CLI argument -> production() == noop, development() == child", function () {
    // condition
    var env = {};
    var argv = ["node", "/path/to/gulp"];

    // prepare
    var child = new Object();
    var mode = require('../index')({}, env, argv);

    // evaluate(production)
    var productionResult = mode.production(child);
    expect(productionResult).not.toEqual(child);
    var productionBoolean = mode.production();
    expect(productionBoolean).toBeFalsy();
    // evaluate(development)
    var developmentResult = mode.development(child);
    expect(developmentResult).toEqual(child);
    var developmentBoolean = mode.development();
    expect(developmentBoolean).toBeTruthy();
  });
  it("default options, NODE_ENV=production, no CLI argument -> production() == child, development() == noop", function () {
    // condition
    var env = {NODE_ENV: "production"};
    var argv = ["node", "/path/to/gulp"];

    // prepare
    var child = new Object();
    var mode = require('../index')({}, env, argv);

    // evaluate(production)
    var productionResult = mode.production(child);
    expect(productionResult).toEqual(child);
    var productionBoolean = mode.production();
    expect(productionBoolean).toBeTruthy();
    // evaluate(development)
    var developmentResult = mode.development(child);
    expect(developmentResult).not.toEqual(child);
    var developmentBoolean = mode.development();
    expect(developmentBoolean).toBeFalsy();
  });
  it("default options, no NODE_ENV, CLI argument=--production -> production() == child, development() == noop", function () {
    // condition
    var env = {};
    var argv = ["node", "/path/to/gulp", "--production"];

    // prepare
    var child = new Object();
    var mode = require('../index')({}, env, argv);

    // evaluate(production)
    var productionResult = mode.production(child);
    expect(productionResult).toEqual(child);
    var productionBoolean = mode.production();
    expect(productionBoolean).toBeTruthy();
    // evaluate(development)
    var developmentResult = mode.development(child);
    expect(developmentResult).not.toEqual(child);
    var developmentBoolean = mode.development();
    expect(developmentBoolean).toBeFalsy();
  });
  it("default options, NODE_ENV=production, CLI argument=--production -> production() == child, development() == noop", function () {
    // condition
    var env = {NODE_ENV: "production"};
    var argv = ["node", "/path/to/gulp", "--production"];

    // prepare
    var child = new Object();
    var mode = require('../index')({}, env, argv);

    // evaluate(production)
    var productionResult = mode.production(child);
    expect(productionResult).toEqual(child);
    var productionBoolean = mode.production();
    expect(productionBoolean).toBeTruthy();
    // evaluate(development)
    var developmentResult = mode.development(child);
    expect(developmentResult).not.toEqual(child);
    var developmentBoolean = mode.development();
    expect(developmentBoolean).toBeFalsy();
  });
  it("default options, NODE_ENV=production, CLI argument=--development -> production() == child, development() == child", function () {
    // condition
    var env = {NODE_ENV: "production"};
    var argv = ["node", "/path/to/gulp", "--development"];

    // prepare
    var child = new Object();
    var mode = require('../index')({}, env, argv);

    // evaluate(production)
    var productionResult = mode.production(child);
    expect(productionResult).toEqual(child);
    var productionBoolean = mode.production();
    expect(productionBoolean).toBeTruthy();
    // evaluate(development)
    var developmentResult = mode.development(child);
    expect(developmentResult).toEqual(child);
    var developmentBoolean = mode.development();
    expect(developmentBoolean).toBeTruthy();
  });
  it("default options, NODE_ENV=development, CLI argument=--production -> production() == child, development() == child", function () {
    // condition
    var env = {NODE_ENV: "development"};
    var argv = ["node", "/path/to/gulp", "--production"];

    // prepare
    var child = new Object();
    var mode = require('../index')({}, env, argv);

    // evaluate(production)
    var productionResult = mode.production(child);
    expect(productionResult).toEqual(child);
    var productionBoolean = mode.production();
    expect(productionBoolean).toBeTruthy();
    // evaluate(development)
    var developmentResult = mode.development(child);
    expect(developmentResult).toEqual(child);
    var developmentBoolean = mode.development();
    expect(developmentBoolean).toBeTruthy();
  });
});

describe("gulp-mode test suite with custom options", function () {
  it("default options, no NODE_ENV, no CLI argument -> prod() == noop, dev() == noop, demo() == child", function () {
    // condition
    var env = {};
    var argv = ["node", "/path/to/gulp"];
    var options = {modes: ["prod", "dev", "demo"], default: "demo", verbose: true}

    // prepare
    var child = new Object();
    var mode = require('../index')(options, env, argv);

    // evaluate(prod)
    var prodResult = mode.prod(child);
    expect(prodResult).not.toEqual(child);
    var prodBoolean = mode.prod();
    expect(prodBoolean).toBeFalsy();
    // evaluate(dev)
    var devResult = mode.dev(child);
    expect(devResult).not.toEqual(child);
    var devBoolean = mode.dev();
    expect(devBoolean).toBeFalsy();
    // evaluate(demo)
    var demoResult = mode.demo(child);
    expect(demoResult).toEqual(child);
    var demoBoolean = mode.demo();
    expect(demoBoolean).toBeTruthy();
  });
  it("default options, NODE_ENV=prod, no CLI argument -> prod() == child, dev() == noop, demo() == noop", function () {
    // condition
    var env = {NODE_ENV: "prod"};
    var argv = ["node", "/path/to/gulp"];
    var options = {modes: ["prod", "dev", "demo"], default: "demo", verbose: true}

    // prepare
    var child = new Object();
    var mode = require('../index')(options, env, argv);

    // evaluate(prod)
    var prodResult = mode.prod(child);
    expect(prodResult).toEqual(child);
    var prodBoolean = mode.prod();
    expect(prodBoolean).toBeTruthy();
    // evaluate(dev)
    var devResult = mode.dev(child);
    expect(devResult).not.toEqual(child);
    var devBoolean = mode.dev();
    expect(devBoolean).toBeFalsy();
    // evaluate(demo)
    var demoResult = mode.demo(child);
    expect(demoResult).not.toEqual(child);
    var demoBoolean = mode.demo();
    expect(demoBoolean).toBeFalsy();
  });
  it("default options, no NODE_ENV, CLI argument=--prod -> prod() == child, dev() == noop, demo() == noop", function () {
    // condition
    var env = {};
    var argv = ["node", "/path/to/gulp", "--prod"];
    var options = {modes: ["prod", "dev", "demo"], default: "demo", verbose: true}

    // prepare
    var child = new Object();
    var mode = require('../index')(options, env, argv);

    // evaluate(prod)
    var prodResult = mode.prod(child);
    expect(prodResult).toEqual(child);
    var prodBoolean = mode.prod();
    expect(prodBoolean).toBeTruthy();
    // evaluate(dev)
    var devResult = mode.dev(child);
    expect(devResult).not.toEqual(child);
    var devBoolean = mode.dev();
    expect(devBoolean).toBeFalsy();
    // evaluate(demo)
    var demoResult = mode.demo(child);
    expect(demoResult).not.toEqual(child);
    var demoBoolean = mode.demo();
    expect(demoBoolean).toBeFalsy();
  });
  it("default options, NODE_ENV=prod, CLI argument=--prod -> prod() == child, dev() == noop, demo() == noop", function () {
    // condition
    var env = {NODE_ENV: "prod"};
    var argv = ["node", "/path/to/gulp", "--prod"];
    var options = {modes: ["prod", "dev", "demo"], default: "demo", verbose: true}

    // prepare
    var child = new Object();
    var mode = require('../index')(options, env, argv);

    // evaluate(prod)
    var prodResult = mode.prod(child);
    expect(prodResult).toEqual(child);
    var prodBoolean = mode.prod();
    expect(prodBoolean).toBeTruthy();
    // evaluate(dev)
    var devResult = mode.dev(child);
    expect(devResult).not.toEqual(child);
    var devBoolean = mode.dev();
    expect(devBoolean).toBeFalsy();
    // evaluate(demo)
    var demoResult = mode.demo(child);
    expect(demoResult).not.toEqual(child);
    var demoBoolean = mode.demo();
    expect(demoBoolean).toBeFalsy();
  });
  it("default options, NODE_ENV=prod, CLI argument=--dev -> prod() == child, dev() == child, demo() == noop", function () {
    // condition
    var env = {NODE_ENV: "prod"};
    var argv = ["node", "/path/to/gulp", "--dev"];
    var options = {modes: ["prod", "dev", "demo"], default: "demo", verbose: true}

    // prepare
    var child = new Object();
    var mode = require('../index')(options, env, argv);

    // evaluate(prod)
    var prodResult = mode.prod(child);
    expect(prodResult).toEqual(child);
    var prodBoolean = mode.prod();
    expect(prodBoolean).toBeTruthy();
    // evaluate(dev)
    var devResult = mode.dev(child);
    expect(devResult).toEqual(child);
    var devBoolean = mode.dev();
    expect(devBoolean).toBeTruthy();
    // evaluate(demo)
    var demoResult = mode.demo(child);
    expect(demoResult).not.toEqual(child);
    var demoBoolean = mode.demo();
    expect(demoBoolean).toBeFalsy();
  });
  it("default options, NODE_ENV=dev, CLI argument=--prod -> prod() == child, dev() == child, demo() == noop", function () {
    // condition
    var env = {NODE_ENV: "dev"};
    var argv = ["node", "/path/to/gulp", "--prod"];
    var options = {modes: ["prod", "dev", "demo"], default: "demo", verbose: true}

    // prepare
    var child = new Object();
    var mode = require('../index')(options, env, argv);

    // evaluate(prod)
    var prodResult = mode.prod(child);
    expect(prodResult).toEqual(child);
    var prodBoolean = mode.prod();
    expect(prodBoolean).toBeTruthy();
    // evaluate(dev)
    var devResult = mode.dev(child);
    expect(devResult).toEqual(child);
    var devBoolean = mode.dev();
    expect(devBoolean).toBeTruthy();
    // evaluate(demo)
    var demoResult = mode.demo(child);
    expect(demoResult).not.toEqual(child);
    var demoBoolean = mode.demo();
    expect(demoBoolean).toBeFalsy();
  });
});
