import React from 'react'
import { Box, useTheme } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';
import DashboardBox from "@/components/DashboardBox";
import Flexbetween from "@/components/Flexbetween";

const Row03 = () => {
    const { palette } = useTheme();
    const piaColors = [palette.background.default, palette.primary.light];
    const piaData = [
        { name: "Group A", value: 600 },
        { name: "Group B", value: 400 }
    ]
    return (
        <>
            <DashboardBox gridArea="g"></DashboardBox>
            <DashboardBox gridArea="h"></DashboardBox>
            <DashboardBox gridArea="i">
                <Flexbetween
                    width="100%"
                    heigth="100%"
                    padding="0.5rem"
                >
                    <Box>
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
                    </Box>
                </Flexbetween>
            </DashboardBox>
            <DashboardBox gridArea="j"></DashboardBox>
        </>
    )
}

export default Row03