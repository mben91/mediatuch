<?php

class PortfolioController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $this->view->portfolio = 'current-menu-item';
    }


}