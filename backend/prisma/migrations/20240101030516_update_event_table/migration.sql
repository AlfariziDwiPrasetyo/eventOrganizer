-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `Event_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `ticket` DROP FOREIGN KEY `Ticket_eventId_fkey`;
