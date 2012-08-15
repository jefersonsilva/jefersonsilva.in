<?php

$i = 10;

while($i <= 80){

try{

shell_exec("wget http://imagens.catredeglobo.com.br/rede_globo/2012/newsletter_globo_cidadania/email_$i.jpg");
}catch (Exception $e) {
echo "erro ao baixar foto". $e->getMessage();
}


$i++;

}


?>
