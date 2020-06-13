<?php

$posted = file_get_contents("php://input");

function isAllEmpty($age, $height, $weight, $hobby)
{
    return empty($age) && empty($height) && empty($weight) && empty($hobby);
}

if (!empty($posted)) {
    $posted_formatted = json_decode($posted)->data;
    
    $age    = $posted_formatted->age;
    $height = $posted_formatted->height;
    $weight = $posted_formatted->weight;
    $hobby  = $posted_formatted->hobby;
    
    $body = "age: {$age}, height: {$height}, weight: {$weight}, hobby: {$hobby}";
    
    if (isAllEmpty($age, $height, $weight, $hobby)) {
        http_response_code( 400 );
    } else {
        http_response_code( 200 );
        echo $body;
    }
} else {
    echo 'POSTしてください';
}

?>