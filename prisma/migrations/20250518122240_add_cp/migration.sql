/*
  Warnings:

  - You are about to drop the `Channel_Partner` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Channel_Partner";

-- CreateTable
CREATE TABLE "channel_Partner" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "city" TEXT,
    "organization" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "channel_Partner_pkey" PRIMARY KEY ("id")
);
