-- AlterTable
ALTER TABLE `task_activity` MODIFY `new_val` LONGTEXT NULL,
    MODIFY `old_val` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `tasks` MODIFY `description` LONGTEXT NULL;
