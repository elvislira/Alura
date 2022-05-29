import mongoose from "mongoose";

mongoose.connect('mongodb://192.168.56.101:27017/alura-node');

let db = mongoose.connection;

export default db;
