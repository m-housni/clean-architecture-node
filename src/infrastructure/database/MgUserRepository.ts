import { IUserRepository } from "../../domain/IUserRepository";
import { User } from "../../domain/User";
import mongoose, { Schema, Model } from "mongoose";

// Define the User schema
const userSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// Create a Mongoose model
interface IUserDocument extends User {}
const UserModel: Model<IUserDocument> = mongoose.model<IUserDocument>(
  "User",
  userSchema
);

export class MgUserRepository implements IUserRepository {
  async createUser(user: User): Promise<User> {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser.toObject() as User;
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await UserModel.findOne({ id }).exec();
    return user ? (user.toObject() as User) : null;
  }

  async updateUser(user: User): Promise<User | null> {
    const updatedUser = await UserModel.findOneAndUpdate(
      { id: user.id },
      user,
      { new: true }
    );
    return updatedUser ? (updatedUser.toObject() as User) : null;
  }

  async deleteUser(id: string): Promise<void> {
    await UserModel.deleteOne({ id })
      .exec();      
  }
}
