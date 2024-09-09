import { MigrationInterface, QueryRunner } from 'typeorm';

export class Database1725653913330 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE DATABASE agro;');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
