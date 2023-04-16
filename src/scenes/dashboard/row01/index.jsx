import { useMemo } from 'react';
import { useTheme } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend, BarChart, Bar } from 'recharts';
import DashboardBox from "@/components/DashboardBox";
import { kpis } from '@/data';

const Row01 = () => {
    const { palette } = useTheme();
    const revenueExpenses = useMemo(() => {
        return (
            kpis &&
            kpis[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue.replace("$", ""),
                    expenses: expenses.replace("$", "")
                }
            })
        );
    }, [kpis]);

    const revenueProfit = useMemo(() => {
        return (
            kpis &&
            kpis[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue.replace("$", ""),
                    profit: (Number(revenue.replace("$", "")) - Number(expenses.replace("$", "")))
                }
            })
        );
    }, [kpis]);

    const revenue = useMemo(() => {
        return (
            kpis &&
            kpis[0].monthlyData.map(({ month, revenue }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue.replace("$", ""),
                }
            })
        );
    }, [kpis]);

    return (
        <>
            <DashboardBox gridArea="a">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={revenueExpenses}
                        margin={{
                            top: 15,
                            right: 25,
                            left: -10,
                            bottom: 10,
                        }}
                    >
                        <defs>
                            <linearGradient id='colorRevenue' x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor={palette.primary.light}
                                    stopOpacity={0.5}
                                />
                                <stop
                                    offset="95%"
                                    stopColor={palette.primary.light}
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={{ strokeWidth: "0" }}
                            style={{ fontSize: "10px" }}
                            domain={[8000, 24000]}
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            dot={true}
                            stroke={palette.primary.light}
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                        />
                        <Area
                            type="monotone"
                            dataKey="expenses"
                            dot={true}
                            stroke={palette.primary.light}
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="b">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={revenueProfit}
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
                        <Legend
                            height={20}
                            wrapperStyle={{
                                margin: "0 0 10px 0"
                            }}
                        />
                        <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="profit"
                            stroke={palette.primary.light}
                        />
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="revenue"
                            stroke={palette.secondary.light}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="c">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={revenue}
                        margin={{
                            top: 17,
                            right: 15,
                            left: -5,
                            bottom: 15,
                        }}
                    >
                        <defs>
                            <linearGradient
                                id='colorRevenue'
                                x1="0"
                                x2="0"
                                y1="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor={palette.primary.main}
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="5%"
                                    stopColor={palette.primary.main}
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} stroke={palette.background.default} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <Bar dataKey="revenue" fill='url(#colorRevenue)' />
                    </BarChart>
                </ResponsiveContainer>
            </DashboardBox>
        </>
    )
}

export default Row01