/* eslint-disable no-void */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable  */
const kaboom = (() => {
  const __defProp = Object.defineProperty;
  const __name = (target, value) =>
    __defProp(target, 'name', { value, configurable: true });
  const __esm = (fn, res) =>
    function __init() {
      return fn && (res = (0, fn[Object.keys(fn)[0]])((fn = 0))), res;
    };
  const __commonJS = (cb, mod) =>
    function __require() {
      return (
        mod ||
          (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod),
        mod.exports
      );
    };
  const __toBinary = /* @__PURE__ */ (() => {
    const table = new Uint8Array(128);
    for (let i = 0; i < 64; i++)
      table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] =
        i;
    return base64 => {
      const n = base64.length;
      const bytes = new Uint8Array(
        (((n - (base64[n - 1] == '=') - (base64[n - 2] == '=')) * 3) / 4) | 0
      );
      for (let i2 = 0, j = 0; i2 < n; ) {
        const c0 = table[base64.charCodeAt(i2++)];
        const c1 = table[base64.charCodeAt(i2++)];
        const c2 = table[base64.charCodeAt(i2++)];
        const c3 = table[base64.charCodeAt(i2++)];
        bytes[j++] = (c0 << 2) | (c1 >> 4);
        bytes[j++] = (c1 << 4) | (c2 >> 2);
        bytes[j++] = (c2 << 6) | c3;
      }
      return bytes;
    };
  })();

  // src/math.ts
  function deg2rad(deg) {
    return (deg * Math.PI) / 180;
  }
  function rad2deg(rad) {
    return (rad * 180) / Math.PI;
  }
  function clamp(val, min, max) {
    if (min > max) {
      return clamp(val, max, min);
    }
    return Math.min(Math.max(val, min), max);
  }
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function map(v, l1, h1, l2, h2) {
    return l2 + ((v - l1) / (h1 - l1)) * (h2 - l2);
  }
  function mapc(v, l1, h1, l2, h2) {
    return clamp(map(v, l1, h1, l2, h2), l2, h2);
  }
  function vec2(...args) {
    if (args.length === 0) {
      return vec2(0, 0);
    }
    if (args.length === 1) {
      if (typeof args[0] === 'number') {
        return vec2(args[0], args[0]);
      }
      if (isVec2(args[0])) {
        return vec2(args[0].x, args[0].y);
      }
      if (Array.isArray(args[0]) && args[0].length === 2) {
        return vec2.apply(null, args[0]);
      }
    }
    return {
      x: args[0],
      y: args[1],
      clone() {
        return vec2(this.x, this.y);
      },
      add(...args2) {
        const p2 = vec2(...args2);
        return vec2(this.x + p2.x, this.y + p2.y);
      },
      sub(...args2) {
        const p2 = vec2(...args2);
        return vec2(this.x - p2.x, this.y - p2.y);
      },
      scale(...args2) {
        const s = vec2(...args2);
        return vec2(this.x * s.x, this.y * s.y);
      },
      dist(...args2) {
        const p2 = vec2(...args2);
        return Math.sqrt(
          (this.x - p2.x) * (this.x - p2.x) + (this.y - p2.y) * (this.y - p2.y)
        );
      },
      len() {
        return this.dist(vec2(0, 0));
      },
      unit() {
        return this.scale(1 / this.len());
      },
      normal() {
        return vec2(this.y, -this.x);
      },
      dot(p2) {
        return this.x * p2.x + this.y + p2.y;
      },
      angle(...args2) {
        const p2 = vec2(...args2);
        return Math.atan2(this.y - p2.y, this.x - p2.x);
      },
      lerp(p2, t) {
        return vec2(lerp(this.x, p2.x, t), lerp(this.y, p2.y, t));
      },
      toFixed(n) {
        return vec2(this.x.toFixed(n), this.y.toFixed(n));
      },
      eq(other) {
        return this.x === other.x && this.y === other.y;
      },
      str() {
        return `(${this.x}, ${this.y})`;
      },
    };
  }
  function vec2FromAngle(a) {
    return vec2(Math.cos(a), Math.sin(a));
  }
  function vec3(x, y, z) {
    return {
      x,
      y,
      z,
      xy() {
        return vec2(this.x, this.y);
      },
    };
  }
  function isVec2(p) {
    return p !== void 0 && p.x !== void 0 && p.y !== void 0;
  }
  function isVec3(p) {
    return p !== void 0 && p.x !== void 0 && p.y !== void 0 && p.z !== void 0;
  }
  function isColor(c) {
    return (
      c !== void 0 &&
      c.r !== void 0 &&
      c.g !== void 0 &&
      c.b !== void 0 &&
      c.a !== void 0
    );
  }
  function isMat4(m) {
    if (m !== void 0 && Array.isArray(m.m) && m.m.length === 16) {
      return m;
    }
  }
  function rgb(...args) {
    if (args.length === 0) {
      return rgba();
    }
    if (args.length === 1) {
      if (isColor(args[0])) {
        return rgba(args[0]);
      }
      if (Array.isArray(args[0]) && args[0].length === 3) {
        return rgb.apply(null, args[0]);
      }
    }
    return rgba(args[0], args[1], args[2], 1);
  }
  function rgba(...args) {
    if (args.length === 0) {
      return rgba(1, 1, 1, 1);
    }
    if (args.length === 1) {
      if (isColor(args[0])) {
        return rgba(args[0].r, args[0].g, args[0].b, args[0].a);
      }
      if (Array.isArray(args[0]) && args[0].length === 4) {
        return rgba.apply(null, args[0]);
      }
    }
    return {
      r: args[0],
      g: args[1],
      b: args[2],
      a: args[3] ?? 1,
      clone() {
        return rgba(this.r, this.g, this.b, this.a);
      },
      lighten(a) {
        return rgba(this.r + a, this.g + a, this.b + a, this.a);
      },
      darken(a) {
        return this.lighten(-a);
      },
      invert() {
        return rgba(1 - this.r, 1 - this.g, 1 - this.b, this.a);
      },
      isDark(p = 0.5) {
        return this.r + this.g + this.b < 3 * p;
      },
      isLight(p = 0.5) {
        return this.r + this.g + this.b > 3 * p;
      },
      eq(other) {
        return (
          this.r === other.r &&
          this.g === other.g &&
          this.b === other.g &&
          this.a === other.a
        );
      },
    };
  }
  function quad(x, y, w, h) {
    return {
      x,
      y,
      w,
      h,
      scale(other) {
        return quad(
          this.x + this.w * other.x,
          this.y + this.h * other.y,
          this.w * other.w,
          this.h * other.h
        );
      },
      clone() {
        return quad(this.x, this.y, this.w, this.h);
      },
      eq(other) {
        return (
          this.x === other.x &&
          this.y === other.y &&
          this.w === other.w &&
          this.h === other.h
        );
      },
    };
  }
  function mat4(m) {
    return {
      m: m ? [...m] : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      clone() {
        return mat4(this.m);
      },
      mult(other) {
        const out = [];
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            out[i * 4 + j] =
              this.m[0 * 4 + j] * other.m[i * 4 + 0] +
              this.m[1 * 4 + j] * other.m[i * 4 + 1] +
              this.m[2 * 4 + j] * other.m[i * 4 + 2] +
              this.m[3 * 4 + j] * other.m[i * 4 + 3];
          }
        }
        return mat4(out);
      },
      multVec4(p) {
        return {
          x:
            p.x * this.m[0] +
            p.y * this.m[4] +
            p.z * this.m[8] +
            p.w * this.m[12],
          y:
            p.x * this.m[1] +
            p.y * this.m[5] +
            p.z * this.m[9] +
            p.w * this.m[13],
          z:
            p.x * this.m[2] +
            p.y * this.m[6] +
            p.z * this.m[10] +
            p.w * this.m[14],
          w:
            p.x * this.m[3] +
            p.y * this.m[7] +
            p.z * this.m[11] +
            p.w * this.m[15],
        };
      },
      multVec3(p) {
        const p4 = this.multVec4({
          x: p.x,
          y: p.y,
          z: p.z,
          w: 1,
        });
        return vec3(p4.x, p4.y, p4.z);
      },
      multVec2(p) {
        return vec2(
          p.x * this.m[0] + p.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12],
          p.x * this.m[1] + p.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]
        );
      },
      translate(p) {
        return this.mult(
          mat4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, p.x, p.y, 0, 1])
        );
      },
      scale(s) {
        return this.mult(
          mat4([s.x, 0, 0, 0, 0, s.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        );
      },
      rotateX(a) {
        return this.mult(
          mat4([
            1,
            0,
            0,
            0,
            0,
            Math.cos(a),
            -Math.sin(a),
            0,
            0,
            Math.sin(a),
            Math.cos(a),
            0,
            0,
            0,
            0,
            1,
          ])
        );
      },
      rotateY(a) {
        return this.mult(
          mat4([
            Math.cos(a),
            0,
            -Math.sin(a),
            0,
            0,
            1,
            0,
            0,
            Math.sin(a),
            0,
            Math.cos(a),
            0,
            0,
            0,
            0,
            1,
          ])
        );
      },
      rotateZ(a) {
        return this.mult(
          mat4([
            Math.cos(a),
            -Math.sin(a),
            0,
            0,
            Math.sin(a),
            Math.cos(a),
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
          ])
        );
      },
      invert() {
        const out = [];
        const f00 = this.m[10] * this.m[15] - this.m[14] * this.m[11];
        const f01 = this.m[9] * this.m[15] - this.m[13] * this.m[11];
        const f02 = this.m[9] * this.m[14] - this.m[13] * this.m[10];
        const f03 = this.m[8] * this.m[15] - this.m[12] * this.m[11];
        const f04 = this.m[8] * this.m[14] - this.m[12] * this.m[10];
        const f05 = this.m[8] * this.m[13] - this.m[12] * this.m[9];
        const f06 = this.m[6] * this.m[15] - this.m[14] * this.m[7];
        const f07 = this.m[5] * this.m[15] - this.m[13] * this.m[7];
        const f08 = this.m[5] * this.m[14] - this.m[13] * this.m[6];
        const f09 = this.m[4] * this.m[15] - this.m[12] * this.m[7];
        const f10 = this.m[4] * this.m[14] - this.m[12] * this.m[6];
        const f11 = this.m[5] * this.m[15] - this.m[13] * this.m[7];
        const f12 = this.m[4] * this.m[13] - this.m[12] * this.m[5];
        const f13 = this.m[6] * this.m[11] - this.m[10] * this.m[7];
        const f14 = this.m[5] * this.m[11] - this.m[9] * this.m[7];
        const f15 = this.m[5] * this.m[10] - this.m[9] * this.m[6];
        const f16 = this.m[4] * this.m[11] - this.m[8] * this.m[7];
        const f17 = this.m[4] * this.m[10] - this.m[8] * this.m[6];
        const f18 = this.m[4] * this.m[9] - this.m[8] * this.m[5];
        out[0] = this.m[5] * f00 - this.m[6] * f01 + this.m[7] * f02;
        out[4] = -(this.m[4] * f00 - this.m[6] * f03 + this.m[7] * f04);
        out[8] = this.m[4] * f01 - this.m[5] * f03 + this.m[7] * f05;
        out[12] = -(this.m[4] * f02 - this.m[5] * f04 + this.m[6] * f05);
        out[1] = -(this.m[1] * f00 - this.m[2] * f01 + this.m[3] * f02);
        out[5] = this.m[0] * f00 - this.m[2] * f03 + this.m[3] * f04;
        out[9] = -(this.m[0] * f01 - this.m[1] * f03 + this.m[3] * f05);
        out[13] = this.m[0] * f02 - this.m[1] * f04 + this.m[2] * f05;
        out[2] = this.m[1] * f06 - this.m[2] * f07 + this.m[3] * f08;
        out[6] = -(this.m[0] * f06 - this.m[2] * f09 + this.m[3] * f10);
        out[10] = this.m[0] * f11 - this.m[1] * f09 + this.m[3] * f12;
        out[14] = -(this.m[0] * f08 - this.m[1] * f10 + this.m[2] * f12);
        out[3] = -(this.m[1] * f13 - this.m[2] * f14 + this.m[3] * f15);
        out[7] = this.m[0] * f13 - this.m[2] * f16 + this.m[3] * f17;
        out[11] = -(this.m[0] * f14 - this.m[1] * f16 + this.m[3] * f18);
        out[15] = this.m[0] * f15 - this.m[1] * f17 + this.m[2] * f18;
        const det =
          this.m[0] * out[0] +
          this.m[1] * out[4] +
          this.m[2] * out[8] +
          this.m[3] * out[12];
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            out[i * 4 + j] *= 1 / det;
          }
        }
        return mat4(out);
      },
    };
  }
  function wave(lo, hi, t) {
    return lo + ((Math.sin(t) + 1) / 2) * (hi - lo);
  }
  function makeRng(seed) {
    return {
      seed,
      gen(...args) {
        if (args.length === 0) {
          this.seed = (A * this.seed + C) % M;
          return this.seed / M;
        }
        if (args.length === 1) {
          if (typeof args[0] === 'number') {
            return this.gen(0, args[0]);
          }
          if (isVec2(args[0])) {
            return this.gen(vec2(0, 0), args[0]);
          }
          if (isColor(args[0])) {
            return this.gen(rgba(0, 0, 0, 0), args[0]);
          }
        } else if (args.length === 2) {
          if (typeof args[0] === 'number' && typeof args[1] === 'number') {
            return this.gen() * (args[1] - args[0]) + args[0];
          }
          if (isVec2(args[0]) && isVec2(args[1])) {
            return vec2(
              this.gen(args[0].x, args[1].x),
              this.gen(args[0].y, args[1].y)
            );
          }
          if (isColor(args[0]) && isColor(args[1])) {
            return rgba(
              this.gen(args[0].r, args[1].r),
              this.gen(args[0].g, args[1].g),
              this.gen(args[0].b, args[1].b),
              this.gen(args[0].a, args[1].a)
            );
          }
        }
      },
    };
  }
  function randSeed(seed) {
    if (seed != null) {
      defRNG.seed = seed;
    }
    return defRNG.seed;
  }
  function rand(...args) {
    return defRNG.gen(...args);
  }
  function chance(p) {
    return rand() <= p;
  }
  function choose(list) {
    return list[Math.floor(rand(list.length))];
  }
  function colRectRect(r1, r2) {
    return (
      r1.p2.x >= r2.p1.x &&
      r1.p1.x <= r2.p2.x &&
      r1.p2.y >= r2.p1.y &&
      r1.p1.y <= r2.p2.y
    );
  }
  function overlapRectRect(r1, r2) {
    return (
      r1.p2.x > r2.p1.x &&
      r1.p1.x < r2.p2.x &&
      r1.p2.y > r2.p1.y &&
      r1.p1.y < r2.p2.y
    );
  }
  function colRectPt(r, pt) {
    return pt.x >= r.p1.x && pt.x <= r.p2.x && pt.y >= r.p1.y && pt.y < r.p2.y;
  }
  let A;
  let C;
  let M;
  let defRNG;
  const init_math = __esm({
    'src/math.ts': function () {
      __name(deg2rad, 'deg2rad');
      __name(rad2deg, 'rad2deg');
      __name(clamp, 'clamp');
      __name(lerp, 'lerp');
      __name(map, 'map');
      __name(mapc, 'mapc');
      __name(vec2, 'vec2');
      __name(vec2FromAngle, 'vec2FromAngle');
      __name(vec3, 'vec3');
      __name(isVec2, 'isVec2');
      __name(isVec3, 'isVec3');
      __name(isColor, 'isColor');
      __name(isMat4, 'isMat4');
      __name(rgb, 'rgb');
      __name(rgba, 'rgba');
      __name(quad, 'quad');
      __name(mat4, 'mat4');
      __name(wave, 'wave');
      A = 1103515245;
      C = 12345;
      M = 2147483648;
      defRNG = makeRng(Date.now());
      __name(makeRng, 'makeRng');
      __name(randSeed, 'randSeed');
      __name(rand, 'rand');
      __name(chance, 'chance');
      __name(choose, 'choose');
      __name(colRectRect, 'colRectRect');
      __name(overlapRectRect, 'overlapRectRect');
      __name(colRectPt, 'colRectPt');
    },
  });

  // src/utils.ts
  function deepEq(o1, o2) {
    const t1 = typeof o1;
    const t2 = typeof o2;
    if (t1 !== t2) {
      return false;
    }
    if (t1 === 'object' && t2 === 'object') {
      const k1 = Object.keys(o1);
      const k2 = Object.keys(o2);
      if (k1.length !== k2.length) {
        return false;
      }
      for (const k of k1) {
        const v1 = o1[k];
        const v2 = o2[k];
        if (!(typeof v1 === 'function' && typeof v2 === 'function')) {
          if (!deepEq(v1, v2)) {
            return false;
          }
        }
      }
      return true;
    }
    return o1 === o2;
  }
  const init_utils = __esm({
    'src/utils.ts': function () {
      __name(deepEq, 'deepEq');
    },
  });

  // src/gfx.ts
  function originPt(orig) {
    switch (orig) {
      case 'topleft':
        return vec2(-1, -1);
      case 'top':
        return vec2(0, -1);
      case 'topright':
        return vec2(1, -1);
      case 'left':
        return vec2(-1, 0);
      case 'center':
        return vec2(0, 0);
      case 'right':
        return vec2(1, 0);
      case 'botleft':
        return vec2(-1, 1);
      case 'bot':
        return vec2(0, 1);
      case 'botright':
        return vec2(1, 1);
      default:
        return orig;
    }
  }
  function gfxInit(gl, gconf) {
    const texFilter = (() => {
      switch (gconf.texFilter) {
        case 'linear':
          return gl.LINEAR;
        case 'nearest':
          return gl.NEAREST;
        default:
          return gl.NEAREST;
      }
    })();
    const gfx = (() => {
      const defProg = makeProgram(DEF_VERT, DEF_FRAG);
      const emptyTex = makeTex(
        new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)
      );
      const c = gconf.clearColor ?? rgba(0, 0, 0, 1);
      gl.clearColor(c.r, c.g, c.b, c.a);
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(
        gl.SRC_ALPHA,
        gl.ONE_MINUS_SRC_ALPHA,
        gl.ONE,
        gl.ONE_MINUS_SRC_ALPHA
      );
      const vbuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vbuf);
      gl.bufferData(gl.ARRAY_BUFFER, QUEUE_COUNT * 4, gl.DYNAMIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      const ibuf = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, QUEUE_COUNT * 2, gl.DYNAMIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      const bgTex = makeTex(
        new ImageData(
          new Uint8ClampedArray([
            128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128,
            128, 128, 255,
          ]),
          2,
          2
        )
      );
      return {
        drawCalls: 0,
        lastDrawCalls: 0,
        defProg,
        curProg: defProg,
        defTex: emptyTex,
        curTex: emptyTex,
        curUniform: {},
        vbuf,
        ibuf,
        vqueue: [],
        iqueue: [],
        transform: mat4(),
        transformStack: [],
        clearColor: c,
        bgTex,
      };
    })();
    frameStart();
    frameEnd();
    function powerOfTwo(n) {
      return (Math.log(n) / Math.log(2)) % 1 === 0;
    }
    __name(powerOfTwo, 'powerOfTwo');
    function makeTex(data) {
      const id = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, id);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texFilter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texFilter);
      const wrap = (() => {
        if (powerOfTwo(data.width) && powerOfTwo(data.height)) {
          return gl.REPEAT;
        }
        return gl.CLAMP_TO_EDGE;
      })();
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
      gl.bindTexture(gl.TEXTURE_2D, null);
      return {
        width: data.width,
        height: data.height,
        bind() {
          gl.bindTexture(gl.TEXTURE_2D, id);
        },
        unbind() {
          gl.bindTexture(gl.TEXTURE_2D, null);
        },
      };
    }
    __name(makeTex, 'makeTex');
    function makeProgram(vertSrc = DEF_VERT, fragSrc = DEF_FRAG) {
      let msg;
      const vcode = VERT_TEMPLATE.replace('{{user}}', vertSrc ?? DEF_VERT);
      const fcode = FRAG_TEMPLATE.replace('{{user}}', fragSrc ?? DEF_FRAG);
      const vertShader = gl.createShader(gl.VERTEX_SHADER);
      const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(vertShader, vcode);
      gl.shaderSource(fragShader, fcode);
      gl.compileShader(vertShader);
      gl.compileShader(fragShader);
      if ((msg = gl.getShaderInfoLog(vertShader))) {
        throw new Error(msg);
      }
      if ((msg = gl.getShaderInfoLog(fragShader))) {
        throw new Error(msg);
      }
      const id = gl.createProgram();
      gl.attachShader(id, vertShader);
      gl.attachShader(id, fragShader);
      gl.bindAttribLocation(id, 0, 'a_pos');
      gl.bindAttribLocation(id, 1, 'a_uv');
      gl.bindAttribLocation(id, 2, 'a_color');
      gl.linkProgram(id);
      if ((msg = gl.getProgramInfoLog(id))) {
        if (msg !== '\n') {
          throw new Error(msg);
        }
      }
      return {
        bind() {
          gl.useProgram(id);
        },
        unbind() {
          gl.useProgram(null);
        },
        bindAttribs() {
          gl.vertexAttribPointer(0, 3, gl.FLOAT, false, STRIDE * 4, 0);
          gl.enableVertexAttribArray(0);
          gl.vertexAttribPointer(1, 2, gl.FLOAT, false, STRIDE * 4, 12);
          gl.enableVertexAttribArray(1);
          gl.vertexAttribPointer(2, 4, gl.FLOAT, false, STRIDE * 4, 20);
          gl.enableVertexAttribArray(2);
        },
        send(uniform) {
          this.bind();
          for (const name in uniform) {
            const val = uniform[name];
            const loc = gl.getUniformLocation(id, name);
            if (typeof val === 'number') {
              gl.uniform1f(loc, val);
            } else if (isMat4(val)) {
              gl.uniformMatrix4fv(loc, false, new Float32Array(val.m));
            } else if (isColor(val)) {
              gl.uniform4f(loc, val.r, val.g, val.b, val.a);
            } else if (isVec3(val)) {
              gl.uniform3f(loc, val.x, val.y, val.z);
            } else if (isVec2(val)) {
              gl.uniform2f(loc, val.x, val.y);
            }
          }
          this.unbind();
        },
      };
    }
    __name(makeProgram, 'makeProgram');
    function makeFont(tex, gw, gh, chars) {
      const cols = tex.width / gw;
      const rows = tex.height / gh;
      const qw = 1 / cols;
      const qh = 1 / rows;
      const map2 = {};
      const charMap = chars.split('').entries();
      for (const [i, ch] of charMap) {
        map2[ch] = vec2((i % cols) * qw, Math.floor(i / cols) * qh);
      }
      return {
        tex,
        map: map2,
        qw,
        qh,
      };
    }
    __name(makeFont, 'makeFont');
    function drawRaw(
      verts,
      indices,
      tex = gfx.defTex,
      prog = gfx.defProg,
      uniform = {}
    ) {
      tex = tex ?? gfx.defTex;
      prog = prog ?? gfx.defProg;
      if (
        tex !== gfx.curTex ||
        prog !== gfx.curProg ||
        !deepEq(gfx.curUniform, uniform) ||
        gfx.vqueue.length + verts.length * STRIDE > QUEUE_COUNT ||
        gfx.iqueue.length + indices.length > QUEUE_COUNT
      ) {
        flush();
      }
      gfx.curTex = tex;
      gfx.curProg = prog;
      gfx.curUniform = uniform;
      const nIndices = indices.map(i => {
        return i + gfx.vqueue.length / STRIDE;
      });
      const nVerts = verts
        .map(v => {
          const pt = toNDC(gfx.transform.multVec2(v.pos.xy()));
          return [
            pt.x,
            pt.y,
            v.pos.z,
            v.uv.x,
            v.uv.y,
            v.color.r,
            v.color.g,
            v.color.b,
            v.color.a,
          ];
        })
        .flat();
      nIndices.forEach(i => gfx.iqueue.push(i));
      nVerts.forEach(v => gfx.vqueue.push(v));
    }
    __name(drawRaw, 'drawRaw');
    function flush() {
      if (
        !gfx.curTex ||
        !gfx.curProg ||
        gfx.vqueue.length === 0 ||
        gfx.iqueue.length === 0
      ) {
        return;
      }
      gfx.curProg.send(gfx.curUniform);
      gl.bindBuffer(gl.ARRAY_BUFFER, gfx.vbuf);
      gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(gfx.vqueue));
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gfx.ibuf);
      gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(gfx.iqueue));
      gfx.curProg.bind();
      gfx.curProg.bindAttribs();
      gfx.curTex.bind();
      gl.drawElements(gl.TRIANGLES, gfx.iqueue.length, gl.UNSIGNED_SHORT, 0);
      gfx.curTex.unbind();
      gfx.curProg.unbind();
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      gfx.iqueue = [];
      gfx.vqueue = [];
      gfx.drawCalls++;
    }
    __name(flush, 'flush');
    function frameStart() {
      gl.clear(gl.COLOR_BUFFER_BIT);
      if (!gconf.clearColor) {
        drawQuad({
          width: width(),
          height: height(),
          quad: quad(
            0,
            0,
            (width() * scale()) / BG_GRID_SIZE,
            (height() * scale()) / BG_GRID_SIZE
          ),
          tex: gfx.bgTex,
        });
      }
      gfx.drawCalls = 0;
      gfx.transformStack = [];
      gfx.transform = mat4();
    }
    __name(frameStart, 'frameStart');
    function frameEnd() {
      flush();
      gfx.lastDrawCalls = gfx.drawCalls;
    }
    __name(frameEnd, 'frameEnd');
    function drawCalls() {
      return gfx.lastDrawCalls;
    }
    __name(drawCalls, 'drawCalls');
    function toNDC(pt) {
      return vec2((pt.x / width()) * 2 - 1, (-pt.y / height()) * 2 + 1);
    }
    __name(toNDC, 'toNDC');
    function pushMatrix(m) {
      gfx.transform = m.clone();
    }
    __name(pushMatrix, 'pushMatrix');
    function pushTranslate(p) {
      if (!p || (p.x === 0 && p.y === 0)) {
        return;
      }
      gfx.transform = gfx.transform.translate(p);
    }
    __name(pushTranslate, 'pushTranslate');
    function pushScale(p) {
      if (!p || (p.x === 1 && p.y === 1)) {
        return;
      }
      gfx.transform = gfx.transform.scale(p);
    }
    __name(pushScale, 'pushScale');
    function pushRotateX(a) {
      if (!a) {
        return;
      }
      gfx.transform = gfx.transform.rotateX(a);
    }
    __name(pushRotateX, 'pushRotateX');
    function pushRotateY(a) {
      if (!a) {
        return;
      }
      gfx.transform = gfx.transform.rotateY(a);
    }
    __name(pushRotateY, 'pushRotateY');
    function pushRotateZ(a) {
      if (!a) {
        return;
      }
      gfx.transform = gfx.transform.rotateZ(a);
    }
    __name(pushRotateZ, 'pushRotateZ');
    function pushTransform() {
      gfx.transformStack.push(gfx.transform.clone());
    }
    __name(pushTransform, 'pushTransform');
    function popTransform() {
      if (gfx.transformStack.length > 0) {
        gfx.transform = gfx.transformStack.pop();
      }
    }
    __name(popTransform, 'popTransform');
    function drawQuad(conf = {}) {
      const w = conf.width || 0;
      const h = conf.height || 0;
      const pos = conf.pos || vec2(0, 0);
      const origin = originPt(conf.origin || DEF_ORIGIN);
      const offset = origin.scale(vec2(w, h).scale(-0.5));
      const scale2 = vec2(conf.scale ?? 1);
      const rot = conf.rot || 0;
      const q = conf.quad || quad(0, 0, 1, 1);
      const z = 1 - (conf.z ?? 0);
      const color = conf.color || rgba(1, 1, 1, 1);
      pushTransform();
      pushTranslate(pos);
      pushRotateZ(rot);
      pushScale(scale2);
      pushTranslate(offset);
      drawRaw(
        [
          {
            pos: vec3(-w / 2, h / 2, z),
            uv: vec2(
              conf.flipX ? q.x + q.w : q.x,
              conf.flipY ? q.y : q.y + q.h
            ),
            color,
          },
          {
            pos: vec3(-w / 2, -h / 2, z),
            uv: vec2(
              conf.flipX ? q.x + q.w : q.x,
              conf.flipY ? q.y + q.h : q.y
            ),
            color,
          },
          {
            pos: vec3(w / 2, -h / 2, z),
            uv: vec2(
              conf.flipX ? q.x : q.x + q.w,
              conf.flipY ? q.y + q.h : q.y
            ),
            color,
          },
          {
            pos: vec3(w / 2, h / 2, z),
            uv: vec2(
              conf.flipX ? q.x : q.x + q.w,
              conf.flipY ? q.y : q.y + q.h
            ),
            color,
          },
        ],
        [0, 1, 3, 1, 2, 3],
        conf.tex,
        conf.prog,
        conf.uniform
      );
      popTransform();
    }
    __name(drawQuad, 'drawQuad');
    function drawTexture(tex, conf = {}) {
      const q = conf.quad ?? quad(0, 0, 1, 1);
      const w = tex.width * q.w;
      const h = tex.height * q.h;
      const scale2 = vec2(1);
      if (conf.tiled) {
        const repX = Math.ceil((conf.width || w) / w);
        const repY = Math.ceil((conf.height || h) / h);
        const origin = originPt(conf.origin || DEF_ORIGIN)
          .add(vec2(1, 1))
          .scale(0.5);
        const offset = origin.scale(repX * w, repY * h);
        for (let i = 0; i < repX; i++) {
          for (let j = 0; j < repY; j++) {
            drawQuad({
              ...conf,
              pos: (conf.pos || vec2(0)).add(vec2(w * i, h * j)).sub(offset),
              scale: scale2.scale(conf.scale || vec2(1)),
              tex,
              quad: q,
              width: w,
              height: h,
              origin: 'topleft',
            });
          }
        }
      } else {
        if (conf.width && conf.height) {
          scale2.x = conf.width / w;
          scale2.y = conf.height / h;
        } else if (conf.width) {
          scale2.x = conf.width / w;
          scale2.y = scale2.x;
        } else if (conf.height) {
          scale2.y = conf.height / h;
          scale2.x = scale2.y;
        }
        drawQuad({
          ...conf,
          scale: scale2.scale(conf.scale || vec2(1)),
          tex,
          quad: q,
          width: w,
          height: h,
        });
      }
    }
    __name(drawTexture, 'drawTexture');
    function drawRect(pos, w, h, conf = {}) {
      drawQuad({
        ...conf,
        pos,
        width: w,
        height: h,
      });
    }
    __name(drawRect, 'drawRect');
    function drawRectStroke(pos, w, h, conf = {}) {
      const offset = originPt(conf.origin || DEF_ORIGIN)
        .scale(vec2(w, h))
        .scale(0.5);
      const p1 = pos.add(vec2(-w / 2, -h / 2)).sub(offset);
      const p2 = pos.add(vec2(-w / 2, h / 2)).sub(offset);
      const p3 = pos.add(vec2(w / 2, h / 2)).sub(offset);
      const p4 = pos.add(vec2(w / 2, -h / 2)).sub(offset);
      drawLine(p1, p2, conf);
      drawLine(p2, p3, conf);
      drawLine(p3, p4, conf);
      drawLine(p4, p1, conf);
    }
    __name(drawRectStroke, 'drawRectStroke');
    function drawLine(p1, p2, conf = {}) {
      const w = conf.width || 1;
      const h = p1.dist(p2);
      const rot = Math.PI / 2 - p1.angle(p2);
      drawQuad({
        ...conf,
        pos: p1.add(p2).scale(0.5),
        width: w,
        height: h,
        rot,
        origin: 'center',
      });
    }
    __name(drawLine, 'drawLine');
    function drawTri(p1, p2, p3, conf = {}) {
      const { z } = conf;
      const color = conf.color || rgb(1, 1, 1);
      drawRaw(
        [
          {
            pos: vec3(p1.x, p1.y, z),
            uv: vec2(0, 0),
            color,
          },
          {
            pos: vec3(p2.x, p2.y, z),
            uv: vec2(0, 0),
            color,
          },
          {
            pos: vec3(p3.x, p3.y, z),
            uv: vec2(0, 0),
            color,
          },
        ],
        [0, 1, 2],
        gfx.defTex,
        conf.prog,
        conf.uniform
      );
    }
    __name(drawTri, 'drawTri');
    function fmtText(text, font, conf = {}) {
      const chars = `${text}`.split('');
      const gw = font.qw * font.tex.width;
      const gh = font.qh * font.tex.height;
      const size = conf.size || gh;
      const scale2 = vec2(size / gh).scale(vec2(conf.scale || 1));
      const cw = scale2.x * gw;
      const ch = scale2.y * gh;
      let curX = 0;
      let th = ch;
      let tw = 0;
      const flines = [];
      let curLine = [];
      let lastSpace = null;
      let cursor = 0;
      while (cursor < chars.length) {
        let char = chars[cursor];
        if (char === '\n') {
          th += ch;
          curX = 0;
          lastSpace = null;
          flines.push(curLine);
          curLine = [];
        } else if (conf.width ? curX + cw > conf.width : false) {
          th += ch;
          curX = 0;
          if (lastSpace != null) {
            cursor -= curLine.length - lastSpace;
            char = chars[cursor];
            curLine = curLine.slice(0, lastSpace);
          }
          lastSpace = null;
          flines.push(curLine);
          curLine = [];
        }
        if (char !== '\n') {
          curLine.push(char);
          curX += cw;
          if (char === ' ') {
            lastSpace = curLine.length;
          }
        }
        tw = Math.max(tw, curX);
        cursor++;
      }
      flines.push(curLine);
      if (conf.width) {
        tw = conf.width;
      }
      const fchars = [];
      const pos = vec2(conf.pos || 0);
      const offset = originPt(conf.origin || DEF_ORIGIN).scale(0.5);
      const ox = -offset.x * cw - (offset.x + 0.5) * (tw - cw);
      const oy = -offset.y * ch - (offset.y + 0.5) * (th - ch);
      flines.forEach((line, ln) => {
        const oxl = (tw - line.length * cw) * (offset.x + 0.5);
        line.forEach((char, cn) => {
          const qpos = font.map[char];
          const x = cn * cw;
          const y = ln * ch;
          if (qpos) {
            fchars.push({
              tex: font.tex,
              quad: quad(qpos.x, qpos.y, font.qw, font.qh),
              ch: char,
              pos: vec2(pos.x + x + ox + oxl, pos.y + y + oy),
              color: conf.color,
              origin: conf.origin,
              scale: scale2,
              z: conf.z,
            });
          }
        });
      });
      return {
        width: tw,
        height: th,
        chars: fchars,
      };
    }
    __name(fmtText, 'fmtText');
    function drawText(txt, font, conf = {}) {
      drawFmtText(fmtText(txt, font, conf));
    }
    __name(drawText, 'drawText');
    function drawFmtText(ftext) {
      for (const ch of ftext.chars) {
        drawQuad({
          tex: ch.tex,
          width: ch.tex.width * ch.quad.w,
          height: ch.tex.height * ch.quad.h,
          pos: ch.pos,
          scale: ch.scale,
          color: ch.color,
          quad: ch.quad,
          origin: 'center',
          z: ch.z,
        });
      }
    }
    __name(drawFmtText, 'drawFmtText');
    function width() {
      return gl.drawingBufferWidth / scale();
    }
    __name(width, 'width');
    function height() {
      return gl.drawingBufferHeight / scale();
    }
    __name(height, 'height');
    function scale() {
      return gconf.scale ?? 1;
    }
    __name(scale, 'scale');
    function clearColor() {
      return gfx.clearColor.clone();
    }
    __name(clearColor, 'clearColor');
    return {
      width,
      height,
      scale,
      makeTex,
      makeProgram,
      makeFont,
      drawTexture,
      drawText,
      drawFmtText,
      drawRect,
      drawRectStroke,
      drawLine,
      drawTri,
      fmtText,
      frameStart,
      frameEnd,
      pushTransform,
      popTransform,
      pushMatrix,
      drawCalls,
      clearColor,
    };
  }
  let DEF_ORIGIN;
  let STRIDE;
  let QUEUE_COUNT;
  let BG_GRID_SIZE;
  let VERT_TEMPLATE;
  let FRAG_TEMPLATE;
  let DEF_VERT;
  let DEF_FRAG;
  const init_gfx = __esm({
    'src/gfx.ts': function () {
      init_math();
      init_utils();
      DEF_ORIGIN = 'topleft';
      STRIDE = 9;
      QUEUE_COUNT = 65536;
      BG_GRID_SIZE = 64;
      VERT_TEMPLATE = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
      FRAG_TEMPLATE = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
      DEF_VERT = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
      DEF_FRAG = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
      __name(originPt, 'originPt');
      __name(gfxInit, 'gfxInit');
    },
  });

  // src/app.ts
  function processBtnState(s) {
    if (s === 'pressed' || s === 'rpressed') {
      return 'down';
    }
    if (s === 'released') {
      return 'up';
    }
    return s;
  }
  function appInit(gconf = {}) {
    const app = {
      canvas:
        gconf.canvas ??
        (() => {
          const canvas = document.createElement('canvas');
          (gconf.root ?? document.body).appendChild(canvas);
          return canvas;
        })(),
      keyStates: {},
      charInputted: [],
      mouseMoved: false,
      mouseState: 'up',
      mousePos: vec2(0, 0),
      time: 0,
      realTime: 0,
      skipTime: false,
      dt: 0,
      scale: gconf.scale ?? 1,
      isTouch: false,
      loopID: null,
      stopped: false,
      fps: 0,
      fpsBuf: [],
      fpsTimer: 0,
    };
    const keyMap = {
      ArrowLeft: 'left',
      ArrowRight: 'right',
      ArrowUp: 'up',
      ArrowDown: 'down',
      ' ': 'space',
    };
    const preventDefaultKeys = [
      'space',
      'left',
      'right',
      'up',
      'down',
      'tab',
      'f1',
      'f2',
      'f3',
      'f4',
      'f5',
      'f6',
      'f7',
      'f8',
      'f9',
      'f10',
      'f11',
    ];
    if (gconf.fullscreen) {
      app.canvas.width = window.innerWidth;
      app.canvas.height = window.innerHeight;
    } else {
      app.canvas.width = (gconf.width || 640) * app.scale;
      app.canvas.height = (gconf.height || 480) * app.scale;
    }
    const styles = ['outline: none', 'cursor: default'];
    if (gconf.crisp) {
      styles.push('image-rendering: pixelated');
      styles.push('image-rendering: crisp-edges');
    }
    app.canvas.style = styles.join(';');
    app.canvas.setAttribute('tabindex', '0');
    const gl = app.canvas.getContext('webgl', {
      antialias: true,
      depth: true,
      stencil: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    app.isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
    app.canvas.addEventListener('mousemove', e => {
      app.mousePos = vec2(e.offsetX, e.offsetY).scale(1 / app.scale);
      app.mouseMoved = true;
    });
    app.canvas.addEventListener('mousedown', () => {
      app.mouseState = 'pressed';
    });
    app.canvas.addEventListener('mouseup', () => {
      app.mouseState = 'released';
    });
    app.canvas.addEventListener('touchstart', e => {
      if (!gconf.touchToMouse) return;
      e.preventDefault();
      const t = e.touches[0];
      app.mousePos = vec2(t.clientX, t.clientY).scale(1 / app.scale);
      app.mouseState = 'pressed';
    });
    app.canvas.addEventListener('touchmove', e => {
      if (!gconf.touchToMouse) return;
      e.preventDefault();
      const t = e.touches[0];
      app.mousePos = vec2(t.clientX, t.clientY).scale(1 / app.scale);
      app.mouseMoved = true;
    });
    app.canvas.addEventListener('touchend', e => {
      if (!gconf.touchToMouse) return;
      app.mouseState = 'released';
    });
    app.canvas.addEventListener('touchcancel', e => {
      if (!gconf.touchToMouse) return;
      app.mouseState = 'released';
    });
    app.canvas.addEventListener('keydown', e => {
      const k = keyMap[e.key] || e.key.toLowerCase();
      if (preventDefaultKeys.includes(k)) {
        e.preventDefault();
      }
      if (k.length === 1) {
        app.charInputted.push(k);
      }
      if (k === 'space') {
        app.charInputted.push(' ');
      }
      if (e.repeat) {
        app.keyStates[k] = 'rpressed';
      } else {
        app.keyStates[k] = 'pressed';
      }
    });
    app.canvas.addEventListener('keyup', e => {
      const k = keyMap[e.key] || e.key.toLowerCase();
      app.keyStates[k] = 'released';
    });
    app.canvas.focus();
    document.addEventListener('visibilitychange', () => {
      switch (document.visibilityState) {
        case 'visible':
          app.skipTime = true;
          break;
        case 'hidden':
          break;
      }
    });
    function mousePos() {
      return app.mousePos.clone();
    }
    __name(mousePos, 'mousePos');
    function mouseClicked() {
      return app.mouseState === 'pressed';
    }
    __name(mouseClicked, 'mouseClicked');
    function mouseDown() {
      return app.mouseState === 'pressed' || app.mouseState === 'down';
    }
    __name(mouseDown, 'mouseDown');
    function mouseReleased() {
      return app.mouseState === 'released';
    }
    __name(mouseReleased, 'mouseReleased');
    function mouseMoved() {
      return app.mouseMoved;
    }
    __name(mouseMoved, 'mouseMoved');
    function keyPressed(k) {
      return app.keyStates[k] === 'pressed';
    }
    __name(keyPressed, 'keyPressed');
    function keyPressedRep(k) {
      return app.keyStates[k] === 'pressed' || app.keyStates[k] === 'rpressed';
    }
    __name(keyPressedRep, 'keyPressedRep');
    function keyDown(k) {
      return (
        app.keyStates[k] === 'pressed' ||
        app.keyStates[k] === 'rpressed' ||
        app.keyStates[k] === 'down'
      );
    }
    __name(keyDown, 'keyDown');
    function keyReleased(k) {
      return app.keyStates[k] === 'released';
    }
    __name(keyReleased, 'keyReleased');
    function charInputted() {
      return [...app.charInputted];
    }
    __name(charInputted, 'charInputted');
    function dt() {
      return app.dt;
    }
    __name(dt, 'dt');
    function time() {
      return app.time;
    }
    __name(time, 'time');
    function fps() {
      return app.fps;
    }
    __name(fps, 'fps');
    function screenshot() {
      return app.canvas.toDataURL();
    }
    __name(screenshot, 'screenshot');
    function cursor(c) {
      if (c) {
        app.canvas.style.cursor = c ?? 'default';
      }
      return app.canvas.style.cursor;
    }
    __name(cursor, 'cursor');
    function run(f) {
      const frame = /* @__PURE__ */ __name(t => {
        const realTime = t / 1e3;
        const realDt = realTime - app.realTime;
        app.realTime = realTime;
        if (!app.skipTime) {
          app.dt = realDt;
          app.time += app.dt;
          app.fpsBuf.push(1 / app.dt);
          app.fpsTimer += app.dt;
          if (app.fpsTimer >= 1) {
            app.fpsTimer = 0;
            app.fps = Math.round(
              app.fpsBuf.reduce((a, b) => a + b) / app.fpsBuf.length
            );
            app.fpsBuf = [];
          }
        }
        app.skipTime = false;
        f();
        for (const k in app.keyStates) {
          app.keyStates[k] = processBtnState(app.keyStates[k]);
        }
        app.mouseState = processBtnState(app.mouseState);
        app.charInputted = [];
        app.mouseMoved = false;
        if (!app.stopped) {
          app.loopID = requestAnimationFrame(frame);
        }
      }, 'frame');
      app.loopID = requestAnimationFrame(frame);
    }
    __name(run, 'run');
    function quit() {
      cancelAnimationFrame(app.loopID);
      app.stopped = true;
    }
    __name(quit, 'quit');
    return {
      gl,
      mousePos,
      keyDown,
      keyPressed,
      keyPressedRep,
      keyReleased,
      mouseDown,
      mouseClicked,
      mouseReleased,
      mouseMoved,
      charInputted,
      cursor,
      dt,
      time,
      fps,
      screenshot,
      run,
      quit,
      focused: () => document.activeElement === app.canvas,
      focus: () => app.canvas.focus(),
      canvas: () => app.canvas,
      isTouch: () => app.isTouch,
    };
  }
  const init_app = __esm({
    'src/app.ts': function () {
      init_math();
      __name(processBtnState, 'processBtnState');
      __name(appInit, 'appInit');
    },
  });

  // src/assets/burp.mp3
  let burp_default;
  const init_burp = __esm({
    'src/assets/burp.mp3': function () {
      burp_default = __toBinary(
        'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwPj4+Pj4+TExMTExZWVlZWVlnZ2dnZ3V1dXV1dYODg4ODkZGRkZGRn5+fn5+frKysrKy6urq6urrIyMjIyNbW1tbW1uTk5OTk8vLy8vLy//////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAQKAAAAAAAAHjOZTf9/AAAAAAAAAAAAAAAAAAAAAP/7kGQAAANUMEoFPeACNQV40KEYABEY41g5vAAA9RjpZxRwAImU+W8eshaFpAQgALAAYALATx/nYDYCMJ0HITQYYA7AH4c7MoGsnCMU5pnW+OQnBcDrQ9Xx7w37/D+PimYavV8elKUpT5fqx5VjV6vZ38eJR48eRKa9KUp7v396UgPHkQwMAAAAAA//8MAOp39CECAAhlIEEIIECBAgTT1oj///tEQYT0wgEIYxgDC09aIiE7u7u7uIiIz+LtoIQGE/+XAGYLjpTAIOGYYy0ZACgDgSNFxC7YYiINocwERjAEDhIy0mRoGwAE7lOTBsGhj1qrXNCU9GrgwSPr80jj0dIpT9DRUNHKJbRxiWSiifVHuD2b0EbjLkOUzSXztP3uE1JpHzV6NPq+f3P5T0/f/lNH7lWTavQ5Xz1yLVe653///qf93B7f/vMdaKJAAJAMAIwIMAHMpzDkoYwD8CR717zVb8/p54P3MikXGCEWhQOEAOAdP6v8b8oNL/EzdnROC8Zo+z+71O8VVAGIKFEglKbidkoLam0mAFiwo0ZoVExf/7kmQLgAQyZFxvPWAENcVKXeK0ABAk2WFMaSNIzBMptBYfArbkZgpWjEQpcmjxQoG2qREWQcvpzuuIm29THt3ElhDNlrXV///XTGbm7Kbx0ymcRX///x7GVvquf5vk/dPs0Wi5Td1vggDxqbNII4bAPTU3Ix5h9FJTe7zv1LHG/uPsPrvth0ejchVzVT3giirs6sQAACgQAAIAdaXbRAYra/2t0//3HwqLKIlBOJhOg4BzAOkt+MOL6H8nlNvKyi3rOnqP//zf6AATwBAKIcHKixxwjl1TjDVIrvTqdmKQOFQBUBDwZ1EhHlDEGEVyGQWBAHrcJgRSXYbkvHK/8/6rbYjs4Qj0C8mRy2hwRv/82opGT55fROgRoBTjanaiQiMRHUu1/P3V9yGFffaVv78U1/6l/kpo0cz73vuSv/9GeaqDVRA5bWdHRKQKIEAAAAoIktKeEmdQFKN5sguv/ZSC0oxCAR7CzcJgEsd8cA0M/x0tzv15E7//5L5KCqoIAAmBFIKM1UxYtMMFjLKESTE8lhaelUyCBYeA2IN4rK1iDt//+5JkEgAkZzlVq29D8DJDWo0YLLARwPFZrL0PyLsUazTAlpI+hKSx01VSOfbjXg0iW9/jVPDleLJ15QQA4Okdc5ByMDFIeuCCE5CvevwBGH8YibiX9FtaIIgUikF42wrZw6ZJ6WlHrA+Ki5++NNMeYH1lEkwwJAIJB4ugVFguXFc20Vd/FLlvq1GSiSwAFABABABA47k6BFeNvxEQZO9v3L1IE4iEVElfrXmEmlyWIyGslFA55gH/sW7////o9AAFIBIIAAIUMzYTTNkgsAmYObfwQyzplrOmYvq0BKCKNN+nUTbvD7cJzvHxrEWG5QqvP8U1vFx6CwE8NoRc2ADBeEb/HoXh60N7ST8nw9QiiGoYvf/r6GtC9+vLwXHjaSkIp3iupC5+Nii81Zhu85pNYbFvrf+UFThDOYYY26off+W6b//73GTiN9xDfl0AAwBAiMBO8qsDBPOZtuT/dTbjVVbY/KSGH6ppHwKv/6X+s8gUCN/lODzv////GQAGAMQAADlXAUCBJiY0wFQZusYQOaQzaTwDBTcx0IvVp8m7uxKp//uSZBMCBHRI1eNPLHAyxNqWGeoYUIEnWYyxD8DUFSn0l6iojcd+oEOkzV6uWqyHNzjqmv+7V5xGUfY9yEmbziTzjRscm9OqFQp1PKFrqu3PX/7YuGtDU6bt0OUTpv38rdc+37dVDQLKUchaJ853E9edNDGqWwsYz1VoiSStEJtZvw6+sNqFWqaIXJjQCGAAGWAYVwmag/x3BRJw1wYF7IzVqDcNzn85d//FzK7IgwbQwccLoB4AsF8Nj/1ESRUAAVJwAFh0YOFEhmSJEHKQRDyhszgLUpHIgFrb5cySFg5jv10ImlYuvaaGBItfXqnNPmic+XNkmb5fW49vdhq97nQMQyGIlM2v8oQSrxKSxE4F1WqrduqvuJCRof1R7Gsre9KszUVF1/t3PzH2tnp+iSUG3rDwGNcDzxCGA8atuQF0paZAAkAhAQAEAC240yJV+nJgUrqq8axAYtVpYjZyFGb13/17jwiClQDaCdytZpyHHf1R/EG/+lUAgAAAChhmJvioVGGBCFgqdpsGAkUUrbTstwTCJgLQpFIsELW7t/68Iv/7kmQUgAQ9NFO9aeAAPAU6RKwUABClY2e5hoARGpDvPydCAsY8WO10fSvUOnfT98+n/l/6/+hxslhQ1DEOaevNKGocvIYba8WJpaP/15pX0NQ1DUNn/////k6lPp/N61rBi8RJFfERV3IgrqDsJA64sjCoKxDDQ9xEcWDpMBDwVFDIAEIAAzryxsjGi4q/oWpixKjhklAF4pUrDPjFhFVupDFZ/t/t0YPAygUBhADPR/KLCKJ8h2Oxhpxz/zNRAAFl0MAZLAYEAiVbEiz36LSgZ5QoQVat69KNy8FyM5Z80ACHAzgnISEkxUSJIDyBSwi5KF4mjBl4xJdbrG9ComLrL8YATiodhQKCkj6ROdyg1y5XmZlvMVmpJzYppJDwLi/Lp9vT3TfmimOGpuezi2U/9FNav0zX9Oja2r//8+hvuihuQAAMAVmqFgAgCcuboAEAAAUcqy8ca0BHBmwbFkED0CNA1YYDPkhcQrRJxcY3BzfxxltAz9vX62Xl3plAzWmRO+FkZyH///1qAAEjQBAACUpgU5o2AIBmFBGMamrGg0b/+5JkC4ADxyLWb2ngAEEkGofsoACP7U1JLaxTkOqFaKhspGgnW3SGC56ZgUJGCRnLOmIJAkuNBgvwU4Ocf8CJK9UsafH9/Frj///365XSoME+DZMw5UNjrMbVoeIj9EL91IuQ5KHyl5V2LCpdIdESgafOHxVGkAlkHuakmix/gN8+BP/sKguLAAoAtUjtvaoeEADwr3OK11E4KBlojgeQNQBJ4MvCAd/4t/xMMzeLhQGQ1//6tQu5BaBOGCT6U4aafvXZ//4iAPAAAAbLkgIlQmMSLA2H1CVNAlWwyVvKIQIxOSK1NWxs4MBUATlKrAkIMPAjCAdS6MVFzuURWa/+/qQWEGsA6EEpiBEJb9Q21lAHoBoD0B6aAPhyt+bG3muoXIN3RLadXxUfr/ohjGFF/p97eqNI5noKAqYLNPpUTDSI9/TmA6B+YAAADgA0Y4lxTW1SQfOQuDDDI0KTTuIrF5qoJrUFhUFAsg+AT2hbkaRZYGIjBKVDIa5VgNN/9P/rCDsBJbYJRKpCA1ArAkigIeYY61AjE+jubyiZFZ3+L789//uSZBCABHVj2entNmw1JXokLycYEFTFVa0wz4DYjKs08J2Q+r4n3lgbWaaMwMLEjFW88F39brqPF83cv1mCSJeY3Q2uiQxhBJxCBeR1D2LQRsYQcZUTzdNll8+OwZBsIwSgl45ymaHX603Mz7JmZuvt71GDTN66zev/+cLn/b5imV8pAHkg61FIJchBSG+zycgAZgADD6F1iQQRXRWmWS6bDIIgyBCZEcdl/KgXGmVKFv/vl8ry/5bLypf//U5jhYDhL9X/pAA0AKBIAAKgGtGXGGWJgEoF2JNsHlKfSKLRhGBAgIuWZKIJCFpF1VBhkB+EfzEyMUJdWuMrEZoPZ5BfF3/Nu62riIdjoO4AAKD2sTrDmpZZaYysf/810TitAVvn9xtFucieiaEy54YqiIO6RqkGAm5wVO0bFB0sDTdNxYGekKktR4KAAfAwUIgI8Ci6aXgtwbhPWAC+CKExAFydNtYGXNZoQjUsXv/9vKjgmdwieb+h7kHvPoc//0FaCACAATKFC4Y9ammklidbaiJNPBhGWTNhFSgdtalK12lpl//7kmQRAFN2NFI7TBvwNKNaTRsFGBWdfV2tPNcYvBHpgPKJsc8IUcTCxY3HSvUVNTWe/Z3YWlrJ0yrNRUiT19aprA7E+mPP+ZmC3/CsheOJXhc/9VJb3UZnphUBcqZUZQth1i3XqtPYu2Sy1s8DV9ZYACAAASAAHgFkQcOqgB5utFHFh3kSi4USs0yk4iOClREmjvdG+upaiLcRA6/9QGbOfxF/8sEAQAVG0G07YFMihKR4EXJCkRdX9isueLqUMRAQdhDZmv3KeR0nPqRVrZmSIXDt+BBSR7qqbKQcB98W9qiMb55preHIStxFWPE4lAyI+BKz2iSxonpvMR5DgKxTH6vGGXAbYCaAnJUW4W07EesQqbfqdbo4qNnPxSpn1H8eahszc/y9//dn1V7D/OYpn1szQKAPXTMlO/rO//u7JriJXbld7aP33v6RXYg/COIDzTWkTspg6Ay1YaDSwKxrP/LfIikHjmO871POf/kEAseAgoPEi9/0ZziNwfxVKy9qAEGEEAAq1EcOamDEGHAA0iao8k31rz2MiLNEik6VQ37/+5JkEAgEYU5WU0M3MDjDe0o9IjiOzSVM7aCzEM2GqXD8pFB0zxMcHCQNHtZD+R+pMWZxOJ/otEZTvVN/MeU12xTVcL+f2YaiNJTVoPd6SvzEnKel5GXOzEaazgdChnP2jOAwpfyRpVlQwoJBwpN1L1DL////6TVWcoepf7CVWrpEWiym5lR5U0BSMlxQC4qByOyQIAEuJfIriWixDqRgMfVZWuvRowjR9BzP5lZlT/+YG50CsSBG////////liXDQVMxEaBkbzKAAACnDIAstY7iK7gGSF7SIDexaTtPOHABk9YcmJEACmo50pgWal22etroBpYoVqtU6OPqvlf0c4QCAfLk9P/FJs4KCQMf6ECZyA6BwqqyJ0rMYj56k1/UlTIx1V3Rt5NF71D4qlptDC8VMgQVHFDlQnDFi06qQgKQAAIK4TxxJGFGYJuZNGXRdpq7IW/DYpPIQRFJLAc+qn1E0XYdOkQVJT+z8Lvff//8vbKAWTIBBUUdM6cOhlDry7x4dAkJXIBhbO3HSMMMGBQ9K9/JNfu09PjTO64wYEcR//uSZBeABP5g11NPRVwzQ4r8PMJVj7j9UU2wUwDPjeq0Z5w675D9+uDdL2QsuIry2lZtwn/pJYyRRjANEOQxNWw8mU7Tq+vueV7JrX/Pg7VIkEuZT5dwd85MVoq5lpStNICkBAcFR88//58KO8Zjt2PIGxWl1cVfXeNGH18SReNT//hYliWtQuNluxyxONbm4U+lpkAgpyE7yAIYUjIaqHmARJ0GQTtmH60xdwFp/u253XBCxD0f/lBcguCALn//Y5nqEv//1h4BAAwgAA5gcHmpIplgeW9fAOM6RFZUywrsGAiRmKkanQnCFBjYoPDS7bjwtPTkVI8D/P8VVLcTUz65n7PW2s3tNYHgEul4tBaIz0A9RgJAyAMI4/i0fpQKjhX9S+qIa0vmc4CZit/0/3UTDGeKNpkk0nu2rUE2ag8WErhE/kgAiQCJKQEYBA5Wn6CxHoIUh6dQ46nLIuwFk4S/LaDQxXu7Yf/pf//lwJB0S/Ff/4C///EiBEiAAAIAMnpngiIABAdMpKigkXaUwhLEGvpiofmXW57h2XAZO3CMRv/7kmQUAEOHQlHraRTQMkQp6GWFZBTVU1lNPTPYyIyocYeUoNgLBWAs1jPkTv/tXBaeZ/tbD/nAGP8/xT0SNEi5zof0KIVEzVe9r5lZOol7kyaXMYS4J/ZS3djp//UaeVyR0mUMlTgfz8XqMzIEgAQQ6UNQ1DSE0/C16OvyaocF4ijAGFci0FSYqCUSaWs6t9F6/699DKvMgMoK1//kSbvxtyBN27I7mdXgNMAW75sRU1UwUHYG5axI2tFIFpkgx7nnK+1JmRKjqeAd5Ph0QAL4QAnirmiPlg0yBDlrb/d3ngtA65rb999+8vdDCfnJuJAYIl285zklpVbrKpk1PEzrOY9NZUgyz6OiOsKt5qG/g2ibxSZ+/eTI/NB8n4ev//n2nIw85GAdwuJL7kYnnAbpcf1RBKH6b2U4RWP8dmWH5snsAFYwADBgAopKdzFJq4Jlmotloh/m4QpTSvJRE3nYZHephoqBhVf+P7vQ9BPlwZCP+3//+hdy5uUwS3LDEgQx4cdIgvDEBR1YqymCsSbKzRy2aQmSv+AAcAgAkvzPfuX/+5JkFQAj6VFX00Zr5DllOhhgpn4MmSs+zSRRiO8U5tWklYgSLKfs+Xheb/+6WaAQCKTztNeJ382MUltZNnjSJoFrCqB6C4mFcwJpJD4Oc8dLDXMTh9k1/rmTopfzqv9AvHWfOuZJlEvHSVMjyjpkVucKSzxJVQBgAAIo8DGqRdYCXPckFYg+dH9A/qUyljrtpxH9RJX/Z3Vv6uFkPg4M2jf3CL09QrwOrMt69n//8UFEAAMHWdhg1CcjyVBwiArOYlDL5NPY6x8ZLFBCGi6SVTKX5nqdSEFjebnv2zHdt0dj6xvORsSFzwqRNTJSZIrrlpXcURNL9WW7krBgr5jPMaGcvJ5v0N1s19CV7+7fvQfjySX2QECWUgKgeJCIif4WRBZ/6archpDkzE7oWctK3zEHP9Smeai8oeHkM6AK7pGjtOgeFv40ugqNd+Iv///uAZAMgAAAUeSWhLPpdwk3iXpBw43hOVIp1gliUOSaeZcZeZhLAH9TtD56wUpBduzLF5v5qViTH6o+I0+8Z1asaLgKVAohlpB72DgAQBQxEd3g//uSZCiAA6k0UdMPQfA+xcnBYON8E3WDVU0w1ZjPDSmo8IniHAFDNnkXF3B94gicH5d8MFw+IHZwufxOf/8gsHw+XrD4Jn8T4RAyQiABNBQg/3giEWuZ42mVFB3kkXNjhqBg1CghEUbN3/7/KBhyqNueef/MIDBClP3YRnKLiIlEFzf//0g+4zKpRIKTpqQgUtnHGFw6RSLN421iGcYapqFxny/capK9r9v+2BSy/RU1yZxa2eGaWK07ijfcxeiO3iuHJvjbXzts+Ny+XyFnsne1h0qG4mAaN6xRGaLVxKPlrri0Bg9oXGyxcw8JRBPkUzC8v451vVd9liSX85JMrmkVNwxOCwUg298////7ks//L409/hwMRIozKiIckXtjzDaAMTBcAACAwLGargPSEgEJZN/EFjfF/VKgaMYKMbwtf/T0UCGGfjfOAZ2frCigYdwh/+sGlQBxhCAAAUHkDPqOdmmUdAVYl3IhrEfR8qZFjLYEPOyzVGvm6lNUJCk2PNazwFxaijk+ZEaiTehoJGuDh6zN/EVP8BCLD/88BoY7Xv/7kmQlgBNmMtNTL0FwOGZJ/WHiKAyhJU+soE3A3JnmAa2oaCIru/+RrEHMTphxQ0X/LzoVy4gKhYl6ZUlklW7CLRVoYmgABwCRMAAMA/poCiEEYLsBVodWcVZ18+CcAfH165U4Xgh7/X1/BAQF6GN/BwQ/+D9S9P6wII//CoANYFYCBAKlGQDKhVjjylKARw2mPAtp8JjcQHggQswVsOEKsF6AIBWvmpIFdSZvRVv/LHWEy0+txMxu+VK9gEqG5pWf6GNGU4UBVkfd+bsj/6lZE0fkOpAqAOvyUO9oo+IiEtcLKOGzhhSGa4MYINHWoQsFr8zzmow0tRILkqz5/+vFxl/oZX/+qGW//xiLjR3xcGn//0QLkTQJh1UA8MAQAEXC/YxODKTDUEhrASs1512GRp+dRFFdTWIRaOXrve1eNjTNpreqQYrC9NBlQc1f8YO2po8bnH6qffuRvU7taiNF3baokE0YpmjRCHRclWBb9NCHKHpERwHRG3pqgXklq4sBpLjGvmekg8Y7SjM1FZopIM8IhB6dtMr8aKsdovh4FW//+5JkQ4CjTDdSU0gtIDiE+YBrKgwNbSVJTCBPwN8N5ZW8NKDnhRB8AXCm//KAsBUCwKU//oJQnET+UP3/zpYRocAAABJkVzzIuoLGEaDoxfsNva12EUdxhJMGFQioSg8GxKsLm8kWEmExJuNidarkk+OTXc0i2OZEq2v+tZr/MDZRS0I7LfRpHdlsiF6m/mEjk+XlK10UqtKYUwNgMx24hUtCJLfpM3ExUeKDYjClgZAzAjQ0qlNQBTsGpk9zSRkCiKkRGp572VXsPYChGvxhAuYkDYZK//jSRgto2mTf6+PJqgAAgIAAAACYZE6aZOHhYkYlcbpeYQq1RgLO4U8TIlL1sGw+iKZi5Kzc/bKT0yXrIUMES89RCWy8oWlxqIQlKANLFpT/KjUrK+UCYbZqGnjVj29aO5dzofWAskRX5eJWPi4kf/aRVjy3Wlyg2AnMYIDSTLwZUTASIzflPWUwwlUnIFMnGiyABeaXJcN91PmQJCLzmvUJkFOHCrX/+6O///IHnT4tT9YYBoNMQ09GfKIErwdwChNz1Qy5+5S/wWeY//uSZF+C03UyT2tMO0A3RRkhY20KzQjDMszhA8DjlGOBp5y4ZCS3ica52GIGiryv7FAaSDVZSXKFTiir+GvGiuK4rjgwPVTddso+W/42a4ueJJHDYtfj6YoKknnjzRgKA0fBIRZOSsprJqnoNN73ps/Z9DVgbKNbMGmRzrYBMAZCPUANkAZQ0syAC2ubK1NF90+WoesBpnhY8qwVDkNb/5Uof6//418TgElCSgAIgyAAQBHEmiaQFPIRmfAMELffpo0IflyEuAAQnSnKvwTlVlnIgOAAGS3P3IydjXPSh/CaVRqpSNCjQqDvPM+fLcuN+WgqNix6CoHomUWTT86JjziRSZ3yjnq+dIldKPU11KUuf6wAASMAAJxE+MlyktgE9UGSxjEx6RR0v1s9bWZ+EJSrGtjqUIhklG3J8eLRn/2U/nv7f///+7/6gBQgEAMUijVMwweWWMyYM/PLXuc7DptIQmBARMRCxXjEIcTNDQgSSeHpUNXO7dRSOllJPvnY7yzaO1hmUjsKvHe99fOxrabMX7mGTi5tsNkZVZLndzxse//7kmR7ABM2O0pbKTvQN4NI+WGFPA2ZESs1pYAAvA0jVrJwAHfbr/c6//vW790dzX36QNBRlDv/6QQAU3V64yUgBEAYc/lI8e5bm+Z9+j+4aaj4tFrb//iker/4a12b/V//q//9v+7vAEAAAAMqZTGd5gL4f54o6ZebKNrR/zWVYUEVYVVv8BuAV2OUT+DUQgkJ8J1Ey4ZbFCiAwgwzMSdHV4jQR+OoPWEASaPkyYq+PsQFFJCsEEJtOiUjI/+GRhtC2DnizTMXATJig9Ey/kAJMrkHGYJ8gpLjmJOYoskpav+ShRJInyGGZVJMihDi6pIxRZJJel/8iZPkYiREnyKE0akTL5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV'
      );
    },
  });

  // src/audio.ts
  function audioInit() {
    const audio = (() => {
      const ctx2 = new (window.AudioContext || window.webkitAudioContext)();
      const gainNode = ctx2.createGain();
      const masterNode = gainNode;
      masterNode.connect(ctx2.destination);
      return {
        ctx: ctx2,
        gainNode,
        masterNode,
      };
    })();
    let burpBuf;
    audio.ctx.decodeAudioData(
      burp_default.buffer.slice(0),
      buf => {
        burpBuf = buf;
      },
      () => {
        throw new Error('failed to make burp');
      }
    );
    function volume(v) {
      if (v !== void 0) {
        audio.gainNode.gain.value = clamp(v, MIN_GAIN, MAX_GAIN);
      }
      return audio.gainNode.gain.value;
    }
    __name(volume, 'volume');
    function play(
      sound,
      conf = {
        loop: false,
        volume: 1,
        speed: 1,
        detune: 0,
        seek: 0,
      }
    ) {
      let stopped = false;
      let srcNode = audio.ctx.createBufferSource();
      srcNode.buffer = sound;
      srcNode.loop = !!conf.loop;
      const gainNode = audio.ctx.createGain();
      srcNode.connect(gainNode);
      gainNode.connect(audio.masterNode);
      const pos = conf.seek ?? 0;
      srcNode.start(0, pos);
      let startTime = audio.ctx.currentTime - pos;
      let stopTime = null;
      const handle = {
        stop() {
          if (stopped) {
            return;
          }
          this.pause();
          startTime = audio.ctx.currentTime;
        },
        play(seek) {
          if (!stopped) {
            return;
          }
          const oldNode = srcNode;
          srcNode = audio.ctx.createBufferSource();
          srcNode.buffer = oldNode.buffer;
          srcNode.loop = oldNode.loop;
          srcNode.playbackRate.value = oldNode.playbackRate.value;
          if (srcNode.detune) {
            srcNode.detune.value = oldNode.detune.value;
          }
          srcNode.connect(gainNode);
          const pos2 = seek ?? this.time();
          srcNode.start(0, pos2);
          startTime = audio.ctx.currentTime - pos2;
          stopped = false;
          stopTime = null;
        },
        pause() {
          if (stopped) {
            return;
          }
          srcNode.stop();
          stopped = true;
          stopTime = audio.ctx.currentTime;
        },
        paused() {
          return stopped;
        },
        stopped() {
          return stopped;
        },
        speed(val) {
          if (val !== void 0) {
            srcNode.playbackRate.value = clamp(val, MIN_SPEED, MAX_SPEED);
          }
          return srcNode.playbackRate.value;
        },
        detune(val) {
          if (!srcNode.detune) {
            return 0;
          }
          if (val !== void 0) {
            srcNode.detune.value = clamp(val, MIN_DETUNE, MAX_DETUNE);
          }
          return srcNode.detune.value;
        },
        volume(val) {
          if (val !== void 0) {
            gainNode.gain.value = clamp(val, MIN_GAIN, MAX_GAIN);
          }
          return gainNode.gain.value;
        },
        loop() {
          srcNode.loop = true;
        },
        unloop() {
          srcNode.loop = false;
        },
        duration() {
          return sound.duration;
        },
        time() {
          if (stopped) {
            return stopTime - startTime;
          }
          return audio.ctx.currentTime - startTime;
        },
      };
      handle.speed(conf.speed);
      handle.detune(conf.detune);
      handle.volume(conf.volume);
      return handle;
    }
    __name(play, 'play');
    function ctx() {
      return audio.ctx;
    }
    __name(ctx, 'ctx');
    function burp(conf) {
      return play(burpBuf, conf);
    }
    __name(burp, 'burp');
    return {
      ctx,
      volume,
      play,
      burp,
    };
  }
  let MIN_GAIN;
  let MAX_GAIN;
  let MIN_SPEED;
  let MAX_SPEED;
  let MIN_DETUNE;
  let MAX_DETUNE;
  const init_audio = __esm({
    'src/audio.ts': function () {
      init_math();
      init_burp();
      MIN_GAIN = 0;
      MAX_GAIN = 3;
      MIN_SPEED = 0;
      MAX_SPEED = 3;
      MIN_DETUNE = -1200;
      MAX_DETUNE = 1200;
      __name(audioInit, 'audioInit');
    },
  });

  // src/assets/unscii_8x8.png
  let unscii_8x8_default;
  const init_unscii_8x8 = __esm({
    'src/assets/unscii_8x8.png': function () {
      unscii_8x8_default =
        'data:image/png;base64,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';
    },
  });

  // src/assets/mark.png
  let mark_default;
  const init_mark = __esm({
    'src/assets/mark.png': function () {
      mark_default =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAWCAYAAAA1vze2AAAAAXNSR0IArs4c6QAAALBJREFUSInFlsESwyAIRNlOP5w/pxfjpLgIqTrlJkN8rqtECA8L8j7wa5GZaY2AoY5CfbIMSKBf894HSwAC63O/tszqoi22+4qe36TiHpeiZSXE/LFGJioAlVWFgM492bWFR4w/DmEe/VdJ5dSwb5iPIcRMH4EYoHRPKiBA06P+zlaYgWZ3TFpHOdJWfIPc3oU9YBisghiAJqS16KewCBAmL1gFFP0NqxCR2oMifUx8AEs8Sqk46+g8AAAAAElFTkSuQmCC';
    },
  });

  // src/assets.ts
  function loadImg(src) {
    const img = new Image();
    img.src = src;
    img.crossOrigin = 'anonymous';
    return new Promise((resolve, reject) => {
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject(`failed to load ${src}`);
      };
    });
  }
  function isDataUrl(src) {
    return src.startsWith('data:');
  }
  function assetsInit(gfx, audio, gconf = {}) {
    const assets = {
      lastLoaderID: 0,
      loadRoot: '',
      loaders: {},
      sprites: {},
      sounds: {},
      fonts: {},
      shaders: {},
    };
    function addLoader(prom) {
      const id = assets.lastLoaderID;
      assets.loaders[id] = false;
      assets.lastLoaderID++;
      prom
        .catch(gconf.errHandler ?? console.error)
        .finally(() => (assets.loaders[id] = true));
    }
    __name(addLoader, 'addLoader');
    function loadProgress() {
      let total = 0;
      let loaded = 0;
      for (const id in assets.loaders) {
        total += 1;
        if (assets.loaders[id]) {
          loaded += 1;
        }
      }
      return loaded / total;
    }
    __name(loadProgress, 'loadProgress');
    function loadRoot(path) {
      if (path !== void 0) {
        assets.loadRoot = path;
      }
      return assets.loadRoot;
    }
    __name(loadRoot, 'loadRoot');
    function loadFont(name, src, gw, gh, chars = ASCII_CHARS) {
      const loader = new Promise((resolve, reject) => {
        const path = isDataUrl(src) ? src : assets.loadRoot + src;
        loadImg(path)
          .then(img => {
            const font = gfx.makeFont(gfx.makeTex(img), gw, gh, chars);
            assets.fonts[name] = font;
            resolve(font);
          })
          .catch(reject);
      });
      addLoader(loader);
      return loader;
    }
    __name(loadFont, 'loadFont');
    function loadSprite(
      name,
      src,
      conf = {
        sliceX: 1,
        sliceY: 1,
        anims: {},
      }
    ) {
      function loadRawSprite(
        name2,
        src2,
        conf2 = {
          sliceX: 1,
          sliceY: 1,
          gridWidth: 0,
          gridHeight: 0,
          anims: {},
        }
      ) {
        const frames = [];
        const tex = gfx.makeTex(src2);
        const sliceX =
          conf2.sliceX || tex.width / (conf2.gridWidth || tex.width);
        const sliceY =
          conf2.sliceY || tex.height / (conf2.gridHeight || tex.height);
        const qw = 1 / sliceX;
        const qh = 1 / sliceY;
        for (let j = 0; j < sliceY; j++) {
          for (let i = 0; i < sliceX; i++) {
            frames.push(quad(i * qw, j * qh, qw, qh));
          }
        }
        const sprite = {
          tex,
          frames,
          anims: conf2.anims || {},
        };
        assets.sprites[name2] = sprite;
        return sprite;
      }
      __name(loadRawSprite, 'loadRawSprite');
      const loader = new Promise((resolve, reject) => {
        if (!src) {
          return reject(`expected sprite src for "${name}"`);
        }
        if (typeof src === 'string') {
          const path = isDataUrl(src) ? src : assets.loadRoot + src;
          loadImg(path)
            .then(img => {
              resolve(loadRawSprite(name, img, conf));
            })
            .catch(reject);
        } else {
          resolve(loadRawSprite(name, src, conf));
        }
      });
      addLoader(loader);
      return loader;
    }
    __name(loadSprite, 'loadSprite');
    function loadShader(name, vert, frag, isUrl = false) {
      function loadRawShader(name2, vert2, frag2) {
        const shader = gfx.makeProgram(vert2, frag2);
        assets.shaders[name2] = shader;
        return shader;
      }
      __name(loadRawShader, 'loadRawShader');
      const loader = new Promise((resolve, reject) => {
        if (!vert && !frag) {
          return reject('no shader');
        }
        function resolveUrl(url) {
          return url
            ? fetch(assets.loadRoot + url)
                .then(r => {
                  if (r.ok) {
                    return r.text();
                  }
                  throw new Error(`failed to load ${url}`);
                })
                .catch(reject)
            : new Promise(r => r(null));
        }
        __name(resolveUrl, 'resolveUrl');
        if (isUrl) {
          Promise.all([resolveUrl(vert), resolveUrl(frag)])
            .then(([vcode, fcode]) => {
              resolve(loadRawShader(name, vcode, fcode));
            })
            .catch(reject);
        } else {
          try {
            resolve(loadRawShader(name, vert, frag));
          } catch (err) {
            reject(err);
          }
        }
      });
      addLoader(loader);
      return loader;
    }
    __name(loadShader, 'loadShader');
    function loadSound(name, src) {
      const url = assets.loadRoot + src;
      const loader = new Promise((resolve, reject) => {
        if (!src) {
          return reject(`expected sound src for "${name}"`);
        }
        if (typeof src === 'string') {
          fetch(url)
            .then(res => {
              if (res.ok) {
                return res.arrayBuffer();
              }
              throw new Error(`failed to load ${url}`);
            })
            .then(data => {
              return new Promise((resolve2, reject2) => {
                audio.ctx().decodeAudioData(data, resolve2, reject2);
              });
            })
            .then(buf => {
              assets.sounds[name] = buf;
              resolve(buf);
            })
            .catch(reject);
        }
      });
      addLoader(loader);
      return loader;
    }
    __name(loadSound, 'loadSound');
    function defFont() {
      return assets.fonts[DEF_FONT];
    }
    __name(defFont, 'defFont');
    loadFont(DEF_FONT, unscii_8x8_default, 8, 8);
    loadSprite('mark', mark_default);
    return {
      loadRoot,
      loadSprite,
      loadSound,
      loadFont,
      loadShader,
      loadProgress,
      addLoader,
      defFont,
      sprites: assets.sprites,
      fonts: assets.fonts,
      sounds: assets.sounds,
      shaders: assets.shaders,
    };
  }
  let ASCII_CHARS;
  let DEF_FONT;
  const init_assets = __esm({
    'src/assets.ts': function () {
      init_math();
      init_unscii_8x8();
      init_mark();
      ASCII_CHARS =
        ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
      DEF_FONT = 'unscii';
      __name(loadImg, 'loadImg');
      __name(isDataUrl, 'isDataUrl');
      __name(assetsInit, 'assetsInit');
    },
  });

  // src/logger.ts
  function loggerInit(
    gfx,
    assets,
    conf = {
      max: 8,
    }
  ) {
    let logs = [];
    const max = conf.max ?? 8;
    function draw() {
      if (logs.length > max) {
        logs = logs.slice(0, max);
      }
      const pos = vec2(0, gfx.height());
      logs.forEach((log, i) => {
        const txtAlpha = map(i, 0, max, 1, 0.5);
        const bgAlpha = map(i, 0, max, 0.8, 0.2);
        const col = (() => {
          switch (log.type) {
            case 'info':
              return rgba(1, 1, 1, txtAlpha);
            case 'error':
              return rgba(1, 0, 0.5, txtAlpha);
          }
        })();
        const ftext = gfx.fmtText(log.msg, assets.defFont(), {
          pos,
          origin: 'botleft',
          color: col,
          size: LOG_SIZE / gfx.scale(),
          width: gfx.width(),
        });
        gfx.drawRect(pos, ftext.width, ftext.height, {
          origin: 'botleft',
          color: rgba(0, 0, 0, bgAlpha),
        });
        gfx.drawFmtText(ftext);
        pos.y -= ftext.height;
      });
    }
    __name(draw, 'draw');
    function error(msg) {
      console.error(msg);
      logs.unshift({
        type: 'error',
        msg,
      });
    }
    __name(error, 'error');
    function info(msg) {
      logs.unshift({
        type: 'info',
        msg,
      });
    }
    __name(info, 'info');
    function clear() {
      logs = [];
    }
    __name(clear, 'clear');
    return {
      info,
      error,
      draw,
      clear,
    };
  }
  let LOG_SIZE;
  const init_logger = __esm({
    'src/logger.ts': function () {
      init_math();
      LOG_SIZE = 16;
      __name(loggerInit, 'loggerInit');
    },
  });

  // src/net.ts
  function netInit(url) {
    const handlers = {};
    const sendQueue = [];
    let socket = null;
    function connected() {
      return socket !== null && socket.readyState === 1;
    }
    __name(connected, 'connected');
    function connect() {
      const ws = new WebSocket(url);
      return new Promise((resolve, reject) => {
        ws.onopen = () => {
          resolve(ws);
          socket = ws;
          for (const msg of sendQueue) {
            ws.send(msg);
          }
        };
        ws.onerror = () => {
          reject(`failed to connect to ${url}`);
        };
        ws.onmessage = e => {
          const msg = JSON.parse(e.data);
          if (handlers[msg.type]) {
            for (const handler of handlers[msg.type]) {
              handler(msg.id, msg.data);
            }
          }
        };
      });
    }
    __name(connect, 'connect');
    function recv(type, handler) {
      if (!handlers[type]) {
        handlers[type] = [];
      }
      handlers[type].push(handler);
    }
    __name(recv, 'recv');
    function send(type, data) {
      const msg = JSON.stringify({
        type,
        data,
      });
      if (socket) {
        socket.send(msg);
      } else {
        sendQueue.push(msg);
      }
    }
    __name(send, 'send');
    function close() {
      if (socket) {
        socket.close();
      }
    }
    __name(close, 'close');
    return {
      connect,
      close,
      connected,
      recv,
      send,
    };
  }
  const init_net = __esm({
    'src/net.ts': function () {
      __name(netInit, 'netInit');
    },
  });

  // src/kaboom.ts
  const require_kaboom = __commonJS({
    'src/kaboom.ts': function (exports, module) {
      init_math();
      init_gfx();
      init_app();
      init_audio();
      init_assets();
      init_logger();
      init_net();
      const IDList = class extends Map {
        constructor(...args) {
          super(...args);
          this.lastID = 0;
        }

        push(v) {
          const id = this.lastID;
          this.set(id, v);
          this.lastID++;
          return id;
        }

        pushd(v) {
          const id = this.push(v);
          return () => this.delete(id);
        }
      };
      __name(IDList, 'IDList');
      module.exports = (
        gconf = {
          width: 640,
          height: 480,
          scale: 1,
          fullscreen: false,
          debug: false,
          crisp: false,
          canvas: null,
          connect: null,
          logMax: 8,
          root: document.body,
        }
      ) => {
        const app = appInit({
          width: gconf.width,
          height: gconf.height,
          scale: gconf.scale,
          fullscreen: gconf.fullscreen,
          crisp: gconf.crisp,
          canvas: gconf.canvas,
          root: gconf.root,
          touchToMouse: gconf.touchToMouse ?? true,
        });
        const gfx = gfxInit(app.gl, {
          clearColor: gconf.clearColor ? rgba(gconf.clearColor) : void 0,
          scale: gconf.scale,
          texFilter: gconf.texFilter,
        });
        const audio = audioInit();
        const assets = assetsInit(gfx, audio, {
          errHandler: err => {
            logger.error(err);
          },
        });
        const logger = loggerInit(gfx, assets, {
          max: gconf.logMax,
        });
        const net = gconf.connect ? netInit(gconf.connect) : null;
        let NetMsg;
        (function (NetMsg2) {
          NetMsg2.AddObj = 'ADD_OBJ';
          NetMsg2.UpdateObj = 'UPDATE_OBJ';
          NetMsg2.DestroyObj = 'DESTROY_OBJ';
          NetMsg2.Disconnect = 'DISCONNECT';
        })(NetMsg || (NetMsg = {}));
        function sync(obj) {
          if (!net) {
            throw new Error('not connected to any websockets');
          }
          game.travelers.push(obj._id);
          send(NetMsg.AddObj, obj._data());
        }
        __name(sync, 'sync');
        if (net) {
          recv(NetMsg.AddObj, (id, data) => {
            if (!game.visitors[id]) {
              game.visitors[id] = {};
            }
          });
          recv(NetMsg.DestroyObj, (id, data) => {
            if (!game.visitors[id]) {
              return;
            }
            const oid = game.visitors[id][data.id];
            if (oid != null) {
              destroy(game.objs.get(oid));
              delete game.visitors[id][data.id];
            }
          });
          recv(NetMsg.Disconnect, (id, data) => {
            if (game.visitors[id]) {
              for (const oid of Object.values(game.visitors[id])) {
                destroy(game.objs.get(oid));
              }
              delete game.visitors[id];
            }
          });
        }
        function recv(ty, handler) {
          if (!net) {
            throw new Error('not connected to any websockets');
          }
          net.recv(ty, (data, id) => {
            try {
              handler(data, id);
            } catch (err) {
              logger.error(err);
            }
          });
        }
        __name(recv, 'recv');
        function send(ty, data) {
          if (!net) {
            throw new Error('not connected to any websockets');
          }
          net.send(ty, data);
        }
        __name(send, 'send');
        function dt() {
          return app.dt() * debug.timeScale;
        }
        __name(dt, 'dt');
        function play(id, conf = {}) {
          const pb = audio.play(
            new AudioBuffer({
              length: 1,
              numberOfChannels: 1,
              sampleRate: 44100,
            })
          );
          ready(() => {
            const sound = assets.sounds[id];
            if (!sound) {
              throw new Error(`sound not found: "${id}"`);
            }
            const pb2 = audio.play(sound, conf);
            for (const k in pb2) {
              pb[k] = pb2[k];
            }
          });
          return pb;
        }
        __name(play, 'play');
        function isCamLayer(layer2) {
          return !game.layers[layer2 ?? game.defLayer]?.noCam;
        }
        __name(isCamLayer, 'isCamLayer');
        function mousePos(layer2) {
          return isCamLayer(layer2) ? game.camMousePos : app.mousePos();
        }
        __name(mousePos, 'mousePos');
        function drawSprite(id, conf = {}) {
          const spr = (() => {
            if (typeof id === 'string') {
              return assets.sprites[id];
            }
            return id;
          })();
          if (!spr) {
            throw new Error(`sprite not found: "${id}"`);
          }
          const q = spr.frames[conf.frame ?? 0];
          gfx.drawTexture(spr.tex, {
            ...conf,
            quad: q.scale(conf.quad || quad(0, 0, 1, 1)),
          });
        }
        __name(drawSprite, 'drawSprite');
        function drawText(txt, conf = {}) {
          const fid = conf.font ?? DEF_FONT;
          const font = assets.fonts[fid];
          if (!font) {
            throw new Error(`font not found: ${fid}`);
          }
          gfx.drawText(txt, font, conf);
        }
        __name(drawText, 'drawText');
        const DEF_GRAVITY = 980;
        const DEF_ORIGIN2 = 'topleft';
        const game = {
          loaded: false,
          events: {},
          objEvents: {},
          actions: new IDList(),
          renders: new IDList(),
          objs: new IDList(),
          timers: new IDList(),
          cam: {
            pos: vec2(gfx.width() / 2, gfx.height() / 2),
            scale: vec2(1, 1),
            angle: 0,
            shake: 0,
          },
          camMousePos: app.mousePos(),
          camMatrix: mat4(),
          layers: {},
          defLayer: null,
          gravity: DEF_GRAVITY,
          data: {},
          travelers: [],
          visitors: {},
          on(ev, cb) {
            if (!this.events[ev]) {
              this.events[ev] = new IDList();
            }
            return this.events[ev].pushd(cb);
          },
          trigger(ev, ...args) {
            if (this.events[ev]) {
              this.events[ev].forEach(cb => cb(...args));
            }
          },
          scenes: {},
        };
        function layers(list, def) {
          list.forEach((name, idx) => {
            game.layers[name] = {
              alpha: 1,
              order: idx + 1,
              noCam: false,
            };
          });
          if (def) {
            game.defLayer = def;
          }
        }
        __name(layers, 'layers');
        function camPos(...pos2) {
          if (pos2.length > 0) {
            game.cam.pos = vec2(...pos2);
          }
          return game.cam.pos.clone();
        }
        __name(camPos, 'camPos');
        function camScale(...scale2) {
          if (scale2.length > 0) {
            game.cam.scale = vec2(...scale2);
          }
          return game.cam.scale.clone();
        }
        __name(camScale, 'camScale');
        function camRot(angle) {
          if (angle !== void 0) {
            game.cam.angle = angle;
          }
          return game.cam.angle;
        }
        __name(camRot, 'camRot');
        function camShake(intensity) {
          game.cam.shake = intensity;
        }
        __name(camShake, 'camShake');
        function camIgnore(layers2) {
          layers2.forEach(name => {
            if (game.layers[name]) {
              game.layers[name].noCam = true;
            }
          });
        }
        __name(camIgnore, 'camIgnore');
        const COMP_EVENTS = new Set([
          'add',
          'load',
          'update',
          'draw',
          'destroy',
          'inspect',
        ]);
        function add(comps) {
          const compStates = {};
          const customState = {};
          const events = {};
          const tags = [];
          const obj = {
            hidden: false,
            paused: false,
            _id: null,
            use(comp) {
              if (comp === void 0) {
                return;
              }
              const ty = typeof comp;
              if (ty === 'string') {
                tags.push(comp);
                return;
              }
              if (ty !== 'object') {
                throw new Error(`invalid comp type: ${ty}`);
              }
              let stateContainer = customState;
              if (comp.id) {
                compStates[comp.id] = {};
                stateContainer = compStates[comp.id];
              }
              for (const k in comp) {
                if (k === 'id' || k === 'require') {
                  continue;
                }
                if (typeof comp[k] === 'function') {
                  const func = comp[k].bind(this);
                  if (COMP_EVENTS.has(k)) {
                    this.on(k, func);
                    continue;
                  } else {
                    stateContainer[k] = func;
                  }
                } else {
                  stateContainer[k] = comp[k];
                }
                if (!this[k]) {
                  Object.defineProperty(this, k, {
                    get() {
                      if (comp.id) {
                        return compStates[comp.id][k];
                      }
                      return customState[k];
                    },
                    set(val) {
                      if (comp.id) {
                        compStates[comp.id][k] = val;
                      } else {
                        customState[k] = val;
                      }
                    },
                  });
                }
              }
            },
            c(id) {
              return compStates[id];
            },
            exists() {
              return this._id !== void 0;
            },
            is(tag) {
              if (tag === '*') {
                return true;
              }
              if (Array.isArray(tag)) {
                for (const t of tag) {
                  if (!tags.includes(t)) {
                    return false;
                  }
                }
                return true;
              }
              return tags.includes(tag);
            },
            on(ev, cb) {
              if (!events[ev]) {
                events[ev] = new IDList();
              }
              return events[ev].pushd(cb);
            },
            action(cb) {
              return this.on('update', cb);
            },
            trigger(ev, ...args) {
              if (events[ev]) {
                events[ev].forEach(cb => cb.call(this, ...args));
              }
              const gEvents = game.objEvents[ev];
              if (gEvents) {
                gEvents.forEach(e => {
                  if (this.is(e.tag)) {
                    e.cb(this, ...args);
                  }
                });
              }
            },
            rmTag(t) {
              const idx = tags.indexOf(t);
              if (idx > -1) {
                tags.splice(idx, 1);
              }
            },
            _inspect() {
              const info = [];
              if (events.inspect) {
                for (const inspect of events.inspect.values()) {
                  info.push(inspect());
                }
              }
              return {
                tags,
                info,
              };
            },
            destroy() {
              destroy(this);
            },
          };
          for (const comp of comps) {
            obj.use(comp);
          }
          obj._id = game.objs.push(obj);
          obj.trigger('add');
          ready(() => obj.trigger('load'));
          for (const id in compStates) {
            const comp = compStates[id];
            const deps = comp.require || [];
            for (const dep of deps) {
              if (!obj.c(dep)) {
                throw new Error(`comp '${id}' requires comp '${dep}'`);
              }
            }
          }
          return obj;
        }
        __name(add, 'add');
        function readd(obj) {
          if (!obj.exists()) {
            return;
          }
          game.objs.delete(obj._id);
          const id = game.objs.push(obj);
          obj._id = id;
          return obj;
        }
        __name(readd, 'readd');
        function on(event, tag, cb) {
          if (!game.objEvents[event]) {
            game.objEvents[event] = new IDList();
          }
          return game.objEvents[event].pushd({
            tag,
            cb,
          });
        }
        __name(on, 'on');
        function action(tag, cb) {
          if (typeof tag === 'function' && cb === void 0) {
            return game.actions.pushd(tag);
          }
          if (typeof tag === 'string') {
            return on('update', tag, cb);
          }
        }
        __name(action, 'action');
        function render(tag, cb) {
          if (typeof tag === 'function' && cb === void 0) {
            return game.renders.pushd(tag);
          }
          if (typeof tag === 'string') {
            return on('update', tag, cb);
          }
        }
        __name(render, 'render');
        function collides(t1, t2, f) {
          return action(t1, o1 => {
            o1._checkCollisions(t2, o2 => {
              f(o1, o2);
            });
          });
        }
        __name(collides, 'collides');
        function overlaps(t1, t2, f) {
          return action(t1, o1 => {
            o1._checkOverlaps(t2, o2 => {
              f(o1, o2);
            });
          });
        }
        __name(overlaps, 'overlaps');
        function clicks(t, f) {
          return action(t, o => {
            if (o.isClicked()) {
              f(o);
            }
          });
        }
        __name(clicks, 'clicks');
        function wait(t, f) {
          return new Promise(resolve => {
            game.timers.push({
              time: t,
              cb: () => {
                if (f) {
                  f();
                }
                resolve();
              },
            });
          });
        }
        __name(wait, 'wait');
        function loop(t, f) {
          let stopped = false;
          const newF = /* @__PURE__ */ __name(() => {
            if (stopped) {
              return;
            }
            f();
            wait(t, newF);
          }, 'newF');
          newF();
          return () => (stopped = true);
        }
        __name(loop, 'loop');
        function keyDown(k, f) {
          if (Array.isArray(k)) {
            const cancellers = k.map(key => keyDown(key, f));
            return () => cancellers.forEach(cb => cb());
          }
          return game.on('input', () => app.keyDown(k) && f());
        }
        __name(keyDown, 'keyDown');
        function keyPress(k, f) {
          if (Array.isArray(k)) {
            const cancellers = k.map(key => keyPress(key, f));
            return () => cancellers.forEach(cb => cb());
          }
          return game.on('input', () => app.keyPressed(k) && f());
        }
        __name(keyPress, 'keyPress');
        function keyPressRep(k, f) {
          if (Array.isArray(k)) {
            const cancellers = k.map(key => keyPressRep(key, f));
            return () => cancellers.forEach(cb => cb());
          }
          return game.on('input', () => app.keyPressedRep(k) && f());
        }
        __name(keyPressRep, 'keyPressRep');
        function keyRelease(k, f) {
          if (Array.isArray(k)) {
            const cancellers = k.map(key => keyRelease(key, f));
            return () => cancellers.forEach(cb => cb());
          }
          return game.on('input', () => app.keyReleased(k) && f());
        }
        __name(keyRelease, 'keyRelease');
        function mouseDown(f) {
          return game.on('input', () => app.mouseDown() && f());
        }
        __name(mouseDown, 'mouseDown');
        function mouseClick(f) {
          return game.on('input', () => app.mouseClicked() && f());
        }
        __name(mouseClick, 'mouseClick');
        function mouseRelease(f) {
          return game.on('input', () => app.mouseReleased() && f());
        }
        __name(mouseRelease, 'mouseRelease');
        function mouseMove(f) {
          return game.on('input', () => app.mouseMoved() && f());
        }
        __name(mouseMove, 'mouseMove');
        function charInput(f) {
          return game.on('input', () =>
            app.charInputted().forEach(ch => f(ch))
          );
        }
        __name(charInput, 'charInput');
        function touchStart(f) {
          return game.on('input', () => {});
        }
        __name(touchStart, 'touchStart');
        function touchMove(f) {
          return game.on('input', () => {});
        }
        __name(touchMove, 'touchMove');
        function touchEnd(f) {
          return game.on('input', () => {});
        }
        __name(touchEnd, 'touchEnd');
        function touchIsActive(id) {
          return false;
        }
        __name(touchIsActive, 'touchIsActive');
        function get(t) {
          const objs = [...game.objs.values()].sort((o1, o2) => {
            const l1 = game.layers[o1.layer ?? game.defLayer]?.order ?? 0;
            const l2 = game.layers[o2.layer ?? game.defLayer]?.order ?? 0;
            return l1 - l2;
          });
          if (!t) {
            return objs;
          }
          return objs.filter(obj => obj.is(t));
        }
        __name(get, 'get');
        function every(t, f) {
          if (typeof t === 'function' && f === void 0) {
            return get().map(t);
          }
          if (typeof t === 'string') {
            return get(t).map(f);
          }
        }
        __name(every, 'every');
        function revery(t, f) {
          if (typeof t === 'function' && f === void 0) {
            return get().reverse().map(t);
          }
          if (typeof t === 'string') {
            return get(t).reverse().map(f);
          }
        }
        __name(revery, 'revery');
        function destroy(obj) {
          if (!obj.exists()) {
            return;
          }
          obj.trigger('destroy');
          game.objs.delete(obj._id);
          delete obj._id;
        }
        __name(destroy, 'destroy');
        function destroyAll(t) {
          every(t, obj => {
            destroy(obj);
          });
        }
        __name(destroyAll, 'destroyAll');
        function gravity(g) {
          if (g !== void 0) {
            game.gravity = g;
          }
          return game.gravity;
        }
        __name(gravity, 'gravity');
        function gameFrame(ignorePause) {
          game.trigger('nextFrame');
          delete game.events.nextFrame;
          const doUpdate = ignorePause || !debug.paused;
          if (doUpdate) {
            game.timers.forEach((t, id) => {
              t.time -= dt();
              if (t.time <= 0) {
                t.cb();
                game.timers.delete(id);
              }
            });
          }
          revery(obj => {
            if (!obj.paused && doUpdate) {
              obj.trigger('update');
            }
          });
          if (doUpdate) {
            game.actions.forEach(a => a());
          }
          const size = vec2(gfx.width(), gfx.height());
          const { cam } = game;
          const shake = vec2FromAngle(rand(0, Math.PI * 2)).scale(cam.shake);
          cam.shake = lerp(cam.shake, 0, 5 * dt());
          game.camMatrix = mat4()
            .translate(size.scale(0.5))
            .scale(cam.scale)
            .rotateZ(cam.angle)
            .translate(size.scale(-0.5))
            .translate(cam.pos.scale(-1).add(size.scale(0.5)).add(shake));
          every(obj => {
            if (!obj.hidden) {
              gfx.pushTransform();
              if (isCamLayer(obj.layer)) {
                gfx.pushMatrix(game.camMatrix);
              }
              obj.trigger('draw');
              gfx.popTransform();
            }
          });
          game.renders.forEach(r => r());
        }
        __name(gameFrame, 'gameFrame');
        function drawInspect() {
          let inspecting = null;
          const font = assets.defFont();
          const lcolor = rgba(gconf.inspectColor ?? [0, 1, 1, 1]);
          function drawInspectTxt(pos2, txt, scale2) {
            const pad = vec2(4).scale(1 / scale2);
            const ftxt = gfx.fmtText(txt, font, {
              size: 12 / scale2,
              pos: pos2.add(vec2(pad.x, pad.y)),
            });
            gfx.drawRect(
              pos2,
              ftxt.width + pad.x * 2,
              ftxt.height + pad.x * 2,
              {
                color: rgba(0, 0, 0, 1),
              }
            );
            gfx.drawFmtText(ftxt);
          }
          __name(drawInspectTxt, 'drawInspectTxt');
          function drawObj(obj, f) {
            const isCam = isCamLayer(obj.layer);
            const scale2 =
              gfx.scale() *
              (isCam ? (game.cam.scale.x + game.cam.scale.y) / 2 : 1);
            if (isCam) {
              gfx.pushTransform();
              gfx.pushMatrix(game.camMatrix);
            }
            f(scale2);
            if (isCam) {
              gfx.popTransform();
            }
          }
          __name(drawObj, 'drawObj');
          revery(obj => {
            if (!obj.area) {
              return;
            }
            if (obj.hidden) {
              return;
            }
            drawObj(obj, scale2 => {
              if (!inspecting) {
                if (obj.isHovered()) {
                  inspecting = obj;
                }
              }
              const lwidth = (inspecting === obj ? 6 : 2) / scale2;
              const a = obj._worldArea();
              const w = a.p2.x - a.p1.x;
              const h = a.p2.y - a.p1.y;
              gfx.drawRectStroke(a.p1, w, h, {
                width: lwidth,
                color: lcolor,
              });
            });
          });
          if (inspecting) {
            drawObj(inspecting, scale2 => {
              const mpos = mousePos(inspecting.layer);
              const lines = [];
              const data = inspecting._inspect();
              for (const tag of data.tags) {
                lines.push(`"${tag}"`);
              }
              for (const info of data.info) {
                for (const field in info) {
                  lines.push(`${field}: ${info[field]}`);
                }
              }
              drawInspectTxt(mpos, lines.join('\n'), scale2);
            });
          }
          drawInspectTxt(vec2(0), `${app.fps()}`, gfx.scale());
        }
        __name(drawInspect, 'drawInspect');
        function pos(...args) {
          return {
            id: 'pos',
            pos: vec2(...args),
            move(...args2) {
              const p = vec2(...args2);
              const dx = p.x * dt();
              const dy = p.y * dt();
              this.pos.x += dx;
              this.pos.y += dy;
            },
            screenPos() {
              return game.camMatrix.multVec2(this.pos);
            },
            inspect() {
              return {
                pos: `(${~~this.pos.x}, ${~~this.pos.y})`,
              };
            },
          };
        }
        __name(pos, 'pos');
        function scale(...args) {
          if (args.length === 0) {
            return scale(1);
          }
          return {
            id: 'scale',
            scale: vec2(...args),
          };
        }
        __name(scale, 'scale');
        function rotate(r) {
          return {
            id: 'rotate',
            angle: r ?? 0,
          };
        }
        __name(rotate, 'rotate');
        function color(...args) {
          return {
            id: 'color',
            color: rgba(...args),
          };
        }
        __name(color, 'color');
        function origin(o) {
          return {
            id: 'origin',
            origin: o,
          };
        }
        __name(origin, 'origin');
        function layer(l) {
          return {
            id: 'layer',
            layer: l,
            inspect() {
              return {
                layer: this.layer ?? game.defLayer,
              };
            },
          };
        }
        __name(layer, 'layer');
        function isSameLayer(o1, o2) {
          return (o1.layer ?? game.defLayer) === (o2.layer ?? game.defLayer);
        }
        __name(isSameLayer, 'isSameLayer');
        function area(p1, p2) {
          const colliding = {};
          const overlapping = {};
          return {
            id: 'area',
            area: {
              p1,
              p2,
            },
            areaWidth() {
              const { p1: p12, p2: p22 } = this._worldArea();
              return p22.x - p12.x;
            },
            areaHeight() {
              const { p1: p12, p2: p22 } = this._worldArea();
              return p22.y - p12.y;
            },
            isClicked() {
              return app.mouseClicked() && this.isHovered();
            },
            isHovered() {
              return this.hasPt(mousePos(this.layer));
            },
            isCollided(other) {
              if (!other.area) {
                return false;
              }
              if (!isSameLayer(this, other)) {
                return false;
              }
              const a1 = this._worldArea();
              const a2 = other._worldArea();
              return colRectRect(a1, a2);
            },
            isOverlapped(other) {
              if (!other.area) {
                return false;
              }
              if (!isSameLayer(this, other)) {
                return false;
              }
              const a1 = this._worldArea();
              const a2 = other._worldArea();
              return overlapRectRect(a1, a2);
            },
            clicks(f) {
              this.action(() => {
                if (this.isClicked()) {
                  f();
                }
              });
            },
            hovers(f) {
              this.action(() => {
                if (this.isHovered()) {
                  f();
                }
              });
            },
            collides(tag, f) {
              this.action(() => {
                this._checkCollisions(tag, f);
              });
            },
            overlaps(tag, f) {
              this.action(() => {
                this._checkOverlaps(tag, f);
              });
            },
            hasPt(pt) {
              const a = this._worldArea();
              return colRectPt(
                {
                  p1: a.p1,
                  p2: a.p2,
                },
                pt
              );
            },
            pushOut(obj) {
              if (obj === this) {
                return null;
              }
              if (!obj.area) {
                return null;
              }
              if (!isSameLayer(this, obj)) {
                return null;
              }
              const a1 = this._worldArea();
              const a2 = obj._worldArea();
              if (!colRectRect(a1, a2)) {
                return null;
              }
              const disLeft = a1.p2.x - a2.p1.x;
              const disRight = a2.p2.x - a1.p1.x;
              const disTop = a1.p2.y - a2.p1.y;
              const disBottom = a2.p2.y - a1.p1.y;
              const min = Math.min(disLeft, disRight, disTop, disBottom);
              switch (min) {
                case disLeft:
                  this.pos.x -= disLeft;
                  return {
                    obj,
                    side: 'right',
                    dis: -disLeft,
                  };
                case disRight:
                  this.pos.x += disRight;
                  return {
                    obj,
                    side: 'left',
                    dis: disRight,
                  };
                case disTop:
                  this.pos.y -= disTop;
                  return {
                    obj,
                    side: 'bottom',
                    dis: -disTop,
                  };
                case disBottom:
                  this.pos.y += disBottom;
                  return {
                    obj,
                    side: 'top',
                    dis: disBottom,
                  };
              }
              return null;
            },
            pushOutAll() {
              return every(other =>
                other.solid ? this.pushOut(other) : null
              ).filter(res => res != null);
            },
            _checkCollisions(tag, f) {
              every(tag, obj => {
                if (this === obj) {
                  return;
                }
                if (colliding[obj._id]) {
                  return;
                }
                if (this.isCollided(obj)) {
                  f(obj);
                  colliding[obj._id] = obj;
                }
              });
              for (const id in colliding) {
                const obj = colliding[id];
                if (!this.isCollided(obj)) {
                  delete colliding[id];
                }
              }
            },
            _checkOverlaps(tag, f) {
              every(tag, obj => {
                if (this === obj) {
                  return;
                }
                if (overlapping[obj._id]) {
                  return;
                }
                if (this.isOverlapped(obj)) {
                  f(obj);
                  overlapping[obj._id] = obj;
                }
              });
              for (const id in overlapping) {
                const obj = overlapping[id];
                if (!this.isOverlapped(obj)) {
                  delete overlapping[id];
                }
              }
            },
            _worldArea() {
              const a = this.area;
              const pos2 = this.pos || vec2(0);
              const scale2 = this.scale || vec2(1);
              const p12 = pos2.add(a.p1.scale(scale2));
              const p22 = pos2.add(a.p2.scale(scale2));
              const area2 = {
                p1: vec2(Math.min(p12.x, p22.x), Math.min(p12.y, p22.y)),
                p2: vec2(Math.max(p12.x, p22.x), Math.max(p12.y, p22.y)),
              };
              return area2;
            },
          };
        }
        __name(area, 'area');
        function getAreaFromSize(w, h, o) {
          const size = vec2(w, h);
          const offset = originPt(o || DEF_ORIGIN2)
            .scale(size)
            .scale(-0.5);
          return area(offset.sub(size.scale(0.5)), offset.add(size.scale(0.5)));
        }
        __name(getAreaFromSize, 'getAreaFromSize');
        function sprite(id, conf = {}) {
          let spr = null;
          let curAnim = null;
          function calcTexScale(tex, q, w, h) {
            const scale2 = vec2(1, 1);
            if (w && h) {
              scale2.x = w / (tex.width * q.w);
              scale2.y = h / (tex.height * q.h);
            } else if (w) {
              scale2.x = w / (tex.width * q.w);
              scale2.y = scale2.x;
            } else if (h) {
              scale2.y = h / (tex.height * q.h);
              scale2.x = scale2.y;
            }
            return scale2;
          }
          __name(calcTexScale, 'calcTexScale');
          return {
            id: 'sprite',
            width: 0,
            height: 0,
            animSpeed: conf.animSpeed || 0.1,
            frame: conf.frame || 0,
            quad: conf.quad || quad(0, 0, 1, 1),
            add() {
              if (!conf.noArea) {
                this.use(area(vec2(0), vec2(0)));
              }
            },
            load() {
              spr = assets.sprites[id];
              if (!spr) {
                throw new Error(`sprite not found: "${id}"`);
              }
              let q = { ...spr.frames[0] };
              if (conf.quad) {
                q = q.scale(conf.quad);
              }
              const scale2 = calcTexScale(spr.tex, q, conf.width, conf.height);
              this.width = spr.tex.width * q.w * scale2.x;
              this.height = spr.tex.height * q.h * scale2.y;
              if (!conf.noArea) {
                this.use(getAreaFromSize(this.width, this.height, this.origin));
              }
            },
            draw() {
              drawSprite(spr, {
                pos: this.pos,
                scale: this.scale,
                rot: this.angle,
                color: this.color,
                frame: this.frame,
                origin: this.origin,
                quad: this.quad,
                prog: assets.shaders[this.shader],
                uniform: this.uniform,
                flipX: conf.flipX,
                flipY: conf.flipY,
                tiled: conf.tiled,
                width: conf.width,
                height: conf.height,
              });
            },
            update() {
              if (!curAnim) {
                return;
              }
              const anim = spr.anims[curAnim.name];
              curAnim.timer += dt();
              if (curAnim.timer >= this.animSpeed) {
                this.frame++;
                if (this.frame > anim.to) {
                  if (curAnim.loop) {
                    this.frame = anim.from;
                  } else {
                    this.frame--;
                    this.stop();
                  }
                }
                if (curAnim) {
                  curAnim.timer -= this.animSpeed;
                }
              }
            },
            play(name, loop2 = true) {
              if (!spr) {
                ready(() => {
                  this.play(name, loop2);
                });
                return;
              }
              const anim = spr.anims[name];
              if (!anim) {
                throw new Error(`anim not found: ${name}`);
              }
              if (curAnim) {
                this.stop();
              }
              curAnim = {
                name,
                loop: loop2,
                timer: 0,
              };
              this.frame = anim.from;
              this.trigger('animPlay', name);
            },
            stop() {
              if (!curAnim) {
                return;
              }
              const prevAnim = curAnim.name;
              curAnim = null;
              this.trigger('animEnd', prevAnim);
            },
            changeSprite(id2) {
              if (!spr) {
                ready(() => {
                  this.changeSprite(id2);
                });
                return;
              }
              spr = assets.sprites[id2];
              if (!spr) {
                throw new Error(`sprite not found: "${id2}"`);
              }
              const q = { ...spr.frames[0] };
              if (conf.quad) {
                q.x += conf.quad.x * q.w;
                q.y += conf.quad.y * q.h;
                q.w *= conf.quad.w;
                q.h *= conf.quad.h;
              }
              this.width = spr.tex.width * q.w;
              this.height = spr.tex.height * q.h;
              if (!conf.noArea) {
                this.use(getAreaFromSize(this.width, this.height, this.origin));
              }
              curAnim = null;
              this.frame = 0;
            },
            numFrames() {
              if (!spr) {
                return 0;
              }
              return spr.frames.length;
            },
            curAnim() {
              return curAnim?.name;
            },
            flipX(b) {
              conf.flipX = b;
            },
            flipY(b) {
              conf.flipY = b;
            },
            inspect() {
              const info = {};
              if (curAnim) {
                info.curAnim = `"${curAnim.name}"`;
              }
              return info;
            },
          };
        }
        __name(sprite, 'sprite');
        function text(t, size, conf = {}) {
          return {
            id: 'text',
            text: t,
            textSize: size || 16,
            font: conf.font,
            width: 0,
            height: 0,
            add() {
              if (!conf.noArea) {
                this.use(area(vec2(0), vec2(0)));
              }
            },
            load() {
              if (!conf.noArea) {
                const font = assets.fonts[this.font ?? DEF_FONT];
                const ftext = gfx.fmtText(`${this.text}`, font, {
                  pos: this.pos,
                  scale: this.scale,
                  rot: this.angle,
                  size: this.textSize,
                  origin: this.origin,
                  color: this.color,
                  width: conf.width,
                });
                this.width = ftext.width / (this.scale?.x || 1);
                this.height = ftext.height / (this.scale?.y || 1);
                this.use(getAreaFromSize(this.width, this.height, this.origin));
              }
            },
            draw() {
              const font = assets.fonts[this.font ?? DEF_FONT];
              const ftext = gfx.fmtText(`${this.text}`, font, {
                pos: this.pos,
                scale: this.scale,
                rot: this.angle,
                size: this.textSize,
                origin: this.origin,
                color: this.color,
                width: conf.width,
              });
              this.width = ftext.width;
              this.height = ftext.height;
              gfx.drawFmtText(ftext);
            },
          };
        }
        __name(text, 'text');
        function rect(w, h, conf = {}) {
          return {
            id: 'rect',
            width: w,
            height: h,
            add() {
              if (!this.area && !conf.noArea) {
                this.use(getAreaFromSize(this.width, this.height, this.origin));
              }
            },
            draw() {
              gfx.drawRect(this.pos, this.width, this.height, {
                scale: this.scale,
                rot: this.angle,
                color: this.color,
                origin: this.origin,
                prog: assets.shaders[this.shader],
                uniform: this.uniform,
              });
            },
          };
        }
        __name(rect, 'rect');
        function solid() {
          return {
            id: 'solid',
            solid: true,
          };
        }
        __name(solid, 'solid');
        const DEF_MAX_VEL = 960;
        const DEF_JUMP_FORCE = 480;
        function body(conf = {}) {
          let velY = 0;
          let curPlatform = null;
          let lastPlatformPos = null;
          const maxVel = conf.maxVel ?? DEF_MAX_VEL;
          return {
            id: 'body',
            jumpForce: conf.jumpForce ?? DEF_JUMP_FORCE,
            update() {
              this.move(0, velY);
              const targets = this.pushOutAll();
              let justOff = false;
              if (curPlatform) {
                if (!curPlatform.exists() || !this.isCollided(curPlatform)) {
                  curPlatform = null;
                  lastPlatformPos = null;
                  justOff = true;
                } else if (lastPlatformPos) {
                  this.pos = this.pos.add(curPlatform.pos.sub(lastPlatformPos));
                  lastPlatformPos = curPlatform.pos.clone();
                }
              }
              if (!curPlatform) {
                velY = Math.min(velY + gravity() * dt(), maxVel);
                for (const target of targets) {
                  if (target.side === 'bottom' && velY > 0) {
                    curPlatform = target.obj;
                    velY = 0;
                    lastPlatformPos = curPlatform.pos.clone();
                    if (!justOff) {
                      this.trigger('grounded', curPlatform);
                    }
                  } else if (target.side === 'top' && velY < 0) {
                    velY = 0;
                    this.trigger('headbutt', target.obj);
                  }
                }
              }
            },
            curPlatform() {
              return curPlatform;
            },
            grounded() {
              return curPlatform !== null;
            },
            falling() {
              return velY > 0;
            },
            jump(force) {
              curPlatform = null;
              velY = -force || -this.jumpForce;
            },
          };
        }
        __name(body, 'body');
        function shader(id, uniform = {}) {
          const prog = assets.shaders[id];
          return {
            id: 'shader',
            shader: id,
            uniform,
          };
        }
        __name(shader, 'shader');
        const debug = {
          paused: false,
          inspect: false,
          timeScale: 1,
          showLog: true,
          fps: app.fps,
          objCount() {
            return game.objs.size;
          },
          stepFrame() {
            gameFrame(true);
          },
          drawCalls: gfx.drawCalls,
          clearLog: logger.clear,
          log: logger.info,
          error: logger.error,
        };
        function gridder(level, p) {
          return {
            id: 'gridder',
            gridPos: p.clone(),
            setGridPos(p2) {
              this.gridPos = p2.clone();
              this.pos = vec2(
                level.offset().x + this.gridPos.x * level.gridWidth(),
                level.offset().y + this.gridPos.y * level.gridHeight()
              );
            },
            moveLeft() {
              this.setGridPos(this.gridPos.add(vec2(-1, 0)));
            },
            moveRight() {
              this.setGridPos(this.gridPos.add(vec2(1, 0)));
            },
            moveUp() {
              this.setGridPos(this.gridPos.add(vec2(0, -1)));
            },
            moveDown() {
              this.setGridPos(this.gridPos.add(vec2(0, 1)));
            },
          };
        }
        __name(gridder, 'gridder');
        function addLevel(map2, conf) {
          const objs = [];
          const offset = vec2(conf.pos || 0);
          let longRow = 0;
          const level = {
            offset() {
              return offset.clone();
            },
            gridWidth() {
              return conf.width;
            },
            gridHeight() {
              return conf.height;
            },
            getPos(...args) {
              const p = vec2(...args);
              return vec2(
                offset.x + p.x * conf.width,
                offset.y + p.y * conf.height
              );
            },
            spawn(sym, p) {
              const comps = (() => {
                if (Array.isArray(sym)) {
                  return sym;
                }
                if (conf[sym]) {
                  if (typeof conf[sym] === 'function') {
                    return conf[sym]();
                  }
                  if (Array.isArray(conf[sym])) {
                    return [...conf[sym]];
                  }
                } else if (conf.any) {
                  return conf.any(sym);
                }
              })();
              if (!comps) {
                return;
              }
              comps.push(
                pos(offset.x + p.x * conf.width, offset.y + p.y * conf.height)
              );
              const obj = add(comps);
              objs.push(obj);
              obj.use(gridder(this, p));
              return obj;
            },
            width() {
              return longRow * conf.width;
            },
            height() {
              return map2.length * conf.height;
            },
            destroy() {
              for (const obj of objs) {
                destroy(obj);
              }
            },
          };
          map2.forEach((row, i) => {
            const syms = row.split('');
            longRow = Math.max(syms.length, longRow);
            syms.forEach((sym, j) => {
              level.spawn(sym, vec2(j, i));
            });
          });
          return level;
        }
        __name(addLevel, 'addLevel');
        function commonProps(props) {
          return [
            pos(props.pos ?? vec2(0)),
            rotate(props.rot ?? 0),
            scale(vec2(props.scale ?? 1)),
            color(props.color ?? rgb(1, 1, 1)),
            origin(props.origin),
          ];
        }
        __name(commonProps, 'commonProps');
        function addSprite(name, props = {}) {
          return add([
            sprite(name, props),
            props.body && body(),
            props.solid && solid(),
            props.layer && layer(props.layer),
            props.origin && origin(props.origin),
            props.data,
            ...commonProps(props),
            ...(props.tags || []),
          ]);
        }
        __name(addSprite, 'addSprite');
        function addRect(w, h, props = {}) {
          return add([
            rect(w, h, props),
            props.body && body(),
            props.solid && solid(),
            props.layer && layer(props.layer),
            props.origin && origin(props.origin),
            props.data,
            ...commonProps(props),
            ...(props.tags || []),
          ]);
        }
        __name(addRect, 'addRect');
        function addText(txt, size, props = {}) {
          return add([
            text(txt, size, props),
            props.body && body(),
            props.solid && solid(),
            props.layer && layer(props.layer),
            props.origin && origin(props.origin),
            props.data,
            ...commonProps(props),
            ...(props.tags || []),
          ]);
        }
        __name(addText, 'addText');
        function ready(cb) {
          if (game.loaded) {
            cb();
          } else {
            game.on('load', cb);
          }
        }
        __name(ready, 'ready');
        function scene(id, def) {
          game.scenes[id] = def;
        }
        __name(scene, 'scene');
        function go(id, ...args) {
          game.on('nextFrame', () => {
            game.events = {};
            game.objEvents = {
              add: new IDList(),
              update: new IDList(),
              draw: new IDList(),
              destroy: new IDList(),
            };
            game.actions = new IDList();
            game.renders = new IDList();
            game.objs = new IDList();
            game.timers = new IDList();
            game.cam = {
              pos: vec2(gfx.width() / 2, gfx.height() / 2),
              scale: vec2(1, 1),
              angle: 0,
              shake: 0,
            };
            game.camMousePos = app.mousePos();
            game.camMatrix = mat4();
            game.layers = {};
            game.defLayer = null;
            game.gravity = DEF_GRAVITY;
            game.scenes[id](...args);
            if (gconf.debug) {
              regDebugInput();
            }
          });
        }
        __name(go, 'go');
        function getData(key, def) {
          try {
            return JSON.parse(window.localStorage[key]);
          } catch {
            if (def) {
              setData(key, def);
              return def;
            }
            return null;
          }
        }
        __name(getData, 'getData');
        function setData(key, data) {
          window.localStorage[key] = JSON.stringify(data);
        }
        __name(setData, 'setData');
        const ctx = {
          loadRoot: assets.loadRoot,
          loadSprite: assets.loadSprite,
          loadSound: assets.loadSound,
          loadFont: assets.loadFont,
          loadShader: assets.loadShader,
          addLoader: assets.addLoader,
          width: gfx.width,
          height: gfx.height,
          dt,
          time: app.time,
          screenshot: app.screenshot,
          focused: app.focused,
          focus: app.focus,
          cursor: app.cursor,
          ready,
          isTouch: app.isTouch,
          layers,
          camPos,
          camScale,
          camRot,
          camShake,
          camIgnore,
          gravity,
          add,
          readd,
          destroy,
          destroyAll,
          get,
          every,
          revery,
          sync,
          send,
          recv,
          pos,
          scale,
          rotate,
          color,
          origin,
          layer,
          area,
          sprite,
          text,
          rect,
          solid,
          body,
          shader,
          on,
          action,
          render,
          collides,
          overlaps,
          clicks,
          keyDown,
          keyPress,
          keyPressRep,
          keyRelease,
          mouseDown,
          mouseClick,
          mouseRelease,
          mouseMove,
          charInput,
          touchStart,
          touchMove,
          touchEnd,
          touchIsActive,
          mousePos,
          keyIsDown: app.keyDown,
          keyIsPressed: app.keyPressed,
          keyIsPressedRep: app.keyPressedRep,
          keyIsReleased: app.keyReleased,
          mouseIsDown: app.mouseDown,
          mouseIsClicked: app.mouseClicked,
          mouseIsReleased: app.mouseReleased,
          mouseIsMoved: app.mouseMoved,
          loop,
          wait,
          play,
          volume: audio.volume,
          burp: audio.burp,
          makeRng,
          rand,
          randSeed,
          vec2,
          rgb,
          rgba,
          quad,
          choose,
          chance,
          lerp,
          map,
          mapc,
          wave,
          deg2rad,
          rad2deg,
          drawSprite,
          drawText,
          drawRect: gfx.drawRect,
          drawRectStroke: gfx.drawRectStroke,
          drawLine: gfx.drawLine,
          drawTri: gfx.drawTri,
          debug,
          addLevel,
          addSprite,
          addRect,
          addText,
          scene,
          go,
          getData,
          setData,
        };


        if (gconf.plugins) {
          for (const src of gconf.plugins) {
            const map2 = src(ctx);
            for (const k in map2) {
              ctx[k] = map2[k];
            }
          }
        }
        if (gconf.global) {
          Object.entries(ctx).forEach(([key, value]) => {
            window[key] = value
          })
        }
        app.run(() => {
          gfx.frameStart();
          if (!game.loaded) {
            const progress = assets.loadProgress();
            if (progress === 1) {
              game.loaded = true;
              game.trigger('load');
              if (net) {
                net.connect().catch(logger.error);
              }
            } else {
              const w = gfx.width() / 2;
              const h = 24 / gfx.scale();
              const pos2 = vec2(gfx.width() / 2, gfx.height() / 2).sub(
                vec2(w / 2, h / 2)
              );
              gfx.drawRect(vec2(0), gfx.width(), gfx.height(), {
                color: rgb(0, 0, 0),
              });
              gfx.drawRectStroke(pos2, w, h, { width: 4 / gfx.scale() });
              gfx.drawRect(pos2, w * progress, h);
            }
          } else {
            try {
              game.camMousePos = game.camMatrix
                .invert()
                .multVec2(app.mousePos());
              game.trigger('input');
              gameFrame();
              if (debug.inspect) {
                drawInspect();
              }
            } catch (e) {
              logger.error(e.stack);
              app.quit();
            }
            if (debug.showLog) {
              logger.draw();
            }
          }
          gfx.frameEnd();
        });
        function regDebugInput() {
          keyPress('f1', () => {
            debug.inspect = !debug.inspect;
          });
          keyPress('f2', () => {
            debug.clearLog();
          });
          keyPress('f8', () => {
            debug.paused = !debug.paused;
            logger.info(`${debug.paused ? 'paused' : 'unpaused'}`);
          });
          keyPress('f7', () => {
            debug.timeScale = clamp(debug.timeScale - 0.2, 0, 2);
            logger.info(`time scale: ${debug.timeScale.toFixed(1)}`);
          });
          keyPress('f9', () => {
            debug.timeScale = clamp(debug.timeScale + 0.2, 0, 2);
            logger.info(`time scale: ${debug.timeScale.toFixed(1)}`);
          });
          keyPress('f10', () => {
            debug.stepFrame();
            logger.info(`stepped frame`);
          });
        }
        __name(regDebugInput, 'regDebugInput');
        if (gconf.debug) {
          regDebugInput();
        }
        return ctx;
      };
    },
  });
  return require_kaboom();
})();

export default kaboom;
