this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/about.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n\n        <div class="row">\n            <div class="box">\n                <div class="col-lg-12">\n                    <hr>\n                    <h2 class="intro-text text-center">About\n                        <strong>Total Roofing</strong>\n                    </h2>\n                    <hr>\n                </div>\n                <div class="col-lg-6 col-md-6 col-md-12">\n<!--                    <img class="img-responsive img-border-left" src="http://stockfresh.com/files/d/diego_cervo/m/48/366980_stock-photo-construction-worker.jpg" alt="">-->\n                    <img class="img-responsive" src="http://stockfresh.com/files/d/diego_cervo/m/48/366980_stock-photo-construction-worker.jpg" alt="">\n\n              </div>\n<!--                ADD CONTENT HERE -->\n                <div class="col-lg-6 col-md-6 col-sm-12" ng-controller="About2Ctrl">\n<!--\n                     Getting your roof repaired and locating a reputable contractor shouldn’t be a struggle, especially if your existing roof has suffered damage from wind or hail. At Total Residential Roofing, we believe your roofing repair process should be a pleasant experience. We work with all insurance companies to get you the best insurance settlements from roof damage.\n\n                      At Total Residential Roofing, we service the Dallas, Fort Worth, Austin, Amarillo and surrounding areas. Our roofing repair company offers exceptional customer service, as well as trained technicians that are well educated on the installation process for all roofing types and roof systems, including those made from wood, metal or composition.\n\n                      We service both residential and commercial roofing systems and handle re-roofing, new construction and repairs. Our Dallas roofing repair company professionally installs complete roof systems, as well as patio covers and durable metal roofs.\n-->\n                      <dynamic ng-repeat="section in sections" \n                         content="section.content"  \n                         page="\'about2\'"\n                         section="section"\n                         id="section.id"\n                         position="section.position"\n                         editable="editButtons"\n                         contenteditable="false"\n                         class="move col-lg-12 col-md-12 col-sm-12 col-xs-12">\n                      </dynamic>\n                    <!--                ADD CONTENT HERE -->\n                      <section ng-controller="PostCtrl" ng-show="editButtons"> \n                        <div>\n                          <p ng-click="formShow = true" class="text-center">\n                            <i class="fa fa-plus-square-o fa-4x"></i>      \n                          </p>\n                        </div>\n                        <div ng-show="formShow" class="col-lg-8 col-md-8 col-sm-8 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">\n                          <div>\n                            <div>\n\n                              <textarea rows="4" cols="100" ng-model="caption" type="text" placeholder="type here..." ></textarea>\n                            </div>\n                          </div>\n                          <div>\n                            <div class="text-right">\n                              <button ng-click="postContent(\'about2\')" class="btn btn-success btn-lg">Post</button>\n                              <button ng-click="formShow = false"id="button2id" name="button2id" class="btn btn-lg btn-danger">Cancel</button>\n                            </div>\n                          </div>\n                        </div> \n                      </section>\n                </div>\n                <div class="clearfix"></div>\n            </div>\n           <dynamic ng-repeat="section in sections" \n               content="section.content"  \n               page="\'about\'"\n               section="section"\n               id="section.id"\n               position="section.position"\n               editable="editButtons"\n               contenteditable="false"\n               class="move box col-lg-12 col-md-12 col-sm-12 col-xs-12">\n            </dynamic>\n            <section ng-controller="PostCtrl" ng-show="editButtons"> \n              <div>\n                <p ng-click="formShow = true" class="text-center">\n                  <i class="fa fa-plus-square-o fa-4x"></i>      \n                </p>\n              </div>\n              <div ng-show="formShow" class="col-lg-8 col-md-8 col-sm-8 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">\n                <div>\n                  <div>\n\n                    <textarea rows="4" cols="100" ng-model="caption" type="text" placeholder="type here..." ></textarea>\n                  </div>\n                </div>\n                <div>\n                  <div class="text-right">\n                    <button ng-click="postContent()" class="btn btn-success btn-lg">Post</button>\n                    <button ng-click="formShow = false"id="button2id" name="button2id" class="btn btn-lg btn-danger">Cancel</button>\n                  </div>\n                </div>\n              </div> \n            </section>\n        </div>\n\n        <div class="row">\n            <div class="box">\n                <div class="col-lg-12">\n                    <hr>\n                    <h2 class="intro-text text-center">Our\n                        <strong>Team</strong>\n                    </h2>\n                    <hr>\n                </div>\n                <div class="col-sm-4 text-center">\n                    <img class="img-responsive" src="http://i.huffpost.com/gen/2681096/images/s-VINCE-VAUGHN-STOCK-PHOTO-large.jpg" alt="">\n                    <h3>Vince Vaughn\n                        <small>Lead Creative Consultant</small>\n                    </h3>\n                </div>\n                <div class="col-sm-4 text-center">\n                    <img class="img-responsive" src="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-9/1150979_10151770345647350_175518573_n.jpg?oh=d17da17bdf98d35dd9595b785a923d28&oe=55849223&__gda__=1437522254_9d93f4f2f864128fcc5b6fffbe1c4d1d" alt="">\n                    <h3>Gabe Rubio\n                        <small>Team Lead</small>\n                    </h3>\n                </div>\n                <div class="col-sm-4 text-center">\n                    <img class="img-responsive" src="http://www.pleated-jeans.com/wp-content/uploads/2015/03/iStock-Unfinished-Business-10-1.jpg" alt="">\n                    <h3>Niel Sniggams\n                        <small>Lead Grumpy Janitor</small>\n                    </h3>\n                </div>\n                <div class="clearfix"></div>\n            </div>\n            <div class="box">\n                <div class="img-responsive img-border img-center">\n                    <img class="img-responsive" src="images/ScreenShot.png" alt="">\n<!--                    <h2>(put in seperate box!) Put in Business associations and sister companies</h2>-->\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!-- /.container -->\n';

}
return __p
};

