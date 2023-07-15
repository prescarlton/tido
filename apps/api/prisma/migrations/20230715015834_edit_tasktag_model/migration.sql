/*
  Warnings:

  - You are about to drop the column `label` on the `TaskTag` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `task_statuses` table. All the data in the column will be lost.
  - Added the required column `color` to the `TaskTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `TaskTag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `task_statuses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TaskTag` DROP COLUMN `label`,
    ADD COLUMN `color` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `task_statuses` DROP COLUMN `label`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
