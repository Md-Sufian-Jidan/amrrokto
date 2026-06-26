-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'DONOR', 'BLOOD_SEEKER', 'ORGANIZATION');

-- CreateEnum
CREATE TYPE "BloodGroup" AS ENUM ('A_POS', 'A_NEG', 'B_POS', 'B_NEG', 'AB_POS', 'AB_NEG', 'O_POS', 'O_NEG');

-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('OPEN', 'FULFILLED', 'EXPIRED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "DonationStatus" AS ENUM ('COMMITTED', 'VERIFIED', 'DECLINED');

-- CreateEnum
CREATE TYPE "Urgency" AS ENUM ('NORMAL', 'EMERGENCY', 'CRITICAL');

-- CreateEnum
CREATE TYPE "ResponseStatus" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('SENT', 'DELIVERED', 'FAILED', 'READ');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('REQUEST', 'MESSAGE', 'REWARD', 'SYSTEM', 'DONATION');

-- CreateEnum
CREATE TYPE "OrganizationType" AS ENUM ('HOSPITAL', 'NGO', 'BLOOD_BANK', 'VOLUNTEER_GROUP');

-- CreateTable
CREATE TABLE "SystemConfig" (
    "id" TEXT NOT NULL DEFAULT 'singleton',
    "globalAlertActive" BOOLEAN NOT NULL DEFAULT false,
    "globalAlertTitle" TEXT,
    "globalAlertMessage" TEXT,
    "globalAlertType" TEXT NOT NULL DEFAULT 'INFO',
    "maintenanceMode" BOOLEAN NOT NULL DEFAULT false,
    "apiVersion" TEXT NOT NULL DEFAULT '1.4.2',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SystemConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT,
    "details" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Badge" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonorBadge" (
    "id" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "badgeId" TEXT NOT NULL,
    "awardedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DonorBadge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodRequest" (
    "id" TEXT NOT NULL,
    "bloodGroup" "BloodGroup" NOT NULL,
    "units" INTEGER NOT NULL,
    "division" TEXT,
    "district" TEXT NOT NULL,
    "thana" TEXT,
    "urgency" "Urgency" NOT NULL DEFAULT 'NORMAL',
    "deadline" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "patientName" TEXT,
    "patientAge" TEXT,
    "patientGender" TEXT,
    "patientCondition" TEXT,
    "relationship" TEXT,
    "hemoglobin" TEXT,
    "hospitalName" TEXT NOT NULL,
    "detailedAddress" TEXT,
    "contactPhone" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "isEmergency" BOOLEAN NOT NULL DEFAULT false,
    "status" "RequestStatus" NOT NULL DEFAULT 'OPEN',
    "seekerId" TEXT,
    "organizationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BloodRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequestVerification" (
    "id" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,
    "verifiedBy" TEXT NOT NULL,
    "verifiedAt" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,

    CONSTRAINT "RequestVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlertBroadcast" (
    "id" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,
    "donorCount" INTEGER NOT NULL,
    "smsSent" INTEGER NOT NULL,
    "pushSent" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AlertBroadcast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonorProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bloodGroup" "BloodGroup" NOT NULL,
    "division" TEXT,
    "district" TEXT,
    "thana" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "lastDonationDate" TIMESTAMP(3),
    "totalDonations" INTEGER NOT NULL DEFAULT 0,
    "points" INTEGER NOT NULL DEFAULT 0,
    "address" TEXT,
    "profileImage" TEXT,
    "bio" TEXT,
    "occupation" TEXT,
    "isRare" BOOLEAN NOT NULL DEFAULT false,
    "facebookUrl" TEXT,
    "twitterUrl" TEXT,
    "instagramUrl" TEXT,
    "linkedinUrl" TEXT,

    CONSTRAINT "DonorProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonationHistory" (
    "id" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "requestId" TEXT,
    "status" "DonationStatus" NOT NULL DEFAULT 'COMMITTED',
    "donatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pointsEarned" INTEGER NOT NULL DEFAULT 0,
    "imagePath" TEXT,
    "cardPath" TEXT,
    "notes" TEXT,

    CONSTRAINT "DonationHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonorResponse" (
    "id" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,
    "status" "ResponseStatus" NOT NULL DEFAULT 'PENDING',
    "acceptedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "DonorResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodInventory" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "group" "BloodGroup" NOT NULL,
    "units" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BloodInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "isEmergency" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "message" TEXT NOT NULL,
    "status" "NotificationStatus" NOT NULL DEFAULT 'SENT',
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeekerProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "division" TEXT,
    "district" TEXT,
    "thana" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "totalRequests" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SeekerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "organizationName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "OrganizationProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationDocument" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "verifiedAt" TIMESTAMP(3),
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AuditLog_actorId_action_entity_idx" ON "AuditLog"("actorId", "action", "entity");

-- CreateIndex
CREATE UNIQUE INDEX "DonorBadge_donorId_badgeId_key" ON "DonorBadge"("donorId", "badgeId");

-- CreateIndex
CREATE INDEX "BloodRequest_bloodGroup_district_thana_status_idx" ON "BloodRequest"("bloodGroup", "district", "thana", "status");

-- CreateIndex
CREATE INDEX "BloodRequest_urgency_status_idx" ON "BloodRequest"("urgency", "status");

-- CreateIndex
CREATE INDEX "RequestVerification_requestId_idx" ON "RequestVerification"("requestId");

-- CreateIndex
CREATE INDEX "AlertBroadcast_requestId_idx" ON "AlertBroadcast"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "DonorProfile_userId_key" ON "DonorProfile"("userId");

-- CreateIndex
CREATE INDEX "DonorProfile_bloodGroup_district_thana_isAvailable_idx" ON "DonorProfile"("bloodGroup", "district", "thana", "isAvailable");

-- CreateIndex
CREATE INDEX "DonationHistory_donorId_idx" ON "DonationHistory"("donorId");

-- CreateIndex
CREATE UNIQUE INDEX "DonorResponse_donorId_requestId_key" ON "DonorResponse"("donorId", "requestId");

-- CreateIndex
CREATE UNIQUE INDEX "BloodInventory_organizationId_group_key" ON "BloodInventory"("organizationId", "group");

-- CreateIndex
CREATE INDEX "Message_senderId_idx" ON "Message"("senderId");

-- CreateIndex
CREATE INDEX "Message_receiverId_idx" ON "Message"("receiverId");

-- CreateIndex
CREATE INDEX "Notification_userId_isRead_idx" ON "Notification"("userId", "isRead");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "SeekerProfile_userId_key" ON "SeekerProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationProfile_userId_key" ON "OrganizationProfile"("userId");

-- CreateIndex
CREATE INDEX "VerificationDocument_userId_idx" ON "VerificationDocument"("userId");

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonorBadge" ADD CONSTRAINT "DonorBadge_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "Badge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodRequest" ADD CONSTRAINT "BloodRequest_seekerId_fkey" FOREIGN KEY ("seekerId") REFERENCES "SeekerProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodRequest" ADD CONSTRAINT "BloodRequest_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "OrganizationProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestVerification" ADD CONSTRAINT "RequestVerification_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "BloodRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestVerification" ADD CONSTRAINT "RequestVerification_verifiedBy_fkey" FOREIGN KEY ("verifiedBy") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlertBroadcast" ADD CONSTRAINT "AlertBroadcast_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "BloodRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonorProfile" ADD CONSTRAINT "DonorProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonationHistory" ADD CONSTRAINT "DonationHistory_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "DonorProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonationHistory" ADD CONSTRAINT "DonationHistory_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "BloodRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonorResponse" ADD CONSTRAINT "DonorResponse_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "DonorProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonorResponse" ADD CONSTRAINT "DonorResponse_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "BloodRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodInventory" ADD CONSTRAINT "BloodInventory_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "OrganizationProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeekerProfile" ADD CONSTRAINT "SeekerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationProfile" ADD CONSTRAINT "OrganizationProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationDocument" ADD CONSTRAINT "VerificationDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
