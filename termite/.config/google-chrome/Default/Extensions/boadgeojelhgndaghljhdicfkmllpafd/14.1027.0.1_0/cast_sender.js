(function() {var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var g = g || {};
g.global = this;
g.ja = function(a) {
  return void 0 !== a;
};
g.ke = function(a, c, d) {
  a = a.split(".");
  d = d || g.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && g.ja(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
g.qr = function(a, c) {
  g.ke(a, c);
};
g.Ga = !0;
g.zo = "en";
g.he = !0;
g.Ld = !1;
g.Vs = function(a) {
  g.wg(a);
};
g.wg = function(a, c) {
  g.ke(a, c);
};
g.module = function(a) {
  if (!g.isString(a) || !a) {
    throw Error("Invalid module identifier");
  }
  if (!g.Qg()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (g.ea.Gd) {
    throw Error("goog.module may only be called once per module.");
  }
  g.ea.Gd = a;
};
g.module.get = function(a) {
  return g.module.Nm(a);
};
g.module.Nm = function() {
};
g.ea = null;
g.Qg = function() {
  return null != g.ea;
};
g.module.Fd = function() {
  if (!g.Qg()) {
    throw Error("goog.module.declareTestMethods must be called from within a goog.module");
  }
  g.ea.Fd = !0;
};
g.module.sg = function() {
  g.ea.sg = !0;
};
g.gt = function(a) {
  if (!g.Ga) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
g.Cr = function() {
};
g.Hl = function(a, c) {
  for (var d = a.split("."), e = c || g.global, f;f = d.shift();) {
    if (g.X(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
g.Tr = function(a, c) {
  var d = c || g.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
g.xq = function(a, c, d, e) {
  if (g.Yg) {
    var f;
    a = a.replace(/\\/g, "/");
    for (var h = g.Qa, l = 0;f = c[l];l++) {
      h.Hb[f] = a, h.Sf[a] = !!e;
    }
    for (e = 0;c = d[e];e++) {
      a in h.requires || (h.requires[a] = {}), h.requires[a][c] = !0;
    }
  }
};
g.Ht = !1;
g.Xn = !0;
g.Hs = function(a) {
  g.global.console && g.global.console.error(a);
};
g.require = function() {
};
g.Gb = "";
g.Mf = function() {
};
g.Zr = function(a) {
  return a;
};
g.vq = function() {
  throw Error("unimplemented abstract method");
};
g.Em = function(a) {
  a.Sc = function() {
    if (a.Ob) {
      return a.Ob;
    }
    g.Ga && (g.Wg[g.Wg.length] = a);
    return a.Ob = new a;
  };
};
g.Wg = [];
g.nl = !0;
g.tk = g.Ga;
g.vk = {};
g.Yg = !1;
g.Yg && (g.fk = {}, g.Qa = {Sf:{}, Hb:{}, requires:{}, $f:{}, nb:{}}, g.ah = function() {
  var a = g.global.document;
  return "undefined" != typeof a && "write" in a;
}, g.Im = function() {
  if (g.global.rl) {
    g.Gb = g.global.rl;
  } else {
    if (g.ah()) {
      for (var a = g.global.document.getElementsByTagName("script"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          g.Gb = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, g.Cd = function(a, c) {
  (g.global.Ak || g.Bg)(a, c) && (g.Qa.nb[a] = !0);
}, g.mg = g.global.document && g.global.document.all && !g.global.atob, g.ek = function(a) {
  g.Cd("", 'goog.retrieveAndExecModule_("' + a + '");') && (g.Qa.nb[a] = !0);
}, g.Hc = [], g.$s = function(a) {
  for (var c;-1 != (c = a.indexOf("/./"));) {
    a = a.substr(0, c) + a.substr(c + 2);
  }
  for (;-1 != (c = a.indexOf("/../"));) {
    var d = a.lastIndexOf("/", c - 1);
    a = a.substr(0, d) + a.substr(c + 3);
  }
  c = g.global.Ak || g.Bg;
  var e = null, d = new g.global.XMLHttpRequest;
  d.onload = function() {
    e = this.responseText;
  };
  d.open("get", a, !1);
  d.send();
  e = d.responseText;
  if (null != e) {
    d = g.Ik(a, e), g.mg ? g.Hc.push(d) : c(a, d), g.Qa.nb[a] = !0;
  } else {
    throw Error("load of " + a + "failed");
  }
}, g.Ik = function(a, c) {
  return g.nl && g.ja(g.global.JSON) ? "goog.loadModule(" + g.global.JSON.stringify(c + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, g.El = function() {
  var a = g.Hc.length;
  if (0 < a) {
    var c = g.Hc;
    g.Hc = [];
    for (var d = 0;d < a;d++) {
      g.Bl(c[d]);
    }
  }
}, g.Es = function(a) {
  try {
    g.ea = {Gd:void 0, Fd:!1};
    var c;
    if (g.isFunction(a)) {
      c = a.call(g.global, {});
    } else {
      if (g.isString(a)) {
        c = g.uk.call(g.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var d = g.ea.Gd;
    if (!g.isString(d) || !d) {
      throw Error('Invalid module name "' + d + '"');
    }
    g.ea.sg ? g.wg(d, c) : g.tk && Object.seal && Object.seal(c);
    g.vk[d] = c;
    if (g.ea.Fd) {
      for (var e in c) {
        if (0 === e.indexOf("test", 0) || "tearDown" == e || "setup" == e) {
          g.global[e] = c[e];
        }
      }
    }
  } finally {
    g.ea = null;
  }
}, g.uk = function(a) {
  eval(a);
  return{};
}, g.Bg = function(a, c) {
  if (g.ah()) {
    var d = g.global.document;
    if ("complete" == d.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return!1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var e = g.mg;
    void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++g.hh + ")' ", d.write('<script type="text/javascript" src="' + a + '"' + e + ">\x3c/script>")) : d.write('<script type="text/javascript" src="' + a + '">\x3c/script>') : d.write('<script type="text/javascript">' + c + "\x3c/script>");
    return!0;
  }
  return!1;
}, g.hh = 0, g.Rs = function(a, c) {
  "complete" == a.readyState && g.hh == c && g.El();
  return!0;
}, g.Mt = function() {
  function a(f) {
    if (!(f in e.nb)) {
      if (!(f in e.$f) && (e.$f[f] = !0, f in e.requires)) {
        for (var h in e.requires[f]) {
          if (!g.ln(h)) {
            if (h in e.Hb) {
              a(e.Hb[h]);
            } else {
              throw Error("Undefined nameToPath for " + h);
            }
          }
        }
      }
      f in d || (d[f] = !0, c.push(f));
    }
  }
  var c = [], d = {}, e = g.Qa, f;
  for (f in g.fk) {
    e.nb[f] || a(f);
  }
  for (var h = 0;h < c.length;h++) {
    f = c[h], g.Qa.nb[f] = !0;
  }
  var l = g.ea;
  g.ea = null;
  for (h = 0;h < c.length;h++) {
    if (f = c[h]) {
      e.Sf[f] ? g.ek(g.Gb + f) : g.Cd(g.Gb + f);
    } else {
      throw g.ea = l, Error("Undefined script input");
    }
  }
  g.ea = l;
}, g.Nr = function(a) {
  return a in g.Qa.Hb ? g.Qa.Hb[a] : null;
}, g.Im(), g.global.In || g.Cd(g.Gb + "deps.js"));
g.da = function(a) {
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
g.Qc = function(a) {
  return null === a;
};
g.X = function(a) {
  return null != a;
};
g.isArray = function(a) {
  return "array" == g.da(a);
};
g.M = function(a) {
  var c = g.da(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
g.gs = function(a) {
  return g.isObject(a) && "function" == typeof a.getFullYear;
};
g.isString = function(a) {
  return "string" == typeof a;
};
g.Ma = function(a) {
  return "boolean" == typeof a;
};
g.isNumber = function(a) {
  return "number" == typeof a;
};
g.isFunction = function(a) {
  return "function" == g.da(a);
};
g.isObject = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
g.le = function(a) {
  return a[g.bb] || (a[g.bb] = ++g.yl);
};
g.Wr = function(a) {
  return!!a[g.bb];
};
g.bn = function(a) {
  "removeAttribute" in a && a.removeAttribute(g.bb);
  try {
    delete a[g.bb];
  } catch (c) {
  }
};
g.bb = "closure_uid_" + (1E9 * Math.random() >>> 0);
g.yl = 0;
g.Ir = g.le;
g.Ys = g.bn;
g.ll = function(a) {
  var c = g.da(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.ll(a[d]);
    }
    return c;
  }
  return a;
};
g.Gl = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
g.Fl = function(a, c, d) {
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
g.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g.bind = g.Gl : g.bind = g.Fl;
  return g.bind.apply(null, arguments);
};
g.vb = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
g.Hh = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
g.now = g.he && Date.now || function() {
  return+new Date;
};
g.Bl = function(a) {
  if (g.global.execScript) {
    g.global.execScript(a, "JavaScript");
  } else {
    if (g.global.eval) {
      if (null == g.Mc && (g.global.eval("var _et_ = 1;"), "undefined" != typeof g.global._et_ ? (delete g.global._et_, g.Mc = !0) : g.Mc = !1), g.Mc) {
        g.global.eval(a);
      } else {
        var c = g.global.document, d = c.createElement("script");
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
g.Mc = null;
g.Gr = function(a, c) {
  var d = function(a) {
    return g.sh[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = g.sh ? "BY_WHOLE" == g.Cl ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
g.ct = function(a, c) {
  g.sh = a;
  g.Cl = c;
};
g.Lr = function(a, c) {
  c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
    return e in c ? c[e] : a;
  }));
  return a;
};
g.Mr = function(a) {
  return a;
};
g.h = function(a, c, d) {
  g.ke(a, c, d);
};
g.s = function(a, c, d) {
  a[c] = d;
};
g.Da = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.Jc = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.zl = function(a, d, h) {
    var l = Array.prototype.slice.call(arguments, 2);
    return c.prototype[d].apply(a, l);
  };
};
g.zl = function(a, c, d) {
  var e = arguments.callee.caller;
  if (g.Ld || g.Ga && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.Jc) {
    return e.Jc.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
  }
  for (var f = Array.prototype.slice.call(arguments, 2), h = !1, l = a.constructor;l;l = l.Jc && l.Jc.constructor) {
    if (l.prototype[c] === e) {
      h = !0;
    } else {
      if (h) {
        return l.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
g.scope = function(a) {
  a.call(g.global);
};
g.$l = !0;
g.$l && (Function.prototype.bind = Function.prototype.bind || function(a, c) {
  if (1 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 1);
    d.unshift(this, a);
    return g.bind.apply(null, d);
  }
  return g.bind(this, a);
}, Function.prototype.vb = function(a) {
  var c = Array.prototype.slice.call(arguments);
  c.unshift(this, null);
  return g.bind.apply(null, c);
}, Function.prototype.Da = function(a) {
  g.Da(this, a);
}, Function.prototype.Hh = function(a) {
  g.Hh(this.prototype, a);
});
g.Ba = function(a, c) {
  var d = c.constructor, e = c.Rk;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = g.Ba.Qk(d, a);
  a && g.Da(d, a);
  delete c.constructor;
  delete c.Rk;
  g.Ba.Pg(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : g.Ba.Pg(d, e));
  return d;
};
g.Ba.bl = g.Ga;
g.Ba.Qk = function(a, c) {
  if (g.Ba.bl && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[g.cl]) {
      return a;
    }
    var d = function() {
      var c = a.apply(this, arguments) || this;
      c[g.bb] = c[g.bb];
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return a;
};
g.Ba.gh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.Ba.Pg = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < g.Ba.gh.length;e++) {
    d = g.Ba.gh[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
g.ut = function() {
};
g.cl = "goog_defineClass_legacy_unsealable";
chrome.cast.ph = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
g.h("chrome.cast.AutoJoinPolicy", chrome.cast.ph);
chrome.cast.qh = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
g.h("chrome.cast.DefaultActionPolicy", chrome.cast.qh);
chrome.cast.fe = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
g.h("chrome.cast.Capability", chrome.cast.fe);
chrome.cast.wa = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
g.h("chrome.cast.ErrorCode", chrome.cast.wa);
chrome.cast.im = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
g.h("chrome.cast.ReceiverAvailability", chrome.cast.im);
chrome.cast.pm = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
g.h("chrome.cast.SenderPlatform", chrome.cast.pm);
chrome.cast.yb = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
g.h("chrome.cast.ReceiverType", chrome.cast.yb);
chrome.cast.Ol = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
g.h("chrome.cast.DialAppState", chrome.cast.Ol);
chrome.cast.hm = {CAST:"cast", STOP:"stop"};
g.h("chrome.cast.ReceiverAction", chrome.cast.hm);
chrome.cast.Nb = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
g.h("chrome.cast.SessionStatus", chrome.cast.Nb);
chrome.cast.VERSION = [1, 2];
g.h("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.Error = function(a, c, d) {
  this.code = a;
  this.description = c || null;
  this.details = d || null;
};
g.h("chrome.cast.Error", chrome.cast.Error);
chrome.cast.om = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
g.h("chrome.cast.SenderApplication", chrome.cast.om);
chrome.cast.Image = function(a) {
  this.url = a;
  this.width = this.height = null;
};
g.h("chrome.cast.Image", chrome.cast.Image);
chrome.cast.Bc = function(a, c) {
  this.level = g.ja(a) ? a : null;
  this.muted = g.ja(c) ? c : null;
};
g.h("chrome.cast.Volume", chrome.cast.Bc);
var k = {J:{so:"LAUNCH", Ug:"STOP", Tg:"SET_VOLUME", Sg:"GET_STATUS", al:"RECEIVER_STATUS", qq:"CONNECT", rq:"CLOSE", fo:"GET_APP_AVAILABILITY", rg:"LOAD", ak:"PAUSE", dk:"SEEK", bk:"PLAY", Tf:"STOP_MEDIA", Of:"MEDIA_GET_STATUS", Qf:"MEDIA_SET_VOLUME", Yj:"EDIT_TRACKS_INFO", jo:"INVALID_PLAYER_STATE", yo:"LOAD_FAILED", xo:"LOAD_CANCELLED", ko:"INVALID_REQUEST", zd:"MEDIA_STATUS", uo:"LAUNCH_ERROR", Lp:"PING", Np:"PONG"}, ge:{}};
k.ge[k.J.Tf] = k.J.Ug;
k.ge[k.J.Qf] = k.J.Tg;
k.ge[k.J.Of] = k.J.Sg;
k.Dk = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
k.Bk = function(a) {
  this.type = k.J.Ug;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.media.nh = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
g.h("chrome.cast.media.MediaCommand", chrome.cast.media.nh);
chrome.cast.media.ra = {GENERIC:0, TV_SHOW:1, MOVIE:2, MUSIC_TRACK:3, PHOTO:4};
g.h("chrome.cast.media.MetadataType", chrome.cast.media.ra);
chrome.cast.media.Jb = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
g.h("chrome.cast.media.PlayerState", chrome.cast.media.Jb);
chrome.cast.media.lm = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
g.h("chrome.cast.media.ResumeState", chrome.cast.media.lm);
chrome.cast.media.Xd = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
g.h("chrome.cast.media.StreamType", chrome.cast.media.Xd);
chrome.cast.media.Xl = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
g.h("chrome.cast.media.IdleReason", chrome.cast.media.Xl);
chrome.cast.media.ym = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
g.h("chrome.cast.media.TrackType", chrome.cast.media.ym);
chrome.cast.media.vm = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
g.h("chrome.cast.media.TextTrackType", chrome.cast.media.vm);
chrome.cast.media.rm = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
g.h("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.rm);
chrome.cast.media.wm = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
g.h("chrome.cast.media.TextTrackWindowType", chrome.cast.media.wm);
chrome.cast.media.sm = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
g.h("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.sm);
chrome.cast.media.tm = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
g.h("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.tm);
chrome.cast.media.Nf = function() {
  this.customData = null;
};
g.h("chrome.cast.media.GetStatusRequest", chrome.cast.media.Nf);
chrome.cast.media.Vf = function() {
  this.customData = null;
};
g.h("chrome.cast.media.PauseRequest", chrome.cast.media.Vf);
chrome.cast.media.Wf = function() {
  this.customData = null;
};
g.h("chrome.cast.media.PlayRequest", chrome.cast.media.Wf);
chrome.cast.media.nm = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
g.h("chrome.cast.media.SeekRequest", chrome.cast.media.nm);
chrome.cast.media.Uf = function() {
  this.customData = null;
};
g.h("chrome.cast.media.StopRequest", chrome.cast.media.Uf);
chrome.cast.media.Bm = function(a) {
  this.volume = a;
  this.customData = null;
};
g.h("chrome.cast.media.VolumeRequest", chrome.cast.media.Bm);
chrome.cast.media.Zl = function(a) {
  this.type = k.J.rg;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
g.h("chrome.cast.media.LoadRequest", chrome.cast.media.Zl);
chrome.cast.media.Sl = function(a, c) {
  this.requestId = null;
  this.activeTrackIds = a || null;
  this.textTrackStyle = c || null;
};
g.h("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.Sl);
chrome.cast.media.Vl = function() {
  this.metadataType = this.type = chrome.cast.media.ra.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
g.h("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.Vl);
chrome.cast.media.em = function() {
  this.metadataType = this.type = chrome.cast.media.ra.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
g.h("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.em);
chrome.cast.media.zm = function() {
  this.metadataType = this.type = chrome.cast.media.ra.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
g.h("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.zm);
chrome.cast.media.fm = function() {
  this.metadataType = this.type = chrome.cast.media.ra.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
g.h("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.fm);
chrome.cast.media.gm = function() {
  this.metadataType = this.type = chrome.cast.media.ra.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
g.h("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.gm);
chrome.cast.media.dm = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.Xd.BUFFERED;
  this.contentType = c;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
g.h("chrome.cast.media.MediaInfo", chrome.cast.media.dm);
chrome.cast.media.q = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.Jb.IDLE;
  this.currentTime = 0;
  this.xd = -1;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Bc;
  this.customData = this.activeTrackIds = this.idleReason = null;
  this.lc = this.qd = !1;
  this.Mb = [];
};
g.h("chrome.cast.media.Media", chrome.cast.media.q);
chrome.cast.media.Ml = "CC1AD845";
g.h("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Ml);
chrome.cast.media.timeout = {};
g.h("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
g.s(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.xc = 0;
g.s(chrome.cast.media.timeout, "getStatus", chrome.cast.media.timeout.xc);
chrome.cast.media.timeout.play = 0;
g.s(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
g.s(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
g.s(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
g.s(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.Ac = 0;
g.s(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.Ac);
chrome.cast.media.timeout.Cc = 0;
g.s(chrome.cast.media.timeout, "editTracksInfo", chrome.cast.media.timeout.Cc);
chrome.cast.media.xm = function(a, c) {
  this.trackId = a;
  this.trackContentType = this.trackContentId = null;
  this.type = c;
  this.customData = this.subtype = this.language = this.name = null;
};
g.h("chrome.cast.media.Track", chrome.cast.media.xm);
chrome.cast.media.um = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
g.h("chrome.cast.media.TextTrackStyle", chrome.cast.media.um);
chrome.cast.Jl = function(a, c, d, e, f) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.ph.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.qh.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
g.h("chrome.cast.ApiConfig", chrome.cast.Jl);
chrome.cast.Rl = function(a, c) {
  this.appName = a;
  this.launchParameter = c || null;
};
g.h("chrome.cast.DialRequest", chrome.cast.Rl);
chrome.cast.Pl = function(a, c, d) {
  this.receiver = a;
  this.appState = c;
  this.extraData = d || null;
};
g.h("chrome.cast.DialLaunchData", chrome.cast.Pl);
chrome.cast.Ql = function(a, c) {
  this.doLaunch = a;
  this.launchParameter = c || null;
};
g.h("chrome.cast.DialLaunchResponse", chrome.cast.Ql);
chrome.cast.qm = function(a, c, d) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.fe.VIDEO_OUT, chrome.cast.fe.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.requestSession;
  this.language = null;
};
g.h("chrome.cast.SessionRequest", chrome.cast.qm);
chrome.cast.Sa = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.yb.CAST;
  this.displayStatus = this.isActiveInput = null;
};
g.h("chrome.cast.Receiver", chrome.cast.Sa);
chrome.cast.jm = function(a, c) {
  this.statusText = a;
  this.appImages = c;
  this.showStop = null;
};
g.h("chrome.cast.ReceiverDisplayStatus", chrome.cast.jm);
chrome.cast.o = function(a, c, d, e, f) {
  this.sessionId = a;
  this.appId = c;
  this.displayName = d;
  this.statusText = null;
  this.appImages = e;
  this.receiver = f;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.Nb.CONNECTED;
  this.transportId = "";
};
g.h("chrome.cast.Session", chrome.cast.o);
chrome.cast.o.Xf = "custom_receiver_session_id";
g.s(chrome.cast.o, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.o.Xf);
chrome.cast.timeout = {};
g.h("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.timeout.requestSession = 1E4;
chrome.cast.timeout.leaveSession = 3E3;
chrome.cast.timeout.stopSession = 3E3;
chrome.cast.timeout.setReceiverVolume = 3E3;
chrome.cast.timeout.sendCustomMessage = 3E3;
k.Uj = function(a) {
  this.sessionRequest = a.sessionRequest;
  this.autoJoinPolicy = a.autoJoinPolicy;
  this.defaultActionPolicy = a.defaultActionPolicy;
  this.useCustomDialLaunch = !!a.customDialLaunchCallback;
};
k.yn = function() {
  this.displayName = this.appId = this.sessionId = this.transportId = "";
  this.statusText = null;
  this.appImages = [];
  this.senderApps = [];
  this.namespaces = [];
};
k.Vp = function() {
  this.type = k.J.Sg;
  this.requestId = null;
};
k.Wp = function() {
  this.type = k.J.al;
  this.status = this.requestId = null;
};
k.Up = function() {
  this.channelUrl = this.volume = this.applications = null;
  this.isActiveInput = void 0;
};
k.lo = function() {
};
g.debug = {};
g.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, g.debug.Error);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
g.Da(g.debug.Error, Error);
g.debug.Error.prototype.name = "CustomError";
g.Hf = {};
g.Hf.Jj = {Ij:1, sn:2, TEXT:3, Dn:4, $n:5, Zn:6, Op:7, Kn:8, Tn:9, Vn:10, Un:11, Hp:12};
g.b = {};
g.b.$c = !1;
g.b.yi = {xi:"\u00a0"};
g.b.$h = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.b.tr = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
g.b.Vq = function(a, c) {
  return 0 == g.b.Ze(c, a.substr(0, c.length));
};
g.b.Tq = function(a, c) {
  return 0 == g.b.Ze(c, a.substr(a.length - c.length, c.length));
};
g.b.Uq = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.b.Di = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
g.b.cr = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
g.b.Ye = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
g.b.ks = function(a) {
  return 0 == a.length;
};
g.b.$ = g.b.Ye;
g.b.Qm = function(a) {
  return g.b.Ye(g.b.vi(a));
};
g.b.js = g.b.Qm;
g.b.ds = function(a) {
  return!/[^\t\n\r ]/.test(a);
};
g.b.as = function(a) {
  return!/[^a-zA-Z]/.test(a);
};
g.b.ts = function(a) {
  return!/[^0-9]/.test(a);
};
g.b.bs = function(a) {
  return!/[^a-zA-Z0-9]/.test(a);
};
g.b.ys = function(a) {
  return " " == a;
};
g.b.As = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
g.b.st = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
g.b.Sq = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
g.b.Os = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
g.b.Ns = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
g.b.br = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
g.b.trim = g.he && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
g.b.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
g.b.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
g.b.Ze = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
g.b.$e = /(\.\d+)|(\d+)|(\D+)/g;
g.b.Qs = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return-1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(g.b.$e), e = c.toLowerCase().match(g.b.$e), f = Math.min(d.length, e.length), h = 0;h < f;h++) {
    var l = d[h], m = e[h];
    if (l != m) {
      return d = parseInt(l, 10), !isNaN(d) && (e = parseInt(m, 10), !isNaN(e) && d - e) ? d - e : l < m ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
g.b.Gt = function(a) {
  return encodeURIComponent(String(a));
};
g.b.Ft = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
g.b.Ci = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
g.b.Bb = function(a, c) {
  if (c) {
    a = a.replace(g.b.De, "&amp;").replace(g.b.Ge, "&lt;").replace(g.b.Fe, "&gt;").replace(g.b.Ie, "&quot;").replace(g.b.Je, "&#39;").replace(g.b.He, "&#0;"), g.b.$c && (a = a.replace(g.b.Ee, "&#101;"));
  } else {
    if (!g.b.Yh.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(g.b.De, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(g.b.Ge, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(g.b.Fe, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(g.b.Ie, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(g.b.Je, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(g.b.He, "&#0;"));
    g.b.$c && -1 != a.indexOf("e") && (a = a.replace(g.b.Ee, "&#101;"));
  }
  return a;
};
g.b.De = /&/g;
g.b.Ge = /</g;
g.b.Fe = />/g;
g.b.Ie = /"/g;
g.b.Je = /'/g;
g.b.He = /\x00/g;
g.b.Ee = /e/g;
g.b.Yh = g.b.$c ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
g.b.Ve = function(a) {
  return g.b.contains(a, "&") ? "document" in g.global ? g.b.Xe(a) : g.b.wi(a) : a;
};
g.b.Ct = function(a, c) {
  return g.b.contains(a, "&") ? g.b.Xe(a, c) : a;
};
g.b.Xe = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : g.global.document.createElement("div");
  return a.replace(g.b.Ai, function(a, c) {
    var l = d[a];
    if (l) {
      return l;
    }
    if ("#" == c.charAt(0)) {
      var m = Number("0" + c.substr(1));
      isNaN(m) || (l = String.fromCharCode(m));
    }
    l || (e.innerHTML = a + " ", l = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = l;
  });
};
g.b.wi = function(a) {
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
g.b.Ai = /&([^;\s<&]+);?/g;
g.b.Jt = function(a, c) {
  return g.b.Ci(a.replace(/  /g, " &#160;"), c);
};
g.b.Us = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + g.b.yi.xi);
};
g.b.tt = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
g.b.truncate = function(a, c, d) {
  d && (a = g.b.Ve(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = g.b.Bb(a));
  return a;
};
g.b.Bt = function(a, c, d, e) {
  d && (a = g.b.Ve(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = g.b.Bb(a));
  return a;
};
g.b.ed = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
g.b.dc = {"'":"\\'"};
g.b.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = g.b.ed[e] || (31 < f && 127 > f ? e : g.b.We(e));
  }
  c.push('"');
  return c.join("");
};
g.b.vr = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = g.b.We(a.charAt(d));
  }
  return c.join("");
};
g.b.We = function(a) {
  if (a in g.b.dc) {
    return g.b.dc[a];
  }
  if (a in g.b.ed) {
    return g.b.dc[a] = g.b.ed[a];
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
  return g.b.dc[a] = c;
};
g.b.contains = function(a, c) {
  return-1 != a.indexOf(c);
};
g.b.Nh = function(a, c) {
  return g.b.contains(a.toLowerCase(), c.toLowerCase());
};
g.b.jr = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
g.b.zb = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
g.b.remove = function(a, c) {
  var d = new RegExp(g.b.jd(c), "");
  return a.replace(d, "");
};
g.b.removeAll = function(a, c) {
  var d = new RegExp(g.b.jd(c), "g");
  return a.replace(d, "");
};
g.b.jd = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
g.b.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
g.b.Ts = function(a, c, d) {
  a = g.ja(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return g.b.repeat("0", Math.max(0, c - d)) + a;
};
g.b.vi = function(a) {
  return null == a ? "" : String(a);
};
g.b.Pq = function(a) {
  return Array.prototype.join.call(arguments, "");
};
g.b.Qh = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.now()).toString(36);
};
g.b.wb = function(a, c) {
  for (var d = 0, e = g.b.trim(String(a)).split("."), f = g.b.trim(String(c)).split("."), h = Math.max(e.length, f.length), l = 0;0 == d && l < h;l++) {
    var m = e[l] || "", n = f[l] || "", p = /(\d*)(\D*)/g, q = /(\d*)(\D*)/g;
    do {
      var r = p.exec(m) || ["", "", ""], s = q.exec(n) || ["", "", ""];
      if (0 == r[0].length && 0 == s[0].length) {
        break;
      }
      d = g.b.kd(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || g.b.kd(0 == r[2].length, 0 == s[2].length) || g.b.kd(r[2], s[2]);
    } while (0 == d);
  }
  return d;
};
g.b.kd = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
g.b.zi = 4294967296;
g.b.Xr = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= g.b.zi;
  }
  return c;
};
g.b.Ei = 2147483648 * Math.random() | 0;
g.b.mr = function() {
  return "goog_" + g.b.Ei++;
};
g.b.yt = function(a) {
  var c = Number(a);
  return 0 == c && g.b.$(a) ? NaN : c;
};
g.b.rs = function(a) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
g.b.Bs = function(a) {
  return/^([A-Z][a-z]*)+$/.test(a);
};
g.b.xt = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
g.b.zt = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
g.b.At = function(a, c) {
  var d = g.isString(c) ? g.b.jd(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
g.b.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return g.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
g.b.mt = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
g.l = {};
g.l.oa = g.Ga;
g.l.zc = function(a, c) {
  c.unshift(a);
  g.debug.Error.call(this, g.b.Di.apply(null, c));
  c.shift();
};
g.Da(g.l.zc, g.debug.Error);
g.l.zc.prototype.name = "AssertionError";
g.l.Ll = function(a) {
  throw a;
};
g.l.Ad = g.l.Ll;
g.l.Ia = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), h = e
  } else {
    a && (f += ": " + a, h = c);
  }
  a = new g.l.zc("" + f, h || []);
  g.l.Ad(a);
};
g.l.dt = function(a) {
  g.l.oa && (g.l.Ad = a);
};
g.l.assert = function(a, c, d) {
  g.l.oa && !a && g.l.Ia("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.l.Vc = function(a, c) {
  g.l.oa && g.l.Ad(new g.l.zc("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
g.l.Iq = function(a, c, d) {
  g.l.oa && !g.isNumber(a) && g.l.Ia("Expected number but got %s: %s.", [g.da(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.l.Kq = function(a, c, d) {
  g.l.oa && !g.isString(a) && g.l.Ia("Expected string but got %s: %s.", [g.da(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.l.Gq = function(a, c, d) {
  g.l.oa && !g.isFunction(a) && g.l.Ia("Expected function but got %s: %s.", [g.da(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.l.Jq = function(a, c, d) {
  g.l.oa && !g.isObject(a) && g.l.Ia("Expected object but got %s: %s.", [g.da(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.l.Dq = function(a, c, d) {
  g.l.oa && !g.isArray(a) && g.l.Ia("Expected array but got %s: %s.", [g.da(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.l.Eq = function(a, c, d) {
  g.l.oa && !g.Ma(a) && g.l.Ia("Expected boolean but got %s: %s.", [g.da(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.l.Fq = function(a, c, d) {
  !g.l.oa || g.isObject(a) && a.nodeType == g.Hf.Jj.Ij || g.l.Ia("Expected Element but got %s: %s.", [g.da(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.l.Hq = function(a, c, d, e) {
  !g.l.oa || a instanceof c || g.l.Ia("instanceof check failed.", null, d, Array.prototype.slice.call(arguments, 3));
  return a;
};
g.l.Bi = function() {
  for (var a in Object.prototype) {
    g.l.Vc(a + " should not be enumerable in Object.prototype.");
  }
};
g.a = {};
g.Ka = g.he;
g.a.Ja = !1;
g.a.$m = function(a) {
  return a[a.length - 1];
};
g.a.Cs = g.a.$m;
g.a.u = Array.prototype;
g.a.indexOf = g.Ka && (g.a.Ja || g.a.u.indexOf) ? function(a, c, d) {
  return g.a.u.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (g.isString(a)) {
    return g.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
g.a.lastIndexOf = g.Ka && (g.a.Ja || g.a.u.lastIndexOf) ? function(a, c, d) {
  return g.a.u.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (g.isString(a)) {
    return g.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
g.a.forEach = g.Ka && (g.a.Ja || g.a.u.forEach) ? function(a, c, d) {
  g.a.u.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in f && c.call(d, f[h], h, a);
  }
};
g.a.Ne = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in f && c.call(d, f[e], e, a);
  }
};
g.a.filter = g.Ka && (g.a.Ja || g.a.u.filter) ? function(a, c, d) {
  return g.a.u.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], h = 0, l = g.isString(a) ? a.split("") : a, m = 0;m < e;m++) {
    if (m in l) {
      var n = l[m];
      c.call(d, n, m, a) && (f[h++] = n);
    }
  }
  return f;
};
g.a.map = g.Ka && (g.a.Ja || g.a.u.map) ? function(a, c, d) {
  return g.a.u.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), h = g.isString(a) ? a.split("") : a, l = 0;l < e;l++) {
    l in h && (f[l] = c.call(d, h[l], l, a));
  }
  return f;
};
g.a.reduce = g.Ka && (g.a.Ja || g.a.u.reduce) ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return g.a.u.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.a.forEach(a, function(d, l) {
    f = c.call(e, f, d, l, a);
  });
  return f;
};
g.a.reduceRight = g.Ka && (g.a.Ja || g.a.u.reduceRight) ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return g.a.u.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.a.Ne(a, function(d, l) {
    f = c.call(e, f, d, l, a);
  });
  return f;
};
g.a.some = g.Ka && (g.a.Ja || g.a.u.some) ? function(a, c, d) {
  return g.a.u.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return!0;
    }
  }
  return!1;
};
g.a.every = g.Ka && (g.a.Ja || g.a.u.every) ? function(a, c, d) {
  return g.a.u.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && !c.call(d, f[h], h, a)) {
      return!1;
    }
  }
  return!0;
};
g.a.count = function(a, c, d) {
  var e = 0;
  g.a.forEach(a, function(a, h, l) {
    c.call(d, a, h, l) && ++e;
  }, d);
  return e;
};
g.a.find = function(a, c, d) {
  c = g.a.Me(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.a.Me = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return h;
    }
  }
  return-1;
};
g.a.yr = function(a, c, d) {
  c = g.a.bi(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.a.bi = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;e--) {
    if (e in f && c.call(d, f[e], e, a)) {
      return e;
    }
  }
  return-1;
};
g.a.contains = function(a, c) {
  return 0 <= g.a.indexOf(a, c);
};
g.a.$ = function(a) {
  return 0 == a.length;
};
g.a.clear = function(a) {
  if (!g.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
g.a.insert = function(a, c) {
  g.a.contains(a, c) || a.push(c);
};
g.a.Oe = function(a, c, d) {
  g.a.splice(a, d, 0, c);
};
g.a.$r = function(a, c, d) {
  g.vb(g.a.splice, a, d, 0).apply(null, c);
};
g.a.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = g.a.indexOf(a, d)) ? a.push(c) : g.a.Oe(a, c, e);
};
g.a.remove = function(a, c) {
  var d = g.a.indexOf(a, c), e;
  (e = 0 <= d) && g.a.zb(a, d);
  return e;
};
g.a.zb = function(a, c) {
  return 1 == g.a.u.splice.call(a, c, 1).length;
};
g.a.Zs = function(a, c, d) {
  c = g.a.Me(a, c, d);
  return 0 <= c ? (g.a.zb(a, c), !0) : !1;
};
g.a.Xs = function(a, c, d) {
  var e = 0;
  g.a.Ne(a, function(f, h) {
    c.call(d, f, h, a) && g.a.zb(a, h) && e++;
  });
  return e;
};
g.a.concat = function(a) {
  return g.a.u.concat.apply(g.a.u, arguments);
};
g.a.join = function(a) {
  return g.a.u.concat.apply(g.a.u, arguments);
};
g.a.La = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return[];
};
g.a.clone = g.a.La;
g.a.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d], f;
    if (g.isArray(e) || (f = g.M(e)) && Object.prototype.hasOwnProperty.call(e, "callee")) {
      a.push.apply(a, e);
    } else {
      if (f) {
        for (var h = a.length, l = e.length, m = 0;m < l;m++) {
          a[h + m] = e[m];
        }
      } else {
        a.push(e);
      }
    }
  }
};
g.a.splice = function(a, c, d, e) {
  return g.a.u.splice.apply(a, g.a.slice(arguments, 1));
};
g.a.slice = function(a, c, d) {
  return 2 >= arguments.length ? g.a.u.slice.call(a, c) : g.a.u.slice.call(a, c, d);
};
g.a.di = function(a, c, d) {
  c = c || a;
  d = d || function() {
    return g.isObject(l) ? "o" + g.le(l) : (typeof l).charAt(0) + l;
  };
  for (var e = {}, f = 0, h = 0;h < a.length;) {
    var l = a[h++], m = d(l);
    Object.prototype.hasOwnProperty.call(e, m) || (e[m] = !0, c[f++] = l);
  }
  c.length = f;
};
g.a.Be = function(a, c, d) {
  return g.a.Ke(a, d || g.a.Wa, !1, c);
};
g.a.Nq = function(a, c, d) {
  return g.a.Ke(a, c, !0, void 0, d);
};
g.a.Ke = function(a, c, d, e, f) {
  for (var h = 0, l = a.length, m;h < l;) {
    var n = h + l >> 1, p;
    p = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < p ? h = n + 1 : (l = n, m = !p);
  }
  return m ? h : ~h;
};
g.a.sort = function(a, c) {
  a.sort(c || g.a.Wa);
};
g.a.nt = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || g.a.Wa;
  g.a.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
g.a.ei = function(a, c, d) {
  var e = d || g.a.Wa;
  g.a.sort(a, function(a, d) {
    return e(c(a), c(d));
  });
};
g.a.lt = function(a, c, d) {
  g.a.ei(a, function(a) {
    return a[c];
  }, d);
};
g.a.qe = function(a, c, d) {
  c = c || g.a.Wa;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return!1;
    }
  }
  return!0;
};
g.a.equals = function(a, c, d) {
  if (!g.M(a) || !g.M(c) || a.length != c.length) {
    return!1;
  }
  var e = a.length;
  d = d || g.a.se;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return!1;
    }
  }
  return!0;
};
g.a.fr = function(a, c, d) {
  d = d || g.a.Wa;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var h = d(a[f], c[f]);
    if (0 != h) {
      return h;
    }
  }
  return g.a.Wa(a.length, c.length);
};
g.a.Wa = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
g.a.se = function(a, c) {
  return a === c;
};
g.a.Lq = function(a, c, d) {
  d = g.a.Be(a, c, d);
  return 0 > d ? (g.a.Oe(a, c, -(d + 1)), !0) : !1;
};
g.a.Mq = function(a, c, d) {
  c = g.a.Be(a, c, d);
  return 0 <= c ? g.a.zb(a, c) : !1;
};
g.a.Oq = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var h = a[f], l = c.call(d, h, f, a);
    g.ja(l) && (e[l] || (e[l] = [])).push(h);
  }
  return e;
};
g.a.hn = function(a, c, d) {
  var e = {};
  g.a.forEach(a, function(f, h) {
    e[c.call(d, f, h, a)] = f;
  });
  return e;
};
g.a.Ub = function(a, c, d) {
  var e = [], f = 0, h = a;
  d = d || 1;
  void 0 !== c && (f = a, h = c);
  if (0 > d * (h - f)) {
    return[];
  }
  if (0 < d) {
    for (a = f;a < h;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > h;a += d) {
      e.push(a);
    }
  }
  return e;
};
g.a.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
g.a.ci = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    if (g.isArray(e)) {
      for (var f = 0;f < e.length;f += 8192) {
        for (var h = g.a.slice(e, f, f + 8192), h = g.a.ci.apply(null, h), l = 0;l < h.length;l++) {
          c.push(h[l]);
        }
      }
    } else {
      c.push(e);
    }
  }
  return c;
};
g.a.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? g.a.u.unshift.apply(a, a.splice(-c, c)) : 0 > c && g.a.u.push.apply(a, a.splice(0, -c)));
  return a;
};
g.a.Ls = function(a, c, d) {
  c = g.a.u.splice.call(a, c, 1);
  g.a.u.splice.call(a, d, 0, c[0]);
};
g.a.of = function(a) {
  if (!arguments.length) {
    return[];
  }
  for (var c = [], d = 0;;d++) {
    for (var e = [], f = 0;f < arguments.length;f++) {
      var h = arguments[f];
      if (d >= h.length) {
        return c;
      }
      e.push(h[d]);
    }
    c.push(e);
  }
};
g.a.jt = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), h = a[e];
    a[e] = a[f];
    a[f] = h;
  }
};
g.f = {};
g.f.Pn = function() {
};
g.w = {};
g.w.constant = function(a) {
  return function() {
    return a;
  };
};
g.w.co = g.w.constant(!1);
g.w.jq = g.w.constant(!0);
g.w.Jp = g.w.constant(null);
g.w.identity = function(a) {
  return a;
};
g.w.error = function(a) {
  return function() {
    throw Error(a);
  };
};
g.w.Vc = function(a) {
  return function() {
    throw a;
  };
};
g.w.Fs = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
g.w.Ps = function(a) {
  return function() {
    return arguments[a];
  };
};
g.w.Lt = function(a, c) {
  return g.w.Tk(a, g.w.constant(c));
};
g.w.gr = function(a, c) {
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
g.w.Tk = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, f = 0;f < d;f++) {
      a = c[f].apply(this, arguments);
    }
    return a;
  };
};
g.w.yq = function(a) {
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
g.w.Ss = function(a) {
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
g.w.Fi = function(a) {
  return function() {
    return!a.apply(this, arguments);
  };
};
g.w.create = function(a, c) {
  var d = function() {
  };
  d.prototype = a.prototype;
  d = new d;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
g.w.Sk = !0;
g.w.Rq = function(a) {
  var c = !1, d;
  return function() {
    if (!g.w.Sk) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
g.p = {};
g.p.Ws = function(a) {
  return Math.floor(Math.random() * a);
};
g.p.Dt = function(a, c) {
  return a + Math.random() * (c - a);
};
g.p.ar = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
g.p.tg = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
g.p.Ds = function(a, c, d) {
  return a + d * (c - a);
};
g.p.Ms = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
g.p.Hd = function(a) {
  return g.p.tg(a, 360);
};
g.p.ot = function(a) {
  return g.p.tg(a, 2 * Math.PI);
};
g.p.vg = function(a) {
  return a * Math.PI / 180;
};
g.p.lk = function(a) {
  return 180 * a / Math.PI;
};
g.p.Bq = function(a, c) {
  return c * Math.cos(g.p.vg(a));
};
g.p.Cq = function(a, c) {
  return c * Math.sin(g.p.vg(a));
};
g.p.zq = function(a, c, d, e) {
  return g.p.Hd(g.p.lk(Math.atan2(e - c, d - a)));
};
g.p.Aq = function(a, c) {
  var d = g.p.Hd(c) - g.p.Hd(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
g.p.sign = function(a) {
  return 0 == a ? 0 : 0 > a ? -1 : 1;
};
g.p.Is = function(a, c, d, e) {
  d = d || function(a, c) {
    return a == c;
  };
  e = e || function(c) {
    return a[c];
  };
  for (var f = a.length, h = c.length, l = [], m = 0;m < f + 1;m++) {
    l[m] = [], l[m][0] = 0;
  }
  for (var n = 0;n < h + 1;n++) {
    l[0][n] = 0;
  }
  for (m = 1;m <= f;m++) {
    for (n = 1;n <= h;n++) {
      d(a[m - 1], c[n - 1]) ? l[m][n] = l[m - 1][n - 1] + 1 : l[m][n] = Math.max(l[m - 1][n], l[m][n - 1]);
    }
  }
  for (var p = [], m = f, n = h;0 < m && 0 < n;) {
    d(a[m - 1], c[n - 1]) ? (p.unshift(e(m - 1, n - 1)), m--, n--) : l[m - 1][n] > l[m][n - 1] ? m-- : n--;
  }
  return p;
};
g.p.we = function(a) {
  return g.a.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
g.p.Ph = function(a) {
  return g.p.we.apply(null, arguments) / arguments.length;
};
g.p.zk = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = g.p.Ph.apply(null, arguments);
  return g.p.we.apply(null, g.a.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
g.p.pt = function(a) {
  return Math.sqrt(g.p.zk.apply(null, arguments));
};
g.p.ps = function(a) {
  return isFinite(a) && 0 == a % 1;
};
g.p.ls = function(a) {
  return isFinite(a) && !isNaN(a);
};
g.p.Gs = function(a) {
  if (0 < a) {
    var c = Math.round(Math.log(a) * Math.LOG10E);
    return c - (parseFloat("1e" + c) > a);
  }
  return 0 == a ? -Infinity : NaN;
};
g.p.bt = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
g.p.at = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
g.c = {};
g.c.S = "StopIteration" in g.global ? g.global.StopIteration : Error("StopIteration");
g.c.A = function() {
};
g.c.A.prototype.next = function() {
  throw g.c.S;
};
g.c.A.prototype.hb = function() {
  return this;
};
g.c.H = function(a) {
  if (a instanceof g.c.A) {
    return a;
  }
  if ("function" == typeof a.hb) {
    return a.hb(!1);
  }
  if (g.M(a)) {
    var c = 0, d = new g.c.A;
    d.next = function() {
      for (;;) {
        if (c >= a.length) {
          throw g.c.S;
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
g.c.forEach = function(a, c, d) {
  if (g.M(a)) {
    try {
      g.a.forEach(a, c, d);
    } catch (e) {
      if (e !== g.c.S) {
        throw e;
      }
    }
  } else {
    a = g.c.H(a);
    try {
      for (;;) {
        c.call(d, a.next(), void 0, a);
      }
    } catch (f) {
      if (f !== g.c.S) {
        throw f;
      }
    }
  }
};
g.c.filter = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.A;
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
g.c.xr = function(a, c, d) {
  return g.c.filter(a, g.w.Fi(c), d);
};
g.c.Ub = function(a, c, d) {
  var e = 0, f = a, h = d || 1;
  1 < arguments.length && (e = a, f = c);
  if (0 == h) {
    throw Error("Range step argument must not be zero");
  }
  var l = new g.c.A;
  l.next = function() {
    if (0 < h && e >= f || 0 > h && e <= f) {
      throw g.c.S;
    }
    var a = e;
    e += h;
    return a;
  };
  return l;
};
g.c.join = function(a, c) {
  return g.c.La(a).join(c);
};
g.c.map = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.A;
  a.next = function() {
    var a = e.next();
    return c.call(d, a, void 0, e);
  };
  return a;
};
g.c.reduce = function(a, c, d, e) {
  var f = d;
  g.c.forEach(a, function(a) {
    f = c.call(e, f, a);
  });
  return f;
};
g.c.some = function(a, c, d) {
  a = g.c.H(a);
  try {
    for (;;) {
      if (c.call(d, a.next(), void 0, a)) {
        return!0;
      }
    }
  } catch (e) {
    if (e !== g.c.S) {
      throw e;
    }
  }
  return!1;
};
g.c.every = function(a, c, d) {
  a = g.c.H(a);
  try {
    for (;;) {
      if (!c.call(d, a.next(), void 0, a)) {
        return!1;
      }
    }
  } catch (e) {
    if (e !== g.c.S) {
      throw e;
    }
  }
  return!0;
};
g.c.Xq = function(a) {
  return g.c.Si(arguments);
};
g.c.Si = function(a) {
  var c = g.c.H(a);
  a = new g.c.A;
  var d = null;
  a.next = function() {
    for (;;) {
      if (null == d) {
        var a = c.next();
        d = g.c.H(a);
      }
      try {
        return d.next();
      } catch (f) {
        if (f !== g.c.S) {
          throw f;
        }
        d = null;
      }
    }
  };
  return a;
};
g.c.rr = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.A;
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
g.c.vt = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.A;
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
        throw g.c.S;
      }
    }
  };
  return a;
};
g.c.La = function(a) {
  if (g.M(a)) {
    return g.a.La(a);
  }
  a = g.c.H(a);
  var c = [];
  g.c.forEach(a, function(a) {
    c.push(a);
  });
  return c;
};
g.c.equals = function(a, c, d) {
  a = g.c.Mh({}, a, c);
  var e = d || g.a.se;
  return g.c.every(a, function(a) {
    return e(a[0], a[1]);
  });
};
g.c.Gi = function(a, c) {
  try {
    return g.c.H(a).next();
  } catch (d) {
    if (d != g.c.S) {
      throw d;
    }
    return c;
  }
};
g.c.product = function(a) {
  if (g.a.some(arguments, function(a) {
    return!a.length;
  }) || !arguments.length) {
    return new g.c.A;
  }
  var c = new g.c.A, d = arguments, e = g.a.repeat(0, d.length);
  c.next = function() {
    if (e) {
      for (var a = g.a.map(e, function(a, c) {
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
    throw g.c.S;
  };
  return c;
};
g.c.nr = function(a) {
  var c = g.c.H(a), d = [], e = 0;
  a = new g.c.A;
  var f = !1;
  a.next = function() {
    var a = null;
    if (!f) {
      try {
        return a = c.next(), d.push(a), a;
      } catch (l) {
        if (l != g.c.S || g.a.$(d)) {
          throw l;
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
g.c.count = function(a, c) {
  var d = a || 0, e = g.ja(c) ? c : 1, f = new g.c.A;
  f.next = function() {
    var a = d;
    d += e;
    return a;
  };
  return f;
};
g.c.repeat = function(a) {
  var c = new g.c.A;
  c.next = g.w.constant(a);
  return c;
};
g.c.wq = function(a) {
  var c = g.c.H(a), d = 0;
  a = new g.c.A;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
g.c.of = function(a) {
  var c = arguments, d = new g.c.A;
  if (0 < c.length) {
    var e = g.a.map(c, g.c.H);
    d.next = function() {
      return g.a.map(e, function(a) {
        return a.next();
      });
    };
  }
  return d;
};
g.c.Mh = function(a, c) {
  var d = g.a.slice(arguments, 1), e = new g.c.A;
  if (0 < d.length) {
    var f = g.a.map(d, g.c.H);
    e.next = function() {
      var c = !1, d = g.a.map(f, function(d) {
        var e;
        try {
          e = d.next(), c = !0;
        } catch (f) {
          if (f !== g.c.S) {
            throw f;
          }
          e = a;
        }
        return e;
      });
      if (!c) {
        throw g.c.S;
      }
      return d;
    };
  }
  return e;
};
g.c.hr = function(a, c) {
  var d = g.c.H(c);
  return g.c.filter(a, function() {
    return!!d.next();
  });
};
g.c.oc = function(a, c) {
  this.ue = g.c.H(a);
  this.ve = c || g.w.identity;
};
g.Da(g.c.oc, g.c.A);
g.c.oc.prototype.next = function() {
  for (;this.Cb == this.Vg;) {
    this.ac = this.ue.next(), this.Cb = this.ve(this.ac);
  }
  this.Vg = this.Cb;
  return[this.Cb, this.$k(this.Vg)];
};
g.c.oc.prototype.$k = function(a) {
  for (var c = [];this.Cb == a;) {
    c.push(this.ac);
    try {
      this.ac = this.ue.next();
    } catch (d) {
      if (d !== g.c.S) {
        throw d;
      }
      break;
    }
    this.Cb = this.ve(this.ac);
  }
  return c;
};
g.c.Ur = function(a, c) {
  return new g.c.oc(a, c);
};
g.c.qt = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.A;
  a.next = function() {
    var a = g.c.La(e.next());
    return c.apply(d, g.a.concat(a, void 0, e));
  };
  return a;
};
g.c.wt = function(a, c) {
  var d = g.c.H(a), e = g.isNumber(c) ? c : 2, f = g.a.map(g.a.Ub(e), function() {
    return[];
  }), h = function() {
    var a = d.next();
    g.a.forEach(f, function(c) {
      c.push(a);
    });
  };
  return g.a.map(f, function(a) {
    var c = new g.c.A;
    c.next = function() {
      g.a.$(a) && h();
      return a.shift();
    };
    return c;
  });
};
g.c.ur = function(a, c) {
  return g.c.of(g.c.count(c), a);
};
g.c.limit = function(a, c) {
  var d = g.c.H(a), e = new g.c.A, f = c;
  e.next = function() {
    if (0 < f--) {
      return d.next();
    }
    throw g.c.S;
  };
  return e;
};
g.c.Ti = function(a, c) {
  for (var d = g.c.H(a);0 < c--;) {
    g.c.Gi(d, null);
  }
  return d;
};
g.c.slice = function(a, c, d) {
  a = g.c.Ti(a, c);
  g.isNumber(d) && (a = g.c.limit(a, d - c));
  return a;
};
g.c.Lh = function(a) {
  var c = [];
  g.a.di(a, c);
  return a.length != c.length;
};
g.c.Kh = function(a, c) {
  var d = g.c.La(a), e = g.isNumber(c) ? c : d.length, d = g.a.repeat(d, e), d = g.c.product.apply(void 0, d);
  return g.c.filter(d, function(a) {
    return!g.c.Lh(a);
  });
};
g.c.dr = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = g.c.La(a), f = g.c.Ub(e.length), f = g.c.Kh(f, c), h = g.c.filter(f, function(a) {
    return g.a.qe(a);
  }), f = new g.c.A;
  f.next = function() {
    return g.a.map(h.next(), d);
  };
  return f;
};
g.c.er = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = g.c.La(a), f = g.a.Ub(e.length), f = g.a.repeat(f, c), f = g.c.product.apply(void 0, f), h = g.c.filter(f, function(a) {
    return g.a.qe(a);
  }), f = new g.c.A;
  f.next = function() {
    return g.a.map(h.next(), d);
  };
  return f;
};
g.object = {};
g.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
g.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
g.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
g.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return!0;
    }
  }
  return!1;
};
g.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return!1;
    }
  }
  return!0;
};
g.object.ia = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
g.object.Er = function(a) {
  for (var c in a) {
    return c;
  }
};
g.object.Fr = function(a) {
  for (var c in a) {
    return a[c];
  }
};
g.object.contains = function(a, c) {
  return g.object.ib(a, c);
};
g.object.N = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
g.object.W = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
g.object.Sr = function(a, c) {
  for (var d = g.M(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], g.ja(a));d++) {
  }
  return a;
};
g.object.Oc = function(a, c) {
  return c in a;
};
g.object.ib = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return!0;
    }
  }
  return!1;
};
g.object.Jm = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
g.object.zr = function(a, c, d) {
  return(c = g.object.Jm(a, c, d)) && a[c];
};
g.object.$ = function(a) {
  for (var c in a) {
    return!1;
  }
  return!0;
};
g.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
g.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
g.object.add = function(a, c, d) {
  if (c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  g.object.set(a, c, d);
};
g.object.get = function(a, c, d) {
  return c in a ? a[c] : d;
};
g.object.set = function(a, c, d) {
  a[c] = d;
};
g.object.ft = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
g.object.equals = function(a, c) {
  if (!g.a.equals(g.object.W(a), g.object.W(c))) {
    return!1;
  }
  for (var d in a) {
    if (a[d] !== c[d]) {
      return!1;
    }
  }
  return!0;
};
g.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
g.object.ml = function(a) {
  var c = g.da(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.object.ml(a[d]);
    }
    return c;
  }
  return a;
};
g.object.Ih = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
g.object.Eh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var h = 0;h < g.object.Eh.length;h++) {
      d = g.object.Eh[h], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
g.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
g.object.Fm = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.Fm.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
g.object.lr = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
g.object.os = function(a) {
  return!!Object.isFrozen && Object.isFrozen(a);
};
g.f.T = function(a, c) {
  this.r = {};
  this.B = [];
  this.ub = this.Ea = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.fd(a);
  }
};
b = g.f.T.prototype;
b.ia = function() {
  return this.Ea;
};
b.N = function() {
  this.eb();
  for (var a = [], c = 0;c < this.B.length;c++) {
    a.push(this.r[this.B[c]]);
  }
  return a;
};
b.W = function() {
  this.eb();
  return this.B.concat();
};
b.Oc = function(a) {
  return g.f.T.Va(this.r, a);
};
b.ib = function(a) {
  for (var c = 0;c < this.B.length;c++) {
    var d = this.B[c];
    if (g.f.T.Va(this.r, d) && this.r[d] == a) {
      return!0;
    }
  }
  return!1;
};
b.equals = function(a, c) {
  if (this === a) {
    return!0;
  }
  if (this.Ea != a.ia()) {
    return!1;
  }
  var d = c || g.f.T.Hi;
  this.eb();
  for (var e, f = 0;e = this.B[f];f++) {
    if (!d(this.get(e), a.get(e))) {
      return!1;
    }
  }
  return!0;
};
g.f.T.Hi = function(a, c) {
  return a === c;
};
b = g.f.T.prototype;
b.$ = function() {
  return 0 == this.Ea;
};
b.clear = function() {
  this.r = {};
  this.ub = this.Ea = this.B.length = 0;
};
b.remove = function(a) {
  return g.f.T.Va(this.r, a) ? (delete this.r[a], this.Ea--, this.ub++, this.B.length > 2 * this.Ea && this.eb(), !0) : !1;
};
b.eb = function() {
  if (this.Ea != this.B.length) {
    for (var a = 0, c = 0;a < this.B.length;) {
      var d = this.B[a];
      g.f.T.Va(this.r, d) && (this.B[c++] = d);
      a++;
    }
    this.B.length = c;
  }
  if (this.Ea != this.B.length) {
    for (var e = {}, c = a = 0;a < this.B.length;) {
      d = this.B[a], g.f.T.Va(e, d) || (this.B[c++] = d, e[d] = 1), a++;
    }
    this.B.length = c;
  }
};
b.get = function(a, c) {
  return g.f.T.Va(this.r, a) ? this.r[a] : c;
};
b.set = function(a, c) {
  g.f.T.Va(this.r, a) || (this.Ea++, this.B.push(a), this.ub++);
  this.r[a] = c;
};
b.fd = function(a) {
  var c;
  a instanceof g.f.T ? (c = a.W(), a = a.N()) : (c = g.object.W(a), a = g.object.N(a));
  for (var d = 0;d < c.length;d++) {
    this.set(c[d], a[d]);
  }
};
b.forEach = function(a, c) {
  for (var d = this.W(), e = 0;e < d.length;e++) {
    var f = d[e], h = this.get(f);
    a.call(c, h, f, this);
  }
};
b.clone = function() {
  return new g.f.T(this);
};
b.Ih = function() {
  for (var a = new g.f.T, c = 0;c < this.B.length;c++) {
    var d = this.B[c];
    a.set(this.r[d], d);
  }
  return a;
};
b.hn = function() {
  this.eb();
  for (var a = {}, c = 0;c < this.B.length;c++) {
    var d = this.B[c];
    a[d] = this.r[d];
  }
  return a;
};
b.hb = function(a) {
  this.eb();
  var c = 0, d = this.B, e = this.r, f = this.ub, h = this, l = new g.c.A;
  l.next = function() {
    for (;;) {
      if (f != h.ub) {
        throw Error("The map has changed since the iterator was created");
      }
      if (c >= d.length) {
        throw g.c.S;
      }
      var l = d[c++];
      return a ? l : e[l];
    }
  };
  return l;
};
g.f.T.Va = function(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
};
g.f.ia = function(a) {
  return "function" == typeof a.ia ? a.ia() : g.M(a) || g.isString(a) ? a.length : g.object.ia(a);
};
g.f.N = function(a) {
  if ("function" == typeof a.N) {
    return a.N();
  }
  if (g.isString(a)) {
    return a.split("");
  }
  if (g.M(a)) {
    for (var c = [], d = a.length, e = 0;e < d;e++) {
      c.push(a[e]);
    }
    return c;
  }
  return g.object.N(a);
};
g.f.W = function(a) {
  if ("function" == typeof a.W) {
    return a.W();
  }
  if ("function" != typeof a.N) {
    if (g.M(a) || g.isString(a)) {
      var c = [];
      a = a.length;
      for (var d = 0;d < a;d++) {
        c.push(d);
      }
      return c;
    }
    return g.object.W(a);
  }
};
g.f.contains = function(a, c) {
  return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.ib ? a.ib(c) : g.M(a) || g.isString(a) ? g.a.contains(a, c) : g.object.ib(a, c);
};
g.f.$ = function(a) {
  return "function" == typeof a.$ ? a.$() : g.M(a) || g.isString(a) ? g.a.$(a) : g.object.$(a);
};
g.f.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : g.M(a) ? g.a.clear(a) : g.object.clear(a);
};
g.f.forEach = function(a, c, d) {
  if ("function" == typeof a.forEach) {
    a.forEach(c, d);
  } else {
    if (g.M(a) || g.isString(a)) {
      g.a.forEach(a, c, d);
    } else {
      for (var e = g.f.W(a), f = g.f.N(a), h = f.length, l = 0;l < h;l++) {
        c.call(d, f[l], e && e[l], a);
      }
    }
  }
};
g.f.filter = function(a, c, d) {
  if ("function" == typeof a.filter) {
    return a.filter(c, d);
  }
  if (g.M(a) || g.isString(a)) {
    return g.a.filter(a, c, d);
  }
  var e, f = g.f.W(a), h = g.f.N(a), l = h.length;
  if (f) {
    e = {};
    for (var m = 0;m < l;m++) {
      c.call(d, h[m], f[m], a) && (e[f[m]] = h[m]);
    }
  } else {
    for (e = [], m = 0;m < l;m++) {
      c.call(d, h[m], void 0, a) && e.push(h[m]);
    }
  }
  return e;
};
g.f.map = function(a, c, d) {
  if ("function" == typeof a.map) {
    return a.map(c, d);
  }
  if (g.M(a) || g.isString(a)) {
    return g.a.map(a, c, d);
  }
  var e, f = g.f.W(a), h = g.f.N(a), l = h.length;
  if (f) {
    e = {};
    for (var m = 0;m < l;m++) {
      e[f[m]] = c.call(d, h[m], f[m], a);
    }
  } else {
    for (e = [], m = 0;m < l;m++) {
      e[m] = c.call(d, h[m], void 0, a);
    }
  }
  return e;
};
g.f.some = function(a, c, d) {
  if ("function" == typeof a.some) {
    return a.some(c, d);
  }
  if (g.M(a) || g.isString(a)) {
    return g.a.some(a, c, d);
  }
  for (var e = g.f.W(a), f = g.f.N(a), h = f.length, l = 0;l < h;l++) {
    if (c.call(d, f[l], e && e[l], a)) {
      return!0;
    }
  }
  return!1;
};
g.f.every = function(a, c, d) {
  if ("function" == typeof a.every) {
    return a.every(c, d);
  }
  if (g.M(a) || g.isString(a)) {
    return g.a.every(a, c, d);
  }
  for (var e = g.f.W(a), f = g.f.N(a), h = f.length, l = 0;l < h;l++) {
    if (!c.call(d, f[l], e && e[l], a)) {
      return!1;
    }
  }
  return!0;
};
g.f.za = function(a) {
  this.r = new g.f.T;
  a && this.fd(a);
};
g.f.za.rd = function(a) {
  var c = typeof a;
  return "object" == c && a || "function" == c ? "o" + g.le(a) : c.substr(0, 1) + a;
};
b = g.f.za.prototype;
b.ia = function() {
  return this.r.ia();
};
b.add = function(a) {
  this.r.set(g.f.za.rd(a), a);
};
b.fd = function(a) {
  a = g.f.N(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.add(a[d]);
  }
};
b.removeAll = function(a) {
  a = g.f.N(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.remove(a[d]);
  }
};
b.remove = function(a) {
  return this.r.remove(g.f.za.rd(a));
};
b.clear = function() {
  this.r.clear();
};
b.$ = function() {
  return this.r.$();
};
b.contains = function(a) {
  return this.r.Oc(g.f.za.rd(a));
};
b.N = function() {
  return this.r.N();
};
b.clone = function() {
  return new g.f.za(this);
};
b.equals = function(a) {
  return this.ia() == g.f.ia(a) && this.vc(a);
};
b.vc = function(a) {
  var c = g.f.ia(a);
  if (this.ia() > c) {
    return!1;
  }
  !(a instanceof g.f.za) && 5 < c && (a = new g.f.za(a));
  return g.f.every(this, function(c) {
    return g.f.contains(a, c);
  });
};
b.hb = function() {
  return this.r.hb(!1);
};
g.d = {};
g.d.userAgent = {};
g.d.userAgent.n = {};
g.d.userAgent.n.jf = function() {
  var a = g.d.userAgent.n.Ki();
  return a && (a = a.userAgent) ? a : "";
};
g.d.userAgent.n.Ki = function() {
  return g.global.navigator;
};
g.d.userAgent.n.df = g.d.userAgent.n.jf();
g.d.userAgent.n.it = function(a) {
  g.d.userAgent.n.df = a || g.d.userAgent.n.jf();
};
g.d.userAgent.n.sb = function() {
  return g.d.userAgent.n.df;
};
g.d.userAgent.n.I = function(a) {
  return g.b.contains(g.d.userAgent.n.sb(), a);
};
g.d.userAgent.n.Li = function(a) {
  return g.b.Nh(g.d.userAgent.n.sb(), a);
};
g.d.userAgent.n.pe = function(a) {
  for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e;e = c.exec(a);) {
    d.push([e[1], e[2], e[3] || void 0]);
  }
  return d;
};
g.d.userAgent.browser = {};
g.d.userAgent.browser.Ym = function() {
  return g.d.userAgent.n.I("Opera") || g.d.userAgent.n.I("OPR");
};
g.d.userAgent.browser.Wm = function() {
  return g.d.userAgent.n.I("Trident") || g.d.userAgent.n.I("MSIE");
};
g.d.userAgent.browser.Vm = function() {
  return g.d.userAgent.n.I("Firefox");
};
g.d.userAgent.browser.Te = function() {
  return g.d.userAgent.n.I("Safari") && !g.d.userAgent.n.I("Chrome") && !g.d.userAgent.n.I("CriOS") && !g.d.userAgent.n.I("Android");
};
g.d.userAgent.browser.Se = function() {
  return g.d.userAgent.n.I("Coast");
};
g.d.userAgent.browser.Xm = function() {
  return(g.d.userAgent.n.I("iPad") || g.d.userAgent.n.I("iPhone")) && !g.d.userAgent.browser.Te() && !g.d.userAgent.browser.Re() && !g.d.userAgent.browser.Se() && g.d.userAgent.n.I("AppleWebKit");
};
g.d.userAgent.browser.Re = function() {
  return g.d.userAgent.n.I("Chrome") || g.d.userAgent.n.I("CriOS");
};
g.d.userAgent.browser.Um = function() {
  return!g.d.userAgent.browser.oe() && g.d.userAgent.n.I("Android");
};
g.d.userAgent.browser.re = g.d.userAgent.browser.Ym;
g.d.userAgent.browser.Pc = g.d.userAgent.browser.Wm;
g.d.userAgent.browser.ms = g.d.userAgent.browser.Vm;
g.d.userAgent.browser.vs = g.d.userAgent.browser.Te;
g.d.userAgent.browser.fs = g.d.userAgent.browser.Se;
g.d.userAgent.browser.qs = g.d.userAgent.browser.Xm;
g.d.userAgent.browser.oe = g.d.userAgent.browser.Re;
g.d.userAgent.browser.cs = g.d.userAgent.browser.Um;
g.d.userAgent.browser.xs = function() {
  return g.d.userAgent.n.I("Silk");
};
g.d.userAgent.browser.Tc = function() {
  function a(a) {
    a = g.a.find(a, e);
    return d[a] || "";
  }
  var c = g.d.userAgent.n.sb();
  if (g.d.userAgent.browser.Pc()) {
    return g.d.userAgent.browser.Jh(c);
  }
  var c = g.d.userAgent.n.pe(c), d = {};
  g.a.forEach(c, function(a) {
    d[a[0]] = a[1];
  });
  var e = g.vb(g.object.Oc, d);
  return g.d.userAgent.browser.re() ? a(["Version", "Opera", "OPR"]) : g.d.userAgent.browser.oe() ? a(["Chrome", "CriOS"]) : (c = c[2]) && c[1] || "";
};
g.d.userAgent.browser.Kc = function(a) {
  return 0 <= g.b.wb(g.d.userAgent.browser.Tc(), a);
};
g.d.userAgent.browser.Jh = function(a) {
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
g.d.userAgent.ga = {};
g.d.userAgent.ga.us = function() {
  return g.d.userAgent.n.I("Presto");
};
g.d.userAgent.ga.ai = function() {
  return g.d.userAgent.n.I("Trident") || g.d.userAgent.n.I("MSIE");
};
g.d.userAgent.ga.Pe = function() {
  return g.d.userAgent.n.Li("WebKit");
};
g.d.userAgent.ga.Rm = function() {
  return g.d.userAgent.n.I("Gecko") && !g.d.userAgent.ga.Pe() && !g.d.userAgent.ga.ai();
};
g.d.userAgent.ga.Tc = function() {
  var a = g.d.userAgent.n.sb();
  if (a) {
    var a = g.d.userAgent.n.pe(a), c = a[1];
    if (c) {
      return "Gecko" == c[0] ? g.d.userAgent.ga.ui(a, "Firefox") : c[1];
    }
    var a = a[0], d;
    if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) {
      return d[1];
    }
  }
  return "";
};
g.d.userAgent.ga.Kc = function(a) {
  return 0 <= g.b.wb(g.d.userAgent.ga.Tc(), a);
};
g.d.userAgent.ga.ui = function(a, c) {
  var d = g.a.find(a, function(a) {
    return c == a[0];
  });
  return d && d[1] || "";
};
g.userAgent = {};
g.userAgent.ce = !1;
g.userAgent.wh = !1;
g.userAgent.Ah = !1;
g.userAgent.de = !1;
g.userAgent.ee = !1;
g.userAgent.ti = !1;
g.userAgent.Lc = g.userAgent.ce || g.userAgent.wh || g.userAgent.de || g.userAgent.Ah || g.userAgent.ee;
g.userAgent.fb = function() {
  return g.d.userAgent.n.sb();
};
g.userAgent.Zc = function() {
  return g.global.navigator || null;
};
g.userAgent.Ib = g.userAgent.Lc ? g.userAgent.ee : g.d.userAgent.browser.re();
g.userAgent.$a = g.userAgent.Lc ? g.userAgent.ce : g.d.userAgent.browser.Pc();
g.userAgent.Dg = g.userAgent.Lc ? g.userAgent.wh : g.d.userAgent.ga.Rm();
g.userAgent.xb = g.userAgent.Lc ? g.userAgent.Ah || g.userAgent.de : g.d.userAgent.ga.Pe();
g.userAgent.Sm = function() {
  return g.userAgent.xb && g.d.userAgent.n.I("Mobile");
};
g.userAgent.Mo = g.userAgent.de || g.userAgent.Sm();
g.userAgent.ng = g.userAgent.xb;
g.userAgent.Gm = function() {
  var a = g.userAgent.Zc();
  return a && a.platform || "";
};
g.userAgent.Yc = g.userAgent.Gm();
g.userAgent.yh = !1;
g.userAgent.Bh = !1;
g.userAgent.xh = !1;
g.userAgent.Ch = !1;
g.userAgent.Rb = !1;
g.userAgent.Tb = !1;
g.userAgent.Sb = !1;
g.userAgent.Ta = g.userAgent.yh || g.userAgent.Bh || g.userAgent.xh || g.userAgent.Ch || g.userAgent.Rb || g.userAgent.Tb || g.userAgent.Sb;
g.userAgent.Om = function() {
  g.userAgent.Vh = g.b.contains(g.userAgent.Yc, "Mac");
  g.userAgent.Wh = g.b.contains(g.userAgent.Yc, "Win");
  g.userAgent.Uh = g.b.contains(g.userAgent.Yc, "Linux");
  g.userAgent.Xh = !!g.userAgent.Zc() && g.b.contains(g.userAgent.Zc().appVersion || "", "X11");
  var a = g.userAgent.fb();
  g.userAgent.Xb = !!a && g.b.contains(a, "Android");
  g.userAgent.Th = !!a && g.b.contains(a, "iPhone");
  g.userAgent.Sh = !!a && g.b.contains(a, "iPad");
};
g.userAgent.Ta || g.userAgent.Om();
g.userAgent.Kd = g.userAgent.Ta ? g.userAgent.yh : g.userAgent.Vh;
g.userAgent.Md = g.userAgent.Ta ? g.userAgent.Bh : g.userAgent.Wh;
g.userAgent.Jd = g.userAgent.Ta ? g.userAgent.xh : g.userAgent.Uh;
g.userAgent.uq = g.userAgent.Ta ? g.userAgent.Ch : g.userAgent.Xh;
g.userAgent.ANDROID = g.userAgent.Ta ? g.userAgent.Rb : g.userAgent.Xb;
g.userAgent.lg = g.userAgent.Ta ? g.userAgent.Tb : g.userAgent.Th;
g.userAgent.kg = g.userAgent.Ta ? g.userAgent.Sb : g.userAgent.Sh;
g.userAgent.je = function() {
  var a = "", c;
  if (g.userAgent.Ib && g.global.opera) {
    return a = g.global.opera.version, g.isFunction(a) ? a() : a;
  }
  g.userAgent.Dg ? c = /rv\:([^\);]+)(\)|;)/ : g.userAgent.$a ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : g.userAgent.xb && (c = /WebKit\/(\S+)/);
  c && (a = (a = c.exec(g.userAgent.fb())) ? a[1] : "");
  return g.userAgent.$a && (c = g.userAgent.Fg(), c > parseFloat(a)) ? String(c) : a;
};
g.userAgent.Fg = function() {
  var a = g.global.document;
  return a ? a.documentMode : void 0;
};
g.userAgent.VERSION = g.userAgent.je();
g.userAgent.compare = function(a, c) {
  return g.b.wb(a, c);
};
g.userAgent.Ue = {};
g.userAgent.Kc = function(a) {
  return g.userAgent.ti || g.userAgent.Ue[a] || (g.userAgent.Ue[a] = 0 <= g.b.wb(g.userAgent.VERSION, a));
};
g.userAgent.Nc = g.userAgent.Kc;
g.userAgent.Pm = function(a) {
  return g.userAgent.$a && g.userAgent.ul >= a;
};
g.userAgent.hs = g.userAgent.Pm;
var t = g.global.document;
g.userAgent.ul = t && g.userAgent.$a ? g.userAgent.Fg() || ("CSS1Compat" == t.compatMode ? parseInt(g.userAgent.VERSION, 10) : 5) : void 0;
g.debug.na = g.Ga;
g.debug.Wq = function(a, c, d) {
  d = d || g.global;
  var e = d.onerror, f = !!c;
  g.userAgent.xb && !g.userAgent.Kc("535.3") && (f = !f);
  d.onerror = function(c, d, m, n, p) {
    e && e(c, d, m, n, p);
    a({message:c, fileName:d, il:m, nn:n, error:p});
    return f;
  };
};
g.debug.wr = function(a, c) {
  if ("undefined" == typeof a) {
    return "undefined";
  }
  if (null == a) {
    return "NULL";
  }
  var d = [], e;
  for (e in a) {
    if (c || !g.isFunction(a[e])) {
      var f = e + " = ";
      try {
        f += a[e];
      } catch (h) {
        f += "*** " + h + " ***";
      }
      d.push(f);
    }
  }
  return d.join("\n");
};
g.debug.pr = function(a, c) {
  var d = [], e = function(a, h, l) {
    var m = h + "  ";
    l = new g.f.za(l);
    try {
      if (g.ja(a)) {
        if (g.Qc(a)) {
          d.push("NULL");
        } else {
          if (g.isString(a)) {
            d.push('"' + a.replace(/\n/g, "\n" + h) + '"');
          } else {
            if (g.isFunction(a)) {
              d.push(String(a).replace(/\n/g, "\n" + h));
            } else {
              if (g.isObject(a)) {
                if (l.contains(a)) {
                  d.push("*** reference loop detected ***");
                } else {
                  l.add(a);
                  d.push("{");
                  for (var n in a) {
                    if (c || !g.isFunction(a[n])) {
                      d.push("\n"), d.push(m), d.push(n + " = "), e(a[n], m, l);
                    }
                  }
                  d.push("\n" + h + "}");
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
  e(a, "", new g.f.za);
  return d.join("");
};
g.debug.Hm = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    g.isArray(a[d]) ? c.push(g.debug.Hm(a[d])) : c.push(a[d]);
  }
  return "[ " + c.join(", ") + " ]";
};
g.debug.Oi = function(a, c) {
  try {
    var d = g.debug.si(a);
    return "Message: " + g.b.Bb(d.message) + '\nUrl: <a href="view-source:' + d.fileName + '" target="_new">' + d.fileName + "</a>\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + g.b.Bb(d.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + g.b.Bb(g.debug.bd(c) + "-> ");
  } catch (e) {
    return "Exception trying to expose exception! You win, we lose. " + e;
  }
};
g.debug.si = function(a) {
  var c = g.Hl("window.location.href");
  if (g.isString(a)) {
    return{message:a, name:"Unknown error", lineNumber:"Not available", fileName:c, stack:"Not available"};
  }
  var d, e, f = !1;
  try {
    d = a.lineNumber || a.il || "Not available";
  } catch (h) {
    d = "Not available", f = !0;
  }
  try {
    e = a.fileName || a.filename || a.sourceURL || g.global.$googDebugFname || c;
  } catch (l) {
    e = "Not available", f = !0;
  }
  return!f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:d, fileName:e, stack:a.stack || "Not available"};
};
g.debug.oh = function(a, c) {
  var d;
  "string" == typeof a ? (d = Error(a), Error.captureStackTrace && Error.captureStackTrace(d, g.debug.oh)) : d = a;
  d.stack || (d.stack = g.debug.bd(g.debug.oh));
  if (c) {
    for (var e = 0;d["message" + e];) {
      ++e;
    }
    d["message" + e] = String(c);
  }
  return d;
};
g.debug.pl = function(a) {
  if (g.Ld) {
    var c = g.debug.Xg(g.debug.pl);
    if (c) {
      return c;
    }
  }
  for (var c = [], d = arguments.callee.caller, e = 0;d && (!a || e < a);) {
    c.push(g.debug.getFunctionName(d));
    c.push("()\n");
    try {
      d = d.caller;
    } catch (f) {
      c.push("[exception trying to get caller]\n");
      break;
    }
    e++;
    if (e >= g.debug.Ae) {
      c.push("[...long stack...]");
      break;
    }
  }
  a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
  return c.join("");
};
g.debug.Ae = 50;
g.debug.Xg = function(a) {
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
g.debug.bd = function(a) {
  var c;
  g.Ld && (c = g.debug.Xg(a || g.debug.bd));
  c || (c = g.debug.ze(a || arguments.callee.caller, []));
  return c;
};
g.debug.ze = function(a, c) {
  var d = [];
  if (g.a.contains(c, a)) {
    d.push("[...circular reference...]");
  } else {
    if (a && c.length < g.debug.Ae) {
      d.push(g.debug.getFunctionName(a) + "(");
      for (var e = a.arguments, f = 0;e && f < e.length;f++) {
        0 < f && d.push(", ");
        var h;
        h = e[f];
        switch(typeof h) {
          case "object":
            h = h ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            h = String(h);
            break;
          case "boolean":
            h = h ? "true" : "false";
            break;
          case "function":
            h = (h = g.debug.getFunctionName(h)) ? h : "[fn]";
            break;
          default:
            h = typeof h;
        }
        40 < h.length && (h = h.substr(0, 40) + "...");
        d.push(h);
      }
      c.push(a);
      d.push(")\n");
      try {
        d.push(g.debug.ze(a.caller, c));
      } catch (l) {
        d.push("[exception trying to get caller]\n");
      }
    } else {
      a ? d.push("[...long stack...]") : d.push("[end]");
    }
  }
  return d.join("");
};
g.debug.et = function(a) {
  g.debug.lh = a;
};
g.debug.getFunctionName = function(a) {
  if (g.debug.qb[a]) {
    return g.debug.qb[a];
  }
  if (g.debug.lh) {
    var c = g.debug.lh(a);
    if (c) {
      return g.debug.qb[a] = c;
    }
  }
  a = String(a);
  g.debug.qb[a] || (c = /function ([^\(]+)/.exec(a), g.debug.qb[a] = c ? c[1] : "[Anonymous]");
  return g.debug.qb[a];
};
g.debug.Js = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
g.debug.qb = {};
g.debug.ba = function(a, c, d, e, f) {
  this.reset(a, c, d, e, f);
};
g.debug.ba.prototype.Ng = null;
g.debug.ba.prototype.Mg = null;
g.debug.ba.Fk = !0;
g.debug.ba.Hk = 0;
g.debug.ba.prototype.reset = function(a, c, d, e, f) {
  g.debug.ba.Fk && ("number" == typeof f || g.debug.ba.Hk++);
  e || g.now();
  this.Uc = a;
  this.Gk = c;
  delete this.Ng;
  delete this.Mg;
};
g.debug.ba.prototype.Qi = function(a) {
  this.Ng = a;
};
g.debug.ba.prototype.Ri = function(a) {
  this.Mg = a;
};
g.debug.ba.prototype.getMessage = function() {
  return this.Gk;
};
g.debug.Z = function() {
  this.clear();
};
g.debug.Z.Sc = function() {
  g.debug.Z.Ob || (g.debug.Z.Ob = new g.debug.Z);
  return g.debug.Z.Ob;
};
g.debug.Z.Ec = 0;
g.debug.Z.prototype.Ni = function(a, c, d) {
  var e = (this.dg + 1) % g.debug.Z.Ec;
  this.dg = e;
  if (this.eg) {
    return e = this.cg[e], e.reset(a, c, d), e;
  }
  this.eg = e == g.debug.Z.Ec - 1;
  return this.cg[e] = new g.debug.ba(a, c, d);
};
g.debug.Z.Pi = function() {
  return 0 < g.debug.Z.Ec;
};
g.debug.Z.prototype.clear = function() {
  this.cg = Array(g.debug.Z.Ec);
  this.dg = -1;
  this.eg = !1;
};
g.debug.e = function(a) {
  this.hd = a;
  this.ta = this.Od = this.Uc = this.sa = null;
};
g.debug.e.ud = "";
g.debug.e.tb = !0;
g.debug.e.tb || (g.debug.e.Rc = []);
g.debug.e.j = function(a, c) {
  this.name = a;
  this.value = c;
};
g.debug.e.j.prototype.toString = function() {
  return this.name;
};
g.debug.e.j.Wc = new g.debug.e.j("OFF", Infinity);
g.debug.e.j.mm = new g.debug.e.j("SHOUT", 1200);
g.debug.e.j.hf = new g.debug.e.j("SEVERE", 1E3);
g.debug.e.j.nd = new g.debug.e.j("WARNING", 900);
g.debug.e.j.gf = new g.debug.e.j("INFO", 800);
g.debug.e.j.ef = new g.debug.e.j("CONFIG", 700);
g.debug.e.j.ff = new g.debug.e.j("FINE", 500);
g.debug.e.j.Tl = new g.debug.e.j("FINER", 400);
g.debug.e.j.Ul = new g.debug.e.j("FINEST", 300);
g.debug.e.j.Il = new g.debug.e.j("ALL", 0);
g.debug.e.j.ld = [g.debug.e.j.Wc, g.debug.e.j.mm, g.debug.e.j.hf, g.debug.e.j.nd, g.debug.e.j.gf, g.debug.e.j.ef, g.debug.e.j.ff, g.debug.e.j.Tl, g.debug.e.j.Ul, g.debug.e.j.Il];
g.debug.e.j.Na = null;
g.debug.e.j.cf = function() {
  g.debug.e.j.Na = {};
  for (var a = 0, c;c = g.debug.e.j.ld[a];a++) {
    g.debug.e.j.Na[c.value] = c, g.debug.e.j.Na[c.name] = c;
  }
};
g.debug.e.j.Or = function(a) {
  g.debug.e.j.Na || g.debug.e.j.cf();
  return g.debug.e.j.Na[a] || null;
};
g.debug.e.j.Pr = function(a) {
  g.debug.e.j.Na || g.debug.e.j.cf();
  if (a in g.debug.e.j.Na) {
    return g.debug.e.j.Na[a];
  }
  for (var c = 0;c < g.debug.e.j.ld.length;++c) {
    var d = g.debug.e.j.ld[c];
    if (d.value <= a) {
      return d;
    }
  }
  return null;
};
g.debug.e.Mj = function(a) {
  g.global.console && (g.global.console.timeStamp ? g.global.console.timeStamp(a) : g.global.console.markTimeline && g.global.console.markTimeline(a));
  g.global.msWriteProfilerMark && g.global.msWriteProfilerMark(a);
};
b = g.debug.e.prototype;
b.getName = function() {
  return this.hd;
};
b.ih = function(a) {
  g.debug.na && (g.debug.e.tb ? (this.ta || (this.ta = []), this.ta.push(a)) : g.debug.e.Rc.push(a));
};
b.kh = function(a) {
  if (g.debug.na) {
    var c = g.debug.e.tb ? this.ta : g.debug.e.Rc;
    return!!c && g.a.remove(c, a);
  }
  return!1;
};
b.getParent = function() {
  return this.sa;
};
b.getChildren = function() {
  this.Od || (this.Od = {});
  return this.Od;
};
b.te = function() {
  if (!g.debug.na) {
    return g.debug.e.j.Wc;
  }
  if (!g.debug.e.tb) {
    return g.debug.e.kn;
  }
  if (this.Uc) {
    return this.Uc;
  }
  if (this.sa) {
    return this.sa.te();
  }
  g.l.Vc("Root logger has no level set.");
  return null;
};
b.Gj = function(a) {
  return g.debug.na && a.value >= this.te().value;
};
b.log = function(a, c, d) {
  g.debug.na && this.Gj(a) && (g.isFunction(c) && (c = c()), this.Fj(this.bf(a, c, d, g.debug.e.prototype.log)));
};
b.bf = function(a, c, d, e) {
  a = g.debug.Z.Pi() ? g.debug.Z.Sc().Ni(a, c, this.hd) : new g.debug.ba(a, String(c), this.hd);
  d && (a.Qi(d), a.Ri(g.debug.Oi(d, e || g.debug.e.prototype.bf)));
  return a;
};
b.xl = function(a, c) {
  g.debug.na && this.log(g.debug.e.j.hf, a, c);
};
b.Fc = function(a, c) {
  g.debug.na && this.log(g.debug.e.j.nd, a, c);
};
b.info = function(a, c) {
  g.debug.na && this.log(g.debug.e.j.gf, a, c);
};
b.config = function(a, c) {
  g.debug.na && this.log(g.debug.e.j.ef, a, c);
};
b.jh = function(a, c) {
  g.debug.na && this.log(g.debug.e.j.ff, a, c);
};
b.Fj = function(a) {
  g.debug.e.Mj("log:" + a.getMessage());
  if (g.debug.e.tb) {
    for (var c = this;c;) {
      c.Kj(a), c = c.getParent();
    }
  } else {
    for (var c = 0, d;d = g.debug.e.Rc[c++];) {
      d(a);
    }
  }
};
b.Kj = function(a) {
  if (this.ta) {
    for (var c = 0, d;d = this.ta[c];c++) {
      d(a);
    }
  }
};
g.debug.pa = {};
g.debug.pa.Ff = {};
g.debug.pa.Lb = function() {
  g.debug.pa.yf || (g.debug.pa.Ff[g.debug.e.ud] = g.debug.pa.yf);
};
g.debug.pa.Kr = function() {
  return g.debug.pa.Ff;
};
g.debug.pa.Qr = function() {
  g.debug.pa.Lb();
  return g.debug.pa.yf;
};
g.debug.pa.kr = function() {
  return function() {
  };
};
g.log = {};
g.log.ab = g.debug.na;
g.log.ud = g.debug.e.ud;
g.log.e = g.debug.e;
g.log.j = g.debug.e.j;
g.log.ba = g.debug.ba;
g.log.ih = function(a, c) {
  g.log.ab && a && a.ih(c);
};
g.log.kh = function(a, c) {
  return g.log.ab && a ? a.kh(c) : !1;
};
g.log.log = function(a, c, d, e) {
  g.log.ab && a && a.log(c, d, e);
};
g.log.error = function(a, c, d) {
  g.log.ab && a && a.xl(c, d);
};
g.log.Fc = function(a, c, d) {
  g.log.ab && a && a.Fc(c, d);
};
g.log.info = function(a, c, d) {
  g.log.ab && a && a.info(c, d);
};
g.log.jh = function(a, c, d) {
  g.log.ab && a && a.jh(c, d);
};
g.f.Y = function(a) {
  this.U = {};
  if (a) {
    for (var c = 0;c < a.length;c++) {
      this.U[g.f.Y.cc(a[c])] = null;
    }
  }
  g.l.Bi();
};
g.f.Y.Oj = {};
g.f.Y.cc = function(a) {
  return a in g.f.Y.Oj || 32 == String(a).charCodeAt(0) ? " " + a : a;
};
g.f.Y.sd = function(a) {
  return 32 == a.charCodeAt(0) ? a.substr(1) : a;
};
b = g.f.Y.prototype;
b.add = function(a) {
  this.U[g.f.Y.cc(a)] = null;
};
b.Pj = function(a) {
  for (var c in a.U) {
    this.U[c] = null;
  }
};
b.clear = function() {
  this.U = {};
};
b.clone = function() {
  var a = new g.f.Y;
  a.Pj(this);
  return a;
};
b.contains = function(a) {
  return g.f.Y.cc(a) in this.U;
};
b.equals = function(a) {
  return this.vc(a) && a.vc(this);
};
b.forEach = function(a, c) {
  for (var d in this.U) {
    a.call(c, g.f.Y.sd(d), void 0, this);
  }
};
b.ia = Object.keys ? function() {
  return Object.keys(this.U).length;
} : function() {
  var a = 0, c;
  for (c in this.U) {
    a++;
  }
  return a;
};
b.N = Object.keys ? function() {
  return Object.keys(this.U).map(g.f.Y.sd, this);
} : function() {
  var a = [], c;
  for (c in this.U) {
    a.push(g.f.Y.sd(c));
  }
  return a;
};
b.$ = function() {
  for (var a in this.U) {
    return!1;
  }
  return!0;
};
b.vc = function(a) {
  for (var c in this.U) {
    if (!(c in a.U)) {
      return!1;
    }
  }
  return!0;
};
b.remove = function(a) {
  a = g.f.Y.cc(a);
  return a in this.U ? (delete this.U[a], !0) : !1;
};
b.hb = function() {
  return g.c.H(this.N());
};
k.qa = {};
k.qa.Nd = function() {
  return null != g.userAgent.fb() && -1 != g.userAgent.fb().indexOf("CrOS");
};
k.qa.Pb = {sk:"ChromeOS", Md:"Windows", Kd:"Mac", Jd:"Linux", OTHER:"Other"};
k.qa.Hr = function() {
  return k.qa.Nd() ? k.qa.Pb.sk : g.userAgent.Md ? k.qa.Pb.Md : g.userAgent.Kd ? k.qa.Pb.Kd : g.userAgent.Jd ? k.qa.Pb.Jd : k.qa.Pb.OTHER;
};
k.k = {};
k.k.Qo = "Casting to {{receiverName}}";
k.k.Uo = "Cast this tab to...";
k.k.Vo = "Cast this tab (audio) to...";
k.k.To = "Cast entire screen to...";
k.k.Ro = "Cast {{v2AppDomain}} to...";
k.k.So = "Cast {{v2AppDomain}}";
k.k.Xo = "Cast this tab";
k.k.Dp = "Stop casting";
k.k.Wo = "Cast {{v2AppDomain}}";
k.k.np = "Bug or Error";
k.k.pp = "Feature Request";
k.k.rp = "Tab/Desktop Projection Quality";
k.k.op = "Device Discovery";
k.k.qp = "Other";
k.k.tp = "Freezes";
k.k.wp = "Jerky";
k.k.Ap = "Occasional Stutter";
k.k.zp = "Smooth";
k.k.xp = "Perfect";
k.k.hp = "N/A";
k.k.Bp = "Unwatchable";
k.k.yp = "Poor";
k.k.sp = "Acceptable";
k.k.up = "Good - DVD";
k.k.vp = "Great - HD";
k.k.ep = "Unintelligible";
k.k.dp = "Poor";
k.k.ap = "Acceptable - FM";
k.k.bp = "Good";
k.k.cp = "Perfect";
k.k.fp = "Do you want to discard the feedback?";
k.k.kp = "Sending feedback...";
k.k.lp = "Unable to send feedback. Please try again later.";
k.k.mp = "Thank you for sending feedback.";
k.k.jp = "Failed to send feedback. Retrying (this is attempt #{{attemptNumber}})...";
k.k.cm = "Standard (480p)";
k.k.am = "High (720p)";
k.k.bm = "Extreme (720p high bitrate)";
k.k.Cp = "Google Cast extension options";
k.k.ip = "Google Cast feedback";
k.k.Zo = "The Google Cast extension enables you to find and play content on your Chromecast device from your Chrome browser.\nWhen on Cast optimized sites, you'll see new options that let you play video on your TV via Chromecast - using your computer as a remote to browse for videos and to control playback.\nYou can also cast any of your tabs in Chrome to your TV, letting you enjoy sites, photos, or even video from the best screen in your home. Note that this feature is still in beta, and requires a fast computer and Wi-Fi network.\nChromecast hardware is required to use this extension. To find out more, visit http://google.com/chromecast.\nBy installing this item, you agree to the Google Terms of Service and Privacy Policy at https://www.google.com/intl/en/policies/.";
k.k.Oo = "The Google Cast extension enables you to find and play content on your Chromecast device from your Chrome browser.\nThis is the *BETA* channel of the Google Cast extension.  It is intended for developers and advanced users who want early access to upcoming APIs and features in advance of public release.  Most users should install the stable Google Cast extension (https://chrome.google.com/webstore/detail/google-cast/boadgeojelhgndaghljhdicfkmllpafd). The beta channel will often be less stable and contain more bugs.\nBy installing this item, you agree to the Google Terms of Service and Privacy Policy at https://www.google.com/intl/en/policies/.";
k.k.$o = "Send content to your Chromecast and other devices that support Google Cast.";
k.k.Yo = "Enter Hangout name";
k.k.Po = "Casting...";
k.k.gp = "Your Chrome version, operating system version, Cast extension options, mirroring performance stats, and communication channel diagnostic logs will be submitted in addition to any information you choose to include above. This feedback is used to diagnose problems and help improve the extension. Any personal information you submit, whether explicitly or incidentally will be protected in accordance with our privacy policies. By submitting this feedback, you agree that Google may use feedback that you provide to improve any Google product or service.";
g.userAgent.product = {};
g.userAgent.product.vh = !1;
g.userAgent.product.th = !1;
g.userAgent.product.Tb = !1;
g.userAgent.product.Sb = !1;
g.userAgent.product.Rb = !1;
g.userAgent.product.uh = !1;
g.userAgent.product.zh = !1;
g.userAgent.product.Ua = g.userAgent.ce || g.userAgent.ee || g.userAgent.product.vh || g.userAgent.product.th || g.userAgent.product.Tb || g.userAgent.product.Sb || g.userAgent.product.Rb || g.userAgent.product.uh || g.userAgent.product.zh;
g.userAgent.product.fc = function() {
  g.userAgent.product.Ig = !1;
  g.userAgent.product.Gg = !1;
  g.userAgent.product.Kg = !1;
  g.userAgent.product.Jg = !1;
  g.userAgent.product.Xb = !1;
  g.userAgent.product.Hg = !1;
  g.userAgent.product.Lg = !1;
  var a = g.userAgent.fb();
  a && (-1 != a.indexOf("Firefox") ? g.userAgent.product.Ig = !0 : -1 != a.indexOf("Camino") ? g.userAgent.product.Gg = !0 : -1 != a.indexOf("iPhone") || -1 != a.indexOf("iPod") ? g.userAgent.product.Kg = !0 : -1 != a.indexOf("iPad") ? g.userAgent.product.Jg = !0 : -1 != a.indexOf("Chrome") ? g.userAgent.product.Hg = !0 : -1 != a.indexOf("Android") ? g.userAgent.product.Xb = !0 : -1 != a.indexOf("Safari") && (g.userAgent.product.Lg = !0));
};
g.userAgent.product.Ua || g.userAgent.product.fc();
g.userAgent.product.Ib = g.userAgent.Ib;
g.userAgent.product.$a = g.userAgent.$a;
g.userAgent.product.nk = g.userAgent.product.Ua ? g.userAgent.product.vh : g.userAgent.product.Ig;
g.userAgent.product.mk = g.userAgent.product.Ua ? g.userAgent.product.th : g.userAgent.product.Gg;
g.userAgent.product.lg = g.userAgent.product.Ua ? g.userAgent.product.Tb : g.userAgent.product.Kg;
g.userAgent.product.kg = g.userAgent.product.Ua ? g.userAgent.product.Sb : g.userAgent.product.Jg;
g.userAgent.product.ANDROID = g.userAgent.product.Ua ? g.userAgent.product.Rb : g.userAgent.product.Xb;
g.userAgent.product.CHROME = g.userAgent.product.Ua ? g.userAgent.product.uh : g.userAgent.product.Hg;
g.userAgent.product.ng = g.userAgent.product.Ua ? g.userAgent.product.zh : g.userAgent.product.Lg;
g.userAgent.product.je = function() {
  if (g.userAgent.product.nk) {
    return g.userAgent.product.ob(/Firefox\/([0-9.]+)/);
  }
  if (g.userAgent.product.$a || g.userAgent.product.Ib) {
    return g.userAgent.VERSION;
  }
  if (g.userAgent.product.CHROME) {
    return g.userAgent.product.ob(/Chrome\/([0-9.]+)/);
  }
  if (g.userAgent.product.ng) {
    return g.userAgent.product.ob(/Version\/([0-9.]+)/);
  }
  if (g.userAgent.product.lg || g.userAgent.product.kg) {
    var a = g.userAgent.product.og(/Version\/(\S+).*Mobile\/(\S+)/);
    if (a) {
      return a[1] + "." + a[2];
    }
  } else {
    if (g.userAgent.product.ANDROID) {
      return(a = g.userAgent.product.ob(/Android\s+([0-9.]+)/)) ? a : g.userAgent.product.ob(/Version\/([0-9.]+)/);
    }
    if (g.userAgent.product.mk) {
      return g.userAgent.product.ob(/Camino\/([0-9.]+)/);
    }
  }
  return "";
};
g.userAgent.product.ob = function(a) {
  return(a = g.userAgent.product.og(a)) ? a[1] : "";
};
g.userAgent.product.og = function(a) {
  return a.exec(g.userAgent.fb());
};
g.userAgent.product.VERSION = g.userAgent.product.je();
g.userAgent.product.Nc = function(a) {
  return 0 <= g.b.wb(g.userAgent.product.VERSION, a);
};
k.i = {};
k.i.kq = {Cm:"webrtc", Bn:"cast_streaming"};
k.i.On = {gq:"tab", Qn:"desktop"};
k.i.tq = {sq:"VP8", An:"CAST1", ho:"H264", Sp:"rtx"};
k.i.C = function(a, c, d, e, f, h, l, m, n) {
  this.id = a;
  this.name = c;
  this.videoWidth = d;
  this.videoHeight = e;
  this.videoResolution = d + "x" + e;
  this.maxFrameRate = f;
  this.minVideoBitrate = h;
  this.maxVideoBitrate = l;
  this.videoQuality = m;
  this.audioBitrate = n;
};
k.i.C.Dh = new k.i.C("high", k.k.am, 1280, 720, 30, 2E3, 2500, 56, 128);
k.i.Fh = k.qa.Nd() && g.userAgent.product.Nc("37");
k.i.C.Yl = new k.i.C("low", k.k.cm, k.i.Fh ? 848 : 854, 480, 30, 750, 1500, 56, 128);
k.i.C.Wl = new k.i.C("highest", k.k.bm, 1280, 720, 30, 4E3, 5E3, 56, 128);
k.i.C.Ha = k.i.C.Dh;
k.i.C.Oh = [k.i.C.Wl, k.i.C.Dh, k.i.C.Yl];
k.i.C.Mn = "custom";
k.i.C.Jr = function(a) {
  return g.a.find(k.i.C.Oh, function(c) {
    return c.id == a;
  });
};
k.po = {eo:"fatal", nd:"warning", Ip:"notification"};
k.qo = {pn:"activity_error", CHANNEL_ERROR:"channel_error", vo:"launch_failure", Sn:"device_offline", zn:"bad_device", $p:"session_quality_network", Zp:"session_quality_encoding", ro:"known_issue_bad_intel_cpu", Fn:"chrome_too_old_for_v2", lq:"unable_to_cast_streaming", Bo:"low_perf_on_current_chrome"};
k.fa = {};
k.fa.Xp = {qn:"act_on_issue", fq:"stop_activity", Mp:"play_media", Kp:"pause_media", bq:"set_mute", CAST_THIS_TAB:"cast_this_tab", Cn:"cast_this_tab_audio", CREATE_SESSION:"create_session", to:"launch_desktop_mirror", INIT:"init", mq:"update_settings", Rp:"remove_receiver"};
k.fa.bo = {No:"model_update"};
k.fa.wn = {nq:"v1_app", oq:"v2_app", Ln:"custom_app", Lo:"mirror_tab", Ko:"mirror_screen"};
k.fa.Message = function(a, c) {
  this.type = a;
  this.message = c;
};
k.fa.vn = function(a, c, d, e, f, h, l, m) {
  this.id = a;
  this.receiver = g.object.clone(c);
  this.activityType = d;
  this.iconUrl = e || null;
  this.title = f || "";
  this.mediaPlayerStatus = h || null;
  this.tabId = l || null;
  this.isLocal = m;
  this.allowStop = !0;
};
k.fa.yb = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
k.fa.Sa = function(a, c, d, e) {
  this.id = a;
  this.uniqueId = c;
  this.name = d;
  this.receiverType = e;
  this.isInLaunch = this.manuallyAdded = !1;
  this.muted = null;
};
k.fa.oo = function(a, c, d, e, f, h, l, m) {
  this.id = a;
  this.title = c;
  this.message = d;
  this.defaultActionText = e;
  this.optActionText = f || "";
  this.severity = h;
  this.activityId = l;
  this.isBlocking = m;
};
k.fa.Tp = function(a, c) {
  this.receiver = a;
  this.activity = c;
};
k.fa.un = function(a, c) {
  this.id = a;
  this.isDefaultAction = c;
};
k.fa.D = function(a, c, d, e, f) {
  this.statsCollectNotificationDismissed = g.Ma(d) ? d : !0;
  this.sendUsageEnabled = g.Ma(e) ? e : !0;
  this.castAppNotificationDismissed = g.Ma(a) ? a : !1;
  this.mirrorQualityId = c || k.i.C.Ha.id;
  this.hangoutsEnabled = f || !1;
};
k.fa.Gp = function(a, c, d, e, f, h, l) {
  this.receiverActs = a || [];
  this.issue = c;
  this.isV1AppInTab = h || !1;
  this.isV2AppInTab = !!l;
  this.v2AppDomain = l || null;
  this.currentActivity = d;
  this.desktopActivity = e;
  this.settings = f || new k.fa.D;
};
k.fa.Ep = function() {
  this.playerState = chrome.cast.media.Jb.IDLE;
  this.muted = null;
  this.supportedCommands = [chrome.cast.media.nh.PAUSE];
};
k.io = function() {
};
k.i.G = function() {
  this.videoBitrate = k.i.C.Ha.maxVideoBitrate;
  this.minVideoBitrate = k.i.C.Ha.minVideoBitrate;
  this.maxVideoBitrate = k.i.C.Ha.maxVideoBitrate;
  this.videoQuality = k.i.C.Ha.videoQuality;
  this.minWidth = k.i.C.Ha.videoWidth;
  this.minHeight = k.i.C.Ha.videoHeight;
  this.audioBitrate = k.i.C.Ha.audioBitrate;
  this.bufferedMode = k.i.G.Ui.Xi;
  this.bufferSizeMillis = k.i.G.Vi;
  this.maxCastLatencyMillis = k.i.G.Wi;
  this.maxFrameRate = k.i.C.Ha.maxFrameRate;
  this.preferredVideoCodec = "CAST1";
};
k.i.G.Nl = {enablePacing:!0, enableAudioTcp:!0, enableVideoTcp:!0, enableAudioNack:!0, useOpus:!0, zoomModeEnabled:!0};
k.i.G.Yn = !1;
k.i.G.Ui = {Wc:"off", tn:"auto", Xi:"on"};
k.i.G.Rj = 100;
k.i.G.Qj = 1E4;
k.i.G.Io = 56;
k.i.G.Co = 128;
k.i.G.Jo = 100;
k.i.G.Ho = 100;
k.i.G.Go = 1;
k.i.G.Ao = 1;
k.i.G.Rn = 30;
k.i.G.pq = k.i.Fh ? {"848x480":[848, 480], "1280x720":[1280, 720], "1920x1072":[1920, 1072]} : {"854x480":[854, 480], "1280x720":[1280, 720], "1920x1080":[1920, 1080]};
k.i.G.prototype.update = function(a) {
  for (var c in this) {
    g.isFunction(this[c]) || g.X(a[c]) && g.da(this[c]) == g.da(a[c]) && (this[c] = a[c]);
  }
};
k.i.G.ir = function(a) {
  return Math.min(k.i.G.Qj, Math.max(k.i.G.Rj, a));
};
k.i.G.Vi = 500;
k.i.G.Wi = 400;
k.Config = {};
k.Config.jl = "dliochdbjfkdbacpmhlcpmleaejidimm";
k.Config.Og = "boadgeojelhgndaghljhdicfkmllpafd";
k.Config.getId = function() {
  return g.ja(chrome.runtime) ? chrome.runtime.id : k.Config.Og;
};
k.Config.ae = !0;
k.Config.fn = function() {
  var a = k.Config.getId() === k.Config.jl, c = k.Config.getId() === k.Config.Og;
  if (!k.Config.ae && !a && !c) {
    switch(localStorage["test.extChannel"]) {
      case "stable":
        a = !1;
        c = !0;
        break;
      case "beta":
        a = !0;
        c = !1;
        break;
      default:
        c = a = !1;
    }
  }
  k.Config.bh = a;
  k.Config.dh = c;
};
k.Config.fn();
k.Config.ns = g.userAgent.product.Nc(35);
k.Config.zs = "undefined" != typeof chrome && !!chrome.networkingPrivate && !!chrome.networkingPrivate.setWifiTDLSEnabledState && k.qa.Nd();
k.Config.es = !!chrome.cast && !!chrome.cast.streaming && g.userAgent.product.Nc(36);
k.Config.Mm = function() {
  return 1 < k.Config.ae + k.Config.bh + k.Config.dh ? null : k.Config.ae ? "internal" : k.Config.bh ? "beta" : k.Config.dh ? "stable" : "staging";
};
g.h("getCastExtensionChannel", k.Config.Mm);
k.mo = function() {
};
k.i.gk = "0F5096E8";
k.i.ss = function(a) {
  return a == k.i.gk;
};
g.debug.R = {};
g.debug.ao = function() {
};
g.debug.R.pb = [];
g.debug.R.Id = [];
g.debug.R.Cg = !1;
g.debug.R.register = function(a) {
  g.debug.R.pb[g.debug.R.pb.length] = a;
  if (g.debug.R.Cg) {
    for (var c = g.debug.R.Id, d = 0;d < c.length;d++) {
      a(g.bind(c[d].wrap, c[d]));
    }
  }
};
g.debug.R.Ks = function(a) {
  g.debug.R.Cg = !0;
  for (var c = g.bind(a.wrap, a), d = 0;d < g.debug.R.pb.length;d++) {
    g.debug.R.pb[d](c);
  }
  g.debug.R.Id.push(a);
};
g.debug.R.Et = function(a) {
  var c = g.debug.R.Id;
  a = g.bind(a.mn, a);
  for (var d = 0;d < g.debug.R.pb.length;d++) {
    g.debug.R.pb[d](a);
  }
  c.length--;
};
g.async = {};
g.async.fh = function(a) {
  g.global.setTimeout(function() {
    throw a;
  }, 0);
};
g.async.Ca = function(a, c) {
  var d = a;
  c && (d = g.bind(a, c));
  d = g.async.Ca.Zg(d);
  !g.isFunction(g.global.setImmediate) || g.global.Window && g.global.Window.prototype.setImmediate == g.global.setImmediate ? (g.async.Ca.$g || (g.async.Ca.$g = g.async.Ca.hl()), g.async.Ca.$g(d)) : g.global.setImmediate(d);
};
g.async.Ca.hl = function() {
  var a = g.global.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var c = a.contentWindow, a = c.document;
    a.open();
    a.write("");
    a.close();
    var d = "callImmediate" + Math.random(), e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host, a = g.bind(function(a) {
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
  if ("undefined" !== typeof a && !g.d.userAgent.browser.Pc()) {
    var c = new a, d = {}, e = d;
    c.port1.onmessage = function() {
      d = d.next;
      var a = d.Cf;
      d.Cf = null;
      a();
    };
    return function(a) {
      e.next = {Cf:a};
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
    g.global.setTimeout(a, 0);
  };
};
g.async.Ca.Zg = g.w.identity;
g.debug.R.register(function(a) {
  g.async.Ca.Zg = a;
});
g.Ra = {};
g.Ra.cb = {};
g.Ra.cb.Zd = [];
g.Ra.cb.kt = function() {
  for (var a = g.Ra.cb.Zd, c = 0;c < a.length;c++) {
    g.Ra.cb.Zd[c]();
  }
};
g.Ra.cb.jn = function(a) {
  g.Ra.cb.Zd.push(a);
};
g.async.run = function(a, c) {
  g.async.run.Gc || g.async.run.gl();
  g.async.run.Ic || (g.async.run.Gc(), g.async.run.Ic = !0);
  g.async.run.Qb.push(new g.async.run.el(a, c));
};
g.async.run.gl = function() {
  if (g.global.Promise && g.global.Promise.resolve) {
    var a = g.global.Promise.resolve();
    g.async.run.Gc = function() {
      a.then(g.async.run.$d);
    };
  } else {
    g.async.run.Gc = function() {
      g.async.Ca(g.async.run.$d);
    };
  }
};
g.async.run.Br = function() {
  g.async.run.Gc = function() {
    g.async.Ca(g.async.run.$d);
  };
};
g.async.run.Ic = !1;
g.async.run.Qb = [];
g.Ga && (g.async.run.cn = function() {
  g.async.run.Ic = !1;
  g.async.run.Qb = [];
}, g.Ra.cb.jn(g.async.run.cn));
g.async.run.$d = function() {
  for (;g.async.run.Qb.length;) {
    var a = g.async.run.Qb;
    g.async.run.Qb = [];
    for (var c = 0;c < a.length;c++) {
      var d = a[c];
      try {
        d.kl.call(d.scope);
      } catch (e) {
        g.async.fh(e);
      }
    }
  }
  g.async.run.Ic = !1;
};
g.async.run.el = function(a, c) {
  this.kl = a;
  this.scope = c;
};
g.promise = {};
g.promise.Yp = function() {
};
g.Thenable = function() {
};
g.Thenable.prototype.then = function() {
};
g.Thenable.Eg = "$goog_Thenable";
g.Thenable.Gh = function(a) {
  g.s(a.prototype, "then", a.prototype.then);
  a.prototype[g.Thenable.Eg] = !0;
};
g.Thenable.Dj = function(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a[g.Thenable.Eg];
  } catch (c) {
    return!1;
  }
};
g.Promise = function(a, c) {
  this.O = g.Promise.F.ua;
  this.Xc = void 0;
  this.la = this.sa = null;
  this.cd = !1;
  0 < g.Promise.Xa ? this.$b = 0 : 0 == g.Promise.Xa && (this.Zb = !1);
  g.Promise.Ab && (this.dd = [], this.Qe(Error("created")), this.Le = 0);
  try {
    var d = this;
    a.call(c, function(a) {
      d.va(g.Promise.F.Yb, a);
    }, function(a) {
      if (g.Ga && !(a instanceof g.Promise.gb)) {
        try {
          if (a instanceof Error) {
            throw a;
          }
          throw Error("Promise rejected.");
        } catch (c) {
        }
      }
      d.va(g.Promise.F.xa, a);
    });
  } catch (e) {
    this.va(g.Promise.F.xa, e);
  }
};
g.Promise.Ab = !1;
g.Promise.Xa = 0;
g.Promise.F = {ua:0, zf:1, Yb:2, xa:3};
g.Promise.resolve = function(a) {
  return new g.Promise(function(c) {
    c(a);
  });
};
g.Promise.reject = function(a) {
  return new g.Promise(function(c, d) {
    d(a);
  });
};
g.Promise.race = function(a) {
  return new g.Promise(function(c, d) {
    a.length || c(void 0);
    for (var e = 0, f;f = a[e];e++) {
      f.then(c, d);
    }
  });
};
g.Promise.all = function(a) {
  return new g.Promise(function(c, d) {
    var e = a.length, f = [];
    if (e) {
      for (var h = function(a, d) {
        e--;
        f[a] = d;
        0 == e && c(f);
      }, l = function(a) {
        d(a);
      }, m = 0, n;n = a[m];m++) {
        n.then(g.vb(h, m), l);
      }
    } else {
      c(f);
    }
  });
};
g.Promise.Ar = function(a) {
  return new g.Promise(function(c, d) {
    var e = a.length, f = [];
    if (e) {
      for (var h = function(a) {
        c(a);
      }, l = function(a, c) {
        e--;
        f[a] = c;
        0 == e && d(f);
      }, m = 0, n;n = a[m];m++) {
        n.then(h, g.vb(l, m));
      }
    } else {
      c(void 0);
    }
  });
};
g.Promise.Kt = function() {
  var a, c, d = new g.Promise(function(d, f) {
    a = d;
    c = f;
  });
  return new g.Promise.km(d, a, c);
};
g.Promise.prototype.then = function(a, c, d) {
  g.Promise.Ab && this.Qe(Error("then"));
  return this.sl(g.isFunction(a) ? a : null, g.isFunction(c) ? c : null, d);
};
g.Thenable.Gh(g.Promise);
b = g.Promise.prototype;
b.cancel = function(a) {
  this.O == g.Promise.F.ua && g.async.run(function() {
    var c = new g.Promise.gb(a);
    this.Df(c);
  }, this);
};
b.Df = function(a) {
  this.O == g.Promise.F.ua && (this.sa ? this.sa.Nj(this, a) : this.va(g.Promise.F.xa, a));
};
b.Nj = function(a, c) {
  if (this.la) {
    for (var d = 0, e = -1, f = 0, h;h = this.la[f];f++) {
      if (h = h.mc) {
        if (d++, h == a && (e = f), 0 <= e && 1 < d) {
          break;
        }
      }
    }
    0 <= e && (this.O == g.Promise.F.ua && 1 == d ? this.Df(c) : (d = this.la.splice(e, 1)[0], this.wf(d, g.Promise.F.xa, c)));
  }
};
b.ik = function(a) {
  this.la && this.la.length || this.O != g.Promise.F.Yb && this.O != g.Promise.F.xa || this.tf();
  this.la || (this.la = []);
  this.la.push(a);
};
b.sl = function(a, c, d) {
  var e = {mc:null, Kf:null, Lf:null};
  e.mc = new g.Promise(function(f, h) {
    e.Kf = a ? function(c) {
      try {
        var e = a.call(d, c);
        f(e);
      } catch (n) {
        h(n);
      }
    } : f;
    e.Lf = c ? function(a) {
      try {
        var e = c.call(d, a);
        !g.ja(e) && a instanceof g.Promise.gb ? h(a) : f(e);
      } catch (n) {
        h(n);
      }
    } : h;
  });
  e.mc.sa = this;
  this.ik(e);
  return e.mc;
};
b.Af = function(a) {
  this.O = g.Promise.F.ua;
  this.va(g.Promise.F.Yb, a);
};
b.Bf = function(a) {
  this.O = g.Promise.F.ua;
  this.va(g.Promise.F.xa, a);
};
b.va = function(a, c) {
  if (this.O == g.Promise.F.ua) {
    if (this == c) {
      a = g.Promise.F.xa, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (g.Thenable.Dj(c)) {
        this.O = g.Promise.F.zf;
        c.then(this.Af, this.Bf, this);
        return;
      }
      if (g.isObject(c)) {
        try {
          var d = c.then;
          if (g.isFunction(d)) {
            this.Ej(c, d);
            return;
          }
        } catch (e) {
          a = g.Promise.F.xa, c = e;
        }
      }
    }
    this.Xc = c;
    this.O = a;
    this.tf();
    a != g.Promise.F.xa || c instanceof g.Promise.gb || g.Promise.Cj(this, c);
  }
};
b.Ej = function(a, c) {
  this.O = g.Promise.F.zf;
  var d = this, e = !1, f = function(a) {
    e || (e = !0, d.Af(a));
  }, h = function(a) {
    e || (e = !0, d.Bf(a));
  };
  try {
    c.call(a, f, h);
  } catch (l) {
    h(l);
  }
};
b.tf = function() {
  this.cd || (this.cd = !0, g.async.run(this.Dl, this));
};
b.Dl = function() {
  for (;this.la && this.la.length;) {
    var a = this.la;
    this.la = [];
    for (var c = 0;c < a.length;c++) {
      g.Promise.Ab && this.Le++, this.wf(a[c], this.O, this.Xc);
    }
  }
  this.cd = !1;
};
b.wf = function(a, c, d) {
  c == g.Promise.F.Yb ? a.Kf(d) : (this.yk(), a.Lf(d));
};
b.Qe = function(a) {
  if (g.Promise.Ab && g.isString(a.stack)) {
    var c = a.stack.split("\n", 4)[3];
    a = a.message;
    a += Array(11 - a.length).join(" ");
    this.dd.push(a + c);
  }
};
b.Rg = function(a) {
  if (g.Promise.Ab && a && g.isString(a.stack) && this.dd.length) {
    for (var c = ["Promise trace:"], d = this;d;d = d.sa) {
      for (var e = this.Le;0 <= e;e--) {
        c.push(d.dd[e]);
      }
      c.push("Value: [" + (d.O == g.Promise.F.xa ? "REJECTED" : "FULFILLED") + "] <" + String(d.Xc) + ">");
    }
    a.stack += "\n\n" + c.join("\n");
  }
};
b.yk = function() {
  if (0 < g.Promise.Xa) {
    for (var a = this;a && a.$b;a = a.sa) {
      g.global.clearTimeout(a.$b), a.$b = 0;
    }
  } else {
    if (0 == g.Promise.Xa) {
      for (a = this;a && a.Zb;a = a.sa) {
        a.Zb = !1;
      }
    }
  }
};
g.Promise.Cj = function(a, c) {
  0 < g.Promise.Xa ? a.$b = g.global.setTimeout(function() {
    a.Rg(c);
    g.Promise.Yd.call(null, c);
  }, g.Promise.Xa) : 0 == g.Promise.Xa && (a.Zb = !0, g.async.run(function() {
    a.Zb && (a.Rg(c), g.Promise.Yd.call(null, c));
  }));
};
g.Promise.Yd = g.async.fh;
g.Promise.ht = function(a) {
  g.Promise.Yd = a;
};
g.Promise.gb = function(a) {
  g.debug.Error.call(this, a);
};
g.Da(g.Promise.gb, g.debug.Error);
g.Promise.gb.prototype.name = "cancel";
g.Promise.km = function(a, c, d) {
  this.promise = a;
  this.resolve = c;
  this.reject = d;
};
g.result = {};
g.result.ca = function() {
};
g.result.ca.prototype.yg = function() {
};
g.result.ca.Ya = {Jf:"success", ERROR:"error", ua:"pending"};
b = g.result.ca.prototype;
b.getState = function() {
};
b.xg = function() {
};
b.getError = function() {
};
b.cancel = function() {
};
b.sc = function() {
};
g.result.ca.Dd = function() {
};
g.Da(g.result.ca.Dd, Error);
g.result.Pa = function() {
  this.O = g.result.ca.Ya.ua;
  this.ta = [];
  this.td = this.xf = void 0;
};
g.Thenable.Gh(g.result.Pa);
g.result.Pa.vd = function() {
  g.debug.Error.call(this, "Multiple attempts to set the state of this Result");
};
g.Da(g.result.Pa.vd, g.debug.Error);
b = g.result.Pa.prototype;
b.getState = function() {
  return this.O;
};
b.xg = function() {
  return this.xf;
};
b.getError = function() {
  return this.td;
};
b.yg = function(a, c) {
  this.rc() ? this.ta.push({callback:a, scope:c || null}) : a.call(c, this);
};
b.ol = function(a) {
  if (this.rc()) {
    this.xf = a, this.O = g.result.ca.Ya.Jf, this.If();
  } else {
    if (!this.sc()) {
      throw new g.result.Pa.vd;
    }
  }
};
b.ug = function(a) {
  if (this.rc()) {
    this.td = a, this.O = g.result.ca.Ya.ERROR, this.If();
  } else {
    if (!this.sc()) {
      throw new g.result.Pa.vd;
    }
  }
};
b.If = function() {
  var a = this.ta;
  this.ta = [];
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    d.callback.call(d.scope, this);
  }
};
b.rc = function() {
  return this.O == g.result.ca.Ya.ua;
};
b.cancel = function() {
  return this.rc() ? (this.ug(new g.result.ca.Dd), !0) : !1;
};
b.sc = function() {
  return this.O == g.result.ca.Ya.ERROR && this.td instanceof g.result.ca.Dd;
};
b.then = function(a, c, d) {
  var e, f, h = new g.Promise(function(a, c) {
    e = a;
    f = c;
  });
  this.yg(function(a) {
    a.sc() ? h.cancel() : a.getState() == g.result.ca.Ya.Jf ? e(a.xg()) : a.getState() == g.result.ca.Ya.ERROR && f(a.getError());
  });
  return h.then(a, c, d);
};
g.result.Pa.Dr = function(a) {
  var c = new g.result.Pa;
  a.then(c.ol, c.ug, c);
  return c;
};
k.ki = function() {
  this.hasNetworkSoftware = this.networkDescription = this.gpu = this.cpu = this.googleUsername = null;
};
k.ri = function() {
  this.dismissClicks = this.earliestTimeToShowWarning = this.sessionsBeforeWarning = 0;
  this.enhancedCastingNotificationDismissed = this.statsCollectNotificationDismissed = this.intelBadCpuWarningDismissed = this.castAppNotificationDismissed = !1;
};
k.D = function() {
  this.V = {};
  this.Xk();
  this.qg = this.rk = this.qk = !1;
};
g.Em(k.D);
k.D.Nn = "ChromeCast";
k.D.ha = {xe:"receiverIdToken", ni:"mirrorSettings", qi:"userNotification", pi:"siteTokens", ii:"feedback", ji:"fixedIps", gi:"enableCloud", fi:"cloudDevice", hi:"enableHangouts", li:"hangoutsDefaultDomain", oi:"sendStatsEnabled", mi:"lastMirrorDataAutoSubmitTimeMillis"};
k.D.Nl = {useCastStreaming:!0, tabCaptureSettings:!0, appEngineReceiverIds:!0, receiverUrl:!0, flingEnabled:!0, customReceiverVersion:!0, enableCustomReceiverVersion:!0, sendUsageEnabled:!0, mirrorLinkProtection:!0, autoOptedInCastStreaming:!0};
k.D.prototype.Xk = function() {
  this.V[k.D.ha.ni] = new k.i.G;
  this.V[k.D.ha.ii] = new k.ki;
  this.V[k.D.ha.qi] = new k.ri;
  this.V[k.D.ha.pi] = {};
  this.V[k.D.ha.oi] = !0;
  this.V[k.D.ha.ji] = [];
  this.V[k.D.ha.gi] = !1;
  this.V[k.D.ha.fi] = {};
  this.V[k.D.ha.hi] = !1;
  this.V[k.D.ha.li] = "";
  this.V[k.D.ha.mi] = 0;
};
k.D.prototype.Rh = function() {
  this.qk ? (g.log.info(this.pc, "Saving settings to storage."), this.rk ? (localStorage.settings = JSON.stringify(this.V), this.qg && (chrome.storage.local.clear(), this.qg = !1)) : chrome.storage.local.set(this.V, g.bind(function() {
    chrome.runtime.lastError ? g.log.Fc(this.pc, "Failed to save settings to chrome.storage.") : g.log.info(this.pc, "Successfully saved settings to storage.");
  }, this))) : g.log.Fc(this.pc, "Aborting saving settings before initialization.");
};
k.D.prototype.Ji = function() {
  var a = this.V[k.D.ha.xe];
  a || (a = g.b.Qh(), this.V[k.D.ha.xe] = a, this.Rh());
  return a;
};
g.g = {};
g.g.hj = function(a) {
  for (var c = [], d = 0, e = 0;e < a.length;e++) {
    for (var f = a.charCodeAt(e);255 < f;) {
      c[d++] = f & 255, f >>= 8;
    }
    c[d++] = f;
  }
  return c;
};
g.g.ij = function(a) {
  if (8192 > a.length) {
    return String.fromCharCode.apply(null, a);
  }
  for (var c = "", d = 0;d < a.length;d += 8192) {
    var e = g.a.slice(a, d, d + 8192), c = c + String.fromCharCode.apply(null, e)
  }
  return c;
};
g.g.Qq = function(a) {
  return g.a.map(a, function(a) {
    a = a.toString(16);
    return 1 < a.length ? a : "0" + a;
  }).join("");
};
g.g.Yr = function(a) {
  for (var c = [], d = 0;d < a.length;d += 2) {
    c.push(parseInt(a.substring(d, d + 2), 16));
  }
  return c;
};
g.g.rt = function(a) {
  a = a.replace(/\r\n/g, "\n");
  for (var c = [], d = 0, e = 0;e < a.length;e++) {
    var f = a.charCodeAt(e);
    128 > f ? c[d++] = f : (2048 > f ? c[d++] = f >> 6 | 192 : (c[d++] = f >> 12 | 224, c[d++] = f >> 6 & 63 | 128), c[d++] = f & 63 | 128);
  }
  return c;
};
g.g.It = function(a) {
  for (var c = [], d = 0, e = 0;d < a.length;) {
    var f = a[d++];
    if (128 > f) {
      c[e++] = String.fromCharCode(f);
    } else {
      if (191 < f && 224 > f) {
        var h = a[d++];
        c[e++] = String.fromCharCode((f & 31) << 6 | h & 63);
      } else {
        var h = a[d++], l = a[d++];
        c[e++] = String.fromCharCode((f & 15) << 12 | (h & 63) << 6 | l & 63);
      }
    }
  }
  return c.join("");
};
g.g.Nt = function(a, c) {
  for (var d = [], e = 0;e < a.length;e++) {
    d.push(a[e] ^ c[e]);
  }
  return d;
};
g.g.m = {};
g.g.m.Db = null;
g.g.m.ic = null;
g.g.m.bc = null;
g.g.m.hc = null;
g.g.m.pd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.g.m.od = g.g.m.pd + "+/=";
g.g.m.kf = g.g.m.pd + "-_.";
g.g.m.rf = g.userAgent.Dg || g.userAgent.xb || g.userAgent.Ib || "function" == typeof g.global.atob;
g.g.m.af = function(a, c) {
  if (!g.M(a)) {
    throw Error("encodeByteArray takes an array as a parameter");
  }
  g.g.m.fc();
  for (var d = c ? g.g.m.bc : g.g.m.Db, e = [], f = 0;f < a.length;f += 3) {
    var h = a[f], l = f + 1 < a.length, m = l ? a[f + 1] : 0, n = f + 2 < a.length, p = n ? a[f + 2] : 0, q = h >> 2, h = (h & 3) << 4 | m >> 4, m = (m & 15) << 2 | p >> 6, p = p & 63;
    n || (p = 64, l || (m = 64));
    e.push(d[q], d[h], d[m], d[p]);
  }
  return e.join("");
};
g.g.m.sr = function(a, c) {
  return g.g.m.rf && !c ? g.global.btoa(a) : g.g.m.af(g.g.hj(a), c);
};
g.g.m.or = function(a, c) {
  return g.g.m.rf && !c ? g.global.atob(a) : g.g.ij(g.g.m.jj(a, c));
};
g.g.m.jj = function(a, c) {
  g.g.m.fc();
  for (var d = c ? g.g.m.hc : g.g.m.ic, e = [], f = 0;f < a.length;) {
    var h = d[a.charAt(f++)], l = f < a.length ? d[a.charAt(f)] : 0;
    ++f;
    var m = f < a.length ? d[a.charAt(f)] : 64;
    ++f;
    var n = f < a.length ? d[a.charAt(f)] : 64;
    ++f;
    if (null == h || null == l || null == m || null == n) {
      throw Error();
    }
    e.push(h << 2 | l >> 4);
    64 != m && (e.push(l << 4 & 240 | m >> 2), 64 != n && e.push(m << 6 & 192 | n));
  }
  return e;
};
g.g.m.fc = function() {
  if (!g.g.m.Db) {
    g.g.m.Db = {};
    g.g.m.ic = {};
    g.g.m.bc = {};
    g.g.m.hc = {};
    for (var a = 0;a < g.g.m.od.length;a++) {
      g.g.m.Db[a] = g.g.m.od.charAt(a), g.g.m.ic[g.g.m.Db[a]] = a, g.g.m.bc[a] = g.g.m.kf.charAt(a), g.g.m.hc[g.g.m.bc[a]] = a, a >= g.g.m.pd.length && (g.g.m.ic[g.g.m.kf.charAt(a)] = a, g.g.m.hc[g.g.m.od.charAt(a)] = a);
    }
  }
};
g.g.sf = function() {
  this.Oa = -1;
};
g.g.Sha1 = function() {
  g.g.sf.call(this);
  this.Oa = 64;
  this.L = [];
  this.md = [];
  this.cj = [];
  this.nc = [];
  this.nc[0] = 128;
  for (var a = 1;a < this.Oa;++a) {
    this.nc[a] = 0;
  }
  this.gc = this.kb = 0;
  this.reset();
};
g.Da(g.g.Sha1, g.g.sf);
g.g.Sha1.prototype.reset = function() {
  this.L[0] = 1732584193;
  this.L[1] = 4023233417;
  this.L[2] = 2562383102;
  this.L[3] = 271733878;
  this.L[4] = 3285377520;
  this.gc = this.kb = 0;
};
g.g.Sha1.prototype.wc = function(a, c) {
  c || (c = 0);
  var d = this.cj;
  if (g.isString(a)) {
    for (var e = 0;16 > e;e++) {
      d[e] = a.charCodeAt(c) << 24 | a.charCodeAt(c + 1) << 16 | a.charCodeAt(c + 2) << 8 | a.charCodeAt(c + 3), c += 4;
    }
  } else {
    for (e = 0;16 > e;e++) {
      d[e] = a[c] << 24 | a[c + 1] << 16 | a[c + 2] << 8 | a[c + 3], c += 4;
    }
  }
  for (e = 16;80 > e;e++) {
    var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
    d[e] = (f << 1 | f >>> 31) & 4294967295;
  }
  for (var h = this.L[0], l = this.L[1], m = this.L[2], n = this.L[3], p = this.L[4], q, e = 0;80 > e;e++) {
    40 > e ? 20 > e ? (f = n ^ l & (m ^ n), q = 1518500249) : (f = l ^ m ^ n, q = 1859775393) : 60 > e ? (f = l & m | n & (l | m), q = 2400959708) : (f = l ^ m ^ n, q = 3395469782), f = (h << 5 | h >>> 27) + f + p + q + d[e] & 4294967295, p = n, n = m, m = (l << 30 | l >>> 2) & 4294967295, l = h, h = f;
  }
  this.L[0] = this.L[0] + h & 4294967295;
  this.L[1] = this.L[1] + l & 4294967295;
  this.L[2] = this.L[2] + m & 4294967295;
  this.L[3] = this.L[3] + n & 4294967295;
  this.L[4] = this.L[4] + p & 4294967295;
};
g.g.Sha1.prototype.update = function(a, c) {
  g.ja(c) || (c = a.length);
  for (var d = c - this.Oa, e = 0, f = this.md, h = this.kb;e < c;) {
    if (0 == h) {
      for (;e <= d;) {
        this.wc(a, e), e += this.Oa;
      }
    }
    if (g.isString(a)) {
      for (;e < c;) {
        if (f[h] = a.charCodeAt(e), ++h, ++e, h == this.Oa) {
          this.wc(f);
          h = 0;
          break;
        }
      }
    } else {
      for (;e < c;) {
        if (f[h] = a[e], ++h, ++e, h == this.Oa) {
          this.wc(f);
          h = 0;
          break;
        }
      }
    }
  }
  this.kb = h;
  this.gc += c;
};
g.g.Sha1.prototype.Ii = function() {
  var a = [], c = 8 * this.gc;
  56 > this.kb ? this.update(this.nc, 56 - this.kb) : this.update(this.nc, this.Oa - (this.kb - 56));
  for (var d = this.Oa - 1;56 <= d;d--) {
    this.md[d] = c & 255, c /= 256;
  }
  this.wc(this.md);
  for (d = c = 0;5 > d;d++) {
    for (var e = 24;0 <= e;e -= 8) {
      a[c] = this.L[d] >> e & 255, ++c;
    }
  }
  return a;
};
k.pf = {};
k.pf.$i = function(a) {
  var c = k.D.Sc().Ji(), d = new g.g.Sha1;
  d.update(a);
  d.update(c);
  return "r" + g.g.m.af(d.Ii(), !0);
};
k.Sa = function(a, c) {
  this.Zi = a;
  this.qf = c;
  this.bj = null;
  this.aj = k.pf.$i(c);
  new g.f.T;
  new g.f.Y;
  this.Yi = new g.f.Y;
};
k.Sa.Pp = {CAST:"cast", DIAL:"dial", Fo:"mesi", Jn:"cloud"};
k.Sa.xn = {AVAILABLE:"available", UNAVAILABLE:"unavailable", Am:"unknown"};
k.Sa.Wn = {En:"chromecast", Am:"unknown"};
b = k.Sa.prototype;
b.isLocal = function() {
  return!!this.bj;
};
b.tl = function() {
  return this.Zi;
};
b.getId = function() {
  return this.aj;
};
b.isAvailable = function(a) {
  return this.Yi.contains(a);
};
b.equals = function(a) {
  return this.qf == a.qf;
};
k.K = {};
k.K.ad = "urn:x-cast:";
k.K.Zh = 128;
k.K.pk = function(a) {
  return a.length > k.K.ad.length && g.b.$h(a, k.K.ad) && a.length <= k.K.Zh;
};
k.K.rb = function(a) {
  return k.K.ad + "com.google.cast." + a;
};
k.K.Kl = {hq:k.K.rb("tp.connection"), iq:k.K.rb("tp.heartbeat"), Qp:k.K.rb("receiver"), Do:k.K.rb("media"), Eo:k.K.rb("media.universalRemote.optIn"), Cm:k.K.rb("webrtc")};
k.K.dl = g.object.Ih(k.K.Kl);
k.K.ok = function(a) {
  return k.K.dl.hasOwnProperty(a);
};
k.Aa = {};
k.Aa.Rr = function(a, c) {
  if (!c.applications || 1 != c.applications.length) {
    return null;
  }
  var d = k.Aa.fl(a, c.applications[0]);
  d.receiver.volume = c.volume;
  g.Ma(c.isActiveInput) && (d.receiver.isActiveInput = c.isActiveInput);
  return d;
};
k.Aa.fl = function(a, c) {
  var d = k.Aa.hk(a), d = new chrome.cast.o(c.sessionId, c.appId, c.displayName, c.appImages, d);
  d.senderApps = c.senderApps;
  d.namespaces = c.namespaces || [];
  d.transportId = c.transportId;
  d.statusText = c.statusText;
  return d;
};
k.Aa.hk = function(a) {
  return new chrome.cast.Sa(a.getId(), a.tl());
};
k.Aa.ws = function(a, c) {
  if (a.statusText != c.statusText) {
    return!0;
  }
  for (var d = a.namespaces || [], e = c.namespaces || [], f = 0;f < d.length;f++) {
    if (!e.some(function(a) {
      return a.name == d[f].name;
    })) {
      return!0;
    }
  }
  return a.receiver.volume.level != c.receiver.volume.level || a.receiver.volume.muted != c.receiver.volume.muted ? !0 : !1;
};
k.Aa.eh = function(a) {
  g.isArray(a) ? a.forEach(k.Aa.eh) : g.isObject(a) && Object.keys(a).forEach(function(c) {
    g.Qc(a[c]) ? delete a[c] : k.Aa.eh(a[c]);
  });
};
k.Aa.Vr = function(a, c) {
  return a.namespaces.some(function(a) {
    return a.name == c;
  });
};
k.pg = function(a, c) {
  this.type = k.J.Tg;
  this.requestId = null;
  this.volume = a;
  this.expectedVolume = c || null;
};
k.Q = {};
k.Q.Zq = function(a) {
  return!a || !g.isString(a.sessionId) || !g.X(a.media) || g.X(a.autoplay) && !g.Ma(a.autoplay) || g.X(a.currentTime) && !g.isNumber(a.currentTime) ? !1 : k.Q.jk(a.media);
};
k.Q.jk = function(a) {
  return!a || !g.isString(a.contentId) || 1E3 < a.contentId.length || !g.object.ib(chrome.cast.media.Xd, a.streamType) || !g.isString(a.contentType) || g.X(a.duration) && !g.isNumber(a.duration) ? !1 : !0;
};
k.Q.ej = function(a) {
  return!!a && g.X(a.sessionId) && g.isString(a.namespaceName) && k.K.pk(a.namespaceName) && !k.K.ok(a.namespaceName);
};
k.Q.Lj = function(a) {
  return a && g.isFunction(a.sessionListener) && g.isFunction(a.receiverListener) ? k.Q.nf(a.sessionRequest) : !1;
};
k.Q.gj = function(a) {
  return a ? !g.a.find(a, function(a) {
    return!((a.receiverType == chrome.cast.yb.CUSTOM || a.receiverType == chrome.cast.yb.DIAL) && g.X(a.friendlyName) && 0 == a.capabilities.length && g.Qc(a.volume));
  }) : !1;
};
k.Q.nf = function(a) {
  return!a || !g.X(a.appId) || g.X(a.dialRequest) && (!g.isString(a.dialRequest.appName) || g.X(a.dialRequest.launchParameter) && !g.isString(a.dialRequest.launchParameter)) ? !1 : !0;
};
k.Q.dj = function(a) {
  return a && g.X(a.volume) && k.Q.Ag(a.volume) ? g.X(a.expectedVolume) ? k.Q.Ag(a.expectedVolume) : !0 : !1;
};
k.Q.Ag = function(a) {
  return a ? g.X(a.level) ? g.isNumber(a.level) && 0 <= a.level && 1 >= a.level : g.Ma(a.muted) : !1;
};
k.Q.Yq = function(a) {
  return!!a && g.Ma(a.doLaunch) && (!g.X(a.launchParameter) || g.isString(a.launchParameter));
};
k.P = function(a, c, d) {
  this.ag = a;
  this.yd = c;
  this.Bd = g.isNumber(d) ? d : 0;
  this.yc = !1;
  this.Fb = null;
};
k.P.ck = 432E5;
k.P.prototype.Zk = function() {
  return this.yc;
};
k.P.prototype.va = function() {
  this.yc = !0;
  this.yd = this.ag = null;
  this.Fb && (clearTimeout(this.Fb), this.Fb = null);
};
k.P.ig = function() {
};
k.P.prototype.Zf = function() {
  var a = this.ag;
  this.va();
  return a || k.P.ig;
};
k.P.prototype.Yf = function() {
  var a = this.yd;
  this.va();
  return a || k.P.ig;
};
k.P.prototype.uf = function(a, c) {
  if (!this.yc && !this.Fb) {
    var d = function() {
      if (!this.yc) {
        a && a();
        var d = this.yd;
        this.va();
        if (0 < this.Bd) {
          var f = new chrome.cast.Error(chrome.cast.wa.TIMEOUT);
          c && (f.description = c);
          d(f);
        }
      }
    }.bind(this);
    this.Fb = setTimeout(d, 0 < this.Bd ? this.Bd : k.P.ck);
  }
};
k.no = {};
k.ka = function(a, c, d, e, f, h) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = g.isNumber(f) ? f : 0;
  this.receiverId = h || null;
  this.receiverList = null;
};
k.v = {vf:"iframe_init_result", mj:"fail_to_connect_to_extension", Hn:"client_reconnect", Wb:"v2_message", Ce:"app_message", Vj:"client_init", Zj:"log_message", Mi:"request_session", $j:"request_session_by_id", Sj:"leave_session", Gn:"client_disconnect", fj:"set_custom_receivers", Rf:"custom_dial_launch_response", Tj:"set_receiver_display_status", oj:"receiver_availability", nj:"receiver_action", lf:"new_session", mf:"update_session", lj:"disconnect_session", pj:"remove_session", rn:"app_message_success", 
wo:"leave_session_success", dq:"set_receiver_volume_success", aq:"set_custom_receivers_success", ERROR:"error", kj:"custom_dial_launch_request", cq:"set_receiver_display_status_success"};
k.tc = function() {
  this.r = {};
};
b = k.tc.prototype;
b.add = function(a, c) {
  var d = this.r[a];
  if (d) {
    return-1 == d.indexOf(c) && d.push(c), !1;
  }
  this.r[a] = [c];
  return!0;
};
b.remove = function(a, c) {
  var d = this.r[a];
  if (!d) {
    return!1;
  }
  var e = d.indexOf(c);
  if (-1 == e) {
    return!1;
  }
  if (1 == d.length) {
    return delete this.r[a], !0;
  }
  d.splice(e, 1);
  return!1;
};
b.zg = function(a) {
  if (!(a in this.r)) {
    return!1;
  }
  delete this.r[a];
  return!0;
};
b.wk = function(a) {
  var c = !1;
  Object.keys(this.r).forEach(function(d) {
    0 == d.indexOf(a) && (delete this.r[d], c = !0);
  }, this);
  return c;
};
b.get = function(a) {
  return this.r[a] || [];
};
b.contains = function(a, c) {
  return-1 != this.get(a).indexOf(c);
};
k.Fp = function() {
  this.type = k.J.zd;
  this.requestId = null;
  this.status = [];
  this.customData = null;
  this.sessionId = "";
};
chrome.cast.Kb = function(a, c) {
  this.ql = a;
  this.gg = c;
  this.hg = null;
};
chrome.cast.Kb.prototype.init = function() {
  window.addEventListener("message", this.Zm.bind(this), !1);
};
chrome.cast.Kb.prototype.wl = function(a) {
  this.hg = a;
};
chrome.cast.Kb.prototype.Zm = function(a) {
  a.source != window && a.origin == this.gg && (a = a.data, a.type == k.v.vf && (this.kk = !a.message), this.hg(a));
};
chrome.cast.Kb.prototype.wd = function(a) {
  this.kk && this.ql.contentWindow.postMessage(a, this.gg);
};
k.Gf = function() {
  this.mb = {};
  this.Dc = {};
};
b = k.Gf.prototype;
b.xk = function(a, c) {
  var d = this.mb[a];
  return d ? (d.status = c, d.media.forEach(function(a) {
    delete this.Dc[this.Ed(a)];
  }, this), delete this.mb[a], !0) : !1;
};
b.Ck = function(a) {
  delete this.Dc[this.Ed(a)];
  var c = this.mb[a.sessionId];
  c && (a = c.media.indexOf(a), -1 != a && c.media.splice(a, 1));
};
b.Al = function(a) {
  if (a.sessionId == chrome.cast.o.Xf) {
    return a;
  }
  var c = this.mb[a.sessionId];
  if (c) {
    return c.statusText = a.statusText, c.namespaces = a.namespaces || [], c.receiver.volume = a.receiver.volume, c;
  }
  var c = new chrome.cast.o(a.sessionId, a.appId, a.displayName, a.appImages, a.receiver), d;
  for (d in a) {
    "media" == d ? c.media = a.media.map(function(a) {
      a = this.Pf(a);
      a.qd = !1;
      a.lc = !0;
      return a;
    }.bind(this)) : a.hasOwnProperty(d) && (c[d] = a[d]);
  }
  return this.mb[a.sessionId] = c;
};
b.Pf = function(a) {
  var c = this.Ed(a), d = this.Dc[c];
  d || (d = new chrome.cast.media.q(a.sessionId, a.mediaSessionId), this.Dc[c] = d, (c = this.mb[a.sessionId]) && c.media.push(d));
  for (var e in a) {
    a.hasOwnProperty(e) && ("volume" == e ? (d.volume.level = a.volume.level, d.volume.muted = a.volume.muted) : d[e] = a[e]);
  }
  "currentTime" in a && (d.xd = g.now());
  return d;
};
b.Ed = function(a) {
  return a.sessionId + "#" + a.mediaSessionId;
};
chrome.cast.ma = function(a) {
  this.Hj = 1E3 * Math.floor(1E5 * Math.random());
  this.ec = a;
  this.lb = {};
  this.Vb = !1;
  this.jb = this.aa = this.gd = null;
  this.qc = new k.tc;
  this.kc = new k.tc;
  this.Eb = new k.tc;
  this.uc = [];
  this.jc = new k.Gf(this.pc);
  this.ye = !1;
};
b = chrome.cast.ma.prototype;
b.init = function() {
  this.ec.wl(this.vl.bind(this));
};
b.Yk = function() {
  return "a" + this.Hj++;
};
b.qj = function(a) {
  var c = a.seqNum;
  if (!c) {
    return!1;
  }
  var d = this.lb[c];
  if (d) {
    var e = a.message;
    a.type == k.v.ERROR ? d.Yf()(a.message) : d.Zf()(e);
    delete this.lb[c];
  }
  return!!d;
};
b.rj = function(a) {
  switch(a.type) {
    case k.v.lf:
    ;
    case k.v.mf:
      a.message = this.Xj(a.message);
      break;
    case k.v.Wb:
      a = a.message, a.type == k.J.zd && a.status && (a.status = a.status.map(this.Wj.bind(this)));
  }
};
b.Xj = function(a) {
  return this.jc.Al(a);
};
b.vl = function(a) {
  this.rj(a);
  if (!this.qj(a)) {
    switch(a.type) {
      case k.v.vf:
        this.sj(a);
        break;
      case k.v.oj:
        this.zj(a);
        break;
      case k.v.nj:
        this.yj(a);
        break;
      case k.v.mj:
        this.ye = !0;
        break;
      case k.v.lf:
        this.xj(a);
        break;
      case k.v.mf:
        this.Bj(a);
        break;
      case k.v.lj:
        this.uj(a);
        break;
      case k.v.pj:
        this.Aj(a);
        break;
      case k.v.Ce:
        this.vj(a.message);
        break;
      case k.v.Wb:
        this.wj(a);
        break;
      case k.v.kj:
        this.tj(a);
    }
  }
};
b.tj = function(a) {
  var c = a.message;
  this.aa && this.aa.customDialLaunchCallback && this.aa.customDialLaunchCallback(c).then(g.bind(function(c) {
    this.ec.wd(new k.ka(k.v.Rf, c, a.seqNum));
  }, this), g.bind(function() {
    this.ec.wd(new k.ka(k.v.Rf, null, a.seqNum));
  }, this));
};
b.wj = function(a) {
  switch(a.message.type) {
    case k.J.zd:
      this.Uk(a.message);
  }
};
b.Uk = function(a) {
  a.status.forEach(this.rh.bind(this));
};
b.xj = function(a) {
  this.aa && this.aa.sessionListener(a.message);
};
b.Bj = function(a) {
  (a = a.message) && this.Eb.get(a.sessionId).forEach(function(a) {
    a(!0);
  });
};
b.uj = function(a) {
  this.mh(a.message, chrome.cast.Nb.DISCONNECTED);
};
b.Aj = function(a) {
  this.mh(a.message, chrome.cast.Nb.STOPPED);
};
b.mh = function(a, c) {
  var d = c != chrome.cast.Nb.STOPPED;
  this.jc.xk(a, c) && (this.qc.wk(a + "#"), this.kc.zg(a), this.Eb.get(a).forEach(function(a) {
    a(d);
  }), this.Eb.zg(a));
};
b.vj = function(a) {
  this.Km(a.sessionId, a.namespaceName).forEach(function(c) {
    c(a.namespaceName, a.message);
  });
};
b.zj = function(a) {
  if (this.aa) {
    var c = a.message;
    a.receiverList ? this.aa.receiverListener.apply(null, [c, a.receiverList]) : this.aa.receiverListener(c);
  }
};
b.yj = function(a) {
  this.uc.forEach(function(c) {
    c(a.message.receiver, a.message.receiverAction);
  }, this);
};
b.sj = function(a) {
  (a = a.message) ? (this.gd = a, this.jb && this.jb.Yf()(a)) : (this.Vb = !0, this.Ef(), this.jb && this.jb.Zf()(void 0));
};
b.Vd = function(a, c, d) {
  this.Fa(d) && (a = a || [], k.Q.gj(a) ? this.ya(new k.ka(k.v.fj, a), new k.P(c, d)) : d && d(new chrome.cast.Error(chrome.cast.wa.INVALID_PARAMETER)));
};
chrome.cast.ma.prototype.setReceiverVolume = function(a, c, d, e) {
  this.Fa(e) && (k.Q.dj(c) ? (c.sessionId = a, this.ya(new k.ka(k.v.Wb, c, null, null, chrome.cast.timeout.setReceiverVolume), new k.P(d, e, chrome.cast.timeout.setReceiverVolume))) : e && e(new chrome.cast.Error(chrome.cast.wa.INVALID_PARAMETER)));
};
chrome.cast.ma.prototype.leaveSession = function(a, c, d) {
  this.Fa(d) && this.ya(new k.ka(k.v.Sj, a, null, null, chrome.cast.timeout.leaveSession), new k.P(c, d, chrome.cast.timeout.leaveSession));
};
b = chrome.cast.ma.prototype;
b.fg = function(a, c, d, e) {
  this.Fa(d) && this.ya(new k.ka(k.v.Wb, a, null, null, e), new k.P(c, d, e));
};
b.Rd = function(a) {
  this.Fa(g.Mf) && this.ya(new k.ka(k.v.Zj, a));
};
b.jg = function(a, c, d, e, f, h) {
  null != a && (d.mediaSessionId = a.mediaSessionId, d.sessionId = a.sessionId);
  d.requestId = null;
  d.type = c;
  this.fg(d, function(a) {
    e && a.status && 1 == a.status.length ? e(a.status[0]) : f && f(new chrome.cast.Error(chrome.cast.wa.SESSION_ERROR));
  }, f, h);
};
b.Pk = function(a, c, d) {
  this.jg(null, k.J.rg, a, function(a) {
    a.lc = !0;
    a.qd = !0;
    c && c(a);
  }.bind(this), d, chrome.cast.media.timeout.load);
};
b.Za = function(a, c, d, e, f, h) {
  this.jg(a, c, d, function(a) {
    this.rh(a);
    e && e();
  }.bind(this), f, h);
};
b.Ek = function(a, c, d) {
  this.Fa(d) && (k.Q.ej(a) ? this.ya(new k.ka(k.v.Ce, a, null, null, chrome.cast.timeout.sendCustomMessage), new k.P(c, d, chrome.cast.timeout.sendCustomMessage)) : d && d(new chrome.cast.Error(chrome.cast.wa.INVALID_PARAMETER)));
};
b.Ef = function() {
  this.aa && this.Vb && this.ya(new k.ka(k.v.Vj, new k.Uj(this.aa)));
};
b.ya = function(a, c) {
  var d = this.Yk();
  a.seqNum = d;
  if (this.lb[d] && !this.lb[d].Zk()) {
    throw "Try to send a request with the existing seqNum: " + a.seqNum;
  }
  c && (this.lb[d] = c, c.uf(function() {
    delete this.lb[d];
  }.bind(this)));
  this.ec.wd(a);
};
b.Lb = function(a, c, d) {
  k.Q.Lj(a) ? this.gd ? d && d(this.gd) : this.aa ? c && c() : (this.aa = a, this.Vb ? (this.Ef(), c && c()) : (this.jb = new k.P(c, d, 5E3), this.jb.uf())) : d && d(new chrome.cast.Error(chrome.cast.wa.INVALID_PARAMETER));
};
chrome.cast.ma.prototype.requestSession = function(a, c, d, e) {
  this.Fa(c) && (d && !k.Q.nf(d) ? c && c(new chrome.cast.Error(chrome.cast.wa.INVALID_PARAMETER)) : (!d && this.aa && (d = this.aa.sessionRequest), this.ya(new k.ka(k.v.Mi, d, null, null, d.requestSessionTimeout, e), new k.P(a, c, 0))));
};
chrome.cast.ma.prototype.Ud = function(a) {
  this.Fa(g.Mf) && a && this.ya(new k.ka(k.v.$j, a));
};
chrome.cast.ma.Vk = new chrome.cast.Error(chrome.cast.wa.API_NOT_INITIALIZED);
chrome.cast.ma.Wk = new chrome.cast.Error(chrome.cast.wa.EXTENSION_MISSING);
b = chrome.cast.ma.prototype;
b.Fa = function(a) {
  return this.Vb ? this.ye ? (a && a(chrome.cast.ma.Wk), !1) : !0 : (a && a(chrome.cast.ma.Vk), !1);
};
b.be = function(a, c) {
  return a + "#" + c;
};
b.Jk = function(a, c, d) {
  this.qc.add(this.be(a, c), d);
};
b.Mk = function(a, c, d) {
  this.qc.remove(this.be(a, c), d);
};
b.Km = function(a, c) {
  return this.qc.get(this.be(a, c));
};
b.Pd = function(a, c) {
  this.kc.add(a, c);
};
b.Sd = function(a, c) {
  this.kc.remove(a, c);
};
b.Kk = function(a, c) {
  -1 == a.Mb.indexOf(c) && a.Mb.push(c);
};
b.Nk = function(a, c) {
  var d = a.Mb.indexOf(c);
  -1 != d && a.Mb.splice(d, 1);
};
b.rh = function(a) {
  if (a.lc) {
    var c = a.playerState != chrome.cast.media.Jb.IDLE;
    a.Mb.forEach(function(a) {
      a(c);
    });
    c || this.jc.Ck(a);
  } else {
    a.lc = !0, a.qd || this.kc.get(a.sessionId).forEach(function(c) {
      c(a);
    });
  }
};
b.Wj = function(a) {
  return this.jc.Pf(a);
};
b.Lk = function(a, c) {
  this.Eb.add(a, c);
};
b.Ok = function(a, c) {
  this.Eb.remove(a, c);
};
b.Qd = function(a) {
  this.uc.push(a);
};
b.Td = function(a) {
  a = this.uc.indexOf(a);
  0 <= a && this.uc.splice(a, 1);
};
b.Wd = function(a, c, d) {
  this.Fa(d) && this.ya(new k.ka(k.v.Tj, a), new k.P(c, d));
};
chrome.cast.isAvailable = !1;
g.h("chrome.cast.isAvailable", chrome.cast.isAvailable);
chrome.cast.t = null;
chrome.cast.Lb = function(a, c, d) {
  chrome.cast.t.Lb(a, c, d);
};
g.h("chrome.cast.initialize", chrome.cast.Lb);
chrome.cast.requestSession = function(a, c, d, e) {
  chrome.cast.t.requestSession(a, c, d, e);
};
g.h("chrome.cast.requestSession", chrome.cast.requestSession);
chrome.cast.Ud = function(a) {
  chrome.cast.t.Ud(a);
};
g.h("chrome.cast.requestSessionById", chrome.cast.Ud);
chrome.cast.Qd = function(a) {
  chrome.cast.t.Qd(a);
};
g.h("chrome.cast.addReceiverActionListener", chrome.cast.Qd);
chrome.cast.Td = function(a) {
  chrome.cast.t.Td(a);
};
g.h("chrome.cast.removeReceiverActionListener", chrome.cast.Td);
chrome.cast.Rd = function(a) {
  chrome.cast.t.Rd(a);
};
g.h("chrome.cast.logMessage", chrome.cast.Rd);
chrome.cast.Vd = function(a, c, d) {
  chrome.cast.t.Vd(a, c, d);
};
g.h("chrome.cast.setCustomReceivers", chrome.cast.Vd);
chrome.cast.Wd = function(a, c, d) {
  chrome.cast.t.Wd(a, c, d);
};
g.h("chrome.cast.setReceiverDisplayStatus", chrome.cast.Wd);
chrome.cast.o.prototype.en = function(a, c, d) {
  chrome.cast.t.setReceiverVolume(this.sessionId, new k.pg(new chrome.cast.Bc(a, null), this.receiver.volume), c, d);
};
g.s(chrome.cast.o.prototype, "setReceiverVolumeLevel", chrome.cast.o.prototype.en);
chrome.cast.o.prototype.dn = function(a, c, d) {
  chrome.cast.t.setReceiverVolume(this.sessionId, new k.pg(new chrome.cast.Bc(null, a), this.receiver.volume), c, d);
};
g.s(chrome.cast.o.prototype, "setReceiverMuted", chrome.cast.o.prototype.dn);
chrome.cast.o.prototype.leave = function(a, c) {
  chrome.cast.t.leaveSession(this.sessionId, a, c);
};
g.s(chrome.cast.o.prototype, "leave", chrome.cast.o.prototype.leave);
chrome.cast.o.prototype.stop = function(a, c) {
  chrome.cast.t.fg(new k.Bk(this.sessionId), a, c, chrome.cast.timeout.stopSession);
};
g.s(chrome.cast.o.prototype, "stop", chrome.cast.o.prototype.stop);
chrome.cast.o.prototype.sendMessage = function(a, c, d, e) {
  chrome.cast.t.Ek(new k.Dk(this.sessionId, a, c), d, e);
};
g.s(chrome.cast.o.prototype, "sendMessage", chrome.cast.o.prototype.sendMessage);
chrome.cast.o.prototype.ie = function(a) {
  chrome.cast.t.Lk(this.sessionId, a);
};
g.s(chrome.cast.o.prototype, "addUpdateListener", chrome.cast.o.prototype.ie);
chrome.cast.o.prototype.me = function(a) {
  chrome.cast.t.Ok(this.sessionId, a);
};
g.s(chrome.cast.o.prototype, "removeUpdateListener", chrome.cast.o.prototype.me);
chrome.cast.o.prototype.Dm = function(a, c) {
  chrome.cast.t.Jk(this.sessionId, a, c);
};
g.s(chrome.cast.o.prototype, "addMessageListener", chrome.cast.o.prototype.Dm);
chrome.cast.o.prototype.an = function(a, c) {
  chrome.cast.t.Mk(this.sessionId, a, c);
};
g.s(chrome.cast.o.prototype, "removeMessageListener", chrome.cast.o.prototype.an);
chrome.cast.o.prototype.Pd = function(a) {
  chrome.cast.t.Pd(this.sessionId, a);
};
g.s(chrome.cast.o.prototype, "addMediaListener", chrome.cast.o.prototype.Pd);
chrome.cast.o.prototype.Sd = function(a) {
  chrome.cast.t.Sd(this.sessionId, a);
};
g.s(chrome.cast.o.prototype, "removeMediaListener", chrome.cast.o.prototype.Sd);
chrome.cast.o.prototype.Tm = function(a, c, d) {
  a.sessionId = this.sessionId;
  chrome.cast.t.Pk(a, c, d);
};
g.s(chrome.cast.o.prototype, "loadMedia", chrome.cast.o.prototype.Tm);
chrome.cast.media.q.prototype.xc = function(a, c, d) {
  a || (a = new chrome.cast.media.Nf);
  chrome.cast.t.Za(this, k.J.Of, a, c, d, chrome.cast.media.timeout.xc);
};
g.s(chrome.cast.media.q.prototype, "getStatus", chrome.cast.media.q.prototype.xc);
chrome.cast.media.q.prototype.play = function(a, c, d) {
  a || (a = new chrome.cast.media.Wf);
  chrome.cast.t.Za(this, k.J.bk, a, c, d, chrome.cast.media.timeout.play);
};
g.s(chrome.cast.media.q.prototype, "play", chrome.cast.media.q.prototype.play);
chrome.cast.media.q.prototype.pause = function(a, c, d) {
  a || (a = new chrome.cast.media.Vf);
  chrome.cast.t.Za(this, k.J.ak, a, c, d, chrome.cast.media.timeout.pause);
};
g.s(chrome.cast.media.q.prototype, "pause", chrome.cast.media.q.prototype.pause);
chrome.cast.media.q.prototype.seek = function(a, c, d) {
  chrome.cast.t.Za(this, k.J.dk, a, c, d, chrome.cast.media.timeout.seek);
};
g.s(chrome.cast.media.q.prototype, "seek", chrome.cast.media.q.prototype.seek);
chrome.cast.media.q.prototype.stop = function(a, c, d) {
  a || (a = new chrome.cast.media.Uf);
  chrome.cast.t.Za(this, k.J.Tf, a, c, d, chrome.cast.media.timeout.stop);
};
g.s(chrome.cast.media.q.prototype, "stop", chrome.cast.media.q.prototype.stop);
chrome.cast.media.q.prototype.Ac = function(a, c, d) {
  chrome.cast.t.Za(this, k.J.Qf, a, c, d, chrome.cast.media.timeout.Ac);
};
g.s(chrome.cast.media.q.prototype, "setVolume", chrome.cast.media.q.prototype.Ac);
chrome.cast.media.q.prototype.Cc = function(a, c, d) {
  chrome.cast.t.Za(this, k.J.Yj, a, c, d, chrome.cast.media.timeout.Cc);
};
g.s(chrome.cast.media.q.prototype, "editTracksInfo", chrome.cast.media.q.prototype.Cc);
chrome.cast.media.q.prototype.gn = function(a) {
  return-1 < this.supportedMediaCommands.indexOf(a);
};
g.s(chrome.cast.media.q.prototype, "supportsCommand", chrome.cast.media.q.prototype.gn);
chrome.cast.media.q.prototype.Lm = function() {
  if (this.playerState == chrome.cast.media.Jb.PLAYING && 0 <= this.xd) {
    var a = (g.now() - this.xd) / 1E3, a = this.currentTime + this.playbackRate * a;
    this.media && null != this.media.duration && a > this.media.duration && (a = this.media.duration);
    0 > a && (a = 0);
    return a;
  }
  return this.currentTime;
};
g.s(chrome.cast.media.q.prototype, "getEstimatedTime", chrome.cast.media.q.prototype.Lm);
chrome.cast.media.q.prototype.ie = function(a) {
  chrome.cast.t.Kk(this, a);
};
g.s(chrome.cast.media.q.prototype, "addUpdateListener", chrome.cast.media.q.prototype.ie);
chrome.cast.media.q.prototype.me = function(a) {
  chrome.cast.t.Nk(this, a);
};
g.s(chrome.cast.media.q.prototype, "removeUpdateListener", chrome.cast.media.q.prototype.me);
chrome.cast.ne = function() {
  if (!chrome.cast.bg && (chrome.cast.bg = !0, chrome.cast.extensionId)) {
    var a = "chrome-extension://" + chrome.cast.extensionId, c = a + "/api_iframe.html", d = document.createElement("iframe");
    d.src = c + "?appOrigin=" + window.location.origin;
    d.setAttribute("style", "display:none");
    document.body.appendChild(d);
    a = new chrome.cast.Kb(d, a);
    a.init();
    chrome.cast.t = new chrome.cast.ma(a);
    chrome.cast.t.init();
    chrome.cast.isAvailable = !0;
    (a = window.__onGCastApiAvailable) && "function" == typeof a && a(!0);
  }
};
chrome.cast.bg = !1;
"complete" == document.readyState ? chrome.cast.ne() : (window.addEventListener("load", chrome.cast.ne, !1), window.addEventListener("DOMContentLoaded", chrome.cast.ne, !1));
})();
