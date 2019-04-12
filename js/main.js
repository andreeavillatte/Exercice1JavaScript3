// Recuperer/declarer la variable
var image = document.getElementById('image1');
// quand on survol l'image on lance la fonction simple ()
// pour changer le border de l'element (image)
image.addEventListener('mouseover', function(){
    document.getElementById('image1').style.border = '3px red outset';
});
// quand on quite l'image on lance la fonction simple ()
// pour réinitialiser le border de l'element (image)
image.addEventListener('mouseout', function(){
    document.getElementById('image1').style.border = '';
});
