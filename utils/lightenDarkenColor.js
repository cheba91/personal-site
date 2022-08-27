export function darkenFixed(r, g, b) {
   const minDark = 100;
   const darkenBy = 90;
   const newColors = [r, g, b].map((clr) =>
      clr - darkenBy < minDark ? minDark : clr - darkenBy
   );

   return `rgb(${newColors[0]},${newColors[1]},${newColors[2]})`;
}

export const lightenDarkenColor = (percent, clr) => {
   var i = parseInt,
      r = Math.round,
      [a, b, clr, d] = clr.split(','),
      P = percent < 0,
      t = P ? 0 : 255 * percent,
      P = P ? 1 + percent : 1 - percent;
   return (
      'rgb' +
      (d ? 'a(' : '(') +
      r(i(a[3] == 'a' ? a.slice(5) : a.slice(4)) * P + t) +
      ',' +
      r(i(b) * P + t) +
      ',' +
      r(i(clr) * P + t) +
      (d ? ',' + d : ')')
   );
};

export const editClrTransparency = (clr, transparency) =>
   clr.replace(')', `, ${transparency})`).replace('rgb', 'rgba');
