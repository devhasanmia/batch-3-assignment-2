import mongoose from "mongoose";

export const idValidityCheck = (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(`Invalid ID`);
  }
};
