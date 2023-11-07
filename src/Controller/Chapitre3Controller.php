<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Chapitre3Controller extends AbstractController
{
    #[Route('/phantomblood/diolenvahisseur/chapitre3', name: 'app_chapitre3')]
    public function index(): Response
    {
        return $this->render('chapitre3/index.html.twig', [
            'controller_name' => 'Chapitre3Controller',
        ]);
    }
}
