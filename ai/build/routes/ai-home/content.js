var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// package-external:@wordpress/i18n
var require_i18n = __commonJS({
  "package-external:@wordpress/i18n"(exports, module) {
    module.exports = window.wp.i18n;
  }
});

// package-external:@wordpress/components
var require_components = __commonJS({
  "package-external:@wordpress/components"(exports, module) {
    module.exports = window.wp.components;
  }
});

// vendor-external:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "vendor-external:react/jsx-runtime"(exports, module) {
    module.exports = window.ReactJSXRuntime;
  }
});

// package-external:@wordpress/element
var require_element = __commonJS({
  "package-external:@wordpress/element"(exports, module) {
    module.exports = window.wp.element;
  }
});

// package-external:@wordpress/core-data
var require_core_data = __commonJS({
  "package-external:@wordpress/core-data"(exports, module) {
    module.exports = window.wp.coreData;
  }
});

// package-external:@wordpress/data
var require_data = __commonJS({
  "package-external:@wordpress/data"(exports, module) {
    module.exports = window.wp.data;
  }
});

// package-external:@wordpress/compose
var require_compose = __commonJS({
  "package-external:@wordpress/compose"(exports, module) {
    module.exports = window.wp.compose;
  }
});

// package-external:@wordpress/primitives
var require_primitives = __commonJS({
  "package-external:@wordpress/primitives"(exports, module) {
    module.exports = window.wp.primitives;
  }
});

// package-external:@wordpress/private-apis
var require_private_apis = __commonJS({
  "package-external:@wordpress/private-apis"(exports, module) {
    module.exports = window.wp.privateApis;
  }
});

// package-external:@wordpress/date
var require_date = __commonJS({
  "package-external:@wordpress/date"(exports, module) {
    module.exports = window.wp.date;
  }
});

// node_modules/fast-deep-equal/es6/index.js
var require_es6 = __commonJS({
  "node_modules/fast-deep-equal/es6/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a2, b2) {
      if (a2 === b2) return true;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        if (a2.constructor !== b2.constructor) return false;
        var length, i2, keys;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b2.length) return false;
          for (i2 = length; i2-- !== 0; )
            if (!equal(a2[i2], b2[i2])) return false;
          return true;
        }
        if (a2 instanceof Map && b2 instanceof Map) {
          if (a2.size !== b2.size) return false;
          for (i2 of a2.entries())
            if (!b2.has(i2[0])) return false;
          for (i2 of a2.entries())
            if (!equal(i2[1], b2.get(i2[0]))) return false;
          return true;
        }
        if (a2 instanceof Set && b2 instanceof Set) {
          if (a2.size !== b2.size) return false;
          for (i2 of a2.entries())
            if (!b2.has(i2[0])) return false;
          return true;
        }
        if (ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
          length = a2.length;
          if (length != b2.length) return false;
          for (i2 = length; i2-- !== 0; )
            if (a2[i2] !== b2[i2]) return false;
          return true;
        }
        if (a2.constructor === RegExp) return a2.source === b2.source && a2.flags === b2.flags;
        if (a2.valueOf !== Object.prototype.valueOf) return a2.valueOf() === b2.valueOf();
        if (a2.toString !== Object.prototype.toString) return a2.toString() === b2.toString();
        keys = Object.keys(a2);
        length = keys.length;
        if (length !== Object.keys(b2).length) return false;
        for (i2 = length; i2-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i2])) return false;
        for (i2 = length; i2-- !== 0; ) {
          var key = keys[i2];
          if (!equal(a2[key], b2[key])) return false;
        }
        return true;
      }
      return a2 !== a2 && b2 !== b2;
    };
  }
});

// node_modules/deepmerge/dist/cjs.js
var require_cjs = __commonJS({
  "node_modules/deepmerge/dist/cjs.js"(exports, module) {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }
    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge;
      }
      var customMerge = options.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }
    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }
      getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }
    function deepmerge(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }
    deepmerge.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
      }, {});
    };
    var deepmerge_1 = deepmerge;
    module.exports = deepmerge_1;
  }
});

// package-external:@wordpress/notices
var require_notices = __commonJS({
  "package-external:@wordpress/notices"(exports, module) {
    module.exports = window.wp.notices;
  }
});

// node_modules/clsx/dist/clsx.mjs
function r(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var o2 = e2.length;
    for (t2 = 0; t2 < o2; t2++) e2[t2] && (f2 = r(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
  } else for (f2 in e2) e2[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = "", o2 = arguments.length; f2 < o2; f2++) (e2 = arguments[f2]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
var clsx_default = clsx;

// node_modules/@wordpress/admin-ui/build-module/navigable-region/index.mjs
var import_element = __toESM(require_element(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var NavigableRegion = (0, import_element.forwardRef)(
  ({ children, className, ariaLabel, as: Tag = "div", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Tag,
      {
        ref,
        className: clsx_default("admin-ui-navigable-region", className),
        "aria-label": ariaLabel,
        role: "region",
        tabIndex: "-1",
        ...props,
        children
      }
    );
  }
);
NavigableRegion.displayName = "NavigableRegion";
var navigable_region_default = NavigableRegion;

// node_modules/@wordpress/admin-ui/build-module/page/header.mjs
var import_components2 = __toESM(require_components(), 1);

// node_modules/@wordpress/admin-ui/build-module/page/sidebar-toggle-slot.mjs
var import_components = __toESM(require_components(), 1);
var { Fill: SidebarToggleFill, Slot: SidebarToggleSlot } = (0, import_components.createSlotFill)("SidebarToggle");

// node_modules/@wordpress/admin-ui/build-module/page/header.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function Header({
  breadcrumbs,
  badges,
  title,
  subTitle,
  actions,
  showSidebarToggle = true
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_components2.__experimentalVStack, { className: "admin-ui-page__header", as: "header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_components2.__experimentalHStack, { justify: "space-between", spacing: 2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_components2.__experimentalHStack, { spacing: 2, justify: "left", children: [
        showSidebarToggle && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          SidebarToggleSlot,
          {
            bubblesVirtually: true,
            className: "admin-ui-page__sidebar-toggle-slot"
          }
        ),
        title && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_components2.__experimentalHeading, { as: "h2", level: 3, weight: 500, truncate: true, children: title }),
        breadcrumbs,
        badges
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_components2.__experimentalHStack,
        {
          style: { width: "auto", flexShrink: 0 },
          spacing: 2,
          className: "admin-ui-page__header-actions",
          children: actions
        }
      )
    ] }),
    subTitle && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "admin-ui-page__header-subtitle", children: subTitle })
  ] });
}

// node_modules/@wordpress/admin-ui/build-module/page/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function Page({
  breadcrumbs,
  badges,
  title,
  subTitle,
  children,
  className,
  actions,
  ariaLabel,
  hasPadding = false,
  showSidebarToggle = true
}) {
  const classes = clsx_default("admin-ui-page", className);
  const effectiveAriaLabel = ariaLabel ?? (typeof title === "string" ? title : "");
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(navigable_region_default, { className: classes, ariaLabel: effectiveAriaLabel, children: [
    (title || breadcrumbs || badges) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Header,
      {
        breadcrumbs,
        badges,
        title,
        subTitle,
        actions,
        showSidebarToggle
      }
    ),
    hasPadding ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "admin-ui-page__content has-padding", children }) : children
  ] });
}
Page.SidebarToggleFill = SidebarToggleFill;
var page_default = Page;

// routes/ai-home/stage.tsx
var import_components29 = __toESM(require_components());
var import_core_data = __toESM(require_core_data());
var import_data = __toESM(require_data());

