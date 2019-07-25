<?php
namespace App\DataFixtures;
use App\Entity\Poll;
use App\Entity\Choice;
use App\Entity\Person;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        /**
         * Poll
         */
        $poll1 = new Poll();
        $poll1->setTitle("Anniversaire Maïte");
        $poll1->setSlug("anniversaire-maîte");
        $poll1->setCreatedAt(new \DateTime('2019-08-26T10:00:00'));
        $manager->persist($poll1);
        $poll2 = new Poll();
        $poll2->setTitle("Anniversaire Olivier");
        $poll2->setSlug("anniversaire-olivier");
        $poll2->setCreatedAt(new \DateTime('2019-08-26T10:00:00'));
        $manager->persist($poll2);
        /**
         * Person
         */
        $person1 = new Person();
        $person1->setUsername("Tolio Maup");
        $person1->setEmail("tolmop@gmail.com");
        $person1->setPoll($poll1);
        $manager->persist($person1);
        $person2 = new Person();
        $person2->setUsername("Nicolas Binet");
        $person2->setEmail("nb@gmail.com");
        $person2->setPoll($poll1, $poll2);
        $manager->persist($person2);
        $person3 = new Person();
        $person3->setUsername("Nathalie niket");
        $person3->setEmail("nniket@gmail.com");
        $person3->setPoll($poll2);
        $manager->persist($person2);
        /**
         * Choice
         */
        $choice1 = new Choice();
        $choice1->setDate(new \DateTime('2019-11-24'));
        $choice1->setPoll($poll1);
        $choice1->addPerson($person1, $person2);
        $manager->persist($choice1);
        $choice2 = new Choice();
        $choice2->setDate(new \DateTime('2019-11-25'));
        $choice2->setPoll($poll1);
        $choice2->addPerson($person1, $person2);
        $manager->persist($choice2);
        $manager->flush();
        $choice3 = new Choice();
        $choice3->setDate(new \DateTime('2019-11-26'));
        $choice3->setPoll($poll2);
        $choice3->addPerson($person1);
        $manager->persist($choice3);
        $manager->flush();
    }
}