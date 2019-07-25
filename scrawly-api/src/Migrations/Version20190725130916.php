<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190725130916 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TABLE person (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, poll_id INTEGER NOT NULL, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE INDEX IDX_34DCD1763C947C0F ON person (poll_id)');
        $this->addSql('CREATE TABLE person_choice (person_id INTEGER NOT NULL, choice_id INTEGER NOT NULL, PRIMARY KEY(person_id, choice_id))');
        $this->addSql('CREATE INDEX IDX_5D0E6A24217BBB47 ON person_choice (person_id)');
        $this->addSql('CREATE INDEX IDX_5D0E6A24998666D1 ON person_choice (choice_id)');
        $this->addSql('CREATE TABLE poll (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_84BCFA45989D9B62 ON poll (slug)');
        $this->addSql('CREATE TABLE choice (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, poll_id INTEGER NOT NULL, date DATE NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C1AB5A92AA9E377A ON choice (date)');
        $this->addSql('CREATE INDEX IDX_C1AB5A923C947C0F ON choice (poll_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP TABLE person');
        $this->addSql('DROP TABLE person_choice');
        $this->addSql('DROP TABLE poll');
        $this->addSql('DROP TABLE choice');
    }
}
