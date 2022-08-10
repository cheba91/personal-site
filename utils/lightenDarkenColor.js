// export function lightenDarkenColor(col, amt) {
//    let usePound = false;
//    if (col[0] == '#') {
//       col = col.slice(1);
//       usePound = true;
//    }
//    let num = parseInt(col, 16);
//    let r = (num >> 16) + amt;
//    if (r > 255) r = 255;
//    else if (r < 0) r = 0;
//    let b = ((num >> 8) & 0x00ff) + amt;
//    if (b > 255) b = 255;
//    else if (b < 0) b = 0;
//    let g = (num & 0x0000ff) + amt;
//    if (g > 255) g = 255;
//    else if (g < 0) g = 0;
//    // return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
//    return (
//       (usePound ? '#' : '') +
//       String('000000' + (g | (b << 8) | (r << 16)).toString(16)).slice(-6)
//    );
// }

export function darkenFixed(r, g, b) {
   const minDark = 100;
   const darkenBy = 90;
   const newColors = [r, g, b].map((clr) =>
      clr - darkenBy < minDark ? minDark : clr - darkenBy
   );
   console.log(newColors);

   return `rgb(${newColors[0]},${newColors[1]},${newColors[2]})`;
   // return `rgb(${minDark},${minDark},${minDark})`;
}
export const lightenDarkenColor = (p, c) => {
   var i = parseInt,
      r = Math.round,
      [a, b, c, d] = c.split(','),
      P = p < 0,
      t = P ? 0 : 255 * p,
      P = P ? 1 + p : 1 - p;
   return (
      'rgb' +
      (d ? 'a(' : '(') +
      r(i(a[3] == 'a' ? a.slice(5) : a.slice(4)) * P + t) +
      ',' +
      r(i(b) * P + t) +
      ',' +
      r(i(c) * P + t) +
      (d ? ',' + d : ')')
   );
};

export const RGB_Linear_Blend = (p, c0, c1) => {
   var i = parseInt,
      r = Math.round,
      P = 1 - p,
      [a, b, c, d] = c0.split(','),
      [e, f, g, h] = c1.split(','),
      x = d || h,
      j = x
         ? ',' +
           (!d
              ? h
              : !h
              ? d
              : r((parseFloat(d) * P + parseFloat(h) * p) * 1000) / 1000 + ')')
         : ')';
   return (
      'rgb' +
      (x ? 'a(' : '(') +
      r(
         i(a[3] == 'a' ? a.slice(5) : a.slice(4)) * P +
            i(e[3] == 'a' ? e.slice(5) : e.slice(4)) * p
      ) +
      ',' +
      r(i(b) * P + i(f) * p) +
      ',' +
      r(i(c) * P + i(g) * p) +
      j
   );
};
export const RGB_Log_Blend = (p, c0, c1) => {
   var i = parseInt,
      r = Math.round,
      P = 1 - p,
      [a, b, c, d] = c0.split(','),
      [e, f, g, h] = c1.split(','),
      x = d || h,
      j = x
         ? ',' +
           (!d
              ? h
              : !h
              ? d
              : r((parseFloat(d) * P + parseFloat(h) * p) * 1000) / 1000 + ')')
         : ')';
   return (
      'rgb' +
      (x ? 'a(' : '(') +
      r(
         (P * i(a[3] == 'a' ? a.slice(5) : a.slice(4)) ** 2 +
            p * i(e[3] == 'a' ? e.slice(5) : e.slice(4)) ** 2) **
            0.5
      ) +
      ',' +
      r((P * i(b) ** 2 + p * i(f) ** 2) ** 0.5) +
      ',' +
      r((P * i(c) ** 2 + p * i(g) ** 2) ** 0.5) +
      j
   );
};
export const RGB_Log_Shade = (p, c) => {
   var i = parseInt,
      r = Math.round,
      [a, b, c, d] = c.split(','),
      P = p < 0,
      t = P ? 0 : p * 255 ** 2,
      P = P ? 1 + p : 1 - p;
   return (
      'rgb' +
      (d ? 'a(' : '(') +
      r((P * i(a[3] == 'a' ? a.slice(5) : a.slice(4)) ** 2 + t) ** 0.5) +
      ',' +
      r((P * i(b) ** 2 + t) ** 0.5) +
      ',' +
      r((P * i(c) ** 2 + t) ** 0.5) +
      (d ? ',' + d : ')')
   );
};
