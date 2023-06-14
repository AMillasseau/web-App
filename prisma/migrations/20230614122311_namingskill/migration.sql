-- CreateTable
CREATE TABLE "games" (
    "name" VARCHAR(100),
    "booked" BOOLEAN,
    "description" VARCHAR(200),
    "img" VARCHAR(1000),
    "id" SERIAL NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "name" VARCHAR(100),
    "contact" VARCHAR(100),
    "message" VARCHAR(300),
    "id" SERIAL NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
