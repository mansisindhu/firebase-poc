# firebase-poc

### Add data to firestore, just run a forloop

```
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
