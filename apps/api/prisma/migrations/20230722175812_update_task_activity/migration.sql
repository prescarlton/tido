/*
  Warnings:

  - You are about to drop the column `newVal` on the `task_activity` table. All the data in the column will be lost.
  - You are about to drop the column `oldVal` on the `task_activity` table. All the data in the column will be lost.
  - You are about to drop the column `taskId` on the `task_activity` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `task_activity` table. All the data in the column will be lost.
  - Added the required column `task_id` to the `task_activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `task_activity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `task_activity` DROP FOREIGN KEY `task_activity_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `task_activity` DROP FOREIGN KEY `task_activity_userId_fkey`;

-- AlterTable
ALTER TABLE `task_activity` DROP COLUMN `newVal`,
    DROP COLUMN `oldVal`,
    DROP COLUMN `taskId`,
    DROP COLUMN `userId`,
    ADD COLUMN `new_val` VARCHAR(191) NULL,
    ADD COLUMN `old_val` VARCHAR(191) NULL,
    ADD COLUMN `task_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `task_activity` ADD CONSTRAINT `task_activity_task_id_fkey` FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task_activity` ADD CONSTRAINT `task_activity_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
