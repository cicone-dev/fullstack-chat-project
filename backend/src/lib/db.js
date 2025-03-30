import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Banco de Dados conectado mlk ;) aqui: ${conn.connection.host}`);
    } catch (error) {
        console.log("Deu erro de conexão no Banco de dados bobão: ", error);
    }
};
