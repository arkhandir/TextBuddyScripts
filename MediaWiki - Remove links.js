// remove MediaWiki links

function pre(str) {
  str=str.replace(/\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/g, '$1');
  return str;
  }
