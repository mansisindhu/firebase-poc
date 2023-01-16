# firebase-poc

### Add data to firestore, run a forloop on data array

```
import data from "./data.json";

for (let i = 0; i < data.length; i++) {
  database
    .collection("products")
    .add(data[i])
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
} 
```