this["JST"]["assets/templates/about2.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n\n        <div class="row">\n            <div class="box">\n                <div class="col-lg-12">\n                    <hr>\n                    <h2 class="intro-text text-center">About\n                        <strong>Total Roofing</strong>\n                    </h2>\n                    <hr>\n                </div>\n                <div class="col-md-6">\n                    <img class="img-responsive img-border-left" src="http://stockfresh.com/files/d/diego_cervo/m/48/366980_stock-photo-construction-worker.jpg" alt="">\n                </div>\n<!--                ADD CONTENT HERE -->\n                <div class="col-md-6" ng-controller="About2Ctrl">\n<!--\n                     <p>Getting your roof repaired and locating a reputable contractor shouldn’t be a struggle, especially if your existing roof has suffered damage from wind or hail. At Total Residential Roofing, we believe your roofing repair process should be a pleasant experience. We work with all insurance companies to get you the best insurance settlements from roof damage.</p>\n\n                      <p>At Total Residential Roofing, we service the Dallas, Fort Worth, Austin, Amarillo and surrounding areas. Our roofing repair company offers exceptional customer service, as well as trained technicians that are well educated on the installation process for all roofing types and roof systems, including those made from wood, metal or composition.</p>\n\n                      <p>We service both residential and commercial roofing systems and handle re-roofing, new construction and repairs. Our Dallas roofing repair company professionally installs complete roof systems, as well as patio covers and durable metal roofs.</p>\n-->\n                      <dynamic ng-repeat="section in sections" \n                         content="section.content"  \n                         page="\'about\'"\n                         section="section"\n                         id="section.id"\n                         position="section.position"\n                         editable="editButtons"\n                         contenteditable="false"\n                         class="move col-lg-12 col-md-12 col-sm-12 col-xs-12">\n                      </dynamic>\n                    <!--                ADD CONTENT HERE -->\n                      <section ng-controller="PostCtrl" ng-show="editButtons"> \n                        <div>\n                          <p ng-click="formShow = true" class="text-center">\n                            <i class="fa fa-plus-square-o fa-4x"></i>      \n                          </p>\n                        </div>\n                        <div ng-show="formShow" class="col-lg-8 col-md-8 col-sm-8 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">\n                          <div>\n                            <div>\n\n                              <textarea rows="4" cols="100" ng-model="caption" type="text" placeholder="type here..." ></textarea>\n                            </div>\n                          </div>\n                          <div>\n                            <div class="text-right">\n                              <button ng-click="postContent(\'about2\')" class="btn btn-success btn-lg">Post</button>\n                              <button ng-click="formShow = false"id="button2id" name="button2id" class="btn btn-lg btn-danger">Cancel</button>\n                            </div>\n                          </div>\n                        </div> \n                      </section>\n                </div>\n                <div class="clearfix"></div>\n            </div>\n           <dynamic ng-repeat="section in sections" \n               content="section.content"  \n               page="\'about\'"\n               section="section"\n               id="section.id"\n               position="section.position"\n               editable="editButtons"\n               contenteditable="false"\n               class="move box col-lg-12 col-md-12 col-sm-12 col-xs-12">\n            </dynamic>\n        </div>\n\n        <div class="row">\n            <div class="box">\n                <div class="col-lg-12">\n                    <hr>\n                    <h2 class="intro-text text-center">Our\n                        <strong>Team</strong>\n                    </h2>\n                    <hr>\n                </div>\n                <div class="col-sm-4 text-center">\n                    <img class="img-responsive" src="http://i.huffpost.com/gen/2681096/images/s-VINCE-VAUGHN-STOCK-PHOTO-large.jpg" alt="">\n                    <h3>Vince Vaughn\n                        <small>Lead Creative Consultant</small>\n                    </h3>\n                </div>\n                <div class="col-sm-4 text-center">\n                    <img class="img-responsive" src="http://www.pleated-jeans.com/wp-content/uploads/2015/03/iStock-Unfinished-Business-10-1.jpg" alt="">\n                    <h3>Niel Sniggams\n                        <small>Lead Grumpy Janitor</small>\n                    </h3>\n                </div>\n                <div class="col-sm-4 text-center">\n                    <img class="img-responsive" src="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-9/1150979_10151770345647350_175518573_n.jpg?oh=d17da17bdf98d35dd9595b785a923d28&oe=55849223&__gda__=1437522254_9d93f4f2f864128fcc5b6fffbe1c4d1d" alt="">\n                    <h3>Gabe Rubio\n                        <small>Team Lead</small>\n                    </h3>\n                </div>\n                \n                <div class="clearfix"></div>\n            </div>\n            <div class="box">\n                <div class="img-responsive img-border img-center">\n                    <img class="img-responsive" src="images/ScreenShot.png" alt="">\n<!--                    <h2>(put in seperate box!) Put in Business associations and sister companies</h2>-->\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!-- /.container -->\n  <section ng-controller="PostCtrl" ng-show="editButtons"> \n    <div>\n      <p ng-click="formShow = true" class="text-center">\n        <i class="fa fa-plus-square-o fa-4x"></i>      \n      </p>\n    </div>\n    <div ng-show="formShow" class="col-lg-8 col-md-8 col-sm-8 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">\n      <div>\n        <div>\n          \n          <textarea rows="4" cols="100" ng-model="caption" type="text" placeholder="type here..." ></textarea>\n        </div>\n      </div>\n      <div>\n        <div class="text-right">\n          <button ng-click="postContent()" class="btn btn-success btn-lg">Post</button>\n          <button ng-click="formShow = false"id="button2id" name="button2id" class="btn btn-lg btn-danger">Cancel</button>\n        </div>\n      </div>\n    </div> \n  </section>\n';

}
return __p
};

