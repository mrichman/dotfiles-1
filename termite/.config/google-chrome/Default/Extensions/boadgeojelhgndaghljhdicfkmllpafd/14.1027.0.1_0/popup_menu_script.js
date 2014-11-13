var e;
window.de = !0;
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var aa = aa || {}, k = this, l = function(a) {
  return void 0 !== a;
}, n = function(a, b, c) {
  a = a.split(".");
  c = c || k;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var d;a.length && (d = a.shift());) {
    !a.length && l(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {};
  }
}, ba = function(a, b) {
  for (var c = a.split("."), d = b || k, f;f = c.shift();) {
    if (null != d[f]) {
      d = d[f];
    } else {
      return null;
    }
  }
  return d;
}, ca = function() {
}, da = function(a) {
  a.ra = function() {
    return a.Ob ? a.Ob : a.Ob = new a;
  };
}, p = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}, ea = function(a) {
  var b = p(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}, q = function(a) {
  return "string" == typeof a;
}, r = function(a) {
  return "boolean" == typeof a;
}, s = function(a) {
  return "function" == p(a);
};
Math.random();
var fa = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
}, ga = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}, t = function(a, b, c) {
  t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ga;
  return t.apply(null, arguments);
}, u = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}, ha = Date.now || function() {
  return+new Date;
}, v = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Mb = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.ce = function(a, c, g) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
};
Function.prototype.bind = Function.prototype.bind || function(a, b) {
  if (1 < arguments.length) {
    var c = Array.prototype.slice.call(arguments, 1);
    c.unshift(this, a);
    return t.apply(null, c);
  }
  return t(this, a);
};
var w = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, w);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
};
v(w, Error);
w.prototype.name = "CustomError";
var ia = function(a, b) {
  for (var c = a.split("%s"), d = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < c.length;) {
    d += c.shift() + f.shift();
  }
  return d + c.join("%s");
}, ja = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}, ra = function(a, b) {
  if (b) {
    a = a.replace(ka, "&amp;").replace(la, "&lt;").replace(ma, "&gt;").replace(na, "&quot;").replace(oa, "&#39;").replace(pa, "&#0;");
  } else {
    if (!qa.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(ka, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(la, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(ma, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(na, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(oa, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(pa, "&#0;"));
  }
  return a;
}, ka = /&/g, la = /</g, ma = />/g, na = /"/g, oa = /'/g, pa = /\x00/g, qa = /[\x00&<>"']/, x = function(a, b) {
  for (var c = 0, d = ja(String(a)).split("."), f = ja(String(b)).split("."), g = Math.max(d.length, f.length), h = 0;0 == c && h < g;h++) {
    var m = d[h] || "", E = f[h] || "", Ca = /(\d*)(\D*)/g, xc = /(\d*)(\D*)/g;
    do {
      var T = Ca.exec(m) || ["", "", ""], U = xc.exec(E) || ["", "", ""];
      if (0 == T[0].length && 0 == U[0].length) {
        break;
      }
      c = sa(0 == T[1].length ? 0 : parseInt(T[1], 10), 0 == U[1].length ? 0 : parseInt(U[1], 10)) || sa(0 == T[2].length, 0 == U[2].length) || sa(T[2], U[2]);
    } while (0 == c);
  }
  return c;
}, sa = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
Math.random();
var ta = function(a, b) {
  b.unshift(a);
  w.call(this, ia.apply(null, b));
  b.shift();
};
v(ta, w);
ta.prototype.name = "AssertionError";
var ua = function(a, b, c, d) {
  var f = "Assertion failed";
  if (c) {
    var f = f + (": " + c), g = d
  } else {
    a && (f += ": " + a, g = b);
  }
  throw new ta("" + f, g || []);
}, y = function(a, b, c) {
  a || ua("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
}, va = function(a, b) {
  throw new ta("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}, wa = function(a, b, c) {
  s(a) || ua("Expected function but got %s: %s.", [p(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
var z = Array.prototype, xa = z.indexOf ? function(a, b, c) {
  y(null != a.length);
  return z.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (q(a)) {
    return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, ya = z.forEach ? function(a, b, c) {
  y(null != a.length);
  z.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, f = q(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a);
  }
}, za = function(a, b, c) {
  var d = 0;
  ya(a, function(a, g, h) {
    b.call(c, a, g, h) && ++d;
  }, c);
  return d;
}, A = function(a, b, c) {
  t: {
    for (var d = a.length, f = q(a) ? a.split("") : a, g = 0;g < d;g++) {
      if (g in f && b.call(c, f[g], g, a)) {
        b = g;
        break t;
      }
    }
    b = -1;
  }
  return 0 > b ? null : q(a) ? a.charAt(b) : a[b];
}, Ba = function(a, b) {
  var c = xa(a, b), d;
  (d = 0 <= c) && Aa(a, c);
  return d;
}, Aa = function(a, b) {
  y(null != a.length);
  return 1 == z.splice.call(a, b, 1).length;
}, Da = function(a, b, c) {
  y(null != a.length);
  return 2 >= arguments.length ? z.slice.call(a, b) : z.slice.call(a, b, c);
}, Fa = function(a, b) {
  a.sort(b || Ea);
}, Ea = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
var Ga = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return!0;
    }
  }
  return!1;
}, Ha = function(a) {
  var b = 0, c;
  for (c in a) {
    b++;
  }
  return b;
}, Ia = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}, Ja = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}, Ka = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), La = function(a, b) {
  for (var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for (c in d) {
      a[c] = d[c];
    }
    for (var g = 0;g < Ka.length;g++) {
      c = Ka[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}, Ma = function(a) {
  var b = arguments.length;
  if (1 == b && "array" == p(arguments[0])) {
    return Ma.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
};
var B;
t: {
  var Na = k.navigator;
  if (Na) {
    var Oa = Na.userAgent;
    if (Oa) {
      B = Oa;
      break t;
    }
  }
  B = "";
}
;var Pa = -1 != B.indexOf("Opera") || -1 != B.indexOf("OPR"), C = -1 != B.indexOf("Trident") || -1 != B.indexOf("MSIE"), Qa = -1 != B.indexOf("Gecko") && -1 == B.toLowerCase().indexOf("webkit") && !(-1 != B.indexOf("Trident") || -1 != B.indexOf("MSIE")), D = -1 != B.toLowerCase().indexOf("webkit"), Ra = function() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}, Sa = function() {
  var a = "", b;
  if (Pa && k.opera) {
    return a = k.opera.version, s(a) ? a() : a;
  }
  Qa ? b = /rv\:([^\);]+)(\)|;)/ : C ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : D && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(B)) ? a[1] : "");
  return C && (b = Ra(), b > parseFloat(a)) ? String(b) : a;
}(), Ta = {}, F = function(a) {
  return Ta[a] || (Ta[a] = 0 <= x(Sa, a));
}, Ua = k.document, Va = Ua && C ? Ra() || ("CSS1Compat" == Ua.compatMode ? parseInt(Sa, 10) : 5) : void 0;
var Wa, Xa, Ya, Za, $a, ab, bb;
bb = ab = $a = Za = Ya = Xa = Wa = !1;
var G = B;
G && (-1 != G.indexOf("Firefox") ? Wa = !0 : -1 != G.indexOf("Camino") ? Xa = !0 : -1 != G.indexOf("iPhone") || -1 != G.indexOf("iPod") ? Ya = !0 : -1 != G.indexOf("iPad") ? Za = !0 : -1 != G.indexOf("Chrome") ? ab = !0 : -1 != G.indexOf("Android") ? $a = !0 : -1 != G.indexOf("Safari") && (bb = !0));
var cb = Wa, db = Xa, eb = Ya, fb = Za, gb = $a, hb = ab, ib = bb;
var H = function(a) {
  return(a = a.exec(B)) ? a[1] : "";
}, jb = function() {
  if (cb) {
    return H(/Firefox\/([0-9.]+)/);
  }
  if (C || Pa) {
    return Sa;
  }
  if (hb) {
    return H(/Chrome\/([0-9.]+)/);
  }
  if (ib) {
    return H(/Version\/([0-9.]+)/);
  }
  if (eb || fb) {
    var a;
    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(B)) {
      return a[1] + "." + a[2];
    }
  } else {
    if (gb) {
      return(a = H(/Android\s+([0-9.]+)/)) ? a : H(/Version\/([0-9.]+)/);
    }
    if (db) {
      return H(/Camino\/([0-9.]+)/);
    }
  }
  return "";
}();
var kb, lb, mb = "undefined" != typeof chrome && !!chrome.mdns && !!chrome.cast && !!chrome.cast.channel && !!chrome.browserAction && !!chrome.browserAction.openPopup, nb = function() {
  return l(chrome.runtime) ? chrome.runtime.id : "boadgeojelhgndaghljhdicfkmllpafd";
}, I = "dliochdbjfkdbacpmhlcpmleaejidimm" === nb(), J = "boadgeojelhgndaghljhdicfkmllpafd" === nb();
if (!I && !J) {
  switch(localStorage["test.extChannel"]) {
    case "stable":
      I = !1;
      J = !0;
      break;
    case "beta":
      I = !0;
      J = !1;
      break;
    default:
      J = I = !1;
  }
}
kb = I;
lb = J;
x(jb, 35);
chrome.cast && chrome.cast.streaming && x(jb, 36);
n("getCastExtensionChannel", function() {
  return 1 < !1 + kb + lb ? null : kb ? "beta" : lb ? "stable" : "staging";
}, void 0);
var ob = "StopIteration" in k ? k.StopIteration : Error("StopIteration"), pb = function() {
};
pb.prototype.next = function() {
  throw ob;
};
pb.prototype.Ud = function() {
  return this;
};
var K = function(a, b) {
  this.p = {};
  this.g = [];
  this.R = this.v = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    a && this.Jc(a);
  }
};
K.prototype.Ea = function() {
  return this.v;
};
K.prototype.qa = function() {
  this.S();
  for (var a = [], b = 0;b < this.g.length;b++) {
    a.push(this.p[this.g[b]]);
  }
  return a;
};
K.prototype.O = function() {
  this.S();
  return this.g.concat();
};
K.prototype.equals = function(a, b) {
  if (this === a) {
    return!0;
  }
  if (this.v != a.Ea()) {
    return!1;
  }
  var c = b || qb;
  this.S();
  for (var d, f = 0;d = this.g[f];f++) {
    if (!c(this.get(d), a.get(d))) {
      return!1;
    }
  }
  return!0;
};
var qb = function(a, b) {
  return a === b;
};
e = K.prototype;
e.clear = function() {
  this.p = {};
  this.R = this.v = this.g.length = 0;
};
e.remove = function(a) {
  return Object.prototype.hasOwnProperty.call(this.p, a) ? (delete this.p[a], this.v--, this.R++, this.g.length > 2 * this.v && this.S(), !0) : !1;
};
e.S = function() {
  if (this.v != this.g.length) {
    for (var a = 0, b = 0;a < this.g.length;) {
      var c = this.g[a];
      Object.prototype.hasOwnProperty.call(this.p, c) && (this.g[b++] = c);
      a++;
    }
    this.g.length = b;
  }
  if (this.v != this.g.length) {
    for (var d = {}, b = a = 0;a < this.g.length;) {
      c = this.g[a], Object.prototype.hasOwnProperty.call(d, c) || (this.g[b++] = c, d[c] = 1), a++;
    }
    this.g.length = b;
  }
};
e.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.p, a) ? this.p[a] : b;
};
e.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.p, a) || (this.v++, this.g.push(a), this.R++);
  this.p[a] = b;
};
e.Jc = function(a) {
  var b;
  a instanceof K ? (b = a.O(), a = a.qa()) : (b = Ja(a), a = Ia(a));
  for (var c = 0;c < b.length;c++) {
    this.set(b[c], a[c]);
  }
};
e.forEach = function(a, b) {
  for (var c = this.O(), d = 0;d < c.length;d++) {
    var f = c[d], g = this.get(f);
    a.call(b, g, f, this);
  }
};
e.clone = function() {
  return new K(this);
};
e.Ud = function(a) {
  this.S();
  var b = 0, c = this.g, d = this.p, f = this.R, g = this, h = new pb;
  h.next = function() {
    for (;;) {
      if (f != g.R) {
        throw Error("The map has changed since the iterator was created");
      }
      if (b >= c.length) {
        throw ob;
      }
      var h = c[b++];
      return a ? h : d[h];
    }
  };
  return h;
};
var rb = function(a) {
  if ("function" == typeof a.qa) {
    return a.qa();
  }
  if (q(a)) {
    return a.split("");
  }
  if (ea(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Ia(a);
}, sb = function(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (ea(a) || q(a)) {
      ya(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.O) {
        d = a.O();
      } else {
        if ("function" != typeof a.qa) {
          if (ea(a) || q(a)) {
            d = [];
            for (var f = a.length, g = 0;g < f;g++) {
              d.push(g);
            }
          } else {
            d = Ja(a);
          }
        } else {
          d = void 0;
        }
      }
      for (var f = rb(a), g = f.length, h = 0;h < g;h++) {
        b.call(c, f[h], d && d[h], a);
      }
    }
  }
};
var ub = function(a, b) {
  try {
    var c;
    var d = ba("window.location.href");
    if (q(a)) {
      c = {message:a, name:"Unknown error", lineNumber:"Not available", fileName:d, stack:"Not available"};
    } else {
      var f, g, h = !1;
      try {
        f = a.lineNumber || a.ee || "Not available";
      } catch (m) {
        f = "Not available", h = !0;
      }
      try {
        g = a.fileName || a.filename || a.sourceURL || k.$googDebugFname || d;
      } catch (E) {
        g = "Not available", h = !0;
      }
      c = !h && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:f, fileName:g, stack:a.stack || "Not available"};
    }
    return "Message: " + ra(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + ra(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ra(tb(b) + "-> ");
  } catch (Ca) {
    return "Exception trying to expose exception! You win, we lose. " + Ca;
  }
}, tb = function(a) {
  var b;
  b || (b = vb(a || arguments.callee.caller, []));
  return b;
}, vb = function(a, b) {
  var c = [];
  if (0 <= xa(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(wb(a) + "(");
      for (var d = a.arguments, f = 0;d && f < d.length;f++) {
        0 < f && c.push(", ");
        var g;
        g = d[f];
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
            g = (g = wb(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g;
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(vb(a.caller, b));
      } catch (h) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}, wb = function(a) {
  if (L[a]) {
    return L[a];
  }
  a = String(a);
  if (!L[a]) {
    var b = /function ([^\(]+)/.exec(a);
    L[a] = b ? b[1] : "[Anonymous]";
  }
  return L[a];
}, L = {};
var xb = function(a, b, c, d, f) {
  this.reset(a, b, c, d, f);
};
xb.prototype.Ha = null;
xb.prototype.Ga = null;
var yb = 0;
e = xb.prototype;
e.reset = function(a, b, c, d, f) {
  "number" == typeof f || yb++;
  this.cd = d || ha();
  this.C = a;
  this.bd = b;
  this.ad = c;
  delete this.Ha;
  delete this.Ga;
};
e.rb = function() {
  return this.ad;
};
e.Oc = function() {
  return this.Ha;
};
e.md = function(a) {
  this.Ha = a;
};
e.Pc = function() {
  return this.Ga;
};
e.nd = function(a) {
  this.Ga = a;
};
e.Ca = function() {
  return this.C;
};
e.ca = function(a) {
  this.C = a;
};
e.getMessage = function() {
  return this.bd;
};
e.yb = function() {
  return this.cd;
};
var M = function(a) {
  this.ub = a;
  this.o = this.Fa = this.C = this.t = null;
}, N = function(a, b) {
  this.name = a;
  this.value = b;
};
N.prototype.toString = function() {
  return this.name;
};
var zb = new N("SHOUT", 1200), Ab = new N("SEVERE", 1E3), Bb = new N("WARNING", 900), Cb = new N("INFO", 800), Db = new N("CONFIG", 700), Eb = new N("FINE", 500), Fb = new N("FINER", 400);
e = M.prototype;
e.getName = function() {
  return this.ub;
};
e.kd = function(a) {
  this.o || (this.o = []);
  this.o.push(a);
};
e.ld = function(a) {
  var b = this.o;
  return!!b && Ba(b, a);
};
e.getParent = function() {
  return this.t;
};
e.getChildren = function() {
  this.Fa || (this.Fa = {});
  return this.Fa;
};
e.ca = function(a) {
  this.C = a;
};
e.Ca = function() {
  return this.C;
};
e.Kb = function() {
  if (this.C) {
    return this.C;
  }
  if (this.t) {
    return this.t.Kb();
  }
  va("Root logger has no level set.");
  return null;
};
e.vd = function(a) {
  return a.value >= this.Kb().value;
};
e.log = function(a, b, c) {
  this.vd(a) && (s(b) && (b = b()), this.td(this.Lb(a, b, c, M.prototype.log)));
};
e.Lb = function(a, b, c, d) {
  a = new xb(a, String(b), this.ub);
  c && (a.md(c), a.nd(ub(c, d || M.prototype.Lb)));
  return a;
};
e.kb = function(a, b) {
  this.log(Ab, a, b);
};
e.bb = function(a, b) {
  this.log(Bb, a, b);
};
e.info = function(a, b) {
  this.log(Cb, a, b);
};
e.config = function(a, b) {
  this.log(Db, a, b);
};
e.Yd = function(a, b) {
  this.log(Eb, a, b);
};
e.td = function(a) {
  var b = "log:" + a.getMessage();
  k.console && (k.console.timeStamp ? k.console.timeStamp(b) : k.console.markTimeline && k.console.markTimeline(b));
  k.msWriteProfilerMark && k.msWriteProfilerMark(b);
  for (b = this;b;) {
    b.Wd(a), b = b.getParent();
  }
};
e.Wd = function(a) {
  if (this.o) {
    for (var b = 0, c;c = this.o[b];b++) {
      c(a);
    }
  }
};
e.Jd = function(a) {
  this.t = a;
};
e.Gd = function(a, b) {
  this.getChildren()[a] = b;
};
var Gb = {}, Hb = null, Ib = function() {
  Hb || (Hb = new M(""), Gb[""] = Hb, Hb.ca(Db));
}, Jb = function() {
  Ib();
  return Hb;
}, Kb = function(a) {
  Ib();
  var b;
  if (!(b = Gb[a])) {
    b = new M(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Kb(a.substr(0, c));
    c.Gd(d, b);
    b.Jd(c);
    Gb[a] = b;
  }
  return b;
};
var O = function(a, b) {
  var c = Kb(a);
  b && c && c.ca(b);
  return c;
}, P = function(a, b, c) {
  a && a.Yd(b, c);
};
chrome.i18n.getMessage("4014224501758376361", ["{{receiverName}}"]);
var Lb = chrome.i18n.getMessage("6046507125919556913"), Mb = chrome.i18n.getMessage("1189144544819350763"), Nb = chrome.i18n.getMessage("3430817026795535765"), Ob = chrome.i18n.getMessage("5056298333685549098", ["{{v2AppDomain}}"]), Pb = chrome.i18n.getMessage("7344649529753624682", ["{{v2AppDomain}}"]), Qb = chrome.i18n.getMessage("3278102219211539720"), Rb = chrome.i18n.getMessage("7484752158248863804"), Sb = chrome.i18n.getMessage("1717149362663359343", ["{{v2AppDomain}}"]);
chrome.i18n.getMessage("4089994756445820175");
chrome.i18n.getMessage("780135806192376347");
chrome.i18n.getMessage("2438859709710567679");
chrome.i18n.getMessage("2076488708707463944");
chrome.i18n.getMessage("3996247341169314250");
chrome.i18n.getMessage("7053128562708856478");
chrome.i18n.getMessage("8500110749168055241");
chrome.i18n.getMessage("3844709005265884931");
chrome.i18n.getMessage("4224760847878375792");
chrome.i18n.getMessage("4584454172263179470");
chrome.i18n.getMessage("5823878688587296398");
chrome.i18n.getMessage("7008828272760191653");
chrome.i18n.getMessage("2377419936291389581");
chrome.i18n.getMessage("4324962226715124466");
chrome.i18n.getMessage("6039331491778328245");
chrome.i18n.getMessage("8887833628383960193");
chrome.i18n.getMessage("6118473811359442709");
chrome.i18n.getMessage("4272010402571776761");
chrome.i18n.getMessage("482442943064110817");
chrome.i18n.getMessage("5745355507138230213");
chrome.i18n.getMessage("7029426286291560071");
chrome.i18n.getMessage("8189622236075700665");
chrome.i18n.getMessage("6018881802001125637");
chrome.i18n.getMessage("4865676252029097872");
chrome.i18n.getMessage("6988652234001902672");
chrome.i18n.getMessage("6295154563386647404", ["{{attemptNumber}}"]);
var Tb = chrome.i18n.getMessage("6236792503803747284"), Ub = chrome.i18n.getMessage("3681271501407987946"), Vb = chrome.i18n.getMessage("1403598074357445300");
chrome.i18n.getMessage("8700054488486244094");
chrome.i18n.getMessage("7786163844034528352");
chrome.i18n.getMessage("3202350311251778009");
chrome.i18n.getMessage("8304164664901068767");
chrome.i18n.getMessage("6392731103614271560");
var Wb = chrome.i18n.getMessage("3203240389500117801"), Xb = chrome.i18n.getMessage("5590598097041702454");
chrome.i18n.getMessage("1878364533704855528");
var Yb = function(a, b, c, d, f, g, h, m, E) {
  this.id = a;
  this.name = b;
  this.videoWidth = c;
  this.videoHeight = d;
  this.videoResolution = c + "x" + d;
  this.maxFrameRate = f;
  this.minVideoBitrate = g;
  this.maxVideoBitrate = h;
  this.videoQuality = m;
  this.audioBitrate = E;
}, Q = new Yb("high", Ub, 1280, 720, 30, 2E3, 2500, 56, 128), Zb = null != B && -1 != B.indexOf("CrOS") && 0 <= x(jb, "37"), $b = [new Yb("highest", Vb, 1280, 720, 30, 4E3, 5E3, 56, 128), Q, new Yb("low", Tb, Zb ? 848 : 854, 480, 30, 750, 1500, 56, 128)];
var ac = function() {
  this.videoBitrate = Q.maxVideoBitrate;
  this.minVideoBitrate = Q.minVideoBitrate;
  this.maxVideoBitrate = Q.maxVideoBitrate;
  this.videoQuality = Q.videoQuality;
  this.minWidth = Q.videoWidth;
  this.minHeight = Q.videoHeight;
  this.audioBitrate = Q.audioBitrate;
  this.bufferedMode = "on";
  this.bufferSizeMillis = 500;
  this.maxCastLatencyMillis = 400;
  this.maxFrameRate = Q.maxFrameRate;
  this.preferredVideoCodec = "CAST1";
};
ac.prototype.update = function(a) {
  for (var b in this) {
    s(this[b]) || (null != a[b] && p(this[b]) == p(a[b]) ? this[b] = a[b] : O("cv.MirrorTabSettings").bb("Failed to load mirror settings for key [" + b + "]:" + a[b]));
  }
};
var bc = function(a) {
  k.setTimeout(function() {
    throw a;
  }, 0);
}, cc, dc = function() {
  var a = k.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = t(function(a) {
      if (a.origin == d || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a && -1 == B.indexOf("Trident") && -1 == B.indexOf("MSIE")) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      c = c.next;
      var a = c.Rb;
      c.Rb = null;
      a();
    };
    return function(a) {
      d.next = {Rb:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    k.setTimeout(a, 0);
  };
};
var jc = function(a, b) {
  ec || fc();
  gc || (ec(), gc = !0);
  hc.push(new ic(a, b));
}, ec, fc = function() {
  if (k.Promise && k.Promise.resolve) {
    var a = k.Promise.resolve();
    ec = function() {
      a.then(kc);
    };
  } else {
    ec = function() {
      var a = kc;
      !s(k.setImmediate) || k.Window && k.Window.prototype.setImmediate == k.setImmediate ? (cc || (cc = dc()), cc(a)) : k.setImmediate(a);
    };
  }
}, gc = !1, hc = [], kc = function() {
  for (;hc.length;) {
    var a = hc;
    hc = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.Zd.call(c.scope);
      } catch (d) {
        bc(d);
      }
    }
  }
  gc = !1;
}, ic = function(a, b) {
  this.Zd = a;
  this.scope = b;
};
var lc = function(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = !0;
};
var mc = function(a, b) {
  this.f = 0;
  this.lb = void 0;
  this.k = this.t = null;
  this.fa = this.Aa = !1;
  try {
    var c = this;
    a.call(b, function(a) {
      c.J(2, a);
    }, function(a) {
      if (!(a instanceof R)) {
        try {
          if (a instanceof Error) {
            throw a;
          }
          throw Error("Promise rejected.");
        } catch (b) {
        }
      }
      c.J(3, a);
    });
  } catch (d) {
    this.J(3, d);
  }
};
mc.prototype.then = function(a, b, c) {
  null != a && wa(a, "opt_onFulfilled should be a function.");
  null != b && wa(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  return this.Vd(s(a) ? a : null, s(b) ? b : null, c);
};
lc(mc);
e = mc.prototype;
e.cancel = function(a) {
  0 == this.f && jc(function() {
    var b = new R(a);
    this.vb(b);
  }, this);
};
e.vb = function(a) {
  0 == this.f && (this.t ? this.t.Uc(this, a) : this.J(3, a));
};
e.Uc = function(a, b) {
  if (this.k) {
    for (var c = 0, d = -1, f = 0, g;g = this.k[f];f++) {
      if (g = g.ga) {
        if (c++, g == a && (d = f), 0 <= d && 1 < c) {
          break;
        }
      }
    }
    0 <= d && (0 == this.f && 1 == c ? this.vb(b) : (c = this.k.splice(d, 1)[0], this.sb(c, 3, b)));
  }
};
e.$c = function(a) {
  this.k && this.k.length || 2 != this.f && 3 != this.f || this.tb();
  this.k || (this.k = []);
  this.k.push(a);
};
e.Vd = function(a, b, c) {
  var d = {ga:null, Eb:null, Fb:null};
  d.ga = new mc(function(f, g) {
    d.Eb = a ? function(b) {
      try {
        var d = a.call(c, b);
        f(d);
      } catch (E) {
        g(E);
      }
    } : f;
    d.Fb = b ? function(a) {
      try {
        var d = b.call(c, a);
        !l(d) && a instanceof R ? g(a) : f(d);
      } catch (E) {
        g(E);
      }
    } : g;
  });
  d.ga.t = this;
  this.$c(d);
  return d.ga;
};
e.Bb = function(a) {
  y(1 == this.f);
  this.f = 0;
  this.J(2, a);
};
e.Cb = function(a) {
  y(1 == this.f);
  this.f = 0;
  this.J(3, a);
};
e.J = function(a, b) {
  if (0 == this.f) {
    if (this == b) {
      a = 3, b = new TypeError("Promise cannot resolve to itself");
    } else {
      var c;
      if (b) {
        try {
          c = !!b.$goog_Thenable;
        } catch (d) {
          c = !1;
        }
      } else {
        c = !1;
      }
      if (c) {
        this.f = 1;
        b.then(this.Bb, this.Cb, this);
        return;
      }
      c = typeof b;
      if ("object" == c && null != b || "function" == c) {
        try {
          var f = b.then;
          if (s(f)) {
            this.Xc(b, f);
            return;
          }
        } catch (g) {
          a = 3, b = g;
        }
      }
    }
    this.lb = b;
    this.f = a;
    this.tb();
    3 != a || b instanceof R || nc(this, b);
  }
};
e.Xc = function(a, b) {
  this.f = 1;
  var c = this, d = !1, f = function(a) {
    d || (d = !0, c.Bb(a));
  }, g = function(a) {
    d || (d = !0, c.Cb(a));
  };
  try {
    b.call(a, f, g);
  } catch (h) {
    g(h);
  }
};
e.tb = function() {
  this.Aa || (this.Aa = !0, jc(this.Ad, this));
};
e.Ad = function() {
  for (;this.k && this.k.length;) {
    var a = this.k;
    this.k = [];
    for (var b = 0;b < a.length;b++) {
      this.sb(a[b], this.f, this.lb);
    }
  }
  this.Aa = !1;
};
e.sb = function(a, b, c) {
  2 == b ? a.Eb(c) : (this.sd(), a.Fb(c));
};
e.yd = function() {
};
e.sd = function() {
  var a;
  for (a = this;a && a.fa;a = a.t) {
    a.fa = !1;
  }
};
var nc = function(a, b) {
  a.fa = !0;
  jc(function() {
    a.fa && (a.yd(b), oc.call(null, b));
  });
}, oc = bc, R = function(a) {
  w.call(this, a);
};
v(R, w);
R.prototype.name = "cancel";
var pc = function() {
};
v(pc, Error);
var qc = function() {
  this.f = "pending";
  this.o = [];
  this.H = this.Tc = void 0;
};
lc(qc);
var rc = function() {
  w.call(this, "Multiple attempts to set the state of this Result");
};
v(rc, w);
e = qc.prototype;
e.getState = function() {
  return this.f;
};
e.ud = function() {
  return this.Tc;
};
e.getError = function() {
  return this.H;
};
e.xd = function(a, b) {
  this.Da() ? this.o.push({callback:a, scope:b || null}) : a.call(b, this);
};
e.Ed = function(a) {
  if (this.Da()) {
    this.H = a, this.f = "error", this.Vc();
  } else {
    if (!this.xb()) {
      throw new rc;
    }
  }
};
e.Vc = function() {
  var a = this.o;
  this.o = [];
  for (var b = 0;b < a.length;b++) {
    var c = a[b];
    c.callback.call(c.scope, this);
  }
};
e.Da = function() {
  return "pending" == this.f;
};
e.cancel = function() {
  return this.Da() ? (this.Ed(new pc), !0) : !1;
};
e.xb = function() {
  return "error" == this.f && this.H instanceof pc;
};
e.then = function(a, b, c) {
  var d, f, g = new mc(function(a, b) {
    d = a;
    f = b;
  });
  this.xd(function(a) {
    a.xb() ? g.cancel() : "success" == a.getState() ? d(a.ud()) : "error" == a.getState() && f(a.getError());
  });
  return g.then(a, b, c);
};
var sc = function() {
  this.hasNetworkSoftware = this.networkDescription = this.gpu = this.cpu = this.googleUsername = null;
};
var tc = function() {
  this.dismissClicks = this.earliestTimeToShowWarning = this.sessionsBeforeWarning = 0;
  this.enhancedCastingNotificationDismissed = this.statsCollectNotificationDismissed = this.intelBadCpuWarningDismissed = this.castAppNotificationDismissed = !1;
};
var uc = function() {
  this.e = O("cv.Settings");
  this.l = {};
  this.Lc();
};
da(uc);
uc.prototype.Lc = function() {
  this.l.mirrorSettings = new ac;
  this.l.feedback = new sc;
  this.l.userNotification = new tc;
  this.l.siteTokens = {};
  this.l.sendStatsEnabled = !0;
  this.l.fixedIps = [];
  this.l.enableCloud = !1;
  this.l.cloudDevice = {};
  this.l.enableHangouts = !1;
  this.l.hangoutsDefaultDomain = "";
  this.l.lastMirrorDataAutoSubmitTimeMillis = 0;
};
uc.prototype.Bd = function() {
  return this.l.sendStatsEnabled;
};
var S = function(a, b) {
  uc.ra().Bd() && window._gaq && window._gaq.push(["_trackEvent", "UI", a, b, void 0]);
};
Ma("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var vc = /<[^>]*>|&[^;]+;/g, wc = function(a, b) {
  return b ? a.replace(vc, "") : a;
}, yc = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/, zc = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/, Ac = /^http:\/\/.*/, Bc = /\s+/, Cc = /\d/;
Ma("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
Ma("link", "script", "style");
var Dc = function(a) {
  this.Xd = "number" == typeof a ? 0 < a ? 1 : 0 > a ? -1 : null : null == a ? null : a ? -1 : 1;
};
Dc.prototype.Hd = function(a, b) {
  for (var c = 0, d = 0, f = !1, g = wc(a, b).split(Bc), h = 0;h < g.length;h++) {
    var m = g[h];
    zc.test(wc(m, void 0)) ? (c++, d++) : Ac.test(m) ? f = !0 : yc.test(wc(m, void 0)) ? d++ : Cc.test(m) && (f = !0);
  }
  return 0 == d ? f ? 1 : 0 : .4 < c / d ? -1 : 1;
};
Dc.prototype.od = function(a, b) {
  return this.Id(this.Hd(a, b));
};
Dc.prototype.Id = function(a) {
  return-1 == (0 == a ? this.Xd : a) ? "rtl" : "ltr";
};
if ("undefined" != typeof angular) {
  var Ec = angular.module("chrome_i18n", []);
  chrome.runtime && chrome.runtime.getManifest && chrome.runtime.getManifest().default_locale && Ec.directive("angularMessage", function() {
    return{restrict:"E", transclude:"element", replace:!0, controller:["$scope", function(a) {
      this.Ja = this.Ka = null;
      a.dirForText = t(function(a) {
        this.Ka || (this.Ka = chrome.i18n.getMessage("@@bidi_dir") || "ltr");
        this.Ja || (this.Ja = new Dc("rtl" == this.Ka));
        return this.Ja.od(a || "");
      }, this);
    }], compile:function(a, b) {
      var c = b.key, d = null, f = document.createElement("amr");
      c && !c.match(/^\d+$/) && (c = chrome.i18n.getMessage(c), null == c && f.setAttribute("id", "missing"));
      if (c) {
        var g = chrome.i18n.getMessage(c + "_ph"), d = [];
        if (null != g) {
          for (d = g.split("\ue000"), g = 0;g < d.length;++g) {
            d[g] = d[g].replace(/^{{(.*)}}$/, '<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');
          }
        }
        d = chrome.i18n.getMessage(c, d);
      } else {
        f.setAttribute("r", "nokey");
      }
      d ? f.innerHTML = d : (f.setAttribute("tl", "false"), f.innerHTML = a.html());
      a.replaceWith(f);
    }};
  });
}
;chrome.cast.media.mb = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
n("chrome.cast.media.MediaCommand", chrome.cast.media.mb, void 0);
chrome.cast.media.Ld = {GENERIC:0, TV_SHOW:1, MOVIE:2, MUSIC_TRACK:3, PHOTO:4};
n("chrome.cast.media.MetadataType", chrome.cast.media.Ld, void 0);
chrome.cast.media.u = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
n("chrome.cast.media.PlayerState", chrome.cast.media.u, void 0);
chrome.cast.media.Md = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
n("chrome.cast.media.ResumeState", chrome.cast.media.Md, void 0);
chrome.cast.media.Nd = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
n("chrome.cast.media.StreamType", chrome.cast.media.Nd, void 0);
chrome.cast.media.Kd = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
n("chrome.cast.media.IdleReason", chrome.cast.media.Kd, void 0);
chrome.cast.media.Td = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
n("chrome.cast.media.TrackType", chrome.cast.media.Td, void 0);
chrome.cast.media.Rd = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
n("chrome.cast.media.TextTrackType", chrome.cast.media.Rd, void 0);
chrome.cast.media.Od = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
n("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.Od, void 0);
chrome.cast.media.Sd = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
n("chrome.cast.media.TextTrackWindowType", chrome.cast.media.Sd, void 0);
chrome.cast.media.Pd = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
n("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.Pd, void 0);
chrome.cast.media.Qd = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
n("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.Qd, void 0);
var Fc = function(a, b) {
  this.type = a;
  this.message = b;
}, Gc = function(a, b, c, d) {
  this.id = a;
  this.uniqueId = b;
  this.name = c;
  this.receiverType = d;
  this.isInLaunch = this.manuallyAdded = !1;
  this.muted = null;
}, Hc = function(a, b) {
  this.receiver = a;
  this.activity = b;
}, Ic = function(a, b) {
  this.id = a;
  this.isDefaultAction = b;
}, Jc = function(a, b, c, d, f) {
  this.statsCollectNotificationDismissed = r(c) ? c : !0;
  this.sendUsageEnabled = r(d) ? d : !0;
  this.castAppNotificationDismissed = r(a) ? a : !1;
  this.mirrorQualityId = b || Q.id;
  this.hangoutsEnabled = f || !1;
}, Kc = function(a, b, c, d, f, g, h) {
  this.receiverActs = a || [];
  this.issue = b;
  this.isV1AppInTab = g || !1;
  this.isV2AppInTab = !!h;
  this.v2AppDomain = h || null;
  this.currentActivity = c;
  this.desktopActivity = d;
  this.settings = f || new Jc;
};
var V = function() {
  this.La = this.La;
  this.Cd = this.Cd;
};
V.prototype.La = !1;
V.prototype.isDisposed = function() {
  return this.La;
};
var W = function(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.F = !1;
  this.qb = !0;
};
W.prototype.stopPropagation = function() {
  this.F = !0;
};
W.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.qb = !1;
};
var Lc = function(a) {
  Lc[" "](a);
  return a;
};
Lc[" "] = ca;
var Mc = !C || C && 9 <= Va, Nc = C && !F("9");
!D || F("528");
Qa && F("1.9b") || C && F("8") || Pa && F("9.5") || D && F("528");
Qa && !F("8") || C && F("9");
var X = function(a, b) {
  W.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.V = this.state = null;
  a && this.init(a, b);
};
v(X, W);
X.prototype.init = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (Qa) {
      var f;
      t: {
        try {
          Lc(d.nodeName);
          f = !0;
          break t;
        } catch (g) {
        }
        f = !1;
      }
      f || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = D || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = D || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.V = a;
  a.defaultPrevented && this.preventDefault();
};
X.prototype.stopPropagation = function() {
  X.Mb.stopPropagation.call(this);
  this.V.stopPropagation ? this.V.stopPropagation() : this.V.cancelBubble = !0;
};
X.prototype.preventDefault = function() {
  X.Mb.preventDefault.call(this);
  var a = this.V;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Nc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Oc = "closure_listenable_" + (1E6 * Math.random() | 0), Pc = 0;
var Qc = function(a, b, c, d, f, g) {
  this.D = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.ia = g;
  this.key = ++Pc;
  this.removed = this.ha = !1;
};
Qc.prototype.ma = function() {
  this.removed = !0;
  this.ia = this.src = this.proxy = this.D = null;
};
var Rc = function(a) {
  this.src = a;
  this.i = {};
  this.U = 0;
};
e = Rc.prototype;
e.fd = function() {
  return this.U;
};
e.add = function(a, b, c, d, f) {
  var g = a.toString();
  a = this.i[g];
  a || (a = this.i[g] = [], this.U++);
  var h = Sc(a, b, d, f);
  -1 < h ? (b = a[h], c || (b.ha = !1)) : (b = new Qc(b, null, this.src, g, !!d, f), b.ha = c, a.push(b));
  return b;
};
e.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.i)) {
    return!1;
  }
  var f = this.i[a];
  b = Sc(f, b, c, d);
  return-1 < b ? (f[b].ma(), Aa(f, b), 0 == f.length && (delete this.i[a], this.U--), !0) : !1;
};
e.Hb = function(a) {
  var b = a.type;
  if (!(b in this.i)) {
    return!1;
  }
  var c = Ba(this.i[b], a);
  c && (a.ma(), 0 == this.i[b].length && (delete this.i[b], this.U--));
  return c;
};
e.removeAll = function(a) {
  a = a && a.toString();
  var b = 0, c;
  for (c in this.i) {
    if (!a || c == a) {
      for (var d = this.i[c], f = 0;f < d.length;f++) {
        ++b, d[f].ma();
      }
      delete this.i[c];
      this.U--;
    }
  }
  return b;
};
e.Ia = function(a, b, c, d) {
  a = this.i[a.toString()];
  var f = -1;
  a && (f = Sc(a, b, c, d));
  return-1 < f ? a[f] : null;
};
e.hasListener = function(a, b) {
  var c = l(a), d = c ? a.toString() : "", f = l(b);
  return Ga(this.i, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(c && a[h].type != d || f && a[h].capture != b)) {
        return!0;
      }
    }
    return!1;
  });
};
var Sc = function(a, b, c, d) {
  for (var f = 0;f < a.length;++f) {
    var g = a[f];
    if (!g.removed && g.D == b && g.capture == !!c && g.ia == d) {
      return f;
    }
  }
  return-1;
};
var Tc = "closure_lm_" + (1E6 * Math.random() | 0), Uc = {}, Vc = 0, Wc = function(a, b, c, d, f) {
  if ("array" == p(b)) {
    for (var g = 0;g < b.length;g++) {
      Wc(a, b[g], c, d, f);
    }
    return null;
  }
  c = Xc(c);
  return a && a[Oc] ? a.listen(b, c, d, f) : Yc(a, b, c, !1, d, f);
}, Yc = function(a, b, c, d, f, g) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!f, m = Zc(a);
  m || (a[Tc] = m = new Rc(a));
  c = m.add(b, c, d, f, g);
  if (c.proxy) {
    return c;
  }
  d = $c();
  c.proxy = d;
  d.src = a;
  d.D = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(ad(b.toString()), d);
  Vc++;
  return c;
}, $c = function() {
  var a = bd, b = Mc ? function(c) {
    return a.call(b.src, b.D, c);
  } : function(c) {
    c = a.call(b.src, b.D, c);
    if (!c) {
      return c;
    }
  };
  return b;
}, cd = function(a, b, c, d, f) {
  if ("array" == p(b)) {
    for (var g = 0;g < b.length;g++) {
      cd(a, b[g], c, d, f);
    }
    return null;
  }
  c = Xc(c);
  return a && a[Oc] ? a.ae(b, c, d, f) : Yc(a, b, c, !0, d, f);
}, dd = function(a, b, c, d, f) {
  if ("array" == p(b)) {
    for (var g = 0;g < b.length;g++) {
      dd(a, b[g], c, d, f);
    }
    return null;
  }
  c = Xc(c);
  if (a && a[Oc]) {
    return a.Pb(b, c, d, f);
  }
  if (!a) {
    return!1;
  }
  if (a = Zc(a)) {
    if (b = a.Ia(b, c, !!d, f)) {
      return ed(b);
    }
  }
  return!1;
}, ed = function(a) {
  if ("number" == typeof a || !a || a.removed) {
    return!1;
  }
  var b = a.src;
  if (b && b[Oc]) {
    return b.Ba(a);
  }
  var c = a.type, d = a.proxy;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(ad(c), d);
  Vc--;
  (c = Zc(b)) ? (c.Hb(a), 0 == c.fd() && (c.src = null, b[Tc] = null)) : a.ma();
  return!0;
}, ad = function(a) {
  return a in Uc ? Uc[a] : Uc[a] = "on" + a;
}, gd = function(a, b, c, d) {
  var f = 1;
  if (a = Zc(a)) {
    if (b = a.i[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var g = b[a];
        g && g.capture == c && !g.removed && (f &= !1 !== fd(g, d));
      }
    }
  }
  return Boolean(f);
}, fd = function(a, b) {
  var c = a.D, d = a.ia || a.src;
  a.ha && ed(a);
  return c.call(d, b);
}, bd = function(a, b) {
  if (a.removed) {
    return!0;
  }
  if (!Mc) {
    var c = b || ba("window.event"), d = new X(c, this), f = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      t: {
        var g = !1;
        if (0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break t;
          } catch (h) {
            g = !0;
          }
        }
        if (g || void 0 == c.returnValue) {
          c.returnValue = !0;
        }
      }
      c = [];
      for (g = d.currentTarget;g;g = g.parentNode) {
        c.push(g);
      }
      for (var g = a.type, m = c.length - 1;!d.F && 0 <= m;m--) {
        d.currentTarget = c[m], f &= gd(c[m], g, !0, d);
      }
      for (m = 0;!d.F && m < c.length;m++) {
        d.currentTarget = c[m], f &= gd(c[m], g, !1, d);
      }
    }
    return f;
  }
  return fd(a, new X(b, this));
}, Zc = function(a) {
  a = a[Tc];
  return a instanceof Rc ? a : null;
}, hd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Xc = function(a) {
  y(a, "Listener can not be null.");
  if (s(a)) {
    return a;
  }
  y(a.handleEvent, "An object listener must have handleEvent method.");
  a[hd] || (a[hd] = function(b) {
    return a.handleEvent(b);
  });
  return a[hd];
};
var id = function() {
  V.call(this);
  this.w = new Rc(this);
  this.Yc = this;
  this.jd = null;
};
v(id, V);
id.prototype[Oc] = !0;
e = id.prototype;
e.Ib = function() {
  return this.jd;
};
e.addEventListener = function(a, b, c, d) {
  Wc(this, a, b, c, d);
};
e.removeEventListener = function(a, b, c, d) {
  dd(this, a, b, c, d);
};
e.dispatchEvent = function(a) {
  this.Db();
  var b, c = this.Ib();
  if (c) {
    b = [];
    for (var d = 1;c;c = c.Ib()) {
      b.push(c), y(1E3 > ++d, "infinite loop");
    }
  }
  c = this.Yc;
  d = a.type || a;
  if (q(a)) {
    a = new W(a, c);
  } else {
    if (a instanceof W) {
      a.target = a.target || c;
    } else {
      var f = a;
      a = new W(d, c);
      La(a, f);
    }
  }
  var f = !0, g;
  if (b) {
    for (var h = b.length - 1;!a.F && 0 <= h;h--) {
      g = a.currentTarget = b[h], f = g.pa(d, !0, a) && f;
    }
  }
  a.F || (g = a.currentTarget = c, f = g.pa(d, !0, a) && f, a.F || (f = g.pa(d, !1, a) && f));
  if (b) {
    for (h = 0;!a.F && h < b.length;h++) {
      g = a.currentTarget = b[h], f = g.pa(d, !1, a) && f;
    }
  }
  return f;
};
e.listen = function(a, b, c, d) {
  this.Db();
  return this.w.add(String(a), b, !1, c, d);
};
e.ae = function(a, b, c, d) {
  return this.w.add(String(a), b, !0, c, d);
};
e.Pb = function(a, b, c, d) {
  return this.w.remove(String(a), b, c, d);
};
e.Ba = function(a) {
  return this.w.Hb(a);
};
e.pa = function(a, b, c) {
  a = this.w.i[String(a)];
  if (!a) {
    return!0;
  }
  a = a.concat();
  for (var d = !0, f = 0;f < a.length;++f) {
    var g = a[f];
    if (g && !g.removed && g.capture == b) {
      var h = g.D, m = g.ia || g.src;
      g.ha && this.Ba(g);
      d = !1 !== h.call(m, c) && d;
    }
  }
  return d && 0 != c.qb;
};
e.Ia = function(a, b, c, d) {
  return this.w.Ia(String(a), b, c, d);
};
e.hasListener = function(a, b) {
  return this.w.hasListener(l(a) ? String(a) : void 0, b);
};
e.Db = function() {
  y(this.w, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
var jd = function(a, b, c) {
  if (s(a)) {
    c && (a = t(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = t(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : k.setTimeout(a, b || 0);
};
var kd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, ld = D, md = function(a, b) {
  if (ld) {
    ld = !1;
    var c = k.location;
    if (c) {
      var d = c.href;
      if (d && (d = (d = md(3, d)) ? decodeURI(d) : d) && d != c.hostname) {
        throw ld = !0, Error();
      }
    }
  }
  return b.match(kd)[a] || null;
};
var nd = O("cv.TabUtils"), od = null, pd = function(a) {
  a != chrome.windows.WINDOW_ID_NONE && (P(nd, "Newly focused window ID: " + a), od = a);
}, qd = function() {
  chrome.windows.getLastFocused(function(a) {
    od || (od = a.id);
  });
  chrome.windows.onFocusChanged.addListener(pd);
}, sd = function(a, b) {
  chrome.tabs.get(a, function(a) {
    rd(a, b);
  });
}, rd = function(a, b) {
  if (a) {
    var c = a.id;
    chrome.windows.update(a.windowId, {focused:!0}, function() {
      chrome.tabs.update(c, {active:!0}, b);
    });
  } else {
    b(null);
  }
}, td = function(a, b, c) {
  chrome.tabs.query({url:a}, function(a) {
    a && 0 < a.length ? rd(a[0], c) : chrome.tabs.create({url:b}, c);
  });
};
var ud = function() {
};
ud.prototype.Qb = null;
ud.prototype.$a = function() {
  return this.Qb || (this.Qb = this.Fd());
};
var vd, wd = function() {
};
v(wd, ud);
wd.prototype.Nb = function() {
  var a = this.Sb();
  return a ? new ActiveXObject(a) : new XMLHttpRequest;
};
wd.prototype.Fd = function() {
  var a = {};
  this.Sb() && (a[0] = !0, a[1] = !0);
  return a;
};
wd.prototype.Sb = function() {
  if (!this.Tb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        return new ActiveXObject(c), this.Tb = c;
      } catch (d) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return this.Tb;
};
vd = new wd;
var Y = function(a) {
  id.call(this);
  this.headers = new K;
  this.$ = a || null;
  this.G = !1;
  this.Y = this.b = null;
  this.M = this.Ua = this.Z = "";
  this.P = this.va = this.X = this.wa = !1;
  this.I = 0;
  this.aa = null;
  this.N = "";
  this.ba = this.ec = !1;
};
v(Y, id);
Y.prototype.e = O("goog.net.XhrIo");
var xd = /^https?$/i, yd = ["POST", "PUT"];
Y.prototype.rd = function(a) {
  this.I = Math.max(0, a);
};
Y.prototype.qd = function(a) {
  this.N = a;
};
Y.prototype.send = function(a, b, c, d) {
  if (this.b) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Z + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.Z = a;
  this.M = "";
  this.Ua = b;
  this.wa = !1;
  this.G = !0;
  this.b = this.oc();
  this.Y = this.$ ? this.$.$a() : vd.$a();
  this.b.onreadystatechange = t(this.Sa, this);
  try {
    P(this.e, this.r("Opening Xhr")), this.va = !0, this.b.open(b, String(a), !0), this.va = !1;
  } catch (f) {
    P(this.e, this.r("Error opening Xhr: " + f.message));
    this.H(5, f);
    return;
  }
  a = c || "";
  var g = this.headers.clone();
  d && sb(d, function(a, b) {
    g.set(b, a);
  });
  d = A(g.O(), zd);
  c = k.FormData && a instanceof k.FormData;
  !(0 <= xa(yd, b)) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  g.forEach(function(a, b) {
    this.b.setRequestHeader(b, a);
  }, this);
  this.N && (this.b.responseType = this.N);
  "withCredentials" in this.b && (this.b.withCredentials = this.ec);
  try {
    this.Xa(), 0 < this.I && (this.ba = Ad(this.b), P(this.e, this.r("Will abort after " + this.I + "ms if incomplete, xhr2 " + this.ba)), this.ba ? (this.b.timeout = this.I, this.b.ontimeout = t(this.ab, this)) : this.aa = jd(this.ab, this.I, this)), P(this.e, this.r("Sending request")), this.X = !0, this.b.send(a), this.X = !1;
  } catch (h) {
    P(this.e, this.r("Send error: " + h.message)), this.H(5, h);
  }
};
var Ad = function(a) {
  return C && F(9) && "number" == typeof a.timeout && l(a.ontimeout);
}, zd = function(a) {
  return "content-type" == a.toLowerCase();
};
e = Y.prototype;
e.oc = function() {
  return this.$ ? this.$.Nb() : vd.Nb();
};
e.ab = function() {
  "undefined" != typeof aa && this.b && (this.M = "Timed out after " + this.I + "ms, aborting", P(this.e, this.r(this.M)), this.dispatchEvent("timeout"), this.abort(8));
};
e.H = function(a, b) {
  this.G = !1;
  this.b && (this.P = !0, this.b.abort(), this.P = !1);
  this.M = b;
  this.gb();
  this.ya();
};
e.gb = function() {
  this.wa || (this.wa = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"));
};
e.abort = function() {
  this.b && this.G && (P(this.e, this.r("Aborting")), this.G = !1, this.P = !0, this.b.abort(), this.P = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.ya());
};
e.Sa = function() {
  this.isDisposed() || (this.va || this.X || this.P ? this.Jb() : this.ed());
};
e.ed = function() {
  this.Jb();
};
e.Jb = function() {
  if (this.G && "undefined" != typeof aa) {
    if (this.Y[1] && 4 == this.Q() && 2 == this.da()) {
      P(this.e, this.r("Local request error detected and ignored"));
    } else {
      if (this.X && 4 == this.Q()) {
        jd(this.Sa, 0, this);
      } else {
        if (this.dispatchEvent("readystatechange"), this.za()) {
          P(this.e, this.r("Request complete"));
          this.G = !1;
          try {
            this.jb() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : (this.M = this.Cc() + " [" + this.da() + "]", this.gb());
          } finally {
            this.ya();
          }
        }
      }
    }
  }
};
e.ya = function(a) {
  if (this.b) {
    this.Xa();
    var b = this.b, c = this.Y[0] ? ca : null;
    this.Y = this.b = null;
    a || this.dispatchEvent("ready");
    try {
      b.onreadystatechange = c;
    } catch (d) {
      (a = this.e) && a.kb("Problem encountered resetting onreadystatechange: " + d.message, void 0);
    }
  }
};
e.Xa = function() {
  this.b && this.ba && (this.b.ontimeout = null);
  "number" == typeof this.aa && (k.clearTimeout(this.aa), this.aa = null);
};
e.za = function() {
  return 4 == this.Q();
};
e.jb = function() {
  var a = this.da(), b;
  t: {
    switch(a) {
      case 200:
      ;
      case 201:
      ;
      case 202:
      ;
      case 204:
      ;
      case 206:
      ;
      case 304:
      ;
      case 1223:
        b = !0;
        break t;
      default:
        b = !1;
    }
  }
  return b || 0 === a && !this.zd();
};
e.zd = function() {
  var a = md(1, String(this.Z));
  !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
  return xd.test(a ? a.toLowerCase() : "");
};
e.Q = function() {
  return this.b ? this.b.readyState : 0;
};
e.da = function() {
  try {
    return 2 < this.Q() ? this.b.status : -1;
  } catch (a) {
    return-1;
  }
};
e.Cc = function() {
  try {
    return 2 < this.Q() ? this.b.statusText : "";
  } catch (a) {
    return P(this.e, "Can not get status: " + a.message), "";
  }
};
e.pd = function() {
  try {
    if (!this.b) {
      return null;
    }
    if ("response" in this.b) {
      return this.b.response;
    }
    switch(this.N) {
      case "":
      ;
      case "text":
        return this.b.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in this.b) {
          return this.b.mozResponseArrayBuffer;
        }
      ;
    }
    var a = this.e;
    a && a.kb("Response type " + this.N + " is not supported on this browser", void 0);
    return null;
  } catch (b) {
    return P(this.e, "Can not get response: " + b.message), null;
  }
};
e.getResponseHeader = function(a) {
  return this.b && this.za() ? this.b.getResponseHeader(a) : void 0;
};
e.getAllResponseHeaders = function() {
  return this.b && this.za() ? this.b.getAllResponseHeaders() : "";
};
e.r = function(a) {
  return a + " [" + this.Ua + " " + this.Z + " " + this.da() + "]";
};
var Bd = function(a) {
  td("http://support.google.com/chromecast/go*", a, function() {
    window.close();
  });
}, Cd = function(a) {
  "feedback.html" == a ? S("popup-choice-help") : "options.html" == a && S("choice-options");
  a = chrome.extension.getURL(a);
  td(a + "*", a, function() {
    window.close();
  });
}, Dd = function(a, b) {
  var c = new Y;
  c.qd("blob");
  c.rd(1500);
  cd(c, ["complete", "timeout"], function() {
    if (c.jb()) {
      var a = window.webkitURL.createObjectURL(c.pd());
      b(a);
    } else {
      b(null);
    }
  });
  c.send(a, "GET");
};
var Ed = function() {
};
Ed.prototype.getMessage = function(a, b) {
  return this.$d(a, b).message;
};
Ed.prototype.$d = function(a, b) {
  for (var c = [], d = {}, f = /{{(\w+?)}}/g, g = f.exec(a);null != g;) {
    b ? b[g[1]] && (d[g[1]] = b[g[1]]) : d[g[1]] = d[g[1]], g = f.exec(a);
  }
  for (var h in d) {
    h && (b && (a = a.replace(new RegExp("{{" + h + "}}", "g"), d[h])), c.push(h));
  }
  return{message:a, bindings:c};
};
da(Ed);
var Fd = function(a, b, c, d) {
  this.A = Ed.ra();
  this.activity = a;
  this.L = !!this.activity.mediaPlayerStatus;
  this.ea = this.activity.mediaPlayerStatus;
  this.Pa = this.L && 0 <= xa(this.ea.supportedCommands, chrome.cast.media.mb.PAUSE);
  this.Ma = this.L && (this.ea.playerState == chrome.cast.media.u.PAUSED || this.ea.playerState == chrome.cast.media.u.PLAYING);
  this.Zb = this.L && this.ea.playerState == chrome.cast.media.u.PAUSED ? "/data/play.png" : "/data/pause.png";
  this.Oa = "cast" == a.receiver.receiverType && r(a.receiver.muted);
  this.Yb = a.receiver.muted ? "/data/mute.png" : "/data/unmute.png";
  this.Na = "mirror_tab" == this.activity.activityType && this.activity.isLocal;
  this.Xb = "/data/mirror_quality.png";
  this.Qa = this.Dc(b, c);
  this.sa = "none" != b && 0 < this.Qa.length && "custom_app" != this.activity.activityType;
  this.Wb = this.Ec();
  this.$b = this.A.getMessage(Rb);
  this.Vb = d ? d.activityId == a.id : !1;
};
Fd.prototype.Dc = function(a, b) {
  switch(a) {
    case "create_session":
      return y(null != b, "Expecting v2 app domain "), this.A.getMessage(Sb, {v2AppDomain:b});
    case "cast_this_tab":
      return this.A.getMessage(Qb);
    case "cast_desktop":
      return this.A.getMessage(Nb);
    default:
      return "";
  }
};
Fd.prototype.Ec = function() {
  var a = this.activity.allowStop + this.sa, b = 330 - 35 * (this.Pa + this.Oa + this.Na);
  return 0 == a ? "0px" : Math.floor(b / a) + "px";
};
var Gd = function(a, b, c) {
  this.e = O("cv2.PopupActivityDetailCtrl");
  this.K = b;
  this.c = c;
  this.a = a;
  this.h = null;
  this.kc();
  a.$on("MODEL_UPDATE", t(this.B, this));
};
e = Gd.prototype;
e.B = function() {
  P(this.e, "on model update");
  this.W(this.c.j());
  this.a.$apply();
};
e.cc = function() {
  if (this.a.selectedActivity) {
    if (this.a.selectedActivity.iconUrl) {
      var a = this.a.selectedActivity.iconUrl;
      this.a.selectedActivity.iconUrl = "data/default_activity.png";
      "data/default_activity.png" != a && Dd(a, t(function(a) {
        a && (this.a.selectedActivity.iconUrl = a, this.a.$apply());
      }, this));
    } else {
      this.a.selectedActivity.iconUrl = "data/default_activity.png";
    }
  }
};
e.ic = function() {
  var a = this.a.selectedActivity;
  !a || !a.tabId || 0 > a.tabId || sd(a.tabId, function(a) {
    a && window.close();
  });
};
e.Ya = function(a, b) {
  return{activityId:a, data:b};
};
e.W = function(a) {
  this.a.selectedActivity = this.c.ua();
  this.a.selectedActivity && (this.a.isLaunching = this.c.ua().receiver.isInLaunch, this.cc(), this.h = new Fd(this.a.selectedActivity, this.c.ta(), a.v2AppDomain, a.issue), this.a.enableMediaControls = this.h.L, this.a.showPlayPause = this.h.Pa, this.a.enablePlayPause = this.h.Ma, this.a.playPauseIcon = this.h.Zb, this.a.showMuteUnmute = this.h.Oa, this.a.muteUnmuteIcon = this.h.Yb, this.a.showMirrorQuality = this.h.Na, this.a.mirrorQualityIcon = this.h.Xb, this.a.showCastAction = this.h.sa, this.a.castActionLabel = 
  this.h.Qa, this.a.largeButtonWidth = this.h.Wb, this.a.stopLabel = this.h.$b, this.a.hasActivityIssue = this.h.Vb, this.a.sharedState = this.a.sharedState || {}, this.a.sharedState.selectingMirrorQuality = this.a.sharedState.selectingMirrorQuality || !1, this.a.isV1AppInTab = a.isV1AppInTab, this.a.settings = a.settings, this.a.updateSettings = t(this.dc, this));
};
e.dc = function() {
  var a = this.c.j();
  a.settings.mirrorQualityId = this.a.settings.mirrorQualityId;
  this.c.sendRequest("update_settings", a.settings);
};
e.kc = function() {
  this.W(this.c.j());
  this.a.mirrorQualities = $b;
  this.a.onClickLearnCastEnabledPage = u(Bd, "http://support.google.com/chromecast/go/castenabledpage");
  this.a.changeDevice = t(function() {
    S("status-choice-devices");
    this.c.Va(null);
    this.K.path("/receiver_picker");
  }, this);
  this.a.showOriginalTab = t(this.ic, this);
  this.a.doCastAction = t(this.fc, this);
  this.a.playOrPause = t(function() {
    S("status-choice-playOrPause");
    this.h.L && this.hc();
  }, this);
  this.a.muteOrUmute = t(function() {
    S("status-choice-muteOrUmute");
    this.gc();
  }, this);
  this.a.stopActivity = t(this.jc, this);
};
e.fc = function() {
  this.h.sa && this.a.selectedActivity && (this.a.castActionLabel = Xb, this.a.isLaunching = !0, this.c.eb(this.a.selectedActivity.receiver));
};
e.hc = function() {
  var a = this.a.selectedActivity;
  if (a && a.mediaPlayerStatus && this.h.Ma) {
    var b = this.Ya(a.id, {}), c = null;
    switch(a.mediaPlayerStatus.playerState) {
      case chrome.cast.media.u.PLAYING:
        this.c.sendRequest("pause_media", b);
        c = chrome.cast.media.u.PAUSED;
        break;
      case chrome.cast.media.u.PAUSED:
        this.c.sendRequest("play_media", b), c = chrome.cast.media.u.PLAYING;
    }
    c && (a.mediaPlayerStatus.playerState = c, this.W(this.c.j()));
  }
};
e.gc = function() {
  var a = this.a.selectedActivity;
  a && (this.c.sendRequest("set_mute", this.Ya(a.id, {muted:!a.receiver.muted})), a.receiver.muted = !a.receiver.muted, this.W(this.c.j()));
};
e.jc = function() {
  var a = this.a.selectedActivity;
  a && (this.c.sendRequest("stop_activity", a), this.a.selectedActivity = null, window.close());
};
var Hd = function(a, b, c, d) {
  this.source = a;
  this.target = b;
  this.type = c;
  this.content = d;
  this.windowUrl = null;
};
var Id = function() {
  V.call(this);
  this.m = [];
  this.q = {};
};
v(Id, V);
e = Id.prototype;
e.Gb = 1;
e.oa = 0;
e.subscribe = function(a, b, c) {
  var d = this.q[a];
  d || (d = this.q[a] = []);
  var f = this.Gb;
  this.m[f] = a;
  this.m[f + 1] = b;
  this.m[f + 2] = c;
  this.Gb = f + 3;
  d.push(f);
  return f;
};
e.unsubscribe = function(a, b, c) {
  if (a = this.q[a]) {
    var d = this.m;
    if (a = A(a, function(a) {
      return d[a + 1] == b && d[a + 2] == c;
    })) {
      return this.ka(a);
    }
  }
  return!1;
};
e.ka = function(a) {
  if (0 != this.oa) {
    return this.na || (this.na = []), this.na.push(a), !1;
  }
  var b = this.m[a];
  if (b) {
    var c = this.q[b];
    c && Ba(c, a);
    delete this.m[a];
    delete this.m[a + 1];
    delete this.m[a + 2];
  }
  return!!b;
};
e.publish = function(a, b) {
  var c = this.q[a];
  if (c) {
    this.oa++;
    for (var d = Da(arguments, 1), f = 0, g = c.length;f < g;f++) {
      var h = c[f];
      this.m[h + 1].apply(this.m[h + 2], d);
    }
    this.oa--;
    if (this.na && 0 == this.oa) {
      for (;c = this.na.pop();) {
        this.ka(c);
      }
    }
    return 0 != f;
  }
  return!1;
};
e.clear = function(a) {
  if (a) {
    var b = this.q[a];
    b && (ya(b, this.ka, this), delete this.q[a]);
  } else {
    this.m.length = 0, this.q = {};
  }
};
e.Ea = function(a) {
  if (a) {
    var b = this.q[a];
    return b ? b.length : 0;
  }
  a = 0;
  for (b in this.q) {
    a += this.Ea(b);
  }
  return a;
};
var Jd = function(a) {
  this.T = a;
  this.ja = new Id;
  this.e = O("cv.Messenger-" + a);
};
v(Jd, V);
e = Jd.prototype;
e.init = function() {
  chrome.extension.onMessage.addListener(t(this.be, this));
};
e.wd = function(a, b, c, d) {
  P(this.e, "Sending message to " + a + ": " + JSON.stringify(c));
  chrome.extension.sendMessage(JSON.stringify(new Hd(this.T, a, b, c)), d || ca);
};
e.Dd = function(a, b, c) {
  y("background" != this.T, "background page can NOT send message to itself");
  this.wd("background", a, b, c);
};
e.be = function(a, b) {
  y(q(a), "Expect a string. Got " + JSON.stringify(a));
  var c = JSON.parse(a);
  if (this.T == c.target && this.T != c.source && ("background" == this.T || "background" == c.source)) {
    var d;
    b.tab ? (d = b.tab, c.windowUrl && d.url != c.windowUrl && (d.url = c.windowUrl, d.title = "", d.favIconUrl = "")) : d = {id:-1};
    var f = this.e, g = "Getting message from tab " + d.id + ": " + JSON.stringify(c);
    f && f.log(Fb, g, void 0);
    this.ja.publish(c.type, d, c.content);
  }
};
e.listen = function(a, b, c) {
  return this.ja.subscribe(a, b, c);
};
e.Pb = function(a, b, c) {
  return this.ja.unsubscribe(a, b, c);
};
e.Ba = function(a) {
  return this.ja.ka(a);
};
var Kd = function(a) {
  this.e = O("cv2.PopupDataService");
  this.xa = new Jd("popup");
  this.d = new Kc([], null, null, null, null, !1, null);
  this.Wa = !1;
  this.n = null;
  this.s = void 0;
  this.a = a;
  this.xa.init();
  this.xa.listen("event_to_popup", this.lc, this);
  this.sendRequest("init", {});
};
e = Kd.prototype;
e.sendRequest = function(a, b) {
  var c = new Fc(a, b);
  this.xa.Dd("popup_menu_request", c);
  return c;
};
e.Ac = function(a) {
  this.n = a;
};
e.pc = function() {
  return this.n;
};
e.ta = function() {
  return this.s ? this.hd() : this.gd();
};
e.hd = function() {
  if (this.n) {
    if (this.d.desktopActivity && "cast_desktop" == this.n) {
      return "none";
    }
    var a = "cast_this_tab" == this.n || "cast_this_tab_audio" == this.n;
    return this.d.currentActivity && "mirror_tab" == this.d.currentActivity.activityType && a ? "none" : this.n;
  }
  return!mb || !this.d.isV2AppInTab || this.d.currentActivity && "v2_app" == this.d.currentActivity.activityType ? this.d.currentActivity || this.d.desktopActivity ? "none" : "cast_this_tab" : "create_session";
};
e.gd = function() {
  return this.n ? this.n : mb && this.d.isV2AppInTab ? "create_session" : "cast_this_tab";
};
e.eb = function(a) {
  a = {receiver:a, isUserOverride:!!this.n};
  switch(this.ta()) {
    case "cast_this_tab_audio":
      this.sendRequest("cast_this_tab_audio", a);
      break;
    case "cast_this_tab":
      this.sendRequest("cast_this_tab", a);
      break;
    case "cast_desktop":
      this.sendRequest("launch_desktop_mirror", a);
      break;
    case "create_session":
      this.sendRequest("create_session", a);
      break;
    default:
      return!1;
  }
  return!0;
};
e.Wc = function(a) {
  this.sendRequest("remove_receiver", a);
};
e.hb = function(a) {
  this.d.issue && this.sendRequest("act_on_issue", new Ic(this.d.issue.id, a));
};
e.j = function() {
  return this.d;
};
e.mc = function() {
  return this.Wa;
};
e.lc = function(a, b) {
  "model_update" == b.type && (this.d = b.message, this.Wa = !0, this.zc(), this.wc(), this.a.$broadcast("MODEL_UPDATE"));
};
e.ua = function() {
  return this.s;
};
e.Va = function(a) {
  this.s = a || null;
};
e.wc = function() {
  A(this.d.receiverActs, function(a) {
    return a.activity && a.activity.isInLaunch;
  });
};
e.zc = function() {
  this.Ic();
  l(this.s) || (this.d.currentActivity ? this.s = this.d.currentActivity : 1 == this.Hc() && (this.s = this.Gc()));
};
e.Ic = function() {
  if (this.s) {
    var a = A(this.d.receiverActs, t(function(a) {
      return a.activity && a.activity.id == this.s.id;
    }, this));
    this.s = a ? a.activity : void 0;
  }
};
e.Hc = function() {
  return za(this.d.receiverActs, function(a) {
    return a.activity && a.activity.isLocal;
  });
};
e.Gc = function() {
  var a = A(this.d.receiverActs, function(a) {
    return a.activity && a.activity.isLocal;
  });
  return a ? a.activity : null;
};
e.sc = function(a) {
  switch(a) {
    case "cast":
      return "chromecast-device";
    case "hangout":
      return "hangout-device";
    default:
      return "generic-device";
  }
};
var Ld = function(a, b) {
  this.e = O("cv2.IssuerNotifierCtrl");
  this.a = a;
  this.c = b;
  this.qc();
  a.$on("MODEL_UPDATE", t(this.B, this));
};
Ld.prototype.B = function() {
  P(this.e, "on model update");
  this.fb();
  this.a.$apply();
};
Ld.prototype.fb = function() {
  var a = this.c.j().issue;
  a && (this.a.issueTitle = a.title, this.a.issueMessage = a.message, this.a.issueOptActText = a.optActionText, this.a.issueDefaultActText = a.defaultActionText, this.a.showIssueOptActButton = 0 < a.optActionText.length);
};
Ld.prototype.qc = function() {
  this.fb();
  this.a.actOnIssueWithOptAct = t(this.c.hb, this.c, !1);
  this.a.actOnIssueWithDefaultAct = t(this.c.hb, this.c, !0);
};
var Md = function() {
  this.Ub = ha();
}, Nd = new Md;
Md.prototype.set = function(a) {
  this.Ub = a;
};
Md.prototype.reset = function() {
  this.set(ha());
};
Md.prototype.get = function() {
  return this.Ub;
};
var Od = function(a) {
  this.Mc = a || "";
  this.Nc = Nd;
};
e = Od.prototype;
e.nb = !0;
e.ob = !0;
e.Rc = !0;
e.Qc = !0;
e.pb = !1;
e.Sc = !1;
var Z = function(a) {
  return 10 > a ? "0" + a : String(a);
}, Pd = function(a, b) {
  var c = (a.yb() - b) / 1E3, d = c.toFixed(3), f = 0;
  if (1 > c) {
    f = 2;
  } else {
    for (;100 > c;) {
      f++, c *= 10;
    }
  }
  for (;0 < f--;) {
    d = " " + d;
  }
  return d;
}, Qd = function(a) {
  Od.call(this, a);
};
v(Qd, Od);
Qd.prototype.dd = function(a) {
  var b = [];
  b.push(this.Mc, " ");
  if (this.ob) {
    var c = new Date(a.yb());
    b.push("[", Z(c.getFullYear() - 2E3) + Z(c.getMonth() + 1) + Z(c.getDate()) + " " + Z(c.getHours()) + ":" + Z(c.getMinutes()) + ":" + Z(c.getSeconds()) + "." + Z(Math.floor(c.getMilliseconds() / 10)), "] ");
  }
  this.Rc && b.push("[", Pd(a, this.Nc.get()), "s] ");
  this.Qc && b.push("[", a.rb(), "] ");
  this.Sc && b.push("[", a.Ca().name, "] ");
  b.push(a.getMessage());
  this.pb && a.Oc() && b.push("\n", a.Pc());
  this.nb && b.push("\n");
  return b.join("");
};
var Rd = function() {
  this.Ab = t(this.Zc, this);
  this.la = new Qd;
  this.la.ob = !1;
  this.la.pb = !1;
  this.zb = this.la.nb = !1;
  this.wb = "";
  this.Kc = {};
};
Rd.prototype.nc = function(a) {
  if (a != this.zb) {
    var b = Jb();
    a ? b.kd(this.Ab) : b.ld(this.Ab);
    this.zb = a;
  }
};
Rd.prototype.Zc = function(a) {
  if (!this.Kc[a.rb()]) {
    var b = this.la.dd(a), c = Sd;
    if (c) {
      switch(a.Ca()) {
        case zb:
          Td(c, "info", b);
          break;
        case Ab:
          Td(c, "error", b);
          break;
        case Bb:
          Td(c, "warn", b);
          break;
        default:
          Td(c, "debug", b);
      }
    } else {
      this.wb += b;
    }
  }
};
var Sd = k.console, Td = function(a, b, c) {
  if (a[b]) {
    a[b](c);
  } else {
    a.log(c);
  }
};
var Ud = function(a, b, c) {
  var d = new Rd;
  Jb().ca(Eb);
  d.nc(!0);
  this.e = O("cv2.PopupMenuCtrl");
  this.K = b;
  this.c = c;
  this.a = a;
  qd();
  this.Za();
  a.$on("MODEL_UPDATE", t(this.B, this));
};
Ud.prototype.B = function() {
  P(this.e, "on model update");
  this.Za();
};
Ud.prototype.Za = function() {
  var a = this.c.j(), b = "/receiver_picker";
  this.c.mc() ? a.settings.statsCollectNotificationDismissed ? a.issue && a.issue.isBlocking ? b = "/issue_notifier" : this.c.ua() ? b = "/activity_detail" : a.isV1AppInTab && !a.settings.castAppNotificationDismissed && (b = "/v1_app_notification") : b = "/stats_collect_prompt" : b = "/";
  P(this.e, "Showing " + b);
  this.K.url(b);
  this.a.$$phase || this.a.$apply();
};
var Vd = function(a, b, c) {
  this.e = O("cv2.ReceiverPickerCtrl");
  this.K = b;
  this.c = c;
  this.d = c.j();
  this.a = a;
  this.A = Ed.ra();
  this.bc();
  this.ac();
  a.$on("MODEL_UPDATE", t(this.B, this));
};
e = Vd.prototype;
e.B = function() {
  P(this.e, "on model update");
  this.d = this.c.j();
  this.Ra();
  this.Ta();
  this.a.$apply();
};
e.bc = function() {
  this.Ra();
  this.a.onClickLearnCastEnabledPage = u(Bd, "http://support.google.com/chromecast/go/castenabledpage");
  this.a.onClickReceiver = t(this.tc, this);
  this.a.onClickRemoveReceiver = t(this.uc, this);
  this.a.onClickDeviceMissing = u(Bd, "http://support.google.com/chromecast/go/nodevices");
  this.a.sendFeedback = u(Cd, "feedback.html");
  this.a.showOptions = u(Cd, "options.html");
  this.a.castToHangoutReceiver = t(this.rc, this);
  this.a.showHelp = t(this.vc, this);
  this.a.disableProjectScreen = (1920 < window.screen.width * window.devicePixelRatio || 1080 < window.screen.height * window.devicePixelRatio) && !(0 <= x(jb, 29));
  this.a.getReceiverIconClass = t(this.c.sc, this.c);
  this.a.enterHangoutNameText = Wb;
};
e.ac = function() {
  this.a.data = this.a.data || {};
  this.Ta();
  this.a.data.selectingCastMode = !1;
  this.a.setUserCastAction = t(this.Bc, this);
};
e.Bc = function(a) {
  this.c.Ac(a);
  this.a.data.castAction = a;
  this.cb();
  this.a.data.selectingCastMode = !1;
};
e.Ta = function() {
  this.d.isV2AppInTab && mb ? (this.a.offerCreateSession = !0, this.a.castAppLabel = this.A.getMessage(Pb, this.a)) : this.a.offerCreateSession = !1;
  this.a.data.castAction = this.c.pc();
};
e.Ra = function() {
  Fa(this.d.receiverActs, function(a, b) {
    var c = "cast" != a.receiver.receiverType;
    return c == ("cast" != b.receiver.receiverType) ? a.receiver.name.localeCompare(b.receiver.name) : c ? 1 : -1;
  });
  this.a.receiverActs = this.d.receiverActs;
  this.a.nonHangoutReceiverActs = this.yc();
  this.a.hangoutReceiverActs = this.xc();
  this.a.multipleHangoutDomains = 1 < Ha(this.a.hangoutReceiverActs);
  this.a.v2AppDomain = this.d.v2AppDomain;
  this.a.isV1AppInTab = this.d.isV1AppInTab;
  this.a.showIssue = this.d.issue && !this.d.issue.isBlocking && !this.d.issue.activityId;
  this.a.hangoutsEnabled = this.d.settings.hangoutsEnabled;
  this.cb();
};
e.cb = function() {
  var a = null;
  switch(this.c.ta()) {
    case "create_session":
      a = this.A.getMessage(Ob, this.a);
      break;
    case "cast_this_tab":
      a = Lb;
      break;
    case "cast_desktop":
      a = Nb;
      break;
    case "cast_this_tab_audio":
      a = Mb;
      break;
    default:
      (a = this.e) && a.bb("Cannot set receiver picker title", void 0);
      return;
  }
  y(null != a);
  this.a.receiverListTitle = a;
};
e.Fc = function(a) {
  a.isInLaunch = !0;
};
e.tc = function(a) {
  a.receiver.isInLaunch ? (a = this.e) && a.info("There is an activity in launch; cannot launch another activity", void 0) : this.ib(a);
};
e.uc = function(a) {
  this.c.Wc(a.receiver.id);
};
e.ib = function(a) {
  a.activity ? (S("popup-choice-active"), this.c.Va(a.activity), this.K.path("/activity_detail")) : (S("popup-choice-idle"), this.c.eb(a.receiver) && ("custom" == a.receiver.receiverType ? window.close() : this.Fc(a.receiver)));
};
e.rc = function() {
  var a = this.a.hangoutName, b = new Gc("", a, a, "hangout");
  P(this.e, "Casting to hangout: " + a);
  this.ib(new Hc(b, null));
};
e.vc = function() {
  S("popup-choice-help");
  td("http://support.google.com/chromecast/go/castfromchrome*", "http://support.google.com/chromecast/go/castfromchrome", function() {
    window.close();
  });
};
e.yc = function() {
  return this.d.receiverActs.filter(function(a) {
    return "hangout" != a.receiver.receiverType;
  });
};
e.xc = function() {
  var a = {};
  this.d.receiverActs.filter(function(a) {
    return "hangout" == a.receiver.receiverType;
  }).map(function(b) {
    var c = b.receiver.uniqueId.split("@")[1];
    c && (a[c] || (a[c] = []), a[c].push(b));
  });
  return a;
};
document.addEventListener("DOMContentLoaded", function() {
  var a = "UA-50032818-1";
  kb ? a = "UA-50032818-2" : lb && (a = "UA-50032818-3");
  window._gaq = window._gaq || [];
  window._gaq.push(["_setAccount", a]);
  window._gaq.push(["_trackPageview"]);
  a = document.createElement("script");
  a.type = "text/javascript";
  a.async = !0;
  a.src = "https://ssl.google-analytics.com/ga.js";
  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b);
}, !1);
var $ = angular.module("popupMenu", ["ngSanitize", "chrome_i18n", "ngRoute"]);
$.factory("popupMenuDataService", ["$rootScope", function(a) {
  return new Kd(a);
}]);
$.controller("PopupMenuCtrl", ["$scope", "$location", "popupMenuDataService", Ud]);
$.controller("PopupIssuerNotifierCtrl", ["$scope", "popupMenuDataService", Ld]);
$.controller("PopupReceiverPickerCtrl", ["$scope", "$location", "popupMenuDataService", Vd]);
$.controller("PopupActivityDetailCtrl", ["$scope", "$location", "popupMenuDataService", Gd]);
$.controller("PopupV1AppNotificationCtrl", ["$scope", "popupMenuDataService", function(a, b) {
  a.dismissCastAppNotification = function() {
    var a = b.j();
    a.settings.castAppNotificationDismissed = !0;
    b.sendRequest("update_settings", a.settings);
    window.close();
  };
}]);
$.controller("StatsCollectionPromptCtrl", ["$scope", "popupMenuDataService", function(a, b) {
  a.sendUsage = b.j().settings.sendUsageEnabled;
  var c = function(a, c) {
    var g = b.j();
    r(c) && (g.settings.sendUsageEnabled = c);
    g.settings.statsCollectNotificationDismissed = a;
    b.sendRequest("update_settings", g.settings);
  };
  a.changeSendUsage = function() {
    c(!1, a.sendUsage);
  };
  a.dismiss = function() {
    c(!0);
    window.close();
  };
  a.$on("MODEL_UPDATE", function() {
    a.sendUsage = b.j().settings.sendUsageEnabled;
    a.$apply();
  });
}]);
$.config(["$routeProvider", function(a) {
  a.when("/", {templateUrl:"/popup_partials/initializing.html"}).when("/v1_app_notification", {controller:"PopupV1AppNotificationCtrl", templateUrl:"/popup_partials/v1_app_notification.html"}).when("/receiver_picker", {controller:"PopupReceiverPickerCtrl", templateUrl:"/popup_partials/receiver_picker.html"}).when("/activity_detail", {controller:"PopupActivityDetailCtrl", templateUrl:"/popup_partials/activity_detail.html"}).when("/issue_notifier", {controller:"PopupIssuerNotifierCtrl", templateUrl:"/popup_partials/issue_notifier.html"}).when("/stats_collect_prompt", 
  {controller:"StatsCollectionPromptCtrl", templateUrl:"/popup_partials/stats_collect_prompt.html"}).otherwise({redirectTo:"/"});
}]);
$.config(["$compileProvider", function(a) {
  a.imgSrcSanitizationWhitelist(/^\s*(https?|chrome-extension):|blob:chrome-extension%3A/);
}]);

