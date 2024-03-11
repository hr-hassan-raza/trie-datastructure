from fastapi import APIRouter
from models import UserLoginModel
from helper import post
import json

router = APIRouter()

@router.post("/login")
async def login(loginModel: UserLoginModel):
    data = json.dumps(loginModel.dict())
    print(data)
    result = post("/users/login", data)
    return result
