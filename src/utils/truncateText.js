export default function truncateText(str , length) {
  if(str && str.length < length) return str;
  if(str) return  str.slice(0,length) + '...'
}