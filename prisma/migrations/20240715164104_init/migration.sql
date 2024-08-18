-- AlterTable
ALTER TABLE "Property" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Reservation" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" TIMESTAMP(3),
ALTER COLUMN "createdAt" SET DEFAULT now();
