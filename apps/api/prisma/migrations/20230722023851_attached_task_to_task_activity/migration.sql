/*
  Warnings:

  - A unique constraint covering the columns `[taskId]` on the table `task_activity` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `taskId` to the `task_activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `task_activity` ADD COLUMN `taskId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `task_activity_taskId_key` ON `task_activity`(`taskId`);

-- AddForeignKey
ALTER TABLE `task_activity` ADD CONSTRAINT `task_activity_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `tasks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
