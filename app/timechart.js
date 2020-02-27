import * as d3 from 'd3';
import * as c3 from 'c3';

class Chart { 

    constructor(target, candidate) {
      this.target = target;
      this.candidate = candidate;
      this.chartCounts = null;
    }
  
    render() {
      var self = this;
  
      var  padding = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 30,
        };

    var dataCandidates = [
        ['Amy Klobuchar',33,60,92,9,25,43,32,45,32,18,40,28,61],
        ['Bernie Sanders',27,53,100,22,38,72,56,57,100,100,100,51,100],
        ['Elizabeth Warren',100,55,13,6,16,33,37,42,62,53,56,25,33],
        ['Joe Biden',20,32,41,100,100,100,100,76,60,54,85,39,92],
        ['Michael Bloomberg',2,6,2,1,0,3,0,1,0,2,4,100,8],
        ['Pete Buttigieg',2,13,8,44,53,74,69,43,23,13,35,44,36]
    ];

    var dataTrends = [
        ['trend',33,null,null,null,null,null,null,null,null,null,null,null,61],
        ['trend',4,null,null,null,null,null,null,null,null,null,null,null,89],
        ['trend',27,null,null,null,null,null,null,null,null,null,null,null,100],
        ['trend',4,null,null,null,null,null,null,null,null,null,null,null,6],
        ['trend',0,null,null,null,null,null,null,null,null,null,null,null,0],
        ['trend',100,null,null,null,null,null,null,null,null,null,null,null,33]
    ];

    console.log(dataCandidates)

    var colors = ['#80ADAD', '#636363', '#8CBF82', '#7F98AA', '#aaaaaa', '#7D739C', '#b37862', '#aaaaaa', '#aaaaaa', '#aaaaaa', '#aaaaaa', '#DEA381', '#aaaaaa', '#9E403C'];
      
      self.chartCounts = c3.generate({
          bindto: self.target,
          padding: padding,
          data: {
                columns: [
                    dataCandidates[self.candidate],
                    dataTrends[self.candidate]
                ],
            type: 'spline',
            colors: {
                'Amy Klobuchar': colors[self.candidate],
                'Bernie Sanders': colors[self.candidate],
                'Elizabeth Warren': colors[self.candidate],
                'Joe Biden': colors[self.candidate],
                'Michael Bloomberg': colors[self.candidate],
                'Pete Buttigieg': colors[self.candidate],
                'trend': '#333333'
            },
          },
            legend: {
              show: false
            },
            line: {
              connectNull: true
            },
            point: {
                show: true, 
                r: function(d) { if (d.x == 12 || d.x == 0) { return 4; } else { return 0; } }
            },
            axis: {
                  // rotated: true,
                  y: {
                        max: 100,
                        min: 0,
                        padding: {bottom: 0, top: 20},
                        tick: {
                         count: 4,
                         values: [0,25,50,75,100],
                         format: d3.format(',.0f')
                        }
                    },
                x: {
                  type: 'category',
                //   categories: ['Dec. 30, 2018','Jan. 06, 2019','Jan. 13, 2019','Jan. 20, 2019','Jan. 27, 2019','Feb. 03, 2019','Feb. 10, 2019','Feb. 17, 2019','Feb. 24, 2019','Mar. 03, 2019','Mar. 10, 2019','Mar. 17, 2019','Mar. 24, 2019','Mar. 31, 2019','Apr. 07, 2019','Apr. 14, 2019','Apr. 21, 2019','Apr. 28, 2019','May 05, 2019','May 12, 2019','May 19, 2019','May 26, 2019','Jun. 02, 2019','Jun. 09, 2019','Jun. 16, 2019','Jun. 23, 2019','Jun. 30, 2019','Jul. 07, 2019','Jul. 14, 2019','Jul. 21, 2019','Jul. 28, 2019','Aug. 04, 2019','Aug. 11, 2019','Aug. 18, 2019','Aug. 25, 2019','Sep. 01, 2019','Sep. 08, 2019','Sep. 15, 2019','Sep. 22, 2019','Sep. 29, 2019','Oct. 06, 2019','Oct. 13, 2019','Oct. 20, 2019','Oct. 27, 2019','Nov. 03, 2019','Nov. 10, 2019','Nov. 17, 2019','Nov. 24, 2019','Dec. 01, 2019','Dec. 08, 2019','Dec. 15, 2019','Dec. 22, 2019','Dec. 29, 2019'],
                    categories: ['Dec. 30, 2018',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','Dec. 29, 2019'],
                  padding: {right: 0, left: 0},
                        tick: {
                            // count: 2,
                            // culling: {
                            //     max: 10
                            // },
                        //  rotate: -75,
                         multiline: false
                        }
                }
            },
          grid: {
             focus:{
                  show:false
                },
            }
    });
  
    }
  }
  
  export { Chart as default }