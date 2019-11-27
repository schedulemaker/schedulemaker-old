'use strict';

/**
 * @module Cache 
 * Controls the state of global objects representing connections to AWS services that can be reused throughout invokations. 
 * If the variable does not exist in the namespace, it is instantiated and then reused upon subsequent executions in the same container.
 */
module.exports = function(){

    if (!banner){
        var Banner = require('banner');
        var banner = new Banner(process.env.TERM);
    }

    return {
        Banner: banner,
    }

}();