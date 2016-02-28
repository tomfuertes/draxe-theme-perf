/*
 2015-11-11:
 Revenue team needs to set a cookie for incoming PPC Traffic by campaign
 to flag the disabling of loading the CJ Cookie for returning forms of paid
 traffic. i.e., someone clicks a CJ Link, leaves, then comes back later through
 a ppc add utm_medium=cpc || utm_medium=ppc - that person should not get credit
 for the shopify pixel if they order in that session
 @author: TomFuertes _at_ gmail.com
 */

(function() {

  if (/[?&]utm_medium=(ppc|cpc)/i.test(location.href)) {
    setCookie('cj_override', 'true'); // session cookie
  }

  /*jshint latedef:false*/
  function setCookie(name, value, optDays) {
    'use strict';
    var expires = '';
    if (optDays) {
      var date = new Date();
      date.setTime(date.getTime() + (optDays * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toGMTString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }
})();
