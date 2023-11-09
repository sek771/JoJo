<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Chapitre7Controller extends AbstractController
{
    #[Route('/phantomblood/tome1/chapitre7', name: 'app_chapitre7')]
    public function index(): Response
    {
        return $this->render('chapitre7/index.html.twig', [
            'controller_name' => 'Chapitre7Controller',
        ]);
    }
}
