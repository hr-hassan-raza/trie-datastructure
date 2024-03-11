from fastapi import APIRouter
from models import CreateComplaintModel, UpdateComplaintModel
from helper import get, post, put
import json

router = APIRouter()

@router.post("/create-complaint")
async def create_complaint(createComplaint: CreateComplaintModel):
    data = json.dumps(createComplaint.dict())
    result = post("/complaint", data)
    return result

@router.get("/complaints")
async def complaints():
    result = get("/complaint")
    return result


@router.put("/complaint/{complaint_id}")
async def update_complaint(complaint_id: str, update_data: UpdateComplaintModel):
    data = json.dumps(update_data.dict())
    result = put("/complaint/" + complaint_id, data)
    return result
