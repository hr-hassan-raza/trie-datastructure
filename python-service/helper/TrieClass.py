class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False
        self.suggestions = []

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
            node.suggestions.append(word)
            node.suggestions.sort()
            if len(node.suggestions) > 3:
                node.suggestions.pop()

        node.is_end_of_word = True

    def search(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return []
            node = node.children[char]
        return node.suggestions