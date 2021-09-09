(()=>{
    var e = {
        163: e=>{
            e.exports = function(e) {
                var t = [].forEach
                  , n = [].some
                  , o = document.body
                  , l = !0
                  , r = " ";
                function i(n, o) {
                    var l, c, a, d = o.appendChild((l = n,
                    c = document.createElement("li"),
                    a = document.createElement("a"),
                    e.listItemClass && c.setAttribute("class", e.listItemClass),
                    e.onClick && (a.onclick = e.onClick),
                    e.includeTitleTags && a.setAttribute("title", l.textContent),
                    e.includeHtml && l.childNodes.length ? t.call(l.childNodes, (function(e) {
                        a.appendChild(e.cloneNode(!0))
                    }
                    )) : a.textContent = l.textContent,
                    a.setAttribute("href", e.basePath + "#" + l.id),
                    a.setAttribute("class", e.linkClass + r + "node-name--" + l.nodeName + r + e.extraLinkClasses),
                    c.appendChild(a),
                    c));
                    if (n.children.length) {
                        var u = s(n.isCollapsed);
                        n.children.forEach((function(e) {
                            i(e, u)
                        }
                        )),
                        d.appendChild(u)
                    }
                }
                function s(t) {
                    var n = e.orderedList ? "ol" : "ul"
                      , o = document.createElement(n)
                      , l = e.listClass + r + e.extraListClasses;
                    return t && (l += r + e.collapsibleClass,
                    l += r + e.isCollapsedClass),
                    o.setAttribute("class", l),
                    o
                }
                function c(t) {
                    var n = 0;
                    return t !== document.querySelector(e.contentSelector && null != t) && (n = t.offsetTop,
                    e.hasInnerContainers && (n += c(t.offsetParent))),
                    n
                }
                function a(t) {
                    return -1 !== t.className.indexOf(e.collapsibleClass) && -1 !== t.className.indexOf(e.isCollapsedClass) ? (t.className = t.className.split(r + e.isCollapsedClass).join(""),
                    a(t.parentNode.parentNode)) : t
                }
                return {
                    enableTocAnimation: function() {
                        l = !0
                    },
                    disableTocAnimation: function(t) {
                        var n = t.target || t.srcElement;
                        "string" == typeof n.className && -1 !== n.className.indexOf(e.linkClass) && (l = !1)
                    },
                    render: function(e, t) {
                        var n = s(!1);
                        t.forEach((function(e) {
                            i(e, n)
                        }
                        ));
                        var o = document.querySelector(e);
                        if (null !== o)
                            return o.firstChild && o.removeChild(o.firstChild),
                            0 === t.length ? o : o.appendChild(n)
                    },
                    updateToc: function(i) {
                        var s;
                        s = e.scrollContainer && document.querySelector(e.scrollContainer) ? document.querySelector(e.scrollContainer).scrollTop : document.documentElement.scrollTop || o.scrollTop,
                        e.positionFixedSelector && function() {
                            var t;
                            t = e.scrollContainer && document.querySelector(e.scrollContainer) ? document.querySelector(e.scrollContainer).scrollTop : document.documentElement.scrollTop || o.scrollTop;
                            var n = document.querySelector(e.positionFixedSelector);
                            "auto" === e.fixedSidebarOffset && (e.fixedSidebarOffset = document.querySelector(e.tocSelector).offsetTop),
                            t > e.fixedSidebarOffset ? -1 === n.className.indexOf(e.positionFixedClass) && (n.className += r + e.positionFixedClass) : n.className = n.className.split(r + e.positionFixedClass).join("")
                        }();
                        var d, u = i;
                        if (l && null !== document.querySelector(e.tocSelector) && u.length > 0) {
                            n.call(u, (function(t, n) {
                                return c(t) > s + e.headingsOffset + 10 ? (d = u[0 === n ? n : n - 1],
                                !0) : n === u.length - 1 ? (d = u[u.length - 1],
                                !0) : void 0
                            }
                            ));
                            var f = document.querySelector(e.tocSelector).querySelectorAll("." + e.linkClass);
                            t.call(f, (function(t) {
                                t.className = t.className.split(r + e.activeLinkClass).join("")
                            }
                            ));
                            var m = document.querySelector(e.tocSelector).querySelectorAll("." + e.listItemClass);
                            t.call(m, (function(t) {
                                t.className = t.className.split(r + e.activeListItemClass).join("")
                            }
                            ));
                            var h = document.querySelector(e.tocSelector).querySelector("." + e.linkClass + ".node-name--" + d.nodeName + '[href="' + e.basePath + "#" + d.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g, "\\$1") + '"]');
                            h && -1 === h.className.indexOf(e.activeLinkClass) && (h.className += r + e.activeLinkClass);
                            var p = h.parentNode;
                            p && -1 === p.className.indexOf(e.activeListItemClass) && (p.className += r + e.activeListItemClass);
                            var C = document.querySelector(e.tocSelector).querySelectorAll("." + e.listClass + "." + e.collapsibleClass);
                            t.call(C, (function(t) {
                                -1 === t.className.indexOf(e.isCollapsedClass) && (t.className += r + e.isCollapsedClass)
                            }
                            )),
                            h.nextSibling && -1 !== h.nextSibling.className.indexOf(e.isCollapsedClass) && (h.nextSibling.className = h.nextSibling.className.split(r + e.isCollapsedClass).join("")),
                            a(h.parentNode.parentNode)
                        }
                    }
                }
            }
        }
        ,
        547: e=>{
            e.exports = {
                tocSelector: ".js-toc",
                contentSelector: ".js-toc-content",
                headingSelector: "h1, h2, h3",
                ignoreSelector: ".js-toc-ignore",
                hasInnerContainers: !1,
                linkClass: "toc-link",
                extraLinkClasses: "",
                activeLinkClass: "is-active-link",
                listClass: "toc-list",
                extraListClasses: "",
                isCollapsedClass: "is-collapsed",
                collapsibleClass: "is-collapsible",
                listItemClass: "toc-list-item",
                activeListItemClass: "is-active-li",
                collapseDepth: 0,
                scrollSmooth: !0,
                scrollSmoothDuration: 420,
                scrollSmoothOffset: 0,
                scrollEndCallback: function(e) {},
                headingsOffset: 1,
                throttleTimeout: 50,
                positionFixedSelector: null,
                positionFixedClass: "is-position-fixed",
                fixedSidebarOffset: "auto",
                includeHtml: !1,
                includeTitleTags: !1,
                onClick: function(e) {},
                orderedList: !0,
                scrollContainer: null,
                skipRendering: !1,
                headingLabelCallback: !1,
                ignoreHiddenElements: !1,
                headingObjectCallback: null,
                basePath: "",
                disableTocScrollSync: !1
            }
        }
        ,
        971: function(e, t, n) {
            var o, l, r;
            l = [],
            void 0 === (r = "function" == typeof (o = function(e) {
                "use strict";
                var t, o, l, r = n(547), i = {}, s = {}, c = n(163), a = n(279), d = n(938), u = !!(e && e.document && e.document.querySelector && e.addEventListener);
                if ("undefined" != typeof window || u) {
                    var f = Object.prototype.hasOwnProperty;
                    return s.destroy = function() {
                        if (!i.skipRendering)
                            try {
                                document.querySelector(i.tocSelector).innerHTML = ""
                            } catch (e) {
                                console.warn("Element not found: " + i.tocSelector)
                            }
                        i.scrollContainer && document.querySelector(i.scrollContainer) ? (document.querySelector(i.scrollContainer).removeEventListener("scroll", this._scrollListener, !1),
                        document.querySelector(i.scrollContainer).removeEventListener("resize", this._scrollListener, !1),
                        t && document.querySelector(i.scrollContainer).removeEventListener("click", this._clickListener, !1)) : (document.removeEventListener("scroll", this._scrollListener, !1),
                        document.removeEventListener("resize", this._scrollListener, !1),
                        t && document.removeEventListener("click", this._clickListener, !1))
                    }
                    ,
                    s.init = function(e) {
                        if (u && (i = function() {
                            for (var e = {}, t = 0; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var o in n)
                                    f.call(n, o) && (e[o] = n[o])
                            }
                            return e
                        }(r, e || {}),
                        this.options = i,
                        this.state = {},
                        i.scrollSmooth && (i.duration = i.scrollSmoothDuration,
                        i.offset = i.scrollSmoothOffset,
                        s.scrollSmooth = n(374).initSmoothScrolling(i)),
                        t = c(i),
                        o = a(i),
                        this._buildHtml = t,
                        this._parseContent = o,
                        s.destroy(),
                        null !== (l = o.selectHeadings(i.contentSelector, i.headingSelector)))) {
                            var h = o.nestHeadingsArray(l).nest;
                            i.skipRendering || t.render(i.tocSelector, h),
                            this._scrollListener = m((function(e) {
                                t.updateToc(l),
                                !i.disableTocScrollSync && d(i);
                                var n = e && e.target && e.target.scrollingElement && 0 === e.target.scrollingElement.scrollTop;
                                (e && (0 === e.eventPhase || null === e.currentTarget) || n) && (t.updateToc(l),
                                i.scrollEndCallback && i.scrollEndCallback(e))
                            }
                            ), i.throttleTimeout),
                            this._scrollListener(),
                            i.scrollContainer && document.querySelector(i.scrollContainer) ? (document.querySelector(i.scrollContainer).addEventListener("scroll", this._scrollListener, !1),
                            document.querySelector(i.scrollContainer).addEventListener("resize", this._scrollListener, !1)) : (document.addEventListener("scroll", this._scrollListener, !1),
                            document.addEventListener("resize", this._scrollListener, !1));
                            var p = null;
                            return this._clickListener = m((function(e) {
                                i.scrollSmooth && t.disableTocAnimation(e),
                                t.updateToc(l),
                                p && clearTimeout(p),
                                p = setTimeout((function() {
                                    t.enableTocAnimation()
                                }
                                ), i.scrollSmoothDuration)
                            }
                            ), i.throttleTimeout),
                            i.scrollContainer && document.querySelector(i.scrollContainer) ? document.querySelector(i.scrollContainer).addEventListener("click", this._clickListener, !1) : document.addEventListener("click", this._clickListener, !1),
                            this
                        }
                    }
                    ,
                    s.refresh = function(e) {
                        s.destroy(),
                        s.init(e || this.options)
                    }
                    ,
                    e.tocbot = s,
                    s
                }
                function m(e, t, n) {
                    var o, l;
                    return t || (t = 250),
                    function() {
                        var r = n || this
                          , i = +new Date
                          , s = arguments;
                        o && i < o + t ? (clearTimeout(l),
                        l = setTimeout((function() {
                            o = i,
                            e.apply(r, s)
                        }
                        ), t)) : (o = i,
                        e.apply(r, s))
                    }
                }
            }(void 0 !== n.g ? n.g : this.window || this.global)) ? o.apply(t, l) : o) || (e.exports = r)
        },
        279: e=>{
            e.exports = function(e) {
                var t = [].reduce;
                function n(e) {
                    return e[e.length - 1]
                }
                function o(e) {
                    return +e.nodeName.toUpperCase().replace("H", "")
                }
                function l(t) {
                    if (!(t instanceof window.HTMLElement))
                        return t;
                    if (e.ignoreHiddenElements && (!t.offsetHeight || !t.offsetParent))
                        return null;
                    var n = {
                        id: t.id,
                        children: [],
                        nodeName: t.nodeName,
                        headingLevel: o(t),
                        textContent: e.headingLabelCallback ? String(e.headingLabelCallback(t.textContent)) : t.textContent.trim()
                    };
                    return e.includeHtml && (n.childNodes = t.childNodes),
                    e.headingObjectCallback ? e.headingObjectCallback(n, t) : n
                }
                return {
                    nestHeadingsArray: function(o) {
                        return t.call(o, (function(t, o) {
                            var r = l(o);
                            return r && function(t, o) {
                                for (var r = l(t), i = r.headingLevel, s = o, c = n(s), a = i - (c ? c.headingLevel : 0); a > 0; )
                                    (c = n(s)) && void 0 !== c.children && (s = c.children),
                                    a--;
                                i >= e.collapseDepth && (r.isCollapsed = !0),
                                s.push(r)
                            }(r, t.nest),
                            t
                        }
                        ), {
                            nest: []
                        })
                    },
                    selectHeadings: function(t, n) {
                        var o = n;
                        e.ignoreSelector && (o = n.split(",").map((function(t) {
                            return t.trim() + ":not(" + e.ignoreSelector + ")"
                        }
                        )));
                        try {
                            return document.querySelector(t).querySelectorAll(o)
                        } catch (e) {
                            return console.warn("Element not found: " + t),
                            null
                        }
                    }
                }
            }
        }
        ,
        374: (e,t)=>{
            t.initSmoothScrolling = function(e) {
                document.documentElement.style;
                var t = e.duration
                  , n = e.offset
                  , o = location.hash ? l(location.href) : location.href;
                function l(e) {
                    return e.slice(0, e.lastIndexOf("#"))
                }
                document.body.addEventListener("click", (function(r) {
                    var i;
                    "a" !== (i = r.target).tagName.toLowerCase() || !(i.hash.length > 0 || "#" === i.href.charAt(i.href.length - 1)) || l(i.href) !== o && l(i.href) + "#" !== o || r.target.className.indexOf("no-smooth-scroll") > -1 || "#" === r.target.href.charAt(r.target.href.length - 2) && "!" === r.target.href.charAt(r.target.href.length - 1) || -1 === r.target.className.indexOf(e.linkClass) || function(e, t) {
                        var n, o, l = window.pageYOffset, r = {
                            duration: t.duration,
                            offset: t.offset || 0,
                            callback: t.callback,
                            easing: t.easing || function(e, t, n, o) {
                                return (e /= o / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                            }
                        }, i = document.querySelector('[id="' + decodeURI(e).split("#").join("") + '"]') || document.querySelector('[id="' + e.split("#").join("") + '"]'), s = "string" == typeof e ? r.offset + (e ? i && i.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : e, c = "function" == typeof r.duration ? r.duration(s) : r.duration;
                        function a(e) {
                            o = e - n,
                            window.scrollTo(0, r.easing(o, l, s, c)),
                            o < c ? requestAnimationFrame(a) : (window.scrollTo(0, l + s),
                            "function" == typeof r.callback && r.callback())
                        }
                        requestAnimationFrame((function(e) {
                            n = e,
                            a(e)
                        }
                        ))
                    }(r.target.hash, {
                        duration: t,
                        offset: n,
                        callback: function() {
                            var e, t;
                            e = r.target.hash,
                            (t = document.getElementById(e.substring(1))) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1),
                            t.focus())
                        }
                    })
                }
                ), !1)
            }
        }
        ,
        938: e=>{
            e.exports = function(e) {
                var t = document.querySelector(e.tocSelector);
                if (t && t.scrollHeight > t.clientHeight) {
                    var n = t.querySelector("." + e.activeListItemClass);
                    n && (t.scrollTop = n.offsetTop)
                }
            }
        }
    }
      , t = {};
    function n(o) {
        var l = t[o];
        if (void 0 !== l)
            return l.exports;
        var r = t[o] = {
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n),
        r.exports
    }
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n(971)
}
)();
