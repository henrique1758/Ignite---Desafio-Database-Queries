import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrders1651288898617 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "orders",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "user_id",
              type: "uuid"
            },
            {
              name: "game_id",
              type: "uuid"
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            }
          ],
          foreignKeys: [
            {
              name: 'FKOrderUser',
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
            },
            {
              name: 'FKOrderGame',
              columnNames: ['game_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'games',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
            }
          ]
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
