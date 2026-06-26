/*
  Warnings:

  - Changed the type of `type` on the `OrganizationProfile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "OrganizationProfile" DROP CONSTRAINT "OrganizationProfile_userId_fkey";

-- AlterTable
ALTER TABLE "OrganizationProfile" DROP COLUMN "type",
ADD COLUMN     "type" "OrganizationType" NOT NULL;

-- AlterTable
ALTER TABLE "RequestVerification" ALTER COLUMN "verifiedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "DonorBadge" ADD CONSTRAINT "DonorBadge_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "DonorProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationProfile" ADD CONSTRAINT "OrganizationProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
