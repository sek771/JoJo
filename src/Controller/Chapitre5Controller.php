<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Chapitre5Controller extends AbstractController
{
    #[Route('/phantomblood/tome1/chapitre5', name: 'app_chapitre5')]
    public function index(): Response
    {
        return $this->render('chapitre5/index.html.twig', [
            'controller_name' => 'Chapitre5Controller',
        ]);
    }
}
