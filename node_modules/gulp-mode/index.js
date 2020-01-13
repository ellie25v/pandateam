'use strict'
var gutil = require('gulp-util');

/**
 * Plugin
 *
 * @param {map} options - plugin options
 * @param {map} env - process.env
 * @param {array} argv - process.argv
 */
module.exports = function(options, env, argv) {
  options = options || {};
  env = env || process.env;
  argv = argv || process.argv;
  var modes = options.modes || ["production", "development"];
  var defaultMode = options.default || "development";
  var verbose = options.verbose || false;

  if(verbose) {
    gutil.log(gutil.colors.red("[gulp-mode]") + gutil.colors.cyan(" NODE_ENV : " + env.NODE_ENV));
    gutil.log(gutil.colors.red("[gulp-mode]") + gutil.colors.cyan(" CLI arguments : " + argv));
  }

  // create plugin methods
  var methods = {};
  for(var i = 0; i < modes.length; i++) {
    var targetMode = modes[i];
    methods[targetMode] = createMethod(env, argv, modes, targetMode, targetMode == defaultMode);
  }
  return methods;
}
/**
 * Returns whether targetMode matches or not
 *
 * @param {map} env - process.env
 * @param {array} argv - process.argv
 * @param {array} allModes - options.modes
 * @param {string} targetMode - options.mode[i]
 * @param {boolean} isDefaultMode - true if targetMode == options.default
 */
function matchMode(env, argv, allModes, targetMode, isDefaultMode) {
  // with CLI arguments (`gulp --<targetMode>`)
  if(argv.indexOf("--" + targetMode) >= 0) {
    return true;
  // with NODE_ENV (`NODE_ENV=<targetMode> gulp`)
  } else if(env.NODE_ENV == targetMode) {
    return true;
  // default mode (targetMode == defaultMode)
  } else if(isDefaultMode) {
    var modeNotFound = false; // true if both NODE_ENV and process.argv are not specified.
    if(env.NODE_ENV == null) { // without NODE_ENV
      modeNotFound = true;
      for(var i = 0; i < allModes.length; i++) { // without CLI arguments.
        modeNotFound &= (argv.indexOf("--" + allModes[i]) < 0);
      }
    }
    return modeNotFound;
  } else {
    return false;
  }
}
/**
 * Create plugin method for targetMode
 *
 * @param {map} env - process.env
 * @param {array} argv - process.argv
 * @param {array} allModes - options.modes
 * @param {string} targetMode - options.mode[i]
 * @param {boolean} isDefaultMode - true if targetMode == options.default
 */
function createMethod(env, argv, allModes, targetMode, isDefaultMode) {
  return function(callback) {
    if(callback === undefined) {
      return matchMode(env, argv, allModes, targetMode, isDefaultMode);
    } else {
      return matchMode(env, argv, allModes, targetMode, isDefaultMode) ? callback : gutil.noop();
    }
  };
}
