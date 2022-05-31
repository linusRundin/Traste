import React from 'react';
import PropTypes from 'prop-types';
import {Colors} from '../assets/Colors';
import Chart from 'react-apexcharts';
import {Paper} from '@mui/material';


/**
 * Constructor for custom chart.
 * @param {*} labels Starting value.
 * @param {*} seriesData Handler.
 * @return {Paper} Rendered field.
 */
function CustomChart({labels, seriesData, chartColor,
  labelColor, foreColor, size, marginLeft}) {
  const {innerWidth: width, innerHeight: height} = window;
  const state = {
    series: seriesData,
    options: {
      colors: chartColor,

      chart: {
        redrawOnParentResize: true,
        redrawOnWindowResize: true,
        foreColor: foreColor,
        width: '110%',
        type: 'donut',
      },
      labels: labels,
      theme: {
        monochrome: {
          enabled: false,
          color: Colors.trasteGreen,
          shadeTo: 'dark',
          shadeIntensity: 0.45,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            fontFamily: 'Gilroy',
            enabled: true,
            size: '42%',
          },
          minAngleToShowLabel: 0,
          expandOnClick: true,
          dataLabels: {
            offset: 0,
          },
        },
      },
      dataLabels: {
        style: {
          fontWeight: 'regular',
          fontSize: '12px',
          fontFamily: 'Gilroy',
          colors: labelColor,
        },
        enabled: true,
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + '%'];
        },
      },
      legend: {
        fontFamily: 'Gilroy',
        show: true,
        position: 'bottom',
        onItemClick: {
          toggleDataSeries: false,
        },
        onItemHover: {
          highlightDataSeries: false,
        },
      },
      // title: {
      //  text: 'Waste Data:',
      //  align: 'left',
      //  style: {
      //    fontWeight: 'regular',
      //    color: 'white',
      //    fontFamily: 'Gilroy',
      //  },
      // },
      stroke: {
        colors: ['transparent'],
      },
      tooltip: {
        enabled: true,
        enabledOnSeries: true,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        fillSeriesColor: false,
        theme: 'dark',
        style: {

          'fontSize': '12px',
          'fontFamily': 'Gilroy',
        },
      },
    },
  };
  return (
    <Paper elevation={0} fullWidth='true'
      sx={{display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: 'transparent', marginLeft: marginLeft}}>
      <Chart options={state.options}
        series={state.series} type="donut"
        width={1.3*width < height ? size : '650px'}
      />
    </Paper>
  );
}
/**
 * Return function for custom chart.
 * @return {Paper} Rendered field.
 */

CustomChart.defaultProps = {
  chartColor: [Colors.trasteGreen,
    Colors.trasteBlue,
    Colors.trasteTeal,
    Colors.trasteDarkPurple,
    Colors.trastePurple],
  labelColor: [Colors.trasteNavyBlue,
    'white',
    'white',
    'white',
    'white'],
  foreColor: 'white',
  size: '120%',
  marginLeft: -2,
};

CustomChart.propTypes = {
  labels: PropTypes.array.isRequired,
  seriesData: PropTypes.array.isRequired,
  chartColor: PropTypes.array,
  labelColor: PropTypes.array,
  foreColor: PropTypes.string,
  size: PropTypes.string,
  marginLeft: PropTypes.number,
};

export default CustomChart;
