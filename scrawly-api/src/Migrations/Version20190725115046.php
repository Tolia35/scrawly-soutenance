<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190725115046 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP INDEX IDX_34DCD1763C947C0F');
        $this->addSql('CREATE TEMPORARY TABLE __temp__person AS SELECT id, poll_id, username, email FROM person');
        $this->addSql('DROP TABLE person');
        $this->addSql('CREATE TABLE person (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, poll_id INTEGER NOT NULL, username VARCHAR(255) NOT NULL COLLATE BINARY, email VARCHAR(255) NOT NULL COLLATE BINARY, CONSTRAINT FK_34DCD1763C947C0F FOREIGN KEY (poll_id) REFERENCES poll (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO person (id, poll_id, username, email) SELECT id, poll_id, username, email FROM __temp__person');
        $this->addSql('DROP TABLE __temp__person');
        $this->addSql('CREATE INDEX IDX_34DCD1763C947C0F ON person (poll_id)');
        $this->addSql('DROP INDEX IDX_5D0E6A24998666D1');
        $this->addSql('DROP INDEX IDX_5D0E6A24217BBB47');
        $this->addSql('CREATE TEMPORARY TABLE __temp__person_choice AS SELECT person_id, choice_id FROM person_choice');
        $this->addSql('DROP TABLE person_choice');
        $this->addSql('CREATE TABLE person_choice (person_id INTEGER NOT NULL, choice_id INTEGER NOT NULL, PRIMARY KEY(person_id, choice_id), CONSTRAINT FK_5D0E6A24217BBB47 FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_5D0E6A24998666D1 FOREIGN KEY (choice_id) REFERENCES choice (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO person_choice (person_id, choice_id) SELECT person_id, choice_id FROM __temp__person_choice');
        $this->addSql('DROP TABLE __temp__person_choice');
        $this->addSql('CREATE INDEX IDX_5D0E6A24998666D1 ON person_choice (choice_id)');
        $this->addSql('CREATE INDEX IDX_5D0E6A24217BBB47 ON person_choice (person_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__poll AS SELECT id, title, slug, created_at FROM poll');
        $this->addSql('DROP TABLE poll');
        $this->addSql('CREATE TABLE poll (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title VARCHAR(255) NOT NULL COLLATE BINARY, slug VARCHAR(255) NOT NULL COLLATE BINARY, created_at DATETIME NOT NULL)');
        $this->addSql('INSERT INTO poll (id, title, slug, created_at) SELECT id, title, slug, created_at FROM __temp__poll');
        $this->addSql('DROP TABLE __temp__poll');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_84BCFA45989D9B62 ON poll (slug)');
        $this->addSql('DROP INDEX IDX_C1AB5A923C947C0F');
        $this->addSql('CREATE TEMPORARY TABLE __temp__choice AS SELECT id, poll_id, date FROM choice');
        $this->addSql('DROP TABLE choice');
        $this->addSql('CREATE TABLE choice (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, poll_id INTEGER NOT NULL, date DATE NOT NULL, CONSTRAINT FK_C1AB5A923C947C0F FOREIGN KEY (poll_id) REFERENCES poll (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO choice (id, poll_id, date) SELECT id, poll_id, date FROM __temp__choice');
        $this->addSql('DROP TABLE __temp__choice');
        $this->addSql('CREATE INDEX IDX_C1AB5A923C947C0F ON choice (poll_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP INDEX IDX_C1AB5A923C947C0F');
        $this->addSql('CREATE TEMPORARY TABLE __temp__choice AS SELECT id, poll_id, date FROM choice');
        $this->addSql('DROP TABLE choice');
        $this->addSql('CREATE TABLE choice (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, poll_id INTEGER NOT NULL, date DATE NOT NULL)');
        $this->addSql('INSERT INTO choice (id, poll_id, date) SELECT id, poll_id, date FROM __temp__choice');
        $this->addSql('DROP TABLE __temp__choice');
        $this->addSql('CREATE INDEX IDX_C1AB5A923C947C0F ON choice (poll_id)');
        $this->addSql('DROP INDEX IDX_34DCD1763C947C0F');
        $this->addSql('CREATE TEMPORARY TABLE __temp__person AS SELECT id, poll_id, username, email FROM person');
        $this->addSql('DROP TABLE person');
        $this->addSql('CREATE TABLE person (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, poll_id INTEGER NOT NULL, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL)');
        $this->addSql('INSERT INTO person (id, poll_id, username, email) SELECT id, poll_id, username, email FROM __temp__person');
        $this->addSql('DROP TABLE __temp__person');
        $this->addSql('CREATE INDEX IDX_34DCD1763C947C0F ON person (poll_id)');
        $this->addSql('DROP INDEX IDX_5D0E6A24217BBB47');
        $this->addSql('DROP INDEX IDX_5D0E6A24998666D1');
        $this->addSql('CREATE TEMPORARY TABLE __temp__person_choice AS SELECT person_id, choice_id FROM person_choice');
        $this->addSql('DROP TABLE person_choice');
        $this->addSql('CREATE TABLE person_choice (person_id INTEGER NOT NULL, choice_id INTEGER NOT NULL, PRIMARY KEY(person_id, choice_id))');
        $this->addSql('INSERT INTO person_choice (person_id, choice_id) SELECT person_id, choice_id FROM __temp__person_choice');
        $this->addSql('DROP TABLE __temp__person_choice');
        $this->addSql('CREATE INDEX IDX_5D0E6A24217BBB47 ON person_choice (person_id)');
        $this->addSql('CREATE INDEX IDX_5D0E6A24998666D1 ON person_choice (choice_id)');
        $this->addSql('DROP INDEX UNIQ_84BCFA45989D9B62');
        $this->addSql('CREATE TEMPORARY TABLE __temp__poll AS SELECT id, title, slug, created_at FROM poll');
        $this->addSql('DROP TABLE poll');
        $this->addSql('CREATE TABLE poll (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL)');
        $this->addSql('INSERT INTO poll (id, title, slug, created_at) SELECT id, title, slug, created_at FROM __temp__poll');
        $this->addSql('DROP TABLE __temp__poll');
    }
}
