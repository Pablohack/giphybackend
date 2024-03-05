import mongoose from "mongoose";

export class Conexion {
  private readonly username: string = "pablomoraga";
  private readonly password: string = "pableke1994.";
  private readonly appName: string = "dbexercise";

  private async connect() {
    try {
      await mongoose.connect(
        `mongodb+srv://${this.username}:${this.password}@dbexercise.2aakjsz.mongodb.net/?retryWrites=true&w=majority&appName=${this.appName}`
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  private async desconnect() {
    const close = await mongoose.connection.close();
    console.log("prueba", close);
  }
}
