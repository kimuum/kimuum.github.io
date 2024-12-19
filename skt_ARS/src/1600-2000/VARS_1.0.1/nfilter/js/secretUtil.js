var dbits, canary = 0xdeadbeefcafe, j_lm = 15715070 == (canary & 16777215);

function BigInteger(a, b, c) {
    null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
}

function nbi() {
    return new BigInteger(null)
}

function am1(a, b, c, d, f, e) {
    for (; 0 <= --e;) {
        var g = b * this[a++] + c[d] + f;
        f = Math.floor(g / 67108864);
        c[d++] = g & 67108863
    }
    return f
}

function am2(a, b, c, d, f, e) {
    var g = b & 32767;
    for (b >>= 15; 0 <= --e;) {
        var h = this[a] & 32767, k = this[a++] >> 15, m = b * h + k * g,
            h = g * h + ((m & 32767) << 15) + c[d] + (f & 1073741823);
        f = (h >>> 30) + (m >>> 15) + b * k + (f >>> 30);
        c[d++] = h & 1073741823
    }
    return f
}

function am3(a, b, c, d, f, e) {
    var g = b & 16383;
    for (b >>= 14; 0 <= --e;) {
        var h = this[a] & 16383, k = this[a++] >> 14, m = b * h + k * g, h = g * h + ((m & 16383) << 14) + c[d] + f;
        f = (h >> 28) + (m >> 14) + b * k;
        c[d++] = h & 268435455
    }
    return f
}

j_lm && "Microsoft Internet Explorer" == navigator.appName ? (BigInteger.prototype.am = am2, dbits = 30) : j_lm && "Netscape" != navigator.appName ? (BigInteger.prototype.am = am1, dbits = 26) : (BigInteger.prototype.am = am3, dbits = 28);
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz", BI_RC = [], rr, vv;
rr = 48;
for (vv = 0; 9 >= vv; ++vv) BI_RC[rr++] = vv;
rr = 97;
for (vv = 10; 36 > vv; ++vv) BI_RC[rr++] = vv;
rr = 65;
for (vv = 10; 36 > vv; ++vv) BI_RC[rr++] = vv;

function int2char(a) {
    return BI_RM.charAt(a)
}

function intAt(a, b) {
    var c = BI_RC[a.charCodeAt(b)];
    return null == c ? -1 : c
}

function bnpCopyTo(a) {
    for (var b = this.t - 1; 0 <= b; --b) a[b] = this[b];
    a.t = this.t;
    a.s = this.s
}

function bnpFromInt(a) {
    this.t = 1;
    this.s = 0 > a ? -1 : 0;
    0 < a ? this[0] = a : -1 > a ? this[0] = a + this.DV : this.t = 0
}

function nbv(a) {
    var b = nbi();
    b.fromInt(a);
    return b
}

function bnpFromString(a, b) {
    if (16 == b) var c = 4; else if (8 == b) c = 3; else if (256 == b) c = 8; else if (2 == b) c = 1; else if (32 == b) c = 5; else if (4 == b) c = 2; else {
        this.fromRadix(a, b);
        return
    }
    this.s = this.t = 0;
    for (var d = a.length, f = !1, e = 0; 0 <= --d;) {
        var g = 8 == c ? a[d] & 255 : intAt(a, d);
        0 > g ? "-" == a.charAt(d) && (f = !0) : (f = !1, 0 == e ? this[this.t++] = g : e + c > this.DB ? (this[this.t - 1] |= (g & (1 << this.DB - e) - 1) << e, this[this.t++] = g >> this.DB - e) : this[this.t - 1] |= g << e, e += c, e >= this.DB && (e -= this.DB))
    }
    8 == c && 0 != (a[0] & 128) && (this.s = -1, 0 < e && (this[this.t - 1] |= (1 << this.DB -
        e) - 1 << e));
    this.clamp();
    f && BigInteger.ZERO.subTo(this, this)
}

function bnpClamp() {
    for (var a = this.s & this.DM; 0 < this.t && this[this.t - 1] == a;) --this.t
}

function bnToString(a) {
    if (0 > this.s) return "-" + this.negate().toString(a);
    if (16 == a) a = 4; else if (8 == a) a = 3; else if (2 == a) a = 1; else if (32 == a) a = 5; else if (4 == a) a = 2; else return this.toRadix(a);
    var b = (1 << a) - 1, c, d = !1, f = "", e = this.t, g = this.DB - e * this.DB % a;
    if (0 < e--) for (g < this.DB && 0 < (c = this[e] >> g) && (d = !0, f = int2char(c)); 0 <= e;) g < a ? (c = (this[e] & (1 << g) - 1) << a - g, c |= this[--e] >> (g += this.DB - a)) : (c = this[e] >> (g -= a) & b, 0 >= g && (g += this.DB, --e)), 0 < c && (d = !0), d && (f += int2char(c));
    return d ? f : "0"
}

function bnNegate() {
    var a = nbi();
    BigInteger.ZERO.subTo(this, a);
    return a
}

function bnAbs() {
    return 0 > this.s ? this.negate() : this
}

function bnCompareTo(a) {
    var b = this.s - a.s;
    if (0 != b) return b;
    var c = this.t, b = c - a.t;
    if (0 != b) return 0 > this.s ? -b : b;
    for (; 0 <= --c;) if (0 != (b = this[c] - a[c])) return b;
    return 0
}

function nbits(a) {
    var b = 1, c;
    0 != (c = a >>> 16) && (a = c, b += 16);
    0 != (c = a >> 8) && (a = c, b += 8);
    0 != (c = a >> 4) && (a = c, b += 4);
    0 != (c = a >> 2) && (a = c, b += 2);
    0 != a >> 1 && (b += 1);
    return b
}

function bnBitLength() {
    return 0 >= this.t ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
}

function bnpDLShiftTo(a, b) {
    var c;
    for (c = this.t - 1; 0 <= c; --c) b[c + a] = this[c];
    for (c = a - 1; 0 <= c; --c) b[c] = 0;
    b.t = this.t + a;
    b.s = this.s
}

function bnpDRShiftTo(a, b) {
    for (var c = a; c < this.t; ++c) b[c - a] = this[c];
    b.t = Math.max(this.t - a, 0);
    b.s = this.s
}

function bnpLShiftTo(a, b) {
    var c = a % this.DB, d = this.DB - c, f = (1 << d) - 1, e = Math.floor(a / this.DB), g = this.s << c & this.DM, h;
    for (h = this.t - 1; 0 <= h; --h) b[h + e + 1] = this[h] >> d | g, g = (this[h] & f) << c;
    for (h = e - 1; 0 <= h; --h) b[h] = 0;
    b[e] = g;
    b.t = this.t + e + 1;
    b.s = this.s;
    b.clamp()
}

function bnpRShiftTo(a, b) {
    b.s = this.s;
    var c = Math.floor(a / this.DB);
    if (c >= this.t) b.t = 0; else {
        var d = a % this.DB, f = this.DB - d, e = (1 << d) - 1;
        b[0] = this[c] >> d;
        for (var g = c + 1; g < this.t; ++g) b[g - c - 1] |= (this[g] & e) << f, b[g - c] = this[g] >> d;
        0 < d && (b[this.t - c - 1] |= (this.s & e) << f);
        b.t = this.t - c;
        b.clamp()
    }
}

function bnpSubTo(a, b) {
    for (var c = 0, d = 0, f = Math.min(a.t, this.t); c < f;) d += this[c] - a[c], b[c++] = d & this.DM, d >>= this.DB;
    if (a.t < this.t) {
        for (d -= a.s; c < this.t;) d += this[c], b[c++] = d & this.DM, d >>= this.DB;
        d += this.s
    } else {
        for (d += this.s; c < a.t;) d -= a[c], b[c++] = d & this.DM, d >>= this.DB;
        d -= a.s
    }
    b.s = 0 > d ? -1 : 0;
    -1 > d ? b[c++] = this.DV + d : 0 < d && (b[c++] = d);
    b.t = c;
    b.clamp()
}

function bnpMultiplyTo(a, b) {
    var c = this.abs(), d = a.abs(), f = c.t;
    for (b.t = f + d.t; 0 <= --f;) b[f] = 0;
    for (f = 0; f < d.t; ++f) b[f + c.t] = c.am(0, d[f], b, f, 0, c.t);
    b.s = 0;
    b.clamp();
    this.s != a.s && BigInteger.ZERO.subTo(b, b)
}

function bnpSquareTo(a) {
    for (var b = this.abs(), c = a.t = 2 * b.t; 0 <= --c;) a[c] = 0;
    for (c = 0; c < b.t - 1; ++c) {
        var d = b.am(c, b[c], a, 2 * c, 0, 1);
        (a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV && (a[c + b.t] -= b.DV, a[c + b.t + 1] = 1)
    }
    0 < a.t && (a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1));
    a.s = 0;
    a.clamp()
}

function bnpDivRemTo(a, b, c) {
    var d = a.abs();
    if (!(0 >= d.t)) {
        var f = this.abs();
        if (f.t < d.t) null != b && b.fromInt(0), null != c && this.copyTo(c); else {
            null == c && (c = nbi());
            var e = nbi(), g = this.s;
            a = a.s;
            var h = this.DB - nbits(d[d.t - 1]);
            0 < h ? (d.lShiftTo(h, e), f.lShiftTo(h, c)) : (d.copyTo(e), f.copyTo(c));
            d = e.t;
            f = e[d - 1];
            if (0 != f) {
                var k = f * (1 << this.F1) + (1 < d ? e[d - 2] >> this.F2 : 0), m = this.FV / k, k = (1 << this.F1) / k,
                    r = 1 << this.F2, n = c.t, p = n - d, l = null == b ? nbi() : b;
                e.dlShiftTo(p, l);
                0 <= c.compareTo(l) && (c[c.t++] = 1, c.subTo(l, c));
                BigInteger.ONE.dlShiftTo(d,
                    l);
                for (l.subTo(e, e); e.t < d;) e[e.t++] = 0;
                for (; 0 <= --p;) {
                    var q = c[--n] == f ? this.DM : Math.floor(c[n] * m + (c[n - 1] + r) * k);
                    if ((c[n] += e.am(0, q, c, p, 0, d)) < q) for (e.dlShiftTo(p, l), c.subTo(l, c); c[n] < --q;) c.subTo(l, c)
                }
                null != b && (c.drShiftTo(d, b), g != a && BigInteger.ZERO.subTo(b, b));
                c.t = d;
                c.clamp();
                0 < h && c.rShiftTo(h, c);
                0 > g && BigInteger.ZERO.subTo(c, c)
            }
        }
    }
}

function bnMod(a) {
    var b = nbi();
    this.abs().divRemTo(a, null, b);
    0 > this.s && 0 < b.compareTo(BigInteger.ZERO) && a.subTo(b, b);
    return b
}

function Classic(a) {
    this.m = a
}

function cConvert(a) {
    return 0 > a.s || 0 <= a.compareTo(this.m) ? a.mod(this.m) : a
}

function cRevert(a) {
    return a
}

function cReduce(a) {
    a.divRemTo(this.m, null, a)
}

function cMulTo(a, b, c) {
    a.multiplyTo(b, c);
    this.reduce(c)
}

function cSqrTo(a, b) {
    a.squareTo(b);
    this.reduce(b)
}

Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;

function bnpInvDigit() {
    if (1 > this.t) return 0;
    var a = this[0];
    if (0 == (a & 1)) return 0;
    var b = a & 3, b = b * (2 - (a & 15) * b) & 15, b = b * (2 - (a & 255) * b) & 255,
        b = b * (2 - ((a & 65535) * b & 65535)) & 65535, b = b * (2 - a * b % this.DV) % this.DV;
    return 0 < b ? this.DV - b : -b
}

function Montgomery(a) {
    this.m = a;
    this.mp = a.invDigit();
    this.mpl = this.mp & 32767;
    this.mph = this.mp >> 15;
    this.um = (1 << a.DB - 15) - 1;
    this.mt2 = 2 * a.t
}

function montConvert(a) {
    var b = nbi();
    a.abs().dlShiftTo(this.m.t, b);
    b.divRemTo(this.m, null, b);
    0 > a.s && 0 < b.compareTo(BigInteger.ZERO) && this.m.subTo(b, b);
    return b
}

function montRevert(a) {
    var b = nbi();
    a.copyTo(b);
    this.reduce(b);
    return b
}

function montReduce(a) {
    for (; a.t <= this.mt2;) a[a.t++] = 0;
    for (var b = 0; b < this.m.t; ++b) {
        var c = a[b] & 32767, d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM,
            c = b + this.m.t;
        for (a[c] += this.m.am(0, d, a, b, 0, this.m.t); a[c] >= a.DV;) a[c] -= a.DV, a[++c]++
    }
    a.clamp();
    a.drShiftTo(this.m.t, a);
    0 <= a.compareTo(this.m) && a.subTo(this.m, a)
}

function montSqrTo(a, b) {
    a.squareTo(b);
    this.reduce(b)
}

function montMulTo(a, b, c) {
    a.multiplyTo(b, c);
    this.reduce(c)
}

Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;

function bnpIsEven() {
    return 0 == (0 < this.t ? this[0] & 1 : this.s)
}

