/*
 ** comment : chart 샘플입니다.
 */

document.addEventListener('DOMContentLoaded', function () {
  // 도넛 차트 데이터에 단위를 추가하는 함수
  function addUnitToData(value, unit) {
    let datas = value.dataset.data;
    let persent = 0;
    let sum = 0;
    for (let i = 0; i < datas.length; i++) {
      sum += datas[i];
    }
    persent = Math.round((value.raw / sum) * 100);
    return ' ' + value.formattedValue + unit + ' (' + persent + '%)';
  }

  const homeChartData1 = {
    labels: ['전력 누적 사용량', '전력 계획 사용량'],
    datasets: [
      {
        data: [13340, 5340],
        borderColor: ['rgb(90, 191, 131)', 'rgb(222, 242, 230)'],
        backgroundColor: ['rgb(90, 191, 131)', 'rgb(222, 242, 230)'],
        hoverOffset: 4,
      },
    ],
  };
  const homeChartData2 = {
    labels: ['용수 누적 사용량', '용수 계획 사용량'],
    datasets: [
      {
        data: [13340, 13340],
        borderColor: ['rgb(29, 109, 235)', 'rgb(216, 231, 254)'],
        backgroundColor: ['rgb(29, 109, 235)', 'rgb(216, 231, 254)'],
        hoverOffset: 4,
      },
    ],
  };

  const analyzeChartData1 = {
    labels: ['연료 누적 사용량', '연료 계획 사용량'],
    datasets: [
      {
        data: [13340, 13340],
        borderColor: ['rgb(90, 191, 131)', 'rgb(222, 242, 230)'],
        backgroundColor: ['rgb(90, 191, 131)', 'rgb(222, 242, 230)'],
        hoverOffset: 4,
      },
    ],
  };

  const analyzeChartData2 = {
    labels: ['전력 누적 사용량', '전력 계획 사용량'],
    datasets: [
      {
        data: [13340, 13340],
        borderColor: ['rgba(255, 171, 73, 1)', 'rgba(255, 236, 215, 1)'],
        backgroundColor: ['rgba(255, 171, 73, 1)', 'rgba(255, 236, 215, 1)'],
        hoverOffset: 4,
      },
    ],
  };

  const analyzeChartData3 = {
    labels: ['용수 누적 사용량', '용수 계획 사용량'],
    datasets: [
      {
        data: [13340, 13340],
        borderColor: ['rgb(29, 109, 235)', 'rgb(216, 231, 254)'],
        backgroundColor: ['rgb(29, 109, 235)', 'rgb(216, 231, 254)'],
        hoverOffset: 4,
      },
    ],
  };

  const reportChartData1 = {
    labels: ['정상', '불량'],
    datasets: [
      {
        data: [50, 50],
        borderColor: ['rgb(90, 191, 131)', 'rgb(222, 242, 230)'],
        backgroundColor: ['rgb(90, 191, 131)', 'rgb(222, 242, 230)'],
        hoverOffset: 4,
      },
    ],
  };

  const reportChartData2 = {
    labels: ['정상', '불량'],
    datasets: [
      {
        data: [20, 80],
        borderColor: ['rgb(29, 109, 235)', 'rgb(216, 231, 254)'],
        backgroundColor: ['rgb(29, 109, 235)', 'rgb(216, 231, 254)'],
        hoverOffset: 4,
      },
    ],
  };

  const doughnutSimpleOption = {};

  const doughnutOption = {
    plugins: {
      legend: {
        display: true, // 범례 표시 여부 설정
        position: 'bottom', // 범례 위치 설정 (top, bottom, left, right 중 선택)
        labels: {
          color: '#353535', // 범례 텍스트 색상 설정
          boxWidth: 12, // 범례 항목의 상자 너비 설정
          boxHeight: 12, // 범례 항목의 상자 높이 설정
          font: {
            size: 12, // 범례 텍스트 크기 설정
            weight: '500', // 범례 텍스트 굵기 설정
          },
        },
      },
    },
    rotation: -90,
    circumference: 180,
  };

  let documentType = 'main';
  if (document.querySelector('.main-container')) {
    documentType = 'main';
  } else if (
    document.querySelector('.sub-page-container') &&
    document.querySelector('.sub-page-container').className.indexOf('energy-usage') > -1
  ) {
    documentType = 'energe';
  } else if (
    document.querySelector('.sub-page-container') &&
    document.querySelector('.sub-page-container').className.indexOf('building-inquiry') > -1
  ) {
    documentType = 'report';
  }
  const doughnutContainers = document.querySelectorAll('.doughnut-chart');

  if (doughnutContainers) {
    doughnutContainers.forEach(function (container) {
      let data = null;
      let option = null;
      let unit = null;

      if (documentType === 'main') {
        if (container.className.indexOf('green') > -1) {
          data = homeChartData1;
          unit = 'kWh';
        } else {
          data = homeChartData2;
          unit = 'm';
        }

        const doughnutChart = new Chart(container, {
          type: 'doughnut',
          data: data,
          options: {
            hover: { mode: null },
            plugins: {
              legend: {
                display: false, // 범례 표시 여부 설정
              },
              tooltip: {
                displayColors: false,
                backgroundColor: '#7f7f7f',
                titleFontColor: '#fff',
                bodyFontColor: '#fff',
                titleFont: {
                  size: 14,
                  weight: '400',
                },
                titleAlign: 'center',
                bodyFont: {
                  size: 14,
                  weight: '400',
                },
                bodyAlign: 'center',
                callbacks: {
                  label: function (tooltipItem, data) {
                    return addUnitToData(tooltipItem, unit);
                  },
                },
              },
            },
            rotation: -90,
            circumference: 180,
          },
        });
      } else {
        let data = null;
        let option = null;
        let unit = null;
        let simple = false;

        if (documentType === 'energe') {
          if (container.className.indexOf('green') > -1) {
            data = analyzeChartData1;
            unit = 'NM';
          } else if (container.className.indexOf('orange') > -1) {
            data = analyzeChartData2;
            unit = 'kWh';
          } else {
            data = analyzeChartData3;
            unit = 'ml';
          }
        } else {
          if (container.className.indexOf('green') > -1) {
            data = reportChartData1;
            unit = '건';
          } else {
            data = reportChartData2;
            unit = '건';
          }
        }

        if (container.className.indexOf('simple') > -1) {
          simple = false;
        } else {
          simple = true;
        }

        const doughnutChart = new Chart(container, {
          type: 'doughnut',
          data: data,
          options: {
            hover: { mode: null },
            plugins: {
              legend: {
                display: simple,
                position: 'bottom',
                align: 'center',
                labels: {
                  color: '#7f7f7f',
                  boxWidth: 8,
                  boxHeight: 8,
                  font: {
                    size: 12,
                    weight: '500',
                  },
                  usePointStyle: true,
                  pointStyle: 'rectRounded',
                },
                onClick: (e) => e.stopPropagation(),
              },
              tooltip: {
                displayColors: false,
                padding: 16,
                backgroundColor: '#7f7f7f',
                titleFontColor: '#fff',
                bodyFontColor: '#fff',
                titleFont: {
                  size: 16,
                  weight: '400',
                },
                titleAlign: 'center',
                bodyFont: {
                  size: 16,
                  weight: '400',
                },
                bodyAlign: 'center',
                callbacks: {
                  label: function (tooltipItem, data) {
                    return addUnitToData(tooltipItem, unit);
                  },
                },
              },
            },
            rotation: -90,
            circumference: 180,
          },
        });
      }
    });
  }

  /*
   ** 에너지 실적 > 라인 차트 샘플
   */

  const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
      {
        label: '사용 실적',
        data: [10000, 5000, 5000, 5000, 6000, 13000, 15000, 15000, 14000, 9000, 6000, 6000],
        fill: true,
        borderWidth: 2,
        borderColor: '#1D6CEB',
        backgroundColor: 'rgba(29, 108, 235, 0.1)', // fill 색상 설정
        lineTension: 0,
        pointBackgroundColor: '#ffffff',
      },
      {
        label: '계획 실적',
        data: [5000, 3000, 3000, 8000, 12000, 12000, 5000, 5000, 10000, 9000, 8000, 7000],
        fill: true,
        borderWidth: 2,
        borderColor: '#dcdcdc',
        backgroundColor: 'rgba(220, 220, 220, 0.1)', // fill 색상 설정
        lineTension: 0,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(220, 220, 220, 0)',
        pointBorderColor: 'rgba(220, 220, 220, 0)',
      },
    ],
  };

  const options = {
    hover: {
      mode: null, // 포인트 호버 효과 비활성화
    },
    plugins: {
      legend: {
        display: true, // 범례 표시 여부 설정
        position: 'bottom', // 범례 위치 설정 (top, bottom, left, right 중 선택)
        align: 'start', // 범례 정렬을 왼쪽으로 설정
        labels: {
          color: '#7f7f7f', // 범례 텍스트 색상 설정
          boxWidth: 12, // 범례 항목의 상자 너비 설정
          boxHeight: 12, // 범례 항목의 상자 높이 설정
          font: {
            size: 12, // 범례 텍스트 크기 설정
            weight: '500', // 범례 텍스트 굵기 설정
          },
          useBorderRadius: true,
          borderRadius: 4,
        },
        onClick: (e) => e.stopPropagation(),
      },

      datalabels: {
        color: 'red',
      },

      tooltip: {
        displayColors: false,
        padding: 16,
        backgroundColor: '#7f7f7f',
        titleFontColor: '#fff',
        bodyFontColor: '#fff',
        titleFont: {
          size: 16,
          weight: '400',
        },
        titleAlign: 'center',
        bodyFont: {
          size: 16,
          weight: '400',
        },
        bodyAlign: 'center',
        callbacks: {
          title: function (context) {
            return context[0].label + ' ' + context[0].dataset.label;
          },
          label: function (context) {
            return context.formattedValue + '원';
          },
        },
      },
    },
    layout: {
      padding: {
        top: 40,
        right: 32,
        bottom: 22,
        left: 32,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // x축 눈금 선 숨기기
        },
      },
      y: {
        display: false,
        grid: {
          display: false, // x축 눈금 선 숨기기
        },
        suggestedMin: 0,
        ticks: {
          stepSize: 1000,
          max: 20000,
        },
      },
    },
  };

  const lineContainers = document.querySelectorAll('.line-chart-container');
  if (lineContainers) {
    lineContainers.forEach(function (container) {
      const lineGraph = new Chart(container, {
        type: 'line',
        data: data,
        options: options,
      });
    });
  }
});
