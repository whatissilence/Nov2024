DROP DATABASE vet_clinic IF EXISTS;

CREATE DATABASE vet_clinic;

-- Owners
CREATE TABLE owners (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR(100) NOT NULL,
                        phone VARCHAR(20),
                        father_id INT UNIQUE,
                        CONSTRAINT fk_owner_father FOREIGN KEY (father_id) REFERENCES owners(id) ON DELETE SET NULL
);

-- Addresses
CREATE TABLE addresses (
                           id SERIAL PRIMARY KEY,
                           street VARCHAR(100) NOT NULL,
                           home VARCHAR(10),
                           flat VARCHAR(10),
                           owner_id INT UNIQUE,
                           CONSTRAINT fk_address_owner FOREIGN KEY (owner_id) REFERENCES owners(id) ON DELETE CASCADE
);

-- Pets
CREATE TABLE pets (
                      id SERIAL PRIMARY KEY,
                      name VARCHAR(100) NOT NULL,
                      type VARCHAR(50),
                      gender VARCHAR(10) CHECK (gender IN ('male', 'female')),
                      birthday DATE,
                      vaccinated BOOLEAN DEFAULT FALSE,
                      owner_id INT,
                      CONSTRAINT fk_pet_owner FOREIGN KEY (owner_id) REFERENCES owners(id) ON DELETE SET NULL
);

-- Veterinarians
CREATE TABLE veterinarians (
                               id SERIAL PRIMARY KEY,
                               name VARCHAR(100) NOT NULL,
                               phone VARCHAR(20)
);

-- Veterinarian-Pet (Many-to-Many)
CREATE TABLE veterinarian_pet (
                                  vet_id INT,
                                  pet_id INT,
                                  PRIMARY KEY (vet_id, pet_id),
                                  CONSTRAINT fk_vet FOREIGN KEY (vet_id) REFERENCES veterinarians(id) ON DELETE CASCADE,
                                  CONSTRAINT fk_pet FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE
);


--------------------------------------

-- Owners
INSERT INTO owners (name, phone) VALUES
                                     ('John Smith', '555-1234'),       -- id: 1
                                     ('Emily Johnson', '555-2345'),    -- id: 2
                                     ('Michael Brown', '555-3456'),    -- id: 3
                                     ('Sarah Miller', '555-4567'),     -- id: 4 (no pets)
                                     ('Robert Davis', '555-5678');     -- id: 5

-- Self-reference (father_id)
UPDATE owners SET father_id = 1 WHERE id = 3; -- Michael’s father is John

-- Addresses
INSERT INTO addresses (street, home, flat, owner_id) VALUES
                                                         ('Maple Street', '12A', '1', 1),
                                                         ('Oak Avenue', '34', '5B', 2),
                                                         ('Pine Road', '56', NULL, 3),
                                                         ('Elm Street', '78', '3', 5);

-- Pets
INSERT INTO pets (name, type, gender, birthday, vaccinated, owner_id) VALUES
                                                                          ('Buddy', 'dog', 'male', '2020-01-15', TRUE, 1),
                                                                          ('Luna', 'cat', 'female', '2021-03-22', FALSE, 2),
                                                                          ('Charlie', 'dog', 'male', '2019-07-30', TRUE, 2),
                                                                          ('Molly', 'rabbit', 'female', '2022-11-05', TRUE, 3),
                                                                          ('Max', 'parrot', 'male', '2021-05-10', FALSE, NULL),     -- no owner
                                                                          ('Bella', 'cat', 'female', '2023-02-01', FALSE, NULL);    -- no owner

-- Veterinarians
INSERT INTO veterinarians (name, phone) VALUES
                                            ('Dr. Alice Green', '555-6789'),
                                            ('Dr. David White', '555-7890');

-- Veterinarian-Pet relationships
INSERT INTO veterinarian_pet (vet_id, pet_id) VALUES
                                                  (1, 1),  -- Alice treats Buddy
                                                  (1, 2),  -- Alice treats Luna
                                                  (2, 1),  -- David treats Buddy - 2nd vet
                                                  (2, 3),  -- David treats Charlie
                                                  (2, 4),  -- David treats Molly
                                                  (1, 5),  -- Alice treats Max (stray parrot)
                                                  (2, 6);  -- David treats Bella (stray cat);

 -- SELECT *
-- FROM pets
-- INNER JOIN veterinarian_pet ON pets.id = veterinarian_pet.pet_id
-- INNER JOIN veterinarians ON veterinarian_pet.vet_id = veterinarians.id
-- WHERE veterinarians.name ILIKE '%alice green%';