function bnpExp(a, b) {
    if (4294967295 < a || 1 > a) return BigInteger.ONE;
    var c = nbi(), d = nbi(), f = b.convert(this), e = nbits(a) - 1;
    for (f.copyTo(c); 0 <= --e;) if (b.sqrTo(c, d), 0 < (a & 1 << e)) b.mulTo(d, f, c); else var g = c, c = d, d = g;
    return b.revert(c)
}

function bnModPowInt(a, b) {
    var c = 256 > a || b.isEven() ? new Classic(b) : new Montgomery(b);
    return this.exp(a, c)
}

BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);

function bnClone() {
    var a = nbi();
    this.copyTo(a);
    return a
}

function bnIntValue() {
    if (0 > this.s) {
        if (1 == this.t) return this[0] - this.DV;
        if (0 == this.t) return -1
    } else {
        if (1 == this.t) return this[0];
        if (0 == this.t) return 0
    }
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
}

function bnByteValue() {
    return 0 == this.t ? this.s : this[0] << 24 >> 24
}

function bnShortValue() {
    return 0 == this.t ? this.s : this[0] << 16 >> 16
}

function bnpChunkSize(a) {
    return Math.floor(Math.LN2 * this.DB / Math.log(a))
}

function bnSigNum() {
    return 0 > this.s ? -1 : 0 >= this.t || 1 == this.t && 0 >= this[0] ? 0 : 1
}

function bnpToRadix(a) {
    null == a && (a = 10);
    if (0 == this.signum() || 2 > a || 36 < a) return "0";
    var b = this.chunkSize(a), b = Math.pow(a, b), c = nbv(b), d = nbi(), e = nbi(), g = "";
    for (this.divRemTo(c, d, e); 0 < d.signum();) g = (b + e.intValue()).toString(a).substr(1) + g, d.divRemTo(c, d, e);
    return e.intValue().toString(a) + g
}

function bnpFromRadix(a, b) {
    this.fromInt(0);
    null == b && (b = 10);
    for (var c = this.chunkSize(b), d = Math.pow(b, c), e = !1, g = 0, h = 0, f = 0; f < a.length; ++f) {
        var m = intAt(a, f);
        0 > m ? "-" == a.charAt(f) && 0 == this.signum() && (e = !0) : (h = b * h + m, ++g >= c && (this.dMultiply(d), this.dAddOffset(h, 0), h = g = 0))
    }
    0 < g && (this.dMultiply(Math.pow(b, g)), this.dAddOffset(h, 0));
    e && BigInteger.ZERO.subTo(this, this)
}

function bnpFromNumber(a, b, c) {
    if ("number" == typeof b) if (2 > a) this.fromInt(1); else for (this.fromNumber(a, c), this.testBit(a - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(b);) this.dAddOffset(2, 0), this.bitLength() > a && this.subTo(BigInteger.ONE.shiftLeft(a - 1), this); else {
        c = [];
        var d = a & 7;
        c.length = (a >> 3) + 1;
        b.nextBytes(c);
        c[0] = 0 < d ? c[0] & (1 << d) - 1 : 0;
        this.fromString(c, 256)
    }
}

function bnToByteArray() {
    var a = this.t, b = [];
    b[0] = this.s;
    var c = this.DB - a * this.DB % 8, d, e = 0;
    if (0 < a--) for (c < this.DB && (d = this[a] >> c) != (this.s & this.DM) >> c && (b[e++] = d | this.s << this.DB - c); 0 <= a;) if (8 > c ? (d = (this[a] & (1 << c) - 1) << 8 - c, d |= this[--a] >> (c += this.DB - 8)) : (d = this[a] >> (c -= 8) & 255, 0 >= c && (c += this.DB, --a)), 0 != (d & 128) && (d |= -256), 0 == e && (this.s & 128) != (d & 128) && ++e, 0 < e || d != this.s) b[e++] = d;
    return b
}

function bnEquals(a) {
    return 0 == this.compareTo(a)
}

function bnMin(a) {
    return 0 > this.compareTo(a) ? this : a
}

function bnMax(a) {
    return 0 < this.compareTo(a) ? this : a
}

function bnpBitwiseTo(a, b, c) {
    var d, e = Math.min(a.t, this.t);
    for (d = 0; d < e; ++d) c[d] = b(this[d], a[d]);
    if (a.t < this.t) {
        var g = a.s & this.DM;
        for (d = e; d < this.t; ++d) c[d] = b(this[d], g);
        c.t = this.t
    } else {
        g = this.s & this.DM;
        for (d = e; d < a.t; ++d) c[d] = b(g, a[d]);
        c.t = a.t
    }
    c.s = b(this.s, a.s);
    c.clamp()
}

function op_and(a, b) {
    return a & b
}

function bnAnd(a) {
    var b = nbi();
    this.bitwiseTo(a, op_and, b);
    return b
}

function op_or(a, b) {
    return a | b
}

function bnOr(a) {
    var b = nbi();
    this.bitwiseTo(a, op_or, b);
    return b
}

function op_xor(a, b) {
    return a ^ b
}

function bnXor(a) {
    var b = nbi();
    this.bitwiseTo(a, op_xor, b);
    return b
}

function op_andnot(a, b) {
    return a & ~b
}

function bnAndNot(a) {
    var b = nbi();
    this.bitwiseTo(a, op_andnot, b);
    return b
}

function bnNot() {
    for (var a = nbi(), b = 0; b < this.t; ++b) a[b] = this.DM & ~this[b];
    a.t = this.t;
    a.s = ~this.s;
    return a
}

function bnShiftLeft(a) {
    var b = nbi();
    0 > a ? this.rShiftTo(-a, b) : this.lShiftTo(a, b);
    return b
}

function bnShiftRight(a) {
    var b = nbi();
    0 > a ? this.lShiftTo(-a, b) : this.rShiftTo(a, b);
    return b
}

function lbit(a) {
    if (0 == a) return -1;
    var b = 0;
    0 == (a & 65535) && (a >>= 16, b += 16);
    0 == (a & 255) && (a >>= 8, b += 8);
    0 == (a & 15) && (a >>= 4, b += 4);
    0 == (a & 3) && (a >>= 2, b += 2);
    0 == (a & 1) && ++b;
    return b
}

function bnGetLowestSetBit() {
    for (var a = 0; a < this.t; ++a) if (0 != this[a]) return a * this.DB + lbit(this[a]);
    return 0 > this.s ? this.t * this.DB : -1
}

function cbit(a) {
    for (var b = 0; 0 != a;) a &= a - 1, ++b;
    return b
}

function bnBitCount() {
    for (var a = 0, b = this.s & this.DM, c = 0; c < this.t; ++c) a += cbit(this[c] ^ b);
    return a
}

function bnTestBit(a) {
    var b = Math.floor(a / this.DB);
    return b >= this.t ? 0 != this.s : 0 != (this[b] & 1 << a % this.DB)
}

function bnpChangeBit(a, b) {
    var c = BigInteger.ONE.shiftLeft(a);
    this.bitwiseTo(c, b, c);
    return c
}

function bnSetBit(a) {
    return this.changeBit(a, op_or)
}

function bnClearBit(a) {
    return this.changeBit(a, op_andnot)
}

function bnFlipBit(a) {
    return this.changeBit(a, op_xor)
}

function bnpAddTo(a, b) {
    for (var c = 0, d = 0, e = Math.min(a.t, this.t); c < e;) d += this[c] + a[c], b[c++] = d & this.DM, d >>= this.DB;
    if (a.t < this.t) {
        for (d += a.s; c < this.t;) d += this[c], b[c++] = d & this.DM, d >>= this.DB;
        d += this.s
    } else {
        for (d += this.s; c < a.t;) d += a[c], b[c++] = d & this.DM, d >>= this.DB;
        d += a.s
    }
    b.s = 0 > d ? -1 : 0;
    0 < d ? b[c++] = d : -1 > d && (b[c++] = this.DV + d);
    b.t = c;
    b.clamp()
}

function bnAdd(a) {
    var b = nbi();
    this.addTo(a, b);
    return b
}

function bnSubtract(a) {
    var b = nbi();
    this.subTo(a, b);
    return b
}

function bnMultiply(a) {
    var b = nbi();
    this.multiplyTo(a, b);
    return b
}

function bnSquare() {
    var a = nbi();
    this.squareTo(a);
    return a
}

function bnDivide(a) {
    var b = nbi();
    this.divRemTo(a, b, null);
    return b
}

function bnRemainder(a) {
    var b = nbi();
    this.divRemTo(a, null, b);
    return b
}

function bnDivideAndRemainder(a) {
    var b = nbi(), c = nbi();
    this.divRemTo(a, b, c);
    return [b, c]
}

function bnpDMultiply(a) {
    this[this.t] = this.am(0, a - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp()
}

function bnpDAddOffset(a, b) {
    if (0 != a) {
        for (; this.t <= b;) this[this.t++] = 0;
        for (this[b] += a; this[b] >= this.DV;) this[b] -= this.DV, ++b >= this.t && (this[this.t++] = 0), ++this[b]
    }
}

function NullExp() {
}

function nNop(a) {
    return a
}

function nMulTo(a, b, c) {
    a.multiplyTo(b, c)
}

function nSqrTo(a, b) {
    a.squareTo(b)
}

NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;

function bnPow(a) {
    return this.exp(a, new NullExp)
}

function bnpMultiplyLowerTo(a, b, c) {
    var d = Math.min(this.t + a.t, b);
    c.s = 0;
    for (c.t = d; 0 < d;) c[--d] = 0;
    var e;
    for (e = c.t - this.t; d < e; ++d) c[d + this.t] = this.am(0, a[d], c, d, 0, this.t);
    for (e = Math.min(a.t, b); d < e; ++d) this.am(0, a[d], c, d, 0, b - d);
    c.clamp()
}

function bnpMultiplyUpperTo(a, b, c) {
    --b;
    var d = c.t = this.t + a.t - b;
    for (c.s = 0; 0 <= --d;) c[d] = 0;
    for (d = Math.max(b - this.t, 0); d < a.t; ++d) c[this.t + d - b] = this.am(b - d, a[d], c, 0, 0, this.t + d - b);
    c.clamp();
    c.drShiftTo(1, c)
}

function Barrett(a) {
    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger.ONE.dlShiftTo(2 * a.t, this.r2);
    this.mu = this.r2.divide(a);
    this.m = a
}

function barrettConvert(a) {
    if (0 > a.s || a.t > 2 * this.m.t) return a.mod(this.m);
    if (0 > a.compareTo(this.m)) return a;
    var b = nbi();
    a.copyTo(b);
    this.reduce(b);
    return b
}

function barrettRevert(a) {
    return a
}

function barrettReduce(a) {
    a.drShiftTo(this.m.t - 1, this.r2);
    a.t > this.m.t + 1 && (a.t = this.m.t + 1, a.clamp());
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    for (this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); 0 > a.compareTo(this.r2);) a.dAddOffset(1, this.m.t + 1);
    for (a.subTo(this.r2, a); 0 <= a.compareTo(this.m);) a.subTo(this.m, a)
}

function barrettSqrTo(a, b) {
    a.squareTo(b);
    this.reduce(b)
}

function barrettMulTo(a, b, c) {
    a.multiplyTo(b, c);
    this.reduce(c)
}

Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;

function bnModPow(a, b) {
    var c = a.bitLength(), d = nbv(1);
    if (0 >= c) return d;
    var e = 18 > c ? 1 : 48 > c ? 3 : 144 > c ? 4 : 768 > c ? 5 : 6;
    var g = 8 > c ? new Classic(b) : b.isEven() ? new Barrett(b) : new Montgomery(b);
    var h = [], f = 3, m = e - 1, p = (1 << e) - 1;
    h[1] = g.convert(this);
    if (1 < e) for (c = nbi(), g.sqrTo(h[1], c); f <= p;) h[f] = nbi(), g.mulTo(c, h[f - 2], h[f]), f += 2;
    for (var k = a.t - 1, n, q = !0, l = nbi(), c = nbits(a[k]) - 1; 0 <= k;) {
        c >= m ? n = a[k] >> c - m & p : (n = (a[k] & (1 << c + 1) - 1) << m - c, 0 < k && (n |= a[k - 1] >> this.DB + c - m));
        for (f = e; 0 == (n & 1);) n >>= 1, --f;
        0 > (c -= f) && (c += this.DB, --k);
        if (q) h[n].copyTo(d),
            q = !1; else {
            for (; 1 < f;) g.sqrTo(d, l), g.sqrTo(l, d), f -= 2;
            0 < f ? g.sqrTo(d, l) : (f = d, d = l, l = f);
            g.mulTo(l, h[n], d)
        }
        for (; 0 <= k && 0 == (a[k] & 1 << c);) g.sqrTo(d, l), f = d, d = l, l = f, 0 > --c && (c = this.DB - 1, --k)
    }
    return g.revert(d)
}

function bnGCD(a) {
    var b = 0 > this.s ? this.negate() : this.clone();
    a = 0 > a.s ? a.negate() : a.clone();
    if (0 > b.compareTo(a)) {
        var c = b, b = a;
        a = c
    }
    var c = b.getLowestSetBit(), d = a.getLowestSetBit();
    if (0 > d) return b;
    c < d && (d = c);
    0 < d && (b.rShiftTo(d, b), a.rShiftTo(d, a));
    for (; 0 < b.signum();) 0 < (c = b.getLowestSetBit()) && b.rShiftTo(c, b), 0 < (c = a.getLowestSetBit()) && a.rShiftTo(c, a), 0 <= b.compareTo(a) ? (b.subTo(a, b), b.rShiftTo(1, b)) : (a.subTo(b, a), a.rShiftTo(1, a));
    0 < d && a.lShiftTo(d, a);
    return a
}

function bnpModInt(a) {
    if (0 >= a) return 0;
    var b = this.DV % a, c = 0 > this.s ? a - 1 : 0;
    if (0 < this.t) if (0 == b) c = this[0] % a; else for (var d = this.t - 1; 0 <= d; --d) c = (b * c + this[d]) % a;
    return c
}

function bnModInverse(a) {
    var b = a.isEven();
    if (this.isEven() && b || 0 == a.signum()) return BigInteger.ZERO;
    for (var c = a.clone(), d = this.clone(), e = nbv(1), g = nbv(0), h = nbv(0), f = nbv(1); 0 != c.signum();) {
        for (; c.isEven();) c.rShiftTo(1, c), b ? (e.isEven() && g.isEven() || (e.addTo(this, e), g.subTo(a, g)), e.rShiftTo(1, e)) : g.isEven() || g.subTo(a, g), g.rShiftTo(1, g);
        for (; d.isEven();) d.rShiftTo(1, d), b ? (h.isEven() && f.isEven() || (h.addTo(this, h), f.subTo(a, f)), h.rShiftTo(1, h)) : f.isEven() || f.subTo(a, f), f.rShiftTo(1, f);
        0 <= c.compareTo(d) ?
            (c.subTo(d, c), b && e.subTo(h, e), g.subTo(f, g)) : (d.subTo(c, d), b && h.subTo(e, h), f.subTo(g, f))
    }
    if (0 != d.compareTo(BigInteger.ONE)) return BigInteger.ZERO;
    if (0 <= f.compareTo(a)) return f.subtract(a);
    if (0 > f.signum()) f.addTo(a, f); else return f;
    return 0 > f.signum() ? f.add(a) : f
}

var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727,
        733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
    lplim = 67108864 / lowprimes[lowprimes.length - 1];

function bnIsProbablePrime(a) {
    var b, c = this.abs();
    if (1 == c.t && c[0] <= lowprimes[lowprimes.length - 1]) {
        for (b = 0; b < lowprimes.length; ++b) if (c[0] == lowprimes[b]) return !0;
        return !1
    }
    if (c.isEven()) return !1;
    for (b = 1; b < lowprimes.length;) {
        for (var d = lowprimes[b], e = b + 1; e < lowprimes.length && d < lplim;) d *= lowprimes[e++];
        for (d = c.modInt(d); b < e;) if (0 == d % lowprimes[b++]) return !1
    }
    return c.millerRabin(a)
}

function bnpMillerRabin(a) {
    var b = this.subtract(BigInteger.ONE), c = b.getLowestSetBit();
    if (0 >= c) return !1;
    var d = b.shiftRight(c);
    a = a + 1 >> 1;
    a > lowprimes.length && (a = lowprimes.length);
    for (var e = nbi(), g = 0; g < a; ++g) {
        e.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
        var h = e.modPow(d, this);
        if (0 != h.compareTo(BigInteger.ONE) && 0 != h.compareTo(b)) {
            for (var f = 1; f++ < c && 0 != h.compareTo(b);) if (h = h.modPowInt(2, this), 0 == h.compareTo(BigInteger.ONE)) return !1;
            if (0 != h.compareTo(b)) return !1
        }
    }
    return !0
}

BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
BigInteger.prototype.square = bnSquare;


function Arcfour() {
    this.j = this.i = 0;
    this.S = []
}

function ARC4init(b) {
    var a, c;
    for (a = 0; 256 > a; ++a) this.S[a] = a;
    for (a = c = 0; 256 > a; ++a) {
        c = c + this.S[a] + b[a % b.length] & 255;
        var d = this.S[a];
        this.S[a] = this.S[c];
        this.S[c] = d
    }
    this.j = this.i = 0
}

function ARC4next() {
    this.i = this.i + 1 & 255;
    this.j = this.j + this.S[this.i] & 255;
    var b = this.S[this.i];
    this.S[this.i] = this.S[this.j];
    this.S[this.j] = b;
    return this.S[b + this.S[this.i] & 255]
}

Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;

function prng_newstate() {
    return new Arcfour
}

var rng_psize = 256;


var rng_state, rng_pool, rng_pptr;

function rng_seed_int(a) {
    rng_pool[rng_pptr++] ^= a & 255;
    rng_pool[rng_pptr++] ^= a >> 8 & 255;
    rng_pool[rng_pptr++] ^= a >> 16 & 255;
    rng_pool[rng_pptr++] ^= a >> 24 & 255;
    rng_pptr >= rng_psize && (rng_pptr -= rng_psize)
}

function rng_seed_time() {
    rng_seed_int((new Date).getTime())
}

if (null == rng_pool) {
    rng_pool = [];
    rng_pptr = 0;
    var t;
    if (window.crypto && window.crypto.getRandomValues) {
        var ua = new Uint8Array(32);
        window.crypto.getRandomValues(ua);
        for (t = 0; 32 > t; ++t) rng_pool[rng_pptr++] = ua[t]
    }
    if ("Netscape" == navigator.appName && "5" > navigator.appVersion && window.crypto) {
        var z = window.crypto.random(32);
        for (t = 0; t < z.length; ++t) rng_pool[rng_pptr++] = z.charCodeAt(t) & 255
    }
    for (; rng_pptr < rng_psize;) t = Math.floor(65536 * Math.random()), rng_pool[rng_pptr++] = t >>> 8, rng_pool[rng_pptr++] = t & 255;
    rng_pptr = 0;
    rng_seed_time()
}

function rng_get_byte() {
    if (null == rng_state) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) rng_pool[rng_pptr] = 0;
        rng_pptr = 0
    }
    return rng_state.next()
}

