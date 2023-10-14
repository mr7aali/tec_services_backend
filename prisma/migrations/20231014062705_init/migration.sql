/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "adminAdminid" INTEGER,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "userid" SERIAL NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userid");

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "UserProfile" (
    "profileid" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "preferences" TEXT NOT NULL,
    "profileimage" TEXT NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("profileid")
);

-- CreateTable
CREATE TABLE "Service" (
    "serviceid" SERIAL NOT NULL,
    "servicename" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "availability" TEXT NOT NULL,
    "providerid" INTEGER NOT NULL,
    "adminAdminid" INTEGER,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("serviceid")
);

-- CreateTable
CREATE TABLE "Booking" (
    "bookingid" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "serviceid" INTEGER NOT NULL,
    "bookingdate" TIMESTAMP(3) NOT NULL,
    "bookingtime" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "adminAdminid" INTEGER,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("bookingid")
);

-- CreateTable
CREATE TABLE "Review" (
    "reviewid" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "serviceid" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "reviewdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("reviewid")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "feedbackid" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "subject" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "feedbackdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("feedbackid")
);

-- CreateTable
CREATE TABLE "Notification" (
    "notificationid" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("notificationid")
);

-- CreateTable
CREATE TABLE "Admin" (
    "adminid" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "superAdminSuperadminid" INTEGER,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("adminid")
);

-- CreateTable
CREATE TABLE "Content" (
    "contentid" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "authorid" INTEGER NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("contentid")
);

-- CreateTable
CREATE TABLE "SuperAdmin" (
    "superadminid" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "SuperAdmin_pkey" PRIMARY KEY ("superadminid")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userid_key" ON "UserProfile"("userid");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_adminAdminid_fkey" FOREIGN KEY ("adminAdminid") REFERENCES "Admin"("adminid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_providerid_fkey" FOREIGN KEY ("providerid") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_adminAdminid_fkey" FOREIGN KEY ("adminAdminid") REFERENCES "Admin"("adminid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_serviceid_fkey" FOREIGN KEY ("serviceid") REFERENCES "Service"("serviceid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_adminAdminid_fkey" FOREIGN KEY ("adminAdminid") REFERENCES "Admin"("adminid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_serviceid_fkey" FOREIGN KEY ("serviceid") REFERENCES "Service"("serviceid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_superAdminSuperadminid_fkey" FOREIGN KEY ("superAdminSuperadminid") REFERENCES "SuperAdmin"("superadminid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "Admin"("adminid") ON DELETE RESTRICT ON UPDATE CASCADE;
