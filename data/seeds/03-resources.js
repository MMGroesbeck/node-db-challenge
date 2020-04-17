
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1,
          name: "Corkboard",
          description: "For flowchart layout."
        },
        {
          id: 2,
          name: "Sweet coding PC"
        },
        {
          id: 3,
          name: "Postman"
        }
      ]);
    });
};
