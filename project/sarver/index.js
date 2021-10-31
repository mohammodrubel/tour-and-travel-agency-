const express = require ('express')
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
var cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 7000
app.use(cors())
app.use(express.json())




    
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i8wrn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        async function run (){
            try{
                await client.connect();
                const database = client.db("InsertInformation");
                const mainCollection = database.collection("Info");
                const mainCollectionBooking = database.collection("booking");

                // GET API 
                app.get(('/travel'),async(req,res)=>{
                    const cursor = mainCollection.find({})
                    const travel = await cursor.toArray()
                    res.send(travel)
                })

                // get booking api 

                app.get(('/information'),async(req,res)=>{
                    const cursorOne = mainCollectionBooking.find({})
                    const info = await cursorOne.toArray()
                    res.send(info)
                })

                //POST API
                app.post('/travel',async(req,res)=>{
                    const newPost = req.body
                    console.log('hitt the post api',newPost)
                    const result = await mainCollection.insertOne(newPost);
                    res.json(result)
                })
                // post booking api 
                app.post('/information',async(req,res)=>{
                    const booking = req.body
                    console.log('hit the post ',booking)
                    const result = await  mainCollectionBooking.insertOne(booking)
                    res.json(result)
                })

                // delete booking 
                    app.delete('/booking/delete/:id',async(req,res)=>{
                        const id = req.params.id;
        
                        const query = {_id:ObjectId(id)};
                        // console.log(query);
                        const result = await mainCollectionBooking.deleteOne(query);
                        res.json(result);
  
      })
                
            }
            finally{
                // await client.close();
            }
        }
        run().catch(console.dir)



app.get('/',(req,res)=>{
    res.send('sarver is running')
})

app.listen(port,()=>{
    console.log('port Number',port)
})