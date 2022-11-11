import { Router } from 'express';
import { CreateUserController } from './modules/users/useCases/createUser/CreateUserController';
import { AuthenticateUserController } from './modules/account/authenticateUser/AuthenticateUserController';
import { GetUserAuthenticatedController } from './modules/users/useCases/getUserAuthenticated/GetUserAuthenticatedController';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';
import { CreateCourseController } from './modules/courses/useCases/createCourses/CreateCourseController';
import { FindAllCoursesController } from './modules/courses/useCases/findAllCourses/FindAllCoursesController';
import { FindCourseByIdController } from './modules/courses/useCases/findCourseById/FindCourseByIdController';
import { UpdateCourseController } from './modules/courses/useCases/updateVaga/UpdateCourseController';
import { DeleteCourseController } from './modules/courses/useCases/deleteCourse/DeleteCourseController';

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const getUserAuthenticatedController = new GetUserAuthenticatedController();
const createCourseController = new CreateCourseController();
const findAllCoursesController = new FindAllCoursesController();
const findCourseByIdController = new FindCourseByIdController();
const updateCourseController = new UpdateCourseController();
const deleteCourseController = new DeleteCourseController();

//---AUTENTICACAO---//
routes.post('/authenticate', authenticateUserController.handle);

//---Usuario---//
routes.post('/users', createUserController.handle);
routes.get(
  '/authenticated-user',
  ensureAuthenticate,
  getUserAuthenticatedController.handle,
);

//---Cursos---//
routes.post('/courses', ensureAuthenticate, createCourseController.handle);
routes.get('/courses', findAllCoursesController.handle);
routes.get('/vaga/:id', findCourseByIdController.handle);
routes.put('/vagas/:id', ensureAuthenticate, updateCourseController.handle);
routes.delete('/vaga/:id', ensureAuthenticate, deleteCourseController.handle);

export { routes };
