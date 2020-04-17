exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "Take over the world.",
          description: "...or at least try.",
          completed: 1,
        },
        {
          id: 2,
          name: "Finish the sprint challenge.",
          description: "Aim for some stretch goals!",
          completed: 0,
        },
        {
          id: 3,
          name: "Preview next week.",
          description: "Do we work on back-end logic?",
          completed: 0,
        },
      ]);
    });
};
