<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Chapitre2Controller extends AbstractController
{
    #[Route('/phantomblood/tome1/chapitre2', name: 'app_chapitre2')]
    public function index(): Response
    {
        return $this->render('chapitre2/index.html.twig', [
            'controller_name' => 'Chapitre2Controller',
        ]);
    }
}
