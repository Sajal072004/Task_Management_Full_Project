
import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
): any => {

  console.log(`Error occured on PATH: ${req.path} METHOD: ${req.path} `, error);

  if ( error instanceof SyntaxError){
    return res.status(400).json({
      message: "Invalid JSON Format.Please check you JSON body",
      error: "Invalid JSON payload passed.",
    });
  }

  res.status(500).json({
    message: "Internal server error",
    error: error?.message || "Unknown error occured",
  });
};
