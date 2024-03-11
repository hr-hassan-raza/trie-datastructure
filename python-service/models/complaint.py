from pydantic import BaseModel

class CreateComplaintModel(BaseModel):
  Description: str
  UserId: int
  Status: str
  ProductName: str

class UpdateComplaintModel(BaseModel):
  Status: str