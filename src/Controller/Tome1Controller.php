<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Tome1Controller extends AbstractController
{
    #[Route('/phantomblood/tome1', name: 'app_tome1')]
    public function index(): Response
    {
        return $this->render('tome1/index.html.twig', [
            'controller_name' => 'Tome1Controller',
        ]);
    }
}
