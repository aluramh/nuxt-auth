var couchbase = require("couchbase");
var N1qlQuery = couchbase.N1qlQuery;
const CouchbaseBuckets = require("../config/couchbase/config");
const UsersBucket = CouchbaseBuckets.UsersBucket;

const getUsers = () => {
  return new Promise((resolve, reject) => {
    const query = N1qlQuery.fromString("SELECT * FROM `users`");
    return UsersBucket.query(query, (error, rows, meta) => {
      if (error) return reject(error);
      resolve(rows);
    });
  });
};

module.exports = { getUsers };

// bucket.manager().createPrimaryIndex(function() {
//   bucket.upsert(
//     "user:king_arthur",
//     {
//       email: "kingarthur@couchbase.com",
//       interests: ["Holy Grail", "African Swallows"]
//     },
//     function(err, result) {
//       bucket.get("user:king_arthur", function(err, result) {
//         console.log("Got result: %j", result.value);
//         bucket.query(
//           N1qlQuery.fromString(
//             "SELECT * FROM bucketname WHERE $1 in interests LIMIT 1"
//           ),
//           ["African Swallows"],
//           function(err, rows) {
//             console.log("Got rows: %j", rows);
//           }
//         );
//       });
//     }
//   );
// });
