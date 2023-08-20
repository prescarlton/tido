/*
  Warnings:

  - You are about to drop the column `description` on the `tasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `description`,
    ADD COLUMN `raw_description` LONGTEXT NULL,
    ADD COLUMN `text_description` LONGTEXT NULL;