this["JST"]["assets/templates/blog.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container text-center" >\n \n\t<h1 class="box">{{ test }}</h1>\n\n  <br>\n  <br>\n  <div>\n    <dynamic ng-repeat="section in sections" \n             content="section.content"  \n             page="\'blog\'"\n             section="section"\n             id="section.id"\n             position="section.position"\n             editable="editButtons"\n             contenteditable="false"\n             class="col-lg-8 col-lg-offset-2 box">\n    </dynamic>\n  </div>\n  \n  <section ng-controller="PostCtrl" ng-show="signedIn"> \n    <div>\n      <p ng-click="formShow = true" class="text-center">\n        <i class="fa fa-plus-square-o fa-4x"></i>      \n      </p>\n    </div>\n    <div ng-show="formShow" class="col-lg-8 col-md-8 col-sm-8 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">\n      <div>\n        <div>\n          <textarea rows="4" cols="100" ng-model="caption" type="text" placeholder="type here..." ></textarea>\n        </div>\n      </div>\n      <div>\n        <div class="text-right">\n          <button ng-click="postContent()" class="btn btn-success btn-lg">Post</button>\n          <button ng-click="formShow = false"id="button2id" name="button2id" class="btn btn-lg btn-danger">Cancel</button>\n        </div>\n      </div>\n    </div> \n  </section>\n</div>';

}
return __p
};

