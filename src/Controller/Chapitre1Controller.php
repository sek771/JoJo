<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Chapitre1Controller extends AbstractController
{
    #[Route('/phantomblood/tome1/chapitre1', name: 'app_chapitre1')]
    public function index(): Response
    {
        return $this->render('chapitre1/index.html.twig', [
            'controller_name' => 'Chapitre1Controller',
        ]);
    }
}
