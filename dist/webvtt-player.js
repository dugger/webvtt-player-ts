import ae, { useState as Y, useEffect as V, useRef as L } from "react";
var N = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J;
function oe() {
  if (J) return R;
  J = 1;
  var r = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function t(l, o, a) {
    var p = null;
    if (a !== void 0 && (p = "" + a), o.key !== void 0 && (p = "" + o.key), "key" in o) {
      a = {};
      for (var m in o)
        m !== "key" && (a[m] = o[m]);
    } else a = o;
    return o = a.ref, {
      $$typeof: r,
      type: l,
      key: p,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return R.Fragment = i, R.jsx = t, R.jsxs = t, R;
}
var y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function ce() {
  return q || (q = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case u:
          return "Fragment";
        case T:
          return "Profiler";
        case S:
          return "StrictMode";
        case Z:
          return "Suspense";
        case K:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case w:
            return "Portal";
          case Q:
            return (e.displayName || "Context") + ".Provider";
          case H:
            return (e._context.displayName || "Context") + ".Consumer";
          case B:
            var s = e.render;
            return e = e.displayName, e || (e = s.displayName || s.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return s = e.displayName || null, s !== null ? s : r(e.type) || "Memo";
          case M:
            s = e._payload, e = e._init;
            try {
              return r(e(s));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function t(e) {
      try {
        i(e);
        var s = !1;
      } catch {
        s = !0;
      }
      if (s) {
        s = console;
        var c = s.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          s,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), i(e);
      }
    }
    function l(e) {
      if (e === u) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === M)
        return "<...>";
      try {
        var s = r(e);
        return s ? "<" + s + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = A.A;
      return e === null ? null : e.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if (I.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, s) {
      function c() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          s
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function E() {
      var e = r(this.type);
      return F[e] || (F[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function k(e, s, c, d, v, h, P, C) {
      return c = h.ref, e = {
        $$typeof: g,
        type: e,
        key: s,
        props: h,
        _owner: v
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: E
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
        value: P
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, s, c, d, v, h, P, C) {
      var f = s.children;
      if (f !== void 0)
        if (d)
          if (ne(f)) {
            for (d = 0; d < f.length; d++)
              j(f[d]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(f);
      if (I.call(s, "key")) {
        f = r(e);
        var b = Object.keys(s).filter(function(se) {
          return se !== "key";
        });
        d = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", z[f + d] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          f,
          b,
          f
        ), z[f + d] = !0);
      }
      if (f = null, c !== void 0 && (t(c), f = "" + c), p(s) && (t(s.key), f = "" + s.key), "key" in s) {
        c = {};
        for (var $ in s)
          $ !== "key" && (c[$] = s[$]);
      } else c = s;
      return f && m(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), k(
        e,
        f,
        h,
        v,
        o(),
        c,
        P,
        C
      );
    }
    function j(e) {
      typeof e == "object" && e !== null && e.$$typeof === g && e._store && (e._store.validated = 1);
    }
    var x = ae, g = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), A = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, ne = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var D, F = {}, W = x["react-stack-bottom-frame"].bind(
      x,
      a
    )(), U = O(l(a)), z = {};
    y.Fragment = u, y.jsx = function(e, s, c, d, v) {
      var h = 1e4 > A.recentlyCreatedOwnerStacks++;
      return _(
        e,
        s,
        c,
        !1,
        d,
        v,
        h ? Error("react-stack-top-frame") : W,
        h ? O(l(e)) : U
      );
    }, y.jsxs = function(e, s, c, d, v) {
      var h = 1e4 > A.recentlyCreatedOwnerStacks++;
      return _(
        e,
        s,
        c,
        !0,
        d,
        v,
        h ? Error("react-stack-top-frame") : W,
        h ? O(l(e)) : U
      );
    };
  }()), y;
}
var G;
function ie() {
  return G || (G = 1, process.env.NODE_ENV === "production" ? N.exports = oe() : N.exports = ce()), N.exports;
}
var n = ie();
function le({ cue: r, seek: i, query: t }) {
  const [l, o] = Y(!1);
  V(() => {
    r.onenter = () => o(!0), r.onexit = () => o(!1);
  }, [r]);
  let a = "";
  return t && r.text.match(new RegExp(t, "i")) ? a = "match" : l && (a = "active"), /* @__PURE__ */ n.jsxs("div", { className: `${a} line`, onClick: () => i(r.startTime), children: [
    /* @__PURE__ */ n.jsxs("div", { className: "time", children: [
      "[",
      ue(r.startTime),
      " - ",
      de(r.endTime),
      "]"
    ] }),
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `${a} text`,
        dangerouslySetInnerHTML: { __html: r.text }
      }
    )
  ] });
}
function ue(r) {
  return X(r);
}
function de(r) {
  return X(r);
}
function X(r) {
  const i = Math.floor(r / 60), t = Math.floor(r % 60);
  return `${String(i).padStart(2, "0")}:${String(t).padStart(2, "0")}`;
}
function fe({ track: r, seek: i, query: t }) {
  const l = [];
  if (r && r.cues)
    for (let o = 0; o < r.cues.length; o++)
      l.push(
        /* @__PURE__ */ n.jsx(
          le,
          {
            cue: r.cues[o],
            seek: i,
            query: t
          },
          `line-${o}`
        )
      );
  return /* @__PURE__ */ n.jsx("div", { className: "track", children: l });
}
function me({ cue: r, seek: i }) {
  const t = JSON.parse(r.text), l = t.title_alt ? /* @__PURE__ */ n.jsx("h3", { className: "titleAlt", children: t.title_alt }) : "", o = t.synopsis ? /* @__PURE__ */ n.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ n.jsx("span", { children: "Synopsis" }),
    t.synopsis
  ] }) : "", a = t.synopsis_alt ? /* @__PURE__ */ n.jsx("div", { children: t.synopsis_alt }) : "", p = t.keywords ? /* @__PURE__ */ n.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ n.jsx("span", { children: "Keywords: " }),
    t.keywords
  ] }) : "", m = t.keywords_alt ? /* @__PURE__ */ n.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ n.jsx("span", { children: "Alternative Keywords: " }),
    t.keywords_alt
  ] }) : "", E = t.subjects ? /* @__PURE__ */ n.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ n.jsx("span", { children: "Subjects: " }),
    t.subjects
  ] }) : "", k = t.subjects_alt ? /* @__PURE__ */ n.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ n.jsx("span", { children: "Alternative Subjects: " }),
    t.subjects_alt
  ] }) : "", _ = t.gpspoints.gps ? /* @__PURE__ */ n.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ n.jsx("span", { children: "Geo: " }),
    /* @__PURE__ */ n.jsx("a", { href: `https://www.google.com/maps/@?api=1&map_action=map&center=${t.gpspoints.gps}&zoom=${t.gpspoints.gps_zoom}`, children: t.gpspoints.gps_text })
  ] }) : "", j = t.hyperlinks.hyperlink_text ? /* @__PURE__ */ n.jsxs("div", { className: "field", children: [
    /* @__PURE__ */ n.jsx("span", { children: "Links: " }),
    /* @__PURE__ */ n.jsx("a", { href: t.hyperlinks.hyperlink, children: t.hyperlinks.hyperlink_text })
  ] }) : "";
  return /* @__PURE__ */ n.jsxs("div", { className: "point", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "time", onClick: () => i(r.startTime), children: [
      "[",
      pe(r.startTime),
      "]"
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "text", children: [
      /* @__PURE__ */ n.jsx("h2", { className: "title", onClick: () => i(r.startTime), children: t.title }),
      l,
      o,
      a,
      p,
      m,
      E,
      k,
      _,
      j
    ] })
  ] });
}
function pe(r) {
  return he(r);
}
function he(r) {
  const i = Math.floor(r / 60), t = Math.floor(r % 60);
  return `${String(i).padStart(2, "0")}:${String(t).padStart(2, "0")}`;
}
function ve({ track: r, seek: i }) {
  const t = [];
  if (r && r.cues)
    for (let l = 0; l < r.cues.length; l++)
      t.push(
        /* @__PURE__ */ n.jsx(
          me,
          {
            cue: r.cues[l],
            seek: i
          },
          `point-${l}`
        )
      );
  return /* @__PURE__ */ n.jsx("div", { className: "track", children: t });
}
const je = ({ query: r, updateQuery: i }) => /* @__PURE__ */ n.jsx("div", { className: "search", children: /* @__PURE__ */ n.jsxs("div", { className: "container", children: [
  /* @__PURE__ */ n.jsx("span", { className: "icon", children: "🔍" }),
  /* @__PURE__ */ n.jsx(
    "input",
    {
      value: r,
      onChange: (t) => i(t.target.value)
    }
  )
] }) });
function Ee(r) {
  const [i, t] = Y(!1), [l, o] = Y(""), a = L(null), p = L(null), m = L(null);
  V(() => {
    const u = a.current;
    function S() {
      const T = a.current && a.current.track;
      T && T.cues && T.cues.length > 0 && t(!0);
    }
    return u && u.addEventListener("load", S), E(), () => {
      u && u.removeEventListener("load", S);
    };
  }, []);
  function E() {
    const u = a.current && a.current.track;
    u && u.cues && u.cues.length > 0 && t(!0);
  }
  function k(u) {
    m.current && (m.current.currentTime = u, m.current.play());
  }
  function _(u) {
    o(u);
  }
  let j = null, x = null;
  i && (j = a.current && a.current.track, x = p.current && p.current.track);
  const g = r.preload ? "true" : "false", w = r.metadata ? /* @__PURE__ */ n.jsx(ve, { seek: k, track: x ?? void 0 }) : "";
  return /* @__PURE__ */ n.jsx("div", { className: "webvtt-player", children: /* @__PURE__ */ n.jsxs("div", { className: "media", children: [
    /* @__PURE__ */ n.jsx("div", { className: "player", children: /* @__PURE__ */ n.jsxs(
      "audio",
      {
        controls: !0,
        crossOrigin: "anonymous",
        onLoadedData: E,
        preload: g,
        ref: m,
        children: [
          /* @__PURE__ */ n.jsx("source", { src: r.audio }),
          /* @__PURE__ */ n.jsx(
            "track",
            {
              default: !0,
              kind: "subtitles",
              src: r.transcript,
              ref: a
            }
          ),
          /* @__PURE__ */ n.jsx(
            "track",
            {
              default: !0,
              kind: "metadata",
              src: r.metadata,
              ref: p
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ n.jsxs("div", { className: "tracks", children: [
      /* @__PURE__ */ n.jsx(je, { query: l, updateQuery: _ }),
      /* @__PURE__ */ n.jsx(
        fe,
        {
          seek: k,
          track: j ?? void 0,
          query: l
        }
      ),
      w
    ] })
  ] }) });
}
export {
  ve as Metadata,
  Ee as Player,
  je as Search,
  fe as Transcript
};
