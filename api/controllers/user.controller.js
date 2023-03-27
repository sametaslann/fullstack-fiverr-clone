import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  // console.log(req.params.id);
  // console.log(req.userId);
  // console.log(user._id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account"));
  }
  await User.findByIdAndDelete(req.param.id);
  res.status(200).send("Account deleted!");
};
