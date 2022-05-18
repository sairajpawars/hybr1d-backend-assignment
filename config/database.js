const mongoose = require('mongoose')

const configureDB = async () => {
    try{
        let url = process.env.CLOUD_DB
        await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Connected to Mongodb...`)
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = configureDB
