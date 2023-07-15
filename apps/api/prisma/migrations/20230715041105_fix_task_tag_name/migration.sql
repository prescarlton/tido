/*
  Warnings:

  - You are about to drop the `TaskTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `TaskTag` DROP FOREIGN KEY `TaskTag_boardId_fkey`;

-- DropForeignKey
ALTER TABLE `_TaskToTaskTag` DROP FOREIGN KEY `_TaskToTaskTag_B_fkey`;

-- DropTable
DROP TABLE `TaskTag`;

-- CreateTable
CREATE TABLE `task_tags` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `boardId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `task_tags` ADD CONSTRAINT `task_tags_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `boards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TaskToTaskTag` ADD CONSTRAINT `_TaskToTaskTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `task_tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
