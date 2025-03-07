//###############################################################################
//##
//# Copyright (C) 2014-2015 Andrea Rocco Lotronto
//##
//# Licensed under the Apache License, Version 2.0 (the "License");
//# you may not use this file except in compliance with the License.
//# You may obtain a copy of the License at
//##
//# http://www.apache.org/licenses/LICENSE-2.0
//##
//# Unless required by applicable law or agreed to in writing, software
//# distributed under the License is distributed on an "AS IS" BASIS,
//# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//# See the License for the specific language governing permissions and
//# limitations under the License.
//##
//###############################################################################
var log4js = require('log4js');
var logger = log4js.getLogger('wstun');

(function() {
  var https, old_https_request;

  https = require("https");

  old_https_request = https.request;

  https.request = function() {
    var options;
    options = arguments[0];
    options.rejectUnauthorized = false;
    return old_https_request.apply(void 0, Array.apply(null, arguments));
  };

}).call(this);
