const db = require("../data/dbConfig.js");

module.exports = {
  fetch: id => {
    const query = db("notes");
    if (id) {
      return query.where("id", id);
    }
    return query;
  },
  fetchByUsername: username => {
    const query = db("notes")
    return query.where("user", username)
  },
  insert: note => {
    return db("notes").insert(note);
  },
  update: (id, note) => {
    return db("notes")
      .where("id", id)
      .update(note);
  },
  remove: id => {
    return db("notes")
      .where("id", id)
      .del();
  }
};
