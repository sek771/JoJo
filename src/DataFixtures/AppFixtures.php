<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Book;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private $userPasswordHasher;

    public function __construct(UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->userPasswordHasher = $userPasswordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user->setEmail("user@jojo.fr");
        $user->setPassword($this->userPasswordHasher->hashPassword($user, "user@jojo.fr"));
        $user->setRoles(["ROLE_USER"]);
        $manager->persist($user);

        $userAdmin = new User();
        $userAdmin->setEmail("admin@jojo.fr");
        $userAdmin->setPassword($this->userPasswordHasher->hashPassword($userAdmin, "admin@jojo.fr"));
        $userAdmin->setRoles(["ROLE_ADMIN"]);
        $manager->persist($userAdmin);

        for ($i = 0; $i < 100; $i++) {

            $book = new Book();
            $book->setTitle("Titre : " . $i);
            $book->setSubTitle("Sous-titre :" . $i);
            $book->setCountry("Pays : " . $i);
            $book->setAuthors(["Auteur : " . $i]);
            $book->setEditor(["Editeur : " . $i]);
            $book->setImage("https://fr.shopping.rakuten.com/photo/888712840_L.jpg");
            $manager ->persist($book);
        }
        $manager->flush();
    }
}
