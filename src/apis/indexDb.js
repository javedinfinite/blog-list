
import Localbase from "localbase";
 
 
const connectDb = (dbName) =>{
    return new Localbase(dbName);
}

const addData =   (dbName, data) => {

    let DBInstance = connectDb(dbName)
      DBInstance.collection(dbName).add(data);

  }

  const updateData =   (dbName, data) => {

    let DBInstance = connectDb(dbName)

    DBInstance.collection(dbName).doc({'blogid':data.blogid}).set(data)

  }






  
const getData = async (dbName, matchingObject='') => {

    let DBInstance = connectDb(dbName)
    let myData = []
    if(matchingObject){
      myData = DBInstance.collection(dbName).doc(matchingObject).get({ keys: true }) //{blogid: 1}
      return myData
    }
    myData = await DBInstance.collection(dbName).get({ keys: true })
    return myData
       
  }

export{getData, addData, updateData}

 

   