this["JST"]["assets/templates/contact.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n  <div class="row">\n      <div class="box">\n          <div class="col-lg-12">\n              <hr>\n              <h2 class="intro-text text-center">Contact\n                  <strong>Total Roofing</strong>\n              </h2>\n              <hr>\n          </div>\n          <div class="col-md-8">\n              <!-- Embedded Google Map using an iframe - to select your location find it on Google maps and paste the link as the iframe src. If you want to use the Google Maps API instead then have at it! -->\n              <iframe width="600" height="450" frameborder="0" style="border:0"\nsrc="https://www.google.com/maps/embed/v1/place?q=13332%20Bee%20St%2C%20Dallas%2C%20TX%2075234%2C%20United%20States&key=AIzaSyAOcQQ_GLh1RJtPxbKJFY4IdYOSprifbGg">\n              </iframe>\n\n          </div>\n          <div class="col-md-4">\n              <p>Phone:\n                  <a href="tel:2143791950"><strong>214-379-1950</strong></a>\n\n              </p>\n              <p>Email:\n<!--  estimate@totalroofing.com          -->\n<!--  Tammy@totalroofing.com & Sherra@totalroofing.com                      -->\n                  <strong><a href="mailto:estimate@totalroofing.com">estimate@totalroofing.com</a></strong>\n              </p>\n              <p>Address:\n                  <strong>13332 Bee St\n                      <br> Dallas, TX 75234</strong>\n              </p>\n          </div>\n          <div class="clearfix"></div>\n      </div>\n  </div>\n\n  <div class="row" id="form">\n      <div class="box">\n          <div class="col-lg-12">\n              <hr>\n              <h2 class="intro-text text-center">Contact\n                  <strong>form</strong>\n              </h2>\n              <hr>\n              <p>We are here to help. Roof repairs can be overwhelming, put our expert staff to work for you. Fill out the form, please provide a phone number so we can reach out to you.</p>\n              <p>Or feel free to write us a <strong>review!</strong></p>\n            <!--  All fields required                  -->\n<!--              <form accept-charset="UTF-8" action="https://formkeep.com/f/72477ea92390" method="POST">-->\n              <form accept-charset="UTF-8" ng-submit="contactInfo(contact)">\n\n                <div class="row">\n                      <div class="form-group col-lg-4">\n                          <label>Name</label>\n                          <input ng-model="contact.name" name="name" type="text" class="form-control" required>\n                      </div>\n                      <div class="form-group col-lg-4">\n                          <label>Email Address</label>\n                          <input ng-model="contact.email" name="email" type="email" class="form-control" required>\n                      </div>\n                      <div class="form-group col-lg-4">\n                          <label>Phone Number</label>\n                          <input ng-model="contact.phone" name="phone" type="tel" class="form-control" required>\n                      </div>\n                      <div class="clearfix"></div>\n                      <div class="form-group col-lg-12">\n                          <label>Message</label>\n                          <textarea ng-model="contact.message" name="message" class="form-control" rows="6" required></textarea>\n                      </div>\n<!--             Put in capcha id box               -->\n<!--\n                      <div class="form-group col-lg-12">\n                          <input type="hidden" name="save" value="contact">\n                          <button class="btn btn-default">Capcha</button>\n                      </div>\n-->\n                      <div class="form-group col-lg-12">\n                        <input type="hidden" name="utf8" value="✓">\n                        <button class="btn" type="submit">Submit</button>\n                        <p ng-show="contactSuccess" class="alert alert-success" role="alert">{{contactSuccess}}</p>\n\n                      </div>\n                  </div>\n              </form>\n          </div>\n      </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/dynamicDiv.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- set move to true using ng-class once signed in successfully -->\n<div id=\'div1\' ng-hide="deleted">\n  <div ng-show="editable">\n    <button class="btn pull-right hvr-grow hvr-glow" ng-click="edit()">\n        <i class="fa fa-pencil"></i>\n    </button>\n    <button class="btn pull-right hvr-grow hvr-glow" ng-click="deletePost()">\n        <i class="fa fa-times"></i>\n    </button>\n  </div>\n  <div>\n      <textarea rows="4" cols="70" ng-show="textShow" type="text" ng-model="content">\n      </textarea>\n  </div>\n  <div ng-show="!textShow">\n<!--      <p>{{content}}</p>-->\n      <p ng-bind-html=\'content\'></p>\n\n  </div>\n  <button class="btn btn-default" ng-show="saveButton" ng-click="save()">Save</button>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="container">\n  <div class="row">\n    <div class="box">\n      <div class="col-lg-12 text-center">\n        <div id="carousel-example-generic" class="carousel slide">\n  <!-- Indicators -->\n          <ol class="carousel-indicators hidden-xs">\n            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\n            <li data-target="#carousel-example-generic" data-slide-to="1"></li>\n            <li data-target="#carousel-example-generic" data-slide-to="2"></li>\n            <li data-target="#carousel-example-generic" data-slide-to="3"></li>\n            <li data-target="#carousel-example-generic" data-slide-to="4"></li>\n            <li data-target="#carousel-example-generic" data-slide-to="5"></li>\n          </ol>\n\n        <!-- Wrapper for slides -->\n          <div class="carousel-inner">\n            <div class="item">\n                <img class="img-responsive img-full" src="images/roof4.jpg" alt="">\n            </div>\n            <div class="item active">\n                <img class="img-responsive img-full" src="images/roof5.jpg" alt="" width="403px" height="843px">\n            </div>\n            <div class="item">\n                <img class="img-responsive img-full" src="images/roof6.jpg" alt="">\n            </div>\n            <div class="item">\n                <img class="img-responsive img-full" src="images/roof1.jpg" alt="">\n            </div>\n            <div class="item">\n                <img class="img-responsive img-full" src="images/roof2.jpg" alt="">\n            </div>\n            <div class="item">\n                <img class="img-responsive img-full" src="images/roof3.jpg" alt="">\n            </div>\n          </div>\n\n        <!-- Controls -->\n          <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">\n            <span class="icon-prev"></span>\n          </a>\n          <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">\n            <span class="icon-next"></span>\n          </a>\n        </div>\n        <h2 class="brand-before">\n          <small>Welcome to</small>\n        </h2>\n        <h1 class="brand-name">Total Roofing</h1>\n        <hr class="tagline-divider">\n        <h2>\n          <small>\n            <strong>Your roofing solution since 1996</strong>\n          </small>\n        </h2>\n      </div>\n    </div>\n  </div>\n\n  <div class="row">\n      <div class="box">\n        <div class="col-lg-12">\n          <hr>\n          <h2 class="intro-text text-center">Welcome to Total Residential Roofing.\n        <strong><br><br>We work hard for your business!</strong>\n          </h2>\n          <hr>\n    <!--                    <img class="img-responsive img-border img-left" src="http://www.totalroofingandreconstruction.com/images/slideshow2.gif" alt="">                    -->\n          <hr class="visible-xs">    \n<!--\n          <p>\n          The quality of our roofs are only matched by our excellent customer service & a knowledgeable, courteous staff. \n            We have built a strong positive reputation by offering the best roofing products on the market, installed by \n            excellent roofers which is all supported by superior customer service. We pride ourselves on exceeding the \n            expectations of our customers. Our rates are some of the best on the market without having to sacrifice our \n            quality & service. So give us a call or fill out a FREE ESTIMATE request today\n          </p>\n-->\n<!--\n          <p>At Total Residential Roofing, we service the Dallas, Fort Worth, Austin and surrounding areas. Our roofing repair company offers exceptional customer service, as well as trained technicians that are well educated on the installation process for all roofing types and roof systems, including those made from wood, metal or composition.</p>\n          <p>We service both residential and commercial roofing systems and handle re-roofing, new construction and repairs. Our Dallas roofing repair company professionally installs complete roof systems, as well as patio covers and durable metal roofs.</p>\n-->\n        </div>\n      </div>\n      <dynamic ng-repeat="section in sections"\n               content="section.content"  \n               page="\'home\'"\n               section="section"\n               id="section.id"\n               position="section.position"\n               editable="editButtons"\n               contenteditable="false"\n               class="move box col-lg-12 col-md-12 col-sm-12 col-xs-12">\n      </dynamic>\n    </div>\n  </div>\n<!-- /.container -->\n  <section ng-controller="PostCtrl" ng-show="signedIn"> \n    <div>\n      <p ng-click="formShow = true" class="text-center">\n        <i class="fa fa-plus-square-o fa-4x"></i>      \n      </p>\n    </div>\n    <div ng-show="formShow" class="col-lg-8 col-md-8 col-sm-8 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">\n      <div>\n        <div>\n          <textarea rows="4" cols="100" ng-model="caption" type="text" placeholder="type here..." ></textarea>\n        </div>\n      </div>\n      <div>\n        <div class="text-right">\n          <button ng-click="postContent()" class="btn btn-success btn-lg">Post</button>\n          <button ng-click="formShow = false"id="button2id" name="button2id" class="btn btn-lg btn-danger">Cancel</button>\n        </div>\n      </div>\n    </div> \n  </section>\n\n<!-- Script to Activate the Carousel -->\n<!--\n  <script>\n    $(\'.carousel\').carousel({\n    interval: 3000 //changes the speed\n    });\n  </script>-->\n';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section  class="forms" id="login-container" ng-controller="LoginCtrl">\n\t<form ng-submit="login(htmlCredentials)" novalidate>\n\t\t<div id="login-form">\n      <div class="panel panel-default">\n        <div class="panel-heading">\n          <h2 class="panel-title">Login</h2>\n        </div>\n          <div class="panel-body">\n              <div class="form-group">\n                <label>Email address</label>\n                <input type="email" class="form-control" \n                       ng-model="htmlCredentials.identifier" \n                       placeholder="Enter email">\n                <p ng-show="loginError1" class="alert alert-danger" role="alert" ng-bind="emailError"></p>\n              </div>\n\n              <div class="form-group">\n                      <label>Password</label>\n                      <input type="password" class="form-control" \n                             ng-model="htmlCredentials.password" \n                             placeholder="Password">\n                      <p ng-show="loginError2" class="alert alert-danger" role="alert" ng-bind="passwordError"></p>\n              </div>\n              <button type="submit" class="btn btn-default">Submit</button>  \n          </div>\n      </div>\n\t\t</div>\n\t</form>\n</section>\n\n\n\n\n';

}
return __p
};

