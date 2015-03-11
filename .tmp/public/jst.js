this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/about.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\t<p>{{ test }}</p>\n';

}
return __p
};

this["JST"]["assets/templates/blog.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\t<p>{{ test }}</p>\n';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container text-center">\n    <div>\n        <button class="btn pull-right" ng-click="edit()">\n            <i class="fa fa-pencil"></i>\n        </button>\n    </div>\n\t<p>{{ test }}</p>\n\t<button  class="btn" ui-sref="about">About</button>\n    <button  class="btn" ui-sref="blog">Blog Board</button>\n    <br>\n\n    <div id=\'home\' class="edit">\n        <div>\n            <textarea rows="4" cols="70" ng-show="textShow" type="text" ng-model="divContent[0].content">\n\n            </textarea>\n        </div>\n        <div ng-show="!textShow">\n            <p>{{divContent[0].content}}</p>\n        </div>\n        <button class="btn btn-default" ng-show="saveButton" ng-click="save(\'header\',\'home\')">Save</button>\n    </div>\n    <div id=\'div1\' class="edit">\n<!--\n        <button class="btn pull-right" ng-click="edit()">\n            <i class="fa fa-pencil"></i>\n        </button>\n-->\n        <div>\n            <textarea rows="4" cols="70" ng-show="textShow" type="text" ng-model="divContent1[0].content">\n\n            </textarea>\n        </div>\n        <div ng-show="!textShow">\n            <p>{{divContent1[0].content}}</p>\n        </div>\n        <button class="btn btn-default" ng-show="saveButton" ng-click="save(\'div1\',\'home\')">Save</button>\n    </div>\n</div>';

}
return __p
};