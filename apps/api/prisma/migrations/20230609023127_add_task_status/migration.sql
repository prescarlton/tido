-- AlterTable
ALTER TABLE `tasks` ADD COLUMN `statusId` VARCHAR(191) NULL,
    ADD COLUMN `task_status_id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `board_settings` (
    `id` VARCHAR(191) NOT NULL,
    `taskStatusId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task_statuses` (
    `id` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `boardId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `board_settings` ADD CONSTRAINT `board_settings_taskStatusId_fkey` FOREIGN KEY (`taskStatusId`) REFERENCES `task_statuses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_task_status_id_fkey` FOREIGN KEY (`task_status_id`) REFERENCES `task_statuses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task_statuses` ADD CONSTRAINT `task_statuses_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `boards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
