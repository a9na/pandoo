var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3, 
  perMove: 1,
  rewind: true,
  padding: "6rem",
  gap: "1.5rem",
  pagination: false,
  breakpoints: {
    640: { 
      perPage: 3, 
      gap: "1.5rem",
      padding: "3rem",
    },
    375: { 
      perPage: 1, 
      gap: "1.5rem",
      padding: "2rem",
    },
  },
});

splide.mount();
