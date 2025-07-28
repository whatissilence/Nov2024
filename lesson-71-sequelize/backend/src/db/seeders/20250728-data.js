import { Owner, Address, Pet, Veterinarian } from '../../models/index.js';

export async function up() {
  const owners = await Owner.bulkCreate([
    { name: 'John Smith', phone: '555-1234' },
    { name: 'Emily Johnson', phone: '555-2345' },
    { name: 'Michael Brown', phone: '555-3456' },
    { name: 'Sarah Miller', phone: '555-4567' },
    { name: 'Robert Davis', phone: '555-5678' }
  ], { returning: true });

  // Обновим father_id (Michael → John)
  await owners[2].update({ father_id: owners[0].id });

  await Address.bulkCreate([
    { street: 'Maple Street', home: '12A', flat: '1', owner_id: owners[0].id },
    { street: 'Oak Avenue', home: '34', flat: '5B', owner_id: owners[1].id },
    { street: 'Pine Road', home: '56', flat: null, owner_id: owners[2].id },
    { street: 'Elm Street', home: '78', flat: '3', owner_id: owners[4].id }
  ]);

  const pets = await Pet.bulkCreate([
    { name: 'Buddy', type: 'dog', gender: 'male', birthday: '2020-01-15', vaccinated: true, owner_id: owners[0].id },
    { name: 'Luna', type: 'cat', gender: 'female', birthday: '2021-03-22', vaccinated: false, owner_id: owners[1].id },
    { name: 'Charlie', type: 'dog', gender: 'male', birthday: '2019-07-30', vaccinated: true, owner_id: owners[1].id },
    { name: 'Molly', type: 'rabbit', gender: 'female', birthday: '2022-11-05', vaccinated: true, owner_id: owners[2].id },
    { name: 'Max', type: 'parrot', gender: 'male', birthday: '2021-05-10', vaccinated: false, owner_id: null },
    { name: 'Bella', type: 'cat', gender: 'female', birthday: '2023-02-01', vaccinated: false, owner_id: null }
  ], { returning: true });

  const [alice, david] = await Veterinarian.bulkCreate([
    { name: 'Dr. Alice Green', phone: '555-6789' },
    { name: 'Dr. David White', phone: '555-7890' }
  ], { returning: true });

  // Добавляем связи через методы ассоциации
  await alice.addPets([pets[0], pets[1], pets[4]]); // Buddy, Luna, Max
  await david.addPets([pets[0], pets[2], pets[3], pets[5]]); // Buddy, Charlie, Molly, Bella
}

export async function down() {
  // Удаление ассоциаций не обязательно, Sequelize удалит записи в связующей таблице при удалении врачей/питомцев
  await Veterinarian.destroy({ where: { name: ['Dr. Alice Green', 'Dr. David White'] } });
  await Pet.destroy({ where: { name: ['Buddy', 'Luna', 'Charlie', 'Molly', 'Max', 'Bella'] } });
  await Address.destroy({ where: { street: ['Maple Street', 'Oak Avenue', 'Pine Road', 'Elm Street'] } });
  await Owner.destroy({ where: { name: ['John Smith', 'Emily Johnson', 'Michael Brown', 'Sarah Miller', 'Robert Davis'] } });
}