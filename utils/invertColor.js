export function invertColor(hex) {
   if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
   }
   if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
   }
   if (hex.length !== 6) return '#fff';
   let r = parseInt(hex.slice(0, 2), 16);
   let g = parseInt(hex.slice(2, 4), 16);
   let b = parseInt(hex.slice(4, 6), 16);

   r = (255 - r).toString(16);
   g = (255 - g).toString(16);
   b = (255 - b).toString(16);
   return '#' + padZero(r) + padZero(g) + padZero(b);
}
function padZero(str, len) {
   len = len || 2;
   let zeros = new Array(len).join('0');
   return (zeros + str).slice(-len);
}
