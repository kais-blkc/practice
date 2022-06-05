(() => {
    var __webpack_modules__ = {
        125: module => {
            /*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2021 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.7
 */
            !function(e, t) {
                if (true) module.exports = t(); else ;
            }(self, (function() {
                return function() {
                    "use strict";
                    var e = {
                        8741: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                            t.default = i;
                        },
                        3976: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var a, n = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            };
                            var r = {
                                _maxTestPos: 500,
                                placeholder: "_",
                                optionalmarker: [ "[", "]" ],
                                quantifiermarker: [ "{", "}" ],
                                groupmarker: [ "(", ")" ],
                                alternatormarker: "|",
                                escapeChar: "\\",
                                mask: null,
                                regex: null,
                                oncomplete: function() {},
                                onincomplete: function() {},
                                oncleared: function() {},
                                repeat: 0,
                                greedy: !1,
                                autoUnmask: !1,
                                removeMaskOnSubmit: !1,
                                clearMaskOnLostFocus: !0,
                                insertMode: !0,
                                insertModeVisual: !0,
                                clearIncomplete: !1,
                                alias: null,
                                onKeyDown: function() {},
                                onBeforeMask: null,
                                onBeforePaste: function(e, t) {
                                    return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                                },
                                onBeforeWrite: null,
                                onUnMask: null,
                                showMaskOnFocus: !0,
                                showMaskOnHover: !0,
                                onKeyValidation: function() {},
                                skipOptionalPartCharacter: " ",
                                numericInput: !1,
                                rightAlign: !1,
                                undoOnEscape: !0,
                                radixPoint: "",
                                _radixDance: !1,
                                groupSeparator: "",
                                keepStatic: null,
                                positionCaretOnTab: !0,
                                tabThrough: !1,
                                supportsInputType: [ "text", "tel", "url", "password", "search" ],
                                ignorables: [ n.default.BACKSPACE, n.default.TAB, n.default["PAUSE/BREAK"], n.default.ESCAPE, n.default.PAGE_UP, n.default.PAGE_DOWN, n.default.END, n.default.HOME, n.default.LEFT, n.default.UP, n.default.RIGHT, n.default.DOWN, n.default.INSERT, n.default.DELETE, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                                isComplete: null,
                                preValidation: null,
                                postValidation: null,
                                staticDefinitionSymbol: void 0,
                                jitMasking: !1,
                                nullable: !0,
                                inputEventOnly: !1,
                                noValuePatching: !1,
                                positionCaretOnClick: "lvp",
                                casing: null,
                                inputmode: "text",
                                importDataAttributes: !0,
                                shiftPositions: !0,
                                usePrototypeDefinitions: !0,
                                validationEventTimeOut: 3e3,
                                substitutes: {}
                            };
                            t.default = r;
                        },
                        7392: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            t.default = {
                                9: {
                                    validator: "[0-9０-９]",
                                    definitionSymbol: "*"
                                },
                                a: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    definitionSymbol: "*"
                                },
                                "*": {
                                    validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
                                }
                            };
                        },
                        253: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, i) {
                                if (void 0 === i) return e.__data ? e.__data[t] : null;
                                e.__data = e.__data || {}, e.__data[t] = i;
                            };
                        },
                        3776: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.Event = void 0, t.off = function(e, t) {
                                var i, a;
                                function n(e, t, n) {
                                    if (e in i == !0) if (a.removeEventListener ? a.removeEventListener(e, n, !1) : a.detachEvent && a.detachEvent("on" + e, n), 
                                    "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(n), 1); else i[e][t].splice(i[e][t].indexOf(n), 1);
                                }
                                function r(e, a) {
                                    var n, r, o = [];
                                    if (e.length > 0) if (void 0 === t) for (n = 0, r = i[e][a].length; n < r; n++) o.push({
                                        ev: e,
                                        namespace: a && a.length > 0 ? a : "global",
                                        handler: i[e][a][n]
                                    }); else o.push({
                                        ev: e,
                                        namespace: a && a.length > 0 ? a : "global",
                                        handler: t
                                    }); else if (a.length > 0) for (var l in i) for (var s in i[l]) if (s === a) if (void 0 === t) for (n = 0, 
                                    r = i[l][s].length; n < r; n++) o.push({
                                        ev: l,
                                        namespace: s,
                                        handler: i[l][s][n]
                                    }); else o.push({
                                        ev: l,
                                        namespace: s,
                                        handler: t
                                    });
                                    return o;
                                }
                                if (u(this[0]) && e) {
                                    i = this[0].eventRegistry, a = this[0];
                                    for (var o = e.split(" "), l = 0; l < o.length; l++) for (var s = o[l].split("."), c = r(s[0], s[1]), f = 0, d = c.length; f < d; f++) n(c[f].ev, c[f].namespace, c[f].handler);
                                }
                                return this;
                            }, t.on = function(e, t) {
                                function i(e, i) {
                                    n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on" + e, t), 
                                    a[e] = a[e] || {}, a[e][i] = a[e][i] || [], a[e][i].push(t);
                                }
                                if (u(this[0])) for (var a = this[0].eventRegistry, n = this[0], r = e.split(" "), o = 0; o < r.length; o++) {
                                    var l = r[o].split("."), s = l[0], c = l[1] || "global";
                                    i(s, c);
                                }
                                return this;
                            }, t.trigger = function(e) {
                                if (u(this[0])) for (var t = this[0].eventRegistry, i = this[0], a = "string" == typeof e ? e.split(" ") : [ e.type ], r = 0; r < a.length; r++) {
                                    var l = a[r].split("."), s = l[0], c = l[1] || "global";
                                    if (void 0 !== document && "global" === c) {
                                        var f, d, p = {
                                            bubbles: !0,
                                            cancelable: !0,
                                            detail: arguments[1]
                                        };
                                        if (document.createEvent) {
                                            try {
                                                if ("input" === s) p.inputType = "insertText", f = new InputEvent(s, p); else f = new CustomEvent(s, p);
                                            } catch (e) {
                                                (f = document.createEvent("CustomEvent")).initCustomEvent(s, p.bubbles, p.cancelable, p.detail);
                                            }
                                            e.type && (0, n.default)(f, e), i.dispatchEvent(f);
                                        } else (f = document.createEventObject()).eventType = s, f.detail = arguments[1], 
                                        e.type && (0, n.default)(f, e), i.fireEvent("on" + f.eventType, f);
                                    } else if (void 0 !== t[s]) if (arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                                    arguments[0].detail = arguments.slice(1), "global" === c) for (var h in t[s]) for (d = 0; d < t[s][h].length; d++) t[s][h][d].apply(i, arguments); else for (d = 0; d < t[s][c].length; d++) t[s][c][d].apply(i, arguments);
                                }
                                return this;
                            };
                            var a, n = s(i(600)), r = s(i(9380)), o = s(i(4963)), l = s(i(8741));
                            function s(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            function u(e) {
                                return e instanceof Element;
                            }
                            t.Event = a, "function" == typeof r.default.CustomEvent ? t.Event = a = r.default.CustomEvent : l.default && (t.Event = a = function(e, t) {
                                t = t || {
                                    bubbles: !1,
                                    cancelable: !1,
                                    detail: void 0
                                };
                                var i = document.createEvent("CustomEvent");
                                return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                            }, a.prototype = r.default.Event.prototype);
                        },
                        600: function(e, t) {
                            function i(e) {
                                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, i(e);
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function e() {
                                var t, a, n, r, o, l, s = arguments[0] || {}, u = 1, c = arguments.length, f = !1;
                                "boolean" == typeof s && (f = s, s = arguments[u] || {}, u++);
                                "object" !== i(s) && "function" != typeof s && (s = {});
                                for (;u < c; u++) if (null != (t = arguments[u])) for (a in t) n = s[a], r = t[a], 
                                s !== r && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                                l = n && Array.isArray(n) ? n : []) : l = n && "[object Object]" === Object.prototype.toString.call(n) ? n : {}, 
                                s[a] = e(f, l, r)) : void 0 !== r && (s[a] = r));
                                return s;
                            };
                        },
                        4963: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var a = l(i(600)), n = l(i(9380)), r = l(i(253)), o = i(3776);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = n.default.document;
                            function u(e) {
                                return e instanceof u ? e : this instanceof u ? void (null != e && e !== n.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), 
                                void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new u(e);
                            }
                            u.prototype = {
                                on: o.on,
                                off: o.off,
                                trigger: o.trigger
                            }, u.extend = a.default, u.data = r.default, u.Event = o.Event;
                            var c = u;
                            t.default = c;
                        },
                        9845: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.ua = t.mobile = t.iphone = t.iemobile = t.ie = void 0;
                            var a, n = (a = i(9380)) && a.__esModule ? a : {
                                default: a
                            };
                            var r = n.default.navigator && n.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, l = "ontouchstart" in n.default, s = /iemobile/i.test(r), u = /iphone/i.test(r) && !s;
                            t.iphone = u, t.iemobile = s, t.mobile = l, t.ie = o, t.ua = r;
                        },
                        7184: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e) {
                                return e.replace(i, "\\$1");
                            };
                            var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
                        },
                        6030: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventHandlers = void 0;
                            var a, n = i(8711), r = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, o = i(9845), l = i(7215), s = i(7760), u = i(4713);
                            function c(e, t) {
                                var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!i) {
                                    if (Array.isArray(e) || (i = function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return f(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === i && e.constructor && (i = e.constructor.name);
                                        if ("Map" === i || "Set" === i) return Array.from(e);
                                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return f(e, t);
                                    }(e)) || t && e && "number" == typeof e.length) {
                                        i && (e = i);
                                        var a = 0, n = function() {};
                                        return {
                                            s: n,
                                            n: function() {
                                                return a >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[a++]
                                                };
                                            },
                                            e: function(e) {
                                                throw e;
                                            },
                                            f: n
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var r, o = !0, l = !1;
                                return {
                                    s: function() {
                                        i = i.call(e);
                                    },
                                    n: function() {
                                        var e = i.next();
                                        return o = e.done, e;
                                    },
                                    e: function(e) {
                                        l = !0, r = e;
                                    },
                                    f: function() {
                                        try {
                                            o || null == i.return || i.return();
                                        } finally {
                                            if (l) throw r;
                                        }
                                    }
                                };
                            }
                            function f(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                                return a;
                            }
                            var d = {
                                keydownEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = t.dependencyLib, c = t.maskset, f = this, d = a(f), p = e.keyCode, h = n.caret.call(t, f), v = i.onKeyDown.call(this, e, n.getBuffer.call(t), h, i);
                                    if (void 0 !== v) return v;
                                    if (p === r.default.BACKSPACE || p === r.default.DELETE || o.iphone && p === r.default.BACKSPACE_SAFARI || e.ctrlKey && p === r.default.X && !("oncut" in f)) e.preventDefault(), 
                                    l.handleRemove.call(t, f, p, h), (0, s.writeBuffer)(f, n.getBuffer.call(t, !0), c.p, e, f.inputmask._valueGet() !== n.getBuffer.call(t).join("")); else if (p === r.default.END || p === r.default.PAGE_DOWN) {
                                        e.preventDefault();
                                        var m = n.seekNext.call(t, n.getLastValidPosition.call(t));
                                        n.caret.call(t, f, e.shiftKey ? h.begin : m, m, !0);
                                    } else p === r.default.HOME && !e.shiftKey || p === r.default.PAGE_UP ? (e.preventDefault(), 
                                    n.caret.call(t, f, 0, e.shiftKey ? h.begin : 0, !0)) : i.undoOnEscape && p === r.default.ESCAPE && !0 !== e.altKey ? ((0, 
                                    s.checkVal)(f, !0, !1, t.undoValue.split("")), d.trigger("click")) : p !== r.default.INSERT || e.shiftKey || e.ctrlKey || void 0 !== t.userOptions.insertMode ? !0 === i.tabThrough && p === r.default.TAB ? !0 === e.shiftKey ? (h.end = n.seekPrevious.call(t, h.end, !0), 
                                    !0 === u.getTest.call(t, h.end - 1).match.static && h.end--, h.begin = n.seekPrevious.call(t, h.end, !0), 
                                    h.begin >= 0 && h.end > 0 && (e.preventDefault(), n.caret.call(t, f, h.begin, h.end))) : (h.begin = n.seekNext.call(t, h.begin, !0), 
                                    h.end = n.seekNext.call(t, h.begin, !0), h.end < c.maskLength && h.end--, h.begin <= c.maskLength && (e.preventDefault(), 
                                    n.caret.call(t, f, h.begin, h.end))) : e.shiftKey || i.insertModeVisual && !1 === i.insertMode && (p === r.default.RIGHT ? setTimeout((function() {
                                        var e = n.caret.call(t, f);
                                        n.caret.call(t, f, e.begin);
                                    }), 0) : p === r.default.LEFT && setTimeout((function() {
                                        var e = n.translatePosition.call(t, f.inputmask.caretPos.begin);
                                        n.translatePosition.call(t, f.inputmask.caretPos.end);
                                        t.isRTL ? n.caret.call(t, f, e + (e === c.maskLength ? 0 : 1)) : n.caret.call(t, f, e - (0 === e ? 0 : 1));
                                    }), 0)) : l.isSelection.call(t, h) ? i.insertMode = !i.insertMode : (i.insertMode = !i.insertMode, 
                                    n.caret.call(t, f, h.begin, h.begin));
                                    t.ignorable = i.ignorables.includes(p);
                                },
                                keypressEvent: function(e, t, i, a, o) {
                                    var u = this.inputmask || this, c = u.opts, f = u.dependencyLib, d = u.maskset, p = u.el, h = f(p), v = e.keyCode;
                                    if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || u.ignorable)) return v === r.default.ENTER && u.undoValue !== u._valueGet(!0) && (u.undoValue = u._valueGet(!0), 
                                    setTimeout((function() {
                                        h.trigger("change");
                                    }), 0)), u.skipInputEvent = !0, !0;
                                    if (v) {
                                        44 !== v && 46 !== v || 3 !== e.location || "" === c.radixPoint || (v = c.radixPoint.charCodeAt(0));
                                        var m, g = t ? {
                                            begin: o,
                                            end: o
                                        } : n.caret.call(u, p), k = String.fromCharCode(v);
                                        k = c.substitutes[k] || k, d.writeOutBuffer = !0;
                                        var y = l.isValid.call(u, g, k, a, void 0, void 0, void 0, t);
                                        if (!1 !== y && (n.resetMaskSet.call(u, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(u, y.pos.begin ? y.pos.begin : y.pos), 
                                        d.p = m), m = c.numericInput && void 0 === y.caret ? n.seekPrevious.call(u, m) : m, 
                                        !1 !== i && (setTimeout((function() {
                                            c.onKeyValidation.call(p, v, y);
                                        }), 0), d.writeOutBuffer && !1 !== y)) {
                                            var b = n.getBuffer.call(u);
                                            (0, s.writeBuffer)(p, b, m, e, !0 !== t);
                                        }
                                        if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                                    }
                                },
                                keyupEvent: function(e) {
                                    var t = this.inputmask;
                                    !t.isComposing || e.keyCode !== r.default.KEY_229 && e.keyCode !== r.default.ENTER || t.$el.trigger("input");
                                },
                                pasteEvent: function(e) {
                                    var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                                    i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                                    var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                                    if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                                    u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                                    window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                                        if (!e.clipboardData || !e.clipboardData.getData) return !0;
                                        r = l + e.clipboardData.getData("text/plain") + u;
                                    }
                                    var f = r;
                                    if (i.isRTL) {
                                        f = f.split("");
                                        var d, p = c(n.getBufferTemplate.call(i));
                                        try {
                                            for (p.s(); !(d = p.n()).done; ) {
                                                var h = d.value;
                                                f[0] === h && f.shift();
                                            }
                                        } catch (e) {
                                            p.e(e);
                                        } finally {
                                            p.f();
                                        }
                                        f = f.join("");
                                    }
                                    if ("function" == typeof a.onBeforePaste) {
                                        if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                                        f || (f = r);
                                    }
                                    (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                                },
                                inputFallBackEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                                    var l = this, c = l.inputmask._valueGet(!0), f = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), p = n.caret.call(t, l, void 0, void 0, !0);
                                    if (f !== c) {
                                        c = function(e, i, a) {
                                            if (o.iemobile) {
                                                var r = i.replace(n.getBuffer.call(t).join(""), "");
                                                if (1 === r.length) {
                                                    var l = i.split("");
                                                    l.splice(a.begin, 0, r), i = l.join("");
                                                }
                                            }
                                            return i;
                                        }(0, c, p);
                                        var h = function(e, a, r) {
                                            for (var o, l, s, c = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = c.length >= d.length ? c.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], k = "~"; c.length < h; ) c.push(k);
                                            for (;d.length < h; ) d.push(k);
                                            for (;f.length < v; ) f.unshift(k);
                                            for (;p.length < v; ) p.unshift(k);
                                            var y = c.concat(f), b = d.concat(p);
                                            for (l = 0, o = y.length; l < o; l++) switch (s = u.getPlaceholder.call(t, n.translatePosition.call(t, l)), 
                                            m) {
                                              case "insertText":
                                                b[l - 1] === y[l] && r.begin == y.length - 1 && g.push(y[l]), l = o;
                                                break;

                                              case "insertReplacementText":
                                              case "deleteContentBackward":
                                                y[l] === k ? r.end++ : l = o;
                                                break;

                                              default:
                                                y[l] !== b[l] && (y[l + 1] !== k && y[l + 1] !== s && void 0 !== y[l + 1] || (b[l] !== s || b[l + 1] !== k) && b[l] !== k ? b[l + 1] === k && b[l] === y[l + 1] ? (m = "insertText", 
                                                g.push(y[l]), r.begin--, r.end--) : y[l] !== s && y[l] !== k && (y[l + 1] === k || b[l] !== y[l] && b[l + 1] === y[l + 1]) ? (m = "insertReplacementText", 
                                                g.push(y[l]), r.begin--) : y[l] === k ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, l), !0) || b[l] === i.radixPoint) && r.end++) : l = o : (m = "insertText", 
                                                g.push(y[l]), r.begin--, r.end--));
                                            }
                                            return {
                                                action: m,
                                                data: g,
                                                caret: r
                                            };
                                        }(c, f, p);
                                        switch ((l.inputmask.shadowRoot || l.ownerDocument).activeElement !== l && l.focus(), 
                                        (0, s.writeBuffer)(l, n.getBuffer.call(t)), n.caret.call(t, l, p.begin, p.end, !0), 
                                        h.action) {
                                          case "insertText":
                                          case "insertReplacementText":
                                            h.data.forEach((function(e, i) {
                                                var n = new a.Event("keypress");
                                                n.keyCode = e.charCodeAt(0), t.ignorable = !1, d.keypressEvent.call(l, n);
                                            })), setTimeout((function() {
                                                t.$el.trigger("keyup");
                                            }), 0);
                                            break;

                                          case "deleteContentBackward":
                                            var v = new a.Event("keydown");
                                            v.keyCode = r.default.BACKSPACE, d.keydownEvent.call(l, v);
                                            break;

                                          default:
                                            (0, s.applyInputValue)(l, c);
                                        }
                                        e.preventDefault();
                                    }
                                },
                                compositionendEvent: function(e) {
                                    var t = this.inputmask;
                                    t.isComposing = !1, t.$el.trigger("input");
                                },
                                setValueEvent: function(e) {
                                    var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                                    void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                                },
                                focusEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = this, r = a.inputmask._valueGet();
                                    i.showMaskOnFocus && r !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(a, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                                    !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || l.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || d.clickEvent.apply(a, [ e, !0 ]), 
                                    t.undoValue = t._valueGet(!0);
                                },
                                invalidEvent: function(e) {
                                    this.inputmask.validationEvent = !0;
                                },
                                mouseleaveEvent: function() {
                                    var e = this.inputmask, t = e.opts, i = this;
                                    e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                                    s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                                },
                                clickEvent: function(e, t) {
                                    var i = this.inputmask, a = this;
                                    if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                                        var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                                        void 0 !== r && n.caret.call(i, a, r);
                                    }
                                },
                                cutEvent: function(e) {
                                    var t = this.inputmask, i = t.maskset, a = this, o = n.caret.call(t, a), u = t.isRTL ? n.getBuffer.call(t).slice(o.end, o.begin) : n.getBuffer.call(t).slice(o.begin, o.end), c = t.isRTL ? u.reverse().join("") : u.join("");
                                    window.navigator.clipboard ? window.navigator.clipboard.writeText(c) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", c), 
                                    l.handleRemove.call(t, a, r.default.DELETE, o), (0, s.writeBuffer)(a, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                                },
                                blurEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = (0, t.dependencyLib)(this), r = this;
                                    if (r.inputmask) {
                                        (0, s.HandleNativePlaceholder)(r, t.originalPlaceholder);
                                        var o = r.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                                        "" !== o && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && o === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), 
                                        !1 === l.isComplete.call(t, u) && (setTimeout((function() {
                                            a.trigger("incomplete");
                                        }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                                        (0, s.writeBuffer)(r, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                                        a.trigger("change"));
                                    }
                                },
                                mouseenterEvent: function() {
                                    var e = this.inputmask, t = e.opts, i = this;
                                    if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                                        var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                                        e.placeholder !== a && i.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = i.placeholder), 
                                        t.showMaskOnHover && (0, s.HandleNativePlaceholder)(i, a);
                                    }
                                },
                                submitEvent: function() {
                                    var e = this.inputmask, t = e.opts;
                                    e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                                    t.clearIncomplete && !1 === l.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                                    t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                                        (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                                    }), 0));
                                },
                                resetEvent: function() {
                                    var e = this.inputmask;
                                    e.refreshValue = !0, setTimeout((function() {
                                        (0, s.applyInputValue)(e.el, e._valueGet(!0));
                                    }), 0);
                                }
                            };
                            t.EventHandlers = d;
                        },
                        9716: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventRuler = void 0;
                            var a = l(i(2394)), n = l(i(5581)), r = i(8711), o = i(7760);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = {
                                on: function(e, t, i) {
                                    var l = e.inputmask.dependencyLib, s = function(t) {
                                        t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                                        var s, u = this, c = u.inputmask, f = c ? c.opts : void 0;
                                        if (void 0 === c && "FORM" !== this.nodeName) {
                                            var d = l.data(u, "_inputmask_opts");
                                            l(u).off(), d && new a.default(d).mask(u);
                                        } else {
                                            if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(u.disabled || u.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === f.tabThrough && t.keyCode === n.default.TAB))) {
                                                switch (t.type) {
                                                  case "input":
                                                    if (!0 === c.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return c.skipInputEvent = !1, 
                                                    t.preventDefault();
                                                    break;

                                                  case "keydown":
                                                    c.skipKeyPressEvent = !1, c.skipInputEvent = c.isComposing = t.keyCode === n.default.KEY_229;
                                                    break;

                                                  case "keyup":
                                                  case "compositionend":
                                                    c.isComposing && (c.skipInputEvent = !1);
                                                    break;

                                                  case "keypress":
                                                    if (!0 === c.skipKeyPressEvent) return t.preventDefault();
                                                    c.skipKeyPressEvent = !0;
                                                    break;

                                                  case "click":
                                                  case "focus":
                                                    return c.validationEvent ? (c.validationEvent = !1, e.blur(), (0, o.HandleNativePlaceholder)(e, (c.isRTL ? r.getBufferTemplate.call(c).slice().reverse() : r.getBufferTemplate.call(c)).join("")), 
                                                    setTimeout((function() {
                                                        e.focus();
                                                    }), f.validationEventTimeOut), !1) : (s = arguments, setTimeout((function() {
                                                        e.inputmask && i.apply(u, s);
                                                    }), 0), !1);
                                                }
                                                var p = i.apply(u, arguments);
                                                return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                            }
                                            t.preventDefault();
                                        }
                                    };
                                    [ "submit", "reset" ].includes(t) ? (s = s.bind(e), null !== e.form && l(e.form).on(t, s)) : l(e).on(t, s), 
                                    e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
                                },
                                off: function(e, t) {
                                    if (e.inputmask && e.inputmask.events) {
                                        var i = e.inputmask.dependencyLib, a = e.inputmask.events;
                                        for (var n in t && ((a = [])[t] = e.inputmask.events[t]), a) {
                                            for (var r = a[n]; r.length > 0; ) {
                                                var o = r.pop();
                                                [ "submit", "reset" ].includes(n) ? null !== e.form && i(e.form).off(n, o) : i(e).off(n, o);
                                            }
                                            delete e.inputmask.events[n];
                                        }
                                    }
                                }
                            };
                            t.EventRuler = s;
                        },
                        219: function(e, t, i) {
                            var a = d(i(2394)), n = d(i(5581)), r = d(i(7184)), o = i(8711), l = i(4713);
                            function s(e) {
                                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, s(e);
                            }
                            function u(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null == i) return;
                                    var a, n, r = [], o = !0, l = !1;
                                    try {
                                        for (i = i.call(e); !(o = (a = i.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0) ;
                                    } catch (e) {
                                        l = !0, n = e;
                                    } finally {
                                        try {
                                            o || null == i.return || i.return();
                                        } finally {
                                            if (l) throw n;
                                        }
                                    }
                                    return r;
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return c(e, t);
                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === i && e.constructor && (i = e.constructor.name);
                                    if ("Map" === i || "Set" === i) return Array.from(e);
                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function c(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                                return a;
                            }
                            function f(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var a = t[i];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                                    Object.defineProperty(e, a.key, a);
                                }
                            }
                            function d(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var p = a.default.dependencyLib, h = function() {
                                function e(t, i, a) {
                                    !function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    }(this, e), this.mask = t, this.format = i, this.opts = a, this._date = new Date(1, 0, 1), 
                                    this.initDateObject(t, this.opts);
                                }
                                var t, i, a;
                                return t = e, (i = [ {
                                    key: "date",
                                    get: function() {
                                        return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                                        this._date;
                                    }
                                }, {
                                    key: "initDateObject",
                                    value: function(e, t) {
                                        var i;
                                        for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                            var a = new RegExp("\\d+$").exec(i[0]), n = a ? i[0][0] + "x" : i[0], r = void 0;
                                            if (void 0 !== e) {
                                                if (a) {
                                                    var o = P(t).lastIndex, l = O(i.index, t);
                                                    P(t).lastIndex = o, r = e.slice(0, e.indexOf(l.nextMatch[0]));
                                                } else r = e.slice(0, n.length);
                                                e = e.slice(r.length);
                                            }
                                            Object.prototype.hasOwnProperty.call(g, n) && this.setValue(this, r, n, g[n][2], g[n][1]);
                                        }
                                    }
                                }, {
                                    key: "setValue",
                                    value: function(e, t, i, a, n) {
                                        if (void 0 !== t && (e[a] = "ampm" === a ? t : t.replace(/[^0-9]/g, "0"), e["raw" + a] = t.replace(/\s/g, "_")), 
                                        void 0 !== n) {
                                            var r = e[a];
                                            ("day" === a && 29 === parseInt(r) || "month" === a && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                            "day" === a && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === a && (m = !0), 
                                            "year" === a && (m = !0, r.length < 4 && (r = _(r, 4, !0))), "" === r || isNaN(r) || n.call(e._date, r), 
                                            "ampm" === a && n.call(e._date, r);
                                        }
                                    }
                                }, {
                                    key: "reset",
                                    value: function() {
                                        this._date = new Date(1, 0, 1);
                                    }
                                }, {
                                    key: "reInit",
                                    value: function() {
                                        this._date = void 0, this.date;
                                    }
                                } ]) && f(t.prototype, i), a && f(t, a), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e;
                            }(), v = (new Date).getFullYear(), m = !1, g = {
                                d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                                dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                                    return _(Date.prototype.getDate.call(this), 2);
                                } ],
                                ddd: [ "" ],
                                dddd: [ "" ],
                                m: [ "[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return Date.prototype.getMonth.call(this) + 1;
                                } ],
                                mm: [ "0[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return _(Date.prototype.getMonth.call(this) + 1, 2);
                                } ],
                                mmm: [ "" ],
                                mmmm: [ "" ],
                                yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                                    return _(Date.prototype.getFullYear.call(this), 2);
                                } ],
                                yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                                    return _(Date.prototype.getFullYear.call(this), 4);
                                } ],
                                h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                                    return _(Date.prototype.getHours.call(this), 2);
                                } ],
                                hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return Date.prototype.getHours;
                                } ],
                                H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                                    return _(Date.prototype.getHours.call(this), 2);
                                } ],
                                Hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return function() {
                                        return _(Date.prototype.getHours.call(this), e);
                                    };
                                } ],
                                M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                                MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                                    return _(Date.prototype.getMinutes.call(this), 2);
                                } ],
                                s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                                ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                                    return _(Date.prototype.getSeconds.call(this), 2);
                                } ],
                                l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return _(Date.prototype.getMilliseconds.call(this), 3);
                                } ],
                                L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return _(Date.prototype.getMilliseconds.call(this), 2);
                                } ],
                                t: [ "[ap]", y, "ampm", b, 1 ],
                                tt: [ "[ap]m", y, "ampm", b, 2 ],
                                T: [ "[AP]", y, "ampm", b, 1 ],
                                TT: [ "[AP]M", y, "ampm", b, 2 ],
                                Z: [ ".*", void 0, "Z", function() {
                                    var e = this.toString().match(/\((.+)\)/)[1];
                                    e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                                        return u(e, 1)[0];
                                    })).join(""));
                                    return e;
                                } ],
                                o: [ "" ],
                                S: [ "" ]
                            }, k = {
                                isoDate: "yyyy-mm-dd",
                                isoTime: "HH:MM:ss",
                                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                            };
                            function y(e) {
                                var t = this.getHours();
                                e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                            }
                            function b() {
                                var e = this.getHours();
                                return (e = e || 12) >= 12 ? "PM" : "AM";
                            }
                            function x(e) {
                                var t = new RegExp("\\d+$").exec(e[0]);
                                if (t && void 0 !== t[0]) {
                                    var i = g[e[0][0] + "x"].slice("");
                                    return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                                }
                                if (g[e[0]]) return g[e[0]];
                            }
                            function P(e) {
                                if (!e.tokenizer) {
                                    var t = [], i = [];
                                    for (var a in g) if (/\.*x$/.test(a)) {
                                        var n = a[0] + "\\d+";
                                        -1 === i.indexOf(n) && i.push(n);
                                    } else -1 === t.indexOf(a[0]) && t.push(a[0]);
                                    e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                                    e.tokenizer = new RegExp(e.tokenizer, "g");
                                }
                                return e.tokenizer;
                            }
                            function E(e, t, i) {
                                if (!m) return !0;
                                if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                                if ("29" == e.day) {
                                    var a = O(t.pos, i);
                                    if ("yyyy" === a.targetMatch[0] && t.pos - a.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                                    t;
                                } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                                e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                                    pos: t.pos,
                                    c: "0"
                                }, {
                                    pos: t.pos + 1,
                                    c: t.c
                                } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                                return !1;
                            }
                            function S(e, t, i, a) {
                                var n, o, l = "";
                                for (P(i).lastIndex = 0; n = P(i).exec(e); ) if (void 0 === t) if (o = x(n)) l += "(" + o[0] + ")"; else switch (n[0]) {
                                  case "[":
                                    l += "(";
                                    break;

                                  case "]":
                                    l += ")?";
                                    break;

                                  default:
                                    l += (0, r.default)(n[0]);
                                } else if (o = x(n)) if (!0 !== a && o[3]) l += o[3].call(t.date); else o[2] ? l += t["raw" + o[2]] : l += n[0]; else l += n[0];
                                return l;
                            }
                            function _(e, t, i) {
                                for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                                return e;
                            }
                            function w(e, t, i) {
                                return "string" == typeof e ? new h(e, t, i) : e && "object" === s(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                            }
                            function M(e, t) {
                                return S(t.inputFormat, {
                                    date: e
                                }, t);
                            }
                            function O(e, t) {
                                var i, a, n = 0, r = 0;
                                for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat); ) {
                                    var o = new RegExp("\\d+$").exec(a[0]);
                                    if ((n += r = o ? parseInt(o[0]) : a[0].length) >= e + 1) {
                                        i = a, a = P(t).exec(t.inputFormat);
                                        break;
                                    }
                                }
                                return {
                                    targetMatchIndex: n - r,
                                    nextMatch: a,
                                    targetMatch: i
                                };
                            }
                            a.default.extendAliases({
                                datetime: {
                                    mask: function(e) {
                                        return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, 
                                        e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, 
                                        e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                                        e.regex = S(e.inputFormat, void 0, e), e.min = w(e.min, e.inputFormat, e), e.max = w(e.max, e.inputFormat, e), 
                                        null;
                                    },
                                    placeholder: "",
                                    inputFormat: "isoDateTime",
                                    displayFormat: null,
                                    outputFormat: null,
                                    min: null,
                                    max: null,
                                    skipOptionalPartCharacter: "",
                                    i18n: {
                                        dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                                        monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                                        ordinalSuffix: [ "st", "nd", "rd", "th" ]
                                    },
                                    preValidation: function(e, t, i, a, n, r, o, l) {
                                        if (l) return !0;
                                        if (isNaN(i) && e[t] !== i) {
                                            var s = O(t, n);
                                            if (s.nextMatch && s.nextMatch[0] === i && s.targetMatch[0].length > 1) {
                                                var u = g[s.targetMatch[0]][0];
                                                if (new RegExp(u).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                                {
                                                    fuzzy: !0,
                                                    buffer: e,
                                                    refreshFromBuffer: {
                                                        start: t - 1,
                                                        end: t + 1
                                                    },
                                                    pos: t + 1
                                                };
                                            }
                                        }
                                        return !0;
                                    },
                                    postValidation: function(e, t, i, a, n, r, o, s) {
                                        var u, c;
                                        if (o) return !0;
                                        if (!1 === a && (((u = O(t + 1, n)).targetMatch && u.targetMatchIndex === t && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]] || (u = O(t + 2, n)).targetMatch && u.targetMatchIndex === t + 1 && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]]) && (c = g[u.targetMatch[0]][0]), 
                                        void 0 !== c && (void 0 !== r.validPositions[t + 1] && new RegExp(c).test(i + "0") ? (e[t] = i, 
                                        e[t + 1] = "0", a = {
                                            pos: t + 2,
                                            caret: t
                                        }) : new RegExp(c).test("0" + i) && (e[t] = "0", e[t + 1] = i, a = {
                                            pos: t + 2
                                        })), !1 === a)) return a;
                                        if (a.fuzzy && (e = a.buffer, t = a.pos), (u = O(t, n)).targetMatch && u.targetMatch[0] && void 0 !== g[u.targetMatch[0]]) {
                                            var f = g[u.targetMatch[0]];
                                            c = f[0];
                                            var d = e.slice(u.targetMatchIndex, u.targetMatchIndex + u.targetMatch[0].length);
                                            if (!1 === new RegExp(c).test(d.join("")) && 2 === u.targetMatch[0].length && r.validPositions[u.targetMatchIndex] && r.validPositions[u.targetMatchIndex + 1] && (r.validPositions[u.targetMatchIndex + 1].input = "0"), 
                                            "year" == f[2]) for (var p = l.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], 
                                            delete r.validPositions[h];
                                        }
                                        var m = a, k = w(e.join(""), n.inputFormat, n);
                                        return m && k.date.getTime() == k.date.getTime() && (n.prefillYear && (m = function(e, t, i) {
                                            if (e.year !== e.rawyear) {
                                                var a = v.toString(), n = e.rawyear.replace(/[^0-9]/g, ""), r = a.slice(0, n.length), o = a.slice(n.length);
                                                if (2 === n.length && n === r) {
                                                    var l = new Date(v, e.month - 1, e.day);
                                                    e.day == l.getDate() && (!i.max || i.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), 
                                                    e.year = a, t.insert = [ {
                                                        pos: t.pos + 1,
                                                        c: o[0]
                                                    }, {
                                                        pos: t.pos + 2,
                                                        c: o[1]
                                                    } ]);
                                                }
                                            }
                                            return t;
                                        }(k, m, n)), m = function(e, t, i, a, n) {
                                            if (!t) return t;
                                            if (t && i.min && i.min.date.getTime() == i.min.date.getTime()) {
                                                var r;
                                                for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                                    var o;
                                                    if ((o = x(r)) && o[3]) {
                                                        for (var l = o[1], s = e[o[2]], u = i.min[o[2]], c = i.max ? i.max[o[2]] : u, f = [], d = !1, p = 0; p < u.length; p++) void 0 !== a.validPositions[p + r.index] || d ? (f[p] = s[p], 
                                                        d = d || s[p] > u[p]) : (f[p] = u[p], "year" === o[2] && s.length - 1 == p && u != c && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                                        "ampm" === o[2] && u != c && i.min.date.getTime() > e.date.getTime() && (f[p] = c[p]));
                                                        l.call(e._date, f.join(""));
                                                    }
                                                }
                                                t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                            }
                                            return t && i.max && i.max.date.getTime() == i.max.date.getTime() && (t = i.max.date.getTime() >= e.date.getTime()), 
                                            t;
                                        }(k, m = E.call(this, k, m, n), n, r)), void 0 !== t && m && a.pos !== t ? {
                                            buffer: S(n.inputFormat, k, n).split(""),
                                            refreshFromBuffer: {
                                                start: t,
                                                end: a.pos
                                            },
                                            pos: a.caret || a.pos
                                        } : m;
                                    },
                                    onKeyDown: function(e, t, i, a) {
                                        e.ctrlKey && e.keyCode === n.default.RIGHT && (this.inputmask._valueSet(M(new Date, a)), 
                                        p(this).trigger("setvalue"));
                                    },
                                    onUnMask: function(e, t, i) {
                                        return t ? S(i.outputFormat, w(e, i.inputFormat, i), i, !0) : t;
                                    },
                                    casing: function(e, t, i, a) {
                                        return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                                    },
                                    onBeforeMask: function(e, t) {
                                        return "[object Date]" === Object.prototype.toString.call(e) && (e = M(e, t)), e;
                                    },
                                    insertMode: !1,
                                    shiftPositions: !1,
                                    keepStatic: !1,
                                    inputmode: "numeric",
                                    prefillYear: !0
                                }
                            });
                        },
                        3851: function(e, t, i) {
                            var a, n = (a = i(2394)) && a.__esModule ? a : {
                                default: a
                            }, r = i(8711), o = i(4713);
                            n.default.extendDefinitions({
                                A: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "&": {
                                    validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "#": {
                                    validator: "[0-9A-Fa-f]",
                                    casing: "upper"
                                }
                            });
                            var l = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                            function s(e, t, i, a, n) {
                                return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                                l.test(e);
                            }
                            n.default.extendAliases({
                                cssunit: {
                                    regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                                },
                                url: {
                                    regex: "(https?|ftp)://.*",
                                    autoUnmask: !1,
                                    keepStatic: !1,
                                    tabThrough: !0
                                },
                                ip: {
                                    mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                                    definitions: {
                                        i: {
                                            validator: s
                                        },
                                        j: {
                                            validator: s
                                        },
                                        k: {
                                            validator: s
                                        },
                                        l: {
                                            validator: s
                                        }
                                    },
                                    onUnMask: function(e, t, i) {
                                        return e;
                                    },
                                    inputmode: "decimal",
                                    substitutes: {
                                        ",": "."
                                    }
                                },
                                email: {
                                    mask: function(e) {
                                        var t = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", i = t;
                                        if (e.separator) for (var a = 0; a < e.quantifier; a++) i += "[".concat(e.separator).concat(t, "]");
                                        return i;
                                    },
                                    greedy: !1,
                                    casing: "lower",
                                    separator: null,
                                    quantifier: 5,
                                    skipOptionalPartCharacter: "",
                                    onBeforePaste: function(e, t) {
                                        return (e = e.toLowerCase()).replace("mailto:", "");
                                    },
                                    definitions: {
                                        "*": {
                                            validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                                        },
                                        "-": {
                                            validator: "[0-9A-Za-z-]"
                                        }
                                    },
                                    onUnMask: function(e, t, i) {
                                        return e;
                                    },
                                    inputmode: "email"
                                },
                                mac: {
                                    mask: "##:##:##:##:##:##"
                                },
                                vin: {
                                    mask: "V{13}9{4}",
                                    definitions: {
                                        V: {
                                            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                            casing: "upper"
                                        }
                                    },
                                    clearIncomplete: !0,
                                    autoUnmask: !0
                                },
                                ssn: {
                                    mask: "999-99-9999",
                                    postValidation: function(e, t, i, a, n, l, s) {
                                        var u = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                                        return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""));
                                    }
                                }
                            });
                        },
                        207: function(e, t, i) {
                            var a = l(i(2394)), n = l(i(5581)), r = l(i(7184)), o = i(8711);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = a.default.dependencyLib;
                            function u(e, t) {
                                for (var i = "", n = 0; n < e.length; n++) a.default.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);
                                return i;
                            }
                            function c(e, t, i, a) {
                                if (e.length > 0 && t > 0 && (!i.digitsOptional || a)) {
                                    var n = e.indexOf(i.radixPoint), r = !1;
                                    i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === n && (e.push(i.radixPoint), 
                                    n = e.length - 1);
                                    for (var o = 1; o <= t; o++) isFinite(e[n + o]) || (e[n + o] = "0");
                                }
                                return r && e.push(i.negationSymbol.back), e;
                            }
                            function f(e, t) {
                                var i = 0;
                                if ("+" === e) {
                                    for (i in t.validPositions) ;
                                    i = o.seekNext.call(this, parseInt(i));
                                }
                                for (var a in t.tests) if ((a = parseInt(a)) >= i) for (var n = 0, r = t.tests[a].length; n < r; n++) if ((void 0 === t.validPositions[a] || "-" === e) && t.tests[a][n].match.def === e) return a + (void 0 !== t.validPositions[a] && "-" !== e ? 1 : 0);
                                return i;
                            }
                            function d(e, t) {
                                var i = -1;
                                for (var a in t.validPositions) {
                                    var n = t.validPositions[a];
                                    if (n && n.match.def === e) {
                                        i = parseInt(a);
                                        break;
                                    }
                                }
                                return i;
                            }
                            function p(e, t, i, a, n) {
                                var r = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1, o = (-1 !== r || a && n.jitMasking) && new RegExp(n.definitions[9].validator).test(e);
                                return n._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                                    insert: {
                                        pos: r === i ? r + 1 : r,
                                        c: n.radixPoint
                                    },
                                    pos: i
                                } : o;
                            }
                            a.default.extendAliases({
                                numeric: {
                                    mask: function(e) {
                                        e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                                        " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                                        "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                                        var t = "0", i = e.radixPoint;
                                        !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                                        e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                                        "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                                        e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                                        e.numericInput = !0);
                                        var a, n = "[+]";
                                        if (n += u(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                                        e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                                        e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                                        n += e._mask(e)) : n += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                            var o = e.digits.toString().split(",");
                                            isFinite(o[0]) && o[1] && isFinite(o[1]) ? n += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = n + i + t + "{0," + e.digits + "}", 
                                            e.keepStatic = !0) : n += i + t + "{" + e.digits + "}");
                                        } else e.inputmode = "numeric";
                                        return n += u(e.suffix, e), n += "[-]", a && (n = [ a + u(e.suffix, e) + "[-]", n ]), 
                                        e.greedy = !1, function(e) {
                                            void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                            r.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                            e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                            null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), 
                                            "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                            isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                                        }(e), "" !== e.radixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                                        n;
                                    },
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "999){+|1}";
                                    },
                                    digits: "*",
                                    digitsOptional: !0,
                                    enforceDigitsOnBlur: !1,
                                    radixPoint: ".",
                                    positionCaretOnClick: "radixFocus",
                                    _radixDance: !0,
                                    groupSeparator: "",
                                    allowMinus: !0,
                                    negationSymbol: {
                                        front: "-",
                                        back: ""
                                    },
                                    prefix: "",
                                    suffix: "",
                                    min: null,
                                    max: null,
                                    SetMaxOnOverflow: !1,
                                    step: 1,
                                    inputType: "text",
                                    unmaskAsNumber: !1,
                                    roundingFN: Math.round,
                                    inputmode: "decimal",
                                    shortcuts: {
                                        k: "1000",
                                        m: "1000000"
                                    },
                                    placeholder: "0",
                                    greedy: !1,
                                    rightAlign: !0,
                                    insertMode: !0,
                                    autoUnmask: !1,
                                    skipOptionalPartCharacter: "",
                                    usePrototypeDefinitions: !1,
                                    stripLeadingZeroes: !0,
                                    definitions: {
                                        0: {
                                            validator: p
                                        },
                                        1: {
                                            validator: p,
                                            definitionSymbol: "9"
                                        },
                                        9: {
                                            validator: "[0-9０-９٠-٩۰-۹]",
                                            definitionSymbol: "*"
                                        },
                                        "+": {
                                            validator: function(e, t, i, a, n) {
                                                return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                                            }
                                        },
                                        "-": {
                                            validator: function(e, t, i, a, n) {
                                                return n.allowMinus && e === n.negationSymbol.back;
                                            }
                                        }
                                    },
                                    preValidation: function(e, t, i, a, n, r, o, l) {
                                        if (!1 !== n.__financeInput && i === n.radixPoint) return !1;
                                        var s = e.indexOf(n.radixPoint), u = t;
                                        if (t = function(e, t, i, a, n) {
                                            return n._radixDance && n.numericInput && t !== n.negationSymbol.back && e <= i && (i > 0 || t == n.radixPoint) && (void 0 === a.validPositions[e - 1] || a.validPositions[e - 1].input !== n.negationSymbol.back) && (e -= 1), 
                                            e;
                                        }(t, i, s, r, n), "-" === i || i === n.negationSymbol.front) {
                                            if (!0 !== n.allowMinus) return !1;
                                            var c = !1, p = d("+", r), h = d("-", r);
                                            return -1 !== p && (c = [ p, h ]), !1 !== c ? {
                                                remove: c,
                                                caret: u - n.negationSymbol.back.length
                                            } : {
                                                insert: [ {
                                                    pos: f.call(this, "+", r),
                                                    c: n.negationSymbol.front,
                                                    fromIsValid: !0
                                                }, {
                                                    pos: f.call(this, "-", r),
                                                    c: n.negationSymbol.back,
                                                    fromIsValid: void 0
                                                } ],
                                                caret: u + n.negationSymbol.back.length
                                            };
                                        }
                                        if (i === n.groupSeparator) return {
                                            caret: u
                                        };
                                        if (l) return !0;
                                        if (-1 !== s && !0 === n._radixDance && !1 === a && i === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || parseInt(n.digits) > 0) && s !== t) return {
                                            caret: n._radixDance && t === s - 1 ? s + 1 : s
                                        };
                                        if (!1 === n.__financeInput) if (a) {
                                            if (n.digitsOptional) return {
                                                rewritePosition: o.end
                                            };
                                            if (!n.digitsOptional) {
                                                if (o.begin > s && o.end <= s) return i === n.radixPoint ? {
                                                    insert: {
                                                        pos: s + 1,
                                                        c: "0",
                                                        fromIsValid: !0
                                                    },
                                                    rewritePosition: s
                                                } : {
                                                    rewritePosition: s + 1
                                                };
                                                if (o.begin < s) return {
                                                    rewritePosition: o.begin - 1
                                                };
                                            }
                                        } else if (!n.showMaskOnHover && !n.showMaskOnFocus && !n.digitsOptional && n.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                            rewritePosition: s
                                        };
                                        return {
                                            rewritePosition: t
                                        };
                                    },
                                    postValidation: function(e, t, i, a, n, r, o) {
                                        if (!1 === a) return a;
                                        if (o) return !0;
                                        if (null !== n.min || null !== n.max) {
                                            var l = n.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, n, {
                                                unmaskAsNumber: !0
                                            }));
                                            if (null !== n.min && l < n.min && (l.toString().length > n.min.toString().length || l < 0)) return !1;
                                            if (null !== n.max && l > n.max) return !!n.SetMaxOnOverflow && {
                                                refreshFromBuffer: !0,
                                                buffer: c(n.max.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                            };
                                        }
                                        return a;
                                    },
                                    onUnMask: function(e, t, i) {
                                        if ("" === t && !0 === i.nullable) return t;
                                        var a = e.replace(i.prefix, "");
                                        return a = (a = a.replace(i.suffix, "")).replace(new RegExp((0, r.default)(i.groupSeparator), "g"), ""), 
                                        "" !== i.placeholder.charAt(0) && (a = a.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                                        i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== a.indexOf(i.radixPoint) && (a = a.replace(r.default.call(this, i.radixPoint), ".")), 
                                        a = (a = a.replace(new RegExp("^" + (0, r.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        r.default)(i.negationSymbol.back) + "$"), ""), Number(a)) : a;
                                    },
                                    isComplete: function(e, t) {
                                        var i = (t.numericInput ? e.slice().reverse() : e).join("");
                                        return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, r.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        r.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                                        r.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                                        r.default)(t.radixPoint), ".")), isFinite(i);
                                    },
                                    onBeforeMask: function(e, t) {
                                        var i = t.radixPoint || ",";
                                        isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                                        var a = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, n = e.split(i), o = n[0].replace(/[^\-0-9]/g, ""), l = n.length > 1 ? n[1].replace(/[^0-9]/g, "") : "", s = n.length > 1;
                                        e = o + ("" !== l ? i + l : l);
                                        var u = 0;
                                        if ("" !== i && (u = t.digitsOptional ? t.digits < l.length ? t.digits : l.length : t.digits, 
                                        "" !== l || !t.digitsOptional)) {
                                            var f = Math.pow(10, u || 1);
                                            e = e.replace((0, r.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(u)), 
                                            e = e.toString().replace(".", i);
                                        }
                                        if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                                        null !== t.min || null !== t.max) {
                                            var d = e.toString().replace(i, ".");
                                            null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                                        }
                                        return a && "-" !== e.charAt(0) && (e = "-" + e), c(e.toString().split(""), u, t, s).join("");
                                    },
                                    onBeforeWrite: function(e, t, i, a) {
                                        function n(e, t) {
                                            if (!1 !== a.__financeInput || t) {
                                                var i = e.indexOf(a.radixPoint);
                                                -1 !== i && e.splice(i, 1);
                                            }
                                            if ("" !== a.groupSeparator) for (;-1 !== (i = e.indexOf(a.groupSeparator)); ) e.splice(i, 1);
                                            return e;
                                        }
                                        var o, l;
                                        if (a.stripLeadingZeroes && (l = function(e, t) {
                                            var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, r.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                            r.default)(t.prefix) + ")(.*)(" + (0, r.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                            r.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), a = i ? i[2] : "", n = !1;
                                            return a && (a = a.split(t.radixPoint.charAt(0))[0], n = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), 
                                            !(!n || !(n[0].length > 1 || n[0].length > 0 && n[0].length < a.length)) && n;
                                        }(t, a))) for (var u = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, d = l[0].length - f; d > 0; d--) delete this.maskset.validPositions[u + d], 
                                        delete t[u + d];
                                        if (e) switch (e.type) {
                                          case "blur":
                                          case "checkval":
                                            if (null !== a.min) {
                                                var p = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                                                    unmaskAsNumber: !0
                                                }));
                                                if (null !== a.min && p < a.min) return {
                                                    refreshFromBuffer: !0,
                                                    buffer: c(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                                };
                                            }
                                            if (t[t.length - 1] === a.negationSymbol.front) {
                                                var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, r.default)(a.negationSymbol.front) + "?" : "") + (0, 
                                                r.default)(a.prefix) + ")(.*)(" + (0, r.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, 
                                                r.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(n(t.slice(), !0).reverse().join(""));
                                                0 == (h ? h[2] : "") && (o = {
                                                    refreshFromBuffer: !0,
                                                    buffer: [ 0 ]
                                                });
                                            } else if ("" !== a.radixPoint) t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), 
                                            o = {
                                                refreshFromBuffer: !0,
                                                buffer: n(t)
                                            }));
                                            if (a.enforceDigitsOnBlur) {
                                                var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                                o.refreshFromBuffer = !0, o.buffer = c(v, a.digits, a, !0).reverse();
                                            }
                                        }
                                        return o;
                                    },
                                    onKeyDown: function(e, t, i, a) {
                                        var r, o, l = s(this), u = String.fromCharCode(e.keyCode).toLowerCase();
                                        if ((o = a.shortcuts && a.shortcuts[u]) && o.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(o)), 
                                        l.trigger("setvalue"), !1;
                                        if (e.ctrlKey) switch (e.keyCode) {
                                          case n.default.UP:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(a.step)), 
                                            l.trigger("setvalue"), !1;

                                          case n.default.DOWN:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(a.step)), 
                                            l.trigger("setvalue"), !1;
                                        }
                                        if (!e.shiftKey && (e.keyCode === n.default.DELETE || e.keyCode === n.default.BACKSPACE || e.keyCode === n.default.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                            if (t[e.keyCode === n.default.DELETE ? i.begin - 1 : i.end] === a.negationSymbol.front) return r = t.slice().reverse(), 
                                            "" !== a.negationSymbol.front && r.shift(), "" !== a.negationSymbol.back && r.pop(), 
                                            l.trigger("setvalue", [ r.join(""), i.begin ]), !1;
                                            if (!0 === a._radixDance) {
                                                var f = t.indexOf(a.radixPoint);
                                                if (a.digitsOptional) {
                                                    if (0 === f) return (r = t.slice().reverse()).pop(), l.trigger("setvalue", [ r.join(""), i.begin >= r.length ? r.length : i.begin ]), 
                                                    !1;
                                                } else if (-1 !== f && (i.begin < f || i.end < f || e.keyCode === n.default.DELETE && i.begin === f)) return i.begin !== i.end || e.keyCode !== n.default.BACKSPACE && e.keyCode !== n.default.BACKSPACE_SAFARI || i.begin++, 
                                                (r = t.slice().reverse()).splice(r.length - i.begin, i.begin - i.end + 1), r = c(r, a.digits, a).join(""), 
                                                l.trigger("setvalue", [ r, i.begin >= r.length ? f + 1 : i.begin ]), !1;
                                            }
                                        }
                                    }
                                },
                                currency: {
                                    prefix: "",
                                    groupSeparator: ",",
                                    alias: "numeric",
                                    digits: 2,
                                    digitsOptional: !1
                                },
                                decimal: {
                                    alias: "numeric"
                                },
                                integer: {
                                    alias: "numeric",
                                    inputmode: "numeric",
                                    digits: 0
                                },
                                percentage: {
                                    alias: "numeric",
                                    min: 0,
                                    max: 100,
                                    suffix: " %",
                                    digits: 0,
                                    allowMinus: !1
                                },
                                indianns: {
                                    alias: "numeric",
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                                    },
                                    groupSeparator: ",",
                                    radixPoint: ".",
                                    placeholder: "0",
                                    digits: 2,
                                    digitsOptional: !1
                                }
                            });
                        },
                        9380: function(e, t, i) {
                            var a;
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var n = ((a = i(8741)) && a.__esModule ? a : {
                                default: a
                            }).default ? window : {};
                            t.default = n;
                        },
                        7760: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.HandleNativePlaceholder = function(e, t) {
                                var i = e ? e.inputmask : this;
                                if (s.ie) {
                                    if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                                        var a = o.getBuffer.call(i).slice(), n = e.inputmask._valueGet();
                                        if (n !== t) {
                                            var r = o.getLastValidPosition.call(i);
                                            -1 === r && n === o.getBufferTemplate.call(i).join("") ? a = [] : -1 !== r && f.call(i, a), 
                                            p(e, a);
                                        }
                                    }
                                } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                            }, t.applyInputValue = c, t.checkVal = d, t.clearOptionalTail = f, t.unmaskedvalue = function(e) {
                                var t = e ? e.inputmask : this, i = t.opts, a = t.maskset;
                                if (e) {
                                    if (void 0 === e.inputmask) return e.value;
                                    e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                                }
                                var n = [], r = a.validPositions;
                                for (var l in r) r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(a.metadata) && !0 !== r[l].generatedInput) && n.push(r[l].input);
                                var s = 0 === n.length ? "" : (t.isRTL ? n.reverse() : n).join("");
                                if ("function" == typeof i.onUnMask) {
                                    var u = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
                                    s = i.onUnMask.call(t, u, s, i);
                                }
                                return s;
                            }, t.writeBuffer = p;
                            var a, n = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, r = i(4713), o = i(8711), l = i(7215), s = i(9845), u = i(6030);
                            function c(e, t) {
                                var i = e ? e.inputmask : this, a = i.opts;
                                e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), 
                                d(e, !0, !1, t = t.toString().split("")), i.undoValue = i._valueGet(!0), (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                            }
                            function f(e) {
                                e.length = 0;
                                for (var t, i = r.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                                return e;
                            }
                            function d(e, t, i, a, n) {
                                var s = e ? e.inputmask : this, c = s.maskset, f = s.opts, d = s.dependencyLib, h = a.slice(), v = "", m = -1, g = void 0, k = f.skipOptionalPartCharacter;
                                f.skipOptionalPartCharacter = "", o.resetMaskSet.call(s), c.tests = {}, m = f.radixPoint ? o.determineNewCaretPosition.call(s, {
                                    begin: 0,
                                    end: 0
                                }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, c.p = m, s.caretPos = {
                                    begin: m
                                };
                                var y = [], b = s.caretPos;
                                if (h.forEach((function(e, t) {
                                    if (void 0 !== e) {
                                        var a = new d.Event("_checkval");
                                        a.keyCode = e.toString().charCodeAt(0), v += e;
                                        var n = o.getLastValidPosition.call(s, void 0, !0);
                                        !function(e, t) {
                                            for (var i = r.getMaskTemplate.call(s, !0, 0).slice(e, o.seekNext.call(s, e, !1, !1)).join("").replace(/'/g, ""), a = i.indexOf(t); a > 0 && " " === i[a - 1]; ) a--;
                                            var n = 0 === a && !o.isMask.call(s, e) && (r.getTest.call(s, e).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e).match.static && r.getTest.call(s, e).match.nativeDef === "'" + t.charAt(0) || " " === r.getTest.call(s, e).match.nativeDef && (r.getTest.call(s, e + 1).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e + 1).match.static && r.getTest.call(s, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                            if (!n && a > 0 && !o.isMask.call(s, e, !1, !0)) {
                                                var l = o.seekNext.call(s, e);
                                                s.caretPos.begin < l && (s.caretPos = {
                                                    begin: l
                                                });
                                            }
                                            return n;
                                        }(m, v) ? (g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, s.caretPos.begin)) && (m = s.caretPos.begin + 1, 
                                        v = "") : g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, n + 1), g ? (void 0 !== g.pos && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static && void 0 === c.validPositions[g.pos].alternation && (y.push(g.pos), 
                                        s.isRTL || (g.forwardPosition = g.pos + 1)), p.call(s, void 0, o.getBuffer.call(s), g.forwardPosition, a, !1), 
                                        s.caretPos = {
                                            begin: g.forwardPosition,
                                            end: g.forwardPosition
                                        }, b = s.caretPos) : void 0 === c.validPositions[t] && h[t] === r.getPlaceholder.call(s, t) && o.isMask.call(s, t, !0) ? s.caretPos.begin++ : s.caretPos = b;
                                    }
                                })), y.length > 0) {
                                    var x, P, E = o.seekNext.call(s, -1, void 0, !1);
                                    if (!l.isComplete.call(s, o.getBuffer.call(s)) && y.length <= E || l.isComplete.call(s, o.getBuffer.call(s)) && y.length > 0 && y.length !== E && 0 === y[0]) for (var S = E; void 0 !== (x = y.shift()); ) {
                                        var _ = new d.Event("_checkval");
                                        if ((P = c.validPositions[x]).generatedInput = !0, _.keyCode = P.input.charCodeAt(0), 
                                        (g = u.EventHandlers.keypressEvent.call(s, _, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static) y.push(g.pos); else if (!g) break;
                                        S++;
                                    }
                                }
                                t && p.call(s, e, o.getBuffer.call(s), g ? g.forwardPosition : s.caretPos.begin, n || new d.Event("checkval"), n && ("input" === n.type && s.undoValue !== o.getBuffer.call(s).join("") || "paste" === n.type)), 
                                f.skipOptionalPartCharacter = k;
                            }
                            function p(e, t, i, a, r) {
                                var s = e ? e.inputmask : this, u = s.opts, c = s.dependencyLib;
                                if (a && "function" == typeof u.onBeforeWrite) {
                                    var f = u.onBeforeWrite.call(s, a, t, i, u);
                                    if (f) {
                                        if (f.refreshFromBuffer) {
                                            var d = f.refreshFromBuffer;
                                            l.refreshFromBuffer.call(s, !0 === d ? d : d.start, d.end, f.buffer || t), t = o.getBuffer.call(s, !0);
                                        }
                                        void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                                    }
                                }
                                if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || o.caret.call(s, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.keyCode === n.default.DELETE || a.keyCode === n.default.BACKSPACE)), 
                                !0 === r)) {
                                    var p = c(e), h = e.inputmask._valueGet();
                                    e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                                        h === o.getBufferTemplate.call(s).join("") ? p.trigger("cleared") : !0 === l.isComplete.call(s, t) && p.trigger("complete");
                                    }), 0);
                                }
                            }
                        },
                        2394: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0, i(7149), i(3194);
                            var a = i(157), n = m(i(4963)), r = m(i(9380)), o = i(2391), l = i(4713), s = i(8711), u = i(7215), c = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                            function v(e) {
                                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, v(e);
                            }
                            function m(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var g = r.default.document, k = "_inputmask_opts";
                            function y(e, t, i) {
                                if (h.default) {
                                    if (!(this instanceof y)) return new y(e, t, i);
                                    this.dependencyLib = n.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                                    !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                                    e && (t.alias = e)), this.opts = n.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                                    this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                                    this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, 
                                    this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, 
                                    this.originalPlaceholder = void 0, this.isComposing = !1;
                                }
                            }
                            function b(e, t, i) {
                                var a = y.prototype.aliases[e];
                                return a ? (a.alias && b(a.alias, void 0, i), n.default.extend(!0, i, a), n.default.extend(!0, i, t), 
                                !0) : (null === i.mask && (i.mask = e), !1);
                            }
                            y.prototype = {
                                dataAttribute: "data-inputmask",
                                defaults: p.default,
                                definitions: d.default,
                                aliases: {},
                                masksCache: {},
                                get isRTL() {
                                    return this.opts.isRTL || this.opts.numericInput;
                                },
                                mask: function(e) {
                                    var t = this;
                                    return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                                    (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : Array.from(e)).forEach((function(e, i) {
                                        var l = n.default.extend(!0, {}, t.opts);
                                        if (function(e, t, i, a) {
                                            function o(t, n) {
                                                var o = "" === a ? t : a + "-" + t;
                                                null !== (n = void 0 !== n ? n : e.getAttribute(o)) && ("string" == typeof n && (0 === t.indexOf("on") ? n = r.default[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), 
                                                i[t] = n);
                                            }
                                            if (!0 === t.importDataAttributes) {
                                                var l, s, u, c, f = e.getAttribute(a);
                                                if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), 
                                                s) for (c in u = void 0, s) if ("alias" === c.toLowerCase()) {
                                                    u = s[c];
                                                    break;
                                                }
                                                for (l in o("alias", u), i.alias && b(i.alias, i, t), t) {
                                                    if (s) for (c in u = void 0, s) if (c.toLowerCase() === l.toLowerCase()) {
                                                        u = s[c];
                                                        break;
                                                    }
                                                    o(l, u);
                                                }
                                            }
                                            n.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                            ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                            t.isRTL = !0);
                                            return Object.keys(i).length;
                                        }(e, l, n.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                            var s = (0, o.generateMaskSet)(l, t.noMasksCache);
                                            void 0 !== s && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                            e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = l, e.inputmask.noMasksCache = t.noMasksCache, 
                                            e.inputmask.userOptions = n.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                            e.inputmask.$el = (0, n.default)(e), e.inputmask.maskset = s, n.default.data(e, k, t.userOptions), 
                                            a.mask.call(e.inputmask));
                                        }
                                    })), e && e[0] && e[0].inputmask || this;
                                },
                                option: function(e, t) {
                                    return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (n.default.extend(this.userOptions, e), 
                                    this.el && !0 !== t && this.mask(this.el), this) : void 0;
                                },
                                unmaskedvalue: function(e) {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    void 0 === this.el || void 0 !== e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        c.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, s.getBuffer.call(this), 0, this.opts);
                                    }
                                    return c.unmaskedvalue.call(this, this.el);
                                },
                                remove: function() {
                                    if (this.el) {
                                        n.default.data(this.el, k, null);
                                        var e = this.opts.autoUnmask ? (0, c.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                                        e !== s.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                                        f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                            get: this.__valueGet,
                                            set: this.__valueSet,
                                            configurable: !0
                                        }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                                        this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                                    }
                                    return this.el;
                                },
                                getemptymask: function() {
                                    return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    s.getBufferTemplate.call(this).join("");
                                },
                                hasMaskedValue: function() {
                                    return !this.opts.autoUnmask;
                                },
                                isComplete: function() {
                                    return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    u.isComplete.call(this, s.getBuffer.call(this));
                                },
                                getmetadata: function() {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    Array.isArray(this.maskset.metadata)) {
                                        var e = l.getMaskTemplate.call(this, !0, 0, !1).join("");
                                        return this.maskset.metadata.forEach((function(t) {
                                            return t.mask !== e || (e = t, !1);
                                        })), e;
                                    }
                                    return this.maskset.metadata;
                                },
                                isValid: function(e) {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        c.checkVal.call(this, void 0, !0, !1, t);
                                    } else e = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                                    for (var i = s.getBuffer.call(this), a = s.determineLastRequiredPosition.call(this), n = i.length - 1; n > a && !s.isMask.call(this, n); n--) ;
                                    return i.splice(a, n + 1 - a), u.isComplete.call(this, i) && e === (this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join(""));
                                },
                                format: function(e, t) {
                                    this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                                    var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                    c.checkVal.call(this, void 0, !0, !1, i);
                                    var a = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                                    return t ? {
                                        value: a,
                                        metadata: this.getmetadata()
                                    } : a;
                                },
                                setValue: function(e) {
                                    this.el && (0, n.default)(this.el).trigger("setvalue", [ e ]);
                                },
                                analyseMask: o.analyseMask
                            }, y.extendDefaults = function(e) {
                                n.default.extend(!0, y.prototype.defaults, e);
                            }, y.extendDefinitions = function(e) {
                                n.default.extend(!0, y.prototype.definitions, e);
                            }, y.extendAliases = function(e) {
                                n.default.extend(!0, y.prototype.aliases, e);
                            }, y.format = function(e, t, i) {
                                return y(t).format(e, i);
                            }, y.unmask = function(e, t) {
                                return y(t).unmaskedvalue(e);
                            }, y.isValid = function(e, t) {
                                return y(t).isValid(e);
                            }, y.remove = function(e) {
                                "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask && e.inputmask.remove();
                                }));
                            }, y.setValue = function(e, t) {
                                "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask ? e.inputmask.setValue(t) : (0, n.default)(e).trigger("setvalue", [ t ]);
                                }));
                            }, y.dependencyLib = n.default, r.default.Inputmask = y;
                            var x = y;
                            t.default = x;
                        },
                        5296: function(e, t, i) {
                            function a(e) {
                                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, a(e);
                            }
                            var n = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                            function l(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var a = t[i];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                                    Object.defineProperty(e, a.key, a);
                                }
                            }
                            function s(e, t) {
                                if (t && ("object" === a(t) || "function" == typeof t)) return t;
                                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(e) {
                                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                }(e);
                            }
                            function u(e) {
                                var t = "function" == typeof Map ? new Map : void 0;
                                return u = function(e) {
                                    if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                                    var i;
                                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== t) {
                                        if (t.has(e)) return t.get(e);
                                        t.set(e, a);
                                    }
                                    function a() {
                                        return c(e, arguments, p(this).constructor);
                                    }
                                    return a.prototype = Object.create(e.prototype, {
                                        constructor: {
                                            value: a,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), d(a, e);
                                }, u(e);
                            }
                            function c(e, t, i) {
                                return c = f() ? Reflect.construct : function(e, t, i) {
                                    var a = [ null ];
                                    a.push.apply(a, t);
                                    var n = new (Function.bind.apply(e, a));
                                    return i && d(n, i.prototype), n;
                                }, c.apply(null, arguments);
                            }
                            function f() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }
                            function d(e, t) {
                                return d = Object.setPrototypeOf || function(e, t) {
                                    return e.__proto__ = t, e;
                                }, d(e, t);
                            }
                            function p(e) {
                                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e);
                                }, p(e);
                            }
                            function h(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var v = n.default.document;
                            if (o.default && v && v.head && v.head.attachShadow && n.default.customElements && void 0 === n.default.customElements.get("input-mask")) {
                                var m = function(e) {
                                    !function(e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                        Object.defineProperty(e, "prototype", {
                                            value: Object.create(t && t.prototype, {
                                                constructor: {
                                                    value: e,
                                                    writable: !0,
                                                    configurable: !0
                                                }
                                            }),
                                            writable: !1
                                        }), t && d(e, t);
                                    }(c, e);
                                    var t, i, a, n, o, u = (t = c, i = f(), function() {
                                        var e, a = p(t);
                                        if (i) {
                                            var n = p(this).constructor;
                                            e = Reflect.construct(a, arguments, n);
                                        } else e = a.apply(this, arguments);
                                        return s(this, e);
                                    });
                                    function c() {
                                        var e;
                                        !function(e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        }(this, c);
                                        var t = (e = u.call(this)).getAttributeNames(), i = e.attachShadow({
                                            mode: "closed"
                                        }), a = v.createElement("input");
                                        for (var n in a.type = "text", i.appendChild(a), t) Object.prototype.hasOwnProperty.call(t, n) && a.setAttribute(t[n], e.getAttribute(t[n]));
                                        var o = new r.default;
                                        return o.dataAttribute = "", o.mask(a), a.inputmask.shadowRoot = i, e;
                                    }
                                    return a = c, n && l(a.prototype, n), o && l(a, o), Object.defineProperty(a, "prototype", {
                                        writable: !1
                                    }), a;
                                }(u(HTMLElement));
                                n.default.customElements.define("input-mask", m);
                            }
                        },
                        2391: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.analyseMask = function(e, t, i) {
                                var a, o, l, s, u, c, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new n.default, v = [], m = [], g = !1;
                                function k(e, a, n) {
                                    n = void 0 !== n ? n : e.matches.length;
                                    var o = e.matches[n - 1];
                                    if (t) 0 === a.indexOf("[") || p && /\\d|\\s|\\w/i.test(a) || "." === a ? e.matches.splice(n++, 0, {
                                        fn: new RegExp(a, i.casing ? "i" : ""),
                                        static: !1,
                                        optionality: !1,
                                        newBlockMarker: void 0 === o ? "master" : o.def !== a,
                                        casing: null,
                                        def: a,
                                        placeholder: void 0,
                                        nativeDef: a
                                    }) : (p && (a = a[a.length - 1]), a.split("").forEach((function(t, a) {
                                        o = e.matches[n - 1], e.matches.splice(n++, 0, {
                                            fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                            static: !0,
                                            optionality: !1,
                                            newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                            casing: null,
                                            def: i.staticDefinitionSymbol || t,
                                            placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                            nativeDef: (p ? "'" : "") + t
                                        });
                                    }))), p = !1; else {
                                        var l = i.definitions && i.definitions[a] || i.usePrototypeDefinitions && r.default.prototype.definitions[a];
                                        l && !p ? e.matches.splice(n++, 0, {
                                            fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                                this.test = l.validator;
                                            } : new RegExp("."),
                                            static: l.static || !1,
                                            optionality: l.optional || !1,
                                            newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || a),
                                            casing: l.casing,
                                            def: l.definitionSymbol || a,
                                            placeholder: l.placeholder,
                                            nativeDef: a,
                                            generated: l.generated
                                        }) : (e.matches.splice(n++, 0, {
                                            fn: /[a-z]/i.test(i.staticDefinitionSymbol || a) ? new RegExp("[" + (i.staticDefinitionSymbol || a) + "]", i.casing ? "i" : "") : null,
                                            static: !0,
                                            optionality: !1,
                                            newBlockMarker: void 0 === o ? "master" : o.def !== a && !0 !== o.static,
                                            casing: null,
                                            def: i.staticDefinitionSymbol || a,
                                            placeholder: void 0 !== i.staticDefinitionSymbol ? a : void 0,
                                            nativeDef: (p ? "'" : "") + a
                                        }), p = !1);
                                    }
                                }
                                function y() {
                                    if (v.length > 0) {
                                        if (k(s = v[v.length - 1], o), s.isAlternator) {
                                            u = v.pop();
                                            for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                                            v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                                        }
                                    } else k(h, o);
                                }
                                function b(e) {
                                    var t = new n.default(!0);
                                    return t.openGroup = !1, t.matches = e, t;
                                }
                                function x() {
                                    if ((l = v.pop()).openGroup = !1, void 0 !== l) if (v.length > 0) {
                                        if ((s = v[v.length - 1]).matches.push(l), s.isAlternator) {
                                            for (var e = (u = v.pop()).matches[0].matches ? u.matches[0].matches.length : 1, t = 0; t < u.matches.length; t++) u.matches[t].isGroup = !1, 
                                            u.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (u.matches[t].matches ? u.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                                            e = u.matches[t].matches ? u.matches[t].matches.length : 1;
                                            v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                                        }
                                    } else h.matches.push(l); else y();
                                }
                                function P(e) {
                                    var t = e.pop();
                                    return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                                }
                                t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                                for (;a = t ? d.exec(e) : f.exec(e); ) {
                                    if (o = a[0], t) {
                                        switch (o.charAt(0)) {
                                          case "?":
                                            o = "{0,1}";
                                            break;

                                          case "+":
                                          case "*":
                                            o = "{" + o + "}";
                                            break;

                                          case "|":
                                            if (0 === v.length) {
                                                var E = b(h.matches);
                                                E.openGroup = !0, v.push(E), h.matches = [], g = !0;
                                            }
                                        }
                                        if ("\\d" === o) o = "[0-9]";
                                    }
                                    if (p) y(); else switch (o.charAt(0)) {
                                      case "$":
                                      case "^":
                                        t || y();
                                        break;

                                      case i.escapeChar:
                                        p = !0, t && y();
                                        break;

                                      case i.optionalmarker[1]:
                                      case i.groupmarker[1]:
                                        x();
                                        break;

                                      case i.optionalmarker[0]:
                                        v.push(new n.default(!1, !0));
                                        break;

                                      case i.groupmarker[0]:
                                        v.push(new n.default(!0));
                                        break;

                                      case i.quantifiermarker[0]:
                                        var S = new n.default(!1, !1, !0), _ = (o = o.replace(/[{}?]/g, "")).split("|"), w = _[0].split(","), M = isNaN(w[0]) ? w[0] : parseInt(w[0]), O = 1 === w.length ? M : isNaN(w[1]) ? w[1] : parseInt(w[1]), T = isNaN(_[1]) ? _[1] : parseInt(_[1]);
                                        "*" !== M && "+" !== M || (M = "*" === O ? 0 : 1), S.quantifier = {
                                            min: M,
                                            max: O,
                                            jit: T
                                        };
                                        var C = v.length > 0 ? v[v.length - 1].matches : h.matches;
                                        if ((a = C.pop()).isAlternator) {
                                            C.push(a), C = a.matches;
                                            var A = new n.default(!0), D = C.pop();
                                            C.push(A), C = A.matches, a = D;
                                        }
                                        a.isGroup || (a = b([ a ])), C.push(a), C.push(S);
                                        break;

                                      case i.alternatormarker:
                                        if (v.length > 0) {
                                            var j = (s = v[v.length - 1]).matches[s.matches.length - 1];
                                            c = s.openGroup && (void 0 === j.matches || !1 === j.isGroup && !1 === j.isAlternator) ? v.pop() : P(s.matches);
                                        } else c = P(h.matches);
                                        if (c.isAlternator) v.push(c); else if (c.alternatorGroup ? (u = v.pop(), c.alternatorGroup = !1) : u = new n.default(!1, !1, !1, !0), 
                                        u.matches.push(c), v.push(u), c.openGroup) {
                                            c.openGroup = !1;
                                            var B = new n.default(!0);
                                            B.alternatorGroup = !0, v.push(B);
                                        }
                                        break;

                                      default:
                                        y();
                                    }
                                }
                                g && x();
                                for (;v.length > 0; ) l = v.pop(), h.matches.push(l);
                                h.matches.length > 0 && (!function e(a) {
                                    a && a.matches && a.matches.forEach((function(n, r) {
                                        var o = a.matches[r + 1];
                                        (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && n && n.isGroup && (n.isGroup = !1, 
                                        t || (k(n, i.groupmarker[0], 0), !0 !== n.openGroup && k(n, i.groupmarker[1]))), 
                                        e(n);
                                    }));
                                }(h), m.push(h));
                                (i.numericInput || i.isRTL) && function e(t) {
                                    for (var a in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, a)) {
                                        var n = parseInt(a);
                                        if (t.matches[a].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                                            var r = t.matches[a];
                                            t.matches.splice(a, 1), t.matches.splice(n + 1, 0, r);
                                        }
                                        void 0 !== t.matches[a].matches ? t.matches[a] = e(t.matches[a]) : t.matches[a] = ((o = t.matches[a]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                                        o);
                                    }
                                    var o;
                                    return t;
                                }(m[0]);
                                return m;
                            }, t.generateMaskSet = function(e, t) {
                                var i;
                                function n(e, i, n) {
                                    var o, l, s = !1;
                                    if (null !== e && "" !== e || ((s = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, 
                                    e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), 
                                    n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
                                        var u = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                                        e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + u + "," + n.repeat + n.quantifiermarker[1];
                                    }
                                    return l = s ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e, 
                                    null !== n.keepStatic && (l = "ks_" + n.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (o = {
                                        mask: e,
                                        maskToken: r.default.prototype.analyseMask(e, s, n),
                                        validPositions: {},
                                        _buffer: void 0,
                                        buffer: void 0,
                                        tests: {},
                                        excludes: {},
                                        metadata: i,
                                        maskLength: void 0,
                                        jitOffset: {}
                                    }, !0 !== t && (r.default.prototype.masksCache[l] = o, o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                                    o;
                                }
                                "function" == typeof e.mask && (e.mask = e.mask(e));
                                if (Array.isArray(e.mask)) {
                                    if (e.mask.length > 1) {
                                        null === e.keepStatic && (e.keepStatic = !0);
                                        var o = e.groupmarker[0];
                                        return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                            o.length > 1 && (o += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? o += t.mask : o += t;
                                        })), n(o += e.groupmarker[1], e.mask, e);
                                    }
                                    e.mask = e.mask.pop();
                                }
                                i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e);
                                null === e.keepStatic && (e.keepStatic = !1);
                                return i;
                            };
                            var a = o(i(4963)), n = o(i(9695)), r = o(i(2394));
                            function o(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                        },
                        157: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.mask = function() {
                                var e = this, t = this.opts, i = this.el, a = this.dependencyLib;
                                l.EventRuler.off(i);
                                var f = function(t, i) {
                                    "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.default.ENTER);
                                    var s = t.getAttribute("type"), u = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                                    if (!u) if ("input" === t.tagName.toLowerCase()) {
                                        var c = document.createElement("input");
                                        c.setAttribute("type", s), u = "text" === c.type, c = null;
                                    } else u = "partial";
                                    return !1 !== u ? function(t) {
                                        var n, s;
                                        function u() {
                                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== r.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, r.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, r.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                                        }
                                        function c(e) {
                                            s.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                                        }
                                        if (!t.inputmask.__valueGet) {
                                            if (!0 !== i.noValuePatching) {
                                                if (Object.getOwnPropertyDescriptor) {
                                                    var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                                    f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                                        get: u,
                                                        set: c,
                                                        configurable: !0
                                                    })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                                        return this.textContent;
                                                    }, s = function(e) {
                                                        this.textContent = e;
                                                    }, Object.defineProperty(t, "value", {
                                                        get: u,
                                                        set: c,
                                                        configurable: !0
                                                    }));
                                                } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                                s = t.__lookupSetter__("value"), t.__defineGetter__("value", u), t.__defineSetter__("value", c));
                                                t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                                            }
                                            t.inputmask._valueGet = function(t) {
                                                return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                            }, t.inputmask._valueSet = function(t, i) {
                                                s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                            }, void 0 === n && (n = function() {
                                                return this.value;
                                            }, s = function(e) {
                                                this.value = e;
                                            }, function(t) {
                                                if (a.valHooks && (void 0 === a.valHooks[t] || !0 !== a.valHooks[t].inputmaskpatch)) {
                                                    var n = a.valHooks[t] && a.valHooks[t].get ? a.valHooks[t].get : function(e) {
                                                        return e.value;
                                                    }, l = a.valHooks[t] && a.valHooks[t].set ? a.valHooks[t].set : function(e, t) {
                                                        return e.value = t, e;
                                                    };
                                                    a.valHooks[t] = {
                                                        get: function(t) {
                                                            if (t.inputmask) {
                                                                if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                                var a = n(t);
                                                                return -1 !== r.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? a : "";
                                                            }
                                                            return n(t);
                                                        },
                                                        set: function(e, t) {
                                                            var i = l(e, t);
                                                            return e.inputmask && (0, o.applyInputValue)(e, t), i;
                                                        },
                                                        inputmaskpatch: !0
                                                    };
                                                }
                                            }(t.type), function(t) {
                                                l.EventRuler.on(t, "mouseenter", (function() {
                                                    var t = this.inputmask._valueGet(!0);
                                                    t !== (e.isRTL ? r.getBuffer.call(e).reverse() : r.getBuffer.call(e)).join("") && (0, 
                                                    o.applyInputValue)(this, t);
                                                }));
                                            }(t));
                                        }
                                    }(t) : t.inputmask = void 0, u;
                                }(i, t);
                                if (!1 !== f) {
                                    e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                                    -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                                    i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                                    s.iphone && (t.insertModeVisual = !1), l.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                                    l.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), l.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                                    l.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), l.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                                    l.EventRuler.on(i, "click", c.EventHandlers.clickEvent), l.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                                    l.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), l.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                                    l.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), l.EventRuler.on(i, "complete", t.oncomplete), 
                                    l.EventRuler.on(i, "incomplete", t.onincomplete), l.EventRuler.on(i, "cleared", t.oncleared), 
                                    !0 !== t.inputEventOnly && (l.EventRuler.on(i, "keydown", c.EventHandlers.keydownEvent), 
                                    l.EventRuler.on(i, "keypress", c.EventHandlers.keypressEvent), l.EventRuler.on(i, "keyup", c.EventHandlers.keyupEvent)), 
                                    (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), l.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent), 
                                    l.EventRuler.on(i, "compositionend", c.EventHandlers.compositionendEvent)), l.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), 
                                    r.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                                    var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                                    if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                                        (0, o.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                                        var p = r.getBuffer.call(e).slice();
                                        !1 === u.isComplete.call(e, p) && t.clearIncomplete && r.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === r.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), 
                                        (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                                        o.writeBuffer)(i, p), d === i && r.caret.call(e, i, r.seekNext.call(e, r.getLastValidPosition.call(e)));
                                    }
                                }
                            };
                            var a, n = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, r = i(8711), o = i(7760), l = i(9716), s = i(9845), u = i(7215), c = i(6030);
                        },
                        9695: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, i, a) {
                                this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                                this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = a || !1, 
                                this.quantifier = {
                                    min: 1,
                                    max: 1
                                };
                            };
                        },
                        3194: function() {
                            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                                value: function(e, t) {
                                    if (null == this) throw new TypeError('"this" is null or not defined');
                                    var i = Object(this), a = i.length >>> 0;
                                    if (0 === a) return !1;
                                    for (var n = 0 | t, r = Math.max(n >= 0 ? n : a - Math.abs(n), 0); r < a; ) {
                                        if (i[r] === e) return !0;
                                        r++;
                                    }
                                    return !1;
                                }
                            });
                        },
                        7149: function() {
                            function e(t) {
                                return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, e(t);
                            }
                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                                return e.__proto__;
                            } : function(e) {
                                return e.constructor.prototype;
                            });
                        },
                        8711: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.caret = function(e, t, i, a, n) {
                                var r, o = this, l = this.opts;
                                if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                                i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                                i = r.endOffset) : document.selection && document.selection.createRange && (r = document.selection.createRange(), 
                                t = 0 - r.duplicate().moveStart("character", -e.inputmask._valueGet().length), i = t + r.text.length), 
                                {
                                    begin: a ? t : u.call(o, t),
                                    end: a ? i : u.call(o, i)
                                };
                                if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                                void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                                "number" == typeof t) {
                                    t = a ? t : u.call(o, t), i = "number" == typeof (i = a ? i : u.call(o, i)) ? i : t;
                                    var s = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                                    if (e.scrollLeft = s > e.scrollWidth ? s : 0, e.inputmask.caretPos = {
                                        begin: t,
                                        end: i
                                    }, l.insertModeVisual && !1 === l.insertMode && t === i && (n || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                                        if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                            var c = document.createTextNode("");
                                            e.appendChild(c);
                                        }
                                        r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                                        r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                                        r.collapse(!0);
                                        var f = window.getSelection();
                                        f.removeAllRanges(), f.addRange(r);
                                    } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                                    r.moveStart("character", t), r.select());
                                }
                            }, t.determineLastRequiredPosition = function(e) {
                                var t, i, r = this, l = this.maskset, s = this.dependencyLib, u = a.getMaskTemplate.call(r, !0, o.call(r), !0, !0), c = u.length, f = o.call(r), d = {}, p = l.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                                for (t = f + 1; t < u.length; t++) i = a.getTestTemplate.call(r, t, h, t - 1), h = i.locator.slice(), 
                                d[t] = s.extend(!0, {}, i);
                                var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                                for (t = c - 1; t > f && ((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && n.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== a.getTests.call(r, t)[0].def)) && u[t] === a.getPlaceholder.call(r, t, i.match); t--) c--;
                                return e ? {
                                    l: c,
                                    def: d[c] ? d[c].match : void 0
                                } : c;
                            }, t.determineNewCaretPosition = function(e, t, i) {
                                var n = this, u = this.maskset, c = this.opts;
                                t && (n.isRTL ? e.end = e.begin : e.begin = e.end);
                                if (e.begin === e.end) {
                                    switch (i = i || c.positionCaretOnClick) {
                                      case "none":
                                        break;

                                      case "select":
                                        e = {
                                            begin: 0,
                                            end: r.call(n).length
                                        };
                                        break;

                                      case "ignore":
                                        e.end = e.begin = s.call(n, o.call(n));
                                        break;

                                      case "radixFocus":
                                        if (function(e) {
                                            if ("" !== c.radixPoint && 0 !== c.digits) {
                                                var t = u.validPositions;
                                                if (void 0 === t[e] || t[e].input === a.getPlaceholder.call(n, e)) {
                                                    if (e < s.call(n, -1)) return !0;
                                                    var i = r.call(n).indexOf(c.radixPoint);
                                                    if (-1 !== i) {
                                                        for (var o in t) if (t[o] && i < o && t[o].input !== a.getPlaceholder.call(n, o)) return !1;
                                                        return !0;
                                                    }
                                                }
                                            }
                                            return !1;
                                        }(e.begin)) {
                                            var f = r.call(n).join("").indexOf(c.radixPoint);
                                            e.end = e.begin = c.numericInput ? s.call(n, f) : f;
                                            break;
                                        }

                                      default:
                                        var d = e.begin, p = o.call(n, d, !0), h = s.call(n, -1 !== p || l.call(n, 0) ? p : -1);
                                        if (d <= h) e.end = e.begin = l.call(n, d, !1, !0) ? d : s.call(n, d); else {
                                            var v = u.validPositions[p], m = a.getTestTemplate.call(n, h, v ? v.match.locator : void 0, v), g = a.getPlaceholder.call(n, h, m.match);
                                            if ("" !== g && r.call(n)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !l.call(n, h, c.keepStatic, !0) && m.match.def === g) {
                                                var k = s.call(n, h);
                                                (d >= k || d === h) && (h = k);
                                            }
                                            e.end = e.begin = h;
                                        }
                                    }
                                    return e;
                                }
                            }, t.getBuffer = r, t.getBufferTemplate = function() {
                                var e = this.maskset;
                                void 0 === e._buffer && (e._buffer = a.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                                return e._buffer;
                            }, t.getLastValidPosition = o, t.isMask = l, t.resetMaskSet = function(e) {
                                var t = this.maskset;
                                t.buffer = void 0, !0 !== e && (t.validPositions = {}, t.p = 0);
                            }, t.seekNext = s, t.seekPrevious = function(e, t) {
                                var i = this, n = e - 1;
                                if (e <= 0) return 0;
                                for (;n > 0 && (!0 === t && (!0 !== a.getTest.call(i, n).match.newBlockMarker || !l.call(i, n, void 0, !0)) || !0 !== t && !l.call(i, n, void 0, !0)); ) n--;
                                return n;
                            }, t.translatePosition = u;
                            var a = i(4713), n = i(7215);
                            function r(e) {
                                var t = this.maskset;
                                return void 0 !== t.buffer && !0 !== e || (t.buffer = a.getMaskTemplate.call(this, !0, o.call(this), !0), 
                                void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer;
                            }
                            function o(e, t, i) {
                                var a = this.maskset, n = -1, r = -1, o = i || a.validPositions;
                                for (var l in void 0 === e && (e = -1), o) {
                                    var s = parseInt(l);
                                    o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (n = s), s >= e && (r = s));
                                }
                                return -1 === n || n == e ? r : -1 == r || e - n < r - e ? n : r;
                            }
                            function l(e, t, i) {
                                var n = this, r = this.maskset, o = a.getTestTemplate.call(n, e).match;
                                if ("" === o.def && (o = a.getTest.call(n, e).match), !0 !== o.static) return o.fn;
                                if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                                if (!0 !== t && e > -1) {
                                    if (i) {
                                        var l = a.getTests.call(n, e);
                                        return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
                                    }
                                    var s = a.determineTestTemplate.call(n, e, a.getTests.call(n, e)), u = a.getPlaceholder.call(n, e, s.match);
                                    return s.match.def !== u;
                                }
                                return !1;
                            }
                            function s(e, t, i) {
                                var n = this;
                                void 0 === i && (i = !0);
                                for (var r = e + 1; "" !== a.getTest.call(n, r).match.def && (!0 === t && (!0 !== a.getTest.call(n, r).match.newBlockMarker || !l.call(n, r, void 0, !0)) || !0 !== t && !l.call(n, r, void 0, i)); ) r++;
                                return r;
                            }
                            function u(e) {
                                var t = this.opts, i = this.el;
                                return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = Math.abs(this._valueGet().length - e)), 
                                e;
                            }
                        },
                        4713: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.determineTestTemplate = u, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, a, n) {
                                var r = this, o = this.opts, c = this.maskset, f = o.greedy;
                                n && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                                t = t || 0;
                                var p, h, v, m, g = [], k = 0;
                                do {
                                    if (!0 === e && c.validPositions[k]) v = n && c.validPositions[k].match.optionality && void 0 === c.validPositions[k + 1] && (!0 === c.validPositions[k].generatedInput || c.validPositions[k].input == o.skipOptionalPartCharacter && k > 0) ? u.call(r, k, d.call(r, k, p, k - 1)) : c.validPositions[k], 
                                    h = v.match, p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : l.call(r, k, h)); else {
                                        v = s.call(r, k, p, k - 1), h = v.match, p = v.locator.slice();
                                        var y = !0 !== a && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                                        (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || c.validPositions[k - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && c.tests[k] && 1 === c.tests[k].length) || !1 === y || void 0 === y || "number" == typeof y && isFinite(y) && y > k ? g.push(!1 === i ? h.nativeDef : l.call(r, k, h)) : m = !1;
                                    }
                                    k++;
                                } while (!0 !== h.static || "" !== h.def || t > k);
                                "" === g[g.length - 1] && g.pop();
                                !1 === i && void 0 !== c.maskLength || (c.maskLength = k - 1);
                                return o.greedy = f, g;
                            }, t.getPlaceholder = l, t.getTest = c, t.getTestTemplate = s, t.getTests = d, t.isSubsetOf = f;
                            var a, n = (a = i(2394)) && a.__esModule ? a : {
                                default: a
                            };
                            function r(e, t) {
                                var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                                if ("" !== i) for (;i.length < t; ) i += "0";
                                return i;
                            }
                            function o(e) {
                                var t = e.locator[e.alternation];
                                return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                            }
                            function l(e, t, i) {
                                var a = this.opts, n = this.maskset;
                                if (void 0 !== (t = t || c.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                                if (!0 === t.static) {
                                    if (e > -1 && void 0 === n.validPositions[e]) {
                                        var r, o = d.call(this, e), l = [];
                                        if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var s = 0; s < o.length; s++) if ("" !== o[s].match.def && !0 !== o[s].match.optionality && !0 !== o[s].match.optionalQuantifier && (!0 === o[s].match.static || void 0 === r || !1 !== o[s].match.fn.test(r.match.def, n, e, !0, a)) && (l.push(o[s]), 
                                        !0 === o[s].match.static && (r = o[s]), l.length > 1 && /[0-9a-bA-Z]/.test(l[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
                                    }
                                    return t.def;
                                }
                                return a.placeholder.charAt(e % a.placeholder.length);
                            }
                            function s(e, t, i) {
                                return this.maskset.validPositions[e] || u.call(this, e, d.call(this, e, t ? t.slice() : t, i));
                            }
                            function u(e, t) {
                                var i = this.opts, a = function(e, t) {
                                    var i = 0, a = !1;
                                    t.forEach((function(e) {
                                        e.match.optionality && (0 !== i && i !== e.match.optionality && (a = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                                    })), i && (0 == e || 1 == t.length ? i = 0 : a || (i = 0));
                                    return i;
                                }(e, t);
                                e = e > 0 ? e - 1 : 0;
                                var n, o, l, s = r(c.call(this, e));
                                i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && t.pop();
                                for (var u = 0; u < t.length; u++) {
                                    var f = t[u];
                                    n = r(f, s.length);
                                    var d = Math.abs(n - s);
                                    (void 0 === o || "" !== n && d < o || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, 
                                    l = f);
                                }
                                return l;
                            }
                            function c(e, t) {
                                var i = this.maskset;
                                return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
                            }
                            function f(e, t, i) {
                                function a(e) {
                                    for (var t, i = [], a = -1, n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (t = e.charCodeAt(n + 1); ++a < t; ) i.push(String.fromCharCode(a)); else a = e.charCodeAt(n), 
                                    i.push(e.charAt(n));
                                    return i.join("");
                                }
                                return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== a(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g, "")));
                            }
                            function d(e, t, i) {
                                var a, r, o = this, l = this.dependencyLib, s = this.maskset, c = this.opts, d = this.el, p = s.maskToken, h = t ? i : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, k = t ? t.join("") : "";
                                function y(t, i, r, o) {
                                    function l(r, o, u) {
                                        function p(e, t) {
                                            var i = 0 === t.matches.indexOf(e);
                                            return i || t.matches.every((function(a, n) {
                                                return !0 === a.isQuantifier ? i = p(e, t.matches[n - 1]) : Object.prototype.hasOwnProperty.call(a, "matches") && (i = p(e, a)), 
                                                !i;
                                            })), i;
                                        }
                                        function v(e, t, i) {
                                            var a, n;
                                            if ((s.tests[e] || s.validPositions[e]) && (s.tests[e] || [ s.validPositions[e] ]).every((function(e, r) {
                                                if (e.mloc[t]) return a = e, !1;
                                                var o = void 0 !== i ? i : e.alternation, l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                                return (void 0 === n || l < n) && -1 !== l && (a = e, n = l), !0;
                                            })), a) {
                                                var r = a.locator[a.alternation];
                                                return (a.mloc[t] || a.mloc[r] || a.locator).slice((void 0 !== i ? i : a.alternation) + 1);
                                            }
                                            return void 0 !== i ? v(e, t) : void 0;
                                        }
                                        function b(e, t) {
                                            var i = e.alternation, a = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                            if (!a && i > t.alternation) for (var n = t.alternation; n < i; n++) if (e.locator[n] !== t.locator[n]) {
                                                i = n, a = !0;
                                                break;
                                            }
                                            if (a) {
                                                e.mloc = e.mloc || {};
                                                var r = e.locator[i];
                                                if (void 0 !== r) {
                                                    if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                                    void 0 !== t) {
                                                        for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                                        e.locator[i] = Object.keys(e.mloc).join(",");
                                                    }
                                                    return !0;
                                                }
                                                e.alternation = void 0;
                                            }
                                            return !1;
                                        }
                                        function x(e, t) {
                                            if (e.locator.length !== t.locator.length) return !1;
                                            for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                            return !0;
                                        }
                                        if (h > e + c._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + s.mask;
                                        if (h === e && void 0 === r.matches) {
                                            if (m.push({
                                                match: r,
                                                locator: o.reverse(),
                                                cd: k,
                                                mloc: {}
                                            }), !r.optionality || void 0 !== u || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || n.default.prototype.definitions[r.nativeDef] && n.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                            g = !0, h = e;
                                        } else if (void 0 !== r.matches) {
                                            if (r.isGroup && u !== r) {
                                                if (r = l(t.matches[t.matches.indexOf(r) + 1], o, u)) return !0;
                                            } else if (r.isOptional) {
                                                var P = r, E = m.length;
                                                if (r = y(r, i, o, u)) {
                                                    if (m.forEach((function(e, t) {
                                                        t >= E && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                                    })), a = m[m.length - 1].match, void 0 !== u || !p(a, P)) return !0;
                                                    g = !0, h = e;
                                                }
                                            } else if (r.isAlternator) {
                                                var S, _ = r, w = [], M = m.slice(), O = o.length, T = !1, C = i.length > 0 ? i.shift() : -1;
                                                if (-1 === C || "string" == typeof C) {
                                                    var A, D = h, j = i.slice(), B = [];
                                                    if ("string" == typeof C) B = C.split(","); else for (A = 0; A < _.matches.length; A++) B.push(A.toString());
                                                    if (void 0 !== s.excludes[e]) {
                                                        for (var R = B.slice(), L = 0, I = s.excludes[e].length; L < I; L++) {
                                                            var F = s.excludes[e][L].toString().split(":");
                                                            o.length == F[1] && B.splice(B.indexOf(F[0]), 1);
                                                        }
                                                        0 === B.length && (delete s.excludes[e], B = R);
                                                    }
                                                    (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && D >= c.keepStatic) && (B = B.slice(0, 1));
                                                    for (var N = 0; N < B.length; N++) {
                                                        A = parseInt(B[N]), m = [], i = "string" == typeof C && v(h, A, O) || j.slice();
                                                        var V = _.matches[A];
                                                        if (V && l(V, [ A ].concat(o), u)) r = !0; else if (0 === N && (T = !0), V && V.matches && V.matches.length > _.matches[0].matches.length) break;
                                                        S = m.slice(), h = D, m = [];
                                                        for (var G = 0; G < S.length; G++) {
                                                            var H = S[G], K = !1;
                                                            H.match.jit = H.match.jit || T, H.alternation = H.alternation || O, b(H);
                                                            for (var U = 0; U < w.length; U++) {
                                                                var $ = w[U];
                                                                if ("string" != typeof C || void 0 !== H.alternation && B.includes(H.locator[H.alternation].toString())) {
                                                                    if (H.match.nativeDef === $.match.nativeDef) {
                                                                        K = !0, b($, H);
                                                                        break;
                                                                    }
                                                                    if (f(H, $, c)) {
                                                                        b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H));
                                                                        break;
                                                                    }
                                                                    if (f($, H, c)) {
                                                                        b($, H);
                                                                        break;
                                                                    }
                                                                    if (Z = $, !0 === (Q = H).match.static && !0 !== Z.match.static && Z.match.fn.test(Q.match.def, s, e, !1, c, !1)) {
                                                                        x(H, $) || void 0 !== d.inputmask.userOptions.keepStatic ? b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H)) : c.keepStatic = !0;
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                            K || w.push(H);
                                                        }
                                                    }
                                                    m = M.concat(w), h = e, g = m.length > 0, r = w.length > 0, i = j.slice();
                                                } else r = l(_.matches[C] || t.matches[C], [ C ].concat(o), u);
                                                if (r) return !0;
                                            } else if (r.isQuantifier && u !== t.matches[t.matches.indexOf(r) - 1]) for (var q = r, z = i.length > 0 ? i.shift() : 0; z < (isNaN(q.quantifier.max) ? z + 1 : q.quantifier.max) && h <= e; z++) {
                                                var W = t.matches[t.matches.indexOf(q) - 1];
                                                if (r = l(W, [ z ].concat(o), W)) {
                                                    if ((a = m[m.length - 1].match).optionalQuantifier = z >= q.quantifier.min, a.jit = (z + 1) * (W.matches.indexOf(a) + 1) > q.quantifier.jit, 
                                                    a.optionalQuantifier && p(a, W)) {
                                                        g = !0, h = e;
                                                        break;
                                                    }
                                                    return a.jit && (s.jitOffset[e] = W.matches.length - W.matches.indexOf(a)), !0;
                                                }
                                            } else if (r = y(r, i, o, u)) return !0;
                                        } else h++;
                                        var Q, Z;
                                    }
                                    for (var u = i.length > 0 ? i.shift() : 0; u < t.matches.length; u++) if (!0 !== t.matches[u].isQuantifier) {
                                        var p = l(t.matches[u], [ u ].concat(r), o);
                                        if (p && h === e) return p;
                                        if (h > e) break;
                                    }
                                }
                                if (e > -1) {
                                    if (void 0 === t) {
                                        for (var b, x = e - 1; void 0 === (b = s.validPositions[x] || s.tests[x]) && x > -1; ) x--;
                                        void 0 !== b && x > -1 && (v = function(e, t) {
                                            var i, a = [];
                                            return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (a = u.call(o, e, t.slice()).locator.slice()).length && (a = t[0].locator.slice()) : t.forEach((function(e) {
                                                "" !== e.def && (0 === a.length ? (i = e.alternation, a = e.locator.slice()) : e.locator[i] && -1 === a[i].toString().indexOf(e.locator[i]) && (a[i] += "," + e.locator[i]));
                                            }))), a;
                                        }(x, b), k = v.join(""), h = x);
                                    }
                                    if (s.tests[e] && s.tests[e][0].cd === k) return s.tests[e];
                                    for (var P = v.shift(); P < p.length; P++) if (y(p[P], v, [ P ]) && h === e || h > e) break;
                                }
                                return (0 === m.length || g) && m.push({
                                    match: {
                                        fn: null,
                                        static: !0,
                                        optionality: !1,
                                        casing: null,
                                        def: "",
                                        placeholder: ""
                                    },
                                    locator: [],
                                    mloc: {},
                                    cd: k
                                }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), 
                                r = s.tests[e]), m.forEach((function(e) {
                                    e.match.optionality = !1;
                                })), r;
                            }
                        },
                        7215: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                                for (var a, n = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], l = 0; l < o.length; l++) -1 !== (a = e.indexOf(o[l])) && e.splice(a, 1);
                                for (var s = 0; s < e.length; s++) if (n.includes(e[s])) {
                                    r = !0;
                                    break;
                                }
                                return r;
                            }, t.handleRemove = function(e, t, i, a, l) {
                                var u = this, c = this.maskset, f = this.opts;
                                if ((f.numericInput || u.isRTL) && (t === r.default.BACKSPACE ? t = r.default.DELETE : t === r.default.DELETE && (t = r.default.BACKSPACE), 
                                u.isRTL)) {
                                    var d = i.end;
                                    i.end = i.begin, i.begin = d;
                                }
                                var p, h = o.getLastValidPosition.call(u, void 0, !0);
                                i.end >= o.getBuffer.call(u).length && h >= i.end && (i.end = h + 1);
                                t === r.default.BACKSPACE ? i.end - i.begin < 1 && (i.begin = o.seekPrevious.call(u, i.begin)) : t === r.default.DELETE && i.begin === i.end && (i.end = o.isMask.call(u, i.end, !0, !0) ? i.end + 1 : o.seekNext.call(u, i.end) + 1);
                                if (!1 !== (p = m.call(u, i))) {
                                    if (!0 !== a && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(u, i.begin).match.def.indexOf("|")) {
                                        var v = s.call(u, !0);
                                        if (v) {
                                            var g = void 0 !== v.caret ? v.caret : v.pos ? o.seekNext.call(u, v.pos.begin ? v.pos.begin : v.pos) : o.getLastValidPosition.call(u, -1, !0);
                                            (t !== r.default.DELETE || i.begin > g) && i.begin;
                                        }
                                    }
                                    !0 !== a && (c.p = t === r.default.DELETE ? i.begin + p : i.begin, c.p = o.determineNewCaretPosition.call(u, {
                                        begin: c.p,
                                        end: c.p
                                    }, !1, !1 === f.insertMode && t === r.default.BACKSPACE ? "none" : void 0).begin);
                                }
                            }, t.isComplete = c, t.isSelection = f, t.isValid = d, t.refreshFromBuffer = h, 
                            t.revalidateMask = m;
                            var a, n = i(4713), r = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, o = i(8711), l = i(6030);
                            function s(e, t, i, a, r, l) {
                                var u, c, f, p, h, v, m, g, k, y, b, x = this, P = this.dependencyLib, E = this.opts, S = x.maskset, _ = P.extend(!0, {}, S.validPositions), w = P.extend(!0, {}, S.tests), M = !1, O = !1, T = void 0 !== r ? r : o.getLastValidPosition.call(x);
                                if (l && (y = l.begin, b = l.end, l.begin > l.end && (y = l.end, b = l.begin)), 
                                -1 === T && void 0 === r) u = 0, c = (p = n.getTest.call(x, u)).alternation; else for (;T >= 0; T--) if ((f = S.validPositions[T]) && void 0 !== f.alternation) {
                                    if (p && p.locator[f.alternation] !== f.locator[f.alternation]) break;
                                    u = T, c = S.validPositions[u].alternation, p = f;
                                }
                                if (void 0 !== c) {
                                    m = parseInt(u), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, 
                                    n.getDecisionTaker)(p) + ":" + p.alternation);
                                    var C = [], A = -1;
                                    for (h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (C.push(t), 
                                    A = C.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < y || h >= b) && C.push(v.input), 
                                    delete S.validPositions[h];
                                    for (-1 === A && void 0 !== t && (C.push(t), A = C.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                                        for (S.tests = {}, o.resetMaskSet.call(x, !0), M = !0, h = 0; h < C.length && (g = M.caret || o.getLastValidPosition.call(x, void 0, !0) + 1, 
                                        k = C[h], M = d.call(x, g, k, !1, a, !0)); h++) h === A && (O = M), 1 == e && M && (O = {
                                            caretPos: h
                                        });
                                        if (M) break;
                                        if (o.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, {}, _), 
                                        S.tests = P.extend(!0, {}, w), !S.excludes[m]) {
                                            O = s.call(x, e, t, i, a, m - 1, l);
                                            break;
                                        }
                                        var D = (0, n.getDecisionTaker)(p);
                                        if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                            O = s.call(x, e, t, i, a, m - 1, l);
                                            break;
                                        }
                                        for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                                    }
                                }
                                return O && !1 === E.keepStatic || delete S.excludes[m], O;
                            }
                            function u(e, t, i) {
                                var a = this.opts, n = this.maskset;
                                switch (a.casing || t.casing) {
                                  case "upper":
                                    e = e.toUpperCase();
                                    break;

                                  case "lower":
                                    e = e.toLowerCase();
                                    break;

                                  case "title":
                                    var o = n.validPositions[i - 1];
                                    e = 0 === i || o && o.input === String.fromCharCode(r.default.SPACE) ? e.toUpperCase() : e.toLowerCase();
                                    break;

                                  default:
                                    if ("function" == typeof a.casing) {
                                        var l = Array.prototype.slice.call(arguments);
                                        l.push(n.validPositions), e = a.casing.apply(this, l);
                                    }
                                }
                                return e;
                            }
                            function c(e) {
                                var t = this, i = this.opts, a = this.maskset;
                                if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                                if ("*" !== i.repeat) {
                                    var r = !1, l = o.determineLastRequiredPosition.call(t, !0), s = o.seekPrevious.call(t, l.l);
                                    if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
                                        r = !0;
                                        for (var u = 0; u <= s; u++) {
                                            var c = n.getTestTemplate.call(t, u).match;
                                            if (!0 !== c.static && void 0 === a.validPositions[u] && !0 !== c.optionality && !0 !== c.optionalQuantifier || !0 === c.static && e[u] !== n.getPlaceholder.call(t, u, c)) {
                                                r = !1;
                                                break;
                                            }
                                        }
                                    }
                                    return r;
                                }
                            }
                            function f(e) {
                                var t = this.opts.insertMode ? 0 : 1;
                                return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                            }
                            function d(e, t, i, a, r, l, p) {
                                var g = this, k = this.dependencyLib, y = this.opts, b = g.maskset;
                                i = !0 === i;
                                var x = e;
                                function P(e) {
                                    if (void 0 !== e) {
                                        if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                                        e.remove.sort((function(e, t) {
                                            return t.pos - e.pos;
                                        })).forEach((function(e) {
                                            m.call(g, {
                                                begin: e,
                                                end: e + 1
                                            });
                                        })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                                        e.insert.sort((function(e, t) {
                                            return e.pos - t.pos;
                                        })).forEach((function(e) {
                                            "" !== e.c && d.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                                        })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                            var t = e.refreshFromBuffer;
                                            h.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                                        }
                                        void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                                    }
                                    return e;
                                }
                                function E(t, i, r) {
                                    var l = !1;
                                    return n.getTests.call(g, t).every((function(s, c) {
                                        var d = s.match;
                                        if (o.getBuffer.call(g, !0), !1 !== (l = (!d.jit || void 0 !== b.validPositions[o.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, r, y, f.call(g, e)) : (i === d.def || i === y.skipOptionalPartCharacter) && "" !== d.def && {
                                            c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                                            pos: t
                                        }))) {
                                            var p = void 0 !== l.c ? l.c : i, h = t;
                                            return p = p === y.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, 
                                            !0 !== (l = P(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === m.call(g, e, k.extend({}, s, {
                                                input: u.call(g, p, d, h)
                                            }), a, h) && (l = !1), !1);
                                        }
                                        return !0;
                                    })), l;
                                }
                                void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                                var S = !0, _ = k.extend(!0, {}, b.validPositions);
                                if (!1 === y.keepStatic && void 0 !== b.excludes[x] && !0 !== r && !0 !== a) for (var w = x; w < (g.isRTL ? e.begin : e.end); w++) void 0 !== b.excludes[w] && (b.excludes[w] = void 0, 
                                delete b.tests[w]);
                                if ("function" == typeof y.preValidation && !0 !== a && !0 !== l && (S = P(S = y.preValidation.call(g, o.getBuffer.call(g), x, t, f.call(g, e), y, b, e, i || r))), 
                                !0 === S) {
                                    if (S = E(x, t, i), (!i || !0 === a) && !1 === S && !0 !== l) {
                                        var M = b.validPositions[x];
                                        if (!M || !0 !== M.match.static || M.match.def !== t && t !== y.skipOptionalPartCharacter) {
                                            if (y.insertMode || void 0 === b.validPositions[o.seekNext.call(g, x)] || e.end > x) {
                                                var O = !1;
                                                if (b.jitOffset[x] && void 0 === b.validPositions[o.seekNext.call(g, x)] && !1 !== (S = d.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== r && (S.caret = x), 
                                                O = !0), e.end > x && (b.validPositions[x] = void 0), !O && !o.isMask.call(g, x, y.keepStatic && 0 === x)) for (var T = x + 1, C = o.seekNext.call(g, x, !1, 0 !== x); T <= C; T++) if (!1 !== (S = E(T, t, i))) {
                                                    S = v.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                                    break;
                                                }
                                            }
                                        } else S = {
                                            caret: o.seekNext.call(g, x)
                                        };
                                    }
                                    !1 !== S || !y.keepStatic || !c.call(g, o.getBuffer.call(g)) && 0 !== x || i || !0 === r ? f.call(g, e) && b.tests[x] && b.tests[x].length > 1 && y.keepStatic && !i && !0 !== r && (S = s.call(g, !0)) : S = s.call(g, x, t, i, a, void 0, e), 
                                    !0 === S && (S = {
                                        pos: x
                                    });
                                }
                                if ("function" == typeof y.postValidation && !0 !== a && !0 !== l) {
                                    var A = y.postValidation.call(g, o.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, y, b, i, p);
                                    void 0 !== A && (S = !0 === A ? S : A);
                                }
                                S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === l ? (o.resetMaskSet.call(g, !0), 
                                b.validPositions = k.extend(!0, {}, _)) : v.call(g, void 0, x, !0);
                                var D = P(S);
                                void 0 !== g.maxLength && o.getBuffer.call(g).length > g.maxLength && !a && (o.resetMaskSet.call(g, !0), 
                                b.validPositions = k.extend(!0, {}, _), D = !1);
                                return D;
                            }
                            function p(e, t, i) {
                                for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), l = 0; l < o.length; l++) {
                                    if (o[l].match && (o[l].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[l].match.nativeDef === t.match.nativeDef || i.regex && !o[l].match.static && o[l].match.fn.test(t.input))) {
                                        r = !0;
                                        break;
                                    }
                                    if (o[l].match && o[l].match.def === t.match.nativeDef) {
                                        r = void 0;
                                        break;
                                    }
                                }
                                return !1 === r && void 0 !== a.jitOffset[e] && (r = p.call(this, e + a.jitOffset[e], t, i)), 
                                r;
                            }
                            function h(e, t, i) {
                                var a, n, r = this, s = this.maskset, u = this.opts, c = this.dependencyLib, f = u.skipOptionalPartCharacter, d = r.isRTL ? i.slice().reverse() : i;
                                if (u.skipOptionalPartCharacter = "", !0 === e) o.resetMaskSet.call(r), s.tests = {}, 
                                e = 0, t = i.length, n = o.determineNewCaretPosition.call(r, {
                                    begin: 0,
                                    end: 0
                                }, !1).begin; else {
                                    for (a = e; a < t; a++) delete s.validPositions[a];
                                    n = e;
                                }
                                var p = new c.Event("keypress");
                                for (a = e; a < t; a++) {
                                    p.keyCode = d[a].toString().charCodeAt(0), r.ignorable = !1;
                                    var h = l.EventHandlers.keypressEvent.call(r, p, !0, !1, !1, n);
                                    !1 !== h && void 0 !== h && (n = h.forwardPosition);
                                }
                                u.skipOptionalPartCharacter = f;
                            }
                            function v(e, t, i) {
                                var a = this, r = this.maskset, l = this.dependencyLib;
                                if (void 0 === e) for (e = t - 1; e > 0 && !r.validPositions[e]; e--) ;
                                for (var s = e; s < t; s++) if (void 0 === r.validPositions[s] && !o.isMask.call(a, s, !1)) if (0 == s ? n.getTest.call(a, s) : r.validPositions[s - 1]) {
                                    var u = n.getTests.call(a, s).slice();
                                    "" === u[u.length - 1].match.def && u.pop();
                                    var c, f = n.determineTestTemplate.call(a, s, u);
                                    if (f && (!0 !== f.match.jit || "master" === f.match.newBlockMarker && (c = r.validPositions[s + 1]) && !0 === c.match.optionalQuantifier) && ((f = l.extend({}, f, {
                                        input: n.getPlaceholder.call(a, s, f.match, !0) || f.match.def
                                    })).generatedInput = !0, m.call(a, s, f, !0), !0 !== i)) {
                                        var p = r.validPositions[t].input;
                                        return r.validPositions[t] = void 0, d.call(a, t, p, !0, !0);
                                    }
                                }
                            }
                            function m(e, t, i, a) {
                                var r = this, l = this.maskset, s = this.opts, u = this.dependencyLib;
                                function c(e, t, i) {
                                    var a = t[e];
                                    if (void 0 !== a && !0 === a.match.static && !0 !== a.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                                        var n = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                                        return n && r;
                                    }
                                    return !1;
                                }
                                var f = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                                if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, h !== v || s.insertMode && void 0 !== l.validPositions[a] && void 0 === i || void 0 === t || t.match.optionalQuantifier || t.match.optionality) {
                                    var g, k = u.extend(!0, {}, l.validPositions), y = o.getLastValidPosition.call(r, void 0, !0);
                                    for (l.p = h, g = y; g >= h; g--) delete l.validPositions[g], void 0 === t && delete l.tests[g + 1];
                                    var b, x, P = a, E = P;
                                    for (t && (l.validPositions[a] = u.extend(!0, {}, t), E++, P++), g = t ? v : v - 1; g <= y; g++) {
                                        if (void 0 !== (b = k[g]) && !0 !== b.generatedInput && (g >= v || g >= h && c(g, k, {
                                            begin: h,
                                            end: v
                                        }))) {
                                            for (;"" !== n.getTest.call(r, E).match.def; ) {
                                                if (!1 !== (x = p.call(r, E, b, s)) || "+" === b.match.def) {
                                                    "+" === b.match.def && o.getBuffer.call(r, !0);
                                                    var S = d.call(r, E, b.input, "+" !== b.match.def, !0);
                                                    if (m = !1 !== S, P = (S.pos || E) + 1, !m && x) break;
                                                } else m = !1;
                                                if (m) {
                                                    void 0 === t && b.match.static && g === e.begin && f++;
                                                    break;
                                                }
                                                if (!m && o.getBuffer.call(r), E > l.maskLength) break;
                                                E++;
                                            }
                                            "" == n.getTest.call(r, E).match.def && (m = !1), E = P;
                                        }
                                        if (!m) break;
                                    }
                                    if (!m) return l.validPositions = u.extend(!0, {}, k), o.resetMaskSet.call(r, !0), 
                                    !1;
                                } else t && n.getTest.call(r, a).match.cd === t.match.cd && (l.validPositions[a] = u.extend(!0, {}, t));
                                return o.resetMaskSet.call(r, !0), f;
                            }
                        },
                        5581: function(e) {
                            e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}');
                        }
                    }, t = {};
                    function i(a) {
                        var n = t[a];
                        if (void 0 !== n) return n.exports;
                        var r = t[a] = {
                            exports: {}
                        };
                        return e[a](r, r.exports, i), r.exports;
                    }
                    var a = {};
                    return function() {
                        var e, t = a;
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.default = void 0, i(3851), i(219), i(207), i(5296);
                        var n = ((e = i(2394)) && e.__esModule ? e : {
                            default: e
                        }).default;
                        t.default = n;
                    }(), a;
                }();
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        __webpack_require__(125);
        const inputMasks = document.querySelectorAll("input");
        if (inputMasks.length) modules_flsModules.inputmask = Inputmask().mask(inputMasks);
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (void 0 === delay) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (void 0 === axis) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = void 0 === _temp ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (void 0 === overrides) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (void 0 === options) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate) {
            if (void 0 === translate) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (void 0 === axis) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (void 0 === translate) translate = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === translateBounds) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            const translate = -snapGrid[snapIndex];
            swiper.updateProgress(translate);
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === threshold) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                const slide = dom(el);
                if (index < swiper.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (void 0 === base) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = dom(event.path[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (void 0 === base) base = "window";
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (void 0 === obj) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (void 0 === view) view = "current";
                if (void 0 === exact) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (void 0 === needUpdate) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (void 0 === deleteInstance) deleteInstance = true;
                if (void 0 === cleanStyles) cleanStyles = true;
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                let $el;
                if (el) {
                    $el = dom(el);
                    if (swiper.params.uniqueNavElements && "string" === typeof el && $el.length > 1 && 1 === swiper.$el.find(el).length) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                    if ($el[0] && "BUTTON" === $el[0].tagName) $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            }
            function update() {
                if (swiper.params.loop) return;
                const {$nextEl, $prevEl} = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on("init", (() => {
                init();
                update();
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            }));
            on("click", ((_s, e) => {
                const {$nextEl, $prevEl} = swiper.navigation;
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (true === isHidden) emit("navigationShow"); else emit("navigationHide");
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            }));
            Object.assign(swiper.navigation, {
                update,
                init,
                destroy
            });
        }
        function Autoplay(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            let timeout;
            swiper.autoplay = {
                running: false,
                paused: false
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            function run() {
                const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                let delay = swiper.params.autoplay.delay;
                if ($activeSlideEl.attr("data-swiper-autoplay")) delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
                const proceed = () => {
                    let autoplayResult;
                    if (swiper.params.autoplay.reverseDirection) if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isBeginning) {
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop(); else if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isEnd) {
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop();
                    if (swiper.params.cssMode && swiper.autoplay.running) run(); else if (false === autoplayResult) run();
                };
                clearTimeout(timeout);
                if (0 === delay) {
                    proceed();
                    return;
                }
                timeout = utils_nextTick((() => {
                    proceed();
                }), delay);
            }
            function start() {
                if ("undefined" !== typeof timeout) return false;
                if (swiper.autoplay.running) return false;
                swiper.autoplay.running = true;
                emit("autoplayStart");
                run();
                return true;
            }
            function stop() {
                if (!swiper.autoplay.running) return false;
                if ("undefined" === typeof timeout) return false;
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = void 0;
                }
                swiper.autoplay.running = false;
                emit("autoplayStop");
                return true;
            }
            function pause(speed) {
                if (!swiper.autoplay.running) return;
                if (swiper.autoplay.paused) return;
                if (timeout) clearTimeout(timeout);
                swiper.autoplay.paused = true;
                if (0 === speed || !swiper.params.autoplay.waitForTransition) {
                    swiper.autoplay.paused = false;
                    run();
                } else [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
                }));
            }
            function onVisibilityChange() {
                const document = ssr_window_esm_getDocument();
                if ("hidden" === document.visibilityState && swiper.autoplay.running) pause();
                if ("visible" === document.visibilityState && swiper.autoplay.paused) {
                    run();
                    swiper.autoplay.paused = false;
                }
            }
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
                if (e.target !== swiper.$wrapperEl[0]) return;
                [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                }));
                swiper.autoplay.paused = false;
                if (!swiper.autoplay.running) stop(); else run();
            }
            function onMouseEnter() {
                if (swiper.params.autoplay.disableOnInteraction) stop(); else {
                    emit("autoplayPause");
                    pause();
                }
                [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                }));
            }
            function onMouseLeave() {
                if (swiper.params.autoplay.disableOnInteraction) return;
                swiper.autoplay.paused = false;
                emit("autoplayResume");
                run();
            }
            function attachMouseEvents() {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.$el.on("mouseenter", onMouseEnter);
                    swiper.$el.on("mouseleave", onMouseLeave);
                }
            }
            function detachMouseEvents() {
                swiper.$el.off("mouseenter", onMouseEnter);
                swiper.$el.off("mouseleave", onMouseLeave);
            }
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    start();
                    const document = ssr_window_esm_getDocument();
                    document.addEventListener("visibilitychange", onVisibilityChange);
                    attachMouseEvents();
                }
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.autoplay.running) if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.autoplay.running) if (swiper.params.autoplay.disableOnInteraction) stop(); else pause();
            }));
            on("touchEnd", (() => {
                if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
            }));
            on("destroy", (() => {
                detachMouseEvents();
                if (swiper.autoplay.running) stop();
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            }));
            Object.assign(swiper.autoplay, {
                pause,
                run,
                start,
                stop
            });
        }
        function initSliders() {
            if (document.querySelector(".swiper")) new core(".swiper", {
                modules: [ Navigation, Autoplay ],
                observer: true,
                observeParents: true,
                slidesPerView: 5,
                spaceBetween: 54,
                autoHeight: false,
                speed: 500,
                loop: true,
                effect: "fade",
                autoplay: {
                    delay: 1e3,
                    disableOnInteraction: false
                },
                navigation: {
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                        autoHeight: true
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1268: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    }
                },
                on: {}
            });
            if (document.querySelector(".swiper2")) new core(".swiper2", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 6,
                spaceBetween: 25,
                autoHeight: false,
                speed: 800,
                loop: true,
                navigation: {
                    prevEl: ".swiper-button-prev2",
                    nextEl: ".swiper-button-next2"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                        autoHeight: true
                    },
                    490: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    767: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1150: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1600: {
                        slidesPerView: 6,
                        spaceBetween: 25
                    }
                },
                on: {}
            });
            if (document.querySelector(".swiper3")) new core(".swiper3", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 3,
                spaceBetween: 25,
                autoHeight: false,
                speed: 800,
                loop: true,
                navigation: {
                    prevEl: ".swiper-button-prev3",
                    nextEl: ".swiper-button-next3"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        autoHeight: true
                    },
                    490: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1150: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                },
                on: {}
            });
            if (document.querySelector(".swiper4")) new core(".swiper4", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 4,
                spaceBetween: 25,
                autoHeight: false,
                speed: 500,
                navigation: {
                    prevEl: ".swiper-button-prev4",
                    nextEl: ".swiper-button-next4"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        autoHeight: true
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1150: {
                        slidesPerView: 3
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                },
                on: {}
            });
            if (document.querySelector(".select-sto__services-slider")) new core(".select-sto__services-slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 5,
                spaceBetween: 10,
                autoplay: false,
                cssMode: true,
                navigation: {
                    prevEl: ".select-sto__services .swiper-button-prev",
                    nextEl: ".select-sto__services .swiper-button-next"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    767: {
                        slidesPerView: 2
                    },
                    1150: {
                        slidesPerView: 3
                    },
                    1300: {
                        slidesPerView: 5
                    }
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        const t = t => "object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t), e = (...i) => {
            let s = !1;
            "boolean" == typeof i[0] && (s = i.shift());
            let o = i[0];
            if (!o || "object" != typeof o) throw new Error("extendee must be an object");
            const n = i.slice(1), a = n.length;
            for (let i = 0; i < a; i++) {
                const a = n[i];
                for (let i in a) if (a.hasOwnProperty(i)) {
                    const n = a[i];
                    if (s && (Array.isArray(n) || t(n))) {
                        const t = Array.isArray(n) ? [] : {};
                        o[i] = e(!0, o.hasOwnProperty(i) ? o[i] : t, n);
                    } else o[i] = n;
                }
            }
            return o;
        }, i = (t, e = 1e4) => (t = parseFloat(t) || 0, Math.round((t + Number.EPSILON) * e) / e), s = function(t) {
            return !!(t && "object" == typeof t && t instanceof Element && t !== document.body) && !t.__Panzoom && (function(t) {
                const e = getComputedStyle(t)["overflow-y"], i = getComputedStyle(t)["overflow-x"], s = ("scroll" === e || "auto" === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1, o = ("scroll" === i || "auto" === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1;
                return s || o;
            }(t) ? t : s(t.parentNode));
        }, o = "undefined" != typeof window && window.ResizeObserver || class {
            constructor(t) {
                this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), 
                this.callback = t;
            }
            observe(t) {
                if (this.observables.some((e => e.el === t))) return;
                const e = {
                    el: t,
                    size: {
                        height: t.clientHeight,
                        width: t.clientWidth
                    }
                };
                this.observables.push(e);
            }
            unobserve(t) {
                this.observables = this.observables.filter((e => e.el !== t));
            }
            disconnect() {
                this.observables = [];
            }
            check() {
                const t = this.observables.filter((t => {
                    const e = t.el.clientHeight, i = t.el.clientWidth;
                    if (t.size.height !== e || t.size.width !== i) return t.size.height = e, t.size.width = i, 
                    !0;
                })).map((t => t.el));
                t.length > 0 && this.callback(t), window.requestAnimationFrame(this.boundCheck);
            }
        };
        class n {
            constructor(t) {
                this.id = self.Touch && t instanceof Touch ? t.identifier : -1, this.pageX = t.pageX, 
                this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY;
            }
        }
        const a = (t, e) => e ? Math.sqrt((e.clientX - t.clientX) ** 2 + (e.clientY - t.clientY) ** 2) : 0, r = (t, e) => e ? {
            clientX: (t.clientX + e.clientX) / 2,
            clientY: (t.clientY + e.clientY) / 2
        } : t;
        class h {
            constructor(t, {start: e = (() => !0), move: i = (() => {}), end: s = (() => {})} = {}) {
                this._element = t, this.startPointers = [], this.currentPointers = [], this._pointerStart = t => {
                    if (t.buttons > 0 && 0 !== t.button) return;
                    const e = new n(t);
                    this.currentPointers.some((t => t.id === e.id)) || this._triggerPointerStart(e, t) && (window.addEventListener("mousemove", this._move), 
                    window.addEventListener("mouseup", this._pointerEnd));
                }, this._touchStart = t => {
                    for (const e of Array.from(t.changedTouches || [])) this._triggerPointerStart(new n(e), t);
                }, this._move = t => {
                    const e = this.currentPointers.slice(), i = (t => "changedTouches" in t)(t) ? Array.from(t.changedTouches).map((t => new n(t))) : [ new n(t) ];
                    for (const t of i) {
                        const e = this.currentPointers.findIndex((e => e.id === t.id));
                        e < 0 || (this.currentPointers[e] = t);
                    }
                    this._moveCallback(e, this.currentPointers.slice(), t);
                }, this._triggerPointerEnd = (t, e) => {
                    const i = this.currentPointers.findIndex((e => e.id === t.id));
                    return !(i < 0) && (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), 
                    this._endCallback(t, e), !0);
                }, this._pointerEnd = t => {
                    t.buttons > 0 && 0 !== t.button || this._triggerPointerEnd(new n(t), t) && (window.removeEventListener("mousemove", this._move, {
                        passive: !1
                    }), window.removeEventListener("mouseup", this._pointerEnd, {
                        passive: !1
                    }));
                }, this._touchEnd = t => {
                    for (const e of Array.from(t.changedTouches || [])) this._triggerPointerEnd(new n(e), t);
                }, this._startCallback = e, this._moveCallback = i, this._endCallback = s, this._element.addEventListener("mousedown", this._pointerStart, {
                    passive: !1
                }), this._element.addEventListener("touchstart", this._touchStart, {
                    passive: !1
                }), this._element.addEventListener("touchmove", this._move, {
                    passive: !1
                }), this._element.addEventListener("touchend", this._touchEnd), this._element.addEventListener("touchcancel", this._touchEnd);
            }
            stop() {
                this._element.removeEventListener("mousedown", this._pointerStart, {
                    passive: !1
                }), this._element.removeEventListener("touchstart", this._touchStart, {
                    passive: !1
                }), this._element.removeEventListener("touchmove", this._move, {
                    passive: !1
                }), this._element.removeEventListener("touchend", this._touchEnd), this._element.removeEventListener("touchcancel", this._touchEnd), 
                window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd);
            }
            _triggerPointerStart(t, e) {
                return !!this._startCallback(t, e) && (this.currentPointers.push(t), this.startPointers.push(t), 
                !0);
            }
        }
        class l {
            constructor(t = {}) {
                this.options = e(!0, {}, t), this.plugins = [], this.events = {};
                for (const t of [ "on", "once" ]) for (const e of Object.entries(this.options[t] || {})) this[t](...e);
            }
            option(t, e, ...i) {
                t = String(t);
                let s = (o = t, n = this.options, o.split(".").reduce((function(t, e) {
                    return t && t[e];
                }), n));
                var o, n;
                return "function" == typeof s && (s = s.call(this, this, ...i)), void 0 === s ? e : s;
            }
            localize(t, e = []) {
                return t = (t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, ((t, i, s) => {
                    let o = "";
                    s ? o = this.option(`${i[0] + i.toLowerCase().substring(1)}.l10n.${s}`) : i && (o = this.option(`l10n.${i}`)), 
                    o || (o = t);
                    for (let t = 0; t < e.length; t++) o = o.split(e[t][0]).join(e[t][1]);
                    return o;
                }))).replace(/\{\{(.*)\}\}/, ((t, e) => e));
            }
            on(e, i) {
                if (t(e)) {
                    for (const t of Object.entries(e)) this.on(...t);
                    return this;
                }
                return String(e).split(" ").forEach((t => {
                    const e = this.events[t] = this.events[t] || [];
                    -1 == e.indexOf(i) && e.push(i);
                })), this;
            }
            once(e, i) {
                if (t(e)) {
                    for (const t of Object.entries(e)) this.once(...t);
                    return this;
                }
                return String(e).split(" ").forEach((t => {
                    const e = (...s) => {
                        this.off(t, e), i.call(this, this, ...s);
                    };
                    e._ = i, this.on(t, e);
                })), this;
            }
            off(e, i) {
                if (!t(e)) return e.split(" ").forEach((t => {
                    const e = this.events[t];
                    if (!e || !e.length) return this;
                    let s = -1;
                    for (let t = 0, o = e.length; t < o; t++) {
                        const o = e[t];
                        if (o && (o === i || o._ === i)) {
                            s = t;
                            break;
                        }
                    }
                    -1 != s && e.splice(s, 1);
                })), this;
                for (const t of Object.entries(e)) this.off(...t);
            }
            trigger(t, ...e) {
                for (const i of [ ...this.events[t] || [] ].slice()) if (i && !1 === i.call(this, this, ...e)) return !1;
                for (const i of [ ...this.events["*"] || [] ].slice()) if (i && !1 === i.call(this, t, this, ...e)) return !1;
                return !0;
            }
            attachPlugins(t) {
                const i = {};
                for (const [s, o] of Object.entries(t || {})) !1 === this.options[s] || this.plugins[s] || (this.options[s] = e({}, o.defaults || {}, this.options[s]), 
                i[s] = new o(this));
                for (const [t, e] of Object.entries(i)) e.attach(this);
                return this.plugins = Object.assign({}, this.plugins, i), this;
            }
            detachPlugins() {
                for (const t in this.plugins) {
                    let e;
                    (e = this.plugins[t]) && "function" == typeof e.detach && e.detach(this);
                }
                return this.plugins = {}, this;
            }
        }
        const c = {
            touch: !0,
            zoom: !0,
            pinchToZoom: !0,
            panOnlyZoomed: !1,
            lockAxis: !1,
            friction: .64,
            decelFriction: .88,
            zoomFriction: .74,
            bounceForce: .2,
            baseScale: 1,
            minScale: 1,
            maxScale: 2,
            step: .5,
            textSelection: !1,
            click: "toggleZoom",
            wheel: "zoom",
            wheelFactor: 42,
            wheelLimit: 5,
            draggableClass: "is-draggable",
            draggingClass: "is-dragging",
            ratio: 1
        };
        class d extends l {
            constructor(t, i = {}) {
                super(e(!0, {}, c, i)), this.state = "init", this.$container = t;
                for (const t of [ "onLoad", "onWheel", "onClick" ]) this[t] = this[t].bind(this);
                this.initLayout(), this.resetValues(), this.attachPlugins(d.Plugins), this.trigger("init"), 
                this.updateMetrics(), this.attachEvents(), this.trigger("ready"), !1 === this.option("centerOnStart") ? this.state = "ready" : this.panTo({
                    friction: 0
                }), t.__Panzoom = this;
            }
            initLayout() {
                const t = this.$container;
                if (!(t instanceof HTMLElement)) throw new Error("Panzoom: Container not found");
                const e = this.option("content") || t.querySelector(".panzoom__content");
                if (!e) throw new Error("Panzoom: Content not found");
                this.$content = e;
                let i = this.option("viewport") || t.querySelector(".panzoom__viewport");
                i || !1 === this.option("wrapInner") || (i = document.createElement("div"), i.classList.add("panzoom__viewport"), 
                i.append(...t.childNodes), t.appendChild(i)), this.$viewport = i || e.parentNode;
            }
            resetValues() {
                this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), 
                this.container = {
                    width: 0,
                    height: 0
                }, this.viewport = {
                    width: 0,
                    height: 0
                }, this.content = {
                    origWidth: 0,
                    origHeight: 0,
                    width: 0,
                    height: 0,
                    x: this.option("x", 0),
                    y: this.option("y", 0),
                    scale: this.option("baseScale")
                }, this.transform = {
                    x: 0,
                    y: 0,
                    scale: 1
                }, this.resetDragPosition();
            }
            onLoad(t) {
                this.updateMetrics(), this.panTo({
                    scale: this.option("baseScale"),
                    friction: 0
                }), this.trigger("load", t);
            }
            onClick(t) {
                if (t.defaultPrevented) return;
                if (this.option("textSelection") && window.getSelection().toString().length) return void t.stopPropagation();
                const e = this.$content.getClientRects()[0];
                if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(e.top - this.dragStart.rect.top) > 1 || Math.abs(e.left - this.dragStart.rect.left) > 1)) return t.preventDefault(), 
                void t.stopPropagation();
                !1 !== this.trigger("click", t) && this.option("zoom") && "toggleZoom" === this.option("click") && (t.preventDefault(), 
                t.stopPropagation(), this.zoomWithClick(t));
            }
            onWheel(t) {
                !1 !== this.trigger("wheel", t) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t);
            }
            zoomWithWheel(t) {
                void 0 === this.changedDelta && (this.changedDelta = 0);
                const e = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)), i = this.content.scale;
                let s = i * (100 + e * this.option("wheelFactor")) / 100;
                if (e < 0 && Math.abs(i - this.option("minScale")) < .01 || e > 0 && Math.abs(i - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(e), 
                s = i) : (this.changedDelta = 0, s = Math.max(Math.min(s, this.option("maxScale")), this.option("minScale"))), 
                this.changedDelta > this.option("wheelLimit")) return;
                if (t.preventDefault(), s === i) return;
                const o = this.$content.getBoundingClientRect(), n = t.clientX - o.left, a = t.clientY - o.top;
                this.zoomTo(s, {
                    x: n,
                    y: a
                });
            }
            zoomWithClick(t) {
                const e = this.$content.getClientRects()[0], i = t.clientX - e.left, s = t.clientY - e.top;
                this.toggleZoom({
                    x: i,
                    y: s
                });
            }
            attachEvents() {
                this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, {
                    passive: !1
                }), this.$container.addEventListener("click", this.onClick, {
                    passive: !1
                }), this.initObserver();
                const t = new h(this.$container, {
                    start: (e, i) => {
                        if (!this.option("touch")) return !1;
                        if (this.velocity.scale < 0) return !1;
                        const o = i.composedPath()[0];
                        if (!t.currentPointers.length) {
                            if (-1 !== [ "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].indexOf(o.nodeName)) return !1;
                            if (this.option("textSelection") && ((t, e, i) => {
                                const s = t.childNodes, o = document.createRange();
                                for (let t = 0; t < s.length; t++) {
                                    const n = s[t];
                                    if (n.nodeType !== Node.TEXT_NODE) continue;
                                    o.selectNodeContents(n);
                                    const a = o.getBoundingClientRect();
                                    if (e >= a.left && i >= a.top && e <= a.right && i <= a.bottom) return n;
                                }
                                return !1;
                            })(o, e.clientX, e.clientY)) return !1;
                        }
                        return !s(o) && !1 !== this.trigger("touchStart", i) && ("mousedown" === i.type && i.preventDefault(), 
                        this.state = "pointerdown", this.resetDragPosition(), this.dragPosition.midPoint = null, 
                        this.dragPosition.time = Date.now(), !0);
                    },
                    move: (e, i, s) => {
                        if ("pointerdown" !== this.state) return;
                        if (!1 === this.trigger("touchMove", s)) return void s.preventDefault();
                        if (i.length < 2 && !0 === this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale")) return;
                        if (i.length > 1 && (!this.option("zoom") || !1 === this.option("pinchToZoom"))) return;
                        const o = r(e[0], e[1]), n = r(i[0], i[1]), h = n.clientX - o.clientX, l = n.clientY - o.clientY, c = a(e[0], e[1]), d = a(i[0], i[1]), u = c && d ? d / c : 1;
                        this.dragOffset.x += h, this.dragOffset.y += l, this.dragOffset.scale *= u, this.dragOffset.time = Date.now() - this.dragPosition.time;
                        const f = 1 === this.dragStart.scale && this.option("lockAxis");
                        if (f && !this.lockAxis) {
                            if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void s.preventDefault();
                            const t = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                            this.lockAxis = t > 45 && t < 135 ? "y" : "x";
                        }
                        if ("xy" === f || "y" !== this.lockAxis) {
                            if (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), this.lockAxis && (this.dragOffset["x" === this.lockAxis ? "y" : "x"] = 0), 
                            this.$container.classList.add(this.option("draggingClass")), this.transform.scale === this.option("baseScale") && "y" === this.lockAxis || (this.dragPosition.x = this.dragStart.x + this.dragOffset.x), 
                            this.transform.scale === this.option("baseScale") && "x" === this.lockAxis || (this.dragPosition.y = this.dragStart.y + this.dragOffset.y), 
                            this.dragPosition.scale = this.dragStart.scale * this.dragOffset.scale, i.length > 1) {
                                const e = r(t.startPointers[0], t.startPointers[1]), i = e.clientX - this.dragStart.rect.x, s = e.clientY - this.dragStart.rect.y, {deltaX: o, deltaY: a} = this.getZoomDelta(this.content.scale * this.dragOffset.scale, i, s);
                                this.dragPosition.x -= o, this.dragPosition.y -= a, this.dragPosition.midPoint = n;
                            } else this.setDragResistance();
                            this.transform = {
                                x: this.dragPosition.x,
                                y: this.dragPosition.y,
                                scale: this.dragPosition.scale
                            }, this.startAnimation();
                        }
                    },
                    end: (e, i) => {
                        if ("pointerdown" !== this.state) return;
                        if (this._dragOffset = {
                            ...this.dragOffset
                        }, t.currentPointers.length) return void this.resetDragPosition();
                        if (this.state = "decel", this.friction = this.option("decelFriction"), this.recalculateTransform(), 
                        this.$container.classList.remove(this.option("draggingClass")), !1 === this.trigger("touchEnd", i)) return;
                        if ("decel" !== this.state) return;
                        const s = this.option("minScale");
                        if (this.transform.scale < s) return void this.zoomTo(s, {
                            friction: .64
                        });
                        const o = this.option("maxScale");
                        if (this.transform.scale - o > .01) {
                            const t = this.dragPosition.midPoint || e, i = this.$content.getClientRects()[0];
                            this.zoomTo(o, {
                                friction: .64,
                                x: t.clientX - i.left,
                                y: t.clientY - i.top
                            });
                        }
                    }
                });
                this.pointerTracker = t;
            }
            initObserver() {
                this.resizeObserver || (this.resizeObserver = new o((() => {
                    this.updateTimer || (this.updateTimer = setTimeout((() => {
                        const t = this.$container.getBoundingClientRect();
                        t.width && t.height ? ((Math.abs(t.width - this.container.width) > 1 || Math.abs(t.height - this.container.height) > 1) && (this.isAnimating() && this.endAnimation(!0), 
                        this.updateMetrics(), this.panTo({
                            x: this.content.x,
                            y: this.content.y,
                            scale: this.option("baseScale"),
                            friction: 0
                        })), this.updateTimer = null) : this.updateTimer = null;
                    }), this.updateRate));
                })), this.resizeObserver.observe(this.$container));
            }
            resetDragPosition() {
                this.lockAxis = null, this.friction = this.option("friction"), this.velocity = {
                    x: 0,
                    y: 0,
                    scale: 0
                };
                const {x: t, y: e, scale: i} = this.content;
                this.dragStart = {
                    rect: this.$content.getBoundingClientRect(),
                    x: t,
                    y: e,
                    scale: i
                }, this.dragPosition = {
                    ...this.dragPosition,
                    x: t,
                    y: e,
                    scale: i
                }, this.dragOffset = {
                    x: 0,
                    y: 0,
                    scale: 1,
                    time: 0
                };
            }
            updateMetrics(t) {
                !0 !== t && this.trigger("beforeUpdate");
                const e = this.$container, s = this.$content, o = this.$viewport, n = s instanceof HTMLImageElement, a = this.option("zoom"), r = this.option("resizeParent", a);
                let h = this.option("width"), l = this.option("height"), c = h || (d = s, Math.max(parseFloat(d.naturalWidth || 0), parseFloat(d.width && d.width.baseVal && d.width.baseVal.value || 0), parseFloat(d.offsetWidth || 0), parseFloat(d.scrollWidth || 0)));
                var d;
                let u = l || (t => Math.max(parseFloat(t.naturalHeight || 0), parseFloat(t.height && t.height.baseVal && t.height.baseVal.value || 0), parseFloat(t.offsetHeight || 0), parseFloat(t.scrollHeight || 0)))(s);
                Object.assign(s.style, {
                    width: h ? `${h}px` : "",
                    height: l ? `${l}px` : "",
                    maxWidth: "",
                    maxHeight: ""
                }), r && Object.assign(o.style, {
                    width: "",
                    height: ""
                });
                const f = this.option("ratio");
                c = i(c * f), u = i(u * f), h = c, l = u;
                const g = s.getBoundingClientRect(), p = o.getBoundingClientRect(), m = o == e ? p : e.getBoundingClientRect();
                let y = Math.max(o.offsetWidth, i(p.width)), v = Math.max(o.offsetHeight, i(p.height)), b = window.getComputedStyle(o);
                if (y -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight), v -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom), 
                this.viewport.width = y, this.viewport.height = v, a) {
                    if (Math.abs(c - g.width) > .1 || Math.abs(u - g.height) > .1) {
                        const t = ((t, e, i, s) => {
                            const o = Math.min(i / t || 0, s / e);
                            return {
                                width: t * o || 0,
                                height: e * o || 0
                            };
                        })(c, u, Math.min(c, g.width), Math.min(u, g.height));
                        h = i(t.width), l = i(t.height);
                    }
                    Object.assign(s.style, {
                        width: `${h}px`,
                        height: `${l}px`,
                        transform: ""
                    });
                }
                if (r && (Object.assign(o.style, {
                    width: `${h}px`,
                    height: `${l}px`
                }), this.viewport = {
                    ...this.viewport,
                    width: h,
                    height: l
                }), n && a && "function" != typeof this.options.maxScale) {
                    const t = this.option("maxScale");
                    this.options.maxScale = function() {
                        return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : t;
                    };
                }
                this.content = {
                    ...this.content,
                    origWidth: c,
                    origHeight: u,
                    fitWidth: h,
                    fitHeight: l,
                    width: h,
                    height: l,
                    scale: 1,
                    isZoomable: a
                }, this.container = {
                    width: m.width,
                    height: m.height
                }, !0 !== t && this.trigger("afterUpdate");
            }
            zoomIn(t) {
                this.zoomTo(this.content.scale + (t || this.option("step")));
            }
            zoomOut(t) {
                this.zoomTo(this.content.scale - (t || this.option("step")));
            }
            toggleZoom(t = {}) {
                const e = this.option("maxScale"), i = this.option("baseScale"), s = this.content.scale > i + .5 * (e - i) ? i : e;
                this.zoomTo(s, t);
            }
            zoomTo(t = this.option("baseScale"), {x: e = null, y: s = null} = {}) {
                t = Math.max(Math.min(t, this.option("maxScale")), this.option("minScale"));
                const o = i(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
                null === e && (e = this.content.width * o * .5), null === s && (s = this.content.height * o * .5);
                const {deltaX: n, deltaY: a} = this.getZoomDelta(t, e, s);
                e = this.content.x - n, s = this.content.y - a, this.panTo({
                    x: e,
                    y: s,
                    scale: t,
                    friction: this.option("zoomFriction")
                });
            }
            getZoomDelta(t, e = 0, i = 0) {
                const s = this.content.fitWidth * this.content.scale, o = this.content.fitHeight * this.content.scale, n = e > 0 && s ? e / s : 0, a = i > 0 && o ? i / o : 0;
                return {
                    deltaX: (this.content.fitWidth * t - s) * n,
                    deltaY: (this.content.fitHeight * t - o) * a
                };
            }
            panTo({x: t = this.content.x, y: e = this.content.y, scale: i, friction: s = this.option("friction"), ignoreBounds: o = !1} = {}) {
                if (i = i || this.content.scale || 1, !o) {
                    const {boundX: s, boundY: o} = this.getBounds(i);
                    s && (t = Math.max(Math.min(t, s.to), s.from)), o && (e = Math.max(Math.min(e, o.to), o.from));
                }
                this.friction = s, this.transform = {
                    ...this.transform,
                    x: t,
                    y: e,
                    scale: i
                }, s ? (this.state = "panning", this.velocity = {
                    x: (1 / this.friction - 1) * (t - this.content.x),
                    y: (1 / this.friction - 1) * (e - this.content.y),
                    scale: (1 / this.friction - 1) * (i - this.content.scale)
                }, this.startAnimation()) : this.endAnimation();
            }
            startAnimation() {
                this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame((() => this.animate()));
            }
            animate() {
                if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, 
                this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, 
                this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating()) this.setTransform(); else if ("pointerdown" !== this.state) return void this.endAnimation();
                this.rAF = requestAnimationFrame((() => this.animate()));
            }
            getBounds(t) {
                let e = this.boundX, s = this.boundY;
                if (void 0 !== e && void 0 !== s) return {
                    boundX: e,
                    boundY: s
                };
                e = {
                    from: 0,
                    to: 0
                }, s = {
                    from: 0,
                    to: 0
                }, t = t || this.transform.scale;
                const o = this.content.fitWidth * t, n = this.content.fitHeight * t, a = this.viewport.width, r = this.viewport.height;
                if (o < a) {
                    const t = i(.5 * (a - o));
                    e.from = t, e.to = t;
                } else e.from = i(a - o);
                if (n < r) {
                    const t = .5 * (r - n);
                    s.from = t, s.to = t;
                } else s.from = i(r - n);
                return {
                    boundX: e,
                    boundY: s
                };
            }
            setEdgeForce() {
                if ("decel" !== this.state) return;
                const t = this.option("bounceForce"), {boundX: e, boundY: i} = this.getBounds(Math.max(this.transform.scale, this.content.scale));
                let s, o, n, a;
                if (e && (s = this.content.x < e.from, o = this.content.x > e.to), i && (n = this.content.y < i.from, 
                a = this.content.y > i.to), s || o) {
                    let i = ((s ? e.from : e.to) - this.content.x) * t;
                    const o = this.content.x + (this.velocity.x + i) / this.friction;
                    o >= e.from && o <= e.to && (i += this.velocity.x), this.velocity.x = i, this.recalculateTransform();
                }
                if (n || a) {
                    let e = ((n ? i.from : i.to) - this.content.y) * t;
                    const s = this.content.y + (e + this.velocity.y) / this.friction;
                    s >= i.from && s <= i.to && (e += this.velocity.y), this.velocity.y = e, this.recalculateTransform();
                }
            }
            setDragResistance() {
                if ("pointerdown" !== this.state) return;
                const {boundX: t, boundY: e} = this.getBounds(this.dragPosition.scale);
                let i, s, o, n;
                if (t && (i = this.dragPosition.x < t.from, s = this.dragPosition.x > t.to), e && (o = this.dragPosition.y < e.from, 
                n = this.dragPosition.y > e.to), (i || s) && (!i || !s)) {
                    const e = i ? t.from : t.to, s = e - this.dragPosition.x;
                    this.dragPosition.x = e - .3 * s;
                }
                if ((o || n) && (!o || !n)) {
                    const t = o ? e.from : e.to, i = t - this.dragPosition.y;
                    this.dragPosition.y = t - .3 * i;
                }
            }
            setDragForce() {
                "pointerdown" === this.state && (this.velocity.x = this.dragPosition.x - this.content.x, 
                this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale);
            }
            recalculateTransform() {
                this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), 
                this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1);
            }
            isAnimating() {
                return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05));
            }
            setTransform(t) {
                let e, s, o;
                if (t ? (e = i(this.transform.x), s = i(this.transform.y), o = this.transform.scale, 
                this.content = {
                    ...this.content,
                    x: e,
                    y: s,
                    scale: o
                }) : (e = i(this.content.x), s = i(this.content.y), o = this.content.scale / (this.content.width / this.content.fitWidth), 
                this.content = {
                    ...this.content,
                    x: e,
                    y: s
                }), this.trigger("beforeTransform"), e = i(this.content.x), s = i(this.content.y), 
                t && this.option("zoom")) {
                    let t, n;
                    t = i(this.content.fitWidth * o), n = i(this.content.fitHeight * o), this.content.width = t, 
                    this.content.height = n, this.transform = {
                        ...this.transform,
                        width: t,
                        height: n,
                        scale: o
                    }, Object.assign(this.$content.style, {
                        width: `${t}px`,
                        height: `${n}px`,
                        maxWidth: "none",
                        maxHeight: "none",
                        transform: `translate3d(${e}px, ${s}px, 0) scale(1)`
                    });
                } else this.$content.style.transform = `translate3d(${e}px, ${s}px, 0) scale(${o})`;
                this.trigger("afterTransform");
            }
            endAnimation(t) {
                cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = {
                    x: 0,
                    y: 0,
                    scale: 0
                }, this.setTransform(!0), this.state = "ready", this.handleCursor(), !0 !== t && this.trigger("endAnimation");
            }
            handleCursor() {
                const t = this.option("draggableClass");
                t && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t) : this.$container.classList.add(t));
            }
            detachEvents() {
                this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, {
                    passive: !1
                }), this.$container.removeEventListener("click", this.onClick, {
                    passive: !1
                }), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), 
                this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
            }
            destroy() {
                "destroy" !== this.state && (this.state = "destroy", clearTimeout(this.updateTimer), 
                this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), 
                this.detachPlugins(), this.resetDragPosition());
            }
        }
        d.version = "4.0.27", d.Plugins = {};
        const u = (t, e) => {
            let i = 0;
            return function(...s) {
                const o = (new Date).getTime();
                if (!(o - i < e)) return i = o, t(...s);
            };
        };
        class f {
            constructor(t) {
                this.$container = null, this.$prev = null, this.$next = null, this.carousel = t, 
                this.onRefresh = this.onRefresh.bind(this);
            }
            option(t) {
                return this.carousel.option(`Navigation.${t}`);
            }
            createButton(t) {
                const e = document.createElement("button");
                e.setAttribute("title", this.carousel.localize(`{{${t.toUpperCase()}}}`));
                const i = this.option("classNames.button") + " " + this.option(`classNames.${t}`);
                return e.classList.add(...i.split(" ")), e.setAttribute("tabindex", "0"), e.innerHTML = this.carousel.localize(this.option(`${t}Tpl`)), 
                e.addEventListener("click", (e => {
                    e.preventDefault(), e.stopPropagation(), this.carousel["slide" + ("next" === t ? "Next" : "Prev")]();
                })), e;
            }
            build() {
                this.$container || (this.$container = document.createElement("div"), this.$container.classList.add(...this.option("classNames.main").split(" ")), 
                this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), 
                this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), 
                this.$container.appendChild(this.$prev));
            }
            onRefresh() {
                const t = this.carousel.pages.length;
                t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), 
                this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), 
                this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), 
                this.carousel.page >= t - 1 && this.$next.setAttribute("disabled", "")));
            }
            cleanup() {
                this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), 
                this.$next = null, this.$container && this.$container.remove(), this.$container = null;
            }
            attach() {
                this.carousel.on("refresh change", this.onRefresh);
            }
            detach() {
                this.carousel.off("refresh change", this.onRefresh), this.cleanup();
            }
        }
        f.defaults = {
            prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
            nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
            classNames: {
                main: "carousel__nav",
                button: "carousel__button",
                next: "is-next",
                prev: "is-prev"
            }
        };
        class g {
            constructor(t) {
                this.carousel = t, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), 
                this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), 
                this.onTargetChange = this.onTargetChange.bind(this);
            }
            addAsTargetFor(t) {
                this.target = this.carousel, this.nav = t, this.attachEvents();
            }
            addAsNavFor(t) {
                this.target = t, this.nav = this.carousel, this.attachEvents();
            }
            attachEvents() {
                this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), 
                this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), 
                this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange);
            }
            onNavReady() {
                this.onTargetChange(!0);
            }
            onNavClick(t, e, i) {
                const s = i.target.closest(".carousel__slide");
                if (!s) return;
                i.stopPropagation();
                const o = parseInt(s.dataset.index, 10), n = this.target.findPageForSlide(o);
                this.target.page !== n && this.target.slideTo(n, {
                    friction: this.friction
                }), this.markSelectedSlide(o);
            }
            onNavCreateSlide(t, e) {
                e.index === this.selectedIndex && this.markSelectedSlide(e.index);
            }
            onTargetChange() {
                const t = this.target.pages[this.target.page].indexes[0], e = this.nav.findPageForSlide(t);
                this.nav.slideTo(e), this.markSelectedSlide(t);
            }
            markSelectedSlide(t) {
                this.selectedIndex = t, [ ...this.nav.slides ].filter((t => t.$el && t.$el.classList.remove("is-nav-selected")));
                const e = this.nav.slides[t];
                e && e.$el && e.$el.classList.add("is-nav-selected");
            }
            attach(t) {
                const e = t.options.Sync;
                (e.target || e.nav) && (e.target ? this.addAsNavFor(e.target) : e.nav && this.addAsTargetFor(e.nav), 
                this.friction = e.friction);
            }
            detach() {
                this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), 
                this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), 
                this.target.off("change", this.onTargetChange));
            }
        }
        g.defaults = {
            friction: .92
        };
        const p = {
            Navigation: f,
            Dots: class {
                constructor(t) {
                    this.carousel = t, this.$list = null, this.events = {
                        change: this.onChange.bind(this),
                        refresh: this.onRefresh.bind(this)
                    };
                }
                buildList() {
                    if (this.carousel.pages.length < this.carousel.option("Dots.minSlideCount")) return;
                    const t = document.createElement("ol");
                    return t.classList.add("carousel__dots"), t.addEventListener("click", (t => {
                        if (!("page" in t.target.dataset)) return;
                        t.preventDefault(), t.stopPropagation();
                        const e = parseInt(t.target.dataset.page, 10), i = this.carousel;
                        e !== i.page && (i.pages.length < 3 && i.option("infinite") ? i[0 == e ? "slidePrev" : "slideNext"]() : i.slideTo(e));
                    })), this.$list = t, this.carousel.$container.appendChild(t), this.carousel.$container.classList.add("has-dots"), 
                    t;
                }
                removeList() {
                    this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), 
                    this.carousel.$container.classList.remove("has-dots");
                }
                rebuildDots() {
                    let t = this.$list;
                    const e = !!t, i = this.carousel.pages.length;
                    if (i < 2) return void (e && this.removeList());
                    e || (t = this.buildList());
                    const s = this.$list.children.length;
                    if (s > i) for (let t = i; t < s; t++) this.$list.removeChild(this.$list.lastChild); else {
                        for (let t = s; t < i; t++) {
                            const e = document.createElement("li");
                            e.classList.add("carousel__dot"), e.dataset.page = t, e.setAttribute("role", "button"), 
                            e.setAttribute("tabindex", "0"), e.setAttribute("title", this.carousel.localize("{{GOTO}}", [ [ "%d", t + 1 ] ])), 
                            e.addEventListener("keydown", (t => {
                                const i = t.code;
                                let s;
                                "Enter" === i || "NumpadEnter" === i ? s = e : "ArrowRight" === i ? s = e.nextSibling : "ArrowLeft" === i && (s = e.previousSibling), 
                                s && s.click();
                            })), this.$list.appendChild(e);
                        }
                        this.setActiveDot();
                    }
                }
                setActiveDot() {
                    if (!this.$list) return;
                    this.$list.childNodes.forEach((t => {
                        t.classList.remove("is-selected");
                    }));
                    const t = this.$list.childNodes[this.carousel.page];
                    t && t.classList.add("is-selected");
                }
                onChange() {
                    this.setActiveDot();
                }
                onRefresh() {
                    this.rebuildDots();
                }
                attach() {
                    this.carousel.on(this.events);
                }
                detach() {
                    this.removeList(), this.carousel.off(this.events), this.carousel = null;
                }
            },
            Sync: g
        };
        const m = {
            slides: [],
            preload: 0,
            slidesPerPage: "auto",
            initialPage: null,
            initialSlide: null,
            friction: .92,
            center: !0,
            infinite: !0,
            fill: !0,
            dragFree: !1,
            prefix: "",
            classNames: {
                viewport: "carousel__viewport",
                track: "carousel__track",
                slide: "carousel__slide",
                slideSelected: "is-selected"
            },
            l10n: {
                NEXT: "Next slide",
                PREV: "Previous slide",
                GOTO: "Go to slide #%d"
            }
        };
        class y extends l {
            constructor(t, i = {}) {
                if (super(i = e(!0, {}, m, i)), this.state = "init", this.$container = t, !(this.$container instanceof HTMLElement)) throw new Error("No root element provided");
                this.slideNext = u(this.slideNext.bind(this), 250), this.slidePrev = u(this.slidePrev.bind(this), 250), 
                this.init(), t.__Carousel = this;
            }
            init() {
                this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, 
                this.attachPlugins(y.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), 
                this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = `translate3d(${-1 * this.pages[this.page].left}px, 0px, 0) scale(1)`), 
                this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready");
            }
            initLayout() {
                const t = this.option("prefix"), e = this.option("classNames");
                this.$viewport = this.option("viewport") || this.$container.querySelector(`.${t}${e.viewport}`), 
                this.$viewport || (this.$viewport = document.createElement("div"), this.$viewport.classList.add(...(t + e.viewport).split(" ")), 
                this.$viewport.append(...this.$container.childNodes), this.$container.appendChild(this.$viewport)), 
                this.$track = this.option("track") || this.$container.querySelector(`.${t}${e.track}`), 
                this.$track || (this.$track = document.createElement("div"), this.$track.classList.add(...(t + e.track).split(" ")), 
                this.$track.append(...this.$viewport.childNodes), this.$viewport.appendChild(this.$track));
            }
            initSlides() {
                this.slides = [];
                this.$viewport.querySelectorAll(`.${this.option("prefix")}${this.option("classNames.slide")}`).forEach((t => {
                    const e = {
                        $el: t,
                        isDom: !0
                    };
                    this.slides.push(e), this.trigger("createSlide", e, this.slides.length);
                })), Array.isArray(this.options.slides) && (this.slides = e(!0, [ ...this.slides ], this.options.slides));
            }
            updateMetrics() {
                let t, e = 0, s = [];
                this.slides.forEach(((i, o) => {
                    const n = i.$el, a = i.isDom || !t ? this.getSlideMetrics(n) : t;
                    i.index = o, i.width = a, i.left = e, t = a, e += a, s.push(o);
                }));
                let o = Math.max(this.$track.offsetWidth, i(this.$track.getBoundingClientRect().width)), n = getComputedStyle(this.$track);
                o -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight), this.contentWidth = e, 
                this.viewportWidth = o;
                const a = [], r = this.option("slidesPerPage");
                if (Number.isInteger(r) && e > o) for (let t = 0; t < this.slides.length; t += r) a.push({
                    indexes: s.slice(t, t + r),
                    slides: this.slides.slice(t, t + r)
                }); else {
                    let t = 0, e = 0;
                    for (let i = 0; i < this.slides.length; i += 1) {
                        let s = this.slides[i];
                        (!a.length || e + s.width > o) && (a.push({
                            indexes: [],
                            slides: []
                        }), t = a.length - 1, e = 0), e += s.width, a[t].indexes.push(i), a[t].slides.push(s);
                    }
                }
                const h = this.option("center"), l = this.option("fill");
                a.forEach(((t, i) => {
                    t.index = i, t.width = t.slides.reduce(((t, e) => t + e.width), 0), t.left = t.slides[0].left, 
                    h && (t.left += .5 * (o - t.width) * -1), l && !this.option("infiniteX", this.option("infinite")) && e > o && (t.left = Math.max(t.left, 0), 
                    t.left = Math.min(t.left, e - o));
                }));
                const c = [];
                let d;
                a.forEach((t => {
                    const e = {
                        ...t
                    };
                    d && e.left === d.left ? (d.width += e.width, d.slides = [ ...d.slides, ...e.slides ], 
                    d.indexes = [ ...d.indexes, ...e.indexes ]) : (e.index = c.length, d = e, c.push(e));
                })), this.pages = c;
                let u = this.page;
                if (null === u) {
                    const t = this.option("initialSlide");
                    u = null !== t ? this.findPageForSlide(t) : parseInt(this.option("initialPage", 0), 10) || 0, 
                    c[u] || (u = c.length && u > c.length ? c[c.length - 1].index : 0), this.page = u, 
                    this.pageIndex = u;
                }
                this.updatePanzoom(), this.trigger("refresh");
            }
            getSlideMetrics(t) {
                if (!t) {
                    const e = this.slides[0];
                    (t = document.createElement("div")).dataset.isTestEl = 1, t.style.visibility = "hidden", 
                    t.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), 
                    e.customClass && t.classList.add(...e.customClass.split(" ")), this.$track.prepend(t);
                }
                let e = Math.max(t.offsetWidth, i(t.getBoundingClientRect().width));
                const s = t.currentStyle || window.getComputedStyle(t);
                return e = e + (parseFloat(s.marginLeft) || 0) + (parseFloat(s.marginRight) || 0), 
                t.dataset.isTestEl && t.remove(), e;
            }
            findPageForSlide(t) {
                t = parseInt(t, 10) || 0;
                const e = this.pages.find((e => e.indexes.indexOf(t) > -1));
                return e ? e.index : null;
            }
            slideNext() {
                this.slideTo(this.pageIndex + 1);
            }
            slidePrev() {
                this.slideTo(this.pageIndex - 1);
            }
            slideTo(t, e = {}) {
                const {x: i = -1 * this.setPage(t, !0), y: s = 0, friction: o = this.option("friction")} = e;
                this.Panzoom.content.x === i && !this.Panzoom.velocity.x && o || (this.Panzoom.panTo({
                    x: i,
                    y: s,
                    friction: o,
                    ignoreBounds: !0
                }), "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"));
            }
            initPanzoom() {
                this.Panzoom && this.Panzoom.destroy();
                const t = e(!0, {}, {
                    content: this.$track,
                    wrapInner: !1,
                    resizeParent: !1,
                    zoom: !1,
                    click: !1,
                    lockAxis: "x",
                    x: this.pages.length ? -1 * this.pages[this.page].left : 0,
                    centerOnStart: !1,
                    textSelection: () => this.option("textSelection", !1),
                    panOnlyZoomed: function() {
                        return this.content.width <= this.viewport.width;
                    }
                }, this.option("Panzoom"));
                this.Panzoom = new d(this.$container, t), this.Panzoom.on({
                    "*": (t, ...e) => this.trigger(`Panzoom.${t}`, ...e),
                    afterUpdate: () => {
                        this.updatePage();
                    },
                    beforeTransform: this.onBeforeTransform.bind(this),
                    touchEnd: this.onTouchEnd.bind(this),
                    endAnimation: () => {
                        this.trigger("settle");
                    }
                }), this.updateMetrics(), this.manageSlideVisiblity();
            }
            updatePanzoom() {
                this.Panzoom && (this.Panzoom.content = {
                    ...this.Panzoom.content,
                    fitWidth: this.contentWidth,
                    origWidth: this.contentWidth,
                    width: this.contentWidth
                }, this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = {
                    from: -1 * this.pages[this.pages.length - 1].left,
                    to: -1 * this.pages[0].left
                }), this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {
                    from: 0,
                    to: 0
                }, this.Panzoom.handleCursor());
            }
            manageSlideVisiblity() {
                const t = this.contentWidth, e = this.viewportWidth;
                let i = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0;
                const s = this.option("preload"), o = this.option("infiniteX", this.option("infinite")), n = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")), a = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
                this.slides.forEach((r => {
                    let h, l, c = 0;
                    h = i - n, l = i + e + a, h -= s * (e + n + a), l += s * (e + n + a);
                    const d = r.left + r.width > h && r.left < l;
                    h = i + t - n, l = i + t + e + a, h -= s * (e + n + a);
                    const u = o && r.left + r.width > h && r.left < l;
                    h = i - t - n, l = i - t + e + a, h -= s * (e + n + a);
                    const f = o && r.left + r.width > h && r.left < l;
                    u || d || f ? (this.createSlideEl(r), d && (c = 0), u && (c = -1), f && (c = 1), 
                    r.left + r.width > i && r.left <= i + e + a && (c = 0)) : this.removeSlideEl(r), 
                    r.hasDiff = c;
                }));
                let r = 0, h = 0;
                this.slides.forEach(((e, i) => {
                    let s = 0;
                    e.$el ? (i !== r || e.hasDiff ? s = h + e.hasDiff * t : h = 0, e.$el.style.left = Math.abs(s) > .1 ? `${h + e.hasDiff * t}px` : "", 
                    r++) : h += e.width;
                })), this.markSelectedSlides();
            }
            createSlideEl(t) {
                if (!t) return;
                if (t.$el) {
                    let e = t.$el.dataset.index;
                    if (!e || parseInt(e, 10) !== t.index) {
                        let e;
                        t.$el.dataset.index = t.index, t.$el.querySelectorAll("[data-lazy-srcset]").forEach((t => {
                            t.srcset = t.dataset.lazySrcset;
                        })), t.$el.querySelectorAll("[data-lazy-src]").forEach((t => {
                            let e = t.dataset.lazySrc;
                            t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = `url('${e}')`;
                        })), (e = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = `url('${e}')`), 
                        t.state = "ready";
                    }
                    return;
                }
                const e = document.createElement("div");
                e.dataset.index = t.index, e.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), 
                t.customClass && e.classList.add(...t.customClass.split(" ")), t.html && (e.innerHTML = t.html);
                const i = [];
                this.slides.forEach(((t, e) => {
                    t.$el && i.push(e);
                }));
                const s = t.index;
                let o = null;
                if (i.length) {
                    let t = i.reduce(((t, e) => Math.abs(e - s) < Math.abs(t - s) ? e : t));
                    o = this.slides[t];
                }
                return this.$track.insertBefore(e, o && o.$el ? o.index < t.index ? o.$el.nextSibling : o.$el : null), 
                t.$el = e, this.trigger("createSlide", t, s), t;
            }
            removeSlideEl(t) {
                t.$el && !t.isDom && (this.trigger("removeSlide", t), t.$el.remove(), t.$el = null);
            }
            markSelectedSlides() {
                const t = this.option("classNames.slideSelected"), e = "aria-hidden";
                this.slides.forEach(((i, s) => {
                    const o = i.$el;
                    if (!o) return;
                    const n = this.pages[this.page];
                    n && n.indexes && n.indexes.indexOf(s) > -1 ? (t && !o.classList.contains(t) && (o.classList.add(t), 
                    this.trigger("selectSlide", i)), o.removeAttribute(e)) : (t && o.classList.contains(t) && (o.classList.remove(t), 
                    this.trigger("unselectSlide", i)), o.setAttribute(e, !0));
                }));
            }
            updatePage() {
                this.updateMetrics(), this.slideTo(this.page, {
                    friction: 0
                });
            }
            onBeforeTransform() {
                this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), 
                this.manageSlideVisiblity();
            }
            manageInfiniteTrack() {
                const t = this.contentWidth, e = this.viewportWidth;
                if (!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t < e) return;
                const i = this.Panzoom;
                let s = !1;
                return i.content.x < -1 * (t - e) && (i.content.x += t, this.pageIndex = this.pageIndex - this.pages.length, 
                s = !0), i.content.x > e && (i.content.x -= t, this.pageIndex = this.pageIndex + this.pages.length, 
                s = !0), s && "pointerdown" === i.state && i.resetDragPosition(), s;
            }
            onTouchEnd(t, e) {
                const i = this.option("dragFree");
                if (!i && this.pages.length > 1 && t.dragOffset.time < 350 && Math.abs(t.dragOffset.y) < 1 && Math.abs(t.dragOffset.x) > 5) this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"](); else if (i) {
                    const [, e] = this.getPageFromPosition(-1 * t.transform.x);
                    this.setPage(e);
                } else this.slideToClosest();
            }
            slideToClosest(t = {}) {
                let [, e] = this.getPageFromPosition(-1 * this.Panzoom.content.x);
                this.slideTo(e, t);
            }
            getPageFromPosition(t) {
                const e = this.pages.length;
                this.option("center") && (t += .5 * this.viewportWidth);
                const i = Math.floor(t / this.contentWidth);
                t -= i * this.contentWidth;
                let s = this.slides.find((e => e.left <= t && e.left + e.width > t));
                if (s) {
                    let t = this.findPageForSlide(s.index);
                    return [ t, t + i * e ];
                }
                return [ 0, 0 ];
            }
            setPage(t, e) {
                let i = 0, s = parseInt(t, 10) || 0;
                const o = this.page, n = this.pageIndex, a = this.pages.length, r = this.contentWidth, h = this.viewportWidth;
                if (t = (s % a + a) % a, this.option("infiniteX", this.option("infinite")) && r > h) {
                    const o = Math.floor(s / a) || 0, n = r;
                    if (i = this.pages[t].left + o * n, !0 === e && a > 2) {
                        let t = -1 * this.Panzoom.content.x;
                        const e = i - n, o = i + n, r = Math.abs(t - i), h = Math.abs(t - e), l = Math.abs(t - o);
                        l < r && l <= h ? (i = o, s += a) : h < r && h < l && (i = e, s -= a);
                    }
                } else t = s = Math.max(0, Math.min(s, a - 1)), i = this.pages.length ? this.pages[t].left : 0;
                return this.page = t, this.pageIndex = s, null !== o && t !== o && (this.prevPage = o, 
                this.prevPageIndex = n, this.trigger("change", t, o)), i;
            }
            destroy() {
                this.state = "destroy", this.slides.forEach((t => {
                    this.removeSlideEl(t);
                })), this.slides = [], this.Panzoom.destroy(), this.detachPlugins();
            }
        }
        y.version = "4.0.27", y.Plugins = p;
        const v = !("undefined" == typeof window || !window.document || !window.document.createElement);
        let b = null;
        const x = [ "a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])' ], w = t => {
            if (t && v) {
                null === b && document.createElement("div").focus({
                    get preventScroll() {
                        return b = !0, !1;
                    }
                });
                try {
                    if (t.setActive) t.setActive(); else if (b) t.focus({
                        preventScroll: !0
                    }); else {
                        const e = window.pageXOffset || document.body.scrollTop, i = window.pageYOffset || document.body.scrollLeft;
                        t.focus(), document.body.scrollTo({
                            top: e,
                            left: i,
                            behavior: "auto"
                        });
                    }
                } catch (t) {}
            }
        };
        class fancybox_esm_$ {
            constructor(t) {
                this.fancybox = t, this.$container = null, this.state = "init";
                for (const t of [ "onPrepare", "onClosing", "onKeydown" ]) this[t] = this[t].bind(this);
                this.events = {
                    prepare: this.onPrepare,
                    closing: this.onClosing,
                    keydown: this.onKeydown
                };
            }
            onPrepare() {
                this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : !0 === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build();
            }
            onClosing() {
                this.Carousel && this.Carousel.Panzoom.detachEvents();
            }
            onKeydown(t, e) {
                e === t.option("Thumbs.key") && this.toggle();
            }
            build() {
                if (this.$container) return;
                const t = document.createElement("div");
                t.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(t, this.fancybox.$carousel.nextSibling), 
                this.Carousel = new y(t, e(!0, {
                    Dots: !1,
                    Navigation: !1,
                    Sync: {
                        friction: 0
                    },
                    infinite: !1,
                    center: !0,
                    fill: !0,
                    dragFree: !0,
                    slidesPerPage: 1,
                    preload: 1
                }, this.fancybox.option("Thumbs.Carousel"), {
                    Sync: {
                        target: this.fancybox.Carousel
                    },
                    slides: this.getSlides()
                })), this.Carousel.Panzoom.on("wheel", ((t, e) => {
                    e.preventDefault(), this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
                })), this.$container = t, this.state = "visible";
            }
            getSlides() {
                const t = [];
                for (const e of this.fancybox.items) {
                    const i = e.thumb;
                    i && t.push({
                        html: `<div class="fancybox__thumb" style="background-image:url('${i}')"></div>`,
                        customClass: `has-thumb has-${e.type || "image"}`
                    });
                }
                return t;
            }
            toggle() {
                "visible" === this.state ? this.hide() : "hidden" === this.state ? this.show() : this.build();
            }
            show() {
                "hidden" === this.state && (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), 
                this.state = "visible");
            }
            hide() {
                "visible" === this.state && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", 
                this.state = "hidden");
            }
            cleanup() {
                this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), 
                this.$container = null), this.state = "init";
            }
            attach() {
                this.fancybox.on(this.events);
            }
            detach() {
                this.fancybox.off(this.events), this.cleanup();
            }
        }
        fancybox_esm_$.defaults = {
            minSlideCount: 2,
            minScreenHeight: 500,
            autoStart: !0,
            key: "t",
            Carousel: {}
        };
        const C = (t, e) => {
            const i = new URL(t), s = new URLSearchParams(i.search);
            let o = new URLSearchParams;
            for (const [t, i] of [ ...s, ...Object.entries(e) ]) "t" === t ? o.set("start", parseInt(i)) : o.set(t, i);
            o = o.toString();
            let n = t.match(/#t=((.*)?\d+s)/);
            return n && (o += `#t=${n[1]}`), o;
        }, S = {
            video: {
                autoplay: !0,
                ratio: 16 / 9
            },
            youtube: {
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            vimeo: {
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            html5video: {
                tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
                format: ""
            }
        };
        class E {
            constructor(t) {
                this.fancybox = t;
                for (const t of [ "onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage" ]) this[t] = this[t].bind(this);
                this.events = {
                    init: this.onInit,
                    ready: this.onReady,
                    "Carousel.createSlide": this.onCreateSlide,
                    "Carousel.removeSlide": this.onRemoveSlide,
                    "Carousel.selectSlide": this.onSelectSlide,
                    "Carousel.unselectSlide": this.onUnselectSlide,
                    "Carousel.refresh": this.onRefresh
                };
            }
            onInit() {
                for (const t of this.fancybox.items) this.processType(t);
            }
            processType(t) {
                if (t.html) return t.src = t.html, t.type = "html", void delete t.html;
                const i = t.src || "";
                let s = t.type || this.fancybox.options.type, o = null;
                if (!i || "string" == typeof i) {
                    if (o = i.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                        const e = C(i, this.fancybox.option("Html.youtube")), n = encodeURIComponent(o[1]);
                        t.videoId = n, t.src = `https://www.youtube-nocookie.com/embed/${n}?${e}`, t.thumb = t.thumb || `https://i.ytimg.com/vi/${n}/mqdefault.jpg`, 
                        t.vendor = "youtube", s = "video";
                    } else if (o = i.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
                        const e = C(i, this.fancybox.option("Html.vimeo")), n = encodeURIComponent(o[1]);
                        t.videoId = n, t.src = `https://player.vimeo.com/video/${n}?${e}`, t.vendor = "vimeo", 
                        s = "video";
                    } else (o = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `//maps.google.${o[1]}/?ll=${(o[2] ? o[2] + "&z=" + Math.floor(o[3]) + (o[4] ? o[4].replace(/^\//, "&") : "") : o[4] + "").replace(/\?/, "&")}&output=${o[4] && o[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, 
                    s = "map") : (o = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `//maps.google.${o[1]}/maps?q=${o[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, 
                    s = "map");
                    s || ("#" === i.charAt(0) ? s = "inline" : (o = i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "html5video", 
                    t.format = t.format || "video/" + ("ogv" === o[1] ? "ogg" : o[1])) : i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : i.match(/\.(pdf)((\?|#).*)?$/i) && (s = "pdf")), 
                    t.type = s || this.fancybox.option("defaultType", "image"), "html5video" !== s && "video" !== s || (t.video = e({}, this.fancybox.option("Html.video"), t.video), 
                    t._width && t._height ? t.ratio = parseFloat(t._width) / parseFloat(t._height) : t.ratio = t.ratio || t.video.ratio || S.video.ratio);
                }
            }
            onReady() {
                this.fancybox.Carousel.slides.forEach((t => {
                    t.$el && (this.setContent(t), t.index === this.fancybox.getSlide().index && this.playVideo(t));
                }));
            }
            onCreateSlide(t, e, i) {
                "ready" === this.fancybox.state && this.setContent(i);
            }
            loadInlineContent(t) {
                let e;
                if (t.src instanceof HTMLElement) e = t.src; else if ("string" == typeof t.src) {
                    const i = t.src.split("#", 2), s = 2 === i.length && "" === i[0] ? i[1] : i[0];
                    e = document.getElementById(s);
                }
                if (e) {
                    if ("clone" === t.type || e.$placeHolder) {
                        e = e.cloneNode(!0);
                        let i = e.getAttribute("id");
                        i = i ? `${i}--clone` : `clone-${this.fancybox.id}-${t.index}`, e.setAttribute("id", i);
                    } else {
                        const t = document.createElement("div");
                        t.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(t, e), e.$placeHolder = t;
                    }
                    this.fancybox.setContent(t, e);
                } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}");
            }
            loadAjaxContent(t) {
                const e = this.fancybox, i = new XMLHttpRequest;
                e.showLoading(t), i.onreadystatechange = function() {
                    i.readyState === XMLHttpRequest.DONE && "ready" === e.state && (e.hideLoading(t), 
                    200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
                };
                const s = t.ajax || null;
                i.open(s ? "POST" : "GET", t.src), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
                i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.send(s), t.xhr = i;
            }
            loadIframeContent(t) {
                const e = this.fancybox, i = document.createElement("iframe");
                if (i.className = "fancybox__iframe", i.setAttribute("id", `fancybox__iframe_${e.id}_${t.index}`), 
                i.setAttribute("allow", "autoplay; fullscreen"), i.setAttribute("scrolling", "auto"), 
                t.$iframe = i, "iframe" !== t.type || !1 === t.preload) return i.setAttribute("src", t.src), 
                this.fancybox.setContent(t, i), void this.resizeIframe(t);
                e.showLoading(t);
                const s = document.createElement("div");
                s.style.visibility = "hidden", this.fancybox.setContent(t, s), s.appendChild(i), 
                i.onerror = () => {
                    e.setError(t, "{{IFRAME_ERROR}}");
                }, i.onload = () => {
                    e.hideLoading(t);
                    let s = !1;
                    i.isReady || (i.isReady = !0, s = !0), i.src.length && (i.parentNode.style.visibility = "", 
                    this.resizeIframe(t), s && e.revealContent(t));
                }, i.setAttribute("src", t.src);
            }
            setAspectRatio(t) {
                const e = t.$content, i = t.ratio;
                if (!e) return;
                let s = t._width, o = t._height;
                if (i || s && o) {
                    Object.assign(e.style, {
                        width: s && o ? "100%" : "",
                        height: s && o ? "100%" : "",
                        maxWidth: "",
                        maxHeight: ""
                    });
                    let t = e.offsetWidth, n = e.offsetHeight;
                    if (s = s || t, o = o || n, s > t || o > n) {
                        let e = Math.min(t / s, n / o);
                        s *= e, o *= e;
                    }
                    Math.abs(s / o - i) > .01 && (i < s / o ? s = o * i : o = s / i), Object.assign(e.style, {
                        width: `${s}px`,
                        height: `${o}px`
                    });
                }
            }
            resizeIframe(t) {
                const e = t.$iframe;
                if (!e) return;
                let i = t._width || 0, s = t._height || 0;
                i && s && (t.autoSize = !1);
                const o = e.parentNode, n = o && o.style;
                if (!1 !== t.preload && !1 !== t.autoSize && n) try {
                    const t = window.getComputedStyle(o), a = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight), r = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), h = e.contentWindow.document, l = h.getElementsByTagName("html")[0], c = h.body;
                    n.width = "", c.style.overflow = "hidden", i = i || l.scrollWidth + a, n.width = `${i}px`, 
                    c.style.overflow = "", n.flex = "0 0 auto", n.height = `${c.scrollHeight}px`, s = l.scrollHeight + r;
                } catch (t) {}
                if (i || s) {
                    const t = {
                        flex: "0 1 auto"
                    };
                    i && (t.width = `${i}px`), s && (t.height = `${s}px`), Object.assign(n, t);
                }
            }
            onRefresh(t, e) {
                e.slides.forEach((t => {
                    t.$el && (t.$iframe && this.resizeIframe(t), t.ratio && this.setAspectRatio(t));
                }));
            }
            setContent(t) {
                if (t && !t.isDom) {
                    switch (t.type) {
                      case "html":
                        this.fancybox.setContent(t, t.src);
                        break;

                      case "html5video":
                        this.fancybox.setContent(t, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.format || t.html5video && t.html5video.format || "").replace("{{poster}}", t.poster || t.thumb || ""));
                        break;

                      case "inline":
                      case "clone":
                        this.loadInlineContent(t);
                        break;

                      case "ajax":
                        this.loadAjaxContent(t);
                        break;

                      case "pdf":
                      case "video":
                      case "map":
                        t.preload = !1;

                      case "iframe":
                        this.loadIframeContent(t);
                    }
                    t.ratio && this.setAspectRatio(t);
                }
            }
            onSelectSlide(t, e, i) {
                "ready" === t.state && this.playVideo(i);
            }
            playVideo(t) {
                if ("html5video" === t.type && t.video.autoplay) try {
                    const e = t.$el.querySelector("video");
                    if (e) {
                        const t = e.play();
                        void 0 !== t && t.then((() => {})).catch((t => {
                            e.muted = !0, e.play();
                        }));
                    }
                } catch (t) {}
                if ("video" !== t.type || !t.$iframe || !t.$iframe.contentWindow) return;
                const e = () => {
                    if ("done" === t.state && t.$iframe && t.$iframe.contentWindow) {
                        let e;
                        if (t.$iframe.isReady) return t.video && t.video.autoplay && (e = "youtube" == t.vendor ? {
                            event: "command",
                            func: "playVideo"
                        } : {
                            method: "play",
                            value: "true"
                        }), void (e && t.$iframe.contentWindow.postMessage(JSON.stringify(e), "*"));
                        "youtube" === t.vendor && (e = {
                            event: "listening",
                            id: t.$iframe.getAttribute("id")
                        }, t.$iframe.contentWindow.postMessage(JSON.stringify(e), "*"));
                    }
                    t.poller = setTimeout(e, 250);
                };
                e();
            }
            onUnselectSlide(t, e, i) {
                if ("html5video" === i.type) {
                    try {
                        i.$el.querySelector("video").pause();
                    } catch (t) {}
                    return;
                }
                let s = !1;
                "vimeo" == i.vendor ? s = {
                    method: "pause",
                    value: "true"
                } : "youtube" === i.vendor && (s = {
                    event: "command",
                    func: "pauseVideo"
                }), s && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(s), "*"), 
                clearTimeout(i.poller);
            }
            onRemoveSlide(t, e, i) {
                i.xhr && (i.xhr.abort(), i.xhr = null), i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null, 
                i.$iframe.src = "//about:blank", i.$iframe = null);
                const s = i.$content;
                "inline" === i.type && s && (s.classList.remove("fancybox__content"), "none" !== s.style.display && (s.style.display = "none")), 
                i.$closeButton && (i.$closeButton.remove(), i.$closeButton = null);
                const o = s && s.$placeHolder;
                o && (o.parentNode.insertBefore(s, o), o.remove(), s.$placeHolder = null);
            }
            onMessage(t) {
                try {
                    let e = JSON.parse(t.data);
                    if ("https://player.vimeo.com" === t.origin) {
                        if ("ready" === e.event) for (let e of document.getElementsByClassName("fancybox__iframe")) e.contentWindow === t.source && (e.isReady = 1);
                    } else "https://www.youtube-nocookie.com" === t.origin && "onReady" === e.event && (document.getElementById(e.id).isReady = 1);
                } catch (t) {}
            }
            attach() {
                this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1);
            }
            detach() {
                this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1);
            }
        }
        E.defaults = S;
        class P {
            constructor(t) {
                this.fancybox = t;
                for (const t of [ "onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange" ]) this[t] = this[t].bind(this);
                this.events = {
                    ready: this.onReady,
                    closing: this.onClosing,
                    done: this.onDone,
                    "Carousel.change": this.onPageChange,
                    "Carousel.createSlide": this.onCreateSlide,
                    "Carousel.removeSlide": this.onRemoveSlide
                };
            }
            onReady() {
                this.fancybox.Carousel.slides.forEach((t => {
                    t.$el && this.setContent(t);
                }));
            }
            onDone(t, e) {
                this.handleCursor(e);
            }
            onClosing(t) {
                clearTimeout(this.clickTimer), this.clickTimer = null, t.Carousel.slides.forEach((t => {
                    t.$image && (t.state = "destroy"), t.Panzoom && t.Panzoom.detachEvents();
                })), "closing" === this.fancybox.state && this.canZoom(t.getSlide()) && this.zoomOut();
            }
            onCreateSlide(t, e, i) {
                "ready" === this.fancybox.state && this.setContent(i);
            }
            onRemoveSlide(t, e, i) {
                i.$image && (i.$el.classList.remove(t.option("Image.canZoomInClass")), i.$image.remove(), 
                i.$image = null), i.Panzoom && (i.Panzoom.destroy(), i.Panzoom = null), i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
            }
            setContent(t) {
                if (t.isDom || t.html || t.type && "image" !== t.type) return;
                if (t.$image) return;
                t.type = "image", t.state = "loading";
                const e = document.createElement("div");
                e.style.visibility = "hidden";
                const i = document.createElement("img");
                i.addEventListener("load", (e => {
                    e.stopImmediatePropagation(), this.onImageStatusChange(t);
                })), i.addEventListener("error", (() => {
                    this.onImageStatusChange(t);
                })), i.src = t.src, i.alt = "", i.draggable = !1, i.classList.add("fancybox__image"), 
                t.srcset && i.setAttribute("srcset", t.srcset), t.sizes && i.setAttribute("sizes", t.sizes), 
                t.$image = i;
                const s = this.fancybox.option("Image.wrap");
                if (s) {
                    const o = document.createElement("div");
                    o.classList.add("string" == typeof s ? s : "fancybox__image-wrap"), o.appendChild(i), 
                    e.appendChild(o), t.$wrap = o;
                } else e.appendChild(i);
                t.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(t, e), 
                i.complete || i.error ? this.onImageStatusChange(t) : this.fancybox.showLoading(t);
            }
            onImageStatusChange(t) {
                const e = t.$image;
                e && "loading" === t.state && (e.complete && e.naturalWidth && e.naturalHeight ? (this.fancybox.hideLoading(t), 
                "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(t), t.$el.addEventListener("wheel", (e => this.onWheel(t, e)), {
                    passive: !1
                }), t.$content.addEventListener("click", (e => this.onClick(t, e)), {
                    passive: !1
                }), this.revealContent(t)) : this.fancybox.setError(t, "{{IMAGE_ERROR}}"));
            }
            initSlidePanzoom(t) {
                t.Panzoom || (t.Panzoom = new d(t.$el, e(!0, this.fancybox.option("Image.Panzoom", {}), {
                    viewport: t.$wrap,
                    content: t.$image,
                    width: t._width,
                    height: t._height,
                    wrapInner: !1,
                    textSelection: !0,
                    touch: this.fancybox.option("Image.touch"),
                    panOnlyZoomed: !0,
                    click: !1,
                    wheel: !1
                })), t.Panzoom.on("startAnimation", (() => {
                    this.fancybox.trigger("Image.startAnimation", t);
                })), t.Panzoom.on("endAnimation", (() => {
                    "zoomIn" === t.state && this.fancybox.done(t), this.handleCursor(t), this.fancybox.trigger("Image.endAnimation", t);
                })), t.Panzoom.on("afterUpdate", (() => {
                    this.handleCursor(t), this.fancybox.trigger("Image.afterUpdate", t);
                })));
            }
            revealContent(t) {
                null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom(t) ? this.zoomIn() : this.fancybox.revealContent(t);
            }
            getZoomInfo(t) {
                const e = t.$thumb.getBoundingClientRect(), i = e.width, s = e.height, o = t.$content.getBoundingClientRect(), n = o.width, a = o.height, r = o.top - e.top, h = o.left - e.left;
                let l = this.fancybox.option("Image.zoomOpacity");
                return "auto" === l && (l = Math.abs(i / s - n / a) > .1), {
                    top: r,
                    left: h,
                    scale: n && i ? i / n : 1,
                    opacity: l
                };
            }
            canZoom(t) {
                const e = this.fancybox, i = e.$container;
                if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;
                if (t.Panzoom && !t.Panzoom.content.width) return !1;
                if (!e.option("Image.zoom") || "contain" !== e.option("Image.fit")) return !1;
                const s = t.$thumb;
                if (!s || "loading" === t.state) return !1;
                i.classList.add("fancybox__no-click");
                const o = s.getBoundingClientRect();
                let n;
                if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
                    const t = document.elementFromPoint(o.left + 1, o.top + 1) === s, e = document.elementFromPoint(o.right - 1, o.bottom - 1) === s;
                    n = t && e;
                } else n = document.elementFromPoint(o.left + .5 * o.width, o.top + .5 * o.height) === s;
                return i.classList.remove("fancybox__no-click"), n;
            }
            zoomIn() {
                const t = this.fancybox, e = t.getSlide(), i = e.Panzoom, {top: s, left: o, scale: n, opacity: a} = this.getZoomInfo(e);
                t.trigger("reveal", e), i.panTo({
                    x: -1 * o,
                    y: -1 * s,
                    scale: n,
                    friction: 0,
                    ignoreBounds: !0
                }), e.$content.style.visibility = "", e.state = "zoomIn", !0 === a && i.on("afterTransform", (t => {
                    "zoomIn" !== e.state && "zoomOut" !== e.state || (t.$content.style.opacity = Math.min(1, 1 - (1 - t.content.scale) / (1 - n)));
                })), i.panTo({
                    x: 0,
                    y: 0,
                    scale: 1,
                    friction: this.fancybox.option("Image.zoomFriction")
                });
            }
            zoomOut() {
                const t = this.fancybox, e = t.getSlide(), i = e.Panzoom;
                if (!i) return;
                e.state = "zoomOut", t.state = "customClosing", e.$caption && (e.$caption.style.visibility = "hidden");
                let s = this.fancybox.option("Image.zoomFriction");
                const o = t => {
                    const {top: o, left: n, scale: a, opacity: r} = this.getZoomInfo(e);
                    t || r || (s *= .82), i.panTo({
                        x: -1 * n,
                        y: -1 * o,
                        scale: a,
                        friction: s,
                        ignoreBounds: !0
                    }), s *= .98;
                };
                window.addEventListener("scroll", o), i.once("endAnimation", (() => {
                    window.removeEventListener("scroll", o), t.destroy();
                })), o();
            }
            handleCursor(t) {
                if ("image" !== t.type || !t.$el) return;
                const e = t.Panzoom, i = this.fancybox.option("Image.click", !1, t), s = this.fancybox.option("Image.touch"), o = t.$el.classList, n = this.fancybox.option("Image.canZoomInClass"), a = this.fancybox.option("Image.canZoomOutClass");
                if (o.remove(a), o.remove(n), e && "toggleZoom" === i) e && 1 === e.content.scale && e.option("maxScale") - e.content.scale > .01 ? o.add(n) : e.content.scale > 1 && !s && o.add(a); else "close" === i && o.add(a);
            }
            onWheel(t, e) {
                if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", e)) switch (this.fancybox.option("Image.wheel")) {
                  case "zoom":
                    "done" === t.state && t.Panzoom && t.Panzoom.zoomWithWheel(e);
                    break;

                  case "close":
                    this.fancybox.close();
                    break;

                  case "slide":
                    this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
                }
            }
            onClick(t, e) {
                if ("ready" !== this.fancybox.state) return;
                const i = t.Panzoom;
                if (i && (i.dragPosition.midPoint || 0 !== i.dragOffset.x || 0 !== i.dragOffset.y || 1 !== i.dragOffset.scale)) return;
                if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;
                const s = i => {
                    switch (i) {
                      case "toggleZoom":
                        e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e);
                        break;

                      case "close":
                        this.fancybox.close();
                        break;

                      case "next":
                        e.stopPropagation(), this.fancybox.next();
                    }
                }, o = this.fancybox.option("Image.click"), n = this.fancybox.option("Image.doubleClick");
                n ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, s(n)) : this.clickTimer = setTimeout((() => {
                    this.clickTimer = null, s(o);
                }), 300) : s(o);
            }
            onPageChange(t, e) {
                const i = t.getSlide();
                e.slides.forEach((t => {
                    t.Panzoom && "done" === t.state && t.index !== i.index && t.Panzoom.panTo({
                        x: 0,
                        y: 0,
                        scale: 1,
                        friction: .8
                    });
                }));
            }
            attach() {
                this.fancybox.on(this.events);
            }
            detach() {
                this.fancybox.off(this.events);
            }
        }
        P.defaults = {
            canZoomInClass: "can-zoom_in",
            canZoomOutClass: "can-zoom_out",
            zoom: !0,
            zoomOpacity: "auto",
            zoomFriction: .82,
            ignoreCoveredThumbnail: !1,
            touch: !0,
            click: "toggleZoom",
            doubleClick: null,
            wheel: "zoom",
            fit: "contain",
            wrap: !1,
            Panzoom: {
                ratio: 1
            }
        };
        class L {
            constructor(t) {
                this.fancybox = t;
                for (const t of [ "onChange", "onClosing" ]) this[t] = this[t].bind(this);
                this.events = {
                    initCarousel: this.onChange,
                    "Carousel.change": this.onChange,
                    closing: this.onClosing
                }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null;
            }
            onChange(t) {
                const e = t.Carousel;
                this.timer && clearTimeout(this.timer);
                const i = null === e.prevPage, s = t.getSlide(), o = new URL(document.URL).hash;
                let n = !1;
                if (s.slug) n = "#" + s.slug; else {
                    const i = s.$trigger && s.$trigger.dataset, o = t.option("slug") || i && i.fancybox;
                    o && o.length && "true" !== o && (n = "#" + o + (e.slides.length > 1 ? "-" + (s.index + 1) : ""));
                }
                i && (this.origHash = o !== n ? o : ""), n && o !== n && (this.timer = setTimeout((() => {
                    try {
                        window.history[i ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + n), 
                        i && (this.hasCreatedHistory = !0);
                    } catch (t) {}
                }), 300));
            }
            onClosing() {
                if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) try {
                    return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
                } catch (t) {}
            }
            attach(t) {
                t.on(this.events);
            }
            detach(t) {
                t.off(this.events);
            }
            static startFromUrl() {
                const t = L.Fancybox;
                if (!t || t.getInstance() || !1 === t.defaults.Hash) return;
                const {hash: e, slug: i, index: s} = L.getParsedURL();
                if (!i) return;
                let o = document.querySelector(`[data-slug="${e}"]`);
                if (o && o.dispatchEvent(new CustomEvent("click", {
                    bubbles: !0,
                    cancelable: !0
                })), t.getInstance()) return;
                const n = document.querySelectorAll(`[data-fancybox="${i}"]`);
                n.length && (null === s && 1 === n.length ? o = n[0] : s && (o = n[s - 1]), o && o.dispatchEvent(new CustomEvent("click", {
                    bubbles: !0,
                    cancelable: !0
                })));
            }
            static onHashChange() {
                const {slug: t, index: e} = L.getParsedURL(), i = L.Fancybox, s = i && i.getInstance();
                if (s && s.plugins.Hash) {
                    if (t) {
                        const i = s.Carousel;
                        if (t === s.option("slug")) return i.slideTo(e - 1);
                        for (let e of i.slides) if (e.slug && e.slug === t) return i.slideTo(e.index);
                        const o = s.getSlide(), n = o.$trigger && o.$trigger.dataset;
                        if (n && n.fancybox === t) return i.slideTo(e - 1);
                    }
                    s.plugins.Hash.hasSilentClose = !0, s.close();
                }
                L.startFromUrl();
            }
            static create(t) {
                function e() {
                    window.addEventListener("hashchange", L.onHashChange, !1), L.startFromUrl();
                }
                L.Fancybox = t, v && window.requestAnimationFrame((() => {
                    /complete|interactive|loaded/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e);
                }));
            }
            static destroy() {
                window.removeEventListener("hashchange", L.onHashChange, !1);
            }
            static getParsedURL() {
                const t = window.location.hash.substr(1), e = t.split("-"), i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null;
                return {
                    hash: t,
                    slug: e.join("-"),
                    index: i
                };
            }
        }
        const T = {
            pageXOffset: 0,
            pageYOffset: 0,
            element: () => document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement,
            activate(t) {
                T.pageXOffset = window.pageXOffset, T.pageYOffset = window.pageYOffset, t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
            },
            deactivate() {
                document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
            }
        };
        class _ {
            constructor(t) {
                this.fancybox = t, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
            }
            isActive() {
                return this.active;
            }
            setTimer() {
                if (!this.active || this.timer) return;
                const t = this.fancybox.option("slideshow.delay", 3e3);
                this.timer = setTimeout((() => {
                    this.timer = null, this.fancybox.option("infinite") || this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1 ? this.fancybox.next() : this.fancybox.jumpTo(0, {
                        friction: 0
                    });
                }), t);
                let e = this.$progress;
                e || (e = document.createElement("div"), e.classList.add("fancybox__progress"), 
                this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel), this.$progress = e, 
                e.offsetHeight), e.style.transitionDuration = `${t}ms`, e.style.transform = "scaleX(1)";
            }
            clearTimer() {
                clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", 
                this.$progress.style.transform = "", this.$progress.offsetHeight);
            }
            activate() {
                this.active || (this.active = !0, this.fancybox.$container.classList.add("has-slideshow"), 
                "done" === this.fancybox.getSlide().state && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1));
            }
            handleVisibilityChange() {
                this.deactivate();
            }
            deactivate() {
                this.active = !1, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), 
                document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1);
            }
            toggle() {
                this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate();
            }
        }
        const A = {
            display: [ "counter", "zoom", "slideshow", "fullscreen", "thumbs", "close" ],
            autoEnable: !0,
            items: {
                counter: {
                    position: "left",
                    type: "div",
                    class: "fancybox__counter",
                    html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
                    attr: {
                        tabindex: -1
                    }
                },
                prev: {
                    type: "button",
                    class: "fancybox__button--prev",
                    label: "PREV",
                    html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
                    attr: {
                        "data-fancybox-prev": ""
                    }
                },
                next: {
                    type: "button",
                    class: "fancybox__button--next",
                    label: "NEXT",
                    html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
                    attr: {
                        "data-fancybox-next": ""
                    }
                },
                fullscreen: {
                    type: "button",
                    class: "fancybox__button--fullscreen",
                    label: "TOGGLE_FULLSCREEN",
                    html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
                    click: function(t) {
                        t.preventDefault(), T.element() ? T.deactivate() : T.activate(this.fancybox.$container);
                    }
                },
                slideshow: {
                    type: "button",
                    class: "fancybox__button--slideshow",
                    label: "TOGGLE_SLIDESHOW",
                    html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
                    click: function(t) {
                        t.preventDefault(), this.Slideshow.toggle();
                    }
                },
                zoom: {
                    type: "button",
                    class: "fancybox__button--zoom",
                    label: "TOGGLE_ZOOM",
                    html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
                    click: function(t) {
                        t.preventDefault();
                        const e = this.fancybox.getSlide().Panzoom;
                        e && e.toggleZoom();
                    }
                },
                download: {
                    type: "link",
                    label: "DOWNLOAD",
                    class: "fancybox__button--download",
                    html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
                    click: function(t) {
                        t.stopPropagation();
                    }
                },
                thumbs: {
                    type: "button",
                    label: "TOGGLE_THUMBS",
                    class: "fancybox__button--thumbs",
                    html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
                    click: function(t) {
                        t.stopPropagation();
                        const e = this.fancybox.plugins.Thumbs;
                        e && e.toggle();
                    }
                },
                close: {
                    type: "button",
                    label: "CLOSE",
                    class: "fancybox__button--close",
                    html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
                    attr: {
                        "data-fancybox-close": "",
                        tabindex: 0
                    }
                }
            }
        };
        class z {
            constructor(t) {
                this.fancybox = t, this.$container = null, this.state = "init";
                for (const t of [ "onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh" ]) this[t] = this[t].bind(this);
                this.events = {
                    init: this.onInit,
                    prepare: this.onPrepare,
                    done: this.onDone,
                    keydown: this.onKeydown,
                    closing: this.onClosing,
                    "Carousel.change": this.onChange,
                    "Carousel.settle": this.onSettle,
                    "Carousel.Panzoom.touchStart": () => this.onRefresh(),
                    "Image.startAnimation": (t, e) => this.onRefresh(e),
                    "Image.afterUpdate": (t, e) => this.onRefresh(e)
                };
            }
            onInit() {
                if (this.fancybox.option("Toolbar.autoEnable")) {
                    let t = !1;
                    for (const e of this.fancybox.items) if ("image" === e.type) {
                        t = !0;
                        break;
                    }
                    if (!t) return void (this.state = "disabled");
                }
                for (const e of this.fancybox.option("Toolbar.display")) if ("close" === (t(e) ? e.id : e)) {
                    this.fancybox.options.closeButton = !1;
                    break;
                }
            }
            onPrepare() {
                const t = this.fancybox;
                if ("init" === this.state && (this.build(), this.update(), this.Slideshow = new _(t), 
                !t.Carousel.prevPage && (t.option("slideshow.autoStart") && this.Slideshow.activate(), 
                t.option("fullscreen.autoStart") && !T.element()))) try {
                    T.activate(t.$container);
                } catch (t) {}
            }
            onFsChange() {
                window.scrollTo(T.pageXOffset, T.pageYOffset);
            }
            onSettle() {
                const t = this.fancybox, e = this.Slideshow;
                e && e.isActive() && (t.getSlide().index !== t.Carousel.slides.length - 1 || t.option("infinite") ? "done" === t.getSlide().state && e.setTimer() : e.deactivate());
            }
            onChange() {
                this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer();
            }
            onDone(t, e) {
                const i = this.Slideshow;
                e.index === t.getSlide().index && (this.update(), i && i.isActive() && (t.option("infinite") || e.index !== t.Carousel.slides.length - 1 ? i.setTimer() : i.deactivate()));
            }
            onRefresh(t) {
                t && t.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t && "done" !== t.state || this.Slideshow.deactivate());
            }
            onKeydown(t, e, i) {
                " " === e && this.Slideshow && (this.Slideshow.toggle(), i.preventDefault());
            }
            onClosing() {
                this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange);
            }
            createElement(t) {
                let e;
                "div" === t.type ? e = document.createElement("div") : (e = document.createElement("link" === t.type ? "a" : "button"), 
                e.classList.add("carousel__button")), e.innerHTML = t.html, e.setAttribute("tabindex", t.tabindex || 0), 
                t.class && e.classList.add(...t.class.split(" "));
                for (const i in t.attr) e.setAttribute(i, t.attr[i]);
                t.label && e.setAttribute("title", this.fancybox.localize(`{{${t.label}}}`)), t.click && e.addEventListener("click", t.click.bind(this)), 
                "prev" === t.id && e.setAttribute("data-fancybox-prev", ""), "next" === t.id && e.setAttribute("data-fancybox-next", "");
                const i = e.querySelector("svg");
                return i && (i.setAttribute("role", "img"), i.setAttribute("tabindex", "-1"), i.setAttribute("xmlns", "http://www.w3.org/2000/svg")), 
                e;
            }
            build() {
                this.cleanup();
                const i = this.fancybox.option("Toolbar.items"), s = [ {
                    position: "left",
                    items: []
                }, {
                    position: "center",
                    items: []
                }, {
                    position: "right",
                    items: []
                } ], o = this.fancybox.plugins.Thumbs;
                for (const n of this.fancybox.option("Toolbar.display")) {
                    let a, r;
                    if (t(n) ? (a = n.id, r = e({}, i[a], n)) : (a = n, r = i[a]), [ "counter", "next", "prev", "slideshow" ].includes(a) && this.fancybox.items.length < 2) continue;
                    if ("fullscreen" === a) {
                        if (!document.fullscreenEnabled || window.fullScreen) continue;
                        document.addEventListener("fullscreenchange", this.onFsChange);
                    }
                    if ("thumbs" === a && (!o || "disabled" === o.state)) continue;
                    if (!r) continue;
                    let h = r.position || "right", l = s.find((t => t.position === h));
                    l && l.items.push(r);
                }
                const n = document.createElement("div");
                n.classList.add("fancybox__toolbar");
                for (const t of s) if (t.items.length) {
                    const e = document.createElement("div");
                    e.classList.add("fancybox__toolbar__items"), e.classList.add(`fancybox__toolbar__items--${t.position}`);
                    for (const i of t.items) e.appendChild(this.createElement(i));
                    n.appendChild(e);
                }
                this.fancybox.$carousel.parentNode.insertBefore(n, this.fancybox.$carousel), this.$container = n;
            }
            update() {
                const t = this.fancybox.getSlide(), e = t.index, i = this.fancybox.items.length, s = t.downloadSrc || ("image" !== t.type || t.error ? null : t.src);
                for (const t of this.fancybox.$container.querySelectorAll("a.fancybox__button--download")) s ? (t.removeAttribute("disabled"), 
                t.removeAttribute("tabindex"), t.setAttribute("href", s), t.setAttribute("download", s), 
                t.setAttribute("target", "_blank")) : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", -1), 
                t.removeAttribute("href"), t.removeAttribute("download"));
                const o = t.Panzoom, n = o && o.option("maxScale") > o.option("baseScale");
                for (const t of this.fancybox.$container.querySelectorAll(".fancybox__button--zoom")) n ? t.removeAttribute("disabled") : t.setAttribute("disabled", "");
                for (const e of this.fancybox.$container.querySelectorAll("[data-fancybox-index]")) e.innerHTML = t.index + 1;
                for (const t of this.fancybox.$container.querySelectorAll("[data-fancybox-count]")) t.innerHTML = i;
                if (!this.fancybox.option("infinite")) {
                    for (const t of this.fancybox.$container.querySelectorAll("[data-fancybox-prev]")) 0 === e ? t.setAttribute("disabled", "") : t.removeAttribute("disabled");
                    for (const t of this.fancybox.$container.querySelectorAll("[data-fancybox-next]")) e === i - 1 ? t.setAttribute("disabled", "") : t.removeAttribute("disabled");
                }
            }
            cleanup() {
                this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), 
                this.$container = null;
            }
            attach() {
                this.fancybox.on(this.events);
            }
            detach() {
                this.fancybox.off(this.events), this.cleanup();
            }
        }
        z.defaults = A;
        const k = {
            ScrollLock: class {
                constructor(t) {
                    this.fancybox = t, this.viewport = null, this.pendingUpdate = null;
                    for (const t of [ "onReady", "onResize", "onTouchstart", "onTouchmove" ]) this[t] = this[t].bind(this);
                }
                onReady() {
                    const t = window.visualViewport;
                    t && (this.viewport = t, this.startY = 0, t.addEventListener("resize", this.onResize), 
                    this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {
                        passive: !1
                    }), window.addEventListener("touchmove", this.onTouchmove, {
                        passive: !1
                    }), window.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    });
                }
                onResize() {
                    this.updateViewport();
                }
                updateViewport() {
                    const t = this.fancybox, e = this.viewport, i = e.scale || 1, s = t.$container;
                    if (!s) return;
                    let o = "", n = "", a = "";
                    i - 1 > .1 && (o = e.width * i + "px", n = e.height * i + "px", a = `translate3d(${e.offsetLeft}px, ${e.offsetTop}px, 0) scale(${1 / i})`), 
                    s.style.width = o, s.style.height = n, s.style.transform = a;
                }
                onTouchstart(t) {
                    this.startY = t.touches ? t.touches[0].screenY : t.screenY;
                }
                onTouchmove(t) {
                    const e = this.startY, i = window.innerWidth / window.document.documentElement.clientWidth;
                    if (!t.cancelable) return;
                    if (t.touches.length > 1 || 1 !== i) return;
                    const o = s(t.composedPath()[0]);
                    if (!o) return void t.preventDefault();
                    const n = window.getComputedStyle(o), a = parseInt(n.getPropertyValue("height"), 10), r = t.touches ? t.touches[0].screenY : t.screenY, h = e <= r && 0 === o.scrollTop, l = e >= r && o.scrollHeight - o.scrollTop === a;
                    (h || l) && t.preventDefault();
                }
                onWheel(t) {
                    s(t.composedPath()[0]) || t.preventDefault();
                }
                cleanup() {
                    this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
                    const t = this.viewport;
                    t && (t.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), 
                    window.removeEventListener("touchmove", this.onTouchmove, !1), window.removeEventListener("wheel", this.onWheel, {
                        passive: !1
                    });
                }
                attach() {
                    this.fancybox.on("initLayout", this.onReady);
                }
                detach() {
                    this.fancybox.off("initLayout", this.onReady), this.cleanup();
                }
            },
            Thumbs: fancybox_esm_$,
            Html: E,
            Toolbar: z,
            Image: P,
            Hash: L
        };
        const O = {
            startIndex: 0,
            preload: 1,
            infinite: !0,
            showClass: "fancybox-zoomInUp",
            hideClass: "fancybox-fadeOut",
            animated: !0,
            hideScrollbar: !0,
            parentEl: null,
            mainClass: null,
            autoFocus: !0,
            trapFocus: !0,
            placeFocusBack: !0,
            click: "close",
            closeButton: "inside",
            dragToClose: !0,
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "next",
                ArrowDown: "prev",
                ArrowRight: "next",
                ArrowLeft: "prev"
            },
            template: {
                closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
                spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
                main: null
            },
            l10n: {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                MODAL: "You can close this modal content with the ESC key",
                ERROR: "Something Went Wrong, Please Try Again Later",
                IMAGE_ERROR: "Image Not Found",
                ELEMENT_NOT_FOUND: "HTML Element Not Found",
                AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
                AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
                IFRAME_ERROR: "Error Loading Page",
                TOGGLE_ZOOM: "Toggle zoom level",
                TOGGLE_THUMBS: "Toggle thumbnails",
                TOGGLE_SLIDESHOW: "Toggle slideshow",
                TOGGLE_FULLSCREEN: "Toggle full-screen mode",
                DOWNLOAD: "Download"
            }
        }, M = new Map;
        let I = 0;
        class F extends l {
            constructor(t, i = {}) {
                t = t.map((t => (t.width && (t._width = t.width), t.height && (t._height = t.height), 
                t))), super(e(!0, {}, O, i)), this.bindHandlers(), this.state = "init", this.setItems(t), 
                this.attachPlugins(F.Plugins), this.trigger("init"), !0 === this.option("hideScrollbar") && this.hideScrollbar(), 
                this.initLayout(), this.initCarousel(), this.attachEvents(), M.set(this.id, this), 
                this.trigger("prepare"), this.state = "ready", this.trigger("ready"), this.$container.setAttribute("aria-hidden", "false"), 
                this.option("trapFocus") && this.focus();
            }
            option(t, ...e) {
                const i = this.getSlide();
                let s = i ? i[t] : void 0;
                return void 0 !== s ? ("function" == typeof s && (s = s.call(this, this, ...e)), 
                s) : super.option(t, ...e);
            }
            bindHandlers() {
                for (const t of [ "onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform" ]) this[t] = this[t].bind(this);
            }
            attachEvents() {
                document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown, !0), 
                this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0), 
                this.$container.addEventListener("click", this.onClick);
            }
            detachEvents() {
                document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown, !0), 
                document.removeEventListener("focus", this.onFocus, !0), this.$container.removeEventListener("click", this.onClick);
            }
            initLayout() {
                this.$root = this.option("parentEl") || document.body;
                let t = this.option("template.main");
                t && (this.$root.insertAdjacentHTML("beforeend", this.localize(t)), this.$container = this.$root.querySelector(".fancybox__container")), 
                this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), 
                this.$container.onscroll = () => (this.$container.scrollLeft = 0, !1), Object.entries({
                    class: "fancybox__container",
                    role: "dialog",
                    tabIndex: "-1",
                    "aria-modal": "true",
                    "aria-hidden": "true",
                    "aria-label": this.localize("{{MODAL}}")
                }).forEach((t => this.$container.setAttribute(...t))), this.option("animated") && this.$container.classList.add("is-animated"), 
                this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), 
                this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), 
                this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), 
                this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), 
                this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++I, 
                this.$container.setAttribute("id", "fancybox-" + this.id));
                const e = this.option("mainClass");
                return e && this.$container.classList.add(...e.split(" ")), document.documentElement.classList.add("with-fancybox"), 
                this.trigger("initLayout"), this;
            }
            setItems(t) {
                const e = [];
                for (const i of t) {
                    const t = i.$trigger;
                    if (t) {
                        const e = t.dataset || {};
                        i.src = e.src || t.getAttribute("href") || i.src, i.type = e.type || i.type, !i.src && t instanceof HTMLImageElement && (i.src = t.currentSrc || i.$trigger.src);
                    }
                    let s = i.$thumb;
                    if (!s) {
                        let t = i.$trigger && i.$trigger.origTarget;
                        t && (s = t instanceof HTMLImageElement ? t : t.querySelector("img:not([aria-hidden])")), 
                        !s && i.$trigger && (s = i.$trigger instanceof HTMLImageElement ? i.$trigger : i.$trigger.querySelector("img:not([aria-hidden])"));
                    }
                    i.$thumb = s || null;
                    let o = i.thumb;
                    !o && s && (o = s.currentSrc || s.src, !o && s.dataset && (o = s.dataset.lazySrc || s.dataset.src)), 
                    o || "image" !== i.type || (o = i.src), i.thumb = o || null, i.caption = i.caption || "", 
                    e.push(i);
                }
                this.items = e;
            }
            initCarousel() {
                return this.Carousel = new y(this.$carousel, e(!0, {}, {
                    prefix: "",
                    classNames: {
                        viewport: "fancybox__viewport",
                        track: "fancybox__track",
                        slide: "fancybox__slide"
                    },
                    textSelection: !0,
                    preload: this.option("preload"),
                    friction: .88,
                    slides: this.items,
                    initialPage: this.options.startIndex,
                    slidesPerPage: 1,
                    infiniteX: this.option("infinite"),
                    infiniteY: !0,
                    l10n: this.option("l10n"),
                    Dots: !1,
                    Navigation: {
                        classNames: {
                            main: "fancybox__nav",
                            button: "carousel__button",
                            next: "is-next",
                            prev: "is-prev"
                        }
                    },
                    Panzoom: {
                        textSelection: !0,
                        panOnlyZoomed: () => this.Carousel && this.Carousel.pages && this.Carousel.pages.length < 2 && !this.option("dragToClose"),
                        lockAxis: () => {
                            if (this.Carousel) {
                                let t = "x";
                                return this.option("dragToClose") && (t += "y"), t;
                            }
                        }
                    },
                    on: {
                        "*": (t, ...e) => this.trigger(`Carousel.${t}`, ...e),
                        init: t => this.Carousel = t,
                        createSlide: this.onCreateSlide,
                        settle: this.onSettle
                    }
                }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({
                    touchMove: this.onTouchMove,
                    afterTransform: this.onTransform,
                    touchEnd: this.onTouchEnd
                }), this.trigger("initCarousel"), this;
            }
            onCreateSlide(t, e) {
                let i = e.caption || "";
                if ("function" == typeof this.options.caption && (i = this.options.caption.call(this, this, this.Carousel, e)), 
                "string" == typeof i && i.length) {
                    const t = document.createElement("div"), s = `fancybox__caption_${this.id}_${e.index}`;
                    t.className = "fancybox__caption", t.innerHTML = i, t.setAttribute("id", s), e.$caption = e.$el.appendChild(t), 
                    e.$el.classList.add("has-caption"), e.$el.setAttribute("aria-labelledby", s);
                }
            }
            onSettle() {
                this.option("autoFocus") && this.focus();
            }
            onFocus(t) {
                this.focus(t);
            }
            onClick(t) {
                if (t.defaultPrevented) return;
                let e = t.composedPath()[0];
                if (e.matches("[data-fancybox-close]")) return t.preventDefault(), void F.close(!1, t);
                if (e.matches("[data-fancybox-next]")) return t.preventDefault(), void F.next();
                if (e.matches("[data-fancybox-prev]")) return t.preventDefault(), void F.prev();
                if (e.matches(x) || document.activeElement.blur(), e.closest(".fancybox__content")) return;
                if (getSelection().toString().length) return;
                if (!1 === this.trigger("click", t)) return;
                switch (this.option("click")) {
                  case "close":
                    this.close();
                    break;

                  case "next":
                    this.next();
                }
            }
            onTouchMove() {
                const t = this.getSlide().Panzoom;
                return !t || 1 === t.content.scale;
            }
            onTouchEnd(t) {
                const e = t.dragOffset.y;
                Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut" + (t.content.y < 0 ? "Up" : "Down")), 
                this.close()) : "y" === t.lockAxis && t.panTo({
                    y: 0
                });
            }
            onTransform(t) {
                if (this.$backdrop) {
                    const e = Math.abs(t.content.y), i = e < 1 ? "" : Math.max(.33, Math.min(1, 1 - e / t.content.fitHeight * 1.5));
                    this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", i);
                }
            }
            onMousedown() {
                "ready" === this.state && document.body.classList.add("is-using-mouse");
            }
            onKeydown(t) {
                if (F.getInstance().id !== this.id) return;
                document.body.classList.remove("is-using-mouse");
                const e = t.key, i = this.option("keyboard");
                if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;
                const s = t.composedPath()[0], o = document.activeElement && document.activeElement.classList, n = o && o.contains("carousel__button");
                if ("Escape" !== e && !n) if (t.target.isContentEditable || -1 !== [ "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].indexOf(s.nodeName)) return;
                if (!1 === this.trigger("keydown", e, t)) return;
                const a = i[e];
                "function" == typeof this[a] && this[a]();
            }
            getSlide() {
                const t = this.Carousel;
                if (!t) return null;
                const e = null === t.page ? t.option("initialPage") : t.page, i = t.pages || [];
                return i.length && i[e] ? i[e].slides[0] : null;
            }
            focus(t) {
                if (F.ignoreFocusChange) return;
                if ([ "init", "closing", "customClosing", "destroy" ].indexOf(this.state) > -1) return;
                const e = this.$container, i = this.getSlide(), s = "done" === i.state ? i.$el : null;
                if (s && s.contains(document.activeElement)) return;
                t && t.preventDefault(), F.ignoreFocusChange = !0;
                const o = Array.from(e.querySelectorAll(x));
                let n, a = [];
                for (let t of o) {
                    const e = t.offsetParent, i = s && s.contains(t), o = !this.Carousel.$viewport.contains(t);
                    e && (i || o) ? (a.push(t), void 0 !== t.dataset.origTabindex && (t.tabIndex = t.dataset.origTabindex, 
                    t.removeAttribute("data-orig-tabindex")), (t.hasAttribute("autoFocus") || !n && i && !t.classList.contains("carousel__button")) && (n = t)) : (t.dataset.origTabindex = void 0 === t.dataset.origTabindex ? t.getAttribute("tabindex") : t.dataset.origTabindex, 
                    t.tabIndex = -1);
                }
                t ? a.indexOf(t.target) > -1 ? this.lastFocus = t.target : this.lastFocus === e ? w(a[a.length - 1]) : w(e) : this.option("autoFocus") && n ? w(n) : a.indexOf(document.activeElement) < 0 && w(e), 
                this.lastFocus = document.activeElement, F.ignoreFocusChange = !1;
            }
            hideScrollbar() {
                if (!v) return;
                const t = window.innerWidth - document.documentElement.getBoundingClientRect().width, e = "fancybox-style-noscroll";
                let i = document.getElementById(e);
                i || t > 0 && (i = document.createElement("style"), i.id = e, i.type = "text/css", 
                i.innerHTML = `.compensate-for-scrollbar {padding-right: ${t}px;}`, document.getElementsByTagName("head")[0].appendChild(i), 
                document.body.classList.add("compensate-for-scrollbar"));
            }
            revealScrollbar() {
                document.body.classList.remove("compensate-for-scrollbar");
                const t = document.getElementById("fancybox-style-noscroll");
                t && t.remove();
            }
            clearContent(t) {
                this.Carousel.trigger("removeSlide", t), t.$content && (t.$content.remove(), t.$content = null), 
                t.$closeButton && (t.$closeButton.remove(), t.$closeButton = null), t._className && t.$el.classList.remove(t._className);
            }
            setContent(t, e, i = {}) {
                let s;
                const o = t.$el;
                if (e instanceof HTMLElement) [ "img", "iframe", "video", "audio" ].indexOf(e.nodeName.toLowerCase()) > -1 ? (s = document.createElement("div"), 
                s.appendChild(e)) : s = e; else {
                    const t = document.createRange().createContextualFragment(e);
                    s = document.createElement("div"), s.appendChild(t);
                }
                if (t.filter && !t.error && (s = s.querySelector(t.filter)), s instanceof Element) return t._className = `has-${i.suffix || t.type || "unknown"}`, 
                o.classList.add(t._className), s.classList.add("fancybox__content"), "none" !== s.style.display && "none" !== getComputedStyle(s).getPropertyValue("display") || (s.style.display = t.display || this.option("defaultDisplay") || "flex"), 
                t.id && s.setAttribute("id", t.id), t.$content = s, o.prepend(s), this.manageCloseButton(t), 
                "loading" !== t.state && this.revealContent(t), s;
                this.setError(t, "{{ELEMENT_NOT_FOUND}}");
            }
            manageCloseButton(t) {
                const e = void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;
                if (!e || "top" === e && this.$closeButton) return;
                const i = document.createElement("button");
                i.classList.add("carousel__button", "is-close"), i.setAttribute("title", this.options.l10n.CLOSE), 
                i.innerHTML = this.option("template.closeButton"), i.addEventListener("click", (t => this.close(t))), 
                "inside" === e ? (t.$closeButton && t.$closeButton.remove(), t.$closeButton = t.$content.appendChild(i)) : this.$closeButton = this.$container.insertBefore(i, this.$container.firstChild);
            }
            revealContent(t) {
                this.trigger("reveal", t), t.$content.style.visibility = "";
                let e = !1;
                t.error || "loading" === t.state || null !== this.Carousel.prevPage || t.index !== this.options.startIndex || (e = void 0 === t.showClass ? this.option("showClass") : t.showClass), 
                e ? (t.state = "animating", this.animateCSS(t.$content, e, (() => {
                    this.done(t);
                }))) : this.done(t);
            }
            animateCSS(t, e, i) {
                if (t && t.dispatchEvent(new CustomEvent("animationend", {
                    bubbles: !0,
                    cancelable: !0
                })), !t || !e) return void ("function" == typeof i && i());
                const s = function(o) {
                    o.currentTarget === this && (t.removeEventListener("animationend", s), i && i(), 
                    t.classList.remove(e));
                };
                t.addEventListener("animationend", s), t.classList.add(e);
            }
            done(t) {
                t.state = "done", this.trigger("done", t);
                const e = this.getSlide();
                e && t.index === e.index && this.option("autoFocus") && this.focus();
            }
            setError(t, e) {
                t.error = e, this.hideLoading(t), this.clearContent(t);
                const i = document.createElement("div");
                i.classList.add("fancybox-error"), i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), 
                this.setContent(t, i, {
                    suffix: "error"
                });
            }
            showLoading(t) {
                t.state = "loading", t.$el.classList.add("is-loading");
                let e = t.$el.querySelector(".fancybox__spinner");
                e || (e = document.createElement("div"), e.classList.add("fancybox__spinner"), e.innerHTML = this.option("template.spinner"), 
                e.addEventListener("click", (() => {
                    this.Carousel.Panzoom.velocity || this.close();
                })), t.$el.prepend(e));
            }
            hideLoading(t) {
                const e = t.$el && t.$el.querySelector(".fancybox__spinner");
                e && (e.remove(), t.$el.classList.remove("is-loading")), "loading" === t.state && (this.trigger("load", t), 
                t.state = "ready");
            }
            next() {
                const t = this.Carousel;
                t && t.pages.length > 1 && t.slideNext();
            }
            prev() {
                const t = this.Carousel;
                t && t.pages.length > 1 && t.slidePrev();
            }
            jumpTo(...t) {
                this.Carousel && this.Carousel.slideTo(...t);
            }
            close(t) {
                if (t && t.preventDefault(), [ "closing", "customClosing", "destroy" ].includes(this.state)) return;
                if (!1 === this.trigger("shouldClose", t)) return;
                if (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), 
                this.trigger("closing", t), "destroy" === this.state) return;
                this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
                const e = this.getSlide();
                if (this.Carousel.slides.forEach((t => {
                    t.$content && t.index !== e.index && this.Carousel.trigger("removeSlide", t);
                })), "closing" === this.state) {
                    const t = void 0 === e.hideClass ? this.option("hideClass") : e.hideClass;
                    this.animateCSS(e.$content, t, (() => {
                        this.destroy();
                    }), !0);
                }
            }
            destroy() {
                if ("destroy" === this.state) return;
                this.state = "destroy", this.trigger("destroy");
                const t = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
                this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, 
                this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, 
                t && w(t), M.delete(this.id);
                const e = F.getInstance();
                e ? e.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), 
                this.revealScrollbar());
            }
            static show(t, e = {}) {
                return new F(t, e);
            }
            static fromEvent(t, e = {}) {
                if (t.defaultPrevented) return;
                if (t.button && 0 !== t.button) return;
                if (t.ctrlKey || t.metaKey || t.shiftKey) return;
                const i = t.composedPath()[0];
                let s, o, n, a = i;
                if ((a.matches("[data-fancybox-trigger]") || (a = a.closest("[data-fancybox-trigger]"))) && (s = a && a.dataset && a.dataset.fancyboxTrigger), 
                s) {
                    const t = document.querySelectorAll(`[data-fancybox="${s}"]`), e = parseInt(a.dataset.fancyboxIndex, 10) || 0;
                    a = t.length ? t[e] : a;
                }
                a || (a = i), Array.from(F.openers.keys()).reverse().some((e => {
                    n = a;
                    let i = !1;
                    try {
                        n instanceof Element && ("string" == typeof e || e instanceof String) && (i = n.matches(e) || (n = n.closest(e)));
                    } catch (t) {}
                    return !!i && (t.preventDefault(), o = e, !0);
                }));
                let r = !1;
                if (o) {
                    e.event = t, e.target = n, n.origTarget = i, r = F.fromOpener(o, e);
                    const s = F.getInstance();
                    s && "ready" === s.state && t.detail && document.body.classList.add("is-using-mouse");
                }
                return r;
            }
            static fromOpener(t, i = {}) {
                let s = [], o = i.startIndex || 0, n = i.target || null;
                const a = void 0 !== (i = e({}, i, F.openers.get(t))).groupAll && i.groupAll, r = void 0 === i.groupAttr ? "data-fancybox" : i.groupAttr, h = r && n ? n.getAttribute(`${r}`) : "";
                if (!n || h || a) {
                    const e = i.root || (n ? n.getRootNode() : document.body);
                    s = [].slice.call(e.querySelectorAll(t));
                }
                if (n && !a && (s = h ? s.filter((t => t.getAttribute(`${r}`) === h)) : [ n ]), 
                !s.length) return !1;
                const l = F.getInstance();
                return !(l && s.indexOf(l.options.$trigger) > -1) && (o = n ? s.indexOf(n) : o, 
                s = s.map((function(t) {
                    const e = [ "false", "0", "no", "null", "undefined" ], i = [ "true", "1", "yes" ], s = Object.assign({}, t.dataset), o = {};
                    for (let [t, n] of Object.entries(s)) if ("fancybox" !== t) if ("width" === t || "height" === t) o[`_${t}`] = n; else if ("string" == typeof n || n instanceof String) if (e.indexOf(n) > -1) o[t] = !1; else if (i.indexOf(o[t]) > -1) o[t] = !0; else try {
                        o[t] = JSON.parse(n);
                    } catch (e) {
                        o[t] = n;
                    } else o[t] = n;
                    return t instanceof Element && (o.$trigger = t), o;
                })), new F(s, e({}, i, {
                    startIndex: o,
                    $trigger: n
                })));
            }
            static bind(t, e = {}) {
                function i() {
                    document.body.addEventListener("click", F.fromEvent, !1);
                }
                v && (F.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? i() : document.addEventListener("DOMContentLoaded", i)), 
                F.openers.set(t, e));
            }
            static unbind(t) {
                F.openers.delete(t), F.openers.size || F.destroy();
            }
            static destroy() {
                let t;
                for (;t = F.getInstance(); ) t.destroy();
                F.openers = new Map, document.body.removeEventListener("click", F.fromEvent, !1);
            }
            static getInstance(t) {
                if (t) return M.get(t);
                return Array.from(M.values()).reverse().find((t => ![ "closing", "customClosing", "destroy" ].includes(t.state) && t)) || null;
            }
            static close(t = !0, e) {
                if (t) for (const t of M.values()) t.close(e); else {
                    const t = F.getInstance();
                    t && t.close(e);
                }
            }
            static next() {
                const t = F.getInstance();
                t && t.next();
            }
            static prev() {
                const t = F.getInstance();
                t && t.prev();
            }
        }
        F.version = "4.0.27", F.defaults = O, F.openers = new Map, F.Plugins = k, F.bind("[data-fancybox]");
        for (const [t, e] of Object.entries(F.Plugins || {})) "function" == typeof e.create && e.create(F);
        /*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
        !function(e, t) {
            "use strict";
            "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e);
            } : t(e);
        }("undefined" != typeof window ? window : void 0, (function(C, e) {
            "use strict";
            var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function(e) {
                return t.flat.call(e);
            } : function(e) {
                return t.concat.apply([], e);
            }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
            }, x = function(e) {
                return null != e && e === e.window;
            }, E = C.document, c = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function b(e, t, n) {
                var r, i, o = (n = n || E).createElement("script");
                if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                n.head.appendChild(o).parentNode.removeChild(o);
            }
            function w(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
            }
            var f = "3.6.0", S = function(e, t) {
                return new S.fn.init(e, t);
            };
            function p(e) {
                var t = !!e && "length" in e && e.length, n = w(e);
                return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
            }
            S.fn = S.prototype = {
                jquery: f,
                constructor: S,
                length: 0,
                toArray: function() {
                    return s.call(this);
                },
                get: function(e) {
                    return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function(e) {
                    var t = S.merge(this.constructor(), e);
                    return t.prevObject = this, t;
                },
                each: function(e) {
                    return S.each(this, e);
                },
                map: function(n) {
                    return this.pushStack(S.map(this, (function(e, t) {
                        return n.call(e, t, e);
                    })));
                },
                slice: function() {
                    return this.pushStack(s.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                even: function() {
                    return this.pushStack(S.grep(this, (function(e, t) {
                        return (t + 1) % 2;
                    })));
                },
                odd: function() {
                    return this.pushStack(S.grep(this, (function(e, t) {
                        return t % 2;
                    })));
                },
                eq: function(e) {
                    var t = this.length, n = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= n && n < t ? [ this[n] ] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: u,
                sort: t.sort,
                splice: t.splice
            }, S.extend = S.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), 
                s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], 
                "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], 
                o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                return a;
            }, S.extend({
                expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e);
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0;
                },
                globalEval: function(e, t, n) {
                    b(e, {
                        nonce: t && t.nonce
                    }, n);
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (p(e)) {
                        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                    } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                    return e;
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [ e ] : e) : u.call(n, e)), 
                    n;
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : i.call(t, e, n);
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e;
                },
                grep: function(e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r;
                },
                map: function(e, t, n) {
                    var r, i, o = 0, a = [];
                    if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                    return g(a);
                },
                guid: 1,
                support: y
            }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), 
            S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                n["[object " + t + "]"] = t.toLowerCase();
            }));
            var d = function(n) {
                var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function(e, t) {
                    return e === t && (l = !0), 0;
                }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                    return -1;
                }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
                    ID: new RegExp("^#(" + I + ")"),
                    CLASS: new RegExp("^\\.(" + I + ")"),
                    TAG: new RegExp("^(" + I + "|[*])"),
                    ATTR: new RegExp("^" + W),
                    PSEUDO: new RegExp("^" + F),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + R + ")$", "i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
                }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
                }, oe = function() {
                    T();
                }, ae = be((function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
                } catch (e) {
                    H = {
                        apply: t.length ? function(e, t) {
                            L.apply(e, O.call(t));
                        } : function(e, t) {
                            var n = e.length, r = 0;
                            while (e[n++] = t[r++]) ;
                            e.length = n - 1;
                        }
                    };
                }
                function se(t, e, n, r) {
                    var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
                    if (!r && (T(e), e = e || C, E)) {
                        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
                            if (9 === p) {
                                if (!(a = e.getElementById(i))) return n;
                                if (a.id === i) return n.push(a), n;
                            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), 
                            n;
                        } else {
                            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                            if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), 
                            n;
                        }
                        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                            if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                                (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), 
                                o = (l = h(t)).length;
                                while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                                c = l.join(",");
                            }
                            try {
                                return H.apply(n, f.querySelectorAll(c)), n;
                            } catch (e) {
                                N(t, !0);
                            } finally {
                                s === S && e.removeAttribute("id");
                            }
                        }
                    }
                    return g(t.replace($, "$1"), e, n, r);
                }
                function ue() {
                    var r = [];
                    return function e(t, n) {
                        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
                    };
                }
                function le(e) {
                    return e[S] = !0, e;
                }
                function ce(e) {
                    var t = C.createElement("fieldset");
                    try {
                        return !!e(t);
                    } catch (e) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null;
                    }
                }
                function fe(e, t) {
                    var n = e.split("|"), r = n.length;
                    while (r--) b.attrHandle[n[r]] = t;
                }
                function pe(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n) while (n = n.nextSibling) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function de(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t;
                    };
                }
                function he(n) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n;
                    };
                }
                function ge(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
                    };
                }
                function ve(a) {
                    return le((function(o) {
                        return o = +o, le((function(e, t) {
                            var n, r = a([], e.length, o), i = r.length;
                            while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
                        }));
                    }));
                }
                function ye(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e;
                }
                for (e in d = se.support = {}, i = se.isXML = function(e) {
                    var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
                    return !Y.test(t || n && n.nodeName || "HTML");
                }, T = se.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : p;
                    return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, 
                    E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), 
                    d.scope = ce((function(e) {
                        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })), d.attributes = ce((function(e) {
                        return e.className = "i", !e.getAttribute("className");
                    })), d.getElementsByTagName = ce((function(e) {
                        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
                    })), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce((function(e) {
                        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
                    })), d.getById ? (b.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t;
                        };
                    }, b.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && E) {
                            var n = t.getElementById(e);
                            return n ? [ n ] : [];
                        }
                    }) : (b.filter.ID = function(e) {
                        var n = e.replace(te, ne);
                        return function(e) {
                            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n;
                        };
                    }, b.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && E) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                                i = t.getElementsByName(e), r = 0;
                                while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                            }
                            return [];
                        }
                    }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
                    } : function(e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            while (n = o[i++]) 1 === n.nodeType && r.push(n);
                            return r;
                        }
                        return o;
                    }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
                    }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce((function(e) {
                        var t;
                        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                        e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), 
                        e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), 
                        e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), 
                        e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), 
                        e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), 
                        e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
                    })), ce((function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = C.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 
                        2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), 
                        a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), 
                        e.querySelectorAll("*,:x"), v.push(",.*:");
                    }))), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce((function(e) {
                        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
                    })), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), 
                    t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                    } : function(e, t) {
                        if (t) while (t = t.parentNode) if (t === e) return !0;
                        return !1;
                    }, j = t ? function(e, t) {
                        if (e === t) return l = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
                    } : function(e, t) {
                        if (e === t) return l = !0, 0;
                        var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                        if (i === o) return pe(e, t);
                        n = e;
                        while (n = n.parentNode) a.unshift(n);
                        n = t;
                        while (n = n.parentNode) s.unshift(n);
                        while (a[r] === s[r]) r++;
                        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
                    }), C;
                }, se.matches = function(e, t) {
                    return se(e, null, null, t);
                }, se.matchesSelector = function(e, t) {
                    if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                        var n = c.call(e, t);
                        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
                    } catch (e) {
                        N(t, !0);
                    }
                    return 0 < se(t, C, null, [ e ]).length;
                }, se.contains = function(e, t) {
                    return (e.ownerDocument || e) != C && T(e), y(e, t);
                }, se.attr = function(e, t) {
                    (e.ownerDocument || e) != C && T(e);
                    var n = b.attrHandle[t.toLowerCase()], r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                    return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }, se.escape = function(e) {
                    return (e + "").replace(re, ie);
                }, se.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }, se.uniqueSort = function(e) {
                    var t, n = [], r = 0, i = 0;
                    if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                        while (t = e[i++]) t === e[i] && (r = n.push(i));
                        while (r--) e.splice(n[r], 1);
                    }
                    return u = null, e;
                }, o = se.getText = function(e) {
                    var t, n = "", r = 0, i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                        } else if (3 === i || 4 === i) return e.nodeValue;
                    } else while (t = e[r++]) n += o(t);
                    return n;
                }, (b = se.selectors = {
                    cacheLength: 50,
                    createPseudo: le,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), 
                            "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), 
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), 
                            e;
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                            e[2] = n.slice(0, t)), e.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0;
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                        },
                        CLASS: function(e) {
                            var t = m[e + " "];
                            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, (function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                            }));
                        },
                        ATTR: function(n, r, i) {
                            return function(e) {
                                var t = se.attr(e, n);
                                return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                            };
                        },
                        CHILD: function(h, e, t, g, v) {
                            var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
                            return 1 === g && 0 === v ? function(e) {
                                return !!e.parentNode;
                            } : function(e, t, n) {
                                var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                                if (c) {
                                    if (y) {
                                        while (l) {
                                            a = e;
                                            while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                            u = l = "only" === h && !u && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (u = [ m ? c.firstChild : c.lastChild ], m && p) {
                                        d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], 
                                        a = s && c.childNodes[s];
                                        while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [ k, s, d ];
                                            break;
                                        }
                                    } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), 
                                    !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [ k, d ]), 
                                    a === e)) break;
                                    return (d -= v) === g || d % g == 0 && 0 <= d / g;
                                }
                            };
                        },
                        PSEUDO: function(e, o) {
                            var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            return a[S] ? a(o) : 1 < a.length ? (t = [ e, e, "", o ], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, t) {
                                var n, r = a(e, o), i = r.length;
                                while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]);
                            })) : function(e) {
                                return a(e, 0, t);
                            }) : a;
                        }
                    },
                    pseudos: {
                        not: le((function(e) {
                            var r = [], i = [], s = f(e.replace($, "$1"));
                            return s[S] ? le((function(e, t, n, r) {
                                var i, o = s(e, null, r, []), a = e.length;
                                while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                            })) : function(e, t, n) {
                                return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
                            };
                        })),
                        has: le((function(t) {
                            return function(e) {
                                return 0 < se(t, e).length;
                            };
                        })),
                        contains: le((function(t) {
                            return t = t.replace(te, ne), function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t);
                            };
                        })),
                        lang: le((function(n) {
                            return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), 
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1;
                            };
                        })),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id;
                        },
                        root: function(e) {
                            return e === a;
                        },
                        focus: function(e) {
                            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected;
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(e) {
                            return !b.pseudos.empty(e);
                        },
                        header: function(e) {
                            return J.test(e.nodeName);
                        },
                        input: function(e) {
                            return Q.test(e.nodeName);
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t;
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: ve((function() {
                            return [ 0 ];
                        })),
                        last: ve((function(e, t) {
                            return [ t - 1 ];
                        })),
                        eq: ve((function(e, t, n) {
                            return [ n < 0 ? n + t : n ];
                        })),
                        even: ve((function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        })),
                        odd: ve((function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        })),
                        lt: ve((function(e, t, n) {
                            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                            return e;
                        })),
                        gt: ve((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                            return e;
                        }))
                    }
                }).pseudos.nth = b.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) b.pseudos[e] = de(e);
                for (e in {
                    submit: !0,
                    reset: !0
                }) b.pseudos[e] = he(e);
                function me() {}
                function xe(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r;
                }
                function be(s, e, t) {
                    var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
                    return e.first ? function(e, t, n) {
                        while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
                        return !1;
                    } : function(e, t, n) {
                        var r, i, o, a = [ k, p ];
                        if (n) {
                            while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                        } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), 
                        l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                            if ((i[c] = a)[2] = s(e, t, n)) return !0;
                        }
                        return !1;
                    };
                }
                function we(i) {
                    return 1 < i.length ? function(e, t, n) {
                        var r = i.length;
                        while (r--) if (!i[r](e, t, n)) return !1;
                        return !0;
                    } : i[0];
                }
                function Te(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
                    l && t.push(s)));
                    return a;
                }
                function Ce(d, h, g, v, y, e) {
                    return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le((function(e, t, n, r) {
                        var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                            return n;
                        }(h || "*", n.nodeType ? [ n ] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                        if (g && g(f, p, n, r), v) {
                            i = Te(p, u), v(i, [], n, r), o = i.length;
                            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                        }
                        if (e) {
                            if (y || d) {
                                if (y) {
                                    i = [], o = p.length;
                                    while (o--) (a = p[o]) && i.push(f[o] = a);
                                    y(null, p = [], i, r);
                                }
                                o = p.length;
                                while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
                            }
                        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
                    }));
                }
                function Ee(e) {
                    for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be((function(e) {
                        return e === i;
                    }), a, !0), l = be((function(e) {
                        return -1 < P(i, e);
                    }), a, !0), c = [ function(e, t, n) {
                        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                        return i = null, r;
                    } ]; s < r; s++) if (t = b.relative[e[s].type]) c = [ be(we(c), t) ]; else {
                        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
                        }
                        c.push(t);
                    }
                    return we(c);
                }
                return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
                    var n, r, i, o, a, s, u, l = x[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    a = e, s = [], u = b.preFilter;
                    while (a) {
                        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), 
                        n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                            value: n,
                            type: r[0].replace($, " ")
                        }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), 
                        i.push({
                            value: n,
                            type: o,
                            matches: r
                        }), a = a.slice(n.length));
                        if (!n) break;
                    }
                    return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
                }, f = se.compile = function(e, t) {
                    var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
                    if (!a) {
                        t || (t = h(e)), n = t.length;
                        while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                            var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                            for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                                if (x && o) {
                                    a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                                    while (s = v[a++]) if (s(o, t || C, n)) {
                                        r.push(o);
                                        break;
                                    }
                                    i && (k = h);
                                }
                                m && ((o = !s && o) && u--, e && c.push(o));
                            }
                            if (u += l, m && l !== u) {
                                a = 0;
                                while (s = y[a++]) s(c, f, t, n);
                                if (e) {
                                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                                    f = Te(f);
                                }
                                H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
                            }
                            return i && (k = h, w = p), c;
                        }, m ? le(r) : r))).selector = e;
                    }
                    return a;
                }, g = se.select = function(e, t, n, r) {
                    var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
                    if (n = n || [], 1 === c.length) {
                        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                            if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                            l && (t = t.parentNode), e = e.slice(o.shift().value.length);
                        }
                        i = G.needsContext.test(e) ? 0 : o.length;
                        while (i--) {
                            if (a = o[i], b.relative[s = a.type]) break;
                            if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                                if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                                break;
                            }
                        }
                    }
                    return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
                }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, 
                T(), d.sortDetached = ce((function(e) {
                    return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
                })), ce((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
                })) || fe("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                })), d.attributes && ce((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) || fe("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                })), ce((function(e) {
                    return null == e.getAttribute("disabled");
                })) || fe(R, (function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                })), se;
            }(C);
            S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, 
            S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
            var h = function(e, t, n) {
                var r = [], i = void 0 !== n;
                while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e);
                }
                return r;
            }, T = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n;
            }, k = S.expr.match.needsContext;
            function A(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function j(e, n, r) {
                return m(n) ? S.grep(e, (function(e, t) {
                    return !!n.call(e, t, e) !== r;
                })) : n.nodeType ? S.grep(e, (function(e) {
                    return e === n !== r;
                })) : "string" != typeof n ? S.grep(e, (function(e) {
                    return -1 < i.call(n, e) !== r;
                })) : S.filter(n, e, r);
            }
            S.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [ r ] : [] : S.find.matches(e, S.grep(t, (function(e) {
                    return 1 === e.nodeType;
                })));
            }, S.fn.extend({
                find: function(e) {
                    var t, n, r = this.length, i = this;
                    if ("string" != typeof e) return this.pushStack(S(e).filter((function() {
                        for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
                    })));
                    for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
                    return 1 < r ? S.uniqueSort(n) : n;
                },
                filter: function(e) {
                    return this.pushStack(j(this, e || [], !1));
                },
                not: function(e) {
                    return this.pushStack(j(this, e || [], !0));
                },
                is: function(e) {
                    return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
                }
            });
            var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (S.fn.init = function(e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || D, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), 
                        N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this;
                    }
                    return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
            }).prototype = S.fn, D = S(E);
            var L = /^(?:parents|prev(?:Until|All))/, H = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function O(e, t) {
                while ((e = e[t]) && 1 !== e.nodeType) ;
                return e;
            }
            S.fn.extend({
                has: function(e) {
                    var t = S(e, this), n = t.length;
                    return this.filter((function() {
                        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
                    }));
                },
                closest: function(e, t) {
                    var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
                    if (!k.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                        o.push(n);
                        break;
                    }
                    return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
                },
                index: function(e) {
                    return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function(e, t) {
                    return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                }
            }), S.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                    return h(e, "parentNode");
                },
                parentsUntil: function(e, t, n) {
                    return h(e, "parentNode", n);
                },
                next: function(e) {
                    return O(e, "nextSibling");
                },
                prev: function(e) {
                    return O(e, "previousSibling");
                },
                nextAll: function(e) {
                    return h(e, "nextSibling");
                },
                prevAll: function(e) {
                    return h(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                    return h(e, "nextSibling", n);
                },
                prevUntil: function(e, t, n) {
                    return h(e, "previousSibling", n);
                },
                siblings: function(e) {
                    return T((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return T(e.firstChild);
                },
                contents: function(e) {
                    return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), 
                    S.merge([], e.childNodes));
                }
            }, (function(r, i) {
                S.fn[r] = function(e, t) {
                    var n = S.map(this, i, e);
                    return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 
                    1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
                };
            }));
            var P = /[^\x20\t\r\n\f]+/g;
            function R(e) {
                return e;
            }
            function M(e) {
                throw e;
            }
            function I(e, t, n, r) {
                var i;
                try {
                    e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
                } catch (e) {
                    n.apply(void 0, [ e ]);
                }
            }
            S.Callbacks = function(r) {
                var e, n;
                r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], (function(e, t) {
                    n[t] = !0;
                })), n) : S.extend({}, r);
                var i, t, o, a, s = [], u = [], l = -1, c = function() {
                    for (a = a || r.once, o = i = !0; u.length; l = -1) {
                        t = u.shift();
                        while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, 
                        t = !1);
                    }
                    r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
                }, f = {
                    add: function() {
                        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                            S.each(e, (function(e, t) {
                                m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
                            }));
                        }(arguments), t && !i && c()), this;
                    },
                    remove: function() {
                        return S.each(arguments, (function(e, t) {
                            var n;
                            while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
                        })), this;
                    },
                    has: function(e) {
                        return e ? -1 < S.inArray(e, s) : 0 < s.length;
                    },
                    empty: function() {
                        return s && (s = []), this;
                    },
                    disable: function() {
                        return a = u = [], s = t = "", this;
                    },
                    disabled: function() {
                        return !s;
                    },
                    lock: function() {
                        return a = u = [], t || i || (s = t = ""), this;
                    },
                    locked: function() {
                        return !!a;
                    },
                    fireWith: function(e, t) {
                        return a || (t = [ e, (t = t || []).slice ? t.slice() : t ], u.push(t), i || c()), 
                        this;
                    },
                    fire: function() {
                        return f.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!o;
                    }
                };
                return f;
            }, S.extend({
                Deferred: function(e) {
                    var o = [ [ "notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2 ], [ "resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected" ] ], i = "pending", a = {
                        state: function() {
                            return i;
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function(e) {
                            return a.then(null, e);
                        },
                        pipe: function() {
                            var i = arguments;
                            return S.Deferred((function(r) {
                                S.each(o, (function(e, t) {
                                    var n = m(i[t[4]]) && i[t[4]];
                                    s[t[1]]((function() {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [ e ] : arguments);
                                    }));
                                })), i = null;
                            })).promise();
                        },
                        then: function(t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function() {
                                    var n = this, r = arguments, e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, 
                                            t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, 
                                            r = [ e ]), (s || o.resolveWith)(n, r));
                                        }
                                    }, t = s ? e : function() {
                                        try {
                                            e();
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, 
                                            r = [ e ]), o.rejectWith(n, r));
                                        }
                                    };
                                    i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), 
                                    C.setTimeout(t));
                                };
                            }
                            return S.Deferred((function(e) {
                                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), 
                                o[2][3].add(l(0, e, m(n) ? n : M));
                            })).promise();
                        },
                        promise: function(e) {
                            return null != e ? S.extend(e, a) : a;
                        }
                    }, s = {};
                    return S.each(o, (function(e, t) {
                        var n = t[2], r = t[5];
                        a[t[1]] = n.add, r && n.add((function() {
                            i = r;
                        }), o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), 
                        s[t[0]] = function() {
                            return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                        }, s[t[0] + "With"] = n.fireWith;
                    })), a.promise(s), e && e.call(s, s), s;
                },
                when: function(e) {
                    var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = S.Deferred(), a = function(t) {
                        return function(e) {
                            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
                        };
                    };
                    if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
                    while (t--) I(i[t], a(t), o.reject);
                    return o.promise();
                }
            });
            var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            S.Deferred.exceptionHook = function(e, t) {
                C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }, S.readyException = function(e) {
                C.setTimeout((function() {
                    throw e;
                }));
            };
            var F = S.Deferred();
            function B() {
                E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), 
                S.ready();
            }
            S.fn.ready = function(e) {
                return F.then(e)["catch"]((function(e) {
                    S.readyException(e);
                })), this;
            }, S.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [ S ]);
                }
            }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), 
            C.addEventListener("load", B));
            var $ = function(e, t, n, r, i, o, a) {
                var s = 0, u = e.length, l = null == n;
                if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, 
                m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(S(e), n);
                })), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
            }, _ = /^-ms-/, z = /-([a-z])/g;
            function U(e, t) {
                return t.toUpperCase();
            }
            function X(e) {
                return e.replace(_, "ms-").replace(z, U);
            }
            var V = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function G() {
                this.expando = S.expando + G.uid++;
            }
            G.uid = 1, G.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t;
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r];
                    return i;
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
                    void 0 !== n ? n : t);
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [ t ] : t.match(P) || []).length;
                            while (n--) delete r[t[n]];
                        }
                        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !S.isEmptyObject(t);
                }
            };
            var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;
            function Z(e, t, n) {
                var r, i;
                if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), 
                "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
                    } catch (e) {}
                    Q.set(e, t, n);
                } else n = void 0;
                return n;
            }
            S.extend({
                hasData: function(e) {
                    return Q.hasData(e) || Y.hasData(e);
                },
                data: function(e, t, n) {
                    return Q.access(e, t, n);
                },
                removeData: function(e, t) {
                    Q.remove(e, t);
                },
                _data: function(e, t, n) {
                    return Y.access(e, t, n);
                },
                _removeData: function(e, t) {
                    Y.remove(e, t);
                }
            }), S.fn.extend({
                data: function(n, e) {
                    var t, r, i, o = this[0], a = o && o.attributes;
                    if (void 0 === n) {
                        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                            t = a.length;
                            while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), 
                            Z(o, r, i[r]));
                            Y.set(o, "hasDataAttrs", !0);
                        }
                        return i;
                    }
                    return "object" == typeof n ? this.each((function() {
                        Q.set(this, n);
                    })) : $(this, (function(e) {
                        var t;
                        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                        this.each((function() {
                            Q.set(this, n, e);
                        }));
                    }), null, e, 1 < arguments.length, null, !0);
                },
                removeData: function(e) {
                    return this.each((function() {
                        Q.remove(this, e);
                    }));
                }
            }), S.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), 
                    r || [];
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = S.queue(e, t), r = n.length, i = n.shift(), o = S._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
                    delete o.stop, i.call(e, (function() {
                        S.dequeue(e, t);
                    }), o)), !r && o && o.empty.fire();
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return Y.get(e, n) || Y.access(e, n, {
                        empty: S.Callbacks("once memory").add((function() {
                            Y.remove(e, [ t + "queue", n ]);
                        }))
                    });
                }
            }), S.fn.extend({
                queue: function(t, n) {
                    var e = 2;
                    return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each((function() {
                        var e = S.queue(this, t, n);
                        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
                    }));
                },
                dequeue: function(e) {
                    return this.each((function() {
                        S.dequeue(this, e);
                    }));
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", []);
                },
                promise: function(e, t) {
                    var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                        --r || i.resolveWith(o, [ o ]);
                    };
                    "string" != typeof e && (t = e, e = void 0), e = e || "fx";
                    while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t);
                }
            });
            var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = [ "Top", "Right", "Bottom", "Left" ], re = E.documentElement, ie = function(e) {
                return S.contains(e.ownerDocument, e);
            }, oe = {
                composed: !0
            };
            re.getRootNode && (ie = function(e) {
                return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
            });
            var ae = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
            };
            function se(e, t, n, r) {
                var i, o, a = 20, s = r ? function() {
                    return r.cur();
                } : function() {
                    return S.css(e, t, "");
                }, u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
                if (c && c[3] !== l) {
                    u /= 2, l = l || c[3], c = +u || 1;
                    while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), 
                    c /= o;
                    c *= 2, S.style(e, t, c + l), n = n || [];
                }
                return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
                r.start = c, r.end = i)), i;
            }
            var ue = {};
            function le(e, t) {
                for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, 
                t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), 
                "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, 
                s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), 
                o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", 
                Y.set(r, "display", n)));
                for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
                return e;
            }
            S.fn.extend({
                show: function() {
                    return le(this, !0);
                },
                hide: function() {
                    return le(this);
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        ae(this) ? S(this).show() : S(this).hide();
                    }));
                }
            });
            var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
            ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), 
            fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), 
            y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", 
            y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", 
            y.option = !!ce.lastChild;
            var ge = {
                thead: [ 1, "<table>", "</table>" ],
                col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                _default: [ 0, "", "" ]
            };
            function ve(e, t) {
                var n;
                return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
                void 0 === t || t && A(e, t) ? S.merge([ e ], n) : n;
            }
            function ye(e, t) {
                for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
            }
            ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
            var me = /<|&#?\w+;/;
            function xe(e, t, n, r, i) {
                for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [ o ] : o); else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || [ "", "" ])[1].toLowerCase(), 
                    u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
                    while (c--) a = a.lastChild;
                    S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
                } else p.push(t.createTextNode(o));
                f.textContent = "", d = 0;
                while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o); else if (l = ie(o), 
                a = ve(f.appendChild(o), "script"), l && ye(a), n) {
                    c = 0;
                    while (o = a[c++]) he.test(o.type || "") && n.push(o);
                }
                return f;
            }
            var be = /^([^.]*)(?:\.(.+)|)/;
            function we() {
                return !0;
            }
            function Te() {
                return !1;
            }
            function Ce(e, t) {
                return e === function() {
                    try {
                        return E.activeElement;
                    } catch (e) {}
                }() == ("focus" === t);
            }
            function Ee(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
                    return e;
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
                r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te; else if (!i) return e;
                return 1 === o && (a = i, (i = function(e) {
                    return S().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = S.guid++)), e.each((function() {
                    S.event.add(this, t, i, r, n);
                }));
            }
            function Se(e, i, o) {
                o ? (Y.set(e, i, !1), S.event.add(e, i, {
                    namespace: !1,
                    handler: function(e) {
                        var t, n, r = Y.get(this, i);
                        if (1 & e.isTrigger && this[i]) {
                            if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), 
                            Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, 
                            r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
                        } else r.length && (Y.set(this, i, {
                            value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                        }), e.stopImmediatePropagation());
                    }
                })) : void 0 === Y.get(e, i) && S.event.add(e, i, we);
            }
            S.event = {
                global: {},
                add: function(t, e, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
                    if (V(t)) {
                        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), 
                        n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), 
                        (a = v.handle) || (a = v.handle = function(e) {
                            return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
                        }), l = (e = (e || "").match(P) || [ "" ]).length;
                        while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), 
                        d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, 
                        f = S.event.special[d] || {}, c = S.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && S.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), 
                        f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
                        S.event.global[d] = !0);
                    }
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
                    if (v && (u = v.events)) {
                        l = (t = (t || "").match(P) || [ "" ]).length;
                        while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), 
                        d) {
                            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                            while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), 
                            c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), 
                            delete u[d]);
                        } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                        S.isEmptyObject(u) && Y.remove(e, "handle events");
                    }
                },
                dispatch: function(e) {
                    var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
                    for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                    if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                        a = S.event.handlers.call(this, u, l), t = 0;
                        while ((i = a[t++]) && !u.isPropagationStopped()) {
                            u.currentTarget = i.elem, n = 0;
                            while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, 
                            u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), 
                            u.stopPropagation()));
                        }
                        return c.postDispatch && c.postDispatch.call(this, u), u.result;
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
                    if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [ l ]).length), 
                        a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        });
                    }
                    return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s;
                },
                addProp: function(t, e) {
                    Object.defineProperty(S.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: m(e) ? function() {
                            if (this.originalEvent) return e(this.originalEvent);
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[t];
                        },
                        set: function(e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e
                            });
                        }
                    });
                },
                fix: function(e) {
                    return e[S.expando] ? e : new S.Event(e);
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1;
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0;
                        },
                        _default: function(e) {
                            var t = e.target;
                            return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        }
                    }
                }
            }, S.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
            }, S.Event = function(e, t) {
                if (!(this instanceof S.Event)) return new S.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, 
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
                this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
                t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
            }, S.Event.prototype = {
                constructor: S.Event,
                isDefaultPrevented: Te,
                isPropagationStopped: Te,
                isImmediatePropagationStopped: Te,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), 
                    this.stopPropagation();
                }
            }, S.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, S.event.addProp), S.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                S.event.special[e] = {
                    setup: function() {
                        return Se(this, e, Ce), !1;
                    },
                    trigger: function() {
                        return Se(this, e), !0;
                    },
                    _default: function() {
                        return !0;
                    },
                    delegateType: t
                };
            })), S.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(e, i) {
                S.event.special[e] = {
                    delegateType: i,
                    bindType: i,
                    handle: function(e) {
                        var t, n = e.relatedTarget, r = e.handleObj;
                        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), 
                        e.type = i), t;
                    }
                };
            })), S.fn.extend({
                on: function(e, t, n, r) {
                    return Ee(this, e, t, n, r);
                },
                one: function(e, t, n, r) {
                    return Ee(this, e, t, n, r, 1);
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                    this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this;
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), 
                    this.each((function() {
                        S.event.remove(this, e, n, t);
                    }));
                }
            });
            var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function je(e, t) {
                return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
            }
            function De(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
            }
            function qe(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
                e;
            }
            function Le(e, t) {
                var n, r, i, o, a, s;
                if (1 === t.nodeType) {
                    if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), 
                    s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
                    Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
                }
            }
            function He(n, r, i, o) {
                r = g(r);
                var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
                if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each((function(e) {
                    var t = n.eq(e);
                    h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
                }));
                if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), 
                t || o)) {
                    for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), 
                    s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
                    if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], 
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(Ne, ""), u, l));
                }
                return n;
            }
            function Oe(e, t, n) {
                for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), 
                r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
                return e;
            }
            S.extend({
                htmlPrefilter: function(e) {
                    return e;
                },
                clone: function(e, t, n) {
                    var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
                    if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), 
                    r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                    if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]); else Le(e, c);
                    return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
                },
                cleanData: function(e) {
                    for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
                        if (t = n[Y.expando]) {
                            if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                            n[Y.expando] = void 0;
                        }
                        n[Q.expando] && (n[Q.expando] = void 0);
                    }
                }
            }), S.fn.extend({
                detach: function(e) {
                    return Oe(this, e, !0);
                },
                remove: function(e) {
                    return Oe(this, e);
                },
                text: function(e) {
                    return $(this, (function(e) {
                        return void 0 === e ? S.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                        }));
                    }), null, e, arguments.length);
                },
                append: function() {
                    return He(this, arguments, (function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
                    }));
                },
                prepend: function() {
                    return He(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = je(this, e);
                            t.insertBefore(e, t.firstChild);
                        }
                    }));
                },
                before: function() {
                    return He(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this);
                    }));
                },
                after: function() {
                    return He(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                    }));
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), 
                    e.textContent = "");
                    return this;
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function() {
                        return S.clone(this, e, t);
                    }));
                },
                html: function(e) {
                    return $(this, (function(e) {
                        var t = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), 
                                t.innerHTML = e);
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    }), null, e, arguments.length);
                },
                replaceWith: function() {
                    var n = [];
                    return He(this, arguments, (function(e) {
                        var t = this.parentNode;
                        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
                    }), n);
                }
            }), S.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, a) {
                S.fn[e] = function(e) {
                    for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), 
                    S(r[o])[a](t), u.apply(n, t.get());
                    return this.pushStack(n);
                };
            }));
            var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = C), t.getComputedStyle(e);
            }, Me = function(e, t, n) {
                var r, i, o = {};
                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                for (i in r = n.call(e), t) e.style[i] = o[i];
                return r;
            }, Ie = new RegExp(ne.join("|"), "i");
            function We(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), 
                !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, 
                o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
                s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
            }
            function Fe(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get;
                    }
                };
            }
            !function() {
                function e() {
                    if (l) {
                        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                        l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                        re.appendChild(u).appendChild(l);
                        var e = C.getComputedStyle(l);
                        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), 
                        r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), 
                        re.removeChild(u), l = null;
                    }
                }
                function t(e) {
                    return Math.round(parseFloat(e));
                }
                var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
                l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
                y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
                    boxSizingReliable: function() {
                        return e(), r;
                    },
                    pixelBoxStyles: function() {
                        return e(), o;
                    },
                    pixelPosition: function() {
                        return e(), n;
                    },
                    reliableMarginLeft: function() {
                        return e(), s;
                    },
                    scrollboxSize: function() {
                        return e(), i;
                    },
                    reliableTrDimensions: function() {
                        var e, t, n, r;
                        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), 
                        e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", 
                        t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), 
                        r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, 
                        re.removeChild(e)), a;
                    }
                }));
            }();
            var Be = [ "Webkit", "Moz", "ms" ], $e = E.createElement("div").style, _e = {};
            function ze(e) {
                var t = S.cssProps[e] || _e[e];
                return t || (e in $e ? e : _e[e] = function(e) {
                    var t = e[0].toUpperCase() + e.slice(1), n = Be.length;
                    while (n--) if ((e = Be[n] + t) in $e) return e;
                }(e) || e);
            }
            var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ve = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, Ge = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function Ye(e, t, n) {
                var r = te.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
            }
            function Qe(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0, s = 0, u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (;a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), 
                "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), 
                "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
                return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), 
                u;
            }
            function Je(e, t, n) {
                var r = Re(e), i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r), o = i, a = We(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Pe.test(a)) {
                    if (!n) return a;
                    a = "auto";
                }
                return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), 
                (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
            }
            function Ke(e, t, n, r, i) {
                return new Ke.prototype.init(e, t, n, r, i);
            }
            S.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = We(e, "opacity");
                                return "" === n ? "1" : n;
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = X(t), u = Xe.test(t), l = e.style;
                        if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), 
                        null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), 
                        y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                        a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = X(t);
                    return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), 
                    void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), 
                    !0 === n || isFinite(o) ? o || 0 : i) : i;
                }
            }), S.each([ "height", "width" ], (function(e, u) {
                S.cssHooks[u] = {
                    get: function(e, t, n) {
                        if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, (function() {
                            return Je(e, u, n);
                        }));
                    },
                    set: function(e, t, n) {
                        var r, i = Re(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0;
                        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), 
                        s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), 
                        Ye(0, t, s);
                    }
                };
            })), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, (function(e, t) {
                if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left;
                }))) + "px";
            })), S.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(i, o) {
                S.cssHooks[i + o] = {
                    expand: function(e) {
                        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [ e ]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                        return n;
                    }
                }, "margin" !== i && (S.cssHooks[i + o].set = Ye);
            })), S.fn.extend({
                css: function(e, t) {
                    return $(this, (function(e, t, n) {
                        var r, i, o = {}, a = 0;
                        if (Array.isArray(t)) {
                            for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                    }), e, t, 1 < arguments.length);
                }
            }), ((S.Tween = Ke).prototype = {
                constructor: Ke,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, 
                    this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
                },
                cur: function() {
                    var e = Ke.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
                },
                run: function(e) {
                    var t, n = Ke.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
                    this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                    n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this;
                }
            }).init.prototype = Ke.prototype, (Ke.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                    },
                    set: function(e) {
                        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
                    }
                }
            }).scrollTop = Ke.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                }
            }, S.easing = {
                linear: function(e) {
                    return e;
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing"
            }, S.fx = Ke.prototype.init, S.fx.step = {};
            var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
            function ot() {
                et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), 
                S.fx.tick());
            }
            function at() {
                return C.setTimeout((function() {
                    Ze = void 0;
                })), Ze = Date.now();
            }
            function st(e, t) {
                var n, r = 0, i = {
                    height: e
                };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i;
            }
            function ut(e, t, n) {
                for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
            }
            function lt(o, e, t) {
                var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always((function() {
                    delete u.elem;
                })), u = function() {
                    if (a) return !1;
                    for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                    return s.notifyWith(o, [ l, n, t ]), n < 1 && i ? t : (i || s.notifyWith(o, [ l, 1, 0 ]), 
                    s.resolveWith(o, [ l ]), !1);
                }, l = s.promise({
                    elem: o,
                    props: S.extend({}, e),
                    opts: S.extend(!0, {
                        specialEasing: {},
                        easing: S.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Ze || at(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                        return l.tweens.push(n), n;
                    },
                    stop: function(e) {
                        var t = 0, n = e ? l.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; t < n; t++) l.tweens[t].run(1);
                        return e ? (s.notifyWith(o, [ l, 1, 0 ]), s.resolveWith(o, [ l, e ])) : s.rejectWith(o, [ l, e ]), 
                        this;
                    }
                }), c = l.props;
                for (!function(e, t) {
                    var n, r, i, o, a;
                    for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), 
                    n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), 
                    delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i;
                }(c, l.opts.specialEasing); r < i; r++) if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), 
                n;
                return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
                S.fx.timer(S.extend(u, {
                    elem: o,
                    anim: l,
                    queue: l.opts.queue
                })), l;
            }
            S.Animation = S.extend(lt, {
                tweeners: {
                    "*": [ function(e, t) {
                        var n = this.createTween(e, t);
                        return se(n.elem, e, te.exec(t), n), n;
                    } ]
                },
                tweener: function(e, t) {
                    m(e) ? (t = e, e = [ "*" ]) : e = e.match(P);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], 
                    lt.tweeners[n].unshift(t);
                },
                prefilters: [ function(e, t, n) {
                    var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
                    for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
                    s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s();
                    }), a.unqueued++, p.always((function() {
                        p.always((function() {
                            a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                        }));
                    }))), t) if (i = t[r], rt.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0;
                        }
                        d[r] = v && v[r] || S.style(e, r);
                    }
                    if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
                    null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([ e ], !0), 
                    l = e.style.display || l, c = S.css(e, "display"), le([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done((function() {
                        h.display = l;
                    })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
                    n.overflow && (h.overflow = "hidden", p.always((function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                    }))), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }), o && (v.hidden = !g), g && le([ e ], !0), p.done((function() {
                        for (r in g || le([ e ]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]);
                    }))), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, 
                    u.start = 0));
                } ],
                prefilter: function(e, t) {
                    t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
                }
            }), S.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? S.extend({}, e) : {
                    complete: n || !n && t || m(e) && e,
                    duration: e,
                    easing: n && t || t && !m(t) && t
                };
                return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), 
                null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
                }, r;
            }, S.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(ae).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r);
                },
                animate: function(t, e, n, r) {
                    var i = S.isEmptyObject(t), o = S.speed(e, n, r), a = function() {
                        var e = lt(this, S.extend({}, t), o);
                        (i || Y.get(this, "finish")) && e.stop(!0);
                    };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
                },
                stop: function(i, e, o) {
                    var a = function(e) {
                        var t = e.stop;
                        delete e.stop, t(o);
                    };
                    return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), 
                    this.each((function() {
                        var e = !0, t = null != i && i + "queueHooks", n = S.timers, r = Y.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
                        for (t = n.length; t--; ) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), 
                        e = !1, n.splice(t, 1));
                        !e && o || S.dequeue(this, i);
                    }));
                },
                finish: function(a) {
                    return !1 !== a && (a = a || "fx"), this.each((function() {
                        var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), 
                        e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), 
                        i.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    }));
                }
            }), S.each([ "toggle", "show", "hide" ], (function(e, r) {
                var i = S.fn[r];
                S.fn[r] = function(e, t, n) {
                    return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
                };
            })), S.each({
                slideDown: st("show"),
                slideUp: st("hide"),
                slideToggle: st("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, r) {
                S.fn[e] = function(e, t, n) {
                    return this.animate(r, e, t, n);
                };
            })), S.timers = [], S.fx.tick = function() {
                var e, t = 0, n = S.timers;
                for (Ze = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || S.fx.stop(), Ze = void 0;
            }, S.fx.timer = function(e) {
                S.timers.push(e), S.fx.start();
            }, S.fx.interval = 13, S.fx.start = function() {
                et || (et = !0, ot());
            }, S.fx.stop = function() {
                et = null;
            }, S.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, S.fn.delay = function(r, e) {
                return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, (function(e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function() {
                        C.clearTimeout(n);
                    };
                }));
            }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), 
            tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, 
            (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
            var ct, ft = S.expr.attrHandle;
            S.fn.extend({
                attr: function(e, t) {
                    return $(this, S.attr, e, t, 1 < arguments.length);
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        S.removeAttr(this, e);
                    }));
                }
            }), S.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), 
                    void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
                    n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!y.radioValue && "radio" === t && A(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t;
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0, i = t && t.match(P);
                    if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
                }
            }), ct = {
                set: function(e, t, n) {
                    return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
                }
            }, S.each(S.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                var a = ft[t] || S.find.attr;
                ft[t] = function(e, t, n) {
                    var r, i, o = t.toLowerCase();
                    return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), 
                    r;
                };
            }));
            var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i;
            function ht(e) {
                return (e.match(P) || []).join(" ");
            }
            function gt(e) {
                return e.getAttribute && e.getAttribute("class") || "";
            }
            function vt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
            }
            S.fn.extend({
                prop: function(e, t) {
                    return $(this, S.prop, e, t, 1 < arguments.length);
                },
                removeProp: function(e) {
                    return this.each((function() {
                        delete this[S.propFix[e] || e];
                    }));
                }
            }), S.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, 
                    i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = S.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), y.optSelected || (S.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                }
            }), S.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                S.propFix[this.toLowerCase()] = this;
            })), S.fn.extend({
                addClass: function(t) {
                    var e, n, r, i, o, a, s, u = 0;
                    if (m(t)) return this.each((function(e) {
                        S(this).addClass(t.call(this, e, gt(this)));
                    }));
                    if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s);
                    }
                    return this;
                },
                removeClass: function(t) {
                    var e, n, r, i, o, a, s, u = 0;
                    if (m(t)) return this.each((function(e) {
                        S(this).removeClass(t.call(this, e, gt(this)));
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s);
                    }
                    return this;
                },
                toggleClass: function(i, t) {
                    var o = typeof i, a = "string" === o || Array.isArray(i);
                    return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each((function(e) {
                        S(this).toggleClass(i.call(this, e, gt(this), t), t);
                    })) : this.each((function() {
                        var e, t, n, r;
                        if (a) {
                            t = 0, n = S(this), r = vt(i);
                            while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                        } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), 
                        this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
                    }));
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    t = " " + e + " ";
                    while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
                    return !1;
                }
            });
            var yt = /\r/g;
            S.fn.extend({
                val: function(n) {
                    var r, e, i, t = this[0];
                    return arguments.length ? (i = m(n), this.each((function(e) {
                        var t;
                        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, (function(e) {
                            return null == e ? "" : e + "";
                        }))), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
                    }))) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0;
                }
            }), S.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = S.find.attr(e, "value");
                            return null != t ? t : ht(S.text(e));
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (t = S(n).val(), a) return t;
                                s.push(t);
                            }
                            return s;
                        },
                        set: function(e, t) {
                            var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                            while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                            return n || (e.selectedIndex = -1), o;
                        }
                    }
                }
            }), S.each([ "radio", "checkbox" ], (function() {
                S.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
                    }
                }, y.checkOn || (S.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
            })), y.focusin = "onfocusin" in C;
            var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function(e) {
                e.stopPropagation();
            };
            S.extend(S.event, {
                trigger: function(e, t, n, r) {
                    var i, o, a, s, u, l, c, f, p = [ n || E ], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), 
                    h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, 
                    e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                    e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : S.makeArray(t, [ e ]), 
                    c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                        if (!r && !c.noBubble && !x(n)) {
                            for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), 
                            a = o;
                            a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
                        }
                        i = 0;
                        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, 
                        (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), 
                        (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), 
                        S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), 
                        e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, 
                        a && (n[u] = a)), e.result;
                    }
                },
                simulate: function(e, t, n) {
                    var r = S.extend(new S.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    S.event.trigger(r, null, t);
                }
            }), S.fn.extend({
                trigger: function(e, t) {
                    return this.each((function() {
                        S.event.trigger(e, t, this);
                    }));
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return S.event.trigger(e, t, n, !0);
                }
            }), y.focusin || S.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(n, r) {
                var i = function(e) {
                    S.event.simulate(r, e.target, S.event.fix(e));
                };
                S.event.special[r] = {
                    setup: function() {
                        var e = this.ownerDocument || this.document || this, t = Y.access(e, r);
                        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
                    },
                    teardown: function() {
                        var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1;
                        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
                    }
                };
            }));
            var bt = C.location, wt = {
                guid: Date.now()
            }, Tt = /\?/;
            S.parseXML = function(e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new C.DOMParser).parseFromString(e, "text/xml");
                } catch (e) {}
                return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, (function(e) {
                    return e.textContent;
                })).join("\n") : e)), t;
            };
            var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i;
            function At(n, e, r, i) {
                var t;
                if (Array.isArray(e)) S.each(e, (function(e, t) {
                    r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
                })); else if (r || "object" !== w(e)) i(n, e); else for (t in e) At(n + "[" + t + "]", e[t], r, i);
            }
            S.param = function(e, t) {
                var n, r = [], i = function(e, t) {
                    var n = m(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, (function() {
                    i(this.name, this.value);
                })); else for (n in e) At(n, e[n], t, i);
                return r.join("&");
            }, S.fn.extend({
                serialize: function() {
                    return S.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map((function() {
                        var e = S.prop(this, "elements");
                        return e ? S.makeArray(e) : this;
                    })).filter((function() {
                        var e = this.type;
                        return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e));
                    })).map((function(e, t) {
                        var n = S(this).val();
                        return null == n ? null : Array.isArray(n) ? S.map(n, (function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Et, "\r\n")
                            };
                        })) : {
                            name: t.name,
                            value: n.replace(Et, "\r\n")
                        };
                    })).get();
                }
            });
            var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ot = {}, Pt = {}, Rt = "*/".concat("*"), Mt = E.createElement("a");
            function It(o) {
                return function(e, t) {
                    "string" != typeof e && (t = e, e = "*");
                    var n, r = 0, i = e.toLowerCase().match(P) || [];
                    if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
                };
            }
            function Wt(t, i, o, a) {
                var s = {}, u = t === Pt;
                function l(e) {
                    var r;
                    return s[e] = !0, S.each(t[e] || [], (function(e, t) {
                        var n = t(i, o, a);
                        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), 
                        l(n), !1);
                    })), r;
                }
                return l(i.dataTypes[0]) || !s["*"] && l("*");
            }
            function Ft(e, t) {
                var n, r, i = S.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && S.extend(!0, e, r), e;
            }
            Mt.href = bt.href, S.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: bt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Rt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": S.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
                },
                ajaxPrefilter: It(Ot),
                ajaxTransport: It(Pt),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                }
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return h ? p : null;
                        },
                        setRequestHeader: function(e, t) {
                            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), 
                            this;
                        },
                        overrideMimeType: function(e) {
                            return null == h && (v.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [ w[t], e[t] ];
                            return this;
                        },
                        abort: function(e) {
                            var t = e || u;
                            return c && c.abort(t), l(0, t), this;
                        }
                    };
                    if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), 
                    v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [ "" ], 
                    null == v.crossDomain) {
                        r = E.createElement("a");
                        try {
                            r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host;
                        } catch (e) {
                            v.crossDomain = !0;
                        }
                    }
                    if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), 
                    Wt(Ot, v, t, T), h) return T;
                    for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), 
                    v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), 
                    v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), 
                    v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, 
                    delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), 
                    v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), 
                    S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), 
                    T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), 
                    v.headers) T.setRequestHeader(i, v.headers[i]);
                    if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
                    if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
                        if (T.readyState = 1, g && m.trigger("ajaxSend", [ T, v ]), h) return T;
                        v.async && 0 < v.timeout && (d = C.setTimeout((function() {
                            T.abort("timeout");
                        }), v.timeout));
                        try {
                            h = !1, c.send(a, l);
                        } catch (e) {
                            if (h) throw e;
                            l(-1, e);
                        }
                    } else l(-1, "No Transport");
                    function l(e, t, n, r) {
                        var i, o, a, s, u, l = t;
                        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, 
                        i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                            var r, i, o, a, s = e.contents, u = e.dataTypes;
                            while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r) for (i in s) if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break;
                            }
                            if (u[0] in n) o = u[0]; else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break;
                                    }
                                    a || (a = i);
                                }
                                o = o || a;
                            }
                            if (o) return o !== u[0] && u.unshift(o), n[o];
                        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), 
                        s = function(e, t, n, r) {
                            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
                            u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break;
                                }
                                if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                                    t = a(t);
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + u + " to " + o
                                    };
                                }
                            }
                            return {
                                state: "success",
                                data: t
                            };
                        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), 
                        (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, 
                        o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), 
                        T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [ o, l, T ]) : x.rejectWith(y, [ T, l, a ]), 
                        T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [ T, v, i ? o : a ]), 
                        b.fireWith(y, [ T, l ]), g && (m.trigger("ajaxComplete", [ T, v ]), --S.active || S.event.trigger("ajaxStop")));
                    }
                    return T;
                },
                getJSON: function(e, t, n) {
                    return S.get(e, t, n, "json");
                },
                getScript: function(e, t) {
                    return S.get(e, void 0, t, "script");
                }
            }), S.each([ "get", "post" ], (function(e, i) {
                S[i] = function(e, t, n, r) {
                    return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                        url: e,
                        type: i,
                        dataType: r,
                        data: t,
                        success: n
                    }, S.isPlainObject(e) && e));
                };
            })), S.ajaxPrefilter((function(e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
            })), S._evalUrl = function(e, t, n) {
                return S.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        S.globalEval(e, t, n);
                    }
                });
            }, S.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), 
                    this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                        var e = this;
                        while (e.firstElementChild) e = e.firstElementChild;
                        return e;
                    })).append(this)), this;
                },
                wrapInner: function(n) {
                    return m(n) ? this.each((function(e) {
                        S(this).wrapInner(n.call(this, e));
                    })) : this.each((function() {
                        var e = S(this), t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n);
                    }));
                },
                wrap: function(t) {
                    var n = m(t);
                    return this.each((function(e) {
                        S(this).wrapAll(n ? t.call(this, e) : t);
                    }));
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each((function() {
                        S(this).replaceWith(this.childNodes);
                    })), this;
                }
            }), S.expr.pseudos.hidden = function(e) {
                return !S.expr.pseudos.visible(e);
            }, S.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }, S.ajaxSettings.xhr = function() {
                try {
                    return new C.XMLHttpRequest;
                } catch (e) {}
            };
            var Bt = {
                0: 200,
                1223: 204
            }, $t = S.ajaxSettings.xhr();
            y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport((function(i) {
                var o, a;
                if (y.cors || $t && !i.crossDomain) return {
                    send: function(e, t) {
                        var n, r = i.xhr();
                        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), 
                        e) r.setRequestHeader(n, e[n]);
                        o = function(e) {
                            return function() {
                                o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, 
                                "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                    binary: r.response
                                } : {
                                    text: r.responseText
                                }, r.getAllResponseHeaders()));
                            };
                        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                            4 === r.readyState && C.setTimeout((function() {
                                o && a();
                            }));
                        }, o = o("abort");
                        try {
                            r.send(i.hasContent && i.data || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function() {
                        o && o();
                    }
                };
            })), S.ajaxPrefilter((function(e) {
                e.crossDomain && (e.contents.script = !1);
            })), S.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return S.globalEval(e), e;
                    }
                }
            }), S.ajaxPrefilter("script", (function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            })), S.ajaxTransport("script", (function(n) {
                var r, i;
                if (n.crossDomain || n.scriptAttrs) return {
                    send: function(e, t) {
                        r = S("<script>").attr(n.scriptAttrs || {}).prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function(e) {
                            r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
                        }), E.head.appendChild(r[0]);
                    },
                    abort: function() {
                        i && i();
                    }
                };
            }));
            var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
            S.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = zt.pop() || S.expando + "_" + wt.guid++;
                    return this[e] = !0, e;
                }
            }), S.ajaxPrefilter("json jsonp", (function(e, t, n) {
                var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
                a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), 
                e.converters["script json"] = function() {
                    return o || S.error(r + " was not called"), o[0];
                }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
                    o = arguments;
                }, n.always((function() {
                    void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, 
                    zt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
                })), "script";
            })), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
            2 === _t.childNodes.length), S.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, 
                t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [ t.createElement(i[1]) ] : (i = xe([ e ], t, o), 
                o && o.length && S(o).remove(), S.merge([], i.childNodes)));
                var r, i, o;
            }, S.fn.load = function(e, t, n) {
                var r, i, o, a = this, s = e.indexOf(" ");
                return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 
                0 < a.length && S.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done((function(e) {
                    o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
                })).always(n && function(e, t) {
                    a.each((function() {
                        n.apply(this, o || [ e.responseText, t, e ]);
                    }));
                }), this;
            }, S.expr.pseudos.animated = function(t) {
                return S.grep(S.timers, (function(e) {
                    return t === e.elem;
                })).length;
            }, S.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
                    "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), 
                    u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, 
                    i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), 
                    null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), 
                    "using" in t ? t.using.call(e, f) : c.css(f);
                }
            }, S.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                        S.offset.setOffset(this, t, e);
                    }));
                    var e, n, r = this[0];
                    return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
                    {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0;
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0], i = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect(); else {
                            t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                            while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), 
                            i.left += S.css(e, "borderLeftWidth", !0));
                        }
                        return {
                            top: t.top - i.top - S.css(r, "marginTop", !0),
                            left: t.left - i.left - S.css(r, "marginLeft", !0)
                        };
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        var e = this.offsetParent;
                        while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                        return e || re;
                    }));
                }
            }), S.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(t, i) {
                var o = "pageYOffset" === i;
                S.fn[t] = function(e) {
                    return $(this, (function(e, t, n) {
                        var r;
                        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
                    }), t, e, arguments.length);
                };
            })), S.each([ "top", "left" ], (function(e, n) {
                S.cssHooks[n] = Fe(y.pixelPosition, (function(e, t) {
                    if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t;
                }));
            })), S.each({
                Height: "height",
                Width: "width"
            }, (function(a, s) {
                S.each({
                    padding: "inner" + a,
                    content: s,
                    "": "outer" + a
                }, (function(r, o) {
                    S.fn[o] = function(e, t) {
                        var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border");
                        return $(this, (function(e, t, n) {
                            var r;
                            return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, 
                            Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
                        }), s, n ? e : void 0, n);
                    };
                }));
            })), S.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(e, t) {
                S.fn[t] = function(e) {
                    return this.on(t, e);
                };
            })), S.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function(e, t) {
                    return this.off(e, null, t);
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r);
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                }
            }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, n) {
                S.fn[n] = function(e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
                };
            }));
            var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            S.proxy = function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), 
                (i = function() {
                    return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid = e.guid || S.guid++, i;
            }, S.holdReady = function(e) {
                e ? S.readyWait++ : S.ready(!0);
            }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, 
            S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
                var t = S.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }, S.trim = function(e) {
                return null == e ? "" : (e + "").replace(Xt, "");
            }, "function" == typeof define && define.amd && define("jquery", [], (function() {
                return S;
            }));
            var Vt = C.jQuery, Gt = C.$;
            return S.noConflict = function(e) {
                return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
            }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
        }));
        /*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
        !function(n) {
            "function" == typeof define && define.amd ? define([ "jquery" ], n) : "object" == typeof module && module.exports ? module.exports = function(e, t) {
                return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), 
                n(t), t;
            } : n(jQuery);
        }((function(t) {
            var e, n, p, r, o, h, f, g, m, y, v, i, a, _, s = (t && t.fn && t.fn.select2 && t.fn.select2.amd && (u = t.fn.select2.amd), 
            u && u.requirejs || (u ? n = u : u = {}, g = {}, m = {}, y = {}, v = {}, i = Object.prototype.hasOwnProperty, 
            a = [].slice, _ = /\.js$/, h = function(e, t) {
                var n, s, i = c(e), r = i[0];
                t = t[1];
                return e = i[1], r && (n = x(r = l(r, t))), r ? e = n && n.normalize ? n.normalize(e, (s = t, 
                function(e) {
                    return l(e, s);
                })) : l(e, t) : (r = (i = c(e = l(e, t)))[0], e = i[1], r && (n = x(r))), {
                    f: r ? r + "!" + e : e,
                    n: e,
                    pr: r,
                    p: n
                };
            }, f = {
                require: function(e) {
                    return w(e);
                },
                exports: function(e) {
                    var t = g[e];
                    return void 0 !== t ? t : g[e] = {};
                },
                module: function(e) {
                    return {
                        id: e,
                        uri: "",
                        exports: g[e],
                        config: (t = e, function() {
                            return y && y.config && y.config[t] || {};
                        })
                    };
                    var t;
                }
            }, r = function(e, t, n, s) {
                var i, r, o, a, l, c = [], u = typeof n, d = A(s = s || e);
                if ("undefined" == u || "function" == u) {
                    for (t = !t.length && n.length ? [ "require", "exports", "module" ] : t, a = 0; a < t.length; a += 1) if ("require" === (r = (o = h(t[a], d)).f)) c[a] = f.require(e); else if ("exports" === r) c[a] = f.exports(e), 
                    l = !0; else if ("module" === r) i = c[a] = f.module(e); else if (b(g, r) || b(m, r) || b(v, r)) c[a] = x(r); else {
                        if (!o.p) throw new Error(e + " missing " + r);
                        o.p.load(o.n, w(s, !0), function(t) {
                            return function(e) {
                                g[t] = e;
                            };
                        }(r), {}), c[a] = g[r];
                    }
                    u = n ? n.apply(g[e], c) : void 0, e && (i && i.exports !== p && i.exports !== g[e] ? g[e] = i.exports : u === p && l || (g[e] = u));
                } else e && (g[e] = n);
            }, e = n = o = function(e, t, n, s, i) {
                if ("string" == typeof e) return f[e] ? f[e](t) : x(h(e, A(t)).f);
                if (!e.splice) {
                    if ((y = e).deps && o(y.deps, y.callback), !t) return;
                    t.splice ? (e = t, t = n, n = null) : e = p;
                }
                return t = t || function() {}, "function" == typeof n && (n = s, s = i), s ? r(p, e, t, n) : setTimeout((function() {
                    r(p, e, t, n);
                }), 4), o;
            }, o.config = function(e) {
                return o(e);
            }, e._defined = g, (s = function(e, t, n) {
                if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                t.splice || (n = t, t = []), b(g, e) || b(m, e) || (m[e] = [ e, t, n ]);
            }).amd = {
                jQuery: !0
            }, u.requirejs = e, u.require = n, u.define = s), u.define("almond", (function() {})), 
            u.define("jquery", [], (function() {
                var e = t || $;
                return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), 
                e;
            })), u.define("select2/utils", [ "jquery" ], (function(r) {
                var s = {};
                function c(e) {
                    var t, n = e.prototype, s = [];
                    for (t in n) "function" == typeof n[t] && "constructor" !== t && s.push(t);
                    return s;
                }
                s.Extend = function(e, t) {
                    var n, s = {}.hasOwnProperty;
                    function i() {
                        this.constructor = e;
                    }
                    for (n in t) s.call(t, n) && (e[n] = t[n]);
                    return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, 
                    e;
                }, s.Decorate = function(s, i) {
                    var e = c(i), t = c(s);
                    function r() {
                        var e = Array.prototype.unshift, t = i.prototype.constructor.length, n = s.prototype.constructor;
                        0 < t && (e.call(arguments, s.prototype.constructor), n = i.prototype.constructor), 
                        n.apply(this, arguments);
                    }
                    i.displayName = s.displayName, r.prototype = new function() {
                        this.constructor = r;
                    };
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        r.prototype[o] = s.prototype[o];
                    }
                    for (var a = 0; a < e.length; a++) {
                        var l = e[a];
                        r.prototype[l] = function(e) {
                            var t = function() {};
                            e in r.prototype && (t = r.prototype[e]);
                            var n = i.prototype[e];
                            return function() {
                                return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments);
                            };
                        }(l);
                    }
                    return r;
                };
                function e() {
                    this.listeners = {};
                }
                e.prototype.on = function(e, t) {
                    this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [ t ];
                }, e.prototype.trigger = function(e) {
                    var t = Array.prototype.slice, n = t.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), 
                    (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), 
                    "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
                }, e.prototype.invoke = function(e, t) {
                    for (var n = 0, s = e.length; n < s; n++) e[n].apply(this, t);
                }, s.Observable = e, s.generateChars = function(e) {
                    for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
                    return t;
                }, s.bind = function(e, t) {
                    return function() {
                        e.apply(t, arguments);
                    };
                }, s._convertData = function(e) {
                    for (var t in e) {
                        var n = t.split("-"), s = e;
                        if (1 !== n.length) {
                            for (var i = 0; i < n.length; i++) {
                                var r = n[i];
                                (r = r.substring(0, 1).toLowerCase() + r.substring(1)) in s || (s[r] = {}), i == n.length - 1 && (s[r] = e[t]), 
                                s = s[r];
                            }
                            delete e[t];
                        }
                    }
                    return e;
                }, s.hasScroll = function(e, t) {
                    var n = r(t), s = t.style.overflowX, i = t.style.overflowY;
                    return (s !== i || "hidden" !== i && "visible" !== i) && ("scroll" === s || "scroll" === i || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth);
                }, s.escapeMarkup = function(e) {
                    var t = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function(e) {
                        return t[e];
                    }));
                }, s.__cache = {};
                var n = 0;
                return s.GetUniqueElementId = function(e) {
                    var t = e.getAttribute("data-select2-id");
                    return null != t || (t = e.id ? "select2-data-" + e.id : "select2-data-" + (++n).toString() + "-" + s.generateChars(4), 
                    e.setAttribute("data-select2-id", t)), t;
                }, s.StoreData = function(e, t, n) {
                    e = s.GetUniqueElementId(e);
                    s.__cache[e] || (s.__cache[e] = {}), s.__cache[e][t] = n;
                }, s.GetData = function(e, t) {
                    var n = s.GetUniqueElementId(e);
                    return t ? s.__cache[n] && null != s.__cache[n][t] ? s.__cache[n][t] : r(e).data(t) : s.__cache[n];
                }, s.RemoveData = function(e) {
                    var t = s.GetUniqueElementId(e);
                    null != s.__cache[t] && delete s.__cache[t], e.removeAttribute("data-select2-id");
                }, s.copyNonInternalCssClasses = function(e, t) {
                    var n = (n = e.getAttribute("class").trim().split(/\s+/)).filter((function(e) {
                        return 0 === e.indexOf("select2-");
                    }));
                    t = (t = t.getAttribute("class").trim().split(/\s+/)).filter((function(e) {
                        return 0 !== e.indexOf("select2-");
                    })), t = n.concat(t);
                    e.setAttribute("class", t.join(" "));
                }, s;
            })), u.define("select2/results", [ "jquery", "./utils" ], (function(d, p) {
                function s(e, t, n) {
                    this.$element = e, this.data = n, this.options = t, s.__super__.constructor.call(this);
                }
                return p.Extend(s, p.Observable), s.prototype.render = function() {
                    var e = d('<ul class="select2-results__options" role="listbox"></ul>');
                    return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e;
                }, s.prototype.clear = function() {
                    this.$results.empty();
                }, s.prototype.displayMessage = function(e) {
                    var t = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var n = d('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'), s = this.options.get("translations").get(e.message);
                    n.append(t(s(e.args))), n[0].className += " select2-results__message", this.$results.append(n);
                }, s.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove();
                }, s.prototype.append = function(e) {
                    this.hideLoading();
                    var t = [];
                    if (null != e.results && 0 !== e.results.length) {
                        e.results = this.sort(e.results);
                        for (var n = 0; n < e.results.length; n++) {
                            var s = e.results[n];
                            s = this.option(s);
                            t.push(s);
                        }
                        this.$results.append(t);
                    } else 0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    });
                }, s.prototype.position = function(e, t) {
                    t.find(".select2-results").append(e);
                }, s.prototype.sort = function(e) {
                    return this.options.get("sorter")(e);
                }, s.prototype.highlightFirstItem = function() {
                    var e = this.$results.find(".select2-results__option--selectable"), t = e.filter(".select2-results__option--selected");
                    (0 < t.length ? t : e).first().trigger("mouseenter"), this.ensureHighlightVisible();
                }, s.prototype.setClasses = function() {
                    var t = this;
                    this.data.current((function(e) {
                        var s = e.map((function(e) {
                            return e.id.toString();
                        }));
                        t.$results.find(".select2-results__option--selectable").each((function() {
                            var e = d(this), t = p.GetData(this, "data"), n = "" + t.id;
                            null != t.element && t.element.selected || null == t.element && -1 < s.indexOf(n) ? (this.classList.add("select2-results__option--selected"), 
                            e.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"), 
                            e.attr("aria-selected", "false"));
                        }));
                    }));
                }, s.prototype.showLoading = function(e) {
                    this.hideLoading();
                    e = {
                        disabled: !0,
                        loading: !0,
                        text: this.options.get("translations").get("searching")(e)
                    }, e = this.option(e);
                    e.className += " loading-results", this.$results.prepend(e);
                }, s.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove();
                }, s.prototype.option = function(e) {
                    var t = document.createElement("li");
                    t.classList.add("select2-results__option"), t.classList.add("select2-results__option--selectable");
                    var n, s = {
                        role: "option"
                    }, i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                    for (n in (null != e.element && i.call(e.element, ":disabled") || null == e.element && e.disabled) && (s["aria-disabled"] = "true", 
                    t.classList.remove("select2-results__option--selectable"), t.classList.add("select2-results__option--disabled")), 
                    null == e.id && t.classList.remove("select2-results__option--selectable"), null != e._resultId && (t.id = e._resultId), 
                    e.title && (t.title = e.title), e.children && (s.role = "group", s["aria-label"] = e.text, 
                    t.classList.remove("select2-results__option--selectable"), t.classList.add("select2-results__option--group")), 
                    s) {
                        var r = s[n];
                        t.setAttribute(n, r);
                    }
                    if (e.children) {
                        var o = d(t), a = document.createElement("strong");
                        a.className = "select2-results__group", this.template(e, a);
                        for (var l = [], c = 0; c < e.children.length; c++) {
                            var u = e.children[c];
                            u = this.option(u);
                            l.push(u);
                        }
                        i = d("<ul></ul>", {
                            class: "select2-results__options select2-results__options--nested",
                            role: "none"
                        });
                        i.append(l), o.append(a), o.append(i);
                    } else this.template(e, t);
                    return p.StoreData(t, "data", e), t;
                }, s.prototype.bind = function(t, e) {
                    var i = this, n = t.id + "-results";
                    this.$results.attr("id", n), t.on("results:all", (function(e) {
                        i.clear(), i.append(e.data), t.isOpen() && (i.setClasses(), i.highlightFirstItem());
                    })), t.on("results:append", (function(e) {
                        i.append(e.data), t.isOpen() && i.setClasses();
                    })), t.on("query", (function(e) {
                        i.hideMessages(), i.showLoading(e);
                    })), t.on("select", (function() {
                        t.isOpen() && (i.setClasses(), i.options.get("scrollAfterSelect") && i.highlightFirstItem());
                    })), t.on("unselect", (function() {
                        t.isOpen() && (i.setClasses(), i.options.get("scrollAfterSelect") && i.highlightFirstItem());
                    })), t.on("open", (function() {
                        i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), 
                        i.setClasses(), i.ensureHighlightVisible();
                    })), t.on("close", (function() {
                        i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), 
                        i.$results.removeAttr("aria-activedescendant");
                    })), t.on("results:toggle", (function() {
                        var e = i.getHighlightedResults();
                        0 !== e.length && e.trigger("mouseup");
                    })), t.on("results:select", (function() {
                        var e, t = i.getHighlightedResults();
                        0 !== t.length && (e = p.GetData(t[0], "data"), t.hasClass("select2-results__option--selected") ? i.trigger("close", {}) : i.trigger("select", {
                            data: e
                        }));
                    })), t.on("results:previous", (function() {
                        var e, t = i.getHighlightedResults(), n = i.$results.find(".select2-results__option--selectable"), s = n.index(t);
                        s <= 0 || (e = s - 1, 0 === t.length && (e = 0), (s = n.eq(e)).trigger("mouseenter"), 
                        t = i.$results.offset().top, n = s.offset().top, s = i.$results.scrollTop() + (n - t), 
                        0 === e ? i.$results.scrollTop(0) : n - t < 0 && i.$results.scrollTop(s));
                    })), t.on("results:next", (function() {
                        var e, t = i.getHighlightedResults(), n = i.$results.find(".select2-results__option--selectable"), s = n.index(t) + 1;
                        s >= n.length || ((e = n.eq(s)).trigger("mouseenter"), t = i.$results.offset().top + i.$results.outerHeight(!1), 
                        n = e.offset().top + e.outerHeight(!1), e = i.$results.scrollTop() + n - t, 0 === s ? i.$results.scrollTop(0) : t < n && i.$results.scrollTop(e));
                    })), t.on("results:focus", (function(e) {
                        e.element[0].classList.add("select2-results__option--highlighted"), e.element[0].setAttribute("aria-selected", "true");
                    })), t.on("results:message", (function(e) {
                        i.displayMessage(e);
                    })), d.fn.mousewheel && this.$results.on("mousewheel", (function(e) {
                        var t = i.$results.scrollTop(), n = i.$results.get(0).scrollHeight - t + e.deltaY;
                        t = 0 < e.deltaY && t - e.deltaY <= 0, n = e.deltaY < 0 && n <= i.$results.height();
                        t ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : n && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), 
                        e.preventDefault(), e.stopPropagation());
                    })), this.$results.on("mouseup", ".select2-results__option--selectable", (function(e) {
                        var t = d(this), n = p.GetData(this, "data");
                        t.hasClass("select2-results__option--selected") ? i.options.get("multiple") ? i.trigger("unselect", {
                            originalEvent: e,
                            data: n
                        }) : i.trigger("close", {}) : i.trigger("select", {
                            originalEvent: e,
                            data: n
                        });
                    })), this.$results.on("mouseenter", ".select2-results__option--selectable", (function(e) {
                        var t = p.GetData(this, "data");
                        i.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"), 
                        i.trigger("results:focus", {
                            data: t,
                            element: d(this)
                        });
                    }));
                }, s.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted");
                }, s.prototype.destroy = function() {
                    this.$results.remove();
                }, s.prototype.ensureHighlightVisible = function() {
                    var e, t, n, s, i = this.getHighlightedResults();
                    0 !== i.length && (e = this.$results.find(".select2-results__option--selectable").index(i), 
                    s = this.$results.offset().top, t = i.offset().top, n = this.$results.scrollTop() + (t - s), 
                    s = t - s, n -= 2 * i.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(n));
                }, s.prototype.template = function(e, t) {
                    var n = this.options.get("templateResult"), s = this.options.get("escapeMarkup");
                    e = n(e, t);
                    null == e ? t.style.display = "none" : "string" == typeof e ? t.innerHTML = s(e) : d(t).append(e);
                }, s;
            })), u.define("select2/keys", [], (function() {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                };
            })), u.define("select2/selection/base", [ "jquery", "../utils", "../keys" ], (function(n, s, i) {
                function r(e, t) {
                    this.$element = e, this.options = t, r.__super__.constructor.call(this);
                }
                return s.Extend(r, s.Observable), r.prototype.render = function() {
                    var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != s.GetData(this.$element[0], "old-tabindex") ? this._tabindex = s.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), 
                    e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), 
                    e.attr("aria-disabled", "false"), this.$selection = e;
                }, r.prototype.bind = function(e, t) {
                    var n = this, s = e.id + "-results";
                    this.container = e, this.$selection.on("focus", (function(e) {
                        n.trigger("focus", e);
                    })), this.$selection.on("blur", (function(e) {
                        n._handleBlur(e);
                    })), this.$selection.on("keydown", (function(e) {
                        n.trigger("keypress", e), e.which === i.SPACE && e.preventDefault();
                    })), e.on("results:focus", (function(e) {
                        n.$selection.attr("aria-activedescendant", e.data._resultId);
                    })), e.on("selection:update", (function(e) {
                        n.update(e.data);
                    })), e.on("open", (function() {
                        n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", s), n._attachCloseHandler(e);
                    })), e.on("close", (function() {
                        n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), 
                        n.$selection.removeAttr("aria-owns"), n.$selection.trigger("focus"), n._detachCloseHandler(e);
                    })), e.on("enable", (function() {
                        n.$selection.attr("tabindex", n._tabindex), n.$selection.attr("aria-disabled", "false");
                    })), e.on("disable", (function() {
                        n.$selection.attr("tabindex", "-1"), n.$selection.attr("aria-disabled", "true");
                    }));
                }, r.prototype._handleBlur = function(e) {
                    var t = this;
                    window.setTimeout((function() {
                        document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e);
                    }), 1);
                }, r.prototype._attachCloseHandler = function(e) {
                    n(document.body).on("mousedown.select2." + e.id, (function(e) {
                        var t = n(e.target).closest(".select2");
                        n(".select2.select2-container--open").each((function() {
                            this != t[0] && s.GetData(this, "element").select2("close");
                        }));
                    }));
                }, r.prototype._detachCloseHandler = function(e) {
                    n(document.body).off("mousedown.select2." + e.id);
                }, r.prototype.position = function(e, t) {
                    t.find(".selection").append(e);
                }, r.prototype.destroy = function() {
                    this._detachCloseHandler(this.container);
                }, r.prototype.update = function(e) {
                    throw new Error("The `update` method must be defined in child classes.");
                }, r.prototype.isEnabled = function() {
                    return !this.isDisabled();
                }, r.prototype.isDisabled = function() {
                    return this.options.get("disabled");
                }, r;
            })), u.define("select2/selection/single", [ "jquery", "./base", "../utils", "../keys" ], (function(e, t, n, s) {
                function i() {
                    i.__super__.constructor.apply(this, arguments);
                }
                return n.Extend(i, t), i.prototype.render = function() {
                    var e = i.__super__.render.call(this);
                    return e[0].classList.add("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), 
                    e;
                }, i.prototype.bind = function(t, e) {
                    var n = this;
                    i.__super__.bind.apply(this, arguments);
                    var s = t.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", s).attr("role", "textbox").attr("aria-readonly", "true"), 
                    this.$selection.attr("aria-labelledby", s), this.$selection.attr("aria-controls", s), 
                    this.$selection.on("mousedown", (function(e) {
                        1 === e.which && n.trigger("toggle", {
                            originalEvent: e
                        });
                    })), this.$selection.on("focus", (function(e) {})), this.$selection.on("blur", (function(e) {})), 
                    t.on("focus", (function(e) {
                        t.isOpen() || n.$selection.trigger("focus");
                    }));
                }, i.prototype.clear = function() {
                    var e = this.$selection.find(".select2-selection__rendered");
                    e.empty(), e.removeAttr("title");
                }, i.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t));
                }, i.prototype.selectionContainer = function() {
                    return e("<span></span>");
                }, i.prototype.update = function(e) {
                    var t, n;
                    0 !== e.length ? (n = e[0], t = this.$selection.find(".select2-selection__rendered"), 
                    e = this.display(n, t), t.empty().append(e), (n = n.title || n.text) ? t.attr("title", n) : t.removeAttr("title")) : this.clear();
                }, i;
            })), u.define("select2/selection/multiple", [ "jquery", "./base", "../utils" ], (function(i, e, c) {
                function r(e, t) {
                    r.__super__.constructor.apply(this, arguments);
                }
                return c.Extend(r, e), r.prototype.render = function() {
                    var e = r.__super__.render.call(this);
                    return e[0].classList.add("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), 
                    e;
                }, r.prototype.bind = function(e, t) {
                    var n = this;
                    r.__super__.bind.apply(this, arguments);
                    var s = e.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", s), this.$selection.on("click", (function(e) {
                        n.trigger("toggle", {
                            originalEvent: e
                        });
                    })), this.$selection.on("click", ".select2-selection__choice__remove", (function(e) {
                        var t;
                        n.isDisabled() || (t = i(this).parent(), t = c.GetData(t[0], "data"), n.trigger("unselect", {
                            originalEvent: e,
                            data: t
                        }));
                    })), this.$selection.on("keydown", ".select2-selection__choice__remove", (function(e) {
                        n.isDisabled() || e.stopPropagation();
                    }));
                }, r.prototype.clear = function() {
                    var e = this.$selection.find(".select2-selection__rendered");
                    e.empty(), e.removeAttr("title");
                }, r.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t));
                }, r.prototype.selectionContainer = function() {
                    return i('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>');
                }, r.prototype.update = function(e) {
                    if (this.clear(), 0 !== e.length) {
                        for (var t = [], n = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", s = 0; s < e.length; s++) {
                            var i = e[s], r = this.selectionContainer(), o = this.display(i, r), a = n + c.generateChars(4) + "-";
                            i.id ? a += i.id : a += c.generateChars(4), r.find(".select2-selection__choice__display").append(o).attr("id", a);
                            var l = i.title || i.text;
                            l && r.attr("title", l);
                            o = this.options.get("translations").get("removeItem"), l = r.find(".select2-selection__choice__remove");
                            l.attr("title", o()), l.attr("aria-label", o()), l.attr("aria-describedby", a), 
                            c.StoreData(r[0], "data", i), t.push(r);
                        }
                        this.$selection.find(".select2-selection__rendered").append(t);
                    }
                }, r;
            })), u.define("select2/selection/placeholder", [], (function() {
                function e(e, t, n) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n);
                }
                return e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t;
                }, e.prototype.createPlaceholder = function(e, t) {
                    var n = this.selectionContainer();
                    n.html(this.display(t)), n[0].classList.add("select2-selection__placeholder"), n[0].classList.remove("select2-selection__choice");
                    t = t.title || t.text || n.text();
                    return this.$selection.find(".select2-selection__rendered").attr("title", t), n;
                }, e.prototype.update = function(e, t) {
                    var n = 1 == t.length && t[0].id != this.placeholder.id;
                    if (1 < t.length || n) return e.call(this, t);
                    this.clear();
                    t = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(t);
                }, e;
            })), u.define("select2/selection/allowClear", [ "jquery", "../keys", "../utils" ], (function(i, s, a) {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var s = this;
                    e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), 
                    this.$selection.on("mousedown", ".select2-selection__clear", (function(e) {
                        s._handleClear(e);
                    })), t.on("keypress", (function(e) {
                        s._handleKeyboardClear(e, t);
                    }));
                }, e.prototype._handleClear = function(e, t) {
                    if (!this.isDisabled()) {
                        var n = this.$selection.find(".select2-selection__clear");
                        if (0 !== n.length) {
                            t.stopPropagation();
                            var s = a.GetData(n[0], "data"), i = this.$element.val();
                            this.$element.val(this.placeholder.id);
                            var r = {
                                data: s
                            };
                            if (this.trigger("clear", r), r.prevented) this.$element.val(i); else {
                                for (var o = 0; o < s.length; o++) if (r = {
                                    data: s[o]
                                }, this.trigger("unselect", r), r.prevented) return void this.$element.val(i);
                                this.$element.trigger("input").trigger("change"), this.trigger("toggle", {});
                            }
                        }
                    }
                }, e.prototype._handleKeyboardClear = function(e, t, n) {
                    n.isOpen() || t.which != s.DELETE && t.which != s.BACKSPACE || this._handleClear(t);
                }, e.prototype.update = function(e, t) {
                    var n, s;
                    e.call(this, t), this.$selection.find(".select2-selection__clear").remove(), this.$selection[0].classList.remove("select2-selection--clearable"), 
                    0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length || (n = this.$selection.find(".select2-selection__rendered").attr("id"), 
                    s = this.options.get("translations").get("removeAllItems"), (e = i('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title", s()), 
                    e.attr("aria-label", s()), e.attr("aria-describedby", n), a.StoreData(e[0], "data", t), 
                    this.$selection.prepend(e), this.$selection[0].classList.add("select2-selection--clearable"));
                }, e;
            })), u.define("select2/selection/search", [ "jquery", "../utils", "../keys" ], (function(s, a, l) {
                function e(e, t, n) {
                    e.call(this, t, n);
                }
                return e.prototype.render = function(e) {
                    var t = this.options.get("translations").get("search"), n = s('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');
                    this.$searchContainer = n, this.$search = n.find("textarea"), this.$search.prop("autocomplete", this.options.get("autocomplete")), 
                    this.$search.attr("aria-label", t());
                    e = e.call(this);
                    return this._transferTabIndex(), e.append(this.$searchContainer), e;
                }, e.prototype.bind = function(e, t, n) {
                    var s = this, i = t.id + "-results", r = t.id + "-container";
                    e.call(this, t, n), s.$search.attr("aria-describedby", r), t.on("open", (function() {
                        s.$search.attr("aria-controls", i), s.$search.trigger("focus");
                    })), t.on("close", (function() {
                        s.$search.val(""), s.resizeSearch(), s.$search.removeAttr("aria-controls"), s.$search.removeAttr("aria-activedescendant"), 
                        s.$search.trigger("focus");
                    })), t.on("enable", (function() {
                        s.$search.prop("disabled", !1), s._transferTabIndex();
                    })), t.on("disable", (function() {
                        s.$search.prop("disabled", !0);
                    })), t.on("focus", (function(e) {
                        s.$search.trigger("focus");
                    })), t.on("results:focus", (function(e) {
                        e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant");
                    })), this.$selection.on("focusin", ".select2-search--inline", (function(e) {
                        s.trigger("focus", e);
                    })), this.$selection.on("focusout", ".select2-search--inline", (function(e) {
                        s._handleBlur(e);
                    })), this.$selection.on("keydown", ".select2-search--inline", (function(e) {
                        var t;
                        e.stopPropagation(), s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented(), 
                        e.which !== l.BACKSPACE || "" !== s.$search.val() || 0 < (t = s.$selection.find(".select2-selection__choice").last()).length && (t = a.GetData(t[0], "data"), 
                        s.searchRemoveChoice(t), e.preventDefault());
                    })), this.$selection.on("click", ".select2-search--inline", (function(e) {
                        s.$search.val() && e.stopPropagation();
                    }));
                    t = document.documentMode;
                    var o = t && t <= 11;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", (function(e) {
                        o ? s.$selection.off("input.search input.searchcheck") : s.$selection.off("keyup.search");
                    })), this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(e) {
                        var t;
                        o && "input" === e.type ? s.$selection.off("input.search input.searchcheck") : (t = e.which) != l.SHIFT && t != l.CTRL && t != l.ALT && t != l.TAB && s.handleSearch(e);
                    }));
                }, e.prototype._transferTabIndex = function(e) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
                }, e.prototype.createPlaceholder = function(e, t) {
                    this.$search.attr("placeholder", t.text);
                }, e.prototype.update = function(e, t) {
                    var n = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), e.call(this, t), this.resizeSearch(), n && this.$search.trigger("focus");
                }, e.prototype.handleSearch = function() {
                    var e;
                    this.resizeSearch(), this._keyUpPrevented || (e = this.$search.val(), this.trigger("query", {
                        term: e
                    })), this._keyUpPrevented = !1;
                }, e.prototype.searchRemoveChoice = function(e, t) {
                    this.trigger("unselect", {
                        data: t
                    }), this.$search.val(t.text), this.handleSearch();
                }, e.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var e = "100%";
                    "" === this.$search.attr("placeholder") && (e = .75 * (this.$search.val().length + 1) + "em"), 
                    this.$search.css("width", e);
                }, e;
            })), u.define("select2/selection/selectionCss", [ "../utils" ], (function(n) {
                function e() {}
                return e.prototype.render = function(e) {
                    var t = e.call(this);
                    e = this.options.get("selectionCssClass") || "";
                    return -1 !== e.indexOf(":all:") && (e = e.replace(":all:", ""), n.copyNonInternalCssClasses(t[0], this.$element[0])), 
                    t.addClass(e), t;
                }, e;
            })), u.define("select2/selection/eventRelay", [ "jquery" ], (function(o) {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var s = this, i = [ "open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing" ], r = [ "opening", "closing", "selecting", "unselecting", "clearing" ];
                    e.call(this, t, n), t.on("*", (function(e, t) {
                        var n;
                        -1 !== i.indexOf(e) && (t = t || {}, n = o.Event("select2:" + e, {
                            params: t
                        }), s.$element.trigger(n), -1 !== r.indexOf(e) && (t.prevented = n.isDefaultPrevented()));
                    }));
                }, e;
            })), u.define("select2/translation", [ "jquery", "require" ], (function(t, n) {
                function s(e) {
                    this.dict = e || {};
                }
                return s.prototype.all = function() {
                    return this.dict;
                }, s.prototype.get = function(e) {
                    return this.dict[e];
                }, s.prototype.extend = function(e) {
                    this.dict = t.extend({}, e.all(), this.dict);
                }, s._cache = {}, s.loadPath = function(e) {
                    var t;
                    return e in s._cache || (t = n(e), s._cache[e] = t), new s(s._cache[e]);
                }, s;
            })), u.define("select2/diacritics", [], (function() {
                return {
                    "Ⓐ": "A",
                    Ａ: "A",
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ầ: "A",
                    Ấ: "A",
                    Ẫ: "A",
                    Ẩ: "A",
                    Ã: "A",
                    Ā: "A",
                    Ă: "A",
                    Ằ: "A",
                    Ắ: "A",
                    Ẵ: "A",
                    Ẳ: "A",
                    Ȧ: "A",
                    Ǡ: "A",
                    Ä: "A",
                    Ǟ: "A",
                    Ả: "A",
                    Å: "A",
                    Ǻ: "A",
                    Ǎ: "A",
                    Ȁ: "A",
                    Ȃ: "A",
                    Ạ: "A",
                    Ậ: "A",
                    Ặ: "A",
                    Ḁ: "A",
                    Ą: "A",
                    Ⱥ: "A",
                    Ɐ: "A",
                    Ꜳ: "AA",
                    Æ: "AE",
                    Ǽ: "AE",
                    Ǣ: "AE",
                    Ꜵ: "AO",
                    Ꜷ: "AU",
                    Ꜹ: "AV",
                    Ꜻ: "AV",
                    Ꜽ: "AY",
                    "Ⓑ": "B",
                    Ｂ: "B",
                    Ḃ: "B",
                    Ḅ: "B",
                    Ḇ: "B",
                    Ƀ: "B",
                    Ƃ: "B",
                    Ɓ: "B",
                    "Ⓒ": "C",
                    Ｃ: "C",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    Ç: "C",
                    Ḉ: "C",
                    Ƈ: "C",
                    Ȼ: "C",
                    Ꜿ: "C",
                    "Ⓓ": "D",
                    Ｄ: "D",
                    Ḋ: "D",
                    Ď: "D",
                    Ḍ: "D",
                    Ḑ: "D",
                    Ḓ: "D",
                    Ḏ: "D",
                    Đ: "D",
                    Ƌ: "D",
                    Ɗ: "D",
                    Ɖ: "D",
                    Ꝺ: "D",
                    Ǳ: "DZ",
                    Ǆ: "DZ",
                    ǲ: "Dz",
                    ǅ: "Dz",
                    "Ⓔ": "E",
                    Ｅ: "E",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ề: "E",
                    Ế: "E",
                    Ễ: "E",
                    Ể: "E",
                    Ẽ: "E",
                    Ē: "E",
                    Ḕ: "E",
                    Ḗ: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ë: "E",
                    Ẻ: "E",
                    Ě: "E",
                    Ȅ: "E",
                    Ȇ: "E",
                    Ẹ: "E",
                    Ệ: "E",
                    Ȩ: "E",
                    Ḝ: "E",
                    Ę: "E",
                    Ḙ: "E",
                    Ḛ: "E",
                    Ɛ: "E",
                    Ǝ: "E",
                    "Ⓕ": "F",
                    Ｆ: "F",
                    Ḟ: "F",
                    Ƒ: "F",
                    Ꝼ: "F",
                    "Ⓖ": "G",
                    Ｇ: "G",
                    Ǵ: "G",
                    Ĝ: "G",
                    Ḡ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ǧ: "G",
                    Ģ: "G",
                    Ǥ: "G",
                    Ɠ: "G",
                    Ꞡ: "G",
                    Ᵹ: "G",
                    Ꝿ: "G",
                    "Ⓗ": "H",
                    Ｈ: "H",
                    Ĥ: "H",
                    Ḣ: "H",
                    Ḧ: "H",
                    Ȟ: "H",
                    Ḥ: "H",
                    Ḩ: "H",
                    Ḫ: "H",
                    Ħ: "H",
                    Ⱨ: "H",
                    Ⱶ: "H",
                    Ɥ: "H",
                    "Ⓘ": "I",
                    Ｉ: "I",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    İ: "I",
                    Ï: "I",
                    Ḯ: "I",
                    Ỉ: "I",
                    Ǐ: "I",
                    Ȉ: "I",
                    Ȋ: "I",
                    Ị: "I",
                    Į: "I",
                    Ḭ: "I",
                    Ɨ: "I",
                    "Ⓙ": "J",
                    Ｊ: "J",
                    Ĵ: "J",
                    Ɉ: "J",
                    "Ⓚ": "K",
                    Ｋ: "K",
                    Ḱ: "K",
                    Ǩ: "K",
                    Ḳ: "K",
                    Ķ: "K",
                    Ḵ: "K",
                    Ƙ: "K",
                    Ⱪ: "K",
                    Ꝁ: "K",
                    Ꝃ: "K",
                    Ꝅ: "K",
                    Ꞣ: "K",
                    "Ⓛ": "L",
                    Ｌ: "L",
                    Ŀ: "L",
                    Ĺ: "L",
                    Ľ: "L",
                    Ḷ: "L",
                    Ḹ: "L",
                    Ļ: "L",
                    Ḽ: "L",
                    Ḻ: "L",
                    Ł: "L",
                    Ƚ: "L",
                    Ɫ: "L",
                    Ⱡ: "L",
                    Ꝉ: "L",
                    Ꝇ: "L",
                    Ꞁ: "L",
                    Ǉ: "LJ",
                    ǈ: "Lj",
                    "Ⓜ": "M",
                    Ｍ: "M",
                    Ḿ: "M",
                    Ṁ: "M",
                    Ṃ: "M",
                    Ɱ: "M",
                    Ɯ: "M",
                    "Ⓝ": "N",
                    Ｎ: "N",
                    Ǹ: "N",
                    Ń: "N",
                    Ñ: "N",
                    Ṅ: "N",
                    Ň: "N",
                    Ṇ: "N",
                    Ņ: "N",
                    Ṋ: "N",
                    Ṉ: "N",
                    Ƞ: "N",
                    Ɲ: "N",
                    Ꞑ: "N",
                    Ꞥ: "N",
                    Ǌ: "NJ",
                    ǋ: "Nj",
                    "Ⓞ": "O",
                    Ｏ: "O",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Ồ: "O",
                    Ố: "O",
                    Ỗ: "O",
                    Ổ: "O",
                    Õ: "O",
                    Ṍ: "O",
                    Ȭ: "O",
                    Ṏ: "O",
                    Ō: "O",
                    Ṑ: "O",
                    Ṓ: "O",
                    Ŏ: "O",
                    Ȯ: "O",
                    Ȱ: "O",
                    Ö: "O",
                    Ȫ: "O",
                    Ỏ: "O",
                    Ő: "O",
                    Ǒ: "O",
                    Ȍ: "O",
                    Ȏ: "O",
                    Ơ: "O",
                    Ờ: "O",
                    Ớ: "O",
                    Ỡ: "O",
                    Ở: "O",
                    Ợ: "O",
                    Ọ: "O",
                    Ộ: "O",
                    Ǫ: "O",
                    Ǭ: "O",
                    Ø: "O",
                    Ǿ: "O",
                    Ɔ: "O",
                    Ɵ: "O",
                    Ꝋ: "O",
                    Ꝍ: "O",
                    Œ: "OE",
                    Ƣ: "OI",
                    Ꝏ: "OO",
                    Ȣ: "OU",
                    "Ⓟ": "P",
                    Ｐ: "P",
                    Ṕ: "P",
                    Ṗ: "P",
                    Ƥ: "P",
                    Ᵽ: "P",
                    Ꝑ: "P",
                    Ꝓ: "P",
                    Ꝕ: "P",
                    "Ⓠ": "Q",
                    Ｑ: "Q",
                    Ꝗ: "Q",
                    Ꝙ: "Q",
                    Ɋ: "Q",
                    "Ⓡ": "R",
                    Ｒ: "R",
                    Ŕ: "R",
                    Ṙ: "R",
                    Ř: "R",
                    Ȑ: "R",
                    Ȓ: "R",
                    Ṛ: "R",
                    Ṝ: "R",
                    Ŗ: "R",
                    Ṟ: "R",
                    Ɍ: "R",
                    Ɽ: "R",
                    Ꝛ: "R",
                    Ꞧ: "R",
                    Ꞃ: "R",
                    "Ⓢ": "S",
                    Ｓ: "S",
                    ẞ: "S",
                    Ś: "S",
                    Ṥ: "S",
                    Ŝ: "S",
                    Ṡ: "S",
                    Š: "S",
                    Ṧ: "S",
                    Ṣ: "S",
                    Ṩ: "S",
                    Ș: "S",
                    Ş: "S",
                    Ȿ: "S",
                    Ꞩ: "S",
                    Ꞅ: "S",
                    "Ⓣ": "T",
                    Ｔ: "T",
                    Ṫ: "T",
                    Ť: "T",
                    Ṭ: "T",
                    Ț: "T",
                    Ţ: "T",
                    Ṱ: "T",
                    Ṯ: "T",
                    Ŧ: "T",
                    Ƭ: "T",
                    Ʈ: "T",
                    Ⱦ: "T",
                    Ꞇ: "T",
                    Ꜩ: "TZ",
                    "Ⓤ": "U",
                    Ｕ: "U",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ũ: "U",
                    Ṹ: "U",
                    Ū: "U",
                    Ṻ: "U",
                    Ŭ: "U",
                    Ü: "U",
                    Ǜ: "U",
                    Ǘ: "U",
                    Ǖ: "U",
                    Ǚ: "U",
                    Ủ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ǔ: "U",
                    Ȕ: "U",
                    Ȗ: "U",
                    Ư: "U",
                    Ừ: "U",
                    Ứ: "U",
                    Ữ: "U",
                    Ử: "U",
                    Ự: "U",
                    Ụ: "U",
                    Ṳ: "U",
                    Ų: "U",
                    Ṷ: "U",
                    Ṵ: "U",
                    Ʉ: "U",
                    "Ⓥ": "V",
                    Ｖ: "V",
                    Ṽ: "V",
                    Ṿ: "V",
                    Ʋ: "V",
                    Ꝟ: "V",
                    Ʌ: "V",
                    Ꝡ: "VY",
                    "Ⓦ": "W",
                    Ｗ: "W",
                    Ẁ: "W",
                    Ẃ: "W",
                    Ŵ: "W",
                    Ẇ: "W",
                    Ẅ: "W",
                    Ẉ: "W",
                    Ⱳ: "W",
                    "Ⓧ": "X",
                    Ｘ: "X",
                    Ẋ: "X",
                    Ẍ: "X",
                    "Ⓨ": "Y",
                    Ｙ: "Y",
                    Ỳ: "Y",
                    Ý: "Y",
                    Ŷ: "Y",
                    Ỹ: "Y",
                    Ȳ: "Y",
                    Ẏ: "Y",
                    Ÿ: "Y",
                    Ỷ: "Y",
                    Ỵ: "Y",
                    Ƴ: "Y",
                    Ɏ: "Y",
                    Ỿ: "Y",
                    "Ⓩ": "Z",
                    Ｚ: "Z",
                    Ź: "Z",
                    Ẑ: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    Ẓ: "Z",
                    Ẕ: "Z",
                    Ƶ: "Z",
                    Ȥ: "Z",
                    Ɀ: "Z",
                    Ⱬ: "Z",
                    Ꝣ: "Z",
                    "ⓐ": "a",
                    ａ: "a",
                    ẚ: "a",
                    à: "a",
                    á: "a",
                    â: "a",
                    ầ: "a",
                    ấ: "a",
                    ẫ: "a",
                    ẩ: "a",
                    ã: "a",
                    ā: "a",
                    ă: "a",
                    ằ: "a",
                    ắ: "a",
                    ẵ: "a",
                    ẳ: "a",
                    ȧ: "a",
                    ǡ: "a",
                    ä: "a",
                    ǟ: "a",
                    ả: "a",
                    å: "a",
                    ǻ: "a",
                    ǎ: "a",
                    ȁ: "a",
                    ȃ: "a",
                    ạ: "a",
                    ậ: "a",
                    ặ: "a",
                    ḁ: "a",
                    ą: "a",
                    ⱥ: "a",
                    ɐ: "a",
                    ꜳ: "aa",
                    æ: "ae",
                    ǽ: "ae",
                    ǣ: "ae",
                    ꜵ: "ao",
                    ꜷ: "au",
                    ꜹ: "av",
                    ꜻ: "av",
                    ꜽ: "ay",
                    "ⓑ": "b",
                    ｂ: "b",
                    ḃ: "b",
                    ḅ: "b",
                    ḇ: "b",
                    ƀ: "b",
                    ƃ: "b",
                    ɓ: "b",
                    "ⓒ": "c",
                    ｃ: "c",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    ç: "c",
                    ḉ: "c",
                    ƈ: "c",
                    ȼ: "c",
                    ꜿ: "c",
                    ↄ: "c",
                    "ⓓ": "d",
                    ｄ: "d",
                    ḋ: "d",
                    ď: "d",
                    ḍ: "d",
                    ḑ: "d",
                    ḓ: "d",
                    ḏ: "d",
                    đ: "d",
                    ƌ: "d",
                    ɖ: "d",
                    ɗ: "d",
                    ꝺ: "d",
                    ǳ: "dz",
                    ǆ: "dz",
                    "ⓔ": "e",
                    ｅ: "e",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ề: "e",
                    ế: "e",
                    ễ: "e",
                    ể: "e",
                    ẽ: "e",
                    ē: "e",
                    ḕ: "e",
                    ḗ: "e",
                    ĕ: "e",
                    ė: "e",
                    ë: "e",
                    ẻ: "e",
                    ě: "e",
                    ȅ: "e",
                    ȇ: "e",
                    ẹ: "e",
                    ệ: "e",
                    ȩ: "e",
                    ḝ: "e",
                    ę: "e",
                    ḙ: "e",
                    ḛ: "e",
                    ɇ: "e",
                    ɛ: "e",
                    ǝ: "e",
                    "ⓕ": "f",
                    ｆ: "f",
                    ḟ: "f",
                    ƒ: "f",
                    ꝼ: "f",
                    "ⓖ": "g",
                    ｇ: "g",
                    ǵ: "g",
                    ĝ: "g",
                    ḡ: "g",
                    ğ: "g",
                    ġ: "g",
                    ǧ: "g",
                    ģ: "g",
                    ǥ: "g",
                    ɠ: "g",
                    ꞡ: "g",
                    ᵹ: "g",
                    ꝿ: "g",
                    "ⓗ": "h",
                    ｈ: "h",
                    ĥ: "h",
                    ḣ: "h",
                    ḧ: "h",
                    ȟ: "h",
                    ḥ: "h",
                    ḩ: "h",
                    ḫ: "h",
                    ẖ: "h",
                    ħ: "h",
                    ⱨ: "h",
                    ⱶ: "h",
                    ɥ: "h",
                    ƕ: "hv",
                    "ⓘ": "i",
                    ｉ: "i",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    ï: "i",
                    ḯ: "i",
                    ỉ: "i",
                    ǐ: "i",
                    ȉ: "i",
                    ȋ: "i",
                    ị: "i",
                    į: "i",
                    ḭ: "i",
                    ɨ: "i",
                    ı: "i",
                    "ⓙ": "j",
                    ｊ: "j",
                    ĵ: "j",
                    ǰ: "j",
                    ɉ: "j",
                    "ⓚ": "k",
                    ｋ: "k",
                    ḱ: "k",
                    ǩ: "k",
                    ḳ: "k",
                    ķ: "k",
                    ḵ: "k",
                    ƙ: "k",
                    ⱪ: "k",
                    ꝁ: "k",
                    ꝃ: "k",
                    ꝅ: "k",
                    ꞣ: "k",
                    "ⓛ": "l",
                    ｌ: "l",
                    ŀ: "l",
                    ĺ: "l",
                    ľ: "l",
                    ḷ: "l",
                    ḹ: "l",
                    ļ: "l",
                    ḽ: "l",
                    ḻ: "l",
                    ſ: "l",
                    ł: "l",
                    ƚ: "l",
                    ɫ: "l",
                    ⱡ: "l",
                    ꝉ: "l",
                    ꞁ: "l",
                    ꝇ: "l",
                    ǉ: "lj",
                    "ⓜ": "m",
                    ｍ: "m",
                    ḿ: "m",
                    ṁ: "m",
                    ṃ: "m",
                    ɱ: "m",
                    ɯ: "m",
                    "ⓝ": "n",
                    ｎ: "n",
                    ǹ: "n",
                    ń: "n",
                    ñ: "n",
                    ṅ: "n",
                    ň: "n",
                    ṇ: "n",
                    ņ: "n",
                    ṋ: "n",
                    ṉ: "n",
                    ƞ: "n",
                    ɲ: "n",
                    ŉ: "n",
                    ꞑ: "n",
                    ꞥ: "n",
                    ǌ: "nj",
                    "ⓞ": "o",
                    ｏ: "o",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    ồ: "o",
                    ố: "o",
                    ỗ: "o",
                    ổ: "o",
                    õ: "o",
                    ṍ: "o",
                    ȭ: "o",
                    ṏ: "o",
                    ō: "o",
                    ṑ: "o",
                    ṓ: "o",
                    ŏ: "o",
                    ȯ: "o",
                    ȱ: "o",
                    ö: "o",
                    ȫ: "o",
                    ỏ: "o",
                    ő: "o",
                    ǒ: "o",
                    ȍ: "o",
                    ȏ: "o",
                    ơ: "o",
                    ờ: "o",
                    ớ: "o",
                    ỡ: "o",
                    ở: "o",
                    ợ: "o",
                    ọ: "o",
                    ộ: "o",
                    ǫ: "o",
                    ǭ: "o",
                    ø: "o",
                    ǿ: "o",
                    ɔ: "o",
                    ꝋ: "o",
                    ꝍ: "o",
                    ɵ: "o",
                    œ: "oe",
                    ƣ: "oi",
                    ȣ: "ou",
                    ꝏ: "oo",
                    "ⓟ": "p",
                    ｐ: "p",
                    ṕ: "p",
                    ṗ: "p",
                    ƥ: "p",
                    ᵽ: "p",
                    ꝑ: "p",
                    ꝓ: "p",
                    ꝕ: "p",
                    "ⓠ": "q",
                    ｑ: "q",
                    ɋ: "q",
                    ꝗ: "q",
                    ꝙ: "q",
                    "ⓡ": "r",
                    ｒ: "r",
                    ŕ: "r",
                    ṙ: "r",
                    ř: "r",
                    ȑ: "r",
                    ȓ: "r",
                    ṛ: "r",
                    ṝ: "r",
                    ŗ: "r",
                    ṟ: "r",
                    ɍ: "r",
                    ɽ: "r",
                    ꝛ: "r",
                    ꞧ: "r",
                    ꞃ: "r",
                    "ⓢ": "s",
                    ｓ: "s",
                    ß: "s",
                    ś: "s",
                    ṥ: "s",
                    ŝ: "s",
                    ṡ: "s",
                    š: "s",
                    ṧ: "s",
                    ṣ: "s",
                    ṩ: "s",
                    ș: "s",
                    ş: "s",
                    ȿ: "s",
                    ꞩ: "s",
                    ꞅ: "s",
                    ẛ: "s",
                    "ⓣ": "t",
                    ｔ: "t",
                    ṫ: "t",
                    ẗ: "t",
                    ť: "t",
                    ṭ: "t",
                    ț: "t",
                    ţ: "t",
                    ṱ: "t",
                    ṯ: "t",
                    ŧ: "t",
                    ƭ: "t",
                    ʈ: "t",
                    ⱦ: "t",
                    ꞇ: "t",
                    ꜩ: "tz",
                    "ⓤ": "u",
                    ｕ: "u",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ũ: "u",
                    ṹ: "u",
                    ū: "u",
                    ṻ: "u",
                    ŭ: "u",
                    ü: "u",
                    ǜ: "u",
                    ǘ: "u",
                    ǖ: "u",
                    ǚ: "u",
                    ủ: "u",
                    ů: "u",
                    ű: "u",
                    ǔ: "u",
                    ȕ: "u",
                    ȗ: "u",
                    ư: "u",
                    ừ: "u",
                    ứ: "u",
                    ữ: "u",
                    ử: "u",
                    ự: "u",
                    ụ: "u",
                    ṳ: "u",
                    ų: "u",
                    ṷ: "u",
                    ṵ: "u",
                    ʉ: "u",
                    "ⓥ": "v",
                    ｖ: "v",
                    ṽ: "v",
                    ṿ: "v",
                    ʋ: "v",
                    ꝟ: "v",
                    ʌ: "v",
                    ꝡ: "vy",
                    "ⓦ": "w",
                    ｗ: "w",
                    ẁ: "w",
                    ẃ: "w",
                    ŵ: "w",
                    ẇ: "w",
                    ẅ: "w",
                    ẘ: "w",
                    ẉ: "w",
                    ⱳ: "w",
                    "ⓧ": "x",
                    ｘ: "x",
                    ẋ: "x",
                    ẍ: "x",
                    "ⓨ": "y",
                    ｙ: "y",
                    ỳ: "y",
                    ý: "y",
                    ŷ: "y",
                    ỹ: "y",
                    ȳ: "y",
                    ẏ: "y",
                    ÿ: "y",
                    ỷ: "y",
                    ẙ: "y",
                    ỵ: "y",
                    ƴ: "y",
                    ɏ: "y",
                    ỿ: "y",
                    "ⓩ": "z",
                    ｚ: "z",
                    ź: "z",
                    ẑ: "z",
                    ż: "z",
                    ž: "z",
                    ẓ: "z",
                    ẕ: "z",
                    ƶ: "z",
                    ȥ: "z",
                    ɀ: "z",
                    ⱬ: "z",
                    ꝣ: "z",
                    Ά: "Α",
                    Έ: "Ε",
                    Ή: "Η",
                    Ί: "Ι",
                    Ϊ: "Ι",
                    Ό: "Ο",
                    Ύ: "Υ",
                    Ϋ: "Υ",
                    Ώ: "Ω",
                    ά: "α",
                    έ: "ε",
                    ή: "η",
                    ί: "ι",
                    ϊ: "ι",
                    ΐ: "ι",
                    ό: "ο",
                    ύ: "υ",
                    ϋ: "υ",
                    ΰ: "υ",
                    ώ: "ω",
                    ς: "σ",
                    "’": "'"
                };
            })), u.define("select2/data/base", [ "../utils" ], (function(n) {
                function s(e, t) {
                    s.__super__.constructor.call(this);
                }
                return n.Extend(s, n.Observable), s.prototype.current = function(e) {
                    throw new Error("The `current` method must be defined in child classes.");
                }, s.prototype.query = function(e, t) {
                    throw new Error("The `query` method must be defined in child classes.");
                }, s.prototype.bind = function(e, t) {}, s.prototype.destroy = function() {}, s.prototype.generateResultId = function(e, t) {
                    e = e.id + "-result-";
                    return e += n.generateChars(4), null != t.id ? e += "-" + t.id.toString() : e += "-" + n.generateChars(4), 
                    e;
                }, s;
            })), u.define("select2/data/select", [ "./base", "../utils", "jquery" ], (function(e, a, l) {
                function n(e, t) {
                    this.$element = e, this.options = t, n.__super__.constructor.call(this);
                }
                return a.Extend(n, e), n.prototype.current = function(e) {
                    var t = this;
                    e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), (function(e) {
                        return t.item(l(e));
                    })));
                }, n.prototype.select = function(i) {
                    var e, r = this;
                    if (i.selected = !0, null != i.element && "option" === i.element.tagName.toLowerCase()) return i.element.selected = !0, 
                    void this.$element.trigger("input").trigger("change");
                    this.$element.prop("multiple") ? this.current((function(e) {
                        var t = [];
                        (i = [ i ]).push.apply(i, e);
                        for (var n = 0; n < i.length; n++) {
                            var s = i[n].id;
                            -1 === t.indexOf(s) && t.push(s);
                        }
                        r.$element.val(t), r.$element.trigger("input").trigger("change");
                    })) : (e = i.id, this.$element.val(e), this.$element.trigger("input").trigger("change"));
                }, n.prototype.unselect = function(i) {
                    var r = this;
                    if (this.$element.prop("multiple")) {
                        if (i.selected = !1, null != i.element && "option" === i.element.tagName.toLowerCase()) return i.element.selected = !1, 
                        void this.$element.trigger("input").trigger("change");
                        this.current((function(e) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var s = e[n].id;
                                s !== i.id && -1 === t.indexOf(s) && t.push(s);
                            }
                            r.$element.val(t), r.$element.trigger("input").trigger("change");
                        }));
                    }
                }, n.prototype.bind = function(e, t) {
                    var n = this;
                    (this.container = e).on("select", (function(e) {
                        n.select(e.data);
                    })), e.on("unselect", (function(e) {
                        n.unselect(e.data);
                    }));
                }, n.prototype.destroy = function() {
                    this.$element.find("*").each((function() {
                        a.RemoveData(this);
                    }));
                }, n.prototype.query = function(t, e) {
                    var n = [], s = this;
                    this.$element.children().each((function() {
                        var e;
                        "option" !== this.tagName.toLowerCase() && "optgroup" !== this.tagName.toLowerCase() || (e = l(this), 
                        e = s.item(e), null !== (e = s.matches(t, e)) && n.push(e));
                    })), e({
                        results: n
                    });
                }, n.prototype.addOptions = function(e) {
                    this.$element.append(e);
                }, n.prototype.option = function(e) {
                    var t;
                    e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, 
                    void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), 
                    e.title && (t.title = e.title);
                    e = this._normalizeItem(e);
                    return e.element = t, a.StoreData(t, "data", e), l(t);
                }, n.prototype.item = function(e) {
                    var t = {};
                    if (null != (t = a.GetData(e[0], "data"))) return t;
                    var n = e[0];
                    if ("option" === n.tagName.toLowerCase()) t = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    }; else if ("optgroup" === n.tagName.toLowerCase()) {
                        t = {
                            text: e.prop("label"),
                            children: [],
                            title: e.prop("title")
                        };
                        for (var s = e.children("option"), i = [], r = 0; r < s.length; r++) {
                            var o = l(s[r]);
                            o = this.item(o);
                            i.push(o);
                        }
                        t.children = i;
                    }
                    return (t = this._normalizeItem(t)).element = e[0], a.StoreData(e[0], "data", t), 
                    t;
                }, n.prototype._normalizeItem = function(e) {
                    e !== Object(e) && (e = {
                        id: e,
                        text: e
                    });
                    return null != (e = l.extend({}, {
                        text: ""
                    }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), 
                    null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), 
                    l.extend({}, {
                        selected: !1,
                        disabled: !1
                    }, e);
                }, n.prototype.matches = function(e, t) {
                    return this.options.get("matcher")(e, t);
                }, n;
            })), u.define("select2/data/array", [ "./select", "../utils", "jquery" ], (function(e, t, c) {
                function s(e, t) {
                    this._dataToConvert = t.get("data") || [], s.__super__.constructor.call(this, e, t);
                }
                return t.Extend(s, e), s.prototype.bind = function(e, t) {
                    s.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
                }, s.prototype.select = function(n) {
                    var e = this.$element.find("option").filter((function(e, t) {
                        return t.value == n.id.toString();
                    }));
                    0 === e.length && (e = this.option(n), this.addOptions(e)), s.__super__.select.call(this, n);
                }, s.prototype.convertToOptions = function(e) {
                    var t = this, n = this.$element.find("option"), s = n.map((function() {
                        return t.item(c(this)).id;
                    })).get(), i = [];
                    for (var r = 0; r < e.length; r++) {
                        var o, a, l = this._normalizeItem(e[r]);
                        0 <= s.indexOf(l.id) ? (o = n.filter(function(e) {
                            return function() {
                                return c(this).val() == e.id;
                            };
                        }(l)), a = this.item(o), a = c.extend(!0, {}, l, a), a = this.option(a), o.replaceWith(a)) : (a = this.option(l), 
                        l.children && (l = this.convertToOptions(l.children), a.append(l)), i.push(a));
                    }
                    return i;
                }, s;
            })), u.define("select2/data/ajax", [ "./array", "../utils", "jquery" ], (function(e, t, r) {
                function n(e, t) {
                    this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), 
                    n.__super__.constructor.call(this, e, t);
                }
                return t.Extend(n, e), n.prototype._applyDefaults = function(e) {
                    var t = {
                        data: function(e) {
                            return r.extend({}, e, {
                                q: e.term
                            });
                        },
                        transport: function(e, t, n) {
                            e = r.ajax(e);
                            return e.then(t), e.fail(n), e;
                        }
                    };
                    return r.extend({}, t, e, !0);
                }, n.prototype.processResults = function(e) {
                    return e;
                }, n.prototype.query = function(t, n) {
                    var s = this;
                    null != this._request && ("function" == typeof this._request.abort && this._request.abort(), 
                    this._request = null);
                    var i = r.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    function e() {
                        var e = i.transport(i, (function(e) {
                            e = s.processResults(e, t);
                            s.options.get("debug") && window.console && console.error && (e && e.results && Array.isArray(e.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), 
                            n(e);
                        }), (function() {
                            "status" in e && (0 === e.status || "0" === e.status) || s.trigger("results:message", {
                                message: "errorLoading"
                            });
                        }));
                        s._request = e;
                    }
                    "function" == typeof i.url && (i.url = i.url.call(this.$element, t)), "function" == typeof i.data && (i.data = i.data.call(this.$element, t)), 
                    this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), 
                    this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e();
                }, n;
            })), u.define("select2/data/tags", [ "jquery" ], (function(t) {
                function e(e, t, n) {
                    var s = n.get("tags"), i = n.get("createTag");
                    void 0 !== i && (this.createTag = i);
                    i = n.get("insertTag");
                    if (void 0 !== i && (this.insertTag = i), e.call(this, t, n), Array.isArray(s)) for (var r = 0; r < s.length; r++) {
                        var o = s[r];
                        o = this._normalizeItem(o), o = this.option(o);
                        this.$element.append(o);
                    }
                }
                return e.prototype.query = function(e, c, u) {
                    var d = this;
                    this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, (function e(t, n) {
                        for (var s = t.results, i = 0; i < s.length; i++) {
                            var r = s[i], o = null != r.children && !e({
                                results: r.children
                            }, !0);
                            if ((r.text || "").toUpperCase() === (c.term || "").toUpperCase() || o) return !n && (t.data = s, 
                            void u(t));
                        }
                        if (n) return !0;
                        var a, l = d.createTag(c);
                        null != l && ((a = d.option(l)).attr("data-select2-tag", "true"), d.addOptions([ a ]), 
                        d.insertTag(s, l)), t.results = s, u(t);
                    })) : e.call(this, c, u);
                }, e.prototype.createTag = function(e, t) {
                    if (null == t.term) return null;
                    t = t.term.trim();
                    return "" === t ? null : {
                        id: t,
                        text: t
                    };
                }, e.prototype.insertTag = function(e, t, n) {
                    t.unshift(n);
                }, e.prototype._removeOldTags = function(e) {
                    this.$element.find("option[data-select2-tag]").each((function() {
                        this.selected || t(this).remove();
                    }));
                }, e;
            })), u.define("select2/data/tokenizer", [ "jquery" ], (function(c) {
                function e(e, t, n) {
                    var s = n.get("tokenizer");
                    void 0 !== s && (this.tokenizer = s), e.call(this, t, n);
                }
                return e.prototype.bind = function(e, t, n) {
                    e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field");
                }, e.prototype.query = function(e, t, n) {
                    var s = this;
                    t.term = t.term || "";
                    var i = this.tokenizer(t, this.options, (function(e) {
                        var t, n = s._normalizeItem(e);
                        s.$element.find("option").filter((function() {
                            return c(this).val() === n.id;
                        })).length || ((t = s.option(n)).attr("data-select2-tag", !0), s._removeOldTags(), 
                        s.addOptions([ t ])), t = n, s.trigger("select", {
                            data: t
                        });
                    }));
                    i.term !== t.term && (this.$search.length && (this.$search.val(i.term), this.$search.trigger("focus")), 
                    t.term = i.term), e.call(this, t, n);
                }, e.prototype.tokenizer = function(e, t, n, s) {
                    for (var i = n.get("tokenSeparators") || [], r = t.term, o = 0, a = this.createTag || function(e) {
                        return {
                            id: e.term,
                            text: e.term
                        };
                    }; o < r.length; ) {
                        var l = r[o];
                        -1 !== i.indexOf(l) ? (l = r.substr(0, o), null != (l = a(c.extend({}, t, {
                            term: l
                        }))) ? (s(l), r = r.substr(o + 1) || "", o = 0) : o++) : o++;
                    }
                    return {
                        term: r
                    };
                }, e;
            })), u.define("select2/data/minimumInputLength", [], (function() {
                function e(e, t, n) {
                    this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n);
                }
                return e.prototype.query = function(e, t, n) {
                    t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : e.call(this, t, n);
                }, e;
            })), u.define("select2/data/maximumInputLength", [], (function() {
                function e(e, t, n) {
                    this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n);
                }
                return e.prototype.query = function(e, t, n) {
                    t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : e.call(this, t, n);
                }, e;
            })), u.define("select2/data/maximumSelectionLength", [], (function() {
                function e(e, t, n) {
                    this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n);
                }
                return e.prototype.bind = function(e, t, n) {
                    var s = this;
                    e.call(this, t, n), t.on("select", (function() {
                        s._checkIfMaximumSelected();
                    }));
                }, e.prototype.query = function(e, t, n) {
                    var s = this;
                    this._checkIfMaximumSelected((function() {
                        e.call(s, t, n);
                    }));
                }, e.prototype._checkIfMaximumSelected = function(e, t) {
                    var n = this;
                    this.current((function(e) {
                        e = null != e ? e.length : 0;
                        0 < n.maximumSelectionLength && e >= n.maximumSelectionLength ? n.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: n.maximumSelectionLength
                            }
                        }) : t && t();
                    }));
                }, e;
            })), u.define("select2/dropdown", [ "jquery", "./utils" ], (function(t, e) {
                function n(e, t) {
                    this.$element = e, this.options = t, n.__super__.constructor.call(this);
                }
                return e.Extend(n, e.Observable), n.prototype.render = function() {
                    var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return e.attr("dir", this.options.get("dir")), this.$dropdown = e;
                }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
                    this.$dropdown.remove();
                }, n;
            })), u.define("select2/dropdown/search", [ "jquery" ], (function(r) {
                function e() {}
                return e.prototype.render = function(e) {
                    var t = e.call(this), n = this.options.get("translations").get("search");
                    e = r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                    return this.$searchContainer = e, this.$search = e.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete")), 
                    this.$search.attr("aria-label", n()), t.prepend(e), t;
                }, e.prototype.bind = function(e, t, n) {
                    var s = this, i = t.id + "-results";
                    e.call(this, t, n), this.$search.on("keydown", (function(e) {
                        s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented();
                    })), this.$search.on("input", (function(e) {
                        r(this).off("keyup");
                    })), this.$search.on("keyup input", (function(e) {
                        s.handleSearch(e);
                    })), t.on("open", (function() {
                        s.$search.attr("tabindex", 0), s.$search.attr("aria-controls", i), s.$search.trigger("focus"), 
                        window.setTimeout((function() {
                            s.$search.trigger("focus");
                        }), 0);
                    })), t.on("close", (function() {
                        s.$search.attr("tabindex", -1), s.$search.removeAttr("aria-controls"), s.$search.removeAttr("aria-activedescendant"), 
                        s.$search.val(""), s.$search.trigger("blur");
                    })), t.on("focus", (function() {
                        t.isOpen() || s.$search.trigger("focus");
                    })), t.on("results:all", (function(e) {
                        null != e.query.term && "" !== e.query.term || (s.showSearch(e) ? s.$searchContainer[0].classList.remove("select2-search--hide") : s.$searchContainer[0].classList.add("select2-search--hide"));
                    })), t.on("results:focus", (function(e) {
                        e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant");
                    }));
                }, e.prototype.handleSearch = function(e) {
                    var t;
                    this._keyUpPrevented || (t = this.$search.val(), this.trigger("query", {
                        term: t
                    })), this._keyUpPrevented = !1;
                }, e.prototype.showSearch = function(e, t) {
                    return !0;
                }, e;
            })), u.define("select2/dropdown/hidePlaceholder", [], (function() {
                function e(e, t, n, s) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, s);
                }
                return e.prototype.append = function(e, t) {
                    t.results = this.removePlaceholder(t.results), e.call(this, t);
                }, e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t;
                }, e.prototype.removePlaceholder = function(e, t) {
                    for (var n = t.slice(0), s = t.length - 1; 0 <= s; s--) {
                        var i = t[s];
                        this.placeholder.id === i.id && n.splice(s, 1);
                    }
                    return n;
                }, e;
            })), u.define("select2/dropdown/infiniteScroll", [ "jquery" ], (function(n) {
                function e(e, t, n, s) {
                    this.lastParams = {}, e.call(this, t, n, s), this.$loadingMore = this.createLoadingMore(), 
                    this.loading = !1;
                }
                return e.prototype.append = function(e, t) {
                    this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), 
                    this.loadMoreIfNeeded());
                }, e.prototype.bind = function(e, t, n) {
                    var s = this;
                    e.call(this, t, n), t.on("query", (function(e) {
                        s.lastParams = e, s.loading = !0;
                    })), t.on("query:append", (function(e) {
                        s.lastParams = e, s.loading = !0;
                    })), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
                }, e.prototype.loadMoreIfNeeded = function() {
                    var e = n.contains(document.documentElement, this.$loadingMore[0]);
                    !this.loading && e && (e = this.$results.offset().top + this.$results.outerHeight(!1), 
                    this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= e + 50 && this.loadMore());
                }, e.prototype.loadMore = function() {
                    this.loading = !0;
                    var e = n.extend({}, {
                        page: 1
                    }, this.lastParams);
                    e.page++, this.trigger("query:append", e);
                }, e.prototype.showLoadingMore = function(e, t) {
                    return t.pagination && t.pagination.more;
                }, e.prototype.createLoadingMore = function() {
                    var e = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'), t = this.options.get("translations").get("loadingMore");
                    return e.html(t(this.lastParams)), e;
                }, e;
            })), u.define("select2/dropdown/attachBody", [ "jquery", "../utils" ], (function(u, o) {
                function e(e, t, n) {
                    this.$dropdownParent = u(n.get("dropdownParent") || document.body), e.call(this, t, n);
                }
                return e.prototype.bind = function(e, t, n) {
                    var s = this;
                    e.call(this, t, n), t.on("open", (function() {
                        s._showDropdown(), s._attachPositioningHandler(t), s._bindContainerResultHandlers(t);
                    })), t.on("close", (function() {
                        s._hideDropdown(), s._detachPositioningHandler(t);
                    })), this.$dropdownContainer.on("mousedown", (function(e) {
                        e.stopPropagation();
                    }));
                }, e.prototype.destroy = function(e) {
                    e.call(this), this.$dropdownContainer.remove();
                }, e.prototype.position = function(e, t, n) {
                    t.attr("class", n.attr("class")), t[0].classList.remove("select2"), t[0].classList.add("select2-container--open"), 
                    t.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = n;
                }, e.prototype.render = function(e) {
                    var t = u("<span></span>");
                    e = e.call(this);
                    return t.append(e), this.$dropdownContainer = t;
                }, e.prototype._hideDropdown = function(e) {
                    this.$dropdownContainer.detach();
                }, e.prototype._bindContainerResultHandlers = function(e, t) {
                    var n;
                    this._containerResultsHandlersBound || (n = this, t.on("results:all", (function() {
                        n._positionDropdown(), n._resizeDropdown();
                    })), t.on("results:append", (function() {
                        n._positionDropdown(), n._resizeDropdown();
                    })), t.on("results:message", (function() {
                        n._positionDropdown(), n._resizeDropdown();
                    })), t.on("select", (function() {
                        n._positionDropdown(), n._resizeDropdown();
                    })), t.on("unselect", (function() {
                        n._positionDropdown(), n._resizeDropdown();
                    })), this._containerResultsHandlersBound = !0);
                }, e.prototype._attachPositioningHandler = function(e, t) {
                    var n = this, s = "scroll.select2." + t.id, i = "resize.select2." + t.id, r = "orientationchange.select2." + t.id;
                    t = this.$container.parents().filter(o.hasScroll);
                    t.each((function() {
                        o.StoreData(this, "select2-scroll-position", {
                            x: u(this).scrollLeft(),
                            y: u(this).scrollTop()
                        });
                    })), t.on(s, (function(e) {
                        var t = o.GetData(this, "select2-scroll-position");
                        u(this).scrollTop(t.y);
                    })), u(window).on(s + " " + i + " " + r, (function(e) {
                        n._positionDropdown(), n._resizeDropdown();
                    }));
                }, e.prototype._detachPositioningHandler = function(e, t) {
                    var n = "scroll.select2." + t.id, s = "resize.select2." + t.id;
                    t = "orientationchange.select2." + t.id;
                    this.$container.parents().filter(o.hasScroll).off(n), u(window).off(n + " " + s + " " + t);
                }, e.prototype._positionDropdown = function() {
                    var e = u(window), t = this.$dropdown[0].classList.contains("select2-dropdown--above"), n = this.$dropdown[0].classList.contains("select2-dropdown--below"), s = null, i = this.$container.offset();
                    i.bottom = i.top + this.$container.outerHeight(!1);
                    var r = {
                        height: this.$container.outerHeight(!1)
                    };
                    r.top = i.top, r.bottom = i.top + r.height;
                    var o = this.$dropdown.outerHeight(!1), a = e.scrollTop(), l = e.scrollTop() + e.height(), c = a < i.top - o;
                    e = l > i.bottom + o, a = {
                        left: i.left,
                        top: r.bottom
                    }, l = this.$dropdownParent;
                    "static" === l.css("position") && (l = l.offsetParent());
                    i = {
                        top: 0,
                        left: 0
                    };
                    (u.contains(document.body, l[0]) || l[0].isConnected) && (i = l.offset()), a.top -= i.top, 
                    a.left -= i.left, t || n || (s = "below"), e || !c || t ? !c && e && t && (s = "below") : s = "above", 
                    ("above" == s || t && "below" !== s) && (a.top = r.top - i.top - o), null != s && (this.$dropdown[0].classList.remove("select2-dropdown--below"), 
                    this.$dropdown[0].classList.remove("select2-dropdown--above"), this.$dropdown[0].classList.add("select2-dropdown--" + s), 
                    this.$container[0].classList.remove("select2-container--below"), this.$container[0].classList.remove("select2-container--above"), 
                    this.$container[0].classList.add("select2-container--" + s)), this.$dropdownContainer.css(a);
                }, e.prototype._resizeDropdown = function() {
                    var e = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", 
                    e.width = "auto"), this.$dropdown.css(e);
                }, e.prototype._showDropdown = function(e) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), 
                    this._resizeDropdown();
                }, e;
            })), u.define("select2/dropdown/minimumResultsForSearch", [], (function() {
                function e(e, t, n, s) {
                    this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), 
                    e.call(this, t, n, s);
                }
                return e.prototype.showSearch = function(e, t) {
                    return !(function e(t) {
                        for (var n = 0, s = 0; s < t.length; s++) {
                            var i = t[s];
                            i.children ? n += e(i.children) : n++;
                        }
                        return n;
                    }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t);
                }, e;
            })), u.define("select2/dropdown/selectOnClose", [ "../utils" ], (function(s) {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var s = this;
                    e.call(this, t, n), t.on("close", (function(e) {
                        s._handleSelectOnClose(e);
                    }));
                }, e.prototype._handleSelectOnClose = function(e, t) {
                    if (t && null != t.originalSelect2Event) {
                        var n = t.originalSelect2Event;
                        if ("select" === n._type || "unselect" === n._type) return;
                    }
                    n = this.getHighlightedResults();
                    n.length < 1 || null != (n = s.GetData(n[0], "data")).element && n.element.selected || null == n.element && n.selected || this.trigger("select", {
                        data: n
                    });
                }, e;
            })), u.define("select2/dropdown/closeOnSelect", [], (function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var s = this;
                    e.call(this, t, n), t.on("select", (function(e) {
                        s._selectTriggered(e);
                    })), t.on("unselect", (function(e) {
                        s._selectTriggered(e);
                    }));
                }, e.prototype._selectTriggered = function(e, t) {
                    var n = t.originalEvent;
                    n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
                        originalEvent: n,
                        originalSelect2Event: t
                    });
                }, e;
            })), u.define("select2/dropdown/dropdownCss", [ "../utils" ], (function(n) {
                function e() {}
                return e.prototype.render = function(e) {
                    var t = e.call(this);
                    e = this.options.get("dropdownCssClass") || "";
                    return -1 !== e.indexOf(":all:") && (e = e.replace(":all:", ""), n.copyNonInternalCssClasses(t[0], this.$element[0])), 
                    t.addClass(e), t;
                }, e;
            })), u.define("select2/dropdown/tagsSearchHighlight", [ "../utils" ], (function(s) {
                function e() {}
                return e.prototype.highlightFirstItem = function(e) {
                    var t = this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");
                    if (0 < t.length) {
                        var n = t.first();
                        t = s.GetData(n[0], "data").element;
                        if (t && t.getAttribute && "true" === t.getAttribute("data-select2-tag")) return void n.trigger("mouseenter");
                    }
                    e.call(this);
                }, e;
            })), u.define("select2/i18n/en", [], (function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded.";
                    },
                    inputTooLong: function(e) {
                        var t = e.input.length - e.maximum;
                        e = "Please delete " + t + " character";
                        return 1 != t && (e += "s"), e;
                    },
                    inputTooShort: function(e) {
                        return "Please enter " + (e.minimum - e.input.length) + " or more characters";
                    },
                    loadingMore: function() {
                        return "Loading more results…";
                    },
                    maximumSelected: function(e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"), t;
                    },
                    noResults: function() {
                        return "No results found";
                    },
                    searching: function() {
                        return "Searching…";
                    },
                    removeAllItems: function() {
                        return "Remove all items";
                    },
                    removeItem: function() {
                        return "Remove item";
                    },
                    search: function() {
                        return "Search";
                    }
                };
            })), u.define("select2/defaults", [ "jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./dropdown/tagsSearchHighlight", "./i18n/en" ], (function(l, r, o, a, c, u, d, p, h, f, g, t, m, y, v, _, b, $, w, x, A, D, S, E, O, C, L, T, q, I, e) {
                function n() {
                    this.reset();
                }
                return n.prototype.apply = function(e) {
                    var t;
                    null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter && (null != e.ajax ? e.dataAdapter = v : null != e.data ? e.dataAdapter = y : e.dataAdapter = m, 
                    0 < e.minimumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, $)), 0 < e.maximumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, w)), 
                    0 < e.maximumSelectionLength && (e.dataAdapter = f.Decorate(e.dataAdapter, x)), 
                    e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = f.Decorate(e.dataAdapter, b))), 
                    null == e.resultsAdapter && (e.resultsAdapter = r, null != e.ajax && (e.resultsAdapter = f.Decorate(e.resultsAdapter, E)), 
                    null != e.placeholder && (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)), e.selectOnClose && (e.resultsAdapter = f.Decorate(e.resultsAdapter, L)), 
                    e.tags && (e.resultsAdapter = f.Decorate(e.resultsAdapter, I))), null == e.dropdownAdapter && (e.multiple ? e.dropdownAdapter = A : (t = f.Decorate(A, D), 
                    e.dropdownAdapter = t), 0 !== e.minimumResultsForSearch && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, C)), 
                    e.closeOnSelect && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)), null != e.dropdownCssClass && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)), 
                    e.dropdownAdapter = f.Decorate(e.dropdownAdapter, O)), null == e.selectionAdapter && (e.multiple ? e.selectionAdapter = a : e.selectionAdapter = o, 
                    null != e.placeholder && (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)), 
                    e.allowClear && (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)), e.multiple && (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)), 
                    null != e.selectionCssClass && (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)), 
                    e.selectionAdapter = f.Decorate(e.selectionAdapter, h)), e.language = this._resolveLanguage(e.language), 
                    e.language.push("en");
                    for (var n = [], s = 0; s < e.language.length; s++) {
                        var i = e.language[s];
                        -1 === n.indexOf(i) && n.push(i);
                    }
                    return e.language = n, e.translations = this._processTranslations(e.language, e.debug), 
                    e;
                }, n.prototype.reset = function() {
                    function a(e) {
                        return e.replace(/[^\u0000-\u007E]/g, (function(e) {
                            return t[e] || e;
                        }));
                    }
                    this.defaults = {
                        amdLanguageBase: "./i18n/",
                        autocomplete: "off",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: f.escapeMarkup,
                        language: {},
                        matcher: function e(t, n) {
                            if (null == t.term || "" === t.term.trim()) return n;
                            if (n.children && 0 < n.children.length) {
                                for (var s = l.extend(!0, {}, n), i = n.children.length - 1; 0 <= i; i--) null == e(t, n.children[i]) && s.children.splice(i, 1);
                                return 0 < s.children.length ? s : e(t, s);
                            }
                            var r = a(n.text).toUpperCase(), o = a(t.term).toUpperCase();
                            return -1 < r.indexOf(o) ? n : null;
                        },
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        scrollAfterSelect: !1,
                        sorter: function(e) {
                            return e;
                        },
                        templateResult: function(e) {
                            return e.text;
                        },
                        templateSelection: function(e) {
                            return e.text;
                        },
                        theme: "default",
                        width: "resolve"
                    };
                }, n.prototype.applyFromElement = function(e, t) {
                    var n = e.language, s = this.defaults.language, i = t.prop("lang");
                    t = t.closest("[lang]").prop("lang"), t = Array.prototype.concat.call(this._resolveLanguage(i), this._resolveLanguage(n), this._resolveLanguage(s), this._resolveLanguage(t));
                    return e.language = t, e;
                }, n.prototype._resolveLanguage = function(e) {
                    if (!e) return [];
                    if (l.isEmptyObject(e)) return [];
                    if (l.isPlainObject(e)) return [ e ];
                    for (var t, n = Array.isArray(e) ? e : [ e ], s = [], i = 0; i < n.length; i++) s.push(n[i]), 
                    "string" == typeof n[i] && 0 < n[i].indexOf("-") && (t = n[i].split("-")[0], s.push(t));
                    return s;
                }, n.prototype._processTranslations = function(e, t) {
                    for (var n = new g, s = 0; s < e.length; s++) {
                        var i = new g, r = e[s];
                        if ("string" == typeof r) try {
                            i = g.loadPath(r);
                        } catch (e) {
                            try {
                                r = this.defaults.amdLanguageBase + r, i = g.loadPath(r);
                            } catch (e) {
                                t && window.console && console.warn && console.warn('Select2: The language file for "' + r + '" could not be automatically loaded. A fallback will be used instead.');
                            }
                        } else i = l.isPlainObject(r) ? new g(r) : r;
                        n.extend(i);
                    }
                    return n;
                }, n.prototype.set = function(e, t) {
                    var n = {};
                    n[l.camelCase(e)] = t;
                    n = f._convertData(n);
                    l.extend(!0, this.defaults, n);
                }, new n;
            })), u.define("select2/options", [ "jquery", "./defaults", "./utils" ], (function(c, n, u) {
                function e(e, t) {
                    this.options = e, null != t && this.fromElement(t), null != t && (this.options = n.applyFromElement(this.options, t)), 
                    this.options = n.apply(this.options);
                }
                return e.prototype.fromElement = function(e) {
                    var t = [ "select2" ];
                    null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), 
                    null == this.options.autocomplete && e.prop("autocomplete") && (this.options.autocomplete = e.prop("autocomplete")), 
                    null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), 
                    e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), 
                    u.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), 
                    u.StoreData(e[0], "data", u.GetData(e[0], "select2Tags")), u.StoreData(e[0], "tags", !0)), 
                    u.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), 
                    e.attr("ajax--url", u.GetData(e[0], "ajaxUrl")), u.StoreData(e[0], "ajax-Url", u.GetData(e[0], "ajaxUrl")));
                    var n = {};
                    function s(e, t) {
                        return t.toUpperCase();
                    }
                    for (var i = 0; i < e[0].attributes.length; i++) {
                        var r = e[0].attributes[i].name, o = "data-";
                        r.substr(0, o.length) == o && (r = r.substring(o.length), o = u.GetData(e[0], r), 
                        n[r.replace(/-([a-z])/g, s)] = o);
                    }
                    c.fn.jquery && "1." == c.fn.jquery.substr(0, 2) && e[0].dataset && (n = c.extend(!0, {}, e[0].dataset, n));
                    var a, l = c.extend(!0, {}, u.GetData(e[0]), n);
                    for (a in l = u._convertData(l)) -1 < t.indexOf(a) || (c.isPlainObject(this.options[a]) ? c.extend(this.options[a], l[a]) : this.options[a] = l[a]);
                    return this;
                }, e.prototype.get = function(e) {
                    return this.options[e];
                }, e.prototype.set = function(e, t) {
                    this.options[e] = t;
                }, e;
            })), u.define("select2/core", [ "jquery", "./options", "./utils", "./keys" ], (function(t, i, r, s) {
                var o = function(e, t) {
                    null != r.GetData(e[0], "select2") && r.GetData(e[0], "select2").destroy(), this.$element = e, 
                    this.id = this._generateId(e), t = t || {}, this.options = new i(t, e), o.__super__.constructor.call(this);
                    var n = e.attr("tabindex") || 0;
                    r.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
                    t = this.options.get("dataAdapter");
                    this.dataAdapter = new t(e, this.options);
                    n = this.render();
                    this._placeContainer(n);
                    t = this.options.get("selectionAdapter");
                    this.selection = new t(e, this.options), this.$selection = this.selection.render(), 
                    this.selection.position(this.$selection, n);
                    t = this.options.get("dropdownAdapter");
                    this.dropdown = new t(e, this.options), this.$dropdown = this.dropdown.render(), 
                    this.dropdown.position(this.$dropdown, n);
                    n = this.options.get("resultsAdapter");
                    this.results = new n(e, this.options, this.dataAdapter), this.$results = this.results.render(), 
                    this.results.position(this.$results, this.$dropdown);
                    var s = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), 
                    this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), 
                    this.dataAdapter.current((function(e) {
                        s.trigger("selection:update", {
                            data: e
                        });
                    })), e[0].classList.add("select2-hidden-accessible"), e.attr("aria-hidden", "true"), 
                    this._syncAttributes(), r.StoreData(e[0], "select2", this), e.data("select2", this);
                };
                return r.Extend(o, r.Observable), o.prototype._generateId = function(e) {
                    return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + r.generateChars(2) : r.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
                }, o.prototype._placeContainer = function(e) {
                    e.insertAfter(this.$element);
                    var t = this._resolveWidth(this.$element, this.options.get("width"));
                    null != t && e.css("width", t);
                }, o.prototype._resolveWidth = function(e, t) {
                    var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == t) {
                        var s = this._resolveWidth(e, "style");
                        return null != s ? s : this._resolveWidth(e, "element");
                    }
                    if ("element" == t) {
                        s = e.outerWidth(!1);
                        return s <= 0 ? "auto" : s + "px";
                    }
                    if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
                    e = e.attr("style");
                    if ("string" != typeof e) return null;
                    for (var i = e.split(";"), r = 0, o = i.length; r < o; r += 1) {
                        var a = i[r].replace(/\s/g, "").match(n);
                        if (null !== a && 1 <= a.length) return a[1];
                    }
                    return null;
                }, o.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), 
                    this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
                }, o.prototype._registerDomEvents = function() {
                    var t = this;
                    this.$element.on("change.select2", (function() {
                        t.dataAdapter.current((function(e) {
                            t.trigger("selection:update", {
                                data: e
                            });
                        }));
                    })), this.$element.on("focus.select2", (function(e) {
                        t.trigger("focus", e);
                    })), this._syncA = r.bind(this._syncAttributes, this), this._syncS = r.bind(this._syncSubtree, this), 
                    this._observer = new window.MutationObserver((function(e) {
                        t._syncA(), t._syncS(e);
                    })), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    });
                }, o.prototype._registerDataEvents = function() {
                    var n = this;
                    this.dataAdapter.on("*", (function(e, t) {
                        n.trigger(e, t);
                    }));
                }, o.prototype._registerSelectionEvents = function() {
                    var n = this, s = [ "toggle", "focus" ];
                    this.selection.on("toggle", (function() {
                        n.toggleDropdown();
                    })), this.selection.on("focus", (function(e) {
                        n.focus(e);
                    })), this.selection.on("*", (function(e, t) {
                        -1 === s.indexOf(e) && n.trigger(e, t);
                    }));
                }, o.prototype._registerDropdownEvents = function() {
                    var n = this;
                    this.dropdown.on("*", (function(e, t) {
                        n.trigger(e, t);
                    }));
                }, o.prototype._registerResultsEvents = function() {
                    var n = this;
                    this.results.on("*", (function(e, t) {
                        n.trigger(e, t);
                    }));
                }, o.prototype._registerEvents = function() {
                    var n = this;
                    this.on("open", (function() {
                        n.$container[0].classList.add("select2-container--open");
                    })), this.on("close", (function() {
                        n.$container[0].classList.remove("select2-container--open");
                    })), this.on("enable", (function() {
                        n.$container[0].classList.remove("select2-container--disabled");
                    })), this.on("disable", (function() {
                        n.$container[0].classList.add("select2-container--disabled");
                    })), this.on("blur", (function() {
                        n.$container[0].classList.remove("select2-container--focus");
                    })), this.on("query", (function(t) {
                        n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, (function(e) {
                            n.trigger("results:all", {
                                data: e,
                                query: t
                            });
                        }));
                    })), this.on("query:append", (function(t) {
                        this.dataAdapter.query(t, (function(e) {
                            n.trigger("results:append", {
                                data: e,
                                query: t
                            });
                        }));
                    })), this.on("keypress", (function(e) {
                        var t = e.which;
                        n.isOpen() ? t === s.ESC || t === s.UP && e.altKey ? (n.close(e), e.preventDefault()) : t === s.ENTER || t === s.TAB ? (n.trigger("results:select", {}), 
                        e.preventDefault()) : t === s.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), 
                        e.preventDefault()) : t === s.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === s.DOWN && (n.trigger("results:next", {}), 
                        e.preventDefault()) : (t === s.ENTER || t === s.SPACE || t === s.DOWN && e.altKey) && (n.open(), 
                        e.preventDefault());
                    }));
                }, o.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), 
                    this.trigger("disable", {})) : this.trigger("enable", {});
                }, o.prototype._isChangeMutation = function(e) {
                    var t = this;
                    if (e.addedNodes && 0 < e.addedNodes.length) {
                        for (var n = 0; n < e.addedNodes.length; n++) if (e.addedNodes[n].selected) return !0;
                    } else {
                        if (e.removedNodes && 0 < e.removedNodes.length) return !0;
                        if (Array.isArray(e)) return e.some((function(e) {
                            return t._isChangeMutation(e);
                        }));
                    }
                    return !1;
                }, o.prototype._syncSubtree = function(e) {
                    e = this._isChangeMutation(e);
                    var t = this;
                    e && this.dataAdapter.current((function(e) {
                        t.trigger("selection:update", {
                            data: e
                        });
                    }));
                }, o.prototype.trigger = function(e, t) {
                    var n = o.__super__.trigger, s = {
                        open: "opening",
                        close: "closing",
                        select: "selecting",
                        unselect: "unselecting",
                        clear: "clearing"
                    };
                    if (void 0 === t && (t = {}), e in s) {
                        var i = s[e];
                        s = {
                            prevented: !1,
                            name: e,
                            args: t
                        };
                        if (n.call(this, i, s), s.prevented) return void (t.prevented = !0);
                    }
                    n.call(this, e, t);
                }, o.prototype.toggleDropdown = function() {
                    this.isDisabled() || (this.isOpen() ? this.close() : this.open());
                }, o.prototype.open = function() {
                    this.isOpen() || this.isDisabled() || this.trigger("query", {});
                }, o.prototype.close = function(e) {
                    this.isOpen() && this.trigger("close", {
                        originalEvent: e
                    });
                }, o.prototype.isEnabled = function() {
                    return !this.isDisabled();
                }, o.prototype.isDisabled = function() {
                    return this.options.get("disabled");
                }, o.prototype.isOpen = function() {
                    return this.$container[0].classList.contains("select2-container--open");
                }, o.prototype.hasFocus = function() {
                    return this.$container[0].classList.contains("select2-container--focus");
                }, o.prototype.focus = function(e) {
                    this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"), 
                    this.trigger("focus", {}));
                }, o.prototype.enable = function(e) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), 
                    null != e && 0 !== e.length || (e = [ !0 ]);
                    e = !e[0];
                    this.$element.prop("disabled", e);
                }, o.prototype.data = function() {
                    this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var t = [];
                    return this.dataAdapter.current((function(e) {
                        t = e;
                    })), t;
                }, o.prototype.val = function(e) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), 
                    null == e || 0 === e.length) return this.$element.val();
                    e = e[0];
                    Array.isArray(e) && (e = e.map((function(e) {
                        return e.toString();
                    }))), this.$element.val(e).trigger("input").trigger("change");
                }, o.prototype.destroy = function() {
                    r.RemoveData(this.$container[0]), this.$container.remove(), this._observer.disconnect(), 
                    this._observer = null, this._syncA = null, this._syncS = null, this.$element.off(".select2"), 
                    this.$element.attr("tabindex", r.GetData(this.$element[0], "old-tabindex")), this.$element[0].classList.remove("select2-hidden-accessible"), 
                    this.$element.attr("aria-hidden", "false"), r.RemoveData(this.$element[0]), this.$element.removeData("select2"), 
                    this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), 
                    this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
                }, o.prototype.render = function() {
                    var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container[0].classList.add("select2-container--" + this.options.get("theme")), 
                    r.StoreData(e[0], "element", this.$element), e;
                }, o;
            })), u.define("jquery-mousewheel", [ "jquery" ], (function(e) {
                return e;
            })), u.define("jquery.select2", [ "jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils" ], (function(i, e, r, t, o) {
                var a;
                return null == i.fn.select2 && (a = [ "open", "close", "destroy" ], i.fn.select2 = function(t) {
                    if ("object" == typeof (t = t || {})) return this.each((function() {
                        var e = i.extend(!0, {}, t);
                        new r(i(this), e);
                    })), this;
                    if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
                    var n, s = Array.prototype.slice.call(arguments, 1);
                    return this.each((function() {
                        var e = o.GetData(this, "select2");
                        null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), 
                        n = e[t].apply(e, s);
                    })), -1 < a.indexOf(t) ? this : n;
                }), null == i.fn.select2.defaults && (i.fn.select2.defaults = t), r;
            })), {
                define: u.define,
                require: u.require
            });
            function b(e, t) {
                return i.call(e, t);
            }
            function l(e, t) {
                var n, s, i, r, o, a, l, c, u, d, p = t && t.split("/"), h = y.map, f = h && h["*"] || {};
                if (e) {
                    for (t = (e = e.split("/")).length - 1, y.nodeIdCompat && _.test(e[t]) && (e[t] = e[t].replace(_, "")), 
                    "." === e[0].charAt(0) && p && (e = p.slice(0, p.length - 1).concat(e)), c = 0; c < e.length; c++) "." === (d = e[c]) ? (e.splice(c, 1), 
                    --c) : ".." === d && (0 === c || 1 === c && ".." === e[2] || ".." === e[c - 1] || 0 < c && (e.splice(c - 1, 2), 
                    c -= 2));
                    e = e.join("/");
                }
                if ((p || f) && h) {
                    for (c = (n = e.split("/")).length; 0 < c; --c) {
                        if (s = n.slice(0, c).join("/"), p) for (u = p.length; 0 < u; --u) if (i = h[p.slice(0, u).join("/")], 
                        i = i && i[s]) {
                            r = i, o = c;
                            break;
                        }
                        if (r) break;
                        !a && f && f[s] && (a = f[s], l = c);
                    }
                    !r && a && (r = a, o = l), r && (n.splice(0, o, r), e = n.join("/"));
                }
                return e;
            }
            function w(t, n) {
                return function() {
                    var e = a.call(arguments, 0);
                    return "string" != typeof e[0] && 1 === e.length && e.push(null), o.apply(p, e.concat([ t, n ]));
                };
            }
            function x(e) {
                var t;
                if (b(m, e) && (t = m[e], delete m[e], v[e] = !0, r.apply(p, t)), !b(g, e) && !b(v, e)) throw new Error("No " + e);
                return g[e];
            }
            function c(e) {
                var t, n = e ? e.indexOf("!") : -1;
                return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [ t, e ];
            }
            function A(e) {
                return e ? c(e) : [];
            }
            var u = s.require("jquery.select2");
            return t.fn.select2.amd = s, u;
        }));
        const lock = document.querySelector("html");
        function myMenu() {
            const iconMenu = document.querySelector(".icon-menu");
            const menuBody = document.querySelector(".menu");
            const bg = document.querySelector(".menu__bg");
            const logo = document.querySelector(".header__logo");
            const enroll = document.querySelector(".menu__enroll");
            if (iconMenu) iconMenu.addEventListener("click", (function(e) {
                lock.classList.toggle("lock");
                iconMenu.classList.toggle("menu-open");
                menuBody.classList.toggle("menu-open");
                bg.classList.toggle("menu-open");
                logo.classList.toggle("menu-open");
                enroll.classList.toggle("menu-open");
            }));
        }
        myMenu();
        function script_location() {
            const location = document.querySelector(".header__location");
            const newLocation = document.querySelector(".menu__newLocation");
            let cloneLocation = location.cloneNode(true);
            cloneLocation.classList.add("newloc");
            newLocation.appendChild(cloneLocation);
        }
        script_location();
        function myModal() {
            let modalButtons = document.querySelectorAll(".js-open-modal");
            let overlay = document.querySelector(".js-overlay-modal");
            let closeButtons = document.querySelectorAll(".js-modal-close");
            for (let elemBtn of modalButtons) elemBtn.addEventListener("click", (function(e) {
                e.preventDefault();
                let modalId = this.getAttribute("data-modal");
                let modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
                if (!modalElem.classList.contains("active")) modalElem.classList.add("active");
                overlay.classList.add("active");
                lock.classList.add("lock");
                let parentBody = this.closest(".modal");
                if (parentBody.classList.contains("active")) parentBody.classList.remove("active");
            }));
            for (let elem of closeButtons) elem.addEventListener("click", (function() {
                var parentModal = this.closest(".modal");
                parentModal.classList.remove("active");
                overlay.classList.remove("active");
                lock.classList.remove("lock");
            }));
            document.body.addEventListener("keyup", (function(e) {
                try {
                    var key = e.keyCode;
                    if (27 == key) {
                        document.querySelector(".modal.active").classList.remove("active");
                        document.querySelector(".overlay").classList.remove("active");
                        lock.classList.remove("lock");
                    }
                } catch (err) {}
            }), false);
            overlay.addEventListener("click", (function() {
                document.querySelector(".modal.active").classList.remove("active");
                this.classList.remove("active");
                lock.classList.remove("lock");
            }));
        }
        myModal();
        function copySocial() {
            const menuSocial = document.querySelector(".menu__social");
            const thankSocial = document.querySelector(".thank__social");
            let cloneMenuSocial = menuSocial.cloneNode(true);
            thankSocial.appendChild(cloneMenuSocial);
        }
        copySocial();
        function hoverCards() {
            const servicesItem = document.querySelectorAll(".services__item");
            for (let elemServicesItem of servicesItem) {
                let replace;
                elemServicesItem.addEventListener("mouseover", (function() {
                    replace = this.querySelector(".replace");
                    replace.textContent = "Записаться";
                }));
                elemServicesItem.addEventListener("mouseout", (function() {
                    replace = this.querySelector(".replace");
                    replace.textContent = "ОТ 32 РУБЛЕЙ";
                }));
            }
        }
        hoverCards();
        function imgVideo() {
            let videos = document.querySelectorAll(".video");
            for (let elem of videos) elem.addEventListener("click", (function(e) {
                if (this.classList.contains("ready")) return;
                this.classList.add("ready");
                let src = this.dataset.src;
                elem.insertAdjacentHTML("afterbegin", '<iframe src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            }));
        }
        imgVideo();
        function mascTel() {
            window.addEventListener("DOMContentLoaded", (function() {
                [].forEach.call(document.querySelectorAll(".tel"), (function(input) {
                    var keyCode;
                    function mask(event) {
                        event.keyCode && (keyCode = event.keyCode);
                        var pos = this.selectionStart;
                        if (pos < 3) event.preventDefault();
                        var matrix = "+3 (___) ___ ____", i = 0, def = matrix.replace(/\D/g, ""), val = this.value.replace(/\D/g, ""), new_value = matrix.replace(/[_\d]/g, (function(a) {
                            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                        }));
                        i = new_value.indexOf("_");
                        if (-1 != i) {
                            i < 5 && (i = 3);
                            new_value = new_value.slice(0, i);
                        }
                        var reg = matrix.substr(0, this.value.length).replace(/_+/g, (function(a) {
                            return "\\d{1," + a.length + "}";
                        })).replace(/[+()]/g, "\\$&");
                        reg = new RegExp("^" + reg + "$");
                        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
                        if ("blur" == event.type && this.value.length < 5) this.value = "";
                    }
                    input.addEventListener("input", mask, false);
                    input.addEventListener("focus", mask, false);
                    input.addEventListener("blur", mask, false);
                    input.addEventListener("keydown", mask, false);
                }));
            }));
        }
        mascTel();
        try {
            const btnCloseHB = document.querySelectorAll(".close-header-box");
            btnCloseHB.forEach((btn => {
                btn.addEventListener("click", (e => {
                    e.target.closest(".header__box").classList.remove("active");
                }));
            }));
        } catch (err) {
            console.error("Close headerbox:\n" + err);
        }
        try {
            const closeBtns = document.querySelectorAll(".close-btn");
            closeBtns.forEach((btn => {
                btn.addEventListener("click", (e => {
                    if (e.target.closest(".close-me")) e.target.closest(".close-me").classList.remove("active");
                }));
            }));
        } catch (err) {
            console.error("Close Btn:\n" + err);
        }
        try {
            const toggleBtns = document.querySelectorAll("*[data-toggle]");
            toggleBtns.forEach((btn => {
                btn.addEventListener("click", (e => {
                    const toggleElems = document.querySelectorAll(`*[data-toggle-elem="${btn.dataset.toggle}"]`);
                    toggleElems.forEach((el => el.classList.toggle("hide")));
                }));
            }));
        } catch (error) {}
        try {
            const toggleActiveBtns = document.querySelectorAll("*[data-toggle-active]");
            toggleActiveBtns.forEach((btn => {
                btn.addEventListener("click", (e => {
                    const toggleElems = document.querySelectorAll(`*[data-toggle-active-elem="${btn.dataset.toggleActive}"]`);
                    console.log(toggleElems);
                    toggleElems.forEach((el => el.classList.toggle("active")));
                }));
            }));
        } catch (error) {
            console.error(error);
        }
        const mapBtn = document.querySelector(".select-sto__map-btn span");
        const stoAdresses = document.querySelector(".select-sto__addresses");
        try {
            mapBtn.addEventListener("click", (e => {
                mapBtn.innerHTML = stoAdresses.className.includes(" hide") ? "Скрыть карту" : "Выбрать СТО на карте";
            }));
        } catch (error) {}
        const ssList = document.querySelector(".ss__list");
        try {
            ssList.addEventListener("click", (e => {
                const ssItem = e.target.closest(".ss__item-title");
                if (ssItem) ssItem.closest(".ss__item").classList.toggle("active");
            }));
        } catch (err) {}
        document.querySelector(".ss__item");
        try {
            ssList.addEventListener("click", (e => {
                const ssItem = e.target.closest(".ss__subitem-tp");
                if (ssItem) {
                    const items = e.target.closest(".ss__item").querySelectorAll(".ss__subitem");
                    items.forEach((i => i.classList.remove("active")));
                    ssItem.closest(".ss__subitem").classList.toggle("active");
                }
            }));
        } catch (err) {}
        const phoneInputs = document.querySelectorAll(".phone-mask");
        phoneInputs.forEach((input => {
            Inputmask({
                mask: "+375-99-999-99-99",
                casing: "upper"
            }).mask(input);
        }));
        document.addEventListener("DOMContentLoaded", (() => {
            const requestSelect = document.querySelector(".request-page .select-city select");
            const selectStoAddresses = document.querySelector(".select-sto__addresses");
            const stoItems = Array.from(document.querySelectorAll(".select-sto__addresses-item"));
            let curIndex = 0;
            try {
                requestSelect.addEventListener("change", changeCurItem);
                selectStoAddresses.addEventListener("click", (e => {
                    if (e.target.closest(".select-sto__addresses-item")) changeCurItem(e);
                }));
            } catch (error) {}
            function changeCurItem(event) {
                const stoItemsInner = stoItems.map((el => el.innerHTML.trim()));
                curIndex = this === requestSelect ? stoItemsInner.indexOf(event.target.value) : stoItemsInner.indexOf(event.target.innerHTML.trim());
                requestSelect.selectedIndex = curIndex;
                stoItems.findIndex(((el, index) => {
                    el.classList.remove("active");
                    if (index === curIndex) el.classList.add("active");
                }));
            }
            const servicesDesc = document.querySelector(".select-sto__services:not(.__mob)");
            const servicesMob = document.querySelector(".select-sto__services.__mob");
            try {
                [ servicesDesc, servicesMob ].forEach((services => {
                    const allItems = Array.from(services.querySelectorAll(".select-sto__services-item"));
                    services.addEventListener("click", (e => {
                        const curItem = e.target.closest(".select-sto__services-item");
                        if (curItem) {
                            allItems.findIndex(((el, index) => el.classList.remove("active")));
                            curItem.classList.add("active");
                        }
                    }));
                }));
            } catch (error) {}
        }));
        $("document").ready((() => {
            $(".services__input").select2({
                placeholder: "Введите требуемую услугу",
                selected: false,
                templateResult: formatState
            });
            function formatState(state) {
                const curPrice = $(state.element).data("price");
                let str = "";
                str += "undefined" == curPrice ? `<div class="search-select-item"><p>${state.text}</p></div>` : `<div class="search-select-item"><p>${state.text}</p> <span>${curPrice}</span></div>`;
                const $state = $(str);
                return $state;
            }
        }));
        window["FLS"] = true;
        isWebp();
    })();
})();