var couchbase = require("couchbase");

// Create a cluster with authenticated credentials
var cluster = new couchbase.Cluster("couchbase://localhost:8091");
cluster.authenticate("root", "password");

// Reusable function for oppening buckets.
function openBucket(name) {
  // Open the buckets for the whole application lifecycle.
  var bucket = cluster.openBucket(name);
  bucket.on("error", err => {
    if (err) {
      console.error("Got error: %j", err);
    }
  });
  bucket.on("connect", () => {
    console.log("connected to bucket %s", name);
  });
  return bucket;
}

// Initialize all the Buckets.
const CouchbaseBuckets = {};
CouchbaseBuckets.UsersBucket = openBucket("users");

module.exports = CouchbaseBuckets;
