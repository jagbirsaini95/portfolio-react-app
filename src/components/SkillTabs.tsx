import React, { useState } from "react";
import { Container, Tabs, Tab, Box, Chip, Grid } from "@mui/material";
import { skills } from "../assets/constants";

// Custom TabPanel Component
const TabPanel = ({ value, index, children }: { value: number; index: number; children: React.ReactNode }) => {
    return (
        <Box role="tabpanel" hidden={value !== index} sx={{ p: 2 }}>
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </Box>
    );
};

const SkillTabs = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const categories = Object.keys(skills) as string[];

    return (
        <Container sx={{ mt: 3 }}>
            <Tabs
                value={activeTab}
                onChange={(_, newValue: number) => setActiveTab(newValue)}
                textColor="secondary"
                indicatorColor="secondary"
                variant="scrollable"
            >
                {categories.map((category, index) => (
                    <Tab key={index + category} label={category} />
                ))}
            </Tabs>

            {/* Tab Panels - Display Skills as a List */}
            {categories.map((category: string, index: number) => (
                <TabPanel key={index} value={activeTab} index={index}>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {skills[category].map((skill: string, skillIndex: number) => (
                            <Grid item key={skillIndex + skill}>
                                <Chip
                                    label={skill} color="secondary" />
                            </Grid>

                        ))}
                    </Box>
                </TabPanel>
            ))}
        </Container>
    );
};

export default SkillTabs;
