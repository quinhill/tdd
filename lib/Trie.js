const Node = require('../lib/Node');

class Trie {
  contructor() {
    this.wordCount = 0;
    this.root = new Node();
    this.suggestionArray = [];
  }

  insert(word) {
    let wordLowerCase = word.toLowerCase();
    let splitWordArray = [...wordLowerCase];
    let currentNode = this.root;

    splitWordArray.forEach(letter => {
      if (!currentNode.children[letter]){
        currentNode.children[letter] = new Node(letter);
      }

      currentNode = currentNode.children[letter];
    })

    if (!currentNode.complete) {
      currentNode.complete = wordLowerCase;

      this.wordCount++
    }
  }

  suggest(word) {
    this.suggestArray = [];
    let wordArray = [...word.toLowerCase()];

    let childrenKeys = Object.keys(this.root.children);

    childNodes.forEach(child => {
      if (currentNode.children[child].complete) {
        this.suggestArray.push(currentNode.children[child].complete);
        this.findWord(currentNode.children[child])
      } else {
        this.findWord(currentNode.children[child])
      }
    })
  }

  findWord(currentNode) {
    let childNodes = Object.keys(currentNode.children);

    childNodes.forEach(child => {
      if (currentNode.children[child].complete) {
        this.suggestArray.push(currentNode.children[child].complete);
        this.findWord(currentNode.children[child])
      }
    })
  }

  select(word) {


    node.popularity++
  }

  populate(array) {
    array.forEach(word => {
      this.insert(word)
    })
  }

}



module.exports = Trie;

















