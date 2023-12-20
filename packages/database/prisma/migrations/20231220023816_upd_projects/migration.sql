-- DropForeignKey
ALTER TABLE `project_activity` DROP FOREIGN KEY `project_activity_project_id_fkey`;

-- AddForeignKey
ALTER TABLE `project_activity` ADD CONSTRAINT `project_activity_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
