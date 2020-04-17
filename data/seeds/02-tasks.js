exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          description: "Make flowcharts.",
          notes: "Make sure the notes work!",
          project_id: 1,
        },
        {
          id: 2,
          description: "Make flowchart of flowcharts.",
          project_id: 1,
        },
        {
          id: 3,
          description: "Seed databases, make connections.",
          project_id: 2,
        },
      ]);
    });
};
