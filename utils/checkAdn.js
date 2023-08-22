class ADN {
  adn = [];
  vertical = [];
  initialValue = 0;
  diagonal = [[], []];
  constructor(adn) {
    this.adn = adn;
    this.createDiagonalAndVertical()
  }

  checkHorizontal() {
    const regex = /([ATGC])\1{3,4}/;
    return this.adn.filter(adn => regex.test(adn))
  }

  checkVertical() {
    const regex = /([ATGC])\1{3,4}/;
    return this.vertical.filter(adn => regex.test(adn))
  }

  createDiagonalAndVertical() {
    let i = 0;
    let y = this.adn[0].length - 1;
    const length = this.adn.length;
    for (i, y; i < length; y--, i++) {
      this.diagonal[0].push(this.adn[i][this.initialValue])
      this.diagonal[1].push(this.adn[i][y])
      let vertical = ''
      this.initialValue = this.initialValue + 1;
      for (let x = 0; x < length; x++) {
        vertical = vertical + this.adn[x][i]
      }
      this.vertical.push(vertical)
    }
    this.initialValue = 0;
  }

  checkDiagonalMutation() {
    let isMutation = false
    let mutationArray = []
    let arrays = this.diagonal
    for (let i = 0; i < arrays.length; i++) {
      for (let x = 0; x < arrays[i].length; x++) {
        const letter = arrays[i][x];
        const letters = arrays[i].filter(l => l == letter)
        if (letters.length == 4) {
          isMutation = true
          mutationArray = arrays[i]
        }
        arrays[i] = arrays[i].filter(l => l != letter)
      }
    }
    return isMutation
  }

  getDnaString() {
    return this.adn.join('')
  }

  isMutant() {
    this.getDnaString()
    const horizontal = this.checkHorizontal()
    if (horizontal.length > 0) return { isMutant: true, adn: this.getDnaString() }
    const vertical = this.checkVertical()
    if (vertical.length > 0) return { isMutant: true, adn: this.getDnaString() }
    const diagonal = this.checkDiagonalMutation()
    if (diagonal) return { isMutant: true, adn: this.getDnaString() }
  }

}

module.exports = ADN