!function() {
    "local.dearxuan.com" !== window.location.host && ((e = document.createElement("script")).src = "https://hm.baidu.com/hm.js?d6729c46eeaaadb5e1547cb7d64a3da5",
    (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(e, t));
    var e, t, n, i, a, o, l = document.title;
    document.addEventListener("visibilitychange", function() {
        document.hidden ? document.title = "╭(°A°`)╮ 你去哪了? 快回来!!!" : (document.title = "(ฅ>ω<*ฅ) 你终于回来了 ~",
        setTimeout(function() {
            document.hidden || (document.title = l)
        }, 2e3))
    });
    function r(e) {
        for (var t = document.createDocumentFragment(), n = 0; n < e; n++) {
            var a = document.createElement("span");
            a.textContent = "_",
            a.style.color = i ? (i = !1,
            "rgba(255,255,255,0)") : (i = !0,
            "rgba(255,255,255,1)"),
            t.appendChild(a)
        }
        return t
    }
    n = document.getElementById("binft"),
    i = !0,
    a = ["有花堪折直需折,莫待无花空折枝.", "闲居少邻并,草径入荒园.鸟宿池边树,僧敲月下门.", "侯门一入深如海,从此萧郎是路人.", "才见岭头云似盖,已惊岩下雪如尘.", "人间万事消磨尽,只有清香似旧时.", "日暮酒醒人已远,满天风雨下西楼.", "落灯花,棋未收,叹新丰逆旅淹留.", "软风吹过窗纱,心期便隔天涯.", "迷惑失故路,薄暮无宿栖.", "不见白头相携老,只许与君共天明.", "晓迎秋露一枝新,不占园中最上春.", "荷尽已无擎雨盖,菊残犹有傲霜枝.", "春未绿,鬓先丝.人间别久不成悲.", "江东子弟多才俊,卷土重来未可知.", "莫听穿林打叶声,何妨吟啸且徐行.", "在天愿作比翼鸟,在地愿为连理枝."].map(function(e) {
        return e + ""
    }),
    o = {
        text: "",
        prefixP: -1,
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: 2,
        step: 1
    },
    function e() {
        var t = a[o.skillI];
        o.step ? o.step-- : (o.step = 1,
        o.prefixP < "".length ? (0 <= o.prefixP && (o.text += ""[o.prefixP]),
        o.prefixP++) : "forward" === o.direction ? o.skillP < t.length ? (o.text += t[o.skillP],
        o.skillP++) : o.delay ? o.delay-- : (o.direction = "backward",
        o.delay = 2) : 0 < o.skillP ? (o.text = o.text.slice(0, -1),
        o.skillP--) : (o.skillI = (o.skillI + 1) % a.length,
        o.direction = "forward")),
        n.textContent = o.text,
        n.appendChild(r(o.prefixP < "".length ? Math.min(1, 1 + o.prefixP) : Math.min(1, t.length - o.skillP))),
        setTimeout(e, 75)
    }();
    let d, s, c;
    const m = ["开始播放{name}啦~", "{name}好好听!!!", "我最喜欢听{name}啦~", "要开始听{name}了哦~", "你喜欢听{name}吗?"]
      , u = ["人家还想接着听呢~", "是{name}不好听吗?", "要不换一首歌吧~", "你怎么暂停了呀!!!", "人家还想听呢~"]
      , f = ["你好像有点迫不及待了呢……", "你怎么快进了呀?", "不如认真听完吧~", "为什么不让我听完{name}?"];
    let p = setInterval(()=>{
        let e = document.querySelectorAll("meting-js")[0].aplayer;
        function t(e) {
            return e[Math.floor(Math.random() * e.length)].replaceAll("{name}", `<span>${s || "未知歌曲"}</span>`).replaceAll("{artist}", `<span>${c || "未知作者"}</span>`)
        }
        e && (e.on("play", ()=>{
            d = e.list.index,
            s = e.list.audios[d].name,
            c = e.list.audios[d].artist,
            say && say(t(m))
        }
        ),
        e.on("pause", ()=>{
            say && say(t(u))
        }
        ),
        e.on("seeked", ()=>{
            say && say(t(f))
        }
        ),
        clearInterval(p))
    }
    , 300);
    $("#readmode").click(function() {
        $("body").toggleClass("read-mode")
    }),
    $("#btn").hide(),
    $(function() {
        $(window).scroll(function() {
            50 < $(window).scrollTop() ? $("#btn").fadeIn(200) : $("#btn").fadeOut(200)
        }),
        $("#btn").click(function() {
            return $("body,html").animate({
                scrollTop: 0
            }, 500),
            !1
        })
    }),
    $(function() {
        $("#say").click(function() {
            return $("body,html").animate({
                scrollTop: $("html, body").get(0).scrollHeight
            }, 500),
            !1
        })
    }),
    volantis.dark.push(function() {
        $('<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>').appendTo($("body")),
        setTimeout(function() {
            "dark" == volantis.dark.mode ? ($("html").addClass("DarkMode"),
            $("#modeicon").attr("xlink:href", "#icon-sun")) : ($("html").removeClass("DarkMode"),
            $("#modeicon").attr("xlink:href", "#icon-_moon")),
            setTimeout(function() {
                $(".Cuteen_DarkSky").fadeOut(1e3, function() {
                    $(this).remove()
                })
            }, 2e3)
        })
    })
}();

