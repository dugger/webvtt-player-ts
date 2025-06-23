import U from "react";
function Me(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var se = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function Ne() {
  if (ve) return re;
  ve = 1;
  var n = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function i(c, h, f) {
    var g = null;
    if (f !== void 0 && (g = "" + f), h.key !== void 0 && (g = "" + h.key), "key" in h) {
      f = {};
      for (var v in h)
        v !== "key" && (f[v] = h[v]);
    } else f = h;
    return h = f.ref, {
      $$typeof: n,
      type: c,
      key: g,
      ref: h !== void 0 ? h : null,
      props: f
    };
  }
  return re.Fragment = t, re.jsx = i, re.jsxs = i, re;
}
var te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function qe() {
  return he || (he = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case O:
          return "Fragment";
        case q:
          return "Profiler";
        case I:
          return "StrictMode";
        case o:
          return "Suspense";
        case F:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case N:
            return "Portal";
          case A:
            return (e.displayName || "Context") + ".Provider";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case C:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case G:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function t(e) {
      return "" + e;
    }
    function i(e) {
      try {
        t(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), t(e);
      }
    }
    function c(e) {
      if (e === O) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === G)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function h() {
      var e = z.A;
      return e === null ? null : e.getOwner();
    }
    function f() {
      return Error("react-stack-top-frame");
    }
    function g(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function v(e, r) {
      function a() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function j() {
      var e = n(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function x(e, r, a, u, l, y, m, b) {
      return a = y.ref, e = {
        $$typeof: w,
        type: e,
        key: r,
        props: y,
        _owner: l
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: j
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: m
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: b
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, r, a, u, l, y, m, b) {
      var d = r.children;
      if (d !== void 0)
        if (u)
          if (ee(d)) {
            for (u = 0; u < d.length; u++)
              k(d[u]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(d);
      if (B.call(r, "key")) {
        d = n(e);
        var T = Object.keys(r).filter(function(M) {
          return M !== "key";
        });
        u = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", X[d + u] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          d,
          T,
          d
        ), X[d + u] = !0);
      }
      if (d = null, a !== void 0 && (i(a), d = "" + a), g(r) && (i(r.key), d = "" + r.key), "key" in r) {
        a = {};
        for (var E in r)
          E !== "key" && (a[E] = r[E]);
      } else a = r;
      return d && v(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), x(
        e,
        d,
        y,
        l,
        h(),
        a,
        m,
        b
      );
    }
    function k(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var P = U, w = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), A = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), z = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, ee = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    P = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var Q, Y = {}, D = P["react-stack-bottom-frame"].bind(
      P,
      f
    )(), V = L(c(f)), X = {};
    te.Fragment = O, te.jsx = function(e, r, a, u, l) {
      var y = 1e4 > z.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        a,
        !1,
        u,
        l,
        y ? Error("react-stack-top-frame") : D,
        y ? L(c(e)) : V
      );
    }, te.jsxs = function(e, r, a, u, l) {
      var y = 1e4 > z.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        a,
        !0,
        u,
        l,
        y ? Error("react-stack-top-frame") : D,
        y ? L(c(e)) : V
      );
    };
  }()), te;
}
var me;
function Ye() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? se.exports = Ne() : se.exports = qe()), se.exports;
}
var p = Ye(), oe = { exports: {} }, ae = { exports: {} }, R = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Le() {
  if (be) return R;
  be = 1;
  var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, i = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, h = n ? Symbol.for("react.strict_mode") : 60108, f = n ? Symbol.for("react.profiler") : 60114, g = n ? Symbol.for("react.provider") : 60109, v = n ? Symbol.for("react.context") : 60110, j = n ? Symbol.for("react.async_mode") : 60111, x = n ? Symbol.for("react.concurrent_mode") : 60111, _ = n ? Symbol.for("react.forward_ref") : 60112, k = n ? Symbol.for("react.suspense") : 60113, P = n ? Symbol.for("react.suspense_list") : 60120, w = n ? Symbol.for("react.memo") : 60115, N = n ? Symbol.for("react.lazy") : 60116, O = n ? Symbol.for("react.block") : 60121, I = n ? Symbol.for("react.fundamental") : 60117, q = n ? Symbol.for("react.responder") : 60118, J = n ? Symbol.for("react.scope") : 60119;
  function A(o) {
    if (typeof o == "object" && o !== null) {
      var F = o.$$typeof;
      switch (F) {
        case t:
          switch (o = o.type, o) {
            case j:
            case x:
            case c:
            case f:
            case h:
            case k:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case v:
                case _:
                case N:
                case w:
                case g:
                  return o;
                default:
                  return F;
              }
          }
        case i:
          return F;
      }
    }
  }
  function C(o) {
    return A(o) === x;
  }
  return R.AsyncMode = j, R.ConcurrentMode = x, R.ContextConsumer = v, R.ContextProvider = g, R.Element = t, R.ForwardRef = _, R.Fragment = c, R.Lazy = N, R.Memo = w, R.Portal = i, R.Profiler = f, R.StrictMode = h, R.Suspense = k, R.isAsyncMode = function(o) {
    return C(o) || A(o) === j;
  }, R.isConcurrentMode = C, R.isContextConsumer = function(o) {
    return A(o) === v;
  }, R.isContextProvider = function(o) {
    return A(o) === g;
  }, R.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === t;
  }, R.isForwardRef = function(o) {
    return A(o) === _;
  }, R.isFragment = function(o) {
    return A(o) === c;
  }, R.isLazy = function(o) {
    return A(o) === N;
  }, R.isMemo = function(o) {
    return A(o) === w;
  }, R.isPortal = function(o) {
    return A(o) === i;
  }, R.isProfiler = function(o) {
    return A(o) === f;
  }, R.isStrictMode = function(o) {
    return A(o) === h;
  }, R.isSuspense = function(o) {
    return A(o) === k;
  }, R.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === c || o === x || o === f || o === h || o === k || o === P || typeof o == "object" && o !== null && (o.$$typeof === N || o.$$typeof === w || o.$$typeof === g || o.$$typeof === v || o.$$typeof === _ || o.$$typeof === I || o.$$typeof === q || o.$$typeof === J || o.$$typeof === O);
  }, R.typeOf = A, R;
}
var S = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function De() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, i = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, h = n ? Symbol.for("react.strict_mode") : 60108, f = n ? Symbol.for("react.profiler") : 60114, g = n ? Symbol.for("react.provider") : 60109, v = n ? Symbol.for("react.context") : 60110, j = n ? Symbol.for("react.async_mode") : 60111, x = n ? Symbol.for("react.concurrent_mode") : 60111, _ = n ? Symbol.for("react.forward_ref") : 60112, k = n ? Symbol.for("react.suspense") : 60113, P = n ? Symbol.for("react.suspense_list") : 60120, w = n ? Symbol.for("react.memo") : 60115, N = n ? Symbol.for("react.lazy") : 60116, O = n ? Symbol.for("react.block") : 60121, I = n ? Symbol.for("react.fundamental") : 60117, q = n ? Symbol.for("react.responder") : 60118, J = n ? Symbol.for("react.scope") : 60119;
    function A(s) {
      return typeof s == "string" || typeof s == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      s === c || s === x || s === f || s === h || s === k || s === P || typeof s == "object" && s !== null && (s.$$typeof === N || s.$$typeof === w || s.$$typeof === g || s.$$typeof === v || s.$$typeof === _ || s.$$typeof === I || s.$$typeof === q || s.$$typeof === J || s.$$typeof === O);
    }
    function C(s) {
      if (typeof s == "object" && s !== null) {
        var W = s.$$typeof;
        switch (W) {
          case t:
            var ne = s.type;
            switch (ne) {
              case j:
              case x:
              case c:
              case f:
              case h:
              case k:
                return ne;
              default:
                var ye = ne && ne.$$typeof;
                switch (ye) {
                  case v:
                  case _:
                  case N:
                  case w:
                  case g:
                    return ye;
                  default:
                    return W;
                }
            }
          case i:
            return W;
        }
      }
    }
    var o = j, F = x, H = v, G = g, Z = t, K = _, z = c, B = N, ee = w, L = i, Q = f, Y = h, D = k, V = !1;
    function X(s) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(s) || C(s) === j;
    }
    function e(s) {
      return C(s) === x;
    }
    function r(s) {
      return C(s) === v;
    }
    function a(s) {
      return C(s) === g;
    }
    function u(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function l(s) {
      return C(s) === _;
    }
    function y(s) {
      return C(s) === c;
    }
    function m(s) {
      return C(s) === N;
    }
    function b(s) {
      return C(s) === w;
    }
    function d(s) {
      return C(s) === i;
    }
    function T(s) {
      return C(s) === f;
    }
    function E(s) {
      return C(s) === h;
    }
    function M(s) {
      return C(s) === k;
    }
    S.AsyncMode = o, S.ConcurrentMode = F, S.ContextConsumer = H, S.ContextProvider = G, S.Element = Z, S.ForwardRef = K, S.Fragment = z, S.Lazy = B, S.Memo = ee, S.Portal = L, S.Profiler = Q, S.StrictMode = Y, S.Suspense = D, S.isAsyncMode = X, S.isConcurrentMode = e, S.isContextConsumer = r, S.isContextProvider = a, S.isElement = u, S.isForwardRef = l, S.isFragment = y, S.isLazy = m, S.isMemo = b, S.isPortal = d, S.isProfiler = T, S.isStrictMode = E, S.isSuspense = M, S.isValidElementType = A, S.typeOf = C;
  }()), S;
}
var Ee;
function Oe() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? ae.exports = Le() : ae.exports = De()), ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ie, _e;
function We() {
  if (_e) return ie;
  _e = 1;
  var n = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function c(f) {
    if (f == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(f);
  }
  function h() {
    try {
      if (!Object.assign)
        return !1;
      var f = new String("abc");
      if (f[5] = "de", Object.getOwnPropertyNames(f)[0] === "5")
        return !1;
      for (var g = {}, v = 0; v < 10; v++)
        g["_" + String.fromCharCode(v)] = v;
      var j = Object.getOwnPropertyNames(g).map(function(_) {
        return g[_];
      });
      if (j.join("") !== "0123456789")
        return !1;
      var x = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(_) {
        x[_] = _;
      }), Object.keys(Object.assign({}, x)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = h() ? Object.assign : function(f, g) {
    for (var v, j = c(f), x, _ = 1; _ < arguments.length; _++) {
      v = Object(arguments[_]);
      for (var k in v)
        t.call(v, k) && (j[k] = v[k]);
      if (n) {
        x = n(v);
        for (var P = 0; P < x.length; P++)
          i.call(v, x[P]) && (j[x[P]] = v[x[P]]);
      }
    }
    return j;
  }, ie;
}
var ce, ge;
function pe() {
  if (ge) return ce;
  ge = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ce = n, ce;
}
var ue, xe;
function Pe() {
  return xe || (xe = 1, ue = Function.call.bind(Object.prototype.hasOwnProperty)), ue;
}
var fe, ke;
function Fe() {
  if (ke) return fe;
  ke = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ pe(), i = {}, c = /* @__PURE__ */ Pe();
    n = function(f) {
      var g = "Warning: " + f;
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
  }
  function h(f, g, v, j, x) {
    if (process.env.NODE_ENV !== "production") {
      for (var _ in f)
        if (c(f, _)) {
          var k;
          try {
            if (typeof f[_] != "function") {
              var P = Error(
                (j || "React class") + ": " + v + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw P.name = "Invariant Violation", P;
            }
            k = f[_](g, _, j, v, null, t);
          } catch (N) {
            k = N;
          }
          if (k && !(k instanceof Error) && n(
            (j || "React class") + ": type specification of " + v + " `" + _ + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof k + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), k instanceof Error && !(k.message in i)) {
            i[k.message] = !0;
            var w = x ? x() : "";
            n(
              "Failed " + v + " type: " + k.message + (w ?? "")
            );
          }
        }
    }
  }
  return h.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, fe = h, fe;
}
var le, Re;
function Ue() {
  if (Re) return le;
  Re = 1;
  var n = Oe(), t = We(), i = /* @__PURE__ */ pe(), c = /* @__PURE__ */ Pe(), h = /* @__PURE__ */ Fe(), f = function() {
  };
  process.env.NODE_ENV !== "production" && (f = function(v) {
    var j = "Warning: " + v;
    typeof console < "u" && console.error(j);
    try {
      throw new Error(j);
    } catch {
    }
  });
  function g() {
    return null;
  }
  return le = function(v, j) {
    var x = typeof Symbol == "function" && Symbol.iterator, _ = "@@iterator";
    function k(e) {
      var r = e && (x && e[x] || e[_]);
      if (typeof r == "function")
        return r;
    }
    var P = "<<anonymous>>", w = {
      array: q("array"),
      bigint: q("bigint"),
      bool: q("boolean"),
      func: q("function"),
      number: q("number"),
      object: q("object"),
      string: q("string"),
      symbol: q("symbol"),
      any: J(),
      arrayOf: A,
      element: C(),
      elementType: o(),
      instanceOf: F,
      node: K(),
      objectOf: G,
      oneOf: H,
      oneOfType: Z,
      shape: B,
      exact: ee
    };
    function N(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function O(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    O.prototype = Error.prototype;
    function I(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function u(y, m, b, d, T, E, M) {
        if (d = d || P, E = E || b, M !== i) {
          if (j) {
            var s = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw s.name = "Invariant Violation", s;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var W = d + ":" + b;
            !r[W] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (f(
              "You are manually calling a React.PropTypes validation function for the `" + E + "` prop on `" + d + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[W] = !0, a++);
          }
        }
        return m[b] == null ? y ? m[b] === null ? new O("The " + T + " `" + E + "` is marked as required " + ("in `" + d + "`, but its value is `null`.")) : new O("The " + T + " `" + E + "` is marked as required in " + ("`" + d + "`, but its value is `undefined`.")) : null : e(m, b, d, T, E);
      }
      var l = u.bind(null, !1);
      return l.isRequired = u.bind(null, !0), l;
    }
    function q(e) {
      function r(a, u, l, y, m, b) {
        var d = a[u], T = Y(d);
        if (T !== e) {
          var E = D(d);
          return new O(
            "Invalid " + y + " `" + m + "` of type " + ("`" + E + "` supplied to `" + l + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return I(r);
    }
    function J() {
      return I(g);
    }
    function A(e) {
      function r(a, u, l, y, m) {
        if (typeof e != "function")
          return new O("Property `" + m + "` of component `" + l + "` has invalid PropType notation inside arrayOf.");
        var b = a[u];
        if (!Array.isArray(b)) {
          var d = Y(b);
          return new O("Invalid " + y + " `" + m + "` of type " + ("`" + d + "` supplied to `" + l + "`, expected an array."));
        }
        for (var T = 0; T < b.length; T++) {
          var E = e(b, T, l, y, m + "[" + T + "]", i);
          if (E instanceof Error)
            return E;
        }
        return null;
      }
      return I(r);
    }
    function C() {
      function e(r, a, u, l, y) {
        var m = r[a];
        if (!v(m)) {
          var b = Y(m);
          return new O("Invalid " + l + " `" + y + "` of type " + ("`" + b + "` supplied to `" + u + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(e);
    }
    function o() {
      function e(r, a, u, l, y) {
        var m = r[a];
        if (!n.isValidElementType(m)) {
          var b = Y(m);
          return new O("Invalid " + l + " `" + y + "` of type " + ("`" + b + "` supplied to `" + u + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(e);
    }
    function F(e) {
      function r(a, u, l, y, m) {
        if (!(a[u] instanceof e)) {
          var b = e.name || P, d = X(a[u]);
          return new O("Invalid " + y + " `" + m + "` of type " + ("`" + d + "` supplied to `" + l + "`, expected ") + ("instance of `" + b + "`."));
        }
        return null;
      }
      return I(r);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? f(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : f("Invalid argument supplied to oneOf, expected an array.")), g;
      function r(a, u, l, y, m) {
        for (var b = a[u], d = 0; d < e.length; d++)
          if (N(b, e[d]))
            return null;
        var T = JSON.stringify(e, function(M, s) {
          var W = D(s);
          return W === "symbol" ? String(s) : s;
        });
        return new O("Invalid " + y + " `" + m + "` of value `" + String(b) + "` " + ("supplied to `" + l + "`, expected one of " + T + "."));
      }
      return I(r);
    }
    function G(e) {
      function r(a, u, l, y, m) {
        if (typeof e != "function")
          return new O("Property `" + m + "` of component `" + l + "` has invalid PropType notation inside objectOf.");
        var b = a[u], d = Y(b);
        if (d !== "object")
          return new O("Invalid " + y + " `" + m + "` of type " + ("`" + d + "` supplied to `" + l + "`, expected an object."));
        for (var T in b)
          if (c(b, T)) {
            var E = e(b, T, l, y, m + "." + T, i);
            if (E instanceof Error)
              return E;
          }
        return null;
      }
      return I(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && f("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return f(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(a) + " at index " + r + "."
          ), g;
      }
      function u(l, y, m, b, d) {
        for (var T = [], E = 0; E < e.length; E++) {
          var M = e[E], s = M(l, y, m, b, d, i);
          if (s == null)
            return null;
          s.data && c(s.data, "expectedType") && T.push(s.data.expectedType);
        }
        var W = T.length > 0 ? ", expected one of type [" + T.join(", ") + "]" : "";
        return new O("Invalid " + b + " `" + d + "` supplied to " + ("`" + m + "`" + W + "."));
      }
      return I(u);
    }
    function K() {
      function e(r, a, u, l, y) {
        return L(r[a]) ? null : new O("Invalid " + l + " `" + y + "` supplied to " + ("`" + u + "`, expected a ReactNode."));
      }
      return I(e);
    }
    function z(e, r, a, u, l) {
      return new O(
        (e || "React class") + ": " + r + " type `" + a + "." + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + l + "`."
      );
    }
    function B(e) {
      function r(a, u, l, y, m) {
        var b = a[u], d = Y(b);
        if (d !== "object")
          return new O("Invalid " + y + " `" + m + "` of type `" + d + "` " + ("supplied to `" + l + "`, expected `object`."));
        for (var T in e) {
          var E = e[T];
          if (typeof E != "function")
            return z(l, y, m, T, D(E));
          var M = E(b, T, l, y, m + "." + T, i);
          if (M)
            return M;
        }
        return null;
      }
      return I(r);
    }
    function ee(e) {
      function r(a, u, l, y, m) {
        var b = a[u], d = Y(b);
        if (d !== "object")
          return new O("Invalid " + y + " `" + m + "` of type `" + d + "` " + ("supplied to `" + l + "`, expected `object`."));
        var T = t({}, a[u], e);
        for (var E in T) {
          var M = e[E];
          if (c(e, E) && typeof M != "function")
            return z(l, y, m, E, D(M));
          if (!M)
            return new O(
              "Invalid " + y + " `" + m + "` key `" + E + "` supplied to `" + l + "`.\nBad object: " + JSON.stringify(a[u], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var s = M(b, E, l, y, m + "." + E, i);
          if (s)
            return s;
        }
        return null;
      }
      return I(r);
    }
    function L(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(L);
          if (e === null || v(e))
            return !0;
          var r = k(e);
          if (r) {
            var a = r.call(e), u;
            if (r !== e.entries) {
              for (; !(u = a.next()).done; )
                if (!L(u.value))
                  return !1;
            } else
              for (; !(u = a.next()).done; ) {
                var l = u.value;
                if (l && !L(l[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(e, r) {
      return e === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function Y(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : Q(r, e) ? "symbol" : r;
    }
    function D(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var r = Y(e);
      if (r === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function V(e) {
      var r = D(e);
      switch (r) {
        case "array":
        case "object":
          return "an " + r;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + r;
        default:
          return r;
      }
    }
    function X(e) {
      return !e.constructor || !e.constructor.name ? P : e.constructor.name;
    }
    return w.checkPropTypes = h, w.resetWarningCache = h.resetWarningCache, w.PropTypes = w, w;
  }, le;
}
var de, Se;
function ze() {
  if (Se) return de;
  Se = 1;
  var n = /* @__PURE__ */ pe();
  function t() {
  }
  function i() {
  }
  return i.resetWarningCache = t, de = function() {
    function c(g, v, j, x, _, k) {
      if (k !== n) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    c.isRequired = c;
    function h() {
      return c;
    }
    var f = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: h,
      element: c,
      elementType: c,
      instanceOf: h,
      node: c,
      objectOf: h,
      oneOf: h,
      oneOfType: h,
      shape: h,
      exact: h,
      checkPropTypes: i,
      resetWarningCache: t
    };
    return f.PropTypes = f, f;
  }, de;
}
var je;
function Je() {
  if (je) return oe.exports;
  if (je = 1, process.env.NODE_ENV !== "production") {
    var n = Oe(), t = !0;
    oe.exports = /* @__PURE__ */ Ue()(n.isElement, t);
  } else
    oe.exports = /* @__PURE__ */ ze()();
  return oe.exports;
}
var Ve = /* @__PURE__ */ Je();
const $ = /* @__PURE__ */ Me(Ve);
class we extends U.Component {
  constructor(t) {
    super(t), this.state = {
      isActive: !1
    }, this.props.cue.onenter = this.onEnter.bind(this), this.props.cue.onexit = this.onExit.bind(this), this.onClick = this.onClick.bind(this);
  }
  render() {
    let t = "";
    return this.props.query && this.props.cue.text.match(new RegExp(this.props.query, "i")) ? t = "match" : this.state.isActive && (t = "active"), /* @__PURE__ */ p.jsxs("div", { className: `${t} line`, onClick: this.onClick, children: [
      /* @__PURE__ */ p.jsxs("div", { className: "time", children: [
        "[",
        this.startTime(),
        " - ",
        this.endTime(),
        "]"
      ] }),
      /* @__PURE__ */ p.jsx(
        "div",
        {
          className: `${t} text`,
          dangerouslySetInnerHTML: { __html: this.props.cue.text }
        }
      )
    ] });
  }
  onEnter() {
    this.setState({ isActive: !0 });
  }
  onExit() {
    this.setState({ isActive: !1 });
  }
  onClick() {
    this.props.seek(this.props.cue.startTime);
  }
  startTime() {
    return this.formatSeconds(this.props.cue.startTime);
  }
  endTime() {
    return this.formatSeconds(this.props.cue.endTime);
  }
  formatSeconds(t) {
    let i = Math.floor(t / 60);
    i < 10 && (i = `0${i}`);
    let c = Math.floor(t % 60);
    return c < 10 && (c = `0${c}`), `${i}:${c}`;
  }
}
we.propTypes = {
  cue: $.object,
  seek: $.func,
  query: $.string
};
class Ce extends U.Component {
  render() {
    const t = [];
    if (this.props.track && this.props.track.cues)
      for (let i = 0; i < this.props.track.cues.length; i++)
        t.push(
          /* @__PURE__ */ p.jsx(
            we,
            {
              cue: this.props.track.cues[i],
              active: !1,
              seek: this.props.seek,
              query: this.props.query
            },
            `line-${i}`
          )
        );
    return /* @__PURE__ */ p.jsx("div", { className: "track", children: t });
  }
}
Ce.propTypes = {
  track: $.object,
  url: $.string,
  seek: $.func,
  query: $.string
};
class Ae extends U.Component {
  constructor(t) {
    super(t), this.onClick = this.onClick.bind(this);
  }
  render() {
    const t = JSON.parse(this.props.cue.text), i = t.title_alt ? /* @__PURE__ */ p.jsx("h3", { className: "titleAlt", children: t.title_alt }) : "", c = t.synopsis ? /* @__PURE__ */ p.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ p.jsx("span", { children: "Synopsis" }),
      t.synopsis
    ] }) : "", h = t.synopsis_alt ? /* @__PURE__ */ p.jsx("div", { children: t.synopsis_alt }) : "", f = t.keywords ? /* @__PURE__ */ p.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ p.jsx("span", { children: "Keywords: " }),
      t.keywords
    ] }) : "", g = t.keywords_alt ? /* @__PURE__ */ p.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ p.jsx("span", { children: "Alternative Keywords: " }),
      t.keywords_alt
    ] }) : "", v = t.subjects ? /* @__PURE__ */ p.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ p.jsx("span", { children: "Subjects: " }),
      t.subjects
    ] }) : "", j = t.subjects_alt ? /* @__PURE__ */ p.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ p.jsx("span", { children: "Alternative Subjects: " }),
      t.subjects_alt
    ] }) : "", x = t.gpspoints.gps ? /* @__PURE__ */ p.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ p.jsx("span", { children: "Geo: " }),
      /* @__PURE__ */ p.jsx("a", { href: `https://www.google.com/maps/@?api=1&map_action=map&center=${t.gpspoints.gps}&zoom=${t.gpspoints.gps_zoom}`, children: t.gpspoints.gps_text })
    ] }) : "", _ = t.hyperlinks.hyperlink_text ? /* @__PURE__ */ p.jsxs("div", { className: "field", children: [
      /* @__PURE__ */ p.jsx("span", { children: "Links: " }),
      /* @__PURE__ */ p.jsx("a", { href: t.hyperlinks.hyperlink, children: t.hyperlinks.hyperlink_text })
    ] }) : "";
    return /* @__PURE__ */ p.jsxs("div", { className: "point", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "time", onClick: this.onClick, children: [
        "[",
        this.startTime(),
        "]"
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "text", children: [
        /* @__PURE__ */ p.jsx("h2", { className: "title", onClick: this.onClick, children: t.title }),
        i,
        c,
        h,
        f,
        g,
        v,
        j,
        x,
        _
      ] })
    ] });
  }
  onClick() {
    this.props.seek(this.props.cue.startTime);
  }
  startTime() {
    return this.formatSeconds(this.props.cue.startTime);
  }
  formatSeconds(t) {
    let i = Math.floor(t / 60);
    i < 10 && (i = `0${i}`);
    let c = Math.floor(t % 60);
    return c < 10 && (c = `0${c}`), `${i}:${c}`;
  }
}
Ae.propTypes = {
  cue: $.object,
  seek: $.func
};
class $e extends U.Component {
  render() {
    const t = [];
    if (this.props.track && this.props.track.cues)
      for (let i = 0; i < this.props.track.cues.length; i++)
        t.push(
          /* @__PURE__ */ p.jsx(
            Ae,
            {
              cue: this.props.track.cues[i],
              active: !1,
              seek: this.props.seek
            },
            `point-${i}`
          )
        );
    return /* @__PURE__ */ p.jsx("div", { className: "track", children: t });
  }
}
$e.propTypes = {
  track: $.object,
  url: $.string,
  seek: $.func
};
const Ie = ({ query: n, updateQuery: t }) => /* @__PURE__ */ p.jsx("div", { className: "search", children: /* @__PURE__ */ p.jsxs("div", { className: "container", children: [
  /* @__PURE__ */ p.jsx("span", { className: "icon", children: "🔍" }),
  /* @__PURE__ */ p.jsx(
    "input",
    {
      value: n,
      onChange: (i) => t(i.target.value)
    }
  )
] }) });
Ie.propTypes = {
  query: $.string,
  updateQuery: $.function
};
class Ge extends U.Component {
  constructor() {
    super(), this.state = {
      loaded: !1,
      currentTime: 0,
      query: ""
    }, this.track = U.createRef(), this.metatrack = U.createRef(), this.audio = U.createRef(), this.onLoaded = this.onLoaded.bind(this), this.seek = this.seek.bind(this), this.onTrackLoaded = this.onTrackLoaded.bind(this), this.updateQuery = this.updateQuery.bind(this);
  }
  componentDidMount() {
    this.track.current && this.track.current.addEventListener("load", this.onTrackLoaded), this.onLoaded();
  }
  componentWillUnmount() {
    this.track.current && this.track.current.removeEventListener("load", this.onTrackLoaded);
  }
  render() {
    let t = null, i = null;
    this.state.loaded && (t = this.track.current.track, i = this.metatrack.current.track);
    const c = this.props.preload ? "true" : "false", h = this.props.metadata ? /* @__PURE__ */ p.jsx(
      $e,
      {
        url: this.props.metadata,
        seek: this.seek,
        track: i
      }
    ) : "";
    return /* @__PURE__ */ p.jsx("div", { className: "webvtt-player", children: /* @__PURE__ */ p.jsxs("div", { className: "media", children: [
      /* @__PURE__ */ p.jsx("div", { className: "player", children: /* @__PURE__ */ p.jsxs(
        "audio",
        {
          controls: !0,
          crossOrigin: "anonymous",
          onLoadedData: this.onLoaded,
          preload: c,
          ref: this.audio,
          children: [
            /* @__PURE__ */ p.jsx("source", { src: this.props.audio }),
            /* @__PURE__ */ p.jsx(
              "track",
              {
                default: !0,
                kind: "subtitles",
                src: this.props.transcript,
                ref: this.track
              }
            ),
            /* @__PURE__ */ p.jsx(
              "track",
              {
                default: !0,
                kind: "metadata",
                src: this.props.metadata,
                ref: this.metatrack
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ p.jsxs("div", { className: "tracks", children: [
        /* @__PURE__ */ p.jsx(
          Ce,
          {
            url: this.props.transcript,
            seek: this.seek,
            track: t,
            query: this.state.query
          }
        ),
        h
      ] }),
      /* @__PURE__ */ p.jsx(Ie, { query: this.state.query, updateQuery: this.updateQuery })
    ] }) });
  }
  onLoaded() {
    const t = this.track.current && this.track.current.track;
    t && t.cues && t.cues.length > 0 && this.setState({ loaded: !0 });
  }
  onTrackLoaded() {
    const t = this.track.current && this.track.current.track;
    t && t.cues && t.cues.length > 0 && this.setState({ loaded: !0 });
  }
  seek(t) {
    this.audio.current.currentTime = t, this.audio.current.play();
  }
  updateQuery(t) {
    this.setState({ query: t });
  }
}
Ge.propTypes = {
  audio: $.string,
  transcript: $.string,
  metadata: $.string,
  preload: $.bool,
  query: $.string
};
export {
  $e as Metadata,
  Ge as Player,
  Ie as Search,
  Ce as Transcript
};
