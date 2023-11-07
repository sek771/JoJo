<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Chapitre6Controller extends AbstractController
{
    #[Route('/phantomblood/diolenvahisseur/chapitre6', name: 'app_chapitre6')]
    public function index(): Response
    {
        return $this->render('chapitre6/index.html.twig', [
            'controller_name' => 'Chapitre6Controller',
        ]);
    }
}
