
class CosmicSpace {
  constructor(target) {
    this.target = target
    this.maxLength = parseInt(target.getAttribute('data-maxlength'))
    this.gap = parseInt(target.getAttribute('data-gap'))
    this.backSpaceKeyCode =  8
    this.deleteKeyCode = 46
    this.setCosmicSpaceEvent()
  }


  listen() {
    this.target.addEventListener("keydown", function(e) {
      var trimed_sentence = this.trimmed_string(e.target.value)
      if (trimed_sentence.length >= this.maxlength) {
        return
      }

      if (trimed_sentence.length % gap === 0 && trimed_sentence.length > 0) {
        sentence = sentence + " "
      }

      if (e.keyCode === this.backSpaceKeyCode || e.keyCode === this.deleteKeyCode) {
        sentence = removeSpaceFromTail(e.target.value)
      }

      e.target.value = sentence
    })
  }

  trimmed_string(string) {
    string.replace(/\s+/, "")
  }

  spaceLength(maxLength, gap) {
    Math.floor( (maxLength - 1) / gap )
  }

  maxLengthWithoutSpace(maxLength, spaceLength) {
    maxLength + spaceLength
  }

  removeSpaceFromTail(text) {
    if ( text.slice(-1).match(/\s+/) ) {
       text.slice(0, -1)
    }
  }
}
