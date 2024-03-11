from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from controllers import user_controller, product_controller, complaint_controller

def add_cors_middleware(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"], 
    )

app = FastAPI()
add_cors_middleware(app)
app.include_router(user_controller.router)
app.include_router(product_controller.router)
app.include_router(complaint_controller.router)



