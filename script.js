document.addEventListener('DOMContentLoaded', function() {
    var h1Texts = ["FiveM Stellar Client", "EFT Stellar Client"];
    var h2Texts = ["The best up to date FiveM external client.", "The best up to date EFT external client."];
    var h1Index = 0;
    var h2Index = 0;

    document.getElementById('priceSelector').addEventListener('change', function() {
        var selectedPrice = this.value;
        var priceElements = document.getElementsByClassName('price-fivem');
        for(var i = 0; i < priceElements.length; i++) {
            priceElements[i].innerHTML = '<span>$</span>' + selectedPrice;
        }
    });

    setInterval(function() {
        var h1 = document.querySelector('h1');
        var h2 = document.querySelector('h2');
        var a = document.querySelector('.product-page')
        h1.style.opacity = 0;
        h2.style.opacity = 0;
        a.style.opacity = 0;

        setTimeout(function() {
            h1.textContent = h1Texts[h1Index];
            h2.textContent = h2Texts[h2Index];
            h1.style.opacity = 1;
            h2.style.opacity = 1;
            a.style.opacity = 1;

            h1Index = (h1Index + 1) % h1Texts.length;
            h2Index = (h2Index + 1) % h2Texts.length;
        }, 2000); 
    }, 4000);
});
