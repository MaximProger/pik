$(document).ready(function () {
  // Intro Slider
  $("#introSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      nextArrow: $(".intro__arrow--next"),
      prevArrow: $(".intro__arrow--prev"),
    });

  // About Slider
  $("#aboutSlide")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: $(".about__arrow--next"),
      prevArrow: $(".about__arrow--prev"),
      asNavFor: ".about__dots__wrapper",
    });

  $(".about__dots__wrapper").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor: "#aboutSlide",
    focusOnSelect: true,
  });

  // Catalog
  $("[data-catalog]").on("click", function (event) {
    event.preventDefault();
    $(".catalog__pannel_bot__item").removeClass("active");
    $(".catalog__item").removeClass("active");
    let $this = $(this);
    let catalogId = $this.data("catalog");
    $("#catalogTriangle").removeClass().addClass("catalog__triangle");
    $("#catalogTriangle").addClass("" + catalogId.slice(1) + "");
    $this.addClass("active");
    $(catalogId).addClass("active");
  });

  // Показать ещё
  $(".catalog__footer__showmore").on("click", function (event) {
    event.preventDefault();
    $(this).addClass("hidden");
    $(".catalog__header").removeClass("hidden");
  });

  // Contact Slider
  $("#contactSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: $(".contact__arrow--next"),
      prevArrow: $(".contact__arrow--prev"),
      asNavFor: ".contact__dots__wrapper",
    });

  $(".contact__dots__wrapper").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 3,
    asNavFor: "#contactSlide",
    focusOnSelect: true,
  });

  // Burger menu
  $("#nav__toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
  });

  // Модальное окно вход/регистрация
  $("#linkLogin").on("click", function () {
    $(".modal__link").removeClass("active");
    $(".modal__content__body").removeClass("active");
    $("#contentLogin").addClass("active");
    $(this).addClass("active");
  });

  $("#linkRegistr").on("click", function () {
    $(".modal__link").removeClass("active");
    $(".modal__content__body").removeClass("active");
    $("#contentRegistration").addClass("active");
    $(this).addClass("active");
  });

  $("#loginBtn").on("click", function () {
    $("#modalLogin").addClass("active");
  });

  $(".openCabinet").on("click", function () {
    $("#modalCabinet").addClass("active");
  });

  // Закрытие модальных окон
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $(".modal__wrapper").removeClass("active");
    }
  });

  $(document).mouseup(function (e) {
    let modalctr = $(".modal__wrapper");
    let modal = $(".modal");
    if (!modal.is(e.target) && modal.has(e.target).length === 0) {
      modalctr.removeClass("active");
    }
  });

  $(".modal__close").on("click", function () {
    $(".modal__wrapper").removeClass("active");
  });
});
