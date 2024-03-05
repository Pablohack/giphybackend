import mongoose from "mongoose";

export class Conexion {
  private readonly username: string = "pablomoraga";
  private readonly password: string = "Pableke1994.";
  private readonly appName: string = "dbexercise";

  public async connect() {
    try {
      await mongoose.connect(
        `mongodb+srv://${this.username}:${this.password}@dbexercise.2aakjsz.mongodb.net/?retryWrites=true&w=majority&appName=${this.appName}`
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  public async desconnect() {
    const close = await mongoose.connection.close();
  }
}