function rng_get_bytes(a) {
    var b;
    for (b = 0; b < a.length; ++b) a[b] = rng_get_byte()
}

function SecureRandom() {
}

SecureRandom.prototype.nextBytes = rng_get_bytes;


function ECFieldElementFp(a, b) {
    this.x = b;
    this.q = a
}

function feFpEquals(a) {
    return a == this ? !0 : this.q.equals(a.q) && this.x.equals(a.x)
}

function feFpToBigInteger() {
    return this.x
}

function feFpNegate() {
    return new ECFieldElementFp(this.q, this.x.negate().mod(this.q))
}

function feFpAdd(a) {
    return new ECFieldElementFp(this.q, this.x.add(a.toBigInteger()).mod(this.q))
}

function feFpSubtract(a) {
    return new ECFieldElementFp(this.q, this.x.subtract(a.toBigInteger()).mod(this.q))
}

function feFpMultiply(a) {
    return new ECFieldElementFp(this.q, this.x.multiply(a.toBigInteger()).mod(this.q))
}

function feFpSquare() {
    return new ECFieldElementFp(this.q, this.x.square().mod(this.q))
}

function feFpDivide(a) {
    return new ECFieldElementFp(this.q, this.x.multiply(a.toBigInteger().modInverse(this.q)).mod(this.q))
}

ECFieldElementFp.prototype.equals = feFpEquals;
ECFieldElementFp.prototype.toBigInteger = feFpToBigInteger;
ECFieldElementFp.prototype.negate = feFpNegate;
ECFieldElementFp.prototype.add = feFpAdd;
ECFieldElementFp.prototype.subtract = feFpSubtract;
ECFieldElementFp.prototype.multiply = feFpMultiply;
ECFieldElementFp.prototype.square = feFpSquare;
ECFieldElementFp.prototype.divide = feFpDivide;

function ECPointFp(a, b, c, d) {
    this.curve = a;
    this.x = b;
    this.y = c;
    this.z = null == d ? BigInteger.ONE : d;
    this.zinv = null
}

function pointFpGetX() {
    null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q));
    var a = this.x.toBigInteger().multiply(this.zinv);
    this.curve.reduce(a);
    return this.curve.fromBigInteger(a)
}

function pointFpGetY() {
    null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q));
    var a = this.y.toBigInteger().multiply(this.zinv);
    this.curve.reduce(a);
    return this.curve.fromBigInteger(a)
}

function pointFpEquals(a) {
    return a == this ? !0 : this.isInfinity() ? a.isInfinity() : a.isInfinity() ? this.isInfinity() : a.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(a.z)).mod(this.curve.q).equals(BigInteger.ZERO) ? a.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(a.z)).mod(this.curve.q).equals(BigInteger.ZERO) : !1
}

function pointFpIsInfinity() {
    return null == this.x && null == this.y ? !0 : this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO)
}

function pointFpNegate() {
    return new ECPointFp(this.curve, this.x, this.y.negate(), this.z)
}

function pointFpAdd(a) {
    if (this.isInfinity()) return a;
    if (a.isInfinity()) return this;
    var b = a.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(a.z)).mod(this.curve.q),
        c = a.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(a.z)).mod(this.curve.q);
    if (BigInteger.ZERO.equals(c)) return BigInteger.ZERO.equals(b) ? this.twice() : this.curve.getInfinity();
    var d = new BigInteger("3"), e = this.x.toBigInteger(), f = this.y.toBigInteger();
    a.x.toBigInteger();
    a.y.toBigInteger();
    var g = c.square(), h = g.multiply(c), e = e.multiply(g), g = b.square().multiply(this.z),
        c = g.subtract(e.shiftLeft(1)).multiply(a.z).subtract(h).multiply(c).mod(this.curve.q),
        b = e.multiply(d).multiply(b).subtract(f.multiply(h)).subtract(g.multiply(b)).multiply(a.z).add(b.multiply(h)).mod(this.curve.q);
    a = h.multiply(this.z).multiply(a.z).mod(this.curve.q);
    return new ECPointFp(this.curve, this.curve.fromBigInteger(c), this.curve.fromBigInteger(b), a)
}

function pointFpTwice() {
    if (this.isInfinity()) return this;
    if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
    var a = new BigInteger("3"), b = this.x.toBigInteger(), c = this.y.toBigInteger(), d = c.multiply(this.z),
        e = d.multiply(c).mod(this.curve.q), c = this.curve.a.toBigInteger(), f = b.square().multiply(a);
    BigInteger.ZERO.equals(c) || (f = f.add(this.z.square().multiply(c)));
    f = f.mod(this.curve.q);
    c = f.square().subtract(b.shiftLeft(3).multiply(e)).shiftLeft(1).multiply(d).mod(this.curve.q);
    a = f.multiply(a).multiply(b).subtract(e.shiftLeft(1)).shiftLeft(2).multiply(e).subtract(f.square().multiply(f)).mod(this.curve.q);
    d = d.square().multiply(d).shiftLeft(3).mod(this.curve.q);
    return new ECPointFp(this.curve, this.curve.fromBigInteger(c), this.curve.fromBigInteger(a), d)
}

function pointFpMultiply(a) {
    if (this.isInfinity()) return this;
    if (0 == a.signum()) return this.curve.getInfinity();
    var b = a.multiply(new BigInteger("3")), c = this.negate(), d = this, e;
    for (e = b.bitLength() - 2; 0 < e; --e) {
        var d = d.twice(), f = b.testBit(e), g = a.testBit(e);
        f != g && (d = d.add(f ? this : c))
    }
    return d
}

function pointFpMultiplyTwo(a, b, c) {
    var d = a.bitLength() > c.bitLength() ? a.bitLength() - 1 : c.bitLength() - 1;
    for (var e = this.curve.getInfinity(), f = this.add(b); 0 <= d;) e = e.twice(), a.testBit(d) ? e = c.testBit(d) ? e.add(f) : e.add(this) : c.testBit(d) && (e = e.add(b)), --d;
    return e
}

ECPointFp.prototype.getX = pointFpGetX;
ECPointFp.prototype.getY = pointFpGetY;
ECPointFp.prototype.equals = pointFpEquals;
ECPointFp.prototype.isInfinity = pointFpIsInfinity;
ECPointFp.prototype.negate = pointFpNegate;
ECPointFp.prototype.add = pointFpAdd;
ECPointFp.prototype.twice = pointFpTwice;
ECPointFp.prototype.multiply = pointFpMultiply;
ECPointFp.prototype.multiplyTwo = pointFpMultiplyTwo;

function ECCurveFp(a, b, c) {
    this.q = a;
    this.a = this.fromBigInteger(b);
    this.b = this.fromBigInteger(c);
    this.infinity = new ECPointFp(this, null, null);
    this.reducer = new Barrett(this.q)
}

function curveFpGetQ() {
    return this.q
}

function curveFpGetA() {
    return this.a
}

function curveFpGetB() {
    return this.b
}

function curveFpEquals(a) {
    return a == this ? !0 : this.q.equals(a.q) && this.a.equals(a.a) && this.b.equals(a.b)
}

