<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Chapitre4Controller extends AbstractController
{
    #[Route('/phantomblood/diolenvahisseur/chapitre4', name: 'app_chapitre4')]
    public function index(): Response
    {
        return $this->render('chapitre4/index.html.twig', [
            'controller_name' => 'Chapitre4Controller',
        ]);
    }
}
