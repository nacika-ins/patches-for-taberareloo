// ==Taberareloo==
//{
//  'name'        : 'No Check HTTPS'
//, 'namespace'   : 'https://github.com/YungSang/patches-for-taberareloo'
//, 'description' : 'Omit to check HTTPS'
//, 'include'     : ['background', 'content']
//, 'match'       : [/^https:\/\/.*/]
//, 'version'     : 1.1
//, 'downloadURL' : 'https://raw.github.com/YungSang/patches-for-taberareloo/master/util.checkhttps.tbrl.js'
//, 'updateURL'   : 'https://raw.github.com/YungSang/patches-for-taberareloo/master/util.checkhttps.tbrl.js'
//}
// ==/Taberareloo==

(function() {
  addAround(window, 'checkHttps', function(proceed, args, target, methodName) {
    var ps = proceed(args);
    ps.pageUrl = ps.https.pageUrl[1];
    ps.itemUrl = ps.https.itemUrl[1];
    ps.https.pageUrl[0] = false;
    ps.https.itemUrl[0] = false;
    return ps;
  });
})();