this["JST"]["assets/templates/manufacturer.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '    <div class="container">\n\n        <div class="row">\n            <div class="box">\n                <div class="col-lg-12">\n                    <hr>\n                    <h2 class="intro-text text-center">Manufacturer\n                        <strong>Total Roofing</strong>\n                    </h2>\n                    <hr>\n                </div>\n                <div class="col-md-4">\n                    <p>Phone:\n                        <a href="tel:9722995433"><strong>972-299-5433</strong></a>\n                        \n                    </p>\n                    <p>Email:\n<!--  estimate@totalroofing.com          -->\n<!--  Tammy@totalroofing.com & Sherra@totalroofing.com                      -->\n                        <strong><a href="mailto:estimate@totalroofing.com">estimate@totalroofing.com</a></strong>\n                    </p>\n                    <p>Address:\n                        <strong>13332 Bee St\n                            <br> Dallas, TX 75234</strong>\n                    </p>\n                </div>\n                <div class="col-md-8">\n                    <!-- Embedded Google Map using an iframe - to select your location find it on Google maps and paste the link as the iframe src. If you want to use the Google Maps API instead then have at it! -->\n                    <iframe width="600" height="450" frameborder="0" style="border:0"\nsrc="https://www.google.com/maps/embed/v1/place?q=13333%20Bee%20St%2C%20Dallas%2C%20TX%2075234%2C%20United%20States&key=AIzaSyAOcQQ_GLh1RJtPxbKJFY4IdYOSprifbGg">\n                    </iframe>\n                    \n                </div>\n                <div class="clearfix"></div>\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="box">\n                <div class="col-lg-12">\n                    <hr>\n                    <h2 class="intro-text text-center">Contact\n                        <strong>form</strong>\n                    </h2>\n                    <hr>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, vitae, distinctio, possimus repudiandae cupiditate ipsum excepturi dicta neque eaque voluptates tempora veniam esse earum sapiente optio deleniti consequuntur eos voluptatem.</p>\n<!--  All fields required                  -->\n                    <form role="form">\n                        <div class="row">\n                            <div class="form-group col-lg-4">\n                                <label>Name</label>\n                                <input type="text" class="form-control">\n                            </div>\n                            <div class="form-group col-lg-4">\n                                <label>Email Address</label>\n                                <input type="email" class="form-control">\n                            </div>\n                            <div class="form-group col-lg-4">\n                                <label>Phone Number</label>\n                                <input type="tel" class="form-control">\n                            </div>\n                            <div class="clearfix"></div>\n                            <div class="form-group col-lg-12">\n                                <label>Message</label>\n                                <textarea class="form-control" rows="6"></textarea>\n                            </div>\n<!--             Put in capcha id box               -->\n                            <div class="form-group col-lg-12">\n                                <input type="hidden" name="save" value="contact">\n                                <button type="submit" class="btn btn-default">Capcha</button>\n                            </div>\n<!--       Add confirmation email on submit                     -->\n                            <div class="form-group col-lg-12">\n                                <input type="hidden" name="save" value="contact">\n                                <button type="submit" class="btn btn-default">Submit</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n    </div>';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--\n<section id="register-container" ng-controller="RegisterCtrl">\n\t<h2>Register</h2>\n\t<p ng-bind="err"></p>\n\t<form class="form" ng-submit="register(credentials, userProfile)" novalidate>\n\t\t<div id="register-form">\n\t\t\t<div class="form-group" ng-class="error.identifier ? \'error\' : \'\'">\n\t\t\t\t<label for="email">Email address</label>\n\t\t\t\t<input class="form-control" type="text" \n               id="email" placeholder="Enter Your email" \n               ng-model="credentials.identifier">\n\t\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t\t</div>\n\t\t\t<div class="form-group" ng-class="error.password ? \'error\' : \'\'">\n\t\t\t\t<label for="password">Password</label>\n\t\t\t\t<input class="form-control" type="password" id="password" placeholder="Enter Your Password" ng-model="credentials.password">\n\t\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t\t</div>\n\t\t\t<button type="submit" class="btn btn-default">Register</button>\n\t\t</div>\n\t</form>\n</section>\n-->\n\n<section class="forms" id="register-container" ng-controller="RegisterCtrl">\n\t<form ng-submit="register(credentials, userProfile)" novalidate>\n\t\t<div id="register-form">\n      <div class="panel panel-default">\n        <div class="panel-heading">\n          <h2 class="panel-title">Register</h2>\n        </div>\n          <div class="panel-body">\n              <div class="form-group">\n                <label>Email address</label>\n                <input type="email" class="form-control" \n                       ng-model="credentials.identifier" \n                       placeholder="Enter email">\n                <p ng-show="loginError1" class="alert alert-danger" role="alert" ng-bind="emailError"></p>\n              </div>\n\n              <div class="form-group">\n                      <label for="password">Password</label>\n                      <input type="password" class="form-control" \n                             ng-model="credentials.password" \n                             placeholder="Enter Your Password">\n                      <p ng-show="loginError2" class="alert alert-danger" role="alert" ng-bind="passwordError"></p>\n              </div>\n              <button type="submit" class="btn btn-default">Register</button>  \n          </div>\n      </div>\n\t\t</div>\n\t</form>\n</section>\n\n\n\n\n';

}
return __p
};

