import qe, { useState as pe, useEffect as we, useRef as se } from "react";
function Le(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ne = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function De() {
  if (me) return ee;
  me = 1;
  var r = Symbol.for("react.transitional.element"), y = Symbol.for("react.fragment");
  function n(f, u, o) {
    var E = null;
    if (o !== void 0 && (E = "" + o), u.key !== void 0 && (E = "" + u.key), "key" in u) {
      o = {};
      for (var p in u)
        p !== "key" && (o[p] = u[p]);
    } else o = u;
    return u = o.ref, {
      $$typeof: r,
      type: f,
      key: E,
      ref: u !== void 0 ? u : null,
      props: o
    };
  }
  return ee.Fragment = y, ee.jsx = n, ee.jsxs = n, ee;
}
var re = {};
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
function We() {
  return he || (he = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case Y:
          return "Profiler";
        case x:
          return "StrictMode";
        case s:
          return "Suspense";
        case F:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case $:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case C:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case V:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function y(e) {
      return "" + e;
    }
    function n(e) {
      try {
        y(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var i = t.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), y(e);
      }
    }
    function f(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === V)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (G.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, t) {
      function i() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function j() {
      var e = r(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function S(e, t, i, c, l, m, h, b) {
      return i = m.ref, e = {
        $$typeof: k,
        type: e,
        key: t,
        props: m,
        _owner: l
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: h
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: b
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, t, i, c, l, m, h, b) {
      var d = t.children;
      if (d !== void 0)
        if (c)
          if (K(d)) {
            for (c = 0; c < d.length; c++)
              R(d[c]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(d);
      if (G.call(t, "key")) {
        d = r(e);
        var _ = Object.keys(t).filter(function(N) {
          return N !== "key";
        });
        c = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", X[d + c] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          d,
          _,
          d
        ), X[d + c] = !0);
      }
      if (d = null, i !== void 0 && (n(i), d = "" + i), E(t) && (n(t.key), d = "" + t.key), "key" in t) {
        i = {};
        for (var g in t)
          g !== "key" && (i[g] = t[g]);
      } else i = t;
      return d && p(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), S(
        e,
        d,
        m,
        l,
        u(),
        i,
        h,
        b
      );
    }
    function R(e) {
      typeof e == "object" && e !== null && e.$$typeof === k && e._store && (e._store.validated = 1);
    }
    var A = qe, k = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), U = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, K = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    A = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var B, q = {}, D = A["react-stack-bottom-frame"].bind(
      A,
      o
    )(), J = L(f(o)), X = {};
    re.Fragment = w, re.jsx = function(e, t, i, c, l) {
      var m = 1e4 > U.recentlyCreatedOwnerStacks++;
      return T(
        e,
        t,
        i,
        !1,
        c,
        l,
        m ? Error("react-stack-top-frame") : D,
        m ? L(f(e)) : J
      );
    }, re.jsxs = function(e, t, i, c, l) {
      var m = 1e4 > U.recentlyCreatedOwnerStacks++;
      return T(
        e,
        t,
        i,
        !0,
        c,
        l,
        m ? Error("react-stack-top-frame") : D,
        m ? L(f(e)) : J
      );
    };
  }()), re;
}
var be;
function Fe() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? ne.exports = De() : ne.exports = We()), ne.exports;
}
var v = Fe(), oe = { exports: {} }, ae = { exports: {} }, O = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function Ue() {
  if (Te) return O;
  Te = 1;
  var r = typeof Symbol == "function" && Symbol.for, y = r ? Symbol.for("react.element") : 60103, n = r ? Symbol.for("react.portal") : 60106, f = r ? Symbol.for("react.fragment") : 60107, u = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, E = r ? Symbol.for("react.provider") : 60109, p = r ? Symbol.for("react.context") : 60110, j = r ? Symbol.for("react.async_mode") : 60111, S = r ? Symbol.for("react.concurrent_mode") : 60111, T = r ? Symbol.for("react.forward_ref") : 60112, R = r ? Symbol.for("react.suspense") : 60113, A = r ? Symbol.for("react.suspense_list") : 60120, k = r ? Symbol.for("react.memo") : 60115, M = r ? Symbol.for("react.lazy") : 60116, w = r ? Symbol.for("react.block") : 60121, x = r ? Symbol.for("react.fundamental") : 60117, Y = r ? Symbol.for("react.responder") : 60118, z = r ? Symbol.for("react.scope") : 60119;
  function $(s) {
    if (typeof s == "object" && s !== null) {
      var F = s.$$typeof;
      switch (F) {
        case y:
          switch (s = s.type, s) {
            case j:
            case S:
            case f:
            case o:
            case u:
            case R:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case p:
                case T:
                case M:
                case k:
                case E:
                  return s;
                default:
                  return F;
              }
          }
        case n:
          return F;
      }
    }
  }
  function C(s) {
    return $(s) === S;
  }
  return O.AsyncMode = j, O.ConcurrentMode = S, O.ContextConsumer = p, O.ContextProvider = E, O.Element = y, O.ForwardRef = T, O.Fragment = f, O.Lazy = M, O.Memo = k, O.Portal = n, O.Profiler = o, O.StrictMode = u, O.Suspense = R, O.isAsyncMode = function(s) {
    return C(s) || $(s) === j;
  }, O.isConcurrentMode = C, O.isContextConsumer = function(s) {
    return $(s) === p;
  }, O.isContextProvider = function(s) {
    return $(s) === E;
  }, O.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === y;
  }, O.isForwardRef = function(s) {
    return $(s) === T;
  }, O.isFragment = function(s) {
    return $(s) === f;
  }, O.isLazy = function(s) {
    return $(s) === M;
  }, O.isMemo = function(s) {
    return $(s) === k;
  }, O.isPortal = function(s) {
    return $(s) === n;
  }, O.isProfiler = function(s) {
    return $(s) === o;
  }, O.isStrictMode = function(s) {
    return $(s) === u;
  }, O.isSuspense = function(s) {
    return $(s) === R;
  }, O.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === f || s === S || s === o || s === u || s === R || s === A || typeof s == "object" && s !== null && (s.$$typeof === M || s.$$typeof === k || s.$$typeof === E || s.$$typeof === p || s.$$typeof === T || s.$$typeof === x || s.$$typeof === Y || s.$$typeof === z || s.$$typeof === w);
  }, O.typeOf = $, O;
}
var P = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function ze() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, y = r ? Symbol.for("react.element") : 60103, n = r ? Symbol.for("react.portal") : 60106, f = r ? Symbol.for("react.fragment") : 60107, u = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, E = r ? Symbol.for("react.provider") : 60109, p = r ? Symbol.for("react.context") : 60110, j = r ? Symbol.for("react.async_mode") : 60111, S = r ? Symbol.for("react.concurrent_mode") : 60111, T = r ? Symbol.for("react.forward_ref") : 60112, R = r ? Symbol.for("react.suspense") : 60113, A = r ? Symbol.for("react.suspense_list") : 60120, k = r ? Symbol.for("react.memo") : 60115, M = r ? Symbol.for("react.lazy") : 60116, w = r ? Symbol.for("react.block") : 60121, x = r ? Symbol.for("react.fundamental") : 60117, Y = r ? Symbol.for("react.responder") : 60118, z = r ? Symbol.for("react.scope") : 60119;
    function $(a) {
      return typeof a == "string" || typeof a == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      a === f || a === S || a === o || a === u || a === R || a === A || typeof a == "object" && a !== null && (a.$$typeof === M || a.$$typeof === k || a.$$typeof === E || a.$$typeof === p || a.$$typeof === T || a.$$typeof === x || a.$$typeof === Y || a.$$typeof === z || a.$$typeof === w);
    }
    function C(a) {
      if (typeof a == "object" && a !== null) {
        var W = a.$$typeof;
        switch (W) {
          case y:
            var te = a.type;
            switch (te) {
              case j:
              case S:
              case f:
              case o:
              case u:
              case R:
                return te;
              default:
                var ve = te && te.$$typeof;
                switch (ve) {
                  case p:
                  case T:
                  case M:
                  case k:
                  case E:
                    return ve;
                  default:
                    return W;
                }
            }
          case n:
            return W;
        }
      }
    }
    var s = j, F = S, H = p, V = E, Q = y, Z = T, U = f, G = M, K = k, L = n, B = o, q = u, D = R, J = !1;
    function X(a) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(a) || C(a) === j;
    }
    function e(a) {
      return C(a) === S;
    }
    function t(a) {
      return C(a) === p;
    }
    function i(a) {
      return C(a) === E;
    }
    function c(a) {
      return typeof a == "object" && a !== null && a.$$typeof === y;
    }
    function l(a) {
      return C(a) === T;
    }
    function m(a) {
      return C(a) === f;
    }
    function h(a) {
      return C(a) === M;
    }
    function b(a) {
      return C(a) === k;
    }
    function d(a) {
      return C(a) === n;
    }
    function _(a) {
      return C(a) === o;
    }
    function g(a) {
      return C(a) === u;
    }
    function N(a) {
      return C(a) === R;
    }
    P.AsyncMode = s, P.ConcurrentMode = F, P.ContextConsumer = H, P.ContextProvider = V, P.Element = Q, P.ForwardRef = Z, P.Fragment = U, P.Lazy = G, P.Memo = K, P.Portal = L, P.Profiler = B, P.StrictMode = q, P.Suspense = D, P.isAsyncMode = X, P.isConcurrentMode = e, P.isContextConsumer = t, P.isContextProvider = i, P.isElement = c, P.isForwardRef = l, P.isFragment = m, P.isLazy = h, P.isMemo = b, P.isPortal = d, P.isProfiler = _, P.isStrictMode = g, P.isSuspense = N, P.isValidElementType = $, P.typeOf = C;
  }()), P;
}
var _e;
function Ae() {
  return _e || (_e = 1, process.env.NODE_ENV === "production" ? ae.exports = Ue() : ae.exports = ze()), ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ie, ge;
function Je() {
  if (ge) return ie;
  ge = 1;
  var r = Object.getOwnPropertySymbols, y = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function f(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var E = {}, p = 0; p < 10; p++)
        E["_" + String.fromCharCode(p)] = p;
      var j = Object.getOwnPropertyNames(E).map(function(T) {
        return E[T];
      });
      if (j.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(T) {
        S[T] = T;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = u() ? Object.assign : function(o, E) {
    for (var p, j = f(o), S, T = 1; T < arguments.length; T++) {
      p = Object(arguments[T]);
      for (var R in p)
        y.call(p, R) && (j[R] = p[R]);
      if (r) {
        S = r(p);
        for (var A = 0; A < S.length; A++)
          n.call(p, S[A]) && (j[S[A]] = p[S[A]]);
      }
    }
    return j;
  }, ie;
}
var ce, xe;
function ye() {
  if (xe) return ce;
  xe = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ce = r, ce;
}
var ue, Re;
function ke() {
  return Re || (Re = 1, ue = Function.call.bind(Object.prototype.hasOwnProperty)), ue;
}
var fe, Se;
function Ve() {
  if (Se) return fe;
  Se = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var y = /* @__PURE__ */ ye(), n = {}, f = /* @__PURE__ */ ke();
    r = function(o) {
      var E = "Warning: " + o;
      typeof console < "u" && console.error(E);
      try {
        throw new Error(E);
      } catch {
      }
    };
  }
  function u(o, E, p, j, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var T in o)
        if (f(o, T)) {
          var R;
          try {
            if (typeof o[T] != "function") {
              var A = Error(
                (j || "React class") + ": " + p + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            R = o[T](E, T, j, p, null, y);
          } catch (M) {
            R = M;
          }
          if (R && !(R instanceof Error) && r(
            (j || "React class") + ": type specification of " + p + " `" + T + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in n)) {
            n[R.message] = !0;
            var k = S ? S() : "";
            r(
              "Failed " + p + " type: " + R.message + (k ?? "")
            );
          }
        }
    }
  }
  return u.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, fe = u, fe;
}
var le, je;
function Ge() {
  if (je) return le;
  je = 1;
  var r = Ae(), y = Je(), n = /* @__PURE__ */ ye(), f = /* @__PURE__ */ ke(), u = /* @__PURE__ */ Ve(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(p) {
    var j = "Warning: " + p;
    typeof console < "u" && console.error(j);
    try {
      throw new Error(j);
    } catch {
    }
  });
  function E() {
    return null;
  }
  return le = function(p, j) {
    var S = typeof Symbol == "function" && Symbol.iterator, T = "@@iterator";
    function R(e) {
      var t = e && (S && e[S] || e[T]);
      if (typeof t == "function")
        return t;
    }
    var A = "<<anonymous>>", k = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: z(),
      arrayOf: $,
      element: C(),
      elementType: s(),
      instanceOf: F,
      node: Z(),
      objectOf: V,
      oneOf: H,
      oneOfType: Q,
      shape: G,
      exact: K
    };
    function M(e, t) {
      return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
    }
    function w(e, t) {
      this.message = e, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function x(e) {
      if (process.env.NODE_ENV !== "production")
        var t = {}, i = 0;
      function c(m, h, b, d, _, g, N) {
        if (d = d || A, g = g || b, N !== n) {
          if (j) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw a.name = "Invariant Violation", a;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var W = d + ":" + b;
            !t[W] && // Avoid spamming the console because they are often not actionable except for lib authors
            i < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + g + "` prop on `" + d + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), t[W] = !0, i++);
          }
        }
        return h[b] == null ? m ? h[b] === null ? new w("The " + _ + " `" + g + "` is marked as required " + ("in `" + d + "`, but its value is `null`.")) : new w("The " + _ + " `" + g + "` is marked as required in " + ("`" + d + "`, but its value is `undefined`.")) : null : e(h, b, d, _, g);
      }
      var l = c.bind(null, !1);
      return l.isRequired = c.bind(null, !0), l;
    }
    function Y(e) {
      function t(i, c, l, m, h, b) {
        var d = i[c], _ = q(d);
        if (_ !== e) {
          var g = D(d);
          return new w(
            "Invalid " + m + " `" + h + "` of type " + ("`" + g + "` supplied to `" + l + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return x(t);
    }
    function z() {
      return x(E);
    }
    function $(e) {
      function t(i, c, l, m, h) {
        if (typeof e != "function")
          return new w("Property `" + h + "` of component `" + l + "` has invalid PropType notation inside arrayOf.");
        var b = i[c];
        if (!Array.isArray(b)) {
          var d = q(b);
          return new w("Invalid " + m + " `" + h + "` of type " + ("`" + d + "` supplied to `" + l + "`, expected an array."));
        }
        for (var _ = 0; _ < b.length; _++) {
          var g = e(b, _, l, m, h + "[" + _ + "]", n);
          if (g instanceof Error)
            return g;
        }
        return null;
      }
      return x(t);
    }
    function C() {
      function e(t, i, c, l, m) {
        var h = t[i];
        if (!p(h)) {
          var b = q(h);
          return new w("Invalid " + l + " `" + m + "` of type " + ("`" + b + "` supplied to `" + c + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(e);
    }
    function s() {
      function e(t, i, c, l, m) {
        var h = t[i];
        if (!r.isValidElementType(h)) {
          var b = q(h);
          return new w("Invalid " + l + " `" + m + "` of type " + ("`" + b + "` supplied to `" + c + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(e);
    }
    function F(e) {
      function t(i, c, l, m, h) {
        if (!(i[c] instanceof e)) {
          var b = e.name || A, d = X(i[c]);
          return new w("Invalid " + m + " `" + h + "` of type " + ("`" + d + "` supplied to `" + l + "`, expected ") + ("instance of `" + b + "`."));
        }
        return null;
      }
      return x(t);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), E;
      function t(i, c, l, m, h) {
        for (var b = i[c], d = 0; d < e.length; d++)
          if (M(b, e[d]))
            return null;
        var _ = JSON.stringify(e, function(N, a) {
          var W = D(a);
          return W === "symbol" ? String(a) : a;
        });
        return new w("Invalid " + m + " `" + h + "` of value `" + String(b) + "` " + ("supplied to `" + l + "`, expected one of " + _ + "."));
      }
      return x(t);
    }
    function V(e) {
      function t(i, c, l, m, h) {
        if (typeof e != "function")
          return new w("Property `" + h + "` of component `" + l + "` has invalid PropType notation inside objectOf.");
        var b = i[c], d = q(b);
        if (d !== "object")
          return new w("Invalid " + m + " `" + h + "` of type " + ("`" + d + "` supplied to `" + l + "`, expected an object."));
        for (var _ in b)
          if (f(b, _)) {
            var g = e(b, _, l, m, h + "." + _, n);
            if (g instanceof Error)
              return g;
          }
        return null;
      }
      return x(t);
    }
    function Q(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), E;
      for (var t = 0; t < e.length; t++) {
        var i = e[t];
        if (typeof i != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + J(i) + " at index " + t + "."
          ), E;
      }
      function c(l, m, h, b, d) {
        for (var _ = [], g = 0; g < e.length; g++) {
          var N = e[g], a = N(l, m, h, b, d, n);
          if (a == null)
            return null;
          a.data && f(a.data, "expectedType") && _.push(a.data.expectedType);
        }
        var W = _.length > 0 ? ", expected one of type [" + _.join(", ") + "]" : "";
        return new w("Invalid " + b + " `" + d + "` supplied to " + ("`" + h + "`" + W + "."));
      }
      return x(c);
    }
    function Z() {
      function e(t, i, c, l, m) {
        return L(t[i]) ? null : new w("Invalid " + l + " `" + m + "` supplied to " + ("`" + c + "`, expected a ReactNode."));
      }
      return x(e);
    }
    function U(e, t, i, c, l) {
      return new w(
        (e || "React class") + ": " + t + " type `" + i + "." + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + l + "`."
      );
    }
    function G(e) {
      function t(i, c, l, m, h) {
        var b = i[c], d = q(b);
        if (d !== "object")
          return new w("Invalid " + m + " `" + h + "` of type `" + d + "` " + ("supplied to `" + l + "`, expected `object`."));
        for (var _ in e) {
          var g = e[_];
          if (typeof g != "function")
            return U(l, m, h, _, D(g));
          var N = g(b, _, l, m, h + "." + _, n);
          if (N)
            return N;
        }
        return null;
      }
      return x(t);
    }
    function K(e) {
      function t(i, c, l, m, h) {
        var b = i[c], d = q(b);
        if (d !== "object")
          return new w("Invalid " + m + " `" + h + "` of type `" + d + "` " + ("supplied to `" + l + "`, expected `object`."));
        var _ = y({}, i[c], e);
        for (var g in _) {
          var N = e[g];
          if (f(e, g) && typeof N != "function")
            return U(l, m, h, g, D(N));
          if (!N)
            return new w(
              "Invalid " + m + " `" + h + "` key `" + g + "` supplied to `" + l + "`.\nBad object: " + JSON.stringify(i[c], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var a = N(b, g, l, m, h + "." + g, n);
          if (a)
            return a;
        }
        return null;
      }
      return x(t);
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
          if (e === null || p(e))
            return !0;
          var t = R(e);
          if (t) {
            var i = t.call(e), c;
            if (t !== e.entries) {
              for (; !(c = i.next()).done; )
                if (!L(c.value))
                  return !1;
            } else
              for (; !(c = i.next()).done; ) {
                var l = c.value;
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
    function B(e, t) {
      return e === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
    }
    function q(e) {
      var t = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : B(t, e) ? "symbol" : t;
    }
    function D(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var t = q(e);
      if (t === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return t;
    }
    function J(e) {
      var t = D(e);
      switch (t) {
        case "array":
        case "object":
          return "an " + t;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + t;
        default:
          return t;
      }
    }
    function X(e) {
      return !e.constructor || !e.constructor.name ? A : e.constructor.name;
    }
    return k.checkPropTypes = u, k.resetWarningCache = u.resetWarningCache, k.PropTypes = k, k;
  }, le;
}
var de, Oe;
function Be() {
  if (Oe) return de;
  Oe = 1;
  var r = /* @__PURE__ */ ye();
  function y() {
  }
  function n() {
  }
  return n.resetWarningCache = y, de = function() {
    function f(E, p, j, S, T, R) {
      if (R !== r) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    f.isRequired = f;
    function u() {
      return f;
    }
    var o = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: u,
      element: f,
      elementType: f,
      instanceOf: u,
      node: f,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: n,
      resetWarningCache: y
    };
    return o.PropTypes = o, o;
  }, de;
}
var Pe;
function Xe() {
  if (Pe) return oe.exports;
  if (Pe = 1, process.env.NODE_ENV !== "production") {
    var r = Ae(), y = !0;
    oe.exports = /* @__PURE__ */ Ge()(r.isElement, y);
  } else
    oe.exports = /* @__PURE__ */ Be()();
  return oe.exports;
}
var He = /* @__PURE__ */ Xe();
const I = /* @__PURE__ */ Le(He);
function Ce({ cue: r, seek: y, query: n }) {
  const [f, u] = pe(!1);
  we(() => {
    r.onenter = () => u(!0), r.onexit = () => u(!1);
  }, [r]);
  let o = "";
  return n && r.text.match(new RegExp(n, "i")) ? o = "match" : f && (o = "active"), /* @__PURE__ */ v.jsxs("div", { className: `${o} line`, onClick: () => y(r.startTime), children: [
    /* @__PURE__ */ v.jsxs("div", { className: "time", children: [
      "[",
      Qe(r.startTime),
      " - ",
      Ze(r.endTime),
      "]"
    ] }),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        className: `${o} text`,
        dangerouslySetInnerHTML: { __html: r.text }
      }
    )
  ] });
}
function Qe(r) {
  return $e(r);
}
function Ze(r) {
  return $e(r);
}
function $e(r) {
  let y = Math.floor(r / 60);
  y < 10 && (y = `0${y}`);
  let n = Math.floor(r % 60);
  return n < 10 && (n = `0${n}`), `${y}:${n}`;
}
Ce.propTypes = {
  cue: I.object,
  seek: I.func,
  query: I.string
};
function Ie({ track: r, seek: y, query: n, url: f }) {
  const u = [];
  if (r && r.cues)
    for (let o = 0; o < r.cues.length; o++)
      u.push(
        /* @__PURE__ */ v.jsx(
          Ce,
          {
            cue: r.cues[o],
            active: !1,
            seek: y,
            query: n
          },
          `line-${o}`
        )
      );
  return /* @__PURE__ */ v.jsx("div", { className: "track", children: u });
}
Ie.propTypes = {
  track: I.object,
  url: I.string,
  seek: I.func,
  query: I.string
};
function Me({ cue: r, seek: y }) {
  const n = JSON.parse(r.text), f = n.title_alt ? /* @__PURE__ */ v.jsx("h3", { className: "titleAlt", children: n.title_alt }) : "", u = n.synopsis ? /* @__PURE__ */ v.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ v.jsx("span", { children: "Synopsis" }),
    n.synopsis
  ] }) : "", o = n.synopsis_alt ? /* @__PURE__ */ v.jsx("div", { children: n.synopsis_alt }) : "", E = n.keywords ? /* @__PURE__ */ v.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ v.jsx("span", { children: "Keywords: " }),
    n.keywords
  ] }) : "", p = n.keywords_alt ? /* @__PURE__ */ v.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ v.jsx("span", { children: "Alternative Keywords: " }),
    n.keywords_alt
  ] }) : "", j = n.subjects ? /* @__PURE__ */ v.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ v.jsx("span", { children: "Subjects: " }),
    n.subjects
  ] }) : "", S = n.subjects_alt ? /* @__PURE__ */ v.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ v.jsx("span", { children: "Alternative Subjects: " }),
    n.subjects_alt
  ] }) : "", T = n.gpspoints.gps ? /* @__PURE__ */ v.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ v.jsx("span", { children: "Geo: " }),
    /* @__PURE__ */ v.jsx("a", { href: `https://www.google.com/maps/@?api=1&map_action=map&center=${n.gpspoints.gps}&zoom=${n.gpspoints.gps_zoom}`, children: n.gpspoints.gps_text })
  ] }) : "", R = n.hyperlinks.hyperlink_text ? /* @__PURE__ */ v.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ v.jsx("span", { children: "Links: " }),
    /* @__PURE__ */ v.jsx("a", { href: n.hyperlinks.hyperlink, children: n.hyperlinks.hyperlink_text })
  ] }) : "";
  return /* @__PURE__ */ v.jsxs("div", { className: "point", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "time", onClick: () => y(r.startTime), children: [
      "[",
      Ke(r.startTime),
      "]"
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "text", children: [
      /* @__PURE__ */ v.jsx("h2", { className: "title", onClick: () => y(r.startTime), children: n.title }),
      f,
      u,
      o,
      E,
      p,
      j,
      S,
      T,
      R
    ] })
  ] });
}
function Ke(r) {
  return er(r);
}
function er(r) {
  let y = Math.floor(r / 60);
  y < 10 && (y = `0${y}`);
  let n = Math.floor(r % 60);
  return n < 10 && (n = `0${n}`), `${y}:${n}`;
}
Me.propTypes = {
  cue: I.object,
  seek: I.func
};
function Ne({ track: r, seek: y, url: n }) {
  const f = [];
  if (r && r.cues)
    for (let u = 0; u < r.cues.length; u++)
      f.push(
        /* @__PURE__ */ v.jsx(
          Me,
          {
            cue: r.cues[u],
            active: !1,
            seek: y
          },
          `point-${u}`
        )
      );
  return /* @__PURE__ */ v.jsx("div", { className: "track", children: f });
}
Ne.propTypes = {
  track: I.object,
  url: I.string,
  seek: I.func
};
const Ye = ({ query: r, updateQuery: y }) => /* @__PURE__ */ v.jsx("div", { className: "search", children: /* @__PURE__ */ v.jsxs("div", { className: "container", children: [
  /* @__PURE__ */ v.jsx("span", { className: "icon", children: "🔍" }),
  /* @__PURE__ */ v.jsx(
    "input",
    {
      value: r,
      onChange: (n) => y(n.target.value)
    }
  )
] }) });
Ye.propTypes = {
  query: I.string,
  updateQuery: I.function
};
function rr(r) {
  const [y, n] = pe(!1), [f, u] = pe(""), o = se(), E = se(), p = se();
  we(() => {
    const x = o.current;
    return x && x.addEventListener("load", S), j(), () => {
      x && x.removeEventListener("load", S);
    };
  }, []);
  function j() {
    const x = o.current && o.current.track;
    x && x.cues && x.cues.length > 0 && n(!0);
  }
  function S() {
    const x = o.current && o.current.track;
    x && x.cues && x.cues.length > 0 && n(!0);
  }
  function T(x) {
    p.current && (p.current.currentTime = x, p.current.play());
  }
  function R(x) {
    u(x);
  }
  let A = null, k = null;
  y && (A = o.current.track, k = E.current.track);
  const M = r.preload ? "true" : "false", w = r.metadata ? /* @__PURE__ */ v.jsx(Ne, { url: r.metadata, seek: T, track: k }) : "";
  return /* @__PURE__ */ v.jsx("div", { className: "webvtt-player", children: /* @__PURE__ */ v.jsxs("div", { className: "media", children: [
    /* @__PURE__ */ v.jsx("div", { className: "player", children: /* @__PURE__ */ v.jsxs(
      "audio",
      {
        controls: !0,
        crossOrigin: "anonymous",
        onLoadedData: j,
        preload: M,
        ref: p,
        children: [
          /* @__PURE__ */ v.jsx("source", { src: r.audio }),
          /* @__PURE__ */ v.jsx(
            "track",
            {
              default: !0,
              kind: "subtitles",
              src: r.transcript,
              ref: o
            }
          ),
          /* @__PURE__ */ v.jsx(
            "track",
            {
              default: !0,
              kind: "metadata",
              src: r.metadata,
              ref: E
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ v.jsxs("div", { className: "tracks", children: [
      /* @__PURE__ */ v.jsx(
        Ie,
        {
          url: r.transcript,
          seek: T,
          track: A,
          query: f
        }
      ),
      w
    ] }),
    /* @__PURE__ */ v.jsx(Ye, { query: f, updateQuery: R })
  ] }) });
}
rr.propTypes = {
  audio: I.string,
  transcript: I.string,
  metadata: I.string,
  preload: I.bool,
  query: I.string
};
export {
  Ne as Metadata,
  rr as Player,
  Ye as Search,
  Ie as Transcript
};
