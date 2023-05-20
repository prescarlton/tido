/*
  Warnings:

  - You are about to drop the column `completed` on the `tasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `completed`,
    ADD COLUMN `complete` BOOLEAN NOT NULL DEFAULT false;
