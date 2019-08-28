import mongoose from 'mongoose';

class DBConnect {

    public async conection() {
    
        const url = "url de atlas";

        const options = {
            useNewUrlParser: true,
            reconnectTries: 60,
            reconnectInterval: 1000,
            poolSize: 10,
            bufferMaxEntries: 0 // If not connected, return errors immediately rather than waiting for reconnect
          }

        await mongoose.connect(url,options)
        .then(() => {
            console.log("conexion establecida");
        })
        .catch((error:any) => console.log("conexion perdida" + error.message));
    
    }

}

const db = new DBConnect();
export default db;