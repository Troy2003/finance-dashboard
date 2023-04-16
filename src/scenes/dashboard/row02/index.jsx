import { useMemo } from 'react'
import DashboardBox from "@/components/DashboardBox";
import { useTheme, Box, Typography } from '@mui/material';
import { PieChart, Pie, XAxis, YAxis, ResponsiveContainer, LineChart, Line, CartesianGrid, Cell, ScatterChart, Scatter, Tooltip, ZAxis } from 'recharts';
import { products as productData, kpis as operationalData } from '@/data';
import Flexbetween from '@/components/Flexbetween';

const Row02 = () => {
    const { palette } = useTheme();
    const piaColors = [palette.background.default, palette.primary.light];
    const piaData = [
        { name: "Group A", value: 600 },
        { name: "Group B", value: 400 }
    ]
    const operationalExpenses = useMemo(() => {
        return (
            operationalData &&
            operationalData[0].monthlyData.map(({ month, operationalExpenses, nonOperationalExpenses }) => {
                return {
                    name: month.substring(0, 3),
                    "Operational Expenses": operationalExpenses.replace("$", ""),
                    "Non Operational Expenses": nonOperationalExpenses.replace("$", "")
                }
            })
        );
    }, [operationalData]);

    const productExpenseData = useMemo(() => {
        return (
            productData &&
            productData.map(({ _id, price, expense }) => {
                return {
                    _id,
                    price: price.replace("$", ""),
                    expense: expense.replace("$", "")
                }
            })
        );
    }, [operationalData]);

    return (
        <>
            <DashboardBox gridArea="d">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={operationalExpenses}
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
                        />
                        <YAxis
                            yAxisId="left"
                            tickLine={false}
                            axisLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            tickLine={false}
                            axisLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="Operational Expenses"
                            stroke={palette.primary.light}
                        />
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="Non Operational Expenses"
                            stroke={palette.secondary.light}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="e">
                <Flexbetween height="100%" gap="1.5rem">
                    <PieChart
                        width={100}
                        height={100}
                        margin={{
                            top: 0,
                            right: -10,
                            bottom: 10,
                            left: 0
                        }}
                    >
                        <Pie
                            stroke='none'
                            data={piaData}
                            innerRadius={18}
                            outerRadius={38}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {piaData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={piaColors[index]} />
                            ))}
                        </Pie>
                    </PieChart>
                    {/* FLEX BASIS IS BETTER VERSION OF WIDTH  */}
                    <Box flexBasis="40%" textAlign="center">
                        <Typography variant='h5'>Target Sales</Typography>
                        <Typography
                            variant='h3'
                            color={palette.text.secondary}
                        >
                            83
                        </Typography>
                        <Typography
                            variant='h6'
                            color={palette.text.disabled}
                        >
                            Finance goals of the campaign that is desired
                        </Typography>
                    </Box>
                    <Box flexBasis="40%">
                        <Typography variant='h5'>Losses In Revenue</Typography>
                        <Typography variant='h5'
                            color={palette.text.disabled}
                        >
                            Losses are down by 25%</Typography>
                        <Typography
                            variant='h5'
                            mt="0.5rem"
                            color={palette.text.secondary}
                        >
                            profit margins
                        </Typography>
                        <Typography
                            variant='h6'
                            color={palette.text.disabled}
                        >
                            Margines are up by 35% form last month
                        </Typography>
                    </Box>
                </Flexbetween>
            </DashboardBox>
            <DashboardBox gridArea="f">
                <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart
                        margin={{
                            top: 20,
                            right: 25,
                            bottom: 40,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke={palette.background.default} />
                        <XAxis
                            type="number"
                            dataKey="price"
                            name="price"
                            axisLine={false}
                            tickLine={false}
                            style={{ fontSize: '10px' }}
                            tickFormatter={(v) => `$${v}`}
                        />
                        <YAxis
                            type="number"
                            dataKey="expense"
                            name="expense"
                            axisLine={false}
                            tickLine={false}
                            style={{ fontSize: '10px' }}
                            tickFormatter={(v) => `$${v}`}
                        />
                        <ZAxis
                            type='number'
                            range={[20]}
                        />
                        <Tooltip formatter={(v) => `$${v}`} />
                        <Scatter name="Product Expense Ratio"
                            data={productExpenseData}
                            fill={palette.primary.light}
                        />
                    </ScatterChart>
                </ResponsiveContainer>
            </DashboardBox>
        </>
    )
}

export default Row02