this["JST"]["assets/templates/temp.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n\n        <div class="row">\n            <div class="box">\n                <div class="col-lg-12">\n                    <hr>\n                    <h2 class="intro-text text-center">About\n                        <strong>Total Roofing</strong>\n                    </h2>\n                    <hr>\n                </div>\n                <div class="col-md-6">\n                    <img class="img-responsive img-border-left" src="images/slide-2.jpg" alt="">\n                </div>\n<!--                ADD CONTENT HERE -->\n                <div class="col-md-6">\n                     <p>Getting your roof repaired and locating a reputable contractor shouldn’t be a struggle, especially if your existing roof has suffered damage from wind or hail. At Total Residential Roofing, we believe your roofing repair process should be a pleasant experience. We work with all insurance companies to get you the best insurance settlements from roof damage.</p>\n\n                      <p>At Total Residential Roofing, we service the Dallas, Fort Worth, Austin, Amarillo and surrounding areas. Our roofing repair company offers exceptional customer service, as well as trained technicians that are well educated on the installation process for all roofing types and roof systems, including those made from wood, metal or composition.</p>\n\n                      <p>We service both residential and commercial roofing systems and handle re-roofing, new construction and repairs. Our Dallas roofing repair company professionally installs complete roof systems, as well as patio covers and durable metal roofs.</p>\n             \n                    <!--                ADD CONTENT HERE -->\n\n                </div>\n                <div class="clearfix"></div>\n            </div>\n           <dynamic ng-repeat="section in sections" \n               content="section.content"  \n               page="\'about\'"\n               section="section"\n               id="section.id"\n               position="section.position"\n               editable="editButtons"\n               contenteditable="false"\n               class="move box col-lg-12 col-md-12 col-sm-12 col-xs-12">\n            </dynamic>\n        </div>\n\n        <div class="row">\n            <div class="box">\n                <div class="col-lg-12">\n                    <hr>\n                    <h2 class="intro-text text-center">Our\n                        <strong>Team</strong>\n                    </h2>\n                    <hr>\n                </div>\n                <div class="col-sm-4 text-center">\n                    <img class="img-responsive" src="http://placehold.it/750x450" alt="">\n                    <h3>John Smith\n                        <small>Job Title</small>\n                    </h3>\n                </div>\n                <div class="col-sm-4 text-center">\n                    <img class="img-responsive" src="http://placehold.it/750x450" alt="">\n                    <h3>John Smith\n                        <small>Job Title</small>\n                    </h3>\n                </div>\n                <div class="col-sm-4 text-center">\n                    <img class="img-responsive" src="http://placehold.it/750x450" alt="">\n                    <h3>John Smith\n                        <small>Job Title</small>\n                    </h3>\n                </div>\n                \n                <div class="clearfix"></div>\n            </div>\n            <div class="box">\n                <div>\n                    <h2>(put in seperate box!) Put in Business associations and sister companies</h2>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!-- /.container -->\n\n    <footer>\n        <div class="container">\n            <div class="row">\n                <div class="col-lg-12 text-center">\n                    <p>Copyright &copy; Total Roofing 2015</p>\n                    <button class="btn" ng-click="signIn()">Sign In</button>\n                </div>\n            </div>\n        </div>\n    </footer>\n';

}
return __p
};