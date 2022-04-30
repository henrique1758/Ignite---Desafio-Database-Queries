import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGenres1651287802870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "genres",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "name",
              type: "varchar",
              isUnique: true
            },
            {
              name: "description",
              type: "varchar"
            },
            {
              name: "game_id",
              type: "uuid"
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            },
          ],
          foreignKeys: [
            {
              name: 'FKGameGenre',
              columnNames: ['game_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'games',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE'
            }
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("genres");
    }

}
