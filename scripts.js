
  document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container', {
      chart: {
        type: 'timeline'
      },
      title: {
        text: 'Data Science Journey Timeline'
      },
      xAxis: {
        type: 'datetime',
        visible: true
      },
      yAxis: {
        visible: false
      },
      series: [{
        dataLabels: {
          allowOverlap: false,
          format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > {point.x:%b %Y}</span><br/>{point.label}'
        },
        marker: {
          symbol: 'circle'
        },
        data: [
        {
            x: Date.UTC(2024, 10),
            name: 'GenAI Certified', 
            label: 'GenAI Certified',
            description: 'Recieved Certification from John Snow Labs for Applied Generative AI Data Scientist'
            },
            {
            x: Date.UTC(2024, 9),
            name: 'Hired as Data Scientist for GSA', 
            label: 'Hired as Data Scientist for GSA',
            description: 'In my new role as a Data Scientist overseeing all federal data, I took on the responsibility of managing and analyzing large, complex datasets to uncover insights that drive decision-making and policy implementation.'
            },
            {
            x: Date.UTC(2024, 1),
            name: 'Employee Of The Year', 
            label: '2023 Employee of the Year',
            description: 'This recognition highlighted my work in developing and implementing cutting-edge data science methods to solve complex challenges, complex datasets to uncover insights that drive decision-making and policy implementation.'
            },
            {
            x: Date.UTC(2023, 4),
            name: 'Personnel Database Delevered', 
            label: 'Personnel Data & PowerBI Tool',
            description: 'Project lead for developing and designing personnel database and BI tools that serve a world wide DoD mission.'
            },
            {
                x: Date.UTC(2022, 11),
                name: 'Implemented Data Programs and Techniques into Career Program', 
                label: 'Data programs and implementation',
                description: 'I successfully implemented data-driven programs and techniques into a career development program that had previously not utilized these tools.'
                },
        {
            x: Date.UTC(2020, 7),
            name: 'Completed QA Internship', 
            label: 'Completed QA Internship',
            description: "Upon completing my internship, I was relocated to Lexington, KY, where I assisted in the demilitarization of toxic chemical munitions."
        },

          {
            x: Date.UTC(2019, 5),
            name: 'Nominated Rookie Programmer of the Year', 
            label: 'Nominated Rookie Programmer of the Year',
            description: 'The Ammunition Reference Guide let to MilWiki award nominations.'
          },
          {
            x: Date.UTC(2018, 8),
            name: 'First Database',
            label: 'Created my first database',
            description: 'Integrated with a UI to help users search federal regulations dubbed "The Ammunition Reference Guide."'
          },
          // Add more events as needed
        ]
      }]
    });
  });

  
