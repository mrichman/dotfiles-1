var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var h = h || {};
h.global = this;
h.Q = function(a) {
  return void 0 !== a;
};
h.ne = function(a, c, d) {
  a = a.split(".");
  d = d || h.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && h.Q(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
h.br = function(a, c) {
  h.ne(a, c);
};
h.pa = !0;
h.oo = "en";
h.le = !0;
h.Vd = !1;
h.Es = function(a) {
  h.og(a);
};
h.og = function(a, c) {
  h.ne(a, c);
};
h.module = function(a) {
  if (!h.isString(a) || !a) {
    throw Error("Invalid module identifier");
  }
  if (!h.vg()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (h.T.Xd) {
    throw Error("goog.module may only be called once per module.");
  }
  h.T.Xd = a;
};
h.module.get = function(a) {
  return h.module.Wl(a);
};
h.module.Wl = function() {
};
h.T = null;
h.vg = function() {
  return null != h.T;
};
h.module.Wd = function() {
  if (!h.vg()) {
    throw Error("goog.module.declareTestMethods must be called from within a goog.module");
  }
  h.T.Wd = !0;
};
h.module.jg = function() {
  h.T.jg = !0;
};
h.Ss = function(a) {
  if (!h.pa) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
h.kr = function() {
};
h.Ie = function(a, c) {
  for (var d = a.split("."), e = c || h.global, f;f = d.shift();) {
    if (h.ye(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
h.Er = function(a, c) {
  var d = c || h.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
h.dq = function(a, c, d, e) {
  if (h.Ag) {
    var f;
    a = a.replace(/\\/g, "/");
    for (var g = h.Ja, k = 0;f = c[k];k++) {
      g.Vb[f] = a, g.ag[a] = !!e;
    }
    for (e = 0;c = d[e];e++) {
      a in g.requires || (g.requires[a] = {}), g.requires[a][c] = !0;
    }
  }
};
h.qt = !1;
h.vn = !0;
h.os = function(a) {
  h.global.console && h.global.console.error(a);
};
h.require = function() {
};
h.Tb = "";
h.km = function() {
};
h.Jr = function(a) {
  return a;
};
h.bq = function() {
  throw Error("unimplemented abstract method");
};
h.fq = function(a) {
  a.wf = function() {
    if (a.Wb) {
      return a.Wb;
    }
    h.pa && (h.yg[h.yg.length] = a);
    return a.Wb = new a;
  };
};
h.yg = [];
h.uk = !0;
h.Mj = h.pa;
h.Oj = {};
h.Ag = !1;
h.Ag && (h.Ij = {}, h.Ja = {ag:{}, Vb:{}, requires:{}, bg:{}, sb:{}}, h.Dg = function() {
  var a = h.global.document;
  return "undefined" != typeof a && "write" in a;
}, h.Ul = function() {
  if (h.global.Ck) {
    h.Tb = h.global.Ck;
  } else {
    if (h.Dg()) {
      for (var a = h.global.document.getElementsByTagName("script"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          h.Tb = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, h.Ud = function(a, c) {
  (h.global.Sj || h.qg)(a, c) && (h.Ja.sb[a] = !0);
}, h.hg = h.global.document && h.global.document.all && !h.global.atob, h.Hj = function(a) {
  h.Ud("", 'goog.retrieveAndExecModule_("' + a + '");') && (h.Ja.sb[a] = !0);
}, h.Nc = [], h.Ks = function(a) {
  for (var c;-1 != (c = a.indexOf("/./"));) {
    a = a.substr(0, c) + a.substr(c + 2);
  }
  for (;-1 != (c = a.indexOf("/../"));) {
    var d = a.lastIndexOf("/", c - 1);
    a = a.substr(0, d) + a.substr(c + 3);
  }
  c = h.global.Sj || h.qg;
  var e = null, d = new h.global.XMLHttpRequest;
  d.onload = function() {
    e = this.responseText;
  };
  d.open("get", a, !1);
  d.send();
  e = d.responseText;
  if (null != e) {
    d = h.Yj(a, e), h.hg ? h.Nc.push(d) : c(a, d), h.Ja.sb[a] = !0;
  } else {
    throw Error("load of " + a + "failed");
  }
}, h.Yj = function(a, c) {
  return h.uk && h.Q(h.global.JSON) ? "goog.loadModule(" + h.global.JSON.stringify(c + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, h.Kk = function() {
  var a = h.Nc.length;
  if (0 < a) {
    var c = h.Nc;
    h.Nc = [];
    for (var d = 0;d < a;d++) {
      h.Hk(c[d]);
    }
  }
}, h.ls = function(a) {
  try {
    h.T = {Xd:void 0, Wd:!1};
    var c;
    if (h.isFunction(a)) {
      c = a.call(h.global, {});
    } else {
      if (h.isString(a)) {
        c = h.Nj.call(h.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var d = h.T.Xd;
    if (!h.isString(d) || !d) {
      throw Error('Invalid module name "' + d + '"');
    }
    h.T.jg ? h.og(d, c) : h.Mj && Object.seal && Object.seal(c);
    h.Oj[d] = c;
    if (h.T.Wd) {
      for (var e in c) {
        if (0 === e.indexOf("test", 0) || "tearDown" == e || "setup" == e) {
          h.global[e] = c[e];
        }
      }
    }
  } finally {
    h.T = null;
  }
}, h.Nj = function(a) {
  eval(a);
  return{};
}, h.qg = function(a, c) {
  if (h.Dg()) {
    var d = h.global.document;
    if ("complete" == d.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return!1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var e = h.hg;
    void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++h.Hg + ")' ", d.write('<script type="text/javascript" src="' + a + '"' + e + ">\x3c/script>")) : d.write('<script type="text/javascript" src="' + a + '">\x3c/script>') : d.write('<script type="text/javascript">' + c + "\x3c/script>");
    return!0;
  }
  return!1;
}, h.Hg = 0, h.zs = function(a, c) {
  "complete" == a.readyState && h.Hg == c && h.Kk();
  return!0;
}, h.tt = function() {
  function a(f) {
    if (!(f in e.sb)) {
      if (!(f in e.bg) && (e.bg[f] = !0, f in e.requires)) {
        for (var g in e.requires[f]) {
          if (!h.vm(g)) {
            if (g in e.Vb) {
              a(e.Vb[g]);
            } else {
              throw Error("Undefined nameToPath for " + g);
            }
          }
        }
      }
      f in d || (d[f] = !0, c.push(f));
    }
  }
  var c = [], d = {}, e = h.Ja, f;
  for (f in h.Ij) {
    e.sb[f] || a(f);
  }
  for (var g = 0;g < c.length;g++) {
    f = c[g], h.Ja.sb[f] = !0;
  }
  var k = h.T;
  h.T = null;
  for (g = 0;g < c.length;g++) {
    if (f = c[g]) {
      e.ag[f] ? h.Hj(h.Tb + f) : h.Ud(h.Tb + f);
    } else {
      throw h.T = k, Error("Undefined script input");
    }
  }
  h.T = k;
}, h.wr = function(a) {
  return a in h.Ja.Vb ? h.Ja.Vb[a] : null;
}, h.Ul(), h.global.Om || h.Ud(h.Tb + "deps.js"));
h.Z = function(a) {
  var c = typeof a;
  if ("object" == c) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return c;
      }
      var d = Object.prototype.toString.call(a);
      if ("[object Window]" == d) {
        return "object";
      }
      if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == c && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return c;
};
h.hj = function(a) {
  return null === a;
};
h.ye = function(a) {
  return null != a;
};
h.isArray = function(a) {
  return "array" == h.Z(a);
};
h.H = function(a) {
  var c = h.Z(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
h.Qr = function(a) {
  return h.isObject(a) && "function" == typeof a.getFullYear;
};
h.isString = function(a) {
  return "string" == typeof a;
};
h.jj = function(a) {
  return "boolean" == typeof a;
};
h.isNumber = function(a) {
  return "number" == typeof a;
};
h.isFunction = function(a) {
  return "function" == h.Z(a);
};
h.isObject = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
h.Sb = function(a) {
  return a[h.Ya] || (a[h.Ya] = ++h.Gk);
};
h.Hr = function(a) {
  return!!a[h.Ya];
};
h.nm = function(a) {
  "removeAttribute" in a && a.removeAttribute(h.Ya);
  try {
    delete a[h.Ya];
  } catch (c) {
  }
};
h.Ya = "closure_uid_" + (1E9 * Math.random() >>> 0);
h.Gk = 0;
h.pr = h.Sb;
h.Is = h.nm;
h.xk = function(a) {
  var c = h.Z(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = h.xk(a[d]);
    }
    return c;
  }
  return a;
};
h.Mk = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
h.Lk = function(a, c, d) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return a.apply(c, d);
    };
  }
  return function() {
    return a.apply(c, arguments);
  };
};
h.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? h.bind = h.Mk : h.bind = h.Lk;
  return h.bind.apply(null, arguments);
};
h.Db = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
h.lh = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
h.now = h.le && Date.now || function() {
  return+new Date;
};
h.Hk = function(a) {
  if (h.global.execScript) {
    h.global.execScript(a, "JavaScript");
  } else {
    if (h.global.eval) {
      if (null == h.Rc && (h.global.eval("var _et_ = 1;"), "undefined" != typeof h.global._et_ ? (delete h.global._et_, h.Rc = !0) : h.Rc = !1), h.Rc) {
        h.global.eval(a);
      } else {
        var c = h.global.document, d = c.createElement("script");
        d.type = "text/javascript";
        d.defer = !1;
        d.appendChild(c.createTextNode(a));
        c.body.appendChild(d);
        c.body.removeChild(d);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
h.Rc = null;
h.nr = function(a, c) {
  var d = function(a) {
    return h.Vg[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = h.Vg ? "BY_WHOLE" == h.Ik ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
h.Ns = function(a, c) {
  h.Vg = a;
  h.Ik = c;
};
h.rr = function(a, c) {
  c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
    return e in c ? c[e] : a;
  }));
  return a;
};
h.sr = function(a) {
  return a;
};
h.k = function(a, c, d) {
  h.ne(a, c, d);
};
h.ta = function(a, c, d) {
  a[c] = d;
};
h.ia = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.xa = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.Dk = function(a, d, g) {
    var k = Array.prototype.slice.call(arguments, 2);
    return c.prototype[d].apply(a, k);
  };
};
h.Dk = function(a, c, d) {
  var e = arguments.callee.caller;
  if (h.Vd || h.pa && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.xa) {
    return e.xa.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
  }
  for (var f = Array.prototype.slice.call(arguments, 2), g = !1, k = a.constructor;k;k = k.xa && k.xa.constructor) {
    if (k.prototype[c] === e) {
      g = !0;
    } else {
      if (g) {
        return k.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
h.scope = function(a) {
  a.call(h.global);
};
h.hl = !0;
h.hl && (Function.prototype.bind = Function.prototype.bind || function(a, c) {
  if (1 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 1);
    d.unshift(this, a);
    return h.bind.apply(null, d);
  }
  return h.bind(this, a);
}, Function.prototype.Db = function(a) {
  var c = Array.prototype.slice.call(arguments);
  c.unshift(this, null);
  return h.bind.apply(null, c);
}, Function.prototype.ia = function(a) {
  h.ia(this, a);
}, Function.prototype.lh = function(a) {
  h.lh(this.prototype, a);
});
h.ra = function(a, c) {
  var d = c.constructor, e = c.bk;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = h.ra.$j(d, a);
  a && h.ia(d, a);
  delete c.constructor;
  delete c.bk;
  h.ra.ug(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : h.ra.ug(d, e));
  return d;
};
h.ra.ik = h.pa;
h.ra.$j = function(a, c) {
  if (h.ra.ik && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[h.jk]) {
      return a;
    }
    var d = function() {
      var c = a.apply(this, arguments) || this;
      c[h.Ya] = c[h.Ya];
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return a;
};
h.ra.Gg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
h.ra.ug = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < h.ra.Gg.length;e++) {
    d = h.ra.Gg[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
h.et = function() {
};
h.jk = "goog_defineClass_legacy_unsealable";
var m = {La:{$n:"LAUNCH", Ig:"STOP", wl:"SET_VOLUME", $k:"GET_STATUS", up:"RECEIVER_STATUS", Wp:"CONNECT", Xp:"CLOSE", Fn:"GET_APP_AVAILABILITY", Ek:"LOAD", vo:"PAUSE", xo:"SEEK", wo:"PLAY", gl:"STOP_MEDIA", el:"MEDIA_GET_STATUS", fl:"MEDIA_SET_VOLUME", uo:"EDIT_TRACKS_INFO", Sn:"INVALID_PLAYER_STATE", no:"LOAD_FAILED", mo:"LOAD_CANCELLED", Tn:"INVALID_REQUEST", yo:"MEDIA_STATUS", ao:"LAUNCH_ERROR", gp:"PING", pp:"PONG"}, ke:{}};
m.ke[m.La.gl] = m.La.Ig;
m.ke[m.La.fl] = m.La.wl;
m.ke[m.La.el] = m.La.$k;
m.Cm = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
m.Lp = function(a) {
  this.type = m.La.Ig;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.Rg = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
h.k("chrome.cast.AutoJoinPolicy", chrome.cast.Rg);
chrome.cast.Sg = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
h.k("chrome.cast.DefaultActionPolicy", chrome.cast.Sg);
chrome.cast.je = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
h.k("chrome.cast.Capability", chrome.cast.je);
chrome.cast.Xk = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
h.k("chrome.cast.ErrorCode", chrome.cast.Xk);
chrome.cast.sl = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
h.k("chrome.cast.ReceiverAvailability", chrome.cast.sl);
chrome.cast.Al = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
h.k("chrome.cast.SenderPlatform", chrome.cast.Al);
chrome.cast.ih = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
h.k("chrome.cast.ReceiverType", chrome.cast.ih);
chrome.cast.Sk = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
h.k("chrome.cast.DialAppState", chrome.cast.Sk);
chrome.cast.rl = {CAST:"cast", STOP:"stop"};
h.k("chrome.cast.ReceiverAction", chrome.cast.rl);
chrome.cast.jh = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
h.k("chrome.cast.SessionStatus", chrome.cast.jh);
chrome.cast.VERSION = [1, 2];
h.k("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.Error = function(a, c, d) {
  this.code = a;
  this.description = c || null;
  this.details = d || null;
};
h.k("chrome.cast.Error", chrome.cast.Error);
chrome.cast.zl = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
h.k("chrome.cast.SenderApplication", chrome.cast.zl);
chrome.cast.Image = function(a) {
  this.url = a;
  this.width = this.height = null;
};
h.k("chrome.cast.Image", chrome.cast.Image);
chrome.cast.Ug = function(a, c) {
  this.level = h.Q(a) ? a : null;
  this.muted = h.Q(c) ? c : null;
};
h.k("chrome.cast.Volume", chrome.cast.Ug);
chrome.cast.media.jl = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
h.k("chrome.cast.media.MediaCommand", chrome.cast.media.jl);
chrome.cast.media.ja = {GENERIC:0, TV_SHOW:1, MOVIE:2, MUSIC_TRACK:3, PHOTO:4};
h.k("chrome.cast.media.MetadataType", chrome.cast.media.ja);
chrome.cast.media.Tg = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
h.k("chrome.cast.media.PlayerState", chrome.cast.media.Tg);
chrome.cast.media.vl = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
h.k("chrome.cast.media.ResumeState", chrome.cast.media.vl);
chrome.cast.media.kh = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
h.k("chrome.cast.media.StreamType", chrome.cast.media.kh);
chrome.cast.media.cl = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
h.k("chrome.cast.media.IdleReason", chrome.cast.media.cl);
chrome.cast.media.Kl = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
h.k("chrome.cast.media.TrackType", chrome.cast.media.Kl);
chrome.cast.media.Hl = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
h.k("chrome.cast.media.TextTrackType", chrome.cast.media.Hl);
chrome.cast.media.Dl = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
h.k("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.Dl);
chrome.cast.media.Il = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
h.k("chrome.cast.media.TextTrackWindowType", chrome.cast.media.Il);
chrome.cast.media.El = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
h.k("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.El);
chrome.cast.media.Fl = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
h.k("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.Fl);
chrome.cast.media.bl = function() {
  this.customData = null;
};
h.k("chrome.cast.media.GetStatusRequest", chrome.cast.media.bl);
chrome.cast.media.nl = function() {
  this.customData = null;
};
h.k("chrome.cast.media.PauseRequest", chrome.cast.media.nl);
chrome.cast.media.pl = function() {
  this.customData = null;
};
h.k("chrome.cast.media.PlayRequest", chrome.cast.media.pl);
chrome.cast.media.yl = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
h.k("chrome.cast.media.SeekRequest", chrome.cast.media.yl);
chrome.cast.media.Cl = function() {
  this.customData = null;
};
h.k("chrome.cast.media.StopRequest", chrome.cast.media.Cl);
chrome.cast.media.Ml = function(a) {
  this.volume = a;
  this.customData = null;
};
h.k("chrome.cast.media.VolumeRequest", chrome.cast.media.Ml);
chrome.cast.media.dl = function(a) {
  this.type = m.La.Ek;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
h.k("chrome.cast.media.LoadRequest", chrome.cast.media.dl);
chrome.cast.media.Wk = function(a, c) {
  this.requestId = null;
  this.activeTrackIds = a || null;
  this.textTrackStyle = c || null;
};
h.k("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.Wk);
chrome.cast.media.al = function() {
  this.metadataType = this.type = chrome.cast.media.ja.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
h.k("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.al);
chrome.cast.media.ll = function() {
  this.metadataType = this.type = chrome.cast.media.ja.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
h.k("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.ll);
chrome.cast.media.Ll = function() {
  this.metadataType = this.type = chrome.cast.media.ja.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
h.k("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.Ll);
chrome.cast.media.ml = function() {
  this.metadataType = this.type = chrome.cast.media.ja.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
h.k("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.ml);
chrome.cast.media.ol = function() {
  this.metadataType = this.type = chrome.cast.media.ja.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
h.k("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.ol);
chrome.cast.media.kl = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.kh.BUFFERED;
  this.contentType = c;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
h.k("chrome.cast.media.MediaInfo", chrome.cast.media.kl);
chrome.cast.media.il = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.Tg.IDLE;
  this.currentTime = 0;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Ug;
  this.customData = this.activeTrackIds = this.idleReason = null;
};
h.k("chrome.cast.media.Media", chrome.cast.media.il);
chrome.cast.media.Rk = "CC1AD845";
h.k("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Rk);
chrome.cast.media.timeout = {};
h.k("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
h.ta(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.Xl = 0;
h.ta(chrome.cast.media.timeout, "getStatus", chrome.cast.media.timeout.Xl);
chrome.cast.media.timeout.play = 0;
h.ta(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
h.ta(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
h.ta(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
h.ta(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.pm = 0;
h.ta(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.pm);
chrome.cast.media.timeout.Rl = 0;
h.ta(chrome.cast.media.timeout, "editTracksInfo", chrome.cast.media.timeout.Rl);
chrome.cast.media.Jl = function(a, c) {
  this.trackId = a;
  this.trackContentType = this.trackContentId = null;
  this.type = c;
  this.customData = this.subtype = this.language = this.name = null;
};
h.k("chrome.cast.media.Track", chrome.cast.media.Jl);
chrome.cast.media.Gl = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
h.k("chrome.cast.media.TextTrackStyle", chrome.cast.media.Gl);
chrome.cast.Ok = function(a, c, d, e, f) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.Rg.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.Sg.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
h.k("chrome.cast.ApiConfig", chrome.cast.Ok);
chrome.cast.Vk = function(a, c) {
  this.appName = a;
  this.launchParameter = c || null;
};
h.k("chrome.cast.DialRequest", chrome.cast.Vk);
chrome.cast.Tk = function(a, c, d) {
  this.receiver = a;
  this.appState = c;
  this.extraData = d || null;
};
h.k("chrome.cast.DialLaunchData", chrome.cast.Tk);
chrome.cast.Uk = function(a, c) {
  this.doLaunch = a;
  this.launchParameter = c || null;
};
h.k("chrome.cast.DialLaunchResponse", chrome.cast.Uk);
chrome.cast.Bl = function(a, c, d) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.je.VIDEO_OUT, chrome.cast.je.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.requestSession;
  this.language = null;
};
h.k("chrome.cast.SessionRequest", chrome.cast.Bl);
chrome.cast.ql = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.ih.CAST;
  this.displayStatus = this.isActiveInput = null;
};
h.k("chrome.cast.Receiver", chrome.cast.ql);
chrome.cast.tl = function(a, c) {
  this.statusText = a;
  this.appImages = c;
  this.showStop = null;
};
h.k("chrome.cast.ReceiverDisplayStatus", chrome.cast.tl);
chrome.cast.Qc = function(a, c, d, e, f) {
  this.sessionId = a;
  this.appId = c;
  this.displayName = d;
  this.statusText = null;
  this.appImages = e;
  this.receiver = f;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.jh.CONNECTED;
  this.transportId = "";
};
h.k("chrome.cast.Session", chrome.cast.Qc);
chrome.cast.Qc.Pk = "custom_receiver_session_id";
h.ta(chrome.cast.Qc, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.Qc.Pk);
chrome.cast.timeout = {};
h.k("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.timeout.requestSession = 1E4;
chrome.cast.timeout.leaveSession = 3E3;
chrome.cast.timeout.stopSession = 3E3;
chrome.cast.timeout.setReceiverVolume = 3E3;
chrome.cast.timeout.sendCustomMessage = 3E3;
m.ie = function(a, c, d) {
  h.isNumber(d);
  this.pe = null;
};
m.ie.Km = 432E5;
m.ie.prototype.Va = function() {
  this.pe && (clearTimeout(this.pe), this.pe = null);
};
m.ie.xs = function() {
};
m.Wn = {};
m.Sd = function(a, c, d, e, f, g) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = h.isNumber(f) ? f : 0;
  this.receiverId = g || null;
  this.receiverList = null;
};
m.J = {Tj:"iframe_init_result", If:"fail_to_connect_to_extension", Cj:"client_reconnect", Bj:"v2_message", oj:"app_message", Nm:"client_init", po:"log_message", vp:"request_session", wp:"request_session_by_id", bo:"leave_session", Mm:"client_disconnect", Gp:"set_custom_receivers", Xm:"custom_dial_launch_response", Hp:"set_receiver_display_status", vj:"receiver_availability", uj:"receiver_action", tj:"new_session", Aj:"update_session", rj:"disconnect_session", wj:"remove_session", pj:"app_message_success", 
sj:"leave_session_success", zj:"set_receiver_volume_success", xj:"set_custom_receivers_success", ERROR:"error", qj:"custom_dial_launch_request", yj:"set_receiver_display_status_success"};
h.debug = {};
h.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, h.debug.Error);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
h.ia(h.debug.Error, Error);
h.debug.Error.prototype.name = "CustomError";
h.Rf = {};
h.Rf.cj = {bj:1, Bm:2, TEXT:3, Im:4, yn:5, xn:6, rp:7, Pm:8, bn:9, dn:10, cn:11, Zo:12};
h.b = {};
h.b.rd = !1;
h.b.ki = {ji:"\u00a0"};
h.b.Xc = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
h.b.rh = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
h.b.Hq = function(a, c) {
  return 0 == h.b.nf(c, a.substr(0, c.length));
};
h.b.Fq = function(a, c) {
  return 0 == h.b.nf(c, a.substr(a.length - c.length, c.length));
};
h.b.Gq = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
h.b.oi = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
h.b.Nq = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
h.b.mf = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
h.b.Tr = function(a) {
  return 0 == a.length;
};
h.b.R = h.b.mf;
h.b.am = function(a) {
  return h.b.mf(h.b.gi(a));
};
h.b.Sr = h.b.am;
h.b.Or = function(a) {
  return!/[^\t\n\r ]/.test(a);
};
h.b.Lr = function(a) {
  return!/[^a-zA-Z]/.test(a);
};
h.b.$r = function(a) {
  return!/[^0-9]/.test(a);
};
h.b.Mr = function(a) {
  return!/[^a-zA-Z0-9]/.test(a);
};
h.b.ds = function(a) {
  return " " == a;
};
h.b.es = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
h.b.ct = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
h.b.Eq = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
h.b.vs = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
h.b.us = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
h.b.Mq = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
h.b.trim = h.le && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
h.b.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
h.b.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
h.b.nf = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
h.b.of = /(\.\d+)|(\d+)|(\D+)/g;
h.b.ys = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return-1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(h.b.of), e = c.toLowerCase().match(h.b.of), f = Math.min(d.length, e.length), g = 0;g < f;g++) {
    var k = d[g], l = e[g];
    if (k != l) {
      return d = parseInt(k, 10), !isNaN(d) && (e = parseInt(l, 10), !isNaN(e) && d - e) ? d - e : k < l ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
h.b.yb = function(a) {
  return encodeURIComponent(String(a));
};
h.b.fc = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
h.b.ni = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
h.b.Nb = function(a, c) {
  if (c) {
    a = a.replace(h.b.Qe, "&amp;").replace(h.b.Te, "&lt;").replace(h.b.Se, "&gt;").replace(h.b.Ve, "&quot;").replace(h.b.We, "&#39;").replace(h.b.Ue, "&#0;"), h.b.rd && (a = a.replace(h.b.Re, "&#101;"));
  } else {
    if (!h.b.Ph.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(h.b.Qe, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(h.b.Te, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(h.b.Se, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(h.b.Ve, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(h.b.We, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(h.b.Ue, "&#0;"));
    h.b.rd && -1 != a.indexOf("e") && (a = a.replace(h.b.Re, "&#101;"));
  }
  return a;
};
h.b.Qe = /&/g;
h.b.Te = /</g;
h.b.Se = />/g;
h.b.Ve = /"/g;
h.b.We = /'/g;
h.b.Ue = /\x00/g;
h.b.Re = /e/g;
h.b.Ph = h.b.rd ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
h.b.ff = function(a) {
  return h.b.contains(a, "&") ? "document" in h.global ? h.b.lf(a) : h.b.ii(a) : a;
};
h.b.mt = function(a, c) {
  return h.b.contains(a, "&") ? h.b.lf(a, c) : a;
};
h.b.lf = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : h.global.document.createElement("div");
  return a.replace(h.b.mi, function(a, c) {
    var k = d[a];
    if (k) {
      return k;
    }
    if ("#" == c.charAt(0)) {
      var l = Number("0" + c.substr(1));
      isNaN(l) || (k = String.fromCharCode(l));
    }
    k || (e.innerHTML = a + " ", k = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = k;
  });
};
h.b.ii = function(a) {
  return a.replace(/&([^;]+);/g, function(a, d) {
    switch(d) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return'"';
      default:
        if ("#" == d.charAt(0)) {
          var e = Number("0" + d.substr(1));
          if (!isNaN(e)) {
            return String.fromCharCode(e);
          }
        }
        return a;
    }
  });
};
h.b.mi = /&([^;\s<&]+);?/g;
h.b.rt = function(a, c) {
  return h.b.ni(a.replace(/  /g, " &#160;"), c);
};
h.b.Cs = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + h.b.ki.ji);
};
h.b.dt = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
h.b.truncate = function(a, c, d) {
  d && (a = h.b.ff(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = h.b.Nb(a));
  return a;
};
h.b.lt = function(a, c, d, e) {
  d && (a = h.b.ff(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = h.b.Nb(a));
  return a;
};
h.b.vd = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
h.b.zc = {"'":"\\'"};
h.b.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = h.b.vd[e] || (31 < f && 127 > f ? e : h.b.jf(e));
  }
  c.push('"');
  return c.join("");
};
h.b.er = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = h.b.jf(a.charAt(d));
  }
  return c.join("");
};
h.b.jf = function(a) {
  if (a in h.b.zc) {
    return h.b.zc[a];
  }
  if (a in h.b.vd) {
    return h.b.zc[a] = h.b.vd[a];
  }
  var c = a, d = a.charCodeAt(0);
  if (31 < d && 127 > d) {
    c = a;
  } else {
    if (256 > d) {
      if (c = "\\x", 16 > d || 256 < d) {
        c += "0";
      }
    } else {
      c = "\\u", 4096 > d && (c += "0");
    }
    c += d.toString(16).toUpperCase();
  }
  return h.b.zc[a] = c;
};
h.b.contains = function(a, c) {
  return-1 != a.indexOf(c);
};
h.b.sh = function(a, c) {
  return h.b.contains(a.toLowerCase(), c.toLowerCase());
};
h.b.Tq = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
h.b.eb = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
h.b.remove = function(a, c) {
  var d = new RegExp(h.b.xd(c), "");
  return a.replace(d, "");
};
h.b.removeAll = function(a, c) {
  var d = new RegExp(h.b.xd(c), "g");
  return a.replace(d, "");
};
h.b.xd = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
h.b.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
h.b.Bs = function(a, c, d) {
  a = h.Q(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return h.b.repeat("0", Math.max(0, c - d)) + a;
};
h.b.gi = function(a) {
  return null == a ? "" : String(a);
};
h.b.qh = function(a) {
  return Array.prototype.join.call(arguments, "");
};
h.b.re = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ h.now()).toString(36);
};
h.b.tc = function(a, c) {
  for (var d = 0, e = h.b.trim(String(a)).split("."), f = h.b.trim(String(c)).split("."), g = Math.max(e.length, f.length), k = 0;0 == d && k < g;k++) {
    var l = e[k] || "", n = f[k] || "", p = /(\d*)(\D*)/g, t = /(\d*)(\D*)/g;
    do {
      var q = p.exec(l) || ["", "", ""], r = t.exec(n) || ["", "", ""];
      if (0 == q[0].length && 0 == r[0].length) {
        break;
      }
      d = h.b.zd(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || h.b.zd(0 == q[2].length, 0 == r[2].length) || h.b.zd(q[2], r[2]);
    } while (0 == d);
  }
  return d;
};
h.b.zd = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
h.b.li = 4294967296;
h.b.Ir = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= h.b.li;
  }
  return c;
};
h.b.pi = 2147483648 * Math.random() | 0;
h.b.Yq = function() {
  return "goog_" + h.b.pi++;
};
h.b.it = function(a) {
  var c = Number(a);
  return 0 == c && h.b.R(a) ? NaN : c;
};
h.b.Zr = function(a) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
h.b.fs = function(a) {
  return/^([A-Z][a-z]*)+$/.test(a);
};
h.b.ht = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
h.b.jt = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
h.b.kt = function(a, c) {
  var d = h.isString(c) ? h.b.xd(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
h.b.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return h.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
h.b.Ys = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
h.l = {};
h.l.fa = h.pa;
h.l.Jc = function(a, c) {
  c.unshift(a);
  h.debug.Error.call(this, h.b.oi.apply(null, c));
  c.shift();
};
h.ia(h.l.Jc, h.debug.Error);
h.l.Jc.prototype.name = "AssertionError";
h.l.Qk = function(a) {
  throw a;
};
h.l.Td = h.l.Qk;
h.l.ya = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), g = e
  } else {
    a && (f += ": " + a, g = c);
  }
  a = new h.l.Jc("" + f, g || []);
  h.l.Td(a);
};
h.l.Os = function(a) {
  h.l.fa && (h.l.Td = a);
};
h.l.assert = function(a, c, d) {
  h.l.fa && !a && h.l.ya("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.hc = function(a, c) {
  h.l.fa && h.l.Td(new h.l.Jc("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
h.l.tq = function(a, c, d) {
  h.l.fa && !h.isNumber(a) && h.l.ya("Expected number but got %s: %s.", [h.Z(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.wq = function(a, c, d) {
  h.l.fa && !h.isString(a) && h.l.ya("Expected string but got %s: %s.", [h.Z(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.rq = function(a, c, d) {
  h.l.fa && !h.isFunction(a) && h.l.ya("Expected function but got %s: %s.", [h.Z(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.uq = function(a, c, d) {
  h.l.fa && !h.isObject(a) && h.l.ya("Expected object but got %s: %s.", [h.Z(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.oq = function(a, c, d) {
  h.l.fa && !h.isArray(a) && h.l.ya("Expected array but got %s: %s.", [h.Z(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.pq = function(a, c, d) {
  h.l.fa && !h.jj(a) && h.l.ya("Expected boolean but got %s: %s.", [h.Z(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.qq = function(a, c, d) {
  !h.l.fa || h.isObject(a) && a.nodeType == h.Rf.cj.bj || h.l.ya("Expected Element but got %s: %s.", [h.Z(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.sq = function(a, c, d, e) {
  !h.l.fa || a instanceof c || h.l.ya("instanceof check failed.", null, d, Array.prototype.slice.call(arguments, 3));
  return a;
};
h.l.vq = function() {
  for (var a in Object.prototype) {
    h.l.hc(a + " should not be enumerable in Object.prototype.");
  }
};
h.a = {};
h.Aa = h.le;
h.a.za = !1;
h.a.mm = function(a) {
  return a[a.length - 1];
};
h.a.hs = h.a.mm;
h.a.p = Array.prototype;
h.a.indexOf = h.Aa && (h.a.za || h.a.p.indexOf) ? function(a, c, d) {
  return h.a.p.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (h.isString(a)) {
    return h.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
h.a.lastIndexOf = h.Aa && (h.a.za || h.a.p.lastIndexOf) ? function(a, c, d) {
  return h.a.p.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (h.isString(a)) {
    return h.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
h.a.forEach = h.Aa && (h.a.za || h.a.p.forEach) ? function(a, c, d) {
  h.a.p.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    g in f && c.call(d, f[g], g, a);
  }
};
h.a.bf = function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in f && c.call(d, f[e], e, a);
  }
};
h.a.filter = h.Aa && (h.a.za || h.a.p.filter) ? function(a, c, d) {
  return h.a.p.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], g = 0, k = h.isString(a) ? a.split("") : a, l = 0;l < e;l++) {
    if (l in k) {
      var n = k[l];
      c.call(d, n, l, a) && (f[g++] = n);
    }
  }
  return f;
};
h.a.map = h.Aa && (h.a.za || h.a.p.map) ? function(a, c, d) {
  return h.a.p.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), g = h.isString(a) ? a.split("") : a, k = 0;k < e;k++) {
    k in g && (f[k] = c.call(d, g[k], k, a));
  }
  return f;
};
h.a.reduce = h.Aa && (h.a.za || h.a.p.reduce) ? function(a, c, d, e) {
  e && (c = h.bind(c, e));
  return h.a.p.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  h.a.forEach(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
h.a.reduceRight = h.Aa && (h.a.za || h.a.p.reduceRight) ? function(a, c, d, e) {
  e && (c = h.bind(c, e));
  return h.a.p.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  h.a.bf(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
h.a.some = h.Aa && (h.a.za || h.a.p.some) ? function(a, c, d) {
  return h.a.p.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return!0;
    }
  }
  return!1;
};
h.a.every = h.Aa && (h.a.za || h.a.p.every) ? function(a, c, d) {
  return h.a.p.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && !c.call(d, f[g], g, a)) {
      return!1;
    }
  }
  return!0;
};
h.a.count = function(a, c, d) {
  var e = 0;
  h.a.forEach(a, function(a, g, k) {
    c.call(d, a, g, k) && ++e;
  }, d);
  return e;
};
h.a.find = function(a, c, d) {
  c = h.a.af(a, c, d);
  return 0 > c ? null : h.isString(a) ? a.charAt(c) : a[c];
};
h.a.af = function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return g;
    }
  }
  return-1;
};
h.a.gr = function(a, c, d) {
  c = h.a.$h(a, c, d);
  return 0 > c ? null : h.isString(a) ? a.charAt(c) : a[c];
};
h.a.$h = function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, e = e - 1;0 <= e;e--) {
    if (e in f && c.call(d, f[e], e, a)) {
      return e;
    }
  }
  return-1;
};
h.a.contains = function(a, c) {
  return 0 <= h.a.indexOf(a, c);
};
h.a.R = function(a) {
  return 0 == a.length;
};
h.a.clear = function(a) {
  if (!h.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
h.a.insert = function(a, c) {
  h.a.contains(a, c) || a.push(c);
};
h.a.cf = function(a, c, d) {
  h.a.splice(a, d, 0, c);
};
h.a.Kr = function(a, c, d) {
  h.Db(h.a.splice, a, d, 0).apply(null, c);
};
h.a.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = h.a.indexOf(a, d)) ? a.push(c) : h.a.cf(a, c, e);
};
h.a.remove = function(a, c) {
  var d = h.a.indexOf(a, c), e;
  (e = 0 <= d) && h.a.eb(a, d);
  return e;
};
h.a.eb = function(a, c) {
  return 1 == h.a.p.splice.call(a, c, 1).length;
};
h.a.Js = function(a, c, d) {
  c = h.a.af(a, c, d);
  return 0 <= c ? (h.a.eb(a, c), !0) : !1;
};
h.a.Gs = function(a, c, d) {
  var e = 0;
  h.a.bf(a, function(f, g) {
    c.call(d, f, g, a) && h.a.eb(a, g) && e++;
  });
  return e;
};
h.a.concat = function(a) {
  return h.a.p.concat.apply(h.a.p, arguments);
};
h.a.join = function(a) {
  return h.a.p.concat.apply(h.a.p, arguments);
};
h.a.Ha = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return[];
};
h.a.clone = h.a.Ha;
h.a.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d], f;
    if (h.isArray(e) || (f = h.H(e)) && Object.prototype.hasOwnProperty.call(e, "callee")) {
      a.push.apply(a, e);
    } else {
      if (f) {
        for (var g = a.length, k = e.length, l = 0;l < k;l++) {
          a[g + l] = e[l];
        }
      } else {
        a.push(e);
      }
    }
  }
};
h.a.splice = function(a, c, d, e) {
  return h.a.p.splice.apply(a, h.a.slice(arguments, 1));
};
h.a.slice = function(a, c, d) {
  return 2 >= arguments.length ? h.a.p.slice.call(a, c) : h.a.p.slice.call(a, c, d);
};
h.a.ci = function(a, c, d) {
  c = c || a;
  d = d || function() {
    return h.isObject(k) ? "o" + h.Sb(k) : (typeof k).charAt(0) + k;
  };
  for (var e = {}, f = 0, g = 0;g < a.length;) {
    var k = a[g++], l = d(k);
    Object.prototype.hasOwnProperty.call(e, l) || (e[l] = !0, c[f++] = k);
  }
  c.length = f;
};
h.a.Ze = function(a, c, d) {
  return h.a.$e(a, d || h.a.Ta, !1, c);
};
h.a.zq = function(a, c, d) {
  return h.a.$e(a, c, !0, void 0, d);
};
h.a.$e = function(a, c, d, e, f) {
  for (var g = 0, k = a.length, l;g < k;) {
    var n = g + k >> 1, p;
    p = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < p ? g = n + 1 : (k = n, l = !p);
  }
  return l ? g : ~g;
};
h.a.sort = function(a, c) {
  a.sort(c || h.a.Ta);
};
h.a.Zs = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || h.a.Ta;
  h.a.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
h.a.di = function(a, c, d) {
  var e = d || h.a.Ta;
  h.a.sort(a, function(a, d) {
    return e(c(a), c(d));
  });
};
h.a.Xs = function(a, c, d) {
  h.a.di(a, function(a) {
    return a[c];
  }, d);
};
h.a.ve = function(a, c, d) {
  c = c || h.a.Ta;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return!1;
    }
  }
  return!0;
};
h.a.equals = function(a, c, d) {
  if (!h.H(a) || !h.H(c) || a.length != c.length) {
    return!1;
  }
  var e = a.length;
  d = d || h.a.xe;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return!1;
    }
  }
  return!0;
};
h.a.Qq = function(a, c, d) {
  d = d || h.a.Ta;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var g = d(a[f], c[f]);
    if (0 != g) {
      return g;
    }
  }
  return h.a.Ta(a.length, c.length);
};
h.a.Ta = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
h.a.xe = function(a, c) {
  return a === c;
};
h.a.xq = function(a, c, d) {
  d = h.a.Ze(a, c, d);
  return 0 > d ? (h.a.cf(a, c, -(d + 1)), !0) : !1;
};
h.a.yq = function(a, c, d) {
  c = h.a.Ze(a, c, d);
  return 0 <= c ? h.a.eb(a, c) : !1;
};
h.a.Aq = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var g = a[f], k = c.call(d, g, f, a);
    h.Q(k) && (e[k] || (e[k] = [])).push(g);
  }
  return e;
};
h.a.qm = function(a, c, d) {
  var e = {};
  h.a.forEach(a, function(f, g) {
    e[c.call(d, f, g, a)] = f;
  });
  return e;
};
h.a.oc = function(a, c, d) {
  var e = [], f = 0, g = a;
  d = d || 1;
  void 0 !== c && (f = a, g = c);
  if (0 > d * (g - f)) {
    return[];
  }
  if (0 < d) {
    for (a = f;a < g;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > g;a += d) {
      e.push(a);
    }
  }
  return e;
};
h.a.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
h.a.ai = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    if (h.isArray(e)) {
      for (var f = 0;f < e.length;f += 8192) {
        for (var g = h.a.slice(e, f, f + 8192), g = h.a.ai.apply(null, g), k = 0;k < g.length;k++) {
          c.push(g[k]);
        }
      }
    } else {
      c.push(e);
    }
  }
  return c;
};
h.a.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? h.a.p.unshift.apply(a, a.splice(-c, c)) : 0 > c && h.a.p.push.apply(a, a.splice(0, -c)));
  return a;
};
h.a.ss = function(a, c, d) {
  c = h.a.p.splice.call(a, c, 1);
  h.a.p.splice.call(a, d, 0, c[0]);
};
h.a.Gf = function(a) {
  if (!arguments.length) {
    return[];
  }
  for (var c = [], d = 0;;d++) {
    for (var e = [], f = 0;f < arguments.length;f++) {
      var g = arguments[f];
      if (d >= g.length) {
        return c;
      }
      e.push(g[d]);
    }
    c.push(e);
  }
};
h.a.Vs = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), g = a[e];
    a[e] = a[f];
    a[f] = g;
  }
};
h.q = {};
h.q.constant = function(a) {
  return function() {
    return a;
  };
};
h.q.Bn = h.q.constant(!1);
h.q.Tp = h.q.constant(!0);
h.q.$o = h.q.constant(null);
h.q.identity = function(a) {
  return a;
};
h.q.error = function(a) {
  return function() {
    throw Error(a);
  };
};
h.q.hc = function(a) {
  return function() {
    throw a;
  };
};
h.q.ms = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
h.q.ws = function(a) {
  return function() {
    return arguments[a];
  };
};
h.q.st = function(a, c) {
  return h.q.dk(a, h.q.constant(c));
};
h.q.Rq = function(a, c) {
  var d = arguments, e = d.length;
  return function() {
    var a;
    e && (a = d[e - 1].apply(this, arguments));
    for (var c = e - 2;0 <= c;c--) {
      a = d[c].call(this, a);
    }
    return a;
  };
};
h.q.dk = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, f = 0;f < d;f++) {
      a = c[f].apply(this, arguments);
    }
    return a;
  };
};
h.q.gq = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (!c[a].apply(this, arguments)) {
        return!1;
      }
    }
    return!0;
  };
};
h.q.As = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (c[a].apply(this, arguments)) {
        return!0;
      }
    }
    return!1;
  };
};
h.q.Ci = function(a) {
  return function() {
    return!a.apply(this, arguments);
  };
};
h.q.create = function(a, c) {
  var d = function() {
  };
  d.prototype = a.prototype;
  d = new d;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
h.q.ck = !0;
h.q.Dq = function(a) {
  var c = !1, d;
  return function() {
    if (!h.q.ck) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
h.n = {};
h.n.Fs = function(a) {
  return Math.floor(Math.random() * a);
};
h.n.nt = function(a, c) {
  return a + Math.random() * (c - a);
};
h.n.Kq = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
h.n.mg = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
h.n.js = function(a, c, d) {
  return a + d * (c - a);
};
h.n.ts = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
h.n.Yd = function(a) {
  return h.n.mg(a, 360);
};
h.n.$s = function(a) {
  return h.n.mg(a, 2 * Math.PI);
};
h.n.ng = function(a) {
  return a * Math.PI / 180;
};
h.n.Lj = function(a) {
  return 180 * a / Math.PI;
};
h.n.jq = function(a, c) {
  return c * Math.cos(h.n.ng(a));
};
h.n.kq = function(a, c) {
  return c * Math.sin(h.n.ng(a));
};
h.n.hq = function(a, c, d, e) {
  return h.n.Yd(h.n.Lj(Math.atan2(e - c, d - a)));
};
h.n.iq = function(a, c) {
  var d = h.n.Yd(c) - h.n.Yd(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
h.n.sign = function(a) {
  return 0 == a ? 0 : 0 > a ? -1 : 1;
};
h.n.ps = function(a, c, d, e) {
  d = d || function(a, c) {
    return a == c;
  };
  e = e || function(c) {
    return a[c];
  };
  for (var f = a.length, g = c.length, k = [], l = 0;l < f + 1;l++) {
    k[l] = [], k[l][0] = 0;
  }
  for (var n = 0;n < g + 1;n++) {
    k[0][n] = 0;
  }
  for (l = 1;l <= f;l++) {
    for (n = 1;n <= g;n++) {
      d(a[l - 1], c[n - 1]) ? k[l][n] = k[l - 1][n - 1] + 1 : k[l][n] = Math.max(k[l - 1][n], k[l][n - 1]);
    }
  }
  for (var p = [], l = f, n = g;0 < l && 0 < n;) {
    d(a[l - 1], c[n - 1]) ? (p.unshift(e(l - 1, n - 1)), l--, n--) : k[l - 1][n] > k[l][n - 1] ? l-- : n--;
  }
  return p;
};
h.n.Ne = function(a) {
  return h.a.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
h.n.Kh = function(a) {
  return h.n.Ne.apply(null, arguments) / arguments.length;
};
h.n.Qj = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = h.n.Kh.apply(null, arguments);
  return h.n.Ne.apply(null, h.a.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
h.n.at = function(a) {
  return Math.sqrt(h.n.Qj.apply(null, arguments));
};
h.n.Xr = function(a) {
  return isFinite(a) && 0 == a % 1;
};
h.n.Ur = function(a) {
  return isFinite(a) && !isNaN(a);
};
h.n.ns = function(a) {
  if (0 < a) {
    var c = Math.round(Math.log(a) * Math.LOG10E);
    return c - (parseFloat("1e" + c) > a);
  }
  return 0 == a ? -Infinity : NaN;
};
h.n.Ms = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
h.n.Ls = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
h.e = {};
h.e.L = "StopIteration" in h.global ? h.global.StopIteration : Error("StopIteration");
h.e.s = function() {
};
h.e.s.prototype.next = function() {
  throw h.e.L;
};
h.e.s.prototype.Kb = function() {
  return this;
};
h.e.F = function(a) {
  if (a instanceof h.e.s) {
    return a;
  }
  if ("function" == typeof a.Kb) {
    return a.Kb(!1);
  }
  if (h.H(a)) {
    var c = 0, d = new h.e.s;
    d.next = function() {
      for (;;) {
        if (c >= a.length) {
          throw h.e.L;
        }
        if (c in a) {
          return a[c++];
        }
        c++;
      }
    };
    return d;
  }
  throw Error("Not implemented");
};
h.e.forEach = function(a, c, d) {
  if (h.H(a)) {
    try {
      h.a.forEach(a, c, d);
    } catch (e) {
      if (e !== h.e.L) {
        throw e;
      }
    }
  } else {
    a = h.e.F(a);
    try {
      for (;;) {
        c.call(d, a.next(), void 0, a);
      }
    } catch (f) {
      if (f !== h.e.L) {
        throw f;
      }
    }
  }
};
h.e.filter = function(a, c, d) {
  var e = h.e.F(a);
  a = new h.e.s;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (c.call(d, a, void 0, e)) {
        return a;
      }
    }
  };
  return a;
};
h.e.fr = function(a, c, d) {
  return h.e.filter(a, h.q.Ci(c), d);
};
h.e.oc = function(a, c, d) {
  var e = 0, f = a, g = d || 1;
  1 < arguments.length && (e = a, f = c);
  if (0 == g) {
    throw Error("Range step argument must not be zero");
  }
  var k = new h.e.s;
  k.next = function() {
    if (0 < g && e >= f || 0 > g && e <= f) {
      throw h.e.L;
    }
    var a = e;
    e += g;
    return a;
  };
  return k;
};
h.e.join = function(a, c) {
  return h.e.Ha(a).join(c);
};
h.e.map = function(a, c, d) {
  var e = h.e.F(a);
  a = new h.e.s;
  a.next = function() {
    var a = e.next();
    return c.call(d, a, void 0, e);
  };
  return a;
};
h.e.reduce = function(a, c, d, e) {
  var f = d;
  h.e.forEach(a, function(a) {
    f = c.call(e, f, a);
  });
  return f;
};
h.e.some = function(a, c, d) {
  a = h.e.F(a);
  try {
    for (;;) {
      if (c.call(d, a.next(), void 0, a)) {
        return!0;
      }
    }
  } catch (e) {
    if (e !== h.e.L) {
      throw e;
    }
  }
  return!1;
};
h.e.every = function(a, c, d) {
  a = h.e.F(a);
  try {
    for (;;) {
      if (!c.call(d, a.next(), void 0, a)) {
        return!1;
      }
    }
  } catch (e) {
    if (e !== h.e.L) {
      throw e;
    }
  }
  return!0;
};
h.e.Jq = function(a) {
  return h.e.Vi(arguments);
};
h.e.Vi = function(a) {
  var c = h.e.F(a);
  a = new h.e.s;
  var d = null;
  a.next = function() {
    for (;;) {
      if (null == d) {
        var a = c.next();
        d = h.e.F(a);
      }
      try {
        return d.next();
      } catch (f) {
        if (f !== h.e.L) {
          throw f;
        }
        d = null;
      }
    }
  };
  return a;
};
h.e.cr = function(a, c, d) {
  var e = h.e.F(a);
  a = new h.e.s;
  var f = !0;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (!f || !c.call(d, a, void 0, e)) {
        return f = !1, a;
      }
    }
  };
  return a;
};
h.e.ft = function(a, c, d) {
  var e = h.e.F(a);
  a = new h.e.s;
  var f = !0;
  a.next = function() {
    for (;;) {
      if (f) {
        var a = e.next();
        if (c.call(d, a, void 0, e)) {
          return a;
        }
        f = !1;
      } else {
        throw h.e.L;
      }
    }
  };
  return a;
};
h.e.Ha = function(a) {
  if (h.H(a)) {
    return h.a.Ha(a);
  }
  a = h.e.F(a);
  var c = [];
  h.e.forEach(a, function(a) {
    c.push(a);
  });
  return c;
};
h.e.equals = function(a, c, d) {
  a = h.e.uh({}, a, c);
  var e = d || h.a.xe;
  return h.e.every(a, function(a) {
    return e(a[0], a[1]);
  });
};
h.e.Mi = function(a, c) {
  try {
    return h.e.F(a).next();
  } catch (d) {
    if (d != h.e.L) {
      throw d;
    }
    return c;
  }
};
h.e.product = function(a) {
  if (h.a.some(arguments, function(a) {
    return!a.length;
  }) || !arguments.length) {
    return new h.e.s;
  }
  var c = new h.e.s, d = arguments, e = h.a.repeat(0, d.length);
  c.next = function() {
    if (e) {
      for (var a = h.a.map(e, function(a, c) {
        return d[c][a];
      }), c = e.length - 1;0 <= c;c--) {
        if (e[c] < d[c].length - 1) {
          e[c]++;
          break;
        }
        if (0 == c) {
          e = null;
          break;
        }
        e[c] = 0;
      }
      return a;
    }
    throw h.e.L;
  };
  return c;
};
h.e.Zq = function(a) {
  var c = h.e.F(a), d = [], e = 0;
  a = new h.e.s;
  var f = !1;
  a.next = function() {
    var a = null;
    if (!f) {
      try {
        return a = c.next(), d.push(a), a;
      } catch (k) {
        if (k != h.e.L || h.a.R(d)) {
          throw k;
        }
        f = !0;
      }
    }
    a = d[e];
    e = (e + 1) % d.length;
    return a;
  };
  return a;
};
h.e.count = function(a, c) {
  var d = a || 0, e = h.Q(c) ? c : 1, f = new h.e.s;
  f.next = function() {
    var a = d;
    d += e;
    return a;
  };
  return f;
};
h.e.repeat = function(a) {
  var c = new h.e.s;
  c.next = h.q.constant(a);
  return c;
};
h.e.cq = function(a) {
  var c = h.e.F(a), d = 0;
  a = new h.e.s;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
h.e.Gf = function(a) {
  var c = arguments, d = new h.e.s;
  if (0 < c.length) {
    var e = h.a.map(c, h.e.F);
    d.next = function() {
      return h.a.map(e, function(a) {
        return a.next();
      });
    };
  }
  return d;
};
h.e.uh = function(a, c) {
  var d = h.a.slice(arguments, 1), e = new h.e.s;
  if (0 < d.length) {
    var f = h.a.map(d, h.e.F);
    e.next = function() {
      var c = !1, d = h.a.map(f, function(d) {
        var e;
        try {
          e = d.next(), c = !0;
        } catch (f) {
          if (f !== h.e.L) {
            throw f;
          }
          e = a;
        }
        return e;
      });
      if (!c) {
        throw h.e.L;
      }
      return d;
    };
  }
  return e;
};
h.e.Sq = function(a, c) {
  var d = h.e.F(c);
  return h.e.filter(a, function() {
    return!!d.next();
  });
};
h.e.Ec = function(a, c) {
  this.Le = h.e.F(a);
  this.Me = c || h.q.identity;
};
h.ia(h.e.Ec, h.e.s);
h.e.Ec.prototype.next = function() {
  for (;this.Ob == this.xg;) {
    this.Cc = this.Le.next(), this.Ob = this.Me(this.Cc);
  }
  this.xg = this.Ob;
  return[this.Ob, this.hk(this.xg)];
};
h.e.Ec.prototype.hk = function(a) {
  for (var c = [];this.Ob == a;) {
    c.push(this.Cc);
    try {
      this.Cc = this.Le.next();
    } catch (d) {
      if (d !== h.e.L) {
        throw d;
      }
      break;
    }
    this.Ob = this.Me(this.Cc);
  }
  return c;
};
h.e.Fr = function(a, c) {
  return new h.e.Ec(a, c);
};
h.e.bt = function(a, c, d) {
  var e = h.e.F(a);
  a = new h.e.s;
  a.next = function() {
    var a = h.e.Ha(e.next());
    return c.apply(d, h.a.concat(a, void 0, e));
  };
  return a;
};
h.e.gt = function(a, c) {
  var d = h.e.F(a), e = h.isNumber(c) ? c : 2, f = h.a.map(h.a.oc(e), function() {
    return[];
  }), g = function() {
    var a = d.next();
    h.a.forEach(f, function(c) {
      c.push(a);
    });
  };
  return h.a.map(f, function(a) {
    var c = new h.e.s;
    c.next = function() {
      h.a.R(a) && g();
      return a.shift();
    };
    return c;
  });
};
h.e.dr = function(a, c) {
  return h.e.Gf(h.e.count(c), a);
};
h.e.limit = function(a, c) {
  var d = h.e.F(a), e = new h.e.s, f = c;
  e.next = function() {
    if (0 < f--) {
      return d.next();
    }
    throw h.e.L;
  };
  return e;
};
h.e.Wi = function(a, c) {
  for (var d = h.e.F(a);0 < c--;) {
    h.e.Mi(d, null);
  }
  return d;
};
h.e.slice = function(a, c, d) {
  a = h.e.Wi(a, c);
  h.isNumber(d) && (a = h.e.limit(a, d - c));
  return a;
};
h.e.th = function(a) {
  var c = [];
  h.a.ci(a, c);
  return a.length != c.length;
};
h.e.oh = function(a, c) {
  var d = h.e.Ha(a), e = h.isNumber(c) ? c : d.length, d = h.a.repeat(d, e), d = h.e.product.apply(void 0, d);
  return h.e.filter(d, function(a) {
    return!h.e.th(a);
  });
};
h.e.Oq = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = h.e.Ha(a), f = h.e.oc(e.length), f = h.e.oh(f, c), g = h.e.filter(f, function(a) {
    return h.a.ve(a);
  }), f = new h.e.s;
  f.next = function() {
    return h.a.map(g.next(), d);
  };
  return f;
};
h.e.Pq = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = h.e.Ha(a), f = h.a.oc(e.length), f = h.a.repeat(f, c), f = h.e.product.apply(void 0, f), g = h.e.filter(f, function(a) {
    return h.a.ve(a);
  }), f = new h.e.s;
  f.next = function() {
    return h.a.map(g.next(), d);
  };
  return f;
};
h.object = {};
h.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
h.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
h.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
h.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return!0;
    }
  }
  return!1;
};
h.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return!1;
    }
  }
  return!0;
};
h.object.W = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
h.object.lr = function(a) {
  for (var c in a) {
    return c;
  }
};
h.object.mr = function(a) {
  for (var c in a) {
    return a[c];
  }
};
h.object.contains = function(a, c) {
  return h.object.ob(a, c);
};
h.object.u = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
h.object.G = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
h.object.Dr = function(a, c) {
  for (var d = h.H(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], h.Q(a));d++) {
  }
  return a;
};
h.object.Ea = function(a, c) {
  return c in a;
};
h.object.ob = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return!0;
    }
  }
  return!1;
};
h.object.Vl = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
h.object.hr = function(a, c, d) {
  return(c = h.object.Vl(a, c, d)) && a[c];
};
h.object.R = function(a) {
  for (var c in a) {
    return!1;
  }
  return!0;
};
h.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
h.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
h.object.add = function(a, c, d) {
  if (c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  h.object.set(a, c, d);
};
h.object.get = function(a, c, d) {
  return c in a ? a[c] : d;
};
h.object.set = function(a, c, d) {
  a[c] = d;
};
h.object.Rs = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
h.object.equals = function(a, c) {
  if (!h.a.equals(h.object.G(a), h.object.G(c))) {
    return!1;
  }
  for (var d in a) {
    if (a[d] !== c[d]) {
      return!1;
    }
  }
  return!0;
};
h.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
h.object.yk = function(a) {
  var c = h.Z(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = h.object.yk(a[d]);
    }
    return c;
  }
  return a;
};
h.object.rm = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
h.object.hh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
h.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var g = 0;g < h.object.hh.length;g++) {
      d = h.object.hh[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
h.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && h.isArray(arguments[0])) {
    return h.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
h.object.Nl = function(a) {
  var c = arguments.length;
  if (1 == c && h.isArray(arguments[0])) {
    return h.object.Nl.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
h.object.Xq = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
h.object.Wr = function(a) {
  return!!Object.isFrozen && Object.isFrozen(a);
};
h.i = {};
h.i.M = function(a, c) {
  this.v = {};
  this.w = [];
  this.Eb = this.t = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.Dd(a);
  }
};
b = h.i.M.prototype;
b.W = function() {
  return this.t;
};
b.u = function() {
  this.fb();
  for (var a = [], c = 0;c < this.w.length;c++) {
    a.push(this.v[this.w[c]]);
  }
  return a;
};
b.G = function() {
  this.fb();
  return this.w.concat();
};
b.Ea = function(a) {
  return h.i.M.Ua(this.v, a);
};
b.ob = function(a) {
  for (var c = 0;c < this.w.length;c++) {
    var d = this.w[c];
    if (h.i.M.Ua(this.v, d) && this.v[d] == a) {
      return!0;
    }
  }
  return!1;
};
b.equals = function(a, c) {
  if (this === a) {
    return!0;
  }
  if (this.t != a.W()) {
    return!1;
  }
  var d = c || h.i.M.Li;
  this.fb();
  for (var e, f = 0;e = this.w[f];f++) {
    if (!d(this.get(e), a.get(e))) {
      return!1;
    }
  }
  return!0;
};
h.i.M.Li = function(a, c) {
  return a === c;
};
b = h.i.M.prototype;
b.R = function() {
  return 0 == this.t;
};
b.clear = function() {
  this.v = {};
  this.Eb = this.t = this.w.length = 0;
};
b.remove = function(a) {
  return h.i.M.Ua(this.v, a) ? (delete this.v[a], this.t--, this.Eb++, this.w.length > 2 * this.t && this.fb(), !0) : !1;
};
b.fb = function() {
  if (this.t != this.w.length) {
    for (var a = 0, c = 0;a < this.w.length;) {
      var d = this.w[a];
      h.i.M.Ua(this.v, d) && (this.w[c++] = d);
      a++;
    }
    this.w.length = c;
  }
  if (this.t != this.w.length) {
    for (var e = {}, c = a = 0;a < this.w.length;) {
      d = this.w[a], h.i.M.Ua(e, d) || (this.w[c++] = d, e[d] = 1), a++;
    }
    this.w.length = c;
  }
};
b.get = function(a, c) {
  return h.i.M.Ua(this.v, a) ? this.v[a] : c;
};
b.set = function(a, c) {
  h.i.M.Ua(this.v, a) || (this.t++, this.w.push(a), this.Eb++);
  this.v[a] = c;
};
b.Dd = function(a) {
  var c;
  a instanceof h.i.M ? (c = a.G(), a = a.u()) : (c = h.object.G(a), a = h.object.u(a));
  for (var d = 0;d < c.length;d++) {
    this.set(c[d], a[d]);
  }
};
b.forEach = function(a, c) {
  for (var d = this.G(), e = 0;e < d.length;e++) {
    var f = d[e], g = this.get(f);
    a.call(c, g, f, this);
  }
};
b.clone = function() {
  return new h.i.M(this);
};
b.rm = function() {
  for (var a = new h.i.M, c = 0;c < this.w.length;c++) {
    var d = this.w[c];
    a.set(this.v[d], d);
  }
  return a;
};
b.qm = function() {
  this.fb();
  for (var a = {}, c = 0;c < this.w.length;c++) {
    var d = this.w[c];
    a[d] = this.v[d];
  }
  return a;
};
b.Kb = function(a) {
  this.fb();
  var c = 0, d = this.w, e = this.v, f = this.Eb, g = this, k = new h.e.s;
  k.next = function() {
    for (;;) {
      if (f != g.Eb) {
        throw Error("The map has changed since the iterator was created");
      }
      if (c >= d.length) {
        throw h.e.L;
      }
      var k = d[c++];
      return a ? k : e[k];
    }
  };
  return k;
};
h.i.M.Ua = function(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
};
h.i.W = function(a) {
  return "function" == typeof a.W ? a.W() : h.H(a) || h.isString(a) ? a.length : h.object.W(a);
};
h.i.u = function(a) {
  if ("function" == typeof a.u) {
    return a.u();
  }
  if (h.isString(a)) {
    return a.split("");
  }
  if (h.H(a)) {
    for (var c = [], d = a.length, e = 0;e < d;e++) {
      c.push(a[e]);
    }
    return c;
  }
  return h.object.u(a);
};
h.i.G = function(a) {
  if ("function" == typeof a.G) {
    return a.G();
  }
  if ("function" != typeof a.u) {
    if (h.H(a) || h.isString(a)) {
      var c = [];
      a = a.length;
      for (var d = 0;d < a;d++) {
        c.push(d);
      }
      return c;
    }
    return h.object.G(a);
  }
};
h.i.contains = function(a, c) {
  return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.ob ? a.ob(c) : h.H(a) || h.isString(a) ? h.a.contains(a, c) : h.object.ob(a, c);
};
h.i.R = function(a) {
  return "function" == typeof a.R ? a.R() : h.H(a) || h.isString(a) ? h.a.R(a) : h.object.R(a);
};
h.i.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : h.H(a) ? h.a.clear(a) : h.object.clear(a);
};
h.i.forEach = function(a, c, d) {
  if ("function" == typeof a.forEach) {
    a.forEach(c, d);
  } else {
    if (h.H(a) || h.isString(a)) {
      h.a.forEach(a, c, d);
    } else {
      for (var e = h.i.G(a), f = h.i.u(a), g = f.length, k = 0;k < g;k++) {
        c.call(d, f[k], e && e[k], a);
      }
    }
  }
};
h.i.filter = function(a, c, d) {
  if ("function" == typeof a.filter) {
    return a.filter(c, d);
  }
  if (h.H(a) || h.isString(a)) {
    return h.a.filter(a, c, d);
  }
  var e, f = h.i.G(a), g = h.i.u(a), k = g.length;
  if (f) {
    e = {};
    for (var l = 0;l < k;l++) {
      c.call(d, g[l], f[l], a) && (e[f[l]] = g[l]);
    }
  } else {
    for (e = [], l = 0;l < k;l++) {
      c.call(d, g[l], void 0, a) && e.push(g[l]);
    }
  }
  return e;
};
h.i.map = function(a, c, d) {
  if ("function" == typeof a.map) {
    return a.map(c, d);
  }
  if (h.H(a) || h.isString(a)) {
    return h.a.map(a, c, d);
  }
  var e, f = h.i.G(a), g = h.i.u(a), k = g.length;
  if (f) {
    e = {};
    for (var l = 0;l < k;l++) {
      e[f[l]] = c.call(d, g[l], f[l], a);
    }
  } else {
    for (e = [], l = 0;l < k;l++) {
      e[l] = c.call(d, g[l], void 0, a);
    }
  }
  return e;
};
h.i.some = function(a, c, d) {
  if ("function" == typeof a.some) {
    return a.some(c, d);
  }
  if (h.H(a) || h.isString(a)) {
    return h.a.some(a, c, d);
  }
  for (var e = h.i.G(a), f = h.i.u(a), g = f.length, k = 0;k < g;k++) {
    if (c.call(d, f[k], e && e[k], a)) {
      return!0;
    }
  }
  return!1;
};
h.i.every = function(a, c, d) {
  if ("function" == typeof a.every) {
    return a.every(c, d);
  }
  if (h.H(a) || h.isString(a)) {
    return h.a.every(a, c, d);
  }
  for (var e = h.i.G(a), f = h.i.u(a), g = f.length, k = 0;k < g;k++) {
    if (!c.call(d, f[k], e && e[k], a)) {
      return!1;
    }
  }
  return!0;
};
h.f = {};
h.f.userAgent = {};
h.f.userAgent.m = {};
h.f.userAgent.m.Ff = function() {
  var a = h.f.userAgent.m.Oi();
  return a && (a = a.userAgent) ? a : "";
};
h.f.userAgent.m.Oi = function() {
  return h.global.navigator;
};
h.f.userAgent.m.zf = h.f.userAgent.m.Ff();
h.f.userAgent.m.Us = function(a) {
  h.f.userAgent.m.zf = a || h.f.userAgent.m.Ff();
};
h.f.userAgent.m.xb = function() {
  return h.f.userAgent.m.zf;
};
h.f.userAgent.m.D = function(a) {
  return h.b.contains(h.f.userAgent.m.xb(), a);
};
h.f.userAgent.m.Pi = function(a) {
  return h.b.sh(h.f.userAgent.m.xb(), a);
};
h.f.userAgent.m.te = function(a) {
  for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e;e = c.exec(a);) {
    d.push([e[1], e[2], e[3] || void 0]);
  }
  return d;
};
h.f.userAgent.browser = {};
h.f.userAgent.browser.jm = function() {
  return h.f.userAgent.m.D("Opera") || h.f.userAgent.m.D("OPR");
};
h.f.userAgent.browser.hm = function() {
  return h.f.userAgent.m.D("Trident") || h.f.userAgent.m.D("MSIE");
};
h.f.userAgent.browser.gm = function() {
  return h.f.userAgent.m.D("Firefox");
};
h.f.userAgent.browser.rf = function() {
  return h.f.userAgent.m.D("Safari") && !h.f.userAgent.m.D("Chrome") && !h.f.userAgent.m.D("CriOS") && !h.f.userAgent.m.D("Android");
};
h.f.userAgent.browser.qf = function() {
  return h.f.userAgent.m.D("Coast");
};
h.f.userAgent.browser.im = function() {
  return(h.f.userAgent.m.D("iPad") || h.f.userAgent.m.D("iPhone")) && !h.f.userAgent.browser.rf() && !h.f.userAgent.browser.pf() && !h.f.userAgent.browser.qf() && h.f.userAgent.m.D("AppleWebKit");
};
h.f.userAgent.browser.pf = function() {
  return h.f.userAgent.m.D("Chrome") || h.f.userAgent.m.D("CriOS");
};
h.f.userAgent.browser.fm = function() {
  return!h.f.userAgent.browser.se() && h.f.userAgent.m.D("Android");
};
h.f.userAgent.browser.ue = h.f.userAgent.browser.jm;
h.f.userAgent.browser.Zc = h.f.userAgent.browser.hm;
h.f.userAgent.browser.Vr = h.f.userAgent.browser.gm;
h.f.userAgent.browser.bs = h.f.userAgent.browser.rf;
h.f.userAgent.browser.Pr = h.f.userAgent.browser.qf;
h.f.userAgent.browser.Yr = h.f.userAgent.browser.im;
h.f.userAgent.browser.se = h.f.userAgent.browser.pf;
h.f.userAgent.browser.Nr = h.f.userAgent.browser.fm;
h.f.userAgent.browser.cs = function() {
  return h.f.userAgent.m.D("Silk");
};
h.f.userAgent.browser.gd = function() {
  function a(a) {
    a = h.a.find(a, e);
    return d[a] || "";
  }
  var c = h.f.userAgent.m.xb();
  if (h.f.userAgent.browser.Zc()) {
    return h.f.userAgent.browser.nh(c);
  }
  var c = h.f.userAgent.m.te(c), d = {};
  h.a.forEach(c, function(a) {
    d[a[0]] = a[1];
  });
  var e = h.Db(h.object.Ea, d);
  return h.f.userAgent.browser.ue() ? a(["Version", "Opera", "OPR"]) : h.f.userAgent.browser.se() ? a(["Chrome", "CriOS"]) : (c = c[2]) && c[1] || "";
};
h.f.userAgent.browser.aa = function(a) {
  return 0 <= h.b.tc(h.f.userAgent.browser.gd(), a);
};
h.f.userAgent.browser.nh = function(a) {
  var c = /rv: *([\d\.]*)/.exec(a);
  if (c && c[1]) {
    return c[1];
  }
  var c = "", d = /MSIE +([\d\.]+)/.exec(a);
  if (d && d[1]) {
    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == d[1]) {
      if (a && a[1]) {
        switch(a[1]) {
          case "4.0":
            c = "8.0";
            break;
          case "5.0":
            c = "9.0";
            break;
          case "6.0":
            c = "10.0";
            break;
          case "7.0":
            c = "11.0";
        }
      } else {
        c = "7.0";
      }
    } else {
      c = d[1];
    }
  }
  return c;
};
h.f.userAgent.U = {};
h.f.userAgent.U.as = function() {
  return h.f.userAgent.m.D("Presto");
};
h.f.userAgent.U.bi = function() {
  return h.f.userAgent.m.D("Trident") || h.f.userAgent.m.D("MSIE");
};
h.f.userAgent.U.gf = function() {
  return h.f.userAgent.m.Pi("WebKit");
};
h.f.userAgent.U.bm = function() {
  return h.f.userAgent.m.D("Gecko") && !h.f.userAgent.U.gf() && !h.f.userAgent.U.bi();
};
h.f.userAgent.U.gd = function() {
  var a = h.f.userAgent.m.xb();
  if (a) {
    var a = h.f.userAgent.m.te(a), c = a[1];
    if (c) {
      return "Gecko" == c[0] ? h.f.userAgent.U.yi(a, "Firefox") : c[1];
    }
    var a = a[0], d;
    if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) {
      return d[1];
    }
  }
  return "";
};
h.f.userAgent.U.aa = function(a) {
  return 0 <= h.b.tc(h.f.userAgent.U.gd(), a);
};
h.f.userAgent.U.yi = function(a, c) {
  var d = h.a.find(a, function(a) {
    return c == a[0];
  });
  return d && d[1] || "";
};
h.userAgent = {};
h.userAgent.Yg = !1;
h.userAgent.Xg = !1;
h.userAgent.eh = !1;
h.userAgent.he = !1;
h.userAgent.dh = !1;
h.userAgent.Zh = !1;
h.userAgent.Pc = h.userAgent.Yg || h.userAgent.Xg || h.userAgent.he || h.userAgent.eh || h.userAgent.dh;
h.userAgent.He = function() {
  return h.f.userAgent.m.xb();
};
h.userAgent.td = function() {
  return h.global.navigator || null;
};
h.userAgent.Zd = h.userAgent.Pc ? h.userAgent.dh : h.f.userAgent.browser.ue();
h.userAgent.ha = h.userAgent.Pc ? h.userAgent.Yg : h.f.userAgent.browser.Zc();
h.userAgent.wc = h.userAgent.Pc ? h.userAgent.Xg : h.f.userAgent.U.bm();
h.userAgent.ma = h.userAgent.Pc ? h.userAgent.eh || h.userAgent.he : h.f.userAgent.U.gf();
h.userAgent.cm = function() {
  return h.userAgent.ma && h.f.userAgent.m.D("Mobile");
};
h.userAgent.Bo = h.userAgent.he || h.userAgent.cm();
h.userAgent.Cp = h.userAgent.ma;
h.userAgent.Ol = function() {
  var a = h.userAgent.td();
  return a && a.platform || "";
};
h.userAgent.sd = h.userAgent.Ol();
h.userAgent.bh = !1;
h.userAgent.fh = !1;
h.userAgent.ah = !1;
h.userAgent.gh = !1;
h.userAgent.Wg = !1;
h.userAgent.$g = !1;
h.userAgent.Zg = !1;
h.userAgent.Ma = h.userAgent.bh || h.userAgent.fh || h.userAgent.ah || h.userAgent.gh || h.userAgent.Wg || h.userAgent.$g || h.userAgent.Zg;
h.userAgent.$l = function() {
  h.userAgent.Uh = h.b.contains(h.userAgent.sd, "Mac");
  h.userAgent.Vh = h.b.contains(h.userAgent.sd, "Win");
  h.userAgent.Th = h.b.contains(h.userAgent.sd, "Linux");
  h.userAgent.Wh = !!h.userAgent.td() && h.b.contains(h.userAgent.td().appVersion || "", "X11");
  var a = h.userAgent.He();
  h.userAgent.Qh = !!a && h.b.contains(a, "Android");
  h.userAgent.Sh = !!a && h.b.contains(a, "iPhone");
  h.userAgent.Rh = !!a && h.b.contains(a, "iPad");
};
h.userAgent.Ma || h.userAgent.$l();
h.userAgent.so = h.userAgent.Ma ? h.userAgent.bh : h.userAgent.Uh;
h.userAgent.$p = h.userAgent.Ma ? h.userAgent.fh : h.userAgent.Vh;
h.userAgent.eo = h.userAgent.Ma ? h.userAgent.ah : h.userAgent.Th;
h.userAgent.aq = h.userAgent.Ma ? h.userAgent.gh : h.userAgent.Wh;
h.userAgent.ANDROID = h.userAgent.Ma ? h.userAgent.Wg : h.userAgent.Qh;
h.userAgent.Vn = h.userAgent.Ma ? h.userAgent.$g : h.userAgent.Sh;
h.userAgent.Un = h.userAgent.Ma ? h.userAgent.Zg : h.userAgent.Rh;
h.userAgent.Pl = function() {
  var a = "", c;
  if (h.userAgent.Zd && h.global.opera) {
    return a = h.global.opera.version, h.isFunction(a) ? a() : a;
  }
  h.userAgent.wc ? c = /rv\:([^\);]+)(\)|;)/ : h.userAgent.ha ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : h.userAgent.ma && (c = /WebKit\/(\S+)/);
  c && (a = (a = c.exec(h.userAgent.He())) ? a[1] : "");
  return h.userAgent.ha && (c = h.userAgent.kg(), c > parseFloat(a)) ? String(c) : a;
};
h.userAgent.kg = function() {
  var a = h.global.document;
  return a ? a.documentMode : void 0;
};
h.userAgent.VERSION = h.userAgent.Pl();
h.userAgent.compare = function(a, c) {
  return h.b.tc(a, c);
};
h.userAgent.ef = {};
h.userAgent.aa = function(a) {
  return h.userAgent.Zh || h.userAgent.ef[a] || (h.userAgent.ef[a] = 0 <= h.b.tc(h.userAgent.VERSION, a));
};
h.userAgent.gs = h.userAgent.aa;
h.userAgent.oe = function(a) {
  return h.userAgent.ha && h.userAgent.zk >= a;
};
h.userAgent.Rr = h.userAgent.oe;
var s = h.global.document;
h.userAgent.zk = s && h.userAgent.ha ? h.userAgent.kg() || ("CSS1Compat" == s.compatMode ? parseInt(h.userAgent.VERSION, 10) : 5) : void 0;
h.uri = {};
h.uri.d = {};
h.uri.d.Pb = {tf:38, EQUAL:61, zi:35, Ai:63};
h.uri.d.Wc = function(a, c, d, e, f, g, k) {
  var l = "";
  a && (l += a + ":");
  d && (l += "//", c && (l += c + "@"), l += d, e && (l += ":" + e));
  f && (l += f);
  g && (l += "?" + g);
  k && (l += "#" + k);
  return l;
};
h.uri.d.Ki = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
h.uri.d.o = {cb:1, dc:2, Ba:3, Ca:4, Uc:5, ec:6, Tc:7};
h.uri.d.split = function(a) {
  h.uri.d.Ii();
  return a.match(h.uri.d.Ki);
};
h.uri.d.Fd = h.userAgent.ma;
h.uri.d.Ii = function() {
  if (h.uri.d.Fd) {
    h.uri.d.Fd = !1;
    var a = h.global.location;
    if (a) {
      var c = a.href;
      if (c && (c = h.uri.d.wb(c)) && c != a.hostname) {
        throw h.uri.d.Fd = !0, Error();
      }
    }
  }
};
h.uri.d.Dc = function(a, c) {
  return a ? c ? decodeURI(a) : decodeURIComponent(a) : a;
};
h.uri.d.mb = function(a, c) {
  return h.uri.d.split(c)[a] || null;
};
h.uri.d.ab = function(a) {
  return h.uri.d.mb(h.uri.d.o.cb, a);
};
h.uri.d.or = function(a) {
  a = h.uri.d.ab(a);
  !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
  return a ? a.toLowerCase() : "";
};
h.uri.d.Gi = function(a) {
  return h.uri.d.mb(h.uri.d.o.dc, a);
};
h.uri.d.cc = function(a) {
  return h.uri.d.Dc(h.uri.d.Gi(a));
};
h.uri.d.Di = function(a) {
  return h.uri.d.mb(h.uri.d.o.Ba, a);
};
h.uri.d.wb = function(a) {
  return h.uri.d.Dc(h.uri.d.Di(a), !0);
};
h.uri.d.bc = function(a) {
  return Number(h.uri.d.mb(h.uri.d.o.Ca, a)) || null;
};
h.uri.d.Fi = function(a) {
  return h.uri.d.mb(h.uri.d.o.Uc, a);
};
h.uri.d.bb = function(a) {
  return h.uri.d.Dc(h.uri.d.Fi(a), !0);
};
h.uri.d.qe = function(a) {
  return h.uri.d.mb(h.uri.d.o.ec, a);
};
h.uri.d.Ei = function(a) {
  var c = a.indexOf("#");
  return 0 > c ? null : a.substr(c + 1);
};
h.uri.d.Ps = function(a, c) {
  return h.uri.d.Ni(a) + (c ? "#" + c : "");
};
h.uri.d.ac = function(a) {
  return h.uri.d.Dc(h.uri.d.Ei(a));
};
h.uri.d.uf = function(a) {
  a = h.uri.d.split(a);
  return h.uri.d.Wc(a[h.uri.d.o.cb], a[h.uri.d.o.dc], a[h.uri.d.o.Ba], a[h.uri.d.o.Ca]);
};
h.uri.d.vr = function(a) {
  a = h.uri.d.split(a);
  return h.uri.d.Wc(null, null, null, null, a[h.uri.d.o.Uc], a[h.uri.d.o.ec], a[h.uri.d.o.Tc]);
};
h.uri.d.Ni = function(a) {
  var c = a.indexOf("#");
  return 0 > c ? a : a.substr(0, c);
};
h.uri.d.Yl = function(a, c) {
  var d = h.uri.d.split(a), e = h.uri.d.split(c);
  return d[h.uri.d.o.Ba] == e[h.uri.d.o.Ba] && d[h.uri.d.o.cb] == e[h.uri.d.o.cb] && d[h.uri.d.o.Ca] == e[h.uri.d.o.Ca];
};
h.uri.d.ph = function(a) {
  if (h.pa && (0 <= a.indexOf("#") || 0 <= a.indexOf("?"))) {
    throw Error("goog.uri.utils: Fragment or query identifiers are not supported: [" + a + "]");
  }
};
h.uri.d.bd = function(a) {
  if (a[1]) {
    var c = a[0], d = c.indexOf("#");
    0 <= d && (a.push(c.substr(d)), a[0] = c = c.substr(0, d));
    d = c.indexOf("?");
    0 > d ? a[1] = "?" : d == c.length - 1 && (a[1] = void 0);
  }
  return a.join("");
};
h.uri.d.ed = function(a, c, d) {
  if (h.isArray(c)) {
    for (var e = 0;e < c.length;e++) {
      h.uri.d.ed(a, String(c[e]), d);
    }
  } else {
    null != c && d.push("&", a, "" === c ? "" : "=", h.b.yb(c));
  }
};
h.uri.d.Gd = function(a, c, d) {
  for (d = d || 0;d < c.length;d += 2) {
    h.uri.d.ed(c[d], c[d + 1], a);
  }
  return a;
};
h.uri.d.Bq = function(a, c) {
  var d = h.uri.d.Gd([], a, c);
  d[0] = "";
  return d.join("");
};
h.uri.d.vf = function(a, c) {
  for (var d in c) {
    h.uri.d.ed(d, c[d], a);
  }
  return a;
};
h.uri.d.Cq = function(a) {
  a = h.uri.d.vf([], a);
  a[0] = "";
  return a.join("");
};
h.uri.d.lq = function(a, c) {
  return h.uri.d.bd(2 == arguments.length ? h.uri.d.Gd([a], arguments[1], 0) : h.uri.d.Gd([a], arguments, 1));
};
h.uri.d.mq = function(a, c) {
  return h.uri.d.bd(h.uri.d.vf([a], c));
};
h.uri.d.Hi = function(a, c, d) {
  a = [a, "&", c];
  h.ye(d) && a.push("=", h.b.yb(d));
  return h.uri.d.bd(a);
};
h.uri.d.rc = function(a, c, d, e) {
  for (var f = d.length;0 <= (c = a.indexOf(d, c)) && c < e;) {
    var g = a.charCodeAt(c - 1);
    if (g == h.uri.d.Pb.tf || g == h.uri.d.Pb.Ai) {
      if (g = a.charCodeAt(c + f), !g || g == h.uri.d.Pb.EQUAL || g == h.uri.d.Pb.tf || g == h.uri.d.Pb.zi) {
        return c;
      }
    }
    c += f + 1;
  }
  return-1;
};
h.uri.d.sc = /#|$/;
h.uri.d.Gr = function(a, c) {
  return 0 <= h.uri.d.rc(a, 0, c, a.search(h.uri.d.sc));
};
h.uri.d.tr = function(a, c) {
  var d = a.search(h.uri.d.sc), e = h.uri.d.rc(a, 0, c, d);
  if (0 > e) {
    return null;
  }
  var f = a.indexOf("&", e);
  if (0 > f || f > d) {
    f = d;
  }
  e += c.length + 1;
  return h.b.fc(a.substr(e, f - e));
};
h.uri.d.ur = function(a, c) {
  for (var d = a.search(h.uri.d.sc), e = 0, f, g = [];0 <= (f = h.uri.d.rc(a, e, c, d));) {
    e = a.indexOf("&", f);
    if (0 > e || e > d) {
      e = d;
    }
    f += c.length + 1;
    g.push(h.b.fc(a.substr(f, e - f)));
  }
  return g;
};
h.uri.d.Bi = /[?&]($|#)/;
h.uri.d.Ji = function(a, c) {
  for (var d = a.search(h.uri.d.sc), e = 0, f, g = [];0 <= (f = h.uri.d.rc(a, e, c, d));) {
    g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
  }
  g.push(a.substr(e));
  return g.join("").replace(h.uri.d.Bi, "$1");
};
h.uri.d.setParam = function(a, c, d) {
  return h.uri.d.Hi(h.uri.d.Ji(a, c), c, d);
};
h.uri.d.nq = function(a, c) {
  h.uri.d.ph(a);
  h.b.rh(a, "/") && (a = a.substr(0, a.length - 1));
  h.b.Xc(c, "/") && (c = c.substr(1));
  return h.b.qh(a, "/", c);
};
h.uri.d.zb = function(a, c) {
  h.b.Xc(c, "/") || (c = "/" + c);
  var d = h.uri.d.split(a);
  return h.uri.d.Wc(d[h.uri.d.o.cb], d[h.uri.d.o.dc], d[h.uri.d.o.Ba], d[h.uri.d.o.Ca], c, d[h.uri.d.o.ec], d[h.uri.d.o.Tc]);
};
h.uri.d.Ae = {ze:"zx"};
h.uri.d.em = function(a) {
  return h.uri.d.setParam(a, h.uri.d.Ae.ze, h.b.re());
};
h.h = function(a, c) {
  var d;
  a instanceof h.h ? (this.X = h.Q(c) ? c : a.mh(), this.mc(a.ab()), this.nc(a.cc()), this.ic(a.wb()), this.kc(a.bc()), this.zb(a.bb()), this.lc(a.qe().clone()), this.jc(a.ac())) : a && (d = h.uri.d.split(String(a))) ? (this.X = !!c, this.mc(d[h.uri.d.o.cb] || "", !0), this.nc(d[h.uri.d.o.dc] || "", !0), this.ic(d[h.uri.d.o.Ba] || "", !0), this.kc(d[h.uri.d.o.Ca]), this.zb(d[h.uri.d.o.Uc] || "", !0), this.lc(d[h.uri.d.o.ec] || "", !0), this.jc(d[h.uri.d.o.Tc] || "", !0)) : (this.X = !!c, this.ca = 
  new h.h.ka(null, null, this.X));
};
h.h.ij = !1;
h.h.Ch = h.uri.d.Ae.ze;
b = h.h.prototype;
b.tb = "";
b.Rd = "";
b.Od = "";
b.P = null;
b.Qd = "";
b.Pd = "";
b.dm = !1;
b.X = !1;
b.toString = function() {
  var a = [], c = this.ab();
  c && a.push(h.h.Cb(c, h.h.Ce, !0), ":");
  if (c = this.wb()) {
    a.push("//");
    var d = this.cc();
    d && a.push(h.h.Cb(d, h.h.Ce, !0), "@");
    a.push(h.h.Be(h.b.yb(c)));
    c = this.bc();
    null != c && a.push(":", String(c));
  }
  if (c = this.bb()) {
    this.Yc() && "/" != c.charAt(0) && a.push("/"), a.push(h.h.Cb(c, "/" == c.charAt(0) ? h.h.wh : h.h.yh, !0));
  }
  (c = this.vh()) && a.push("?", c);
  (c = this.ac()) && a.push("#", h.h.Cb(c, h.h.xh));
  return a.join("");
};
b.resolve = function(a) {
  var c = this.clone(), d = a.vi();
  d ? c.mc(a.ab()) : d = a.wi();
  d ? c.nc(a.cc()) : d = a.Yc();
  d ? c.ic(a.wb()) : d = a.ti();
  var e = a.bb();
  if (d) {
    c.kc(a.bc());
  } else {
    if (d = a.sf()) {
      if ("/" != e.charAt(0)) {
        if (this.Yc() && !this.sf()) {
          e = "/" + e;
        } else {
          var f = c.bb().lastIndexOf("/");
          -1 != f && (e = c.bb().substr(0, f + 1) + e);
        }
      }
      e = h.h.xi(e);
    }
  }
  d ? c.zb(e) : d = a.ui();
  d ? c.lc(a.ri()) : d = a.si();
  d && c.jc(a.ac());
  return c;
};
b.clone = function() {
  return new h.h(this);
};
b.ab = function() {
  return this.tb;
};
b.mc = function(a, c) {
  this.ua();
  if (this.tb = c ? h.h.qb(a, !0) : a) {
    this.tb = this.tb.replace(/:$/, "");
  }
  return this;
};
b.vi = function() {
  return!!this.tb;
};
b.cc = function() {
  return this.Rd;
};
b.nc = function(a, c) {
  this.ua();
  this.Rd = c ? h.h.qb(a) : a;
  return this;
};
b.wi = function() {
  return!!this.Rd;
};
b.wb = function() {
  return this.Od;
};
b.ic = function(a, c) {
  this.ua();
  this.Od = c ? h.h.qb(a, !0) : a;
  return this;
};
b.Yc = function() {
  return!!this.Od;
};
b.bc = function() {
  return this.P;
};
b.kc = function(a) {
  this.ua();
  if (a) {
    a = Number(a);
    if (isNaN(a) || 0 > a) {
      throw Error("Bad port number " + a);
    }
    this.P = a;
  } else {
    this.P = null;
  }
  return this;
};
b.ti = function() {
  return null != this.P;
};
b.bb = function() {
  return this.Qd;
};
b.zb = function(a, c) {
  this.ua();
  this.Qd = c ? h.h.qb(a, !0) : a;
  return this;
};
b.sf = function() {
  return!!this.Qd;
};
b.ui = function() {
  return "" !== this.ca.toString();
};
b.lc = function(a, c) {
  this.ua();
  a instanceof h.h.ka ? (this.ca = a, this.ca.Id(this.X)) : (c || (a = h.h.Cb(a, h.h.Xi)), this.ca = new h.h.ka(a, null, this.X));
  return this;
};
b.vh = function() {
  return this.ca.toString();
};
b.ri = function() {
  return this.ca.Bk();
};
b.qe = function() {
  return this.ca;
};
b.Dh = function(a, c) {
  this.ua();
  this.ca.set(a, c);
  return this;
};
b.Jj = function(a) {
  return this.ca.get(a);
};
b.ac = function() {
  return this.Pd;
};
b.jc = function(a, c) {
  this.ua();
  this.Pd = c ? h.h.qb(a) : a;
  return this;
};
b.si = function() {
  return!!this.Pd;
};
b.em = function() {
  this.ua();
  this.Dh(h.h.Ch, h.b.re());
  return this;
};
b.ua = function() {
  if (this.dm) {
    throw Error("Tried to modify a read-only Uri");
  }
};
b.Id = function(a) {
  this.X = a;
  this.ca && this.ca.Id(a);
  return this;
};
b.mh = function() {
  return this.X;
};
h.h.parse = function(a, c) {
  return a instanceof h.h ? a.clone() : new h.h(a, c);
};
h.h.create = function(a, c, d, e, f, g, k, l) {
  l = new h.h(null, l);
  a && l.mc(a);
  c && l.nc(c);
  d && l.ic(d);
  e && l.kc(e);
  f && l.zb(f);
  g && l.lc(g);
  k && l.jc(k);
  return l;
};
h.h.resolve = function(a, c) {
  a instanceof h.h || (a = h.h.parse(a));
  c instanceof h.h || (c = h.h.parse(c));
  return a.resolve(c);
};
h.h.xi = function(a) {
  if (".." == a || "." == a) {
    return "";
  }
  if (h.b.contains(a, "./") || h.b.contains(a, "/.")) {
    var c = h.b.Xc(a, "/");
    a = a.split("/");
    for (var d = [], e = 0;e < a.length;) {
      var f = a[e++];
      "." == f ? c && e == a.length && d.push("") : ".." == f ? ((1 < d.length || 1 == d.length && "" != d[0]) && d.pop(), c && e == a.length && d.push("")) : (d.push(f), c = !0);
    }
    return d.join("/");
  }
  return a;
};
h.h.qb = function(a, c) {
  return a ? c ? decodeURI(a) : decodeURIComponent(a) : "";
};
h.h.Cb = function(a, c, d) {
  return h.isString(a) ? (a = encodeURI(a).replace(c, h.h.Gj), d && (a = h.h.Be(a)), a) : null;
};
h.h.Gj = function(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
};
h.h.Be = function(a) {
  return a.replace(/%25([0-9a-fA-F]{2})/g, "%$1");
};
h.h.Ce = /[#\/\?@]/g;
h.h.yh = /[\#\?:]/g;
h.h.wh = /[\#\?]/g;
h.h.Xi = /[\#\?@]/g;
h.h.xh = /#/g;
h.h.Yl = function(a, c) {
  var d = h.uri.d.split(a), e = h.uri.d.split(c);
  return d[h.uri.d.o.Ba] == e[h.uri.d.o.Ba] && d[h.uri.d.o.Ca] == e[h.uri.d.o.Ca];
};
h.h.ka = function(a, c, d) {
  this.Fa = a || null;
  this.X = !!d;
};
h.h.ka.prototype.va = function() {
  if (!this.C && (this.C = new h.i.M, this.t = 0, this.Fa)) {
    for (var a = this.Fa.split("&"), c = 0;c < a.length;c++) {
      var d = a[c].indexOf("="), e = null, f = null;
      0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
      e = h.b.fc(e);
      e = this.Na(e);
      this.add(e, f ? h.b.fc(f) : "");
    }
  }
};
h.h.ka.Vq = function(a, c, d) {
  c = h.i.G(a);
  if ("undefined" == typeof c) {
    throw Error("Keys are undefined");
  }
  d = new h.h.ka(null, null, d);
  a = h.i.u(a);
  for (var e = 0;e < c.length;e++) {
    var f = c[e], g = a[e];
    h.isArray(g) ? d.Ke(f, g) : d.add(f, g);
  }
  return d;
};
h.h.ka.Uq = function(a, c, d, e) {
  if (a.length != c.length) {
    throw Error("Mismatched lengths for keys/values");
  }
  d = new h.h.ka(null, null, e);
  for (e = 0;e < a.length;e++) {
    d.add(a[e], c[e]);
  }
  return d;
};
b = h.h.ka.prototype;
b.C = null;
b.t = null;
b.W = function() {
  this.va();
  return this.t;
};
b.add = function(a, c) {
  this.va();
  this.ib();
  a = this.Na(a);
  var d = this.C.get(a);
  d || this.C.set(a, d = []);
  d.push(c);
  this.t++;
  return this;
};
b.remove = function(a) {
  this.va();
  a = this.Na(a);
  return this.C.Ea(a) ? (this.ib(), this.t -= this.C.get(a).length, this.C.remove(a)) : !1;
};
b.clear = function() {
  this.ib();
  this.C = null;
  this.t = 0;
};
b.R = function() {
  this.va();
  return 0 == this.t;
};
b.Ea = function(a) {
  this.va();
  a = this.Na(a);
  return this.C.Ea(a);
};
b.ob = function(a) {
  var c = this.u();
  return h.a.contains(c, a);
};
b.G = function() {
  this.va();
  for (var a = this.C.u(), c = this.C.G(), d = [], e = 0;e < c.length;e++) {
    for (var f = a[e], g = 0;g < f.length;g++) {
      d.push(c[e]);
    }
  }
  return d;
};
b.u = function(a) {
  this.va();
  var c = [];
  if (h.isString(a)) {
    this.Ea(a) && (c = h.a.concat(c, this.C.get(this.Na(a))));
  } else {
    a = this.C.u();
    for (var d = 0;d < a.length;d++) {
      c = h.a.concat(c, a[d]);
    }
  }
  return c;
};
b.set = function(a, c) {
  this.va();
  this.ib();
  a = this.Na(a);
  this.Ea(a) && (this.t -= this.C.get(a).length);
  this.C.set(a, [c]);
  this.t++;
  return this;
};
b.get = function(a, c) {
  var d = a ? this.u(a) : [];
  return h.h.ij ? 0 < d.length ? d[0] : c : 0 < d.length ? String(d[0]) : c;
};
b.Ke = function(a, c) {
  this.remove(a);
  0 < c.length && (this.ib(), this.C.set(this.Na(a), h.a.clone(c)), this.t += c.length);
};
b.toString = function() {
  if (this.Fa) {
    return this.Fa;
  }
  if (!this.C) {
    return "";
  }
  for (var a = [], c = this.C.G(), d = 0;d < c.length;d++) {
    for (var e = c[d], f = h.b.yb(e), e = this.u(e), g = 0;g < e.length;g++) {
      var k = f;
      "" !== e[g] && (k += "=" + h.b.yb(e[g]));
      a.push(k);
    }
  }
  return this.Fa = a.join("&");
};
b.Bk = function() {
  return h.h.qb(this.toString());
};
b.ib = function() {
  this.Fa = null;
};
b.clone = function() {
  var a = new h.h.ka;
  a.Fa = this.Fa;
  this.C && (a.C = this.C.clone(), a.t = this.t);
  return a;
};
b.Na = function(a) {
  a = String(a);
  this.X && (a = a.toLowerCase());
  return a;
};
b.Id = function(a) {
  a && !this.X && (this.va(), this.ib(), this.C.forEach(function(a, d) {
    var e = d.toLowerCase();
    d != e && (this.remove(d), this.Ke(e, a));
  }, this));
  this.X = a;
};
b.extend = function(a) {
  for (var c = 0;c < arguments.length;c++) {
    h.i.forEach(arguments[c], function(a, c) {
      this.add(c, a);
    }, this);
  }
};
m.ae = {};
m.ae.Zj = function(a) {
  return h.h.parse(window.location.href).Jj(a) || null;
};
m.ae.getOrigin = function(a) {
  return h.uri.d.ab(a) ? h.uri.d.uf(a) : h.uri.d.uf("http://" + a);
};
h.i.Zm = function() {
};
h.i.qa = function(a) {
  this.v = new h.i.M;
  a && this.Dd(a);
};
h.i.qa.Jd = function(a) {
  var c = typeof a;
  return "object" == c && a || "function" == c ? "o" + h.Sb(a) : c.substr(0, 1) + a;
};
b = h.i.qa.prototype;
b.W = function() {
  return this.v.W();
};
b.add = function(a) {
  this.v.set(h.i.qa.Jd(a), a);
};
b.Dd = function(a) {
  a = h.i.u(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.add(a[d]);
  }
};
b.removeAll = function(a) {
  a = h.i.u(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.remove(a[d]);
  }
};
b.remove = function(a) {
  return this.v.remove(h.i.qa.Jd(a));
};
b.clear = function() {
  this.v.clear();
};
b.R = function() {
  return this.v.R();
};
b.contains = function(a) {
  return this.v.Ea(h.i.qa.Jd(a));
};
b.u = function() {
  return this.v.u();
};
b.clone = function() {
  return new h.i.qa(this);
};
b.equals = function(a) {
  return this.W() == h.i.W(a) && this.nj(a);
};
b.nj = function(a) {
  var c = h.i.W(a);
  if (this.W() > c) {
    return!1;
  }
  !(a instanceof h.i.qa) && 5 < c && (a = new h.i.qa(a));
  return h.i.every(this, function(c) {
    return h.i.contains(a, c);
  });
};
b.Kb = function() {
  return this.v.Kb(!1);
};
h.debug.ba = h.pa;
h.debug.Iq = function(a, c, d) {
  d = d || h.global;
  var e = d.onerror, f = !!c;
  h.userAgent.ma && !h.userAgent.aa("535.3") && (f = !f);
  d.onerror = function(c, d, l, n, p) {
    e && e(c, d, l, n, p);
    a({message:c, fileName:d, ak:l, xm:n, error:p});
    return f;
  };
};
h.debug.Sl = function(a, c) {
  if ("undefined" == typeof a) {
    return "undefined";
  }
  if (null == a) {
    return "NULL";
  }
  var d = [], e;
  for (e in a) {
    if (c || !h.isFunction(a[e])) {
      var f = e + " = ";
      try {
        f += a[e];
      } catch (g) {
        f += "*** " + g + " ***";
      }
      d.push(f);
    }
  }
  return d.join("\n");
};
h.debug.ar = function(a, c) {
  var d = [], e = function(a, g, k) {
    var l = g + "  ";
    k = new h.i.qa(k);
    try {
      if (h.Q(a)) {
        if (h.hj(a)) {
          d.push("NULL");
        } else {
          if (h.isString(a)) {
            d.push('"' + a.replace(/\n/g, "\n" + g) + '"');
          } else {
            if (h.isFunction(a)) {
              d.push(String(a).replace(/\n/g, "\n" + g));
            } else {
              if (h.isObject(a)) {
                if (k.contains(a)) {
                  d.push("*** reference loop detected ***");
                } else {
                  k.add(a);
                  d.push("{");
                  for (var n in a) {
                    if (c || !h.isFunction(a[n])) {
                      d.push("\n"), d.push(l), d.push(n + " = "), e(a[n], l, k);
                    }
                  }
                  d.push("\n" + g + "}");
                }
              } else {
                d.push(a);
              }
            }
          }
        }
      } else {
        d.push("undefined");
      }
    } catch (p) {
      d.push("*** " + p + " ***");
    }
  };
  e(a, "", new h.i.qa);
  return d.join("");
};
h.debug.Tl = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    h.isArray(a[d]) ? c.push(h.debug.Tl(a[d])) : c.push(a[d]);
  }
  return "[ " + c.join(", ") + " ]";
};
h.debug.Ri = function(a, c) {
  try {
    var d = h.debug.Yh(a);
    return "Message: " + h.b.Nb(d.message) + '\nUrl: <a href="view-source:' + d.fileName + '" target="_new">' + d.fileName + "</a>\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + h.b.Nb(d.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + h.b.Nb(h.debug.ud(c) + "-> ");
  } catch (e) {
    return "Exception trying to expose exception! You win, we lose. " + e;
  }
};
h.debug.Yh = function(a) {
  var c = h.Ie("window.location.href");
  if (h.isString(a)) {
    return{message:a, name:"Unknown error", lineNumber:"Not available", fileName:c, stack:"Not available"};
  }
  var d, e, f = !1;
  try {
    d = a.lineNumber || a.ak || "Not available";
  } catch (g) {
    d = "Not available", f = !0;
  }
  try {
    e = a.fileName || a.filename || a.sourceURL || h.global.$googDebugFname || c;
  } catch (k) {
    e = "Not available", f = !0;
  }
  return!f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:d, fileName:e, stack:a.stack || "Not available"};
};
h.debug.Pg = function(a, c) {
  var d;
  "string" == typeof a ? (d = Error(a), Error.captureStackTrace && Error.captureStackTrace(d, h.debug.Pg)) : d = a;
  d.stack || (d.stack = h.debug.ud(h.debug.Pg));
  if (c) {
    for (var e = 0;d["message" + e];) {
      ++e;
    }
    d["message" + e] = String(c);
  }
  return d;
};
h.debug.Ak = function(a) {
  if (h.Vd) {
    var c = h.debug.zg(h.debug.Ak);
    if (c) {
      return c;
    }
  }
  for (var c = [], d = arguments.callee.caller, e = 0;d && (!a || e < a);) {
    c.push(h.debug.getFunctionName(d));
    c.push("()\n");
    try {
      d = d.caller;
    } catch (f) {
      c.push("[exception trying to get caller]\n");
      break;
    }
    e++;
    if (e >= h.debug.Ye) {
      c.push("[...long stack...]");
      break;
    }
  }
  a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
  return c.join("");
};
h.debug.Ye = 50;
h.debug.zg = function(a) {
  var c = Error();
  if (Error.captureStackTrace) {
    return Error.captureStackTrace(c, a), String(c.stack);
  }
  try {
    throw c;
  } catch (d) {
    c = d;
  }
  return(a = c.stack) ? String(a) : null;
};
h.debug.ud = function(a) {
  var c;
  h.Vd && (c = h.debug.zg(a || h.debug.ud));
  c || (c = h.debug.Xe(a || arguments.callee.caller, []));
  return c;
};
h.debug.Xe = function(a, c) {
  var d = [];
  if (h.a.contains(c, a)) {
    d.push("[...circular reference...]");
  } else {
    if (a && c.length < h.debug.Ye) {
      d.push(h.debug.getFunctionName(a) + "(");
      for (var e = a.arguments, f = 0;e && f < e.length;f++) {
        0 < f && d.push(", ");
        var g;
        g = e[f];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = h.debug.getFunctionName(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g;
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        d.push(g);
      }
      c.push(a);
      d.push(")\n");
      try {
        d.push(h.debug.Xe(a.caller, c));
      } catch (k) {
        d.push("[exception trying to get caller]\n");
      }
    } else {
      a ? d.push("[...long stack...]") : d.push("[end]");
    }
  }
  return d.join("");
};
h.debug.Qs = function(a) {
  h.debug.Ng = a;
};
h.debug.getFunctionName = function(a) {
  if (h.debug.vb[a]) {
    return h.debug.vb[a];
  }
  if (h.debug.Ng) {
    var c = h.debug.Ng(a);
    if (c) {
      return h.debug.vb[a] = c;
    }
  }
  a = String(a);
  h.debug.vb[a] || (c = /function ([^\(]+)/.exec(a), h.debug.vb[a] = c ? c[1] : "[Anonymous]");
  return h.debug.vb[a];
};
h.debug.qs = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
h.debug.vb = {};
h.debug.S = function(a, c, d, e, f) {
  this.reset(a, c, d, e, f);
};
h.debug.S.prototype.sg = null;
h.debug.S.prototype.rg = null;
h.debug.S.Uj = !0;
h.debug.S.Xj = 0;
h.debug.S.prototype.reset = function(a, c, d, e, f) {
  h.debug.S.Uj && ("number" == typeof f || h.debug.S.Xj++);
  e || h.now();
  this.hd = a;
  this.Wj = c;
  delete this.sg;
  delete this.rg;
};
h.debug.S.prototype.Ti = function(a) {
  this.sg = a;
};
h.debug.S.prototype.Ui = function(a) {
  this.rg = a;
};
h.debug.S.prototype.getMessage = function() {
  return this.Wj;
};
h.debug.O = function() {
  this.clear();
};
h.debug.O.wf = function() {
  h.debug.O.Wb || (h.debug.O.Wb = new h.debug.O);
  return h.debug.O.Wb;
};
h.debug.O.Lc = 0;
h.debug.O.prototype.Qi = function(a, c, d) {
  var e = (this.eg + 1) % h.debug.O.Lc;
  this.eg = e;
  if (this.fg) {
    return e = this.dg[e], e.reset(a, c, d), e;
  }
  this.fg = e == h.debug.O.Lc - 1;
  return this.dg[e] = new h.debug.S(a, c, d);
};
h.debug.O.Si = function() {
  return 0 < h.debug.O.Lc;
};
h.debug.O.prototype.clear = function() {
  this.dg = Array(h.debug.O.Lc);
  this.eg = -1;
  this.fg = !1;
};
h.debug.g = function(a) {
  this.Ed = a;
  this.hb = this.be = this.hd = this.la = null;
};
h.debug.g.Kd = "";
h.debug.g.Ab = !0;
h.debug.g.Ab || (h.debug.g.fd = []);
h.debug.g.j = function(a, c) {
  this.name = a;
  this.value = c;
};
h.debug.g.j.prototype.toString = function() {
  return this.name;
};
h.debug.g.j.Fb = new h.debug.g.j("OFF", Infinity);
h.debug.g.j.xl = new h.debug.g.j("SHOUT", 1200);
h.debug.g.j.Df = new h.debug.g.j("SEVERE", 1E3);
h.debug.g.j.Ef = new h.debug.g.j("WARNING", 900);
h.debug.g.j.Cf = new h.debug.g.j("INFO", 800);
h.debug.g.j.Af = new h.debug.g.j("CONFIG", 700);
h.debug.g.j.Bf = new h.debug.g.j("FINE", 500);
h.debug.g.j.Yk = new h.debug.g.j("FINER", 400);
h.debug.g.j.Zk = new h.debug.g.j("FINEST", 300);
h.debug.g.j.Nk = new h.debug.g.j("ALL", 0);
h.debug.g.j.Hd = [h.debug.g.j.Fb, h.debug.g.j.xl, h.debug.g.j.Df, h.debug.g.j.Ef, h.debug.g.j.Cf, h.debug.g.j.Af, h.debug.g.j.Bf, h.debug.g.j.Yk, h.debug.g.j.Zk, h.debug.g.j.Nk];
h.debug.g.j.Ia = null;
h.debug.g.j.xf = function() {
  h.debug.g.j.Ia = {};
  for (var a = 0, c;c = h.debug.g.j.Hd[a];a++) {
    h.debug.g.j.Ia[c.value] = c, h.debug.g.j.Ia[c.name] = c;
  }
};
h.debug.g.j.xr = function(a) {
  h.debug.g.j.Ia || h.debug.g.j.xf();
  return h.debug.g.j.Ia[a] || null;
};
h.debug.g.j.yr = function(a) {
  h.debug.g.j.Ia || h.debug.g.j.xf();
  if (a in h.debug.g.j.Ia) {
    return h.debug.g.j.Ia[a];
  }
  for (var c = 0;c < h.debug.g.j.Hd.length;++c) {
    var d = h.debug.g.j.Hd[c];
    if (d.value <= a) {
      return d;
    }
  }
  return null;
};
h.debug.g.ej = function(a) {
  h.global.console && (h.global.console.timeStamp ? h.global.console.timeStamp(a) : h.global.console.markTimeline && h.global.console.markTimeline(a));
  h.global.msWriteProfilerMark && h.global.msWriteProfilerMark(a);
};
b = h.debug.g.prototype;
b.getName = function() {
  return this.Ed;
};
b.Jg = function(a) {
  h.debug.ba && (h.debug.g.Ab ? (this.hb || (this.hb = []), this.hb.push(a)) : h.debug.g.fd.push(a));
};
b.Lg = function(a) {
  if (h.debug.ba) {
    var c = h.debug.g.Ab ? this.hb : h.debug.g.fd;
    return!!c && h.a.remove(c, a);
  }
  return!1;
};
b.getParent = function() {
  return this.la;
};
b.getChildren = function() {
  this.be || (this.be = {});
  return this.be;
};
b.Je = function() {
  if (!h.debug.ba) {
    return h.debug.g.j.Fb;
  }
  if (!h.debug.g.Ab) {
    return h.debug.g.tm;
  }
  if (this.hd) {
    return this.hd;
  }
  if (this.la) {
    return this.la.Je();
  }
  h.l.hc("Root logger has no level set.");
  return null;
};
b.aj = function(a) {
  return h.debug.ba && a.value >= this.Je().value;
};
b.log = function(a, c, d) {
  h.debug.ba && this.aj(a) && (h.isFunction(c) && (c = c()), this.$i(this.yf(a, c, d, h.debug.g.prototype.log)));
};
b.yf = function(a, c, d, e) {
  a = h.debug.O.Si() ? h.debug.O.wf().Qi(a, c, this.Ed) : new h.debug.S(a, String(c), this.Ed);
  d && (a.Ti(d), a.Ui(h.debug.Ri(d, e || h.debug.g.prototype.yf)));
  return a;
};
b.Fk = function(a, c) {
  h.debug.ba && this.log(h.debug.g.j.Df, a, c);
};
b.Mg = function(a, c) {
  h.debug.ba && this.log(h.debug.g.j.Ef, a, c);
};
b.info = function(a, c) {
  h.debug.ba && this.log(h.debug.g.j.Cf, a, c);
};
b.config = function(a, c) {
  h.debug.ba && this.log(h.debug.g.j.Af, a, c);
};
b.Kg = function(a, c) {
  h.debug.ba && this.log(h.debug.g.j.Bf, a, c);
};
b.$i = function(a) {
  h.debug.g.ej("log:" + a.getMessage());
  if (h.debug.g.Ab) {
    for (var c = this;c;) {
      c.dj(a), c = c.getParent();
    }
  } else {
    for (var c = 0, d;d = h.debug.g.fd[c++];) {
      d(a);
    }
  }
};
b.dj = function(a) {
  if (this.hb) {
    for (var c = 0, d;d = this.hb[c];c++) {
      d(a);
    }
  }
};
h.debug.ga = {};
h.debug.ga.Pf = {};
h.debug.ga.tk = function() {
  h.debug.ga.Of || (h.debug.ga.Pf[h.debug.g.Kd] = h.debug.ga.Of);
};
h.debug.ga.qr = function() {
  return h.debug.ga.Pf;
};
h.debug.ga.zr = function() {
  h.debug.ga.tk();
  return h.debug.ga.Of;
};
h.debug.ga.Wq = function() {
  return function() {
  };
};
h.log = {};
h.log.Za = h.debug.ba;
h.log.Kd = h.debug.g.Kd;
h.log.g = h.debug.g;
h.log.j = h.debug.g.j;
h.log.S = h.debug.S;
h.log.Jg = function(a, c) {
  h.log.Za && a && a.Jg(c);
};
h.log.Lg = function(a, c) {
  return h.log.Za && a ? a.Lg(c) : !1;
};
h.log.log = function(a, c, d, e) {
  h.log.Za && a && a.log(c, d, e);
};
h.log.error = function(a, c, d) {
  h.log.Za && a && a.Fk(c, d);
};
h.log.Mg = function(a, c, d) {
  h.log.Za && a && a.Mg(c, d);
};
h.log.info = function(a, c, d) {
  h.log.Za && a && a.info(c, d);
};
h.log.Kg = function(a, c, d) {
  h.log.Za && a && a.Kg(c, d);
};
h.debug.K = {};
h.debug.An = function() {
};
h.debug.K.ub = [];
h.debug.K.$d = [];
h.debug.K.pg = !1;
h.debug.K.register = function(a) {
  h.debug.K.ub[h.debug.K.ub.length] = a;
  if (h.debug.K.pg) {
    for (var c = h.debug.K.$d, d = 0;d < c.length;d++) {
      a(h.bind(c[d].wrap, c[d]));
    }
  }
};
h.debug.K.rs = function(a) {
  h.debug.K.pg = !0;
  for (var c = h.bind(a.wrap, a), d = 0;d < h.debug.K.ub.length;d++) {
    h.debug.K.ub[d](c);
  }
  h.debug.K.$d.push(a);
};
h.debug.K.pt = function(a) {
  var c = h.debug.K.$d;
  a = h.bind(a.wm, a);
  for (var d = 0;d < h.debug.K.ub.length;d++) {
    h.debug.K.ub[d](a);
  }
  c.length--;
};
h.async = {};
h.async.Eg = function(a) {
  h.global.setTimeout(function() {
    throw a;
  }, 0);
};
h.async.sa = function(a, c) {
  var d = a;
  c && (d = h.bind(a, c));
  d = h.async.sa.Bg(d);
  !h.isFunction(h.global.setImmediate) || h.global.Window && h.global.Window.prototype.setImmediate == h.global.setImmediate ? (h.async.sa.Cg || (h.async.sa.Cg = h.async.sa.rk()), h.async.sa.Cg(d)) : h.global.setImmediate(d);
};
h.async.sa.rk = function() {
  var a = h.global.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var c = a.contentWindow, a = c.document;
    a.open();
    a.write("");
    a.close();
    var d = "callImmediate" + Math.random(), e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host, a = h.bind(function(a) {
      if (a.origin == e || a.data == d) {
        this.port1.onmessage();
      }
    }, this);
    c.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      c.postMessage(d, e);
    }};
  });
  if ("undefined" !== typeof a && !h.f.userAgent.browser.Zc()) {
    var c = new a, d = {}, e = d;
    c.port1.onmessage = function() {
      d = d.next;
      var a = d.Nf;
      d.Nf = null;
      a();
    };
    return function(a) {
      e.next = {Nf:a};
      e = e.next;
      c.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var c = document.createElement("script");
    c.onreadystatechange = function() {
      c.onreadystatechange = null;
      c.parentNode.removeChild(c);
      c = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(c);
  } : function(a) {
    h.global.setTimeout(a, 0);
  };
};
h.async.sa.Bg = h.q.identity;
h.debug.K.register(function(a) {
  h.async.sa.Bg = a;
});
h.Ka = {};
h.Ka.$a = {};
h.Ka.$a.ee = [];
h.Ka.$a.Ws = function() {
  for (var a = h.Ka.$a.ee, c = 0;c < a.length;c++) {
    h.Ka.$a.ee[c]();
  }
};
h.Ka.$a.sm = function(a) {
  h.Ka.$a.ee.push(a);
};
h.async.run = function(a, c) {
  h.async.run.Mc || h.async.run.lk();
  h.async.run.Oc || (h.async.run.Mc(), h.async.run.Oc = !0);
  h.async.run.Yb.push(new h.async.run.kk(a, c));
};
h.async.run.lk = function() {
  if (h.global.Promise && h.global.Promise.resolve) {
    var a = h.global.Promise.resolve();
    h.async.run.Mc = function() {
      a.then(h.async.run.fe);
    };
  } else {
    h.async.run.Mc = function() {
      h.async.sa(h.async.run.fe);
    };
  }
};
h.async.run.jr = function() {
  h.async.run.Mc = function() {
    h.async.sa(h.async.run.fe);
  };
};
h.async.run.Oc = !1;
h.async.run.Yb = [];
h.pa && (h.async.run.om = function() {
  h.async.run.Oc = !1;
  h.async.run.Yb = [];
}, h.Ka.$a.sm(h.async.run.om));
h.async.run.fe = function() {
  for (;h.async.run.Yb.length;) {
    var a = h.async.run.Yb;
    h.async.run.Yb = [];
    for (var c = 0;c < a.length;c++) {
      var d = a[c];
      try {
        d.sk.call(d.scope);
      } catch (e) {
        h.async.Eg(e);
      }
    }
  }
  h.async.run.Oc = !1;
};
h.async.run.kk = function(a, c) {
  this.sk = a;
  this.scope = c;
};
h.promise = {};
h.promise.Bp = function() {
};
h.Thenable = function() {
};
h.Thenable.prototype.then = function() {
};
h.Thenable.Lb = "$goog_Thenable";
h.Thenable.me = function(a) {
  h.ta(a.prototype, "then", a.prototype.then);
  a.prototype[h.Thenable.Lb] = !0;
};
h.Thenable.da = function(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a[h.Thenable.Lb];
  } catch (c) {
    return!1;
  }
};
h.Promise = function(a, c) {
  this.V = h.Promise.B.Ra;
  this.pd = void 0;
  this.Y = this.la = null;
  this.yd = !1;
  0 < h.Promise.Wa ? this.Bc = 0 : 0 == h.Promise.Wa && (this.Ac = !1);
  h.Promise.pb && (this.Bd = [], this.Cd(Error("created")), this.hf = 0);
  try {
    var d = this;
    a.call(c, function(a) {
      d.Va(h.Promise.B.yc, a);
    }, function(a) {
      if (h.pa && !(a instanceof h.Promise.lb)) {
        try {
          if (a instanceof Error) {
            throw a;
          }
          throw Error("Promise rejected.");
        } catch (c) {
        }
      }
      d.Va(h.Promise.B.oa, a);
    });
  } catch (e) {
    this.Va(h.Promise.B.oa, e);
  }
};
h.Promise.pb = !1;
h.Promise.Wa = 0;
h.Promise.B = {Ra:0, Jf:1, yc:2, oa:3};
h.Promise.resolve = function(a) {
  return new h.Promise(function(c) {
    c(a);
  });
};
h.Promise.reject = function(a) {
  return new h.Promise(function(c, d) {
    d(a);
  });
};
h.Promise.race = function(a) {
  return new h.Promise(function(c, d) {
    a.length || c(void 0);
    for (var e = 0, f;f = a[e];e++) {
      f.then(c, d);
    }
  });
};
h.Promise.all = function(a) {
  return new h.Promise(function(c, d) {
    var e = a.length, f = [];
    if (e) {
      for (var g = function(a, d) {
        e--;
        f[a] = d;
        0 == e && c(f);
      }, k = function(a) {
        d(a);
      }, l = 0, n;n = a[l];l++) {
        n.then(h.Db(g, l), k);
      }
    } else {
      c(f);
    }
  });
};
h.Promise.ir = function(a) {
  return new h.Promise(function(c, d) {
    var e = a.length, f = [];
    if (e) {
      for (var g = function(a) {
        c(a);
      }, k = function(a, c) {
        e--;
        f[a] = c;
        0 == e && d(f);
      }, l = 0, n;n = a[l];l++) {
        n.then(g, h.Db(k, l));
      }
    } else {
      c(void 0);
    }
  });
};
h.Promise.wk = function() {
  var a, c, d = new h.Promise(function(d, f) {
    a = d;
    c = f;
  });
  return new h.Promise.ul(d, a, c);
};
h.Promise.prototype.then = function(a, c, d) {
  h.Promise.pb && this.Cd(Error("then"));
  return this.Fg(h.isFunction(a) ? a : null, h.isFunction(c) ? c : null, d);
};
h.Thenable.me(h.Promise);
b = h.Promise.prototype;
b.Rj = function(a, c) {
  h.Promise.pb && this.Cd(Error("thenCatch"));
  return this.Fg(null, a, c);
};
b.cancel = function(a) {
  this.V == h.Promise.B.Ra && h.async.run(function() {
    var c = new h.Promise.lb(a);
    this.Qf(c);
  }, this);
};
b.Qf = function(a) {
  this.V == h.Promise.B.Ra && (this.la ? this.la.kj(this, a) : this.Va(h.Promise.B.oa, a));
};
b.kj = function(a, c) {
  if (this.Y) {
    for (var d = 0, e = -1, f = 0, g;g = this.Y[f];f++) {
      if (g = g.Fc) {
        if (d++, g == a && (e = f), 0 <= e && 1 < d) {
          break;
        }
      }
    }
    0 <= e && (this.V == h.Promise.B.Ra && 1 == d ? this.Qf(c) : (d = this.Y.splice(e, 1)[0], this.Kf(d, h.Promise.B.oa, c)));
  }
};
b.Kj = function(a) {
  this.Y && this.Y.length || this.V != h.Promise.B.yc && this.V != h.Promise.B.oa || this.Hf();
  this.Y || (this.Y = []);
  this.Y.push(a);
};
b.Fg = function(a, c, d) {
  var e = {Fc:null, Vf:null, Wf:null};
  e.Fc = new h.Promise(function(f, g) {
    e.Vf = a ? function(c) {
      try {
        var e = a.call(d, c);
        f(e);
      } catch (n) {
        g(n);
      }
    } : f;
    e.Wf = c ? function(a) {
      try {
        var e = c.call(d, a);
        !h.Q(e) && a instanceof h.Promise.lb ? g(a) : f(e);
      } catch (n) {
        g(n);
      }
    } : g;
  });
  e.Fc.la = this;
  this.Kj(e);
  return e.Fc;
};
b.Lf = function(a) {
  this.V = h.Promise.B.Ra;
  this.Va(h.Promise.B.yc, a);
};
b.Mf = function(a) {
  this.V = h.Promise.B.Ra;
  this.Va(h.Promise.B.oa, a);
};
b.Va = function(a, c) {
  if (this.V == h.Promise.B.Ra) {
    if (this == c) {
      a = h.Promise.B.oa, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (h.Thenable.da(c)) {
        this.V = h.Promise.B.Jf;
        c.then(this.Lf, this.Mf, this);
        return;
      }
      if (h.isObject(c)) {
        try {
          var d = c.then;
          if (h.isFunction(d)) {
            this.Zi(c, d);
            return;
          }
        } catch (e) {
          a = h.Promise.B.oa, c = e;
        }
      }
    }
    this.pd = c;
    this.V = a;
    this.Hf();
    a != h.Promise.B.oa || c instanceof h.Promise.lb || h.Promise.Yi(this, c);
  }
};
b.Zi = function(a, c) {
  this.V = h.Promise.B.Jf;
  var d = this, e = !1, f = function(a) {
    e || (e = !0, d.Lf(a));
  }, g = function(a) {
    e || (e = !0, d.Mf(a));
  };
  try {
    c.call(a, f, g);
  } catch (k) {
    g(k);
  }
};
b.Hf = function() {
  this.yd || (this.yd = !0, h.async.run(this.Jk, this));
};
b.Jk = function() {
  for (;this.Y && this.Y.length;) {
    var a = this.Y;
    this.Y = [];
    for (var c = 0;c < a.length;c++) {
      h.Promise.pb && this.hf++, this.Kf(a[c], this.V, this.pd);
    }
  }
  this.yd = !1;
};
b.Kf = function(a, c, d) {
  c == h.Promise.B.yc ? a.Vf(d) : (this.Pj(), a.Wf(d));
};
b.Cd = function(a) {
  if (h.Promise.pb && h.isString(a.stack)) {
    var c = a.stack.split("\n", 4)[3];
    a = a.message;
    a += Array(11 - a.length).join(" ");
    this.Bd.push(a + c);
  }
};
b.wg = function(a) {
  if (h.Promise.pb && a && h.isString(a.stack) && this.Bd.length) {
    for (var c = ["Promise trace:"], d = this;d;d = d.la) {
      for (var e = this.hf;0 <= e;e--) {
        c.push(d.Bd[e]);
      }
      c.push("Value: [" + (d.V == h.Promise.B.oa ? "REJECTED" : "FULFILLED") + "] <" + String(d.pd) + ">");
    }
    a.stack += "\n\n" + c.join("\n");
  }
};
b.Pj = function() {
  if (0 < h.Promise.Wa) {
    for (var a = this;a && a.Bc;a = a.la) {
      h.global.clearTimeout(a.Bc), a.Bc = 0;
    }
  } else {
    if (0 == h.Promise.Wa) {
      for (a = this;a && a.Ac;a = a.la) {
        a.Ac = !1;
      }
    }
  }
};
h.Promise.Yi = function(a, c) {
  0 < h.Promise.Wa ? a.Bc = h.global.setTimeout(function() {
    a.wg(c);
    h.Promise.ce.call(null, c);
  }, h.Promise.Wa) : 0 == h.Promise.Wa && (a.Ac = !0, h.async.run(function() {
    a.Ac && (a.wg(c), h.Promise.ce.call(null, c));
  }));
};
h.Promise.ce = h.async.Eg;
h.Promise.Ts = function(a) {
  h.Promise.ce = a;
};
h.Promise.lb = function(a) {
  h.debug.Error.call(this, a);
};
h.ia(h.Promise.lb, h.debug.Error);
h.Promise.lb.prototype.name = "cancel";
h.Promise.ul = function(a, c, d) {
  this.promise = a;
  this.resolve = c;
  this.reject = d;
};
h.Ql = {};
h.Ql.Nn = function() {
};
h.r = function() {
  h.r.Md != h.r.Nd.Fb && (h.r.Xa[h.Sb(this)] = this);
  this.Rb = this.Rb;
  this.Kc = this.Kc;
};
h.r.Nd = {Fb:0, lj:1, Rn:2};
h.r.Md = 0;
h.r.Pn = !0;
h.r.Xa = {};
h.r.Br = function() {
  var a = [], c;
  for (c in h.r.Xa) {
    h.r.Xa.hasOwnProperty(c) && a.push(h.r.Xa[Number(c)]);
  }
  return a;
};
h.r.Lq = function() {
  h.r.Xa = {};
};
h.r.prototype.Rb = !1;
h.r.prototype.isDisposed = function() {
  return this.Rb;
};
h.r.prototype.Zb = function() {
  if (!this.Rb && (this.Rb = !0, this.wa(), h.r.Md != h.r.Nd.Fb)) {
    var a = h.Sb(this);
    if (h.r.Md == h.r.Nd.lj && !h.r.Xa.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete h.r.Xa[a];
  }
};
h.r.prototype.wa = function() {
  if (this.Kc) {
    for (;this.Kc.length;) {
      this.Kc.shift()();
    }
  }
};
h.r.isDisposed = function(a) {
  return a && "function" == typeof a.isDisposed ? a.isDisposed() : !1;
};
h.Zb = function(a) {
  a && "function" == typeof a.Zb && a.Zb();
};
h.ek = function(a) {
  for (var c = 0, d = arguments.length;c < d;++c) {
    var e = arguments[c];
    h.H(e) ? h.ek.apply(null, e) : h.Zb(e);
  }
};
h.c = {};
h.c.df = function(a) {
  this.id = a;
};
h.c.df.prototype.toString = function() {
  return this.id;
};
h.c.Event = function(a, c) {
  this.type = a instanceof h.c.df ? String(a) : a;
  this.currentTarget = this.target = c;
  this.defaultPrevented = this.Qa = !1;
  this.Ge = !0;
};
h.c.Event.prototype.wa = function() {
};
h.c.Event.prototype.Zb = function() {
};
h.c.Event.prototype.stopPropagation = function() {
  this.Qa = !0;
};
h.c.Event.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Ge = !1;
};
h.c.Event.stopPropagation = function(a) {
  a.stopPropagation();
};
h.c.Event.preventDefault = function(a) {
  a.preventDefault();
};
h.Sa = {};
h.Sa.object = function(a, c) {
  return c;
};
h.Sa.ge = function(a) {
  h.Sa.ge[" "](a);
  return a;
};
h.Sa.ge[" "] = h.km;
h.Sa.Nh = function(a, c) {
  try {
    return h.Sa.ge(a[c]), !0;
  } catch (d) {
  }
  return!1;
};
h.c.pc = {Kn:!h.userAgent.ha || h.userAgent.oe(9), $c:!h.userAgent.ha || h.userAgent.oe(9), Oh:h.userAgent.ha && !h.userAgent.aa("9"), Jn:!h.userAgent.ma || h.userAgent.aa("528"), In:h.userAgent.wc && h.userAgent.aa("1.9b") || h.userAgent.ha && h.userAgent.aa("8") || h.userAgent.Zd && h.userAgent.aa("9.5") || h.userAgent.ma && h.userAgent.aa("528"), Mn:h.userAgent.wc && !h.userAgent.aa("8") || h.userAgent.ha && !h.userAgent.aa("9"), Rp:"ontouchstart" in h.global || !!(h.global.document && document.documentElement && 
"ontouchstart" in document.documentElement) || !(!h.global.navigator || !h.global.navigator.msMaxTouchPoints)};
h.c.Sc = function(a) {
  return h.userAgent.ma ? "webkit" + a : h.userAgent.Zd ? "o" + a.toLowerCase() : a.toLowerCase();
};
h.c.Pe = {Lm:"click", Ap:"rightclick", $m:"dblclick", Co:"mousedown", Go:"mouseup", Mh:"mouseover", Lh:"mouseout", Fo:"mousemove", Do:"mouseenter", Eo:"mouseleave", Fp:"selectstart", Zp:"wheel", Yn:"keypress", Xn:"keydown", Zn:"keyup", Hm:"blur", Cn:"focus", an:"deactivate", Dn:h.userAgent.ha ? "focusin" : "DOMFocusIn", En:h.userAgent.ha ? "focusout" : "DOMFocusOut", Jm:"change", Ep:"select", Kp:"submit", Qn:"input", sp:"propertychange", tn:"dragstart", nn:"drag", qn:"dragenter", sn:"dragover", rn:"dragleave", 
un:"drop", pn:"dragend", Qp:"touchstart", Pp:"touchmove", Op:"touchend", Np:"touchcancel", Gm:"beforeunload", Um:"consolemessage", Vm:"contextmenu", gn:"DOMContentLoaded", ERROR:"error", Ln:"help", fo:"load", qo:"losecapture", cp:"orientationchange", tp:"readystatechange", xp:"resize", Dp:"scroll", Up:"unload", Hn:"hashchange", dp:"pagehide", ep:"pageshow", qp:"popstate", Wm:"copy", fp:"paste", Ym:"cut", Dm:"beforecopy", Em:"beforecut", Fm:"beforepaste", bp:"online", ap:"offline", zo:"message", Tm:"connect", 
Am:h.c.Sc("AnimationStart"), ym:h.c.Sc("AnimationEnd"), zm:h.c.Sc("AnimationIteration"), Sp:h.c.Sc("TransitionEnd"), ip:"pointerdown", op:"pointerup", hp:"pointercancel", lp:"pointermove", np:"pointerover", mp:"pointerout", jp:"pointerenter", kp:"pointerleave", Gn:"gotpointercapture", ro:"lostpointercapture", Ho:"MSGestureChange", Io:"MSGestureEnd", Jo:"MSGestureHold", Ko:"MSGestureStart", Lo:"MSGestureTap", Mo:"MSGotPointerCapture", No:"MSInertiaStart", Oo:"MSLostPointerCapture", Po:"MSPointerCancel", 
Qo:"MSPointerDown", Ro:"MSPointerEnter", So:"MSPointerHover", To:"MSPointerLeave", Uo:"MSPointerMove", Vo:"MSPointerOut", Wo:"MSPointerOver", Xo:"MSPointerUp", TEXT:"text", Mp:"textInput", Rm:"compositionstart", Sm:"compositionupdate", Qm:"compositionend", zn:"exit", ho:"loadabort", io:"loadcommit", jo:"loadredirect", ko:"loadstart", lo:"loadstop", yp:"responsive", Ip:"sizechanged", Vp:"unresponsive", Yp:"visibilitychange", Jp:"storage", mn:"DOMSubtreeModified", hn:"DOMNodeInserted", kn:"DOMNodeRemoved", 
ln:"DOMNodeRemovedFromDocument", jn:"DOMNodeInsertedIntoDocument", en:"DOMAttrModified", fn:"DOMCharacterDataModified"};
h.c.ea = function(a, c) {
  h.c.Event.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Hb = this.state = null;
  a && this.init(a, c);
};
h.ia(h.c.ea, h.c.Event);
h.c.ea.Yo = {co:0, Ao:1, zp:2};
h.c.ea.On = [1, 4, 2];
h.c.ea.prototype.init = function(a, c) {
  var d = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = c;
  var e = a.relatedTarget;
  e ? h.userAgent.wc && (h.Sa.Nh(e, "nodeName") || (e = null)) : d == h.c.Pe.Mh ? e = a.fromElement : d == h.c.Pe.Lh && (e = a.toElement);
  this.relatedTarget = e;
  this.offsetX = h.userAgent.ma || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = h.userAgent.ma || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == d ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.Hb = a;
  a.defaultPrevented && this.preventDefault();
};
h.c.ea.prototype.stopPropagation = function() {
  h.c.ea.xa.stopPropagation.call(this);
  this.Hb.stopPropagation ? this.Hb.stopPropagation() : this.Hb.cancelBubble = !0;
};
h.c.ea.prototype.preventDefault = function() {
  h.c.ea.xa.preventDefault.call(this);
  var a = this.Hb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, h.c.pc.Oh) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (c) {
      }
    }
  }
};
h.c.ea.prototype.wa = function() {
};
h.c.N = function() {
};
h.c.N.Lb = "closure_listenable_" + (1E6 * Math.random() | 0);
h.c.N.me = function(a) {
  a.prototype[h.c.N.Lb] = !0;
};
h.c.N.da = function(a) {
  return!(!a || !a[h.c.N.Lb]);
};
h.c.xc = function() {
};
h.c.xc.fi = 0;
h.c.xc.Xh = function() {
  return++h.c.xc.fi;
};
h.c.od = function(a, c, d, e, f, g) {
  this.Oa = a;
  this.proxy = c;
  this.src = d;
  this.type = e;
  this.capture = !!f;
  this.vc = g;
  this.key = h.c.xc.Xh();
  this.removed = this.Pa = !1;
};
h.c.od.wn = !1;
h.c.od.prototype.gc = function() {
  this.removed = !0;
  this.vc = this.src = this.proxy = this.Oa = null;
};
h.c.Da = function(a) {
  this.src = a;
  this.I = {};
  this.Bb = 0;
};
b = h.c.Da.prototype;
b.Eh = function() {
  return this.Bb;
};
b.add = function(a, c, d, e, f) {
  var g = a.toString();
  a = this.I[g];
  a || (a = this.I[g] = [], this.Bb++);
  var k = h.c.Da.Vc(a, c, e, f);
  -1 < k ? (c = a[k], d || (c.Pa = !1)) : (c = new h.c.od(c, null, this.src, g, !!e, f), c.Pa = d, a.push(c));
  return c;
};
b.remove = function(a, c, d, e) {
  a = a.toString();
  if (!(a in this.I)) {
    return!1;
  }
  var f = this.I[a];
  c = h.c.Da.Vc(f, c, d, e);
  return-1 < c ? (f[c].gc(), h.a.eb(f, c), 0 == f.length && (delete this.I[a], this.Bb--), !0) : !1;
};
b.Ee = function(a) {
  var c = a.type;
  if (!(c in this.I)) {
    return!1;
  }
  var d = h.a.remove(this.I[c], a);
  d && (a.gc(), 0 == this.I[c].length && (delete this.I[c], this.Bb--));
  return d;
};
b.removeAll = function(a) {
  a = a && a.toString();
  var c = 0, d;
  for (d in this.I) {
    if (!a || d == a) {
      for (var e = this.I[d], f = 0;f < e.length;f++) {
        ++c, e[f].gc();
      }
      delete this.I[d];
      this.Bb--;
    }
  }
  return c;
};
b.Jb = function(a, c) {
  var d = this.I[a.toString()], e = [];
  if (d) {
    for (var f = 0;f < d.length;++f) {
      var g = d[f];
      g.capture == c && e.push(g);
    }
  }
  return e;
};
b.kb = function(a, c, d, e) {
  a = this.I[a.toString()];
  var f = -1;
  a && (f = h.c.Da.Vc(a, c, d, e));
  return-1 < f ? a[f] : null;
};
b.hasListener = function(a, c) {
  var d = h.Q(a), e = d ? a.toString() : "", f = h.Q(c);
  return h.object.some(this.I, function(a) {
    for (var k = 0;k < a.length;++k) {
      if (!(d && a[k].type != e || f && a[k].capture != c)) {
        return!0;
      }
    }
    return!1;
  });
};
h.c.Da.Vc = function(a, c, d, e) {
  for (var f = 0;f < a.length;++f) {
    var g = a[f];
    if (!g.removed && g.Oa == c && g.capture == !!d && g.vc == e) {
      return f;
    }
  }
  return-1;
};
h.c.ad = "closure_lm_" + (1E6 * Math.random() | 0);
h.c.hi = "on";
h.c.wd = {};
h.c.dd = {zh:0, Ah:1, Fh:2};
h.c.cd = 2;
h.c.qc = 0;
h.c.listen = function(a, c, d, e, f) {
  if (h.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      h.c.listen(a, c[g], d, e, f);
    }
    return null;
  }
  d = h.c.uc(d);
  return h.c.N.da(a) ? a.listen(c, d, e, f) : h.c.Oe(a, c, d, !1, e, f);
};
h.c.Oe = function(a, c, d, e, f, g) {
  if (!c) {
    throw Error("Invalid event type");
  }
  var k = !!f;
  if (k && !h.c.pc.$c) {
    if (h.c.cd == h.c.dd.zh) {
      return h.l.hc("Can not register capture listener in IE8-."), null;
    }
    if (h.c.cd == h.c.dd.Ah) {
      return null;
    }
  }
  var l = h.c.Ga(a);
  l || (a[h.c.ad] = l = new h.c.Da(a));
  d = l.add(c, d, e, f, g);
  if (d.proxy) {
    return d;
  }
  e = h.c.Bh();
  d.proxy = e;
  e.src = a;
  e.Oa = d;
  a.addEventListener ? a.addEventListener(c.toString(), e, k) : a.attachEvent(h.c.we(c.toString()), e);
  h.c.qc++;
  return d;
};
h.c.Bh = function() {
  var a = h.c.Mb, c = h.c.pc.$c ? function(d) {
    return a.call(c.src, c.Oa, d);
  } : function(d) {
    d = a.call(c.src, c.Oa, d);
    if (!d) {
      return d;
    }
  };
  return c;
};
h.c.qd = function(a, c, d, e, f) {
  if (h.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      h.c.qd(a, c[g], d, e, f);
    }
    return null;
  }
  d = h.c.uc(d);
  return h.c.N.da(a) ? a.qd(c, d, e, f) : h.c.Oe(a, c, d, !0, e, f);
};
h.c.ks = function(a, c, d, e, f) {
  c.listen(a, d, e, f);
};
h.c.Ib = function(a, c, d, e, f) {
  if (h.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      h.c.Ib(a, c[g], d, e, f);
    }
    return null;
  }
  d = h.c.uc(d);
  if (h.c.N.da(a)) {
    return a.Ib(c, d, e, f);
  }
  if (!a) {
    return!1;
  }
  if (a = h.c.Ga(a)) {
    if (c = a.kb(c, d, !!e, f)) {
      return h.c.gb(c);
    }
  }
  return!1;
};
h.c.gb = function(a) {
  if (h.isNumber(a) || !a || a.removed) {
    return!1;
  }
  var c = a.src;
  if (h.c.N.da(c)) {
    return c.gb(a);
  }
  var d = a.type, e = a.proxy;
  c.removeEventListener ? c.removeEventListener(d, e, a.capture) : c.detachEvent && c.detachEvent(h.c.we(d), e);
  h.c.qc--;
  (d = h.c.Ga(c)) ? (d.Ee(a), 0 == d.Eh() && (d.src = null, c[h.c.ad] = null)) : a.gc();
  return!0;
};
h.c.ot = function(a, c, d, e, f) {
  c.Ib(a, d, e, f);
};
h.c.removeAll = function(a, c) {
  if (!a) {
    return 0;
  }
  if (h.c.N.da(a)) {
    return a.De(c);
  }
  var d = h.c.Ga(a);
  if (!d) {
    return 0;
  }
  var e = 0, f = c && c.toString(), g;
  for (g in d.I) {
    if (!f || g == f) {
      for (var k = d.I[g].concat(), l = 0;l < k.length;++l) {
        h.c.gb(k[l]) && ++e;
      }
    }
  }
  return e;
};
h.c.Hs = function() {
  return h.c.qc = 0;
};
h.c.Jb = function(a, c, d) {
  return h.c.N.da(a) ? a.Jb(c, d) : a ? (a = h.c.Ga(a)) ? a.Jb(c, d) : [] : [];
};
h.c.kb = function(a, c, d, e, f) {
  d = h.c.uc(d);
  e = !!e;
  return h.c.N.da(a) ? a.kb(c, d, e, f) : a ? (a = h.c.Ga(a)) ? a.kb(c, d, e, f) : null : null;
};
h.c.hasListener = function(a, c, d) {
  if (h.c.N.da(a)) {
    return a.hasListener(c, d);
  }
  a = h.c.Ga(a);
  return!!a && a.hasListener(c, d);
};
h.c.Sl = function(a) {
  var c = [], d;
  for (d in a) {
    a[d] && a[d].id ? c.push(d + " = " + a[d] + " (" + a[d].id + ")") : c.push(d + " = " + a[d]);
  }
  return c.join("\n");
};
h.c.we = function(a) {
  return a in h.c.wd ? h.c.wd[a] : h.c.wd[a] = h.c.hi + a;
};
h.c.nb = function(a, c, d, e) {
  return h.c.N.da(a) ? a.nb(c, d, e) : h.c.jd(a, c, d, e);
};
h.c.jd = function(a, c, d, e) {
  var f = 1;
  if (a = h.c.Ga(a)) {
    if (c = a.I[c.toString()]) {
      for (c = c.concat(), a = 0;a < c.length;a++) {
        var g = c[a];
        g && g.capture == d && !g.removed && (f &= !1 !== h.c.kd(g, e));
      }
    }
  }
  return Boolean(f);
};
h.c.kd = function(a, c) {
  var d = a.Oa, e = a.vc || a.src;
  a.Pa && h.c.gb(a);
  return d.call(e, c);
};
h.c.Ar = function() {
  return h.c.qc;
};
h.c.dispatchEvent = function(a, c) {
  return a.dispatchEvent(c);
};
h.c.Ds = function(a) {
  h.c.Mb = a.um(h.c.Mb);
};
h.c.Mb = function(a, c) {
  if (a.removed) {
    return!0;
  }
  if (!h.c.pc.$c) {
    var d = c || h.Ie("window.event"), e = new h.c.ea(d, this), f = !0;
    if (h.c.cd == h.c.dd.Fh) {
      if (!h.c.Hh(d)) {
        h.c.Ih(d);
        for (var d = [], g = e.currentTarget;g;g = g.parentNode) {
          d.push(g);
        }
        for (var g = a.type, k = d.length - 1;!e.Qa && 0 <= k;k--) {
          e.currentTarget = d[k], f &= h.c.jd(d[k], g, !0, e);
        }
        for (k = 0;!e.Qa && k < d.length;k++) {
          e.currentTarget = d[k], f &= h.c.jd(d[k], g, !1, e);
        }
      }
    } else {
      f = h.c.kd(a, e);
    }
    return f;
  }
  return h.c.kd(a, new h.c.ea(c, this));
};
h.c.Ih = function(a) {
  var c = !1;
  if (0 == a.keyCode) {
    try {
      a.keyCode = -1;
      return;
    } catch (d) {
      c = !0;
    }
  }
  if (c || void 0 == a.returnValue) {
    a.returnValue = !0;
  }
};
h.c.Hh = function(a) {
  return 0 > a.keyCode || void 0 != a.returnValue;
};
h.c.qi = 0;
h.c.Cr = function(a) {
  return a + "_" + h.c.qi++;
};
h.c.Ga = function(a) {
  a = a[h.c.ad];
  return a instanceof h.c.Da ? a : null;
};
h.c.Ad = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
h.c.uc = function(a) {
  if (h.isFunction(a)) {
    return a;
  }
  a[h.c.Ad] || (a[h.c.Ad] = function(c) {
    return a.handleEvent(c);
  });
  return a[h.c.Ad];
};
h.debug.K.register(function(a) {
  h.c.Mb = a(h.c.Mb);
});
h.c.EventTarget = function() {
  h.r.call(this);
  this.na = new h.c.Da(this);
  this.Gh = this;
  this.Fe = null;
};
h.ia(h.c.EventTarget, h.r);
h.c.N.me(h.c.EventTarget);
h.c.EventTarget.to = 1E3;
b = h.c.EventTarget.prototype;
b.kf = function() {
  return this.Fe;
};
b.addEventListener = function(a, c, d, e) {
  h.c.listen(this, a, c, d, e);
};
b.removeEventListener = function(a, c, d, e) {
  h.c.Ib(this, a, c, d, e);
};
b.dispatchEvent = function(a) {
  var c, d = this.kf();
  if (d) {
    for (c = [];d;d = d.kf()) {
      c.push(d);
    }
  }
  return h.c.EventTarget.ei(this.Gh, a, c);
};
b.wa = function() {
  h.c.EventTarget.xa.wa.call(this);
  this.De();
  this.Fe = null;
};
b.listen = function(a, c, d, e) {
  return this.na.add(String(a), c, !1, d, e);
};
b.qd = function(a, c, d, e) {
  return this.na.add(String(a), c, !0, d, e);
};
b.Ib = function(a, c, d, e) {
  return this.na.remove(String(a), c, d, e);
};
b.gb = function(a) {
  return this.na.Ee(a);
};
b.De = function(a) {
  return this.na ? this.na.removeAll(a) : 0;
};
b.nb = function(a, c, d) {
  a = this.na.I[String(a)];
  if (!a) {
    return!0;
  }
  a = a.concat();
  for (var e = !0, f = 0;f < a.length;++f) {
    var g = a[f];
    if (g && !g.removed && g.capture == c) {
      var k = g.Oa, l = g.vc || g.src;
      g.Pa && this.gb(g);
      e = !1 !== k.call(l, d) && e;
    }
  }
  return e && 0 != d.Ge;
};
b.Jb = function(a, c) {
  return this.na.Jb(String(a), c);
};
b.kb = function(a, c, d, e) {
  return this.na.kb(String(a), c, d, e);
};
b.hasListener = function(a, c) {
  return this.na.hasListener(h.Q(a) ? String(a) : void 0, c);
};
h.c.EventTarget.ei = function(a, c, d) {
  var e = c.type || c;
  if (h.isString(c)) {
    c = new h.c.Event(c, a);
  } else {
    if (c instanceof h.c.Event) {
      c.target = c.target || a;
    } else {
      var f = c;
      c = new h.c.Event(e, a);
      h.object.extend(c, f);
    }
  }
  var f = !0, g;
  if (d) {
    for (var k = d.length - 1;!c.Qa && 0 <= k;k--) {
      g = c.currentTarget = d[k], f = g.nb(e, !0, c) && f;
    }
  }
  c.Qa || (g = c.currentTarget = a, f = g.nb(e, !0, c) && f, c.Qa || (f = g.nb(e, !1, c) && f));
  if (d) {
    for (k = 0;!c.Qa && k < d.length;k++) {
      g = c.currentTarget = d[k], f = g.nb(e, !1, c) && f;
    }
  }
  return f;
};
h.A = function(a, c) {
  h.c.EventTarget.call(this);
  this.Gb = a || 1;
  this.jb = c || h.A.nd;
  this.ld = h.bind(this.Jh, this);
  this.md = h.now();
};
h.ia(h.A, h.c.EventTarget);
h.A.Vj = 2147483647;
h.A.gg = -1;
h.A.prototype.enabled = !1;
h.A.nd = h.global;
h.A.Ej = .8;
b = h.A.prototype;
b.$ = null;
b.setInterval = function(a) {
  this.Gb = a;
  this.$ && this.enabled ? (this.stop(), this.start()) : this.$ && this.stop();
};
b.Jh = function() {
  if (this.enabled) {
    var a = h.now() - this.md;
    0 < a && a < this.Gb * h.A.Ej ? this.$ = this.jb.setTimeout(this.ld, this.Gb - a) : (this.$ && (this.jb.clearTimeout(this.$), this.$ = null), this.Dj(), this.enabled && (this.$ = this.jb.setTimeout(this.ld, this.Gb), this.md = h.now()));
  }
};
b.Dj = function() {
  this.dispatchEvent(h.A.gk);
};
b.start = function() {
  this.enabled = !0;
  this.$ || (this.$ = this.jb.setTimeout(this.ld, this.Gb), this.md = h.now());
};
b.stop = function() {
  this.enabled = !1;
  this.$ && (this.jb.clearTimeout(this.$), this.$ = null);
};
b.wa = function() {
  h.A.xa.wa.call(this);
  this.stop();
  delete this.jb;
};
h.A.gk = "tick";
h.A.Pa = function(a, c, d) {
  if (h.isFunction(a)) {
    d && (a = h.bind(a, d));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = h.bind(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return c > h.A.Vj ? h.A.gg : h.A.nd.setTimeout(a, c || 0);
};
h.A.clear = function(a) {
  h.A.nd.clearTimeout(a);
};
h.A.promise = function(a, c) {
  var d = null;
  return(new h.Promise(function(e, f) {
    d = h.A.Pa(function() {
      e(c);
    }, a);
    d == h.A.gg && f(Error("Failed to schedule timer."));
  })).Rj(function(a) {
    h.A.clear(d);
    throw a;
  });
};
m.Ic = function(a, c, d) {
  this.gj = a;
  this.Ld = 0 < c ? c : 10;
  this.fj = 0 < d ? d : 1;
  this.lg = 0;
  this.ig = 1;
  this.Tf = 0;
  this.Sf = !1;
  this.rb = this.Qb = null;
};
h.ia(m.Ic, h.r);
b = m.Ic.prototype;
b.start = function() {
  if (this.vk()) {
    return h.Promise.reject(Error("Cannot call Retry.start more than once."));
  }
  this.rb = h.Promise.wk();
  this.Uf();
  return this.rb.promise;
};
b.Uf = function() {
  this.Qb = null;
  this.Tf >= this.fj ? (this.Hc(), this.rb.reject(Error("Max attempts reached"))) : this.Sf || (this.gj().then(function(a) {
    this.Hc();
    this.rb.resolve(a);
  }, function() {
    this.Qb = h.A.Pa(this.Uf, this.Ld, this);
    this.mj();
  }, this), this.Tf++);
};
b.mj = function() {
  var a = this.Ld * this.ig;
  0 < this.lg && (a = Math.min(a, this.lg));
  this.Ld = a;
};
b.Fj = function(a) {
  this.ig = a;
  return this;
};
b.abort = function() {
  this.Hc();
  this.rb.reject(Error("abort"));
};
b.Hc = function() {
  null != this.Qb && (h.A.clear(this.Qb), this.Qb = null);
  this.Sf = !0;
};
b.wa = function() {
  this.Hc();
  m.Ic.xa.wa.call(this);
};
b.vk = function() {
  return null != this.rb;
};
m.tg = function(a) {
  this.Ub = a;
  this.de = this.P = null;
};
b = m.tg.prototype;
b.qk = function(a) {
  this.de = a;
};
b.Zf = function(a) {
  a.clientId = this.Ub;
  if (!this.P && (this.$f(), !this.P)) {
    return;
  }
  this.P.postMessage(a);
};
b.$f = function() {
  !this.P && (this.P = chrome.runtime.connect({name:this.Ub})) && (this.P.onMessage.addListener(h.bind(this.Yf, this)), this.P.onDisconnect.addListener(h.bind(this.fk, this)));
};
b.Yf = function(a) {
  this.de && this.de(a);
};
b.fk = function() {
  this.P = null;
  var a = h.bind(function() {
    this.$f();
    return this.P ? h.Promise.resolve() : h.Promise.reject(Error("Failed to connect"));
  }, this);
  (new m.Ic(a, 100, 6)).Fj(2).start().then(function() {
    this.Zf(new m.Sd(m.J.Cj, null));
  }, function() {
    this.Yf(new m.Sd(m.J.If, null));
  }, this);
};
m.Xb = function(a) {
  this.Qg = a;
  this.Og = null;
};
m.Xb.prototype.init = function() {
  window.addEventListener("message", this.lm.bind(this), !1);
};
m.Xb.prototype.pk = function(a) {
  this.Og = a;
};
m.Xb.prototype.lm = function(a) {
  if (a.source != window) {
    var c = a.data;
    this.Qg = c.appOrigin = a.origin;
    this.Og(c);
  }
};
m.Xb.prototype.Xf = function(a) {
  a.clientId = null;
  window.parent.postMessage(a, this.Qg);
};
m.$b = function() {
  this.Ub = "client-" + String(Math.floor(1E5 * Math.random()));
  this.sessionRequest = null;
  this.Gc = new m.Xb(m.ae.Zj("appOrigin"));
  this.cg = new m.tg(this.Ub);
};
m.$b.prototype.init = function() {
  this.Gc.init();
  this.Gc.pk(this.mk.bind(this));
  this.cg.qk(this.nk.bind(this));
  this.ok(null);
};
m.$b.prototype.ok = function(a) {
  this.Gc.Xf(new m.Sd(m.J.Tj, a));
};
m.$b.prototype.mk = function(a) {
  a.clientId = this.Ub;
  this.cg.Zf(a);
};
m.$b.prototype.nk = function(a) {
  switch(a.type) {
    case m.J.oj:
    ;
    case m.J.pj:
    ;
    case m.J.ERROR:
    ;
    case m.J.tj:
    ;
    case m.J.Aj:
    ;
    case m.J.rj:
    ;
    case m.J.wj:
    ;
    case m.J.vj:
    ;
    case m.J.Bj:
    ;
    case m.J.sj:
    ;
    case m.J.zj:
    ;
    case m.J.xj:
    ;
    case m.J.If:
    ;
    case m.J.qj:
    ;
    case m.J.yj:
    ;
    case m.J.uj:
      this.Gc.Xf(a);
  }
};
m.Zl = new m.$b;
m.Zl.init();

