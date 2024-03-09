
/*!
 * Webflow: интерфейсная библиотека сайта.
 * @license MIT
 * Встроенные скрипты могут обращаться к API с помощью асинхронного обработчика:
 * var Webflow = Веб-поток || [];
 * Webflow.push(readyFunction);
 */

(() => {
    вар __create = Object.create;
    вар __defProp = Object.defineProperty;
    вар __getOwnPropDesc ​​= Object.getOwnPropertyDescriptor;
    вар __getOwnPropNames = Object.getOwnPropertyNames;
    вар __getProtoOf = Object.getPrototypeOf;
    вар __hasOwnProp = Object.prototype.hasOwnProperty;
    var __esm = (fn, res) => function __init() {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    };
    var __commonJS = (cb, mod) => function __require() {
      вернуть мод || (0, cb[__getOwnPropNames(cb)[0]])((mod = {exports: {} }).exports, mod), mod.exports;
    };
    var __export = (цель, все) => {
      for (имя переменной целиком)
        __defProp(target, name, {get: all[name], enumerable: true });
    };
    var __copyProps = (до, из, кроме, по убыванию) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (пусть ключ __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== кроме)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      Вернуться к;
    };
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // Если импортер находится в режиме совместимости узлов или это не ESM
      // файл, который был преобразован в файл CommonJS с помощью Babel-
      // совместимое преобразование (т.е. «__esModule» не установлено), затем устанавливаем
      // «по умолчанию» — CommonJS «module.exports» для совместимости узлов.
      isNodeMode || !мод || !mod.__esModule ? __defProp(target, "default", {value: mod, enumerable: true }) : цель,
      мод
    ));
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true }), mod);
  
    // пакеты/shared/render/plugins/BaseSiteModules/tram-min.js
    вар require_tram_min = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/tram-min.js"() {
        «используйте строгий»;
        window.tram = функция(а) {
          функция b(a2, b2) {
            вар c2 = новый M.Bare();
            вернуть c2.init(a2, b2);
          }
          функция с(а2) {
            return a2.replace(/[AZ]/g, function(a3) {
              вернуть "-" + a3.toLowerCase();
            });
          }
          функция d(a2) {
            var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 и 255, d2 = b2 >> 8 и 255, e2 = 255 и b2;
            вернуть [c2, d2, e2];
          }
          функция е(а2, Ь2, с2) {
            return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
          }
          функция е() {
          }
          функция g(a2, b2) {
            j("Предупреждение типа: Ожидается: [" + a2 + "] Получено: [" + typeof b2 + "] " + b2);
          }
          функция h(a2, b2, c2) {
            j("Единицы измерения не совпадают [" + a2 + "]: " + b2 + ", " + c2);
          }
          функция i(a2, b2, c2) {
            if (void 0 !== b2 && (c2 = b2), void 0 === a2)
              вернуть с2;
            вар d2 = c2;
            вернуть $.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10): _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? д2: с2;
          }
          функция j(a2) {
            U.debug && window && window.console.warn(a2);
          }
          функция k(a2) {
            for (var b2 = -1, c2 = a2 ? a2.length: 0, d2 = []; ++b2 < c2; ) {
              вар е2 = а2[b2];
              е2 && d2.push(e2);
            }
            вернуть d2;
          }
          вар l = функция(a2, b2, c2) {
            функция d2(a3) {
              вернуть «объект» == typeof a3;
            }
            функция e2(a3) {
              return "функция" == typeof a3;
            }
            функция f2() {
            }
            функция g2(h2, i2) {
              функция j2() {
                вар a3 = новый k2 ();
                return e2(a3.init) && a3.init.apply(a3, аргументы), a3;
              }
              функция k2() {
              }
              i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
              вар l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
              return n2.constructor = j2, j2.mixin = function(b3) {
                вернуть k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
              }, j2.open = функция(a3) {
                если (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                  для (var c3 в l2)
                    b2.call(l2, c3) && (n2[c3] = l2[c3]);
                вернуть e2(n2.init) || (n2.init = h2), j2;
              }, j2.open(i2);
            }
            вернуть g2;
          }("прототип", {}.hasOwnProperty), m = {
            легкость: ["легкость", function(a2, b2, c2, d2) {
              вар e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              вернуть b2+c2*(-2,75*f2*e2+11*e2*e2+-15,5*f2+8*e2+0,25*a2);
            }],
            "легкость": ["легкость", function(a2, b2, c2, d2) {
              вар e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              вернуть b2+c2*(-1*f2*e2+3*e2*e2+-3*f2+2*e2);
            }],
            "ease-out": ["ease-out", function(a2, b2, c2, d2) {
              вар e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              вернуть b2 + c2 * (0,3 * f2 * e2 + -1,6 * e2 * e2 + 2,2 * f2 + -1,8 * e2 + 1,9 * a2);
            }],
            "легкость выхода": ["легкость выхода", function(a2, b2, c2, d2) {
              вар e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              вернуть b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
            }],
            линейный: ["линейный", function(a2, b2, c2, d2) {
              вернуть c2*a2/d2+b2;
            }],
            "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(a2, b2, c2, d2) {
              вернуть c2 * (a2 /= d2) * a2 + b2;
            }],
            "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(a2, b2, c2, d2) {
              вернуть -c2 * (a2 /= d2) * (a2 - 2) + b2;
            }],
            "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(a2, b2, c2, d2) {
              возврат (a2/= d2/2) <1? с2/2*а2*а2+b2:-c2/2*(--a2*(a2-2)-1)+b2;
            }],
            "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(a2, b2, c2, d2) {
              вернуть c2 * (a2 /= d2) * a2 * a2 + b2;
            }],
            "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(a2, b2, c2, d2) {
              вернуть c2 * ((a2 = a2/d2 - 1) * a2 * a2 + 1) + b2;
            }],
            "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(a2, b2, c2, d2) {
              возврат (a2/= d2/2) <1? c2/2 * a2 * a2 * a2 + b2 : c2/2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
            }],
            "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(a2, b2, c2, d2) {
              вернуть c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
            }],
            "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(a2, b2, c2, d2) {
              return -c2 * ((a2 = a2/d2 - 1) * a2 * a2 * a2 - 1) + b2;
            }],
            "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(a2, b2, c2, d2) {
              возврат (a2/= d2/2) <1? c2/2 * a2 * a2 * a2 * a2 + b2 : -c2/2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
            }],
            "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(a2, b2, c2, d2) {
              вернуть c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
            }],
            "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(a2, b2, c2, d2) {
              вернуть c2 * ((a2 = a2/d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
            }],
            "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(a2, b2, c2, d2) {
              возврат (a2/= d2/2) <1? c2/2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
            }],
            "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(a2, b2, c2, d2) {
              return -c2 * Math.cos(a2/d2 * (Math.PI/2)) + c2 + b2;
            }],
            "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(a2, b2, c2, d2) {
              вернуть c2 * Math.sin(a2/d2 * (Math.PI/2)) + b2;
            }],
            "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(a2, b2, c2, d2) {
              return -c2/2 * (Math.cos(Math.PI * a2/d2) - 1) + b2;
            }],
            "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(a2, b2, c2, d2) {
              вернуть 0 === а2? b2 : c2 * Math.pow(2, 10 * (a2/d2 - 1)) + b2;
            }],
            "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(a2, b2, c2, d2) {
              вернуть a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
            }],
            "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(a2, b2, c2, d2) {
              вернуть 0 === а2? b2 : a2 === d2 ? b2 + c2: (a2/= d2/2) <1? c2/2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2/2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
            }],
            "легкость в обращении": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(a2, b2, c2, d2) {
              return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
            }],
            "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(a2, b2, c2, d2) {
              return c2 * Math.sqrt(1 - (a2 = a2/d2 - 1) * a2) + b2;
            }],
            "легкость выхода из круга": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(a2, b2, c2, d2) {
              возврат (a2/= d2/2) <1? -c2/2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
            }],
            "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1,70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
            }],
            "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1,70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
            }],
            "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1,70158), (a2 /= d2/2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1,525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1,525) + 1) *а2+е2)+2)+б2;
            }]
          }, п = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
          }, o = документ, p = окно, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[AZ]/, t = "номер", u = / ^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$ /, x = /(град|рад|поворот)$/, y = "безразмерный", z = /(все|нет) 0s легкость 0s/, A = /^(ширина|высота)$/, B = " " , C = o.createElement("a"), D = ["Webkit", "Moz", "O", "ms"], E = ["-webkit-", "-moz-", "-o -", "-ms-"], F = function(a2) {
            если (a2 в C.style)
              возвращаться {
                дом: а2,
                CSS: а2
              };
            var b2, c2, d2 = "", e2 = a2.split("-");
            для (b2 = 0; b2 < e2.length; b2++)
              d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
            для (b2 = 0; b2 <D.длина; b2++)
              if (c2 = D[b2] + d2, c2 в C.style)
                возвращаться {
                  дом: с2,
                  CSS: E[b2] + a2
                };
          }, G = b.support = {
            привязка: Function.prototype.bind,
            трансформировать: F («трансформировать»),
            переход: F("переход"),
            обратная сторона: F("обратная видимость"),
            время: F("функция-времени-перехода")
          };
          если (G.переход) {
            вар H = G.timing.dom;
            if (C.style[H] = m["ease-in-back"][0], !C.style[H])
              for (var I в n)
                м[I][0] = n[I];
          }
          вар J = b.frame = function() {
            var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
            вернуть a2 && G.bind ? a2.bind(p): функция(a3) {
              p.setTimeout(a3, 16);
            };
          }(), K = b.now = function() {
            var a2 = p. Performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
            вернуть b2 && G.bind ? b2.bind(a2) : Date.now || функция() {
              return +/* @__PURE__ */ new Date();
            };
          }(), L = l(function(b2) {
            функция d2(a2, b3) {
              var c2 = k(("" + a2).split(B)), d3 = c2[0];
              b3 = b3 || {};
              вар e3 = Y[d3];
              если (!e3)
                return j("Неподдерживаемое свойство: " + d3);
              if (!b3.weak || !this.props[d3]) {
                var f3 = e3[0], g3 = this.props[d3];
                вернуть g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
              }
            }
            функция e2(a2, b3, c2) {
              если (а2) {
                вар e3 = тип a2;
                if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                  верните this.timer = новый S({
                    продолжительность: а2,
                    контекст: это,
                    завершено: h2
                  }), void (this.active = true);
                if ("строка" == e3 && b3) {
                  переключатель (а2) {
                    случай «скрыть»:
                      o2.call(это);
                      перерыв;
                    случай «стоп»:
                      l2.call(это);
                      перерыв;
                    случай «перерисовать»:
                      p2.call(это);
                      перерыв;
                    по умолчанию:
                      d2.call(this, a2, c2 && c2[1]);
                  }
                  вернуть h2.call(это);
                }
                если («функция» == e3)
                  вернуть void a2.call(это, это);
                если ("объект" == e3) {
                  вар f3 = 0;
                  u2.call(this, a2, function(a3, b4) {
                    a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                  }, функция(a3) {
                    "подождать" в a3 && (f3 = i(a3.wait, 0));
                  }), t2.call(this), f3 > 0 && (this.timer = new S({
                    продолжительность: f3,
                    контекст: это
                  }), this.active = true, b3 && (this.timer.complete = h2));
                  вар g3 = это, j2 = ложь, k2 = {};
                  J(функция() {
                    u2.call(g3, a2, function(a3) {
                      a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                    }), j2 && g3.$el.css(k2);
                  });
                }
              }
            }
            функция f2(a2) {
              a2 = i(a2, 0), this.active ? this.queue.push({
                варианты: а2
              }) : (this.timer = new S({
                продолжительность: а2,
                контекст: это,
                завершено: h2
              }), this.active = true);
            }
            функция g2(a2) {
              вернуть this.active? (this.queue.push({
                варианты: а2,
                аргументы: аргументы
              }), void (this.timer.complete = h2)) : j("Нет активного таймера перехода. Используйте start() или wait() перед then().");
            }
            функция h2() {
              if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
                вар a2 = this.queue.shift();
                e2.call(this, a2.options, true, a2.args);
              }
            }
            функция l2(a2) {
              this.timer && this.timer.destroy(), this.queue = [], this.active = false;
              вар b3;
              "строка" == тип a2 ? (b3 = {}, b3[a2] = 1) : b3 = "объект" == typeof a2 && null != a2 ? a2 : this.props, u2.call(это, b3, v2), t2.call(это);
            }
            функция m2(a2) {
              l2.call(это, a2), u2.call(это, a2, w2, x2);
            }
            функция n2(a2) {
              "строка" != typeof a2 && (a2 = "блок"), this.el.style.display = a2;
            }
            функция о2() {
              l2.call(this), this.el.style.display = "none";
            }
            функция р2() {
              this.el.offsetHeight;
            }
            функция г2() {
              l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
            }
            функция t2() {
              вар a2, b3, c2 = [];
              this.upstream && c2.push(this.upstream);
              для (a2 в this.props)
                b3 = this.props[a2], b3.active && c2.push(b3.string);
              c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
            }
            функция u2(a2, b3, e3) {
              var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
              для (f3 в a2)
                h3 = a2[f3], f3 в Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 в Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
              для (f3 в k2) {
                if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                  если (!j2)
                    продолжать;
                  g3 = d2.call(это, f3);
                }
                b3.call(это, g3, h3);
              }
              e3 && i2 && e3.call(this, i2);
            }
            функция v2(a2) {
              а2.стоп();
            }
            функция w2(a2, b3) {
              а2.set(b3);
            }
            функция x2(a2) {
              this.$el.css(a2);
            }
            функция y2(a2, c2) {
              b2[a2] = функция() {
                вернуть это.дети? A2.call(this, c2, аргументы): (this.el && c2.apply(this, аргументы), this);
              };
            }
            функция A2(a2, b3) {
              var c2, d3 = this.children.length;
              для (c2 = 0; d3 > c2; c2++)
                a2.apply(this.children[c2], b3);
              верните это;
            }
            b2.init = функция (b3) {
              if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false , U.keepInherited && !U.fallback) {
                var c2 = W(this.el, "переход");
                c2 && !z.test(c2) && (this.upstream = c2);
              }
              G.backface && U.hideBackface && V(this.el, G.backface.css, "скрытый");
            }, y2("добавить", d2), y2("начать", e2), y2("подождать", f2), y2("то", g2), y2("следующий", h2), y2(" стоп", l2), y2("установить", m2), y2("показать", n2), y2("скрыть", o2), y2("перерисовать", p2), y2("уничтожить", r2) ;
          }), M = l(L, function(b2) {
            функция c2(b3, c3) {
              var d2 = a.data(b3, q) || a.data(b3, q, новый L.Bare());
              вернуть d2.el || d2.init(b3), c3 ? d2.start(c3): d2;
            }
            b2.init = функция (b3, d2) {
              вар е2 = а(b3);
              если (!e2.длина)
                верните это;
              если (1 === e2.length)
                вернуть c2(e2[0], d2);
              вар f2 = [];
              return e2.each(function(a2, b4) {
                f2.push(c2(b4, d2));
              }), this.children = f2, this;
            };
          }), N = l(function(a2) {
            функция b2() {
              вар a3 = this.get();
              this.update("авто");
              вар b3 = this.get();
              вернуть this.update(a3), b3;
            }
            функция c2(a3, b3, c3) {
              return void 0 !== b3 && (c3 = b3), a3 in m ? а3: с3;
            }
            функция d2(a3) {
              var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
              return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2 $3$3");
            }
            вар f2 = {
              продолжительность: 500,
              легкость: «легкость»,
              задержка: 0
            };
            a2.init = функция(a3, b3, d3, e2) {
              this.$el = a3, this.el = a3[0];
              вар g2 = b3[0];
              d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3 [1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2. задержка), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || этот.юнит || U.defaultUnit, this.angle = e2.angle || этот.угол || U.defaultAngle, U.fallback || e2.резервный вариант ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this .ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
            }, a2.set = функция(a3) {
              a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
            }, a2.transition = function(a3) {
              this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()) ), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
            }, a2.fallback = function(a3) {
              var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
              a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
                из: с3,
                до: а3,
                продолжительность: this.duration,
                задержка: this.delay,
                легкость: это.легкость,
                обновление: это.обновление,
                контекст: это
              });
            }, a2.get = функция() {
              вернуть W(this.el, this.name);
            }, a2.update = функция(a3) {
              V(это.el, это.имя, a3);
            }, a2.stop = функция() {
              (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
              вар a3 = this.tween;
              a3 && a3.context && a3.destroy();
            }, a2.convert = function(a3, b3) {
              if ("auto" == a3 && this.auto)
                вернуть а3;
              var c3, e2 = «число» == тип a3, f3 = «строка» == тип a3;
              переключатель (b3) {
                случай т:
                  если (е2)
                    вернуть а3;
                  if (f3 && "" === a3.replace(r, ""))
                    вернуть +а3;
                  c3 = "число (безразмерное)";
                  перерыв;
                случай ты:
                  если (f3) {
                    if ("" === a3 && this.original)
                      вернуть этот.оригинал;
                    если (b3.test(a3))
                      return "#" == a3.charAt(0) && 7 == a3.length ? а3: d2(а3);
                  }
                  c3 = "шестнадцатеричная строка или строка RGB";
                  перерыв;
                случай v:
                  если (е2)
                    вернуть a3 + this.unit;
                  если (f3 && b3.test(a3))
                    вернуть а3;
                  c3 = «число (пикселей) или строка (единица измерения)»;
                  перерыв;
                случай ш:
                  если (е2)
                    вернуть a3 + this.unit;
                  если (f3 && b3.test(a3))
                    вернуть а3;
                  c3 = «число (пикселей) или строка (единица измерения или %)»;
                  перерыв;
                случай х:
                  если (е2)
                    вернуть a3 + this.angle;
                  если (f3 && b3.test(a3))
                    вернуть а3;
                  c3 = «число (градусы) или строка (угол)»;
                  перерыв;
                случай у:
                  если (е2)
                    вернуть а3;
                  если (f3 && w.test(a3))
                    вернуть а3;
                  c3 = «число (без единиц измерения) или строка (единица измерения или %)»;
              }
              вернуть g(c3, a3), a3;
            }, a2.redraw = функция() {
              this.el.offsetHeight;
            };
          }), O = l(N, function(a2, b2) {
            a2.init = функция() {
              b2.init.apply(this, аргументы), this.original || (this.original = this.convert(this.get(), u));
            };
          }), P = l(N, function(a2, b2) {
            a2.init = функция() {
              b2.init.apply(this, аргументы), this.animate = this.fallback;
            }, a2.get = функция() {
              вернуть this.$el[this.name]();
            }, a2.update = функция(a3) {
              this.$el[this.name](a3);
            };
          }), Q = l(N, function(a2, b2) {
            функция c2(a3, b3) {
              вар c3, d2, e2, f2, g2;
              для (c3 в a3)
                f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
            }
            a2.init = функция() {
              b2.init.apply(this, аргументы), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw ()));
            }, a2.set = функция(a3) {
              c2.call(this, a3, function(a4, b3) {
                this.current[a4] = b3;
              }), V(this.el, this.name, this.style(this.current)), this.redraw();
            }, a2.transition = function(a3) {
              вар b3 = this.values(a3);
              this.tween = новый T({
                текущий: this.current,
                значения: b3,
                продолжительность: this.duration,
                задержка: this.delay,
                легкость: this.ease
              });
              вар c3, d2 = {};
              для (c3 в this.current)
                d2[c3] = c3 в b3 ? b3[c3] : this.current[c3];
              this.active = true, this.nextStyle = this.style(d2);
            }, a2.fallback = function(a3) {
              вар b3 = this.values(a3);
              this.tween = новый T({
                текущий: this.current,
                значения: b3,
                продолжительность: this.duration,
                задержка: this.delay,
                легкость: это.легкость,
                обновление: это.обновление,
                контекст: это
              });
            }, a2.update = функция() {
              V(this.el, this.name, this.style(this.current));
            }, a2.style = function(a3) {
              вар b3, c3 = "";
              для (b3 в a3)
                c3 += b3 + "(" + a3[b3] + ") ";
              вернуть с3;
            }, a2.values ​​= function(a3) {
              вар b3, d2 = {};
              return c2.call(this, a3, function(a4, c3, e2) {
                d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("масштаб") && (b3 = 1), this.current[a4] = this.convert (b3, e2));
              }), d2;
            };
          }), R = l(function(b2) {
            функция с2(а2) {
              1 === n2.push(a2) && J(g2);
            }
            функция g2() {
              var a2, b3, c3, d2 = n2.length;
              если (d2)
                для (J(g2), b3 = K(), a2 = d2; a2--; )
                  c3 = n2[a2], c3 && c3.render(b3);
            }
            функция i2(b3) {
              вар c3, d2 = a.inArray(b3, n2);
              d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
            }
            функция j2(a2) {
              return Math.round(a2 * o2)/o2;
            }
            функция k2(a2, b3, c3) {
              return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3 [2] - а2[2]));
            }
            вар l2 = {
              легкость: m.ease[1],
              с: 0,
              кому: 1
            };
            b2.init = функция (a2) {
              this.duration = a2.duration || 0, this.delay = a2.delay || 0;
              вар b3 = a2.ease || l2.легкость;
              m[b3] && (b3 = m[b3][1]), «функция» != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || е, this.complete = a2.complete || е, this.context = a2.context || это, это.имя = a2.имя;
              вар c3 = a2.from, d2 = a2.to;
              void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay != = ложь && this.play();
            }, b2.play = функция() {
              это.активный || (this.start || (this.start = K()), this.active = true, c2(this));
            }, b2.stop = функция() {
              this.active && (this.active = false, i2(this));
            }, b2.render = функция(a2) {
              вар b3, c3 = a2 - this.start;
              если (this.delay) {
                если (c3 <= this.delay)
                  возвращаться;
                c3 -= this.delay;
              }
              если (c3 < this.duration) {
                var d2 = this.ease(c3, 0, 1, this.duration);
                вернуть b3 = this.startRGB? k2(this.startRGB, this.endRGB, d2): j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value );
              }
              b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
            }, b2.format = функция(a2, b3) {
              if (b3 += "", a2 += "", "#" == a2.charAt(0))
                верните this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
              если (!this.unit) {
                var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
                c3 !== e2 && h("tween", b3, a2), this.unit = c3;
              }
              b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
            }, b2.destroy = функция() {
              this.stop(), this.context = null, this.ease = this.update = this.complete = f;
            };
            вар n2 = [], o2 = 1e3;
          }), S = l(R, function(a2) {
            a2.init = функция (a3) ​​{
              this.duration = a3.duration || 0, this.complete = a3.complete || е, this.context = a3.context, this.play();
            }, a2.render = функция(a3) {
              вар b2 = a3 - this.start;
              b2 < this.duration || (this.complete.call(this.context), this.destroy());
            };
          }), T = l(R, function(a2, b2) {
            a2.init = функция (a3) ​​{
              this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
              вар b3, c2;
              для (b3 в a3.values)
                c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                  имя: б3,
                  из: this.current[b3],
                  до: с2,
                  продолжительность: a3.duration,
                  задержка: a3.delay,
                  легкость: a3.ease,
                  автозапуск: ложь
                }));
              это.играть();
            }, a2.render = функция(a3) {
              var b3, c2, d2 = this.tweens.length, e2 = false;
              для (b3 = d2; b3--; )
                c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
              вернуть e2? void (this.update && this.update.call(this.context)) : this.destroy();
            }, a2.destroy = функция() {
              если (b2.destroy.call(this), this.tweens) {
                var a3, c2 = this.tweens.length;
                для (a3 = c2; a3--; )
                  this.tweens[a3].destroy();
                this.tweens = null, this.current = null;
              }
            };
          }), U = b.config = {
            отладка: ложь,
            Единица по умолчанию: "px",
            defaultAngle: "град",
            KeepInherited: ложь,
            скрытьБэкфейс: ложь,
            перспектива: "",
            запасной вариант: !G.transition,
            агентТесты: []
          };
          b.fallback = функция (a2) {
            если (!G.переход)
              вернуть U.fallback = true;
            U.agentTests.push("(" + a2 + ")");
            var b2 = новый RegExp(U.agentTests.join("|"), "i");
            U.fallback = b2.test(navigator.userAgent);
          }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
            вернуть новый R(a2);
          }, b.delay = function(a2, b2, c2) {
            вернуть новый S({
              завершено: b2,
              продолжительность: а2,
              контекст: c2
            });
          }, a.fn.tram = function(a2) {
            return b.call(null, this, a2);
          };
          var V = a.style, W = a.css, X = {
            преобразование: G.transform && G.transform.css
          }, Y = {
            цвет: [О, ты],
            фон: [О, ты, «цвет фона»],
            «цвет контура»: [O, u],
            «цвет границы»: [O, u],
            "border-top-color": [O, u],
            "border-right-color": [O, u],
            "border-bottom-color": [O, u],
            "border-left-color": [O, u],
            "ширина границы": [N, v],
            "ширина верхней границы": [N, v],
            "ширина правой границы": [N, v],
            "ширина нижней границы": [N, v],
            "ширина левой границы": [N, v],
            «расстояние между границами»: [N, v],
            «межбуквенный интервал»: [N, v],
            поле: [N, v],
            "маржа-верх": [N, v],
            "поля-право": [N, v],
            "поле-дно": [N, v],
            "маржа слева": [N, v],
            отступ: [N, v],
            "padding-top": [N, v],
            "padding-right": [N, v],
            "padding-bottom": [N, v],
            "padding-left": [N, v],
            "ширина контура": [N, v],
            непрозрачность: [N, t],
            вверху: [N, w],
            справа: [Н, ш],
            внизу: [N, w],
            слева: [Н, ш],
            "размер шрифта": [N, w],
            "текстовый отступ": [N, w],
            «межсловный интервал»: [N, w],
            ширина: [Н, ш],
            "минимальная ширина": [N, w],
            "максимальная ширина": [N, w],
            высота: [Н, ш],
            "минимальная высота": [N, w],
            "макс-высота": [N, w],
            "высота строки": [N, y],
            "scroll-top": [P, t, "scrollTop"],
            "прокрутка влево": [P, t, "scrollLeft"]
          }, Z = {};
          G.transform && (Y.transform = [Q], Z = {
            х: [ш, «translateX»],
            y: [w, «перевестиY»],
            повернуть: [x],
            вращатьX: [х],
            вращатьY: [х],
            масштаб: [т],
            масштабX: [т],
            масштабY: [т],
            перекос: [x],
            перекосX: [x],
            перекосY: [x]
          }), G.transform && G.backface && (Zz = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
          var $ = /ms/, _ = /s|\./;
          вернуть a.tram = b;
        }(окно.jQuery);
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/underscore-custom.js
    вар require_underscore_custom = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/underscore-custom.js"(экспорт, модуль) {
        «используйте строгий»;
        вар $ = окно.$;
        вар трамвай = require_tram_min() && $.tram;
        модуль.экспорт = функция() {
          вар _ = {};
          _.VERSION = "1.6.0-Webflow";
          вар выключатель = {};
          вар ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
          вар push = ArrayProto.push, срез = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty2 = ObjProto.hasOwnProperty;
          var NativeForEach = ArrayProto.forEach, NativeMap = ArrayProto.map, NativeReduce = ArrayProto.reduce, NativeReduceRight = ArrayProto.reduceRight, NativeFilter = ArrayProto.filter, NativeEvery = ArrayProto.every, NativeSome = ArrayProto.some, NativeIndexOf = ArrayProto.indexOf, NativeLastIndexOf = ArrayProto.lastIndexOf,nativeIsArray = Array.isArray,nativeKeys = Object.keys,nativeBind = FuncProto.bind;
          var каждый = _.each = _.forEach = функция (объект, итератор, контекст) {
            если (объект == ноль)
              вернуть объект;
            if (nativeForEach && obj.forEach ===nativeForEach) {
              obj.forEach(итератор, контекст);
            } else if (obj.length === +obj.length) {
              for (var i = 0, length = obj.length; i < length; i++) {
                if (iterator.call(context, obj[i], i, obj) === прерыватель)
                  возвращаться;
              }
            } еще {
              вар ключи = _.keys(obj);
              for (var i = 0, length =keys.length; i <length; i++) {
                if (iterator.call(context, obj[keys[i]],keys[i],obj) === прерыватель)
                  возвращаться;
              }
            }
            вернуть объект;
          };
          _.map = _.collect = функция(объект, итератор, контекст) {
            вар результаты = [];
            если (объект == ноль)
              возврат результатов;
            if (nativeMap && obj.map === NativeMap)
              вернуть obj.map(итератор, контекст);
            каждый (объект, функция (значение, индекс, список) {
              results.push(iterator.call(контекст, значение, индекс, список));
            });
            возврат результатов;
          };
          _.find = _.detect = функция (объект, предикат, контекст) {
            вар результат;
            любой (объект, функция (значение, индекс, список) {
              if (predicate.call(контекст, значение, индекс, список)) {
                результат = значение;
                вернуть истину;
              }
            });
            вернуть результат;
          };
          _.filter = _.select = функция(объект, предикат, контекст) {
            вар результаты = [];
            если (объект == ноль)
              возврат результатов;
            if (nativeFilter && obj.filter === NativeFilter)
              вернуть obj.filter(предикат, контекст);
            каждый (объект, функция (значение, индекс, список) {
              if (predicate.call(контекст, значение, индекс, список))
                результаты.push(значение);
            });
            возврат результатов;
          };
          var любой = _.some = _.any = функция (объект, предикат, контекст) {
            предикат || (предикат = _.идентичность);
            результат вар = ложь;
            если (объект == ноль)
              вернуть результат;
            if (nativeSome && obj.some === NativeSome)
              return obj.some(предикат, контекст);
            каждый (объект, функция (значение, индекс, список) {
              if (результат || (результат = predicate.call(контекст, значение, индекс, список)))
                возвратный прерыватель;
            });
            вернуть !!результат;
          };
          _.contains = _.include = функция (объект, цель) {
            если (объект == ноль)
              вернуть ложь;
            if (nativeIndexOf && obj.indexOf === NativeIndexOf)
              return obj.indexOf(цель) != -1;
            вернуть любой (объект, функция (значение) {
              возвращаемое значение === цель;
            });
          };
          _.delay = функция (функция, ожидание) {
            вар args = срез.call(аргументы, 2);
            вернуть setTimeout(function() {
              return func.apply(null, args);
            }, ждать);
          };
          _.defer = функция(функция) {
            return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
          };
          _.throttle = функция(функция) {
            вар ожидания, аргументы, контекст;
            функция возврата() {
              если (подожди)
                возвращаться;
              подождите = правда;
              аргументы = аргументы;
              контекст = это;
              трамвай.frame(функция() {
                подождать = ложь;
                func.apply(контекст, аргументы);
              });
            };
          };
          _.debounce = функция (функция, ожидание, немедленно) {
            var тайм-аут, аргументы, контекст, временная метка, результат;
            вар позже = функция() {
              var Last = _.now() — временная метка;
              если (последний <ждать) {
                таймаут = setTimeout(позже, ожидание - последний);
              } еще {
                тайм-аут = ноль;
                если (!немедленно) {
                  результат = func.apply(контекст, аргументы);
                  контекст = аргументы = ноль;
                }
              }
            };
            функция возврата() {
              контекст = это;
              аргументы = аргументы;
              временная метка = _.now();
              var callNow = немедленно && !timeout;
              если (!таймаут) {
                таймаут = setTimeout(позже, подожди);
              }
              если (вызов сейчас) {
                результат = func.apply(контекст, аргументы);
                контекст = аргументы = ноль;
              }
              вернуть результат;
            };
          };
          _.defaults = функция (объект) {
            если (!_.isObject(obj))
              вернуть объект;
            for (var я = 1, длина = аргументы.длина; я < длина; я++) {
              вар источник = аргументы [я];
              for (var prop в исходном коде) {
                если (obj[prop] === void 0)
                  объект [реквизит] = источник [реквизит];
              }
            }
            вернуть объект;
          };
          _.keys = функция (объект) {
            если (!_.isObject(obj))
              возвращаться [];
            если (nativeKeys)
              вернуть родные ключи (объект);
            вар ключи = [];
            for (ключ var в объекте)
              если (_.has(объект, ключ))
                ключи.push(ключ);
            возврат ключей;
          };
          _.has = функция (объект, ключ) {
            return hasOwnProperty2.call(объект, ключ);
          };
          _.isObject = функция (объект) {
            вернуть объект === Объект (объект);
          };
          _.сейчас = Дата.сейчас || функция() {
            return (/* @__PURE__ */ new Date()).getTime();
          };
          _.templateSettings = {
            оценить: /<%([\s\S]+?)%>/g,
            интерполировать: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
          };
          вар noMatch = /(.)^/;
          вар escape = {
            "'": "'",
            "\\": "\\",
            "\r": "р",
            "\n": "н",
            "\u2028": "u2028",
            "\u2029": "u2029"
          };
          var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
          вар escapeChar = функция (матч) {
            return "\\" + escapes[match];
          };
          var bareIdentifier = /^\s*(\w|\$)+\s*$/;
          _.template = функция(текст, настройки, старые настройки) {
            if (!settings && oldSettings)
              настройки = старые настройки;
            настройки = _.defaults({}, настройки, _.templateSettings);
            var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$ ", "г");
            индекс вар = 0;
            var source = "__p+='";
            text.replace(matcher, function(match, escape, интерполяция, оценка, смещение) {
              источник += text.slice(index, offset).replace(escapeRegExp, escapeChar);
              индекс = смещение + match.length;
              если (побег) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
              } еще если (интерполировать) {
                source += "'+\n((__t=(" + интерполяция + "))==null?'':__t)+\n'";
              } еще если (оценить) {
                источник += "';\n" + оценка + "\n__p+='";
              }
              ответный матч;
            });
            источник += "';\n";
            аргумент вар = settings.variable;
            если (аргумент) {
              если (!bareIdentifier.test(аргумент))
                throw new Error("переменная не является простым идентификатором: " + аргумент);
            } еще {
              источник = "with(obj||{}){\n" + источник + "}\n";
              аргумент = "объект";
            }
            source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\ н";
            вар рендер;
            пытаться {
              рендер = новая функция (settings.variable || "obj", "_", источник);
            } поймать (е) {
              е.источник = источник;
              бросить е;
            }
            вар шаблон = функция (данные) {
              вернуть render.call(this, data, _);
            };
            template.source = "function(" + аргумент + "){\n" + источник + "}";
            шаблон возврата;
          };
          возвращаться _;
        }();
      }
    });
  
    // пакеты/shared/render/plugins/BaseSiteModules/webflow-lib.js
    вар require_webflow_lib = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-lib.js"(экспорт, модуль) {
        «используйте строгий»;
        вар Webflow = {};
        вар модули = {};
        вар первичный = [];
        var вторичный = window.Webflow || [];
        вар $ = window.jQuery;
        вар $win = $(окно);
        вар $doc = $(документ);
        вар isFunction = $.isFunction;
        var _ = Webflow._ = require_underscore_custom();
        вар трам = Webflow.tram = require_tram_min() && $.tram;
        вар domready = ложь;
        вар уничтожен = ложь;
        трам.конфигурация.hideBackface = ложь;
        трамвай.конфигурация.keepInherited = правда;
        Webflow.define = функция (имя, фабрика, параметры) {
          если (модули[имя]) {
            unbindModule(модули [имя]);
          }
          var экземпляр = модули[имя] = фабрика($, _, параметры) || {};
          привязкаМодуль (экземпляр);
          вернуть экземпляр;
        };
        Webflow.require = функция (имя) {
          вернуть модули[имя];
        };
        функция связыванияМодуль(модуль2) {
          если (Webflow.env()) {
            isFunction(module2.design) && $win.on("__wf_design", module2.design);
            isFunction(module2.preview) && $win.on("__wf_preview", module2.preview);
          }
          isFunction(module2.destroy) && $win.on("__wf_destroy", module2.destroy);
          if (module2.ready && isFunction(module2.ready)) {
            addReady(модуль2);
          }
        }
        функция addReady(module2) {
          если (domready) {
            модуль2.готов();
            возвращаться;
          }
          если (_.contains(первичный, модуль2.ready)) {
            возвращаться;
          }
          первичный.push(модуль2.готов);
        }
        функция unbindModule (модуль2) {
          isFunction(module2.design) && $win.off("__wf_design", module2.design);
          isFunction(module2.preview) && $win.off("__wf_preview", module2.preview);
          isFunction(module2.destroy) && $win.off("__wf_destroy", module2.destroy);
          if (module2.ready && isFunction(module2.ready)) {
            удалитьReady (модуль2);
          }
        }
        функция RemoveReady (модуль2) {
          первичный = _.filter(первичный, функция(readyFn) {
            вернуть ReadyFn !== Module2.ready;
          });
        }
        Webflow.push = функция (готово) {
          если (domready) {
            isFunction(готово) && готов();
            возвращаться;
          }
          вторичный.push(готово);
        };
        Webflow.env = функция (режим) {
          вар designFlag = window.__wf_design;
          var inApp = typeof designFlag !== "не определено";
          если (!режим) {
            вернуться в приложение;
          }
          if (режим === "дизайн") {
            return inApp && designFlag;
          }
          if (режим === "предварительный просмотр") {
            return inApp && !designFlag;
          }
          if (режим === "слизняк") {
            return inApp && window.__wf_slug;
          }
          if (режим === "редактор") {
            вернуть окно.WebflowEditor;
          }
          если (режим === "тест") {
            вернуть окно.__wf_test;
          }
          если (режим === "кадр") {
            вернуть окно !== window.top;
          }
        };
        вар userAgent = navigator.userAgent.toLowerCase();
        var touch = Webflow.env.touch = «ontouchstart» в окне || window.DocumentTouch && экземпляр документа window.DocumentTouch;
        var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1] , 10);
        var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
        Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
        вар TouchTarget;
        touch && $doc.on("touchstart mousedown", function(evt) {
          touchTarget = evt.target;
        });
        Webflow.validClick = коснуться? функция (clickTarget) {
          возврат clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
        } : функция() {
          вернуть истину;
        };
        var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
        вар ScrollEvents = "scroll.webflow" + resizeEvents;
        Webflow.resize = eventProxy($win, resizeEvents);
        Webflow.scroll = eventProxy($win, ScrollEvents);
        Webflow.redraw = eventProxy();
        функция eventProxy(цель, типы) {
          обработчики вар = [];
          вар прокси = {};
          proxy.up = _.throttle(function(evt) {
            _.each(обработчики, функция(h) {
              ч(эвит);
            });
          });
          if (цель && типы) {
            target.on(типы, proxy.up);
          }
          proxy.on = функция (обработчик) {
            if (обработчик typeof !== "функция") {
              возвращаться;
            }
            if (_.contains(обработчики, обработчик)) {
              возвращаться;
            }
            handlers.push(обработчик);
          };
          proxy.off = функция (обработчик) {
            если (!arguments.length) {
              обработчики = [];
              возвращаться;
            }
            обработчики = _.filter(handlers, function(h) {
              вернуть h !== обработчик;
            });
          };
          возврат прокси;
        }
        Webflow.location = функция (url) {
          window.location = URL;
        };
        если (Webflow.env()) {
          Webflow.location = функция() {
          };
        }
        Webflow.ready = функция() {
          домреди = правда;
          если (уничтожено) {
            восстановитьМодули();
          } еще {
            _.each(основной, callReady);
          }
          _.each(вторичный, callReady);
          Webflow.resize.up();
        };
        функция callReady(readyFn) {
          isFunction(readyFn) && ReadyFn();
        }
        функция восстановленияМодули() {
          уничтожен = ложь;
          _.each(модули,bindModule);
        }
        вар отложить загрузку;
        Webflow.load = функция (обработчик) {
          deferLoad.then(обработчик);
        };
        функция связыванияLoad() {
          если (отложить загрузку) {
            отложитьLoad.reject();
            $win.off("load", deferLoad.resolve);
          }
          deferLoad = новый $.Deferred();
          $win.on("load", deferLoad.resolve);
        }
        Webflow.destroy = функция (опции) {
          опции = опции || {};
          уничтожен = правда;
          $win.triggerHandler("__wf_destroy");
          если (options.domready != ноль) {
            domready = options.domready;
          }
          _.each(модули, unbindModule);
          Webflow.resize.off();
          Webflow.scroll.off();
          Webflow.redraw.off();
          первичный = [];
          вторичный = [];
          if (deferLoad.state() === "ожидание") {
            привязкаЗагрузка();
          }
        };
        $(Webflow.ready);
        привязкаЗагрузка();
        модуль.экспорт = окно.Webflow = Веб-поток;
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-brand.js
    вар require_webflow_brand = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-brand.js"(экспорт, модуль) {
        «используйте строгий»;
        вар Webflow = require_webflow_lib();
        Webflow.define("бренд", Module.exports = function($) {
          вар API = {};
          вар документ = документ;
          вар $html = $("html");
          вар $body = $("тело");
          var namespace = ".w-webflow-badge";
          вар местоположение = window.location;
          вар isPhantom = /PhantomJS/i.test(navigator.userAgent);
          var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          вар BrandElement;
          api.ready = функция() {
            var mustBrand = $html.attr("data-wf-status");
            varPublishDomain = $html.attr("data-wf-domain") || "";
            if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !==PublishedDomain) {
              долженБренд = правда;
            }
            if (shouldBrand && !isPhantom) {
              BrandElement = BrandElement || создатьЗначок();
              ОбеспечитьБренд();
              setTimeout (ensureBrand, 500);
              $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
            }
          };
          функция onFullScreenChange() {
            var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Логическое значение (doc.webkitFullscreenElement);
            $(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
          }
          функция createBadge() {
            var $brand = $('<a class="w-webflow-badge"></a>').attr("href", "www.bezlim.in.ua");
            var $logoArt = $("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt ", "").css({
              MarginRight: "4px",
              ширина: «26 пикселей»
            });
            var $logoText = $("<img>").attr("src", "./image/webflow-badge-text-d2.c82cec3b78.png").attr("alt ", "Сделано в Webflow");
            $brand.append($logoArt, $logoText);
            вернуть $бренд[0];
          }
          функция обеспеченияБренд() {
            вар найден = $body.children(пространство имен);
            var match = Found.length && Found.get(0) === BrandElement;
            вар inEditor = Webflow.env("редактор");
            если (совпадение) {
              если (в редакторе) {
                найдено.удалить();
              }
              возвращаться;
            }
            если (найденная.длина) {
              найдено.удалить();
            }
            если (!inEditor) {
              $body.append(brandElement);
            }
          }
          вернуть API;
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-edit.js
    вар require_webflow_edit = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-edit.js"(экспорт, модуль) {
        «используйте строгий»;
        вар Webflow = require_webflow_lib();
        Webflow.define("edit", Module.exports = function($, _, options) {
          опции = опции || {};
          if (Webflow.env("test") || Webflow.env("frame")) {
            if (!options.fixture && !inCypress()) {
              возвращаться {
                выход: 1
              };
            }
          }
          вар API = {};
          вар $win = $(окно);
          вар $html = $(document.documentElement);
          вар местоположение = document.location;
          вар hashchange = "хэшchange";
          вар загружен;
          вар loadEditor = options.load || нагрузка;
          вар hasLocalStorage = ложь;
          пытаться {
            hasLocalStorage = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
          } поймать (е) {
          }
          если (hasLocalStorage) {
            редактор загрузки();
          } еще если (location.search) {
            if (/[?&](edit)(?:[=&?]|$)/.test(location.search) || /\?edit$/.test(location.href)) {
              редактор загрузки();
            }
          } еще {
            $win.on(hashchange, checkHash).triggerHandler(hashchange);
          }
          функция checkHash() {
            если (загружено) {
              возвращаться;
            }
            if (/\?edit/.test(location.hash)) {
              редактор загрузки();
            }
          }
          функция загрузки() {
            загружен = правда;
            окно.WebflowEditor = правда;
            $win.off(hashchange, checkHash);
            checkThirdPartyCookieSupport (функция ( ThirdPartyCookiesSupported) {
              $.ajax({
                URL: cleanSlashes("https://editor-api.webflow.com/api/editor/view"),
                данные: {
                  siteId: $html.attr("data-wf-site")
                },
                xhrFields: {
                  с учетными данными: правда
                },
                Тип данных: «JSON»,
                кроссдомен: правда,
                успех: успех ( ThirdPartyCookiesSupported )
              });
            });
          }
          успех функции ( ThirdPartyCookiesSupported) {
            возвращаемая функция (данные) {
              если (!данные) {
                console.error("Не удалось загрузить данные редактора");
                возвращаться;
              }
              data. ThirdPartyCookiesSupported = ThirdPartyCookiesSupported;
              getScript(prefix(data.scriptPath), function() {
                окно.WebflowEditor(данные);
              });
            };
          }
          функция getScript(url, готово) {
            $.ajax({
              тип: «ПОЛУЧИТЬ»,
              URL,
              тип данных: «скрипт»,
              кэш: правда
            }).then(готово, ошибка);
          }
          функция error(jqXHR, textStatus, errorThrown) {
            console.error("Не удалось загрузить скрипт редактора: " + textStatus);
            выбросить ошибкуThrown;
          }
          префикс функции (URL) {
            вернуть url.indexOf("//") >= 0 ? URL: cleanSlashes("https://editor-api.webflow.com" + URL);
          }
          функция cleanSlashes(url) {
            return url.replace(/([^:])\/\//g, "$1/");
          }
          функция checkThirdPartyCookieSupport (обратный вызов) {
            var iframe = window.document.createElement("iframe");
            iframe.src = "https://webflow.com/site/ Third-party-cookie-check.html";
            iframe.style.display = «нет»;
            iframe.sandbox = "разрешить сценарии, разрешающие одно и то же происхождение";
            вар handleMessage = функция (событие) {
              if (event.data === "WF_ Third_party_cookies_unsupported") {
                CleanUpCookieCheckerIframe (iframe, handleMessage);
                обратный вызов (ложь);
              } else if (event.data === "WF_ Third_party_cookies_supported") {
                CleanUpCookieCheckerIframe (iframe, handleMessage);
                обратный вызов (правда);
              }
            };
            iframe.onerror = функция() {
              CleanUpCookieCheckerIframe (iframe, handleMessage);
              обратный вызов (ложь);
            };
            window.addEventListener("сообщение", handleMessage, false);
            window.document.body.appendChild(iframe);
          }
          функция cleanUpCookieCheckerIframe (iframe, прослушиватель) {
            window.removeEventListener("сообщение", прослушиватель, ложь);
            iframe.remove();
          }
          вернуть API;
        });
        функция inCypress() {
          пытаться {
            вернуть window.top.__Cypress__;
          } поймать (е) {
            вернуть ложь;
          }
        }
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js
    var require_webflow_focus_visible = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js"(экспорт, модуль) {
        «используйте строгий»;
        вар Webflow = require_webflow_lib();
        Webflow.define("focus-visible", module.exports = function() {
          функция applyFocusVisiblePolyfill (область) {
            вар hasKeyboardEvent = true;
            вар hasFocusVisibleRecently = ложь;
            вар hasFocusVisibleRecentlyTimeout = null;
            вар inputTypesAllowlist = {
              текст: правда,
              поиск: правда,
              URL: правда,
              тел: правда,
              электронная почта: правда,
              пароль: правда,
              номер: правда,
              дата: правда,
              месяц: правда,
              неделя: правда,
              время: правда,
              дата-время: правда,
              «datetime-local»: правда
            };
            функция isValidFocusTarget (эл) {
              if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" в el && "contains" в el.classList) {
                вернуть истину;
              }
              вернуть ложь;
            }
            функция focusTriggersKeyboardModality(el) {
              тип вар = el.type;
              вар tagName = el.tagName;
              if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
                вернуть истину;
              }
              if (tagName === "TEXTAREA" && !el.readOnly) {
                вернуть истину;
              }
              если (el.isContentEditable) {
                вернуть истину;
              }
              вернуть ложь;
            }
            функция addFocusVisibleAttribute(эль) {
              if (el.getAttribute("data-wf-focus-visible")) {
                возвращаться;
              }
              el.setAttribute("data-wf-focus-visible", "true");
            }
            функция RemoveFocusVisibleAttribute(el) {
              if (!el.getAttribute("data-wf-focus-visible")) {
                возвращаться;
              }
              el.removeAttribute("data-wf-focus-visible");
            }
            функция onKeyDown(e) {
              if (e.metaKey || e.altKey || e.ctrlKey) {
                возвращаться;
              }
              если (isValidFocusTarget(scope.activeElement)) {
                addFocusVisibleAttribute(scope.activeElement);
              }
              HadKeyboardEvent = правда;
            }
            функция onPointerDown() {
              hasKeyboardEvent = ложь;
            }
            функция onFocus(e) {
              если (!isValidFocusTarget(e.target)) {
                возвращаться;
              }
              if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
                addFocusVisibleAttribute(e.target);
              }
            }
            функция onBlur(e) {
              если (!isValidFocusTarget(e.target)) {
                возвращаться;
              }
              if (e.target.hasAttribute("data-wf-focus-visible")) {
                HadFocusVisibleRecently = правда;
                window.clearTimeout(hadFocusVisibleRecentlyTimeout);
                HadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                  HadFocusVisibleRecently = ложь;
                }, 100);
                RemoveFocusVisibleAttribute(e.target);
              }
            }
            функция onVisibilityChange() {
              if (document.visibilityState === "скрытый") {
                если (hadFocusVisibleRecently) {
                  HadKeyboardEvent = правда;
                }
                addInitialPointerMoveListeners();
              }
            }
            функция addInitialPointerMoveListeners() {
              document.addEventListener("mousemove", onInitialPointerMove);
              document.addEventListener("mousedown", onInitialPointerMove);
              document.addEventListener("mouseup", onInitialPointerMove);
              document.addEventListener("pointermove", onInitialPointerMove);
              document.addEventListener("pointerdown", onInitialPointerMove);
              document.addEventListener("pointerup", onInitialPointerMove);
              document.addEventListener("touchmove", onInitialPointerMove);
              document.addEventListener("touchstart", onInitialPointerMove);
              document.addEventListener("touchend", onInitialPointerMove);
            }
            функция RemoveInitialPointerMoveListeners() {
              document.removeEventListener("mousemove", onInitialPointerMove);
              document.removeEventListener("mousedown", onInitialPointerMove);
              document.removeEventListener("mouseup", onInitialPointerMove);
              document.removeEventListener("pointermove", onInitialPointerMove);
              document.removeEventListener("pointerdown", onInitialPointerMove);
              document.removeEventListener("pointerup", onInitialPointerMove);
              document.removeEventListener("touchmove", onInitialPointerMove);
              document.removeEventListener("touchstart", onInitialPointerMove);
              document.removeEventListener("touchend", onInitialPointerMove);
            }
            функция onInitialPointerMove(e) {
              if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") {
                возвращаться;
              }
              hasKeyboardEvent = ложь;
              RemoveInitialPointerMoveListeners();
            }
            document.addEventListener("keydown", onKeyDown, true);
            document.addEventListener("mousedown", onPointerDown, true);
            document.addEventListener("pointerdown", onPointerDown, true);
            document.addEventListener("touchstart", onPointerDown, true);
            document.addEventListener("visibilitychange", onVisibilityChange, true);
            addInitialPointerMoveListeners();
            scope.addEventListener("фокус", onFocus, true);
            scope.addEventListener("blur", onBlur, true);
          }
          функция готова() {
            if (typeof document !== "не определено") {
              пытаться {
                document.querySelector(":focus-visible");
              } поймать (е) {
                applyFocusVisiblePolyfill (документ);
              }
            }
          }
          возвращаться {
            готовый
          };
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-focus.js
    вар require_webflow_focus = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-focus.js"(экспорт, модуль) {
        «используйте строгий»;
        вар Webflow = require_webflow_lib();
        Webflow.define("фокус", модуль.экспорт = функция() {
          вар captureEvents = [];
          вар захват = ложь;
          функция captureEvent(e) {
            если (захват) {
              е.preventDefault();
              е.stopPropagation();
              e.stopImmediatePropagation();
              captureEvents.unshift(e);
            }
          }
          функция isPolyfilledFocusEvent(e) {
            вар эль = e.target;
            вар тег = el.tagName;
            return /^a$/i.test(tag) && el.href != null || // (А)
            /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (ДО Н.Э)
            /^input$/i.test(тег) && /^(кнопка|сброс|отправить|радио|флажок)$/i.test(el.type) && !el.disabled || // (Д)
            !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (Э)
            /^audio$/i.test(тег) || // (Ф)
            /^video$/i.test(tag) && el.controls === true;
          }
          обработчик функции(е) {
            если (isPolyfilledFocusEvent(e)) {
              захват = правда;
              setTimeout(() => {
                захват = ложь;
                е.target.focus();
                в то время как (capturedEvents.length > 0) {
                  вар событие = captureEvents.pop();
                  event.target.dispatchEvent(новый MouseEvent(event.type, event));
                }
              }, 0);
            }
          }
          функция готова() {
            if (typeof document !== "не определено" && document.body.hasAttribute("data-wf-focus-within") && Webflow.env.safari) {
              document.addEventListener("mousedown", handler, true);
              document.addEventListener("mouseup", captureEvent, true);
              document.addEventListener("click", captureEvent, true);
            }
          }
          возвращаться {
            готовый
          };
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js
    вар require_webflow_ix_events = __commonJS({
      "packages/ shared/render/plugins/BaseSiteModules/webflow-ix-events.js"(экспорт, модуль) {
        «используйте строгий»;
        вар $ = window.jQuery;
        вар API = {};
        вар eventQueue = [];
        var namespace = ".w-ix";
        вар eventTriggers = {
          сброс: функция (я, эл) {
            el.__wf_intro = ноль;
          },
          введение: function(i, el) {
            если (el.__wf_intro) {
              возвращаться;
            }
            el.__wf_intro = правда;
            $(el).triggerHandler(api.types.INTRO);
          },
          завершение: function(i, el) {
            если (!el.__wf_intro) {
              возвращаться;
            }
            el.__wf_intro = ноль;
            $(el).triggerHandler(api.types.OUTRO);
          }
        };
        api.triggers = {};
        API.types = {
          ВВЕДЕНИЕ: "w-ix-intro" + пространство имен,
          ЗАКЛЮЧЕНИЕ: "w-ix-outro" + пространство имен.
        };
        API.init = функция() {
          вар счетчик = eventQueue.length;
          for (var i = 0; я <count; я++) {
            вар memo = eventQueue[i];
            памятка[0](0, памятка[1]);
          }
          EventQueue = [];
          $.extend(api.triggers, eventTriggers);
        };
        api.async = функция() {
          for (ключ var в eventTriggers) {
            вар func = eventTriggers[ключ];
            если (!eventTriggers.hasOwnProperty(ключ)) {
              продолжать;
            }
            api.triggers[key] = function(i, el) {
              eventQueue.push([func, el]);
            };
          }
        };
        API.async();
        модуль.экспорт = API;
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js
    вар require_webflow_ix2_events = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js"(экспорт, модуль) {
        «используйте строгий»;
        вар IXEvents = require_webflow_ix_events();
        функция диспетчеризацииCustomEvent2 (элемент, eventName) {
          var event = document.createEvent("CustomEvent");
          event.initCustomEvent(eventName, true, true, null);
          element.dispatchEvent(событие);
        }
        вар $ = window.jQuery;
        вар API = {};
        var namespace = ".w-ix";
        вар eventTriggers = {
          сброс: функция (я, эл) {
            IXEvents.triggers.reset(i, el);
          },
          введение: function(i, el) {
            IXEvents.triggers.intro(i, el);
            диспетчеризацияCustomEvent2(el, «COMPONENT_ACTIVE»);
          },
          завершение: function(i, el) {
            IXEvents.triggers.outro(i, el);
            sendCustomEvent2 (el, «COMPONENT_INACTIVE»);
          }
        };
        api.triggers = {};
        API.types = {
          ВВЕДЕНИЕ: "w-ix-intro" + пространство имен,
          ЗАКЛЮЧЕНИЕ: "w-ix-outro" + пространство имен.
        };
        $.extend(api.triggers, eventTriggers);
        модуль.экспорт = API;
      }
    });
  
    // node_modules/@babel/runtime/helpers/typeof.js
    вар require_typeof = __commonJS({
      "node_modules/@babel/runtime/helpers/typeof.js"(экспорт, модуль) {
        функция _typeof(obj) {
          "@babel/helpers - typeof";
          return модуль.exports = _typeof = "функция" == тип символа && "символ" == тип символа.итератор ? функция (объект2) {
            возвращаемый тип объекта obj2;
          } : функция(obj2) {
            return obj2 && "функция" == typeof Символ && obj2.constructor === Символ && obj2 !== Символ.прототип ? «символ»: тип объекта obj2;
          }, модуль.exports.__esModule = true, модуль.exports["default"] = модуль.exports, _typeof(obj);
        }
        модуль.exports = _typeof, модуль.exports.__esModule = true, модуль.exports["default"] = модуль.exports;
      }
    });
  
    // node_modules/@babel/runtime/helpers/interopRequireWildcard.js
    var require_interopRequireWildcard = __commonJS({
      "node_modules/@babel/runtime/helpers/interopRequireWildcard.js"(экспорт, модуль) {
        var _typeof = require_typeof()["default"];
        функция _getRequireWildcardCache (nodeInterop) {
          if (typeof WeakMap !== "функция")
            вернуть ноль;
          var кэшBabelInterop = /* @__PURE__ */ new WeakMap();
          var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
          return (_getRequireWildcardCache = функция _getRequireWildcardCache2 (nodeInterop2) {
            вернуть nodeInterop2? кэшНодеИнтероп: кэшБабельИнтероп;
          }) (узелИнтероп);
        }
        функция _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            вернуть объект;
          }
          if (obj === null || _typeof(obj) !== "объект" && typeof obj !== "функция") {
            возвращаться {
              "по умолчанию": объект
            };
          }
          вар кэш = _getRequireWildcardCache (nodeInterop);
          если (кеш && кэш.хас(obj)) {
            вернуть кэш.получить(объект);
          }
          вар newObj = {};
          вар hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (ключ var в obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              вар desc = hasPropertyDescriptor? Object.getOwnPropertyDescriptor(obj, key): null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } еще {
                newObj[ключ] = объект[ключ];
              }
            }
          }
          newObj["по умолчанию"] = объект;
          если (кэш) {
            кэш.set(obj, newObj);
          }
          вернуть новыйОбъект;
        }
        модуль.экспорт = _interopRequireWildcard, модуль.экспорт.__esModule = правда, модуль.экспорт["по умолчанию"] = модуль.экспорт;
      }
    });
  
    // node_modules/@babel/runtime/helpers/interopRequireDefault.js
    вар require_interopRequireDefault = __commonJS({
      "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(экспорт, модуль) {
        функция _interopRequireDefault(obj) {
          вернуть obj && obj.__esModule? объект : {
            "по умолчанию": объект
          };
        }
        модуль.exports = _interopRequireDefault, модуль.exports.__esModule = true, модуль.exports["default"] = модуль.exports;
      }
    });
  
    // node_modules/core-js/internals/global.js
    вар require_global = __commonJS({
      "node_modules/core-js/internals/global.js"(экспорт, модуль) {
        вар проверка = функция (оно) {
          вернуть его && it.Math == Math && it;
        };
        Module.exports = // eslint-disable-next-line es/no-global-this -- безопасно
        check(typeof globalThis == "object" && globalThis) || check(typeof window == "объект" && окно) || // eslint-disable-next-line no-restricted-globals -- безопасно
        check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- резервный вариант
        функция() {
          верните это;
        }() || Функция("Верните это")();
      }
    });
  
    // node_modules/core-js/internals/fails.js
    вар require_fails = __commonJS({
      "node_modules/core-js/internals/fails.js"(экспорт, модуль) {
        модуль.exports = функция (exec) {
          пытаться {
            вернуть !!exec();
          } поймать (ошибка) {
            вернуть истину;
          }
        };
      }
    });
  
    // node_modules/core-js/internals/descriptors.js
    var require_descriptors = __commonJS({
      "node_modules/core-js/internals/descriptors.js"(экспорт, модуль) {
        вар терпит неудачу = require_fails();
        модуль.exports = !fails(function() {
          return Object.defineProperty({}, 1, { get: function() {
            вернуть 7;
          } })[1] != 7;
        });
      }
    });
  
    // node_modules/core-js/internals/function-call.js
    вар require_function_call = __commonJS({
      "node_modules/core-js/internals/function-call.js"(экспорт, модуль) {
        вар вызов = Function.prototype.call;
        модуль.экспорт = вызов.бинд? call.bind(вызов): функция() {
          вернуть call.apply(вызов, аргументы);
        };
      }
    });
  
    // node_modules/core-js/internals/object-property-is-enumerable.js
    вар require_object_property_is_enumerable = __commonJS({
      "node_modules/core-js/internals/object-property-is-enumerable.js"(экспорт) {
        «используйте строгий»;
        вар $propertyIsEnumerable = {}.propertyIsEnumerable;
        вар getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
        Exports.f = NASHORN_BUG ? функция propertyIsEnumerable(V) {
          вар дескриптор = getOwnPropertyDescriptor (это, V);
          return !!дескриптор && descriptor.enumerable;
        }: $propertyIsEnumerable;
      }
    });
  
    // node_modules/core-js/internals/create-property-descriptor.js
    var require_create_property_descriptor = __commonJS({
      "node_modules/core-js/internals/create-property-descriptor.js"(экспорт, модуль) {
        модуль.экспорт = функция (растровое изображение, значение) {
          возвращаться {
            перечисляемый: !(растровое изображение и 1),
            настраивается: !(растровое изображение и 2),
            запись: !(растровое изображение и 4),
            ценить
          };
        };
      }
    });
  
    // node_modules/core-js/internals/function-uncurry-this.js
    var require_function_uncurry_this = __commonJS({
      "node_modules/core-js/internals/function-uncurry-this.js"(экспорт, модуль) {
        вар FunctionPrototype = Function.prototype;
        вар связывание = FunctionPrototype.bind;
        вар вызов = FunctionPrototype.call;
        вар callBind = привязка && привязка.bind(вызов);
        модуль.экспорт = привязка? функция (фн) {
          вернуть fn && callBind (вызов, fn);
        } : функция(фн) {
          вернуть fn && function() {
            return call.apply(fn, аргументы);
          };
        };
      }
    });
  
    // node_modules/core-js/internals/classof-raw.js
    вар require_classof_raw = __commonJS({
      "node_modules/core-js/internals/classof-raw.js"(экспорт, модуль) {
        вар uncurryThis = require_function_uncurry_this();
        вар toString = uncurryThis({}.toString);
        var stringSlice = uncurryThis("".slice);
        модуль.exports = функция(оно) {
          return stringSlice(toString(it), 8, -1);
        };
      }
    });
  
    // node_modules/core-js/internals/indexed-object.js
    вар require_indexed_object = __commonJS({
      "node_modules/core-js/internals/indexed-object.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар uncurryThis = require_function_uncurry_this();
        вар терпит неудачу = require_fails();
        вар classof = require_classof_raw();
        вар Object2 = global2.Object;
        вар раскол = uncurryThis("".split);
        модуль.экспорт = неудача(функция() {
          return !Object2("z").propertyIsEnumerable(0);
        }) ? функция(оно) {
          return classof(it) == "Строка"? разделить(оно, "") : Object2(оно);
        } : Объект2;
      }
    });
  
    // node_modules/core-js/internals/require-object-coercible.js
    вар require_require_object_coercible = __commonJS({
      "node_modules/core-js/internals/require-object-coercible.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар TypeError2 = global2.TypeError;
        модуль.exports = функция(оно) {
          если (оно == пустота 0)
            throw TypeError2("Невозможно вызвать метод " + it);
          верни это;
        };
      }
    });
  
    // node_modules/core-js/internals/to-indexed-object.js
    вар require_to_indexed_object = __commonJS({
      "node_modules/core-js/internals/to-indexed-object.js"(экспорт, модуль) {
        вар IndexedObject = require_indexed_object();
        вар requireObjectCoercible = require_require_object_coercible();
        модуль.exports = функция(оно) {
          return IndexedObject(requireObjectCoercible(it));
        };
      }
    });
  
    // node_modules/core-js/internals/is-callable.js
    вар require_is_callable = __commonJS({
      "node_modules/core-js/internals/is-callable.js"(экспорт, модуль) {
        модуль.экспорт = функция(аргумент) {
          возвращаемый аргумент типа == "функция";
        };
      }
    });
  
    // node_modules/core-js/internals/is-object.js
    вар require_is_object = __commonJS({
      "node_modules/core-js/internals/is-object.js"(экспорт, модуль) {
        вар isCallable = require_is_callable();
        модуль.exports = функция(оно) {
          возвращаемый тип этого == "объект"? это !== null : isCallable(it);
        };
      }
    });
  
    // node_modules/core-js/internals/get-built-in.js
    вар require_get_built_in = __commonJS({
      "node_modules/core-js/internals/get-built-in.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар isCallable = require_is_callable();
        вар aFunction = функция (аргумент) {
          вернуть isCallable (аргумент)? аргумент: пустота 0;
        };
        модуль.экспорт = функция (пространство имен, метод) {
          вернуть аргументы.длина <2? aFunction(global2[пространство имен]): global2[пространство имен] && global2[пространство имен][метод];
        };
      }
    });
  
    // node_modules/core-js/internals/object-is-prototype-of.js
    вар require_object_is_prototype_of = __commonJS({
      "node_modules/core-js/internals/object-is-prototype-of.js"(экспорт, модуль) {
        вар uncurryThis = require_function_uncurry_this();
        модуль.exports = uncurryThis({}.isPrototypeOf);
      }
    });
  
    // node_modules/core-js/internals/engine-user-agent.js
    вар require_engine_user_agent = __commonJS({
      "node_modules/core-js/internals/engine-user-agent.js"(экспорт, модуль) {
        вар getBuiltIn = require_get_built_in();
        модуль.экспорт = getBuiltIn("навигатор", "userAgent") || "";
      }
    });
  
    // node_modules/core-js/internals/engine-v8-version.js
    вар require_engine_v8_version = __commonJS({
      "node_modules/core-js/internals/engine-v8-version.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар userAgent = require_engine_user_agent();
        вар процесс2 = global2.process;
        вар Deno = global2.Deno;
        var версии = процесс2 && процесс2.версии || Дено && Дено.версия;
        var v8 = версии &&versions.v8;
        вар совпадение;
        вар-версия;
        если (v8) {
          совпадение = v8.split(".");
          версия = match[0] > 0 && match[0] < 4 ? 1 : +(совпадение[0] + совпадение[1]);
        }
        if (!version && userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            если (совпадение)
              версия = + совпадение [1];
          }
        }
        модуль.экспорт = версия;
      }
    });
  
    // node_modules/core-js/internals/native-symbol.js
    вар require_native_symbol = __commonJS({
      "node_modules/core-js/internals/native-symbol.js"(экспорт, модуль) {
        вар V8_VERSION = require_engine_v8_version();
        вар терпит неудачу = require_fails();
        Module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
          символ вар = Символ();
          return !Строка(символ) || !(Объект(символ) экземпляр символа) || // Символы Chrome 38-40 не наследуются от прототипов коллекций DOM к экземплярам
          !Symbol.sham && V8_VERSION && V8_VERSION < 41;
        });
      }
    });
  
    // node_modules/core-js/internals/use-symbol-as-uid.js
    var require_use_symbol_as_uid = __commonJS({
      "node_modules/core-js/internals/use-symbol-as-uid.js"(экспорт, модуль) {
        вар NATIVE_SYMBOL = require_native_symbol();
        модуль.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
      }
    });
  
    // node_modules/core-js/internals/is-symbol.js
    вар require_is_symbol = __commonJS({
      "node_modules/core-js/internals/is-symbol.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар getBuiltIn = require_get_built_in();
        вар isCallable = require_is_callable();
        вар isPrototypeOf = require_object_is_prototype_of();
        вар USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
        вар Object2 = global2.Object;
        модуль.экспорт = USE_SYMBOL_AS_UID ? функция(оно) {
          return typeof it == "символ";
        } : функция(оно) {
          вар $Symbol = getBuiltIn("Символ");
          return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object2(it));
        };
      }
    });
  
    // node_modules/core-js/internals/try-to-string.js
    вар require_try_to_string = __commonJS({
      "node_modules/core-js/internals/try-to-string.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар String2 = global2.String;
        модуль.экспорт = функция(аргумент) {
          пытаться {
            вернуть String2 (аргумент);
          } поймать (ошибка) {
            вернуть «Объект»;
          }
        };
      }
    });
  
    // node_modules/core-js/internals/a-callable.js
    вар require_a_callable = __commonJS({
      "node_modules/core-js/internals/a-callable.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар isCallable = require_is_callable();
        вар tryToString = require_try_to_string();
        вар TypeError2 = global2.TypeError;
        модуль.экспорт = функция(аргумент) {
          если (isCallable(аргумент))
            возвращаемый аргумент;
          throw TypeError2(tryToString(аргумент) + "не является функцией");
        };
      }
    });
  
    // node_modules/core-js/internals/get-method.js
    вар require_get_method = __commonJS({
      "node_modules/core-js/internals/get-method.js"(экспорт, модуль) {
        вар aCallable = require_a_callable();
        модуль.экспорт = функция(V, P) {
          вар func = V[P];
          вернуть функцию == ноль? void 0: aCallable (функция);
        };
      }
    });
  
    // node_modules/core-js/internals/ordinary-to-primitive.js
    var require_ordinary_to_primitive = __commonJS({
      "node_modules/core-js/internals/ordinary-to-primitive.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар вызов = require_function_call();
        вар isCallable = require_is_callable();
        вар isObject = require_is_object();
        вар TypeError2 = global2.TypeError;
        модуль.экспорт = функция (вход, приставка) {
          вар фн, вал;
          if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
            вернуть значение;
          if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
            вернуть значение;
          if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
            вернуть значение;
          throw TypeError2("Невозможно преобразовать объект в примитивное значение");
        };
      }
    });
  
    // node_modules/core-js/internals/is-pure.js
    вар require_is_pure = __commonJS({
      "node_modules/core-js/internals/is-pure.js"(экспорт, модуль) {
        модуль.экспорт = ложь;
      }
    });
  
    // node_modules/core-js/internals/set-global.js
    вар require_set_global = __commonJS({
      "node_modules/core-js/internals/set-global.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар defineProperty = Object.defineProperty;
        модуль.экспорт = функция(ключ, значение) {
          пытаться {
            defineProperty(global2, key, {value, configurable: true, writeable: true });
          } поймать (ошибка) {
            global2[ключ] = значение;
          }
          возвращаемое значение;
        };
      }
    });
  
    // node_modules/core-js/internals/shared-store.js
    вар require_shared_store = __commonJS({
      "node_modules/core-js/internals/shared-store.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар setGlobal = require_set_global();
        var SHARED = "__core-js_shared__";
        var store = global2[SHARED] || setGlobal(SHARED, {});
        модуль.экспорт = магазин;
      }
    });
  
    // node_modules/core-js/internals/shared.js
    вар require_shared = __commonJS({
      "node_modules/core-js/internals/shared.js"(экспорт, модуль) {
        вар IS_PURE = require_is_pure();
        вар магазин = require_shared_store();
        (module.exports = функция(ключ, значение) {
          вернуть магазин[ключ] || (store[key] = значение!== void 0? Value: {});
        })("версии", []).push({
          версия: «3.19.0»,
          режим: IS_PURE ? «чистый»: «глобальный»,
          копирайт: "\xA9 2021 Денис Пушкарев (zloirock.ru)"
        });
      }
    });
  
    // node_modules/core-js/internals/to-object.js
    вар require_to_object = __commonJS({
      "node_modules/core-js/internals/to-object.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар requireObjectCoercible = require_require_object_coercible();
        вар Object2 = global2.Object;
        модуль.экспорт = функция(аргумент) {
          вернуть Object2 (requireObjectCoercible (аргумент));
        };
      }
    });
  
    // node_modules/core-js/internals/has-own-property.js
    var require_has_own_property = __commonJS({
      "node_modules/core-js/internals/has-own-property.js"(экспорт, модуль) {
        вар uncurryThis = require_function_uncurry_this();
        вар toObject = require_to_object();
        вар hasOwnProperty2 = uncurryThis({}.hasOwnProperty);
        модуль.экспорт = Object.hasOwn || функция hasOwn(it, key) {
          return hasOwnProperty2(toObject(it), ключ);
        };
      }
    });
  
    // node_modules/core-js/internals/uid.js
    вар require_uid = __commonJS({
      "node_modules/core-js/internals/uid.js"(экспорт, модуль) {
        вар uncurryThis = require_function_uncurry_this();
        вар идентификатор = 0;
        вар постфикс = Math.random();
        вар toString = uncurryThis(1 .toString);
        модуль.экспорт = функция (ключ) {
          return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
        };
      }
    });
  
    // node_modules/core-js/internals/well-known-symbol.js
    var require_well_known_symbol = __commonJS({
      "node_modules/core-js/internals/well-known-symbol.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар общий = require_shared();
        вар hasOwn = require_has_own_property();
        вар uid = require_uid();
        вар NATIVE_SYMBOL = require_native_symbol();
        вар USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
        вар WellKnownSymbolsStore = общий («wks»);
        вар Символ2 = global2.Symbol;
        var символFor = Символ2 && Символ2["для"];
        вар createWellKnownSymbol = USE_SYMBOL_AS_UID ? Символ2 : Символ2 && Символ2.безSetter || жидкость;
        модуль.экспорт = функция(имя) {
          if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
            var описание = "Символ." + имя;
            if (NATIVE_SYMBOL && hasOwn(Symbol2, name)) {
              WellKnownSymbolsStore[имя] = Символ2[имя];
            } иначе, если (USE_SYMBOL_AS_UID && символFor) {
              WellKnownSymbolsStore[имя] = символFor(описание);
            } еще {
              WellKnownSymbolsStore[имя] = createWellKnownSymbol(описание);
            }
          }
          вернуть WellKnownSymbolsStore[имя];
        };
      }
    });
  
    // node_modules/core-js/internals/to-primitive.js
    вар require_to_primitive = __commonJS({
      "node_modules/core-js/internals/to-primitive.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар вызов = require_function_call();
        вар isObject = require_is_object();
        вар isSymbol = require_is_symbol();
        вар getMethod = require_get_method();
        вар обычныйToPrimitive = require_ordinary_to_primitive();
        вар wellKnownSymbol = require_well_known_symbol();
        вар TypeError2 = global2.TypeError;
        var TO_PRIMI TIVE = wellKnownSymbol("toPrimitive");
        модуль.экспорт = функция (вход, приставка) {
          если (!isObject(ввод) || isSymbol(ввод))
            обратный ввод;
          вар экзотикаToPrim = getMethod (вход, TO_PRIMITIVE);
          вар результат;
          если (exoticToPrim) {
            если (pref === void 0)
              преф = «по умолчанию»;
            результат = вызов (exoticToPrim, вход, преф);
            если (!isObject(результат) || isSymbol(результат))
              вернуть результат;
            throw TypeError2("Невозможно преобразовать объект в примитивное значение");
          }
          если (pref === void 0)
            преф = «число»;
          вернуть обычныйToPrimitive(input, pref);
        };
      }
    });
  
    // node_modules/core-js/internals/to-property-key.js
    вар require_to_property_key = __commonJS({
      "node_modules/core-js/internals/to-property-key.js"(экспорт, модуль) {
        вар toPrimitive = require_to_primitive();
        вар isSymbol = require_is_symbol();
        модуль.экспорт = функция(аргумент) {
          var key = toPrimitive(аргумент, «строка»);
          вернуть isSymbol (ключ)? ключ: ключ + «»;
        };
      }
    });
  
    // node_modules/core-js/internals/document-create-element.js
    вар require_document_create_element = __commonJS({
      "node_modules/core-js/internals/document-create-element.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар isObject = require_is_object();
        вар документ2 = global2.document;
        var EXISTS = isObject(document2) && isObject(document2.createElement);
        модуль.exports = функция(оно) {
          возврат СУЩЕСТВУЕТ? document2.createElement(it): {};
        };
      }
    });
  
    // node_modules/core-js/internals/ie8-dom-define.js
    var require_ie8_dom_define = __commonJS({
      "node_modules/core-js/internals/ie8-dom-define.js"(экспорт, модуль) {
        вар ДЕСКРИПТОРЫ = require_descriptors();
        вар терпит неудачу = require_fails();
        вар createElement = require_document_create_element();
        модуль.exports = !DESCRIPTORS && !fails(function() {
          return Object.defineProperty(createElement("div"), "a", {
            получить: функция() {
              вернуть 7;
            }
          }).а != 7;
        });
      }
    });
  
    // node_modules/core-js/internals/object-get-own-property-descriptor.js
    var require_object_get_own_property_descriptor = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-descriptor.js"(экспорт) {
        вар ДЕСКРИПТОРЫ = require_descriptors();
        вар вызов = require_function_call();
        вар propertyIsEnumerableModule = require_object_property_is_enumerable();
        вар createPropertyDescriptor = require_create_property_descriptor();
        вар toIndexedObject = require_to_indexed_object();
        вар toPropertyKey = require_to_property_key();
        вар hasOwn = require_has_own_property();
        вар IE8_DOM_DEFINE = require_ie8_dom_define();
        вар $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        экспорт.f = ДЕСКРИПТОРЫ ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
          О = toIndexedObject(O);
          P = toPropertyKey(P);
          если (IE8_DOM_DEFINE)
            пытаться {
              вернуть $getOwnPropertyDescriptor(O, P);
            } поймать (ошибка) {
            }
          если (hasOwn(O, P))
            return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
        };
      }
    });
  
    // node_modules/core-js/internals/an-object.js
    вар require_an_object = __commonJS({
      "node_modules/core-js/internals/an-object.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар isObject = require_is_object();
        вар String2 = global2.String;
        вар TypeError2 = global2.TypeError;
        модуль.экспорт = функция(аргумент) {
          если (isObject(аргумент))
            возвращаемый аргумент;
          throw TypeError2(String2(аргумент) + "не является объектом");
        };
      }
    });
  
    // node_modules/core-js/internals/object-define-property.js
    вар require_object_define_property = __commonJS({
      "node_modules/core-js/internals/object-define-property.js"(экспорт) {
        вар global2 = require_global();
        вар ДЕСКРИПТОРЫ = require_descriptors();
        вар IE8_DOM_DEFINE = require_ie8_dom_define();
        вар anObject = require_an_object();
        вар toPropertyKey = require_to_property_key();
        вар TypeError2 = global2.TypeError;
        вар $defineProperty = Object.defineProperty;
        экспорт.f = ДЕСКРИПТОРЫ ? $defineProperty : функция defineProperty(O, P, Attributes) {
          объект(О);
          P = toPropertyKey(P);
          объект(атрибуты);
          если (IE8_DOM_DEFINE)
            пытаться {
              вернуть $defineProperty(O, P, Атрибуты);
            } поймать (ошибка) {
            }
          if («получить» в атрибутах || «установить» в атрибутах)
            throw TypeError2("Доступы не поддерживаются");
          if («значение» в атрибутах)
            O[P] = Атрибуты.значение;
          вернуть О;
        };
      }
    });
  
    // node_modules/core-js/internals/create-non-enumerable-property.js
    var require_create_non_enumerable_property = __commonJS({
      "node_modules/core-js/internals/create-non-enumerable-property.js"(экспорт, модуль) {
        вар ДЕСКРИПТОРЫ = require_descriptors();
        вар definePropertyModule = require_object_define_property();
        вар createPropertyDescriptor = require_create_property_descriptor();
        модуль.экспорт = ДЕСКРИПТОРЫ ? функция (объект, ключ, значение) {
          return definePropertyModule.f(объект, ключ, createPropertyDescriptor(1, значение));
        } : функция(объект, ключ, значение) {
          объект[ключ] = значение;
          вернуть объект;
        };
      }
    });
  
    // node_modules/core-js/internals/inspect-source.js
    вар require_inspect_source = __commonJS({
      "node_modules/core-js/internals/inspect-source.js"(экспорт, модуль) {
        вар uncurryThis = require_function_uncurry_this();
        вар isCallable = require_is_callable();
        вар магазин = require_shared_store();
        вар functionToString = uncurryThis(Function.toString);
        если (!isCallable(store.inspectSource)) {
          store.inspectSource = функция (оно) {
            вернуть функциюToString (оно);
          };
        }
        модуль.экспорт = магазин.inspectSource;
      }
    });
  
    // node_modules/core-js/internals/native-weak-map.js
    вар require_native_weak_map = __commonJS({
      "node_modules/core-js/internals/native-weak-map.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар isCallable = require_is_callable();
        вар InspectSource = require_inspect_source();
        вар WeakMap2 = global2.WeakMap;
        модуль.exports = isCallable(WeakMap2) && /собственный код/.test(inspectSource(WeakMap2));
      }
    });
  
    // node_modules/core-js/internals/shared-key.js
    вар require_shared_key = __commonJS({
      "node_modules/core-js/internals/shared-key.js"(экспорт, модуль) {
        вар общий = require_shared();
        вар uid = require_uid();
        вар ключи = общий («ключи»);
        модуль.экспорт = функция (ключ) {
          вернуть ключи[ключ] || (ключи[ключ] = uid(ключ));
        };
      }
    });
  
    // node_modules/core-js/internals/hidden-keys.js
    var require_hidden_keys = __commonJS({
      "node_modules/core-js/internals/hidden-keys.js"(экспорт, модуль) {
        модуль.экспорт = {};
      }
    });
  
    // node_modules/core-js/internals/internal-state.js
    вар require_internal_state = __commonJS({
      "node_modules/core-js/internals/internal-state.js"(экспорт, модуль) {
        вар NATIVE_WEAK_MAP = require_native_weak_map();
        вар global2 = require_global();
        вар uncurryThis = require_function_uncurry_this();
        вар isObject = require_is_object();
        вар createNonEnumerableProperty = require_create_non_enumerable_property();
        вар hasOwn = require_has_own_property();
        вар общий = require_shared_store();
        вар SharedKey = require_shared_key();
        вар скрытыеКейс = require_hidden_keys();
        var OBJECT_ALREADY_INITIALIZED = "Объект уже инициализирован";
        вар TypeError2 = global2.TypeError;
        вар WeakMap2 = global2.WeakMap;
        вар set3;
        вар get3;
        вар имеет;
        вар принудительное = функция (оно) {
          возвращение имеет(оно) ? get3(оно): set3(оно, {});
        };
        вар getterFor = функция (ТИП) {
          возвращаемая функция(оно) {
            состояние вар;
            if (!isObject(it) || (state = get3(it)).type !== TYPE) {
              throw TypeError2("Несовместимый приемник, требуется " + TYPE + "");
            }
            возвратное состояние;
          };
        };
        если (NATIVE_WEAK_MAP ||shared.state) {
          магазин = общий.состояние || (shared.state = новый WeakMap2());
          wmget = uncurryThis(store.get);
          wmhas = uncurryThis(store.has);
          wmset = uncurryThis(store.set);
          set3 = функция (оно, метаданные) {
            если (wmhas(магазин, оно))
              выбросить новый TypeError2(OBJECT_ALREADY_INITIALIZED);
            метаданные.фасад = это;
            wmset (магазин, оно, метаданные);
            вернуть метаданные;
          };
          get3 = функция(оно) {
            return wmget(store, it) || {};
          };
          имеет = функция (оно) {
            вернуть wmhas(store, it);
          };
        } еще {
          СОСТОЯНИЕ = общий ключ («состояние»);
          HiddenKeys[STATE] = правда;
          set3 = функция (оно, метаданные) {
            если (hasOwn(оно, ГОСУДАРСТВО))
              выбросить новый TypeError2(OBJECT_ALREADY_INITIALIZED);
            метаданные.фасад = это;
            createNonEnumerableProperty (оно, СОСТОЯНИЕ, метаданные);
            вернуть метаданные;
          };
          get3 = функция(оно) {
            return hasOwn(it, STATE) ? это[ГОСУДАРСТВО] : {};
          };
          имеет = функция (оно) {
            return hasOwn(it, STATE);
          };
        }
        магазин вар;
        вар wmget;
        вар wmhas;
        вар wmset;
        вар СОСТОЯНИЕ;
        модуль.экспорт = {
          набор: набор3,
          получить: получить3,
          имеет,
          обеспечивать соблюдение,
          геттерДля
        };
      }
    });
  
    // node_modules/core-js/internals/имя-функции.js
    var require_function_name = __commonJS({
      "node_modules/core-js/internals/имя-функции.js"(экспорт, модуль) {
        вар ДЕСКРИПТОРЫ = require_descriptors();
        вар hasOwn = require_has_own_property();
        вар FunctionPrototype = Function.prototype;
        var getDescriptor = ОПИСАНИЯ && Object.getOwnPropertyDescriptor;
        var EXISTS = hasOwn(FunctionPrototype, "имя");
        var PROPER = EXISTS && function Something() {
        }.name === "что-то";
        var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
        модуль.экспорт = {
          СУЩЕСТВУЕТ,
          ПРАВИЛЬНЫЙ,
          КОНФИГУРИРУЕМЫЙ
        };
      }
    });
  
    // node_modules/core-js/internals/redefine.js
    вар require_redefine = __commonJS({
      "node_modules/core-js/internals/redefine.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар isCallable = require_is_callable();
        вар hasOwn = require_has_own_property();
        вар createNonEnumerableProperty = require_create_non_enumerable_property();
        вар setGlobal = require_set_global();
        вар InspectSource = require_inspect_source();
        вар InternalStateModule = require_internal_state();
        вар CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
        вар getInternalState = InternalStateModule.get;
        вар EnforceInternalState = InternalStateModule.enforce;
        вар ШАБЛОН = String(String).split("String");
        (module.exports = function(O, ключ, значение, параметры) {
          вар небезопасно = параметры? !!options.unsafe: ложь;
          вар простой = варианты? !!options.enumerable: ложь;
          вар noTargetGet = параметры? !!options.noTargetGet: ложь;
          var name = options && options.name !== void 0 ? options.name: ключ;
          состояние вар;
          если (isCallable(значение)) {
            if (String(name).slice(0, 7) === "Symbol() {
              name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
            }
            if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
              createNonEnumerableProperty(значение, «имя», имя);
            }
            состояние = EnforceInternalState (значение);
            если (!state.source) {
              state.source = TEMPLATE.join(typeof name == "string" ? name: "");
            }
          }
          если (O === global2) {
            если (просто)
              O[ключ] = значение;
            еще
              setGlobal (ключ, значение);
            возвращаться;
          } иначе если (!unsafe) {
            удалить O[ключ];
          } else if (!noTargetGet && O[key]) {
            простой = правда;
          }
          если (просто)
            O[ключ] = значение;
          еще
            createNonEnumerableProperty(O, ключ, значение);
        })(Function.prototype, "toString", function toString() {
          return isCallable(this) && getInternalState(this).source || проверить источник (это);
        });
      }
    });
  
    // node_modules/core-js/internals/to-integer-or-infinity.js
    var require_to_integer_or_infinity = __commonJS({
      "node_modules/core-js/internals/to-integer-or-infinity.js"(экспорт, модуль) {
        вар ячейка = Math.ceil;
        вар пол = Math.floor;
        модуль.экспорт = функция(аргумент) {
          число вар = +аргумент;
          вернуть число !== число || число === 0 ? 0 : (число > 0 ? этаж: потолок)(число);
        };
      }
    });
  
    // node_modules/core-js/internals/to-absolute-index.js
    var require_to_absolute_index = __commonJS({
      "node_modules/core-js/internals/to-absolute-index.js"(экспорт, модуль) {
        вар toIntegerOrInfinity = require_to_integer_or_infinity();
        вар Макс = Math.max;
        вар мин = Math.min;
        модуль.экспорт = функция(индекс, длина) {
          var целое число = toIntegerOrInfinity (индекс);
          вернуть целое число <0? Макс(целое число + длина, 0): мин(целое число, длина);
        };
      }
    });
  
    // node_modules/core-js/internals/to-length.js
    вар require_to_length = __commonJS({
      "node_modules/core-js/internals/to-length.js"(экспорт, модуль) {
        вар toIntegerOrInfinity = require_to_integer_or_infinity();
        вар мин = Math.min;
        модуль.экспорт = функция(аргумент) {
          возвращаемый аргумент > 0? мин(toIntegerOrInfinity(аргумент), 9007199254740991) : 0;
        };
      }
    });
  
    // node_modules/core-js/internals/length-of-array-like.js
    var require_length_of_array_like = __commonJS({
      "node_modules/core-js/internals/length-of-array-like.js"(экспорт, модуль) {
        вар toLength = require_to_length();
        модуль.экспорт = функция (объект) {
          вернуться к длине (obj.length);
        };
      }
    });
  
    // node_modules/core-js/internals/array-includes.js
    var require_array_includes = __commonJS({
      "node_modules/core-js/internals/array-includes.js"(экспорт, модуль) {
        вар toIndexedObject = require_to_indexed_object();
        вар toAbsoluteIndex = require_to_absolute_index();
        вар lengthOfArrayLike = require_length_of_array_like();
        вар createMethod = функция (IS_INCLUDES) {
          return function($this, el, fromIndex) {
            вар O = toIndexedObject($this);
            длина вар = lengthOfArrayLike (O);
            индекс вар = toAbsoluteIndex (fromIndex, длина);
            значение переменной;
            если (IS_INCLUDES && el != el)
              while (длина > индекс) {
                значение = O[индекс++];
                если (значение != значение)
                  вернуть истину;
              }
            еще
              for (; длина > индекс; индекс++) {
                if ((IS_INCLUDES || индекс в O) && O[index] === el)
                  вернуть IS_INCLUDES || индекс || 0;
              }
            вернуть !IS_INCLUDES && -1;
          };
        };
        модуль.экспорт = {
          // Метод Array.prototype.includes
          // https://tc39.es/ecma262/#sec-array.prototype.includes
          включает: createMethod(true),
          // Метод Array.prototype.indexOf
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod (ложь)
        };
      }
    });
  
    // node_modules/core-js/internals/object-keys-internal.js
    вар require_object_keys_internal = __commonJS({
      "node_modules/core-js/internals/object-keys-internal.js"(экспорт, модуль) {
        вар uncurryThis = require_function_uncurry_this();
        вар hasOwn = require_has_own_property();
        вар toIndexedObject = require_to_indexed_object();
        вар indexOf = require_array_includes().indexOf;
        вар скрытыеКейс = require_hidden_keys();
        вар push = uncurryThis([].push);
        модуль.экспорт = функция(объект, имена) {
          вар O = toIndexedObject(объект);
          вар я = 0;
          вар результат = [];
          ключ вар;
          для (клавиша О)
            !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
          в то время как (names.length > i)
            if (hasOwn(O, key = name[i++])) {
              ~indexOf(результат, ключ) || push(результат, ключ);
            }
          вернуть результат;
        };
      }
    });
  
    // node_modules/core-js/internals/enum-bug-keys.js
    вар require_enum_bug_keys = __commonJS({
      "node_modules/core-js/internals/enum-bug-keys.js"(экспорт, модуль) {
        модуль.экспорт = [
          "конструктор",
          "имеетсобственность",
          "isPrototypeOf",
          "свойствоIsEnumerable",
          "toLocaleString",
          "нанизывать",
          "значение"
        ];
      }
    });
  
    // node_modules/core-js/internals/object-get-own-property-names.js
    var require_object_get_own_property_names = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-names.js"(экспорт) {
        вар InternalObjectKeys = require_object_keys_internal();
        вар enumBugKeys = require_enum_bug_keys();
        varhiddenKeys = enumBugKeys.concat("длина", "прототип");
        экспорт.f = Object.getOwnPropertyNames || функция getOwnPropertyNames(O) {
          вернуть InternalObjectKeys (O, HiddenKeys);
        };
      }
    });
  
    // node_modules/core-js/internals/object-get-own-property-symbols.js
    var require_object_get_own_property_symbols = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-symbols.js"(экспорт) {
        экспорт.f = Object.getOwnPropertySymbols;
      }
    });
  
    // node_modules/core-js/internals/own-keys.js
    var require_own_keys = __commonJS({
      "node_modules/core-js/internals/own-keys.js"(экспорт, модуль) {
        вар getBuiltIn = require_get_built_in();
        вар uncurryThis = require_function_uncurry_this();
        вар getOwnPropertyNamesModule = require_object_get_own_property_names();
        вар getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
        вар anObject = require_an_object();
        вар concat = uncurryThis([].concat);
        Module.exports = getBuiltIn("Reflect", "ownKeys") || функция ownKeys(it) {
          ключи var = getOwnPropertyNamesModule.f(anObject(it));
          вар getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          вернуть getOwnPropertySymbols? concat(keys, getOwnPropertySymbols(it)) : ключи;
        };
      }
    });
  
    // node_modules/core-js/internals/copy-constructor-properties.js
    var require_copy_constructor_properties = __commonJS({
      "node_modules/core-js/internals/copy-constructor-properties.js"(экспорт, модуль) {
        вар hasOwn = require_has_own_property();
        вар ownKeys = require_own_keys();
        вар getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
        вар definePropertyModule = require_object_define_property();
        модуль.экспорт = функция(цель, источник) {
          вар ключи = ownKeys (источник);
          вар defineProperty = definePropertyModule.f;
          вар getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          for (var i = 0; i <keys.length; i++) {
            вар ключ = ключи [я];
            if (!hasOwn(цель, ключ))
              defineProperty(цель, ключ, getOwnPropertyDescriptor(источник, ключ));
          }
        };
      }
    });
  
    // node_modules/core-js/internals/is-forced.js
    вар require_is_forced = __commonJS({
      "node_modules/core-js/internals/is-forced.js"(экспорт, модуль) {
        вар терпит неудачу = require_fails();
        вар isCallable = require_is_callable();
        замена var = /#|\.prototype\./;
        var isForced = функция (функция, обнаружение) {
          значение var = данные [нормализовать (функция)];
          возвращаемое значение == POLYFILL ? правда: значение == РОДНОЙ? ложь: isCallable (обнаружение)? сбой(обнаружение): !!обнаружение;
        };
        вар нормализовать = isForced.normalize = функция (строка) {
          return String(строка).replace(замена, ".").toLowerCase();
        };
        вар данные = isForced.data = {};
        вар NATIVE = isForced.NATIVE = "N";
        вар POLYFILL = isForced.POLYFILL = "P";
        модуль.экспорт = isForced;
      }
    });
  
    // node_modules/core-js/internals/export.js
    вар require_export = __commonJS({
      "node_modules/core-js/internals/export.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
        вар createNonEnumerableProperty = require_create_non_enumerable_property();
        вар переопределить = require_redefine();
        вар setGlobal = require_set_global();
        вар copyConstructorProperties = require_copy_constructor_properties();
        вар isForced = require_is_forced();
        модуль.exports = функция (опции, источник) {
          вар ЦЕЛЬ = options.target;
          вар ГЛОБАЛЬНЫЙ = options.global;
          вар STATIC = options.stat;
          вар FORCED, цель, ключ, targetProperty, sourceProperty, дескриптор;
          если (ГЛОБАЛЬНЫЙ) {
            цель = глобальный2;
          } иначе, если (СТАТИЧЕСКОЕ) {
            цель = global2[ЦЕЛЬ] || setGlobal(TARGET, {});
          } еще {
            цель = (global2[TARGET] || {}).prototype;
          }
          если (цель)
            for (ключ в исходном коде) {
              sourceProperty = источник [ключ];
              если (options.noTargetGet) {
                дескриптор = getOwnPropertyDescriptor (цель, ключ);
                targetProperty = дескриптор && descriptor.value;
              } еще
                targetProperty = цель [ключ];
              FORCED = isForced(GLOBAL ? key: TARGET + (STATIC ? "." : "#") + key, options.forced);
              if (!FORCED && targetProperty !== void 0) {
                if (typeof sourceProperty == typeof targetProperty)
                  продолжать;
                copyConstructorProperties(sourceProperty, targetProperty);
              }
              if (options.sham || targetProperty && targetProperty.sham) {
                createNonEnumerableProperty (sourceProperty, «фикция», правда);
              }
              переопределить (цель, ключ, исходное свойство, параметры);
            }
        };
      }
    });
  
    // node_modules/core-js/internals/object-keys.js
    вар require_object_keys = __commonJS({
      "node_modules/core-js/internals/object-keys.js"(экспорт, модуль) {
        вар InternalObjectKeys = require_object_keys_internal();
        вар enumBugKeys = require_enum_bug_keys();
        модуль.экспорт = Объект.ключи || функциональные клавиши (O) {
          вернуть InternalObjectKeys (O, enumBugKeys);
        };
      }
    });
  
    // node_modules/core-js/internals/object-define-properties.js
    var require_object_define_properties = __commonJS({
      "node_modules/core-js/internals/object-define-properties.js"(экспорт, модуль) {
        вар ДЕСКРИПТОРЫ = require_descriptors();
        вар definePropertyModule = require_object_define_property();
        вар anObject = require_an_object();
        вар toIndexedObject = require_to_indexed_object();
        вар objectKeys = require_object_keys();
        модуль.экспорт = ДЕСКРИПТОРЫ ? Object.defineProperties : функция defineProperties(O, Properties) {
          объект(О);
          вар реквизит = toIndexedObject (Свойства);
          вар ключи = objectKeys (Свойства);
          длина вар = key.length;
          индекс вар = 0;
          ключ вар;
          в то время как (длина > индекс)
            definePropertyModule.f(O, ключ = ключи[индекс++], реквизит[ключ]);
          вернуть О;
        };
      }
    });
  
    // node_modules/core-js/internals/html.js
    вар require_html = __commonJS({
      "node_modules/core-js/internals/html.js"(экспорт, модуль) {
        вар getBuiltIn = require_get_built_in();
        модуль.экспорт = getBuiltIn("документ", "documentElement");
      }
    });
  
    // node_modules/core-js/internals/object-create.js
    вар require_object_create = __commonJS({
      "node_modules/core-js/internals/object-create.js"(экспорт, модуль) {
        вар anObject = require_an_object();
        вар defineProperties = require_object_define_properties();
        вар enumBugKeys = require_enum_bug_keys();
        вар скрытыеКейс = require_hidden_keys();
        вар HTML = require_html();
        вар documentCreateElement = require_document_create_element();
        вар SharedKey = require_shared_key();
        вар GT = ">";
        вар LT = "<";
        вар ПРОТОТИП = "прототип";
        вар СКРИПТ = "скрипт";
        вар IE_PROTO = общий ключ («IE_PROTO»);
        вар EmptyConstructor = функция() {
        };
        вар scriptTag = функция (содержание) {
          вернуть LT + SCRIPT + GT + контент + LT + "/" + SCRIPT + GT;
        };
        вар NullProtoObjectViaActiveX = функция (activeXDocument2) {
          activeXDocument2.write(scriptTag(""));
          активныйXDocument2.закрыть();
          вар темп = activeXDocument2.parentWindow.Object;
          активныйXDocument2 = ноль;
          температура возврата;
        };
        вар NullProtoObjectViaIFrame = функция() {
          вар iframe = documentCreateElement("iframe");
          var JS = "java" + СКРИПТ + ":";
          вар iframeDocument;
          iframe.style.display = «нет»;
          html.appendChild(iframe);
          iframe.src = Строка (JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag("document.F=Object"));
          iframeDocument.close();
          вернуть iframeDocument.F;
        };
        вар активныйXDocument;
        вар NullProtoObject = функция() {
          пытаться {
            activeXDocument = новый ActiveXObject("htmlfile");
          } поймать (ошибка) {
          }
          NullProtoObject = тип документа! = «не определено»? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument): NullProtoObjectViaIFrame(): NullProtoObjectViaActiveX(activeXDocument);
          длина вар = enumBugKeys.length;
          пока (длина--)
            удалить NullProtoObject[PROTOTYPE][enumBugKeys[длина]];
          вернуть NullProtoObject();
        };
        скрытыеКейс[IE_PROTO] = правда;
        модуль.экспорт = Object.create || функция create(O, Properties) {
          вар результат;
          если (O !== ноль) {
            EmptyConstructor[PROTOTYPE] = anObject(O);
            результат = новый EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            результат [IE_PROTO] = О;
          } еще
            результат = NullProtoObject();
          вернуть свойства === void 0? результат: defineProperties(результат, Свойства);
        };
      }
    });
  
    // node_modules/core-js/internals/add-to-unscopables.js
    var require_add_to_unscopables = __commonJS({
      "node_modules/core-js/internals/add-to-unscopables.js"(экспорт, модуль) {
        вар wellKnownSymbol = require_well_known_symbol();
        вар create = require_object_create();
        вар definePropertyModule = require_object_define_property();
        var UNSCOPABLES = wellKnownSymbol("unscopables");
        вар ArrayPrototype = Array.prototype;
        if (ArrayPrototype[UNSCOPABLES] == void 0) {
          definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
            настраивается: правда,
            значение: создать (ноль)
          });
        }
        модуль.экспорт = функция (ключ) {
          ArrayPrototype[UNSCOPABLES][ключ] = true;
        };
      }
    });
  
    // node_modules/core-js/modules/es.array.includes.js
    var require_es_array_includes = __commonJS({
      "node_modules/core-js/modules/es.array.includes.js"() {
        «используйте строгий»;
        вар $ = require_export();
        вар $includes = require_array_includes().includes;
        вар addToUnscopables = require_add_to_unscopables();
        $({ цель: "Массив", прототип: true }, {
          включает: функция включает(el) {
            return $includes(this, el, аргументы.длина > 1? аргументы[1]: void 0);
          }
        });
        addToUnscopables("включает");
      }
    });
  
    // node_modules/core-js/internals/entry-unbind.js
    var require_entry_unbind = __commonJS({
      "node_modules/core-js/internals/entry-unbind.js"(экспорт, модуль) {
        вар global2 = require_global();
        вар uncurryThis = require_function_uncurry_this();
        модуль.экспорт = функция(КОНСТРУКТОР, МЕТОД) {
          return uncurryThis(global2[CONSTRUCTOR].prototype[МЕТОД]);
        };
      }
    });
  
    // node_modules/core-js/es/array/includes.js
    вар require_includes = __commonJS({
      "node_modules/core-js/es/array/includes.js"(экспорт, модуль) {
        require_es_array_includes();
        вар входUnbind = require_entry_unbind ();
        модуль.экспорт = входUnbind("Массив", "включает");
      }
    });
  
    // node_modules/core-js/stable/array/includes.js
    вар require_includes2 = __commonJS({
      "node_modules/core-js/stable/array/includes.js"(экспорт, модуль) {
        родительский вар = require_includes();
        модуль.экспорт = родительский;
      }
    });
  
    // node_modules/core-js/features/array/includes.js
    var require_includes3 = __commonJS({
      "node_modules/core-js/features/array/includes.js"(экспорт, модуль) {
        родительский вар = require_includes2 ();
        модуль.экспорт = родительский;
      }
    });
  
    // node_modules/lodash/_freeGlobal.js
    var require_freeGlobal = __commonJS({
      "node_modules/lodash/_freeGlobal.js"(экспорт, модуль) {
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        модуль.экспорт = freeGlobal;
      }
    });
  
    // node_modules/lodash/_root.js
    вар require_root = __commonJS({
      "node_modules/lodash/_root.js"(экспорт, модуль) {
        вар freeGlobal = require_freeGlobal();
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        вар корень = freeGlobal || свободныйЯ || Функция("Верните это")();
        модуль.экспорт = корень;
      }
    });
  
    // node_modules/lodash/_Symbol.js
    вар require_Symbol = __commonJS({
      "node_modules/lodash/_Symbol.js"(экспорт, модуль) {
        вар корень = require_root();
        вар Символ2 = root.Symbol;
        модуль.экспорт = Символ2;
      }
    });
  
    // node_modules/lodash/_getRawTag.js
    вар require_getRawTag = __commonJS({
      "node_modules/lodash/_getRawTag.js"(экспорт, модуль) {
        вар Символ2 = require_Symbol();
        вар objectProto = Object.prototype;
        вар hasOwnProperty2 = objectProto.hasOwnProperty;
        вар NativeObjectToString = objectProto.toString;
        вар symToStringTag = Символ2? Символ2.toStringTag: пустота 0;
        функция getRawTag(значение) {
          var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
          пытаться {
            значение [symToStringTag] = пустота 0;
            вар без маски = правда;
          } поймать (е) {
          }
          результат вар = NativeObjectToString.call (значение);
          если (без маски) {
            если (isOwn) {
              значение [symToStringTag] = тег;
            } еще {
              удалить значение [symToStringTag];
            }
          }
          вернуть результат;
        }
        модуль.экспорт = getRawTag;
      }
    });
  
    // node_modules/lodash/_objectToString.js
    вар require_objectToString = __commonJS({
      "node_modules/lodash/_objectToString.js"(экспорт, модуль) {
        вар objectProto = Object.prototype;
        вар NativeObjectToString = objectProto.toString;
        функция objectToString(значение) {
          вернуть роднойОбъектToString.call(значение);
        }
        модуль.экспорт = objectToString;
      }
    });
  
    // node_modules/lodash/_baseGetTag.js
    вар require_baseGetTag = __commonJS({
      "node_modules/lodash/_baseGetTag.js"(экспорт, модуль) {
        вар Символ2 = require_Symbol();
        вар getRawTag = require_getRawTag();
        вар objectToString = require_objectToString();
        var nullTag = "[объект Null]";
        var undefinedTag = "[объект не определен]";
        вар symToStringTag = Символ2? Символ2.toStringTag: пустота 0;
        функция baseGetTag(значение) {
          если (значение == ноль) {
            возвращаемое значение === void 0? неопределенный тег: нулевой тег;
          }
          вернуть symToStringTag && symToStringTag в Object (значение)? getRawTag (значение): objectToString (значение);
        }
        модуль.экспорт = baseGetTag;
      }
    });
  
    // node_modules/lodash/_overArg.js
    вар require_overArg = __commonJS({
      "node_modules/lodash/_overArg.js"(экспорт, модуль) {
        функция overArg (функ, преобразование) {
          возвращаемая функция (аргумент) {
            return func(transform(arg));
          };
        }
        модуль.экспорт = overArg;
      }
    });
  
    // node_modules/lodash/_getPrototype.js
    вар require_getPrototype = __commonJS({
      "node_modules/lodash/_getPrototype.js"(экспорт, модуль) {
        вар overArg = require_overArg();
        вар getPrototype = overArg(Object.getPrototypeOf, Object);
        модуль.экспорт = getPrototype;
      }
    });
  
    // node_modules/lodash/isObjectLike.js
    вар require_isObjectLike = __commonJS({
      "node_modules/lodash/isObjectLike.js"(экспорт, модуль) {
        функция isObjectLike(значение) {
          возвращаемое значение != null && typeof value == "object";
        }
        модуль.экспорт = isObjectLike;
      }
    });
  
    // node_modules/lodash/isPlainObject.js
    вар require_isPlainObject = __commonJS({
      "node_modules/lodash/isPlainObject.js"(экспорт, модуль) {
        вар baseGetTag = require_baseGetTag();
        вар getPrototype = require_getPrototype();
        вар isObjectLike = require_isObjectLike();
        var objectTag = "[Объект объекта]";
        вар funcProto = Function.prototype;
        вар objectProto = Object.prototype;
        вар funcToString = funcProto.toString;
        вар hasOwnProperty2 = objectProto.hasOwnProperty;
        вар objectCtorString = funcToString.call(Объект);
        функция isPlainObject(значение) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            вернуть ложь;
          }
          вар прото = getPrototype (значение);
          если (прото === ноль) {
            вернуть истину;
          }
          var Ctor = hasOwnProperty2.call(proto, "конструктор") && proto.constructor;
          return typeof Ctor == "function" && Ctor экземпляр Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        модуль.экспорт = isPlainObject;
      }
    });
  
    // node_modules/symbol-observable/lib/ponyfill.js
    вар require_ponyfill = __commonJS({
      "node_modules/symbol-observable/lib/ponyfill.js"(экспорт) {
        «используйте строгий»;
        Object.defineProperty(exports, "__esModule", {
          значение: правда
        });
        экспорты["по умолчанию"] = символObservablePonyfill;
        функция символObservablePonyfill (корень) {
          вар результат;
          вар _Symbol = root.Symbol;
          if (typeof _Symbol === "функция") {
            если (_Symbol.observable) {
              результат = _Symbol.observable;
            } еще {
              результат = _Symbol("наблюдаемый");
              _Symbol.observable = результат;
            }
          } еще {
            result = "@@observable";
          }
          вернуть результат;
        }
      }
    });
  
    // node_modules/symbol-observable/lib/index.js
    вар require_lib = __commonJS({
      "node_modules/symbol-observable/lib/index.js"(экспорт, модуль) {
        «используйте строгий»;
        Object.defineProperty(exports, "__esModule", {
          значение: правда
        });
        вар _ponyfill = require_ponyfill();
        вар _ponyfill2 = _interopRequireDefault(_ponyfill);
        функция _interopRequireDefault(obj) {
          вернуть obj && obj.__esModule? объект : { "по умолчанию": объект };
        }
        корень вар;
        if (typeof self !== "не определено") {
          корень = я;
        } else if (typeof window !== "не определено") {
          корень = окно;
        } else if (typeof global !== "не определено") {
          корень = глобальный;
        } else if (модуль typeof !== "не определено") {
          корень = модуль;
        } еще {
          root = Function("Верните это")();
        }
        var result = (0, _ponyfill2["default"])(корень);
        экспорт["по умолчанию"] = результат;
      }
    });
  
    // node_modules/redux/lib/createStore.js
    вар require_createStore = __commonJS({
      "node_modules/redux/lib/createStore.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports.ActionTypes = void 0;
        exports["default"] = createStore;
        var _isPlainObject = require_isPlainObject();
        var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
        var _symbolObservable = require_lib();
        var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        var ActionTypes = exports.ActionTypes = {
          INIT: "@@redux/INIT"
        };
        function createStore(reducer, preloadedState, enhancer) {
          var _ref2;
          if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
            enhancer = preloadedState;
            preloadedState = void 0;
          }
          if (typeof enhancer !== "undefined") {
            if (typeof enhancer !== "function") {
              throw new Error("Expected the enhancer to be a function.");
            }
            return enhancer(createStore)(reducer, preloadedState);
          }
          if (typeof reducer !== "function") {
            throw new Error("Expected the reducer to be a function.");
          }
          var currentReducer = reducer;
          var currentState = preloadedState;
          var currentListeners = [];
          var nextListeners = currentListeners;
          var isDispatching = false;
          function ensureCanMutateNextListeners() {
            if (nextListeners === currentListeners) {
              nextListeners = currentListeners.slice();
            }
          }
          function getState() {
            return currentState;
          }
          function subscribe(listener) {
            if (typeof listener !== "function") {
              throw new Error("Expected listener to be a function.");
            }
            var isSubscribed = true;
            ensureCanMutateNextListeners();
            nextListeners.push(listener);
            return function unsubscribe() {
              if (!isSubscribed) {
                return;
              }
              isSubscribed = false;
              ensureCanMutateNextListeners();
              var index = nextListeners.indexOf(listener);
              nextListeners.splice(index, 1);
            };
          }
          function dispatch(action) {
            if (!(0, _isPlainObject2["default"])(action)) {
              throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            }
            if (typeof action.type === "undefined") {
              throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            }
            if (isDispatching) {
              throw new Error("Reducers may not dispatch actions.");
            }
            try {
              isDispatching = true;
              currentState = currentReducer(currentState, action);
            } finally {
              isDispatching = false;
            }
            var listeners = currentListeners = nextListeners;
            for (var i = 0; i < listeners.length; i++) {
              listeners[i]();
            }
            return action;
          }
          function replaceReducer(nextReducer) {
            if (typeof nextReducer !== "function") {
              throw new Error("Expected the nextReducer to be a function.");
            }
            currentReducer = nextReducer;
            dispatch({ type: ActionTypes.INIT });
          }
          function observable() {
            var _ref;
            var outerSubscribe = subscribe;
            return _ref = {
              /**
               * The minimal observable subscription method.
               * @param {Object} observer Any object that can be used as an observer.
               * The observer object should have a `next` method.
               * @returns {subscription} An object with an `unsubscribe` method that can
               * be used to unsubscribe the observable from the store, and prevent further
               * emission of values from the observable.
               */
              subscribe: function subscribe2(observer) {
                if (typeof observer !== "object") {
                  throw new TypeError("Expected the observer to be an object.");
                }
                function observeState() {
                  if (observer.next) {
                    observer.next(getState());
                  }
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return { unsubscribe };
              }
            }, _ref[_symbolObservable2["default"]] = function() {
              return this;
            }, _ref;
          }
          dispatch({ type: ActionTypes.INIT });
          return _ref2 = {
            dispatch,
            subscribe,
            getState,
            replaceReducer
          }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
        }
      }
    });
  
    // node_modules/redux/lib/utils/warning.js
    var require_warning = __commonJS({
      "node_modules/redux/lib/utils/warning.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = warning;
        function warning(message) {
          if (typeof console !== "undefined" && typeof console.error === "function") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (e) {
          }
        }
      }
    });
  
    // node_modules/redux/lib/combineReducers.js
    var require_combineReducers = __commonJS({
      "node_modules/redux/lib/combineReducers.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = combineReducers2;
        var _createStore = require_createStore();
        var _isPlainObject = require_isPlainObject();
        var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
        var _warning = require_warning();
        var _warning2 = _interopRequireDefault(_warning);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function getUndefinedStateErrorMessage(key, action) {
          var actionType = action && action.type;
          var actionName = actionType && '"' + actionType.toString() + '"' || "an action";
          return "Given action " + actionName + ', reducer "' + key + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
        }
        function assertReducerSanity(reducers) {
          Object.keys(reducers).forEach(function(key) {
            var reducer = reducers[key];
            var initialState4 = reducer(void 0, { type: _createStore.ActionTypes.INIT });
            if (typeof initialState4 === "undefined") {
              throw new Error('Reducer "' + key + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
            }
            var type = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
            if (typeof reducer(void 0, { type }) === "undefined") {
              throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
            }
          });
        }
        function combineReducers2(reducers) {
          var reducerKeys = Object.keys(reducers);
          var finalReducers = {};
          for (var i = 0; i < reducerKeys.length; i++) {
            var key = reducerKeys[i];
            if (false) {
              if (typeof reducers[key] === "undefined") {
                (0, _warning2["default"])('No reducer provided for key "' + key + '"');
              }
            }
            if (typeof reducers[key] === "function") {
              finalReducers[key] = reducers[key];
            }
          }
          var finalReducerKeys = Object.keys(finalReducers);
          if (false) {
            var unexpectedKeyCache = {};
          }
          var sanityError;
          try {
            assertReducerSanity(finalReducers);
          } catch (e) {
            sanityError = e;
          }
          return function combination() {
            var state = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
            var action = arguments[1];
            if (sanityError) {
              throw sanityError;
            }
            if (false) {
              var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
              if (warningMessage) {
                (0, _warning2["default"])(warningMessage);
              }
            }
            var hasChanged = false;
            var nextState = {};
            for (var i2 = 0; i2 < finalReducerKeys.length; i2++) {
              var key2 = finalReducerKeys[i2];
              var reducer = finalReducers[key2];
              var previousStateForKey = state[key2];
              var nextStateForKey = reducer(previousStateForKey, action);
              if (typeof nextStateForKey === "undefined") {
                var errorMessage = getUndefinedStateErrorMessage(key2, action);
                throw new Error(errorMessage);
              }
              nextState[key2] = nextStateForKey;
              hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
            }
            return hasChanged ? nextState : state;
          };
        }
      }
    });
  
    // node_modules/redux/lib/bindActionCreators.js
    var require_bindActionCreators = __commonJS({
      "node_modules/redux/lib/bindActionCreators.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = bindActionCreators;
        function bindActionCreator(actionCreator, dispatch) {
          return function() {
            return dispatch(actionCreator.apply(void 0, arguments));
          };
        }
        function bindActionCreators(actionCreators, dispatch) {
          if (typeof actionCreators === "function") {
            return bindActionCreator(actionCreators, dispatch);
          }
          if (typeof actionCreators !== "object" || actionCreators === null) {
            throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? "null" : typeof actionCreators) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
          }
          var keys = Object.keys(actionCreators);
          var boundActionCreators = {};
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var actionCreator = actionCreators[key];
            if (typeof actionCreator === "function") {
              boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
            }
          }
          return boundActionCreators;
        }
      }
    });
  
    // node_modules/redux/lib/compose.js
    var require_compose = __commonJS({
      "node_modules/redux/lib/compose.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports["default"] = compose;
        function compose() {
          for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
            funcs[_key] = arguments[_key];
          }
          if (funcs.length === 0) {
            return function(arg) {
              return arg;
            };
          }
          if (funcs.length === 1) {
            return funcs[0];
          }
          var last = funcs[funcs.length - 1];
          var rest = funcs.slice(0, -1);
          return function() {
            return rest.reduceRight(function(composed, f) {
              return f(composed);
            }, last.apply(void 0, arguments));
          };
        }
      }
    });
  
    // node_modules/redux/lib/applyMiddleware.js
    var require_applyMiddleware = __commonJS({
      "node_modules/redux/lib/applyMiddleware.js"(exports) {
        "use strict";
        exports.__esModule = true;
        var _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        exports["default"] = applyMiddleware;
        var _compose = require_compose();
        var _compose2 = _interopRequireDefault(_compose);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function applyMiddleware() {
          for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
            middlewares[_key] = arguments[_key];
          }
          return function(createStore) {
            return function(reducer, preloadedState, enhancer) {
              var store = createStore(reducer, preloadedState, enhancer);
              var _dispatch = store.dispatch;
              var chain = [];
              var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch(action) {
                  return _dispatch(action);
                }
              };
              chain = middlewares.map(function(middleware) {
                return middleware(middlewareAPI);
              });
              _dispatch = _compose2["default"].apply(void 0, chain)(store.dispatch);
              return _extends({}, store, {
                dispatch: _dispatch
              });
            };
          };
        }
      }
    });
  
    // node_modules/redux/lib/index.js
    var require_lib2 = __commonJS({
      "node_modules/redux/lib/index.js"(exports) {
        "use strict";
        exports.__esModule = true;
        exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = void 0;
        var _createStore = require_createStore();
        var _createStore2 = _interopRequireDefault(_createStore);
        var _combineReducers = require_combineReducers();
        var _combineReducers2 = _interopRequireDefault(_combineReducers);
        var _bindActionCreators = require_bindActionCreators();
        var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
        var _applyMiddleware = require_applyMiddleware();
        var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
        var _compose = require_compose();
        var _compose2 = _interopRequireDefault(_compose);
        var _warning = require_warning();
        var _warning2 = _interopRequireDefault(_warning);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        if (false) {
          (0, _warning2["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");
        }
        exports.createStore = _createStore2["default"];
        exports.combineReducers = _combineReducers2["default"];
        exports.bindActionCreators = _bindActionCreators2["default"];
        exports.applyMiddleware = _applyMiddleware2["default"];
        exports.compose = _compose2["default"];
      }
    });
  
    // packages/systems/ix2/shared-constants/trigger-events.ts
    var EventTypeConsts, EventAppliesTo, EventBasedOn, EventContinuousMouseAxes, EventLimitAffectedElements, QuickEffectIds, QuickEffectDirectionConsts;
    var init_trigger_events = __esm({
      "packages/systems/ix2/shared-constants/trigger-events.ts"() {
        "use strict";
        EventTypeConsts = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL"
        };
        EventAppliesTo = {
          ELEMENT: "ELEMENT",
          CLASS: "CLASS",
          PAGE: "PAGE"
        };
        EventBasedOn = {
          ELEMENT: "ELEMENT",
          VIEWPORT: "VIEWPORT"
        };
        EventContinuousMouseAxes = {
          X_AXIS: "X_AXIS",
          Y_AXIS: "Y_AXIS"
        };
        EventLimitAffectedElements = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        };
        QuickEffectIds = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        };
        QuickEffectDirectionConsts = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        };
      }
    });
  
    // packages/systems/ix2/shared-constants/animation-actions.ts
    var ActionTypeConsts, ActionAppliesTo;
    var init_animation_actions = __esm({
      "packages/systems/ix2/shared-constants/animation-actions.ts"() {
        "use strict";
        ActionTypeConsts = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          // TODO: Clean these up below because they're not used at this time
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        };
        ActionAppliesTo = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        };
      }
    });
  
    // packages/systems/ix2/shared-constants/trigger-interactions.ts
    var InteractionTypeConsts;
    var init_trigger_interactions = __esm({
      "packages/systems/ix2/shared-constants/trigger-interactions.ts"() {
        "use strict";
        InteractionTypeConsts = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION"
        };
      }
    });
  
    // packages/systems/ix2/shared-constants/reduced-motion.ts
    var TRANSFORM_MOVE, TRANSFORM_SCALE, TRANSFORM_ROTATE, TRANSFORM_SKEW, STYLE_SIZE, STYLE_FILTER, STYLE_FONT_VARIATION, ReducedMotionTypes;
    var init_reduced_motion = __esm({
      "packages/systems/ix2/shared-constants/reduced-motion.ts"() {
        "use strict";
        init_animation_actions();
        ({
          TRANSFORM_MOVE,
          TRANSFORM_SCALE,
          TRANSFORM_ROTATE,
          TRANSFORM_SKEW,
          STYLE_SIZE,
          STYLE_FILTER,
          STYLE_FONT_VARIATION
        } = ActionTypeConsts);
        ReducedMotionTypes = {
          [TRANSFORM_MOVE]: true,
          [TRANSFORM_SCALE]: true,
          [TRANSFORM_ROTATE]: true,
          [TRANSFORM_SKEW]: true,
          [STYLE_SIZE]: true,
          [STYLE_FILTER]: true,
          [STYLE_FONT_VARIATION]: true
        };
      }
    });
  
    // packages/systems/ix2/shared-constants/IX2EngineActionTypes.ts
    var IX2EngineActionTypes_exports = {};
    __export(IX2EngineActionTypes_exports, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: () => IX2_ACTION_LIST_PLAYBACK_CHANGED,
      IX2_ANIMATION_FRAME_CHANGED: () => IX2_ANIMATION_FRAME_CHANGED,
      IX2_CLEAR_REQUESTED: () => IX2_CLEAR_REQUESTED,
      IX2_ELEMENT_STATE_CHANGED: () => IX2_ELEMENT_STATE_CHANGED,
      IX2_EVENT_LISTENER_ADDED: () => IX2_EVENT_LISTENER_ADDED,
      IX2_EVENT_STATE_CHANGED: () => IX2_EVENT_STATE_CHANGED,
      IX2_INSTANCE_ADDED: () => IX2_INSTANCE_ADDED,
      IX2_INSTANCE_REMOVED: () => IX2_INSTANCE_REMOVED,
      IX2_INSTANCE_STARTED: () => IX2_INSTANCE_STARTED,
      IX2_MEDIA_QUERIES_DEFINED: () => IX2_MEDIA_QUERIES_DEFINED,
      IX2_PARAMETER_CHANGED: () => IX2_PARAMETER_CHANGED,
      IX2_PLAYBACK_REQUESTED: () => IX2_PLAYBACK_REQUESTED,
      IX2_PREVIEW_REQUESTED: () => IX2_PREVIEW_REQUESTED,
      IX2_RAW_DATA_IMPORTED: () => IX2_RAW_DATA_IMPORTED,
      IX2_SESSION_INITIALIZED: () => IX2_SESSION_INITIALIZED,
      IX2_SESSION_STARTED: () => IX2_SESSION_STARTED,
      IX2_SESSION_STOPPED: () => IX2_SESSION_STOPPED,
      IX2_STOP_REQUESTED: () => IX2_STOP_REQUESTED,
      IX2_TEST_FRAME_RENDERED: () => IX2_TEST_FRAME_RENDERED,
      IX2_VIEWPORT_WIDTH_CHANGED: () => IX2_VIEWPORT_WIDTH_CHANGED
    });
    var IX2_RAW_DATA_IMPORTED, IX2_SESSION_INITIALIZED, IX2_SESSION_STARTED, IX2_SESSION_STOPPED, IX2_PREVIEW_REQUESTED, IX2_PLAYBACK_REQUESTED, IX2_STOP_REQUESTED, IX2_CLEAR_REQUESTED, IX2_EVENT_LISTENER_ADDED, IX2_EVENT_STATE_CHANGED, IX2_ANIMATION_FRAME_CHANGED, IX2_PARAMETER_CHANGED, IX2_INSTANCE_ADDED, IX2_INSTANCE_STARTED, IX2_INSTANCE_REMOVED, IX2_ELEMENT_STATE_CHANGED, IX2_ACTION_LIST_PLAYBACK_CHANGED, IX2_VIEWPORT_WIDTH_CHANGED, IX2_MEDIA_QUERIES_DEFINED, IX2_TEST_FRAME_RENDERED;
    var init_IX2EngineActionTypes = __esm({
      "packages/systems/ix2/shared-constants/IX2EngineActionTypes.ts"() {
        "use strict";
        IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
        IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
        IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
        IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
        IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
        IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
        IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
        IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
        IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
        IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
        IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
        IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
        IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
        IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
        IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
        IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
        IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
        IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
        IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
      }
    });
  
    // packages/systems/ix2/shared-constants/IX2EngineConstants.ts
    var IX2EngineConstants_exports = {};
    __export(IX2EngineConstants_exports, {
      ABSTRACT_NODE: () => ABSTRACT_NODE,
      AUTO: () => AUTO,
      BACKGROUND: () => BACKGROUND,
      BACKGROUND_COLOR: () => BACKGROUND_COLOR,
      BAR_DELIMITER: () => BAR_DELIMITER,
      BORDER_COLOR: () => BORDER_COLOR,
      BOUNDARY_SELECTOR: () => BOUNDARY_SELECTOR,
      CHILDREN: () => CHILDREN,
      COLON_DELIMITER: () => COLON_DELIMITER,
      COLOR: () => COLOR,
      COMMA_DELIMITER: () => COMMA_DELIMITER,
      CONFIG_UNIT: () => CONFIG_UNIT,
      CONFIG_VALUE: () => CONFIG_VALUE,
      CONFIG_X_UNIT: () => CONFIG_X_UNIT,
      CONFIG_X_VALUE: () => CONFIG_X_VALUE,
      CONFIG_Y_UNIT: () => CONFIG_Y_UNIT,
      CONFIG_Y_VALUE: () => CONFIG_Y_VALUE,
      CONFIG_Z_UNIT: () => CONFIG_Z_UNIT,
      CONFIG_Z_VALUE: () => CONFIG_Z_VALUE,
      DISPLAY: () => DISPLAY,
      FILTER: () => FILTER,
      FLEX: () => FLEX,
      FONT_VARIATION_SETTINGS: () => FONT_VARIATION_SETTINGS,
      HEIGHT: () => HEIGHT,
      HTML_ELEMENT: () => HTML_ELEMENT,
      IMMEDIATE_CHILDREN: () => IMMEDIATE_CHILDREN,
      IX2_ID_DELIMITER: () => IX2_ID_DELIMITER,
      OPACITY: () => OPACITY,
      PARENT: () => PARENT,
      PLAIN_OBJECT: () => PLAIN_OBJECT,
      PRESERVE_3D: () => PRESERVE_3D,
      RENDER_GENERAL: () => RENDER_GENERAL,
      RENDER_PLUGIN: () => RENDER_PLUGIN,
      RENDER_STYLE: () => RENDER_STYLE,
      RENDER_TRANSFORM: () => RENDER_TRANSFORM,
      ROTATE_X: () => ROTATE_X,
      ROTATE_Y: () => ROTATE_Y,
      ROTATE_Z: () => ROTATE_Z,
      SCALE_3D: () => SCALE_3D,
      SCALE_X: () => SCALE_X,
      SCALE_Y: () => SCALE_Y,
      SCALE_Z: () => SCALE_Z,
      SIBLINGS: () => SIBLINGS,
      SKEW: () => SKEW,
      SKEW_X: () => SKEW_X,
      SKEW_Y: () => SKEW_Y,
      TRANSFORM: () => TRANSFORM,
      TRANSLATE_3D: () => TRANSLATE_3D,
      TRANSLATE_X: () => TRANSLATE_X,
      TRANSLATE_Y: () => TRANSLATE_Y,
      TRANSLATE_Z: () => TRANSLATE_Z,
      WF_PAGE: () => WF_PAGE,
      WIDTH: () => WIDTH,
      WILL_CHANGE: () => WILL_CHANGE,
      W_MOD_IX: () => W_MOD_IX,
      W_MOD_JS: () => W_MOD_JS
    });
    var IX2_ID_DELIMITER, WF_PAGE, W_MOD_JS, W_MOD_IX, BOUNDARY_SELECTOR, CONFIG_X_VALUE, CONFIG_Y_VALUE, CONFIG_Z_VALUE, CONFIG_VALUE, CONFIG_X_UNIT, CONFIG_Y_UNIT, CONFIG_Z_UNIT, CONFIG_UNIT, TRANSFORM, TRANSLATE_X, TRANSLATE_Y, TRANSLATE_Z, TRANSLATE_3D, SCALE_X, SCALE_Y, SCALE_Z, SCALE_3D, ROTATE_X, ROTATE_Y, ROTATE_Z, SKEW, SKEW_X, SKEW_Y, OPACITY, FILTER, FONT_VARIATION_SETTINGS, WIDTH, HEIGHT, BACKGROUND_COLOR, BACKGROUND, BORDER_COLOR, COLOR, DISPLAY, FLEX, WILL_CHANGE, AUTO, COMMA_DELIMITER, COLON_DELIMITER, BAR_DELIMITER, CHILDREN, IMMEDIATE_CHILDREN, SIBLINGS, PARENT, PRESERVE_3D, HTML_ELEMENT, PLAIN_OBJECT, ABSTRACT_NODE, RENDER_TRANSFORM, RENDER_GENERAL, RENDER_STYLE, RENDER_PLUGIN;
    var init_IX2EngineConstants = __esm({
      "packages/systems/ix2/shared-constants/IX2EngineConstants.ts"() {
        "use strict";
        IX2_ID_DELIMITER = "|";
        WF_PAGE = "data-wf-page";
        W_MOD_JS = "w-mod-js";
        W_MOD_IX = "w-mod-ix";
        BOUNDARY_SELECTOR = ".w-dyn-item";
        CONFIG_X_VALUE = "xValue";
        CONFIG_Y_VALUE = "yValue";
        CONFIG_Z_VALUE = "zValue";
        CONFIG_VALUE = "value";
        CONFIG_X_UNIT = "xUnit";
        CONFIG_Y_UNIT = "yUnit";
        CONFIG_Z_UNIT = "zUnit";
        CONFIG_UNIT = "unit";
        TRANSFORM = "transform";
        TRANSLATE_X = "translateX";
        TRANSLATE_Y = "translateY";
        TRANSLATE_Z = "translateZ";
        TRANSLATE_3D = "translate3d";
        SCALE_X = "scaleX";
        SCALE_Y = "scaleY";
        SCALE_Z = "scaleZ";
        SCALE_3D = "scale3d";
        ROTATE_X = "rotateX";
        ROTATE_Y = "rotateY";
        ROTATE_Z = "rotateZ";
        SKEW = "skew";
        SKEW_X = "skewX";
        SKEW_Y = "skewY";
        OPACITY = "opacity";
        FILTER = "filter";
        FONT_VARIATION_SETTINGS = "font-variation-settings";
        WIDTH = "width";
        HEIGHT = "height";
        BACKGROUND_COLOR = "backgroundColor";
        BACKGROUND = "background";
        BORDER_COLOR = "borderColor";
        COLOR = "color";
        DISPLAY = "display";
        FLEX = "flex";
        WILL_CHANGE = "willChange";
        AUTO = "AUTO";
        COMMA_DELIMITER = ",";
        COLON_DELIMITER = ":";
        BAR_DELIMITER = "|";
        CHILDREN = "CHILDREN";
        IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
        SIBLINGS = "SIBLINGS";
        PARENT = "PARENT";
        PRESERVE_3D = "preserve-3d";
        HTML_ELEMENT = "HTML_ELEMENT";
        PLAIN_OBJECT = "PLAIN_OBJECT";
        ABSTRACT_NODE = "ABSTRACT_NODE";
        RENDER_TRANSFORM = "RENDER_TRANSFORM";
        RENDER_GENERAL = "RENDER_GENERAL";
        RENDER_STYLE = "RENDER_STYLE";
        RENDER_PLUGIN = "RENDER_PLUGIN";
      }
    });
  
    // packages/systems/ix2/shared-constants/index.ts
    var shared_constants_exports = {};
    __export(shared_constants_exports, {
      ActionAppliesTo: () => ActionAppliesTo,
      ActionTypeConsts: () => ActionTypeConsts,
      EventAppliesTo: () => EventAppliesTo,
      EventBasedOn: () => EventBasedOn,
      EventContinuousMouseAxes: () => EventContinuousMouseAxes,
      EventLimitAffectedElements: () => EventLimitAffectedElements,
      EventTypeConsts: () => EventTypeConsts,
      IX2EngineActionTypes: () => IX2EngineActionTypes_exports,
      IX2EngineConstants: () => IX2EngineConstants_exports,
      InteractionTypeConsts: () => InteractionTypeConsts,
      QuickEffectDirectionConsts: () => QuickEffectDirectionConsts,
      QuickEffectIds: () => QuickEffectIds,
      ReducedMotionTypes: () => ReducedMotionTypes
    });
    var init_shared_constants = __esm({
      "packages/systems/ix2/shared-constants/index.ts"() {
        "use strict";
        init_trigger_events();
        init_animation_actions();
        init_trigger_interactions();
        init_reduced_motion();
        init_IX2EngineActionTypes();
        init_IX2EngineConstants();
        init_animation_actions();
        init_trigger_events();
      }
    });
  
    // packages/systems/ix2/engine/reducers/IX2DataReducer.ts
    var IX2_RAW_DATA_IMPORTED2, ixData;
    var init_IX2DataReducer = __esm({
      "packages/systems/ix2/engine/reducers/IX2DataReducer.ts"() {
        "use strict";
        init_shared_constants();
        ({ IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED2 } = IX2EngineActionTypes_exports);
        ixData = (state = Object.freeze({}), action) => {
          switch (action.type) {
            case IX2_RAW_DATA_IMPORTED2: {
              return action.payload.ixData || Object.freeze({});
            }
            default: {
              return state;
            }
          }
        };
      }
    });
  
    // node_modules/timm/lib/timm.js
    var require_timm = __commonJS({
      "node_modules/timm/lib/timm.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        exports.clone = clone;
        exports.addLast = addLast2;
        exports.addFirst = addFirst;
        exports.removeLast = removeLast;
        exports.removeFirst = removeFirst;
        exports.insert = insert;
        exports.removeAt = removeAt;
        exports.replaceAt = replaceAt;
        exports.getIn = getIn2;
        exports.set = set3;
        exports.setIn = setIn4;
        exports.update = update;
        exports.updateIn = updateIn;
        exports.merge = merge3;
        exports.mergeDeep = mergeDeep;
        exports.mergeIn = mergeIn4;
        exports.omit = omit;
        exports.addDefaults = addDefaults;
        var INVALID_ARGS = "INVALID_ARGS";
        function throwStr(msg) {
          throw new Error(msg);
        }
        function getKeysAndSymbols(obj) {
          var keys = Object.keys(obj);
          if (Object.getOwnPropertySymbols) {
            return keys.concat(Object.getOwnPropertySymbols(obj));
          }
          return keys;
        }
        var hasOwnProperty2 = {}.hasOwnProperty;
        function clone(obj) {
          if (Array.isArray(obj))
            return obj.slice();
          var keys = getKeysAndSymbols(obj);
          var out = {};
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            out[key] = obj[key];
          }
          return out;
        }
        function doMerge(fAddDefaults, fDeep, first) {
          var out = first;
          !(out != null) && throwStr(false ? "At least one object should be provided to merge()" : INVALID_ARGS);
          var fChanged = false;
          for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
            rest[_key - 3] = arguments[_key];
          }
          for (var idx = 0; idx < rest.length; idx++) {
            var obj = rest[idx];
            if (obj == null)
              continue;
            var keys = getKeysAndSymbols(obj);
            if (!keys.length)
              continue;
            for (var j = 0; j <= keys.length; j++) {
              var key = keys[j];
              if (fAddDefaults && out[key] !== void 0)
                continue;
              var nextVal = obj[key];
              if (fDeep && isObject(out[key]) && isObject(nextVal)) {
                nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
              }
              if (nextVal === void 0 || nextVal === out[key])
                continue;
              if (!fChanged) {
                fChanged = true;
                out = clone(out);
              }
              out[key] = nextVal;
            }
          }
          return out;
        }
        function isObject(o) {
          var type = typeof o === "undefined" ? "undefined" : _typeof(o);
          return o != null && (type === "object" || type === "function");
        }
        function addLast2(array, val) {
          if (Array.isArray(val))
            return array.concat(val);
          return array.concat([val]);
        }
        function addFirst(array, val) {
          if (Array.isArray(val))
            return val.concat(array);
          return [val].concat(array);
        }
        function removeLast(array) {
          if (!array.length)
            return array;
          return array.slice(0, array.length - 1);
        }
        function removeFirst(array) {
          if (!array.length)
            return array;
          return array.slice(1);
        }
        function insert(array, idx, val) {
          return array.slice(0, idx).concat(Array.isArray(val) ? val : [val]).concat(array.slice(idx));
        }
        function removeAt(array, idx) {
          if (idx >= array.length || idx < 0)
            return array;
          return array.slice(0, idx).concat(array.slice(idx + 1));
        }
        function replaceAt(array, idx, newItem) {
          if (array[idx] === newItem)
            return array;
          var len = array.length;
          var result = Array(len);
          for (var i = 0; i < len; i++) {
            result[i] = array[i];
          }
          result[idx] = newItem;
          return result;
        }
        function getIn2(obj, path) {
          !Array.isArray(path) && throwStr(false ? "A path array should be provided when calling getIn()" : INVALID_ARGS);
          if (obj == null)
            return void 0;
          var ptr = obj;
          for (var i = 0; i < path.length; i++) {
            var key = path[i];
            ptr = ptr != null ? ptr[key] : void 0;
            if (ptr === void 0)
              return ptr;
          }
          return ptr;
        }
        function set3(obj, key, val) {
          var fallback = typeof key === "number" ? [] : {};
          var finalObj = obj == null ? fallback : obj;
          if (finalObj[key] === val)
            return finalObj;
          var obj2 = clone(finalObj);
          obj2[key] = val;
          return obj2;
        }
        function doSetIn(obj, path, val, idx) {
          var newValue = void 0;
          var key = path[idx];
          if (idx === path.length - 1) {
            newValue = val;
          } else {
            var nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path[idx + 1] === "number" ? [] : {};
            newValue = doSetIn(nestedObj, path, val, idx + 1);
          }
          return set3(obj, key, newValue);
        }
        function setIn4(obj, path, val) {
          if (!path.length)
            return val;
          return doSetIn(obj, path, val, 0);
        }
        function update(obj, key, fnUpdate) {
          var prevVal = obj == null ? void 0 : obj[key];
          var nextVal = fnUpdate(prevVal);
          return set3(obj, key, nextVal);
        }
        function updateIn(obj, path, fnUpdate) {
          var prevVal = getIn2(obj, path);
          var nextVal = fnUpdate(prevVal);
          return setIn4(obj, path, nextVal);
        }
        function merge3(a, b, c, d, e, f) {
          for (var _len2 = arguments.length, rest = Array(_len2 > 6 ? _len2 - 6 : 0), _key2 = 6; _key2 < _len2; _key2++) {
            rest[_key2 - 6] = arguments[_key2];
          }
          return rest.length ? doMerge.call.apply(doMerge, [null, false, false, a, b, c, d, e, f].concat(rest)) : doMerge(false, false, a, b, c, d, e, f);
        }
        function mergeDeep(a, b, c, d, e, f) {
          for (var _len3 = arguments.length, rest = Array(_len3 > 6 ? _len3 - 6 : 0), _key3 = 6; _key3 < _len3; _key3++) {
            rest[_key3 - 6] = arguments[_key3];
          }
          return rest.length ? doMerge.call.apply(doMerge, [null, false, true, a, b, c, d, e, f].concat(rest)) : doMerge(false, true, a, b, c, d, e, f);
        }
        function mergeIn4(a, path, b, c, d, e, f) {
          var prevVal = getIn2(a, path);
          if (prevVal == null)
            prevVal = {};
          var nextVal = void 0;
          for (var _len4 = arguments.length, rest = Array(_len4 > 7 ? _len4 - 7 : 0), _key4 = 7; _key4 < _len4; _key4++) {
            rest[_key4 - 7] = arguments[_key4];
          }
          if (rest.length) {
            nextVal = doMerge.call.apply(doMerge, [null, false, false, prevVal, b, c, d, e, f].concat(rest));
          } else {
            nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
          }
          return setIn4(a, path, nextVal);
        }
        function omit(obj, attrs) {
          var omitList = Array.isArray(attrs) ? attrs : [attrs];
          var fDoSomething = false;
          for (var i = 0; i < omitList.length; i++) {
            if (hasOwnProperty2.call(obj, omitList[i])) {
              fDoSomething = true;
              break;
            }
          }
          if (!fDoSomething)
            return obj;
          var out = {};
          var keys = getKeysAndSymbols(obj);
          for (var _i = 0; _i < keys.length; _i++) {
            var key = keys[_i];
            if (omitList.indexOf(key) >= 0)
              continue;
            out[key] = obj[key];
          }
          return out;
        }
        function addDefaults(a, b, c, d, e, f) {
          for (var _len5 = arguments.length, rest = Array(_len5 > 6 ? _len5 - 6 : 0), _key5 = 6; _key5 < _len5; _key5++) {
            rest[_key5 - 6] = arguments[_key5];
          }
          return rest.length ? doMerge.call.apply(doMerge, [null, true, false, a, b, c, d, e, f].concat(rest)) : doMerge(true, false, a, b, c, d, e, f);
        }
        var timm = {
          clone,
          addLast: addLast2,
          addFirst,
          removeLast,
          removeFirst,
          insert,
          removeAt,
          replaceAt,
          getIn: getIn2,
          // eslint-disable-next-line object-shorthand
          set: set3,
          // so that flow doesn't complain
          setIn: setIn4,
          update,
          updateIn,
          merge: merge3,
          mergeDeep,
          mergeIn: mergeIn4,
          omit,
          addDefaults
        };
        exports.default = timm;
      }
    });
  
    // packages/systems/ix2/engine/reducers/IX2RequestReducer.ts
    var import_timm, IX2_PREVIEW_REQUESTED2, IX2_PLAYBACK_REQUESTED2, IX2_STOP_REQUESTED2, IX2_CLEAR_REQUESTED2, initialState, stateKeys, ixRequest;
    var init_IX2RequestReducer = __esm({
      "packages/systems/ix2/engine/reducers/IX2RequestReducer.ts"() {
        "use strict";
        init_shared_constants();
        import_timm = __toESM(require_timm());
        ({
          IX2_PREVIEW_REQUESTED: IX2_PREVIEW_REQUESTED2,
          IX2_PLAYBACK_REQUESTED: IX2_PLAYBACK_REQUESTED2,
          IX2_STOP_REQUESTED: IX2_STOP_REQUESTED2,
          IX2_CLEAR_REQUESTED: IX2_CLEAR_REQUESTED2
        } = IX2EngineActionTypes_exports);
        initialState = {
          preview: {},
          playback: {},
          stop: {},
          clear: {}
        };
        stateKeys = Object.create(null, {
          [IX2_PREVIEW_REQUESTED2]: { value: "preview" },
          [IX2_PLAYBACK_REQUESTED2]: { value: "playback" },
          [IX2_STOP_REQUESTED2]: { value: "stop" },
          [IX2_CLEAR_REQUESTED2]: { value: "clear" }
        });
        ixRequest = (state = initialState, action) => {
          if (action.type in stateKeys) {
            const key = [stateKeys[action.type]];
            return (0, import_timm.setIn)(state, [key], { ...action.payload });
          }
          return state;
        };
      }
    });
  
    // packages/systems/ix2/engine/reducers/IX2SessionReducer.ts
    var import_timm2, IX2_SESSION_INITIALIZED2, IX2_SESSION_STARTED2, IX2_TEST_FRAME_RENDERED2, IX2_SESSION_STOPPED2, IX2_EVENT_LISTENER_ADDED2, IX2_EVENT_STATE_CHANGED2, IX2_ANIMATION_FRAME_CHANGED2, IX2_ACTION_LIST_PLAYBACK_CHANGED2, IX2_VIEWPORT_WIDTH_CHANGED2, IX2_MEDIA_QUERIES_DEFINED2, initialState2, TEST_FRAME_STEPS_SIZE, ixSession;
    var init_IX2SessionReducer = __esm({
      "packages/systems/ix2/engine/reducers/IX2SessionReducer.ts"() {
        "use strict";
        init_shared_constants();
        import_timm2 = __toESM(require_timm());
        ({
          IX2_SESSION_INITIALIZED: IX2_SESSION_INITIALIZED2,
          IX2_SESSION_STARTED: IX2_SESSION_STARTED2,
          IX2_TEST_FRAME_RENDERED: IX2_TEST_FRAME_RENDERED2,
          IX2_SESSION_STOPPED: IX2_SESSION_STOPPED2,
          IX2_EVENT_LISTENER_ADDED: IX2_EVENT_LISTENER_ADDED2,
          IX2_EVENT_STATE_CHANGED: IX2_EVENT_STATE_CHANGED2,
          IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED2,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: IX2_ACTION_LIST_PLAYBACK_CHANGED2,
          IX2_VIEWPORT_WIDTH_CHANGED: IX2_VIEWPORT_WIDTH_CHANGED2,
          IX2_MEDIA_QUERIES_DEFINED: IX2_MEDIA_QUERIES_DEFINED2
        } = IX2EngineActionTypes_exports);
        initialState2 = {
          active: false,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: false,
          hasDefinedMediaQueries: false,
          reducedMotion: false
        };
        TEST_FRAME_STEPS_SIZE = 20;
        ixSession = (state = initialState2, action) => {
          switch (action.type) {
            case IX2_SESSION_INITIALIZED2: {
              const { hasBoundaryNodes, reducedMotion } = action.payload;
              return (0, import_timm2.merge)(state, {
                hasBoundaryNodes,
                reducedMotion
              });
            }
            case IX2_SESSION_STARTED2: {
              return (0, import_timm2.set)(state, "active", true);
            }
            case IX2_TEST_FRAME_RENDERED2: {
              const {
                payload: { step = TEST_FRAME_STEPS_SIZE }
              } = action;
              return (0, import_timm2.set)(state, "tick", state.tick + step);
            }
            case IX2_SESSION_STOPPED2: {
              return initialState2;
            }
            case IX2_ANIMATION_FRAME_CHANGED2: {
              const {
                payload: { now }
              } = action;
              return (0, import_timm2.set)(state, "tick", now);
            }
            case IX2_EVENT_LISTENER_ADDED2: {
              const eventListeners = (0, import_timm2.addLast)(state.eventListeners, action.payload);
              return (0, import_timm2.set)(state, "eventListeners", eventListeners);
            }
            case IX2_EVENT_STATE_CHANGED2: {
              const { stateKey, newState } = action.payload;
              return (0, import_timm2.setIn)(state, ["eventState", stateKey], newState);
            }
            case IX2_ACTION_LIST_PLAYBACK_CHANGED2: {
              const { actionListId, isPlaying } = action.payload;
              return (0, import_timm2.setIn)(state, ["playbackState", actionListId], isPlaying);
            }
            case IX2_VIEWPORT_WIDTH_CHANGED2: {
              const { width, mediaQueries } = action.payload;
              const mediaQueryCount = mediaQueries.length;
              let mediaQueryKey = null;
              for (let i = 0; i < mediaQueryCount; i++) {
                const { key, min, max } = mediaQueries[i];
                if (width >= min && width <= max) {
                  mediaQueryKey = key;
                  break;
                }
              }
              return (0, import_timm2.merge)(state, {
                viewportWidth: width,
                mediaQueryKey
              });
            }
            case IX2_MEDIA_QUERIES_DEFINED2: {
              return (0, import_timm2.set)(state, "hasDefinedMediaQueries", true);
            }
            default: {
              return state;
            }
          }
        };
      }
    });
  
    // node_modules/lodash/_listCacheClear.js
    var require_listCacheClear = __commonJS({
      "node_modules/lodash/_listCacheClear.js"(exports, module) {
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        module.exports = listCacheClear;
      }
    });
  
    // node_modules/lodash/eq.js
    var require_eq = __commonJS({
      "node_modules/lodash/eq.js"(exports, module) {
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        module.exports = eq;
      }
    });
  
    // node_modules/lodash/_assocIndexOf.js
    var require_assocIndexOf = __commonJS({
      "node_modules/lodash/_assocIndexOf.js"(exports, module) {
        var eq = require_eq();
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        module.exports = assocIndexOf;
      }
    });
  
    // node_modules/lodash/_listCacheDelete.js
    var require_listCacheDelete = __commonJS({
      "node_modules/lodash/_listCacheDelete.js"(exports, module) {
        var assocIndexOf = require_assocIndexOf();
        var arrayProto = Array.prototype;
        var splice = arrayProto.splice;
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        module.exports = listCacheDelete;
      }
    });
  
    // node_modules/lodash/_listCacheGet.js
    var require_listCacheGet = __commonJS({
      "node_modules/lodash/_listCacheGet.js"(exports, module) {
        var assocIndexOf = require_assocIndexOf();
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? void 0 : data[index][1];
        }
        module.exports = listCacheGet;
      }
    });
  
    // node_modules/lodash/_listCacheHas.js
    var require_listCacheHas = __commonJS({
      "node_modules/lodash/_listCacheHas.js"(exports, module) {
        var assocIndexOf = require_assocIndexOf();
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        module.exports = listCacheHas;
      }
    });
  
    // node_modules/lodash/_listCacheSet.js
    var require_listCacheSet = __commonJS({
      "node_modules/lodash/_listCacheSet.js"(exports, module) {
        var assocIndexOf = require_assocIndexOf();
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        module.exports = listCacheSet;
      }
    });
  
    // node_modules/lodash/_ListCache.js
    var require_ListCache = __commonJS({
      "node_modules/lodash/_ListCache.js"(exports, module) {
        var listCacheClear = require_listCacheClear();
        var listCacheDelete = require_listCacheDelete();
        var listCacheGet = require_listCacheGet();
        var listCacheHas = require_listCacheHas();
        var listCacheSet = require_listCacheSet();
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        module.exports = ListCache;
      }
    });
  
    // node_modules/lodash/_stackClear.js
    var require_stackClear = __commonJS({
      "node_modules/lodash/_stackClear.js"(exports, module) {
        var ListCache = require_ListCache();
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        module.exports = stackClear;
      }
    });
  
    // node_modules/lodash/_stackDelete.js
    var require_stackDelete = __commonJS({
      "node_modules/lodash/_stackDelete.js"(exports, module) {
        function stackDelete(key) {
          var data = this.__data__, result = data["delete"](key);
          this.size = data.size;
          return result;
        }
        module.exports = stackDelete;
      }
    });
  
    // node_modules/lodash/_stackGet.js
    var require_stackGet = __commonJS({
      "node_modules/lodash/_stackGet.js"(exports, module) {
        function stackGet(key) {
          return this.__data__.get(key);
        }
        module.exports = stackGet;
      }
    });
  
    // node_modules/lodash/_stackHas.js
    var require_stackHas = __commonJS({
      "node_modules/lodash/_stackHas.js"(exports, module) {
        function stackHas(key) {
          return this.__data__.has(key);
        }
        module.exports = stackHas;
      }
    });
  
    // node_modules/lodash/isObject.js
    var require_isObject = __commonJS({
      "node_modules/lodash/isObject.js"(exports, module) {
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        module.exports = isObject;
      }
    });
  
    // node_modules/lodash/isFunction.js
    var require_isFunction = __commonJS({
      "node_modules/lodash/isFunction.js"(exports, module) {
        var baseGetTag = require_baseGetTag();
        var isObject = require_isObject();
        var asyncTag = "[object AsyncFunction]";
        var funcTag = "[object Function]";
        var genTag = "[object GeneratorFunction]";
        var proxyTag = "[object Proxy]";
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        module.exports = isFunction;
      }
    });
  
    // node_modules/lodash/_coreJsData.js
    var require_coreJsData = __commonJS({
      "node_modules/lodash/_coreJsData.js"(exports, module) {
        var root = require_root();
        var coreJsData = root["__core-js_shared__"];
        module.exports = coreJsData;
      }
    });
  
    // node_modules/lodash/_isMasked.js
    var require_isMasked = __commonJS({
      "node_modules/lodash/_isMasked.js"(exports, module) {
        var coreJsData = require_coreJsData();
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        module.exports = isMasked;
      }
    });
  
    // node_modules/lodash/_toSource.js
    var require_toSource = __commonJS({
      "node_modules/lodash/_toSource.js"(exports, module) {
        var funcProto = Function.prototype;
        var funcToString = funcProto.toString;
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        module.exports = toSource;
      }
    });
  
    // node_modules/lodash/_baseIsNative.js
    var require_baseIsNative = __commonJS({
      "node_modules/lodash/_baseIsNative.js"(exports, module) {
        var isFunction = require_isFunction();
        var isMasked = require_isMasked();
        var isObject = require_isObject();
        var toSource = require_toSource();
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var funcProto = Function.prototype;
        var objectProto = Object.prototype;
        var funcToString = funcProto.toString;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        var reIsNative = RegExp(
          "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        module.exports = baseIsNative;
      }
    });
  
    // node_modules/lodash/_getValue.js
    var require_getValue = __commonJS({
      "node_modules/lodash/_getValue.js"(exports, module) {
        function getValue(object, key) {
          return object == null ? void 0 : object[key];
        }
        module.exports = getValue;
      }
    });
  
    // node_modules/lodash/_getNative.js
    var require_getNative = __commonJS({
      "node_modules/lodash/_getNative.js"(exports, module) {
        var baseIsNative = require_baseIsNative();
        var getValue = require_getValue();
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : void 0;
        }
        module.exports = getNative;
      }
    });
  
    // node_modules/lodash/_Map.js
    var require_Map = __commonJS({
      "node_modules/lodash/_Map.js"(exports, module) {
        var getNative = require_getNative();
        var root = require_root();
        var Map2 = getNative(root, "Map");
        module.exports = Map2;
      }
    });
  
    // node_modules/lodash/_nativeCreate.js
    var require_nativeCreate = __commonJS({
      "node_modules/lodash/_nativeCreate.js"(exports, module) {
        var getNative = require_getNative();
        var nativeCreate = getNative(Object, "create");
        module.exports = nativeCreate;
      }
    });
  
    // node_modules/lodash/_hashClear.js
    var require_hashClear = __commonJS({
      "node_modules/lodash/_hashClear.js"(exports, module) {
        var nativeCreate = require_nativeCreate();
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        module.exports = hashClear;
      }
    });
  
    // node_modules/lodash/_hashDelete.js
    var require_hashDelete = __commonJS({
      "node_modules/lodash/_hashDelete.js"(exports, module) {
        function hashDelete(key) {
          var result = this.has(key) && delete this.__data__[key];
          this.size -= result ? 1 : 0;
          return result;
        }
        module.exports = hashDelete;
      }
    });
  
    // node_modules/lodash/_hashGet.js
    var require_hashGet = __commonJS({
      "node_modules/lodash/_hashGet.js"(exports, module) {
        var nativeCreate = require_nativeCreate();
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? void 0 : result;
          }
          return hasOwnProperty2.call(data, key) ? data[key] : void 0;
        }
        module.exports = hashGet;
      }
    });
  
    // node_modules/lodash/_hashHas.js
    var require_hashHas = __commonJS({
      "node_modules/lodash/_hashHas.js"(exports, module) {
        var nativeCreate = require_nativeCreate();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
        }
        module.exports = hashHas;
      }
    });
  
    // node_modules/lodash/_hashSet.js
    var require_hashSet = __commonJS({
      "node_modules/lodash/_hashSet.js"(exports, module) {
        var nativeCreate = require_nativeCreate();
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
          return this;
        }
        module.exports = hashSet;
      }
    });
  
    // node_modules/lodash/_Hash.js
    var require_Hash = __commonJS({
      "node_modules/lodash/_Hash.js"(exports, module) {
        var hashClear = require_hashClear();
        var hashDelete = require_hashDelete();
        var hashGet = require_hashGet();
        var hashHas = require_hashHas();
        var hashSet = require_hashSet();
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        module.exports = Hash;
      }
    });
  
    // node_modules/lodash/_mapCacheClear.js
    var require_mapCacheClear = __commonJS({
      "node_modules/lodash/_mapCacheClear.js"(exports, module) {
        var Hash = require_Hash();
        var ListCache = require_ListCache();
        var Map2 = require_Map();
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        module.exports = mapCacheClear;
      }
    });
  
    // node_modules/lodash/_isKeyable.js
    var require_isKeyable = __commonJS({
      "node_modules/lodash/_isKeyable.js"(exports, module) {
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        module.exports = isKeyable;
      }
    });
  
    // node_modules/lodash/_getMapData.js
    var require_getMapData = __commonJS({
      "node_modules/lodash/_getMapData.js"(exports, module) {
        var isKeyable = require_isKeyable();
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        module.exports = getMapData;
      }
    });
  
    // node_modules/lodash/_mapCacheDelete.js
    var require_mapCacheDelete = __commonJS({
      "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
        var getMapData = require_getMapData();
        function mapCacheDelete(key) {
          var result = getMapData(this, key)["delete"](key);
          this.size -= result ? 1 : 0;
          return result;
        }
        module.exports = mapCacheDelete;
      }
    });
  
    // node_modules/lodash/_mapCacheGet.js
    var require_mapCacheGet = __commonJS({
      "node_modules/lodash/_mapCacheGet.js"(exports, module) {
        var getMapData = require_getMapData();
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        module.exports = mapCacheGet;
      }
    });
  
    // node_modules/lodash/_mapCacheHas.js
    var require_mapCacheHas = __commonJS({
      "node_modules/lodash/_mapCacheHas.js"(exports, module) {
        var getMapData = require_getMapData();
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        module.exports = mapCacheHas;
      }
    });
  
    // node_modules/lodash/_mapCacheSet.js
    var require_mapCacheSet = __commonJS({
      "node_modules/lodash/_mapCacheSet.js"(exports, module) {
        var getMapData = require_getMapData();
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        module.exports = mapCacheSet;
      }
    });
  
    // node_modules/lodash/_MapCache.js
    var require_MapCache = __commonJS({
      "node_modules/lodash/_MapCache.js"(exports, module) {
        var mapCacheClear = require_mapCacheClear();
        var mapCacheDelete = require_mapCacheDelete();
        var mapCacheGet = require_mapCacheGet();
        var mapCacheHas = require_mapCacheHas();
        var mapCacheSet = require_mapCacheSet();
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        module.exports = MapCache;
      }
    });
  
    // node_modules/lodash/_stackSet.js
    var require_stackSet = __commonJS({
      "node_modules/lodash/_stackSet.js"(exports, module) {
        var ListCache = require_ListCache();
        var Map2 = require_Map();
        var MapCache = require_MapCache();
        var LARGE_ARRAY_SIZE = 200;
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        module.exports = stackSet;
      }
    });
  
    // node_modules/lodash/_Stack.js
    var require_Stack = __commonJS({
      "node_modules/lodash/_Stack.js"(exports, module) {
        var ListCache = require_ListCache();
        var stackClear = require_stackClear();
        var stackDelete = require_stackDelete();
        var stackGet = require_stackGet();
        var stackHas = require_stackHas();
        var stackSet = require_stackSet();
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        module.exports = Stack;
      }
    });
  
    // node_modules/lodash/_setCacheAdd.js
    var require_setCacheAdd = __commonJS({
      "node_modules/lodash/_setCacheAdd.js"(exports, module) {
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        module.exports = setCacheAdd;
      }
    });
  
    // node_modules/lodash/_setCacheHas.js
    var require_setCacheHas = __commonJS({
      "node_modules/lodash/_setCacheHas.js"(exports, module) {
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        module.exports = setCacheHas;
      }
    });
  
    // node_modules/lodash/_SetCache.js
    var require_SetCache = __commonJS({
      "node_modules/lodash/_SetCache.js"(exports, module) {
        var MapCache = require_MapCache();
        var setCacheAdd = require_setCacheAdd();
        var setCacheHas = require_setCacheHas();
        function SetCache(values) {
          var index = -1, length = values == null ? 0 : values.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values[index]);
          }
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        module.exports = SetCache;
      }
    });
  
    // node_modules/lodash/_arraySome.js
    var require_arraySome = __commonJS({
      "node_modules/lodash/_arraySome.js"(exports, module) {
        function arraySome(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        module.exports = arraySome;
      }
    });
  
    // node_modules/lodash/_cacheHas.js
    var require_cacheHas = __commonJS({
      "node_modules/lodash/_cacheHas.js"(exports, module) {
        function cacheHas(cache, key) {
          return cache.has(key);
        }
        module.exports = cacheHas;
      }
    });
  
    // node_modules/lodash/_equalArrays.js
    var require_equalArrays = __commonJS({
      "node_modules/lodash/_equalArrays.js"(exports, module) {
        var SetCache = require_SetCache();
        var arraySome = require_arraySome();
        var cacheHas = require_cacheHas();
        var COMPARE_PARTIAL_FLAG = 1;
        var COMPARE_UNORDERED_FLAG = 2;
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== void 0) {
              if (compared) {
                continue;
              }
              result = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result;
        }
        module.exports = equalArrays;
      }
    });
  
    // node_modules/lodash/_Uint8Array.js
    var require_Uint8Array = __commonJS({
      "node_modules/lodash/_Uint8Array.js"(exports, module) {
        var root = require_root();
        var Uint8Array2 = root.Uint8Array;
        module.exports = Uint8Array2;
      }
    });
  
    // node_modules/lodash/_mapToArray.js
    var require_mapToArray = __commonJS({
      "node_modules/lodash/_mapToArray.js"(exports, module) {
        function mapToArray(map) {
          var index = -1, result = Array(map.size);
          map.forEach(function(value, key) {
            result[++index] = [key, value];
          });
          return result;
        }
        module.exports = mapToArray;
      }
    });
  
    // node_modules/lodash/_setToArray.js
    var require_setToArray = __commonJS({
      "node_modules/lodash/_setToArray.js"(exports, module) {
        function setToArray(set3) {
          var index = -1, result = Array(set3.size);
          set3.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }
        module.exports = setToArray;
      }
    });
  
    // node_modules/lodash/_equalByTag.js
    var require_equalByTag = __commonJS({
      "node_modules/lodash/_equalByTag.js"(exports, module) {
        var Symbol2 = require_Symbol();
        var Uint8Array2 = require_Uint8Array();
        var eq = require_eq();
        var equalArrays = require_equalArrays();
        var mapToArray = require_mapToArray();
        var setToArray = require_setToArray();
        var COMPARE_PARTIAL_FLAG = 1;
        var COMPARE_UNORDERED_FLAG = 2;
        var boolTag = "[object Boolean]";
        var dateTag = "[object Date]";
        var errorTag = "[object Error]";
        var mapTag = "[object Map]";
        var numberTag = "[object Number]";
        var regexpTag = "[object RegExp]";
        var setTag = "[object Set]";
        var stringTag = "[object String]";
        var symbolTag = "[object Symbol]";
        var arrayBufferTag = "[object ArrayBuffer]";
        var dataViewTag = "[object DataView]";
        var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
        var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        module.exports = equalByTag;
      }
    });
  
    // node_modules/lodash/_arrayPush.js
    var require_arrayPush = __commonJS({
      "node_modules/lodash/_arrayPush.js"(exports, module) {
        function arrayPush(array, values) {
          var index = -1, length = values.length, offset = array.length;
          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }
        module.exports = arrayPush;
      }
    });
  
    // node_modules/lodash/isArray.js
    var require_isArray = __commonJS({
      "node_modules/lodash/isArray.js"(exports, module) {
        var isArray = Array.isArray;
        module.exports = isArray;
      }
    });
  
    // node_modules/lodash/_baseGetAllKeys.js
    var require_baseGetAllKeys = __commonJS({
      "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
        var arrayPush = require_arrayPush();
        var isArray = require_isArray();
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result = keysFunc(object);
          return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }
        module.exports = baseGetAllKeys;
      }
    });
  
    // node_modules/lodash/_arrayFilter.js
    var require_arrayFilter = __commonJS({
      "node_modules/lodash/_arrayFilter.js"(exports, module) {
        function arrayFilter(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        module.exports = arrayFilter;
      }
    });
  
    // node_modules/lodash/stubArray.js
    var require_stubArray = __commonJS({
      "node_modules/lodash/stubArray.js"(exports, module) {
        function stubArray() {
          return [];
        }
        module.exports = stubArray;
      }
    });
  
    // node_modules/lodash/_getSymbols.js
    var require_getSymbols = __commonJS({
      "node_modules/lodash/_getSymbols.js"(exports, module) {
        var arrayFilter = require_arrayFilter();
        var stubArray = require_stubArray();
        var objectProto = Object.prototype;
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;
        var nativeGetSymbols = Object.getOwnPropertySymbols;
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        module.exports = getSymbols;
      }
    });
  
    // node_modules/lodash/_baseTimes.js
    var require_baseTimes = __commonJS({
      "node_modules/lodash/_baseTimes.js"(exports, module) {
        function baseTimes(n, iteratee) {
          var index = -1, result = Array(n);
          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }
        module.exports = baseTimes;
      }
    });
  
    // node_modules/lodash/_baseIsArguments.js
    var require_baseIsArguments = __commonJS({
      "node_modules/lodash/_baseIsArguments.js"(exports, module) {
        var baseGetTag = require_baseGetTag();
        var isObjectLike = require_isObjectLike();
        var argsTag = "[object Arguments]";
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        module.exports = baseIsArguments;
      }
    });
  
    // node_modules/lodash/isArguments.js
    var require_isArguments = __commonJS({
      "node_modules/lodash/isArguments.js"(exports, module) {
        var baseIsArguments = require_baseIsArguments();
        var isObjectLike = require_isObjectLike();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;
        var isArguments = baseIsArguments(function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        module.exports = isArguments;
      }
    });
  
    // node_modules/lodash/stubFalse.js
    var require_stubFalse = __commonJS({
      "node_modules/lodash/stubFalse.js"(exports, module) {
        function stubFalse() {
          return false;
        }
        module.exports = stubFalse;
      }
    });
  
    // node_modules/lodash/isBuffer.js
    var require_isBuffer = __commonJS({
      "node_modules/lodash/isBuffer.js"(exports, module) {
        var root = require_root();
        var stubFalse = require_stubFalse();
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var Buffer2 = moduleExports ? root.Buffer : void 0;
        var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
        var isBuffer = nativeIsBuffer || stubFalse;
        module.exports = isBuffer;
      }
    });
  
    // node_modules/lodash/_isIndex.js
    var require_isIndex = __commonJS({
      "node_modules/lodash/_isIndex.js"(exports, module) {
        var MAX_SAFE_INTEGER = 9007199254740991;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        module.exports = isIndex;
      }
    });
  
    // node_modules/lodash/isLength.js
    var require_isLength = __commonJS({
      "node_modules/lodash/isLength.js"(exports, module) {
        var MAX_SAFE_INTEGER = 9007199254740991;
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        module.exports = isLength;
      }
    });
  
    // node_modules/lodash/_baseIsTypedArray.js
    var require_baseIsTypedArray = __commonJS({
      "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
        var baseGetTag = require_baseGetTag();
        var isLength = require_isLength();
        var isObjectLike = require_isObjectLike();
        var argsTag = "[object Arguments]";
        var arrayTag = "[object Array]";
        var boolTag = "[object Boolean]";
        var dateTag = "[object Date]";
        var errorTag = "[object Error]";
        var funcTag = "[object Function]";
        var mapTag = "[object Map]";
        var numberTag = "[object Number]";
        var objectTag = "[object Object]";
        var regexpTag = "[object RegExp]";
        var setTag = "[object Set]";
        var stringTag = "[object String]";
        var weakMapTag = "[object WeakMap]";
        var arrayBufferTag = "[object ArrayBuffer]";
        var dataViewTag = "[object DataView]";
        var float32Tag = "[object Float32Array]";
        var float64Tag = "[object Float64Array]";
        var int8Tag = "[object Int8Array]";
        var int16Tag = "[object Int16Array]";
        var int32Tag = "[object Int32Array]";
        var uint8Tag = "[object Uint8Array]";
        var uint8ClampedTag = "[object Uint8ClampedArray]";
        var uint16Tag = "[object Uint16Array]";
        var uint32Tag = "[object Uint32Array]";
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        module.exports = baseIsTypedArray;
      }
    });
  
    // node_modules/lodash/_baseUnary.js
    var require_baseUnary = __commonJS({
      "node_modules/lodash/_baseUnary.js"(exports, module) {
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }
        module.exports = baseUnary;
      }
    });
  
    // node_modules/lodash/_nodeUtil.js
    var require_nodeUtil = __commonJS({
      "node_modules/lodash/_nodeUtil.js"(exports, module) {
        var freeGlobal = require_freeGlobal();
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e) {
          }
        }();
        module.exports = nodeUtil;
      }
    });
  
    // node_modules/lodash/isTypedArray.js
    var require_isTypedArray = __commonJS({
      "node_modules/lodash/isTypedArray.js"(exports, module) {
        var baseIsTypedArray = require_baseIsTypedArray();
        var baseUnary = require_baseUnary();
        var nodeUtil = require_nodeUtil();
        var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        module.exports = isTypedArray;
      }
    });
  
    // node_modules/lodash/_arrayLikeKeys.js
    var require_arrayLikeKeys = __commonJS({
      "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
        var baseTimes = require_baseTimes();
        var isArguments = require_isArguments();
        var isArray = require_isArray();
        var isBuffer = require_isBuffer();
        var isIndex = require_isIndex();
        var isTypedArray = require_isTypedArray();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result.push(key);
            }
          }
          return result;
        }
        module.exports = arrayLikeKeys;
      }
    });
  
    // node_modules/lodash/_isPrototype.js
    var require_isPrototype = __commonJS({
      "node_modules/lodash/_isPrototype.js"(exports, module) {
        var objectProto = Object.prototype;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        module.exports = isPrototype;
      }
    });
  
    // node_modules/lodash/_nativeKeys.js
    var require_nativeKeys = __commonJS({
      "node_modules/lodash/_nativeKeys.js"(exports, module) {
        var overArg = require_overArg();
        var nativeKeys = overArg(Object.keys, Object);
        module.exports = nativeKeys;
      }
    });
  
    // node_modules/lodash/_baseKeys.js
    var require_baseKeys = __commonJS({
      "node_modules/lodash/_baseKeys.js"(exports, module) {
        var isPrototype = require_isPrototype();
        var nativeKeys = require_nativeKeys();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result = [];
          for (var key in Object(object)) {
            if (hasOwnProperty2.call(object, key) && key != "constructor") {
              result.push(key);
            }
          }
          return result;
        }
        module.exports = baseKeys;
      }
    });
  
    // node_modules/lodash/isArrayLike.js
    var require_isArrayLike = __commonJS({
      "node_modules/lodash/isArrayLike.js"(exports, module) {
        var isFunction = require_isFunction();
        var isLength = require_isLength();
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        module.exports = isArrayLike;
      }
    });
  
    // node_modules/lodash/keys.js
    var require_keys = __commonJS({
      "node_modules/lodash/keys.js"(exports, module) {
        var arrayLikeKeys = require_arrayLikeKeys();
        var baseKeys = require_baseKeys();
        var isArrayLike = require_isArrayLike();
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        module.exports = keys;
      }
    });
  
    // node_modules/lodash/_getAllKeys.js
    var require_getAllKeys = __commonJS({
      "node_modules/lodash/_getAllKeys.js"(exports, module) {
        var baseGetAllKeys = require_baseGetAllKeys();
        var getSymbols = require_getSymbols();
        var keys = require_keys();
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        module.exports = getAllKeys;
      }
    });
  
    // node_modules/lodash/_equalObjects.js
    var require_equalObjects = __commonJS({
      "node_modules/lodash/_equalObjects.js"(exports, module) {
        var getAllKeys = require_getAllKeys();
        var COMPARE_PARTIAL_FLAG = 1;
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result;
        }
        module.exports = equalObjects;
      }
    });
  
    // node_modules/lodash/_DataView.js
    var require_DataView = __commonJS({
      "node_modules/lodash/_DataView.js"(exports, module) {
        var getNative = require_getNative();
        var root = require_root();
        var DataView = getNative(root, "DataView");
        module.exports = DataView;
      }
    });
  
    // node_modules/lodash/_Promise.js
    var require_Promise = __commonJS({
      "node_modules/lodash/_Promise.js"(exports, module) {
        var getNative = require_getNative();
        var root = require_root();
        var Promise2 = getNative(root, "Promise");
        module.exports = Promise2;
      }
    });
  
    // node_modules/lodash/_Set.js
    var require_Set = __commonJS({
      "node_modules/lodash/_Set.js"(exports, module) {
        var getNative = require_getNative();
        var root = require_root();
        var Set = getNative(root, "Set");
        module.exports = Set;
      }
    });
  
    // node_modules/lodash/_WeakMap.js
    var require_WeakMap = __commonJS({
      "node_modules/lodash/_WeakMap.js"(exports, module) {
        var getNative = require_getNative();
        var root = require_root();
        var WeakMap2 = getNative(root, "WeakMap");
        module.exports = WeakMap2;
      }
    });
  
    // node_modules/lodash/_getTag.js
    var require_getTag = __commonJS({
      "node_modules/lodash/_getTag.js"(exports, module) {
        var DataView = require_DataView();
        var Map2 = require_Map();
        var Promise2 = require_Promise();
        var Set = require_Set();
        var WeakMap2 = require_WeakMap();
        var baseGetTag = require_baseGetTag();
        var toSource = require_toSource();
        var mapTag = "[object Map]";
        var objectTag = "[object Object]";
        var promiseTag = "[object Promise]";
        var setTag = "[object Set]";
        var weakMapTag = "[object WeakMap]";
        var dataViewTag = "[object DataView]";
        var dataViewCtorString = toSource(DataView);
        var mapCtorString = toSource(Map2);
        var promiseCtorString = toSource(Promise2);
        var setCtorString = toSource(Set);
        var weakMapCtorString = toSource(WeakMap2);
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
          getTag = function(value) {
            var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result;
          };
        }
        module.exports = getTag;
      }
    });
  
    // node_modules/lodash/_baseIsEqualDeep.js
    var require_baseIsEqualDeep = __commonJS({
      "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
        var Stack = require_Stack();
        var equalArrays = require_equalArrays();
        var equalByTag = require_equalByTag();
        var equalObjects = require_equalObjects();
        var getTag = require_getTag();
        var isArray = require_isArray();
        var isBuffer = require_isBuffer();
        var isTypedArray = require_isTypedArray();
        var COMPARE_PARTIAL_FLAG = 1;
        var argsTag = "[object Arguments]";
        var arrayTag = "[object Array]";
        var objectTag = "[object Object]";
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        module.exports = baseIsEqualDeep;
      }
    });
  
    // node_modules/lodash/_baseIsEqual.js
    var require_baseIsEqual = __commonJS({
      "node_modules/lodash/_baseIsEqual.js"(exports, module) {
        var baseIsEqualDeep = require_baseIsEqualDeep();
        var isObjectLike = require_isObjectLike();
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        module.exports = baseIsEqual;
      }
    });
  
    // node_modules/lodash/_baseIsMatch.js
    var require_baseIsMatch = __commonJS({
      "node_modules/lodash/_baseIsMatch.js"(exports, module) {
        var Stack = require_Stack();
        var baseIsEqual = require_baseIsEqual();
        var COMPARE_PARTIAL_FLAG = 1;
        var COMPARE_UNORDERED_FLAG = 2;
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === void 0 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
                return false;
              }
            }
          }
          return true;
        }
        module.exports = baseIsMatch;
      }
    });
  
    // node_modules/lodash/_isStrictComparable.js
    var require_isStrictComparable = __commonJS({
      "node_modules/lodash/_isStrictComparable.js"(exports, module) {
        var isObject = require_isObject();
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        module.exports = isStrictComparable;
      }
    });
  
    // node_modules/lodash/_getMatchData.js
    var require_getMatchData = __commonJS({
      "node_modules/lodash/_getMatchData.js"(exports, module) {
        var isStrictComparable = require_isStrictComparable();
        var keys = require_keys();
        function getMatchData(object) {
          var result = keys(object), length = result.length;
          while (length--) {
            var key = result[length], value = object[key];
            result[length] = [key, value, isStrictComparable(value)];
          }
          return result;
        }
        module.exports = getMatchData;
      }
    });
  
    // node_modules/lodash/_matchesStrictComparable.js
    var require_matchesStrictComparable = __commonJS({
      "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
          };
        }
        module.exports = matchesStrictComparable;
      }
    });
  
    // node_modules/lodash/_baseMatches.js
    var require_baseMatches = __commonJS({
      "node_modules/lodash/_baseMatches.js"(exports, module) {
        var baseIsMatch = require_baseIsMatch();
        var getMatchData = require_getMatchData();
        var matchesStrictComparable = require_matchesStrictComparable();
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        module.exports = baseMatches;
      }
    });
  
    // node_modules/lodash/isSymbol.js
    var require_isSymbol = __commonJS({
      "node_modules/lodash/isSymbol.js"(exports, module) {
        var baseGetTag = require_baseGetTag();
        var isObjectLike = require_isObjectLike();
        var symbolTag = "[object Symbol]";
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        module.exports = isSymbol;
      }
    });
  
    // node_modules/lodash/_isKey.js
    var require_isKey = __commonJS({
      "node_modules/lodash/_isKey.js"(exports, module) {
        var isArray = require_isArray();
        var isSymbol = require_isSymbol();
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
        var reIsPlainProp = /^\w*$/;
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
        }
        module.exports = isKey;
      }
    });
  
    // node_modules/lodash/memoize.js
    var require_memoize = __commonJS({
      "node_modules/lodash/memoize.js"(exports, module) {
        var MapCache = require_MapCache();
        var FUNC_ERROR_TEXT = "Expected a function";
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result) || cache;
            return result;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        module.exports = memoize;
      }
    });
  
    // node_modules/lodash/_memoizeCapped.js
    var require_memoizeCapped = __commonJS({
      "node_modules/lodash/_memoizeCapped.js"(exports, module) {
        var memoize = require_memoize();
        var MAX_MEMOIZE_SIZE = 500;
        function memoizeCapped(func) {
          var result = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result.cache;
          return result;
        }
        module.exports = memoizeCapped;
      }
    });
  
    // node_modules/lodash/_stringToPath.js
    var require_stringToPath = __commonJS({
      "node_modules/lodash/_stringToPath.js"(exports, module) {
        var memoizeCapped = require_memoizeCapped();
        var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reEscapeChar = /\\(\\)?/g;
        var stringToPath = memoizeCapped(function(string) {
          var result = [];
          if (string.charCodeAt(0) === 46) {
            result.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result;
        });
        module.exports = stringToPath;
      }
    });
  
    // node_modules/lodash/_arrayMap.js
    var require_arrayMap = __commonJS({
      "node_modules/lodash/_arrayMap.js"(exports, module) {
        function arrayMap(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length, result = Array(length);
          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }
        module.exports = arrayMap;
      }
    });
  
    // node_modules/lodash/_baseToString.js
    var require_baseToString = __commonJS({
      "node_modules/lodash/_baseToString.js"(exports, module) {
        var Symbol2 = require_Symbol();
        var arrayMap = require_arrayMap();
        var isArray = require_isArray();
        var isSymbol = require_isSymbol();
        var INFINITY = 1 / 0;
        var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
        var symbolToString = symbolProto ? symbolProto.toString : void 0;
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result = value + "";
          return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }
        module.exports = baseToString;
      }
    });
  
    // node_modules/lodash/toString.js
    var require_toString = __commonJS({
      "node_modules/lodash/toString.js"(exports, module) {
        var baseToString = require_baseToString();
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        module.exports = toString;
      }
    });
  
    // node_modules/lodash/_castPath.js
    var require_castPath = __commonJS({
      "node_modules/lodash/_castPath.js"(exports, module) {
        var isArray = require_isArray();
        var isKey = require_isKey();
        var stringToPath = require_stringToPath();
        var toString = require_toString();
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        module.exports = castPath;
      }
    });
  
    // node_modules/lodash/_toKey.js
    var require_toKey = __commonJS({
      "node_modules/lodash/_toKey.js"(exports, module) {
        var isSymbol = require_isSymbol();
        var INFINITY = 1 / 0;
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result = value + "";
          return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }
        module.exports = toKey;
      }
    });
  
    // node_modules/lodash/_baseGet.js
    var require_baseGet = __commonJS({
      "node_modules/lodash/_baseGet.js"(exports, module) {
        var castPath = require_castPath();
        var toKey = require_toKey();
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : void 0;
        }
        module.exports = baseGet;
      }
    });
  
    // node_modules/lodash/get.js
    var require_get = __commonJS({
      "node_modules/lodash/get.js"(exports, module) {
        var baseGet = require_baseGet();
        function get3(object, path, defaultValue) {
          var result = object == null ? void 0 : baseGet(object, path);
          return result === void 0 ? defaultValue : result;
        }
        module.exports = get3;
      }
    });
  
    // node_modules/lodash/_baseHasIn.js
    var require_baseHasIn = __commonJS({
      "node_modules/lodash/_baseHasIn.js"(exports, module) {
        function baseHasIn(object, key) {
          return object != null && key in Object(object);
        }
        module.exports = baseHasIn;
      }
    });
  
    // node_modules/lodash/_hasPath.js
    var require_hasPath = __commonJS({
      "node_modules/lodash/_hasPath.js"(exports, module) {
        var castPath = require_castPath();
        var isArguments = require_isArguments();
        var isArray = require_isArray();
        var isIndex = require_isIndex();
        var isLength = require_isLength();
        var toKey = require_toKey();
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result || ++index != length) {
            return result;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        module.exports = hasPath;
      }
    });
  
    // node_modules/lodash/hasIn.js
    var require_hasIn = __commonJS({
      "node_modules/lodash/hasIn.js"(exports, module) {
        var baseHasIn = require_baseHasIn();
        var hasPath = require_hasPath();
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        module.exports = hasIn;
      }
    });
  
    // node_modules/lodash/_baseMatchesProperty.js
    var require_baseMatchesProperty = __commonJS({
      "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
        var baseIsEqual = require_baseIsEqual();
        var get3 = require_get();
        var hasIn = require_hasIn();
        var isKey = require_isKey();
        var isStrictComparable = require_isStrictComparable();
        var matchesStrictComparable = require_matchesStrictComparable();
        var toKey = require_toKey();
        var COMPARE_PARTIAL_FLAG = 1;
        var COMPARE_UNORDERED_FLAG = 2;
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get3(object, path);
            return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        module.exports = baseMatchesProperty;
      }
    });
  
    // node_modules/lodash/identity.js
    var require_identity = __commonJS({
      "node_modules/lodash/identity.js"(exports, module) {
        function identity(value) {
          return value;
        }
        module.exports = identity;
      }
    });
  
    // node_modules/lodash/_baseProperty.js
    var require_baseProperty = __commonJS({
      "node_modules/lodash/_baseProperty.js"(exports, module) {
        function baseProperty(key) {
          return function(object) {
            return object == null ? void 0 : object[key];
          };
        }
        module.exports = baseProperty;
      }
    });
  
    // node_modules/lodash/_basePropertyDeep.js
    var require_basePropertyDeep = __commonJS({
      "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
        var baseGet = require_baseGet();
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        module.exports = basePropertyDeep;
      }
    });
  
    // node_modules/lodash/property.js
    var require_property = __commonJS({
      "node_modules/lodash/property.js"(exports, module) {
        var baseProperty = require_baseProperty();
        var basePropertyDeep = require_basePropertyDeep();
        var isKey = require_isKey();
        var toKey = require_toKey();
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        module.exports = property;
      }
    });
  
    // node_modules/lodash/_baseIteratee.js
    var require_baseIteratee = __commonJS({
      "node_modules/lodash/_baseIteratee.js"(exports, module) {
        var baseMatches = require_baseMatches();
        var baseMatchesProperty = require_baseMatchesProperty();
        var identity = require_identity();
        var isArray = require_isArray();
        var property = require_property();
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        module.exports = baseIteratee;
      }
    });
  
    // node_modules/lodash/_createFind.js
    var require_createFind = __commonJS({
      "node_modules/lodash/_createFind.js"(exports, module) {
        var baseIteratee = require_baseIteratee();
        var isArrayLike = require_isArrayLike();
        var keys = require_keys();
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object(collection);
            if (!isArrayLike(collection)) {
              var iteratee = baseIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
          };
        }
        module.exports = createFind;
      }
    });
  
    // node_modules/lodash/_baseFindIndex.js
    var require_baseFindIndex = __commonJS({
      "node_modules/lodash/_baseFindIndex.js"(exports, module) {
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
              return index;
            }
          }
          return -1;
        }
        module.exports = baseFindIndex;
      }
    });
  
    // node_modules/lodash/_trimmedEndIndex.js
    var require_trimmedEndIndex = __commonJS({
      "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
        var reWhitespace = /\s/;
        function trimmedEndIndex(string) {
          var index = string.length;
          while (index-- && reWhitespace.test(string.charAt(index))) {
          }
          return index;
        }
        module.exports = trimmedEndIndex;
      }
    });
  
    // node_modules/lodash/_baseTrim.js
    var require_baseTrim = __commonJS({
      "node_modules/lodash/_baseTrim.js"(exports, module) {
        var trimmedEndIndex = require_trimmedEndIndex();
        var reTrimStart = /^\s+/;
        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        module.exports = baseTrim;
      }
    });
  
    // node_modules/lodash/toNumber.js
    var require_toNumber = __commonJS({
      "node_modules/lodash/toNumber.js"(exports, module) {
        var baseTrim = require_baseTrim();
        var isObject = require_isObject();
        var isSymbol = require_isSymbol();
        var NAN = 0 / 0;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsOctal = /^0o[0-7]+$/i;
        var freeParseInt = parseInt;
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        module.exports = toNumber;
      }
    });
  
    // node_modules/lodash/toFinite.js
    var require_toFinite = __commonJS({
      "node_modules/lodash/toFinite.js"(exports, module) {
        var toNumber = require_toNumber();
        var INFINITY = 1 / 0;
        var MAX_INTEGER = 17976931348623157e292;
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        module.exports = toFinite;
      }
    });
  
    // node_modules/lodash/toInteger.js
    var require_toInteger = __commonJS({
      "node_modules/lodash/toInteger.js"(exports, module) {
        var toFinite = require_toFinite();
        function toInteger(value) {
          var result = toFinite(value), remainder = result % 1;
          return result === result ? remainder ? result - remainder : result : 0;
        }
        module.exports = toInteger;
      }
    });
  
    // node_modules/lodash/findIndex.js
    var require_findIndex = __commonJS({
      "node_modules/lodash/findIndex.js"(exports, module) {
        var baseFindIndex = require_baseFindIndex();
        var baseIteratee = require_baseIteratee();
        var toInteger = require_toInteger();
        var nativeMax = Math.max;
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, baseIteratee(predicate, 3), index);
        }
        module.exports = findIndex;
      }
    });
  
    // node_modules/lodash/find.js
    var require_find = __commonJS({
      "node_modules/lodash/find.js"(exports, module) {
        var createFind = require_createFind();
        var findIndex = require_findIndex();
        var find3 = createFind(findIndex);
        module.exports = find3;
      }
    });
  
    // packages/systems/ix2/shared/logic/IX2BrowserSupport.ts
    var IX2BrowserSupport_exports = {};
    __export(IX2BrowserSupport_exports, {
      ELEMENT_MATCHES: () => ELEMENT_MATCHES,
      FLEX_PREFIXED: () => FLEX_PREFIXED,
      IS_BROWSER_ENV: () => IS_BROWSER_ENV,
      TRANSFORM_PREFIXED: () => TRANSFORM_PREFIXED,
      TRANSFORM_STYLE_PREFIXED: () => TRANSFORM_STYLE_PREFIXED,
      withBrowser: () => withBrowser
    });
    var import_find, IS_BROWSER_ENV, withBrowser, ELEMENT_MATCHES, FLEX_PREFIXED, TRANSFORM_PREFIXED, TRANSFORM_PREFIX, TRANSFORM_STYLE_PREFIXED;
    var init_IX2BrowserSupport = __esm({
      "packages/systems/ix2/shared/logic/IX2BrowserSupport.ts"() {
        "use strict";
        import_find = __toESM(require_find());
        IS_BROWSER_ENV = typeof window !== "undefined";
        withBrowser = (fn, fallback) => {
          if (IS_BROWSER_ENV) {
            return fn();
          }
          return fallback;
        };
        ELEMENT_MATCHES = withBrowser(() => {
          return (0, import_find.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector"
            ],
            (key) => key in Element.prototype
          );
        });
        FLEX_PREFIXED = withBrowser(() => {
          const el = document.createElement("i");
          const values = [
            "flex",
            "-webkit-flex",
            "-ms-flexbox",
            "-moz-box",
            "-webkit-box"
          ];
          const none = "";
          try {
            const { length } = values;
            for (let i = 0; i < length; i++) {
              const value = values[i];
              el.style.display = value;
              if (el.style.display === value) {
                return value;
              }
            }
            return none;
          } catch (err) {
            return none;
          }
        }, "flex");
        TRANSFORM_PREFIXED = withBrowser(() => {
          const el = document.createElement("i");
          if (el.style.transform == null) {
            const prefixes = ["Webkit", "Moz", "ms"];
            const suffix = "Transform";
            const { length } = prefixes;
            for (let i = 0; i < length; i++) {
              const prop = prefixes[i] + suffix;
              if (el.style[prop] !== void 0) {
                return prop;
              }
            }
          }
          return "transform";
        }, "transform");
        TRANSFORM_PREFIX = TRANSFORM_PREFIXED.split("transform")[0];
        TRANSFORM_STYLE_PREFIXED = TRANSFORM_PREFIX ? TRANSFORM_PREFIX + "TransformStyle" : "transformStyle";
      }
    });
  
    // node_modules/bezier-easing/src/index.js
    var require_src = __commonJS({
      "node_modules/bezier-easing/src/index.js"(exports, module) {
        var NEWTON_ITERATIONS = 4;
        var NEWTON_MIN_SLOPE = 1e-3;
        var SUBDIVISION_PRECISION = 1e-7;
        var SUBDIVISION_MAX_ITERATIONS = 10;
        var kSplineTableSize = 11;
        var kSampleStepSize = 1 / (kSplineTableSize - 1);
        var float32ArraySupported = typeof Float32Array === "function";
        function A(aA1, aA2) {
          return 1 - 3 * aA2 + 3 * aA1;
        }
        function B(aA1, aA2) {
          return 3 * aA2 - 6 * aA1;
        }
        function C(aA1) {
          return 3 * aA1;
        }
        function calcBezier(aT, aA1, aA2) {
          return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
        }
        function getSlope(aT, aA1, aA2) {
          return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
        }
        function binarySubdivide(aX, aA, aB, mX1, mX2) {
          var currentX, currentT, i = 0;
          do {
            currentT = aA + (aB - aA) / 2;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0) {
              aB = currentT;
            } else {
              aA = currentT;
            }
          } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
          return currentT;
        }
        function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
          for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0) {
              return aGuessT;
            }
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
          }
          return aGuessT;
        }
        module.exports = function bezier(mX1, mY1, mX2, mY2) {
          if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
            throw new Error("bezier x values must be in [0, 1] range");
          }
          var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
          if (mX1 !== mY1 || mX2 !== mY2) {
            for (var i = 0; i < kSplineTableSize; ++i) {
              sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
            }
          }
          function getTForX(aX) {
            var intervalStart = 0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;
            for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
              intervalStart += kSampleStepSize;
            }
            --currentSample;
            var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= NEWTON_MIN_SLOPE) {
              return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            } else if (initialSlope === 0) {
              return guessForT;
            } else {
              return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
            }
          }
          return function BezierEasing3(x) {
            if (mX1 === mY1 && mX2 === mY2) {
              return x;
            }
            if (x === 0) {
              return 0;
            }
            if (x === 1) {
              return 1;
            }
            return calcBezier(getTForX(x), mY1, mY2);
          };
        };
      }
    });
  
    // packages/systems/ix2/shared/logic/IX2Easings.ts
    var IX2Easings_exports = {};
    __export(IX2Easings_exports, {
      bounce: () => bounce,
      bouncePast: () => bouncePast,
      ease: () => ease,
      easeIn: () => easeIn,
      easeInOut: () => easeInOut,
      easeOut: () => easeOut,
      inBack: () => inBack,
      inCirc: () => inCirc,
      inCubic: () => inCubic,
      inElastic: () => inElastic,
      inExpo: () => inExpo,
      inOutBack: () => inOutBack,
      inOutCirc: () => inOutCirc,
      inOutCubic: () => inOutCubic,
      inOutElastic: () => inOutElastic,
      inOutExpo: () => inOutExpo,
      inOutQuad: () => inOutQuad,
      inOutQuart: () => inOutQuart,
      inOutQuint: () => inOutQuint,
      inOutSine: () => inOutSine,
      inQuad: () => inQuad,
      inQuart: () => inQuart,
      inQuint: () => inQuint,
      inSine: () => inSine,
      outBack: () => outBack,
      outBounce: () => outBounce,
      outCirc: () => outCirc,
      outCubic: () => outCubic,
      outElastic: () => outElastic,
      outExpo: () => outExpo,
      outQuad: () => outQuad,
      outQuart: () => outQuart,
      outQuint: () => outQuint,
      outSine: () => outSine,
      swingFrom: () => swingFrom,
      swingFromTo: () => swingFromTo,
      swingTo: () => swingTo
    });
    function inQuad(pos) {
      return Math.pow(pos, 2);
    }
    function outQuad(pos) {
      return -(Math.pow(pos - 1, 2) - 1);
    }
    function inOutQuad(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 2);
      }
      return -0.5 * ((pos -= 2) * pos - 2);
    }
    function inCubic(pos) {
      return Math.pow(pos, 3);
    }
    function outCubic(pos) {
      return Math.pow(pos - 1, 3) + 1;
    }
    function inOutCubic(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 3);
      }
      return 0.5 * (Math.pow(pos - 2, 3) + 2);
    }
    function inQuart(pos) {
      return Math.pow(pos, 4);
    }
    function outQuart(pos) {
      return -(Math.pow(pos - 1, 4) - 1);
    }
    function inOutQuart(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 4);
      }
      return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
    }
    function inQuint(pos) {
      return Math.pow(pos, 5);
    }
    function outQuint(pos) {
      return Math.pow(pos - 1, 5) + 1;
    }
    function inOutQuint(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
      }
      return 0.5 * (Math.pow(pos - 2, 5) + 2);
    }
    function inSine(pos) {
      return -Math.cos(pos * (Math.PI / 2)) + 1;
    }
    function outSine(pos) {
      return Math.sin(pos * (Math.PI / 2));
    }
    function inOutSine(pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1);
    }
    function inExpo(pos) {
      return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
    }
    function outExpo(pos) {
      return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
    }
    function inOutExpo(pos) {
      if (pos === 0) {
        return 0;
      }
      if (pos === 1) {
        return 1;
      }
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(2, 10 * (pos - 1));
      }
      return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
    }
    function inCirc(pos) {
      return -(Math.sqrt(1 - pos * pos) - 1);
    }
    function outCirc(pos) {
      return Math.sqrt(1 - Math.pow(pos - 1, 2));
    }
    function inOutCirc(pos) {
      if ((pos /= 0.5) < 1) {
        return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
      }
      return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
    }
    function outBounce(pos) {
      if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
      } else if (pos < 2 / 2.75) {
        return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
      } else if (pos < 2.5 / 2.75) {
        return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
      } else {
        return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
      }
    }
    function inBack(pos) {
      const s = magicSwing;
      return pos * pos * ((s + 1) * pos - s);
    }
    function outBack(pos) {
      const s = magicSwing;
      return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
    }
    function inOutBack(pos) {
      let s = magicSwing;
      if ((pos /= 0.5) < 1) {
        return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
      }
      return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
    }
    function inElastic(pos) {
      let s = magicSwing;
      let p = 0;
      let a = 1;
      if (pos === 0) {
        return 0;
      }
      if (pos === 1) {
        return 1;
      }
      if (!p) {
        p = 0.3;
      }
      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }
      return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
    }
    function outElastic(pos) {
      let s = magicSwing;
      let p = 0;
      let a = 1;
      if (pos === 0) {
        return 0;
      }
      if (pos === 1) {
        return 1;
      }
      if (!p) {
        p = 0.3;
      }
      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }
      return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
    }
    function inOutElastic(pos) {
      let s = magicSwing;
      let p = 0;
      let a = 1;
      if (pos === 0) {
        return 0;
      }
      if ((pos /= 1 / 2) === 2) {
        return 1;
      }
      if (!p) {
        p = 0.3 * 1.5;
      }
      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      }
      if (pos < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
      }
      return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
    }
    function swingFromTo(pos) {
      let s = magicSwing;
      return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
    }
    function swingFrom(pos) {
      const s = magicSwing;
      return pos * pos * ((s + 1) * pos - s);
    }
    function swingTo(pos) {
      const s = magicSwing;
      return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
    }
    function bounce(pos) {
      if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
      } else if (pos < 2 / 2.75) {
        return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
      } else if (pos < 2.5 / 2.75) {
        return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
      } else {
        return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
      }
    }
    function bouncePast(pos) {
      if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
      } else if (pos < 2 / 2.75) {
        return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
      } else if (pos < 2.5 / 2.75) {
        return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
      } else {
        return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
      }
    }
    var import_bezier_easing, magicSwing, ease, easeIn, easeOut, easeInOut;
    var init_IX2Easings = __esm({
      "packages/systems/ix2/shared/logic/IX2Easings.ts"() {
        "use strict";
        import_bezier_easing = __toESM(require_src());
        magicSwing = 1.70158;
        ease = (0, import_bezier_easing.default)(0.25, 0.1, 0.25, 1);
        easeIn = (0, import_bezier_easing.default)(0.42, 0, 1, 1);
        easeOut = (0, import_bezier_easing.default)(0, 0, 0.58, 1);
        easeInOut = (0, import_bezier_easing.default)(0.42, 0, 0.58, 1);
      }
    });
  
    // packages/systems/ix2/shared/logic/IX2EasingUtils.ts
    var IX2EasingUtils_exports = {};
    __export(IX2EasingUtils_exports, {
      applyEasing: () => applyEasing,
      createBezierEasing: () => createBezierEasing,
      optimizeFloat: () => optimizeFloat
    });
    function optimizeFloat(value, digits = 5, base = 10) {
      const pow = Math.pow(base, digits);
      const float = Number(Math.round(value * pow) / pow);
      return Math.abs(float) > 1e-4 ? float : 0;
    }
    function createBezierEasing(easing) {
      return (0, import_bezier_easing2.default)(...easing);
    }
    function applyEasing(easing, position, customEasingFn) {
      if (position === 0) {
        return 0;
      }
      if (position === 1) {
        return 1;
      }
      if (customEasingFn) {
        return optimizeFloat(position > 0 ? customEasingFn(position) : position);
      }
      return optimizeFloat(
        position > 0 && easing && IX2Easings_exports[easing] ? IX2Easings_exports[easing](position) : position
      );
    }
    var import_bezier_easing2;
    var init_IX2EasingUtils = __esm({
      "packages/systems/ix2/shared/logic/IX2EasingUtils.ts"() {
        "use strict";
        init_IX2Easings();
        import_bezier_easing2 = __toESM(require_src());
      }
    });
  
    // packages/systems/ix2/shared/reducers/IX2ElementsReducer.ts
    var IX2ElementsReducer_exports = {};
    __export(IX2ElementsReducer_exports, {
      createElementState: () => createElementState,
      ixElements: () => ixElements,
      mergeActionState: () => mergeActionState
    });
    function createElementState(state, ref, refType, elementId, actionItem) {
      const refId = refType === PLAIN_OBJECT2 ? (0, import_timm3.getIn)(actionItem, ["config", "target", "objectId"]) : null;
      return (0, import_timm3.mergeIn)(state, [elementId], {
        id: elementId,
        ref,
        refId,
        refType
      });
    }
    function mergeActionState(state, elementId, actionTypeId, actionState, actionItem) {
      const units = pickUnits(actionItem);
      const mergePath = [elementId, refState, actionTypeId];
      return (0, import_timm3.mergeIn)(state, mergePath, actionState, units);
    }
    function pickUnits(actionItem) {
      const { config } = actionItem;
      return valueUnitPairs.reduce((result, pair) => {
        const valueKey = pair[0];
        const unitKey = pair[1];
        const configValue = config[valueKey];
        const configUnit = config[unitKey];
        if (configValue != null && configUnit != null) {
          result[unitKey] = configUnit;
        }
        return result;
      }, {});
    }
    var import_timm3, HTML_ELEMENT2, PLAIN_OBJECT2, ABSTRACT_NODE2, CONFIG_X_VALUE2, CONFIG_Y_VALUE2, CONFIG_Z_VALUE2, CONFIG_VALUE2, CONFIG_X_UNIT2, CONFIG_Y_UNIT2, CONFIG_Z_UNIT2, CONFIG_UNIT2, IX2_SESSION_STOPPED3, IX2_INSTANCE_ADDED2, IX2_ELEMENT_STATE_CHANGED2, initialState3, refState, ixElements, valueUnitPairs;
    var init_IX2ElementsReducer = __esm({
      "packages/systems/ix2/shared/reducers/IX2ElementsReducer.ts"() {
        "use strict";
        import_timm3 = __toESM(require_timm());
        init_shared_constants();
        ({
          HTML_ELEMENT: HTML_ELEMENT2,
          PLAIN_OBJECT: PLAIN_OBJECT2,
          ABSTRACT_NODE: ABSTRACT_NODE2,
          CONFIG_X_VALUE: CONFIG_X_VALUE2,
          CONFIG_Y_VALUE: CONFIG_Y_VALUE2,
          CONFIG_Z_VALUE: CONFIG_Z_VALUE2,
          CONFIG_VALUE: CONFIG_VALUE2,
          CONFIG_X_UNIT: CONFIG_X_UNIT2,
          CONFIG_Y_UNIT: CONFIG_Y_UNIT2,
          CONFIG_Z_UNIT: CONFIG_Z_UNIT2,
          CONFIG_UNIT: CONFIG_UNIT2
        } = IX2EngineConstants_exports);
        ({ IX2_SESSION_STOPPED: IX2_SESSION_STOPPED3, IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED2, IX2_ELEMENT_STATE_CHANGED: IX2_ELEMENT_STATE_CHANGED2 } = IX2EngineActionTypes_exports);
        initialState3 = {};
        refState = "refState";
        ixElements = (state = initialState3, action = {}) => {
          switch (action.type) {
            case IX2_SESSION_STOPPED3: {
              return initialState3;
            }
            case IX2_INSTANCE_ADDED2: {
              const {
                elementId,
                element: ref,
                origin,
                actionItem,
                refType
              } = action.payload;
              const { actionTypeId } = actionItem;
              let newState = state;
              if ((0, import_timm3.getIn)(newState, [elementId, ref]) !== ref) {
                newState = createElementState(
                  newState,
                  ref,
                  refType,
                  elementId,
                  actionItem
                );
              }
              return mergeActionState(
                newState,
                elementId,
                actionTypeId,
                origin,
                actionItem
              );
            }
            case IX2_ELEMENT_STATE_CHANGED2: {
              const { elementId, actionTypeId, current, actionItem } = action.payload;
              return mergeActionState(
                state,
                elementId,
                actionTypeId,
                current,
                actionItem
              );
            }
            default: {
              return state;
            }
          }
        };
        valueUnitPairs = [
          [CONFIG_X_VALUE2, CONFIG_X_UNIT2],
          [CONFIG_Y_VALUE2, CONFIG_Y_UNIT2],
          [CONFIG_Z_VALUE2, CONFIG_Z_UNIT2],
          [CONFIG_VALUE2, CONFIG_UNIT2]
        ];
      }
    });
  
    // packages/systems/ix2/plugins/IX2Lottie.js
    var require_IX2Lottie = __commonJS({
      "packages/systems/ix2/plugins/IX2Lottie.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
        var getPluginConfig2 = (actionItemConfig) => {
          return actionItemConfig.value;
        };
        exports.getPluginConfig = getPluginConfig2;
        var getPluginDuration3 = (element, actionItem) => {
          if (actionItem.config.duration !== "auto") {
            return null;
          }
          const duration = parseFloat(element.getAttribute("data-duration"));
          if (duration > 0) {
            return duration * 1e3;
          }
          return parseFloat(element.getAttribute("data-default-duration")) * 1e3;
        };
        exports.getPluginDuration = getPluginDuration3;
        var getPluginOrigin2 = (refState2) => {
          return refState2 || {
            value: 0
          };
        };
        exports.getPluginOrigin = getPluginOrigin2;
        var getPluginDestination2 = (actionItemConfig) => {
          return {
            value: actionItemConfig.value
          };
        };
        exports.getPluginDestination = getPluginDestination2;
        var createPluginInstance3 = (element) => {
          const instance = window.Webflow.require("lottie").createInstance(element);
          instance.stop();
          instance.setSubframe(true);
          return instance;
        };
        exports.createPluginInstance = createPluginInstance3;
        var renderPlugin2 = (pluginInstance, refState2, actionItem) => {
          if (!pluginInstance) {
            return;
          }
          const percent = refState2[actionItem.actionTypeId].value / 100;
          pluginInstance.goToFrame(pluginInstance.frames * percent);
        };
        exports.renderPlugin = renderPlugin2;
        var clearPlugin2 = (element) => {
          const instance = window.Webflow.require("lottie").createInstance(element);
          instance.stop();
        };
        exports.clearPlugin = clearPlugin2;
      }
    });
  
    // packages/systems/ix2/plugins/IX2Spline.js
    var require_IX2Spline = __commonJS({
      "packages/systems/ix2/plugins/IX2Spline.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
        var queryContainerElement = (elementId) => document.querySelector(`[data-w-id="${elementId}"]`);
        var getFrontendModule = () => window.Webflow.require("spline");
        var difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));
        var getPluginConfig2 = (actionItemConfig, key) => {
          return actionItemConfig.value[key];
        };
        exports.getPluginConfig = getPluginConfig2;
        var getPluginDuration3 = () => {
          return null;
        };
        exports.getPluginDuration = getPluginDuration3;
        var DEFAULT_VALUES = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1
        });
        var getPluginOrigin2 = (refState2, actionItem) => {
          const destination = actionItem.config.value;
          const destinationKeys = Object.keys(destination);
          if (refState2) {
            const stateKeys2 = Object.keys(refState2);
            const diffKeys = difference(destinationKeys, stateKeys2);
            if (diffKeys.length) {
              const origin2 = diffKeys.reduce((result, key) => {
                result[key] = DEFAULT_VALUES[key];
                return result;
              }, refState2);
              return origin2;
            }
            return refState2;
          }
          const origin = destinationKeys.reduce((result, key) => {
            result[key] = DEFAULT_VALUES[key];
            return result;
          }, {});
          return origin;
        };
        exports.getPluginOrigin = getPluginOrigin2;
        var getPluginDestination2 = (actionItemConfig) => {
          return actionItemConfig.value;
        };
        exports.getPluginDestination = getPluginDestination2;
        var createPluginInstance3 = (element, actionItem) => {
          var _actionItem$config;
          const pluginElementId = actionItem === null || actionItem === void 0 || (_actionItem$config = actionItem.config) === null || _actionItem$config === void 0 || (_actionItem$config = _actionItem$config.target) === null || _actionItem$config === void 0 ? void 0 : _actionItem$config.pluginElement;
          return pluginElementId ? queryContainerElement(pluginElementId) : null;
        };
        exports.createPluginInstance = createPluginInstance3;
        var renderPlugin2 = (containerElement, refState2, actionItem) => {
          const frontendModule = getFrontendModule();
          const instance = frontendModule.getInstance(containerElement);
          const objectId = actionItem.config.target.objectId;
          const renderSpline = (spline) => {
            if (!spline) {
              throw new Error("Invalid spline app passed to renderSpline");
            }
            const obj = objectId && spline.findObjectById(objectId);
            if (!obj) {
              return;
            }
            const {
              PLUGIN_SPLINE: props
            } = refState2;
            if (props.positionX != null) {
              obj.position.x = props.positionX;
            }
            if (props.positionY != null) {
              obj.position.y = props.positionY;
            }
            if (props.positionZ != null) {
              obj.position.z = props.positionZ;
            }
            if (props.rotationX != null) {
              obj.rotation.x = props.rotationX;
            }
            if (props.rotationY != null) {
              obj.rotation.y = props.rotationY;
            }
            if (props.rotationZ != null) {
              obj.rotation.z = props.rotationZ;
            }
            if (props.scaleX != null) {
              obj.scale.x = props.scaleX;
            }
            if (props.scaleY != null) {
              obj.scale.y = props.scaleY;
            }
            if (props.scaleZ != null) {
              obj.scale.z = props.scaleZ;
            }
          };
          if (instance) {
            renderSpline(instance.spline);
          } else {
            frontendModule.setLoadHandler(containerElement, renderSpline);
          }
        };
        exports.renderPlugin = renderPlugin2;
        var clearPlugin2 = () => {
          return null;
        };
        exports.clearPlugin = clearPlugin2;
      }
    });
  
    // packages/systems/ix2/shared-utils/normalizeColor.js
    var require_normalizeColor = __commonJS({
      "packages/systems/ix2/shared-utils/normalizeColor.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.normalizeColor = normalizeColor2;
        var colorNamesObj = {
          aliceblue: "#F0F8FF",
          antiquewhite: "#FAEBD7",
          aqua: "#00FFFF",
          aquamarine: "#7FFFD4",
          azure: "#F0FFFF",
          beige: "#F5F5DC",
          bisque: "#FFE4C4",
          black: "#000000",
          blanchedalmond: "#FFEBCD",
          blue: "#0000FF",
          blueviolet: "#8A2BE2",
          brown: "#A52A2A",
          burlywood: "#DEB887",
          cadetblue: "#5F9EA0",
          chartreuse: "#7FFF00",
          chocolate: "#D2691E",
          coral: "#FF7F50",
          cornflowerblue: "#6495ED",
          cornsilk: "#FFF8DC",
          crimson: "#DC143C",
          cyan: "#00FFFF",
          darkblue: "#00008B",
          darkcyan: "#008B8B",
          darkgoldenrod: "#B8860B",
          darkgray: "#A9A9A9",
          darkgreen: "#006400",
          darkgrey: "#A9A9A9",
          darkkhaki: "#BDB76B",
          darkmagenta: "#8B008B",
          darkolivegreen: "#556B2F",
          darkorange: "#FF8C00",
          darkorchid: "#9932CC",
          darkred: "#8B0000",
          darksalmon: "#E9967A",
          darkseagreen: "#8FBC8F",
          darkslateblue: "#483D8B",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          darkturquoise: "#00CED1",
          darkviolet: "#9400D3",
          deeppink: "#FF1493",
          deepskyblue: "#00BFFF",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1E90FF",
          firebrick: "#B22222",
          floralwhite: "#FFFAF0",
          forestgreen: "#228B22",
          fuchsia: "#FF00FF",
          gainsboro: "#DCDCDC",
          ghostwhite: "#F8F8FF",
          gold: "#FFD700",
          goldenrod: "#DAA520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#ADFF2F",
          grey: "#808080",
          honeydew: "#F0FFF0",
          hotpink: "#FF69B4",
          indianred: "#CD5C5C",
          indigo: "#4B0082",
          ivory: "#FFFFF0",
          khaki: "#F0E68C",
          lavender: "#E6E6FA",
          lavenderblush: "#FFF0F5",
          lawngreen: "#7CFC00",
          lemonchiffon: "#FFFACD",
          lightblue: "#ADD8E6",
          lightcoral: "#F08080",
          lightcyan: "#E0FFFF",
          lightgoldenrodyellow: "#FAFAD2",
          lightgray: "#D3D3D3",
          lightgreen: "#90EE90",
          lightgrey: "#D3D3D3",
          lightpink: "#FFB6C1",
          lightsalmon: "#FFA07A",
          lightseagreen: "#20B2AA",
          lightskyblue: "#87CEFA",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#B0C4DE",
          lightyellow: "#FFFFE0",
          lime: "#00FF00",
          limegreen: "#32CD32",
          linen: "#FAF0E6",
          magenta: "#FF00FF",
          maroon: "#800000",
          mediumaquamarine: "#66CDAA",
          mediumblue: "#0000CD",
          mediumorchid: "#BA55D3",
          mediumpurple: "#9370DB",
          mediumseagreen: "#3CB371",
          mediumslateblue: "#7B68EE",
          mediumspringgreen: "#00FA9A",
          mediumturquoise: "#48D1CC",
          mediumvioletred: "#C71585",
          midnightblue: "#191970",
          mintcream: "#F5FFFA",
          mistyrose: "#FFE4E1",
          moccasin: "#FFE4B5",
          navajowhite: "#FFDEAD",
          navy: "#000080",
          oldlace: "#FDF5E6",
          olive: "#808000",
          olivedrab: "#6B8E23",
          orange: "#FFA500",
          orangered: "#FF4500",
          orchid: "#DA70D6",
          palegoldenrod: "#EEE8AA",
          palegreen: "#98FB98",
          paleturquoise: "#AFEEEE",
          palevioletred: "#DB7093",
          papayawhip: "#FFEFD5",
          peachpuff: "#FFDAB9",
          peru: "#CD853F",
          pink: "#FFC0CB",
          plum: "#DDA0DD",
          powderblue: "#B0E0E6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#FF0000",
          rosybrown: "#BC8F8F",
          royalblue: "#4169E1",
          saddlebrown: "#8B4513",
          salmon: "#FA8072",
          sandybrown: "#F4A460",
          seagreen: "#2E8B57",
          seashell: "#FFF5EE",
          sienna: "#A0522D",
          silver: "#C0C0C0",
          skyblue: "#87CEEB",
          slateblue: "#6A5ACD",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#FFFAFA",
          springgreen: "#00FF7F",
          steelblue: "#4682B4",
          tan: "#D2B48C",
          teal: "#008080",
          thistle: "#D8BFD8",
          tomato: "#FF6347",
          turquoise: "#40E0D0",
          violet: "#EE82EE",
          wheat: "#F5DEB3",
          white: "#FFFFFF",
          whitesmoke: "#F5F5F5",
          yellow: "#FFFF00",
          yellowgreen: "#9ACD32"
        };
        function normalizeColor2(inputColor) {
          let red;
          let green;
          let blue;
          let alpha = 1;
          const rawColor = inputColor.replace(/\s/g, "").toLowerCase();
          const namedColor = typeof colorNamesObj[rawColor] === "string" ? colorNamesObj[rawColor].toLowerCase() : null;
          const cleanColor = namedColor || rawColor;
          if (cleanColor.startsWith("#")) {
            const hex = cleanColor.substring(1);
            if (hex.length === 3) {
              red = parseInt(hex[0] + hex[0], 16);
              green = parseInt(hex[1] + hex[1], 16);
              blue = parseInt(hex[2] + hex[2], 16);
            } else if (hex.length === 6) {
              red = parseInt(hex.substring(0, 2), 16);
              green = parseInt(hex.substring(2, 4), 16);
              blue = parseInt(hex.substring(4, 6), 16);
            }
          } else if (cleanColor.startsWith("rgba")) {
            const rgbaValues = cleanColor.match(/rgba\(([^)]+)\)/)[1].split(",");
            red = parseInt(rgbaValues[0], 10);
            green = parseInt(rgbaValues[1], 10);
            blue = parseInt(rgbaValues[2], 10);
            alpha = parseFloat(rgbaValues[3]);
          } else if (cleanColor.startsWith("rgb")) {
            const rgbValues = cleanColor.match(/rgb\(([^)]+)\)/)[1].split(",");
            red = parseInt(rgbValues[0], 10);
            green = parseInt(rgbValues[1], 10);
            blue = parseInt(rgbValues[2], 10);
          } else if (cleanColor.startsWith("hsla")) {
            const hslaValues = cleanColor.match(/hsla\(([^)]+)\)/)[1].split(",");
            const h = parseFloat(hslaValues[0]);
            const s = parseFloat(hslaValues[1].replace("%", "")) / 100;
            const l = parseFloat(hslaValues[2].replace("%", "")) / 100;
            alpha = parseFloat(hslaValues[3]);
            const C = (1 - Math.abs(2 * l - 1)) * s;
            const X = C * (1 - Math.abs(h / 60 % 2 - 1));
            const m = l - C / 2;
            let R;
            let G;
            let B;
            if (h >= 0 && h < 60) {
              R = C;
              G = X;
              B = 0;
            } else if (h >= 60 && h < 120) {
              R = X;
              G = C;
              B = 0;
            } else if (h >= 120 && h < 180) {
              R = 0;
              G = C;
              B = X;
            } else if (h >= 180 && h < 240) {
              R = 0;
              G = X;
              B = C;
            } else if (h >= 240 && h < 300) {
              R = X;
              G = 0;
              B = C;
            } else {
              R = C;
              G = 0;
              B = X;
            }
            red = Math.round((R + m) * 255);
            green = Math.round((G + m) * 255);
            blue = Math.round((B + m) * 255);
          } else if (cleanColor.startsWith("hsl")) {
            const hslValues = cleanColor.match(/hsl\(([^)]+)\)/)[1].split(",");
            const h = parseFloat(hslValues[0]);
            const s = parseFloat(hslValues[1].replace("%", "")) / 100;
            const l = parseFloat(hslValues[2].replace("%", "")) / 100;
            const C = (1 - Math.abs(2 * l - 1)) * s;
            const X = C * (1 - Math.abs(h / 60 % 2 - 1));
            const m = l - C / 2;
            let R;
            let G;
            let B;
            if (h >= 0 && h < 60) {
              R = C;
              G = X;
              B = 0;
            } else if (h >= 60 && h < 120) {
              R = X;
              G = C;
              B = 0;
            } else if (h >= 120 && h < 180) {
              R = 0;
              G = C;
              B = X;
            } else if (h >= 180 && h < 240) {
              R = 0;
              G = X;
              B = C;
            } else if (h >= 240 && h < 300) {
              R = X;
              G = 0;
              B = C;
            } else {
              R = C;
              G = 0;
              B = X;
            }
            red = Math.round((R + m) * 255);
            green = Math.round((G + m) * 255);
            blue = Math.round((B + m) * 255);
          }
          if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
            throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${inputColor}'`);
          }
          return {
            red,
            green,
            blue,
            alpha
          };
        }
      }
    });
  
    // packages/systems/ix2/plugins/IX2Variable.js
    var require_IX2Variable = __commonJS({
      "packages/systems/ix2/plugins/IX2Variable.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
        var _normalizeColor = require_normalizeColor();
        var getPluginConfig2 = (actionItemConfig, key) => {
          return actionItemConfig.value[key];
        };
        exports.getPluginConfig = getPluginConfig2;
        var getPluginDuration3 = () => {
          return null;
        };
        exports.getPluginDuration = getPluginDuration3;
        var getPluginOrigin2 = (refState2, actionItem) => {
          if (refState2) {
            return refState2;
          }
          const destination = actionItem.config.value;
          const objectId = actionItem.config.target.objectId;
          const computedValue = getComputedStyle(document.documentElement).getPropertyValue(objectId);
          if (destination.size != null) {
            return {
              size: parseInt(computedValue, 10)
            };
          }
          if (destination.red != null && destination.green != null && destination.blue != null) {
            return (0, _normalizeColor.normalizeColor)(computedValue);
          }
        };
        exports.getPluginOrigin = getPluginOrigin2;
        var getPluginDestination2 = (actionItemConfig) => {
          return actionItemConfig.value;
        };
        exports.getPluginDestination = getPluginDestination2;
        var createPluginInstance3 = () => {
          return null;
        };
        exports.createPluginInstance = createPluginInstance3;
        var renderPlugin2 = (_, refState2, actionItem) => {
          const objectId = actionItem.config.target.objectId;
          const unit = actionItem.config.value.unit;
          const {
            PLUGIN_VARIABLE: props
          } = refState2;
          const {
            size: size2,
            red,
            green,
            blue,
            alpha
          } = props;
          let value;
          if (size2 != null) {
            value = size2 + unit;
          }
          if (red != null && blue != null && green != null && alpha != null) {
            value = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
          }
          if (value != null) {
            document.documentElement.style.setProperty(objectId, value);
          }
        };
        exports.renderPlugin = renderPlugin2;
        var clearPlugin2 = (ref, actionItem) => {
          const objectId = actionItem.config.target.objectId;
          document.documentElement.style.removeProperty(objectId);
        };
        exports.clearPlugin = clearPlugin2;
      }
    });
  
    // packages/systems/ix2/plugins/index.js
    var require_plugins = __commonJS({
      "packages/systems/ix2/plugins/index.js"(exports) {
        "use strict";
        var _interopRequireWildcard = require_interopRequireWildcard().default;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.pluginMethodMap = void 0;
        var _sharedConstants = (init_shared_constants(), __toCommonJS(shared_constants_exports));
        var lottie = _interopRequireWildcard(require_IX2Lottie());
        var spline = _interopRequireWildcard(require_IX2Spline());
        var variable = _interopRequireWildcard(require_IX2Variable());
        var pluginMethodMap2 = exports.pluginMethodMap = /* @__PURE__ */ new Map([[_sharedConstants.ActionTypeConsts.PLUGIN_LOTTIE, {
          ...lottie
        }], [_sharedConstants.ActionTypeConsts.PLUGIN_SPLINE, {
          ...spline
        }], [_sharedConstants.ActionTypeConsts.PLUGIN_VARIABLE, {
          ...variable
        }]]);
      }
    });
  
    // packages/systems/ix2/shared/logic/IX2VanillaPlugins.ts
    var IX2VanillaPlugins_exports = {};
    __export(IX2VanillaPlugins_exports, {
      clearPlugin: () => clearPlugin,
      createPluginInstance: () => createPluginInstance,
      getPluginConfig: () => getPluginConfig,
      getPluginDestination: () => getPluginDestination,
      getPluginDuration: () => getPluginDuration,
      getPluginOrigin: () => getPluginOrigin,
      isPluginType: () => isPluginType,
      renderPlugin: () => renderPlugin
    });
    function isPluginType(actionTypeId) {
      return import_plugins.pluginMethodMap.has(actionTypeId);
    }
    var import_plugins, pluginMethod, getPluginConfig, getPluginOrigin, getPluginDuration, getPluginDestination, createPluginInstance, renderPlugin, clearPlugin;
    var init_IX2VanillaPlugins = __esm({
      "packages/systems/ix2/shared/logic/IX2VanillaPlugins.ts"() {
        "use strict";
        init_IX2BrowserSupport();
        import_plugins = __toESM(require_plugins());
        pluginMethod = (methodName) => (actionTypeId) => {
          if (!IS_BROWSER_ENV) {
            return () => null;
          }
          const plugin = import_plugins.pluginMethodMap.get(actionTypeId);
          if (!plugin) {
            throw new Error(`IX2 no plugin configured for: ${actionTypeId}`);
          }
          const method = plugin[methodName];
          if (!method) {
            throw new Error(`IX2 invalid plugin method: ${methodName}`);
          }
          return method;
        };
        getPluginConfig = pluginMethod("getPluginConfig");
        getPluginOrigin = pluginMethod("getPluginOrigin");
        getPluginDuration = pluginMethod("getPluginDuration");
        getPluginDestination = pluginMethod("getPluginDestination");
        createPluginInstance = pluginMethod("createPluginInstance");
        renderPlugin = pluginMethod("renderPlugin");
        clearPlugin = pluginMethod("clearPlugin");
      }
    });
  
    // node_modules/lodash/defaultTo.js
    var require_defaultTo = __commonJS({
      "node_modules/lodash/defaultTo.js"(exports, module) {
        function defaultTo2(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        module.exports = defaultTo2;
      }
    });
  
    // node_modules/lodash/_arrayReduce.js
    var require_arrayReduce = __commonJS({
      "node_modules/lodash/_arrayReduce.js"(exports, module) {
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1, length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }
        module.exports = arrayReduce;
      }
    });
  
    // node_modules/lodash/_createBaseFor.js
    var require_createBaseFor = __commonJS({
      "node_modules/lodash/_createBaseFor.js"(exports, module) {
        function createBaseFor(fromRight) {
          return function(object, iteratee, keysFunc) {
            var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        module.exports = createBaseFor;
      }
    });
  
    // node_modules/lodash/_baseFor.js
    var require_baseFor = __commonJS({
      "node_modules/lodash/_baseFor.js"(exports, module) {
        var createBaseFor = require_createBaseFor();
        var baseFor = createBaseFor();
        module.exports = baseFor;
      }
    });
  
    // node_modules/lodash/_baseForOwn.js
    var require_baseForOwn = __commonJS({
      "node_modules/lodash/_baseForOwn.js"(exports, module) {
        var baseFor = require_baseFor();
        var keys = require_keys();
        function baseForOwn(object, iteratee) {
          return object && baseFor(object, iteratee, keys);
        }
        module.exports = baseForOwn;
      }
    });
  
    // node_modules/lodash/_createBaseEach.js
    var require_createBaseEach = __commonJS({
      "node_modules/lodash/_createBaseEach.js"(exports, module) {
        var isArrayLike = require_isArrayLike();
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        module.exports = createBaseEach;
      }
    });
  
    // node_modules/lodash/_baseEach.js
    var require_baseEach = __commonJS({
      "node_modules/lodash/_baseEach.js"(exports, module) {
        var baseForOwn = require_baseForOwn();
        var createBaseEach = require_createBaseEach();
        var baseEach = createBaseEach(baseForOwn);
        module.exports = baseEach;
      }
    });
  
    // node_modules/lodash/_baseReduce.js
    var require_baseReduce = __commonJS({
      "node_modules/lodash/_baseReduce.js"(exports, module) {
        function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index, collection2) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
          });
          return accumulator;
        }
        module.exports = baseReduce;
      }
    });
  
    // node_modules/lodash/reduce.js
    var require_reduce = __commonJS({
      "node_modules/lodash/reduce.js"(exports, module) {
        var arrayReduce = require_arrayReduce();
        var baseEach = require_baseEach();
        var baseIteratee = require_baseIteratee();
        var baseReduce = require_baseReduce();
        var isArray = require_isArray();
        function reduce2(collection, iteratee, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
        }
        module.exports = reduce2;
      }
    });
  
    // node_modules/lodash/findLastIndex.js
    var require_findLastIndex = __commonJS({
      "node_modules/lodash/findLastIndex.js"(exports, module) {
        var baseFindIndex = require_baseFindIndex();
        var baseIteratee = require_baseIteratee();
        var toInteger = require_toInteger();
        var nativeMax = Math.max;
        var nativeMin = Math.min;
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== void 0) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
        }
        module.exports = findLastIndex;
      }
    });
  
    // node_modules/lodash/findLast.js
    var require_findLast = __commonJS({
      "node_modules/lodash/findLast.js"(exports, module) {
        var createFind = require_createFind();
        var findLastIndex = require_findLastIndex();
        var findLast2 = createFind(findLastIndex);
        module.exports = findLast2;
      }
    });
  
    // packages/systems/ix2/shared/logic/shallowEqual.ts
    function is(x, y) {
      if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
      }
      return x !== x && y !== y;
    }
    function shallowEqual(objA, objB) {
      if (is(objA, objB)) {
        return true;
      }
      if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
        return false;
      }
      const keysA = Object.keys(objA);
      const keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      for (let i = 0; i < keysA.length; i++) {
        if (
          // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'PropertyKey'.
          !hasOwnProperty.call(objB, keysA[i]) || // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
          !is(objA[keysA[i]], objB[keysA[i]])
        ) {
          return false;
        }
      }
      return true;
    }
    var hasOwnProperty, shallowEqual_default;
    var init_shallowEqual = __esm({
      "packages/systems/ix2/shared/logic/shallowEqual.ts"() {
        "use strict";
        hasOwnProperty = Object.prototype.hasOwnProperty;
        shallowEqual_default = shallowEqual;
      }
    });
  
    // packages/systems/ix2/shared/logic/IX2VanillaUtils.ts
    var IX2VanillaUtils_exports = {};
    __export(IX2VanillaUtils_exports, {
      cleanupHTMLElement: () => cleanupHTMLElement,
      clearAllStyles: () => clearAllStyles,
      clearObjectCache: () => clearObjectCache,
      getActionListProgress: () => getActionListProgress,
      getAffectedElements: () => getAffectedElements,
      getComputedStyle: () => getComputedStyle2,
      getDestinationValues: () => getDestinationValues,
      getElementId: () => getElementId,
      getInstanceId: () => getInstanceId,
      getInstanceOrigin: () => getInstanceOrigin,
      getItemConfigByKey: () => getItemConfigByKey,
      getMaxDurationItemIndex: () => getMaxDurationItemIndex,
      getNamespacedParameterId: () => getNamespacedParameterId,
      getRenderType: () => getRenderType,
      getStyleProp: () => getStyleProp,
      mediaQueriesEqual: () => mediaQueriesEqual,
      observeStore: () => observeStore,
      reduceListToGroup: () => reduceListToGroup,
      reifyState: () => reifyState,
      renderHTMLElement: () => renderHTMLElement,
      shallowEqual: () => shallowEqual_default,
      shouldAllowMediaQuery: () => shouldAllowMediaQuery,
      shouldNamespaceEventParameter: () => shouldNamespaceEventParameter,
      stringifyTarget: () => stringifyTarget
    });
    function clearObjectCache() {
      objectCache.clear();
    }
    function getInstanceId() {
      return "i" + instanceCount++;
    }
    function getElementId(ixElements3, ref) {
      for (const key in ixElements3) {
        const ixEl = ixElements3[key];
        if (ixEl && ixEl.ref === ref) {
          return ixEl.id;
        }
      }
      return "e" + elementCount++;
    }
    function reifyState({ events, actionLists, site } = {}) {
      const eventTypeMap = (0, import_reduce.default)(
        events,
        (result, event) => {
          const { eventTypeId } = event;
          if (!result[eventTypeId]) {
            result[eventTypeId] = {};
          }
          result[eventTypeId][event.id] = event;
          return result;
        },
        {}
      );
      let mediaQueries = site && site.mediaQueries;
      let mediaQueryKeys = [];
      if (mediaQueries) {
        mediaQueryKeys = mediaQueries.map((mq) => mq.key);
      } else {
        mediaQueries = [];
        console.warn(`IX2 missing mediaQueries in site data`);
      }
      return {
        ixData: {
          events,
          actionLists,
          eventTypeMap,
          mediaQueries,
          mediaQueryKeys
        }
      };
    }
    function observeStore({
      // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
      store,
      // @ts-expect-error - TS7031 - Binding element 'select' implicitly has an 'any' type.
      select,
      // @ts-expect-error - TS7031 - Binding element 'onChange' implicitly has an 'any' type.
      onChange,
      comparator = strictEqual
    }) {
      const { getState, subscribe } = store;
      const unsubscribe = subscribe(handleChange);
      let currentState = select(getState());
      function handleChange() {
        const nextState = select(getState());
        if (nextState == null) {
          unsubscribe();
          return;
        }
        if (!comparator(nextState, currentState)) {
          currentState = nextState;
          onChange(currentState, store);
        }
      }
      return unsubscribe;
    }
    function normalizeTarget(target) {
      const type = typeof target;
      if (type === "string") {
        return { id: target };
      } else if (target != null && type === "object") {
        const { id, objectId, selector, selectorGuids, appliesTo, useEventTarget } = target;
        return { id, objectId, selector, selectorGuids, appliesTo, useEventTarget };
      }
      return {};
    }
    function getAffectedElements({
      config,
      event,
      eventTarget,
      elementRoot,
      elementApi
    }) {
      if (!elementApi) {
        throw new Error("IX2 missing elementApi");
      }
      const { targets } = config;
      if (Array.isArray(targets) && targets.length > 0) {
        return targets.reduce(
          (accumulator, target2) => accumulator.concat(
            getAffectedElements({
              config: { target: target2 },
              event,
              eventTarget,
              elementRoot,
              elementApi
            })
          ),
          []
        );
      }
      const {
        getValidDocument: getValidDocument2,
        getQuerySelector: getQuerySelector2,
        queryDocument: queryDocument2,
        getChildElements: getChildElements2,
        getSiblingElements: getSiblingElements2,
        matchSelector: matchSelector2,
        elementContains: elementContains2,
        isSiblingNode: isSiblingNode2
      } = elementApi;
      const { target } = config;
      if (!target) {
        return [];
      }
      const {
        id,
        objectId,
        selector,
        selectorGuids,
        appliesTo,
        useEventTarget
      } = normalizeTarget(target);
      if (objectId) {
        const ref = objectCache.has(objectId) ? objectCache.get(objectId) : objectCache.set(objectId, {}).get(objectId);
        return [ref];
      }
      if (appliesTo === EventAppliesTo.PAGE) {
        const doc = getValidDocument2(id);
        return doc ? [doc] : [];
      }
      const overrides = event?.action?.config?.affectedElements ?? {};
      const override = overrides[id || selector] || {};
      const validOverride = Boolean(override.id || override.selector);
      let limitAffectedElements;
      let baseSelector;
      let finalSelector;
      const eventTargetSelector = event && getQuerySelector2(normalizeTarget(event.target));
      if (validOverride) {
        limitAffectedElements = override.limitAffectedElements;
        baseSelector = eventTargetSelector;
        finalSelector = getQuerySelector2(override);
      } else {
        baseSelector = finalSelector = getQuerySelector2({
          id,
          selector,
          selectorGuids
        });
      }
      if (event && useEventTarget) {
        const eventTargets = eventTarget && (finalSelector || useEventTarget === true) ? [eventTarget] : queryDocument2(eventTargetSelector);
        if (finalSelector) {
          if (useEventTarget === PARENT2) {
            return queryDocument2(finalSelector).filter(
              (parentElement) => eventTargets.some(
                (targetElement) => elementContains2(parentElement, targetElement)
              )
            );
          }
          if (useEventTarget === CHILDREN2) {
            return queryDocument2(finalSelector).filter(
              (childElement) => eventTargets.some(
                (targetElement) => elementContains2(targetElement, childElement)
              )
            );
          }
          if (useEventTarget === SIBLINGS2) {
            return queryDocument2(finalSelector).filter(
              (siblingElement) => eventTargets.some(
                (targetElement) => isSiblingNode2(targetElement, siblingElement)
              )
            );
          }
        }
        return eventTargets;
      }
      if (baseSelector == null || finalSelector == null) {
        return [];
      }
      if (IS_BROWSER_ENV && elementRoot) {
        return queryDocument2(finalSelector).filter(
          (element) => elementRoot.contains(element)
        );
      }
      if (limitAffectedElements === CHILDREN2) {
        return queryDocument2(baseSelector, finalSelector);
      } else if (limitAffectedElements === IMMEDIATE_CHILDREN2) {
        return getChildElements2(queryDocument2(baseSelector)).filter(
          matchSelector2(finalSelector)
        );
      } else if (limitAffectedElements === SIBLINGS2) {
        return getSiblingElements2(queryDocument2(baseSelector)).filter(
          matchSelector2(finalSelector)
        );
      } else {
        return queryDocument2(finalSelector);
      }
    }
    function getComputedStyle2({ element, actionItem }) {
      if (!IS_BROWSER_ENV) {
        return {};
      }
      const { actionTypeId } = actionItem;
      switch (actionTypeId) {
        case STYLE_SIZE2:
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR:
        case GENERAL_DISPLAY:
          return window.getComputedStyle(element);
        default:
          return {};
      }
    }
    function getInstanceOrigin(element, refState2 = {}, computedStyle = {}, actionItem, elementApi) {
      const { getStyle: getStyle2 } = elementApi;
      const { actionTypeId } = actionItem;
      if (isPluginType(actionTypeId)) {
        return getPluginOrigin(actionTypeId)(refState2[actionTypeId], actionItem);
      }
      switch (actionItem.actionTypeId) {
        case TRANSFORM_MOVE2:
        case TRANSFORM_SCALE2:
        case TRANSFORM_ROTATE2:
        case TRANSFORM_SKEW2: {
          return (
            // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW"' can't be used to index type '{}'.
            refState2[actionItem.actionTypeId] || transformDefaults[actionItem.actionTypeId]
          );
        }
        case STYLE_FILTER2:
          return getFilterDefaults(
            // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FILTER"' can't be used to index type '{}'.
            refState2[actionItem.actionTypeId],
            actionItem.config.filters
          );
        case STYLE_FONT_VARIATION2:
          return getFontVariationDefaults(
            // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FONT_VARIATION"' can't be used to index type '{}'.
            refState2[actionItem.actionTypeId],
            actionItem.config.fontVariations
          );
        case STYLE_OPACITY:
          return { value: (0, import_defaultTo.default)(parseFloat(getStyle2(element, OPACITY2)), 1) };
        case STYLE_SIZE2: {
          const inlineWidth = getStyle2(element, WIDTH2);
          const inlineHeight = getStyle2(element, HEIGHT2);
          let widthValue;
          let heightValue;
          if (actionItem.config.widthUnit === AUTO2) {
            widthValue = pxValueRegex.test(inlineWidth) ? parseFloat(inlineWidth) : (
              // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
              parseFloat(computedStyle.width)
            );
          } else {
            widthValue = (0, import_defaultTo.default)(
              parseFloat(inlineWidth),
              // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
              parseFloat(computedStyle.width)
            );
          }
          if (actionItem.config.heightUnit === AUTO2) {
            heightValue = pxValueRegex.test(inlineHeight) ? parseFloat(inlineHeight) : (
              // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
              parseFloat(computedStyle.height)
            );
          } else {
            heightValue = (0, import_defaultTo.default)(
              parseFloat(inlineHeight),
              // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
              parseFloat(computedStyle.height)
            );
          }
          return {
            widthValue,
            heightValue
          };
        }
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR:
          return parseColor({
            element,
            actionTypeId: actionItem.actionTypeId,
            computedStyle,
            getStyle: getStyle2
          });
        case GENERAL_DISPLAY:
          return {
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            value: (0, import_defaultTo.default)(getStyle2(element, DISPLAY2), computedStyle.display)
          };
        case OBJECT_VALUE:
          return refState2[actionItem.actionTypeId] || { value: 0 };
        default: {
          return;
        }
      }
    }
    function getDestinationValues({
      element,
      actionItem,
      elementApi
    }) {
      if (isPluginType(actionItem.actionTypeId)) {
        return getPluginDestination(actionItem.actionTypeId)(actionItem.config);
      }
      switch (actionItem.actionTypeId) {
        case TRANSFORM_MOVE2:
        case TRANSFORM_SCALE2:
        case TRANSFORM_ROTATE2:
        case TRANSFORM_SKEW2: {
          const { xValue, yValue, zValue } = actionItem.config;
          return { xValue, yValue, zValue };
        }
        case STYLE_SIZE2: {
          const { getStyle: getStyle2, setStyle: setStyle2, getProperty: getProperty2 } = elementApi;
          const { widthUnit, heightUnit } = actionItem.config;
          let { widthValue, heightValue } = actionItem.config;
          if (!IS_BROWSER_ENV) {
            return { widthValue, heightValue };
          }
          if (widthUnit === AUTO2) {
            const temp = getStyle2(element, WIDTH2);
            setStyle2(element, WIDTH2, "");
            widthValue = getProperty2(element, "offsetWidth");
            setStyle2(element, WIDTH2, temp);
          }
          if (heightUnit === AUTO2) {
            const temp = getStyle2(element, HEIGHT2);
            setStyle2(element, HEIGHT2, "");
            heightValue = getProperty2(element, "offsetHeight");
            setStyle2(element, HEIGHT2, temp);
          }
          return { widthValue, heightValue };
        }
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR: {
          const { rValue, gValue, bValue, aValue, globalSwatchId } = actionItem.config;
          if (globalSwatchId && globalSwatchId.startsWith("--")) {
            const { getStyle: getStyle2 } = elementApi;
            const value = getStyle2(element, globalSwatchId);
            const normalizedValue = (0, import_normalizeColor.normalizeColor)(value);
            return {
              rValue: normalizedValue.red,
              gValue: normalizedValue.green,
              bValue: normalizedValue.blue,
              aValue: normalizedValue.alpha
            };
          }
          return { rValue, gValue, bValue, aValue };
        }
        case STYLE_FILTER2: {
          return actionItem.config.filters.reduce(
            reduceFilters,
            {}
          );
        }
        case STYLE_FONT_VARIATION2: {
          return actionItem.config.fontVariations.reduce(
            reduceFontVariations,
            {}
          );
        }
        default: {
          const { value } = actionItem.config;
          return { value };
        }
      }
    }
    function getRenderType(actionTypeId) {
      if (/^TRANSFORM_/.test(actionTypeId)) {
        return RENDER_TRANSFORM2;
      }
      if (/^STYLE_/.test(actionTypeId)) {
        return RENDER_STYLE2;
      }
      if (/^GENERAL_/.test(actionTypeId)) {
        return RENDER_GENERAL2;
      }
      if (/^PLUGIN_/.test(actionTypeId)) {
        return RENDER_PLUGIN2;
      }
    }
    function getStyleProp(renderType, actionTypeId) {
      return renderType === RENDER_STYLE2 ? actionTypeId.replace("STYLE_", "").toLowerCase() : null;
    }
    function renderHTMLElement(element, refState2, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance) {
      switch (renderType) {
        case RENDER_TRANSFORM2: {
          return renderTransform(
            element,
            refState2,
            actionState,
            actionItem,
            elementApi
          );
        }
        case RENDER_STYLE2: {
          return renderStyle(
            element,
            refState2,
            actionState,
            actionItem,
            styleProp,
            elementApi
          );
        }
        case RENDER_GENERAL2: {
          return renderGeneral(element, actionItem, elementApi);
        }
        case RENDER_PLUGIN2: {
          const { actionTypeId } = actionItem;
          if (isPluginType(actionTypeId)) {
            return renderPlugin(actionTypeId)(pluginInstance, refState2, actionItem);
          }
        }
      }
    }
    function renderTransform(element, refState2, actionState, actionItem, elementApi) {
      const newTransform = transformKeys.map((actionTypeId) => {
        const defaults = transformDefaults[actionTypeId];
        const {
          xValue = defaults.xValue,
          yValue = defaults.yValue,
          zValue = defaults.zValue,
          xUnit = "",
          yUnit = "",
          zUnit = ""
        } = refState2[actionTypeId] || {};
        switch (actionTypeId) {
          case TRANSFORM_MOVE2:
            return `${TRANSLATE_3D2}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
          case TRANSFORM_SCALE2:
            return `${SCALE_3D2}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
          case TRANSFORM_ROTATE2:
            return `${ROTATE_X2}(${xValue}${xUnit}) ${ROTATE_Y2}(${yValue}${yUnit}) ${ROTATE_Z2}(${zValue}${zUnit})`;
          case TRANSFORM_SKEW2:
            return `${SKEW2}(${xValue}${xUnit}, ${yValue}${yUnit})`;
          default:
            return "";
        }
      }).join(" ");
      const { setStyle: setStyle2 } = elementApi;
      addWillChange(element, TRANSFORM_PREFIXED, elementApi);
      setStyle2(element, TRANSFORM_PREFIXED, newTransform);
      if (hasDefined3dTransform(actionItem, actionState)) {
        setStyle2(element, TRANSFORM_STYLE_PREFIXED, PRESERVE_3D2);
      }
    }
    function renderFilter(element, actionState, actionItemConfig, elementApi) {
      const filterValue = (0, import_reduce.default)(
        actionState,
        (result, value, type) => `${result} ${type}(${value}${getFilterUnit(type, actionItemConfig)})`,
        ""
      );
      const { setStyle: setStyle2 } = elementApi;
      addWillChange(element, FILTER2, elementApi);
      setStyle2(element, FILTER2, filterValue);
    }
    function renderFontVariation(element, actionState, actionItemConfig, elementApi) {
      const fontVariationValue = (0, import_reduce.default)(
        actionState,
        (result, value, type) => {
          result.push(`"${type}" ${value}`);
          return result;
        },
        []
      ).join(", ");
      const { setStyle: setStyle2 } = elementApi;
      addWillChange(element, FONT_VARIATION_SETTINGS2, elementApi);
      setStyle2(element, FONT_VARIATION_SETTINGS2, fontVariationValue);
    }
    function hasDefined3dTransform({ actionTypeId }, { xValue, yValue, zValue }) {
      return actionTypeId === TRANSFORM_MOVE2 && zValue !== void 0 || // SCALE_Z
      actionTypeId === TRANSFORM_SCALE2 && zValue !== void 0 || // ROTATE_X or ROTATE_Y
      actionTypeId === TRANSFORM_ROTATE2 && (xValue !== void 0 || yValue !== void 0);
    }
    function getFirstMatch(regex, value) {
      const match = regex.exec(value);
      return match ? match[1] : "";
    }
    function parseColor({ element, actionTypeId, computedStyle, getStyle: getStyle2 }) {
      const prop = colorStyleProps[actionTypeId];
      const inlineValue = getStyle2(element, prop);
      const value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
      const matches = getFirstMatch(rgbMatchRegex, value).split(COMMA_DELIMITER2);
      return {
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        rValue: (0, import_defaultTo.default)(parseInt(matches[0], 10), 255),
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        gValue: (0, import_defaultTo.default)(parseInt(matches[1], 10), 255),
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        bValue: (0, import_defaultTo.default)(parseInt(matches[2], 10), 255),
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        aValue: (0, import_defaultTo.default)(parseFloat(matches[3]), 1)
      };
    }
    function renderStyle(element, refState2, actionState, actionItem, styleProp, elementApi) {
      const { setStyle: setStyle2 } = elementApi;
      switch (actionItem.actionTypeId) {
        case STYLE_SIZE2: {
          let { widthUnit = "", heightUnit = "" } = actionItem.config;
          const { widthValue, heightValue } = actionState;
          if (widthValue !== void 0) {
            if (widthUnit === AUTO2) {
              widthUnit = "px";
            }
            addWillChange(element, WIDTH2, elementApi);
            setStyle2(element, WIDTH2, widthValue + widthUnit);
          }
          if (heightValue !== void 0) {
            if (heightUnit === AUTO2) {
              heightUnit = "px";
            }
            addWillChange(element, HEIGHT2, elementApi);
            setStyle2(element, HEIGHT2, heightValue + heightUnit);
          }
          break;
        }
        case STYLE_FILTER2: {
          renderFilter(element, actionState, actionItem.config, elementApi);
          break;
        }
        case STYLE_FONT_VARIATION2: {
          renderFontVariation(element, actionState, actionItem.config, elementApi);
          break;
        }
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR: {
          const prop = colorStyleProps[actionItem.actionTypeId];
          const rValue = Math.round(actionState.rValue);
          const gValue = Math.round(actionState.gValue);
          const bValue = Math.round(actionState.bValue);
          const aValue = actionState.aValue;
          addWillChange(element, prop, elementApi);
          setStyle2(
            element,
            prop,
            aValue >= 1 ? `rgb(${rValue},${gValue},${bValue})` : `rgba(${rValue},${gValue},${bValue},${aValue})`
          );
          break;
        }
        default: {
          const { unit = "" } = actionItem.config;
          addWillChange(element, styleProp, elementApi);
          setStyle2(element, styleProp, actionState.value + unit);
          break;
        }
      }
    }
    function renderGeneral(element, actionItem, elementApi) {
      const { setStyle: setStyle2 } = elementApi;
      switch (actionItem.actionTypeId) {
        case GENERAL_DISPLAY: {
          const { value } = actionItem.config;
          if (value === FLEX2 && IS_BROWSER_ENV) {
            setStyle2(element, DISPLAY2, FLEX_PREFIXED);
          } else {
            setStyle2(element, DISPLAY2, value);
          }
          return;
        }
      }
    }
    function addWillChange(element, prop, elementApi) {
      if (!IS_BROWSER_ENV) {
        return;
      }
      const validProp = willChangeProps[prop];
      if (!validProp) {
        return;
      }
      const { getStyle: getStyle2, setStyle: setStyle2 } = elementApi;
      const value = getStyle2(element, WILL_CHANGE2);
      if (!value) {
        setStyle2(element, WILL_CHANGE2, validProp);
        return;
      }
      const values = value.split(COMMA_DELIMITER2).map(trim);
      if (values.indexOf(validProp) === -1) {
        setStyle2(
          element,
          WILL_CHANGE2,
          values.concat(validProp).join(COMMA_DELIMITER2)
        );
      }
    }
    function removeWillChange(element, prop, elementApi) {
      if (!IS_BROWSER_ENV) {
        return;
      }
      const validProp = willChangeProps[prop];
      if (!validProp) {
        return;
      }
      const { getStyle: getStyle2, setStyle: setStyle2 } = elementApi;
      const value = getStyle2(element, WILL_CHANGE2);
      if (!value || value.indexOf(validProp) === -1) {
        return;
      }
      setStyle2(
        element,
        WILL_CHANGE2,
        value.split(COMMA_DELIMITER2).map(trim).filter((v) => v !== validProp).join(COMMA_DELIMITER2)
      );
    }
    function clearAllStyles({ store, elementApi }) {
      const { ixData: ixData2 } = store.getState();
      const { events = {}, actionLists = {} } = ixData2;
      Object.keys(events).forEach((eventId) => {
        const event = events[eventId];
        const { config } = event.action;
        const { actionListId } = config;
        const actionList = actionLists[actionListId];
        if (actionList) {
          clearActionListStyles({ actionList, event, elementApi });
        }
      });
      Object.keys(actionLists).forEach((actionListId) => {
        clearActionListStyles({ actionList: actionLists[actionListId], elementApi });
      });
    }
    function clearActionListStyles({ actionList = {}, event, elementApi }) {
      const { actionItemGroups, continuousParameterGroups } = actionList;
      actionItemGroups && // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
      actionItemGroups.forEach((actionGroup) => {
        clearActionGroupStyles({ actionGroup, event, elementApi });
      });
      continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
      continuousParameterGroups.forEach((paramGroup) => {
        const { continuousActionGroups } = paramGroup;
        continuousActionGroups.forEach((actionGroup) => {
          clearActionGroupStyles({ actionGroup, event, elementApi });
        });
      });
    }
    function clearActionGroupStyles({ actionGroup, event, elementApi }) {
      const { actionItems } = actionGroup;
      actionItems.forEach((actionItem) => {
        const { actionTypeId, config } = actionItem;
        let clearElement;
        if (isPluginType(actionTypeId)) {
          clearElement = (ref) => clearPlugin(actionTypeId)(ref, actionItem);
        } else {
          clearElement = processElementByType({
            effect: clearStyleProp,
            actionTypeId,
            elementApi
          });
        }
        getAffectedElements({ config, event, elementApi }).forEach(clearElement);
      });
    }
    function cleanupHTMLElement(element, actionItem, elementApi) {
      const { setStyle: setStyle2, getStyle: getStyle2 } = elementApi;
      const { actionTypeId } = actionItem;
      if (actionTypeId === STYLE_SIZE2) {
        const { config } = actionItem;
        if (config.widthUnit === AUTO2) {
          setStyle2(element, WIDTH2, "");
        }
        if (config.heightUnit === AUTO2) {
          setStyle2(element, HEIGHT2, "");
        }
      }
      if (getStyle2(element, WILL_CHANGE2)) {
        processElementByType({ effect: removeWillChange, actionTypeId, elementApi })(
          element
        );
      }
    }
    function clearStyleProp(element, prop, elementApi) {
      const { setStyle: setStyle2 } = elementApi;
      removeWillChange(element, prop, elementApi);
      setStyle2(element, prop, "");
      if (prop === TRANSFORM_PREFIXED) {
        setStyle2(element, TRANSFORM_STYLE_PREFIXED, "");
      }
    }
    function getMaxDurationItemIndex(actionItems) {
      let maxDuration = 0;
      let resultIndex = 0;
      actionItems.forEach((actionItem, index) => {
        const { config } = actionItem;
        const total = config.delay + config.duration;
        if (total >= maxDuration) {
          maxDuration = total;
          resultIndex = index;
        }
      });
      return resultIndex;
    }
    function getActionListProgress(actionList, instance) {
      const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
      const { actionItem: instanceItem, verboseTimeElapsed = 0 } = instance;
      let totalDuration = 0;
      let elapsedDuration = 0;
      actionItemGroups.forEach((group, index) => {
        if (useFirstGroupAsInitialState && index === 0) {
          return;
        }
        const { actionItems } = group;
        const carrierItem = actionItems[getMaxDurationItemIndex(actionItems)];
        const { config, actionTypeId } = carrierItem;
        if (instanceItem.id === carrierItem.id) {
          elapsedDuration = totalDuration + verboseTimeElapsed;
        }
        const duration = getRenderType(actionTypeId) === RENDER_GENERAL2 ? 0 : config.duration;
        totalDuration += config.delay + duration;
      });
      return totalDuration > 0 ? optimizeFloat(elapsedDuration / totalDuration) : 0;
    }
    function reduceListToGroup({ actionList, actionItemId, rawData }) {
      const { actionItemGroups, continuousParameterGroups } = actionList;
      const newActionItems = [];
      const takeItemUntilMatch = (actionItem) => {
        newActionItems.push(
          (0, import_timm4.mergeIn)(actionItem, ["config"], {
            delay: 0,
            duration: 0
          })
        );
        return actionItem.id === actionItemId;
      };
      actionItemGroups && // @ts-expect-error - TS7031 - Binding element 'actionItems' implicitly has an 'any' type.
      actionItemGroups.some(({ actionItems }) => {
        return actionItems.some(takeItemUntilMatch);
      });
      continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
      continuousParameterGroups.some((paramGroup) => {
        const { continuousActionGroups } = paramGroup;
        return continuousActionGroups.some(({ actionItems }) => {
          return actionItems.some(takeItemUntilMatch);
        });
      });
      return (0, import_timm4.setIn)(rawData, ["actionLists"], {
        [actionList.id]: {
          id: actionList.id,
          actionItemGroups: [
            {
              actionItems: newActionItems
            }
          ]
        }
      });
    }
    function shouldNamespaceEventParameter(eventTypeId, { basedOn }) {
      return eventTypeId === EventTypeConsts.SCROLLING_IN_VIEW && (basedOn === EventBasedOn.ELEMENT || basedOn == null) || eventTypeId === EventTypeConsts.MOUSE_MOVE && basedOn === EventBasedOn.ELEMENT;
    }
    function getNamespacedParameterId(eventStateKey, continuousParameterGroupId) {
      const namespacedParameterId = eventStateKey + COLON_DELIMITER2 + continuousParameterGroupId;
      return namespacedParameterId;
    }
    function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
      if (mediaQueryKey == null) {
        return true;
      }
      return mediaQueries.indexOf(mediaQueryKey) !== -1;
    }
    function mediaQueriesEqual(listA, listB) {
      return shallowEqual_default(listA && listA.sort(), listB && listB.sort());
    }
    function stringifyTarget(target) {
      if (typeof target === "string") {
        return target;
      }
      if (target.pluginElement && target.objectId) {
        return target.pluginElement + BAR_DELIMITER2 + target.objectId;
      }
      if (target.objectId) {
        return target.objectId;
      }
      const { id = "", selector = "", useEventTarget = "" } = target;
      return id + BAR_DELIMITER2 + selector + BAR_DELIMITER2 + useEventTarget;
    }
    var import_defaultTo, import_reduce, import_findLast, import_timm4, import_normalizeColor, BACKGROUND2, TRANSFORM2, TRANSLATE_3D2, SCALE_3D2, ROTATE_X2, ROTATE_Y2, ROTATE_Z2, SKEW2, PRESERVE_3D2, FLEX2, OPACITY2, FILTER2, FONT_VARIATION_SETTINGS2, WIDTH2, HEIGHT2, BACKGROUND_COLOR2, BORDER_COLOR2, COLOR2, CHILDREN2, IMMEDIATE_CHILDREN2, SIBLINGS2, PARENT2, DISPLAY2, WILL_CHANGE2, AUTO2, COMMA_DELIMITER2, COLON_DELIMITER2, BAR_DELIMITER2, RENDER_TRANSFORM2, RENDER_GENERAL2, RENDER_STYLE2, RENDER_PLUGIN2, TRANSFORM_MOVE2, TRANSFORM_SCALE2, TRANSFORM_ROTATE2, TRANSFORM_SKEW2, STYLE_OPACITY, STYLE_FILTER2, STYLE_FONT_VARIATION2, STYLE_SIZE2, STYLE_BACKGROUND_COLOR, STYLE_BORDER, STYLE_TEXT_COLOR, GENERAL_DISPLAY, OBJECT_VALUE, trim, colorStyleProps, willChangeProps, objectCache, instanceCount, elementCount, strictEqual, pxValueRegex, getFilterDefaults, getFontVariationDefaults, reduceFilters, reduceFontVariations, getItemConfigByKey, transformDefaults, filterDefaults, fontVariationDefaults, getFilterUnit, transformKeys, paramCapture, rgbValidRegex, rgbMatchRegex, processElementByType;
    var init_IX2VanillaUtils = __esm({
      "packages/systems/ix2/shared/logic/IX2VanillaUtils.ts"() {
        "use strict";
        import_defaultTo = __toESM(require_defaultTo());
        import_reduce = __toESM(require_reduce());
        import_findLast = __toESM(require_findLast());
        import_timm4 = __toESM(require_timm());
        init_shared_constants();
        init_shallowEqual();
        init_IX2EasingUtils();
        import_normalizeColor = __toESM(require_normalizeColor());
        init_IX2VanillaPlugins();
        init_IX2BrowserSupport();
        ({
          BACKGROUND: BACKGROUND2,
          TRANSFORM: TRANSFORM2,
          TRANSLATE_3D: TRANSLATE_3D2,
          SCALE_3D: SCALE_3D2,
          ROTATE_X: ROTATE_X2,
          ROTATE_Y: ROTATE_Y2,
          ROTATE_Z: ROTATE_Z2,
          SKEW: SKEW2,
          PRESERVE_3D: PRESERVE_3D2,
          FLEX: FLEX2,
          OPACITY: OPACITY2,
          FILTER: FILTER2,
          FONT_VARIATION_SETTINGS: FONT_VARIATION_SETTINGS2,
          WIDTH: WIDTH2,
          HEIGHT: HEIGHT2,
          BACKGROUND_COLOR: BACKGROUND_COLOR2,
          BORDER_COLOR: BORDER_COLOR2,
          COLOR: COLOR2,
          CHILDREN: CHILDREN2,
          IMMEDIATE_CHILDREN: IMMEDIATE_CHILDREN2,
          SIBLINGS: SIBLINGS2,
          PARENT: PARENT2,
          DISPLAY: DISPLAY2,
          WILL_CHANGE: WILL_CHANGE2,
          AUTO: AUTO2,
          COMMA_DELIMITER: COMMA_DELIMITER2,
          COLON_DELIMITER: COLON_DELIMITER2,
          BAR_DELIMITER: BAR_DELIMITER2,
          RENDER_TRANSFORM: RENDER_TRANSFORM2,
          RENDER_GENERAL: RENDER_GENERAL2,
          RENDER_STYLE: RENDER_STYLE2,
          RENDER_PLUGIN: RENDER_PLUGIN2
        } = IX2EngineConstants_exports);
        ({
          TRANSFORM_MOVE: TRANSFORM_MOVE2,
          TRANSFORM_SCALE: TRANSFORM_SCALE2,
          TRANSFORM_ROTATE: TRANSFORM_ROTATE2,
          TRANSFORM_SKEW: TRANSFORM_SKEW2,
          STYLE_OPACITY,
          STYLE_FILTER: STYLE_FILTER2,
          STYLE_FONT_VARIATION: STYLE_FONT_VARIATION2,
          STYLE_SIZE: STYLE_SIZE2,
          STYLE_BACKGROUND_COLOR,
          STYLE_BORDER,
          STYLE_TEXT_COLOR,
          GENERAL_DISPLAY,
          OBJECT_VALUE
        } = ActionTypeConsts);
        trim = (v) => v.trim();
        colorStyleProps = Object.freeze({
          [STYLE_BACKGROUND_COLOR]: BACKGROUND_COLOR2,
          [STYLE_BORDER]: BORDER_COLOR2,
          [STYLE_TEXT_COLOR]: COLOR2
        });
        willChangeProps = Object.freeze({
          [TRANSFORM_PREFIXED]: TRANSFORM2,
          [BACKGROUND_COLOR2]: BACKGROUND2,
          [OPACITY2]: OPACITY2,
          [FILTER2]: FILTER2,
          [WIDTH2]: WIDTH2,
          [HEIGHT2]: HEIGHT2,
          [FONT_VARIATION_SETTINGS2]: FONT_VARIATION_SETTINGS2
        });
        objectCache = /* @__PURE__ */ new Map();
        instanceCount = 1;
        elementCount = 1;
        strictEqual = (a, b) => a === b;
        pxValueRegex = /px/;
        getFilterDefaults = (actionState, filters) => (
          // @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
          filters.reduce((result, filter) => {
            if (result[filter.type] == null) {
              result[filter.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ blur: 0; 'hue-rotate': 0; invert: 0; grayscale: 0; saturate: 100; sepia: 0; contrast: 100; brightness: 100; }>'.
              filterDefaults[filter.type];
            }
            return result;
          }, actionState || {})
        );
        getFontVariationDefaults = (actionState, fontVariations) => fontVariations.reduce((result, fontVariation) => {
          if (result[fontVariation.type] == null) {
            result[fontVariation.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Readonly<{ wght: 0; opsz: 0; wdth: 0; slnt: 0; }>'.
            fontVariationDefaults[fontVariation.type] || // @ts-expect-error - TS2339 - Property 'defaultValue' does not exist on type 'FontVariationItemConfigType'.
            fontVariation.defaultValue || 0;
          }
          return result;
        }, actionState || {});
        reduceFilters = (result, filter) => {
          if (filter) {
            result[filter.type] = filter.value || 0;
          }
          return result;
        };
        reduceFontVariations = (result, fontVariation) => {
          if (fontVariation) {
            result[fontVariation.type] = fontVariation.value || 0;
          }
          return result;
        };
        getItemConfigByKey = (actionTypeId, key, config) => {
          if (isPluginType(actionTypeId)) {
            return getPluginConfig(actionTypeId)(config, key);
          }
          switch (actionTypeId) {
            case STYLE_FILTER2: {
              const filter = (0, import_findLast.default)(config.filters, ({ type }) => type === key);
              return filter ? filter.value : 0;
            }
            case STYLE_FONT_VARIATION2: {
              const fontVariation = (0, import_findLast.default)(
                config.fontVariations,
                ({ type }) => type === key
              );
              return fontVariation ? fontVariation.value : 0;
            }
            default:
              return config[key];
          }
        };
        transformDefaults = {
          [TRANSFORM_MOVE2]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
          }),
          [TRANSFORM_SCALE2]: Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
          }),
          [TRANSFORM_ROTATE2]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
          }),
          [TRANSFORM_SKEW2]: Object.freeze({
            xValue: 0,
            yValue: 0
          })
        };
        filterDefaults = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100
        });
        fontVariationDefaults = Object.freeze({
          wght: 0,
          opsz: 0,
          wdth: 0,
          slnt: 0
        });
        getFilterUnit = (filterType, actionItemConfig) => {
          const filter = (0, import_findLast.default)(
            actionItemConfig.filters,
            ({ type }) => type === filterType
          );
          if (filter && filter.unit) {
            return filter.unit;
          }
          switch (filterType) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        };
        transformKeys = Object.keys(transformDefaults);
        paramCapture = "\\(([^)]+)\\)";
        rgbValidRegex = /^rgb/;
        rgbMatchRegex = RegExp(`rgba?${paramCapture}`);
        processElementByType = ({
          effect,
          actionTypeId,
          elementApi
        }) => (
          // @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
          (element) => {
            switch (actionTypeId) {
              case TRANSFORM_MOVE2:
              case TRANSFORM_SCALE2:
              case TRANSFORM_ROTATE2:
              case TRANSFORM_SKEW2:
                effect(element, TRANSFORM_PREFIXED, elementApi);
                break;
              case STYLE_FILTER2:
                effect(element, FILTER2, elementApi);
                break;
              case STYLE_FONT_VARIATION2:
                effect(element, FONT_VARIATION_SETTINGS2, elementApi);
                break;
              case STYLE_OPACITY:
                effect(element, OPACITY2, elementApi);
                break;
              case STYLE_SIZE2:
                effect(element, WIDTH2, elementApi);
                effect(element, HEIGHT2, elementApi);
                break;
              case STYLE_BACKGROUND_COLOR:
              case STYLE_BORDER:
              case STYLE_TEXT_COLOR:
                effect(element, colorStyleProps[actionTypeId], elementApi);
                break;
              case GENERAL_DISPLAY:
                effect(element, DISPLAY2, elementApi);
                break;
            }
          }
        );
      }
    });
  
    // packages/systems/ix2/shared/index.js
    var require_shared2 = __commonJS({
      "packages/systems/ix2/shared/index.js"(exports) {
        "use strict";
        var _interopRequireWildcard = require_interopRequireWildcard().default;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.IX2VanillaUtils = exports.IX2VanillaPlugins = exports.IX2ElementsReducer = exports.IX2Easings = exports.IX2EasingUtils = exports.IX2BrowserSupport = void 0;
        var IX2BrowserSupport2 = _interopRequireWildcard((init_IX2BrowserSupport(), __toCommonJS(IX2BrowserSupport_exports)));
        exports.IX2BrowserSupport = IX2BrowserSupport2;
        var IX2Easings = _interopRequireWildcard((init_IX2Easings(), __toCommonJS(IX2Easings_exports)));
        exports.IX2Easings = IX2Easings;
        var IX2EasingUtils2 = _interopRequireWildcard((init_IX2EasingUtils(), __toCommonJS(IX2EasingUtils_exports)));
        exports.IX2EasingUtils = IX2EasingUtils2;
        var IX2ElementsReducer2 = _interopRequireWildcard((init_IX2ElementsReducer(), __toCommonJS(IX2ElementsReducer_exports)));
        exports.IX2ElementsReducer = IX2ElementsReducer2;
        var IX2VanillaPlugins2 = _interopRequireWildcard((init_IX2VanillaPlugins(), __toCommonJS(IX2VanillaPlugins_exports)));
        exports.IX2VanillaPlugins = IX2VanillaPlugins2;
        var IX2VanillaUtils5 = _interopRequireWildcard((init_IX2VanillaUtils(), __toCommonJS(IX2VanillaUtils_exports)));
        exports.IX2VanillaUtils = IX2VanillaUtils5;
      }
    });
  
    // packages/systems/ix2/engine/reducers/IX2InstancesReducer.ts
    var import_shared, import_timm5, IX2_RAW_DATA_IMPORTED3, IX2_SESSION_STOPPED4, IX2_INSTANCE_ADDED3, IX2_INSTANCE_STARTED2, IX2_INSTANCE_REMOVED2, IX2_ANIMATION_FRAME_CHANGED3, optimizeFloat2, applyEasing2, createBezierEasing2, RENDER_GENERAL3, getItemConfigByKey2, getRenderType2, getStyleProp2, continuousInstance, timedInstance, ixInstances;
    var init_IX2InstancesReducer = __esm({
      "packages/systems/ix2/engine/reducers/IX2InstancesReducer.ts"() {
        "use strict";
        init_shared_constants();
        import_shared = __toESM(require_shared2());
        import_timm5 = __toESM(require_timm());
        ({
          IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED3,
          IX2_SESSION_STOPPED: IX2_SESSION_STOPPED4,
          IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED3,
          IX2_INSTANCE_STARTED: IX2_INSTANCE_STARTED2,
          IX2_INSTANCE_REMOVED: IX2_INSTANCE_REMOVED2,
          IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED3
        } = IX2EngineActionTypes_exports);
        ({ optimizeFloat: optimizeFloat2, applyEasing: applyEasing2, createBezierEasing: createBezierEasing2 } = import_shared.IX2EasingUtils);
        ({ RENDER_GENERAL: RENDER_GENERAL3 } = IX2EngineConstants_exports);
        ({ getItemConfigByKey: getItemConfigByKey2, getRenderType: getRenderType2, getStyleProp: getStyleProp2 } = import_shared.IX2VanillaUtils);
        continuousInstance = (state, action) => {
          const {
            position: lastPosition,
            parameterId,
            actionGroups,
            destinationKeys,
            smoothing,
            restingValue,
            actionTypeId,
            customEasingFn,
            skipMotion,
            skipToValue
          } = state;
          const { parameters } = action.payload;
          let velocity = Math.max(1 - smoothing, 0.01);
          let paramValue = parameters[parameterId];
          if (paramValue == null) {
            velocity = 1;
            paramValue = restingValue;
          }
          const nextPosition = Math.max(paramValue, 0) || 0;
          const positionDiff = optimizeFloat2(nextPosition - lastPosition);
          const position = skipMotion ? skipToValue : optimizeFloat2(lastPosition + positionDiff * velocity);
          const keyframePosition = position * 100;
          if (position === lastPosition && state.current) {
            return state;
          }
          let fromActionItem;
          let toActionItem;
          let positionOffset;
          let positionRange;
          for (let i = 0, { length } = actionGroups; i < length; i++) {
            const { keyframe, actionItems } = actionGroups[i];
            if (i === 0) {
              fromActionItem = actionItems[0];
            }
            if (keyframePosition >= keyframe) {
              fromActionItem = actionItems[0];
              const nextGroup = actionGroups[i + 1];
              const hasNextItem = nextGroup && keyframePosition !== keyframe;
              toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;
              if (hasNextItem) {
                positionOffset = keyframe / 100;
                positionRange = (nextGroup.keyframe - keyframe) / 100;
              }
            }
          }
          const current = {};
          if (fromActionItem && !toActionItem) {
            for (let i = 0, { length } = destinationKeys; i < length; i++) {
              const key = destinationKeys[i];
              current[key] = getItemConfigByKey2(
                actionTypeId,
                key,
                fromActionItem.config
              );
            }
          } else if (fromActionItem && toActionItem && positionOffset !== void 0 && positionRange !== void 0) {
            const localPosition = (position - positionOffset) / positionRange;
            const easing = fromActionItem.config.easing;
            const eased = applyEasing2(easing, localPosition, customEasingFn);
            for (let i = 0, { length } = destinationKeys; i < length; i++) {
              const key = destinationKeys[i];
              const fromVal = getItemConfigByKey2(
                actionTypeId,
                key,
                fromActionItem.config
              );
              const toVal = getItemConfigByKey2(actionTypeId, key, toActionItem.config);
              const diff = toVal - fromVal;
              const value = diff * eased + fromVal;
              current[key] = value;
            }
          }
          return (0, import_timm5.merge)(state, {
            position,
            current
          });
        };
        timedInstance = (state, action) => {
          const {
            active,
            origin,
            start,
            immediate,
            renderType,
            verbose,
            actionItem,
            destination,
            destinationKeys,
            pluginDuration,
            instanceDelay,
            customEasingFn,
            skipMotion
          } = state;
          const easing = actionItem.config.easing;
          let { duration, delay } = actionItem.config;
          if (pluginDuration != null) {
            duration = pluginDuration;
          }
          delay = instanceDelay != null ? instanceDelay : delay;
          if (renderType === RENDER_GENERAL3) {
            duration = 0;
          } else if (immediate || skipMotion) {
            duration = delay = 0;
          }
          const { now } = action.payload;
          if (active && origin) {
            const delta = now - (start + delay);
            if (verbose) {
              const verboseDelta = now - start;
              const verboseDuration = duration + delay;
              const verbosePosition = optimizeFloat2(
                Math.min(Math.max(0, verboseDelta / verboseDuration), 1)
              );
              state = (0, import_timm5.set)(
                state,
                "verboseTimeElapsed",
                verboseDuration * verbosePosition
              );
            }
            if (delta < 0) {
              return state;
            }
            const position = optimizeFloat2(Math.min(Math.max(0, delta / duration), 1));
            const eased = applyEasing2(easing, position, customEasingFn);
            const newProps = {};
            let current = null;
            if (destinationKeys.length) {
              current = destinationKeys.reduce((result, key) => {
                const destValue = destination[key];
                const originVal = parseFloat(origin[key]) || 0;
                const diff = parseFloat(destValue) - originVal;
                const value = diff * eased + originVal;
                result[key] = value;
                return result;
              }, {});
            }
            newProps.current = current;
            newProps.position = position;
            if (position === 1) {
              newProps.active = false;
              newProps.complete = true;
            }
            return (0, import_timm5.merge)(state, newProps);
          }
          return state;
        };
        ixInstances = (state = Object.freeze({}), action) => {
          switch (action.type) {
            case IX2_RAW_DATA_IMPORTED3: {
              return action.payload.ixInstances || Object.freeze({});
            }
            case IX2_SESSION_STOPPED4: {
              return Object.freeze({});
            }
            case IX2_INSTANCE_ADDED3: {
              const {
                instanceId,
                elementId,
                actionItem,
                eventId,
                eventTarget,
                eventStateKey,
                actionListId,
                groupIndex,
                isCarrier,
                origin,
                destination,
                immediate,
                verbose,
                continuous,
                parameterId,
                actionGroups,
                smoothing,
                restingValue,
                pluginInstance,
                pluginDuration,
                instanceDelay,
                skipMotion,
                skipToValue
              } = action.payload;
              const { actionTypeId } = actionItem;
              const renderType = getRenderType2(actionTypeId);
              const styleProp = getStyleProp2(renderType, actionTypeId);
              const destinationKeys = Object.keys(destination).filter(
                (key) => (
                  // Skip null destination values
                  destination[key] != null && // Skip string destination values
                  typeof destination[key] !== "string"
                )
              );
              const { easing } = actionItem.config;
              return (0, import_timm5.set)(state, instanceId, {
                id: instanceId,
                elementId,
                active: false,
                position: 0,
                start: 0,
                origin,
                destination,
                destinationKeys,
                immediate,
                verbose,
                current: null,
                actionItem,
                actionTypeId,
                eventId,
                eventTarget,
                eventStateKey,
                actionListId,
                groupIndex,
                renderType,
                isCarrier,
                styleProp,
                continuous,
                parameterId,
                actionGroups,
                smoothing,
                restingValue,
                pluginInstance,
                pluginDuration,
                instanceDelay,
                skipMotion,
                skipToValue,
                customEasingFn: Array.isArray(easing) && easing.length === 4 ? (
                  // @ts-expect-error - TS2345 - Argument of type 'any[]' is not assignable to parameter of type 'IX2EasingCustomType'.
                  createBezierEasing2(easing)
                ) : void 0
              });
            }
            case IX2_INSTANCE_STARTED2: {
              const { instanceId, time } = action.payload;
              return (0, import_timm5.mergeIn)(state, [instanceId], {
                active: true,
                complete: false,
                start: time
              });
            }
            case IX2_INSTANCE_REMOVED2: {
              const { instanceId } = action.payload;
              if (!state[instanceId]) {
                return state;
              }
              const newState = {};
              const keys = Object.keys(state);
              const { length } = keys;
              for (let i = 0; i < length; i++) {
                const key = keys[i];
                if (key !== instanceId) {
                  newState[key] = state[key];
                }
              }
              return newState;
            }
            case IX2_ANIMATION_FRAME_CHANGED3: {
              let newState = state;
              const keys = Object.keys(state);
              const { length } = keys;
              for (let i = 0; i < length; i++) {
                const key = keys[i];
                const instance = state[key];
                const reducer = instance.continuous ? continuousInstance : timedInstance;
                newState = (0, import_timm5.set)(newState, key, reducer(instance, action));
              }
              return newState;
            }
            default: {
              return state;
            }
          }
        };
      }
    });
  
    // packages/systems/ix2/engine/reducers/IX2ParametersReducer.ts
    var IX2_RAW_DATA_IMPORTED4, IX2_SESSION_STOPPED5, IX2_PARAMETER_CHANGED2, ixParameters;
    var init_IX2ParametersReducer = __esm({
      "packages/systems/ix2/engine/reducers/IX2ParametersReducer.ts"() {
        "use strict";
        init_shared_constants();
        ({ IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED4, IX2_SESSION_STOPPED: IX2_SESSION_STOPPED5, IX2_PARAMETER_CHANGED: IX2_PARAMETER_CHANGED2 } = IX2EngineActionTypes_exports);
        ixParameters = (state = {
          /*mutable flat state*/
        }, action) => {
          switch (action.type) {
            case IX2_RAW_DATA_IMPORTED4: {
              return action.payload.ixParameters || {
                /*mutable flat state*/
              };
            }
            case IX2_SESSION_STOPPED5: {
              return {
                /*mutable flat state*/
              };
            }
            case IX2_PARAMETER_CHANGED2: {
              const { key, value } = action.payload;
              state[key] = value;
              return state;
            }
            default: {
              return state;
            }
          }
        };
      }
    });
  
    // packages/systems/ix2/engine/reducers/IX2Reducer.ts
    var IX2Reducer_exports = {};
    __export(IX2Reducer_exports, {
      default: () => IX2Reducer_default
    });
    var import_redux, import_shared2, ixElements2, IX2Reducer_default;
    var init_IX2Reducer = __esm({
      "packages/systems/ix2/engine/reducers/IX2Reducer.ts"() {
        "use strict";
        import_redux = __toESM(require_lib2());
        init_IX2DataReducer();
        init_IX2RequestReducer();
        init_IX2SessionReducer();
        import_shared2 = __toESM(require_shared2());
        init_IX2InstancesReducer();
        init_IX2ParametersReducer();
        ({ ixElements: ixElements2 } = import_shared2.IX2ElementsReducer);
        IX2Reducer_default = (0, import_redux.combineReducers)({
          // @ts-expect-error - TS2322 - Type '(state: FixMeAny | null | undefined, action: {    type: typeof IX2_RAW_DATA_IMPORTED;    payload: {        ixData: FixMeAny;    };}) => any' is not assignable to type 'Reducer<any>'.
          ixData,
          ixRequest,
          ixSession,
          ixElements: ixElements2,
          ixInstances,
          ixParameters
        });
      }
    });
  
    // node_modules/lodash/isString.js
    var require_isString = __commonJS({
      "node_modules/lodash/isString.js"(exports, module) {
        var baseGetTag = require_baseGetTag();
        var isArray = require_isArray();
        var isObjectLike = require_isObjectLike();
        var stringTag = "[object String]";
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        module.exports = isString;
      }
    });
  
    // node_modules/lodash/_asciiSize.js
    var require_asciiSize = __commonJS({
      "node_modules/lodash/_asciiSize.js"(exports, module) {
        var baseProperty = require_baseProperty();
        var asciiSize = baseProperty("length");
        module.exports = asciiSize;
      }
    });
  
    // node_modules/lodash/_hasUnicode.js
    var require_hasUnicode = __commonJS({
      "node_modules/lodash/_hasUnicode.js"(exports, module) {
        var rsAstralRange = "\\ud800-\\udfff";
        var rsComboMarksRange = "\\u0300-\\u036f";
        var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
        var rsComboSymbolsRange = "\\u20d0-\\u20ff";
        var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
        var rsVarRange = "\\ufe0e\\ufe0f";
        var rsZWJ = "\\u200d";
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }
        module.exports = hasUnicode;
      }
    });
  
    // node_modules/lodash/_unicodeSize.js
    var require_unicodeSize = __commonJS({
      "node_modules/lodash/_unicodeSize.js"(exports, module) {
        var rsAstralRange = "\\ud800-\\udfff";
        var rsComboMarksRange = "\\u0300-\\u036f";
        var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
        var rsComboSymbolsRange = "\\u20d0-\\u20ff";
        var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
        var rsVarRange = "\\ufe0e\\ufe0f";
        var rsAstral = "[" + rsAstralRange + "]";
        var rsCombo = "[" + rsComboRange + "]";
        var rsFitz = "\\ud83c[\\udffb-\\udfff]";
        var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
        var rsNonAstral = "[^" + rsAstralRange + "]";
        var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
        var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
        var rsZWJ = "\\u200d";
        var reOptMod = rsModifier + "?";
        var rsOptVar = "[" + rsVarRange + "]?";
        var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
        var rsSeq = rsOptVar + reOptMod + rsOptJoin;
        var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        function unicodeSize(string) {
          var result = reUnicode.lastIndex = 0;
          while (reUnicode.test(string)) {
            ++result;
          }
          return result;
        }
        module.exports = unicodeSize;
      }
    });
  
    // node_modules/lodash/_stringSize.js
    var require_stringSize = __commonJS({
      "node_modules/lodash/_stringSize.js"(exports, module) {
        var asciiSize = require_asciiSize();
        var hasUnicode = require_hasUnicode();
        var unicodeSize = require_unicodeSize();
        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }
        module.exports = stringSize;
      }
    });
  
    // node_modules/lodash/size.js
    var require_size = __commonJS({
      "node_modules/lodash/size.js"(exports, module) {
        var baseKeys = require_baseKeys();
        var getTag = require_getTag();
        var isArrayLike = require_isArrayLike();
        var isString = require_isString();
        var stringSize = require_stringSize();
        var mapTag = "[object Map]";
        var setTag = "[object Set]";
        function size2(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        module.exports = size2;
      }
    });
  
    // node_modules/lodash/negate.js
    var require_negate = __commonJS({
      "node_modules/lodash/negate.js"(exports, module) {
        var FUNC_ERROR_TEXT = "Expected a function";
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        module.exports = negate;
      }
    });
  
    // node_modules/lodash/_defineProperty.js
    var require_defineProperty = __commonJS({
      "node_modules/lodash/_defineProperty.js"(exports, module) {
        var getNative = require_getNative();
        var defineProperty = function() {
          try {
            var func = getNative(Object, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        module.exports = defineProperty;
      }
    });
  
    // node_modules/lodash/_baseAssignValue.js
    var require_baseAssignValue = __commonJS({
      "node_modules/lodash/_baseAssignValue.js"(exports, module) {
        var defineProperty = require_defineProperty();
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        module.exports = baseAssignValue;
      }
    });
  
    // node_modules/lodash/_assignValue.js
    var require_assignValue = __commonJS({
      "node_modules/lodash/_assignValue.js"(exports, module) {
        var baseAssignValue = require_baseAssignValue();
        var eq = require_eq();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        module.exports = assignValue;
      }
    });
  
    // node_modules/lodash/_baseSet.js
    var require_baseSet = __commonJS({
      "node_modules/lodash/_baseSet.js"(exports, module) {
        var assignValue = require_assignValue();
        var castPath = require_castPath();
        var isIndex = require_isIndex();
        var isObject = require_isObject();
        var toKey = require_toKey();
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : void 0;
              if (newValue === void 0) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        module.exports = baseSet;
      }
    });
  
    // node_modules/lodash/_basePickBy.js
    var require_basePickBy = __commonJS({
      "node_modules/lodash/_basePickBy.js"(exports, module) {
        var baseGet = require_baseGet();
        var baseSet = require_baseSet();
        var castPath = require_castPath();
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result, castPath(path, object), value);
            }
          }
          return result;
        }
        module.exports = basePickBy;
      }
    });
  
    // node_modules/lodash/_getSymbolsIn.js
    var require_getSymbolsIn = __commonJS({
      "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
        var arrayPush = require_arrayPush();
        var getPrototype = require_getPrototype();
        var getSymbols = require_getSymbols();
        var stubArray = require_stubArray();
        var nativeGetSymbols = Object.getOwnPropertySymbols;
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result = [];
          while (object) {
            arrayPush(result, getSymbols(object));
            object = getPrototype(object);
          }
          return result;
        };
        module.exports = getSymbolsIn;
      }
    });
  
    // node_modules/lodash/_nativeKeysIn.js
    var require_nativeKeysIn = __commonJS({
      "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
        function nativeKeysIn(object) {
          var result = [];
          if (object != null) {
            for (var key in Object(object)) {
              result.push(key);
            }
          }
          return result;
        }
        module.exports = nativeKeysIn;
      }
    });
  
    // node_modules/lodash/_baseKeysIn.js
    var require_baseKeysIn = __commonJS({
      "node_modules/lodash/_baseKeysIn.js"(exports, module) {
        var isObject = require_isObject();
        var isPrototype = require_isPrototype();
        var nativeKeysIn = require_nativeKeysIn();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
              result.push(key);
            }
          }
          return result;
        }
        module.exports = baseKeysIn;
      }
    });
  
    // node_modules/lodash/keysIn.js
    var require_keysIn = __commonJS({
      "node_modules/lodash/keysIn.js"(exports, module) {
        var arrayLikeKeys = require_arrayLikeKeys();
        var baseKeysIn = require_baseKeysIn();
        var isArrayLike = require_isArrayLike();
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        module.exports = keysIn;
      }
    });
  
    // node_modules/lodash/_getAllKeysIn.js
    var require_getAllKeysIn = __commonJS({
      "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
        var baseGetAllKeys = require_baseGetAllKeys();
        var getSymbolsIn = require_getSymbolsIn();
        var keysIn = require_keysIn();
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        module.exports = getAllKeysIn;
      }
    });
  
    // node_modules/lodash/pickBy.js
    var require_pickBy = __commonJS({
      "node_modules/lodash/pickBy.js"(exports, module) {
        var arrayMap = require_arrayMap();
        var baseIteratee = require_baseIteratee();
        var basePickBy = require_basePickBy();
        var getAllKeysIn = require_getAllKeysIn();
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = baseIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        module.exports = pickBy;
      }
    });
  
    // node_modules/lodash/omitBy.js
    var require_omitBy = __commonJS({
      "node_modules/lodash/omitBy.js"(exports, module) {
        var baseIteratee = require_baseIteratee();
        var negate = require_negate();
        var pickBy = require_pickBy();
        function omitBy2(object, predicate) {
          return pickBy(object, negate(baseIteratee(predicate)));
        }
        module.exports = omitBy2;
      }
    });
  
    // node_modules/lodash/isEmpty.js
    var require_isEmpty = __commonJS({
      "node_modules/lodash/isEmpty.js"(exports, module) {
        var baseKeys = require_baseKeys();
        var getTag = require_getTag();
        var isArguments = require_isArguments();
        var isArray = require_isArray();
        var isArrayLike = require_isArrayLike();
        var isBuffer = require_isBuffer();
        var isPrototype = require_isPrototype();
        var isTypedArray = require_isTypedArray();
        var mapTag = "[object Map]";
        var setTag = "[object Set]";
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function isEmpty2(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty2.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        module.exports = isEmpty2;
      }
    });
  
    // node_modules/lodash/mapValues.js
    var require_mapValues = __commonJS({
      "node_modules/lodash/mapValues.js"(exports, module) {
        var baseAssignValue = require_baseAssignValue();
        var baseForOwn = require_baseForOwn();
        var baseIteratee = require_baseIteratee();
        function mapValues2(object, iteratee) {
          var result = {};
          iteratee = baseIteratee(iteratee, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result, key, iteratee(value, key, object2));
          });
          return result;
        }
        module.exports = mapValues2;
      }
    });
  
    // node_modules/lodash/_arrayEach.js
    var require_arrayEach = __commonJS({
      "node_modules/lodash/_arrayEach.js"(exports, module) {
        function arrayEach(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        module.exports = arrayEach;
      }
    });
  
    // node_modules/lodash/_castFunction.js
    var require_castFunction = __commonJS({
      "node_modules/lodash/_castFunction.js"(exports, module) {
        var identity = require_identity();
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        module.exports = castFunction;
      }
    });
  
    // node_modules/lodash/forEach.js
    var require_forEach = __commonJS({
      "node_modules/lodash/forEach.js"(exports, module) {
        var arrayEach = require_arrayEach();
        var baseEach = require_baseEach();
        var castFunction = require_castFunction();
        var isArray = require_isArray();
        function forEach2(collection, iteratee) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, castFunction(iteratee));
        }
        module.exports = forEach2;
      }
    });
  
    // node_modules/lodash/now.js
    var require_now = __commonJS({
      "node_modules/lodash/now.js"(exports, module) {
        var root = require_root();
        var now = function() {
          return root.Date.now();
        };
        module.exports = now;
      }
    });
  
    // node_modules/lodash/debounce.js
    var require_debounce = __commonJS({
      "node_modules/lodash/debounce.js"(exports, module) {
        var isObject = require_isObject();
        var now = require_now();
        var toNumber = require_toNumber();
        var FUNC_ERROR_TEXT = "Expected a function";
        var nativeMax = Math.max;
        var nativeMin = Math.min;
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = void 0;
            lastInvokeTime = time;
            result = func.apply(thisArg, args);
            return result;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = void 0;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = void 0;
            return result;
          }
          function cancel() {
            if (timerId !== void 0) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = void 0;
          }
          function flush() {
            return timerId === void 0 ? result : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === void 0) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === void 0) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        module.exports = debounce;
      }
    });
  
    // node_modules/lodash/throttle.js
    var require_throttle = __commonJS({
      "node_modules/lodash/throttle.js"(exports, module) {
        var debounce = require_debounce();
        var isObject = require_isObject();
        var FUNC_ERROR_TEXT = "Expected a function";
        function throttle2(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        module.exports = throttle2;
      }
    });
  
    // packages/systems/ix2/engine/actions/IX2EngineActions.ts
    var IX2EngineActions_exports = {};
    __export(IX2EngineActions_exports, {
      actionListPlaybackChanged: () => actionListPlaybackChanged,
      animationFrameChanged: () => animationFrameChanged,
      clearRequested: () => clearRequested,
      elementStateChanged: () => elementStateChanged,
      eventListenerAdded: () => eventListenerAdded,
      eventStateChanged: () => eventStateChanged,
      instanceAdded: () => instanceAdded,
      instanceRemoved: () => instanceRemoved,
      instanceStarted: () => instanceStarted,
      mediaQueriesDefined: () => mediaQueriesDefined,
      parameterChanged: () => parameterChanged,
      playbackRequested: () => playbackRequested,
      previewRequested: () => previewRequested,
      rawDataImported: () => rawDataImported,
      sessionInitialized: () => sessionInitialized,
      sessionStarted: () => sessionStarted,
      sessionStopped: () => sessionStopped,
      stopRequested: () => stopRequested,
      testFrameRendered: () => testFrameRendered,
      viewportWidthChanged: () => viewportWidthChanged
    });
    var import_shared3, IX2_RAW_DATA_IMPORTED5, IX2_SESSION_INITIALIZED3, IX2_SESSION_STARTED3, IX2_SESSION_STOPPED6, IX2_PREVIEW_REQUESTED3, IX2_PLAYBACK_REQUESTED3, IX2_STOP_REQUESTED3, IX2_CLEAR_REQUESTED3, IX2_EVENT_LISTENER_ADDED3, IX2_TEST_FRAME_RENDERED3, IX2_EVENT_STATE_CHANGED3, IX2_ANIMATION_FRAME_CHANGED4, IX2_PARAMETER_CHANGED3, IX2_INSTANCE_ADDED4, IX2_INSTANCE_STARTED3, IX2_INSTANCE_REMOVED3, IX2_ELEMENT_STATE_CHANGED3, IX2_ACTION_LIST_PLAYBACK_CHANGED3, IX2_VIEWPORT_WIDTH_CHANGED3, IX2_MEDIA_QUERIES_DEFINED3, reifyState2, rawDataImported, sessionInitialized, sessionStarted, sessionStopped, previewRequested, playbackRequested, stopRequested, clearRequested, eventListenerAdded, testFrameRendered, eventStateChanged, animationFrameChanged, parameterChanged, instanceAdded, instanceStarted, instanceRemoved, elementStateChanged, actionListPlaybackChanged, viewportWidthChanged, mediaQueriesDefined;
    var init_IX2EngineActions = __esm({
      "packages/systems/ix2/engine/actions/IX2EngineActions.ts"() {
        "use strict";
        init_shared_constants();
        import_shared3 = __toESM(require_shared2());
        ({
          IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED5,
          IX2_SESSION_INITIALIZED: IX2_SESSION_INITIALIZED3,
          IX2_SESSION_STARTED: IX2_SESSION_STARTED3,
          IX2_SESSION_STOPPED: IX2_SESSION_STOPPED6,
          IX2_PREVIEW_REQUESTED: IX2_PREVIEW_REQUESTED3,
          IX2_PLAYBACK_REQUESTED: IX2_PLAYBACK_REQUESTED3,
          IX2_STOP_REQUESTED: IX2_STOP_REQUESTED3,
          IX2_CLEAR_REQUESTED: IX2_CLEAR_REQUESTED3,
          IX2_EVENT_LISTENER_ADDED: IX2_EVENT_LISTENER_ADDED3,
          IX2_TEST_FRAME_RENDERED: IX2_TEST_FRAME_RENDERED3,
          IX2_EVENT_STATE_CHANGED: IX2_EVENT_STATE_CHANGED3,
          IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED4,
          IX2_PARAMETER_CHANGED: IX2_PARAMETER_CHANGED3,
          IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED4,
          IX2_INSTANCE_STARTED: IX2_INSTANCE_STARTED3,
          IX2_INSTANCE_REMOVED: IX2_INSTANCE_REMOVED3,
          IX2_ELEMENT_STATE_CHANGED: IX2_ELEMENT_STATE_CHANGED3,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: IX2_ACTION_LIST_PLAYBACK_CHANGED3,
          IX2_VIEWPORT_WIDTH_CHANGED: IX2_VIEWPORT_WIDTH_CHANGED3,
          IX2_MEDIA_QUERIES_DEFINED: IX2_MEDIA_QUERIES_DEFINED3
        } = IX2EngineActionTypes_exports);
        ({ reifyState: reifyState2 } = import_shared3.IX2VanillaUtils);
        rawDataImported = (rawData) => ({
          type: IX2_RAW_DATA_IMPORTED5,
          payload: {
            ...reifyState2(rawData)
          }
        });
        sessionInitialized = ({
          hasBoundaryNodes,
          reducedMotion
        }) => ({
          type: IX2_SESSION_INITIALIZED3,
          payload: {
            hasBoundaryNodes,
            reducedMotion
          }
        });
        sessionStarted = () => ({
          type: IX2_SESSION_STARTED3
        });
        sessionStopped = () => ({
          type: IX2_SESSION_STOPPED6
        });
        previewRequested = ({
          rawData,
          defer
        }) => ({
          type: IX2_PREVIEW_REQUESTED3,
          payload: {
            defer,
            rawData
          }
        });
        playbackRequested = ({
          actionTypeId = ActionTypeConsts.GENERAL_START_ACTION,
          actionListId,
          actionItemId,
          eventId,
          allowEvents,
          immediate,
          testManual,
          verbose,
          rawData
        }) => ({
          type: IX2_PLAYBACK_REQUESTED3,
          payload: {
            actionTypeId,
            actionListId,
            actionItemId,
            testManual,
            eventId,
            allowEvents,
            immediate,
            verbose,
            rawData
          }
        });
        stopRequested = (actionListId) => ({
          type: IX2_STOP_REQUESTED3,
          payload: {
            actionListId
          }
        });
        clearRequested = () => ({
          type: IX2_CLEAR_REQUESTED3
        });
        eventListenerAdded = (target, listenerParams) => ({
          type: IX2_EVENT_LISTENER_ADDED3,
          payload: {
            target,
            listenerParams
          }
        });
        testFrameRendered = (step = 1) => ({
          type: IX2_TEST_FRAME_RENDERED3,
          payload: {
            step
          }
        });
        eventStateChanged = (stateKey, newState) => ({
          type: IX2_EVENT_STATE_CHANGED3,
          payload: {
            stateKey,
            newState
          }
        });
        animationFrameChanged = (now, parameters) => ({
          type: IX2_ANIMATION_FRAME_CHANGED4,
          payload: {
            now,
            parameters
          }
        });
        parameterChanged = (key, value) => ({
          type: IX2_PARAMETER_CHANGED3,
          payload: {
            key,
            value
          }
        });
        instanceAdded = (options) => ({
          type: IX2_INSTANCE_ADDED4,
          payload: {
            ...options
          }
        });
        instanceStarted = (instanceId, time) => ({
          type: IX2_INSTANCE_STARTED3,
          payload: {
            instanceId,
            time
          }
        });
        instanceRemoved = (instanceId) => ({
          type: IX2_INSTANCE_REMOVED3,
          payload: {
            instanceId
          }
        });
        elementStateChanged = (elementId, actionTypeId, current, actionItem) => ({
          type: IX2_ELEMENT_STATE_CHANGED3,
          payload: {
            elementId,
            actionTypeId,
            current,
            actionItem
          }
        });
        actionListPlaybackChanged = ({
          actionListId,
          isPlaying
        }) => ({
          type: IX2_ACTION_LIST_PLAYBACK_CHANGED3,
          payload: {
            actionListId,
            isPlaying
          }
        });
        viewportWidthChanged = ({
          width,
          mediaQueries
        }) => ({
          type: IX2_VIEWPORT_WIDTH_CHANGED3,
          payload: {
            width,
            mediaQueries
          }
        });
        mediaQueriesDefined = () => ({
          type: IX2_MEDIA_QUERIES_DEFINED3
        });
      }
    });
  
    // packages/systems/ix2/engine/logic/IX2BrowserApi.ts
    var IX2BrowserApi_exports = {};
    __export(IX2BrowserApi_exports, {
      elementContains: () => elementContains,
      getChildElements: () => getChildElements,
      getClosestElement: () => getClosestElement,
      getProperty: () => getProperty,
      getQuerySelector: () => getQuerySelector,
      getRefType: () => getRefType,
      getSiblingElements: () => getSiblingElements,
      getStyle: () => getStyle,
      getValidDocument: () => getValidDocument,
      isSiblingNode: () => isSiblingNode,
      matchSelector: () => matchSelector,
      queryDocument: () => queryDocument,
      setStyle: () => setStyle
    });
    function setStyle(element, prop, value) {
      element.style[prop] = value;
    }
    function getStyle(element, prop) {
      if (prop.startsWith("--")) {
        return window.getComputedStyle(document.documentElement).getPropertyValue(prop);
      }
      return element.style[prop];
    }
    function getProperty(element, prop) {
      return element[prop];
    }
    function matchSelector(selector) {
      return (element) => element[ELEMENT_MATCHES2](selector);
    }
    function getQuerySelector({
      id,
      selector
    }) {
      if (id) {
        let nodeId = id;
        if (id.indexOf(IX2_ID_DELIMITER2) !== -1) {
          const pair = id.split(IX2_ID_DELIMITER2);
          const pageId = pair[0];
          nodeId = pair[1];
          if (pageId !== document.documentElement.getAttribute(WF_PAGE2)) {
            return null;
          }
        }
        return `[data-w-id="${nodeId}"], [data-w-id^="${nodeId}_instance"]`;
      }
      return selector;
    }
    function getValidDocument(pageId) {
      if (pageId == null || pageId === document.documentElement.getAttribute(WF_PAGE2)) {
        return document;
      }
      return null;
    }
    function queryDocument(baseSelector, descendantSelector) {
      return Array.prototype.slice.call(
        document.querySelectorAll(
          descendantSelector ? baseSelector + " " + descendantSelector : baseSelector
        )
      );
    }
    function elementContains(parent, child) {
      return parent.contains(child);
    }
    function isSiblingNode(a, b) {
      return a !== b && a.parentNode === b.parentNode;
    }
    function getChildElements(sourceElements) {
      const childElements = [];
      for (let i = 0, { length } = sourceElements || []; i < length; i++) {
        const { children } = sourceElements[i];
        const { length: childCount } = children;
        if (!childCount) {
          continue;
        }
        for (let j = 0; j < childCount; j++) {
          childElements.push(children[j]);
        }
      }
      return childElements;
    }
    function getSiblingElements(sourceElements = []) {
      const elements = [];
      const parentCache = [];
      for (let i = 0, { length } = sourceElements; i < length; i++) {
        const { parentNode } = sourceElements[i];
        if (!parentNode || !parentNode.children || !parentNode.children.length) {
          continue;
        }
        if (parentCache.indexOf(parentNode) !== -1) {
          continue;
        }
        parentCache.push(parentNode);
        let el = parentNode.firstElementChild;
        while (el != null) {
          if (sourceElements.indexOf(el) === -1) {
            elements.push(el);
          }
          el = el.nextElementSibling;
        }
      }
      return elements;
    }
    function getRefType(ref) {
      if (ref != null && typeof ref == "object") {
        return ref instanceof Element ? HTML_ELEMENT3 : PLAIN_OBJECT3;
      }
      return null;
    }
    var import_shared4, ELEMENT_MATCHES2, IX2_ID_DELIMITER2, HTML_ELEMENT3, PLAIN_OBJECT3, WF_PAGE2, getClosestElement;
    var init_IX2BrowserApi = __esm({
      "packages/systems/ix2/engine/logic/IX2BrowserApi.ts"() {
        "use strict";
        import_shared4 = __toESM(require_shared2());
        init_shared_constants();
        ({ ELEMENT_MATCHES: ELEMENT_MATCHES2 } = import_shared4.IX2BrowserSupport);
        ({ IX2_ID_DELIMITER: IX2_ID_DELIMITER2, HTML_ELEMENT: HTML_ELEMENT3, PLAIN_OBJECT: PLAIN_OBJECT3, WF_PAGE: WF_PAGE2 } = IX2EngineConstants_exports);
        getClosestElement = Element.prototype.closest ? (element, selector) => {
          if (!document.documentElement.contains(element)) {
            return null;
          }
          return element.closest(selector);
        } : (element, selector) => {
          if (!document.documentElement.contains(element)) {
            return null;
          }
          let el = element;
          do {
            if (el[ELEMENT_MATCHES2] && el[ELEMENT_MATCHES2](selector)) {
              return el;
            }
            el = el.parentNode;
          } while (el != null);
          return null;
        };
      }
    });
  
    // node_modules/lodash/_baseCreate.js
    var require_baseCreate = __commonJS({
      "node_modules/lodash/_baseCreate.js"(exports, module) {
        var isObject = require_isObject();
        var objectCreate = Object.create;
        var baseCreate = function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result = new object();
            object.prototype = void 0;
            return result;
          };
        }();
        module.exports = baseCreate;
      }
    });
  
    // node_modules/lodash/_baseLodash.js
    var require_baseLodash = __commonJS({
      "node_modules/lodash/_baseLodash.js"(exports, module) {
        function baseLodash() {
        }
        module.exports = baseLodash;
      }
    });
  
    // node_modules/lodash/_LodashWrapper.js
    var require_LodashWrapper = __commonJS({
      "node_modules/lodash/_LodashWrapper.js"(exports, module) {
        var baseCreate = require_baseCreate();
        var baseLodash = require_baseLodash();
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = void 0;
        }
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        module.exports = LodashWrapper;
      }
    });
  
    // node_modules/lodash/_isFlattenable.js
    var require_isFlattenable = __commonJS({
      "node_modules/lodash/_isFlattenable.js"(exports, module) {
        var Symbol2 = require_Symbol();
        var isArguments = require_isArguments();
        var isArray = require_isArray();
        var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        module.exports = isFlattenable;
      }
    });
  
    // node_modules/lodash/_baseFlatten.js
    var require_baseFlatten = __commonJS({
      "node_modules/lodash/_baseFlatten.js"(exports, module) {
        var arrayPush = require_arrayPush();
        var isFlattenable = require_isFlattenable();
        function baseFlatten(array, depth, predicate, isStrict, result) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result || (result = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result);
              } else {
                arrayPush(result, value);
              }
            } else if (!isStrict) {
              result[result.length] = value;
            }
          }
          return result;
        }
        module.exports = baseFlatten;
      }
    });
  
    // node_modules/lodash/flatten.js
    var require_flatten = __commonJS({
      "node_modules/lodash/flatten.js"(exports, module) {
        var baseFlatten = require_baseFlatten();
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        module.exports = flatten;
      }
    });
  
    // node_modules/lodash/_apply.js
    var require_apply = __commonJS({
      "node_modules/lodash/_apply.js"(exports, module) {
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        module.exports = apply;
      }
    });
  
    // node_modules/lodash/_overRest.js
    var require_overRest = __commonJS({
      "node_modules/lodash/_overRest.js"(exports, module) {
        var apply = require_apply();
        var nativeMax = Math.max;
        function overRest(func, start, transform) {
          start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform(array);
            return apply(func, this, otherArgs);
          };
        }
        module.exports = overRest;
      }
    });
  
    // node_modules/lodash/constant.js
    var require_constant = __commonJS({
      "node_modules/lodash/constant.js"(exports, module) {
        function constant(value) {
          return function() {
            return value;
          };
        }
        module.exports = constant;
      }
    });
  
    // node_modules/lodash/_baseSetToString.js
    var require_baseSetToString = __commonJS({
      "node_modules/lodash/_baseSetToString.js"(exports, module) {
        var constant = require_constant();
        var defineProperty = require_defineProperty();
        var identity = require_identity();
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        module.exports = baseSetToString;
      }
    });
  
    // node_modules/lodash/_shortOut.js
    var require_shortOut = __commonJS({
      "node_modules/lodash/_shortOut.js"(exports, module) {
        var HOT_COUNT = 800;
        var HOT_SPAN = 16;
        var nativeNow = Date.now;
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(void 0, arguments);
          };
        }
        module.exports = shortOut;
      }
    });
  
    // node_modules/lodash/_setToString.js
    var require_setToString = __commonJS({
      "node_modules/lodash/_setToString.js"(exports, module) {
        var baseSetToString = require_baseSetToString();
        var shortOut = require_shortOut();
        var setToString = shortOut(baseSetToString);
        module.exports = setToString;
      }
    });
  
    // node_modules/lodash/_flatRest.js
    var require_flatRest = __commonJS({
      "node_modules/lodash/_flatRest.js"(exports, module) {
        var flatten = require_flatten();
        var overRest = require_overRest();
        var setToString = require_setToString();
        function flatRest(func) {
          return setToString(overRest(func, void 0, flatten), func + "");
        }
        module.exports = flatRest;
      }
    });
  
    // node_modules/lodash/_metaMap.js
    var require_metaMap = __commonJS({
      "node_modules/lodash/_metaMap.js"(exports, module) {
        var WeakMap2 = require_WeakMap();
        var metaMap = WeakMap2 && new WeakMap2();
        module.exports = metaMap;
      }
    });
  
    // node_modules/lodash/noop.js
    var require_noop = __commonJS({
      "node_modules/lodash/noop.js"(exports, module) {
        function noop() {
        }
        module.exports = noop;
      }
    });
  
    // node_modules/lodash/_getData.js
    var require_getData = __commonJS({
      "node_modules/lodash/_getData.js"(exports, module) {
        var metaMap = require_metaMap();
        var noop = require_noop();
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        module.exports = getData;
      }
    });
  
    // node_modules/lodash/_realNames.js
    var require_realNames = __commonJS({
      "node_modules/lodash/_realNames.js"(exports, module) {
        var realNames = {};
        module.exports = realNames;
      }
    });
  
    // node_modules/lodash/_getFuncName.js
    var require_getFuncName = __commonJS({
      "node_modules/lodash/_getFuncName.js"(exports, module) {
        var realNames = require_realNames();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function getFuncName(func) {
          var result = func.name + "", array = realNames[result], length = hasOwnProperty2.call(realNames, result) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result;
        }
        module.exports = getFuncName;
      }
    });
  
    // node_modules/lodash/_LazyWrapper.js
    var require_LazyWrapper = __commonJS({
      "node_modules/lodash/_LazyWrapper.js"(exports, module) {
        var baseCreate = require_baseCreate();
        var baseLodash = require_baseLodash();
        var MAX_ARRAY_LENGTH = 4294967295;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        module.exports = LazyWrapper;
      }
    });
  
    // node_modules/lodash/_copyArray.js
    var require_copyArray = __commonJS({
      "node_modules/lodash/_copyArray.js"(exports, module) {
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        module.exports = copyArray;
      }
    });
  
    // node_modules/lodash/_wrapperClone.js
    var require_wrapperClone = __commonJS({
      "node_modules/lodash/_wrapperClone.js"(exports, module) {
        var LazyWrapper = require_LazyWrapper();
        var LodashWrapper = require_LodashWrapper();
        var copyArray = require_copyArray();
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result.__actions__ = copyArray(wrapper.__actions__);
          result.__index__ = wrapper.__index__;
          result.__values__ = wrapper.__values__;
          return result;
        }
        module.exports = wrapperClone;
      }
    });
  
    // node_modules/lodash/wrapperLodash.js
    var require_wrapperLodash = __commonJS({
      "node_modules/lodash/wrapperLodash.js"(exports, module) {
        var LazyWrapper = require_LazyWrapper();
        var LodashWrapper = require_LodashWrapper();
        var baseLodash = require_baseLodash();
        var isArray = require_isArray();
        var isObjectLike = require_isObjectLike();
        var wrapperClone = require_wrapperClone();
        var objectProto = Object.prototype;
        var hasOwnProperty2 = objectProto.hasOwnProperty;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty2.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        module.exports = lodash;
      }
    });
  
    // node_modules/lodash/_isLaziable.js
    var require_isLaziable = __commonJS({
      "node_modules/lodash/_isLaziable.js"(exports, module) {
        var LazyWrapper = require_LazyWrapper();
        var getData = require_getData();
        var getFuncName = require_getFuncName();
        var lodash = require_wrapperLodash();
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        module.exports = isLaziable;
      }
    });
  
    // node_modules/lodash/_createFlow.js
    var require_createFlow = __commonJS({
      "node_modules/lodash/_createFlow.js"(exports, module) {
        var LodashWrapper = require_LodashWrapper();
        var flatRest = require_flatRest();
        var getData = require_getData();
        var getFuncName = require_getFuncName();
        var isArray = require_isArray();
        var isLaziable = require_isLaziable();
        var FUNC_ERROR_TEXT = "Expected a function";
        var WRAP_CURRY_FLAG = 8;
        var WRAP_PARTIAL_FLAG = 32;
        var WRAP_ARY_FLAG = 128;
        var WRAP_REARG_FLAG = 256;
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : void 0;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result = funcs[index2].call(this, result);
              }
              return result;
            };
          });
        }
        module.exports = createFlow;
      }
    });
  
    // node_modules/lodash/flow.js
    var require_flow = __commonJS({
      "node_modules/lodash/flow.js"(exports, module) {
        var createFlow = require_createFlow();
        var flow2 = createFlow();
        module.exports = flow2;
      }
    });
  
    // node_modules/lodash/_baseClamp.js
    var require_baseClamp = __commonJS({
      "node_modules/lodash/_baseClamp.js"(exports, module) {
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== void 0) {
              number = number <= upper ? number : upper;
            }
            if (lower !== void 0) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        module.exports = baseClamp;
      }
    });
  
    // node_modules/lodash/clamp.js
    var require_clamp = __commonJS({
      "node_modules/lodash/clamp.js"(exports, module) {
        var baseClamp = require_baseClamp();
        var toNumber = require_toNumber();
        function clamp2(number, lower, upper) {
          if (upper === void 0) {
            upper = lower;
            lower = void 0;
          }
          if (upper !== void 0) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== void 0) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        module.exports = clamp2;
      }
    });
  
    // packages/systems/ix2/engine/logic/IX2VanillaEvents.ts
    var import_flow, import_get, import_clamp, import_shared5, MOUSE_CLICK, MOUSE_SECOND_CLICK, MOUSE_DOWN, MOUSE_UP, MOUSE_OVER, MOUSE_OUT, DROPDOWN_CLOSE, DROPDOWN_OPEN, SLIDER_ACTIVE, SLIDER_INACTIVE, TAB_ACTIVE, TAB_INACTIVE, NAVBAR_CLOSE, NAVBAR_OPEN, MOUSE_MOVE, PAGE_SCROLL_DOWN, SCROLL_INTO_VIEW, SCROLL_OUT_OF_VIEW, PAGE_SCROLL_UP, SCROLLING_IN_VIEW, PAGE_FINISH, ECOMMERCE_CART_CLOSE, ECOMMERCE_CART_OPEN, PAGE_START, PAGE_SCROLL, COMPONENT_ACTIVE, COMPONENT_INACTIVE, COLON_DELIMITER3, getNamespacedParameterId2, composableFilter, isElement, containsElement, isOrContainsElement, getAutoStopEvent, hasAutoStopEvent, actionGroupCreator, withFilter, baseActionGroupOptions, baseActivityActionGroupOptions, SCROLL_EVENT_TYPES, MOUSE_OVER_OUT_TYPES, baseScrollActionGroupOptions, AUTO_STOP_DISABLED_EVENTS, getDocumentState, areBoxesIntersecting, isElementHovered, isElementVisible, whenComponentActiveChange, whenElementHoverChange, whenElementVisibiltyChange, whenScrollDirectionChange, pointIntersects, whenPageLoadFinish, whenPageLoadStart, whenClickCountChange, getComponentActiveOptions, getComponentInactiveOptions, scrollIntoOutOfViewOptions, MOUSE_OUT_ROUND_THRESHOLD, IX2VanillaEvents_default;
    var init_IX2VanillaEvents = __esm({
      "packages/systems/ix2/engine/logic/IX2VanillaEvents.ts"() {
        "use strict";
        import_flow = __toESM(require_flow());
        import_get = __toESM(require_get());
        import_clamp = __toESM(require_clamp());
        init_shared_constants();
        init_IX2VanillaEngine();
        init_IX2EngineActions();
        import_shared5 = __toESM(require_shared2());
        ({
          MOUSE_CLICK,
          MOUSE_SECOND_CLICK,
          MOUSE_DOWN,
          MOUSE_UP,
          MOUSE_OVER,
          MOUSE_OUT,
          DROPDOWN_CLOSE,
          DROPDOWN_OPEN,
          SLIDER_ACTIVE,
          SLIDER_INACTIVE,
          TAB_ACTIVE,
          TAB_INACTIVE,
          NAVBAR_CLOSE,
          NAVBAR_OPEN,
          MOUSE_MOVE,
          PAGE_SCROLL_DOWN,
          SCROLL_INTO_VIEW,
          SCROLL_OUT_OF_VIEW,
          PAGE_SCROLL_UP,
          SCROLLING_IN_VIEW,
          PAGE_FINISH,
          ECOMMERCE_CART_CLOSE,
          ECOMMERCE_CART_OPEN,
          PAGE_START,
          PAGE_SCROLL
        } = EventTypeConsts);
        COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
        COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
        ({ COLON_DELIMITER: COLON_DELIMITER3 } = IX2EngineConstants_exports);
        ({ getNamespacedParameterId: getNamespacedParameterId2 } = import_shared5.IX2VanillaUtils);
        composableFilter = (predicate) => (options) => {
          if (typeof options === "object" && predicate(options)) {
            return true;
          }
          return options;
        };
        isElement = composableFilter(({ element, nativeEvent }) => {
          return element === nativeEvent.target;
        });
        containsElement = composableFilter(({ element, nativeEvent }) => {
          return element.contains(nativeEvent.target);
        });
        isOrContainsElement = (0, import_flow.default)([isElement, containsElement]);
        getAutoStopEvent = (store, autoStopEventId) => {
          if (autoStopEventId) {
            const { ixData: ixData2 } = store.getState();
            const { events } = ixData2;
            const eventToStop = events[autoStopEventId];
            if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
              return eventToStop;
            }
          }
          return null;
        };
        hasAutoStopEvent = ({ store, event }) => {
          const { action: eventAction } = event;
          const { autoStopEventId } = eventAction.config;
          return Boolean(getAutoStopEvent(store, autoStopEventId));
        };
        actionGroupCreator = ({ store, event, element, eventStateKey }, state) => {
          const { action: eventAction, id: eventId } = event;
          const { actionListId, autoStopEventId } = eventAction.config;
          const eventToStop = getAutoStopEvent(store, autoStopEventId);
          if (eventToStop) {
            stopActionGroup({
              store,
              eventId: autoStopEventId,
              eventTarget: element,
              eventStateKey: autoStopEventId + COLON_DELIMITER3 + eventStateKey.split(COLON_DELIMITER3)[1],
              actionListId: (0, import_get.default)(eventToStop, "action.config.actionListId")
            });
          }
          stopActionGroup({
            store,
            eventId,
            eventTarget: element,
            eventStateKey,
            actionListId
          });
          startActionGroup({
            store,
            eventId,
            eventTarget: element,
            eventStateKey,
            actionListId
          });
          return state;
        };
        withFilter = (filter, handler) => (options, state) => filter(options, state) === true ? handler(options, state) : state;
        baseActionGroupOptions = {
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        };
        baseActivityActionGroupOptions = {
          ...baseActionGroupOptions,
          types: [COMPONENT_ACTIVE, COMPONENT_INACTIVE].join(" ")
        };
        SCROLL_EVENT_TYPES = [
          { target: window, types: "resize orientationchange", throttle: true },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: true
          }
        ];
        MOUSE_OVER_OUT_TYPES = "mouseover mouseout";
        baseScrollActionGroupOptions = {
          types: SCROLL_EVENT_TYPES
        };
        AUTO_STOP_DISABLED_EVENTS = {
          PAGE_START,
          PAGE_FINISH
        };
        getDocumentState = (() => {
          const supportOffset = window.pageXOffset !== void 0;
          const isCSS1Compat = document.compatMode === "CSS1Compat";
          const rootElement = isCSS1Compat ? document.documentElement : document.body;
          return () => ({
            scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
            scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
            // required to remove elasticity in Safari scrolling.
            stiffScrollTop: (0, import_clamp.default)(
              supportOffset ? window.pageYOffset : rootElement.scrollTop,
              0,
              rootElement.scrollHeight - window.innerHeight
            ),
            scrollWidth: rootElement.scrollWidth,
            scrollHeight: rootElement.scrollHeight,
            clientWidth: rootElement.clientWidth,
            clientHeight: rootElement.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
          });
        })();
        areBoxesIntersecting = (a, b) => !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
        isElementHovered = ({ element, nativeEvent }) => {
          const { type, target, relatedTarget } = nativeEvent;
          const containsTarget = element.contains(target);
          if (type === "mouseover" && containsTarget) {
            return true;
          }
          const containsRelated = element.contains(relatedTarget);
          if (type === "mouseout" && containsTarget && containsRelated) {
            return true;
          }
          return false;
        };
        isElementVisible = (options) => {
          const {
            element,
            event: { config }
          } = options;
          const { clientWidth, clientHeight } = getDocumentState();
          const scrollOffsetValue = config.scrollOffsetValue;
          const scrollOffsetUnit = config.scrollOffsetUnit;
          const isPX = scrollOffsetUnit === "PX";
          const offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;
          return areBoxesIntersecting(element.getBoundingClientRect(), {
            left: 0,
            top: offsetPadding,
            right: clientWidth,
            bottom: clientHeight - offsetPadding
          });
        };
        whenComponentActiveChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
        (handler) => (options, oldState) => {
          const { type } = options.nativeEvent;
          const isActive = [COMPONENT_ACTIVE, COMPONENT_INACTIVE].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;
          const newState = {
            ...oldState,
            isActive
          };
          if (!oldState || newState.isActive !== oldState.isActive) {
            return handler(options, newState) || newState;
          }
          return newState;
        };
        whenElementHoverChange = (handler) => (options, oldState) => {
          const newState = {
            elementHovered: isElementHovered(options)
          };
          if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
            return handler(options, newState) || newState;
          }
          return newState;
        };
        whenElementVisibiltyChange = (handler) => (options, oldState) => {
          const newState = {
            ...oldState,
            elementVisible: isElementVisible(options)
          };
          if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
            return handler(options, newState) || newState;
          }
          return newState;
        };
        whenScrollDirectionChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
        (handler) => (options, oldState = {}) => {
          const {
            stiffScrollTop: scrollTop,
            scrollHeight,
            innerHeight
          } = getDocumentState();
          const {
            event: { config, eventTypeId }
          } = options;
          const { scrollOffsetValue, scrollOffsetUnit } = config;
          const isPX = scrollOffsetUnit === "PX";
          const scrollHeightBounds = scrollHeight - innerHeight;
          const percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2));
          if (oldState && oldState.percentTop === percentTop) {
            return oldState;
          }
          const scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;
          let scrollingDown;
          let scrollDirectionChanged;
          let anchorTop = 0;
          if (oldState) {
            scrollingDown = percentTop > oldState.percentTop;
            scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
            anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
          }
          const inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;
          const newState = {
            ...oldState,
            percentTop,
            inBounds,
            anchorTop,
            scrollingDown
          };
          if (oldState && inBounds && // @ts-expect-error - TS2339 - Property 'inBounds' does not exist on type '{}'.
          (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
            return handler(options, newState) || newState;
          }
          return newState;
        };
        pointIntersects = (point, rect) => point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
        whenPageLoadFinish = (handler) => (options, oldState) => {
          const newState = {
            finished: document.readyState === "complete"
          };
          if (newState.finished && !(oldState && oldState.finshed)) {
            handler(options);
          }
          return newState;
        };
        whenPageLoadStart = (handler) => (options, oldState) => {
          const newState = {
            started: true
          };
          if (!oldState) {
            handler(options);
          }
          return newState;
        };
        whenClickCountChange = (handler) => (options, oldState = { clickCount: 0 }) => {
          const newState = {
            clickCount: oldState.clickCount % 2 + 1
          };
          if (newState.clickCount !== oldState.clickCount) {
            return handler(options, newState) || newState;
          }
          return newState;
        };
        getComponentActiveOptions = (allowNestedChildrenEvents = true) => ({
          ...baseActivityActionGroupOptions,
          handler: withFilter(
            allowNestedChildrenEvents ? isOrContainsElement : isElement,
            // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
            whenComponentActiveChange((options, state) => {
              return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
            })
          )
        });
        getComponentInactiveOptions = (allowNestedChildrenEvents = true) => ({
          ...baseActivityActionGroupOptions,
          handler: withFilter(
            allowNestedChildrenEvents ? isOrContainsElement : isElement,
            // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
            whenComponentActiveChange((options, state) => {
              return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
            })
          )
        });
        scrollIntoOutOfViewOptions = {
          ...baseScrollActionGroupOptions,
          handler: whenElementVisibiltyChange((options, state) => {
            const { elementVisible } = state;
            const { event, store } = options;
            const { ixData: ixData2 } = store.getState();
            const { events } = ixData2;
            if (!events[event.action.config.autoStopEventId] && state.triggered) {
              return state;
            }
            if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
              actionGroupCreator(options);
              return {
                ...state,
                triggered: true
              };
            } else {
              return state;
            }
          })
        };
        MOUSE_OUT_ROUND_THRESHOLD = 0.05;
        IX2VanillaEvents_default = {
          [SLIDER_ACTIVE]: getComponentActiveOptions(),
          [SLIDER_INACTIVE]: getComponentInactiveOptions(),
          [DROPDOWN_OPEN]: getComponentActiveOptions(),
          [DROPDOWN_CLOSE]: getComponentInactiveOptions(),
          // navbar elements may contain nested components in the menu. To prevent activity misfires, only listed for activity
          // events where the target is the navbar element, and ignore children that dispatch activitiy events.
          [NAVBAR_OPEN]: getComponentActiveOptions(false),
          [NAVBAR_CLOSE]: getComponentInactiveOptions(false),
          [TAB_ACTIVE]: getComponentActiveOptions(),
          [TAB_INACTIVE]: getComponentInactiveOptions(),
          [ECOMMERCE_CART_OPEN]: {
            types: "ecommerce-cart-open",
            handler: withFilter(isOrContainsElement, actionGroupCreator)
          },
          [ECOMMERCE_CART_CLOSE]: {
            types: "ecommerce-cart-close",
            handler: withFilter(isOrContainsElement, actionGroupCreator)
          },
          [MOUSE_CLICK]: {
            types: "click",
            handler: withFilter(
              isOrContainsElement,
              whenClickCountChange((options, { clickCount }) => {
                if (hasAutoStopEvent(options)) {
                  clickCount === 1 && actionGroupCreator(options);
                } else {
                  actionGroupCreator(options);
                }
              })
            )
          },
          [MOUSE_SECOND_CLICK]: {
            types: "click",
            handler: withFilter(
              isOrContainsElement,
              whenClickCountChange((options, { clickCount }) => {
                if (clickCount === 2) {
                  actionGroupCreator(options);
                }
              })
            )
          },
          [MOUSE_DOWN]: {
            ...baseActionGroupOptions,
            types: "mousedown"
          },
          [MOUSE_UP]: {
            ...baseActionGroupOptions,
            types: "mouseup"
          },
          [MOUSE_OVER]: {
            types: MOUSE_OVER_OUT_TYPES,
            handler: withFilter(
              isOrContainsElement,
              whenElementHoverChange((options, state) => {
                if (state.elementHovered) {
                  actionGroupCreator(options);
                }
              })
            )
          },
          [MOUSE_OUT]: {
            types: MOUSE_OVER_OUT_TYPES,
            handler: withFilter(
              isOrContainsElement,
              whenElementHoverChange((options, state) => {
                if (!state.elementHovered) {
                  actionGroupCreator(options);
                }
              })
            )
          },
          [MOUSE_MOVE]: {
            types: "mousemove mouseout scroll",
            handler: ({ store, element, eventConfig, nativeEvent, eventStateKey }, state = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }) => {
              const {
                basedOn,
                selectedAxis,
                continuousParameterGroupId,
                reverse,
                restingState = 0
              } = eventConfig;
              const {
                clientX = state.clientX,
                clientY = state.clientY,
                pageX = state.pageX,
                pageY = state.pageY
              } = nativeEvent;
              const isXAxis = selectedAxis === "X_AXIS";
              const isMouseOut = nativeEvent.type === "mouseout";
              let value = restingState / 100;
              let namespacedParameterId = continuousParameterGroupId;
              let elementHovered = false;
              switch (basedOn) {
                case EventBasedOn.VIEWPORT: {
                  value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
                  break;
                }
                case EventBasedOn.PAGE: {
                  const { scrollLeft, scrollTop, scrollWidth, scrollHeight } = getDocumentState();
                  value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
                  break;
                }
                case EventBasedOn.ELEMENT:
                default: {
                  namespacedParameterId = getNamespacedParameterId2(
                    eventStateKey,
                    continuousParameterGroupId
                  );
                  const isMouseEvent = nativeEvent.type.indexOf("mouse") === 0;
                  if (isMouseEvent && isOrContainsElement({ element, nativeEvent }) !== true) {
                    break;
                  }
                  const rect = element.getBoundingClientRect();
                  const { left, top, width, height } = rect;
                  if (!isMouseEvent && !pointIntersects({ left: clientX, top: clientY }, rect)) {
                    break;
                  }
                  elementHovered = true;
                  value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
                  break;
                }
              }
              if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
                value = Math.round(value);
              }
              if (basedOn !== EventBasedOn.ELEMENT || elementHovered || // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              elementHovered !== state.elementHovered) {
                value = reverse ? 1 - value : value;
                store.dispatch(parameterChanged(namespacedParameterId, value));
              }
              return {
                elementHovered,
                clientX,
                clientY,
                pageX,
                pageY
              };
            }
          },
          [PAGE_SCROLL]: {
            types: SCROLL_EVENT_TYPES,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            handler: ({ store, eventConfig }) => {
              const { continuousParameterGroupId, reverse } = eventConfig;
              const { scrollTop, scrollHeight, clientHeight } = getDocumentState();
              let value = scrollTop / (scrollHeight - clientHeight);
              value = reverse ? 1 - value : value;
              store.dispatch(parameterChanged(continuousParameterGroupId, value));
            }
          },
          [SCROLLING_IN_VIEW]: {
            types: SCROLL_EVENT_TYPES,
            handler: ({ element, store, eventConfig, eventStateKey }, state = { scrollPercent: 0 }) => {
              const {
                scrollLeft,
                scrollTop,
                scrollWidth,
                scrollHeight,
                clientHeight: visibleHeight
              } = getDocumentState();
              const {
                basedOn,
                selectedAxis,
                continuousParameterGroupId,
                startsEntering,
                startsExiting,
                addEndOffset,
                addStartOffset,
                addOffsetValue = 0,
                endOffsetValue = 0
              } = eventConfig;
              const isXAxis = selectedAxis === "X_AXIS";
              if (basedOn === EventBasedOn.VIEWPORT) {
                const value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;
                if (value !== state.scrollPercent) {
                  store.dispatch(parameterChanged(continuousParameterGroupId, value));
                }
                return {
                  scrollPercent: value
                };
              } else {
                const namespacedParameterId = getNamespacedParameterId2(
                  eventStateKey,
                  continuousParameterGroupId
                );
                const elementRect = element.getBoundingClientRect();
                let offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
                let offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;
                offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
                offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;
                const offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
                const offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
                const offsetHeight = offsetElementBottom - offsetElementTop;
                const fixedScrollHeight = Math.min(
                  visibleHeight + offsetHeight,
                  scrollHeight
                );
                const fixedScrollTop = Math.min(
                  Math.max(0, visibleHeight - offsetElementTop),
                  fixedScrollHeight
                );
                const fixedScrollPerc = fixedScrollTop / fixedScrollHeight;
                if (fixedScrollPerc !== state.scrollPercent) {
                  store.dispatch(
                    parameterChanged(namespacedParameterId, fixedScrollPerc)
                  );
                }
                return {
                  scrollPercent: fixedScrollPerc
                };
              }
            }
          },
          [SCROLL_INTO_VIEW]: scrollIntoOutOfViewOptions,
          [SCROLL_OUT_OF_VIEW]: scrollIntoOutOfViewOptions,
          [PAGE_SCROLL_DOWN]: {
            ...baseScrollActionGroupOptions,
            // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
            handler: whenScrollDirectionChange((options, state) => {
              if (state.scrollingDown) {
                actionGroupCreator(options);
              }
            })
          },
          [PAGE_SCROLL_UP]: {
            ...baseScrollActionGroupOptions,
            // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
            handler: whenScrollDirectionChange((options, state) => {
              if (!state.scrollingDown) {
                actionGroupCreator(options);
              }
            })
          },
          [PAGE_FINISH]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
          },
          [PAGE_START]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
          }
        };
      }
    });
  
    // packages/systems/ix2/engine/logic/IX2VanillaEngine.ts
    var IX2VanillaEngine_exports = {};
    __export(IX2VanillaEngine_exports, {
      observeRequests: () => observeRequests,
      startActionGroup: () => startActionGroup,
      startEngine: () => startEngine,
      stopActionGroup: () => stopActionGroup,
      stopAllActionGroups: () => stopAllActionGroups,
      stopEngine: () => stopEngine
    });
    function observeRequests(store) {
      observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
        select: ({ ixRequest: ixRequest2 }) => ixRequest2.preview,
        onChange: handlePreviewRequest
      });
      observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
        select: ({ ixRequest: ixRequest2 }) => ixRequest2.playback,
        onChange: handlePlaybackRequest
      });
      observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
        select: ({ ixRequest: ixRequest2 }) => ixRequest2.stop,
        onChange: handleStopRequest
      });
      observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
        select: ({ ixRequest: ixRequest2 }) => ixRequest2.clear,
        onChange: handleClearRequest
      });
    }
    function observeMediaQueryChange(store) {
      observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixSession' implicitly has an 'any' type.
        select: ({ ixSession: ixSession2 }) => ixSession2.mediaQueryKey,
        onChange: () => {
          stopEngine(store);
          clearAllStyles2({ store, elementApi: IX2BrowserApi_exports });
          startEngine({ store, allowEvents: true });
          dispatchPageUpdateEvent();
        }
      });
    }
    function observeOneRenderTick(store, onTick) {
      const unsubscribe = observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixSession' implicitly has an 'any' type.
        select: ({ ixSession: ixSession2 }) => ixSession2.tick,
        // @ts-expect-error - TS7006 - Parameter 'tick' implicitly has an 'any' type.
        onChange: (tick) => {
          onTick(tick);
          unsubscribe();
        }
      });
    }
    function handlePreviewRequest({ rawData, defer }, store) {
      const start = () => {
        startEngine({ store, rawData, allowEvents: true });
        dispatchPageUpdateEvent();
      };
      defer ? setTimeout(start, 0) : start();
    }
    function dispatchPageUpdateEvent() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function handlePlaybackRequest(playback, store) {
      const {
        actionTypeId,
        actionListId,
        actionItemId,
        eventId,
        allowEvents,
        immediate,
        testManual,
        verbose = true
      } = playback;
      let { rawData } = playback;
      if (actionListId && actionItemId && rawData && immediate) {
        const actionList = rawData.actionLists[actionListId];
        if (actionList) {
          rawData = reduceListToGroup2({
            actionList,
            actionItemId,
            rawData
          });
        }
      }
      startEngine({ store, rawData, allowEvents, testManual });
      if (actionListId && actionTypeId === ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(actionTypeId)) {
        stopActionGroup({ store, actionListId });
        renderInitialGroup({ store, actionListId, eventId });
        const started = startActionGroup({
          store,
          eventId,
          actionListId,
          immediate,
          verbose
        });
        if (verbose && started) {
          store.dispatch(
            actionListPlaybackChanged({ actionListId, isPlaying: !immediate })
          );
        }
      }
    }
    function handleStopRequest({ actionListId }, store) {
      if (actionListId) {
        stopActionGroup({ store, actionListId });
      } else {
        stopAllActionGroups({ store });
      }
      stopEngine(store);
    }
    function handleClearRequest(state, store) {
      stopEngine(store);
      clearAllStyles2({ store, elementApi: IX2BrowserApi_exports });
    }
    function startEngine({ store, rawData, allowEvents, testManual }) {
      const { ixSession: ixSession2 } = store.getState();
      if (rawData) {
        store.dispatch(rawDataImported(rawData));
      }
      if (!ixSession2.active) {
        store.dispatch(
          sessionInitialized({
            hasBoundaryNodes: Boolean(document.querySelector(BOUNDARY_SELECTOR2)),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
          })
        );
        if (allowEvents) {
          bindEvents(store);
          addDocumentClass();
          if (store.getState().ixSession.hasDefinedMediaQueries) {
            observeMediaQueryChange(store);
          }
        }
        store.dispatch(sessionStarted());
        startRenderLoop(store, testManual);
      }
    }
    function addDocumentClass() {
      const { documentElement } = document;
      if (documentElement.className.indexOf(W_MOD_IX2) === -1) {
        documentElement.className += ` ${W_MOD_IX2}`;
      }
    }
    function startRenderLoop(store, testManual) {
      const handleFrame = (now) => {
        const { ixSession: ixSession2, ixParameters: ixParameters2 } = store.getState();
        if (ixSession2.active) {
          store.dispatch(animationFrameChanged(now, ixParameters2));
          if (testManual) {
            observeOneRenderTick(store, handleFrame);
          } else {
            requestAnimationFrame(handleFrame);
          }
        }
      };
      handleFrame(window.performance.now());
    }
    function stopEngine(store) {
      const { ixSession: ixSession2 } = store.getState();
      if (ixSession2.active) {
        const { eventListeners } = ixSession2;
        eventListeners.forEach(clearEventListener);
        clearObjectCache2();
        store.dispatch(sessionStopped());
      }
    }
    function clearEventListener({ target, listenerParams }) {
      target.removeEventListener.apply(target, listenerParams);
    }
    function createGroupInstances({
      // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
      store,
      // @ts-expect-error - TS7031 - Binding element 'eventStateKey' implicitly has an 'any' type.
      eventStateKey,
      // @ts-expect-error - TS7031 - Binding element 'eventTarget' implicitly has an 'any' type.
      eventTarget,
      // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
      eventId,
      // @ts-expect-error - TS7031 - Binding element 'eventConfig' implicitly has an 'any' type.
      eventConfig,
      // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
      actionListId,
      // @ts-expect-error - TS7031 - Binding element 'parameterGroup' implicitly has an 'any' type.
      parameterGroup,
      // @ts-expect-error - TS7031 - Binding element 'smoothing' implicitly has an 'any' type.
      smoothing,
      // @ts-expect-error - TS7031 - Binding element 'restingValue' implicitly has an 'any' type.
      restingValue
    }) {
      const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
      const { events } = ixData2;
      const event = events[eventId];
      const { eventTypeId } = event;
      const targetCache = {};
      const instanceActionGroups = {};
      const instanceConfigs = [];
      const { continuousActionGroups } = parameterGroup;
      let { id: parameterId } = parameterGroup;
      if (shouldNamespaceEventParameter2(eventTypeId, eventConfig)) {
        parameterId = getNamespacedParameterId3(eventStateKey, parameterId);
      }
      const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
      continuousActionGroups.forEach((actionGroup) => {
        const { keyframe, actionItems } = actionGroup;
        actionItems.forEach((actionItem) => {
          const { actionTypeId } = actionItem;
          const { target } = actionItem.config;
          if (!target) {
            return;
          }
          const elementRoot = target.boundaryMode ? eventElementRoot : null;
          const key = stringifyTarget2(target) + COLON_DELIMITER4 + actionTypeId;
          instanceActionGroups[key] = appendActionItem(
            instanceActionGroups[key],
            keyframe,
            actionItem
          );
          if (!targetCache[key]) {
            targetCache[key] = true;
            const { config } = actionItem;
            getAffectedElements2({
              config,
              event,
              eventTarget,
              elementRoot,
              elementApi: IX2BrowserApi_exports
            }).forEach((element) => {
              instanceConfigs.push({ element, key });
            });
          }
        });
      });
      instanceConfigs.forEach(({ element, key }) => {
        const actionGroups = instanceActionGroups[key];
        const actionItem = (0, import_get2.default)(actionGroups, `[0].actionItems[0]`, {});
        const { actionTypeId } = actionItem;
        const pluginInstance = isPluginType2(actionTypeId) ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
        const destination = getDestinationValues2(
          { element, actionItem, elementApi: IX2BrowserApi_exports },
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          pluginInstance
        );
        createInstance({
          store,
          element,
          eventId,
          actionListId,
          actionItem,
          destination,
          continuous: true,
          parameterId,
          actionGroups,
          smoothing,
          restingValue,
          pluginInstance
        });
      });
    }
    function appendActionItem(actionGroups = [], keyframe, actionItem) {
      const newActionGroups = [...actionGroups];
      let groupIndex;
      newActionGroups.some((group, index) => {
        if (group.keyframe === keyframe) {
          groupIndex = index;
          return true;
        }
        return false;
      });
      if (groupIndex == null) {
        groupIndex = newActionGroups.length;
        newActionGroups.push({
          keyframe,
          actionItems: []
        });
      }
      newActionGroups[groupIndex].actionItems.push(actionItem);
      return newActionGroups;
    }
    function bindEvents(store) {
      const { ixData: ixData2 } = store.getState();
      const { eventTypeMap } = ixData2;
      updateViewportWidth(store);
      (0, import_forEach.default)(eventTypeMap, (events, key) => {
        const logic = IX2VanillaEvents_default[key];
        if (!logic) {
          console.warn(`IX2 event type not configured: ${key}`);
          return;
        }
        bindEventType({
          logic,
          store,
          events
        });
      });
      const { ixSession: ixSession2 } = store.getState();
      if (ixSession2.eventListeners.length) {
        bindResizeEvents(store);
      }
    }
    function bindResizeEvents(store) {
      const handleResize = () => {
        updateViewportWidth(store);
      };
      WINDOW_RESIZE_EVENTS.forEach((type) => {
        window.addEventListener(type, handleResize);
        store.dispatch(eventListenerAdded(window, [type, handleResize]));
      });
      handleResize();
    }
    function updateViewportWidth(store) {
      const { ixSession: ixSession2, ixData: ixData2 } = store.getState();
      const width = window.innerWidth;
      if (width !== ixSession2.viewportWidth) {
        const { mediaQueries } = ixData2;
        store.dispatch(viewportWidthChanged({ width, mediaQueries }));
      }
    }
    function bindEventType({ logic, store, events }) {
      injectBehaviorCSSFixes(events);
      const { types: eventTypes, handler: eventHandler } = logic;
      const { ixData: ixData2 } = store.getState();
      const { actionLists } = ixData2;
      const eventTargets = mapFoundValues(events, getAffectedForEvent);
      if (!(0, import_size.default)(eventTargets)) {
        return;
      }
      (0, import_forEach.default)(eventTargets, (elements, key) => {
        const event = events[key];
        const {
          action: eventAction,
          id: eventId,
          mediaQueries = ixData2.mediaQueryKeys
        } = event;
        const { actionListId } = eventAction.config;
        if (!mediaQueriesEqual2(mediaQueries, ixData2.mediaQueryKeys)) {
          store.dispatch(mediaQueriesDefined());
        }
        if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
          const configs = Array.isArray(event.config) ? event.config : [event.config];
          configs.forEach((eventConfig) => {
            const { continuousParameterGroupId } = eventConfig;
            const paramGroups = (0, import_get2.default)(
              actionLists,
              `${actionListId}.continuousParameterGroups`,
              []
            );
            const parameterGroup = (0, import_find2.default)(
              paramGroups,
              ({ id }) => id === continuousParameterGroupId
            );
            const smoothing = (eventConfig.smoothing || 0) / 100;
            const restingValue = (eventConfig.restingState || 0) / 100;
            if (!parameterGroup) {
              return;
            }
            elements.forEach((eventTarget, index) => {
              const eventStateKey = eventId + COLON_DELIMITER4 + index;
              createGroupInstances({
                store,
                eventStateKey,
                eventTarget,
                eventId,
                eventConfig,
                actionListId,
                parameterGroup,
                smoothing,
                restingValue
              });
            });
          });
        }
        if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(eventAction.actionTypeId)) {
          renderInitialGroup({ store, actionListId, eventId });
        }
      });
      const handleEvent = (nativeEvent) => {
        const { ixSession: ixSession2 } = store.getState();
        forEachEventTarget(eventTargets, (element, eventId, eventStateKey) => {
          const event = events[eventId];
          const oldState = ixSession2.eventState[eventStateKey];
          const { action: eventAction, mediaQueries = ixData2.mediaQueryKeys } = event;
          if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
            return;
          }
          const handleEventWithConfig = (eventConfig = {}) => {
            const newState = eventHandler(
              {
                store,
                element,
                event,
                eventConfig,
                nativeEvent,
                eventStateKey
              },
              oldState
            );
            if (!shallowEqual2(newState, oldState)) {
              store.dispatch(eventStateChanged(eventStateKey, newState));
            }
          };
          if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
            const configs = Array.isArray(event.config) ? event.config : [event.config];
            configs.forEach(handleEventWithConfig);
          } else {
            handleEventWithConfig();
          }
        });
      };
      const handleEventThrottled = (0, import_throttle.default)(handleEvent, THROTTLED_EVENT_WAIT);
      const addListeners = ({
        target = document,
        // @ts-expect-error - TS7031 - Binding element 'types' implicitly has an 'any' type.
        types,
        // @ts-expect-error - TS7031 - Binding element 'shouldThrottle' implicitly has an 'any' type.
        throttle: shouldThrottle
      }) => {
        types.split(" ").filter(Boolean).forEach((type) => {
          const handlerFunc = shouldThrottle ? handleEventThrottled : handleEvent;
          target.addEventListener(type, handlerFunc);
          store.dispatch(eventListenerAdded(target, [type, handlerFunc]));
        });
      };
      if (Array.isArray(eventTypes)) {
        eventTypes.forEach(addListeners);
      } else if (typeof eventTypes === "string") {
        addListeners(logic);
      }
    }
    function injectBehaviorCSSFixes(events) {
      if (!IS_MOBILE_SAFARI) {
        return;
      }
      const injectedSelectors = {};
      let cssText = "";
      for (const eventId in events) {
        const { eventTypeId, target } = events[eventId];
        const selector = getQuerySelector(target);
        if (injectedSelectors[selector]) {
          continue;
        }
        if (eventTypeId === EventTypeConsts.MOUSE_CLICK || eventTypeId === EventTypeConsts.MOUSE_SECOND_CLICK) {
          injectedSelectors[selector] = true;
          cssText += selector + "{cursor: pointer;touch-action: manipulation;}";
        }
      }
      if (cssText) {
        const style = document.createElement("style");
        style.textContent = cssText;
        document.body.appendChild(style);
      }
    }
    function renderInitialGroup({ store, actionListId, eventId }) {
      const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
      const { actionLists, events } = ixData2;
      const event = events[eventId];
      const actionList = actionLists[actionListId];
      if (actionList && actionList.useFirstGroupAsInitialState) {
        const initialStateItems = (0, import_get2.default)(
          actionList,
          "actionItemGroups[0].actionItems",
          []
        );
        const mediaQueries = (0, import_get2.default)(event, "mediaQueries", ixData2.mediaQueryKeys);
        if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
          return;
        }
        initialStateItems.forEach((actionItem) => {
          const { config: itemConfig, actionTypeId } = actionItem;
          const config = (
            // When useEventTarget is explicitly true, use event target/targets to query elements
            // However, skip this condition when objectId is defined
            itemConfig?.target?.useEventTarget === true && itemConfig?.target?.objectId == null ? { target: event.target, targets: event.targets } : itemConfig
          );
          const itemElements = getAffectedElements2({ config, event, elementApi: IX2BrowserApi_exports });
          const shouldUsePlugin = isPluginType2(actionTypeId);
          itemElements.forEach((element) => {
            const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
            createInstance({
              destination: getDestinationValues2(
                { element, actionItem, elementApi: IX2BrowserApi_exports },
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                pluginInstance
              ),
              immediate: true,
              store,
              element,
              eventId,
              actionItem,
              actionListId,
              pluginInstance
            });
          });
        });
      }
    }
    function stopAllActionGroups({ store }) {
      const { ixInstances: ixInstances2 } = store.getState();
      (0, import_forEach.default)(ixInstances2, (instance) => {
        if (!instance.continuous) {
          const { actionListId, verbose } = instance;
          removeInstance(instance, store);
          if (verbose) {
            store.dispatch(
              actionListPlaybackChanged({ actionListId, isPlaying: false })
            );
          }
        }
      });
    }
    function stopActionGroup({
      // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
      store,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      eventId,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      eventTarget,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      eventStateKey,
      // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
      actionListId
    }) {
      const { ixInstances: ixInstances2, ixSession: ixSession2 } = store.getState();
      const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
      (0, import_forEach.default)(ixInstances2, (instance) => {
        const boundaryMode = (0, import_get2.default)(instance, "actionItem.config.target.boundaryMode");
        const validEventKey = eventStateKey ? instance.eventStateKey === eventStateKey : true;
        if (instance.actionListId === actionListId && instance.eventId === eventId && validEventKey) {
          if (eventElementRoot && boundaryMode && !elementContains(eventElementRoot, instance.element)) {
            return;
          }
          removeInstance(instance, store);
          if (instance.verbose) {
            store.dispatch(
              actionListPlaybackChanged({ actionListId, isPlaying: false })
            );
          }
        }
      });
    }
    function startActionGroup({
      // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
      store,
      // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
      eventId,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      eventTarget,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      eventStateKey,
      // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
      actionListId,
      groupIndex = 0,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      immediate,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      verbose
    }) {
      const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
      const { events } = ixData2;
      const event = events[eventId] || {};
      const { mediaQueries = ixData2.mediaQueryKeys } = event;
      const actionList = (0, import_get2.default)(ixData2, `actionLists.${actionListId}`, {});
      const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
      if (!actionItemGroups || !actionItemGroups.length) {
        return false;
      }
      if (groupIndex >= actionItemGroups.length && (0, import_get2.default)(event, "config.loop")) {
        groupIndex = 0;
      }
      if (groupIndex === 0 && useFirstGroupAsInitialState) {
        groupIndex++;
      }
      const isFirstGroup = groupIndex === 0 || groupIndex === 1 && useFirstGroupAsInitialState;
      const instanceDelay = isFirstGroup && isQuickEffect(event.action?.actionTypeId) ? event.config.delay : void 0;
      const actionItems = (0, import_get2.default)(actionItemGroups, [groupIndex, "actionItems"], []);
      if (!actionItems.length) {
        return false;
      }
      if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
        return false;
      }
      const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
      const carrierIndex = getMaxDurationItemIndex2(actionItems);
      let groupStartResult = false;
      actionItems.forEach((actionItem, actionIndex) => {
        const { config, actionTypeId } = actionItem;
        const shouldUsePlugin = isPluginType2(actionTypeId);
        const { target } = config;
        if (!target) {
          return;
        }
        const elementRoot = target.boundaryMode ? eventElementRoot : null;
        const elements = getAffectedElements2({
          config,
          event,
          eventTarget,
          elementRoot,
          elementApi: IX2BrowserApi_exports
        });
        elements.forEach((element, elementIndex) => {
          const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
          const pluginDuration = shouldUsePlugin ? getPluginDuration2(actionTypeId)(element, actionItem) : null;
          groupStartResult = true;
          const isCarrier = carrierIndex === actionIndex && elementIndex === 0;
          const computedStyle = getComputedStyle3({ element, actionItem });
          const destination = getDestinationValues2(
            { element, actionItem, elementApi: IX2BrowserApi_exports },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            pluginInstance
          );
          createInstance({
            store,
            element,
            actionItem,
            eventId,
            eventTarget,
            eventStateKey,
            actionListId,
            groupIndex,
            isCarrier,
            computedStyle,
            destination,
            immediate,
            verbose,
            pluginInstance,
            pluginDuration,
            instanceDelay
          });
        });
      });
      return groupStartResult;
    }
    function createInstance(options) {
      const { store, computedStyle, ...rest } = options;
      const {
        element,
        actionItem,
        immediate,
        pluginInstance,
        continuous,
        restingValue,
        eventId
      } = rest;
      const autoStart = !continuous;
      const instanceId = getInstanceId2();
      const { ixElements: ixElements3, ixSession: ixSession2, ixData: ixData2 } = store.getState();
      const elementId = getElementId2(ixElements3, element);
      const { refState: refState2 } = ixElements3[elementId] || {};
      const refType = getRefType(element);
      const skipMotion = (
        // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly TRANSFORM_MOVE: true; readonly TRANSFORM_SCALE: true; readonly TRANSFORM_ROTATE: true; readonly TRANSFORM_SKEW: true; readonly STYLE_SIZE: true; readonly STYLE_FILTER: true; readonly STYLE_FONT_VARIATION: true; }'.
        ixSession2.reducedMotion && ReducedMotionTypes[actionItem.actionTypeId]
      );
      let skipToValue;
      if (skipMotion && continuous) {
        switch (ixData2.events[eventId]?.eventTypeId) {
          case EventTypeConsts.MOUSE_MOVE:
          case EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            skipToValue = restingValue;
            break;
          default:
            skipToValue = 0.5;
            break;
        }
      }
      const origin = getInstanceOrigin2(
        element,
        refState2,
        computedStyle,
        actionItem,
        IX2BrowserApi_exports,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        pluginInstance
      );
      store.dispatch(
        instanceAdded({
          instanceId,
          elementId,
          origin,
          refType,
          skipMotion,
          skipToValue,
          ...rest
        })
      );
      dispatchCustomEvent(document.body, "ix2-animation-started", instanceId);
      if (immediate) {
        renderImmediateInstance(store, instanceId);
        return;
      }
      observeStore2({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixInstances' implicitly has an 'any' type.
        select: ({ ixInstances: ixInstances2 }) => ixInstances2[instanceId],
        onChange: handleInstanceChange
      });
      if (autoStart) {
        store.dispatch(instanceStarted(instanceId, ixSession2.tick));
      }
    }
    function removeInstance(instance, store) {
      dispatchCustomEvent(document.body, "ix2-animation-stopping", {
        instanceId: instance.id,
        state: store.getState()
      });
      const { elementId, actionItem } = instance;
      const { ixElements: ixElements3 } = store.getState();
      const { ref, refType } = ixElements3[elementId] || {};
      if (refType === HTML_ELEMENT4) {
        cleanupHTMLElement2(ref, actionItem, IX2BrowserApi_exports);
      }
      store.dispatch(instanceRemoved(instance.id));
    }
    function dispatchCustomEvent(element, eventName, detail) {
      const event = document.createEvent("CustomEvent");
      event.initCustomEvent(eventName, true, true, detail);
      element.dispatchEvent(event);
    }
    function renderImmediateInstance(store, instanceId) {
      const { ixParameters: ixParameters2 } = store.getState();
      store.dispatch(instanceStarted(instanceId, 0));
      store.dispatch(animationFrameChanged(performance.now(), ixParameters2));
      const { ixInstances: ixInstances2 } = store.getState();
      handleInstanceChange(ixInstances2[instanceId], store);
    }
    function handleInstanceChange(instance, store) {
      const {
        active,
        continuous,
        complete,
        elementId,
        actionItem,
        actionTypeId,
        renderType,
        current,
        groupIndex,
        eventId,
        eventTarget,
        eventStateKey,
        actionListId,
        isCarrier,
        styleProp,
        verbose,
        pluginInstance
      } = instance;
      const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
      const { events } = ixData2;
      const event = events[eventId] || {};
      const { mediaQueries = ixData2.mediaQueryKeys } = event;
      if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
        return;
      }
      if (continuous || active || complete) {
        if (current || renderType === RENDER_GENERAL4 && complete) {
          store.dispatch(
            elementStateChanged(elementId, actionTypeId, current, actionItem)
          );
          const { ixElements: ixElements3 } = store.getState();
          const { ref, refType, refState: refState2 } = ixElements3[elementId] || {};
          const actionState = refState2 && refState2[actionTypeId];
          if (refType === HTML_ELEMENT4 || isPluginType2(actionTypeId)) {
            renderHTMLElement2(
              ref,
              refState2,
              actionState,
              eventId,
              actionItem,
              styleProp,
              IX2BrowserApi_exports,
              renderType,
              pluginInstance
            );
          }
        }
        if (complete) {
          if (isCarrier) {
            const started = startActionGroup({
              store,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex: groupIndex + 1,
              verbose
            });
            if (verbose && !started) {
              store.dispatch(
                actionListPlaybackChanged({ actionListId, isPlaying: false })
              );
            }
          }
          removeInstance(instance, store);
        }
      }
    }
    var import_find2, import_get2, import_size, import_omitBy, import_isEmpty, import_mapValues, import_forEach, import_throttle, import_shared6, QuickEffectsIdList, isQuickEffect, COLON_DELIMITER4, BOUNDARY_SELECTOR2, HTML_ELEMENT4, RENDER_GENERAL4, W_MOD_IX2, getAffectedElements2, getElementId2, getDestinationValues2, observeStore2, getInstanceId2, renderHTMLElement2, clearAllStyles2, getMaxDurationItemIndex2, getComputedStyle3, getInstanceOrigin2, reduceListToGroup2, shouldNamespaceEventParameter2, getNamespacedParameterId3, shouldAllowMediaQuery2, cleanupHTMLElement2, clearObjectCache2, stringifyTarget2, mediaQueriesEqual2, shallowEqual2, isPluginType2, createPluginInstance2, getPluginDuration2, ua, IS_MOBILE_SAFARI, THROTTLED_EVENT_WAIT, WINDOW_RESIZE_EVENTS, mapFoundValues, forEachEventTarget, getAffectedForEvent;
    var init_IX2VanillaEngine = __esm({
      "packages/systems/ix2/engine/logic/IX2VanillaEngine.ts"() {
        "use strict";
        import_find2 = __toESM(require_find());
        import_get2 = __toESM(require_get());
        import_size = __toESM(require_size());
        import_omitBy = __toESM(require_omitBy());
        import_isEmpty = __toESM(require_isEmpty());
        import_mapValues = __toESM(require_mapValues());
        import_forEach = __toESM(require_forEach());
        import_throttle = __toESM(require_throttle());
        init_shared_constants();
        import_shared6 = __toESM(require_shared2());
        init_IX2EngineActions();
        init_IX2BrowserApi();
        init_IX2VanillaEvents();
        QuickEffectsIdList = Object.keys(QuickEffectIds);
        isQuickEffect = (actionTypeId) => QuickEffectsIdList.includes(actionTypeId);
        ({
          COLON_DELIMITER: COLON_DELIMITER4,
          BOUNDARY_SELECTOR: BOUNDARY_SELECTOR2,
          HTML_ELEMENT: HTML_ELEMENT4,
          RENDER_GENERAL: RENDER_GENERAL4,
          W_MOD_IX: W_MOD_IX2
        } = IX2EngineConstants_exports);
        ({
          getAffectedElements: getAffectedElements2,
          getElementId: getElementId2,
          getDestinationValues: getDestinationValues2,
          observeStore: observeStore2,
          getInstanceId: getInstanceId2,
          renderHTMLElement: renderHTMLElement2,
          clearAllStyles: clearAllStyles2,
          getMaxDurationItemIndex: getMaxDurationItemIndex2,
          getComputedStyle: getComputedStyle3,
          getInstanceOrigin: getInstanceOrigin2,
          reduceListToGroup: reduceListToGroup2,
          shouldNamespaceEventParameter: shouldNamespaceEventParameter2,
          getNamespacedParameterId: getNamespacedParameterId3,
          shouldAllowMediaQuery: shouldAllowMediaQuery2,
          cleanupHTMLElement: cleanupHTMLElement2,
          clearObjectCache: clearObjectCache2,
          stringifyTarget: stringifyTarget2,
          mediaQueriesEqual: mediaQueriesEqual2,
          shallowEqual: shallowEqual2
        } = import_shared6.IX2VanillaUtils);
        ({ isPluginType: isPluginType2, createPluginInstance: createPluginInstance2, getPluginDuration: getPluginDuration2 } = import_shared6.IX2VanillaPlugins);
        ua = navigator.userAgent;
        IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/);
        THROTTLED_EVENT_WAIT = 12;
        WINDOW_RESIZE_EVENTS = ["resize", "orientationchange"];
        mapFoundValues = (object, iteratee) => (0, import_omitBy.default)((0, import_mapValues.default)(object, iteratee), import_isEmpty.default);
        forEachEventTarget = (eventTargets, eventCallback) => {
          (0, import_forEach.default)(eventTargets, (elements, eventId) => {
            elements.forEach((element, index) => {
              const eventStateKey = eventId + COLON_DELIMITER4 + index;
              eventCallback(element, eventId, eventStateKey);
            });
          });
        };
        getAffectedForEvent = (event) => {
          const config = { target: event.target, targets: event.targets };
          return getAffectedElements2({ config, elementApi: IX2BrowserApi_exports });
        };
      }
    });
  
    // packages/systems/ix2/engine/index.js
    var require_engine = __commonJS({
      "packages/systems/ix2/engine/index.js"(exports) {
        "use strict";
        var _interopRequireWildcard = require_interopRequireWildcard().default;
        var _interopRequireDefault = require_interopRequireDefault().default;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.actions = void 0;
        exports.destroy = destroy;
        exports.init = init;
        exports.setEnv = setEnv;
        exports.store = void 0;
        require_includes3();
        var _redux = require_lib2();
        var _IX2Reducer = _interopRequireDefault((init_IX2Reducer(), __toCommonJS(IX2Reducer_exports)));
        var _IX2VanillaEngine = (init_IX2VanillaEngine(), __toCommonJS(IX2VanillaEngine_exports));
        var actions = _interopRequireWildcard((init_IX2EngineActions(), __toCommonJS(IX2EngineActions_exports)));
        exports.actions = actions;
        var store = exports.store = (0, _redux.createStore)(_IX2Reducer.default);
        function setEnv(env) {
          if (env()) {
            (0, _IX2VanillaEngine.observeRequests)(store);
          }
        }
        function init(rawData) {
          destroy();
          (0, _IX2VanillaEngine.startEngine)({
            store,
            rawData,
            allowEvents: true
          });
        }
        function destroy() {
          (0, _IX2VanillaEngine.stopEngine)(store);
        }
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js
    var require_webflow_ix2 = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        var ix2 = require_engine();
        ix2.setEnv(Webflow.env);
        Webflow.define("ix2", module.exports = function() {
          return ix2;
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-links.js
    var require_webflow_links = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-links.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("links", module.exports = function($, _) {
          var api = {};
          var $win = $(window);
          var designer;
          var inApp = Webflow.env();
          var location = window.location;
          var tempLink = document.createElement("a");
          var linkCurrent = "w--current";
          var indexPage = /index\.(html|php)$/;
          var dirList = /\/$/;
          var anchors;
          var slug;
          api.ready = api.design = api.preview = init;
          function init() {
            designer = inApp && Webflow.env("design");
            slug = Webflow.env("slug") || location.pathname || "";
            Webflow.scroll.off(scroll);
            anchors = [];
            var links = document.links;
            for (var i = 0; i < links.length; ++i) {
              select(links[i]);
            }
            if (anchors.length) {
              Webflow.scroll.on(scroll);
              scroll();
            }
          }
          function select(link) {
            if (link.getAttribute("hreflang")) {
              return;
            }
            var href = designer && link.getAttribute("href-disabled") || link.getAttribute("href");
            tempLink.href = href;
            if (href.indexOf(":") >= 0) {
              return;
            }
            var $link = $(link);
            if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
                return;
              }
              var $section = $(tempLink.hash);
              $section.length && anchors.push({
                link: $link,
                sec: $section,
                active: false
              });
              return;
            }
            if (href === "#" || href === "") {
              return;
            }
            var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
            setClass($link, linkCurrent, match);
          }
          function scroll() {
            var viewTop = $win.scrollTop();
            var viewHeight = $win.height();
            _.each(anchors, function(anchor) {
              if (anchor.link.attr("hreflang")) {
                return;
              }
              var $link = anchor.link;
              var $section = anchor.sec;
              var top = $section.offset().top;
              var height = $section.outerHeight();
              var offset = viewHeight * 0.5;
              var active = $section.is(":visible") && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
              if (anchor.active === active) {
                return;
              }
              anchor.active = active;
              setClass($link, linkCurrent, active);
            });
          }
          function setClass($elem, className, add) {
            var exists = $elem.hasClass(className);
            if (add && exists) {
              return;
            }
            if (!add && !exists) {
              return;
            }
            add ? $elem.addClass(className) : $elem.removeClass(className);
          }
          return api;
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js
    var require_webflow_scroll = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("scroll", module.exports = function($) {
          var NS_EVENTS = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll"
          };
          var loc = window.location;
          var history = inIframe() ? null : window.history;
          var $win = $(window);
          var $doc = $(document);
          var $body = $(document.body);
          var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
            window.setTimeout(fn, 15);
          };
          var rootTag = Webflow.env("editor") ? ".w-editor-body" : "body";
          var headerSelector = "header, " + rootTag + " > .header, " + rootTag + " > .w-nav:not([data-no-scroll])";
          var emptyHrefSelector = 'a[href="#"]';
          var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ")";
          var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
          var focusStylesEl = document.createElement("style");
          focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
          function inIframe() {
            try {
              return Boolean(window.frameElement);
            } catch (e) {
              return true;
            }
          }
          var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
          function linksToCurrentPage(link) {
            return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
          }
          const reducedMotionMediaQuery = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
          function reducedMotionEnabled() {
            return document.body.getAttribute("data-wf-scroll-motion") === "none" || reducedMotionMediaQuery.matches;
          }
          function setFocusable($el, action) {
            var initialTabindex;
            switch (action) {
              case "add":
                initialTabindex = $el.attr("tabindex");
                if (initialTabindex) {
                  $el.attr("data-wf-tabindex-swap", initialTabindex);
                } else {
                  $el.attr("tabindex", "-1");
                }
                break;
              case "remove":
                initialTabindex = $el.attr("data-wf-tabindex-swap");
                if (initialTabindex) {
                  $el.attr("tabindex", initialTabindex);
                  $el.removeAttr("data-wf-tabindex-swap");
                } else {
                  $el.removeAttr("tabindex");
                }
                break;
            }
            $el.toggleClass("wf-force-outline-none", action === "add");
          }
          function validateScroll(evt) {
            var target = evt.currentTarget;
            if (
              // Bail if in Designer
              Webflow.env("design") || // Ignore links being used by jQuery mobile
              window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)
            ) {
              return;
            }
            var hash = linksToCurrentPage(target) ? target.hash : "";
            if (hash === "")
              return;
            var $el = $(hash);
            if (!$el.length) {
              return;
            }
            if (evt) {
              evt.preventDefault();
              evt.stopPropagation();
            }
            updateHistory(hash, evt);
            window.setTimeout(function() {
              scroll($el, function setFocus() {
                setFocusable($el, "add");
                $el.get(0).focus({
                  preventScroll: true
                });
                setFocusable($el, "remove");
              });
            }, evt ? 0 : 300);
          }
          function updateHistory(hash) {
            if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
            !(Webflow.env.chrome && loc.protocol === "file:")) {
              var oldHash = history.state && history.state.hash;
              if (oldHash !== hash) {
                history.pushState({
                  hash
                }, "", hash);
              }
            }
          }
          function scroll($targetEl, cb) {
            var start = $win.scrollTop();
            var end = calculateScrollEndPosition($targetEl);
            if (start === end)
              return;
            var duration = calculateScrollDuration($targetEl, start, end);
            var clock = Date.now();
            var step = function() {
              var elapsed = Date.now() - clock;
              window.scroll(0, getY(start, end, elapsed, duration));
              if (elapsed <= duration) {
                animate(step);
              } else if (typeof cb === "function") {
                cb();
              }
            };
            animate(step);
          }
          function calculateScrollEndPosition($targetEl) {
            var $header = $(headerSelector);
            var offsetY = $header.css("position") === "fixed" ? $header.outerHeight() : 0;
            var end = $targetEl.offset().top - offsetY;
            if ($targetEl.data("scroll") === "mid") {
              var available = $win.height() - offsetY;
              var elHeight = $targetEl.outerHeight();
              if (elHeight < available) {
                end -= Math.round((available - elHeight) / 2);
              }
            }
            return end;
          }
          function calculateScrollDuration($targetEl, start, end) {
            if (reducedMotionEnabled())
              return 0;
            var mult = 1;
            $body.add($targetEl).each(function(_, el) {
              var time = parseFloat(el.getAttribute("data-scroll-time"));
              if (!isNaN(time) && time >= 0) {
                mult = time;
              }
            });
            return (472.143 * Math.log(Math.abs(start - end) + 125) - 2e3) * mult;
          }
          function getY(start, end, elapsed, duration) {
            if (elapsed > duration) {
              return end;
            }
            return start + (end - start) * ease2(elapsed / duration);
          }
          function ease2(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          }
          function ready() {
            var {
              WF_CLICK_EMPTY,
              WF_CLICK_SCROLL
            } = NS_EVENTS;
            $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
            $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
              e.preventDefault();
            });
            document.head.insertBefore(focusStylesEl, document.head.firstChild);
          }
          return {
            ready
          };
        });
      }
    });
  
    // packages/shared/render/plugins/BaseSiteModules/webflow-touch.js
    var require_webflow_touch = __commonJS({
      "packages/shared/render/plugins/BaseSiteModules/webflow-touch.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("touch", module.exports = function($) {
          var api = {};
          var getSelection = window.getSelection;
          $.event.special.tap = {
            bindType: "click",
            delegateType: "click"
          };
          api.init = function(el) {
            el = typeof el === "string" ? $(el).get(0) : el;
            return el ? new Touch(el) : null;
          };
          function Touch(el) {
            var active = false;
            var useTouch = false;
            var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
            var startX;
            var lastX;
            el.addEventListener("touchstart", start, false);
            el.addEventListener("touchmove", move, false);
            el.addEventListener("touchend", end, false);
            el.addEventListener("touchcancel", cancel, false);
            el.addEventListener("mousedown", start, false);
            el.addEventListener("mousemove", move, false);
            el.addEventListener("mouseup", end, false);
            el.addEventListener("mouseout", cancel, false);
            function start(evt) {
              var touches = evt.touches;
              if (touches && touches.length > 1) {
                return;
              }
              active = true;
              if (touches) {
                useTouch = true;
                startX = touches[0].clientX;
              } else {
                startX = evt.clientX;
              }
              lastX = startX;
            }
            function move(evt) {
              if (!active) {
                return;
              }
              if (useTouch && evt.type === "mousemove") {
                evt.preventDefault();
                evt.stopPropagation();
                return;
              }
              var touches = evt.touches;
              var x = touches ? touches[0].clientX : evt.clientX;
              var velocityX = x - lastX;
              lastX = x;
              if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === "") {
                triggerEvent("swipe", evt, {
                  direction: velocityX > 0 ? "right" : "left"
                });
                cancel();
              }
            }
            function end(evt) {
              if (!active) {
                return;
              }
              active = false;
              if (useTouch && evt.type === "mouseup") {
                evt.preventDefault();
                evt.stopPropagation();
                useTouch = false;
                return;
              }
            }
            function cancel() {
              active = false;
            }
            function destroy() {
              el.removeEventListener("touchstart", start, false);
              el.removeEventListener("touchmove", move, false);
              el.removeEventListener("touchend", end, false);
              el.removeEventListener("touchcancel", cancel, false);
              el.removeEventListener("mousedown", start, false);
              el.removeEventListener("mousemove", move, false);
              el.removeEventListener("mouseup", end, false);
              el.removeEventListener("mouseout", cancel, false);
              el = null;
            }
            this.destroy = destroy;
          }
          function triggerEvent(type, evt, data) {
            var newEvent = $.Event(type, {
              originalEvent: evt
            });
            $(evt.target).trigger(newEvent, data);
          }
          api.instance = api.init(document);
          return api;
        });
      }
    });
  
    // packages/shared/render/plugins/Form/webflow-forms-hosted.js
    var require_webflow_forms_hosted = __commonJS({
      "packages/shared/render/plugins/Form/webflow-forms-hosted.js"(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = hostedSubmitWebflow;
        function hostedSubmitWebflow(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl) {
          return function(data) {
            reset(data);
            var form = data.form;
            var payload = {
              name: form.attr("data-name") || form.attr("name") || "Untitled Form",
              pageId: form.attr("data-wf-page-id") || "",
              elementId: form.attr("data-wf-element-id") || "",
              source: loc.href,
              test: Webflow.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html()),
              trackingCookies: collectEnterpriseTrackingCookies()
            };
            const wfFlow = form.attr("data-wf-flow");
            if (wfFlow) {
              payload.wfFlow = wfFlow;
            }
            preventDefault(data);
            var status = findFields(form, payload.fields);
            if (status) {
              return alert(status);
            }
            payload.fileUploads = findFileUploads(form);
            disableBtn(data);
            if (!siteId) {
              afterSubmit(data);
              return;
            }
            $.ajax({
              url: formUrl,
              type: "POST",
              data: payload,
              dataType: "json",
              crossDomain: true
            }).done(function(response) {
              if (response && response.code === 200) {
                data.success = true;
              }
              afterSubmit(data);
            }).fail(function() {
              afterSubmit(data);
            });
          };
        }
      }
    });
  
    // packages/shared/render/plugins/Form/webflow-forms.js
    var require_webflow_forms = __commonJS({
      "packages/shared/render/plugins/Form/webflow-forms.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        Webflow.define("forms", module.exports = function($, _) {
          var api = {};
          var $doc = $(document);
          var $forms;
          var loc = window.location;
          var retro = window.XDomainRequest && !window.atob;
          var namespace = ".w-form";
          var siteId;
          var emailField = /e(-)?mail/i;
          var emailValue = /^\S+@\S+$/;
          var alert = window.alert;
          var inApp = Webflow.env();
          var listening;
          var formUrl;
          var signFileUrl;
          var chimpRegex = /list-manage[1-9]?.com/i;
          var disconnected = _.debounce(function() {
            alert("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
          }, 100);
          api.ready = api.design = api.preview = function() {
            init();
            if (!inApp && !listening) {
              addListeners();
            }
          };
          function init() {
            siteId = $("html").attr("data-wf-site");
            formUrl = "https://webflow.com/api/v1/form/" + siteId;
            if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
              formUrl = formUrl.replace("https://webflow.com", "https://formdata.webflow.com");
            }
            signFileUrl = `${formUrl}/signFile`;
            $forms = $(namespace + " form");
            if (!$forms.length) {
              return;
            }
            $forms.each(build);
          }
          function build(i, el) {
            var $el = $(el);
            var data = $.data(el, namespace);
            if (!data) {
              data = $.data(el, namespace, {
                form: $el
              });
            }
            reset(data);
            var wrap = $el.closest("div.w-form");
            data.done = wrap.find("> .w-form-done");
            data.fail = wrap.find("> .w-form-fail");
            data.fileUploads = wrap.find(".w-file-upload");
            data.fileUploads.each(function(j) {
              initFileUpload(j, data);
            });
            var formName = data.form.attr("aria-label") || data.form.attr("data-name") || "Form";
            if (!data.done.attr("aria-label")) {
              data.form.attr("aria-label", formName);
            }
            data.done.attr("tabindex", "-1");
            data.done.attr("role", "region");
            if (!data.done.attr("aria-label")) {
              data.done.attr("aria-label", formName + " success");
            }
            data.fail.attr("tabindex", "-1");
            data.fail.attr("role", "region");
            if (!data.fail.attr("aria-label")) {
              data.fail.attr("aria-label", formName + " failure");
            }
            var action = data.action = $el.attr("action");
            data.handler = null;
            data.redirect = $el.attr("data-redirect");
            if (chimpRegex.test(action)) {
              data.handler = submitMailChimp;
              return;
            }
            if (action) {
              return;
            }
            if (siteId) {
              data.handler = false ? exportedSubmitWebflow : (() => {
                const hostedSubmitHandler = require_webflow_forms_hosted().default;
                return hostedSubmitHandler(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl);
              })();
              return;
            }
            disconnected();
          }
          function addListeners() {
            listening = true;
            $doc.on("submit", namespace + " form", function(evt) {
              var data = $.data(this, namespace);
              if (data.handler) {
                data.evt = evt;
                data.handler(data);
              }
            });
            const CHECKBOX_CLASS_NAME = ".w-checkbox-input";
            const RADIO_INPUT_CLASS_NAME = ".w-radio-input";
            const CHECKED_CLASS = "w--redirected-checked";
            const FOCUSED_CLASS = "w--redirected-focus";
            const FOCUSED_VISIBLE_CLASS = "w--redirected-focus-visible";
            const focusVisibleSelectors = ":focus-visible, [data-wf-focus-visible]";
            const CUSTOM_CONTROLS = [["checkbox", CHECKBOX_CLASS_NAME], ["radio", RADIO_INPUT_CLASS_NAME]];
            $doc.on("change", namespace + ` form input[type="checkbox"]:not(` + CHECKBOX_CLASS_NAME + ")", (evt) => {
              $(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
            });
            $doc.on("change", namespace + ` form input[type="radio"]`, (evt) => {
              $(`input[name="${evt.target.name}"]:not(${CHECKBOX_CLASS_NAME})`).map((i, el) => $(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS));
              const $target = $(evt.target);
              if (!$target.hasClass("w-radio-input")) {
                $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
              }
            });
            CUSTOM_CONTROLS.forEach(([controlType, customControlClassName]) => {
              $doc.on("focus", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
                $(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
                $(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
              });
              $doc.on("blur", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
                $(evt.target).siblings(customControlClassName).removeClass(`${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}`);
              });
            });
          }
          function reset(data) {
            var btn = data.btn = data.form.find(':input[type="submit"]');
            data.wait = data.btn.attr("data-wait") || null;
            data.success = false;
            btn.prop("disabled", false);
            data.label && btn.val(data.label);
          }
          function disableBtn(data) {
            var btn = data.btn;
            var wait = data.wait;
            btn.prop("disabled", true);
            if (wait) {
              data.label = btn.val();
              btn.val(wait);
            }
          }
          function findFields(form, result) {
            var status = null;
            result = result || {};
            form.find(':input:not([type="submit"]):not([type="file"])').each(function(i, el) {
              var field = $(el);
              var type = field.attr("type");
              var name = field.attr("data-name") || field.attr("name") || "Field " + (i + 1);
              name = encodeURIComponent(name);
              var value = field.val();
              if (type === "checkbox") {
                value = field.is(":checked");
              } else if (type === "radio") {
                if (result[name] === null || typeof result[name] === "string") {
                  return;
                }
                value = form.find('input[name="' + field.attr("name") + '"]:checked').val() || null;
              }
              if (typeof value === "string") {
                value = $.trim(value);
              }
              result[name] = value;
              status = status || getStatus(field, type, name, value);
            });
            return status;
          }
          function findFileUploads(form) {
            var result = {};
            form.find(':input[type="file"]').each(function(i, el) {
              var field = $(el);
              var name = field.attr("data-name") || field.attr("name") || "File " + (i + 1);
              var value = field.attr("data-value");
              if (typeof value === "string") {
                value = $.trim(value);
              }
              result[name] = value;
            });
            return result;
          }
          const trackingCookieNameMap = {
            _mkto_trk: "marketo"
            // __hstc: 'hubspot',
          };
          function collectEnterpriseTrackingCookies() {
            const cookies = document.cookie.split("; ").reduce(function(acc, cookie) {
              const splitCookie = cookie.split("=");
              const name = splitCookie[0];
              if (name in trackingCookieNameMap) {
                const mappedName = trackingCookieNameMap[name];
                const value = splitCookie.slice(1).join("=");
                acc[mappedName] = value;
              }
              return acc;
            }, {});
            return cookies;
          }
          function getStatus(field, type, name, value) {
            var status = null;
            if (type === "password") {
              status = "Passwords cannot be submitted.";
            } else if (field.attr("required")) {
              if (!value) {
                status = "Please fill out the required field: " + name;
              } else if (emailField.test(field.attr("type"))) {
                if (!emailValue.test(value)) {
                  status = "Please enter a valid email address for: " + name;
                }
              }
            } else if (name === "g-recaptcha-response" && !value) {
              status = "Please confirm you\u2019re not a robot.";
            }
            return status;
          }
          function exportedSubmitWebflow(data) {
            preventDefault(data);
            afterSubmit(data);
          }
          function submitMailChimp(data) {
            reset(data);
            var form = data.form;
            var payload = {};
            if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
              form.attr("method", "post");
              return;
            }
            preventDefault(data);
            var status = findFields(form, payload);
            if (status) {
              return alert(status);
            }
            disableBtn(data);
            var fullName;
            _.each(payload, function(value, key) {
              if (emailField.test(key)) {
                payload.EMAIL = value;
              }
              if (/^((full[ _-]?)?name)$/i.test(key)) {
                fullName = value;
              }
              if (/^(first[ _-]?name)$/i.test(key)) {
                payload.FNAME = value;
              }
              if (/^(last[ _-]?name)$/i.test(key)) {
                payload.LNAME = value;
              }
            });
            if (fullName && !payload.FNAME) {
              fullName = fullName.split(" ");
              payload.FNAME = fullName[0];
              payload.LNAME = payload.LNAME || fullName[1];
            }
            var url = data.action.replace("/post?", "/post-json?") + "&c=?";
            var userId = url.indexOf("u=") + 2;
            userId = url.substring(userId, url.indexOf("&", userId));
            var listId = url.indexOf("id=") + 3;
            listId = url.substring(listId, url.indexOf("&", listId));
            payload["b_" + userId + "_" + listId] = "";
            $.ajax({
              url,
              data: payload,
              dataType: "jsonp"
            }).done(function(resp) {
              data.success = resp.result === "success" || /already/.test(resp.msg);
              if (!data.success) {
                console.info("MailChimp error: " + resp.msg);
              }
              afterSubmit(data);
            }).fail(function() {
              afterSubmit(data);
            });
          }
          function afterSubmit(data) {
            var form = data.form;
            var redirect = data.redirect;
            var success = data.success;
            if (success && redirect) {
              Webflow.location(redirect);
              return;
            }
            data.done.toggle(success);
            data.fail.toggle(!success);
            if (success) {
              data.done.focus();
            } else {
              data.fail.focus();
            }
            form.toggle(!success);
            reset(data);
          }
          function preventDefault(data) {
            data.evt && data.evt.preventDefault();
            data.evt = null;
          }
          function initFileUpload(i, form) {
            if (!form.fileUploads || !form.fileUploads[i]) {
              return;
            }
            var file;
            var $el = $(form.fileUploads[i]);
            var $defaultWrap = $el.find("> .w-file-upload-default");
            var $uploadingWrap = $el.find("> .w-file-upload-uploading");
            var $successWrap = $el.find("> .w-file-upload-success");
            var $errorWrap = $el.find("> .w-file-upload-error");
            var $input = $defaultWrap.find(".w-file-upload-input");
            var $label = $defaultWrap.find(".w-file-upload-label");
            var $labelChildren = $label.children();
            var $errorMsgEl = $errorWrap.find(".w-file-upload-error-msg");
            var $fileEl = $successWrap.find(".w-file-upload-file");
            var $removeEl = $successWrap.find(".w-file-remove-link");
            var $fileNameEl = $fileEl.find(".w-file-upload-file-name");
            var sizeErrMsg = $errorMsgEl.attr("data-w-size-error");
            var typeErrMsg = $errorMsgEl.attr("data-w-type-error");
            var genericErrMsg = $errorMsgEl.attr("data-w-generic-error");
            if (!inApp) {
              $label.on("click keydown", function(e) {
                if (e.type === "keydown" && e.which !== 13 && e.which !== 32) {
                  return;
                }
                e.preventDefault();
                $input.click();
              });
            }
            $label.find(".w-icon-file-upload-icon").attr("aria-hidden", "true");
            $removeEl.find(".w-icon-file-upload-remove").attr("aria-hidden", "true");
            if (!inApp) {
              $removeEl.on("click keydown", function(e) {
                if (e.type === "keydown") {
                  if (e.which !== 13 && e.which !== 32) {
                    return;
                  }
                  e.preventDefault();
                }
                $input.removeAttr("data-value");
                $input.val("");
                $fileNameEl.html("");
                $defaultWrap.toggle(true);
                $successWrap.toggle(false);
                $label.focus();
              });
              $input.on("change", function(e) {
                file = e.target && e.target.files && e.target.files[0];
                if (!file) {
                  return;
                }
                $defaultWrap.toggle(false);
                $errorWrap.toggle(false);
                $uploadingWrap.toggle(true);
                $uploadingWrap.focus();
                $fileNameEl.text(file.name);
                if (!isUploading()) {
                  disableBtn(form);
                }
                form.fileUploads[i].uploading = true;
                signFile(file, afterSign);
              });
              var height = $label.outerHeight();
              $input.height(height);
              $input.width(1);
            } else {
              $input.on("click", function(e) {
                e.preventDefault();
              });
              $label.on("click", function(e) {
                e.preventDefault();
              });
              $labelChildren.on("click", function(e) {
                e.preventDefault();
              });
            }
            function parseError(err) {
              var errorMsg = err.responseJSON && err.responseJSON.msg;
              var userError = genericErrMsg;
              if (typeof errorMsg === "string" && errorMsg.indexOf("InvalidFileTypeError") === 0) {
                userError = typeErrMsg;
              } else if (typeof errorMsg === "string" && errorMsg.indexOf("MaxFileSizeError") === 0) {
                userError = sizeErrMsg;
              }
              $errorMsgEl.text(userError);
              $input.removeAttr("data-value");
              $input.val("");
              $uploadingWrap.toggle(false);
              $defaultWrap.toggle(true);
              $errorWrap.toggle(true);
              $errorWrap.focus();
              form.fileUploads[i].uploading = false;
              if (!isUploading()) {
                reset(form);
              }
            }
            function afterSign(err, data) {
              if (err) {
                return parseError(err);
              }
              var fileName = data.fileName;
              var postData = data.postData;
              var fileId = data.fileId;
              var s3Url = data.s3Url;
              $input.attr("data-value", fileId);
              uploadS3(s3Url, postData, file, fileName, afterUpload);
            }
            function afterUpload(err) {
              if (err) {
                return parseError(err);
              }
              $uploadingWrap.toggle(false);
              $successWrap.css("display", "inline-block");
              $successWrap.focus();
              form.fileUploads[i].uploading = false;
              if (!isUploading()) {
                reset(form);
              }
            }
            function isUploading() {
              var uploads = form.fileUploads && form.fileUploads.toArray() || [];
              return uploads.some(function(value) {
                return value.uploading;
              });
            }
          }
          function signFile(file, cb) {
            var payload = new URLSearchParams({
              name: file.name,
              size: file.size
            });
            $.ajax({
              type: "GET",
              url: `${signFileUrl}?${payload}`,
              crossDomain: true
            }).done(function(data) {
              cb(null, data);
            }).fail(function(err) {
              cb(err);
            });
          }
          function uploadS3(url, data, file, fileName, cb) {
            var formData = new FormData();
            for (var k in data) {
              formData.append(k, data[k]);
            }
            formData.append("file", file, fileName);
            $.ajax({
              type: "POST",
              url,
              data: formData,
              processData: false,
              contentType: false
            }).done(function() {
              cb(null);
            }).fail(function(err) {
              cb(err);
            });
          }
          return api;
        });
      }
    });
  
    // packages/shared/render/plugins/Navbar/webflow-navbar.js
    var require_webflow_navbar = __commonJS({
      "packages/shared/render/plugins/Navbar/webflow-navbar.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        var IXEvents = require_webflow_ix2_events();
        var KEY_CODES = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35
        };
        Webflow.define("navbar", module.exports = function($, _) {
          var api = {};
          var tram = $.tram;
          var $win = $(window);
          var $doc = $(document);
          var debounce = _.debounce;
          var $body;
          var $navbars;
          var designer;
          var inEditor;
          var inApp = Webflow.env();
          var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
          var namespace = ".w-nav";
          var navbarOpenedButton = "w--open";
          var navbarOpenedDropdown = "w--nav-dropdown-open";
          var navbarOpenedDropdownToggle = "w--nav-dropdown-toggle-open";
          var navbarOpenedDropdownList = "w--nav-dropdown-list-open";
          var navbarOpenedLink = "w--nav-link-open";
          var ix = IXEvents.triggers;
          var menuSibling = $();
          api.ready = api.design = api.preview = init;
          api.destroy = function() {
            menuSibling = $();
            removeListeners();
            if ($navbars && $navbars.length) {
              $navbars.each(teardown);
            }
          };
          function init() {
            designer = inApp && Webflow.env("design");
            inEditor = Webflow.env("editor");
            $body = $(document.body);
            $navbars = $doc.find(namespace);
            if (!$navbars.length) {
              return;
            }
            $navbars.each(build);
            removeListeners();
            addListeners();
          }
          function removeListeners() {
            Webflow.resize.off(resizeAll);
          }
          function addListeners() {
            Webflow.resize.on(resizeAll);
          }
          function resizeAll() {
            $navbars.each(resize);
          }
          function build(i, el) {
            var $el = $(el);
            var data = $.data(el, namespace);
            if (!data) {
              data = $.data(el, namespace, {
                open: false,
                el: $el,
                config: {},
                selectedIdx: -1
              });
            }
            data.menu = $el.find(".w-nav-menu");
            data.links = data.menu.find(".w-nav-link");
            data.dropdowns = data.menu.find(".w-dropdown");
            data.dropdownToggle = data.menu.find(".w-dropdown-toggle");
            data.dropdownList = data.menu.find(".w-dropdown-list");
            data.button = $el.find(".w-nav-button");
            data.container = $el.find(".w-container");
            data.overlayContainerId = "w-nav-overlay-" + i;
            data.outside = outside(data);
            var navBrandLink = $el.find(".w-nav-brand");
            if (navBrandLink && navBrandLink.attr("href") === "/" && navBrandLink.attr("aria-label") == null) {
              navBrandLink.attr("aria-label", "home");
            }
            data.button.attr("style", "-webkit-user-select: text;");
            if (data.button.attr("aria-label") == null) {
              data.button.attr("aria-label", "menu");
            }
            data.button.attr("role", "button");
            data.button.attr("tabindex", "0");
            data.button.attr("aria-controls", data.overlayContainerId);
            data.button.attr("aria-haspopup", "menu");
            data.button.attr("aria-expanded", "false");
            data.el.off(namespace);
            data.button.off(namespace);
            data.menu.off(namespace);
            configure(data);
            if (designer) {
              removeOverlay(data);
              data.el.on("setting" + namespace, handler(data));
            } else {
              addOverlay(data);
              data.button.on("click" + namespace, toggle(data));
              data.menu.on("click" + namespace, "a", navigate(data));
              data.button.on("keydown" + namespace, makeToggleButtonKeyboardHandler(data));
              data.el.on("keydown" + namespace, makeLinksKeyboardHandler(data));
            }
            resize(i, el);
          }
          function teardown(i, el) {
            var data = $.data(el, namespace);
            if (data) {
              removeOverlay(data);
              $.removeData(el, namespace);
            }
          }
          function removeOverlay(data) {
            if (!data.overlay) {
              return;
            }
            close(data, true);
            data.overlay.remove();
            data.overlay = null;
          }
          function addOverlay(data) {
            if (data.overlay) {
              return;
            }
            data.overlay = $(overlay).appendTo(data.el);
            data.overlay.attr("id", data.overlayContainerId);
            data.parent = data.menu.parent();
            close(data, true);
          }
          function configure(data) {
            var config = {};
            var old = data.config || {};
            var animation = config.animation = data.el.attr("data-animation") || "default";
            config.animOver = /^over/.test(animation);
            config.animDirect = /left$/.test(animation) ? -1 : 1;
            if (old.animation !== animation) {
              data.open && _.defer(reopen, data);
            }
            config.easing = data.el.attr("data-easing") || "ease";
            config.easing2 = data.el.attr("data-easing2") || "ease";
            var duration = data.el.attr("data-duration");
            config.duration = duration != null ? Number(duration) : 400;
            config.docHeight = data.el.attr("data-doc-height");
            data.config = config;
          }
          function handler(data) {
            return function(evt, options) {
              options = options || {};
              var winWidth = $win.width();
              configure(data);
              options.open === true && open(data, true);
              options.open === false && close(data, true);
              data.open && _.defer(function() {
                if (winWidth !== $win.width()) {
                  reopen(data);
                }
              });
            };
          }
          function makeToggleButtonKeyboardHandler(data) {
            return function(evt) {
              switch (evt.keyCode) {
                case KEY_CODES.SPACE:
                case KEY_CODES.ENTER: {
                  toggle(data)();
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ESCAPE: {
                  close(data);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN:
                case KEY_CODES.HOME:
                case KEY_CODES.END: {
                  if (!data.open) {
                    evt.preventDefault();
                    return evt.stopPropagation();
                  }
                  if (evt.keyCode === KEY_CODES.END) {
                    data.selectedIdx = data.links.length - 1;
                  } else {
                    data.selectedIdx = 0;
                  }
                  focusSelectedLink(data);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
              }
            };
          }
          function makeLinksKeyboardHandler(data) {
            return function(evt) {
              if (!data.open) {
                return;
              }
              data.selectedIdx = data.links.index(document.activeElement);
              switch (evt.keyCode) {
                case KEY_CODES.HOME:
                case KEY_CODES.END: {
                  if (evt.keyCode === KEY_CODES.END) {
                    data.selectedIdx = data.links.length - 1;
                  } else {
                    data.selectedIdx = 0;
                  }
                  focusSelectedLink(data);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ESCAPE: {
                  close(data);
                  data.button.focus();
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ARROW_LEFT:
                case KEY_CODES.ARROW_UP: {
                  data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                  focusSelectedLink(data);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN: {
                  data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                  focusSelectedLink(data);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
              }
            };
          }
          function focusSelectedLink(data) {
            if (data.links[data.selectedIdx]) {
              var selectedElement = data.links[data.selectedIdx];
              selectedElement.focus();
              navigate(selectedElement);
            }
          }
          function reopen(data) {
            if (!data.open) {
              return;
            }
            close(data, true);
            open(data, true);
          }
          function toggle(data) {
            return debounce(function() {
              data.open ? close(data) : open(data);
            });
          }
          function navigate(data) {
            return function(evt) {
              var link = $(this);
              var href = link.attr("href");
              if (!Webflow.validClick(evt.currentTarget)) {
                evt.preventDefault();
                return;
              }
              if (href && href.indexOf("#") === 0 && data.open) {
                close(data);
              }
            };
          }
          function outside(data) {
            if (data.outside) {
              $doc.off("click" + namespace, data.outside);
            }
            return function(evt) {
              var $target = $(evt.target);
              if (inEditor && $target.closest(".w-editor-bem-EditorOverlay").length) {
                return;
              }
              outsideDebounced(data, $target);
            };
          }
          var outsideDebounced = debounce(function(data, $target) {
            if (!data.open) {
              return;
            }
            var menu = $target.closest(".w-nav-menu");
            if (!data.menu.is(menu)) {
              close(data);
            }
          });
          function resize(i, el) {
            var data = $.data(el, namespace);
            var collapsed = data.collapsed = data.button.css("display") !== "none";
            if (data.open && !collapsed && !designer) {
              close(data, true);
            }
            if (data.container.length) {
              var updateEachMax = updateMax(data);
              data.links.each(updateEachMax);
              data.dropdowns.each(updateEachMax);
            }
            if (data.open) {
              setOverlayHeight(data);
            }
          }
          var maxWidth = "max-width";
          function updateMax(data) {
            var containMax = data.container.css(maxWidth);
            if (containMax === "none") {
              containMax = "";
            }
            return function(i, link) {
              link = $(link);
              link.css(maxWidth, "");
              if (link.css(maxWidth) === "none") {
                link.css(maxWidth, containMax);
              }
            };
          }
          function addMenuOpen(i, el) {
            el.setAttribute("data-nav-menu-open", "");
          }
          function removeMenuOpen(i, el) {
            el.removeAttribute("data-nav-menu-open");
          }
          function open(data, immediate) {
            if (data.open) {
              return;
            }
            data.open = true;
            data.menu.each(addMenuOpen);
            data.links.addClass(navbarOpenedLink);
            data.dropdowns.addClass(navbarOpenedDropdown);
            data.dropdownToggle.addClass(navbarOpenedDropdownToggle);
            data.dropdownList.addClass(navbarOpenedDropdownList);
            data.button.addClass(navbarOpenedButton);
            var config = data.config;
            var animation = config.animation;
            if (animation === "none" || !tram.support.transform || config.duration <= 0) {
              immediate = true;
            }
            var bodyHeight = setOverlayHeight(data);
            var menuHeight = data.menu.outerHeight(true);
            var menuWidth = data.menu.outerWidth(true);
            var navHeight = data.el.height();
            var navbarEl = data.el[0];
            resize(0, navbarEl);
            ix.intro(0, navbarEl);
            Webflow.redraw.up();
            if (!designer) {
              $doc.on("click" + namespace, data.outside);
            }
            if (immediate) {
              complete();
              return;
            }
            var transConfig = "transform " + config.duration + "ms " + config.easing;
            if (data.overlay) {
              menuSibling = data.menu.prev();
              data.overlay.show().append(data.menu);
            }
            if (config.animOver) {
              tram(data.menu).add(transConfig).set({
                x: config.animDirect * menuWidth,
                height: bodyHeight
              }).start({
                x: 0
              }).then(complete);
              data.overlay && data.overlay.width(menuWidth);
              return;
            }
            var offsetY = navHeight + menuHeight;
            tram(data.menu).add(transConfig).set({
              y: -offsetY
            }).start({
              y: 0
            }).then(complete);
            function complete() {
              data.button.attr("aria-expanded", "true");
            }
          }
          function setOverlayHeight(data) {
            var config = data.config;
            var bodyHeight = config.docHeight ? $doc.height() : $body.height();
            if (config.animOver) {
              data.menu.height(bodyHeight);
            } else if (data.el.css("position") !== "fixed") {
              bodyHeight -= data.el.outerHeight(true);
            }
            data.overlay && data.overlay.height(bodyHeight);
            return bodyHeight;
          }
          function close(data, immediate) {
            if (!data.open) {
              return;
            }
            data.open = false;
            data.button.removeClass(navbarOpenedButton);
            var config = data.config;
            if (config.animation === "none" || !tram.support.transform || config.duration <= 0) {
              immediate = true;
            }
            ix.outro(0, data.el[0]);
            $doc.off("click" + namespace, data.outside);
            if (immediate) {
              tram(data.menu).stop();
              complete();
              return;
            }
            var transConfig = "transform " + config.duration + "ms " + config.easing2;
            var menuHeight = data.menu.outerHeight(true);
            var menuWidth = data.menu.outerWidth(true);
            var navHeight = data.el.height();
            if (config.animOver) {
              tram(data.menu).add(transConfig).start({
                x: menuWidth * config.animDirect
              }).then(complete);
              return;
            }
            var offsetY = navHeight + menuHeight;
            tram(data.menu).add(transConfig).start({
              y: -offsetY
            }).then(complete);
            function complete() {
              data.menu.height("");
              tram(data.menu).set({
                x: 0,
                y: 0
              });
              data.menu.each(removeMenuOpen);
              data.links.removeClass(navbarOpenedLink);
              data.dropdowns.removeClass(navbarOpenedDropdown);
              data.dropdownToggle.removeClass(navbarOpenedDropdownToggle);
              data.dropdownList.removeClass(navbarOpenedDropdownList);
              if (data.overlay && data.overlay.children().length) {
                menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
                data.overlay.attr("style", "").hide();
              }
              data.el.triggerHandler("w-close");
              data.button.attr("aria-expanded", "false");
            }
          }
          return api;
        });
      }
    });
  
    // packages/shared/render/plugins/Slider/webflow-slider.js
    var require_webflow_slider = __commonJS({
      "packages/shared/render/plugins/Slider/webflow-slider.js"(exports, module) {
        "use strict";
        var Webflow = require_webflow_lib();
        var IXEvents = require_webflow_ix2_events();
        var KEY_CODES = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35
        };
        var FOCUSABLE_SELECTOR = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Webflow.define("slider", module.exports = function($, _) {
          var api = {};
          var tram = $.tram;
          var $doc = $(document);
          var $sliders;
          var designer;
          var inApp = Webflow.env();
          var namespace = ".w-slider";
          var dot = '<div class="w-slider-dot" data-wf-ignore />';
          var ariaLiveLabelHtml = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />';
          var forceShow = "w-slider-force-show";
          var ix = IXEvents.triggers;
          var fallback;
          var inRedraw = false;
          api.ready = function() {
            designer = Webflow.env("design");
            init();
          };
          api.design = function() {
            designer = true;
            setTimeout(init, 1e3);
          };
          api.preview = function() {
            designer = false;
            init();
          };
          api.redraw = function() {
            inRedraw = true;
            init();
            inRedraw = false;
          };
          api.destroy = removeListeners;
          function init() {
            $sliders = $doc.find(namespace);
            if (!$sliders.length) {
              return;
            }
            $sliders.each(build);
            if (fallback) {
              return;
            }
            removeListeners();
            addListeners();
          }
          function removeListeners() {
            Webflow.resize.off(renderAll);
            Webflow.redraw.off(api.redraw);
          }
          function addListeners() {
            Webflow.resize.on(renderAll);
            Webflow.redraw.on(api.redraw);
          }
          function renderAll() {
            $sliders.filter(":visible").each(render);
          }
          function build(i, el) {
            var $el = $(el);
            var data = $.data(el, namespace);
            if (!data) {
              data = $.data(el, namespace, {
                index: 0,
                depth: 1,
                hasFocus: {
                  keyboard: false,
                  mouse: false
                },
                el: $el,
                config: {}
              });
            }
            data.mask = $el.children(".w-slider-mask");
            data.left = $el.children(".w-slider-arrow-left");
            data.right = $el.children(".w-slider-arrow-right");
            data.nav = $el.children(".w-slider-nav");
            data.slides = data.mask.children(".w-slide");
            data.slides.each(ix.reset);
            if (inRedraw) {
              data.maskWidth = 0;
            }
            if ($el.attr("role") === void 0) {
              $el.attr("role", "region");
            }
            if ($el.attr("aria-label") === void 0) {
              $el.attr("aria-label", "carousel");
            }
            var slideViewId = data.mask.attr("id");
            if (!slideViewId) {
              slideViewId = "w-slider-mask-" + i;
              data.mask.attr("id", slideViewId);
            }
            if (!designer && !data.ariaLiveLabel) {
              data.ariaLiveLabel = $(ariaLiveLabelHtml).appendTo(data.mask);
            }
            data.left.attr("role", "button");
            data.left.attr("tabindex", "0");
            data.left.attr("aria-controls", slideViewId);
            if (data.left.attr("aria-label") === void 0) {
              data.left.attr("aria-label", "previous slide");
            }
            data.right.attr("role", "button");
            data.right.attr("tabindex", "0");
            data.right.attr("aria-controls", slideViewId);
            if (data.right.attr("aria-label") === void 0) {
              data.right.attr("aria-label", "next slide");
            }
            if (!tram.support.transform) {
              data.left.hide();
              data.right.hide();
              data.nav.hide();
              fallback = true;
              return;
            }
            data.el.off(namespace);
            data.left.off(namespace);
            data.right.off(namespace);
            data.nav.off(namespace);
            configure(data);
            if (designer) {
              data.el.on("setting" + namespace, handler(data));
              stopTimer(data);
              data.hasTimer = false;
            } else {
              data.el.on("swipe" + namespace, handler(data));
              data.left.on("click" + namespace, previousFunction(data));
              data.right.on("click" + namespace, next(data));
              data.left.on("keydown" + namespace, keyboardSlideButtonsFunction(data, previousFunction));
              data.right.on("keydown" + namespace, keyboardSlideButtonsFunction(data, next));
              data.nav.on("keydown" + namespace, "> div", handler(data));
              if (data.config.autoplay && !data.hasTimer) {
                data.hasTimer = true;
                data.timerCount = 1;
                startTimer(data);
              }
              data.el.on("mouseenter" + namespace, hasFocus(data, true, "mouse"));
              data.el.on("focusin" + namespace, hasFocus(data, true, "keyboard"));
              data.el.on("mouseleave" + namespace, hasFocus(data, false, "mouse"));
              data.el.on("focusout" + namespace, hasFocus(data, false, "keyboard"));
            }
            data.nav.on("click" + namespace, "> div", handler(data));
            if (!inApp) {
              data.mask.contents().filter(function() {
                return this.nodeType === 3;
              }).remove();
            }
            var $elHidden = $el.filter(":hidden");
            $elHidden.addClass(forceShow);
            var $elHiddenParents = $el.parents(":hidden");
            $elHiddenParents.addClass(forceShow);
            if (!inRedraw) {
              render(i, el);
            }
            $elHidden.removeClass(forceShow);
            $elHiddenParents.removeClass(forceShow);
          }
          function configure(data) {
            var config = {};
            config.crossOver = 0;
            config.animation = data.el.attr("data-animation") || "slide";
            if (config.animation === "outin") {
              config.animation = "cross";
              config.crossOver = 0.5;
            }
            config.easing = data.el.attr("data-easing") || "ease";
            var duration = data.el.attr("data-duration");
            config.duration = duration != null ? parseInt(duration, 10) : 500;
            if (isAttrTrue(data.el.attr("data-infinite"))) {
              config.infinite = true;
            }
            if (isAttrTrue(data.el.attr("data-disable-swipe"))) {
              config.disableSwipe = true;
            }
            if (isAttrTrue(data.el.attr("data-hide-arrows"))) {
              config.hideArrows = true;
            } else if (data.config.hideArrows) {
              data.left.show();
              data.right.show();
            }
            if (isAttrTrue(data.el.attr("data-autoplay"))) {
              config.autoplay = true;
              config.delay = parseInt(data.el.attr("data-delay"), 10) || 2e3;
              config.timerMax = parseInt(data.el.attr("data-autoplay-limit"), 10);
              var touchEvents = "mousedown" + namespace + " touchstart" + namespace;
              if (!designer) {
                data.el.off(touchEvents).one(touchEvents, function() {
                  stopTimer(data);
                });
              }
            }
            var arrowWidth = data.right.width();
            config.edge = arrowWidth ? arrowWidth + 40 : 100;
            data.config = config;
          }
          function isAttrTrue(value) {
            return value === "1" || value === "true";
          }
          function hasFocus(data, focusIn, eventType) {
            return function(evt) {
              if (!focusIn) {
                if ($.contains(data.el.get(0), evt.relatedTarget)) {
                  return;
                }
                data.hasFocus[eventType] = focusIn;
                if (data.hasFocus.mouse && eventType === "keyboard" || data.hasFocus.keyboard && eventType === "mouse") {
                  return;
                }
              } else {
                data.hasFocus[eventType] = focusIn;
              }
              if (focusIn) {
                data.ariaLiveLabel.attr("aria-live", "polite");
                if (data.hasTimer) {
                  stopTimer(data);
                }
              } else {
                data.ariaLiveLabel.attr("aria-live", "off");
                if (data.hasTimer) {
                  startTimer(data);
                }
              }
              return;
            };
          }
          function keyboardSlideButtonsFunction(data, directionFunction) {
            return function(evt) {
              switch (evt.keyCode) {
                case KEY_CODES.SPACE:
                case KEY_CODES.ENTER: {
                  directionFunction(data)();
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
              }
            };
          }
          function previousFunction(data) {
            return function() {
              change(data, {
                index: data.index - 1,
                vector: -1
              });
            };
          }
          function next(data) {
            return function() {
              change(data, {
                index: data.index + 1,
                vector: 1
              });
            };
          }
          function select(data, value) {
            var found = null;
            if (value === data.slides.length) {
              init();
              layout(data);
            }
            _.each(data.anchors, function(anchor, index) {
              $(anchor.els).each(function(i, el) {
                if ($(el).index() === value) {
                  found = index;
                }
              });
            });
            if (found != null) {
              change(data, {
                index: found,
                immediate: true
              });
            }
          }
          function startTimer(data) {
            stopTimer(data);
            var config = data.config;
            var timerMax = config.timerMax;
            if (timerMax && data.timerCount++ > timerMax) {
              return;
            }
            data.timerId = window.setTimeout(function() {
              if (data.timerId == null || designer) {
                return;
              }
              next(data)();
              startTimer(data);
            }, config.delay);
          }
          function stopTimer(data) {
            window.clearTimeout(data.timerId);
            data.timerId = null;
          }
          function handler(data) {
            return function(evt, options) {
              options = options || {};
              var config = data.config;
              if (designer && evt.type === "setting") {
                if (options.select === "prev") {
                  return previousFunction(data)();
                }
                if (options.select === "next") {
                  return next(data)();
                }
                configure(data);
                layout(data);
                if (options.select == null) {
                  return;
                }
                select(data, options.select);
                return;
              }
              if (evt.type === "swipe") {
                if (config.disableSwipe) {
                  return;
                }
                if (Webflow.env("editor")) {
                  return;
                }
                if (options.direction === "left") {
                  return next(data)();
                }
                if (options.direction === "right") {
                  return previousFunction(data)();
                }
                return;
              }
              if (data.nav.has(evt.target).length) {
                var index = $(evt.target).index();
                if (evt.type === "click") {
                  change(data, {
                    index
                  });
                }
                if (evt.type === "keydown") {
                  switch (evt.keyCode) {
                    case KEY_CODES.ENTER:
                    case KEY_CODES.SPACE: {
                      change(data, {
                        index
                      });
                      evt.preventDefault();
                      break;
                    }
                    case KEY_CODES.ARROW_LEFT:
                    case KEY_CODES.ARROW_UP: {
                      focusDot(data.nav, Math.max(index - 1, 0));
                      evt.preventDefault();
                      break;
                    }
                    case KEY_CODES.ARROW_RIGHT:
                    case KEY_CODES.ARROW_DOWN: {
                      focusDot(data.nav, Math.min(index + 1, data.pages));
                      evt.preventDefault();
                      break;
                    }
                    case KEY_CODES.HOME: {
                      focusDot(data.nav, 0);
                      evt.preventDefault();
                      break;
                    }
                    case KEY_CODES.END: {
                      focusDot(data.nav, data.pages);
                      evt.preventDefault();
                      break;
                    }
                    default: {
                      return;
                    }
                  }
                }
              }
            };
          }
          function focusDot($nav, index) {
            var $active = $nav.children().eq(index).focus();
            $nav.children().not($active);
          }
          function change(data, options) {
            options = options || {};
            var config = data.config;
            var anchors = data.anchors;
            data.previous = data.index;
            var index = options.index;
            var shift = {};
            if (index < 0) {
              index = anchors.length - 1;
              if (config.infinite) {
                shift.x = -data.endX;
                shift.from = 0;
                shift.to = anchors[0].width;
              }
            } else if (index >= anchors.length) {
              index = 0;
              if (config.infinite) {
                shift.x = anchors[anchors.length - 1].width;
                shift.from = -anchors[anchors.length - 1].x;
                shift.to = shift.from - shift.x;
              }
            }
            data.index = index;
            var $active = data.nav.children().eq(index).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
            data.nav.children().not($active).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1");
            if (config.hideArrows) {
              data.index === anchors.length - 1 ? data.right.hide() : data.right.show();
              data.index === 0 ? data.left.hide() : data.left.show();
            }
            var lastOffsetX = data.offsetX || 0;
            var offsetX = data.offsetX = -anchors[data.index].x;
            var resetConfig = {
              x: offsetX,
              opacity: 1,
              visibility: ""
            };
            var targets = $(anchors[data.index].els);
            var prevTargs = $(anchors[data.previous] && anchors[data.previous].els);
            var others = data.slides.not(targets);
            var animation = config.animation;
            var easing = config.easing;
            var duration = Math.round(config.duration);
            var vector = options.vector || (data.index > data.previous ? 1 : -1);
            var fadeRule = "opacity " + duration + "ms " + easing;
            var slideRule = "transform " + duration + "ms " + easing;
            targets.find(FOCUSABLE_SELECTOR).removeAttr("tabindex");
            targets.removeAttr("aria-hidden");
            targets.find("*").removeAttr("aria-hidden");
            others.find(FOCUSABLE_SELECTOR).attr("tabindex", "-1");
            others.attr("aria-hidden", "true");
            others.find("*").attr("aria-hidden", "true");
            if (!designer) {
              targets.each(ix.intro);
              others.each(ix.outro);
            }
            if (options.immediate && !inRedraw) {
              tram(targets).set(resetConfig);
              resetOthers();
              return;
            }
            if (data.index === data.previous) {
              return;
            }
            if (!designer) {
              data.ariaLiveLabel.text(`Slide ${index + 1} of ${anchors.length}.`);
            }
            if (animation === "cross") {
              var reduced = Math.round(duration - duration * config.crossOver);
              var wait = Math.round(duration - reduced);
              fadeRule = "opacity " + reduced + "ms " + easing;
              tram(prevTargs).set({
                visibility: ""
              }).add(fadeRule).start({
                opacity: 0
              });
              tram(targets).set({
                visibility: "",
                x: offsetX,
                opacity: 0,
                zIndex: data.depth++
              }).add(fadeRule).wait(wait).then({
                opacity: 1
              }).then(resetOthers);
              return;
            }
            if (animation === "fade") {
              tram(prevTargs).set({
                visibility: ""
              }).stop();
              tram(targets).set({
                visibility: "",
                x: offsetX,
                opacity: 0,
                zIndex: data.depth++
              }).add(fadeRule).start({
                opacity: 1
              }).then(resetOthers);
              return;
            }
            if (animation === "over") {
              resetConfig = {
                x: data.endX
              };
              tram(prevTargs).set({
                visibility: ""
              }).stop();
              tram(targets).set({
                visibility: "",
                zIndex: data.depth++,
                x: offsetX + anchors[data.index].width * vector
              }).add(slideRule).start({
                x: offsetX
              }).then(resetOthers);
              return;
            }
            if (config.infinite && shift.x) {
              tram(data.slides.not(prevTargs)).set({
                visibility: "",
                x: shift.x
              }).add(slideRule).start({
                x: offsetX
              });
              tram(prevTargs).set({
                visibility: "",
                x: shift.from
              }).add(slideRule).start({
                x: shift.to
              });
              data.shifted = prevTargs;
            } else {
              if (config.infinite && data.shifted) {
                tram(data.shifted).set({
                  visibility: "",
                  x: lastOffsetX
                });
                data.shifted = null;
              }
              tram(data.slides).set({
                visibility: ""
              }).add(slideRule).start({
                x: offsetX
              });
            }
            function resetOthers() {
              targets = $(anchors[data.index].els);
              others = data.slides.not(targets);
              if (animation !== "slide") {
                resetConfig.visibility = "hidden";
              }
              tram(others).set(resetConfig);
            }
          }
          function render(i, el) {
            var data = $.data(el, namespace);
            if (!data) {
              return;
            }
            if (maskChanged(data)) {
              return layout(data);
            }
            if (designer && slidesChanged(data)) {
              layout(data);
            }
          }
          function layout(data) {
            var pages = 1;
            var offset = 0;
            var anchor = 0;
            var width = 0;
            var maskWidth = data.maskWidth;
            var threshold = maskWidth - data.config.edge;
            if (threshold < 0) {
              threshold = 0;
            }
            data.anchors = [{
              els: [],
              x: 0,
              width: 0
            }];
            data.slides.each(function(i, el) {
              if (anchor - offset > threshold) {
                pages++;
                offset += maskWidth;
                data.anchors[pages - 1] = {
                  els: [],
                  x: anchor,
                  width: 0
                };
              }
              width = $(el).outerWidth(true);
              anchor += width;
              data.anchors[pages - 1].width += width;
              data.anchors[pages - 1].els.push(el);
              var ariaLabel = i + 1 + " of " + data.slides.length;
              $(el).attr("aria-label", ariaLabel);
              $(el).attr("role", "group");
            });
            data.endX = anchor;
            if (designer) {
              data.pages = null;
            }
            if (data.nav.length && data.pages !== pages) {
              data.pages = pages;
              buildNav(data);
            }
            var index = data.index;
            if (index >= pages) {
              index = pages - 1;
            }
            change(data, {
              immediate: true,
              index
            });
          }
          function buildNav(data) {
            var dots = [];
            var $dot;
            var spacing = data.el.attr("data-nav-spacing");
            if (spacing) {
              spacing = parseFloat(spacing) + "px";
            }
            for (var i = 0, len = data.pages; i < len; i++) {
              $dot = $(dot);
              $dot.attr("aria-label", "Show slide " + (i + 1) + " of " + len).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1");
              if (data.nav.hasClass("w-num")) {
                $dot.text(i + 1);
              }
              if (spacing != null) {
                $dot.css({
                  "margin-left": spacing,
                  "margin-right": spacing
                });
              }
              dots.push($dot);
            }
            data.nav.empty().append(dots);
          }
          function maskChanged(data) {
            var maskWidth = data.mask.width();
            if (data.maskWidth !== maskWidth) {
              data.maskWidth = maskWidth;
              return true;
            }
            return false;
          }
          function slidesChanged(data) {
            var slidesWidth = 0;
            data.slides.each(function(i, el) {
              slidesWidth += $(el).outerWidth(true);
            });
            if (data.slidesWidth !== slidesWidth) {
              data.slidesWidth = slidesWidth;
              return true;
            }
            return false;
          }
          return api;
        });
      }
    });
  
    // <stdin>
    require_webflow_brand();
    require_webflow_edit();
    require_webflow_focus_visible();
    require_webflow_focus();
    require_webflow_ix2_events();
    require_webflow_ix2();
    require_webflow_links();
    require_webflow_scroll();
    require_webflow_touch();
    require_webflow_forms();
    require_webflow_navbar();
    require_webflow_slider();
  })();
  /*!
   * tram.js v0.8.2-global
   * Cross-browser CSS3 transitions in JavaScript
   * https://github.com/bkwld/tram
   * MIT License
   */
  /*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */
  /*! Bundled license information:
  
  timm/lib/timm.js:
    (*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     *)
  */
  /**
   * ----------------------------------------------------------------------
   * Webflow: Interactions 2.0: Init
   */
  Webflow.require('ix2').init(
  {"events":{"e":{"id":"e","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e60fc04bd89334069d7207|0add69ab-1acc-a56b-ab72-d9b1cd6d3054","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e60fc04bd89334069d7207|0add69ab-1acc-a56b-ab72-d9b1cd6d3054","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1582924799832},"e-3":{"id":"e-3","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e60fc04bd89334069d7207|ae6d3e74-cad2-e25b-7307-64469019de8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e60fc04bd89334069d7207|ae6d3e74-cad2-e25b-7307-64469019de8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1582924910349},"e-5":{"id":"e-5","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e60fc04bd89334069d7207|29859a3f-acf5-87fb-9a1d-59628b5d3fbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e60fc04bd89334069d7207|29859a3f-acf5-87fb-9a1d-59628b5d3fbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1582924918116},"e-7":{"id":"e-7","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e60fc04bd89334069d7207|d87fa01e-3185-5bc3-193f-6faa2208ea8e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e60fc04bd89334069d7207|d87fa01e-3185-5bc3-193f-6faa2208ea8e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1582924926265},"e-9":{"id":"e-9","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e60fc04bd89334069d7207|d242de0d-d6d2-f690-dd23-3599cc488914","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e60fc04bd89334069d7207|d242de0d-d6d2-f690-dd23-3599cc488914","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1582924933376},"e-11":{"id":"e-11","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e60fc04bd89334069d7207|36a69626-52ca-b009-2f12-75a01dceb9e4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e60fc04bd89334069d7207|36a69626-52ca-b009-2f12-75a01dceb9e4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1582924942948},"e-13":{"id":"e-13","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-14"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e60fc04bd89334069d7207|5b5856d5-59ee-ab6c-62a3-bedc1be922a2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e60fc04bd89334069d7207|5b5856d5-59ee-ab6c-62a3-bedc1be922a2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1582924948817}},"actionLists":{"a":{"id":"a","title":"Fade In","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"65e60fc04bd89334069d7207|0add69ab-1acc-a56b-ab72-d9b1cd6d3054"},"yValue":25,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"65e60fc04bd89334069d7207|0add69ab-1acc-a56b-ab72-d9b1cd6d3054"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuart","duration":900,"target":{"useEventTarget":true,"id":"65e60fc04bd89334069d7207|0add69ab-1acc-a56b-ab72-d9b1cd6d3054"},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":900,"target":{"useEventTarget":true,"id":"65e60fc04bd89334069d7207|0add69ab-1acc-a56b-ab72-d9b1cd6d3054"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1582924808599}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}
  );
  $(document).ready(function() {
     $(".w-webflow-badge").removeClass("w-webflow-badge").empty();
    });