
class CosmicSpace {
  constructor(target) {
    this.target = target
    this.maxLength = parseInt(target.getAttribute('data-maxlength'))
    this.gap = parseInt(target.getAttribute('data-gap'))
    this.spaceLength = this.calculateSpaceLength()
    this.backSpaceKeyCode =  8
    this.deleteKeyCode = 46
    this.setMaxLength()
    this.listen()
  }


  listen() {
    var _this = this
    this.target.addEventListener("keydown", function(e) {
      var sentence = e.target.value
      var trimmed_sentence = _this.trimmed_string(sentence)


      if (trimmed_sentence.length % _this.gap === 0 && trimmed_sentence.length > 0) {
        sentence = sentence + " "
      }

      if (e.keyCode === _this.backSpaceKeyCode || e.keyCode === _this.deleteKeyCode) {
        sentence = _this.removeSpaceFromTail(sentence)
      }

      console.log(sentence)

      e.target.value = sentence
    })
  }

  setMaxLength() {
    var maxLength = this.maxLengthWithoutSpace()
    this.target.setAttribute('maxlength', maxLength)
  }

  trimmed_string(string) {
    return string.replace(/\s+/g, "")
  }

  calculateSpaceLength() {
    return Math.floor( (this.maxLength - 1) / this.gap )
  }

  maxLengthWithoutSpace(maxLength, spaceLength) {
    return this.maxLength + this.spaceLength
  }

  removeSpaceFromTail(text) {
    if (text.slice(-1).match(/\s+/g) ) {
      return text.slice(0, -1)
    }
    return text
  }
}
