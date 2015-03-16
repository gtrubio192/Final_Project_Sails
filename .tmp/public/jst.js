this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/about.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container text-center">\n\t<h1>{{ test }}</h1>\n  \n  \n  <dynamic ng-repeat="section in sections" \n           content="section.content"  \n           page="\'about\'"\n           section="section"\n           id="section.id"\n           contenteditable="false"\n           class="col-lg-8">\n\n  </dynamic>\n  \n  <div class="col-lg-4 edit" height="5000px"><h2>Sidebar</h2></div>\n  <div class="col-lg-12">\n    <button class="btn" ng-click="signIn()">Sign In</button>\n  </div>\n</div>\n\n<!--\n<div class="container text-center">\n\t<p>{{ test }}</p>\n\t<button  class="btn" ui-sref="home">Home</button>\n    <button  class="btn" ui-sref="blog">Blog Board</button>\n    <br>\n    <p class="text-left"><h3>Our Mission:</h3></p>\n    <div id=\'home\' class="edit">\n        <button class="btn pull-right" ng-click="edit()">\n            <i class="fa fa-pencil"></i>\n        </button>\n        <div>\n            <textarea rows="4" cols="70" ng-show="textShow" type="text" ng-model="divContent[0].content">\n            </textarea>\n        </div>\n        <div ng-show="!textShow">\n            <p>{{divContent[0].content}}</p>\n        </div>\n        <button class="btn btn-default" ng-show="saveButton" ng-click="save(\'header\',\'about\')">Save</button>\n    </div>\n    <div id=\'div1\' class="edit">\n        <button class="btn pull-right" ng-click="this.edit()">\n            <i class="fa fa-pencil"></i>\n        </button>\n        <div>\n            <textarea rows="4" cols="70" ng-show="this.textShow" type="text" ng-model="divContent1[0].content">\n            </textarea>\n        </div>\n        <div ng-show="!this.textShow">\n            <p>{{divContent1[0].content}}</p>\n        </div>\n        <button class="btn btn-default" ng-show="saveButton" ng-click="save(\'div1\',\'about\')">Save</button>\n    </div>\n</div>-->\n';

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

this["JST"]["assets/templates/dynamicDiv.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id=\'div1\' class="edit" ng-hide="deleted">\n    <div ng-show="true">\n      <button class="btn pull-right" ng-click="edit()">\n          <i class="fa fa-pencil"></i>\n      </button>\n      <button class="btn pull-right" ng-click="deletePost()">\n          <i class="fa fa-times"></i>\n      </button>\n    </div>\n    <div>\n        <textarea rows="4" cols="70" ng-show="textShow" type="text" ng-model="content">\n        </textarea>\n    </div>\n    <div ng-show="!textShow">\n<!--        <p content>{{divContent1[0].content}}</p>-->\n        <p>{{content}}</p>\n\n    </div>\n    <button class="btn btn-default" ng-show="saveButton" ng-click="save()">Save</button>\n</div>';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container text-center">\n<!--\n    <div>\n        <button class="btn pull-right" ng-click="edit()">\n            <i class="fa fa-pencil"></i>\n        </button>\n    </div>\n-->\n\t<h1>{{ test }}</h1>\n<!--\n  <div class="navbar-header">\n      <p ng-click="formShow = true" class="text-center">\n        <i class="fa fa-plus-square-o fa-4x"></i>      \n    </p>\n  </div>\n  <br>\n  <br>\n  \n    <div ng-show="formShow" class="col-lg-8 col-md-8 col-sm-8 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">\n       Caption input\n      <div>\n        <div>\n          <textarea rows="4" cols="70" ng-model="caption" type="text" placeholder="type here..." ></textarea>\n        </div>\n      </div>\n      <div>\n        <div class="text-right">\n          <button ng-click="post(caption, \'home\')" class="btn btn-success btn-lg">Post</button>\n          <button ng-click="formShow = false"id="button2id" name="button2id" class="btn btn-lg btn-danger">Cancel</button>\n        </div>\n      </div>\n    </div>  \n-->\n  <br>\n  <br>\n  \n  <dynamic ng-repeat="section in sections" \n           content="section.content"  \n           page="\'home\'"\n           section="section"\n           id="section.id"\n           contenteditable="false"\n           class="col-lg-8">\n\n  </dynamic>\n  \n  <div class="col-lg-4 edit" height="5000px"><h2>Sidebar</h2></div>\n  <div class="col-lg-12">\n    <button class="btn" ng-click="signIn()">Sign In</button>\n  </div>\n</div>';

}
return __p
};