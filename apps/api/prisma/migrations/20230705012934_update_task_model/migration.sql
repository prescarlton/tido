-- AlterTable
ALTER TABLE `tasks` ADD COLUMN `created_by_user_id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `TaskTag` (
    `id` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `boardId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TaskToTaskTag` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TaskToTaskTag_AB_unique`(`A`, `B`),
    INDEX `_TaskToTaskTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_created_by_user_id_fkey` FOREIGN KEY (`created_by_user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskTag` ADD CONSTRAINT `TaskTag_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `boards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TaskToTaskTag` ADD CONSTRAINT `_TaskToTaskTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `tasks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TaskToTaskTag` ADD CONSTRAINT `_TaskToTaskTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `TaskTag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
