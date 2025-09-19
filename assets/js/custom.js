jQuery(document).ready(function ($) {
  "use strict";

  $(function () {
    $("#tabs").tabs();
  });

  // Page loading animation

  $("#preloader").animate(
    {
      opacity: "0",
    },
    600,
    function () {
      setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    }
  );

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });
  if ($(".owl-testimonials").length) {
    $(".owl-testimonials").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: false,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 2,
          margin: 20,
        },
        992: {
          items: 2,
          margin: 30,
        },
      },
    });
  }
  if ($(".owl-partners").length) {
    $(".owl-partners").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: false,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 2,
          margin: 20,
        },
        992: {
          items: 4,
          margin: 30,
        },
      },
    });
  }

  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: "linear",
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

  function visible(partial) {
    var $t = partial,
      $w = jQuery(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return (
      compareBottom <= viewBottom && compareTop >= viewTop && $t.is(":visible")
    );
  }

  $(window).scroll(function () {
    if (visible($(".count-digit"))) {
      if ($(".count-digit").hasClass("counter-loaded")) return;
      $(".count-digit").addClass("counter-loaded");
      $(".count-digit").each(function () {
        var $this = $(this);
        var text = $this.text();
        var hasPlus = text.includes("+");
        var isSpecialFormat = text === "24/7"; // Dodano za 24/7 format

        if (isSpecialFormat) {
          // Posebno rukovanje za 24/7
          jQuery({ Counter: 0 }).animate(
            { Counter: 24 },
            {
              duration: 1200,
              easing: "swing",
              step: function () {
                var currentValue = Math.ceil(this.Counter);
                $this.text(currentValue + "/7");
              },
              complete: function () {
                $this.text("24/7");
              },
            }
          );
        } else {
          // Postojeći kod za brojeve i brojeve sa +
          var cleanNumber = text.replace(/[^\d]/g, ""); // Uklanja sve što nije broj

          if (/^\d+/.test(cleanNumber) && cleanNumber !== "") {
            jQuery({ Counter: 0 }).animate(
              { Counter: cleanNumber },
              {
                duration: 1200,
                easing: "swing",
                step: function () {
                  var currentValue = Math.ceil(this.Counter);
                  // Dodaje + na kraju ako je originalno imao +
                  $this.text(hasPlus ? currentValue + "+" : currentValue);
                },
                complete: function () {
                  // Osigurava da finalna vrednost bude tačna
                  $this.text(hasPlus ? cleanNumber + "+" : cleanNumber);
                },
              }
            );
          } else {
            $this.text(text);
          }
        }
      });
    }
  });

  // Zameni services carousel deo u custom.js
});

document.addEventListener('DOMContentLoaded', function() {
            // Podaci o uslugama
            const services = [
                {
                    icon: 'fa-laptop',
                    title: 'Unapređujemo Vaše prisustvo na internetu',
                    description: 'Pravimo moderne, brze i optimizovane sajtove sa unikatnim dizajnom. Naš fokus je na funkcionalnosti, estetici i poslovnim rezultatima.',
                    features: ['Izrada websajta', 'Redizajn websajta', 'Održavanje websajta']
                },
                {
                    icon: 'fa-share-alt',
                    title: 'Podižemo Vašu poziciju na društvenim mrežama',
                    description: 'Gradimo i jačamo Vaš brend na društvenim mrežama kreiranjem modernog, vizuelno atraktivnog i angažovanog sadržaja.',
                    features: ['Fotografisanje sadržaja', 'Kreiranje reklama', 'Content strategija']
                },
                {
                    icon: 'fa-search',
                    title: 'Pomažemo Vam da prestignete konkurenciju na Google-u',
                    description: 'SEO je kičma digitalnog marketinga. Naš tim koristi alate i strategije koji pomažu da budete među prvima na Google-u.',
                    features: ['Analiza sajta', 'Praćenje konkurencije', 'SEO optimizacija']
                },
                {
                    icon: 'fa-code',
                    title: 'Kreiramo web aplikacije po Vašoj meri',
                    description: 'Od ideje do finalnog proizvoda, izrađujemo web aplikacije koje odgovaraju specifičnim potrebama Vašeg poslovanja i korisnika.',
                    features: ['Konsultacije', 'Strategija implementacije', 'Razvoj web aplikacije']
                }
            ];
            
            const carousel = document.getElementById('serviceCarousel');
            const indicatorsContainer = document.getElementById('indicators');
            let currentIndex = 0;
            
            // Generisanje kartica
            services.forEach((service, index) => {
                const card = document.createElement('div');
                card.className = 'service-card';
                card.innerHTML = `
                    <div class="service-icon">
                        <i class="fa ${service.icon}"></i>
                    </div>
                    <div class="service-content">
                        <h4>${service.title}</h4>
                        <p>${service.description}</p>
                        <div class="service-features">
                            ${service.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                        </div>
                    </div>
                `;
                carousel.appendChild(card);
                
                // Generisanje indikatora
                const indicator = document.createElement('div');
                indicator.className = 'indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.setAttribute('data-index', index);
                indicator.addEventListener('click', () => {
                    goToSlide(index);
                });
                indicatorsContainer.appendChild(indicator);
            });
            
            const cards = document.querySelectorAll('.service-card');
            const indicators = document.querySelectorAll('.indicator');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            // Funkcija za ažuriranje prikaza
            function updateCarousel() {
                cards.forEach((card, index) => {
                    card.classList.remove('center', 'left', 'right', 'hidden');
                    
                    // Računanje pozicije za svaku karticu
                    let position = (index - currentIndex + services.length) % services.length;
                    
                    if (position === 0) {
                        card.classList.add('center');
                    } else if (position === 1) {
                        card.classList.add('right');
                    } else if (position === services.length - 1) {
                        card.classList.add('left');
                    } else {
                        card.classList.add('hidden');
                    }
                });
                
                // Ažuriranje indikatora
                indicators.forEach((indicator, index) => {
                    if (index === currentIndex) {
                        indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active');
                    }
                });
            }
            
            // Funkcija za promenu slajda
            function goToSlide(index) {
                currentIndex = index;
                updateCarousel();
            }
            
            // Funkcija za sledeći slajd
            function nextSlide() {
                currentIndex = (currentIndex + 1) % services.length;
                updateCarousel();
            }
            
            // Funkcija za prethodni slajd
            function prevSlide() {
                currentIndex = (currentIndex - 1 + services.length) % services.length;
                updateCarousel();
            }
            
            // Event listeneri za dugmad
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);
            
            // Inicijalno postavljanje
            updateCarousel();
            
            // Automatska rotacija (opciono)
            let autoRotate = setInterval(nextSlide, 5000);
            
            // Zaustavi automatsku rotaciju kada je miš iznad carousela
            carousel.addEventListener('mouseenter', () => {
                clearInterval(autoRotate);
            });
            
            // Nastavi automatsku rotaciju kada miš napusti carousel
            carousel.addEventListener('mouseleave', () => {
                autoRotate = setInterval(nextSlide, 5000);
            });
            
            // Podrška za dodir na mobilnim uređajima
            let touchStartX = 0;
            let touchEndX = 0;
            
            carousel.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            }, false);
            
            carousel.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, false);
            
            function handleSwipe() {
                const minSwipeDistance = 50; // Minimalna dužina za swipe
                
                if (touchStartX - touchEndX > minSwipeDistance) {
                    // Swipe levo - sledeći slajd
                    nextSlide();
                } else if (touchEndX - touchStartX > minSwipeDistance) {
                    // Swipe desno - prethodni slajd
                    prevSlide();
                }
            }
        });
