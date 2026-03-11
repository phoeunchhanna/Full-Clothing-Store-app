import { PrismaClient } from '@prisma/client';
import "dotenv/config";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = 'admin@admin.com';
  
  // Check if admin already exists to prevent duplicate seeding
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        fullName: 'Admin User',
        phoneNumber: '+1234567890',
        address: 'Admin Address',
        role: 'ADMIN',
      },
    });

    console.log('Admin user seeded successfully.');
  } else {
    console.log('Admin user already exists. Skipping seed.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
