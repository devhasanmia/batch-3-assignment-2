import { Response } from "express";
import { z } from "zod";



export const handleError = (res: Response, error: any) => {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: error.errors[0].message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};