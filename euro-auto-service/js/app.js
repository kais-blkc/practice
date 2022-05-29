(() => {
    "use strict";
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
        try {} catch (error) {}
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
                e.target.closest(".close-me").classList.remove("active");
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
    const mapBtn = document.querySelector(".select-sto__map-btn span");
    const stoAdresses = document.querySelector(".select-sto__addresses");
    mapBtn.addEventListener("click", (e => {
        mapBtn.innerHTML = stoAdresses.className.includes(" hide") ? "Скрыть карту" : "Выбрать СТО на карте";
    }));
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
    window["FLS"] = true;
    isWebp();
})();