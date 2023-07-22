/*
  Warnings:

  - You are about to drop the column `statusId` on the `tasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `task_activity` ADD COLUMN `newVal` VARCHAR(191) NULL,
    ADD COLUMN `oldVal` VARCHAR(191) NULL,
    MODIFY `message` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `statusId`;
