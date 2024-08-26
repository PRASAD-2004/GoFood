const mongoose = require("mongoose");
const mongourl = 'mongodb+srv://murakundlaprasad:C8MZsGHHoy0xYOGS@cluster0.tpkuelw.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';


const mongodb = async () => {
    try {

        await mongoose.connect(mongourl);
        console.log("connected to MongoDB");
        const fetch_data = mongoose.connection.db.collection("fooditems")
        const data = await fetch_data.find({}).toArray()
        const foodcollection = mongoose.connection.db.collection("foodcategory")
        const catdata = await foodcollection.find({}).toArray()
        
        global.fooditems = data
        global.foodcollections = catdata

       
        
            
        
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
};

module.exports = mongodb;
