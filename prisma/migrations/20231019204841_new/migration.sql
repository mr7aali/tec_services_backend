/*
  Warnings:

  - The primary key for the `content` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `feedback` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `reviewid` on the `review` table. All the data in the column will be lost.
  - The required column `review_id` was added to the `review` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "booking" ALTER COLUMN "status" SET DEFAULT 'pending';

-- AlterTable
ALTER TABLE "content" DROP CONSTRAINT "content_pkey",
ALTER COLUMN "contentid" DROP DEFAULT,
ALTER COLUMN "contentid" SET DATA TYPE TEXT,
ADD CONSTRAINT "content_pkey" PRIMARY KEY ("contentid");
DROP SEQUENCE "content_contentid_seq";

-- AlterTable
ALTER TABLE "feedback" DROP CONSTRAINT "feedback_pkey",
ALTER COLUMN "feedbackid" DROP DEFAULT,
ALTER COLUMN "feedbackid" SET DATA TYPE TEXT,
ADD CONSTRAINT "feedback_pkey" PRIMARY KEY ("feedbackid");
DROP SEQUENCE "feedback_feedbackid_seq";

-- AlterTable
ALTER TABLE "notification" DROP CONSTRAINT "notification_pkey",
ALTER COLUMN "notificationid" DROP DEFAULT,
ALTER COLUMN "notificationid" SET DATA TYPE TEXT,
ADD CONSTRAINT "notification_pkey" PRIMARY KEY ("notificationid");
DROP SEQUENCE "notification_notificationid_seq";

-- AlterTable
ALTER TABLE "review" DROP CONSTRAINT "review_pkey",
DROP COLUMN "reviewid",
ADD COLUMN     "review_id" TEXT NOT NULL,
ADD CONSTRAINT "review_pkey" PRIMARY KEY ("review_id");
