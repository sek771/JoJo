<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Chapitre8Controller extends AbstractController
{
    #[Route('/phantomblood/tome1/chapitre8', name: 'app_chapitre8')]
    public function index(): Response
    {
        return $this->render('chapitre8/index.html.twig', [
            'controller_name' => 'Chapitre8Controller',
        ]);
    }
}
