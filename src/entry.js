 export function Entry (title, body) {
  this.title = title;
  this.body = body;
 
}

Entry.prototype.numberOfWords = function() {
  let titleLength = this.title.split(" ").length;
  let bodyLength = this.body.split(" ").length;
  return titleLength + bodyLength;
}

Entry.prototype.countVC = function () {
  const vow = ["a","e","i","o","u"];
  const cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  let vowCount = 0;
  let consCount = 0;
  let chars = this.body.toLowerCase().split("") + this.title.toLowerCase().split("");
  for (let char of chars){
    if (vow.includes (char)) {
      vowCount++;
    } else if (cons.includes (char)) {
      consCount++;
    }
  }
  return new LetterCounts(vowCount, consCount);
}

Entry.prototype.getTeaser = function () {
  let teaser = this.body.split(".", 1).toString().split();
  return teaser.slice(0,8).join(" ");
}

export function LetterCounts (vowelCount, constCount) {
  this.vowelCount = vowelCount;
  this.constCount = constCount;
}