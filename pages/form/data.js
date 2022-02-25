const education = {
    id: 456,
    college: {
      id: 1,
      university: "IUPUI",
      school: "Engineering",
      period: {
        id: 1,
        start: "2020-01-22",
        end: "2020-07-12"
      },
      fees: [
        {
          id: 1,
          room: 756,
          uber: 345.7,
          personal: 235,
          books: 190,
          tuition: 4500
        }
      ]
    }
  };
  
  export const education_period = {
    id: 456,
    category: "CA",
    nature: "N",
    college: {
      id: 1,
      university: "IUPUI",
      school: "Engineering",
      fees: [
        {
          id: 1,
          room: 456,
          uber: 345.7,
          personal: 235,
          books: 190,
          tuition: 4500,
          period: {
            id: 1,
            start: "2020-01-22",
            end: "2020-07-12"
          }
        }
      ]
    }
  };
  