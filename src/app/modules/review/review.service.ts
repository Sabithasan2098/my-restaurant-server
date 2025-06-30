import { TReview } from "./review.interface";
import { ReviewModel } from "./review.model";

export const getAllReviewFromDB = async () => {
  try {
    const result = await ReviewModel.find();
    return result;
  } catch (error: any) {
    throw new Error("Database error:" + error.message);
  }
};

// create Review item------------>
export const createReviewIntoDB = async (data: TReview) => {
  try {
    const result = await ReviewModel.create(data);
    return result;
  } catch (error: any) {
    throw new Error("Database error:" + error.message);
  }
};

// get Review item------------>
export const getReviewIntoDB = async (id: string) => {
  try {
    const result = await ReviewModel.findById(id);
    return result;
  } catch (error: any) {
    console.log(error);
    throw new Error("Database error:" + error.message);
  }
};

// delete Review item------------>
export const deleteReviewIntoDB = async (id: string) => {
  try {
    const result = await ReviewModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, upsert: true }
    );
    return "Successfully delete selected item";
  } catch (error: any) {
    console.log(error);
    throw new Error("Database error:" + error.message);
  }
};
