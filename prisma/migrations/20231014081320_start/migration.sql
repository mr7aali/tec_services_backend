-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "profileid" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "preferences" TEXT NOT NULL,
    "profileimage" TEXT NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("profileid")
);

-- CreateTable
CREATE TABLE "Admin" (
    "admin_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("admin_id")
);

-- CreateTable
CREATE TABLE "Service" (
    "service_id" TEXT NOT NULL,
    "servicename" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "availability" TEXT NOT NULL,
    "providerid" INTEGER NOT NULL,
    "adminAdminid" INTEGER,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "bookingid" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "bookingdate" TIMESTAMP(3) NOT NULL,
    "bookingtime" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("bookingid")
);

-- CreateTable
CREATE TABLE "Review" (
    "reviewid" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "reviewdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("reviewid")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "feedbackid" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "feedbackdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("feedbackid")
);

-- CreateTable
CREATE TABLE "Notification" (
    "notificationid" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("notificationid")
);

-- CreateTable
CREATE TABLE "Content" (
    "contentid" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "admin_id" TEXT NOT NULL,

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
CREATE UNIQUE INDEX "UserProfile_user_id_key" ON "UserProfile"("user_id");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("admin_id") ON DELETE RESTRICT ON UPDATE CASCADE;
