const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

const nedb = require("gray-nedb");
const db = new nedb({ filename: "emp.db", autoload: true });
console.log("db created");



// db.insert({ name: "Fred Flintstone" }, function (err, newDoc) {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log("document inserted", newDoc);
//   }
// });


// db.insert({ name: "Roselyne Osundwa" }, function (err, newDoc) {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log("document inserted", newDoc);
//   }
// });

// db.insert({ name: "Noel Oduory" }, function (err, newDoc) {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log("document inserted", newDoc);
//   }
// });

// db.find({}, function (err, docs) {
//   if (err) {
//     console.log("error");
//   } else {
//     console.log("documents retrieved: ", docs);
//   }
// });

// db.find({name: "Roselyne Osundwa"}, function (err, docs) {
//     if (err) {
//       console.log("error");
//     } else {
//       console.log("documents retrieved: ", docs);
//     }
//   });

// db.update(
//   { name: "Roselyne Osundwa" },
//   { $set: { name: "Valeria Abdalla" } },
//   {multi:true},
//   function (err, docs) {
//     if (err) {
//       console.log("error updating documents", err);
//     } else {
//       console.log(docs, "documents updated");
//     }
//   }
// );

//add
app.post("/add", function (req, res) {
  db.insert({ name: req.body.name }, function (err, newDoc) {
  if (err) {
  console.log("error", err);
  } else {
  console.log("document inserted", newDoc);
  }
  });
  })

  //update
app.post("/update", function (req, res) {
  db.insert({ name: req.body.name }, function (err, newDoc) {
  if (err) {
  console.log("error", err);
  } else {
  console.log("document inserted", newDoc);
  }
  });
  })

  //delete
app.post("/delete", function (req, res) {
  db.insert({ name: req.body.name }, function (err, newDoc) {
  if (err) {
  console.log("error", err);
  } else {
  console.log("document inserted", newDoc);
  }
  });
  })

  // View
app.post("/view", function (req, res) {
  db.find({ nameset: req.body.id }, function (err, docs) {
  if (err) {
  console.log("error");
  } else {
  console.log("documents retrieved: ", docs);
  res.json(docs);
  }
  });
  });

// db.remove({name:'Noel Oduory'},{multi:true}, function(err,docsRem){
//     if(err){
//     console.log('error deleting document');
//     } else {
//     console.log(docsRem, 'document removed from database')
//     }
//     })

// db.find({name: "Wilma Flintstone"}, function (err, docs) {
//     if (err) {
//       console.log("error");
//     } else {
//       console.log("documents retrieved: ", docs);
//     }
//   });

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
