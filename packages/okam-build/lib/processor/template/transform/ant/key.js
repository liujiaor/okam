/**
 * @file Transform ant for key syntax
 * @author sparklewhy@gmail.com
 */

'use strict';

const transformKey = require('../base/key');

module.exports = function (attrs, name, tplOpts, opts) {
    transformKey(attrs, name, tplOpts, Object.assign({
        forItemDirectiveName: 'a:for-item',
        forKeyDirectiveName: 'a:key'
    }, opts));
};
