
export async function up({context: queryInterface}) {
  await queryInterface.sequelize.query(`
    ALTER TABLE veterinarians RENAME COLUMN phone TO tel;
  `);
}

export async function down({ context: queryInterface }) {
  await queryInterface.sequelize.query(`
    ALTER TABLE veterinarians RENAME COLUMN tel TO phone;
  `);
}