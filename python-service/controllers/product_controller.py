from fastapi import APIRouter
from typing import List
from helper import get, Trie

router = APIRouter()

@router.get('/suggest_products', response_model=List[List[str]])
async def suggest_products(search_word: str):
    trie = Trie()
    products = get(endpoint="/products")
    for product in products:
        product_name = product.get("name")
        if product_name:
            trie.insert(product_name)
    suggestions_list = []
    prefix = ''
    for char in search_word:
        prefix += char
        suggestions = trie.search(prefix)
        suggestions_list.append(suggestions)
    return suggestions_list