function curveFpGetInfinity() {
    return this.infinity
}

function curveFpFromBigInteger(a) {
    return new ECFieldElementFp(this.q, a)
}

function curveReduce(a) {
    this.reducer.reduce(a)
}

function curveFpDecodePointHex(a) {
    switch (parseInt(a.substr(0, 2), 16)) {
        case 0:
            return this.infinity;
        case 2:
        case 3:
            return null;
        case 4:
        case 6:
        case 7:
            var b = (a.length - 2) / 2, c = a.substr(2, b);
            a = a.substr(b + 2, b);
            return new ECPointFp(this, this.fromBigInteger(new BigInteger(c, 16)), this.fromBigInteger(new BigInteger(a, 16)));
        default:
            return null
    }
}

function curveFpEncodePointHex(a) {
    if (a.isInfinity()) return "00";
    var b = a.getX().toBigInteger().toString(16);
    a = a.getY().toBigInteger().toString(16);
    var c = this.getQ().toString(16).length;
    for (0 != c % 2 && c++; b.length < c;) b = "0" + b;
    for (; a.length < c;) a = "0" + a;
    return "04" + b + a
}

ECCurveFp.prototype.getQ = curveFpGetQ;
ECCurveFp.prototype.getA = curveFpGetA;
ECCurveFp.prototype.getB = curveFpGetB;
ECCurveFp.prototype.equals = curveFpEquals;
ECCurveFp.prototype.getInfinity = curveFpGetInfinity;
ECCurveFp.prototype.fromBigInteger = curveFpFromBigInteger;
ECCurveFp.prototype.reduce = curveReduce;
ECCurveFp.prototype.decodePointHex = curveFpDecodePointHex;
ECCurveFp.prototype.encodePointHex = curveFpEncodePointHex;

function X9ECParameters(a, b, c, d) {
    this.curve = a;
    this.g = b;
    this.n = c;
    this.h = d
}

function x9getCurve() {
    return this.curve
}

function x9getG() {
    return this.g
}

function x9getN() {
    return this.n
}

function x9getH() {
    return this.h
}

X9ECParameters.prototype.getCurve = x9getCurve;
X9ECParameters.prototype.getG = x9getG;
X9ECParameters.prototype.getN = x9getN;
X9ECParameters.prototype.getH = x9getH;

function fromHex(a) {
    return new BigInteger(a, 16)
}

function secp128r1() {
    var a = fromHex("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF"), b = fromHex("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC"),
        c = fromHex("E87579C11079F43DD824993C2CEE5ED3"), d = fromHex("FFFFFFFE0000000075A30D1B9038A115"),
        e = BigInteger.ONE, a = new ECCurveFp(a, b, c),
        b = a.decodePointHex("04161FF7528B899B2D0C28607CA52C5B86CF5AC8395BAFEB13C02DA292DDED7A83");
    return new X9ECParameters(a, b, d, e)
}

function secp160k1() {
    var a = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73"), b = BigInteger.ZERO, c = fromHex("7"),
        d = fromHex("0100000000000000000001B8FA16DFAB9ACA16B6B3"), e = BigInteger.ONE, a = new ECCurveFp(a, b, c),
        b = a.decodePointHex("043B4C382CE37AA192A4019E763036F4F5DD4D7EBB938CF935318FDCED6BC28286531733C3F03C4FEE");
    return new X9ECParameters(a, b, d, e)
}

function secp160r1() {
    var a = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF"),
        b = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC"),
        c = fromHex("1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45"),
        d = fromHex("0100000000000000000001F4C8F927AED3CA752257"), e = BigInteger.ONE, a = new ECCurveFp(a, b, c),
        b = a.decodePointHex("044A96B5688EF573284664698968C38BB913CBFC8223A628553168947D59DCC912042351377AC5FB32");
    return new X9ECParameters(a, b, d, e)
}

function secp192k1() {
    var a = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37"), b = BigInteger.ZERO, c = fromHex("3"),
        d = fromHex("FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D"), e = BigInteger.ONE, a = new ECCurveFp(a, b, c),
        b = a.decodePointHex("04DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D");
    return new X9ECParameters(a, b, d, e)
}

function secp192r1() {
    var a = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF"),
        b = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC"),
        c = fromHex("64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1"),
        d = fromHex("FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831"), e = BigInteger.ONE, a = new ECCurveFp(a, b, c),
        b = a.decodePointHex("04188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF101207192B95FFC8DA78631011ED6B24CDD573F977A11E794811");
    return new X9ECParameters(a, b, d, e)
}

function secp224r1() {
    var a = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001"),
        b = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE"),
        c = fromHex("B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4"),
        d = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D"), e = BigInteger.ONE,
        a = new ECCurveFp(a, b, c),
        b = a.decodePointHex("04B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34");
    return new X9ECParameters(a,
        b, d, e)
}

function secp256r1() {
    var a = fromHex("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF"),
        b = fromHex("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC"),
        c = fromHex("5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B"),
        d = fromHex("FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551"), e = BigInteger.ONE,
        a = new ECCurveFp(a, b, c),
        b = a.decodePointHex("046B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C2964FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5");
    return new X9ECParameters(a,
        b, d, e)
}

function getSECCurveByName(a) {
    return "secp128r1" == a ? secp128r1() : "secp160k1" == a ? secp160k1() : "secp160r1" == a ? secp160r1() : "secp192k1" == a ? secp192k1() : "secp192r1" == a ? secp192r1() : "secp224r1" == a ? secp224r1() : "secp256r1" == a ? secp256r1() : null
};

