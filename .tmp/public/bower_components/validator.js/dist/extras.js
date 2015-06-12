/*!
* Part of validator.js
* Version 1.1.0 - built Tue Feb 03 2015 09:32:17
*/
!function(a){"function"==typeof define&&define.amd?define(["validator"],a):"object"==typeof exports?module.exports=a(require("./validator.js")):a(window["undefined"!=typeof validatorjs_ns?validatorjs_ns:"Validator"])}(function(a){a.Assert.prototype.Eql=function(c){if(this.__class__="Eql","undefined"==typeof c)throw new Error("Equal must be instanciated with an Array or an Object");return this.eql=c,this.validate=function(c){var d="function"==typeof this.eql?this.eql(c):this.eql;if(!b.eql(d,c))throw new a.Violation(this,c,{eql:d});return!0},this},a.Assert.prototype.Mac=function(){return this.__class__="Mac",this.validate=function(b){var c=/^(?:[0-9A-F]{2}:){5}[0-9A-F]{2}$/i;if("string"!=typeof b)throw new a.Violation(this,b,{value:Validator.errorCode.must_be_a_string});if(!c.test(b))throw new a.Violation(this,b);return!0},this},a.Assert.prototype.IPv4=function(){return this.__class__="IPv4",this.validate=function(b){var c=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;if("string"!=typeof b)throw new a.Violation(this,b,{value:Validator.errorCode.must_be_a_string});if(!c.test(b))throw new a.Violation(this,b);return!0},this};var b={eql:function(a,b){if(a===b)return!0;if("undefined"!=typeof Buffer&&Buffer.isBuffer(a)&&Buffer.isBuffer(b)){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}return a instanceof Date&&b instanceof Date?a.getTime()===b.getTime():"object"!=typeof a&&"object"!=typeof b?a==b:this.objEquiv(a,b)},isUndefinedOrNull:function(a){return null===a||"undefined"==typeof a},isArguments:function(a){return"[object Arguments]"==Object.prototype.toString.call(a)},keys:function(a){if(Object.keys)return Object.keys(a);var b=[];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b},objEquiv:function(a,b){if(this.isUndefinedOrNull(a)||this.isUndefinedOrNull(b))return!1;if(a.prototype!==b.prototype)return!1;if(this.isArguments(a))return this.isArguments(b)?eql(pSlice.call(a),pSlice.call(b)):!1;try{var c,d,e=this.keys(a),f=this.keys(b);if(e.length!==f.length)return!1;for(e.sort(),f.sort(),d=e.length-1;d>=0;d--)if(e[d]!=f[d])return!1;for(d=e.length-1;d>=0;d--)if(c=e[d],!this.eql(a[c],b[c]))return!1;return!0}catch(g){return!1}}}});