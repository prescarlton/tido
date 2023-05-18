/*
  Warnings:

  - You are about to drop the column `createdAt` on the `boards` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `boards` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `boards` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `project_members` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `project_members` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `project_members` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `project_members` table. All the data in the column will be lost.
  - You are about to alter the column `role` on the `project_members` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.
  - You are about to drop the column `createdAt` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `boardId` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `listId` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user_tasks` table. All the data in the column will be lost.
  - You are about to drop the column `taskId` on the `user_tasks` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user_tasks` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `user_tasks` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `lists` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `project_id` to the `boards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated` to the `boards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `project_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated` to the `project_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `project_members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expires_at` to the `sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `board_id` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_id` to the `user_tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated` to the `user_tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `user_tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `boards` DROP FOREIGN KEY `boards_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `lists` DROP FOREIGN KEY `lists_boardId_fkey`;

-- DropForeignKey
ALTER TABLE `project_members` DROP FOREIGN KEY `project_members_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `project_members` DROP FOREIGN KEY `project_members_userId_fkey`;

-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_boardId_fkey`;

-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_listId_fkey`;

-- DropForeignKey
ALTER TABLE `user_tasks` DROP FOREIGN KEY `user_tasks_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `user_tasks` DROP FOREIGN KEY `user_tasks_userId_fkey`;

-- AlterTable
ALTER TABLE `boards` DROP COLUMN `createdAt`,
    DROP COLUMN `projectId`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `project_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `project_members` DROP COLUMN `createdAt`,
    DROP COLUMN `projectId`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `userId`,
    ADD COLUMN `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `project_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated` DATETIME(3) NOT NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL,
    MODIFY `role` ENUM('owner', 'admin', 'member') NOT NULL DEFAULT 'member';

-- AlterTable
ALTER TABLE `projects` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `sessions` DROP COLUMN `expiresAt`,
    ADD COLUMN `expires_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `boardId`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `listId`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `board_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user_tasks` DROP COLUMN `createdAt`,
    DROP COLUMN `taskId`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `userId`,
    ADD COLUMN `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `task_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated` DATETIME(3) NOT NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `createdAt`,
    DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    DROP COLUMN `refreshToken`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `first_name` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `last_name` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `updated` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `lists`;

-- AddForeignKey
ALTER TABLE `user_tasks` ADD CONSTRAINT `user_tasks_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_tasks` ADD CONSTRAINT `user_tasks_task_id_fkey` FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_members` ADD CONSTRAINT `project_members_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_members` ADD CONSTRAINT `project_members_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `boards` ADD CONSTRAINT `boards_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_board_id_fkey` FOREIGN KEY (`board_id`) REFERENCES `boards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
