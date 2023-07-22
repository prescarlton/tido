/*
  Warnings:

  - Added the required column `updated` to the `task_activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `task_activity` ADD COLUMN `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated` DATETIME(3) NOT NULL;