// node_modules/@wordpress/dataviews/build-module/constants.js
var import_i18n = __toESM(require_i18n());

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/chevron-down.mjs
var import_primitives = __toESM(require_primitives(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var chevron_down_default = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_primitives.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_primitives.Path, { d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/chevron-up.mjs
var import_primitives2 = __toESM(require_primitives(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var chevron_up_default = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_primitives2.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_primitives2.Path, { d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/close-small.mjs
var import_primitives3 = __toESM(require_primitives(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var close_small_default = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_primitives3.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_primitives3.Path, { d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/envelope.mjs
var import_primitives4 = __toESM(require_primitives(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var envelope_default = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_primitives4.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_primitives4.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M3 7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm2-.5h14c.3 0 .5.2.5.5v1L12 13.5 4.5 7.9V7c0-.3.2-.5.5-.5Zm-.5 3.3V17c0 .3.2.5.5.5h14c.3 0 .5-.2.5-.5V9.8L12 15.4 4.5 9.8Z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/error.mjs
var import_primitives5 = __toESM(require_primitives(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var error_default = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_primitives5.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_primitives5.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12.218 5.377a.25.25 0 0 0-.436 0l-7.29 12.96a.25.25 0 0 0 .218.373h14.58a.25.25 0 0 0 .218-.372l-7.29-12.96Zm-1.743-.735c.669-1.19 2.381-1.19 3.05 0l7.29 12.96a1.75 1.75 0 0 1-1.525 2.608H4.71a1.75 1.75 0 0 1-1.525-2.608l7.29-12.96ZM12.75 17.46h-1.5v-1.5h1.5v1.5Zm-1.5-3h1.5v-5h-1.5v5Z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/link.mjs
var import_primitives6 = __toESM(require_primitives(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var link_default = /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_primitives6.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_primitives6.Path, { d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/mobile.mjs
var import_primitives7 = __toESM(require_primitives(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var mobile_default = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_primitives7.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_primitives7.Path, { d: "M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/seen.mjs
var import_primitives8 = __toESM(require_primitives(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var seen_default = /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_primitives8.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_primitives8.Path, { d: "M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/unseen.mjs
var import_primitives9 = __toESM(require_primitives(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var unseen_default = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_primitives9.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_primitives9.Path, { d: "M20.7 12.7s0-.1-.1-.2c0-.2-.2-.4-.4-.6-.3-.5-.9-1.2-1.6-1.8-.7-.6-1.5-1.3-2.6-1.8l-.6 1.4c.9.4 1.6 1 2.1 1.5.6.6 1.1 1.2 1.4 1.6.1.2.3.4.3.5v.1l.7-.3.7-.3Zm-5.2-9.3-1.8 4c-.5-.1-1.1-.2-1.7-.2-3 0-5.2 1.4-6.6 2.7-.7.7-1.2 1.3-1.6 1.8-.2.3-.3.5-.4.6 0 0 0 .1-.1.2s0 0 .7.3l.7.3V13c0-.1.2-.3.3-.5.3-.4.7-1 1.4-1.6 1.2-1.2 3-2.3 5.5-2.3H13v.3c-.4 0-.8-.1-1.1-.1-1.9 0-3.5 1.6-3.5 3.5s.6 2.3 1.6 2.9l-2 4.4.9.4 7.6-16.2-.9-.4Zm-3 12.6c1.7-.2 3-1.7 3-3.5s-.2-1.4-.6-1.9L12.4 16Z" }) });

// node_modules/@wordpress/dataviews/build-module/constants.js
var OPERATOR_IS_ANY = "isAny";
var OPERATOR_IS_NONE = "isNone";
var OPERATOR_IS_ALL = "isAll";
var OPERATOR_IS_NOT_ALL = "isNotAll";
var OPERATOR_BETWEEN = "between";
var OPERATOR_IN_THE_PAST = "inThePast";
var OPERATOR_OVER = "over";
var OPERATOR_IS = "is";
var OPERATOR_IS_NOT = "isNot";
var OPERATOR_LESS_THAN = "lessThan";
var OPERATOR_GREATER_THAN = "greaterThan";
var OPERATOR_LESS_THAN_OR_EQUAL = "lessThanOrEqual";
var OPERATOR_GREATER_THAN_OR_EQUAL = "greaterThanOrEqual";
var OPERATOR_BEFORE = "before";
var OPERATOR_AFTER = "after";
var OPERATOR_BEFORE_INC = "beforeInc";
var OPERATOR_AFTER_INC = "afterInc";
var OPERATOR_CONTAINS = "contains";
var OPERATOR_NOT_CONTAINS = "notContains";
var OPERATOR_STARTS_WITH = "startsWith";
var OPERATOR_ON = "on";
var OPERATOR_NOT_ON = "notOn";
var sortLabels = {
  asc: (0, import_i18n.__)("Sort ascending"),
  desc: (0, import_i18n.__)("Sort descending")
};
var DAYS_OF_WEEK = [0, 1, 2, 3, 4, 5, 6];

// node_modules/@wordpress/dataviews/build-module/lock-unlock.js
var import_private_apis = __toESM(require_private_apis());
var { lock, unlock } = (0, import_private_apis.__dangerousOptInToUnstableAPIsOnlyForCoreModules)(
  "I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.",
  "@wordpress/dataviews"
);

// node_modules/@wordpress/dataviews/build-module/hooks/use-elements.js
var import_element2 = __toESM(require_element());
var EMPTY_ARRAY = [];
function useElements({
  elements,
  getElements
}) {
  const staticElements = Array.isArray(elements) && elements.length > 0 ? elements : EMPTY_ARRAY;
  const [records, setRecords] = (0, import_element2.useState)(staticElements);
  const [isLoading, setIsLoading] = (0, import_element2.useState)(false);
  (0, import_element2.useEffect)(() => {
    if (!getElements) {
      setRecords(staticElements);
      return;
    }
    let cancelled = false;
    setIsLoading(true);
    getElements().then((fetchedElements) => {
      if (!cancelled) {
        const dynamicElements = Array.isArray(fetchedElements) && fetchedElements.length > 0 ? fetchedElements : staticElements;
        setRecords(dynamicElements);
      }
    }).catch(() => {
      if (!cancelled) {
        setRecords(staticElements);
      }
    }).finally(() => {
      if (!cancelled) {
        setIsLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [getElements, staticElements]);
  return {
    elements: records,
    isLoading
  };
}

// node_modules/@wordpress/dataviews/build-module/utils/operators.js
var import_i18n2 = __toESM(require_i18n());
var import_element3 = __toESM(require_element());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var filterTextWrappers = {
  Name: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "dataviews-filters__summary-filter-text-name" }),
  Value: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "dataviews-filters__summary-filter-text-value" })
};
var OPERATORS = [
  {
    name: OPERATOR_IS_ANY,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Includes"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Author"). 2: Filter value (e.g. "Admin"): "Author is any: Admin, Editor". */
        (0, import_i18n2.__)("<Name>%1$s includes: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements.map((element) => element.label).join(", ")
      ),
      filterTextWrappers
    ),
    selection: "multi"
  },
  {
    name: OPERATOR_IS_NONE,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Is none of"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Author"). 2: Filter value (e.g. "Admin"): "Author is none of: Admin, Editor". */
        (0, import_i18n2.__)("<Name>%1$s is none of: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements.map((element) => element.label).join(", ")
      ),
      filterTextWrappers
    ),
    selection: "multi"
  },
  {
    name: OPERATOR_IS_ALL,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Includes all"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Author"). 2: Filter value (e.g. "Admin"): "Author includes all: Admin, Editor". */
        (0, import_i18n2.__)("<Name>%1$s includes all: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements.map((element) => element.label).join(", ")
      ),
      filterTextWrappers
    ),
    selection: "multi"
  },
  {
    name: OPERATOR_IS_NOT_ALL,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Is none of"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Author"). 2: Filter value (e.g. "Admin"): "Author is none of: Admin, Editor". */
        (0, import_i18n2.__)("<Name>%1$s is none of: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements.map((element) => element.label).join(", ")
      ),
      filterTextWrappers
    ),
    selection: "multi"
  },
  {
    name: OPERATOR_BETWEEN,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Between (inc)"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Item count"). 2: Filter value min. 3: Filter value max. e.g.: "Item count between (inc): 10 and 180". */
        (0, import_i18n2.__)(
          "<Name>%1$s between (inc): </Name><Value>%2$s and %3$s</Value>"
        ),
        filter.name,
        activeElements[0].label[0],
        activeElements[0].label[1]
      ),
      filterTextWrappers
    ),
    selection: "custom"
  },
  {
    name: OPERATOR_IN_THE_PAST,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("In the past"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "7 days"): "Date is in the past: 7 days". */
        (0, import_i18n2.__)(
          "<Name>%1$s is in the past: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        `${activeElements[0].value.value} ${activeElements[0].value.unit}`
      ),
      filterTextWrappers
    ),
    selection: "custom"
  },
  {
    name: OPERATOR_OVER,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Over"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "7 days"): "Date is over: 7 days". */
        (0, import_i18n2.__)("<Name>%1$s is over: </Name><Value>%2$s</Value>"),
        filter.name,
        `${activeElements[0].value.value} ${activeElements[0].value.unit}`
      ),
      filterTextWrappers
    ),
    selection: "custom"
  },
  {
    name: OPERATOR_IS,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Is"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Author"). 2: Filter value (e.g. "Admin"): "Author is: Admin". */
        (0, import_i18n2.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_IS_NOT,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Is not"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Author"). 2: Filter value (e.g. "Admin"): "Author is not: Admin". */
        (0, import_i18n2.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_LESS_THAN,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Less than"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Count"). 2: Filter value (e.g. "10"): "Count is less than: 10". */
        (0, import_i18n2.__)("<Name>%1$s is less than: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_GREATER_THAN,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Greater than"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Count"). 2: Filter value (e.g. "10"): "Count is greater than: 10". */
        (0, import_i18n2.__)(
          "<Name>%1$s is greater than: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_LESS_THAN_OR_EQUAL,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Less than or equal"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Count"). 2: Filter value (e.g. "10"): "Count is less than or equal to: 10". */
        (0, import_i18n2.__)(
          "<Name>%1$s is less than or equal to: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_GREATER_THAN_OR_EQUAL,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Greater than or equal"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Count"). 2: Filter value (e.g. "10"): "Count is greater than or equal to: 10". */
        (0, import_i18n2.__)(
          "<Name>%1$s is greater than or equal to: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_BEFORE,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Before"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "2024-01-01"): "Date is before: 2024-01-01". */
        (0, import_i18n2.__)("<Name>%1$s is before: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_AFTER,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("After"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "2024-01-01"): "Date is after: 2024-01-01". */
        (0, import_i18n2.__)("<Name>%1$s is after: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_BEFORE_INC,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Before (inc)"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "2024-01-01"): "Date is on or before: 2024-01-01". */
        (0, import_i18n2.__)(
          "<Name>%1$s is on or before: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_AFTER_INC,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("After (inc)"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "2024-01-01"): "Date is on or after: 2024-01-01". */
        (0, import_i18n2.__)(
          "<Name>%1$s is on or after: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_CONTAINS,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Contains"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Title"). 2: Filter value (e.g. "Hello"): "Title contains: Hello". */
        (0, import_i18n2.__)("<Name>%1$s contains: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_NOT_CONTAINS,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Doesn't contain"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Title"). 2: Filter value (e.g. "Hello"): "Title doesn't contain: Hello". */
        (0, import_i18n2.__)(
          "<Name>%1$s doesn't contain: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_STARTS_WITH,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Starts with"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Title"). 2: Filter value (e.g. "Hello"): "Title starts with: Hello". */
        (0, import_i18n2.__)("<Name>%1$s starts with: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_ON,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("On"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "2024-01-01"): "Date is: 2024-01-01". */
        (0, import_i18n2.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  },
  {
    name: OPERATOR_NOT_ON,
    /* translators: DataViews operator name */
    label: (0, import_i18n2.__)("Not on"),
    filterText: (filter, activeElements) => (0, import_element3.createInterpolateElement)(
      (0, import_i18n2.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "2024-01-01"): "Date is not: 2024-01-01". */
        (0, import_i18n2.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    selection: "single"
  }
];
var getAllOperatorNames = () => OPERATORS.map((op) => op.name);

// node_modules/@wordpress/dataviews/node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = /* @__PURE__ */ Symbol.for("constructDateFrom");

// node_modules/@wordpress/dataviews/node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/addDays.js
function addDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfISOWeek.js
function startOfISOWeek(date, options) {
  return startOfWeek(date, { ...options, weekStartsOn: 1 });
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/getISOWeekYear.js
function getISOWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/addYears.js
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/en-US/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/en-US/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/en-US.js
var enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/getISOWeek.js
function getISOWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/getWeekYear.js
function getWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfWeekYear.js
function startOfWeekYear(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/getWeek.js
function getWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
var timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
var dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date, options?.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/subDays.js
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/subMonths.js
function subMonths(date, amount, options) {
  return addMonths(date, -amount, options);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/subYears.js
function subYears(date, amount, options) {
  return addYears(date, -amount, options);
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/parse-date-time.js
var import_date = __toESM(require_date());
function parseDateTime(dateTimeString) {
  if (!dateTimeString) {
    return null;
  }
  const parsed = (0, import_date.getDate)(dateTimeString);
  return parsed && isValid(parsed) ? parsed : null;
}

// node_modules/@wordpress/dataviews/build-module/field-types/number.js
var import_i18n3 = __toESM(require_i18n());

// node_modules/@wordpress/dataviews/build-module/field-types/utils/render-from-elements.js
function RenderFromElements({
  item,
  field
}) {
  const { elements, isLoading } = useElements({
    elements: field.elements,
    getElements: field.getElements
  });
  const value = field.getValue({ item });
  if (isLoading) {
    return value;
  }
  if (elements.length === 0) {
    return value;
  }
  return elements?.find((element) => element.value === value)?.label || field.getValue({ item });
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/sort-number.js
var sort_number_default = (a2, b2, direction) => {
  return direction === "asc" ? a2 - b2 : b2 - a2;
};

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-required.js
function isValidRequired(item, field) {
  const value = field.getValue({ item });
  return ![void 0, "", null].includes(value);
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-min.js
function isValidMin(item, field) {
  if (typeof field.isValid.min?.constraint !== "number") {
    return false;
  }
  const value = field.getValue({ item });
  if ([void 0, "", null].includes(value)) {
    return true;
  }
  return Number(value) >= field.isValid.min.constraint;
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-max.js
function isValidMax(item, field) {
  if (typeof field.isValid.max?.constraint !== "number") {
    return false;
  }
  const value = field.getValue({ item });
  if ([void 0, "", null].includes(value)) {
    return true;
  }
  return Number(value) <= field.isValid.max.constraint;
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-elements.js
function isValidElements(item, field) {
  const elements = field.elements ?? [];
  const validValues = elements.map((el) => el.value);
  if (validValues.length === 0) {
    return true;
  }
  const value = field.getValue({ item });
  return [].concat(value).every((v2) => validValues.includes(v2));
}

// node_modules/@wordpress/dataviews/build-module/field-types/number.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
function getFormat(field) {
  const fieldFormat = field.format;
  return {
    separatorThousand: fieldFormat?.separatorThousand !== void 0 && typeof fieldFormat.separatorThousand === "string" ? fieldFormat.separatorThousand : ",",
    separatorDecimal: fieldFormat?.separatorDecimal !== void 0 && typeof fieldFormat.separatorDecimal === "string" ? fieldFormat.separatorDecimal : ".",
    decimals: fieldFormat?.decimals !== void 0 && typeof fieldFormat.decimals === "number" && fieldFormat.decimals >= 0 && fieldFormat.decimals <= 100 && Number.isInteger(fieldFormat.decimals) ? fieldFormat.decimals : 2
  };
}
function formatNumber(value, format2) {
  if (!Number.isFinite(value)) {
    return String(value);
  }
  const { separatorThousand, separatorDecimal, decimals } = format2;
  const fixedValue = value.toFixed(decimals);
  const [integerPart, decimalPart] = fixedValue.split(".");
  const formattedInteger = separatorThousand ? integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separatorThousand) : integerPart;
  return decimals === 0 ? formattedInteger : formattedInteger + separatorDecimal + decimalPart;
}
function isEmpty(value) {
  return value === "" || value === void 0 || value === null;
}
function render({ item, field }) {
  if (field.hasElements) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(RenderFromElements, { item, field });
  }
  const value = field.getValue({ item });
  if ([null, void 0].includes(value)) {
    return "";
  }
  let format2;
  if (field.type !== "number") {
    format2 = getFormat(field);
  } else {
    format2 = field.format;
  }
  return formatNumber(Number(value), format2);
}
function isValidCustom(item, field) {
  const value = field.getValue({ item });
  if (!isEmpty(value) && !Number.isFinite(value)) {
    return (0, import_i18n3.__)("Value must be a number.");
  }
  return null;
}
var number_default = {
  type: "number",
  render,
  Edit: "number",
  sort: sort_number_default,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_LESS_THAN,
    OPERATOR_GREATER_THAN,
    OPERATOR_LESS_THAN_OR_EQUAL,
    OPERATOR_GREATER_THAN_OR_EQUAL,
    OPERATOR_BETWEEN
  ],
  validOperators: [
    // Single-selection
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_LESS_THAN,
    OPERATOR_GREATER_THAN,
    OPERATOR_LESS_THAN_OR_EQUAL,
    OPERATOR_GREATER_THAN_OR_EQUAL,
    OPERATOR_BETWEEN,
    // Multiple-selection
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  getFormat,
  validate: {
    required: isValidRequired,
    min: isValidMin,
    max: isValidMax,
    elements: isValidElements,
    custom: isValidCustom
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/integer.js
var import_i18n4 = __toESM(require_i18n());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
function getFormat2(field) {
  const fieldFormat = field.format;
  return {
    separatorThousand: fieldFormat?.separatorThousand !== void 0 && typeof fieldFormat.separatorThousand === "string" ? fieldFormat.separatorThousand : ","
  };
}
function formatInteger(value, format2) {
  if (!Number.isFinite(value)) {
    return String(value);
  }
  const { separatorThousand } = format2;
  const integerValue = Math.trunc(value);
  if (!separatorThousand) {
    return String(integerValue);
  }
  return String(integerValue).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    separatorThousand
  );
}
function render2({ item, field }) {
  if (field.hasElements) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(RenderFromElements, { item, field });
  }
  const value = field.getValue({ item });
  if ([null, void 0].includes(value)) {
    return "";
  }
  let format2;
  if (field.type !== "integer") {
    format2 = getFormat2(field);
  } else {
    format2 = field.format;
  }
  return formatInteger(Number(value), format2);
}
function isValidCustom2(item, field) {
  const value = field.getValue({ item });
  if (![void 0, "", null].includes(value) && !Number.isInteger(value)) {
    return (0, import_i18n4.__)("Value must be an integer.");
  }
  return null;
}
var integer_default = {
  type: "integer",
  render: render2,
  Edit: "integer",
  sort: sort_number_default,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_LESS_THAN,
    OPERATOR_GREATER_THAN,
    OPERATOR_LESS_THAN_OR_EQUAL,
    OPERATOR_GREATER_THAN_OR_EQUAL,
    OPERATOR_BETWEEN
  ],
  validOperators: [
    // Single-selection
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_LESS_THAN,
    OPERATOR_GREATER_THAN,
    OPERATOR_LESS_THAN_OR_EQUAL,
    OPERATOR_GREATER_THAN_OR_EQUAL,
    OPERATOR_BETWEEN,
    // Multiple-selection
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  getFormat: getFormat2,
  validate: {
    required: isValidRequired,
    min: isValidMin,
    max: isValidMax,
    elements: isValidElements,
    custom: isValidCustom2
  }
};

// node_modules/@wordpress/dataviews/build-module/dataform-controls/checkbox.js
var import_components3 = __toESM(require_components());
var import_element4 = __toESM(require_element());

// node_modules/@wordpress/dataviews/build-module/dataform-controls/utils/get-custom-validity.js
function getCustomValidity(isValid2, validity) {
  let customValidity;
  if (isValid2?.required && validity?.required) {
    customValidity = validity?.required?.message ? validity.required : void 0;
  } else if (isValid2?.pattern && validity?.pattern) {
    customValidity = validity.pattern;
  } else if (isValid2?.min && validity?.min) {
    customValidity = validity.min;
  } else if (isValid2?.max && validity?.max) {
    customValidity = validity.max;
  } else if (isValid2?.minLength && validity?.minLength) {
    customValidity = validity.minLength;
  } else if (isValid2?.maxLength && validity?.maxLength) {
    customValidity = validity.maxLength;
  } else if (isValid2?.elements && validity?.elements) {
    customValidity = validity.elements;
  } else if (validity?.custom) {
    customValidity = validity.custom;
  }
  return customValidity;
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/checkbox.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var { ValidatedCheckboxControl } = unlock(import_components3.privateApis);
function Checkbox({
  field,
  onChange,
  data,
  hideLabelFromVision,
  validity
}) {
  const { getValue, setValue, label, description, isValid: isValid2 } = field;
  const onChangeControl = (0, import_element4.useCallback)(() => {
    onChange(
      setValue({ item: data, value: !getValue({ item: data }) })
    );
  }, [data, getValue, onChange, setValue]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    ValidatedCheckboxControl,
    {
      required: !!field.isValid?.required,
      customValidity: getCustomValidity(isValid2, validity),
      hidden: hideLabelFromVision,
      label,
      help: description,
      checked: getValue({ item: data }),
      onChange: onChangeControl
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/datetime.js
var import_components5 = __toESM(require_components());
var import_element6 = __toESM(require_element());
var import_i18n6 = __toESM(require_i18n());
var import_date2 = __toESM(require_date());

// node_modules/@wordpress/dataviews/build-module/dataform-controls/utils/relative-date-control.js
var import_components4 = __toESM(require_components());
var import_element5 = __toESM(require_element());
var import_i18n5 = __toESM(require_i18n());
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var TIME_UNITS_OPTIONS = {
  [OPERATOR_IN_THE_PAST]: [
    { value: "days", label: (0, import_i18n5.__)("Days") },
    { value: "weeks", label: (0, import_i18n5.__)("Weeks") },
    { value: "months", label: (0, import_i18n5.__)("Months") },
    { value: "years", label: (0, import_i18n5.__)("Years") }
  ],
  [OPERATOR_OVER]: [
    { value: "days", label: (0, import_i18n5.__)("Days ago") },
    { value: "weeks", label: (0, import_i18n5.__)("Weeks ago") },
    { value: "months", label: (0, import_i18n5.__)("Months ago") },
    { value: "years", label: (0, import_i18n5.__)("Years ago") }
  ]
};
function RelativeDateControl({
  className,
  data,
  field,
  onChange,
  hideLabelFromVision,
  operator
}) {
  const options = TIME_UNITS_OPTIONS[operator === OPERATOR_IN_THE_PAST ? "inThePast" : "over"];
  const { id, label, getValue, setValue } = field;
  const fieldValue = getValue({ item: data });
  const { value: relValue = "", unit = options[0].value } = fieldValue && typeof fieldValue === "object" ? fieldValue : {};
  const onChangeValue = (0, import_element5.useCallback)(
    (newValue) => onChange(
      setValue({
        item: data,
        value: { value: Number(newValue), unit }
      })
    ),
    [onChange, setValue, data, unit]
  );
  const onChangeUnit = (0, import_element5.useCallback)(
    (newUnit) => onChange(
      setValue({
        item: data,
        value: { value: relValue, unit: newUnit }
      })
    ),
    [onChange, setValue, data, relValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    import_components4.BaseControl,
    {
      id,
      __nextHasNoMarginBottom: true,
      className: clsx_default(className, "dataviews-controls__relative-date"),
      label,
      hideLabelFromVision,
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_components4.__experimentalHStack, { spacing: 2.5, children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          import_components4.__experimentalNumberControl,
          {
            __next40pxDefaultSize: true,
            className: "dataviews-controls__relative-date-number",
            spinControls: "none",
            min: 1,
            step: 1,
            value: relValue,
            onChange: onChangeValue
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          import_components4.SelectControl,
          {
            className: "dataviews-controls__relative-date-unit",
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true,
            label: (0, import_i18n5.__)("Unit"),
            value: unit,
            options,
            onChange: onChangeUnit,
            hideLabelFromVision: true
          }
        )
      ] })
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/datetime.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var { DateCalendar, ValidatedInputControl } = unlock(import_components5.privateApis);
var formatDateTime = (date) => {
  if (!date) {
    return "";
  }
  if (typeof date === "string") {
    return date;
  }
  return format(date, "yyyy-MM-dd'T'HH:mm");
};
function CalendarDateTimeControl({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const { id, label, description, setValue, getValue, isValid: isValid2 } = field;
  const fieldValue = getValue({ item: data });
  const value = typeof fieldValue === "string" ? fieldValue : void 0;
  const [calendarMonth, setCalendarMonth] = (0, import_element6.useState)(() => {
    const parsedDate = parseDateTime(value);
    return parsedDate || /* @__PURE__ */ new Date();
  });
  const inputControlRef = (0, import_element6.useRef)(null);
  const validationTimeoutRef = (0, import_element6.useRef)();
  const previousFocusRef = (0, import_element6.useRef)(null);
  const onChangeCallback = (0, import_element6.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue })),
    [data, onChange, setValue]
  );
  (0, import_element6.useEffect)(() => {
    return () => {
      if (validationTimeoutRef.current) {
        clearTimeout(validationTimeoutRef.current);
      }
    };
  }, []);
  const onSelectDate = (0, import_element6.useCallback)(
    (newDate) => {
      let dateTimeValue;
      if (newDate) {
        let finalDateTime = newDate;
        if (value) {
          const currentDateTime = parseDateTime(value);
          if (currentDateTime) {
            finalDateTime = new Date(newDate);
            finalDateTime.setHours(currentDateTime.getHours());
            finalDateTime.setMinutes(
              currentDateTime.getMinutes()
            );
          }
        }
        dateTimeValue = finalDateTime.toISOString();
        onChangeCallback(dateTimeValue);
        if (validationTimeoutRef.current) {
          clearTimeout(validationTimeoutRef.current);
        }
      } else {
        onChangeCallback(void 0);
      }
      previousFocusRef.current = inputControlRef.current && inputControlRef.current.ownerDocument.activeElement;
      validationTimeoutRef.current = setTimeout(() => {
        if (inputControlRef.current) {
          inputControlRef.current.focus();
          inputControlRef.current.blur();
          onChangeCallback(dateTimeValue);
          if (previousFocusRef.current && previousFocusRef.current instanceof HTMLElement) {
            previousFocusRef.current.focus();
          }
        }
      }, 0);
    },
    [onChangeCallback, value]
  );
  const handleManualDateTimeChange = (0, import_element6.useCallback)(
    (newValue) => {
      if (newValue) {
        const dateTime = new Date(newValue);
        onChangeCallback(dateTime.toISOString());
        const parsedDate = parseDateTime(dateTime.toISOString());
        if (parsedDate) {
          setCalendarMonth(parsedDate);
        }
      } else {
        onChangeCallback(void 0);
      }
    },
    [onChangeCallback]
  );
  const {
    timezone: { string: timezoneString },
    l10n: { startOfWeek: startOfWeek2 }
  } = (0, import_date2.getSettings)();
  const displayLabel = isValid2?.required && !hideLabelFromVision ? `${label} (${(0, import_i18n6.__)("Required")})` : label;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_components5.BaseControl,
    {
      __nextHasNoMarginBottom: true,
      id,
      label: displayLabel,
      help: description,
      hideLabelFromVision,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_components5.__experimentalVStack, { spacing: 4, children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          DateCalendar,
          {
            style: { width: "100%" },
            selected: value ? parseDateTime(value) || void 0 : void 0,
            onSelect: onSelectDate,
            month: calendarMonth,
            onMonthChange: setCalendarMonth,
            timeZone: timezoneString || void 0,
            weekStartsOn: startOfWeek2
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          ValidatedInputControl,
          {
            ref: inputControlRef,
            __next40pxDefaultSize: true,
            required: !!isValid2?.required,
            customValidity: getCustomValidity(isValid2, validity),
            type: "datetime-local",
            label: (0, import_i18n6.__)("Date time"),
            hideLabelFromVision: true,
            value: value ? formatDateTime(
              parseDateTime(value) || void 0
            ) : "",
            onChange: handleManualDateTimeChange
          }
        )
      ] })
    }
  );
}
function DateTime({
  data,
  field,
  onChange,
  hideLabelFromVision,
  operator,
  validity
}) {
  if (operator === OPERATOR_IN_THE_PAST || operator === OPERATOR_OVER) {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      RelativeDateControl,
      {
        className: "dataviews-controls__datetime",
        data,
        field,
        onChange,
        hideLabelFromVision,
        operator
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    CalendarDateTimeControl,
    {
      data,
      field,
      onChange,
      hideLabelFromVision,
      validity
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/date.js
var import_components6 = __toESM(require_components());
var import_element7 = __toESM(require_element());
var import_i18n7 = __toESM(require_i18n());
var import_date3 = __toESM(require_date());
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var { DateCalendar: DateCalendar2, DateRangeCalendar } = unlock(import_components6.privateApis);
var DATE_PRESETS = [
  {
    id: "today",
    label: (0, import_i18n7.__)("Today"),
    getValue: () => (0, import_date3.getDate)(null)
  },
  {
    id: "yesterday",
    label: (0, import_i18n7.__)("Yesterday"),
    getValue: () => {
      const today = (0, import_date3.getDate)(null);
      return subDays(today, 1);
    }
  },
  {
    id: "past-week",
    label: (0, import_i18n7.__)("Past week"),
    getValue: () => {
      const today = (0, import_date3.getDate)(null);
      return subDays(today, 7);
    }
  },
  {
    id: "past-month",
    label: (0, import_i18n7.__)("Past month"),
    getValue: () => {
      const today = (0, import_date3.getDate)(null);
      return subMonths(today, 1);
    }
  }
];
var DATE_RANGE_PRESETS = [
  {
    id: "last-7-days",
    label: (0, import_i18n7.__)("Last 7 days"),
    getValue: () => {
      const today = (0, import_date3.getDate)(null);
      return [subDays(today, 7), today];
    }
  },
  {
    id: "last-30-days",
    label: (0, import_i18n7.__)("Last 30 days"),
    getValue: () => {
      const today = (0, import_date3.getDate)(null);
      return [subDays(today, 30), today];
    }
  },
  {
    id: "month-to-date",
    label: (0, import_i18n7.__)("Month to date"),
    getValue: () => {
      const today = (0, import_date3.getDate)(null);
      return [startOfMonth(today), today];
    }
  },
  {
    id: "last-year",
    label: (0, import_i18n7.__)("Last year"),
    getValue: () => {
      const today = (0, import_date3.getDate)(null);
      return [subYears(today, 1), today];
    }
  },
  {
    id: "year-to-date",
    label: (0, import_i18n7.__)("Year to date"),
    getValue: () => {
      const today = (0, import_date3.getDate)(null);
      return [startOfYear(today), today];
    }
  }
];
var parseDate = (dateString) => {
  if (!dateString) {
    return null;
  }
  const parsed = (0, import_date3.getDate)(dateString);
  return parsed && isValid(parsed) ? parsed : null;
};
var formatDate = (date) => {
  if (!date) {
    return "";
  }
  return typeof date === "string" ? date : format(date, "yyyy-MM-dd");
};
function ValidatedDateControl({
  field,
  validity,
  inputRefs,
  isTouched,
  setIsTouched,
  children
}) {
  const { isValid: isValid2 } = field;
  const [customValidity, setCustomValidity] = (0, import_element7.useState)(void 0);
  const validateRefs = (0, import_element7.useCallback)(() => {
    const refs = Array.isArray(inputRefs) ? inputRefs : [inputRefs];
    for (const ref of refs) {
      const input = ref.current;
      if (input && !input.validity.valid) {
        setCustomValidity({
          type: "invalid",
          message: input.validationMessage
        });
        return;
      }
    }
    setCustomValidity(void 0);
  }, [inputRefs]);
  (0, import_element7.useEffect)(() => {
    if (isTouched) {
      const timeoutId = setTimeout(() => {
        if (validity) {
          setCustomValidity(getCustomValidity(isValid2, validity));
        } else {
          validateRefs();
        }
      }, 0);
      return () => clearTimeout(timeoutId);
    }
    return void 0;
  }, [isTouched, isValid2, validity, validateRefs]);
  const onBlur = (event) => {
    if (isTouched) {
      return;
    }
    if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) {
      setIsTouched(true);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { onBlur, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { "aria-live": "polite", children: customValidity && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      "p",
      {
        className: clsx_default(
          "components-validated-control__indicator",
          customValidity.type === "invalid" ? "is-invalid" : void 0,
          customValidity.type === "valid" ? "is-valid" : void 0
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            import_components6.Icon,
            {
              className: "components-validated-control__indicator-icon",
              icon: error_default,
              size: 16,
              fill: "currentColor"
            }
          ),
          customValidity.message
        ]
      }
    ) })
  ] });
}
function CalendarDateControl({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const {
    id,
    type,
    label,
    setValue,
    getValue,
    isValid: isValid2,
    format: fieldFormat
  } = field;
  const [selectedPresetId, setSelectedPresetId] = (0, import_element7.useState)(
    null
  );
  let weekStartsOn = (0, import_date3.getSettings)().l10n.startOfWeek;
  if (type === "date") {
    weekStartsOn = fieldFormat.weekStartsOn;
  }
  const fieldValue = getValue({ item: data });
  const value = typeof fieldValue === "string" ? fieldValue : void 0;
  const [calendarMonth, setCalendarMonth] = (0, import_element7.useState)(() => {
    const parsedDate = parseDate(value);
    return parsedDate || /* @__PURE__ */ new Date();
  });
  const [isTouched, setIsTouched] = (0, import_element7.useState)(false);
  const validityTargetRef = (0, import_element7.useRef)(null);
  const onChangeCallback = (0, import_element7.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue })),
    [data, onChange, setValue]
  );
  const onSelectDate = (0, import_element7.useCallback)(
    (newDate) => {
      const dateValue = newDate ? format(newDate, "yyyy-MM-dd") : void 0;
      onChangeCallback(dateValue);
      setSelectedPresetId(null);
      setIsTouched(true);
    },
    [onChangeCallback]
  );
  const handlePresetClick = (0, import_element7.useCallback)(
    (preset) => {
      const presetDate = preset.getValue();
      const dateValue = formatDate(presetDate);
      setCalendarMonth(presetDate);
      onChangeCallback(dateValue);
      setSelectedPresetId(preset.id);
      setIsTouched(true);
    },
    [onChangeCallback]
  );
  const handleManualDateChange = (0, import_element7.useCallback)(
    (newValue) => {
      onChangeCallback(newValue);
      if (newValue) {
        const parsedDate = parseDate(newValue);
        if (parsedDate) {
          setCalendarMonth(parsedDate);
        }
      }
      setSelectedPresetId(null);
      setIsTouched(true);
    },
    [onChangeCallback]
  );
  const {
    timezone: { string: timezoneString }
  } = (0, import_date3.getSettings)();
  const displayLabel = isValid2?.required ? `${label} (${(0, import_i18n7.__)("Required")})` : label;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    ValidatedDateControl,
    {
      field,
      validity,
      inputRefs: validityTargetRef,
      isTouched,
      setIsTouched,
      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        import_components6.BaseControl,
        {
          __nextHasNoMarginBottom: true,
          id,
          className: "dataviews-controls__date",
          label: displayLabel,
          hideLabelFromVision,
          children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_components6.__experimentalVStack, { spacing: 4, children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_components6.__experimentalHStack, { spacing: 2, wrap: true, justify: "flex-start", children: [
              DATE_PRESETS.map((preset) => {
                const isSelected = selectedPresetId === preset.id;
                return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                  import_components6.Button,
                  {
                    className: "dataviews-controls__date-preset",
                    variant: "tertiary",
                    isPressed: isSelected,
                    size: "small",
                    onClick: () => handlePresetClick(preset),
                    children: preset.label
                  },
                  preset.id
                );
              }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                import_components6.Button,
                {
                  className: "dataviews-controls__date-preset",
                  variant: "tertiary",
                  isPressed: !selectedPresetId,
                  size: "small",
                  disabled: !!selectedPresetId,
                  accessibleWhenDisabled: false,
                  children: (0, import_i18n7.__)("Custom")
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              import_components6.__experimentalInputControl,
              {
                __next40pxDefaultSize: true,
                ref: validityTargetRef,
                type: "date",
                label: (0, import_i18n7.__)("Date"),
                hideLabelFromVision: true,
                value,
                onChange: handleManualDateChange,
                required: !!field.isValid?.required
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              DateCalendar2,
              {
                style: { width: "100%" },
                selected: value ? parseDate(value) || void 0 : void 0,
                onSelect: onSelectDate,
                month: calendarMonth,
                onMonthChange: setCalendarMonth,
                timeZone: timezoneString || void 0,
                weekStartsOn
              }
            )
          ] })
        }
      )
    }
  );
}
function CalendarDateRangeControl({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const { id, type, label, getValue, setValue, format: fieldFormat } = field;
  let value;
  const fieldValue = getValue({ item: data });
  if (Array.isArray(fieldValue) && fieldValue.length === 2 && fieldValue.every((date) => typeof date === "string")) {
    value = fieldValue;
  }
  let weekStartsOn;
  if (type === "date") {
    weekStartsOn = fieldFormat.weekStartsOn;
  }
  const onChangeCallback = (0, import_element7.useCallback)(
    (newValue) => {
      onChange(
        setValue({
          item: data,
          value: newValue
        })
      );
    },
    [data, onChange, setValue]
  );
  const [selectedPresetId, setSelectedPresetId] = (0, import_element7.useState)(
    null
  );
  const selectedRange = (0, import_element7.useMemo)(() => {
    if (!value) {
      return { from: void 0, to: void 0 };
    }
    const [from, to] = value;
    return {
      from: parseDate(from) || void 0,
      to: parseDate(to) || void 0
    };
  }, [value]);
  const [calendarMonth, setCalendarMonth] = (0, import_element7.useState)(() => {
    return selectedRange.from || /* @__PURE__ */ new Date();
  });
  const [isTouched, setIsTouched] = (0, import_element7.useState)(false);
  const fromInputRef = (0, import_element7.useRef)(null);
  const toInputRef = (0, import_element7.useRef)(null);
  const updateDateRange = (0, import_element7.useCallback)(
    (fromDate, toDate2) => {
      if (fromDate && toDate2) {
        onChangeCallback([
          formatDate(fromDate),
          formatDate(toDate2)
        ]);
      } else if (!fromDate && !toDate2) {
        onChangeCallback(void 0);
      }
    },
    [onChangeCallback]
  );
  const onSelectCalendarRange = (0, import_element7.useCallback)(
    (newRange) => {
      updateDateRange(newRange?.from, newRange?.to);
      setSelectedPresetId(null);
      setIsTouched(true);
    },
    [updateDateRange]
  );
  const handlePresetClick = (0, import_element7.useCallback)(
    (preset) => {
      const [startDate, endDate] = preset.getValue();
      setCalendarMonth(startDate);
      updateDateRange(startDate, endDate);
      setSelectedPresetId(preset.id);
      setIsTouched(true);
    },
    [updateDateRange]
  );
  const handleManualDateChange = (0, import_element7.useCallback)(
    (fromOrTo, newValue) => {
      const [currentFrom, currentTo] = value || [
        void 0,
        void 0
      ];
      const updatedFrom = fromOrTo === "from" ? newValue : currentFrom;
      const updatedTo = fromOrTo === "to" ? newValue : currentTo;
      updateDateRange(updatedFrom, updatedTo);
      if (newValue) {
        const parsedDate = parseDate(newValue);
        if (parsedDate) {
          setCalendarMonth(parsedDate);
        }
      }
      setSelectedPresetId(null);
      setIsTouched(true);
    },
    [value, updateDateRange]
  );
  const { timezone } = (0, import_date3.getSettings)();
  const displayLabel = field.isValid?.required ? `${label} (${(0, import_i18n7.__)("Required")})` : label;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    ValidatedDateControl,
    {
      field,
      validity,
      inputRefs: [fromInputRef, toInputRef],
      isTouched,
      setIsTouched,
      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        import_components6.BaseControl,
        {
          __nextHasNoMarginBottom: true,
          id,
          className: "dataviews-controls__date",
          label: displayLabel,
          hideLabelFromVision,
          children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_components6.__experimentalVStack, { spacing: 4, children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_components6.__experimentalHStack, { spacing: 2, wrap: true, justify: "flex-start", children: [
              DATE_RANGE_PRESETS.map((preset) => {
                const isSelected = selectedPresetId === preset.id;
                return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                  import_components6.Button,
                  {
                    className: "dataviews-controls__date-preset",
                    variant: "tertiary",
                    isPressed: isSelected,
                    size: "small",
                    onClick: () => handlePresetClick(preset),
                    children: preset.label
                  },
                  preset.id
                );
              }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                import_components6.Button,
                {
                  className: "dataviews-controls__date-preset",
                  variant: "tertiary",
                  isPressed: !selectedPresetId,
                  size: "small",
                  accessibleWhenDisabled: false,
                  disabled: !!selectedPresetId,
                  children: (0, import_i18n7.__)("Custom")
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_components6.__experimentalHStack, { spacing: 2, children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                import_components6.__experimentalInputControl,
                {
                  __next40pxDefaultSize: true,
                  ref: fromInputRef,
                  type: "date",
                  label: (0, import_i18n7.__)("From"),
                  hideLabelFromVision: true,
                  value: value?.[0],
                  onChange: (newValue) => handleManualDateChange("from", newValue),
                  required: !!field.isValid?.required
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                import_components6.__experimentalInputControl,
                {
                  __next40pxDefaultSize: true,
                  ref: toInputRef,
                  type: "date",
                  label: (0, import_i18n7.__)("To"),
                  hideLabelFromVision: true,
                  value: value?.[1],
                  onChange: (newValue) => handleManualDateChange("to", newValue),
                  required: !!field.isValid?.required
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              DateRangeCalendar,
              {
                style: { width: "100%" },
                selected: selectedRange,
                onSelect: onSelectCalendarRange,
                month: calendarMonth,
                onMonthChange: setCalendarMonth,
                timeZone: timezone.string || void 0,
                weekStartsOn
              }
            )
          ] })
        }
      )
    }
  );
}
function DateControl({
  data,
  field,
  onChange,
  hideLabelFromVision,
  operator,
  validity
}) {
  if (operator === OPERATOR_IN_THE_PAST || operator === OPERATOR_OVER) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      RelativeDateControl,
      {
        className: "dataviews-controls__date",
        data,
        field,
        onChange,
        hideLabelFromVision,
        operator
      }
    );
  }
  if (operator === OPERATOR_BETWEEN) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      CalendarDateRangeControl,
      {
        data,
        field,
        onChange,
        hideLabelFromVision,
        validity
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    CalendarDateControl,
    {
      data,
      field,
      onChange,
      hideLabelFromVision,
      validity
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/email.js
var import_components8 = __toESM(require_components());

// node_modules/@wordpress/dataviews/build-module/dataform-controls/utils/validated-input.js
var import_components7 = __toESM(require_components());
var import_element8 = __toESM(require_element());
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var { ValidatedInputControl: ValidatedInputControl2 } = unlock(import_components7.privateApis);
function ValidatedText({
  data,
  field,
  onChange,
  hideLabelFromVision,
  type,
  prefix,
  suffix,
  validity
}) {
  const { label, placeholder, description, getValue, setValue, isValid: isValid2 } = field;
  const value = getValue({ item: data });
  const onChangeControl = (0, import_element8.useCallback)(
    (newValue) => onChange(
      setValue({
        item: data,
        value: newValue
      })
    ),
    [data, setValue, onChange]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    ValidatedInputControl2,
    {
      required: !!isValid2.required,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      placeholder,
      value: value ?? "",
      help: description,
      onChange: onChangeControl,
      hideLabelFromVision,
      type,
      prefix,
      suffix,
      pattern: isValid2.pattern ? isValid2.pattern.constraint : void 0,
      minLength: isValid2.minLength ? isValid2.minLength.constraint : void 0,
      maxLength: isValid2.maxLength ? isValid2.maxLength.constraint : void 0,
      __next40pxDefaultSize: true
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/email.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
function Email({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    ValidatedText,
    {
      ...{
        data,
        field,
        onChange,
        hideLabelFromVision,
        validity,
        type: "email",
        prefix: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_components8.__experimentalInputControlPrefixWrapper, { variant: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_components8.Icon, { icon: envelope_default }) })
      }
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/telephone.js
var import_components9 = __toESM(require_components());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
function Telephone({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    ValidatedText,
    {
      ...{
        data,
        field,
        onChange,
        hideLabelFromVision,
        validity,
        type: "tel",
        prefix: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_components9.__experimentalInputControlPrefixWrapper, { variant: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_components9.Icon, { icon: mobile_default }) })
      }
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/url.js
var import_components10 = __toESM(require_components());
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
function Url({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    ValidatedText,
    {
      ...{
        data,
        field,
        onChange,
        hideLabelFromVision,
        validity,
        type: "url",
        prefix: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_components10.__experimentalInputControlPrefixWrapper, { variant: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_components10.Icon, { icon: link_default }) })
      }
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/utils/validated-number.js
var import_components11 = __toESM(require_components());
var import_element9 = __toESM(require_element());
var import_i18n8 = __toESM(require_i18n());
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var { ValidatedNumberControl } = unlock(import_components11.privateApis);
function toNumberOrEmpty(value) {
  if (value === "" || value === void 0) {
    return "";
  }
  const number = Number(value);
  return Number.isFinite(number) ? number : "";
}
function BetweenControls({
  value,
  onChange,
  hideLabelFromVision,
  step
}) {
  const [min = "", max = ""] = value;
  const onChangeMin = (0, import_element9.useCallback)(
    (newValue) => onChange([toNumberOrEmpty(newValue), max]),
    [onChange, max]
  );
  const onChangeMax = (0, import_element9.useCallback)(
    (newValue) => onChange([min, toNumberOrEmpty(newValue)]),
    [onChange, min]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    import_components11.BaseControl,
    {
      __nextHasNoMarginBottom: true,
      help: (0, import_i18n8.__)("The max. value must be greater than the min. value."),
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_components11.Flex, { direction: "row", gap: 4, children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          import_components11.__experimentalNumberControl,
          {
            label: (0, import_i18n8.__)("Min."),
            value: min,
            max: max ? Number(max) - step : void 0,
            onChange: onChangeMin,
            __next40pxDefaultSize: true,
            hideLabelFromVision,
            step
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          import_components11.__experimentalNumberControl,
          {
            label: (0, import_i18n8.__)("Max."),
            value: max,
            min: min ? Number(min) + step : void 0,
            onChange: onChangeMax,
            __next40pxDefaultSize: true,
            hideLabelFromVision,
            step
          }
        )
      ] })
    }
  );
}
function ValidatedNumber({
  data,
  field,
  onChange,
  hideLabelFromVision,
  operator,
  decimals,
  validity
}) {
  const step = Math.pow(10, Math.abs(decimals) * -1);
  const { label, description, getValue, setValue, isValid: isValid2 } = field;
  const value = getValue({ item: data }) ?? "";
  const onChangeControl = (0, import_element9.useCallback)(
    (newValue) => {
      onChange(
        setValue({
          item: data,
          // Do not convert an empty string or undefined to a number,
          // otherwise there's a mismatch between the UI control (empty)
          // and the data relied by onChange (0).
          value: ["", void 0].includes(newValue) ? void 0 : Number(newValue)
        })
      );
    },
    [data, onChange, setValue]
  );
  const onChangeBetweenControls = (0, import_element9.useCallback)(
    (newValue) => {
      onChange(
        setValue({
          item: data,
          value: newValue
        })
      );
    },
    [data, onChange, setValue]
  );
  if (operator === OPERATOR_BETWEEN) {
    let valueBetween = ["", ""];
    if (Array.isArray(value) && value.length === 2 && value.every(
      (element) => typeof element === "number" || element === ""
    )) {
      valueBetween = value;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      BetweenControls,
      {
        value: valueBetween,
        onChange: onChangeBetweenControls,
        hideLabelFromVision,
        step
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    ValidatedNumberControl,
    {
      required: !!isValid2.required,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      help: description,
      value,
      onChange: onChangeControl,
      __next40pxDefaultSize: true,
      hideLabelFromVision,
      step,
      min: isValid2.min ? isValid2.min.constraint : void 0,
      max: isValid2.max ? isValid2.max.constraint : void 0
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/integer.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
function Number2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ValidatedNumber, { ...props, decimals: 0 });
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/number.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
function Number3(props) {
  const decimals = props.field.format?.decimals ?? 2;
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(ValidatedNumber, { ...props, decimals });
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/radio.js
var import_components12 = __toESM(require_components());
var import_element10 = __toESM(require_element());
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var { ValidatedRadioControl } = unlock(import_components12.privateApis);
function Radio({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const { label, description, getValue, setValue, isValid: isValid2 } = field;
  const { elements, isLoading } = useElements({
    elements: field.elements,
    getElements: field.getElements
  });
  const value = getValue({ item: data });
  const onChangeControl = (0, import_element10.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue })),
    [data, onChange, setValue]
  );
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_components12.Spinner, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    ValidatedRadioControl,
    {
      required: !!field.isValid?.required,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      help: description,
      onChange: onChangeControl,
      options: elements,
      selected: value,
      hideLabelFromVision
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/select.js
var import_components13 = __toESM(require_components());
var import_element11 = __toESM(require_element());
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var { ValidatedSelectControl } = unlock(import_components13.privateApis);
function Select({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const { type, label, description, getValue, setValue, isValid: isValid2 } = field;
  const isMultiple = type === "array";
  const value = getValue({ item: data }) ?? (isMultiple ? [] : "");
  const onChangeControl = (0, import_element11.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue })),
    [data, onChange, setValue]
  );
  const { elements, isLoading } = useElements({
    elements: field.elements,
    getElements: field.getElements
  });
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_components13.Spinner, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    ValidatedSelectControl,
    {
      required: !!field.isValid?.required,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      value,
      help: description,
      options: elements,
      onChange: onChangeControl,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true,
      hideLabelFromVision,
      multiple: isMultiple
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/text.js
var import_element12 = __toESM(require_element());
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
function Text({
  data,
  field,
  onChange,
  hideLabelFromVision,
  config,
  validity
}) {
  const { prefix, suffix } = config || {};
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    ValidatedText,
    {
      ...{
        data,
        field,
        onChange,
        hideLabelFromVision,
        validity,
        prefix: prefix ? (0, import_element12.createElement)(prefix) : void 0,
        suffix: suffix ? (0, import_element12.createElement)(suffix) : void 0
      }
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/toggle.js
var import_components14 = __toESM(require_components());
var import_element13 = __toESM(require_element());
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var { ValidatedToggleControl } = unlock(import_components14.privateApis);
function Toggle({
  field,
  onChange,
  data,
  hideLabelFromVision,
  validity
}) {
  const { label, description, getValue, setValue, isValid: isValid2 } = field;
  const onChangeControl = (0, import_element13.useCallback)(() => {
    onChange(
      setValue({ item: data, value: !getValue({ item: data }) })
    );
  }, [onChange, setValue, data, getValue]);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    ValidatedToggleControl,
    {
      required: !!isValid2.required,
      customValidity: getCustomValidity(isValid2, validity),
      hidden: hideLabelFromVision,
      __nextHasNoMarginBottom: true,
      label,
      help: description,
      checked: getValue({ item: data }),
      onChange: onChangeControl
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/textarea.js
var import_components15 = __toESM(require_components());
var import_element14 = __toESM(require_element());
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var { ValidatedTextareaControl } = unlock(import_components15.privateApis);
function Textarea({
  data,
  field,
  onChange,
  hideLabelFromVision,
  config,
  validity
}) {
  const { rows = 4 } = config || {};
  const { label, placeholder, description, setValue, isValid: isValid2 } = field;
  const value = field.getValue({ item: data });
  const onChangeControl = (0, import_element14.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue })),
    [data, onChange, setValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    ValidatedTextareaControl,
    {
      required: !!isValid2.required,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      placeholder,
      value: value ?? "",
      help: description,
      onChange: onChangeControl,
      rows,
      minLength: isValid2.minLength ? isValid2.minLength.constraint : void 0,
      maxLength: isValid2.maxLength ? isValid2.maxLength.constraint : void 0,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true,
      hideLabelFromVision
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/toggle-group.js
var import_components16 = __toESM(require_components());
var import_element15 = __toESM(require_element());
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var { ValidatedToggleGroupControl } = unlock(import_components16.privateApis);
function ToggleGroup({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const { getValue, setValue, isValid: isValid2 } = field;
  const value = getValue({ item: data });
  const onChangeControl = (0, import_element15.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue })),
    [data, onChange, setValue]
  );
  const { elements, isLoading } = useElements({
    elements: field.elements,
    getElements: field.getElements
  });
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_components16.Spinner, {});
  }
  if (elements.length === 0) {
    return null;
  }
  const selectedOption = elements.find((el) => el.value === value);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    ValidatedToggleGroupControl,
    {
      required: !!field.isValid?.required,
      customValidity: getCustomValidity(isValid2, validity),
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true,
      isBlock: true,
      label: field.label,
      help: selectedOption?.description || field.description,
      onChange: onChangeControl,
      value,
      hideLabelFromVision,
      children: elements.map((el) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        import_components16.__experimentalToggleGroupControlOption,
        {
          label: el.label,
          value: el.value
        },
        el.value
      ))
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/array.js
var import_components17 = __toESM(require_components());
var import_element16 = __toESM(require_element());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var { ValidatedFormTokenField } = unlock(import_components17.privateApis);
function ArrayControl({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const { label, placeholder, getValue, setValue, isValid: isValid2 } = field;
  const value = getValue({ item: data });
  const { elements, isLoading } = useElements({
    elements: field.elements,
    getElements: field.getElements
  });
  const arrayValueAsElements = (0, import_element16.useMemo)(
    () => Array.isArray(value) ? value.map((token) => {
      const element = elements?.find(
        (suggestion) => suggestion.value === token
      );
      return element || { value: token, label: token };
    }) : [],
    [value, elements]
  );
  const onChangeControl = (0, import_element16.useCallback)(
    (tokens) => {
      const valueTokens = tokens.map((token) => {
        if (typeof token === "object" && "value" in token) {
          return token.value;
        }
        return token;
      });
      onChange(setValue({ item: data, value: valueTokens }));
    },
    [onChange, setValue, data]
  );
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_components17.Spinner, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    ValidatedFormTokenField,
    {
      required: !!isValid2?.required,
      customValidity: getCustomValidity(isValid2, validity),
      label: hideLabelFromVision ? void 0 : label,
      value: arrayValueAsElements,
      onChange: onChangeControl,
      placeholder,
      suggestions: elements?.map((element) => element.value),
      __experimentalValidateInput: (token) => {
        if (field.isValid?.elements && elements) {
          return elements.some(
            (element) => element.value === token || element.label === token
          );
        }
        return true;
      },
      __experimentalExpandOnFocus: elements && elements.length > 0,
      __experimentalShowHowTo: !field.isValid?.elements,
      displayTransform: (token) => {
        if (typeof token === "object" && "label" in token) {
          return token.label;
        }
        if (typeof token === "string" && elements) {
          const element = elements.find(
            (el) => el.value === token
          );
          return element?.label || token;
        }
        return token;
      },
      __experimentalRenderItem: ({ item }) => {
        if (typeof item === "string" && elements) {
          const element = elements.find(
            (el) => el.value === item
          );
          return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: element?.label || item });
        }
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: item });
      }
    }
  );
}

// node_modules/colord/index.mjs
var r2 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var t = function(r3) {
  return "string" == typeof r3 ? r3.length > 0 : "number" == typeof r3;
};
var n = function(r3, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = Math.pow(10, t2)), Math.round(n2 * r3) / n2 + 0;
};
var e = function(r3, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 1), r3 > n2 ? n2 : r3 > t2 ? r3 : t2;
};
var u = function(r3) {
  return (r3 = isFinite(r3) ? r3 % 360 : 0) > 0 ? r3 : r3 + 360;
};
var a = function(r3) {
  return { r: e(r3.r, 0, 255), g: e(r3.g, 0, 255), b: e(r3.b, 0, 255), a: e(r3.a) };
};
var o = function(r3) {
  return { r: n(r3.r), g: n(r3.g), b: n(r3.b), a: n(r3.a, 3) };
};
var i = /^#([0-9a-f]{3,8})$/i;
var s = function(r3) {
  var t2 = r3.toString(16);
  return t2.length < 2 ? "0" + t2 : t2;
};
var h = function(r3) {
  var t2 = r3.r, n2 = r3.g, e2 = r3.b, u2 = r3.a, a2 = Math.max(t2, n2, e2), o2 = a2 - Math.min(t2, n2, e2), i2 = o2 ? a2 === t2 ? (n2 - e2) / o2 : a2 === n2 ? 2 + (e2 - t2) / o2 : 4 + (t2 - n2) / o2 : 0;
  return { h: 60 * (i2 < 0 ? i2 + 6 : i2), s: a2 ? o2 / a2 * 100 : 0, v: a2 / 255 * 100, a: u2 };
};
var b = function(r3) {
  var t2 = r3.h, n2 = r3.s, e2 = r3.v, u2 = r3.a;
  t2 = t2 / 360 * 6, n2 /= 100, e2 /= 100;
  var a2 = Math.floor(t2), o2 = e2 * (1 - n2), i2 = e2 * (1 - (t2 - a2) * n2), s2 = e2 * (1 - (1 - t2 + a2) * n2), h2 = a2 % 6;
  return { r: 255 * [e2, i2, o2, o2, s2, e2][h2], g: 255 * [s2, e2, e2, i2, o2, o2][h2], b: 255 * [o2, o2, s2, e2, e2, i2][h2], a: u2 };
};
var g = function(r3) {
  return { h: u(r3.h), s: e(r3.s, 0, 100), l: e(r3.l, 0, 100), a: e(r3.a) };
};
var d = function(r3) {
  return { h: n(r3.h), s: n(r3.s), l: n(r3.l), a: n(r3.a, 3) };
};
var f = function(r3) {
  return b((n2 = (t2 = r3).s, { h: t2.h, s: (n2 *= ((e2 = t2.l) < 50 ? e2 : 100 - e2) / 100) > 0 ? 2 * n2 / (e2 + n2) * 100 : 0, v: e2 + n2, a: t2.a }));
  var t2, n2, e2;
};
var c = function(r3) {
  return { h: (t2 = h(r3)).h, s: (u2 = (200 - (n2 = t2.s)) * (e2 = t2.v) / 100) > 0 && u2 < 200 ? n2 * e2 / 100 / (u2 <= 100 ? u2 : 200 - u2) * 100 : 0, l: u2 / 2, a: t2.a };
  var t2, n2, e2, u2;
};
var l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var p = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var y = { string: [[function(r3) {
  var t2 = i.exec(r3);
  return t2 ? (r3 = t2[1]).length <= 4 ? { r: parseInt(r3[0] + r3[0], 16), g: parseInt(r3[1] + r3[1], 16), b: parseInt(r3[2] + r3[2], 16), a: 4 === r3.length ? n(parseInt(r3[3] + r3[3], 16) / 255, 2) : 1 } : 6 === r3.length || 8 === r3.length ? { r: parseInt(r3.substr(0, 2), 16), g: parseInt(r3.substr(2, 2), 16), b: parseInt(r3.substr(4, 2), 16), a: 8 === r3.length ? n(parseInt(r3.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r3) {
  var t2 = v.exec(r3) || m.exec(r3);
  return t2 ? t2[2] !== t2[4] || t2[4] !== t2[6] ? null : a({ r: Number(t2[1]) / (t2[2] ? 100 / 255 : 1), g: Number(t2[3]) / (t2[4] ? 100 / 255 : 1), b: Number(t2[5]) / (t2[6] ? 100 / 255 : 1), a: void 0 === t2[7] ? 1 : Number(t2[7]) / (t2[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t2) {
  var n2 = l.exec(t2) || p.exec(t2);
  if (!n2) return null;
  var e2, u2, a2 = g({ h: (e2 = n2[1], u2 = n2[2], void 0 === u2 && (u2 = "deg"), Number(e2) * (r2[u2] || 1)), s: Number(n2[3]), l: Number(n2[4]), a: void 0 === n2[5] ? 1 : Number(n2[5]) / (n2[6] ? 100 : 1) });
  return f(a2);
}, "hsl"]], object: [[function(r3) {
  var n2 = r3.r, e2 = r3.g, u2 = r3.b, o2 = r3.a, i2 = void 0 === o2 ? 1 : o2;
  return t(n2) && t(e2) && t(u2) ? a({ r: Number(n2), g: Number(e2), b: Number(u2), a: Number(i2) }) : null;
}, "rgb"], [function(r3) {
  var n2 = r3.h, e2 = r3.s, u2 = r3.l, a2 = r3.a, o2 = void 0 === a2 ? 1 : a2;
  if (!t(n2) || !t(e2) || !t(u2)) return null;
  var i2 = g({ h: Number(n2), s: Number(e2), l: Number(u2), a: Number(o2) });
  return f(i2);
}, "hsl"], [function(r3) {
  var n2 = r3.h, a2 = r3.s, o2 = r3.v, i2 = r3.a, s2 = void 0 === i2 ? 1 : i2;
  if (!t(n2) || !t(a2) || !t(o2)) return null;
  var h2 = (function(r4) {
    return { h: u(r4.h), s: e(r4.s, 0, 100), v: e(r4.v, 0, 100), a: e(r4.a) };
  })({ h: Number(n2), s: Number(a2), v: Number(o2), a: Number(s2) });
  return b(h2);
}, "hsv"]] };
var N = function(r3, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var e2 = t2[n2][0](r3);
    if (e2) return [e2, t2[n2][1]];
  }
  return [null, void 0];
};
var x = function(r3) {
  return "string" == typeof r3 ? N(r3.trim(), y.string) : "object" == typeof r3 && null !== r3 ? N(r3, y.object) : [null, void 0];
};
var M = function(r3, t2) {
  var n2 = c(r3);
  return { h: n2.h, s: e(n2.s + 100 * t2, 0, 100), l: n2.l, a: n2.a };
};
var H = function(r3) {
  return (299 * r3.r + 587 * r3.g + 114 * r3.b) / 1e3 / 255;
};
var $ = function(r3, t2) {
  var n2 = c(r3);
  return { h: n2.h, s: n2.s, l: e(n2.l + 100 * t2, 0, 100), a: n2.a };
};
var j = (function() {
  function r3(r4) {
    this.parsed = x(r4)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r3.prototype.isValid = function() {
    return null !== this.parsed;
  }, r3.prototype.brightness = function() {
    return n(H(this.rgba), 2);
  }, r3.prototype.isDark = function() {
    return H(this.rgba) < 0.5;
  }, r3.prototype.isLight = function() {
    return H(this.rgba) >= 0.5;
  }, r3.prototype.toHex = function() {
    return r4 = o(this.rgba), t2 = r4.r, e2 = r4.g, u2 = r4.b, i2 = (a2 = r4.a) < 1 ? s(n(255 * a2)) : "", "#" + s(t2) + s(e2) + s(u2) + i2;
    var r4, t2, e2, u2, a2, i2;
  }, r3.prototype.toRgb = function() {
    return o(this.rgba);
  }, r3.prototype.toRgbString = function() {
    return r4 = o(this.rgba), t2 = r4.r, n2 = r4.g, e2 = r4.b, (u2 = r4.a) < 1 ? "rgba(" + t2 + ", " + n2 + ", " + e2 + ", " + u2 + ")" : "rgb(" + t2 + ", " + n2 + ", " + e2 + ")";
    var r4, t2, n2, e2, u2;
  }, r3.prototype.toHsl = function() {
    return d(c(this.rgba));
  }, r3.prototype.toHslString = function() {
    return r4 = d(c(this.rgba)), t2 = r4.h, n2 = r4.s, e2 = r4.l, (u2 = r4.a) < 1 ? "hsla(" + t2 + ", " + n2 + "%, " + e2 + "%, " + u2 + ")" : "hsl(" + t2 + ", " + n2 + "%, " + e2 + "%)";
    var r4, t2, n2, e2, u2;
  }, r3.prototype.toHsv = function() {
    return r4 = h(this.rgba), { h: n(r4.h), s: n(r4.s), v: n(r4.v), a: n(r4.a, 3) };
    var r4;
  }, r3.prototype.invert = function() {
    return w({ r: 255 - (r4 = this.rgba).r, g: 255 - r4.g, b: 255 - r4.b, a: r4.a });
    var r4;
  }, r3.prototype.saturate = function(r4) {
    return void 0 === r4 && (r4 = 0.1), w(M(this.rgba, r4));
  }, r3.prototype.desaturate = function(r4) {
    return void 0 === r4 && (r4 = 0.1), w(M(this.rgba, -r4));
  }, r3.prototype.grayscale = function() {
    return w(M(this.rgba, -1));
  }, r3.prototype.lighten = function(r4) {
    return void 0 === r4 && (r4 = 0.1), w($(this.rgba, r4));
  }, r3.prototype.darken = function(r4) {
    return void 0 === r4 && (r4 = 0.1), w($(this.rgba, -r4));
  }, r3.prototype.rotate = function(r4) {
    return void 0 === r4 && (r4 = 15), this.hue(this.hue() + r4);
  }, r3.prototype.alpha = function(r4) {
    return "number" == typeof r4 ? w({ r: (t2 = this.rgba).r, g: t2.g, b: t2.b, a: r4 }) : n(this.rgba.a, 3);
    var t2;
  }, r3.prototype.hue = function(r4) {
    var t2 = c(this.rgba);
    return "number" == typeof r4 ? w({ h: r4, s: t2.s, l: t2.l, a: t2.a }) : n(t2.h);
  }, r3.prototype.isEqual = function(r4) {
    return this.toHex() === w(r4).toHex();
  }, r3;
})();
var w = function(r3) {
  return r3 instanceof j ? r3 : new j(r3);
};

// node_modules/@wordpress/dataviews/build-module/dataform-controls/color.js
var import_components18 = __toESM(require_components());
var import_element17 = __toESM(require_element());
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var { ValidatedInputControl: ValidatedInputControl3, Picker } = unlock(import_components18.privateApis);
var ColorPicker = ({
  color,
  onColorChange
}) => {
  const validColor = color && w(color).isValid() ? color : "#ffffff";
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    import_components18.Dropdown,
    {
      renderToggle: ({ onToggle, isOpen }) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_components18.__experimentalInputControlPrefixWrapper, { variant: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        "button",
        {
          type: "button",
          onClick: onToggle,
          style: {
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: validColor,
            border: "1px solid #ddd",
            cursor: "pointer",
            outline: isOpen ? "2px solid #007cba" : "none",
            outlineOffset: "2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            margin: 0
          },
          "aria-label": "Open color picker"
        }
      ) }),
      renderContent: () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { style: { padding: "16px" }, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        Picker,
        {
          color: w(validColor),
          onChange: onColorChange,
          enableAlpha: true
        }
      ) })
    }
  );
};
function Color({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const { label, placeholder, description, setValue, isValid: isValid2 } = field;
  const value = field.getValue({ item: data }) || "";
  const handleColorChange = (0, import_element17.useCallback)(
    (colorObject) => {
      onChange(setValue({ item: data, value: colorObject.toHex() }));
    },
    [data, onChange, setValue]
  );
  const handleInputChange = (0, import_element17.useCallback)(
    (newValue) => {
      onChange(setValue({ item: data, value: newValue || "" }));
    },
    [data, onChange, setValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    ValidatedInputControl3,
    {
      required: !!field.isValid?.required,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      placeholder,
      value,
      help: description,
      onChange: handleInputChange,
      hideLabelFromVision,
      type: "text",
      prefix: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        ColorPicker,
        {
          color: value,
          onColorChange: handleColorChange
        }
      )
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/password.js
var import_components19 = __toESM(require_components());
var import_element18 = __toESM(require_element());
var import_i18n9 = __toESM(require_i18n());
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
function Password({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const [isVisible, setIsVisible] = (0, import_element18.useState)(false);
  const toggleVisibility = (0, import_element18.useCallback)(() => {
    setIsVisible((prev) => !prev);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    ValidatedText,
    {
      ...{
        data,
        field,
        onChange,
        hideLabelFromVision,
        validity,
        type: isVisible ? "text" : "password",
        suffix: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_components19.__experimentalInputControlSuffixWrapper, { variant: "control", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          import_components19.Button,
          {
            icon: isVisible ? unseen_default : seen_default,
            onClick: toggleVisibility,
            size: "small",
            label: isVisible ? (0, import_i18n9.__)("Hide password") : (0, import_i18n9.__)("Show password")
          }
        ) })
      }
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/has-elements.js
function hasElements(field) {
  return Array.isArray(field.elements) && field.elements.length > 0 || typeof field.getElements === "function";
}

// node_modules/@wordpress/dataviews/build-module/dataform-controls/index.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var FORM_CONTROLS = {
  array: ArrayControl,
  checkbox: Checkbox,
  color: Color,
  datetime: DateTime,
  date: DateControl,
  email: Email,
  telephone: Telephone,
  url: Url,
  integer: Number2,
  number: Number3,
  password: Password,
  radio: Radio,
  select: Select,
  text: Text,
  toggle: Toggle,
  textarea: Textarea,
  toggleGroup: ToggleGroup
};
function isEditConfig(value) {
  return value && typeof value === "object" && typeof value.control === "string";
}
function createConfiguredControl(config) {
  const { control, ...controlConfig } = config;
  const BaseControlType = getControlByType(control);
  if (BaseControlType === null) {
    return null;
  }
  return function ConfiguredControl(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(BaseControlType, { ...props, config: controlConfig });
  };
}
function getControl(field, fallback) {
  if (typeof field.Edit === "function") {
    return field.Edit;
  }
  if (typeof field.Edit === "string") {
    return getControlByType(field.Edit);
  }
  if (isEditConfig(field.Edit)) {
    return createConfiguredControl(field.Edit);
  }
  if (hasElements(field) && field.type !== "array") {
    return getControlByType("select");
  }
  if (fallback === null) {
    return null;
  }
  return getControlByType(fallback);
}
function getControlByType(type) {
  if (Object.keys(FORM_CONTROLS).includes(type)) {
    return FORM_CONTROLS[type];
  }
  return null;
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/get-filter-by.js
function getFilterBy(field, defaultOperators, validOperators) {
  if (field.filterBy === false) {
    return false;
  }
  const operators = field.filterBy?.operators?.filter(
    (op) => validOperators.includes(op)
  ) ?? defaultOperators;
  if (operators.length === 0) {
    return false;
  }
  return {
    isPrimary: !!field.filterBy?.isPrimary,
    operators
  };
}
var get_filter_by_default = getFilterBy;

// node_modules/@wordpress/dataviews/build-module/field-types/utils/get-value-from-id.js
var getValueFromId = (id) => ({ item }) => {
  const path = id.split(".");
  let value = item;
  for (const segment of path) {
    if (value.hasOwnProperty(segment)) {
      value = value[segment];
    } else {
      value = void 0;
    }
  }
  return value;
};
var get_value_from_id_default = getValueFromId;

// node_modules/@wordpress/dataviews/build-module/field-types/utils/set-value-from-id.js
var setValueFromId = (id) => ({ value }) => {
  const path = id.split(".");
  const result = {};
  let current = result;
  for (const segment of path.slice(0, -1)) {
    current[segment] = {};
    current = current[segment];
  }
  current[path.at(-1)] = value;
  return result;
};
var set_value_from_id_default = setValueFromId;

// node_modules/@wordpress/dataviews/build-module/field-types/email.js
var import_i18n10 = __toESM(require_i18n());

// node_modules/@wordpress/dataviews/build-module/field-types/utils/render-default.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
function render3({
  item,
  field
}) {
  return field.hasElements ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(RenderFromElements, { item, field }) : field.getValue({ item });
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/sort-text.js
var sort_text_default = (a2, b2, direction) => {
  return direction === "asc" ? a2.localeCompare(b2) : b2.localeCompare(a2);
};

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-min-length.js
function isValidMinLength(item, field) {
  if (typeof field.isValid.minLength?.constraint !== "number") {
    return false;
  }
  const value = field.getValue({ item });
  if ([void 0, "", null].includes(value)) {
    return true;
  }
  return String(value).length >= field.isValid.minLength.constraint;
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-max-length.js
function isValidMaxLength(item, field) {
  if (typeof field.isValid.maxLength?.constraint !== "number") {
    return false;
  }
  const value = field.getValue({ item });
  if ([void 0, "", null].includes(value)) {
    return true;
  }
  return String(value).length <= field.isValid.maxLength.constraint;
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-pattern.js
function isValidPattern(item, field) {
  if (field.isValid.pattern?.constraint === void 0) {
    return true;
  }
  try {
    const regexp = new RegExp(field.isValid.pattern.constraint);
    const value = field.getValue({ item });
    if ([void 0, "", null].includes(value)) {
      return true;
    }
    return regexp.test(String(value));
  } catch {
    return false;
  }
}

// node_modules/@wordpress/dataviews/build-module/field-types/email.js
var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function isValidCustom3(item, field) {
  const value = field.getValue({ item });
  if (![void 0, "", null].includes(value) && !emailRegex.test(value)) {
    return (0, import_i18n10.__)("Value must be a valid email address.");
  }
  return null;
}
var email_default = {
  type: "email",
  render: render3,
  Edit: "email",
  sort: sort_text_default,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
  validOperators: [
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_CONTAINS,
    OPERATOR_NOT_CONTAINS,
    OPERATOR_STARTS_WITH,
    // Multiple selection
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  getFormat: () => ({}),
  validate: {
    required: isValidRequired,
    pattern: isValidPattern,
    minLength: isValidMinLength,
    maxLength: isValidMaxLength,
    elements: isValidElements,
    custom: isValidCustom3
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/text.js
var text_default = {
  type: "text",
  render: render3,
  Edit: "text",
  sort: sort_text_default,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
  validOperators: [
    // Single selection
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_CONTAINS,
    OPERATOR_NOT_CONTAINS,
    OPERATOR_STARTS_WITH,
    // Multiple selection
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  getFormat: () => ({}),
  validate: {
    required: isValidRequired,
    pattern: isValidPattern,
    minLength: isValidMinLength,
    maxLength: isValidMaxLength,
    elements: isValidElements
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/datetime.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
function render4({ item, field }) {
  if (field.elements) {
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(RenderFromElements, { item, field });
  }
  const value = field.getValue({ item });
  if (["", void 0, null].includes(value)) {
    return null;
  }
  try {
    const dateValue = parseDateTime(value);
    return dateValue?.toLocaleString();
  } catch (error) {
    return null;
  }
}
var sort = (a2, b2, direction) => {
  const timeA = new Date(a2).getTime();
  const timeB = new Date(b2).getTime();
  return direction === "asc" ? timeA - timeB : timeB - timeA;
};
var datetime_default = {
  type: "datetime",
  render: render4,
  Edit: "datetime",
  sort,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [
    OPERATOR_ON,
    OPERATOR_NOT_ON,
    OPERATOR_BEFORE,
    OPERATOR_AFTER,
    OPERATOR_BEFORE_INC,
    OPERATOR_AFTER_INC,
    OPERATOR_IN_THE_PAST,
    OPERATOR_OVER
  ],
  validOperators: [
    OPERATOR_ON,
    OPERATOR_NOT_ON,
    OPERATOR_BEFORE,
    OPERATOR_AFTER,
    OPERATOR_BEFORE_INC,
    OPERATOR_AFTER_INC,
    OPERATOR_IN_THE_PAST,
    OPERATOR_OVER
  ],
  getFormat: () => ({}),
  validate: {
    required: isValidRequired,
    elements: isValidElements
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/date.js
var import_date5 = __toESM(require_date());
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
function getFormat3(field) {
  const fieldFormat = field.format;
  return {
    date: fieldFormat?.date !== void 0 && typeof fieldFormat.date === "string" ? fieldFormat.date : (0, import_date5.getSettings)().formats.date,
    weekStartsOn: fieldFormat?.weekStartsOn !== void 0 && DAYS_OF_WEEK.includes(fieldFormat?.weekStartsOn) ? fieldFormat.weekStartsOn : (0, import_date5.getSettings)().l10n.startOfWeek
  };
}
function render5({ item, field }) {
  if (field.hasElements) {
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(RenderFromElements, { item, field });
  }
  const value = field.getValue({ item });
  if (!value) {
    return "";
  }
  let format2;
  if (field.type !== "date") {
    format2 = getFormat3({});
  } else {
    format2 = field.format;
  }
  return (0, import_date5.dateI18n)(format2.date, (0, import_date5.getDate)(value));
}
var sort2 = (a2, b2, direction) => {
  const timeA = new Date(a2).getTime();
  const timeB = new Date(b2).getTime();
  return direction === "asc" ? timeA - timeB : timeB - timeA;
};
var date_default = {
  type: "date",
  render: render5,
  Edit: "date",
  sort: sort2,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [
    OPERATOR_ON,
    OPERATOR_NOT_ON,
    OPERATOR_BEFORE,
    OPERATOR_AFTER,
    OPERATOR_BEFORE_INC,
    OPERATOR_AFTER_INC,
    OPERATOR_IN_THE_PAST,
    OPERATOR_OVER,
    OPERATOR_BETWEEN
  ],
  validOperators: [
    OPERATOR_ON,
    OPERATOR_NOT_ON,
    OPERATOR_BEFORE,
    OPERATOR_AFTER,
    OPERATOR_BEFORE_INC,
    OPERATOR_AFTER_INC,
    OPERATOR_IN_THE_PAST,
    OPERATOR_OVER,
    OPERATOR_BETWEEN
  ],
  getFormat: getFormat3,
  validate: {
    required: isValidRequired,
    elements: isValidElements
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/boolean.js
var import_i18n11 = __toESM(require_i18n());

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-required-for-bool.js
function isValidRequiredForBool(item, field) {
  const value = field.getValue({ item });
  return value === true;
}

// node_modules/@wordpress/dataviews/build-module/field-types/boolean.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
function render6({ item, field }) {
  if (field.hasElements) {
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(RenderFromElements, { item, field });
  }
  if (field.getValue({ item }) === true) {
    return (0, import_i18n11.__)("True");
  }
  if (field.getValue({ item }) === false) {
    return (0, import_i18n11.__)("False");
  }
  return null;
}
function isValidCustom4(item, field) {
  const value = field.getValue({ item });
  if (![void 0, "", null].includes(value) && ![true, false].includes(value)) {
    return (0, import_i18n11.__)("Value must be true, false, or undefined");
  }
  return null;
}
var sort3 = (a2, b2, direction) => {
  const boolA = Boolean(a2);
  const boolB = Boolean(b2);
  if (boolA === boolB) {
    return 0;
  }
  if (direction === "asc") {
    return boolA ? 1 : -1;
  }
  return boolA ? -1 : 1;
};
var boolean_default = {
  type: "boolean",
  render: render6,
  Edit: "checkbox",
  sort: sort3,
  validate: {
    required: isValidRequiredForBool,
    elements: isValidElements,
    custom: isValidCustom4
  },
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS, OPERATOR_IS_NOT],
  validOperators: [OPERATOR_IS, OPERATOR_IS_NOT],
  getFormat: () => ({})
};

// node_modules/@wordpress/dataviews/build-module/field-types/media.js
var media_default = {
  type: "media",
  render: () => null,
  Edit: null,
  sort: () => 0,
  enableSorting: false,
  enableGlobalSearch: false,
  defaultOperators: [],
  validOperators: [],
  getFormat: () => ({}),
  // cannot validate any constraint, so
  // the only available validation for the field author
  // would be providing a custom validator.
  validate: {}
};

// node_modules/@wordpress/dataviews/build-module/field-types/array.js
var import_i18n12 = __toESM(require_i18n());

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-required-for-array.js
function isValidRequiredForArray(item, field) {
  const value = field.getValue({ item });
  return Array.isArray(value) && value.length > 0 && value.every(
    (element) => ![void 0, "", null].includes(element)
  );
}

// node_modules/@wordpress/dataviews/build-module/field-types/array.js
function render7({ item, field }) {
  const value = field.getValue({ item }) || [];
  return value.join(", ");
}
function isValidCustom5(item, field) {
  const value = field.getValue({ item });
  if (![void 0, "", null].includes(value) && !Array.isArray(value)) {
    return (0, import_i18n12.__)("Value must be an array.");
  }
  if (!value.every((v2) => typeof v2 === "string")) {
    return (0, import_i18n12.__)("Every value must be a string.");
  }
  return null;
}
var sort4 = (a2, b2, direction) => {
  const arrA = Array.isArray(a2) ? a2 : [];
  const arrB = Array.isArray(b2) ? b2 : [];
  if (arrA.length !== arrB.length) {
    return direction === "asc" ? arrA.length - arrB.length : arrB.length - arrA.length;
  }
  const joinedA = arrA.join(",");
  const joinedB = arrB.join(",");
  return direction === "asc" ? joinedA.localeCompare(joinedB) : joinedB.localeCompare(joinedA);
};
var array_default = {
  type: "array",
  render: render7,
  Edit: "array",
  sort: sort4,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
  validOperators: [
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  getFormat: () => ({}),
  validate: {
    required: isValidRequiredForArray,
    elements: isValidElements,
    custom: isValidCustom5
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/password.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
function render8({ item, field }) {
  return field.hasElements ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(RenderFromElements, { item, field }) : "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
}
var password_default = {
  type: "password",
  render: render8,
  Edit: "password",
  sort: () => 0,
  // Passwords should not be sortable for security reasons
  enableSorting: false,
  enableGlobalSearch: false,
  defaultOperators: [],
  validOperators: [],
  getFormat: () => ({}),
  validate: {
    required: isValidRequired,
    pattern: isValidPattern,
    minLength: isValidMinLength,
    maxLength: isValidMaxLength,
    elements: isValidElements
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/telephone.js
var telephone_default = {
  type: "telephone",
  render: render3,
  Edit: "telephone",
  sort: sort_text_default,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
  validOperators: [
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_CONTAINS,
    OPERATOR_NOT_CONTAINS,
    OPERATOR_STARTS_WITH,
    // Multiple selection
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  getFormat: () => ({}),
  validate: {
    required: isValidRequired,
    pattern: isValidPattern,
    minLength: isValidMinLength,
    maxLength: isValidMaxLength,
    elements: isValidElements
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/color.js
var import_i18n13 = __toESM(require_i18n());
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
function render9({ item, field }) {
  if (field.hasElements) {
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(RenderFromElements, { item, field });
  }
  const value = field.getValue({ item });
  if (!value || !w(value).isValid()) {
    return value;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      "div",
      {
        style: {
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: value,
          border: "1px solid #ddd",
          flexShrink: 0
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: value })
  ] });
}
function isValidCustom6(item, field) {
  const value = field.getValue({ item });
  if (![void 0, "", null].includes(value) && !w(value).isValid()) {
    return (0, import_i18n13.__)("Value must be a valid color.");
  }
  return null;
}
var sort5 = (a2, b2, direction) => {
  const colorA = w(a2);
  const colorB = w(b2);
  if (!colorA.isValid() && !colorB.isValid()) {
    return 0;
  }
  if (!colorA.isValid()) {
    return direction === "asc" ? 1 : -1;
  }
  if (!colorB.isValid()) {
    return direction === "asc" ? -1 : 1;
  }
  const hslA = colorA.toHsl();
  const hslB = colorB.toHsl();
  if (hslA.h !== hslB.h) {
    return direction === "asc" ? hslA.h - hslB.h : hslB.h - hslA.h;
  }
  if (hslA.s !== hslB.s) {
    return direction === "asc" ? hslA.s - hslB.s : hslB.s - hslA.s;
  }
  return direction === "asc" ? hslA.l - hslB.l : hslB.l - hslA.l;
};
var color_default = {
  type: "color",
  render: render9,
  Edit: "color",
  sort: sort5,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
  validOperators: [
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE
  ],
  getFormat: () => ({}),
  validate: {
    required: isValidRequired,
    elements: isValidElements,
    custom: isValidCustom6
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/url.js
var url_default = {
  type: "url",
  render: render3,
  Edit: "url",
  sort: sort_text_default,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
  validOperators: [
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_CONTAINS,
    OPERATOR_NOT_CONTAINS,
    OPERATOR_STARTS_WITH,
    // Multiple selection
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  getFormat: () => ({}),
  validate: {
    required: isValidRequired,
    pattern: isValidPattern,
    minLength: isValidMinLength,
    maxLength: isValidMaxLength,
    elements: isValidElements
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/no-type.js
var sort6 = (a2, b2, direction) => {
  if (typeof a2 === "number" && typeof b2 === "number") {
    return sort_number_default(a2, b2, direction);
  }
  return sort_text_default(a2, b2, direction);
};
var no_type_default = {
  // type: no type for this one
  render: render3,
  Edit: null,
  sort: sort6,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS, OPERATOR_IS_NOT],
  validOperators: getAllOperatorNames(),
  getFormat: () => ({}),
  validate: {
    required: isValidRequired,
    elements: isValidElements
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/utils/get-is-valid.js
function getIsValid(field, fieldType) {
  let required;
  if (field.isValid?.required === true && fieldType.validate.required !== void 0) {
    required = {
      constraint: true,
      validate: fieldType.validate.required
    };
  }
  let elements;
  if ((field.isValid?.elements === true || // elements is enabled unless the field opts-out
  field.isValid?.elements === void 0 && (!!field.elements || !!field.getElements)) && fieldType.validate.elements !== void 0) {
    elements = {
      constraint: true,
      validate: fieldType.validate.elements
    };
  }
  let min;
  if (typeof field.isValid?.min === "number" && fieldType.validate.min !== void 0) {
    min = {
      constraint: field.isValid.min,
      validate: fieldType.validate.min
    };
  }
  let max;
  if (typeof field.isValid?.max === "number" && fieldType.validate.max !== void 0) {
    max = {
      constraint: field.isValid.max,
      validate: fieldType.validate.max
    };
  }
  let minLength;
  if (typeof field.isValid?.minLength === "number" && fieldType.validate.minLength !== void 0) {
    minLength = {
      constraint: field.isValid.minLength,
      validate: fieldType.validate.minLength
    };
  }
  let maxLength;
  if (typeof field.isValid?.maxLength === "number" && fieldType.validate.maxLength !== void 0) {
    maxLength = {
      constraint: field.isValid.maxLength,
      validate: fieldType.validate.maxLength
    };
  }
  let pattern;
  if (field.isValid?.pattern !== void 0 && fieldType.validate.pattern !== void 0) {
    pattern = {
      constraint: field.isValid?.pattern,
      validate: fieldType.validate.pattern
    };
  }
  const custom = field.isValid?.custom ?? fieldType.validate.custom;
  return {
    required,
    elements,
    min,
    max,
    minLength,
    maxLength,
    pattern,
    custom
  };
}

// node_modules/@wordpress/dataviews/build-module/field-types/index.js
function getFieldTypeByName(type) {
  const found = [
    email_default,
    integer_default,
    number_default,
    text_default,
    datetime_default,
    date_default,
    boolean_default,
    media_default,
    array_default,
    password_default,
    telephone_default,
    color_default,
    url_default
  ].find((fieldType) => fieldType?.type === type);
  if (!!found) {
    return found;
  }
  return no_type_default;
}
function normalizeFields(fields) {
  return fields.map((field) => {
    const fieldType = getFieldTypeByName(field.type);
    const getValue = field.getValue || get_value_from_id_default(field.id);
    const sort7 = function(a2, b2, direction) {
      const aValue = getValue({ item: a2 });
      const bValue = getValue({ item: b2 });
      return field.sort ? field.sort(aValue, bValue, direction) : fieldType.sort(aValue, bValue, direction);
    };
    return {
      id: field.id,
      label: field.label || field.id,
      header: field.header || field.label || field.id,
      description: field.description,
      placeholder: field.placeholder,
      getValue,
      setValue: field.setValue || set_value_from_id_default(field.id),
      elements: field.elements,
      getElements: field.getElements,
      hasElements: hasElements(field),
      isVisible: field.isVisible,
      enableHiding: field.enableHiding ?? true,
      readOnly: field.readOnly ?? false,
      // The type provides defaults for the following props
      type: fieldType.type,
      render: field.render ?? fieldType.render,
      Edit: getControl(field, fieldType.Edit),
      sort: sort7,
      enableSorting: field.enableSorting ?? fieldType.enableSorting,
      enableGlobalSearch: field.enableGlobalSearch ?? fieldType.enableGlobalSearch,
      isValid: getIsValid(field, fieldType),
      filterBy: get_filter_by_default(
        field,
        fieldType.defaultOperators,
        fieldType.validOperators
      ),
      format: fieldType.getFormat(field)
    };
  });
}

// node_modules/@wordpress/dataviews/build-module/components/dataform/index.js
var import_element28 = __toESM(require_element());

// node_modules/@wordpress/dataviews/build-module/components/dataform-context/index.js
var import_element19 = __toESM(require_element());
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var DataFormContext = (0, import_element19.createContext)({
  fields: []
});
DataFormContext.displayName = "DataFormContext";
function DataFormProvider({
  fields,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(DataFormContext.Provider, { value: { fields }, children });
}
var dataform_context_default = DataFormContext;

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/data-form-layout.js
var import_components28 = __toESM(require_components());
var import_element27 = __toESM(require_element());

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/index.js
var import_components27 = __toESM(require_components());

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/regular/index.js
var import_element20 = __toESM(require_element());
var import_components20 = __toESM(require_components());

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/normalize-form.js
var DEFAULT_LAYOUT = {
  type: "regular",
  labelPosition: "top"
};
var normalizeCardSummaryField = (sum) => {
  if (typeof sum === "string") {
    return [{ id: sum, visibility: "when-collapsed" }];
  }
  return sum.map((item) => {
    if (typeof item === "string") {
      return { id: item, visibility: "when-collapsed" };
    }
    return { id: item.id, visibility: item.visibility };
  });
};
function normalizeLayout(layout) {
  let normalizedLayout = DEFAULT_LAYOUT;
  if (layout?.type === "regular") {
    normalizedLayout = {
      type: "regular",
      labelPosition: layout?.labelPosition ?? "top"
    };
  } else if (layout?.type === "panel") {
    const summary = layout.summary ?? [];
    const normalizedSummary = Array.isArray(summary) ? summary : [summary];
    normalizedLayout = {
      type: "panel",
      labelPosition: layout?.labelPosition ?? "side",
      openAs: layout?.openAs ?? "dropdown",
      summary: normalizedSummary
    };
  } else if (layout?.type === "card") {
    if (layout.withHeader === false) {
      normalizedLayout = {
        type: "card",
        withHeader: false,
        isOpened: true,
        summary: [],
        isCollapsible: false
      };
    } else {
      const summary = layout.summary ?? [];
      normalizedLayout = {
        type: "card",
        withHeader: true,
        isOpened: typeof layout.isOpened === "boolean" ? layout.isOpened : true,
        summary: normalizeCardSummaryField(summary),
        isCollapsible: layout.isCollapsible === void 0 ? true : layout.isCollapsible
      };
    }
  } else if (layout?.type === "row") {
    normalizedLayout = {
      type: "row",
      alignment: layout?.alignment ?? "center",
      styles: layout?.styles ?? {}
    };
  } else if (layout?.type === "details") {
    normalizedLayout = {
      type: "details",
      summary: layout?.summary ?? ""
    };
  }
  return normalizedLayout;
}
function normalizeForm(form) {
  const normalizedFormLayout = normalizeLayout(form?.layout);
  const normalizedFields = (form.fields ?? []).map(
    (field) => {
      if (typeof field === "string") {
        return {
          id: field,
          layout: normalizedFormLayout
        };
      }
      const fieldLayout = field.layout ? normalizeLayout(field.layout) : normalizedFormLayout;
      return {
        id: field.id,
        layout: fieldLayout,
        ...!!field.label && { label: field.label },
        ...!!field.description && {
          description: field.description
        },
        ..."children" in field && Array.isArray(field.children) && {
          children: normalizeForm({
            fields: field.children,
            layout: DEFAULT_LAYOUT
          }).fields
        }
      };
    }
  );
  return {
    layout: normalizedFormLayout,
    fields: normalizedFields
  };
}
var normalize_form_default = normalizeForm;

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/regular/index.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
function Header2({ title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_components20.__experimentalVStack, { className: "dataforms-layouts-regular__header", spacing: 4, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_components20.__experimentalHStack, { alignment: "center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_components20.__experimentalHeading, { level: 2, size: 13, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_components20.__experimentalSpacer, {})
  ] }) });
}
function FormRegularField({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const { fields } = (0, import_element20.useContext)(dataform_context_default);
  const layout = field.layout;
  const form = (0, import_element20.useMemo)(
    () => ({
      layout: DEFAULT_LAYOUT,
      fields: !!field.children ? field.children : []
    }),
    [field]
  );
  if (!!field.children) {
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [
      !hideLabelFromVision && field.label && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Header2, { title: field.label }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
        DataFormLayout,
        {
          data,
          form,
          onChange,
          validity: validity?.children
        }
      )
    ] });
  }
  const labelPosition = layout.labelPosition;
  const fieldDefinition = fields.find(
    (fieldDef) => fieldDef.id === field.id
  );
  if (!fieldDefinition || !fieldDefinition.Edit) {
    return null;
  }
  if (labelPosition === "side") {
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_components20.__experimentalHStack, { className: "dataforms-layouts-regular__field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
        "div",
        {
          className: clsx_default(
            "dataforms-layouts-regular__field-label",
            `dataforms-layouts-regular__field-label--label-position-${labelPosition}`
          ),
          children: fieldDefinition.label
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "dataforms-layouts-regular__field-control", children: fieldDefinition.readOnly === true ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
        fieldDefinition.render,
        {
          item: data,
          field: fieldDefinition
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
        fieldDefinition.Edit,
        {
          data,
          field: fieldDefinition,
          onChange,
          hideLabelFromVision: true,
          validity
        },
        fieldDefinition.id
      ) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "dataforms-layouts-regular__field", children: fieldDefinition.readOnly === true ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_jsx_runtime44.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [
    !hideLabelFromVision && labelPosition !== "none" && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_components20.BaseControl.VisualLabel, { children: fieldDefinition.label }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      fieldDefinition.render,
      {
        item: data,
        field: fieldDefinition
      }
    )
  ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    fieldDefinition.Edit,
    {
      data,
      field: fieldDefinition,
      onChange,
      hideLabelFromVision: labelPosition === "none" ? true : hideLabelFromVision,
      validity
    }
  ) });
}

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/panel/index.js
var import_components24 = __toESM(require_components());
var import_element24 = __toESM(require_element());

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/panel/dropdown.js
var import_components22 = __toESM(require_components());
var import_i18n15 = __toESM(require_i18n());
var import_element21 = __toESM(require_element());
var import_compose = __toESM(require_compose());

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/panel/summary-button.js
var import_components21 = __toESM(require_components());
var import_i18n14 = __toESM(require_i18n());
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
function SummaryButton({
  summaryFields,
  data,
  labelPosition,
  fieldLabel,
  disabled,
  onClick,
  "aria-expanded": ariaExpanded
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    import_components21.Button,
    {
      className: "dataforms-layouts-panel__summary-button",
      size: "compact",
      variant: ["none", "top"].includes(labelPosition) ? "link" : "tertiary",
      "aria-expanded": ariaExpanded,
      "aria-label": (0, import_i18n14.sprintf)(
        // translators: %s: Field name.
        (0, import_i18n14._x)("Edit %s", "field"),
        fieldLabel || ""
      ),
      onClick,
      disabled,
      accessibleWhenDisabled: true,
      style: summaryFields.length > 1 ? {
        minHeight: "auto",
        height: "auto",
        alignItems: "flex-start"
      } : void 0,
      children: summaryFields.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            gap: "2px"
          },
          children: summaryFields.map((summaryField) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
            "div",
            {
              style: { width: "100%" },
              children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
                summaryField.render,
                {
                  item: data,
                  field: summaryField
                }
              )
            },
            summaryField.id
          ))
        }
      ) : summaryFields.map((summaryField) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        summaryField.render,
        {
          item: data,
          field: summaryField
        },
        summaryField.id
      ))
    }
  );
}
var summary_button_default = SummaryButton;

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/panel/dropdown.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
function DropdownHeader({
  title,
  onClose
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    import_components22.__experimentalVStack,
    {
      className: "dataforms-layouts-panel__dropdown-header",
      spacing: 4,
      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(import_components22.__experimentalHStack, { alignment: "center", children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_components22.__experimentalHeading, { level: 2, size: 13, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_components22.__experimentalSpacer, {}),
        onClose && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          import_components22.Button,
          {
            label: (0, import_i18n15.__)("Close"),
            icon: close_small_default,
            onClick: onClose,
            size: "small"
          }
        )
      ] })
    }
  );
}
function PanelDropdown({
  data,
  field,
  onChange,
  validity,
  labelPosition = "side",
  summaryFields,
  fieldDefinition,
  popoverAnchor
}) {
  const fieldLabel = !!field.children ? field.label : fieldDefinition?.label;
  const form = (0, import_element21.useMemo)(
    () => ({
      layout: DEFAULT_LAYOUT,
      fields: !!field.children ? field.children : (
        // If not explicit children return the field id itself.
        [{ id: field.id, layout: DEFAULT_LAYOUT }]
      )
    }),
    [field]
  );
  const formValidity = (0, import_element21.useMemo)(() => {
    if (validity === void 0) {
      return void 0;
    }
    if (!!field.children) {
      return validity?.children;
    }
    return { [field.id]: validity };
  }, [validity, field]);
  const popoverProps = (0, import_element21.useMemo)(
    () => ({
      // Anchor the popover to the middle of the entire row so that it doesn't
      // move around when the label changes.
      anchor: popoverAnchor,
      placement: "left-start",
      offset: 36,
      shift: true
    }),
    [popoverAnchor]
  );
  const focusOnMountRef = (0, import_compose.useFocusOnMount)("firstInputElement");
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    import_components22.Dropdown,
    {
      contentClassName: "dataforms-layouts-panel__field-dropdown",
      popoverProps,
      focusOnMount: false,
      toggleProps: {
        size: "compact",
        variant: "tertiary",
        tooltipPosition: "middle left"
      },
      renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
        summary_button_default,
        {
          summaryFields,
          data,
          labelPosition,
          fieldLabel,
          disabled: fieldDefinition.readOnly === true,
          onClick: onToggle,
          "aria-expanded": isOpen
        }
      ),
      renderContent: ({ onClose }) => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(import_jsx_runtime46.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(DropdownHeader, { title: fieldLabel, onClose }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { ref: focusOnMountRef, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          DataFormLayout,
          {
            data,
            form,
            onChange,
            validity: formValidity,
            children: (FieldLayout, childField, childFieldValidity) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              FieldLayout,
              {
                data,
                field: childField,
                onChange,
                hideLabelFromVision: (form?.fields ?? []).length < 2,
                validity: childFieldValidity
              },
              childField.id
            )
          }
        ) })
      ] })
    }
  );
}
var dropdown_default = PanelDropdown;

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/panel/modal.js
var import_deepmerge2 = __toESM(require_cjs());
var import_components23 = __toESM(require_components());
var import_i18n17 = __toESM(require_i18n());
var import_element23 = __toESM(require_element());
var import_compose2 = __toESM(require_compose());

// node_modules/@wordpress/dataviews/build-module/hooks/use-form-validity.js
var import_deepmerge = __toESM(require_cjs());
var import_es6 = __toESM(require_es6());
var import_element22 = __toESM(require_element());
var import_i18n16 = __toESM(require_i18n());
function isFormValid(formValidity) {
  if (!formValidity) {
    return true;
  }
  return Object.values(formValidity).every((fieldValidation) => {
    return Object.entries(fieldValidation).every(
      ([key, validation]) => {
        if (key === "children" && validation && typeof validation === "object") {
          return isFormValid(validation);
        }
        return validation.type === "valid";
      }
    );
  });
}
function getFormFieldsToValidate(form, fields) {
  const normalizedForm = normalize_form_default(form);
  if (normalizedForm.fields.length === 0) {
    return [];
  }
  const fieldsMap = /* @__PURE__ */ new Map();
  fields.forEach((field) => {
    fieldsMap.set(field.id, field);
  });
  function processFormField(formField) {
    if ("children" in formField && Array.isArray(formField.children)) {
      const processedChildren = formField.children.map(processFormField).filter((child) => child !== null);
      if (processedChildren.length === 0) {
        return null;
      }
      const fieldDef2 = fieldsMap.get(formField.id);
      if (fieldDef2) {
        const [normalizedField2] = normalizeFields([
          fieldDef2
        ]);
        return {
          id: formField.id,
          children: processedChildren,
          field: normalizedField2
        };
      }
      return {
        id: formField.id,
        children: processedChildren
      };
    }
    const fieldDef = fieldsMap.get(formField.id);
    if (!fieldDef) {
      return null;
    }
    const [normalizedField] = normalizeFields([fieldDef]);
    return {
      id: formField.id,
      children: [],
      field: normalizedField
    };
  }
  const toValidate = normalizedForm.fields.map(processFormField).filter((field) => field !== null);
  return toValidate;
}
function setValidityAtPath(formValidity, fieldValidity, path) {
  if (!formValidity) {
    formValidity = {};
  }
  if (path.length === 0) {
    return formValidity;
  }
  const result = { ...formValidity };
  let current = result;
  for (let i2 = 0; i2 < path.length - 1; i2++) {
    const segment = path[i2];
    if (!current[segment]) {
      current[segment] = {};
    }
    current = current[segment];
  }
  const finalKey = path[path.length - 1];
  current[finalKey] = {
    ...current[finalKey] || {},
    ...fieldValidity
  };
  return result;
}
function handleElementsValidationAsync(promise, formField, promiseHandler) {
  const { elementsCounterRef, setFormValidity, path, item } = promiseHandler;
  const currentToken = (elementsCounterRef.current[formField.id] || 0) + 1;
  elementsCounterRef.current[formField.id] = currentToken;
  promise.then((result) => {
    if (currentToken !== elementsCounterRef.current[formField.id]) {
      return;
    }
    if (!Array.isArray(result)) {
      setFormValidity((prev) => {
        const newFormValidity = setValidityAtPath(
          prev,
          {
            elements: {
              type: "invalid",
              message: (0, import_i18n16.__)("Could not validate elements.")
            }
          },
          [...path, formField.id]
        );
        return newFormValidity;
      });
      return;
    }
    if (formField.field?.isValid.elements && !formField.field.isValid.elements.validate(item, {
      ...formField.field,
      elements: result
    })) {
      setFormValidity((prev) => {
        const newFormValidity = setValidityAtPath(
          prev,
          {
            elements: {
              type: "invalid",
              message: (0, import_i18n16.__)(
                "Value must be one of the elements."
              )
            }
          },
          [...path, formField.id]
        );
        return newFormValidity;
      });
    }
  }).catch((error) => {
    if (currentToken !== elementsCounterRef.current[formField.id]) {
      return;
    }
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = String(error) || (0, import_i18n16.__)(
        "Unknown error when running elements validation asynchronously."
      );
    }
    setFormValidity((prev) => {
      const newFormValidity = setValidityAtPath(
        prev,
        {
          elements: {
            type: "invalid",
            message: errorMessage
          }
        },
        [...path, formField.id]
      );
      return newFormValidity;
    });
  });
}
function handleCustomValidationAsync(promise, formField, promiseHandler) {
  const { customCounterRef, setFormValidity, path } = promiseHandler;
  const currentToken = (customCounterRef.current[formField.id] || 0) + 1;
  customCounterRef.current[formField.id] = currentToken;
  promise.then((result) => {
    if (currentToken !== customCounterRef.current[formField.id]) {
      return;
    }
    if (result === null) {
      setFormValidity((prev) => {
        const newFormValidity = setValidityAtPath(
          prev,
          {
            custom: {
              type: "valid",
              message: (0, import_i18n16.__)("Valid")
            }
          },
          [...path, formField.id]
        );
        return newFormValidity;
      });
      return;
    }
    if (typeof result === "string") {
      setFormValidity((prev) => {
        const newFormValidity = setValidityAtPath(
          prev,
          {
            custom: {
              type: "invalid",
              message: result
            }
          },
          [...path, formField.id]
        );
        return newFormValidity;
      });
      return;
    }
    setFormValidity((prev) => {
      const newFormValidity = setValidityAtPath(
        prev,
        {
          custom: {
            type: "invalid",
            message: (0, import_i18n16.__)("Validation could not be processed.")
          }
        },
        [...path, formField.id]
      );
      return newFormValidity;
    });
  }).catch((error) => {
    if (currentToken !== customCounterRef.current[formField.id]) {
      return;
    }
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = String(error) || (0, import_i18n16.__)(
        "Unknown error when running custom validation asynchronously."
      );
    }
    setFormValidity((prev) => {
      const newFormValidity = setValidityAtPath(
        prev,
        {
          custom: {
            type: "invalid",
            message: errorMessage
          }
        },
        [...path, formField.id]
      );
      return newFormValidity;
    });
  });
}
function validateFormField(item, formField, promiseHandler) {
  if (formField.field?.isValid.required && !formField.field.isValid.required.validate(item, formField.field)) {
    return {
      required: { type: "invalid" }
    };
  }
  if (formField.field?.isValid.pattern && !formField.field.isValid.pattern.validate(item, formField.field)) {
    return {
      pattern: {
        type: "invalid",
        message: (0, import_i18n16.__)("Value does not match the required pattern.")
      }
    };
  }
  if (formField.field?.isValid.min && !formField.field.isValid.min.validate(item, formField.field)) {
    return {
      min: {
        type: "invalid",
        message: (0, import_i18n16.__)("Value is below the minimum.")
      }
    };
  }
  if (formField.field?.isValid.max && !formField.field.isValid.max.validate(item, formField.field)) {
    return {
      max: {
        type: "invalid",
        message: (0, import_i18n16.__)("Value is above the maximum.")
      }
    };
  }
  if (formField.field?.isValid.minLength && !formField.field.isValid.minLength.validate(item, formField.field)) {
    return {
      minLength: {
        type: "invalid",
        message: (0, import_i18n16.__)("Value is too short.")
      }
    };
  }
  if (formField.field?.isValid.maxLength && !formField.field.isValid.maxLength.validate(item, formField.field)) {
    return {
      maxLength: {
        type: "invalid",
        message: (0, import_i18n16.__)("Value is too long.")
      }
    };
  }
  if (formField.field?.isValid.elements && formField.field.hasElements && !formField.field.getElements && Array.isArray(formField.field.elements) && !formField.field.isValid.elements.validate(item, formField.field)) {
    return {
      elements: {
        type: "invalid",
        message: (0, import_i18n16.__)("Value must be one of the elements.")
      }
    };
  }
  if (!!formField.field && formField.field.isValid.elements && formField.field.hasElements && typeof formField.field.getElements === "function") {
    handleElementsValidationAsync(
      formField.field.getElements(),
      formField,
      promiseHandler
    );
    return {
      elements: {
        type: "validating",
        message: (0, import_i18n16.__)("Validating\u2026")
      }
    };
  }
  let customError;
  if (!!formField.field && formField.field.isValid.custom) {
    try {
      const value = formField.field.getValue({ item });
      customError = formField.field.isValid.custom(
        (0, import_deepmerge.default)(
          item,
          formField.field.setValue({
            item,
            value
          })
        ),
        formField.field
      );
    } catch (error) {
      let errorMessage;
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = String(error) || (0, import_i18n16.__)("Unknown error when running custom validation.");
      }
      return {
        custom: {
          type: "invalid",
          message: errorMessage
        }
      };
    }
  }
  if (typeof customError === "string") {
    return {
      custom: {
        type: "invalid",
        message: customError
      }
    };
  }
  if (customError instanceof Promise) {
    handleCustomValidationAsync(customError, formField, promiseHandler);
    return {
      custom: {
        type: "validating",
        message: (0, import_i18n16.__)("Validating\u2026")
      }
    };
  }
  if (formField.children.length > 0) {
    const result = {};
    formField.children.forEach((child) => {
      result[child.id] = validateFormField(item, child, {
        ...promiseHandler,
        path: [...promiseHandler.path, formField.id, "children"]
      });
    });
    const filteredResult = {};
    Object.entries(result).forEach(([key, value]) => {
      if (value !== void 0) {
        filteredResult[key] = value;
      }
    });
    if (Object.keys(filteredResult).length === 0) {
      return void 0;
    }
    return {
      children: filteredResult
    };
  }
  return void 0;
}
function getFormFieldValue(formField, item) {
  const fieldValue = formField?.field?.getValue({ item });
  if (formField.children.length === 0) {
    return fieldValue;
  }
  const childrenValues = formField.children.map(
    (child) => getFormFieldValue(child, item)
  );
  if (!childrenValues) {
    return fieldValue;
  }
  return {
    value: fieldValue,
    children: childrenValues
  };
}
function useFormValidity(item, fields, form) {
  const [formValidity, setFormValidity] = (0, import_element22.useState)();
  const customCounterRef = (0, import_element22.useRef)({});
  const elementsCounterRef = (0, import_element22.useRef)({});
  const previousValuesRef = (0, import_element22.useRef)({});
  const validate = (0, import_element22.useCallback)(() => {
    const promiseHandler = {
      customCounterRef,
      elementsCounterRef,
      setFormValidity,
      path: [],
      item
    };
    const formFieldsToValidate = getFormFieldsToValidate(form, fields);
    if (formFieldsToValidate.length === 0) {
      setFormValidity(void 0);
      return;
    }
    const newFormValidity = {};
    const untouchedFields = [];
    formFieldsToValidate.forEach((formField) => {
      const value = getFormFieldValue(formField, item);
      if (previousValuesRef.current.hasOwnProperty(formField.id) && (0, import_es6.default)(
        previousValuesRef.current[formField.id],
        value
      )) {
        untouchedFields.push(formField.id);
        return;
      }
      previousValuesRef.current[formField.id] = value;
      const fieldValidity = validateFormField(
        item,
        formField,
        promiseHandler
      );
      if (fieldValidity !== void 0) {
        newFormValidity[formField.id] = fieldValidity;
      }
    });
    setFormValidity((existingFormValidity) => {
      let validity = {
        ...existingFormValidity,
        ...newFormValidity
      };
      const fieldsToKeep = [
        ...untouchedFields,
        ...Object.keys(newFormValidity)
      ];
      Object.keys(validity).forEach((key) => {
        if (validity && !fieldsToKeep.includes(key)) {
          delete validity[key];
        }
      });
      if (Object.keys(validity).length === 0) {
        validity = void 0;
      }
      const areEqual = (0, import_es6.default)(existingFormValidity, validity);
      if (areEqual) {
        return existingFormValidity;
      }
      return validity;
    });
  }, [item, fields, form]);
  (0, import_element22.useEffect)(() => {
    validate();
  }, [validate]);
  return {
    validity: formValidity,
    isValid: isFormValid(formValidity)
  };
}
var use_form_validity_default = useFormValidity;

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/panel/modal.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
function ModalContent({
  data,
  field,
  onChange,
  fieldLabel,
  onClose
}) {
  const { fields } = (0, import_element23.useContext)(dataform_context_default);
  const [changes, setChanges] = (0, import_element23.useState)({});
  const modalData = (0, import_element23.useMemo)(() => {
    return (0, import_deepmerge2.default)(data, changes, {
      arrayMerge: (target, source) => source
    });
  }, [data, changes]);
  const form = (0, import_element23.useMemo)(
    () => ({
      layout: DEFAULT_LAYOUT,
      fields: !!field.children ? field.children : (
        // If not explicit children return the field id itself.
        [{ id: field.id, layout: DEFAULT_LAYOUT }]
      )
    }),
    [field]
  );
  const fieldsAsFieldType = fields.map((f2) => ({
    ...f2,
    Edit: f2.Edit === null ? void 0 : f2.Edit,
    isValid: {
      required: f2.isValid.required?.constraint,
      elements: f2.isValid.elements?.constraint,
      min: f2.isValid.min?.constraint,
      max: f2.isValid.max?.constraint,
      pattern: f2.isValid.pattern?.constraint,
      minLength: f2.isValid.minLength?.constraint,
      maxLength: f2.isValid.maxLength?.constraint
    }
  }));
  const { validity } = use_form_validity_default(modalData, fieldsAsFieldType, form);
  const onApply = () => {
    onChange(changes);
    onClose();
  };
  const handleOnChange = (newValue) => {
    setChanges(
      (prev) => (0, import_deepmerge2.default)(prev, newValue, {
        arrayMerge: (target, source) => source
      })
    );
  };
  const focusOnMountRef = (0, import_compose2.useFocusOnMount)("firstInputElement");
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
    import_components23.Modal,
    {
      className: "dataforms-layouts-panel__modal",
      onRequestClose: onClose,
      isFullScreen: false,
      title: fieldLabel,
      size: "medium",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { ref: focusOnMountRef, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          DataFormLayout,
          {
            data: modalData,
            form,
            onChange: handleOnChange,
            validity,
            children: (FieldLayout, childField, childFieldValidity) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
              FieldLayout,
              {
                data: modalData,
                field: childField,
                onChange: handleOnChange,
                hideLabelFromVision: form.fields.length < 2,
                validity: childFieldValidity
              },
              childField.id
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
          import_components23.__experimentalHStack,
          {
            className: "dataforms-layouts-panel__modal-footer",
            spacing: 3,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_components23.__experimentalSpacer, {}),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                import_components23.Button,
                {
                  variant: "tertiary",
                  onClick: onClose,
                  __next40pxDefaultSize: true,
                  children: (0, import_i18n17.__)("Cancel")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                import_components23.Button,
                {
                  variant: "primary",
                  onClick: onApply,
                  __next40pxDefaultSize: true,
                  children: (0, import_i18n17.__)("Apply")
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function PanelModal({
  data,
  field,
  onChange,
  labelPosition,
  summaryFields,
  fieldDefinition
}) {
  const [isOpen, setIsOpen] = (0, import_element23.useState)(false);
  const fieldLabel = !!field.children ? field.label : fieldDefinition?.label;
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(import_jsx_runtime47.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      summary_button_default,
      {
        summaryFields,
        data,
        labelPosition,
        fieldLabel,
        disabled: fieldDefinition.readOnly === true,
        onClick: () => setIsOpen(true),
        "aria-expanded": isOpen
      }
    ),
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      ModalContent,
      {
        data,
        field,
        onChange,
        fieldLabel: fieldLabel ?? "",
        onClose: () => setIsOpen(false)
      }
    )
  ] });
}
var modal_default = PanelModal;

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/get-summary-fields.js
function extractSummaryIds(summary) {
  if (Array.isArray(summary)) {
    return summary.map(
      (item) => typeof item === "string" ? item : item.id
    );
  }
  return [];
}
var getSummaryFields = (summaryField, fields) => {
  if (Array.isArray(summaryField) && summaryField.length > 0) {
    const summaryIds = extractSummaryIds(summaryField);
    return summaryIds.map(
      (summaryId) => fields.find((_field) => _field.id === summaryId)
    ).filter((_field) => _field !== void 0);
  }
  return [];
};

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/panel/index.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var getFieldDefinition = (field, fields) => {
  const fieldDefinition = fields.find((_field) => _field.id === field.id);
  if (!fieldDefinition) {
    return fields.find((_field) => {
      if (!!field.children) {
        const simpleChildren = field.children.filter(
          (child) => !child.children
        );
        if (simpleChildren.length === 0) {
          return false;
        }
        return _field.id === simpleChildren[0].id;
      }
      return _field.id === field.id;
    });
  }
  return fieldDefinition;
};
var getFieldDefinitionAndSummaryFields = (layout, field, fields) => {
  const summaryFields = getSummaryFields(layout.summary, fields);
  const fieldDefinition = getFieldDefinition(field, fields);
  if (summaryFields.length === 0) {
    return {
      summaryFields: fieldDefinition ? [fieldDefinition] : [],
      fieldDefinition
    };
  }
  return {
    summaryFields,
    fieldDefinition
  };
};
function FormPanelField({
  data,
  field,
  onChange,
  validity
}) {
  const { fields } = (0, import_element24.useContext)(dataform_context_default);
  const layout = field.layout;
  const [popoverAnchor, setPopoverAnchor] = (0, import_element24.useState)(
    null
  );
  const { fieldDefinition, summaryFields } = getFieldDefinitionAndSummaryFields(layout, field, fields);
  if (!fieldDefinition) {
    return null;
  }
  const labelPosition = layout.labelPosition;
  const labelClassName = clsx_default(
    "dataforms-layouts-panel__field-label",
    `dataforms-layouts-panel__field-label--label-position-${labelPosition}`
  );
  const fieldLabel = !!field.children ? field.label : fieldDefinition?.label;
  const renderedControl = layout.openAs === "modal" ? /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    modal_default,
    {
      data,
      field,
      onChange,
      labelPosition,
      summaryFields,
      fieldDefinition
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    dropdown_default,
    {
      data,
      field,
      onChange,
      validity,
      labelPosition,
      summaryFields,
      fieldDefinition,
      popoverAnchor
    }
  );
  if (labelPosition === "top") {
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_components24.__experimentalVStack, { className: "dataforms-layouts-panel__field", spacing: 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
        "div",
        {
          className: labelClassName,
          style: { paddingBottom: 0 },
          children: fieldLabel
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "dataforms-layouts-panel__field-control", children: renderedControl })
    ] });
  }
  if (labelPosition === "none") {
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "dataforms-layouts-panel__field", children: renderedControl });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
    import_components24.__experimentalHStack,
    {
      ref: setPopoverAnchor,
      className: "dataforms-layouts-panel__field",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: labelClassName, children: fieldLabel }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "dataforms-layouts-panel__field-control", children: renderedControl })
      ]
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/card/index.js
var import_components25 = __toESM(require_components());
var import_element25 = __toESM(require_element());
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var NonCollapsibleCardHeader = ({
  children,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_components25.CardHeader, { isBorderless: true, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
  "div",
  {
    style: {
      height: "40px",
      // This is to match the chevron's __next40pxDefaultSize
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    children
  }
) });
function useCardHeader(layout) {
  const { isOpened, isCollapsible } = layout;
  const [isOpen, setIsOpen] = (0, import_element25.useState)(isOpened);
  const toggle = (0, import_element25.useCallback)(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const CollapsibleCardHeader = (0, import_element25.useCallback)(
    ({
      children,
      ...props
    }) => /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
      import_components25.CardHeader,
      {
        ...props,
        onClick: toggle,
        style: {
          cursor: "pointer",
          ...props.style
        },
        isBorderless: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            "div",
            {
              style: {
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            import_components25.Button,
            {
              __next40pxDefaultSize: true,
              variant: "tertiary",
              icon: isOpen ? chevron_up_default : chevron_down_default,
              "aria-expanded": isOpen,
              "aria-label": isOpen ? "Collapse" : "Expand"
            }
          )
        ]
      }
    ),
    [toggle, isOpen]
  );
  const effectiveIsOpen = isCollapsible ? isOpen : true;
  const CardHeaderComponent = isCollapsible ? CollapsibleCardHeader : NonCollapsibleCardHeader;
  return { isOpen: effectiveIsOpen, CardHeader: CardHeaderComponent };
}
function isSummaryFieldVisible(summaryField, summaryConfig, isOpen) {
  if (!summaryConfig || Array.isArray(summaryConfig) && summaryConfig.length === 0) {
    return false;
  }
  const summaryConfigArray = Array.isArray(summaryConfig) ? summaryConfig : [summaryConfig];
  const fieldConfig = summaryConfigArray.find((config) => {
    if (typeof config === "string") {
      return config === summaryField.id;
    }
    if (typeof config === "object" && "id" in config) {
      return config.id === summaryField.id;
    }
    return false;
  });
  if (!fieldConfig) {
    return false;
  }
  if (typeof fieldConfig === "string") {
    return true;
  }
  if (typeof fieldConfig === "object" && "visibility" in fieldConfig) {
    return fieldConfig.visibility === "always" || fieldConfig.visibility === "when-collapsed" && !isOpen;
  }
  return true;
}
function FormCardField({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const { fields } = (0, import_element25.useContext)(dataform_context_default);
  const layout = field.layout;
  const form = (0, import_element25.useMemo)(
    () => ({
      layout: DEFAULT_LAYOUT,
      fields: field.children ?? []
    }),
    [field]
  );
  const { isOpen, CardHeader } = useCardHeader(layout);
  const summaryFields = getSummaryFields(layout.summary, fields);
  const visibleSummaryFields = summaryFields.filter(
    (summaryField) => isSummaryFieldVisible(summaryField, layout.summary, isOpen)
  );
  const sizeCard = {
    blockStart: "medium",
    blockEnd: "medium",
    inlineStart: "medium",
    inlineEnd: "medium"
  };
  if (!!field.children) {
    const withHeader2 = !!field.label && layout.withHeader;
    const sizeCardBody2 = {
      blockStart: withHeader2 ? "none" : "medium",
      blockEnd: "medium",
      inlineStart: "medium",
      inlineEnd: "medium"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_components25.Card, { className: "dataforms-layouts-card__field", size: sizeCard, children: [
      withHeader2 && /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(CardHeader, { className: "dataforms-layouts-card__field-header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "dataforms-layouts-card__field-header-label", children: field.label }),
        visibleSummaryFields.length > 0 && layout.withHeader && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "dataforms-layouts-card__field-summary", children: visibleSummaryFields.map(
          (summaryField) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            summaryField.render,
            {
              item: data,
              field: summaryField
            },
            summaryField.id
          )
        ) })
      ] }),
      (isOpen || !withHeader2) && // If it doesn't have a header, keep it open.
      // Otherwise, the card will not be visible.
      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
        import_components25.CardBody,
        {
          size: sizeCardBody2,
          className: "dataforms-layouts-card__field-control",
          children: [
            field.description && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "dataforms-layouts-card__field-description", children: field.description }),
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
              DataFormLayout,
              {
                data,
                form,
                onChange,
                validity: validity?.children
              }
            )
          ]
        }
      )
    ] });
  }
  const fieldDefinition = fields.find(
    (fieldDef) => fieldDef.id === field.id
  );
  if (!fieldDefinition || !fieldDefinition.Edit) {
    return null;
  }
  const RegularLayout = getFormFieldLayout("regular")?.component;
  if (!RegularLayout) {
    return null;
  }
  const withHeader = !!fieldDefinition.label && layout.withHeader;
  const sizeCardBody = {
    blockStart: withHeader ? "none" : "medium",
    blockEnd: "medium",
    inlineStart: "medium",
    inlineEnd: "medium"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_components25.Card, { className: "dataforms-layouts-card__field", size: sizeCard, children: [
    withHeader && /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(CardHeader, { className: "dataforms-layouts-card__field-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "dataforms-layouts-card__field-header-label", children: fieldDefinition.label }),
      visibleSummaryFields.length > 0 && layout.withHeader && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: "dataforms-layouts-card__field-summary", children: visibleSummaryFields.map((summaryField) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        summaryField.render,
        {
          item: data,
          field: summaryField
        },
        summaryField.id
      )) })
    ] }),
    (isOpen || !withHeader) && // If it doesn't have a header, keep it open.
    // Otherwise, the card will not be visible.
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
      import_components25.CardBody,
      {
        size: sizeCardBody,
        className: "dataforms-layouts-card__field-control",
        children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
          RegularLayout,
          {
            data,
            field,
            onChange,
            hideLabelFromVision: hideLabelFromVision || withHeader,
            validity
          }
        )
      }
    )
  ] });
}

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/row/index.js
var import_components26 = __toESM(require_components());
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
function Header3({ title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_components26.__experimentalVStack, { className: "dataforms-layouts-row__header", spacing: 4, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_components26.__experimentalHStack, { alignment: "center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_components26.__experimentalHeading, { level: 2, size: 13, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_components26.__experimentalSpacer, {})
  ] }) });
}
var EMPTY_WRAPPER = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_jsx_runtime50.Fragment, { children });
function FormRowField({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const layout = field.layout;
  if (!!field.children) {
    const form = {
      layout: DEFAULT_LAYOUT,
      fields: field.children
    };
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "dataforms-layouts-row__field", children: [
      !hideLabelFromVision && field.label && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Header3, { title: field.label }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_components26.__experimentalHStack, { alignment: layout.alignment, spacing: 4, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        DataFormLayout,
        {
          data,
          form,
          onChange,
          validity: validity?.children,
          as: EMPTY_WRAPPER,
          children: (FieldLayout, childField, childFieldValidity) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "div",
            {
              className: "dataforms-layouts-row__field-control",
              style: layout.styles[childField.id],
              children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
                FieldLayout,
                {
                  data,
                  field: childField,
                  onChange,
                  hideLabelFromVision,
                  validity: childFieldValidity
                }
              )
            },
            childField.id
          )
        }
      ) })
    ] });
  }
  const RegularLayout = getFormFieldLayout("regular")?.component;
  if (!RegularLayout) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_jsx_runtime50.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "dataforms-layouts-row__field-control", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    RegularLayout,
    {
      data,
      field,
      onChange,
      validity
    }
  ) }) });
}

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/details/index.js
var import_element26 = __toESM(require_element());
var import_i18n18 = __toESM(require_i18n());
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
function FormDetailsField({
  data,
  field,
  onChange
}) {
  const { fields } = (0, import_element26.useContext)(dataform_context_default);
  const form = (0, import_element26.useMemo)(
    () => ({
      layout: DEFAULT_LAYOUT,
      fields: field.children ?? []
    }),
    [field]
  );
  if (!field.children) {
    return null;
  }
  const summaryFieldId = field.layout.summary ?? "";
  const summaryField = summaryFieldId ? fields.find((fieldDef) => fieldDef.id === summaryFieldId) : void 0;
  let summaryContent;
  if (summaryField && summaryField.render) {
    summaryContent = /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(summaryField.render, { item: data, field: summaryField });
  } else {
    summaryContent = field.label || (0, import_i18n18.__)("More details");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("details", { className: "dataforms-layouts-details__details", children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("summary", { className: "dataforms-layouts-details__summary", children: summaryContent }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "dataforms-layouts-details__content", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
      DataFormLayout,
      {
        data,
        form,
        onChange
      }
    ) })
  ] });
}

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/index.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var FORM_FIELD_LAYOUTS = [
  {
    type: "regular",
    component: FormRegularField,
    wrapper: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_components27.__experimentalVStack, { className: "dataforms-layouts__wrapper", spacing: 4, children })
  },
  {
    type: "panel",
    component: FormPanelField,
    wrapper: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_components27.__experimentalVStack, { className: "dataforms-layouts__wrapper", spacing: 2, children })
  },
  {
    type: "card",
    component: FormCardField,
    wrapper: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_components27.__experimentalVStack, { className: "dataforms-layouts__wrapper", spacing: 6, children })
  },
  {
    type: "row",
    component: FormRowField,
    wrapper: ({
      children,
      layout
    }) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_components27.__experimentalVStack, { className: "dataforms-layouts__wrapper", spacing: 4, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "dataforms-layouts-row__field", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
      import_components27.__experimentalHStack,
      {
        spacing: 4,
        alignment: layout.alignment,
        children
      }
    ) }) })
  },
  {
    type: "details",
    component: FormDetailsField
  }
];
function getFormFieldLayout(type) {
  return FORM_FIELD_LAYOUTS.find((layout) => layout.type === type);
}

// node_modules/@wordpress/dataviews/build-module/dataform-layouts/data-form-layout.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var DEFAULT_WRAPPER = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_components28.__experimentalVStack, { className: "dataforms-layouts__wrapper", spacing: 4, children });
function DataFormLayout({
  data,
  form,
  onChange,
  validity,
  children,
  as
}) {
  const { fields: fieldDefinitions } = (0, import_element27.useContext)(dataform_context_default);
  function getFieldDefinition2(field) {
    return fieldDefinitions.find(
      (fieldDefinition) => fieldDefinition.id === field.id
    );
  }
  const Wrapper = as ?? getFormFieldLayout(form.layout.type)?.wrapper ?? DEFAULT_WRAPPER;
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Wrapper, { layout: form.layout, children: form.fields.map((formField) => {
    const FieldLayout = getFormFieldLayout(formField.layout.type)?.component;
    if (!FieldLayout) {
      return null;
    }
    const fieldDefinition = !formField.children ? getFieldDefinition2(formField) : void 0;
    if (fieldDefinition && fieldDefinition.isVisible && !fieldDefinition.isVisible(data)) {
      return null;
    }
    if (children) {
      return children(
        FieldLayout,
        formField,
        validity?.[formField.id]
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
      FieldLayout,
      {
        data,
        field: formField,
        onChange,
        validity: validity?.[formField.id]
      },
      formField.id
    );
  }) });
}

// node_modules/@wordpress/dataviews/build-module/components/dataform/index.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
function DataForm({
  data,
  form,
  fields,
  onChange,
  validity
}) {
  const normalizedForm = (0, import_element28.useMemo)(() => normalize_form_default(form), [form]);
  const normalizedFields = (0, import_element28.useMemo)(
    () => normalizeFields(fields),
    [fields]
  );
  if (!form.fields) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(DataFormProvider, { fields: normalizedFields, children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    DataFormLayout,
    {
      data,
      form: normalizedForm,
      onChange,
      validity
    }
  ) });
}

// routes/ai-home/stage.tsx
var import_element29 = __toESM(require_element());
var import_i18n19 = __toESM(require_i18n());
var import_notices = __toESM(require_notices());

// routes/ai-home/style.scss
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='cae50a07ec']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "cae50a07ec");
  style.appendChild(document.createTextNode(".ai-settings-page{box-sizing:border-box;margin:0 auto;max-width:680px;padding:24px;width:100%}@media (max-width:480px){.ai-settings-page{padding:8px}}.ai-settings-page .components-notice{margin:0 0 24px}.ai-feature-settings-form{margin-top:4px;max-width:480px;padding-left:40px}.ai-feature-settings-form .components-base-control__label,.ai-feature-settings-form .components-input-control__label,.ai-feature-settings-form .dataforms-layouts-regular__field-label{text-transform:none!important}.ai-feature-settings-form__actions{display:flex;justify-content:flex-end;margin-top:12px}"));
  document.head.appendChild(style);
}

// routes/ai-home/ai-icon.tsx
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
function AIIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
    "svg",
    {
      width: "1em",
      height: "1em",
      viewBox: "50 30 160 200",
      style: { verticalAlign: "-0.025em" },
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
          "path",
          {
            d: "M193.227 204.475L160.753 120.186V89.1724H173.497V77.0521H82.4936V89.1724H95.2377V120.186L62.7643 204.475C62.2666 205.794 62 207.185 62 208.593C62 214.885 67.1012 220 73.3755 220H182.615C184.02 220 185.406 219.733 186.721 219.234C192.587 216.97 195.502 210.357 193.227 204.475ZM107.324 122.45V89.5288H148.667V122.45L164.823 164.389C161.144 163.445 157.341 162.963 153.466 162.963C142.588 162.963 132.279 166.796 124.085 173.658C118.038 178.724 110.405 181.494 102.525 181.482C96.7129 181.482 91.1318 180.003 86.2084 177.258L107.324 122.45ZM74.4064 207.88L81.8182 188.666C88.1636 191.892 95.2199 193.621 102.543 193.621C113.421 193.621 123.73 189.788 131.924 182.926C137.949 177.9 145.485 175.102 153.484 175.102C159.705 175.102 165.641 176.795 170.831 179.932L181.585 207.88H74.4064Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
          "path",
          {
            d: "M126.024 95.7743L126.935 98.243C128.129 101.48 128.726 103.099 129.904 104.279C131.081 105.46 132.695 106.059 135.923 107.257L138.385 108.17L135.923 109.084C132.695 110.282 131.081 110.881 129.904 112.061C128.726 113.242 128.129 114.86 126.935 118.098L126.024 120.566L125.113 118.098C123.918 114.86 123.321 113.242 122.144 112.061C120.966 110.881 119.352 110.282 116.124 109.084L113.662 108.17L116.124 107.257C119.352 106.059 120.966 105.46 122.144 104.279C123.321 103.099 123.918 101.48 125.113 98.243L126.024 95.7743Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
          "path",
          {
            d: "M127.882 54.0236L128.527 55.7728C129.373 58.0666 129.797 59.2135 130.631 60.0501C131.465 60.8868 132.609 61.3111 134.896 62.1599L136.641 62.8072L134.896 63.4545C132.609 64.3032 131.465 64.7276 130.631 65.5643C129.797 66.4009 129.373 67.5478 128.527 69.8416L127.882 71.5908L127.236 69.8416C126.39 67.5478 125.967 66.4009 125.132 65.5643C124.298 64.7276 123.154 64.3032 120.867 63.4545L119.123 62.8072L120.867 62.1599C123.154 61.3111 124.298 60.8868 125.132 60.0501C125.967 59.2135 126.39 58.0666 127.236 55.7728L127.882 54.0236Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
          "path",
          {
            d: "M140.622 36L141.083 37.2495C141.688 38.8879 141.99 39.7071 142.586 40.3047C143.182 40.9023 143.999 41.2054 145.633 41.8117L146.879 42.274L145.633 42.7364C143.999 43.3426 143.182 43.6458 142.586 44.2434C141.99 44.841 141.688 45.6602 141.083 47.2986L140.622 48.548L140.161 47.2986C139.557 45.6602 139.254 44.841 138.658 44.2434C138.062 43.6458 137.245 43.3426 135.612 42.7364L134.366 42.274L135.612 41.8117C137.245 41.2054 138.062 40.9023 138.658 40.3047C139.254 39.7071 139.557 38.8879 140.161 37.2495L140.622 36Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}

// routes/ai-home/stage.tsx
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var FEATURE_SETTING_PATTERN = /^wpai_feature_(.+)_enabled$/;
var GLOBAL_FIELD_ID = "wpai_features_enabled";
var noop = () => {
};
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
function toStringValue(value) {
  return typeof value === "string" ? value : "";
}
function isDefined(value) {
  return value !== null && value !== void 0;
}
function isSettingsField(value) {
  if (!isRecord(value)) {
    return false;
  }
  const id = value["id"];
  return typeof id === "string" && id !== "";
}
function parseFeatureGroup(value) {
  if (!isRecord(value)) {
    return null;
  }
  const featureGroup = value;
  const id = toStringValue(featureGroup.id);
  if (!id) {
    return null;
  }
  return {
    id,
    label: toStringValue(featureGroup.label) || id,
    description: toStringValue(featureGroup.description)
  };
}
function parseFeature(value) {
  if (!isRecord(value)) {
    return null;
  }
  const feature = value;
  const settingName = toStringValue(feature.settingName);
  if (!settingName) {
    return null;
  }
  const id = toStringValue(feature.id) || getFeatureIdFromSettingName(settingName);
  const rawFields = Array.isArray(feature.settingsFields) ? feature.settingsFields : [];
  return {
    id,
    settingName,
    label: toStringValue(feature.label) || getDefaultLabel(id),
    description: toStringValue(feature.description),
    category: toStringValue(feature.category) || "other",
    settingsFields: rawFields.filter(isSettingsField)
  };
}
function getFeatureIdFromSettingName(settingName) {
  const match2 = FEATURE_SETTING_PATTERN.exec(settingName);
  return match2?.[1] ?? settingName;
}
function getDefaultLabel(key) {
  return key.split(/[-_]/).filter(Boolean).map((part) => part[0]?.toUpperCase() + part.slice(1)).join(" ");
}
function getSectionId(groupId) {
  return `feature-group-${groupId.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}
function buildFallbackFeatureGroups(features) {
  const categories = Array.from(
    new Set(features.map((feature) => feature.category || "other"))
  );
  return categories.map((category) => ({
    id: category,
    label: category === "other" ? (0, import_i18n19.__)("Other Features", "ai") : getDefaultLabel(category),
    description: category === "other" ? (0, import_i18n19.__)("Additional AI-powered features.", "ai") : ""
  }));
}
function getPageData() {
  const fallback = {
    hasCredentials: false,
    hasValidCredentials: false,
    connectorsUrl: "",
    featureGroups: [],
    features: []
  };
  try {
    const rawData = JSON.parse(
      document.getElementById("wp-script-module-data-ai-wp-admin")?.textContent ?? "{}"
    );
    if (!isRecord(rawData)) {
      return fallback;
    }
    const pageData = rawData;
    const featureGroups = Array.isArray(pageData.featureGroups) ? pageData.featureGroups.map(parseFeatureGroup).filter(isDefined) : [];
    const features = Array.isArray(pageData.features) ? pageData.features.map(parseFeature).filter(isDefined) : [];
    return {
      hasCredentials: Boolean(pageData.hasCredentials),
      hasValidCredentials: Boolean(pageData.hasValidCredentials),
      connectorsUrl: toStringValue(pageData.connectorsUrl),
      featureGroups,
      features
    };
  } catch {
    return fallback;
  }
}
var PAGE_DATA = getPageData();
var GLOBAL_FIELD = {
  id: GLOBAL_FIELD_ID,
  label: (0, import_i18n19.__)("Enable AI", "ai"),
  type: "boolean",
  Edit: "toggle"
};
function buildToggleMessage(edits, featureDefinitions) {
  const entry = Object.entries(edits)[0];
  if (!entry) {
    return (0, import_i18n19.__)("Settings saved.", "ai");
  }
  if (entry[0] === GLOBAL_FIELD_ID) {
    return entry[1] ? (0, import_i18n19.__)("AI enabled.", "ai") : (0, import_i18n19.__)("AI disabled.", "ai");
  }
  const feature = featureDefinitions.find(
    (f2) => f2.settingName === entry[0]
  );
  const label = feature?.label ?? entry[0];
  return entry[1] ? (
    // translators: %s: Feature label.
    (0, import_i18n19.sprintf)((0, import_i18n19.__)("%s enabled.", "ai"), label)
  ) : (
    // translators: %s: Feature label.
    (0, import_i18n19.sprintf)((0, import_i18n19.__)("%s disabled.", "ai"), label)
  );
}
function DisabledToggle({ field, data }) {
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    import_components29.ToggleControl,
    {
      __nextHasNoMarginBottom: true,
      label: field.label,
      help: field.description,
      checked: !!field.getValue({ item: data }),
      onChange: noop,
      disabled: true
    }
  );
}
function InlineFeatureSettings({ feature }) {
  const fieldIds = (0, import_element29.useMemo)(
    () => feature.settingsFields.map((f2) => f2.id),
    [feature.settingsFields]
  );
  const { editedRecord, nonTransientEdits } = (0, import_data.useSelect)((select) => {
    const store = select(import_core_data.store);
    return {
      editedRecord: store.getEditedEntityRecord("root", "site"),
      nonTransientEdits: store.getEntityRecordNonTransientEdits(
        "root",
        "site"
      ) ?? {}
    };
  }, []);
  const [isSaving, setIsSaving] = (0, import_element29.useState)(false);
  const isDirty = (0, import_element29.useMemo)(
    () => fieldIds.some((id) => id in nonTransientEdits),
    [fieldIds, nonTransientEdits]
  );
  const { editEntityRecord } = (0, import_data.useDispatch)(import_core_data.store);
  const { __experimentalSaveSpecifiedEntityEdits: saveSpecifiedEdits } = (0, import_data.useDispatch)(import_core_data.store);
  const { createSuccessNotice, createErrorNotice } = (0, import_data.useDispatch)(import_notices.store);
  const data = (0, import_element29.useMemo)(() => {
    const base = {};
    for (const field of feature.settingsFields) {
      base[field.id] = editedRecord?.[field.id] ?? field.default;
    }
    return base;
  }, [feature.settingsFields, editedRecord]);
  const fields = (0, import_element29.useMemo)(
    () => feature.settingsFields.map(
      ({ default: _, ...fieldProps }) => fieldProps
    ),
    [feature.settingsFields]
  );
  const form = (0, import_element29.useMemo)(
    () => ({
      fields: feature.settingsFields.map((f2) => f2.id)
    }),
    [feature.settingsFields]
  );
  const handleChange = (0, import_element29.useCallback)(
    (edits) => {
      editEntityRecord("root", "site", void 0, edits);
    },
    [editEntityRecord]
  );
  const handleSave = (0, import_element29.useCallback)(async () => {
    setIsSaving(true);
    try {
      await saveSpecifiedEdits("root", "site", void 0, fieldIds, {
        throwOnError: true
      });
      createSuccessNotice(
        (0, import_i18n19.sprintf)(
          // translators: %s: Feature label.
          (0, import_i18n19.__)("%s settings saved.", "ai"),
          feature.label
        ),
        { type: "snackbar" }
      );
    } catch {
      createErrorNotice((0, import_i18n19.__)("Failed to save settings.", "ai"), {
        type: "snackbar"
      });
    } finally {
      setIsSaving(false);
    }
  }, [
    saveSpecifiedEdits,
    fieldIds,
    createSuccessNotice,
    createErrorNotice,
    feature.label
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "ai-feature-settings-form", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
      DataForm,
      {
        data,
        fields,
        form,
        onChange: handleChange
      }
    ),
    isDirty && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "ai-feature-settings-form__actions", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
      import_components29.Button,
      {
        variant: "primary",
        onClick: handleSave,
        isBusy: isSaving,
        disabled: isSaving,
        size: "compact",
        "aria-label": (0, import_i18n19.sprintf)(
          // translators: %s: Feature label.
          (0, import_i18n19.__)("Save %s settings", "ai"),
          feature.label
        ),
        children: (0, import_i18n19.__)("Save", "ai")
      }
    ) })
  ] });
}
var FEATURES_BY_SETTING = new Map(
  PAGE_DATA.features.filter((f2) => f2.settingsFields.length > 0).map((f2) => [f2.settingName, f2])
);
function FeatureToggleWithSettings({
  field,
  data,
  onChange
}) {
  const feature = FEATURES_BY_SETTING.get(field.id);
  const checked = !!field.getValue({ item: data });
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "ai-feature-toggle-with-settings", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
      import_components29.ToggleControl,
      {
        __nextHasNoMarginBottom: true,
        label: field.label,
        help: field.description,
        checked,
        onChange: (value) => {
          onChange({ [field.id]: value });
        }
      }
    ),
    checked && feature && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(InlineFeatureSettings, { feature })
  ] });
}
function AISettingsPage() {
  const { editedRecord, isLoading } = (0, import_data.useSelect)((select) => {
    const store = select(import_core_data.store);
    return {
      editedRecord: store.getEditedEntityRecord("root", "site"),
      isLoading: !store.hasFinishedResolution("getEntityRecord", [
        "root",
        "site"
      ])
    };
  }, []);
  const { editEntityRecord } = (0, import_data.useDispatch)(import_core_data.store);
  const { __experimentalSaveSpecifiedEntityEdits: saveSpecifiedEdits } = (0, import_data.useDispatch)(import_core_data.store);
  const { createSuccessNotice, createErrorNotice } = (0, import_data.useDispatch)(import_notices.store);
  const registry = (0, import_data.useRegistry)();
  const featureDefinitions = (0, import_element29.useMemo)(() => {
    const sourceFeatures = PAGE_DATA.features.length > 0 ? PAGE_DATA.features : Object.keys(editedRecord ?? {}).filter(
      (key) => FEATURE_SETTING_PATTERN.test(key)
    ).sort().map((settingName) => {
      const id = getFeatureIdFromSettingName(settingName);
      return {
        id,
        settingName,
        label: getDefaultLabel(id),
        description: "",
        category: "other",
        settingsFields: []
      };
    });
    const uniqueFeatures = [];
    const seenSettingNames = /* @__PURE__ */ new Set();
    for (const feature of sourceFeatures) {
      if (seenSettingNames.has(feature.settingName)) {
        continue;
      }
      seenSettingNames.add(feature.settingName);
      uniqueFeatures.push(feature);
    }
    return uniqueFeatures;
  }, [editedRecord]);
  const featureGroups = (0, import_element29.useMemo)(
    () => PAGE_DATA.featureGroups.length > 0 ? PAGE_DATA.featureGroups : buildFallbackFeatureGroups(featureDefinitions),
    [featureDefinitions]
  );
  const aiSettingKeys = (0, import_element29.useMemo)(() => {
    const settingKeys = /* @__PURE__ */ new Set([GLOBAL_FIELD_ID]);
    for (const feature of featureDefinitions) {
      settingKeys.add(feature.settingName);
    }
    return Array.from(settingKeys);
  }, [featureDefinitions]);
  const data = (0, import_element29.useMemo)(() => {
    const aiSettings = {};
    for (const key of aiSettingKeys) {
      aiSettings[key] = Boolean(editedRecord?.[key] ?? false);
    }
    return aiSettings;
  }, [aiSettingKeys, editedRecord]);
  const globalEnabled = data[GLOBAL_FIELD.id];
  const fields = (0, import_element29.useMemo)(
    () => [
      GLOBAL_FIELD,
      ...featureDefinitions.map((feature) => {
        const baseField = {
          id: feature.settingName,
          label: feature.label,
          description: feature.description,
          type: "boolean"
        };
        if (!globalEnabled) {
          baseField.Edit = DisabledToggle;
        } else if (feature.settingsFields.length > 0) {
          baseField.Edit = FeatureToggleWithSettings;
        } else {
          baseField.Edit = "toggle";
        }
        return baseField;
      })
    ],
    [featureDefinitions, globalEnabled]
  );
  const form = (0, import_element29.useMemo)(() => {
    const groupedFields = /* @__PURE__ */ new Map();
    for (const feature of featureDefinitions) {
      const category = feature.category || "other";
      const categoryFields = groupedFields.get(category) ?? [];
      categoryFields.push(feature.settingName);
      groupedFields.set(category, categoryFields);
    }
    const sectionFields = [];
    const seenCategories = /* @__PURE__ */ new Set();
    for (const group of featureGroups) {
      const children = groupedFields.get(group.id) ?? [];
      if (children.length === 0) {
        continue;
      }
      seenCategories.add(group.id);
      sectionFields.push({
        id: getSectionId(group.id),
        label: group.label,
        description: group.description,
        layout: {
          type: "card",
          withHeader: true,
          isOpened: true,
          isCollapsible: true
        },
        children
      });
    }
    for (const [category, children] of groupedFields.entries()) {
      if (children.length === 0 || seenCategories.has(category)) {
        continue;
      }
      sectionFields.push({
        id: getSectionId(category),
        label: getDefaultLabel(category),
        description: "",
        layout: {
          type: "card",
          withHeader: true,
          isOpened: true,
          isCollapsible: true
        },
        children
      });
    }
    return {
      fields: [
        {
          id: "generalSettings",
          label: (0, import_i18n19.__)("General Settings", "ai"),
          description: (0, import_i18n19.__)(
            "Control whether AI is enabled for your site. When disabled, all features and experiments will be inactive regardless of their individual settings.",
            "ai"
          ),
          layout: {
            type: "card",
            withHeader: true,
            isCollapsible: false
          },
          children: [GLOBAL_FIELD_ID]
        },
        ...sectionFields
      ]
    };
  }, [featureDefinitions, featureGroups]);
  const handleChange = (0, import_element29.useCallback)(
    async (edits) => {
      const keys = Object.keys(edits);
      editEntityRecord("root", "site", void 0, edits);
      const message2 = buildToggleMessage(edits, featureDefinitions);
      try {
        await saveSpecifiedEdits("root", "site", void 0, keys, {
          throwOnError: true
        });
        createSuccessNotice(message2, { type: "snackbar" });
      } catch {
        const serverRecord = registry.select(import_core_data.store).getEntityRecord("root", "site");
        const revert = {};
        for (const key of keys) {
          revert[key] = serverRecord?.[key];
        }
        editEntityRecord("root", "site", void 0, revert);
        createErrorNotice((0, import_i18n19.__)("Failed to save settings.", "ai"), {
          type: "snackbar"
        });
      }
    },
    [
      editEntityRecord,
      saveSpecifiedEdits,
      createSuccessNotice,
      createErrorNotice,
      featureDefinitions,
      registry
    ]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    page_default,
    {
      title: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_jsx_runtime56.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(AIIcon, {}),
        (0, import_i18n19.__)("AI", "ai")
      ] }),
      subTitle: (0, import_i18n19.__)(
        "Configure AI features and experiments for your WordPress site.",
        "ai"
      ),
      actions: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_jsx_runtime56.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          import_components29.Button,
          {
            variant: "secondary",
            href: "https://github.com/WordPress/ai/tree/develop/docs",
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, import_i18n19.__)("Docs", "ai")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          import_components29.Button,
          {
            variant: "primary",
            href: "https://github.com/WordPress/ai/blob/develop/CONTRIBUTING.md",
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, import_i18n19.__)("Contribute", "ai")
          }
        )
      ] }),
      children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "ai-settings-page", children: [
        !PAGE_DATA.hasValidCredentials && /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_components29.Notice, { status: "error", isDismissible: false, children: [
          !PAGE_DATA.hasCredentials ? (0, import_i18n19.__)(
            "The AI plugin requires a valid AI Connector to function properly. Verify you have one or more AI Connectors configured.",
            "ai"
          ) : (0, import_i18n19.__)(
            "The AI plugin requires a valid AI Connector to function properly. Please review the AI Connectors you have configured to ensure they are valid.",
            "ai"
          ),
          " ",
          PAGE_DATA.connectorsUrl && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
            import_components29.Button,
            {
              variant: "link",
              href: PAGE_DATA.connectorsUrl,
              children: (0, import_i18n19.__)("Manage Connectors", "ai")
            }
          )
        ] }),
        isLoading ? /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_components29.Spinner, {}) : /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          DataForm,
          {
            data,
            fields,
            form,
            onChange: handleChange
          }
        )
      ] })
    }
  );
}
var stage = AISettingsPage;
export {
  stage
};
