import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {
    // do nothing
  }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const all = this.listAllUsersUseCase.execute({
        user_id: user_id.toString(),
      });
      return response.status(200).json(all);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
