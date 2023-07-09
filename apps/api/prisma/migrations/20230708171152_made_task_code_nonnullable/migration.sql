/*
  Warnings:

  - Made the column `code` on table `tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tasks` MODIFY `code` INTEGER NOT NULL;
