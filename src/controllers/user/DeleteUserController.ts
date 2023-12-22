import { Request, Response} from 'express';
import { DeleteUserService } from '../../services/users/DeleteUserService';

export class DeleteUserController {
    async handle(request: Request, response: Response) {
        const id = Number(request.params.id);
        
        const deleteUserService = new DeleteUserService();

        const result = await deleteUserService.execute(id);

        if(result instanceof Error) return response.json({ error: result.message });

        return response.json({result});
    }
}