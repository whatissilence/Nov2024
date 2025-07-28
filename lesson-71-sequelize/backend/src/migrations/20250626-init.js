
export async function up({context: queryInterface}) {
  await queryInterface.sequelize.query(`

    CREATE TABLE owners (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      phone VARCHAR(20),
      father_id INT UNIQUE,
      createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
      updatedAt TIMESTAMP NOT NULL DEFAULT NOW(),
      CONSTRAINT fk_owner_father FOREIGN KEY (father_id) REFERENCES owners(id) ON DELETE SET NULL
    );

-- Addresses
    CREATE TABLE addresses (
       id SERIAL PRIMARY KEY,
       street VARCHAR(100) NOT NULL,
       home VARCHAR(10),
       flat VARCHAR(10),
       owner_id INT UNIQUE,
       createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
       updatedAt TIMESTAMP NOT NULL DEFAULT NOW(),
       CONSTRAINT fk_address_owner FOREIGN KEY (owner_id) REFERENCES owners(id) ON DELETE CASCADE
    );


    CREATE TABLE pets (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      type VARCHAR(50),
      gender VARCHAR(10) CHECK (gender IN ('male', 'female')),
      birthday DATE,
      vaccinated BOOLEAN DEFAULT FALSE,
      owner_id INT,
      createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
      updatedAt TIMESTAMP NOT NULL DEFAULT NOW(),
      CONSTRAINT fk_pet_owner FOREIGN KEY (owner_id) REFERENCES owners(id) ON DELETE SET NULL
    );


    CREATE TABLE veterinarians (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       phone VARCHAR(20),
       createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
       updatedAt TIMESTAMP NOT NULL DEFAULT NOW()
    );

-- Veterinarian-Pet (Many-to-Many)
    CREATE TABLE veterinarian_pet (
        vet_id INT,
        pet_id INT,
        PRIMARY KEY (vet_id, pet_id),
        CONSTRAINT fk_vet FOREIGN KEY (vet_id) REFERENCES veterinarians(id) ON DELETE CASCADE,
        CONSTRAINT fk_pet FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE
    );
  `);
}

export async function down({ context: queryInterface }) {
  await queryInterface.sequelize.query(`
    DROP TABLE veterinarian_pet;
    DROP TABLE veterinarians;
    DROP TABLE pets;
    DROP TABLE addresses;
    DROP TABLE owners;
  `);
}