var nSaferJS = nSaferJS || function (h, q) {
    var f = {}, l = f.lib = {}, g = l.Base = function () {
        function a() {
        }

        return {
            extend   : function (c) {
                a.prototype = this;
                var b = new a;
                c && b.mixIn(c);
                b.hasOwnProperty("init") || (b.init = function () {
                    b.$super.init.apply(this, arguments)
                });
                b.init.prototype = b;
                b.$super = this;
                return b
            }, create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            }, init  : function () {
            }, mixIn : function (a) {
                for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone    : function () {
                return this.init.prototype.extend(this)
            }
        }
    }(), k = l.WordArray = g.extend({
        init       : function (a, c) {
            a = this.words = a || [];
            this.sigBytes = c != q ? c : 4 * a.length
        }, toString: function (a) {
            return (a || r).stringify(this)
        }, concat  : function (a) {
            var c = this.words, b = a.words, d = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (d % 4) for (var e = 0; e < a; e++) c[d + e >>> 2] |= (b[e >>> 2] >>> 24 - e % 4 * 8 & 255) << 24 - (d + e) % 4 * 8; else if (65535 < b.length) for (e = 0; e < a; e += 4) c[d + e >>> 2] = b[e >>> 2]; else c.push.apply(c, b);
            this.sigBytes += a;
            return this
        }, clamp   : function () {
            var a =
                this.words, c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - c % 4 * 8;
            a.length = h.ceil(c / 4)
        }, clone   : function () {
            var a = g.clone.call(this);
            a.words = this.words.slice(0);
            return a
        }, random  : function (a) {
            for (var c = [], b = 0; b < a; b += 4) c.push(4294967296 * h.random() | 0);
            return new k.init(c, a)
        }
    }), m = f.enc = {}, r = m.Hex = {
        stringify: function (a) {
            var c = a.words;
            a = a.sigBytes;
            for (var b = [], d = 0; d < a; d++) {
                var e = c[d >>> 2] >>> 24 - d % 4 * 8 & 255;
                b.push((e >>> 4).toString(16));
                b.push((e & 15).toString(16))
            }
            return b.join("")
        }, parse : function (a) {
            for (var c = a.length,
                     b = [], d = 0; d < c; d += 2) b[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - d % 8 * 4;
            return new k.init(b, c / 2)
        }
    }, n = m.Latin1 = {
        stringify: function (a) {
            var c = a.words;
            a = a.sigBytes;
            for (var b = [], d = 0; d < a; d++) b.push(String.fromCharCode(c[d >>> 2] >>> 24 - d % 4 * 8 & 255));
            return b.join("")
        }, parse : function (a) {
            for (var c = a.length, b = [], d = 0; d < c; d++) b[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - d % 4 * 8;
            return new k.init(b, c)
        }
    }, t = m.Utf8 = {
        stringify: function (a) {
            try {
                return decodeURIComponent(escape(n.stringify(a)))
            } catch (c) {
                throw Error("Malformed UTF-8 data");
            }
        }, parse : function (a) {
            return n.parse(unescape(encodeURIComponent(a)))
        }
    }, p = l.BufferedBlockAlgorithm = g.extend({
        reset            : function () {
            this._data = new k.init;
            this._nDataBytes = 0
        }, _append       : function (a) {
            "string" == typeof a && (a = t.parse(a));
            this._data.concat(a);
            this._nDataBytes += a.sigBytes
        }, _process      : function (a) {
            var c, b = this._data, d = b.words, e = b.sigBytes, g = this.blockSize, f = e / (4 * g),
                f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
            a = f * g;
            e = h.min(4 * a, e);
            if (a) {
                for (c = 0; c < a; c += g) this._doProcessBlock(d, c);
                c = d.splice(0, a);
                b.sigBytes -=
                    e
            }
            return new k.init(c, e)
        }, clone         : function () {
            var a = g.clone.call(this);
            a._data = this._data.clone();
            return a
        }, _minBufferSize: 0
    });
    l.Hasher = p.extend({
        cfg                 : g.extend(), init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset            : function () {
            p.reset.call(this);
            this._doReset()
        }, update           : function (a) {
            this._append(a);
            this._process();
            return this
        }, finalize         : function (a) {
            a && this._append(a);
            return this._doFinalize()
        }, blockSize        : 16, _createHelper: function (a) {
            return function (c, b) {
                return (new a.init(b)).finalize(c)
            }
        }, _createHmacHelper: function (a) {
            return function (c,
                             b) {
                return (new u.HMAC.init(a, b)).finalize(c)
            }
        }
    });
    var u = f.algo = {};
    return f
}(Math);

(function () {
    var h = nSaferJS, k = h.lib.WordArray;
    h.enc.Base64 = {
        stringify: function (b) {
            var e = b.words, f = b.sigBytes, c = this._map;
            b.clamp();
            b = [];
            for (var a = 0; a < f; a += 3) for (var d = (e[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | e[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, g = 0; 4 > g && a + .75 * g < f; g++) b.push(c.charAt(d >>> 6 * (3 - g) & 63));
            if (e = c.charAt(64)) for (; b.length % 4;) b.push(e);
            return b.join("")
        }, parse : function (b) {
            var e = b.length, f = this._map, c = f.charAt(64);
            c && (c = b.indexOf(c), -1 != c && (e = c));
            for (var c = [], a = 0, d = 0; d < e; d++) if (d %
                4) {
                var g = f.indexOf(b.charAt(d - 1)) << d % 4 * 2, h = f.indexOf(b.charAt(d)) >>> 6 - d % 4 * 2;
                c[a >>> 2] |= (g | h) << 24 - a % 4 * 8;
                a++
            }
            return k.create(c, a)
        }, _map  : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();

nSaferJS.lib.Cipher || function (t) {
    var f = nSaferJS, e = f.lib, h = e.Base, k = e.WordArray, p = e.BufferedBlockAlgorithm, q = f.enc.Base64,
        u = f.algo.EvpKDF, m = e.Cipher = p.extend({
            cfg                                                                            : h.extend(), createEncryptor                                               : function (a, b) {
                return this.create(this._ENC_XFORM_MODE, a, b)
            }, createDecryptor                                                             : function (a, b) {
                return this.create(this._DEC_XFORM_MODE, a, b)
            }, init                                                                        : function (a, b, c) {
                this.cfg = this.cfg.extend(c);
                this._xformMode = a;
                this._key = b;
                this.reset()
            }, reset                                                                       : function () {
                p.reset.call(this);
                this._doReset()
            }, process                                                                     : function (a) {
                this._append(a);
                return this._process()
            }, finalize                                                                    : function (a) {
                a && this._append(a);
                return this._doFinalize()
            }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function () {
                return function (a) {
                    return {
                        encrypt   : function (b, c, d) {
                            return ("string" == typeof c ? r : g).encrypt(a, b, c, d)
                        }, decrypt: function (b, c, d) {
                            return ("string" == typeof c ? r : g).decrypt(a, b, c, d)
                        }
                    }
                }
            }()
        });
    e.StreamCipher = m.extend({
        _doFinalize : function () {
            return this._process(!0)
        }, blockSize: 1
    });
    var l = f.mode = {}, v = e.BlockCipherMode = h.extend({
        createEncryptor   : function (a,
                                      b) {
            return this.Encryptor.create(a, b)
        }, createDecryptor: function (a, b) {
            return this.Decryptor.create(a, b)
        }, init           : function (a, b) {
            this._cipher = a;
            this._iv = b
        }
    }), l = l.CBC = function () {
        function a(a, b, w) {
            var c;
            (c = this._iv) ? this._iv = t : c = this._prevBlock;
            for (var d = 0; d < w; d++) a[b + d] ^= c[d]
        }

        var b = v.extend();
        b.Encryptor = b.extend({
            processBlock: function (b, d) {
                var c = this._cipher, e = c.blockSize;
                a.call(this, b, d, e);
                c.encryptBlock(b, d);
                this._prevBlock = b.slice(d, d + e)
            }
        });
        b.Decryptor = b.extend({
            processBlock: function (b, d) {
                var c = this._cipher,
                    e = c.blockSize, f = b.slice(d, d + e);
                c.decryptBlock(b, d);
                a.call(this, b, d, e);
                this._prevBlock = f
            }
        });
        return b
    }(), x = (f.pad = {}).Pkcs7 = {
        pad     : function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, e = [], f = 0; f < c; f += 4) e.push(d);
            c = k.create(e, c);
            a.concat(c)
        }, unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    e.BlockCipher = m.extend({
        cfg               : m.cfg.extend({mode: l, padding: x}), reset: function () {
            m.reset.call(this);
            var a = this.cfg;
            var b = a.iv, c = a.mode;
            this._xformMode == this._ENC_XFORM_MODE ? a = c.createEncryptor :
                (a = c.createDecryptor, this._minBufferSize = 1);
            this._mode = a.call(c, this, b && b.words)
        }, _doProcessBlock: function (a, b) {
            this._mode.processBlock(a, b)
        }, _doFinalize    : function () {
            var a = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                a.pad(this._data, this.blockSize);
                var b = this._process(!0)
            } else b = this._process(!0), a.unpad(b);
            return b
        }, blockSize      : 4
    });
    var n = e.CipherParams = h.extend({
        init       : function (a) {
            this.mixIn(a)
        }, toString: function (a) {
            return (a || this.formatter).stringify(this)
        }
    }), l = (f.format = {}).OpenSSL = {
        stringify: function (a) {
            var b =
                a.ciphertext;
            a = a.salt;
            return (a ? k.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(q)
        }, parse : function (a) {
            a = q.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = k.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({ciphertext: a, salt: c})
        }
    }, g = e.SerializableCipher = h.extend({
        cfg       : h.extend({format: l}), encrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            var e = a.createEncryptor(c, d);
            b = e.finalize(b);
            e = e.cfg;
            return n.create({
                ciphertext: b, key: c, iv: e.iv, algorithm: a, mode: e.mode,
                padding   : e.padding, blockSize: a.blockSize, formatter: d.format
            })
        }, decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this._parse(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        }, _parse : function (a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    }), f = (f.kdf = {}).OpenSSL = {
        execute: function (a, b, c, d) {
            d || (d = k.random(8));
            a = u.create({keySize: b + c}).compute(a, d);
            c = k.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({key: a, iv: c, salt: d})
        }
    }, r = e.PasswordBasedCipher = g.extend({
        cfg       : g.cfg.extend({kdf: f}),
        encrypt   : function (a, b, c, d) {
            d = this.cfg.extend(d);
            c = d.kdf.execute(c, a.keySize, a.ivSize);
            d.iv = c.iv;
            a = g.encrypt.call(this, a, b, c.key, d);
            a.mixIn(c);
            return a
        }, decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this._parse(b, d.format);
            c = d.kdf.execute(c, a.keySize, a.ivSize, b.salt);
            d.iv = c.iv;
            return g.decrypt.call(this, a, b, c.key, d)
        }
    })
}();
nSaferJS.pad.NoPadding = {
    pad     : function () {
    }, unpad: function () {
    }
};

(function () {
    function k(a) {
        return l[3][a >>> 24 & 255] ^ l[2][a >>> 16 & 255] ^ l[1][a >>> 8 & 255] ^ l[0][a & 255]
    }

    var m = nSaferJS, n = m.lib.BlockCipher,
        l = [[696885672, 92635524, 382128852, 331600848, 340021332, 487395612, 747413676, 621093156, 491606364, 54739776, 403181592, 504238620, 289493328, 1020063996, 181060296, 591618912, 671621160, 71581764, 536879136, 495817116, 549511392, 583197408, 147374280, 386339604, 629514660, 261063564, 50529024, 994800504, 999011256, 318968592, 314757840, 785310444, 809529456, 210534540, 1057960764, 680042664, 839004720,
            500027868, 919007988, 876900468, 751624428, 361075092, 185271048, 390550356, 474763356, 457921368, 1032696252, 16843008, 604250148, 470552604, 860058480, 411603096, 268439568, 214745292, 851636976, 432656856, 738992172, 667411428, 843215472, 58950528, 462132120, 297914832, 109478532, 164217288, 541089888, 272650320, 595829664, 734782440, 218956044, 914797236, 512660124, 256852812, 931640244, 441078360, 113689284, 944271480, 646357668, 302125584, 797942700, 365285844, 557932896, 63161280, 881111220, 21053760, 306336336, 1028485500, 227377548, 134742024,
            521081628, 428446104, 0, 420024600, 67371012, 323179344, 935850996, 566354400, 1036907004, 910586484, 789521196, 654779172, 813740208, 193692552, 235799052, 730571688, 578986656, 776888940, 327390096, 223166796, 692674920, 1011642492, 151585032, 168428040, 1066382268, 802153452, 868479984, 96846276, 126321540, 335810580, 1053750012, 608460900, 516870876, 772678188, 189481800, 436867608, 101057028, 553722144, 726360936, 642146916, 33686016, 902164980, 310547088, 176849544, 202113036, 864269232, 1045328508, 281071824, 977957496, 122110788, 377918100,
            633725412, 637936164, 8421504, 764256684, 533713884, 562143648, 805318704, 923218740, 781099692, 906375732, 352653588, 570565152, 940060728, 885321972, 663200676, 88424772, 206323788, 25264512, 701096424, 75792516, 394761108, 889532724, 197903304, 248431308, 1007431740, 826372464, 285282576, 130532292, 160006536, 893743476, 1003222008, 449499864, 952692984, 344232084, 424235352, 42107520, 80003268, 1070593020, 155795784, 956903736, 658989924, 12632256, 265274316, 398971860, 948482232, 252642060, 244220556, 37896768, 587408160, 293704080, 743202924,
            466342872, 612671652, 872689716, 834793968, 138952776, 46318272, 793731948, 1024274748, 755835180, 4210752, 1049539260, 1041117756, 1015853244, 29475264, 713728680, 982168248, 240009804, 356864340, 990589752, 483184860, 675831912, 1062171516, 478974108, 415813848, 172638792, 373707348, 927429492, 545300640, 768467436, 105267780, 897954228, 722150184, 625303908, 986379E3, 600040416, 965325240, 830583216, 529503132, 508449372, 969535992, 650568420, 847426224, 822161712, 717939432, 760045932, 525292380, 616882404, 817950960, 231588300, 143163528, 369496596,
            973746744, 407392344, 348442836, 574775904, 688464168, 117900036, 855847728, 684253416, 453710616, 84214020, 961114488, 276861072, 709517928, 705307176, 445289112], [943196208, 3894986976, 741149985, 2753988258, 3423588291, 3693006546, 2956166067, 3090712752, 2888798115, 1612726368, 1410680145, 3288844227, 1141130304, 1815039843, 1747667811, 1478183763, 3221472195, 1612857954, 808649523, 3023406513, 673777953, 2686484640, 3760374498, 2754054051, 3490956243, 2417066385, 269549841, 67503618, 471600144, 3158084784, 875955762, 1208699715, 3962556387,
            2282260608, 1814842464, 2821228704, 337053459, 3288646848, 336987666, 4097098992, 3221406402, 1141196097, 3760308705, 3558262482, 1010765619, 1010634033, 2349764226, 2551744656, 673712160, 1276005954, 4097230578, 1010699826, 2753922465, 4164536817, 202181889, 3693072339, 3625502928, 673909539, 1680229986, 2017086066, 606537507, 741281571, 4029792753, 1882342002, 1073889858, 3558130896, 1073824065, 3221274816, 1882407795, 1680295779, 2888600736, 2282457987, 4097296371, 2888666529, 2147516544, 471797523, 3356150466, 741084192, 2821360290, 875824176,
            3490890450, 134941443, 3962490594, 3895052769, 1545424209, 2484372624, 404228112, 4164471024, 1410811731, 2888732322, 134744064, 3288712641, 269681427, 3423456705, 2215020162, 3090778545, 4232040435, 2084392305, 3221340609, 808517937, 4097164785, 2282392194, 1747602018, 2956034481, 3490824657, 538968096, 3558328275, 131586, 539099682, 67372032, 1747470432, 1882276209, 67569411, 3625700307, 2619182481, 2551810449, 1612792161, 3158216370, 3827746530, 1478052177, 3692940753, 1343308113, 2417000592, 3692874960, 2551876242, 2686682019, 2821426083,
            3490758864, 2147582337, 202313475, 1141327683, 404359698, 3760440291, 3962359008, 2349698433, 3158282163, 2484504210, 2017151859, 1545358416, 2686616226, 2686550433, 1612923747, 539165475, 1275940161, 3356018880, 2619248274, 2619116688, 943327794, 202116096, 741215778, 3090844338, 1814974050, 2619314067, 1478117970, 4029858546, 2417132178, 4029924339, 1208568129, 2016954480, 3423390912, 336921873, 4164668403, 1882210416, 1949648241, 2084523891, 875889969, 269484048, 197379, 1680098400, 1814908257, 3288778434, 1949582448, 3558196689, 3023340720,
            3895118562, 134809857, 1949714034, 404293905, 4231974642, 1073758272, 269615634, 3760242912, 3158150577, 67437825, 4164602610, 65793, 4029726960, 673843746, 1545490002, 2821294497, 1410745938, 1073955651, 2214954369, 336856080, 2282326401, 2551942035, 2955968688, 3827680737, 1208502336, 2017020273, 2484570003, 4231843056, 471731730, 2147648130, 539033889, 2349632640, 404425491, 1545555795, 1949779827, 1410614352, 2956100274, 471665937, 606405921, 1276071747, 0, 1141261890, 3962424801, 1477986384, 1343373906, 3895184355, 2084458098, 3625634514,
            3356084673, 4231908849, 808452144, 2484438417, 1680164193, 1010568240, 3023472306, 3827614944, 3090910131, 2084326512, 202247682, 1343242320, 943262001, 606471714, 808583730, 2214888576, 1747536225, 2417197971, 876021555, 3827812323, 606340128, 2753856672, 3356216259, 1343439699, 134875650, 2215085955, 3625568721, 1275874368, 2147713923, 2349830019, 3423522498, 943393587, 1208633922, 3023538099], [2712152457, 2172913029, 3537114822, 3553629123, 1347687492, 287055117, 2695638156, 556016901, 1364991309, 1128268611, 270014472, 303832590, 1364201793,
            4043062476, 3267889866, 1667244867, 539502600, 1078199364, 538976256, 2442927501, 3772784832, 3806339778, 3234334920, 320083719, 2711889285, 2206994319, 50332419, 1937259339, 3015195531, 319820547, 3536851650, 3807129294, 1886400576, 2156661900, 859586319, 2695374984, 842019330, 3520863693, 4076091078, 1886663748, 3773574348, 2442401157, 50858763, 1398019911, 1348213836, 1398283083, 2981903757, 16777473, 539239428, 270277644, 1936732995, 2425886856, 269488128, 3234598092, 4075827906, 3520600521, 539765772, 3823380423, 1919955522, 2206204803,
            2476219275, 3520074177, 2189690502, 3251112393, 1616912448, 1347424320, 2745181059, 3823643595, 17566989, 2998154886, 2459704974, 1129058127, 3014932359, 1381505610, 3267626694, 1886926920, 2728666758, 303043074, 2745970575, 3520337349, 1633689921, 3284140995, 2964599940, 1094713665, 1380979266, 1903967565, 2173439373, 526344, 320610063, 2442664329, 0, 286791945, 263172, 1397756739, 4092868551, 3789562305, 4059839949, 1920218694, 590098191, 589571847, 2964336768, 2206731147, 34344462, 2745707403, 2728403586, 1651256910, 2475692931, 1095503181,
            1634216265, 1887190092, 17303817, 34081290, 3015458703, 3823906767, 4092605379, 3250849221, 2206467975, 269751300, 4076617422, 1617175620, 3537641166, 573320718, 1128794955, 303569418, 33818118, 555753729, 1667771211, 1650730566, 33554946, 4059313605, 2458915458, 2189953674, 789516, 3014669187, 1920745038, 3503296704, 1920481866, 1128531783, 2459178630, 3789825477, 572794374, 2155872384, 2712415629, 3554418639, 2711626113, 808464384, 859059975, 2729193102, 842282502, 286528773, 572531202, 808990728, 4042536132, 2745444231, 1094976837, 1078725708,
            2172649857, 3790088649, 2156135556, 2475956103, 825505029, 3284667339, 3268153038, 809253900, 1903178049, 286265601, 3284404167, 2173176201, 1903441221, 4093131723, 3537377994, 4042799304, 2425623684, 1364728137, 2189427330, 3234071748, 4093394895, 1095240009, 825768201, 1667508039, 3233808576, 3284930511, 3553892295, 2964863112, 51121935, 2190216846, 1111491138, 589308675, 2442137985, 1617701964, 3554155467, 2695111812, 808727556, 4059050433, 1078462536, 3267363522, 1668034383, 826031373, 556543245, 1077936192, 2998681230, 842808846, 2965126284,
            3250586049, 2728929930, 2998418058, 1112280654, 1364464965, 859323147, 3504086220, 1617438792, 1937522511, 2426150028, 3503823048, 1112017482, 1381242438, 1936996167, 2694848640, 3790351821, 1111754310, 2981377413, 589835019, 1633953093, 4076354250, 3823117251, 2981640585, 2981114241, 2476482447, 1381768782, 4059576777, 3806602950, 2997891714, 825241857, 3806866122, 1634479437, 1398546255, 3773048004, 4042272960, 3251375565, 2156398728, 303306246, 842545674, 1347950664, 3503559876, 1650467394, 556280073, 50595591, 858796803, 3773311176, 320346891,
            17040645, 1903704393, 2425360512, 1650993738, 573057546, 2459441802], [137377848, 3370182696, 220277805, 2258805798, 3485715471, 3469925406, 2209591347, 2293282872, 2409868335, 1080057888, 1162957845, 3351495687, 1145062404, 1331915823, 1264805931, 1263753243, 3284385795, 1113743394, 53686323, 2243015733, 153167913, 2158010400, 3269648418, 2275648551, 3285438483, 2173800465, 17895441, 100795398, 202382364, 2360392764, 103953462, 1262700555, 3487820847, 2290124808, 1281387564, 2292230184, 118690839, 3300967428, 101848086, 3304125492, 3267543042,
            1161905157, 3252805665, 3335705622, 255015999, 221330493, 2390920206, 2291177496, 136325160, 1312967694, 3337810998, 238173246, 2241963045, 3388078137, 218172429, 3486768159, 3369130008, 186853419, 1180853286, 1249015866, 119743527, 253963311, 3253858353, 1114796082, 1111638018, 3302020116, 1094795265, 3233857536, 1131638835, 1197696039, 2359340076, 2340653067, 3354653751, 2376182829, 2155905024, 252910623, 3401762826, 203435052, 2325915690, 70267956, 3268595730, 184748043, 3470978094, 3387025449, 1297177629, 2224067604, 135272472, 3371235384,
            1196643351, 2393025582, 134219784, 3317810181, 51580947, 3452029965, 2256700422, 2310125625, 3488873535, 1299283005, 3250700289, 20000817, 3320968245, 2323810314, 1247963178, 2175905841, 3251752977, 2105376, 3352548375, 33685506, 35790882, 67109892, 1214277672, 1097953329, 117638151, 3419658267, 2375130141, 2308020249, 1096900641, 2394078270, 3336758310, 1230067737, 3453082653, 1095847953, 2156957712, 3436239900, 2324863002, 2208538659, 2342758443, 3234910224, 2172747777, 251857935, 1195590663, 168957978, 3286491171, 3437292588, 2374077453, 2410921023,
            2257753110, 1265858619, 1280334876, 2191695906, 2174853153, 1130586147, 52633635, 1296124941, 3368077320, 2391972894, 2358287388, 171063354, 201329676, 237120558, 2326968378, 1315073070, 2408815647, 1246910490, 3270701106, 2190643218, 3287543859, 1229015049, 1215330360, 3435187212, 85005333, 3421763643, 1081110576, 1165063221, 1332968511, 87110709, 1052688, 50528259, 1147167780, 1298230317, 3334652934, 1148220468, 3318862869, 2226172980, 3403868202, 151062537, 1181905974, 152115225, 3472030782, 1077952512, 34738194, 3235962912, 2377235517, 83952645,
            3404920890, 16842753, 3237015600, 170010666, 1314020382, 2309072937, 1179800598, 1128480771, 2239857669, 68162580, 2306967561, 2341705755, 2159063088, 3319915557, 1212172296, 1232173113, 2274595863, 3438345276, 236067870, 2189590530, 18948129, 2357234700, 185800731, 1330863135, 1198748727, 1146115092, 2192748594, 219225117, 86058021, 1329810447, 0, 1178747910, 3454135341, 1213224984, 1112690706, 3420710955, 1316125758, 3402815514, 3384920073, 3455188029, 3158064, 2240910357, 1164010533, 204487740, 2259858486, 3303072804, 2343811131, 1282440252,
            235015182, 1079005200, 154220601, 102900774, 36843570, 2223014916, 1231120425, 2207485971, 120796215, 3353601063, 69215268, 2225120292, 3418605579, 1129533459, 167905290, 2273543175, 3385972761, 1279282188, 2206433283, 2407762959, 3468872718, 187906107, 1245857802, 2276701239]],
        p = [2654435769, 1013904243, 2027808486, 4055616972, 3816266649, 3337566003, 2380164711, 465362127, 930724254, 1861448508, 3722897016, 3150826737, 2006686179, 4013372358, 3731777421, 3168587547],
        q = m.algo.SEED = n.extend({
            _doReset                           : function () {
                for (var a = this._key, d = a.words[0],
                         h = a.words[1], e = a.words[2], a = a.words[3], f = [], c = 0; 16 > c; c++) if (f[c] = [], f[c][0] = k(d + e - p[c]), f[c][1] = k(h - a + p[c]), 0 == c % 2) var g = d,
                    d = d >>> 8 | h << 24,
                    h = h >>> 8 | g << 24; else g = e, e = e << 8 | a >>> 24, a = a << 8 | g >>> 24;
                this._roundKeys = f;
                this._invRoundKeys = f.slice().reverse()
            }, encryptBlock                    : function (a, d) {
                this._doCryptBlock(a, d, this._roundKeys)
            }, decryptBlock                    : function (a, d) {
                this._doCryptBlock(a, d, this._invRoundKeys)
            }, _doCryptBlock                   : function (a, d, h) {
                for (var e = a.slice(d, d + 2), f = a.slice(d + 2, d + 4), c = [e, f], e = 0; 16 > e; e++) {
                    var f = h[e], g = c[0], c =
                        c[1], b = [];
                    b[0] = c[0] ^ f[0];
                    b[1] = c[1] ^ f[1];
                    b[1] ^= b[0];
                    b[1] = k(b[1]);
                    b[0] += b[1];
                    b[0] = k(b[0]);
                    b[1] += b[0];
                    b[1] = k(b[1]);
                    b[0] += b[1];
                    g[0] ^= b[0];
                    g[1] ^= b[1];
                    c = [c, g]
                }
                c.reverse();
                a.splice(d, 4, c[0][0], c[0][1], c[1][0], c[1][1])
            }, keySize: 4, ivSize: 4, blockSize: 4
        });
    m.SEED = n._createHelper(q)
})();

nSaferJS.mode.CFB = function () {
    function g(c, b, e, a) {
        var d;
        (d = this._iv) ? (d = d.slice(0), this._iv = void 0) : d = this._prevBlock;
        a.encryptBlock(d, 0);
        for (a = 0; a < e; a++) c[b + a] ^= d[a]
    }

    var f = nSaferJS.lib.BlockCipherMode.extend();
    f.Encryptor = f.extend({
        processBlock: function (c, b) {
            var e = this._cipher, a = e.blockSize;
            g.call(this, c, b, a, e);
            this._prevBlock = c.slice(b, b + a)
        }
    });
    f.Decryptor = f.extend({
        processBlock: function (c, b) {
            var e = this._cipher, a = e.blockSize, d = c.slice(b, b + a);
            g.call(this, c, b, a, e);
            this._prevBlock = d
        }
    });
    return f
}();


function GenECKeyPair(a) {
    a = getSECCurveByName(a);
    var c = new SecureRandom, b = new BigInteger(a.getN().toString()), d = b.subtract(BigInteger.ONE),
        c = (new BigInteger(b.bitLength(), c)).mod(d).add(BigInteger.ONE),
        b = new ECCurveFp(new BigInteger(a.getCurve().getQ().toString()), new BigInteger(a.getCurve().getA().toBigInteger().toString()), new BigInteger(a.getCurve().getB().toBigInteger().toString()));
    a = new ECPointFp(b, b.fromBigInteger(new BigInteger(a.getG().getX().toBigInteger().toString())), b.fromBigInteger(new BigInteger(a.getG().getY().toBigInteger().toString())));
    this.priKey = c.toString(16);
    this.pubKey = b.encodePointHex(a.multiply(c))
}

function getECPrivateKey() {
    return this.priKey
}

function getECPublicKey() {
    return this.pubKey
}

GenECKeyPair.prototype.getPriKey = getECPrivateKey;
GenECKeyPair.prototype.getPubKey = getECPublicKey;

function DeriveECKey(a, c, b) {
    a = getSECCurveByName(a);
    b = (new ECCurveFp(new BigInteger(a.getCurve().getQ().toString()), new BigInteger(a.getCurve().getA().toBigInteger().toString()), new BigInteger(a.getCurve().getB().toBigInteger().toString()))).decodePointHex(b);
    c = new BigInteger(c, 16);
    c = b.multiply(c).getX().toBigInteger().toString(16);
    return HexStrCheck(c)
}

function SEEDEncrypt(a, c, b, d) {
    if (a != nSaferJS.mode.CFB) return "";
    b = nSaferJS.enc.Hex.parse(b);
    c = nSaferJS.enc.Hex.parse(c);
    return nSaferJS.SEED.encrypt(d, b, {iv: c, mode: a, padding: nSaferJS.pad.NoPadding}).ciphertext.toString()
}

function SEEDDecrypt(a, c, b, d) {
    if (a != nSaferJS.mode.CFB) return "";
    b = nSaferJS.enc.Hex.parse(b);
    c = nSaferJS.enc.Hex.parse(c);
    return nSaferJS.SEED.decrypt(HexStr2Base64(d), b, {iv: c, mode: a, padding: nSaferJS.pad.NoPadding}).toString()
}

function HexStr2Base64(a) {
    return nSaferJS.enc.Base64.stringify(nSaferJS.enc.Hex.parse(a))
}

function Base642HexStr(a) {
    return nSaferJS.enc.Hex.stringify(nSaferJS.enc.Base64.parse(a))
}

function HexStr2Utf8(a) {
    return nSaferJS.enc.Hex.parse(a).toString(nSaferJS.enc.Utf8)
}

function Utf82HexStr(a) {
    return nSaferJS.enc.Hex.stringify(nSaferJS.enc.Utf8.parse(a))
}

function HexStrCheck(a) {
    return a.length % 2 ? "0" + a : a
};

// Big integer base-10 printing library
// Copyright (c) 2014 Lapo Luchini <lapo@lapo.it>

// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
(function () {
    "use strict";

    var max = 10000000000000; // biggest integer that can still fit 2^53 when multiplied by 256

    function Int10(value) {
        this.buf = [+value || 0];
    }

    Int10.prototype.mulAdd = function (m, c) {
        // assert(m <= 256)
        var b = this.buf,
            l = b.length,
            i, t;
        for (i = 0; i < l; ++i) {
            t = b[i] * m + c;
            if (t < max)
                c = 0;
            else {
                c = 0 | (t / max);
                t -= c * max;
            }
            b[i] = t;
        }
        if (c > 0)
            b[i] = c;
    };

    Int10.prototype.toString = function (base) {
        if ((base || 10) != 10)
            throw 'only base 10 is supported';
        var b = this.buf,
            s = b[b.length - 1].toString();
        for (var i = b.length - 2; i >= 0; --i)
            s += (max + b[i]).toString().substring(1);
        return s;
    };

    Int10.prototype.valueOf = function () {
        var b = this.buf,
            v = 0;
        for (var i = b.length - 1; i >= 0; --i)
            v = v * max + b[i];
        return v;
    };

    Int10.prototype.simplify = function () {
        var b = this.buf;
        return (b.length == 1) ? b[0] : this;
    };

// export globals
    if (typeof module !== 'undefined') {
        module.exports = Int10;
    } else {
        window.Int10 = Int10;
    }
})();


// ASN.1 JavaScript decoder
// Copyright (c) 2008-2014 Lapo Luchini <lapo@lapo.it>

// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
/*global oids */
(function (undefined) {
    "use strict";

    var Int10 = (typeof module !== 'undefined') ? require('./int10.js') : window.Int10,
        ellipsis = "\u2026",
        reTimeS = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
        reTimeL = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

    function stringCut(str, len) {
        if (str.length > len)
            str = str.substring(0, len) + ellipsis;
        return str;
    }

    function Stream(enc, pos) {
        if (enc instanceof Stream) {
            this.enc = enc.enc;
            this.pos = enc.pos;
        } else {
            // enc should be an array or a binary string
            this.enc = enc;
            this.pos = pos;
        }
    }

    Stream.prototype.get = function (pos) {
        if (pos === undefined)
            pos = this.pos++;
        if (pos >= this.enc.length)
            throw 'Requesting byte offset ' + pos + ' on a stream of length ' + this.enc.length;
        return (typeof this.enc == "string") ? this.enc.charCodeAt(pos) : this.enc[pos];
    };
    Stream.prototype.hexDigits = "0123456789ABCDEF";
    Stream.prototype.hexByte = function (b) {
        return this.hexDigits.charAt((b >> 4) & 0xF) + this.hexDigits.charAt(b & 0xF);
    };
    Stream.prototype.hexDump = function (start, end, raw) {
        var s = "";
        for (var i = start; i < end; ++i) {
            s += this.hexByte(this.get(i));
            if (raw !== true)
                switch (i & 0xF) {
                    case 0x7:
                        s += "  ";
                        break;
                    case 0xF:
                        s += "\n";
                        break;
                    default:
                        s += " ";
                }
        }
        return s;
    };
    Stream.prototype.isASCII = function (start, end) {
        for (var i = start; i < end; ++i) {
            var c = this.get(i);
            if (c < 32 || c > 176)
                return false;
        }
        return true;
    };
    Stream.prototype.parseStringISO = function (start, end) {
        var s = "";
        for (var i = start; i < end; ++i)
            s += String.fromCharCode(this.get(i));
        return s;
    };
    Stream.prototype.parseStringUTF = function (start, end) {
        var s = "";
        for (var i = start; i < end;) {
            var c = this.get(i++);
            if (c < 128)
                s += String.fromCharCode(c);
            else if ((c > 191) && (c < 224))
                s += String.fromCharCode(((c & 0x1F) << 6) | (this.get(i++) & 0x3F));
            else
                s += String.fromCharCode(((c & 0x0F) << 12) | ((this.get(i++) & 0x3F) << 6) | (this.get(i++) & 0x3F));
        }
        return s;
    };
    Stream.prototype.parseStringBMP = function (start, end) {
        var str = "", hi, lo;
        for (var i = start; i < end;) {
            hi = this.get(i++);
            lo = this.get(i++);
            str += String.fromCharCode((hi << 8) | lo);
        }
        return str;
    };
    Stream.prototype.parseTime = function (start, end, shortYear) {
        var s = this.parseStringISO(start, end),
            m = (shortYear ? reTimeS : reTimeL).exec(s);
        if (!m)
            return "Unrecognized time: " + s;
        if (shortYear) {
            // to avoid querying the timer, use the fixed range [1970, 2069]
            // it will conform with ITU X.400 [-10, +40] sliding window until 2030
            m[1] = +m[1];
            m[1] += (m[1] < 70) ? 2000 : 1900;
        }
        s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4];
        if (m[5]) {
            s += ":" + m[5];
            if (m[6]) {
                s += ":" + m[6];
                if (m[7])
                    s += "." + m[7];
            }
        }
        if (m[8]) {
            s += " UTC";
            if (m[8] != 'Z') {
                s += m[8];
                if (m[9])
                    s += ":" + m[9];
            }
        }
        return s;
    };
    Stream.prototype.parseInteger = function (start, end) {
        var v = this.get(start),
            neg = (v > 127),
            pad = neg ? 255 : 0,
            len,
            s = '';
        // skip unuseful bits (not allowed in DER)
        while (v == pad && ++start < end)
            v = this.get(start);
        len = end - start;
        if (len === 0)
            return neg ? -1 : 0;
        // show bit length of huge integers
        if (len > 4) {
            s = v;
            len <<= 3;
            while (((s ^ pad) & 0x80) == 0) {
                s <<= 1;
                --len;
            }
            s = "(" + len + " bit)\n";
        }
        // decode the integer
        if (neg) v = v - 256;
        var n = new Int10(v);
        for (var i = start + 1; i < end; ++i)
            n.mulAdd(256, this.get(i));
        return s + n.toString();
    };
    Stream.prototype.parseBitString = function (start, end, maxLength) {
        var unusedBit = this.get(start),
            lenBit = ((end - start - 1) << 3) - unusedBit,
            intro = "(" + lenBit + " bit)\n",
            s = "";
        for (var i = start + 1; i < end; ++i) {
            var b = this.get(i),
                skip = (i == end - 1) ? unusedBit : 0;
            for (var j = 7; j >= skip; --j)
                s += (b >> j) & 1 ? "1" : "0";
            if (s.length > maxLength)
                return intro + stringCut(s, maxLength);
        }
        return intro + s;
    };
    Stream.prototype.parseOctetString = function (start, end, maxLength) {
        if (this.isASCII(start, end))
            return stringCut(this.parseStringISO(start, end), maxLength);
        var len = end - start,
            s = "(" + len + " byte)\n";
        maxLength /= 2; // we work in bytes
        if (len > maxLength)
            end = start + maxLength;
        for (var i = start; i < end; ++i)
            s += this.hexByte(this.get(i));
        if (len > maxLength)
            s += ellipsis;
        return s;
    };
    Stream.prototype.parseOID = function (start, end, maxLength) {
        var s = '',
            n = new Int10(),
            bits = 0;
        for (var i = start; i < end; ++i) {
            var v = this.get(i);
            n.mulAdd(128, v & 0x7F);
            bits += 7;
            if (!(v & 0x80)) { // finished
                if (s === '') {
                    n = n.simplify();
                    var m = n < 80 ? n < 40 ? 0 : 1 : 2;
                    s = m + "." + (n - m * 40);
                } else
                    s += "." + n.toString();
                if (s.length > maxLength)
                    return stringCut(s, maxLength);
                n = new Int10();
                bits = 0;
            }
        }
        if (bits > 0)
            s += ".incomplete";
        return s;
    };

    function ASN1(stream, header, length, tag, sub) {
        if (!(tag instanceof ASN1Tag)) throw 'Invalid tag value.';
        this.stream = stream;
        this.header = header;
        this.length = length;
        this.tag = tag;
        this.sub = sub;
    }

    ASN1.prototype.typeName = function () {
        switch (this.tag.tagClass) {
            case 0: // universal
                switch (this.tag.tagNumber) {
                    case 0x00:
                        return "EOC";
                    case 0x01:
                        return "BOOLEAN";
                    case 0x02:
                        return "INTEGER";
                    case 0x03:
                        return "BIT_STRING";
                    case 0x04:
                        return "OCTET_STRING";
                    case 0x05:
                        return "NULL";
                    case 0x06:
                        return "OBJECT_IDENTIFIER";
                    case 0x07:
                        return "ObjectDescriptor";
                    case 0x08:
                        return "EXTERNAL";
                    case 0x09:
                        return "REAL";
                    case 0x0A:
                        return "ENUMERATED";
                    case 0x0B:
                        return "EMBEDDED_PDV";
                    case 0x0C:
                        return "UTF8String";
                    case 0x10:
                        return "SEQUENCE";
                    case 0x11:
                        return "SET";
                    case 0x12:
                        return "NumericString";
                    case 0x13:
                        return "PrintableString"; // ASCII subset
                    case 0x14:
                        return "TeletexString"; // aka T61String
                    case 0x15:
                        return "VideotexString";
                    case 0x16:
                        return "IA5String"; // ASCII
                    case 0x17:
                        return "UTCTime";
                    case 0x18:
                        return "GeneralizedTime";
                    case 0x19:
                        return "GraphicString";
                    case 0x1A:
                        return "VisibleString"; // ASCII subset
                    case 0x1B:
                        return "GeneralString";
                    case 0x1C:
                        return "UniversalString";
                    case 0x1E:
                        return "BMPString";
                }
                return "Universal_" + this.tag.tagNumber.toString();
            case 1:
                return "Application_" + this.tag.tagNumber.toString();
            case 2:
                return "[" + this.tag.tagNumber.toString() + "]"; // Context
            case 3:
                return "Private_" + this.tag.tagNumber.toString();
        }
    };
    ASN1.prototype.content = function (maxLength) { // a preview of the content (intended for humans)
        if (this.tag === undefined)
            return null;
        if (maxLength === undefined)
            maxLength = Infinity;
        var content = this.posContent(),
            len = Math.abs(this.length);
        if (!this.tag.isUniversal()) {
            if (this.sub !== null)
                return "(" + this.sub.length + " elem)";
            return this.stream.parseOctetString(content, content + len, maxLength);
        }
        switch (this.tag.tagNumber) {
            case 0x01: // BOOLEAN
                return (this.stream.get(content) === 0) ? "false" : "true";
            case 0x02: // INTEGER
                return this.stream.parseInteger(content, content + len);
            case 0x03: // BIT_STRING
                return this.sub ? "(" + this.sub.length + " elem)" :
                    this.stream.parseBitString(content, content + len, maxLength);
            case 0x04: // OCTET_STRING
                return this.sub ? "(" + this.sub.length + " elem)" :
                    this.stream.parseOctetString(content, content + len, maxLength);
            //case 0x05: // NULL
            case 0x06: // OBJECT_IDENTIFIER
                return this.stream.parseOID(content, content + len, maxLength);
            //case 0x07: // ObjectDescriptor
            //case 0x08: // EXTERNAL
            //case 0x09: // REAL
            //case 0x0A: // ENUMERATED
            //case 0x0B: // EMBEDDED_PDV
            case 0x10: // SEQUENCE
            case 0x11: // SET
                if (this.sub !== null)
                    return "(" + this.sub.length + " elem)";
                else
                    return "(no elem)";
            case 0x0C: // UTF8String
                return stringCut(this.stream.parseStringUTF(content, content + len), maxLength);
            case 0x12: // NumericString
            case 0x13: // PrintableString
            case 0x14: // TeletexString
            case 0x15: // VideotexString
            case 0x16: // IA5String
            //case 0x19: // GraphicString
            case 0x1A: // VisibleString
                //case 0x1B: // GeneralString
                //case 0x1C: // UniversalString
                return stringCut(this.stream.parseStringISO(content, content + len), maxLength);
            case 0x1E: // BMPString
                return stringCut(this.stream.parseStringBMP(content, content + len), maxLength);
            case 0x17: // UTCTime
            case 0x18: // GeneralizedTime
                return this.stream.parseTime(content, content + len, (this.tag.tagNumber == 0x17));
        }
        return null;
    };
    ASN1.prototype.toString = function () {
        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + ((this.sub === null) ? 'null' : this.sub.length) + "]";
    };
    ASN1.prototype.toPrettyString = function (indent) {
        if (indent === undefined) indent = '';
        var s = indent + this.typeName() + " @" + this.stream.pos;
        if (this.length >= 0)
            s += "+";
        s += this.length;
        if (this.tag.tagConstructed)
            s += " (constructed)";
        else if ((this.tag.isUniversal() && ((this.tag.tagNumber == 0x03) || (this.tag.tagNumber == 0x04))) && (this.sub !== null))
            s += " (encapsulates)";
        s += "\n";
        if (this.sub !== null) {
            indent += '  ';
            for (var i = 0, max = this.sub.length; i < max; ++i)
                s += this.sub[i].toPrettyString(indent);
        }
        return s;
    };
    ASN1.prototype.posStart = function () {
        return this.stream.pos;
    };
    ASN1.prototype.posContent = function () {
        return this.stream.pos + this.header;
    };
    ASN1.prototype.posEnd = function () {
        return this.stream.pos + this.header + Math.abs(this.length);
    };
    ASN1.prototype.toHexString = function (root) {
        return this.stream.hexDump(this.posStart(), this.posEnd(), true);
    };
    ASN1.decodeLength = function (stream) {
        var buf = stream.get(),
            len = buf & 0x7F;
        if (len == buf)
            return len;
        if (len > 6) // no reason to use Int10, as it would be a huge buffer anyways
            throw "Length over 48 bits not supported at position " + (stream.pos - 1);
        if (len === 0)
            return null; // undefined
        buf = 0;
        for (var i = 0; i < len; ++i)
            buf = (buf * 256) + stream.get();
        return buf;
    };

    function ASN1Tag(stream) {
        var buf = stream.get();
        this.tagClass = buf >> 6;
        this.tagConstructed = ((buf & 0x20) !== 0);
        this.tagNumber = buf & 0x1F;
        if (this.tagNumber == 0x1F) { // long tag
            var n = new Int10();
            do {
                buf = stream.get();
                n.mulAdd(128, buf & 0x7F);
            } while (buf & 0x80);
            this.tagNumber = n.simplify();
        }
    }

    ASN1Tag.prototype.isUniversal = function () {
        return this.tagClass === 0x00;
    };
    ASN1Tag.prototype.isEOC = function () {
        return this.tagClass === 0x00 && this.tagNumber === 0x00;
    };
    ASN1.decode = function (stream) {
        if (!(stream instanceof Stream))
            stream = new Stream(stream, 0);
        var streamStart = new Stream(stream),
            tag = new ASN1Tag(stream),
            len = ASN1.decodeLength(stream),
            start = stream.pos,
            header = start - streamStart.pos,
            sub = null,
            getSub = function () {
                sub = [];
                if (len !== null) {
                    // definite length
                    var end = start + len;
                    while (stream.pos < end)
                        sub[sub.length] = ASN1.decode(stream);
                    if (stream.pos != end)
                        throw "Content size is not correct for container starting at offset " + start;
                } else {
                    // undefined length
                    try {
                        for (; ;) {
                            var s = ASN1.decode(stream);
                            if (s.tag.isEOC())
                                break;
                            sub[sub.length] = s;
                        }
                        len = start - stream.pos; // undefined lengths are represented as negative values
                    } catch (e) {
                        throw "Exception while decoding undefined length content: " + e;
                    }
                }
            };
        if (tag.tagConstructed) {
            // must have valid content
            getSub();
        } else if (tag.isUniversal() && ((tag.tagNumber == 0x03) || (tag.tagNumber == 0x04))) {
            // sometimes BitString and OctetString are used to encapsulate ASN.1
            try {
                if (tag.tagNumber == 0x03)
                    if (stream.get() != 0)
                        throw "BIT STRINGs with unused bits cannot encapsulate.";
                getSub();
                for (var i = 0; i < sub.length; ++i)
                    if (sub[i].tag.isEOC())
                        throw 'EOC is not supposed to be actual content.';
            } catch (e) {
                // but silently ignore when they don't
                sub = null;
            }
        }
        if (sub === null) {
            if (len === null)
                throw "We can't skip over an invalid tag with undefined length at offset " + start;
            stream.pos = start + Math.abs(len);
        }
        return new ASN1(streamStart, header, len, tag, sub);
    };

// export globals
    if (typeof module !== 'undefined') {
        module.exports = ASN1;
    } else {
        window.ASN1 = ASN1;
    }
})();

// Base64 JavaScript decoder
// Copyright (c) 2008-2014 Lapo Luchini <lapo@lapo.it>

// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
(function (undefined) {
    "use strict";

    var Base64 = {},
        decoder;

    Base64.decode = function (a) {
        var i;
        if (decoder === undefined) {
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                ignore = "= \f\n\r\t\u00A0\u2028\u2029";
            decoder = [];
            for (i = 0; i < 64; ++i)
                decoder[b64.charAt(i)] = i;
            for (i = 0; i < ignore.length; ++i)
                decoder[ignore.charAt(i)] = -1;
        }
        var out = [];
        var bits = 0, char_count = 0;
        for (i = 0; i < a.length; ++i) {
            var c = a.charAt(i);
            if (c == '=')
                break;
            c = decoder[c];
            if (c == -1)
                continue;
            if (c === undefined)
                throw 'Illegal character at offset ' + i;
            bits |= c;
            if (++char_count >= 4) {
                out[out.length] = (bits >> 16);
                out[out.length] = (bits >> 8) & 0xFF;
                out[out.length] = bits & 0xFF;
                bits = 0;
                char_count = 0;
            } else {
                bits <<= 6;
            }
        }
        switch (char_count) {
            case 1:
                throw "Base64 encoding incomplete: at least 2 bits missing";
            case 2:
                out[out.length] = (bits >> 10);
                break;
            case 3:
                out[out.length] = (bits >> 16);
                out[out.length] = (bits >> 8) & 0xFF;
                break;
        }
        return out;
    };

    Base64.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/;
    Base64.unarmor = function (a) {
        var m = Base64.re.exec(a);
        if (m) {
            if (m[1])
                a = m[1];
            else if (m[2])
                a = m[2];
            else
                throw "RegExp out of sync";
        }
        return Base64.decode(a);
    };

// export globals
    if (typeof module !== 'undefined') {
        module.exports = Base64;
    } else {
        window.Base64 = Base64;
    }
})();


nshc.keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
nshc.B64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
nshc.B64padchar = "=";
nshc.keyLength = 0;

/**
 * base64 인코딩
 * @param input
 * @returns {string}
 */
nshc.encode64 = function (input) {
    input = escape(input);
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;

    do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output + nshc.keyStr.charAt(enc1) + nshc.keyStr.charAt(enc2) +
            nshc.keyStr.charAt(enc3) + nshc.keyStr.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);

    return output;
}

/**
 * base64 디코딩
 * @param input
 */
nshc.decode64 = function (input) {
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;

    var base64test = /[^A-Za-z0-9\+\/\=]/g;
    if (base64test.exec(input)) {

    }
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    do {
        enc1 = nshc.keyStr.indexOf(input.charAt(i++));
        enc2 = nshc.keyStr.indexOf(input.charAt(i++));
        enc3 = nshc.keyStr.indexOf(input.charAt(i++));
        enc4 = nshc.keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";

    } while (i < input.length);

    return unescape(output);
}

/**
 * hex to base64
 * @param h
 * @returns {string}
 */
nshc.hex2b64 = function (h) {
    var i;
    var c;
    var ret = "";
    for (i = 0; i + 3 <= h.length; i += 3) {
        c = parseInt(h.substring(i, i + 3), 16);
        ret += nshc.B64map.charAt(c >> 6) + nshc.B64map.charAt(c & 63);
    }
    if (i + 1 == h.length) {
        c = parseInt(h.substring(i, i + 1), 16);
        ret += nshc.B64map.charAt(c << 2);
    } else if (i + 2 == h.length) {
        c = parseInt(h.substring(i, i + 2), 16);
        ret += nshc.B64map.charAt(c >> 2) + nshc.B64map.charAt((c & 3) << 4);
    }
    while ((ret.length & 3) > 0)
        ret += nshc.B64padchar;
    return ret;
}

nshc.parseBigInt = function (str, r) {
    return new BigInteger(str, r);
}

nshc.linebrk = function (s, n) {
    var ret = "";
    var i = 0;
    while (i + n < s.length) {
        ret += s.substring(i, i + n) + "\n";
        i += n;
    }
    return ret + s.substring(i, s.length);
}

nshc.byte2Hex = function (b) {
    if (b < 0x10)
        return "0" + b.toString(16);
    else
        return b.toString(16);
}

nshc.pkcs1pad2 = function (s, n) {
    if (n < s.length + 11) {
        alert("Message too long for RSA");
        return null;
    }
    var ba = new Array();
    var i = s.length - 1;
    while (i >= 0 && n > 0) {
        var c = s.charCodeAt(i--);
        if (c < 128) {
            ba[--n] = c;
        } else if ((c > 127) && (c < 2048)) {
            ba[--n] = (c & 63) | 128;
            ba[--n] = (c >> 6) | 192;
        } else {
            ba[--n] = (c & 63) | 128;
            ba[--n] = ((c >> 6) & 63) | 128;
            ba[--n] = (c >> 12) | 224;
        }
    }
    ba[--n] = 0;
    var rng = new SecureRandom();
    var x = new Array();
    while (n > 2) {
        x[0] = 0;
        while (x[0] == 0) rng.nextBytes(x);
        ba[--n] = x[0];
    }
    ba[--n] = 2;
    ba[--n] = 0;
    return new BigInteger(ba);
}

nshc.RSAKey = function () {
    this.n = null;
    this.e = 0;
    this.d = null;
    this.p = null;
    this.q = null;
    this.dmp1 = null;
    this.dmq1 = null;
    this.coeff = null;
}

nshc.RSASetPublic = function (N, E) {
    if (N != null && E != null && N.length > 0 && E.length > 0) {
        this.n = nshc.parseBigInt(N, 16);
        this.e = parseInt(E, 16);
    } else
        alert("Invalid RSA public key");
}

nshc.RSADoPublic = function (x) {
    return x.modPowInt(this.e, this.n);
}

nshc.RSAEncrypt = function (text) {
    var m = nshc.pkcs1pad2(text, (this.n.bitLength() + 7) >> 3);
    if (m == null) return null;
    var c = this.doPublic(m);
    if (c == null) return null;
    var h = c.toString(16);
    return nshc.RSAPaddingCheck(h);
}

/**
 * 입력데이터 암호화
 * @param inputValue 입력데이터
 * @returns {*}
 */
nshc.inputEncryptRSA = function (inputValue) {
    if (inputValue.length == 256 || inputValue.length == 512) {
        return inputValue;
    }
    inputValue = inputValue;
    var rsa = new nshc.RSAKey();

    if (nshc.inputDisplayElement.getAttribute("decArea") == "financial") {
        // 20170620 - jhlee :: 카드사 공개키를 삽입
        rsa.setPublic(nshc.financialRsaPublicKey, nshc.financialRsaExponent);
    } else {
        rsa.setPublic(document.getElementById("nfilter_modulus").value, document.getElementById("nfilter_exponent").value);
    }

    var encryptedValue = "";
    var blockSize = 100;

    if (inputValue.length > blockSize) {

        var length = Number(inputValue.length / blockSize).toFixed(2);

        var _tmp_password = "";

        for (var i = 0; i < length; i++) {
            var _substring_password = inputValue.substring((i * blockSize), (i + 1) * blockSize);
            _tmp_password += rsa.encrypt(_substring_password);
        }
        encryptedValue = _tmp_password;
    } else {
        encryptedValue = rsa.encrypt(inputValue);
    }

    return encryptedValue;
}

nshc.RSAKey.prototype.doPublic = nshc.RSADoPublic;
nshc.RSAKey.prototype.setPublic = nshc.RSASetPublic;
nshc.RSAKey.prototype.encrypt = nshc.RSAEncrypt;

/**
 * 20170424 - jhlee
 * ECDH 추가로 인한 암호화 방식 추가
 * @param inputValue
 * @returns
 */
nshc.inputEncryptEcdh = function (inputValue) {

    var sPubKeyFor = "";
    var secretKey = "";
    var encryptedValue = "";
    var xorSecretKey = "";

    if (inputValue.length == 256 || inputValue.length == 512) {
        return inputValue;
    }

    // 키세팅
    if (nshc.inputDisplayElement.getAttribute("decArea") == "financial") {

        // 카드사에서 받아온 base64 인코딩된 공개키를 Hex String으로 변환
        var sPubKey = Base642HexStr(nshc.financialEcdhPublicKey);

        // 클라이언트 개인키와 카드사 공개키로 비밀키 생성
        secretKey = DeriveECKey("secp256r1", nshc.securityPrikey, sPubKey);

        // seed xor 연산을 위한 값 세팅
        var sPubKeyForSeed = Base642HexStr(document.getElementById("nfilter_modulus").value); // 서버공개키
        var secretKeyForSeed = DeriveECKey("secp256r1", nshc.securityPrikey, sPubKeyForSeed);

        for (var i = 0; i < (secretKey.length / 2); i++) {
            var skey = (parseInt(secretKey.substring(2 * i, 2 * i + 2), 16) ^ parseInt(secretKeyForSeed.substring(2 * i, 2 * i + 2), 16)).toString(16);
            xorSecretKey += skey.length == 1 ? '0' + skey : skey;
        }

        // SEED 암호화
        encryptedValue = SEEDEncrypt(nSaferJS.mode.CFB, '00000000000000000000000000000000', xorSecretKey, inputValue);
        //webFinancialSecretkey = xorSecretKey;
        //console.log("encryptedValue >>>>>>> "+encryptedValue);

    } else {
        // 서버에서 받아온 base64 인코딩된 공개키를 Hex String으로 변환
        var sPubKey = Base642HexStr(document.getElementById("nfilter_modulus").value);

        // 클라이언트 개인키와 서버의 공개키로 비밀키 생성
        secretKey = DeriveECKey("secp256r1", nshc.securityPrikey, sPubKey);
        //console.log("secretKey >>> "+secretKey);

        // SEED 암호화
        encryptedValue = SEEDEncrypt(nSaferJS.mode.CFB, '00000000000000000000000000000000', secretKey, inputValue);
        //console.log("encryptedValue >>>>>>> "+encryptedValue);
        //webSecretkey = secretKey;
    }

    return encryptedValue;
}

/**
 * 20170621 - jhlee
 * RSA방식 financial 공개키 처리 함수 - 시작
 */
nshc.setFinancialRsaPublicKey = function (key) {
    var publickey = Base64.decode(key);
    var asn1 = ASN1.decode(publickey);
    var modStart = asn1.sub[1].sub[0].sub[0].posContent();
    var modLen = asn1.sub[1].sub[0].sub[0].length;
    var modbytes = [];
    for (var x = 1; x < modLen; x++) {
        modbytes.push(asn1.stream.enc[x + modStart]);
    }
    var modulusHex = "";
    for (var x = 0; x < modLen - 1; x++) {
        var hexByte = modbytes[x].toString(16);

        // might need padding before appending
        modulusHex += (hexByte.length == 1) ? "0" + hexByte : hexByte;
    }
    // 공개키 modulus
    nshc.financialRsaPublicKey = modulusHex;
    //console.log("nshc.financialRsaPublicKey >>> "+nshc.financialRsaPublicKey);

    var exponent = asn1.sub[1].sub[0].sub[1].content();
    // 공개키 exponent
    nshc.financialRsaExponent = Number(exponent).toString(16);
    //console.log("nshc.financialRsaExponent >>> "+ nshc.financialRsaExponent);
}

/**
 * 20170621 - jhlee
 * RSA방식 financial 공개키 처리 함수 - 종료
 */

/**
 * 20171124 - jhlee
 * block 단위로 RSA 암호화시 padding 이슈로 처리 -tl
 */
nshc.RSAPaddingCheck = function (e) {
    var datablock = (nshc.keyLength == 2048) ? 512 : 256;

    if (e.length == datablock) {
        return e;
    } else {
        var gap = datablock - e.length;
        for (var i = 0, insertZero = "0"; i < gap - 1; i++) {
            insertZero += "0";
        }
        return insertZero + e;
    }
}

/**
 * 20171124 - jhlee
 * block 단위로 RSA 암호화시 padding 이슈로 처리
 */
