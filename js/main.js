document.addEventListener('DOMContentLoaded', () => {
  // Section One
  const tween = new TimelineMax();
  tween
    // from ('target', duration, {position, ease})
    .from('.section_1_01', 4, {
      y: -100,
      x: -150,
      ease: Power3.easeInOut
    })
    .from(
      '.section_1_02',
      4,
      {
        y: -150,
        x: -250,
        ease: Power3.easeInOut
      },
      '-=4'
    )
    .from(
      '.section_1_03',
      4,
      {
        y: -80,
        x: -100,
        ease: Power3.easeInOut
      },
      '-=4'
    )
    .from(
      '.section_1_04',
      4,
      {
        y: -100,
        x: -150,
        ease: Power3.easeInOut
      },
      '-=4'
    )
    .from(
      '.section_1_05',
      4,
      {
        y: -80,
        x: -200,
        ease: Power3.easeInOut
      },
      '-=4'
    )
    .from(
      '.section_1_06',
      4,
      {
        y: -100,
        x: -350,
        ease: Power3.easeInOut
      },
      '-=4'
    )
    .from(
      '.section_1_07',
      4,
      {
        y: -50,
        x: -150,
        ease: Power3.easeInOut
      },
      '-=4'
    )
    .from(
      '.section_1_08',
      4,
      {
        y: 50,
        x: -350,
        ease: Power3.easeInOut
      },
      '-=4'
    )
    .from(
      '.section_1_09',
      4,
      {
        y: 100,
        x: -200,
        ease: Power3.easeInOut
      },
      '-=4'
    );

  // Section Two
  const tween2 = new TimelineMax();
  tween2
    .to('.section_2_01', 4, {
      y: -250,
      ease: Power3.easeInOut
    })
    .to(
      '.section_2_02',
      4,
      {
        y: -200,
        ease: Power3.easeInOut
      },
      '-=4'
    )
    .to(
      '.section_2_03',
      4,
      {
        y: -100,
        ease: Power3.easeInOut
      },
      '-=4'
    )
    .to(
      '.section_2_04',
      4,
      {
        y: 0,
        ease: Power3.easeInOut
      },
      '-=4'
    )
    .to(
      '.section_2_05',
      4,
      {
        y: 150,
        ease: Power3.easeInOut
      },
      '-=4'
    )
    .to(
      '.section_2_06',
      4,
      {
        y: 250,
        ease: Power3.easeInOut
      },
      '-=4'
    );

  // Section Thre
  const tween3 = new TimelineMax();
  tween3
    .to('.section_3_01', 4, {
      autoAlpha: 0
    })
    .from(
      '.section_3_02',
      4,
      {
        autoAlpha: 0
      },
      '-=4'
    )
    .from('.section_3_03', 4, {
      autoAlpha: 0
    })
    .from('.section_3_04', 4, {
      autoAlpha: 0
    });

  const controller = new ScrollMagic.Controller();

  // Scene 1
  const scene = new ScrollMagic.Scene({
    // Where the animation happen
    triggerElement: '.section-one',
    // The animation duration
    duration: '100%',
    // The indicator target
    triggerHook: 0,
    offset: '250'
  })
    .setTween(tween)
    .setPin('.section-one')
    .addTo(controller);

  // Scene 2
  const scene2 = new ScrollMagic.Scene({
    triggerElement: '.section-two',
    duration: '100%',
    triggerHook: 0,
    offset: '180'
  })
    .setTween(tween2)
    .setPin('.section-two')
    .addTo(controller);

  // Scene 3
  const scene3 = new ScrollMagic.Scene({
    triggerElement: '.section-thre',
    duration: '100%',
    triggerHook: 0,
    offset: '200'
  })
    .setTween(tween3)
    .setPin('.section-thre')
    .addTo(controller);
});
