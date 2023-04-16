import { useState, useMemo } from 'react'
import { Box, Button, Typography, useTheme } from '@mui/material'
import { kpis as kpisData } from '@/data';
import DashboardBox from '@/components/DashboardBox';
import Flexbetween from '@/components/Flexbetween';
import { XAxis, YAxis, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend, Label } from 'recharts';
import regression, { DataPoint } from 'regression';

const Predictions = () => {
  const { palette } = useTheme();
  const [isPrediction, setIsPrediction] = useState(false);

  const formatedData = useMemo(() => {
    if (!kpisData) return [];

    const monthData = kpisData[0].monthlyData;

    const formated = monthData.map(({ revenue }, index) => {
      return [index, Number(revenue.replace("$", ""))]
    });

    const regressionLine = regression.linear(formated);

    return monthData.map(({ month, revenue }, index) => {
      return {
        name: month,
        "Actual Revenue": revenue,
        "Regression Line": regressionLine.points[index][1],
        "Predicted Revenue": regressionLine.predict(index + 12)[1]
      }
    });
  }, [kpisData]);


  return (
    <DashboardBox
      width="100%"
      height="83vh"
      padding="0.5rem"
    >
      <Flexbetween
        m="1rem 2.5rem"
      >
        <Box>
          <Typography variant='h3'>
            Revenue and Predictions
          </Typography>
          <Typography variant='h6'>
            charted revenue and predicted revenue based on a simple linear regression model
          </Typography>
        </Box>
        <Button
          onClick={() => setIsPrediction(state => !state)}
          sx={{
            color: palette.text.primary,
            bgcolor: palette.primary.main,
            boxShadow: '0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.4)'
          }}
        >
          Show Predicted Revenue for Next Year
        </Button>
      </Flexbetween>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formatedData}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 10,
          }}
        >
          <CartesianGrid vertical={false} stroke={palette.primary.main} />
          <XAxis
            dataKey="name"
            tickLine={false}
            style={{ fontSize: "10px" }}
          >
            <Label value="Months" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis
            domain={[12000, 26000]}
            tickLine={false}
            axisLine={false}
            style={{ fontSize: "10px" }}
          >
            <Label value="Revenu in USD" angle={-90} offset={-5} position="insideLeft" />
          </YAxis>
          <Legend
            verticalAlign='top'
          />
          <Line
            type="monotone"
            dataKey="Actual Revenue"
            stroke={palette.text.primary}
            strokeWidth={0}
            dot={{ strokeWidth: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Regression Line"
            stroke={palette.secondary.light}
            dot={false}
          />
          {isPrediction && (
            <Line
              type="monotone"
              dataKey="Predicted Revenue"
              stroke={palette.secondary.light}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  )
}

export default Predictions