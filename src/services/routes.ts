import { Router } from "express";
import { CreateProfileController } from "../controllers/profile/CreateProfileController";
import { GetAllProfilesController } from "../controllers/profile/GetAllProfilesController";
import { GetByIdProfileController } from "../controllers/profile/GetByIdProfileController";
import { DeleteProfileController } from "../controllers/profile/DeleteProfileController";
import { UpdateProfileController } from "../controllers/profile/UpdateProfileController";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { GetAllUsersController } from "../controllers/user/GetAllUsersController";
import { GetByIdUserController } from "../controllers/user/GetByIdUserController";
import { DeleteUserController } from '../controllers/user/DeleteUserController';
import { UpdateUserController } from '../controllers/user/UpdateUserController';

const routes = Router();

// ROUTES USER
routes.post("/users", (request, response) => {
    new CreateUserController().handle(request, response);
});

routes.get("/users", (request, response) => {
    new GetAllUsersController().handle(request, response);
});

routes.get("/users/:id", (request, response) => {
    new GetByIdUserController().handle(request, response);
});

routes.put("/users/:id", (request, response) => {
    new UpdateUserController().handle(request, response);
});

routes.delete("/users/:id", (request, response) => {
    new DeleteUserController().handle(request, response);
});

// ROUTES PROFILE
routes.get("/", (request, response) => {
    return response.json({ message: "API is running!" });
});

routes.post("/profiles", (request, response) => {
    new CreateProfileController().handle(request, response);
});

routes.get("/profiles", (request, response) => {
    new GetAllProfilesController().handle(request, response);
});

routes.get("/profiles/:id", (request, response) => {
    new GetByIdProfileController().handle(request, response);
});

routes.put("/profiles/:id", (request, response) => {
    new UpdateProfileController().handle(request, response);
});

routes.delete("/profiles/:id", (request, response) => {
    new DeleteProfileController().handle(request, response);
});

export { routes };
