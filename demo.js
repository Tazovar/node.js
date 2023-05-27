// const { MongoClient } = require('mongodb');

// async function main() {
//   const url = 'mongodb+srv://tzgelashvili:asdasd123@cluster0.4s6dcfw.mongodb.net/';

//   const client = new MongoClient(url);
//   try {
//     await client.connect();
//     await listDatabases(client);
//     await createListing(client, {
//       name: "Lovely Loft",
//       summary: "A charming loft in Paris",
//       bedrooms: 1,
//       bathrooms: 1
//     });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await client.close();
//   }
// }

// async function createListing(client, newListing) {
//   const results = await client
//     .db("sample_airbnb")
//     .collection("listingsAndReviews")
//     .insertOne(newListing);

//   console.log(`New listing created with the following id: ${results.insertedId}`);
// }

// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();
//   console.log('Databases:');
//   databasesList.databases.forEach(db => {
//     console.log(`- ${db.name}`);
//   });
// }

// main().catch(console.error);



// const { MongoClient } = require('mongodb');


// async function main(){
//   const url = 'mongodb+srv://tzgelashvili:asdasd123@cluster0.4s6dcfw.mongodb.net/'
//   const client = new MongoClient(url)

//   try {
//     await client.connect();
// await listDatabases(client)
//   } catch (error) {
//     console.log(error)
//   } finally {

//   await client.close()
//   }
// }
// main().catch(console.error)


// async function listDatabases(client) {
//      const databasesList = await client.db().admin().listDatabases();
//      console.log('Databases:');
//      databasesList.databases.forEach(db => {
//        console.log(`- ${db.name}`);
//      });
//    }




// const { MongoClient } = require('mongodb');

// async function main() {
//   let url = 'mongodb+srv://tzgelashvili:asdasd123@cluster0.4s6dcfw.mongodb.net/';
//   const client = new MongoClient(url);

//   try {
//     await client.connect();
//     await createMultipleListings(client, [
//       {
//         name: 'tazo',
//         lastname: 'gelashvili',
//         bedroom: 1,
//         bathroom: 1
//       },
//       {
//         name: 'giorgi',
//         lastname: 'gelashvili',
//         bedroom: 1,
//         bathroom: 1
//       },
//       {
//         name: 'tsotne',
//         lastname: 'gelashvili',
//         bedroom: 1,
//         bathroom: 1
//       }
//     ]);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

// async function createMultipleListings(client, newListings) {
//   const results = await client.db('db').collection("collection").insertMany(newListings);

//   console.log(`${results.insertedCount} documents inserted`);
//   console.log(`Inserted document IDs: ${results.insertedIds}`);
// }





// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();

//   databasesList.c.forEach(database => {
//     console.log(database.name);
//   });
// }


// const { MongoClient } = require('mongodb');

// async function main() {
//   let url = 'mongodb+srv://tzgelashvili:asdasd123@cluster0.4s6dcfw.mongodb.net/';
//   const client = new MongoClient(url);

//   try {
//     await client.connect();
//     listDatabases(client);

//     await createMultipleListings(client, [
//       {
//         name: 'tazo',
//         lastname: 'gelashvili',
//         bedroom: 1,
//         bathroom: 1
//       },
//       {
//         name: 'giorgi',
//         lastname: 'gelashvili',
//         bedroom: 1,
//         bathroom: 1
//       },
//       {
//         name: 'tsotne',
//         lastname: 'gelashvili',
//         bedroom: 1,
//         bathroom: 1
//       }
//     ]);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

// async function createMultipleListings(client, newListings) {
//   const results = await client.db('sample_airbnb').collection('listingAndReviews').insertMany(newListings);

//   console.log(`${results.insertedCount} documents inserted`);
//   console.log(`Inserted document IDs: ${results.insertedIds}`);
// }

// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();

//   databasesList.databases.forEach(database => {
//     console.log(database.name);
//   });
// }

















const {MongoClient}  = require('mongodb');


async function main(){
  const url = 'mongodb+srv://tzgelashvili:asdasd123@cluster0.4s6dcfw.mongodb.net/'
const client = new MongoClient(url);



try {
await client.connect()
await createMultipleListings(client, [
  {
    name:"tazo",
    lastname:'gelashvili',
    bedroom:1,
    bathroom:2
  },
  {
    name:"giorgi",
    lastname:'gelashvili',
    bedroom:3,
    bathroom:1
  },
  {
    name:"undifined",
    lastname:'undifined',
    bedroom:null,
    bathroom:null
  }
])
await listDatabases(client)  
} catch (err) {
  console.log(err)
} finally {
  await client.close();
}
}




main().catch(console.error);
const id ='6471aca0f9393e8163d40418'
async function createMultipleListings(client, newListing) {
  const collection = client.db('sample_airbnb').collection('listingsAndReviews');
  const results = await collection.insertMany(newListing);

  console.log(`${results.insertedCount} documents inserted`);
 
Object.values(results.insertedIds).forEach((id , index ) => {
  console.log(`${index + 1 } , and id is ${id}`)
})
  
  const insertedDocuments = await collection.find({_id : {$in:Object.values(results.insertedIds)}}).toArray();
  console.log('Inserted documents:');
  console.log(insertedDocuments);
}

async function listDatabases(client){
  const dbs = await client.db().admin().listDatabases();

 dbs.databases.forEach(element => {
  console.log(`${element.name}`)
 });
}




