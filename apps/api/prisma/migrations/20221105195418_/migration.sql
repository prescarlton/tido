/*
  Warnings:

  - You are about to drop the `RefreshToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "refreshToken" TEXT DEFAULT '';

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "RefreshToken";
PRAGMA foreign_keys=on;
