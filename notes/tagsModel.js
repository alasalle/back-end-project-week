const db = require("../data/dbConfig.js");

module.exports = {
  fetch: id => {
    if (id) {
      return db("tags").where("id", id);
    }
    return db("tags");
  },
  fetchTagsByNote: note_id => {
    return db("tags").where("note_id", note_id);
  },
  insert: newTag => {
    return db("tags").insert(newTag);
  },
  update: (id, tag) => {
    return db("tags")
      .where("id", id)
      .update(tag);
  },
  remove: id => {
    return db("tags")
      .where("id", id)
      .del();
  }
};
